/*!
 * Copyright 2016-2024 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
 * Linguistic backend by Oqaasileriffik (https://oqaasileriffik.gl/)
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

const VERSION_MAJOR = 1;
const VERSION_MINOR = 0;
const VERSION_PATCH = 4;
const PRODUCT_NAME = window.hasOwnProperty('PRODUCT_NAME') ? window.PRODUCT_NAME : 'Kukkuniiaat';
const PRODUCT_DOMAIN = window.hasOwnProperty('PRODUCT_DOMAIN') ? window.PRODUCT_DOMAIN : 'kukkuniiaat.gl';
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/kukkuniiaat/';
const ROOT_URL_GRAMMAR = 'https://kukkuniiaat.gl/dev/';

const VERSION = ''+VERSION_MAJOR+'.'+VERSION_MINOR+'.'+VERSION_PATCH;

const SERVICES = {
	Grammar: 'grammar',
};

const g_options_default = {
	config: {
		opt_useDictionary: true,
		opt_color: false,
		opt_confidential: false,
		opt_maybe: true,
		opt_longExplanations: true,
		opt_speak: false,
		opt_uiLang: 'da',
	},
	types: {},
};

let g_seen_preface = false;

function impl_dataKeepalive() {
	return {a: 'keepalive'};
}

function impl_startLogin() {
	Defs.MAX_RQ_SIZE = 1024;
	$('.optComma').prop('checked', false);
	$('.chkGrammarToComma').hide();
	$('.btnCheckComma').hide();
	$('.comma-specific').hide();
	g_tools.grammar = impl_canGrammar();
	g_tools.comma = impl_canComma();

	//$('.btnOptions').show(); // Not quite ready yet
	if (g_seen_preface) {
		switchSidebar('#chkWelcomeGrammar');
	}
	else {
		g_seen_preface = true;
		switchSidebar('#chkWelcomePreface');
	}
}

function impl_canGrammar() {
	return 'grammar';
}

function impl_canComma() {
	return false;
}

function impl_openDictionary(word) {
	g_impl.openExternal('https://ordbog.gl/?st='+encodeURIComponent(word), 'Kalaallisut ordbogit');
}

function impl_loadUserdata() {
}

function impl_addToDictionary(word) {
}

function impl_removeFromDictionary(word) {
}

function impl_attachTTS() {
}

function _impl_expandSelToWord(sel) {
	sel.prefix = sel.p.substr(0, sel.i);
	sel.suffix = sel.p.substr(sel.i + sel.t.length);

	while (!/^[\s\n]/.test(sel.t) && /[a-zA-Z0-9æøåÆØÅ\u00AD\u2010]$/i.test(sel.prefix)) {
		sel.t = sel.prefix.slice(-1) + sel.t;
		sel.prefix = sel.prefix.slice(0, -1);
	}

	while (!/[\s\n]$/.test(sel.t) && /^[a-zA-Z0-9æøåÆØÅ\u00AD\u2010]/i.test(sel.suffix)) {
		sel.t += sel.suffix.slice(0, 1);
		sel.suffix = sel.suffix.slice(1);
	}

	return sel;
}

function impl_hyphenate(sels) {
	for (let i=0 ; i<sels.length ; ++i) {
		let sel = _impl_expandSelToWord(sels[i]);

		// Note this also removes existing U+002D Hyphen Minus
		let h = sel.t.replace(/[-\u00ad\u2010]+/g, '');
		h = kal_hyphenate(h);
		if ($('.chkHyphenateHard').prop('checked')) {
			h = h.replace(/\u00ad/g, '\u2010'); // Replace all U+00AD Soft Hyphen with U+2010 Hyphen
		}
		to_send = [{t: sel.p}];
		impl_replaceInDocumentSilent(sel.prefix, sel.t, h, sel.suffix);
	}
}

function impl_hyphenateUndo(sels) {
	for (let i=0 ; i<sels.length ; ++i) {
		let sel = _impl_expandSelToWord(sels[i]);

		// Only wipe Soft Hyphen and Hyphen, because we didn't add U+002D Hyphen Minus
		let h = sel.t.replace(/[\u00AD\u2010]+/g, '');
		to_send = [{t: sel.p}];
		impl_replaceInDocumentSilent(sel.prefix, sel.t, h, sel.suffix);
	}
}

let g_impl = {
	loaded: false,
	matomo_sid: 5,
	dataKeepalive: impl_dataKeepalive,
	startLogin: impl_startLogin,
	canGrammar: impl_canGrammar,
	canComma: impl_canComma,
	openDictionary: impl_openDictionary,
	loadUserdata: impl_loadUserdata,
	addToDictionary: impl_addToDictionary,
	removeFromDictionary: impl_removeFromDictionary,
	attachTTS: impl_attachTTS,
	hyphenate: impl_hyphenate,
	hyphenateUndo: impl_hyphenateUndo,
	hasSelection: function() {
		return true;
	},
	init: function(func) {
		MATOMO_ROOT = '//oqaasileriffik.gl/matomo/';
		func();
		//l10n_world();
	},
};
