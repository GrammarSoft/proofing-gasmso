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

function _impl_findElement(prefix, word, suffix) {
	let rx = new RegExp('^(\\s*'+prefix.replace(Const.NonLetter, '.*?')+'\\s*)('+escapeRegExpTokens(word)+')(\\s*'+suffix.replace(Const.NonLetter, '.*?')+'\\s*)$', 'i');
	console.log('Searching regex %s', rx);

	for (let i=0 ; i<to_send.length ; ++i) {
		let t = to_send[i].t;
		let m = rx.exec(t);
		if (m) {
			return {prefix: m[1], middle: m[2], suffix: m[3]};
		}
	}

	showError('ERR_SELECT_NOTFOUND');
	return false;
}

function impl_selectInDocument(prefix, middle, suffix) {
	let rv = _impl_findElement(prefix, middle, suffix);
	return google.script.run.withFailureHandler(showError).selectInDocument(rv.prefix, rv.middle, rv.suffix);
}

function impl_replaceInDocument(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	return google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(rv.prefix, rv.middle, rpl, rv.suffix);
}

function impl_replaceInDocumentSilent(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	return google.script.run.withSuccessHandler(didReplaceSilent).withFailureHandler(showError).replaceInDocument(rv.prefix, rv.middle, rpl, rv.suffix);
}

function impl_insertInDocument(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	return google.script.run.withSuccessHandler(didInsert).withFailureHandler(showError).replaceInDocument(rv.prefix, rv.middle, rpl, rv.suffix);
}

function impl_removeInDocument(prefix, find, rpl, suffix) {
	let rv = _impl_findElement(prefix, find, suffix);
	return google.script.run.withSuccessHandler(didRemove).withFailureHandler(showError).replaceInDocument(rv.prefix, rv.middle, rpl, rv.suffix);
}

function impl_getState() {
	return google.script.run.withSuccessHandler(getState).withFailureHandler(showError).getState();
}

function impl_showOptions(g_tool) {
	return google.script.run.withFailureHandler(showError).showOptions(g_tool);
}

function impl_getSelectedPars() {
	return google.script.run.withSuccessHandler(checkParagraphs).withFailureHandler(showError).getSelectedPars();
}

function impl_getAllPars() {
	return google.script.run.withSuccessHandler(checkParagraphs).withFailureHandler(showError).getAllPars();
}
