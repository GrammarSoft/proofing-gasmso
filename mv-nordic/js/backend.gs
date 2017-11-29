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

var gs = {
	'nr_name': 'gt-comma',
	};

function onOpen(e) {
	DocumentApp.getUi().createAddonMenu()
		.addItem('Start Ret Mig', 'showSidebar')
		.addToUi();
	gs.locale = Session.getActiveUserLocale();
}

function onInstall(e) {
	onOpen(e);
}

function include(filename) {
	return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function showSidebar() {
	var ui = HtmlService.createTemplateFromFile('sidebar')
		.evaluate()
		.setSandboxMode(HtmlService.SandboxMode.IFRAME)
		.setTitle('Kommaforslag');
	DocumentApp.getUi().showSidebar(ui);
}

function getPreferences() {
	var userProperties = PropertiesService.getUserProperties();
	var languagePrefs = {
		originLang: userProperties.getProperty('originLang'),
		destLang: userProperties.getProperty('destLang')
		};
	return languagePrefs;
}

function _empty(obj) {
	for (var k in obj) {
		if (obj.hasOwnProperty(k)) {
			return false;
		}
	}
	return true;
}

function _wipeNamedRanges() {
	var doc = DocumentApp.getActiveDocument();
	var nrs = doc.getNamedRanges(gs.nr_name);
	for (var i=0 ; i<nrs.length ; ++i) {
		nrs[i].remove();
	}
}

function _wrapElements(elements) {
	var doc = DocumentApp.getActiveDocument();
	var texts = {};

	for (var i = 0; i < elements.length; ++i) {
		var element = elements[i];
		if (element.editAsText) {
			var elementText = element.asText().getText();
			if (elementText != '') {
				var range = doc.newRange();
				range.addElement(element);
				var nr = doc.addNamedRange(gs.nr_name, range);
				texts[nr.getId()] = elementText;
			}
		}
	}

	return texts;
}

function getSelectedText() {
	var texts = {};

	var selection = DocumentApp.getActiveDocument().getSelection();
	if (selection) {
		var elems = [];
		var elements = selection.getRangeElements();
		for (var i = 0; i < elements.length; ++i) {
			elems.push(elements[i].getElement());
		}
		texts = _wrapElements(elems);
	}

	return texts;
}

function getAllText() {
	return _wrapElements(DocumentApp.getActiveDocument().getBody().getParagraphs());
}

function check(what) {
	_wipeNamedRanges();
	var texts = null;

	if (what === 'selection') {
		texts = getSelectedText();
	}
	else if (what === 'all') {
		texts = getAllText();
	}

	if (_empty(texts)) {
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
	var rv = UrlFetchApp.fetch('http://alpha.visl.sdu.dk/service.php', options);

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
