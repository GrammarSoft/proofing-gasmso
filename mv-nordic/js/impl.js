/*!
 * Copyright 2016-2019 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

const VERSION_MAJOR = 1;
const VERSION_MINOR = 1;
const VERSION_PATCH = 0;
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/mv-nordic/';
const ROOT_URL_GRAMMAR = 'https://kommaer.dk/mv-grammar/';
const CADUCEUS_URL = 'wss://gramtrans.com/caduceus/';
const SIGNOUT_URL = 'https://signon-test.vitec-mv.com/logout.php?return_to='+encodeURIComponent(ROOT_URL_GRAMMAR+'/logout.php')+'&sessionUid=';

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
	opt_mvNordic: true,
	opt_speak: true,
	opt_level: 3,
};

function impl_dataKeepalive() {
	return {a: 'keepalive', SessionID: g_access_token.sessionid};
}

function impl_startLogin() {
	loginKeepalive(true);
}

function impl_canGrammar() {
	return true;
}

function impl_canComma() {
	return (session.locale === 'da');
}

function impl_openDictionary(word) {
	return impl_showDictionary(word);
}

/* exported itw_speak */
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

/* exported itw_speak_attach */
function itw_speak_attach(node) {
	if (!g_conf.opt_speak) {
		return;
	}

	let tns = findTextNodes(node);
	let ns = [];
	for (let i=0 ; i<tns.length ; ++i) {
		let n = tns[i];
		do {
			n = n.parentNode;
		} while(n && n.parentNode && !text_nodes.hasOwnProperty(n.parentNode.nodeName));
		ns.push(n);
	}

	$(ns).addClass('itw_tts').mouseover(function() {
		let txt = $(this).text();
		if (g_itw_speaker) {
			clearTimeout(g_itw_speaker);
		}
		g_itw_speaker = setTimeout(function() {
			itw_speak(txt);
		}, 1000);
	}).mouseout(function() {
		if (g_itw_speaker) {
			clearTimeout(g_itw_speaker);
		}
		g_itw_speaker = null;
	}).on('touchstart', function() {
		++g_itw_tap;
	}).on('touchmove', function() {
		g_itw_tap = 0;
	}).on('touchend', function(e) {
		if (g_itw_tap >= 2) {
			if (g_itw_speaker) {
				clearTimeout(g_itw_speaker);
			}
			g_itw_speaker = null;

			itw_speak($(this).text());
			g_itw_tap = 0;

			e.preventDefault();
			return false;
		}
	});
}
