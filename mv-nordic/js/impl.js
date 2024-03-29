/*!
 * Copyright 2016-2022 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Vitec MV (https://vitec-mv.com/)
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
const PRODUCT_NAME = window.hasOwnProperty('PRODUCT_NAME') ? window.PRODUCT_NAME : 'Grammateket';
const PRODUCT_DOMAIN = window.hasOwnProperty('PRODUCT_DOMAIN') ? window.PRODUCT_DOMAIN : 'grammateket.com';
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/mv-nordic/';
const ROOT_URL_GRAMMAR = 'https://kommaer.dk/mv-grammar/';
const CADUCEUS_URL = 'wss://gramtrans.com/caduceus/';
const SIGNOUT_URL = 'https://signon-test.vitec-mv.com/logout.php?return_to='+encodeURIComponent(ROOT_URL_GRAMMAR+'/logout.php')+'&sessionUid=';

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
	opt_mvNordic: true,
	opt_speak: true,
	opt_level: 3,
	// Swedish
	opt_ignVartVerb: false,
	opt_ignDomAll: false,
	opt_ignDomDefinite: false,
	opt_ignDomSubjobj: false,
	opt_ignDomPrep: false,
};

function impl_dataKeepalive() {
	return {a: 'keepalive', SessionID: g_access_token.sessionid};
}

function impl_startLogin() {
	loginKeepalive(true);
}

function impl_canGrammar() {
	return 'grammar';
}

function impl_canComma() {
	if (session.locale === 'da') {
		return 'comma';
	}
	return false;
}

function impl_openDictionary(word) {
	return impl_showDictionary(word);
}

function impl_loadUserdata() {
}

function impl_addToDictionary(word) {
}

function impl_removeFromDictionary(word) {
}

function itw_speak(text) {
	if (!g_conf.opt_speak) {
		return;
	}

	let data = {
		t: text,
	};
	$.post(ROOT_URL_GRAMMAR + 'callback.php?a=itw-speak', data).done(function(rv) {
		if (!rv.hasOwnProperty('result') || !rv.result.hasOwnProperty('value') || !rv.result.value.hasOwnProperty('mp3_url') || !rv.result.value.mp3_url) {
			console.log(this);
			//showError('ERR_ITW_SPEAK');
			return;
		}

		$('#speaker').attr('src', 'https://online.intowords.com' + rv.result.value.mp3_url).get(0).play();
	}).fail(function() {
		console.log(this);
		//showError('ERR_ITW_SPEAK');
	});
}

function impl_attachTTS(node) {
	if (!g_conf.opt_speak) {
		return;
	}

	let tns = findTextNodes(node);
	let ns = [];
	for (let i=0 ; i<tns.length ; ++i) {
		let n = tns[i];
		do {
			n = n.parentNode;
		} while(n && n.parentNode && !text_nodes.hasOwnProperty(n.nodeName));
		ns.push(n);
	}

	$(ns).addClass('itw_tts').mouseover(function() {
		let txt = $(this).text();
		if (g_tts_speaker) {
			clearTimeout(g_tts_speaker);
		}
		g_tts_speaker = setTimeout(function() {
			itw_speak(txt);
		}, 1000);
	}).mouseout(function() {
		if (g_tts_speaker) {
			clearTimeout(g_tts_speaker);
		}
		g_tts_speaker = null;
	}).on('touchstart', function() {
		++g_tts_tap;
	}).on('touchmove', function() {
		g_tts_tap = 0;
	}).on('touchend', function(e) {
		if (g_tts_tap >= 2) {
			if (g_tts_speaker) {
				clearTimeout(g_tts_speaker);
			}
			g_tts_speaker = null;

			itw_speak($(this).text());
			g_tts_tap = 0;

			e.preventDefault();
			return false;
		}
	});
}

let g_impl = {
	_callback: _impl_callback,
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
