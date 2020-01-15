/*!
 * Copyright 2016-2019 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

function saveConfig() {
	// Danish
	g_conf.opt_ignUnknown = false;
	if (g_conf.opt_ignUNames && g_conf.opt_ignUComp && g_conf.opt_ignUAbbr && g_conf.opt_ignUOther) {
		g_conf.opt_ignUnknown = true;
	}

	// Swedish
	g_conf.opt_ignDomAll = false;
	if (g_conf.opt_ignDomDefinite && g_conf.opt_ignDomSubjobj && g_conf.opt_ignDomPrep) {
		g_conf.opt_ignDomAll = true;
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
		ls_set_try('config', nv);
		g_conf_json = nv;
	}
}

function dictionaryDelete() {
	let w = $.trim($(this).closest('form').find('input').val());
	if (removeFromDictionary(w)) {
		$(this).closest('form').remove();
	}
	else {
		alert(sprintf(l10n_translate('ERR_DICT_FAIL_DELETE'), w));
	}
}

function dictionaryChanged() {
	let f = $(this).closest('form');
	let b = f.find('button');
	if (!b.hasClass('btnWordDelete')) {
		return;
	}
	b.removeClass('btnWordDelete').addClass('btnWordEdit').text('Gem').off().click(function() {
		b.removeClass('btnWordEdit').addClass('btnWordDelete').html('&times;').off().click(dictionaryDelete);
		f.submit();
	});
}

function attachDictionaryClicks() {
	$('.formWordEdit').off().submit(function(e) {
		let ow = $.trim($(this).attr('data-word'));
		let w = $.trim($(this).find('input').val());
		if (ow != w && addToDictionary(w) && removeFromDictionary(ow)) {
			$(this).attr('data-word', w);
		}
		else {
			alert(sprintf(l10n_translate('ERR_DICT_FAIL_EDIT'), ow, w));
		}

		e.preventDefault();
		return false;
	});

	$('.formWordEdit').find('input').off().keyup(dictionaryChanged).change(dictionaryChanged);
	$('.btnWordDelete').off().click(dictionaryDelete);
}

function getState() {
	g_access_token = ls_get('access-token', g_access_token_defaults);
	try {
		g_access_hmac = JSON.parse(g_access_token.hmac);
	}
	catch (e) {
	}
	session.locale = l10n_detectLanguage();
	l10n_world();

	if (impl_canComma() && impl_canGrammar()) {
		$('.tabbar').show();
	}
	else {
		$('.tabbar').hide();
	}

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
	itw_speak_attach(document.body);
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
	$.ajaxSetup({
		xhrFields: {
			withCredentials: true,
		},
	});

	if (window.location.search.indexOf('tool=Comma') !== -1) {
		g_tool = 'Comma';
	}
	if (g_tool !== 'Grammar' && g_tool !== 'Comma') {
		g_tool = 'Grammar';
	}
	getState();

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
			alert(sprintf(l10n_translate('ERR_DICT_FAIL_ADD'), w));
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
		if (k === 'opt_ignDomAll') {
			g_conf.opt_ignDomDefinite = g_conf.opt_ignDomSubjobj = g_conf.opt_ignDomPrep = v;
		}

		g_conf[k] = v;
		//console.log([k, v, g_conf]);
		saveConfig();
	});

	$('#error').hide();
	$('.tab-' + g_tool.toLowerCase()).click();
	$('#placeholder').remove();
}

$(function() {
	impl_Init(initOptions);
});

function showError(msg) {
	//console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n_translate(msg));
}
