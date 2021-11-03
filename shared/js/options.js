/*!
 * Copyright 2016-2021 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

let g_options_dirty = {};
let g_save_timer = null;
let g_can_comma = false;
let g_can_grammar = false;

function commitOptions(e) {
	if (e) {
		delete e['returnValue'];
	}
	if (g_save_timer) {
		clearTimeout(g_save_timer);
	}
	if ($.isEmptyObject(g_options_dirty)) {
		return;
	}

	$.ajax({
		url: ROOT_URL_GRAMMAR + '/callback.php',
		type: 'POST',
		dataType: 'json',
		headers: {HMAC: g_access_token.hmac},
		data: {
			a: 'options-save',
			os: JSON.stringify(g_options_dirty),
		},
	});

	for (let svc in g_options_dirty) {
		if (!g_options_dirty.hasOwnProperty(svc)) {
			continue;
		}

		let nv = ls_get_try('options-'+svc);
		if (nv) {
			nv = JSON.parse(nv);
		}
		else {
			nv = {};
		}

		for (let key in g_options_dirty[svc]) {
			if (!g_options_dirty[svc].hasOwnProperty(key)) {
				continue;
			}
			if (!nv.hasOwnProperty(key)) {
				nv[key] = {};
			}
			for (let k in g_options_dirty[svc][key]) {
				let v = g_options_dirty[svc][key][k];
				nv[key][k] = v;
				if (key === 'types' && v === 'd') {
					delete nv[key][k];
				}
			}
			if ($.isEmptyObject(nv[key])) {
				delete nv[key];
			}
		}

		if ($.isEmptyObject(nv)) {
			ls_del('options-'+svc);
		}
		else {
			ls_set_try('options-'+svc, JSON.stringify(nv));
		}
	}

	console.log(g_options_dirty);
	g_options_dirty = {};
}

function commitOptionsLater() {
	if (g_save_timer) {
		clearTimeout(g_save_timer);
	}
	g_save_timer = setTimeout(commitOptions, 2000);
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

function queueOption(e, key, k, v) {
	let comma = $(e).closest('.pane').hasClass('comma');
	let svc = comma ? g_can_comma : g_can_grammar;

	if (!g_options_dirty.hasOwnProperty(svc)) {
		g_options_dirty[svc] = {
			config: {},
			types: {},
		};
	}
	g_options_dirty[svc][key][k] = v;
	commitOptionsLater();
	console.log([e, svc, k, v]);
}

function typeChanged() {
	let k = $(this).attr('name');
	let v = $(this).val();

	queueOption(this, 'types', k, v);

	toggleAutoToggles();
}

function typesAllTo(e, v) {
	e = $(e).closest('.pane');
	let comma = e.hasClass('comma');
	let svc = comma ? g_can_comma : g_can_grammar;

	e.find('input[type="radio"][value="'+v+'"]').each(function() {
		let r = $(this);
		r.prop('checked', true);
		queueOption(this, 'types', r.attr('name'), v);
	});
	toggleAutoToggles();
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

	let can_comma = g_can_comma = impl_canComma();
	let can_grammar = g_can_grammar = impl_canGrammar();

	if (window.location.search.indexOf('singletool=1') !== -1) {
		if (window.location.search.indexOf('tool=Comma') !== -1) {
			can_grammar = g_can_grammar = false;
		}
		else {
			can_comma = g_can_comma = false;
		}
	}

	if (!can_comma) {
		$('.comma').remove();
	}
	else {
		can_comma = loadOptions(can_comma);
	}
	if (!can_grammar) {
		$('.grammar').remove();
	}
	else {
		can_grammar = loadOptions(can_grammar);
	}

	loadDictionary();

	$('.words').html('');
	let ws = Object.keys(g_dictionary);
	ws.sort();
	for (let i=0 ; i<ws.length ; ++i) {
		$('.words').append('<form class="word formWordEdit" data-word="'+escHTML(ws[i])+'"><input type="text" value="'+escHTML(ws[i])+'"> <button type="button" class="btnWordDelete">&times;</button></form>');
	}
	attachDictionaryClicks();

	let iters = [
		['#comma-types', marking_types_comma, can_comma, g_can_comma],
		['#grammar-types', marking_types_grammar, can_grammar, g_can_grammar],
		];

	for (let it=0 ; it<iters.length ; ++it) {
		if (iters[it][3] && _live_options[iters[it][3]].hasOwnProperty('config')) {
			let conf = _live_options[iters[it][3]].config;
			for (let k in conf) {
				if (!conf.hasOwnProperty(k)) {
					continue;
				}
				if (typeof conf[k] === 'boolean') {
					$('.'+k).prop('checked', conf[k]);
				}
				else if (typeof conf[k] === 'number') {
					$('.'+k+'[value='+conf[k]+']').prop('checked', conf[k]);
				}
			}
		}

		let types = $(iters[it][0]);
		if (types.length) {
			let ts = iters[it][1];
			let html = '<table class="table-striped">';
			html += '<thead><tr><th class="left">Type</th><th>+</th><th class="default"></th><th>-</th></tr></thead>';
			html += '<tfoot><tr><th class="left">Type</th><th>+</th><th class="default"></th><th>-</th></tr></tfoot>';
			html += '<tbody>';
			for (let i=0 ; i<ts.length ; ++i) {
				let t = ts[i];
				let tt = marking_types[t][0];
				if (t === '%nok' || t.indexOf('%nok-') === 0) {
					tt += ' (<span class="type-nok">'+l10n_translate('LBL_CTYPE_PROHIBITED')+'</span>)';
				}
				else if (t === '%ko' || t.indexOf('%ko-') === 0) {
					tt += ' (<span class="type-ko">'+l10n_translate('LBL_CTYPE_OPTIONAL')+'</span>)';
				}
				else if (t === '%k' || t.indexOf('%k-') === 0) {
					tt += ' (<span class="type-k">'+l10n_translate('LBL_CTYPE_REQUIRED')+'</span>)';
				}
				else if (t === '%ok' || t.indexOf('%ok-') === 0) {
					tt += ' (<span class="type-ok">'+l10n_translate('LBL_CTYPE_INFORMATIVE')+'</span>)';
				}
				else if (t === '%nko' || t.indexOf('%nko-') === 0) {
					tt += ' (<span class="type-nko">'+l10n_translate('LBL_CTYPE_INFORMATIVE')+'</span>)';
				}
				else if (types_red.hasOwnProperty(t)) {
					tt += ' (<span class="type-red">'+l10n_translate('LBL_GTYPE_RED')+'</span>)';
				}
				else if (types_yellow.hasOwnProperty(t)) {
					tt += ' (<span class="type-yellow">'+l10n_translate('LBL_GTYPE_YELLOW')+'</span>)';
				}
				else if (types_info.hasOwnProperty(t)) {
					tt += ' (<span class="type-info">'+l10n_translate('LBL_GTYPE_INFO')+'</span>)';
				}
				else if (ts === marking_types_grammar) {
					tt += ' (<span class="type-green">'+l10n_translate('LBL_GTYPE_GREEN')+'</span>)';
				}
				/*
				else {
					tt += ' (<span class="type-other">'+l10n_translate('LBL_TYPE_OTHER')+'</span>)';
				}
				//*/
				let ts_s = escHTML(t);
				let ts_id = slugify(t);

				let sel_on = '';
				let sel_def = '';
				let sel_off = '';
				if (!iters[it][2].hasOwnProperty('types') || !iters[it][2].types.hasOwnProperty(t)) {
					sel_def = ' checked';
				}
				else {
					if (iters[it][2].types[t]) {
						sel_on = ' checked';
					}
					else {
						sel_off = ' checked';
					}
				}

				let def_on = '';
				let def_off = '';
				if (g_options_default.types[t]) {
					def_on = ' class="default"';
				}
				else {
					def_off = ' class="default"';
				}

				html += '<tr><td title="'+ts_s+'">'+tt+'</td><td'+def_on+'><input type="radio" name="'+ts_s+'" id="1-'+ts_id+'" value="1"'+sel_on+'></td><td><input type="radio" name="'+ts_s+'" id="d-'+ts_id+'" value="d"'+sel_def+'></td><td'+def_off+'><input type="radio" name="'+ts_s+'" id="0-'+ts_id+'" value="0"'+sel_off+'></td></tr>';
			}
			html += '</tbody>';
			html += '</table>';
			types.html(html);

			types.find('input[type="radio"]').change(typeChanged);
		}
	}

	g_impl.attachTTS(document.body);
}

