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
	return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function showSidebar() {
	var ui = HtmlService.createTemplateFromFile('html/sidebar')
		.evaluate()
		.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.setTitle('Ret Mig');
	DocumentApp.getUi().showSidebar(ui);
}

function empty(obj) {
	for (var k in obj) {
		if (obj.hasOwnProperty(k)) {
			return false;
		}
	}
	return true;
}

function getParagraphs() {
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

function getSelectedText(elms) {
	var es = [];

	var elements = DocumentApp.getActiveDocument().getSelection().getRangeElements();
	for (var i = 0; i < elements.length; ++i) {
		var e = elements[i].getElement();
		var t = e.asText().getText().replace(/\s*$/g, '');
		for (var j=0 ; j<elms.length ; ++j) {
			if (elms[j].t === t) {
				Logger.log('Selected paragraph text %s', elms[j].i);
				es.push(elms[j]);
				break;
			}
		}
	}

	return es;
}

function getDocument() {
	var es = getParagraphs();
	if (DocumentApp.getActiveDocument().getSelection()) {
		es = getSelectedText(es);
	}
	return es;
}

function replaceInDocument(prefix, word, rpl, suffix) {
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

	var rx = '^'+prefix.replace(Const.NonLetter, '.*?')+'\\s*'+escapeRegExpTokens(word)+'\\s*'+suffix.replace(Const.NonLetter, '.*?')+'.*?$';
	Logger.log('Searching regex %s', rx);
	for (var i=0 ; i<sects.length ; ++i) {
		var sel = sects[i].findText(rx);
		if (!sel) {
			continue;
		}
	}
}

function selectInDocument(prefix, word, suffix) {
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

	var rx = '^'+prefix.replace(Const.NonLetter, '.*?')+'\\s*'+escapeRegExpTokens(word)+'\\s*'+suffix.replace(Const.NonLetter, '.*?')+'.*?$';
	Logger.log('Searching regex %s', rx);
	for (var i=0 ; i<sects.length ; ++i) {
		var sel = sects[i].findText(rx);
		if (!sel) {
			continue;
		}
		var rng = doc.newRange();
		rng.addElement(sel.getElement(), sel.getStartOffset(), sel.getEndOffsetInclusive());
		doc.setSelection(rng.build());
	}
}
