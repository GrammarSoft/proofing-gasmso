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
'use strict';

/* globals escHTML */
/* globals g_conf_defaults */
/* globals marking_types */
/* globals google */
/* globals g_tool:true */
/* globals l10n */

let g_tool = null;
let g_mode = null;
let g_conf = {};
/* exported session */
let session = {};

function getState(data) {
	console.log(data);
	let s = data.session;
	// If the locale doesn't exist, trim it and try again
	if (!l10n.s.hasOwnProperty(s.locale)) {
		console.log('No such locale ' + s.locale);
		s.locale = s.locale.replace(/^([^-_]+).*$/, '$1');
	}
	// Still doesn't exist, default to Danish
	if (!l10n.s.hasOwnProperty(s.locale)) {
		console.log('No such locale ' + s.locale);
		s.locale = 'da';
	}
	session = s;
}

function showPane(e, w) {
	$('.tab.selected').removeClass('selected');
	$(e).addClass('selected');
	$('.pane,.column').hide();
	$('.pane-'+w).show();
	$('.pane-'+w).find('.sidebar .link').first().click();
}

function showColumn(e, w) {
	$('.sidebar .selected').removeClass('selected');
	$(e).addClass('selected');
	$('.column').hide();
	$('.'+w).show();
}

$(function() {
	if (g_tool !== 'Grammar' && g_tool !== 'Comma') {
		g_tool = 'Grammar';
	}
	g_conf = Object.assign({}, g_conf_defaults);
	/*
	google.script.run.withSuccessHandler(getState).withFailureHandler(showError).getState();
	/*/
	session = {locale: 'da'};
	//*/

	$('.closer').click(function() {
		$(this).closest('.closable').hide();
	});

	$('.btnOptionsGrammar').click(function() {
		showColumn(this, 'column-options-grammar');
	});
	$('.btnWords').click(function() {
		showColumn(this, 'column-words');
	});
	$('.btnAboutGrammar').click(function() {
		showColumn(this, 'column-about-grammar');
	});
	$('.btnWordsButton').click(function() {
		$('.btnWords').click();
	});

	$('.btnOptionsComma').click(function() {
		showColumn(this, 'column-options-comma');
	});
	$('.btnLinks').click(function() {
		showColumn(this, 'column-links');
	});
	$('.btnAboutComma').click(function() {
		showColumn(this, 'column-about-comma');
	});

	$('.tab-grammar').click(function() {
		showPane(this, 'grammar');
	});
	$('.tab-comma').click(function() {
		showPane(this, 'comma');
	});

	$('#error').hide();
	$('.tab-' + g_tool.toLowerCase()).click();
	$('#placeholder').remove();

	if (!haveLocalStorage()) {
		showError('ERR_NO_STORAGE');
	}
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n.t(msg));
}
