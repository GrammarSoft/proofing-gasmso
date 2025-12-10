/*!
 * Copyright 2016-2025 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

let Const = {
	NonLetter: /[^\d\wa-zA-ZéÉöÖæÆøØåÅ.,!;:]+/ig,
};

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function escapeRegExpTokens(txt) {
	let ts = txt.split(/\s+/g);
	for (let i=0 ; i<ts.length ; ++i) {
		ts[i] = escapeRegExp(ts[i]);
	}
	return ts.join('\\s+');
}

function empty(obj) {
	for (let k in obj) {
		if (obj.hasOwnProperty(k)) {
			return false;
		}
	}
	return true;
}

function hasSurrogatePair(s) {
	for (let i=0 ; i<s.length ; ++i) {
		if (s.charCodeAt(i) >= 0xD800 && s.charCodeAt(i) <= 0xDBFF) {
			return true;
		}
	}
	return false;
}
