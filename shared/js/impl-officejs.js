/*!
 * Copyright 2016-2025 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * This project is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This project is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this project.  If not, see <http://www.gnu.org/licenses/>.
 */
'use strict';

let _impl_options = null;

function _impl_findElement_selectWord(state) {
	let rngs = state.sel.search(state.word.replace(/\u0005/g, ''));

	state.context.load(rngs, 'text');
	return state.context.sync().then(function () {
		console.log(state);
		if (!rngs.items.length) {
			showError('ERR_SELECT_NOTFOUND');
			return state.context.sync();
		}
		let rng = rngs.items[rngs.items.length - 1];
		rng.select();
		if (state.func) {
			return state.func(state, rng);
		}
		return state.context.sync();
	});
}

function _impl_findElement_pars(state) {
	let parss = [];
	for (let i=0 ; i<state.rngs.length ; ++i) {
		let pars = state.rngs[i].paragraphs;
		state.context.load(pars, 'text');
		parss.push(pars);
	}

	return state.context.sync().then(function () {
		for (let p=0 ; p<parss.length ; ++p) {
			let pars = parss[p].items;
			for (let i=0 ; i<pars.length ; ++i) {
				if (state.closer || pars[i].text === state.txt) {
					return state.context.sync().then(function () {
						let rngs = pars[i].getRange().split(Const.Split_Array);

						state.context.load(rngs, 'text');
						return state.context.sync().then(function () {
							rngs = rngs.items;
							state.prefix += state.word;
							let rx_pfx = new RegExp('.*' + escapeRegExp(state.prefix) + '['+Const.Split_String+']?\\s*$');
							//console.log(rx_pfx);
							state.par = pars[i];
							state.sel = rngs[0].getRange();

							let pfx = '';
							let ri = 0;
							for ( ; ri<rngs.length ; ++ri) {
								pfx += rngs[ri].text;
								//console.log(pfx);
								state.sel = state.sel.expandTo(rngs[ri]);
								if (state.closer) {
									if (rx_pfx.test(pfx)) {
										return _impl_findElement_selectWord(state);
									}
								}
								else if (pfx.length >= state.prefix.length && pfx.substr(0, state.prefix.length) === state.prefix) {
									return _impl_findElement_selectWord(state);
								}
							}

							showError('ERR_SELECT_NOTFOUND');
							return state.context.sync();
						});
					});
				}
			}
		}

		showError('ERR_SELECT_NOTFOUND');
		return state.context.sync();
	});
}

