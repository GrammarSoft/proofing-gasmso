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
	};

function _impl_findElement(prefix, word, suffix, func) {
	$('#working').show();
	let txt = findToSend(prefix, word, suffix);
	if (!txt) {
		showError('ERR_SELECT_NOTFOUND');
		return false;
	}
	console.info('_impl_findElement', txt);

	if (window.outlookContentHandler.findElement(txt)) {
		if (func) func();
		_impl_setContentAndReload().then(val => {
			$('#working').hide();
		});
		return true;
	}
	else {
		showError('Could not locate element');
	}
}

function _impl_getPromisifiedBodyContent(coercionType) {
	let item = Office.context.mailbox.item;
	let body = item.body;
	return new Promise((resolve, reject) => {
		body.getAsync(coercionType, {}, asyncResult => {
			if (asyncResult.status === "failed") {
				reject("getAsync(CoercionType.Text) failed with error: " + asyncResult.error.message);
			}
			else {
				resolve(asyncResult.value);
			}
		});
	});
}

function _impl_setPromisifiedBodyContent(coercionType, content) {
	let item = Office.context.mailbox.item;
	let body = item.body;
	return new Promise((resolve, reject) => {
		body.setAsync(content, {
			coercionType: coercionType
		}, asyncResult => {
			if (asyncResult.status === "failed") {
				reject("setAsync() failed with error: " + asyncResult.error.message);
			}
			else {
				resolve(asyncResult);
			}
		});
	});

}

function _impl_getPromisifiedBodyType(body) {
	return new Promise((resolve, reject) => {
		body.getTypeAsync(asyncResult => {
			if (asyncResult.status === "failed") {
				reject("getTypeAsync failed with error: " + asyncResult.error.message);
			}
			else {
				resolve(asyncResult.value);
			}
		});
	});
}

function _impl_outlookContentHandlerFactory(coercionType) {
	switch(coercionType) {
		case Office.CoercionType.Html:
			window.outlookContentHandler = new window.outlookHtmlHandler(Office.CoercionType.Html);
			break;
		case Office.CoercionType.Text:
			window.outlookContentHandler = new window.outlookTextHandler(Office.CoercionType.Text);
			break;
	}
}

function _impl_setContentAndReload(before, word, rpl, func) {
	return new Promise((resolve, reject) => {
		Office.onReady(info => {
			let coercionType = window.outlookContentHandler.getCoercionType();
			let beforeContent = window.outlookContentHandler.getContent();
			console.info('setContentAndReload set', beforeContent);
			_impl_setPromisifiedBodyContent(coercionType, beforeContent).then((val) => {
				_impl_getPromisifiedBodyContent(coercionType).then((content) => {
					console.info('setContentAndReload get', beforeContent);
					window.outlookContentHandler.setContent(content, true);

					if (func) {
						let funcParams = {
							before: before,
							after: window.outlookContentHandler.getTextContent(),
							rpl: rpl,
						};
						console.info('_impl_setBodyHTMLAndReload parms', funcParams);
						func(funcParams);
					}
					resolve(true);

				});
			});
		});
	});
}

function impl_selectInDocument(prefix, word, suffix) {
	_impl_findElement(prefix, word, suffix, didSelect);
}

function impl_replaceInDocument(prefix, word, rpl, suffix) {
	console.info('impl_replaceInDocument');
	console.info({
		prefix: prefix,
		word: word,
		rpl: rpl,
		suffix: suffix});

	if (_impl_findElement(prefix, word, suffix)) {
		$('#working').show();
		let before = window.outlookContentHandler.getTextContent();
		window.outlookContentHandler.replace(word, rpl);
		_impl_setContentAndReload(before, word, rpl, didReplace).then(val => {
			$('#working').hide();
		});
	}
	else {
		showError('Could not find node to replace');
	}

}

