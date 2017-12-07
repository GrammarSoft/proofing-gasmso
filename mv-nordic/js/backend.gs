/*!
 * Copyright 2016-2017 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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
/**
 * @OnlyCurrentDoc
 */
'use strict';

function onOpen(e) {
	var ui = DocumentApp.getUi();
	ui.createAddonMenu()
		.addItem('Start Ret Mig', 'showSidebar')
		.addToUi();
}

function onInstall(e) {
	onOpen(e);
}

function include(filename) {
	return HtmlService.createHtmlOutputFromFile(filename).getContent().replace(/<!--.*?-->/g, '');
}

function getSession() {
	var rv = {
		active: Session.getActiveUser().getEmail(),
		effective: Session.getEffectiveUser().getEmail(),
		tz: Session.getScriptTimeZone(),
		key: Session.getTemporaryActiveUserKey(),
		locale: Session.getActiveUserLocale(),
	};
	return rv;
}

function showSidebar() {
	var ui = HtmlService.createTemplateFromFile('html/sidebar')
		.evaluate()
		.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.setTitle('Ret Mig');
	DocumentApp.getUi().showSidebar(ui);
}

function getAllPars() {
	var sects = [];
	var doc = DocumentApp.getActiveDocument();
	if (doc.getHeader()) {
		sects.push(doc.getHeader().getParagraphs());
	}
	if (doc.getBody()) {
		sects.push(doc.getBody().getParagraphs());
	}
	if (doc.getFooter()) {
		sects.push(doc.getFooter().getParagraphs());
	}

	var elms = [];
	for (var i=0 ; i<sects.length ; ++i) {
		var pars = sects[i];
		for (var j=0 ; j<pars.length ; ++j) {
			var p = pars[j];
			if (!p.editAsText) {
				Logger.log('Not text paragraph');
				continue;
			}

			var t = p.asText().getText().replace(/\s*$/g, '');
			if (t.length === 0 || t === '') {
				Logger.log('Empty paragraph');
				continue;
			}

			elms.push({i: elms.length+1, t: t});
		}
	}

	return elms;
}

function getSelectedPars(elms) {
	var es = [];
	var sel = DocumentApp.getActiveDocument().getSelection();
	if (!sel) {
		throw 'ERR_NO_SELECTION';
	}

	var elements = sel.getRangeElements();
	for (var i = 0; i < elements.length; ++i) {
		var e = elements[i].getElement();
		var t = e.asText().getText().replace(/\s*$/g, '');
		if (t.length === 0 || t === '') {
			Logger.log('Empty paragraph');
			continue;
		}
		es.push({i: i+1, t: t});
	}

	return es;
}

function findElement(prefix, word, suffix) {
	var sects = [];
	var doc = DocumentApp.getActiveDocument();
	if (doc.getHeader()) {
		sects.push(doc.getHeader());
	}
	if (doc.getBody()) {
		sects.push(doc.getBody());
	}
	if (doc.getFooter()) {
		sects.push(doc.getFooter());
	}

	var rx = '^\\s*'+prefix.replace(Const.NonLetter, '.*?')+'\\s*'+escapeRegExpTokens(word)+'\\s*'+suffix.replace(Const.NonLetter, '.*?')+'\\s*$';
	Logger.log('Searching regex %s', rx);
	for (var i=0 ; i<sects.length ; ++i) {
		var sel = sects[i].findText(rx);
		if (!sel) {
			continue;
		}
		return sel;
	}
	return null;
}

function replaceInDocument(prefix, word, rpl, suffix) {
	if (!selectInDocument(prefix, word, suffix)) {
		throw 'ERR_REPLACE_NOSELECT';
	}

	var doc = DocumentApp.getActiveDocument();
	var rem = doc.getSelection().getRangeElements()[0];
	var b = rem.isPartial() ? rem.getStartOffset() : 0;
	var txt = rem.getElement().editAsText();

	var wi = 0, ri = 0;
	if (hasSurrogatePair(word) || hasSurrogatePair(rpl)) {
		Logger.log('Found surrogate in: %s %s', word, rpl);
	}
	else {
		for (; wi<word.length && ri<rpl.length ; ++wi, ++ri) {
			txt.insertText(b + ri + 1, rpl.charAt(ri));
			txt.deleteText(b + wi, b + wi);
		}
	}
	if (wi < word.length) {
		txt.deleteText(b + wi, b + word.length - 1);
	}
	if (ri < rpl.length) {
		txt.insertText(b + ri, rpl.substr(ri));
	}

	var rng = doc.newRange();
	rng.addElement(rem.getElement(), b, b + rpl.length - 1);
	doc.setSelection(rng.build());

	return rpl;
}

function selectInDocument(prefix, word, suffix) {
	var sel = findElement(prefix, word, suffix);
	if (!sel) {
		Logger.log('Could not find %s %s %s', prefix, word, suffix);
		throw 'ERR_SELECT_NOTFOUND';
	}

	var txt = sel.getElement().asText().getText();
	var rx = new RegExp('^(\\s*'+prefix.replace(Const.NonLetter, '.*?')+'\\s*)'+escapeRegExpTokens(word));
	var m = rx.exec(txt);
	if (!m) {
		Logger.log('Did not match regex');
		throw 'ERR_SELECT_NOMATCH';
	}

	var doc = DocumentApp.getActiveDocument();
	var rng = doc.newRange();
	rng.addElement(sel.getElement(), m[1].length, m[1].length + word.length - 1);
	doc.setSelection(rng.build());

	return true;
}
