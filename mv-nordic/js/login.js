/*!
 * Copyright 2016-2018 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

function loginMessage(msg) {
	if (ROOT_URL_GRAMMAR.indexOf(msg.origin) === 0 || ROOT_URL_COMMA.indexOf(msg.origin) === 0) {
		if (msg.data.access) {
			if (ROOT_URL_GRAMMAR.indexOf(msg.origin) === 0) {
				impl_closeLogin('Grammar', msg.data);
			}
			else if (ROOT_URL_COMMA.indexOf(msg.origin) === 0) {
				impl_closeLogin('Comma', msg.data);
			}
		}
	}
}

function initLogin() {
	if ($('iframe.login').length) {
		window.addEventListener('message', loginMessage, false);

		let url = ROOT_URL_GRAMMAR + '/login.php?embedded=1';
		if (window.location.search.indexOf('tool=Comma') !== -1) {
			url = ROOT_URL_COMMA + '/login.php?embedded=1';
		}
		$('iframe.login').attr('src', url);
	}
}

$(function() {
	impl_Init(initLogin);
});