function _impl_findElement(prefix, word, suffix, func) {
	let txt = findToSend(prefix, word, suffix);
	if (!txt) {
		showError('ERR_SELECT_NOTFOUND');
		return false;
	}

	let state = {
		prefix: txt.prefix,
		word: txt.word,
		suffix: txt.suffix,
		txt: txt.t,
		func: func,
		closer: false,
		insert: false,
		};

	Word.run(function(context) {
		state.context = context;
		let body = state.context.document.body;
		state.rngs = body.search($.trim(state.txt.substr(0, 255)).replace(/\u0005/, ''));

		state.context.load(state.rngs, 'text');
		return state.context.sync().then(function () {
			state.rngs = state.rngs.items;
			if (state.rngs.length == 0) {
				let px = /\s(\S+\s\S+\s\S+\s*)$/.exec(state.prefix);
				if (px) {
					state.prefix = px[1];
				}
				let sx = /^(\s*\S+\s\S+\s\S+)\s/.exec(state.suffix);
				if (sx) {
					state.suffix = sx[1];
				}
				let txt = state.prefix + state.word + state.suffix;
				state.rngs = body.search(txt.replace(/\u0005/g, ''));

				state.context.load(state.rngs, 'text');
				return state.context.sync().then(function () {
					state.rngs = state.rngs.items;
					//console.log(state);
					if (state.rngs.length == 0) {
						showError('ERR_SELECT_NOTFOUND');
						return context.sync();
					}
					console.log('_impl_findElement close-context');
					state.closer = true;
					return _impl_findElement_pars(state);
				});
			}

			return _impl_findElement_pars(state);
		});
	}).catch(function(error) {
		console.log(error);
		showError(JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});
}

function impl_selectInDocument(prefix, word, suffix) {
	_impl_findElement(prefix, word, suffix, didSelect);
}

function _impl_reloadPar(state, rpl, func) {
	let before = state.par.text;
	let ss = state.par.search('  ');
	state.context.load(ss, 'text');
	return state.context.sync().then(function() {
		ss = ss.items;
		for (let si=0 ; si<ss.length ; ++si) {
			ss[si].insertText(' ', 'Replace');
		}

		state.context.load(state.par, 'text');
		return state.context.sync().then(function() {
			if (func) {
				func({before: before, after: state.par.text, rpl: rpl});
			}
		});
	});
}

function _impl_replaceHelper(state, rng, rpl, comment) {
	if (g_impl.oneshot) {
		state.context.document.changeTrackingMode = Word.ChangeTrackingMode.trackAll;
	}
	if (state.insert) {
		let pfx = common_prefix([rng.text, rpl]);
		let sfx = common_suffix([rng.text, rpl]);
		//console.log([pfx, sfx, rng.text, rpl]);
		if (pfx.length == 0) {
			rng = rng.getRange(Word.RangeLocation.start);
			rpl = rpl.substr(0, rpl.length - sfx.length);
		}
		else if (sfx.length == 0) {
			rng = rng.getRange(Word.RangeLocation.end);
			rpl = rpl.substr(pfx.length);
		}
		else {
			rng = rng.search(' ').getFirst().getRange(Word.RangeLocation.start);
			rpl = rpl.substring(pfx.length, rpl.length - sfx.length);
			if (!/^[,.!?;:]$/.test(rpl)) {
				rpl = ' '+rpl;
			}
		}
		//console.log([rng, rpl]);
	}
	rng.insertText(rpl, 'Replace');
	rng.select();
	if (g_impl.oneshot) {
		state.context.document.changeTrackingMode = Word.ChangeTrackingMode.off;
		if (comment) {
			let c = state.context.document.getSelection().insertComment(comment);
			c.load();
			c.set({
				//content: 'hubba bubba',
				contentRange: {bold: true, hyperlink: 'https://dr.dk/'},
			});
			console.log(c);
		}
	}
	return state.context;
}

function impl_replaceInDocument(prefix, word, rpl, suffix, comment) {
	_impl_findElement(prefix, word, suffix, function(state, rng) {
		return _impl_replaceHelper(state, rng, rpl, comment).sync().then(function() {
			return _impl_reloadPar(state, rpl, didReplace);
		});
	});
}

function impl_replaceInDocumentSilent(prefix, word, rpl, suffix, comment) {
	_impl_findElement(prefix, word, suffix, function(state, rng) {
		return _impl_replaceHelper(state, rng, rpl, comment).sync().then(function() {
			return _impl_reloadPar(state, rpl, didReplaceSilent);
		});
	});
}

function impl_insertInDocument(prefix, word, rpl, suffix, comment) {
	_impl_findElement(prefix, word, suffix, function(state, rng) {
		state.insert = true;
		return _impl_replaceHelper(state, rng, rpl, comment).sync().then(function() {
			return _impl_reloadPar(state, rpl, didInsert);
		});
	});
}

function impl_removeInDocument(prefix, word, rpl, suffix, comment) {
	_impl_findElement(prefix, word, suffix, function(state, rng) {
		return _impl_replaceHelper(state, rng, rpl, comment).sync().then(function() {
			return _impl_reloadPar(state, rpl, didRemove);
		});
	});
}

function impl_commentInDocument(prefix, word, rpl, suffix, comment) {
	_impl_findElement(prefix, word, suffix, function(state, rng) {
		if (comment) {
			state.context.document.getSelection().insertComment(comment);
		}
		return _impl_reloadPar(state, rpl, didComment);
	});
}

function _impl_showOptions_mh(arg) {
	_impl_options.close();
	showError(arg.message);
}

function _impl_showOptions_eh(arg) {
	// In addition to general system errors, there are 2 specific errors
	// and one event that you can handle individually.
	switch (arg.error) {
	case 12002:
		showError('Cannot load URL, no such page or bad URL syntax.');
		break;
	case 12003:
		showError('HTTPS is required.');
		break;
	case 12006:
		// The dialog was closed, typically because the user the pressed X button.
		break;
	default:
		showError('Undefined error in dialog window');
		break;
	}
}

function _impl_showOptions_cb(asyncResult) {
	if (asyncResult.status == 'failed') {
		switch (asyncResult.error.code) {
		case 12004:
			showError('Domain is not trusted');
			break;
		case 12005:
			showError('HTTPS is required');
			break;
		case 12007:
			showError('A dialog is already opened.');
			break;
		default:
			showError(asyncResult.error.message);
			break;
		}
	}
	else {
		_impl_options = asyncResult.value;
		_impl_options.addEventHandler(Office.EventType.DialogMessageReceived, _impl_showOptions_mh);
		_impl_options.addEventHandler(Office.EventType.DialogEventReceived, _impl_showOptions_eh);
		console.log(_impl_options);
	}
}

function impl_showOptions(g_tool) {
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/options.html?host=msoffice&tool='+g_tool, { width: 80, height: 80, displayInIframe: true }, _impl_showOptions_cb);
}

function impl_recheckSelectedPars() {
	Word.run(function(context) {
		let pars = context.document.getSelection().paragraphs;
		context.load(pars, 'text');
		return context.sync().then(function () {
			let elms = [];
			pars = pars.items;
			for (let p = 0; p < pars.length; ++p) {
				let txt = $.trim(pars[p].text);
				if (txt.length) {
					elms.push({i: elms.length+1, t: pars[p].text});
				}
			}
			recheckParagraphs(elms);
		});
	}).catch(function(error) {
		showError(JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});
}

function _impl_getPars(context, pars) {
	context.load(pars, 'text');
	return context.sync().then(function () {
		let elms = [];
		pars = pars.items;
		for (let p = 0; p < pars.length; ++p) {
			let txt = $.trim(pars[p].text);
			if (txt.length) {
				elms.push({i: elms.length+1, t: pars[p].text});
			}
		}
		checkParagraphs(elms);
	});
}

function impl_getSelectedPars() {
	Word.run(function(context) {
		let pars = context.document.getSelection().paragraphs;
		return _impl_getPars(context, pars);
	}).catch(function(error) {
		showError(JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});
}

function impl_getAllPars() {
	Word.run(function(context) {
		let pars = context.document.body.paragraphs;
		return _impl_getPars(context, pars);
	}).catch(function(error) {
		showError(JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});
}

function impl_showDictionary(text) {
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/dictionary.html?host=msoffice&text='+text, { width: 80, height: 80, displayInIframe: true });
}

/*
function impl_getSelectedText(func) {
	Word.run(function(context) {
		let rv = [];
		let s = context.document.getSelection();
		let pars = s.paragraphs;
		for (let i=0 ; i<pars.length ; ++i) {
			let r = pars[i].getRange().split([' ']);
			let sel = r.intersectWith(s);
		}
		return func(rv);
	}).catch(function(error) {
		showError(JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});
}
//*/

g_impl.init = function(func) {
	if (typeof Office === 'undefined') {
		console.log('Waiting for Office to load');
		setTimeout(function() { g_impl.init(func); }, 200);
		return;
	}
	Office.initialize = function(reason) {
		$(document).ready(function() {
			func();
			//l10n_world();

			if (!Office.context.requirements.isSetSupported('WordApi', '1.1')) {
				//showError('Requires Word 2016 or later!');
				return;
			}
		});
	};
};

g_impl.loaded = true;
