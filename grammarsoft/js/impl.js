/*!
 * Copyright 2016-2024 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

const VERSION_MAJOR = 2;
const VERSION_MINOR = 0;
const VERSION_PATCH = 0;
const PRODUCT_NAME = window.hasOwnProperty('PRODUCT_NAME') ? window.PRODUCT_NAME : 'RetMig & Kommaforslag';
const PRODUCT_DOMAIN = window.hasOwnProperty('PRODUCT_DOMAIN') ? window.PRODUCT_DOMAIN : 'retmig.dk';
const ROOT_URL_SELF = 'https://'+PRODUCT_DOMAIN+'/gas/dev/grammarsoft/';
const ROOT_URL_GRAMMAR = 'https://'+PRODUCT_DOMAIN+'/grammar/';
const CADUCEUS_URL = 'wss://gramtrans.com/caduceus/';
const SIGNOUT_URL = ROOT_URL_GRAMMAR+'/logout?';

const VERSION = ''+VERSION_MAJOR+'.'+VERSION_MINOR+'.'+VERSION_PATCH;

const SERVICES = {
	Comma: 'comma',
	Grammar: 'danproof',
};

const g_options_default = {
	config: {
		opt_useDictionary: true,
		opt_color: false,
		opt_confidential: false,
		opt_maybe: true,
		opt_longExplanations: true,
		opt_showAnalysis: false,
		opt_speak: false,
		opt_uiLang: 'da',
	},
	types: {},
};

function _impl_callback(data) {
	if (typeof data === 'undefined' || !data) {
		data = {};
	}
	return $.ajax({
		url: ROOT_URL_GRAMMAR + '/callback.php',
		type: 'POST',
		dataType: 'json',
		headers: {HMAC: g_access_token.hmac},
		data: data,
	});
}

function impl_dataKeepalive() {
	return {a: 'keepalive'};
}

function impl_startLogin() {
	$('.btnLanguages').hide();
	loginKeepalive(true);
}

function impl_canGrammar() {
	if (g_access_hmac.sess_caps & (Defs.CAP_DANPROOF | Defs.CAP_DANPROOF_TRIAL | Defs.CAP_ADMIN)) {
		return SERVICES.Grammar;
	}
	return false;
}

function impl_canComma() {
	if (g_access_hmac.sess_caps & (Defs.CAP_COMMA | Defs.CAP_COMMA_TRIAL | Defs.CAP_ADMIN)) {
		return SERVICES.Comma;
	}
	return false;
}

function impl_openDictionary(word) {
	g_impl.openExternal('https://ordnet.dk/ddo/ordbog?query='+encodeURIComponent(word), 'Den Danske Ordbog');
}

function impl_loadUserdata() {
	let svcs = object_join(SERVICES, ',');

	_impl_callback({'a': 'options-load', 's': svcs}).done(function(rv) {
		if (!rv.hasOwnProperty('options')) {
			return;
		}

		let rvs = [];

		for (let s in rv.options) {
			delete rv.options[s]['_loaded'];
			g_options[s] = object_copy(rv.options[s]);
			g_options_json[s] = JSON.stringify(g_options[s]);
			ls_set_try('options-'+s, g_options_json[s]);
			rvs.push(loadOptions(s));
		}

		['config', 'types'].forEach(function(key) {
			_live_options[key] = object_copy(g_options_default[key]);
			for (let i=0 ; i<rvs.length ; ++i) {
				for (let k in rvs[i][key]) {
					_live_options[key][k] = rvs[i][key][k];
				}
			}
		});
	});

	_impl_callback({'a': 'dict-load'}).done(function(rv) {
		if (!rv.hasOwnProperty('dict')) {
			return;
		}

		for (let i=0 ; i<rv.dict.length ; ++i) {
			let word = rv.dict[i];
			if (g_dictionary.hasOwnProperty(word)) {
				continue;
			}
			//console.log(`Add to dict: ${word}`);
			g_dictionary[word] = true;
			_live_dictionary[word] = true;
			_live_dictionary[uc_first(word)] = true;
			_live_dictionary[word.toUpperCase()] = true;
		}

		g_dictionary_json = JSON.stringify(g_dictionary);
		ls_set_try('dictionary', g_dictionary_json);
	});
}

function impl_addToDictionary(word) {
	_impl_callback({'a': 'dict-add', 'w': word});
}

function impl_removeFromDictionary(word) {
	_impl_callback({'a': 'dict-del', 'w': word});
}

let g_impl = {
	matomo_sid: 2,
	callback: _impl_callback,
	dataKeepalive: impl_dataKeepalive,
	startLogin: impl_startLogin,
	canGrammar: impl_canGrammar,
	canComma: impl_canComma,
	openDictionary: impl_openDictionary,
	loadUserdata: impl_loadUserdata,
	addToDictionary: impl_addToDictionary,
	removeFromDictionary: impl_removeFromDictionary,
	attachTTS: function() {},
	hasSelection: function() {
		return true;
	},
	init: function(func) {
		func();
		//l10n_world();
	},
	};