function cache_regexp(e, p, x) {
	let c_x = e.data(p);
	if (!c_x) {
		c_x = new RegExp(x);
		e.data(p, c_x);
	}
	return c_x;
}

function autoToggleTypes() {
	let prop = $(this).prop('checked');
	let on = $(this).attr('data-types-on');
	let off = $(this).attr('data-types-off');

	if (on) {
		on = cache_regexp($(this), 'types-on-regex', on);

		let ts = Object.keys(marking_types);
		for (let i=0 ; i<ts.length ; ++i) {
			let t = ts[i];
			let ts_id = slugify(t);
			if (on.test(t)) {
				let v = prop ? 1 : 0;
				let e = $('#'+v+'-'+ts_id);
				e.prop('checked', true);
				queueOption(e, 'types', t, v);
			}
		}
	}

	if (off) {
		off = cache_regexp($(this), 'types-off-regex', off);

		let ts = Object.keys(marking_types);
		for (let i=0 ; i<ts.length ; ++i) {
			let t = ts[i];
			let ts_id = slugify(t);
			if (off.test(t)) {
				let v = prop ? 0 : 1;
				let e = $('#'+v+'-'+ts_id);
				e.prop('checked', true);
				queueOption(e, 'types', t, v);
			}
		}
	}

	toggleAutoToggles();
}

