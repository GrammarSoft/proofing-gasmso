/*!
 * Copyright 2016-2021 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
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
const VERSION_PATCH = 2;
const PRODUCT_NAME = window.hasOwnProperty('PRODUCT_NAME') ? window.PRODUCT_NAME : 'Kukkuniiaat';
const PRODUCT_DOMAIN = window.hasOwnProperty('PRODUCT_DOMAIN') ? window.PRODUCT_DOMAIN : 'tinodidriksen.com';
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/kukkuniiaat/';
const ROOT_URL_GRAMMAR = 'https://tinodidriksen.com/spell-dev/kal/';

const VERSION = ''+VERSION_MAJOR+'.'+VERSION_MINOR+'.'+VERSION_PATCH;

const g_conf_defaults = {
	opt_onlyConfident: false,
	opt_ignUnknown: false,
	opt_ignUNames: false,
	opt_ignUComp: false,
	opt_ignUAbbr: false,
	opt_ignUOther: false,
	opt_ignMaj: false,
	opt_useDictionary: true,
	opt_color: false,
	opt_maybe: true,
	opt_green: false,
	opt_longExplanations: true,
	opt_mvNordic: false,
	opt_speak: true,
	opt_level: 3,
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
	window.open('https://oqaasileriffik.gl/ordbogi/?lang=kal&type=lexeme&lookup='+encodeURIComponent(word), 'Oqaasileriffik Katersat');
}

function impl_loadUserdata() {
}

function impl_addToDictionary(word) {
}

function impl_removeFromDictionary(word) {
}

function impl_attachTTS() {
}

let g_impl = {
	dataKeepalive: impl_dataKeepalive,
	startLogin: impl_startLogin,
	canGrammar: impl_canGrammar,
	canComma: impl_canComma,
	openDictionary: impl_openDictionary,
	loadUserdata: impl_loadUserdata,
	addToDictionary: impl_addToDictionary,
	removeFromDictionary: impl_removeFromDictionary,
	attachTTS: impl_attachTTS,
	hasSelection: function() {
		return true;
	},
	init: function(func) {
		func();
		//l10n_world();
	},
	};
