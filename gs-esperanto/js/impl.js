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

const VERSION_MAJOR = 1;
const VERSION_MINOR = 0;
const VERSION_PATCH = 0;
const PRODUCT_NAME = window.hasOwnProperty('PRODUCT_NAME') ? window.PRODUCT_NAME : 'Lingvohelpilo';
const PRODUCT_DOMAIN = window.hasOwnProperty('PRODUCT_DOMAIN') ? window.PRODUCT_DOMAIN : 'lingvohelpilo.visl.dk';
const ROOT_URL_SELF = 'https://'+PRODUCT_DOMAIN+'/gas/dev/gs-esperanto/';
const ROOT_URL_GRAMMAR = 'https://'+PRODUCT_DOMAIN+'/dev/';
const CADUCEUS_URL = 'wss://gramtrans.com/caduceus/';
const SIGNOUT_URL = ROOT_URL_GRAMMAR+'/logout?';

const VERSION = ''+VERSION_MAJOR+'.'+VERSION_MINOR+'.'+VERSION_PATCH;

const SERVICES = {
	Grammar: 'epoproof',
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
		opt_uiLang: 'eo',
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
	$('.optComma').prop('checked', false);
	$('.chkGrammarToComma').hide();
	$('.btnCheckComma').hide();
	$('.comma-specific').hide();
	g_tools.grammar = impl_canGrammar();
	g_tools.comma = impl_canComma();
	loginKeepalive(true);
}

function impl_canGrammar() {
	return SERVICES.Grammar;
}

function impl_canComma() {
	return false;
}

function impl_openDictionary(word) {
	g_impl.openExternal('https://vortaro.net/#'+encodeURIComponent(word)+'_kd', 'Plena Ilustrita Vortaro de Esperanto 2020');
}

function impl_loadUserdata() {
	if (g_anonymous) {
		return false;
	}

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
	if (g_anonymous) {
		return false;
	}
	_impl_callback({'a': 'dict-add', 'w': word});
}

function impl_removeFromDictionary(word) {
	if (g_anonymous) {
		return false;
	}
	_impl_callback({'a': 'dict-del', 'w': word});
}

function impl_beforeSendTexts(txt) {
	if (/[ŭŬĉĈĝĜĥĤĵĴŝŜ]/.test(txt)) {
		g_impl.has_diacritics = true;
	}
	return txt;
}

function impl_beforeParseResult(txt) {
	txt = txt.replace(/ £sentstop/g, ' £sentsplit');
	txt = txt.replace(/( £[^*\s]+)\*/g, '$1 £green'); // Trailing * means £green

	if (g_impl.has_diacritics) {
		let rx = / <R:\S+>/g;
		let ms = [];
		let m = null;
		while ((m = rx.exec(txt)) !== null) {
			ms.push(m);
		}
		for (let i=0 ; i<ms.length ; ++i) {
			m = m[i][0];
			let org = m;
			m = m.replace(/ux/g, 'ŭ');
			m = m.replace(/UX/ig, 'Ŭ');
			m = m.replace(/cx/g, 'ĉ');
			m = m.replace(/CX/ig, 'Ĉ');
			m = m.replace(/gx/g, 'ĝ');
			m = m.replace(/GX/ig, 'Ĝ');
			m = m.replace(/hx/g, 'ĥ');
			m = m.replace(/HX/ig, 'Ĥ');
			m = m.replace(/jx/g, 'ĵ');
			m = m.replace(/JX/ig, 'Ĵ');
			m = m.replace(/sx/g, 'ŝ');
			m = m.replace(/SX/ig, 'Ŝ');
			txt = txt.replace(org, m);
		}
	}
	return txt;
}

let g_impl = {
	matomo_sid: 16,
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
	has_diacritics: false,
	beforeSendTexts: impl_beforeSendTexts,
	beforeParseResult: impl_beforeParseResult,
	init: function(func) {
		func();
		//l10n_world();
	},
};