function toggleAutoToggles() {
	$('.auto_toggle').each(function() {
		let on = $(this).attr('data-types-on');
		let off = $(this).attr('data-types-off');

		if (on) {
			on = cache_regexp($(this), 'types-on-regex', on);
			$(this).prop('indeterminate', true);

			let all_on = true;
			let all_off = true;
			let ts = Object.keys(marking_types);
			for (let i=0 ; i<ts.length ; ++i) {
				let t = ts[i];
				let ts_id = slugify(t);
				if (on.test(t)) {
					if ($('#1-'+ts_id).prop('checked') || (g_options_default.types[t] && $('#d-'+ts_id).prop('checked'))) {
						all_on = all_on & true;
						all_off = false;
					}
					else if ($('#0-'+ts_id).prop('checked') || (!g_options_default.types[t] && $('#d-'+ts_id).prop('checked'))) {
						all_off = all_off & true;
						all_on = false;
					}
				}
			}

			if (all_on) {
				$(this).prop('indeterminate', false);
				$(this).prop('checked', true);
			}
			if (all_off) {
				$(this).prop('indeterminate', false);
				$(this).prop('checked', false);
			}
		}

		if (off) {
			off = cache_regexp($(this), 'types-off-regex', off);
			$(this).prop('indeterminate', true);

			let all_on = true;
			let all_off = true;
			let ts = Object.keys(marking_types);
			for (let i=0 ; i<ts.length ; ++i) {
				let t = ts[i];
				let ts_id = slugify(t);
				if (off.test(t)) {
					if ($('#1-'+ts_id).prop('checked') || (g_options_default.types[t] && $('#d-'+ts_id).prop('checked'))) {
						all_on = all_on & true;
						all_off = false;
					}
					else if ($('#0-'+ts_id).prop('checked') || (!g_options_default.types[t] && $('#d-'+ts_id).prop('checked'))) {
						all_off = all_off & true;
						all_on = false;
					}
				}
			}

			if (all_on) {
				$(this).prop('indeterminate', false);
				$(this).prop('checked', false);
			}
			if (all_off) {
				$(this).prop('indeterminate', false);
				$(this).prop('checked', true);
			}
		}
	});
}

function showPane(e, w) {
	$('.tab.selected').removeClass('selected');
	$(e).addClass('selected');
	$('.pane,.column').hide();
	$('.pane-'+w).show();
	let fb = $('.pane-'+w).find('.sidebar .link').first();
	if (fb.length) {
		fb.click();
	}
	else {
		$('.pane-'+w).find('.column').first().show();
	}
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

	if (typeof window.g_tool === 'string') {
		g_tool = window.g_tool;
	}
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
	$('.tab-grammar-types').click(function() {
		showPane(this, 'grammar-types');
	});
	$('.tab-comma-types').click(function() {
		showPane(this, 'comma-types');
	});

	$('.btnTypesAllOn').click(function() {
		typesAllTo(this, '1');
	});
	$('.btnTypesAllDef').click(function() {
		typesAllTo(this, 'd');
	});
	$('.btnTypesAllOff').click(function() {
		typesAllTo(this, '0');
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

		queueOption(this, 'config', k, v);
	});

	$('.auto_toggle').change(autoToggleTypes);
	toggleAutoToggles();

	$('#error').hide();
	$('.tab-' + g_tool.toLowerCase()).click();
	$('#placeholder').remove();

	// ToDo: Add https://github.com/GoogleChromeLabs/page-lifecycle ?
	window.addEventListener('beforeunload', commitOptions);
	window.addEventListener('unload', commitOptions);
	window.addEventListener('pagehide', commitOptions);
	document.addEventListener('visibilitychange', function(e) {
		if (document.visibilityState !== 'visible') {
			commitOptions();
		}
	});
}

$(function() {
	g_impl.init(initOptions);
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n_translate(msg));
}
