/*!
 * Copyright 2016-2024 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

function _impl_findElement(prefix, word, suffix) {
	let txt = findToSend(prefix, word, suffix);
	if (!txt) {
		showError('ERR_SELECT_NOTFOUND');
		return false;
	}

	return {prefix: txt.prefix, middle: txt.word, suffix: txt.suffix};
}

function _impl_uxpMessage(a, rv, rpl) {
	window.uxpHost.postMessage({a: a, r: {
		px: rv.prefix,
		md: rv.middle,
		sx: rv.suffix,
		rpl: rpl,
	}});
}

function impl_selectInDocument(prefix, middle, suffix) {
	let rv = _impl_findElement(prefix, middle, suffix);
	_impl_uxpMessage('selectInDocument', rv, '');
}

function impl_replaceInDocument(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	_impl_uxpMessage('replaceInDocument', rv, rpl);
}

function impl_replaceInDocumentSilent(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	_impl_uxpMessage('replaceInDocumentSilent', rv, rpl);
}

function impl_insertInDocument(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	_impl_uxpMessage('insertInDocument', rv, rpl);
}

function impl_removeInDocument(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	if (rv.prefix.slice(-1) == ' ') {
		rv.prefix = rv.prefix.slice(0, -1);
		rv.middle = ' ' + rv.middle;
	}
	else if (rv.suffix.slice(0, 1) == ' ') {
		rv.suffix = rv.suffix.slice(1);
		rv.middle = rv.middle + ' ';
	}
	rpl = '';
	_impl_uxpMessage('removeInDocument', rv, rpl);
}

function impl_showOptions(g_tool) {
	window.uxpHost.postMessage({a: 'showOptions', w: g_tool});
}

function impl_recheckSelectedPars() {
	window.uxpHost.postMessage({a: 'recheckSelectedPars'});
}

function impl_getSelectedPars() {
	window.uxpHost.postMessage({a: 'getSelectedPars'});
}

function impl_getAllPars() {
	window.uxpHost.postMessage({a: 'getAllPars'});
}

function impl_showDictionary(text) {
	window.uxpHost.postMessage({a: 'showDictionary', t: text});
}

let _g_impl_gst_func = null;
function impl_getSelectedText(func) {
	_g_impl_gst_func = func;
	window.uxpHost.postMessage({a: 'getSelectedText'});
}

function _impl_eventListener(e) {
	e = e.data;
	//console.log(e);

	if (e.a === 'init') {
		// Of the non-English InDesign UI languages, we only support Danish and German
		if (e.locale == 'DANISH_LOCALE') {
			session.locale = 'da';
		}
		else if (e.locale == 'GERMAN_LOCALE') {
			session.locale = 'de';
		}
	}
	else if (e.a === 'getAllPars' || e.a === 'getSelectedPars') {
		checkParagraphs(e.ps);
	}
	else if (e.a === 'recheckSelectedPars') {
		recheckParagraphs(e.ps);
	}
	else if (e.a === 'selectInDocument') {
		didSelect();
	}
	else if (e.a === 'replaceInDocument') {
		didReplace(e.d);
	}
	else if (e.a === 'replaceInDocumentSilent') {
		didReplaceSilent(e.d);
	}
	else if (e.a === 'insertInDocument') {
		didInsert(e.d);
	}
	else if (e.a === 'removeInDocument') {
		didRemove(e.d);
	}
	else if (e.a === 'getSelectedText') {
		_g_impl_gst_func(e.d);
	}
	else if (e.a === 'showError') {
		showError(e.e);
	}
}

window.addEventListener('message', _impl_eventListener);

let _g_adobe_init = g_impl.init;
g_impl.init = function(func) {
	_g_adobe_init(func);
	window.uxpHost.postMessage({a: 'init'});
};

g_impl.openExternal = function(url) {
	window.uxpHost.postMessage({a: 'openExternal', url: url});
};
