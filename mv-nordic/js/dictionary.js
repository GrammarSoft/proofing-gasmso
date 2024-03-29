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

let g_text = '';

function activate_markings(lang) {
	// Dummy
}

$(function() {
	$.ajaxSetup({
		xhrFields: {
			withCredentials: true,
		},
	});

	g_access_token = ls_get('access-token', g_access_token_defaults);
	g_access_hmac = JSON.parse(g_access_token.hmac);
	session.locale = l10n_detectLanguage();
	l10n_world();

	loadConfig();

	let text = g_text;
	if (window.location.search.indexOf('text=') !== -1) {
		let b = window.location.search.indexOf('text=') + 5;
		let e = window.location.search.indexOf('&', b);
		text = window.location.search.substring(b, e);
	}
	if (text.indexOf('%') !== -1) {
		text = decodeURIComponent(text);
	}
	console.log(text);

	let data = {
		t: text,
	};
	$.post(ROOT_URL_GRAMMAR + 'callback.php?a=itw-dict', data).done(function(rv) {
		if (!rv.hasOwnProperty('result') || !rv.result.hasOwnProperty('value') || !rv.result.value) {
			console.log(this);
			$('iframe').attr('srcdoc', sprintf(l10n_translate('ERR_DICTIONARY_404'), text));
			return;
		}

		rv.result.value = rv.result.value.replace('</title>', '</title><base href="https://dictionary.intowords.com/">');
		rv.result.value = rv.result.value.replace('href="C', 'href="https://dictionary.intowords.com/C');
		rv.result.value = rv.result.value.replace('</head>', '<script>webReader = {webReaderRead: function(t,v) {}, webReaderStop: function() {}, webReaderChange: function() {}};</script></head>');
		$('iframe').attr('srcdoc', rv.result.value);
		if (!('srcdoc' in document.createElement('iframe'))) {
			let m = /<head[^>]*>([^]+?)<\/head>[^]*<body[^>]*>([^]+?)<\/body>/.exec(rv.result.value);
			$($('iframe').get(0).contentWindow.document.head).html(m[1]);
			$($('iframe').get(0).contentWindow.document.body).html(m[2]);
		}

		for (let i=250 ; i<1500 ; i+=500) {
			setTimeout(function() {
				let win = $('iframe').get(0).contentWindow;
				win.webReader = {
					webReaderRead: function(text, val) {
						return itw_speak(text);
					},
					webReaderStop: function() {
						$('#speaker').stop();
					},
					webReaderChange: function() {
					},
				};
				if (!g_conf.opt_speak) {
					$(win.document.body).append('<style>span:hover { background-color: inherit !important; }</style>');
				}
			}, i);
		}
	}).fail(function() {
		console.log(this);
		$('iframe').attr('srcdoc', sprintf(l10n_translate('ERR_DICTIONARY_404'), text));
	});
});
