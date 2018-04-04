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

let g_text = '';

$(function() {
	$.ajaxSetup({
		xhrFields: {
			withCredentials: true,
		},
	});

	let text = g_text;
	if (window.location.search.indexOf('text=') !== -1) {
		text = window.location.search.substr(window.location.search.indexOf('text=')+5);
	}
	console.log(text);

	let data = {
		t: text
	};
	$.post(ROOT_URL_GRAMMAR + 'callback.php?a=itw-dict', data).done(function(rv) {
		if (!rv.hasOwnProperty('result') || !rv.result.hasOwnProperty('value') || !rv.result.value) {
			console.log(this);
			//showError('ERR_ITW_SPEAK');
			return;
		}

		rv.result.value = rv.result.value.replace('</title>', '</title><base href="https://dictionary.intowords.com/">');
		$('iframe').attr('srcdoc', rv.result.value);
	}).fail(function() {
		console.log(this);
		//showError('ERR_ITW_SPEAK');
	});
});
