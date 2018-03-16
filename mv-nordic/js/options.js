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

function saveConfig() {
	g_conf.opt_ignUnknown = false;
	if (g_conf.opt_ignUNames && g_conf.opt_ignUComp && g_conf.opt_ignUAbbr && g_conf.opt_ignUOther) {
		g_conf.opt_ignUnknown = true;
	}
	if (g_conf.opt_ignUnknown) {
		g_conf.opt_ignUNames = g_conf.opt_ignUComp = g_conf.opt_ignUAbbr = g_conf.opt_ignUOther = true;
	}

	for (let k in g_conf) {
		if (!g_conf.hasOwnProperty(k)) {
			continue;
		}
		if (typeof g_conf[k] === 'boolean') {
			$('.'+k).prop('checked', g_conf[k]);
		}
		else if (typeof g_conf[k] === 'number') {
			$('.'+k+'[value='+g_conf[k]+']').prop('checked', g_conf[k]);
		}
	}

	let nv = JSON.stringify(g_conf);
	if (nv !== g_conf_json) {
		window.localStorage.setItem('config', nv);
		g_conf_json = nv;
	}
}

function attachDictionaryClicks() {
	$('.formWordEdit').off().submit(function(e) {
		let ow = $.trim($(this).attr('data-word'));
		let w = $.trim($(this).find('input').val());
		if (ow != w && addToDictionary(w) && removeFromDictionary(ow)) {
		}
		else {
			alert('Kunne ikke ændre ordet "'+ow+'" til '+w+' i stavekontrollen!');
		}

		e.preventDefault();
		return false;
	});

	$('.btnWordDelete').off().click(function() {
		let w = $.trim($(this).closest('form').find('input').val());
		if (removeFromDictionary(w)) {
			$(this).closest('form').remove();
		}
		else {
			alert('Kunne ikke slette ordet "'+w+'" fra stavekontrollen!');
		}
	});
}

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

	loadConfig();
	loadDictionary();

	$('.words').html('');
	let ws = Object.keys(g_dictionary);
	ws.sort();
	for (let i=0 ; i<ws.length ; ++i) {
		$('.words').append('<form class="word formWordEdit" data-word="'+escHTML(ws[i])+'"><input type="text" value="'+escHTML(ws[i])+'"> <button type="button" class="btnWordDelete">&times;</button></form>');
	}
	attachDictionaryClicks();

	saveConfig();
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

function initOptions() {
	if (window.location.search.indexOf('tool=Comma') !== -1) {
		g_tool = 'Comma';
	}
	if (g_tool !== 'Grammar' && g_tool !== 'Comma') {
		g_tool = 'Grammar';
	}
	g_conf = Object.assign({}, g_conf_defaults);
	impl_getState();

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

	$('.formWordAdd').submit(function(e) {
		let w = $.trim($('.inputAddWord').val());
		if (addToDictionary(w)) {
			$('.words').append('<form class="word formWordEdit" data-word="'+escHTML(w)+'"><input type="text" value="'+escHTML(w)+'"> <button type="button" class="btnWordDelete">&times;</button></form>');
			attachDictionaryClicks();
			$('.inputAddWord').val('').focus();
		}
		else {
			alert('Kunne ikke tilføje ordet "'+w+'" til stavekontrollen!');
		}

		e.preventDefault();
		return false;
	});

	$('input[type="checkbox"],input[type="radio"]').change(function() {
		let k = /(opt_\S+)/.exec($(this).attr('class'));
		if (!k) {
			return;
		}

		k = k[1];

		let v = null;
		if ($(this).attr('type') === 'checkbox') {
			v = $(this).prop('checked');
		}
		else if ($(this).attr('type') === 'radio') {
			v = $(this).val();
		}
		if (typeof v === 'string' && /^\d+$/.test(v)) {
			v = parseInt(v);
		}

		if (k === 'opt_ignUnknown') {
			g_conf.opt_ignUNames = g_conf.opt_ignUComp = g_conf.opt_ignUAbbr = g_conf.opt_ignUOther = v;
		}

		g_conf[k] = v;
		console.log([k, v, g_conf]);
		saveConfig();
	});

	$('#error').hide();
	$('.tab-' + g_tool.toLowerCase()).click();
	$('#placeholder').remove();

	$('.rpl-vars').each(function() {
		let e = $(this);
		if (e.text()) {
			e.text(e.text().replace('{VERSION}', VERSION));
		}
		if (e.attr('src')) {
			e.attr('src', e.attr('src').replace('{ROOT_URL_SELF}', ROOT_URL_SELF));
		}
	});
}

$(function() {
	impl_Init(initOptions);
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n.t(msg));
}
