/*!
 * Copyright 2016-2019 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
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
const VERSION_PATCH = 0;
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/kukkuniiaat/';
const ROOT_URL_GRAMMAR = 'https://tinodidriksen.com/spell-dev/kal/';

const VERSION = ''+VERSION_MAJOR+'.'+VERSION_MINOR+'.'+VERSION_PATCH;

/* exported g_conf_defaults */
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
	switchSidebar('#chkWelcomeGrammar');
}

function impl_canGrammar() {
	return true;
}

function impl_canComma() {
	return false;
}

function impl_openDictionary(word) {
	window.open('https://oqaasileriffik.gl/ordbogi/?lang=kal&type=lexeme&lookup='+encodeURIComponent(word), 'Oqaasileriffik Katersat');
}

function itw_speak_attach() {
}
