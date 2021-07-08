/*!
 * Copyright 2016-2021 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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
let _impl_storage = {
	type: null,
	text: null,
	dom: null,
	nodes: [],
	seenReply: false,
	};

function _impl_actInDocument(prefix, word, rpl, suffix, func) {
	let txt = findToSend(prefix, word, suffix);
	if (!txt) {
		showError('ERR_SELECT_NOTFOUND');
		return false;
	}

	_impl_getEmail(function() {
		if (/^[ \t]/.test(rpl) && /[ \t]$/.test(txt.prefix)) {
			rpl = rpl.replace(/^[ \t]+/, '');
		}
		if (/^[ \t]/.test(txt.suffix) && /[ \t]$/.test(rpl)) {
			rpl = rpl.replace(/[ \t]+$/, '');
		}

		let did_replace = 0;
		for (let i=0 ; i<_impl_storage.nodes.length ; ++i) {
			let rv = findAndReplaceDOMText(_impl_storage.nodes[i], {
				preset: 'prose',
				find: txt.prefix + txt.word + txt.suffix,
				replace: txt.prefix + rpl + txt.suffix,
				});
			did_replace += rv.reverts.length;
		}

		if (!did_replace) {
			console.log([rv, txt, rpl]);
			showError('ERR_SELECT_NOTFOUND');
			return false;
		}

		_impl_setEmail(function() {
			func({before: txt.t, after: txt.prefix + rpl + txt.suffix, rpl: rpl});
		});
	});
}

function impl_selectInDocument(prefix, word, suffix) {
	console.log('impl_selectInDocument');
	didSelect();
}

function impl_replaceInDocument(prefix, word, rpl, suffix) {
	console.log('impl_replaceInDocument');
	return _impl_actInDocument(prefix, word, rpl, suffix, didReplace);
}

function impl_replaceInDocumentSilent(prefix, word, rpl, suffix) {
	console.log('impl_replaceInDocumentSilent');
	return _impl_actInDocument(prefix, word, rpl, suffix, didReplaceSilent);
}

function impl_insertInDocument(prefix, word, rpl, suffix) {
	console.log('impl_insertInDocument');
	return _impl_actInDocument(prefix, word, rpl, suffix, didInsert);
}

function impl_removeInDocument(prefix, word, rpl, suffix) {
	console.log('impl_removeInDocument');
	return _impl_actInDocument(prefix, word, rpl, suffix, didRemove);
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
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/options.html?host=outlook&tool='+g_tool, { width: 800, height: 600, displayInIframe: true }, _impl_showOptions_cb);
}

function impl_getSelectedPars() {
	showError('ERR_CANNOT_SELECT');
}

function _impl_filterNodes(node) {
	if (node.nodeType == 1) {
		if (node.hasAttribute('id') && node.getAttribute('id') === 'Signature') {
			return false;
		}
		if (node.hasAttribute('name') && node.getAttribute('name') === '_MailAutoSig') {
			return false;
		}
		if (node.hasAttribute('itemtype') && node.getAttribute('itemtype').indexOf('QuotedText') !== -1) {
			return false;
		}
		if (node.hasAttribute('name') && node.getAttribute('name') === '_MailOriginal') {
			_impl_storage.seenReply = true;
			return false;
		}
	}
	return !_impl_storage.seenReply;
}

function _impl_getEmail(func) {
	let reply = /^\s*>/;

	Office.context.mailbox.item.body.getTypeAsync(function(data) {
		_impl_storage.type = data.value;
		Office.context.mailbox.item.body.getAsync(_impl_storage.type, function(data) {
			let value = data.value;
			value = value.replace(/\r\n/g, '\n').replace(/\r+/g, '');
			console.log([value]);

			if (_impl_storage.type === Office.CoercionType.Text) {
				value = escHTML(value);
				value = value.replace(/[ \t]*\n[ \t]*\n/g, '</p><p>');
				value = value.replace(/[ \t]*\n/g, '<br>\n');
				value = '<p>'+value+'</p>';
			}
			else {
				value = value.replace(/(\w)\n(\w)/g, '$1 $2');
				value = value.replace(/(\w)\n/g, '$1 ');
				value = value.replace(/\n(\w)/g, ' $1');
				value = value.replace(/([.,;:!?])\n/g, '$1 ');
				value = value.replace(/\n([.,;:!?])/g, ' $1');
				value = value.replace(/\n( )/g, '$1');
				value = value.replace(/( )\n/g, '$1');
				value = value.replace(/\n/g, ' ');
				value = value.replace(/<o:p><\/o:p>/g, '').replace(/<span> <\/span>/g, ' ');
				value = value.replace(/  +/g, ' ');
				value = value.replace(/="x_/g, '="').replace(/ x_([A-Z])/g, ' $1');
			}
			console.log([value]);

			_impl_storage.text = value;
			_impl_storage.dom = (new DOMParser()).parseFromString(value, 'text/html');

			_impl_storage.seenReply = false;
			let tns = findTextNodes(_impl_storage.dom.body, _impl_filterNodes);
			let ns = [];
			for (let i=0 ; i<tns.length ; ++i) {
				let n = tns[i];
				do {
					n = n.parentNode;
				} while(n && n.parentNode && !text_nodes.hasOwnProperty(n.nodeName));

				if (reply.test(n.textContent)) {
					continue;
				}

				// Only add unseen parent nodes
				if (ns.indexOf(n) === -1) {
					ns.push(n);
				}
			}

			// Deduplicate found parent nodes, and mark the unique ones for tracking
			_impl_storage.nodes = [];
			let elms = [];
			for (let i=0 ; i<ns.length ; ++i) {
				let p = ns[i];
				do {
					p = p.parentNode;
					if (ns.indexOf(p) !== -1) {
						console.log(['Skipping node with a parent already in the set', ns[i]]);
						ns[i] = null;
						break;
					}
				} while (p && p.parentNode);

				if (ns[i]) {
					_impl_storage.nodes.push(ns[i]);
					//ns[i].setAttribute('data-gs-id', elms.length+1);
					elms.push({i: elms.length+1, t: ns[i].textContent});
				}
			}

			console.log(_impl_storage);
			func(elms);
		});
	});
}

function _impl_setEmail(func) {
	let email = '';
	if (_impl_storage.text.indexOf('</html>') === -1) {
		email = (new XMLSerializer()).serializeToString(_impl_storage.dom.body);
		email = email.replace(/^<body[^>]*>/, '').replace(/<\/body>$/g, '');
	}
	else {
		email = (new XMLSerializer()).serializeToString(_impl_storage.dom);
	}
	if (_impl_storage.type === Office.CoercionType.Text) {
		email = email.replace(/<\/p><p>/g, '\n\n');
		email = email.replace(/<br *\/?>([^\n]+)\n/g, '$1<br>\n');
		email = email.replace(/[ \t]*<br *\/?>[ \t]*\n*/g, '\n');
		email = email.replace(/^<p>/g, '');
		email = email.replace(/<\/p>$/g, '');
		email = decHTML(email);
	}
	console.log([email]);
	Office.context.mailbox.item.body.setAsync(email, {coercionType: _impl_storage.type}, func);
}

function impl_getAllPars() {
	_impl_getEmail(checkParagraphs);
}

function impl_showDictionary(text) {
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/dictionary.html?host=outlook&text='+text, { width: 800, height: 600, displayInIframe: true });
}

function impl_hasSelection() {
	return false;
}

function impl_Init(func) {
	Office.initialize = function(reason) {
		$(document).ready(function() {
			func();

			// <br> should not block text flow
			delete findAndReplaceDOMText.NON_CONTIGUOUS_PROSE_ELEMENTS.br;

			if (Office.context.host !== Office.HostType.Outlook) {
				//showError('Requires MS Outlook!');
				return;
			}
		});
	};
}
