/*!
 * Copyright 2016-2018 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Eckhard Bick <eckhard.bick@gmail.com>
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

function _impl_findElement(prefix, word, suffix, func) {
	let txt = findToSend(prefix, word, suffix);
	if (!txt) {
		showError('ERR_SELECT_NOTFOUND');
		return false;
	}

	prefix = txt.prefix;
	word = txt.word;
	suffix = txt.suffix;
	txt = txt.t;

	Word.run(function(context) {
		let body = context.document.body;
		let rngs = body.search($.trim(txt.substr(0, 255)));

		context.load(rngs, 'text');
		return context.sync().then(function () {
			rngs = rngs.items;
			if (rngs.length == 0) {
				showError('ERR_SELECT_NOTFOUND');
				return context.sync();
			}

			let parss = [];
			for (let i=0 ; i<rngs.length ; ++i) {
				let pars = rngs[i].paragraphs;
				context.load(pars, 'text');
				parss.push(pars);
			}

			return context.sync().then(function () {
				for (let p=0 ; p<parss.length ; ++p) {
					let pars = parss[p].items;
					for (let i=0 ; i<pars.length ; ++i) {
						if (pars[i].text === txt) {
							return context.sync().then(function () {
								let rngs = pars[i].getRange().split(Const.Split_Array);

								context.load(rngs, 'text');
								return context.sync().then(function () {
									rngs = rngs.items;
									prefix += word;
									let sel = rngs[0].getRange();

									let pfx = '';
									let ri = 0;
									for ( ; ri<rngs.length ; ++ri) {
										pfx += rngs[ri].text;
										sel = sel.expandTo(rngs[ri]);
										if (pfx.length >= prefix.length && pfx.substr(0, prefix.length) === prefix) {
											let rngs = sel.search(word);

											context.load(rngs, 'text');
											return context.sync().then(function () {
												let rng = rngs.items[rngs.items.length - 1];
												rng.select();
												if (func) {
													return func(context, pars[i], rng);
												}
												return context.sync();
											});
										}
									}

									showError('ERR_SELECT_NOTFOUND');
									return context.sync();
								});
							});
						}
					}
				}

				showError('ERR_SELECT_NOTFOUND');
				return context.sync();
			});
		});
	}).catch(function(error) {
		showError(JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});
}

function impl_selectInDocument(prefix, word, suffix) {
	_impl_findElement(prefix, word, suffix, didSelect);
}

function _impl_reloadPar(context, par, rpl, func) {
	let before = par.text;
	let ss = par.search('  ');
	context.load(ss, 'text');
	return context.sync().then(function() {
		ss = ss.items;
		for (let si=0 ; si<ss.length ; ++si) {
			ss[si].insertText(' ', 'Replace');
		}

		context.load(par, 'text');
		return context.sync().then(function() {
			if (func) {
				func({before: before, after: par.text, rpl: rpl});
			}
		});
	});
}

function impl_replaceInDocument(prefix, word, rpl, suffix) {
	_impl_findElement(prefix, word, suffix, function(context, par, rng) {
		rng.insertText(rpl, 'Replace');
		return _impl_reloadPar(context, par, rpl, didReplace);
	});
}

function impl_replaceInDocumentSilent(prefix, word, rpl, suffix) {
	_impl_findElement(prefix, word, suffix, function(context, par, rng) {
		rng.insertText(rpl, 'Replace');
		return _impl_reloadPar(context, par, rpl, didReplaceSilent);
	});
}

function impl_insertInDocument(prefix, word, rpl, suffix) {
	_impl_findElement(prefix, word, suffix, function(context, par, rng) {
		rng.insertText(rpl, 'Replace');
		return _impl_reloadPar(context, par, rpl, didInsert);
	});
}

function impl_removeInDocument(prefix, word, rpl, suffix) {
	_impl_findElement(prefix, word, suffix, function(context, par, rng) {
		rng.insertText(rpl, 'Replace');
		return _impl_reloadPar(context, par, rpl, didRemove);
	});
}

function impl_getState() {
	getState({session: {locale: 'da'}});
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
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/options.html?tool='+g_tool, { width: 800, height: 600, displayInIframe: true }, _impl_showOptions_cb);
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
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/dictionary.html?text='+text, { width: 800, height: 600, displayInIframe: true });
}

function impl_Init(func) {
	Office.initialize = function(reason) {
		$(document).ready(function() {
			func();

			if (!Office.context.requirements.isSetSupported('WordApi', '1.1')) {
				//showError('Requires Word 2016 or later!');
				return;
			}
		});
	};
	l10n_world();
}