function impl_replaceInDocumentSilent(prefix, word, rpl, suffix) {
	console.info('impl_replaceInDocumentSilent');
	// console.info(prefix, word, rpl, suffix);
	if (_impl_findElement(prefix, word, suffix)) {
		$('#working').show();
		let before = window.outlookContentHandler.getTextContent();
		window.outlookContentHandler.replace(word, rpl);
		_impl_setContentAndReload(before, word, rpl, didReplaceSilent).then(val => {
			$('#working').hide();
		});
	}
	else {
		showError('Could not find node to replace');
	}
}

function impl_insertInDocument(prefix, word, rpl, suffix) {
	console.info('impl_insertInDocument');
	// console.info(prefix, word, rpl, suffix);
	if (_impl_findElement(prefix, word, suffix)) {
		$('#working').show();
		let before = window.outlookContentHandler.getTextContent();
		window.outlookContentHandler.insertText(word, rpl);
		_impl_setContentAndReload(before, word, rpl, didInsert).then(val => {
			$('#working').hide();
		});
	}
	else {
		showError('Could not find node');
	}
}

function impl_removeInDocument(prefix, word, rpl, suffix) {
	console.info('impl_removeInDocument');
	// console.info(prefix, word, rpl, suffix);
	if (_impl_findElement(prefix, word, suffix)) {
		$('#working').show();
		let before = window.outlookContentHandler.getTextContent();
		window.outlookContentHandler.replace(word, rpl);
		_impl_setContentAndReload(before, word, rpl, didRemove).then(val => {
			$('#working').hide();
		});
	}
	else {
		showError('Could not find node');
	}
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
		//console.log(_impl_options);
	}
}

function impl_showOptions(g_tool) {
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/options.html?host=outlook&tool='+g_tool, { width: 800, height: 600, displayInIframe: true }, _impl_showOptions_cb);
}

function impl_getSelectedPars() {
	showError("Selection is not supported");
}

function impl_getAllPars() {
	Office.context.mailbox.item.body.getTypeAsync(function(data) {
		_impl_storage.type = data.value;
		Office.context.mailbox.item.body.getAsync(_impl_storage.type, function(data) {
			_impl_storage.text = data.value;
			//console.log(_impl_storage);
		});
	});
}

function impl_showDictionary(text) {
	Office.context.ui.displayDialogAsync(ROOT_URL_SELF + '/html/dictionary.html?host=outlook&text='+text, { width: 800, height: 600, displayInIframe: true });
}

function impl_Init(func) {
	Office.initialize = function(reason) {
		$(document).ready(function() {
			_impl_storage.dom = document.implementation.createHTMLDocument('shadow');
			func();

			if (Office.context.host !== Office.HostType.Outlook) {
				//showError('Requires MS Outlook!');
				return;
			}
		});
	};
}

function impl_checkDone() {
	Office.onReady(info => {
		if (window.outlookContentHandler != null && typeof window.outlookContentHandler.getCoercionType === 'function') {
			let coercionType = window.outlookContentHandler.getCoercionType();
			if (coercionType == Office.CoercionType.Html) {
				/**
		 		 *  doing get -> set -> get on outlook to make sure that any
				 * 	changes to the email that the user might have done
				 *  are included
				 */
				_impl_getPromisifiedBodyContent(coercionType).then((content) => {
					window.outlookContentHandler.setContent(content, false);
					window.outlookContentHandler.mergeAllGrammarSoftInsertedSpanElementsInVirtualDom();
					let beforeContent = window.outlookContentHandler.getContent();
					console.info('impl_checkDone content', beforeContent);
					_impl_setPromisifiedBodyContent(coercionType, beforeContent).then((val) => {
						_impl_getPromisifiedBodyContent(coercionType).then((content) => {
							window.outlookContentHandler.setContent(content, false);
						});
					});
				});
			}
		}
	});
}

function impl_ignoreCurrent(word) {
	Office.onReady(info => {
		let coercionType = window.outlookContentHandler.getCoercionType();
		if (coercionType == Office.CoercionType.Html) {
			console.info('impl_ignoreCurrent', word);
			window.outlookContentHandler.removeCurrentSelection(word);
		}
	});
}
