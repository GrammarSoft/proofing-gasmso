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

var NAMED_RANGE_PREFIX = 'gtdp';

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
	wipeNamedRanges();
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

function wipeNamedRanges() {
	Logger.log('Wiping ranges');
	var doc = DocumentApp.getActiveDocument();
	var nrs = doc.getNamedRanges(NAMED_RANGE_PREFIX);
	for (var i=0 ; i<nrs.length ; ++i) {
		nrs[i].remove();
	}
}

function wrapDocument() {
	var doc = DocumentApp.getActiveDocument();
	var nrs = doc.getNamedRanges(NAMED_RANGE_PREFIX);
	var elms = [];
	for (var i=0 ; i<nrs.length ; ++i) {
		var es = nrs[i].getRange().getRangeElements();
		if (es.length > 1) {
			Logger.log('NR %s split element', nrs[i].getId());
			nrs[i].remove();
			continue;
		}
		if (!es[0]) {
			Logger.log('NR %s missing element', nrs[i].getId());
			nrs[i].remove();
			continue;
		}
		var e = es[0].getElement();
		elms.push({i: nrs[i].getId(), t: e.asText().getText().replace(/\s*$/g, '')});
	}

	var sects = [];
	if (doc.getHeader()) {
		sects.push(doc.getHeader().getParagraphs());
	}
	if (doc.getBody()) {
		sects.push(doc.getBody().getParagraphs());
	}
	if (doc.getFooter()) {
		sects.push(doc.getFooter().getParagraphs());
	}

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

			var seen = false;
			for (var e=0 ; e<elms.length ; ++e) {
				if (elms[e].t === t) {
					Logger.log('Seen paragraph text %s', elms[e].i);
					seen = true;
					break;
				}
			}
			if (seen) {
				continue;
			}

			var range = doc.newRange();
			range.addElement(p);
			var nr = doc.addNamedRange(NAMED_RANGE_PREFIX, range.build());
			var id = nr.getId();
			elms.push({i: id, t: t});
			Logger.log('New paragraph %s', id);
		}
	}

	return elms;
}

function expandWrapped(es, hashes) {
	var texts = [];
	for (var i=0 ; i<es.length ; ++i) {
		var h = murmurHash3.x86.hash128(es[i].t);
		if (hashes.hasOwnProperty(h)) {
			continue;
		}
		texts.push({i: es[i].i, t: es[i].t, h: h});
	}
	return texts;
}

function getSelectedText() {
	var elms = wrapDocument();
	var es = [];

	var selection = DocumentApp.getActiveDocument().getSelection();
	if (selection) {
		var elements = selection.getRangeElements();
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
	}

	return es;
}

function getDocument(hashes) {
	var es = [];
	if (DocumentApp.getActiveDocument().getSelection()) {
		es = getSelectedText();
		hashes = {};
	}
	else {
		es = wrapDocument();
	}
	return expandWrapped(es, hashes);
}

function check(what) {
	wipeNamedRanges();
	var texts = null;

	if (what === 'selection') {
		texts = getSelectedText();
	}
	else if (what === 'all') {
		texts = getAllText();
	}

	if (empty(texts)) {
		throw 'Vælg noget tekst og prøv igen';
	}

	var text = '';
	for (var p in texts) {
		text += "<s" + p + ">\n" + texts[p] + "\n</s" + p + ">\n\n";
	}

	var options = {
		'method': 'POST',
		'payload': {
			'action': 'dan_comma_words',
			'data': text,
			},
		};
	var rv = UrlFetchApp.fetch('https://alpha.visl.sdu.dk/service.php', options);

	return rv.getContentText();
}

function insertText(newText) {
	var selection = DocumentApp.getActiveDocument().getSelection();
	if (selection) {
		var replaced = false;
		var elements = selection.getSelectedElements();
		if (elements.length == 1 && elements[0].getElement().getType() == DocumentApp.ElementType.INLINE_IMAGE) {
			throw "Can't insert text into an image.";
		}
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].isPartial()) {
				var element = elements[i].getElement().asText();
				var startIndex = elements[i].getStartOffset();
				var endIndex = elements[i].getEndOffsetInclusive();

				var remainingText = element.getText().substring(endIndex + 1);
				element.deleteText(startIndex, endIndex);
				if (!replaced) {
					element.insertText(startIndex, newText);
					replaced = true;
				}
				else {
					// This block handles a selection that ends with a partial element. We
					// want to copy this partial text to the previous element so we don't
					// have a line-break before the last partial.
					var parent = element.getParent();
					parent.getPreviousSibling().asText().appendText(remainingText);
					// We cannot remove the last paragraph of a doc. If this is the case,
					// just remove the text within the last paragraph instead.
					if (parent.getNextSibling()) {
						parent.removeFromParent();
					}
					else {
						element.removeFromParent();
					}
				}
			}
			else {
				var element = elements[i].getElement();
				if (!replaced && element.editAsText) {
					// Only translate elements that can be edited as text, removing other
					// elements.
					element.clear();
					element.asText().setText(newText);
					replaced = true;
				}
				else {
					// We cannot remove the last paragraph of a doc. If this is the case,
					// just clear the element.
					if (element.getNextSibling()) {
						element.removeFromParent();
					}
					else {
						element.clear();
					}
				}
			}
		}
	}
	else {
		var cursor = DocumentApp.getActiveDocument().getCursor();
		var surroundingText = cursor.getSurroundingText().getText();
		var surroundingTextOffset = cursor.getSurroundingTextOffset();

		// If the cursor follows or preceds a non-space character, insert a space
		// between the character and the translation. Otherwise, just insert the
		// translation.
		if (surroundingTextOffset > 0) {
			if (surroundingText.charAt(surroundingTextOffset - 1) != ' ') {
				newText = ' ' + newText;
			}
		}
		if (surroundingTextOffset < surroundingText.length) {
			if (surroundingText.charAt(surroundingTextOffset) != ' ') {
				newText += ' ';
			}
		}
		cursor.insertText(newText);
	}
}
