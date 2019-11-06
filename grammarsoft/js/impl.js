/*!
 * Copyright 2016-2019 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

const VERSION_MAJOR = 1;
const VERSION_MINOR = 1;
const VERSION_PATCH = 0;
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/grammarsoft/';
const ROOT_URL_GRAMMAR = 'https://retmig.dk/grammar/';
const CADUCEUS_URL = 'wss://gramtrans.com/caduceus/';
const SIGNOUT_URL = ROOT_URL_GRAMMAR+'/logout?';

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
	loginKeepalive(true);
}

function impl_canGrammar() {
	return (g_access_hmac.sess_caps & (Defs.CAP_DANPROOF | Defs.CAP_DANPROOF_TRIAL | Defs.CAP_ADMIN));
}

function impl_canComma() {
	return (g_access_hmac.sess_caps & (Defs.CAP_COMMA | Defs.CAP_COMMA_TRIAL | Defs.CAP_ADMIN));
}

function impl_openDictionary(word) {
	window.open('https://ordnet.dk/ddo/ordbog?query='+encodeURIComponent(word), 'Den Danske Ordbog');
}

function itw_speak_attach() {
}
