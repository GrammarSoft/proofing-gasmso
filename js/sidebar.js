/*!
 * Copyright 2016-2024 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

let g_mode = null;
let cmarking = {
	s: -1,
	b: -1,
	e: -1,
	m: -1,
	mark: null,
	suggs: [],
	sel_sug: -1,
	words: '',
	prefix: '',
	suffix: '',
	sentence: '',
	};
let prev_marking = {};
let ignores = {};
let act_queue = [];
let select_fail = false;
let grammar_retried = false;
let comma_retried = false;
let overlay_sidebars = [];

function cmark() {
	cmarking.mark = marking_ranges[cmarking.m];
	cmarking.s = cmarking.mark.seg;
	cmarking.b = cmarking.mark.begin;
	cmarking.e = cmarking.mark.end;

	cmarking.words = '';
	for (let i=cmarking.b ; i<cmarking.e ; ++i) {
		cmarking.words += segments[cmarking.s][i].word + segments[cmarking.s][i].space;
	}
	cmarking.words = $.trim(cmarking.words.replace(/  +/g, ' '));
}

function switchSidebar(which) {
	$('#popupIgnore').hide();
	$('.sidebar').hide();
	if (typeof which === 'string') {
		which = $(which);
	}
	which.show();
}

function overlay_push(which) {
	overlay_sidebars.push($('.sidebar:visible'));
	switchSidebar(which);
}

function overlay_pop() {
	switchSidebar(overlay_sidebars[overlay_sidebars.length-1]);
	overlay_sidebars.pop();
}

function markingSetSentence() {
	let s = cmarking.s;
	let b = cmarking.b;
	for (; b>0 ; --b) {
		if (segments[s][b-1].word === STR_SENT_BREAK) {
			--b;
			break;
		}
	}
	let e = cmarking.e;
	for (; e<segments[s].length ; ++e) {
		if (segments[s][e].word === STR_SENT_BREAK) {
			break;
		}
	}

	let sent_ana = [];
	let sentence = '';
	cmarking.sentence = '';
	for (let i=b; i<e ; ++i) {
		if (i == cmarking.b) {
			sentence += '<span class="marking">';
		}
		if (i == cmarking.e) {
			sentence += '</span>';
		}

		let m = segments[s][i];
		let w = m.word;
		if (i == cmarking.b && cmarking.mark.ins) {
			w = cmarking.mark.ins.word;
		}
		if (is_nullish(w)) {
			continue;
		}

		sent_ana.push(m);
		let func = '';
		let icon = '';
		for (let f=0 ; f<func2label.length ; ++f) {
			if (func2label[f].rx.test(m.ana.func)) {
				func = ' func_off func_' + func2label[f].f;
				if (func2label[f].i) {
					if (func2label[f].i.indexOf('https://') !== -1) {
						icon = '<i class="bi"><img src="'+func2label[f].i+'"></i>';
					}
					else {
						icon = '<i class="bi bi-'+func2label[f].i+'"></i>';
					}
				}
				if (func2label[f].w) {
					icon = '(' + icon + ')';
				}
				break;
			}
		}
		if (i >= cmarking.b && i < cmarking.e) {
			sentence += '<span class="pos pos_off pos_'+m.ana.pos+func+'"><span>' + escHTML(w) + '</span><br><span class="func">' + icon + '</span></span>' + m.space;
		}
		else {
			sentence += '<span class="pos pos_off pos_'+m.ana.pos+func+'"><span>'+escHTML(w) + '</span><br><span class="func">' + icon + '</span></span>' + m.space;
		}
		cmarking.sentence += w + m.space;
	}
	ls_set('sentence_analysis', sent_ana);
	return sentence.replace(/ (<\/\w+>)/g, '$1 ');
}

function markingSetContext() {
	let s = cmarking.s;
	let b = cmarking.b;
	let e = cmarking.e;

	cmarking.prefix = '';
	for (let i=0 ; i<b ; ++i) {
		if (is_nullish(segments[s][i].word)) {
			continue;
		}
		cmarking.prefix += segments[s][i].word + segments[s][i].space;
	}

	cmarking.suffix = '';
	for (let i=e ; i<segments[s].length ; ++i) {
		if (is_nullish(segments[s][i].word)) {
			continue;
		}
		cmarking.suffix += segments[s][i].word + segments[s][i].space;
	}
}

function markingGetSnippet() {
	let s = cmarking.s;
	let b = cmarking.b;
	let e = cmarking.e;

	let snippet = '';
	for (let i=Math.max(0, b-2) ; i<Math.min(segments[s].length, e+2) ; ++i) {
		if (is_nullish(segments[s][i].word)) {
			continue;
		}
		snippet += segments[s][i].word + segments[s][i].space;
	}

	snippet = $.trim(snippet.replace(/  +/g, ' '));
	return snippet;
}

function markingRender(skipact) {
	cmark();
	let s = cmarking.s;
	let b = cmarking.b;
	let e = cmarking.e;
	let words = cmarking.words;

	let marking = cmarking.mark;
	let sentence = markingSetSentence();

	let ik = words + '\t' + marking.mark;
	if (ignores.hasOwnProperty(ik) && ignores[ik].hasOwnProperty(cmarking.sentence) && ignores[ik][cmarking.sentence] === true) {
		////console.log(`Skip ignored ${ik} : ${cmarking.sentence}`);
		marking_ranges.splice(cmarking.m, 1);
		if (skipact === 'prev') {
			btnPrev();
		}
		else {
			cmarking.m -= 1;
			btnNext();
		}
		return;
	}

	grammar_retried = false;
	comma_retried = false;

	$('#error').hide();
	switchSidebar('#chkChecking');

	// l10n strings that otherwise won't exist: 'BTN_COMMA_INSERT' 'BTN_COMMA_INSERT_STOP' 'BTN_COMMA_REMOVE' 'BTN_COMMA_REPLACE' 'BTN_GRAMMAR_INSERT' 'BTN_GRAMMAR_REMOVE' 'BTN_GRAMMAR_REPLACE'

	let btn_lbl = 'BTN_GRAMMAR_';
	if (g_tool === 'Comma') {
		btn_lbl = 'BTN_COMMA_';
	}

	let types = marking.mark.split(/ /g);
	let col = markingColor(types);

	if (g_marks.dict.test(marking.mark)) {
		$('#chkAddWord').show();
		$('.btnAddWord').removeClass('disabled');
	}
	else {
		$('#chkAddWord').hide();
		$('.btnAddWord').addClass('disabled');
	}

	if (g_tool === 'Comma' && col === 'yellow' && _live_options.config.opt_maybe == false) {
		col = 'green';
	}

	let es = {};
	let el = {};
	for (let i=0 ; i<types.length ; ++i) {
		let et = (g_marks.types[types[i]] ? g_marks.types[types[i]][0] : (types[i] + ' ')).replace(/:.*$/, '');
		es[i] = '<h2 title="'+escHTML(types[i])+'">'+et+'</h2>';

		et = g_marks.types[types[i]] ? g_marks.types[types[i]][1] : (types[i] + ' ');
		et = '<p>'+et.replace(/(<br>\s*)+<br>\s*/g, '</p><p>')+'</p>';
		el[i] = es[i] + et.replace(/<p>\s*<\/p>/g, '');
	}
	es = $.map(es, function(v) {
		return v;
	}).join('<hr>');
	el = $.map(el, function(v) {
		return v;
	}).join('<hr>');
	$('.chkExplainShortText').html(es);
	$('.chkExplainLongText').html(el);

	let alt = (_live_options.config.opt_color ? ' alt' : '');
	if (/^[,.:!?;]$/.test(words) || (marking.ins && /^[,.:!?;]$/.test(marking.ins.word))) {
		alt += ' marking-comma';
	}
	else if (words.length <= 2 || (marking.ins && marking.ins.word.length <= 2)) {
		alt += ' marking-enhance';
	}

	$('.chkType').attr('title', marking.mark);

	sentence = sentence.replace(' class="marking">', ' class="marking marking-'+col+alt+' marking-'+g_tool.toLowerCase()+'">');
	$('.chkSentence').html(sentence);

	let input_vis = false;
	$('.btnManualInput').hide();

	let suggs = Array.from(marking.suggs);

	if (suggs.length === 0) {
		if (g_marks.comp_left.test(marking.mark)) {
			suggs = [[new GS_Suggestion(segments[s][b].word, ''), new GS_Suggestion(segments[s][b+1].word)]];
		}
		else if (g_marks.comp_right.test(marking.mark)) {
			suggs = [[new GS_Suggestion(segments[s][b].word, ''), new GS_Suggestion(segments[s][b+1].word)]];
		}
		else if (g_marks.comp_hyphen.test(marking.mark)) {
			suggs = [[new GS_Suggestion(segments[s][b].word + '‐', ''), new GS_Suggestion(segments[s][b+1].word)]]; // U+2010 Hyphen
		}
		else if (g_marks.comp_preswap.test(marking.mark)) {
			suggs = [[new GS_Suggestion(segments[s][b+1].word), new GS_Suggestion(segments[s][b].word)]];
		}
	}

	cmarking.suggs = suggs;

	if (suggs.length === 0) {
		$('.btnInput').hide();
		$('#chkDidYouMean').hide();
		$('.chkSentence').addClass('divider');
		$('.btnAccept').addClass('disabled');
		$('#chkDidYouMeanItems').html('');
	}
	else {
		let all_upper = is_upper(words);
		let first_upper = all_upper || is_upper(words.charAt(0));

		if (g_marks.to_lower.test(marking.mark)) {
			all_upper = first_upper = false;
		}

		let html = '';
		for (let i=0 ; i<suggs.length ; ++i) {
			let t = '';
			for (let j=0 ; j<suggs[i].length ; ++j) {
				let sg = suggs[i][j];
				if (sg.word === STR_PLACEHOLDER) {
					t += escHTML(segments[s][b+j].word) + segments[s][b+j].space;
				}
				else {
					t += escHTML(sg.word) + sg.space;
				}
			}
			if (all_upper) {
				t = t.toUpperCase();
			}
			else if (first_upper) {
				t = uc_first(t);
			}
			html += '<div class="suggestion"><span class="link link-suggestion" data-which="'+i+'" tabindex="'+(50+i*3)+'">' + t + '</span><span class="suggestion-lookup"><a class="link link-corpus" tabindex="'+(50+i*3+1)+'"><span class="icon">𓂀</span></a><a class="link link-dict" tabindex="'+(50+i*3+2)+'"><span class="icon"><i class="bi bi-book"></i></span></a></span></div>';
		}
		$('#chkDidYouMeanItems').html(html);
		$('#chkDidYouMeanItems').find('span.link-suggestion').off().click(markingAcceptSuggestion);
		$('#chkDidYouMeanItems').find('.link-corpus').off().click(function() {
			let query = '';
			for (let i=Math.max(0, b-2) ; i<b ; ++i) {
				if (is_nullish(segments[s][i].word)) {
					continue;
				}
				query += '[word=="' + segments[s][i].word + '"]? ';
			}

			query += '[word=="' + $(this).closest('div').find('.link-suggestion').text().trim() + '"] ';

			for (let i=e ; i<Math.min(segments[s].length, e+2) ; ++i) {
				if (is_nullish(segments[s][i].word)) {
					continue;
				}
				query += '[word=="' + segments[s][i].word + '"]? ';
			}
			impl_openCorpus($.trim(query));
		});
		$('#chkDidYouMeanItems').find('.link-dict').off().click(function() {
			impl_openDictionary($(this).closest('div').find('.link-suggestion').text().trim());
		});
		g_impl.attachTTS($('#chkDidYouMeanItems').get(0));
		$('.btnInput').show();
		input_vis = true;
		$('#chkDidYouMean').show();
		$('.chkSentence').removeClass('divider');
		$('.btnAccept').removeClass('disabled');
	}

	if (g_marks.rx_editable.test(marking.mark)) {
		$('.btnInput').show();
		input_vis = true;
	}
	if (!input_vis) {
		$('.btnManualInput').show();
	}

	$('#chkInput').hide();

	markingSetContext();

	$('.icon-accept,.icon-discard').addClass('icon-accept').removeClass('icon-discard');

	if (g_marks.rx_ins.test(marking.ef_mark)) {
		let px = /^(.*?)(\S+\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		//console.log([cmarking.prefix, cmarking.suffix, px, sx]);
		impl_selectInDocument(px[1], px[2] + sx[1], sx[2]);
		$('.txtAccept').text(l10n_translate(btn_lbl + 'INSERT'));
		if (marking.mark.indexOf('%k-stop') !== -1) {
			$('.txtAccept').text(l10n_translate(btn_lbl + 'INSERT_STOP'));
		}
		$('.btnAccept').removeClass('disabled');
	}
	else if (g_marks.rx_del.test(marking.ef_mark)) {
		$('.icon-accept,.icon-discard').addClass('icon-discard').removeClass('icon-accept');
		$('.txtAccept').text(l10n_translate(btn_lbl + 'REMOVE'));
		$('.btnAccept').removeClass('disabled');
		impl_selectInDocument(cmarking.prefix, words, cmarking.suffix);
	}
	else {
		$('.txtAccept').text(l10n_translate(btn_lbl + 'REPLACE'));
		let middle = words;
		impl_selectInDocument(cmarking.prefix, middle, cmarking.suffix);
	}

	showHideAnalysis();
}

function markingSelect(m) {
	cmarking.m = m;
	markingRender();
	window.scrollTo(0, 0);
}

function btnSeeList() {
	let html = '';
	let alt = (_live_options.config.opt_color ? ' alt' : '');
	let en = 0;

	for (let i=0 ; i<marking_ranges.length ; ++i) {
		let m = marking_ranges[i];
		let s = m.seg;
		let b = m.begin;
		let e = m.end;

		html += '<div class="errorListEntry" onclick="markingSelect('+i+');" title="'+escHTML(m.mark)+'"><span class="link">';
		let c = Math.max(b-3, 0);
		if (c > 0) {
			html += '…';
		}
		for ( ; c<b ; ++c) {
			html += escHTML(segments[s][c].oword ?? segments[s][c].word) + segments[s][c].space;
		}
		let col = markingColor(m.mark.split(/ /g));
		for ( ; c<e ; ++c) {
			html += '<span class="marking marking-'+col+alt+' marking-'+g_tool.toLowerCase()+'">'+escHTML(segments[s][c].oword ?? segments[s][c].word)+'</span>' + segments[s][c].space;
		}
		for ( ; c<segments[s].length && c<e+2 ; ++c) {
			html += escHTML(segments[s][c].oword ?? segments[s][c].word) + segments[s][c].space;
		}
		if (c < segments[s].length) {
			html += '…';
		}
		html += '</span><span class="link suggestion-lookup"><span class="icon icon-lookup"></span></span></div>';
		++en;
	}

	if (en >= 10) {
		$('.errorListTopBtn').show();
	}
	else {
		$('.errorListTopBtn').hide();
	}

	$('#errorList').html(html);
	g_impl.attachTTS($('#errorList').get(0));
	overlay_push('#chkErrorList');

	matomo_event('btnSeeList');
}

function btnAccept() {
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).addClass('disabled');
	markingAccept();
}

function btnInput() {
	let words = cmarking.words;

	$('#chkInputText').val(words);
	$('#chkInput').show();
	$('#chkInputText').focus();
}

function markingIgnore() {
	let words = cmarking.words;
	let marking = cmarking.mark;

	let ik = words + '\t' + marking.mark;
	if (!ignores[ik]) {
		ignores[ik] = {};
	}
	ignores[ik][cmarking.sentence] = true;
	//console.log('Ignoring %s in %s', ik, cmarking.sentence);

	marking_ranges.splice(cmarking.m, 1);
}

function btnIgnorePopup() {
	let p = $('#popupIgnore');
	if (p.is(':visible')) {
		p.hide();
	}
	else {
		p.show();
		let btn = $(this);
		let off = btn.offset();
		off.top += btn.height() + 5;
		off.left = (off.left + btn.width()) - p.width();
		p.offset(off);
	}
}

function btnIgnore() {
	let words = cmarking.words;

	$('#popupIgnore').hide();
	let mark = cmarking.mark;
	log_marking_action({'a': 'ignore-one', 'm': mark.mark, 'w': words, 't': mark.tid});

	markingIgnore();
	matomo_event('btnIgnoreOne', mark.mark, words);
	cmarking.m -= 1;
	btnNext();
}

function btnIgnoreAll() {
	let words = cmarking.words;

	$('#popupIgnore').hide();
	let mark = cmarking.mark;
	log_marking_action({'a': 'ignore-all', 'm': mark.mark, 'w': words, 't': mark.tid});

	let ts = mark.mark;
	for (let i=0 ; i<marking_ranges.length ; ) {
		let m = marking_ranges[i];
		if (m.mark === ts) {
			cmarking.m = i;
			cmark();
			if (words === cmarking.words) {
				markingSetSentence();
				markingIgnore();
				continue;
			}
		}
		++i;
	}

	matomo_event('btnIgnoreAll', ts, word);
	cmarking.m -= 1;
	btnNext();
}

function btnPrev() {
	matomo_event('btnPrev');

	$('#popupIgnore').hide();

	if (marking_ranges.length) {
		cmarking.m -= 1;
		if (cmarking.m < 0) {
			cmarking.m = marking_ranges.length - 1;
		}

		markingRender('prev');
	}
	else if (to_send_i >= to_send.length) {
		checkDone();
	}
}

function btnNext() {
	matomo_event('btnNext');

	$('#popupIgnore').hide();
	if (marking_ranges.length) {
		cmarking.m += 1;
		if (cmarking.m >= marking_ranges.length) {
			cmarking.m = 0;
		}

		markingRender('next');
	}
	else if (to_send_i >= to_send.length) {
		checkDone();
	}
}

function btnInputOne() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let rpl = $.trim($('#chkInputText').val().replace(/  +/g, ' '));
	if (rpl.length === 0) {
		rpl = ' ';
	}
	let mark = cmarking.mark;
	let words = cmarking.words;
	cmarking.suggs = Array(cmarking.e - cmarking.b);
	cmarking.suggs.fill(new GS_Suggestion(''));
	cmarking.suggs[0] = new GS_Suggestion(rpl);
	cmarking.sel_sug = 0;
	matomo_event('btnInputOne', mark.mark, cmarking.b, rpl);
	log_marking_action({'a': 'input-one', 'm': mark.mark, 'w': words, 'r': rpl, 't': mark.tid});
	processQueue({f: impl_replaceInDocument, m: cmarking.m, rpl: rpl});
}

function btnInputAll() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let rpl = $.trim($('#chkInputText').val().replace(/  +/g, ' '));
	if (rpl.length === 0) {
		rpl = ' ';
	}
	let mark = cmarking.mark;
	let words = cmarking.words;
	let ts = mark.mark;
	let om = cmarking.m;

	cmarking.suggs = Array(cmarking.e - cmarking.b);
	cmarking.suggs.fill(new GS_Suggestion(''));
	cmarking.suggs[0] = new GS_Suggestion(rpl);
	cmarking.sel_sug = 0;

	for (let i=0 ; i<marking_ranges.length ; ++i) {
		let m = marking_ranges[i];
		if (m.mark.mark === ts) {
			cmarking.m = i;
			cmark();
			if (words === cmarking.words) {
				appendQueue({f: impl_replaceInDocument, m: i, rpl: rpl});
			}
		}
	}

	matomo_event('btnInputAll', ts, words, rpl);
	log_marking_action({'a': 'input-all', 'm': ts, 'w': words, 'r': rpl, 't': mark.tid});
	processQueue({f: btnNext, m: om});
}

function showHideAnalysis() {
	let chk = $('.chkShowAnalysis').prop('checked');
	if (chk) {
		$('.pos').removeClass('pos_off');
		$('.chkAnalysisOpts').show();
		$('.chkPos,.chkFunc').each(function() {
			let e = $(this);
			let pfs = $('.'+e.val());
			let which = 'func_';
			if (e.hasClass('chkPos')) {
				which = 'pos_';
			}
			if (e.prop('checked')) {
				e.removeClass('strike');
				pfs.removeClass(which+'off');
			}
			else {
				e.addClass('strike');
				pfs.addClass(which+'off');
			}
		});
	}
	else {
		$('.pos').addClass('pos_off').addClass('func_off');
		$('.chkAnalysisOpts').hide();
	}
	return chk;
}

function btnToggleAnalysis() {
	let chk = showHideAnalysis();
	if (chk) {
		matomo_event('ui', 'show-analysis');
	}
	else {
		matomo_event('ui', 'hide-analysis');
	}
}

function markingAcceptSuggestion() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let mark = cmarking.mark;
	let middle = cmarking.words;
	cmarking.sel_sug = parseInt($(this).attr('data-which'));
	log_marking_action({'a': 'accept', 'm': mark.mark, 'w': middle, 'r': $(this).text(), 't': mark.tid});
	processQueue({f: impl_replaceInDocument, m: cmarking.m, middle: middle, rpl: $(this).text()});
}

function markingAccept() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let mark = cmarking.mark;

	if (g_marks.rx_ins.test(mark.ef_mark)) {
		let px = /^(.*?)(\S+)(\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		let rpl = mark.ins.word;
		log_marking_action({'a': 'accept-insert', 'm': mark.mark, 'w': segments[cmarking.s][cmarking.b-1].word, 'r': rpl, 't': mark.tid});
		if (/£insert/.test(mark.mark)) {
			rpl = ' ' + rpl;
		}
		processQueue({f: impl_insertInDocument, m: cmarking.m, prefix: px[1], middle: px[2] + px[3] + sx[1], rpl: px[2] + rpl + px[3] + sx[1], suffix: sx[2]});
	}
	else if (g_marks.rx_del.test(mark.ef_mark)) {
		log_marking_action({'a': 'accept-remove', 'm': mark.mark, 'w': cmarking.words, 't': mark.tid});
		processQueue({f: impl_removeInDocument, m: cmarking.m, rpl: ' '});
	}
	else {
		$('#chkDidYouMeanItems').find('.link').first().click();
	}
}

function appendQueue(action) {
	if (action) {
		act_queue.push(Object.assign({m:0, prefix:null, middle:null, rpl:null, suffix:null}, action));
	}
}

function processQueue(action) {
	appendQueue(action);

	if (act_queue.length === 0) {
		$('#working').hide();
		return btnNext();
	}

	$('#working').show();
	let act = act_queue.shift();
	cmarking.m = act.m;

	if (act.f === btnNext) {
		$('#working').hide();
		return act.f();
	}

	cmark();
	markingSetContext();
	prev_marking = Object.assign({}, cmarking);

	let prefix = (act.prefix === null) ? cmarking.prefix : act.prefix;
	let middle = (act.middle === null) ? cmarking.words : act.middle;
	let suffix = (act.suffix === null) ? cmarking.suffix : act.suffix;

	return act.f(prefix, middle, act.rpl, suffix);
}

function checkDone() {
	$('#working').hide();

	if (g_tool === 'Grammar') {
		if (!grammar_retried) {
			//console.log('Retrying grammar');
			grammar_retried = true;
			checkParagraphs(to_send);
		}
		else if ($('.optComma').prop('checked')) {
			g_tool = 'Comma';
			if (g_mode === 'all' || g_mode === 'selected') {
				checkParagraphs(to_send);
			}
			else {
				$('.btnCheckComma').click();
			}
		}
		else {
			switchSidebar('#chkDone' + g_tool);
		}
	}
	else {
		if (!comma_retried) {
			//console.log('Retrying comma');
			comma_retried = true;
			checkParagraphs(to_send);
		}
		switchSidebar('#chkDone' + g_tool);
	}
}

function _did_helper(before, after) {
	for (let i=0 ; i<to_send.length ; ++i) {
		if (to_send[i].t === before) {
			//console.log('Replaced %s', i);
			to_send[i].t = after;
			delete to_send[i].h;
		}
	}
}

function didSelect() {
	$('#error').hide();
	$('#working').hide();
	select_fail = false;
}

function didReplace(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);

	for (let i=0 ; i<prev_marking.suggs[prev_marking.sel_sug].length ; ++i) {
		let s = prev_marking.suggs[prev_marking.sel_sug][i];
		if (s.word === STR_PLACEHOLDER) {
			continue;
		}
		segments[prev_marking.s][prev_marking.b+i].word = s.word;
		segments[prev_marking.s][prev_marking.b+i].space = s.space;
	}

	/*
	if (g_marks.comp_left.test(prev_marking.mark.mark)) {
		segments[prev_marking.s][prev_marking.b].space = '';
	}
	else if (g_marks.comp_right.test(prev_marking.mark.mark)) {
		segments[prev_marking.s][prev_marking.b].space = '';
	}
	else if (g_marks.comp_hyphen.test(prev_marking.mark.mark)) {
		segments[prev_marking.s][prev_marking.b].word += '‐';
		segments[prev_marking.s][prev_marking.b].space = '';
	}
	else if (g_marks.comp_preswap.test(prev_marking.mark.mark)) {
		let w = segments[prev_marking.s][prev_marking.b];
		segments[prev_marking.s][prev_marking.b] = segments[prev_marking.s][prev_marking.b+1];
		segments[prev_marking.s][prev_marking.b+1] = w;
	}
	else {
		segments[prev_marking.s][prev_marking.b].word = rv.rpl;
	}
	//*/

	marking_ranges.splice(prev_marking.m, 1);
	cmarking.m -= 1;

	processQueue();
}

// Used by Kukkuniiaat hyphenation, so not by any marking replacements
function didReplaceSilent(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
}

function didInsert(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
	segments[prev_marking.s][prev_marking.b] = prev_marking.mark.ins;

	marking_ranges.splice(prev_marking.m, 1);
	cmarking.m -= 1;

	processQueue();
}

function didRemove(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
	segments[prev_marking.s][prev_marking.b] = new GS_Word(STR_NULLISH);

	marking_ranges.splice(prev_marking.m, 1);
	cmarking.m -= 1;

	processQueue();
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

	for (let svc in SERVICES) {
		if (!SERVICES.hasOwnProperty(svc)) {
			continue;
		}
		loadOptions(svc);
	}
	loadDictionary();
	g_impl.attachTTS(document.body);
}

function feedbackSend() {
	$('.btnFeedbackSend').addClass('disabled').prop('disabled', true);
	setTimeout(function() { $('.btnFeedbackSend').removeClass('disabled').prop('disabled', false); }, 1000);

	let json = '';
	if (overlay_sidebars[overlay_sidebars.length-1].is('#chkChecking')) {
		json = {
			s: '',
			m: cmarking.mark,
			};
		for (let i=0 ; i<segments[cmarking.s].length ; ++i) {
			json.s += segments[cmarking.s][i].word + '\n';
		}
		//console.log(json);
		json = JSON.stringify(json);
	}
	let msg = $.trim($('#txtFeedback').val());
	if (!msg && !json) {
		$('#txtFeedback').addClass('is-invalid').focus();
		return false;
	}

	let svc = g_tools.grammar;
	if (g_tool === 'Comma') {
		svc = g_tools.comma;
	}

	$.ajax({
		url: ROOT_URL_GRAMMAR+'/callback.php',
		type: 'POST',
		dataType: 'json',
		headers: {HMAC: g_access_token.hmac},
		data: {
			a: 'feedback',
			svc: svc,
			msg: msg,
			json: json,
			},
	}).done(function(rv) {
		alert(l10n_translate('LBL_FEEDBACK_SENT'));
		overlay_pop();
	}).fail(function() {
		showError('ERR_FEEDBACK');
		$('#txtFeedback').val($.trim(json + '\n\n' + msg));
	});
}

function loginKeepalive(init) {
	if (g_keepalive) {
		clearInterval(g_keepalive);
		g_keepalive = null;
	}
	if (g_login_ws) {
		g_login_ws.close();
	}
	g_login_ws = null;
	g_login_channel = '';

	g_access_token = ls_get('access-token', g_access_token_defaults);

	$.ajax({
		url: ROOT_URL_GRAMMAR+'/callback.php',
		type: 'POST',
		dataType: 'json',
		headers: {HMAC: g_access_token.hmac},
		data: impl_dataKeepalive(),
	}).done(function(rv) {
		if (g_keepalive) {
			clearInterval(g_keepalive);
			g_keepalive = null;
		}
		g_keepalive = setInterval(loginKeepalive, 5*60*1000); // 5 minute keepalive

		//console.log('Login success');
		if (rv.hasOwnProperty('anonymous')) {
			g_anonymous = rv.anonymous;
			delete rv.anonymous;
		}
		delete rv.a;
		g_access_token = rv;
		ls_set('access-token', g_access_token);
		g_access_hmac = JSON.parse(g_access_token.hmac);

		let nloc = l10n_detectLanguage();
		if (nloc !== session.locale) {
			//console.log('Re-translating UI from %s to %s', session.locale, nloc);
			session.locale = nloc;
			l10n_world();
		}

		if (init) {
			impl_loadUserdata();
			g_tools.grammar = impl_canGrammar();
			g_tools.comma = impl_canComma();

			if (g_tools.grammar && g_tools.comma) {
				$('.chkGrammarToComma').show();
				$('.btnCheckComma').show();
				$('.comma-specific').show();
				switchSidebar('#chkWelcomeShared');
			}
			else if (g_tools.comma) {
				$('.chkGrammarToComma').hide();
				$('.btnCheckGrammar').hide();
				$('.btnCheckComma').show();
				$('.comma-specific').show();
				switchSidebar('#chkWelcomeComma');
				g_tool = 'Comma';
			}
			else {
				$('.optComma').prop('checked', false);
				$('.chkGrammarToComma').hide();
				$('.btnCheckComma').hide();
				$('.comma-specific').hide();
				switchSidebar('#chkWelcomeGrammar');
			}
			$('.btnOptions').show();
			$('.btnLogout').show();
		}
	}).fail(function() {
		//console.log('Login fail');
		g_access_token = object_copy(g_access_token_defaults);
		ls_set('access-token', g_access_token);

		loginListener();
		switchSidebar('#chkWelcomeLogin');
	});
}

function loginMessage(msg) {
	if (ROOT_URL_GRAMMAR.indexOf(msg.origin) === 0) {
		if (msg.data.access) {
			delete msg.data.access;
			g_access_token = msg.data;
			ls_set('access-token', g_access_token);
			loginKeepalive(true);
		}
	}
}

function loginListener() {
	if (g_login_ws) {
		g_login_ws.close();
	}
	g_login_ws = new WebSocket(CADUCEUS_URL);
	$('.btnLoginGrammar,.btnLoginComma').addClass('disabled');

	g_login_ws.addEventListener('open', function() {
		g_login_ws.send(JSON.stringify({a: 'create-channel'}));
	});

	g_login_ws.addEventListener('close', function() {
		//console.log('Closed Caduceus connection');
		g_login_ws = null;
		if (!g_access_token.hmac) {
			//console.log('Caduceus connection timed out - reconnecting...');
			loginListener();
		}
	});

	g_login_ws.addEventListener('error', function() {
		showError('ERR_CADUCEUS_FAILED');
	});

	g_login_ws.addEventListener('message', function(message) {
		let msg = JSON.parse(message.data);
		if (msg.a === 'create-channel') {
			$('.btnLoginGrammar,.btnLoginComma').removeClass('disabled');
			g_login_channel = msg.r;
			//console.log('Listening on channel %s ...', g_login_channel);
		}
		else if (msg.hmac && msg.sessionid) {
			//console.log('Got HMAC and SessionID: '+message.data);
			g_access_token = msg;
			//console.log(g_access_token);
			ls_set('access-token', g_access_token);
			g_login_ws.close();
			loginKeepalive(true);
		}
		else {
			//console.log('Error: Unknown message %s', message.data);
		}
	});

	//console.log(g_login_ws);
}

function logout() {
	g_impl.openExternal(SIGNOUT_URL+g_access_token.sessionid, 'Logout');

	$.ajax({
		url: ROOT_URL_GRAMMAR+'/callback.php',
		type: 'POST',
		dataType: 'json',
		headers: {HMAC: g_access_token.hmac},
		data: {a: 'logout'},
	}).done(function() {
		//console.log('Logged out');
		$('.btnOptions').hide();
		$('.btnLogout').hide();
	});

	if (g_keepalive) {
		clearInterval(g_keepalive);
		g_keepalive = null;
	}

	g_access_token = object_copy(g_access_token_defaults);
	ls_set('access-token', g_access_token);

	loginListener();
	switchSidebar('#chkWelcomeLogin');
	matomo_event('ui', 'logout');
}

function initSidebar() {
	$.ajaxSetup({
		xhrFields: {
			withCredentials: true,
		},
	});

	window.addEventListener('message', loginMessage, false);

	if (!g_impl.hasSelection()) {
		$('.btnCheckSelected').hide();
		$('[data-l10n="TXT_GRAMMAR_HINT"]').attr('data-l10n', 'TXT_GRAMMAR_HINT_NS');
		$('[data-l10n="TXT_COMMA_HINT"]').attr('data-l10n', 'TXT_COMMA_HINT_NS');
		$('[data-l10n="BTN_EXEC_ALL"]').attr('data-l10n', 'BTN_EXEC_ALL_NS');
	}
	if (!g_impl.hasOwnProperty('callback')) {
		g_impl.callback = function () {};
	}
	if (!g_impl.hasOwnProperty('openExternal')) {
		g_impl.openExternal = function (url, title) {
			window.open(url, title);
		};
	}
	if (!g_impl.hasOwnProperty('beforeSendTexts')) {
		g_impl.beforeSendTexts = function(t) { return t; };
	}
	if (!g_impl.hasOwnProperty('beforeParseResult')) {
		g_impl.beforeParseResult = function(t) { return t; };
	}

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
	$('.chkExplainMore').click(function() {
		$('.chkExplainShort').hide();
		$('.chkExplainLong').show();
		matomo_event('ui', 'explain-more');
	});
	$('.chkExplainLess').click(function() {
		$('.chkExplainLong').hide();
		$('.chkExplainShort').show();
		matomo_event('ui', 'explain-less');
	});

	if (_live_options.config.opt_longExplanations) {
		$('.chkExplainLong').show();
		$('.chkExplainShort').hide();
	}
	else {
		$('.chkExplainLong').hide();
		$('.chkExplainShort').show();
	}

	$('.chkAnalysisOpts').hide();
	if (_live_options.config.opt_showAnalysis) {
		$('.chkShowAnalysis').prop('checked', true);
	}
	else {
		$('.chkShowAnalysis').prop('checked', false);
	}
	$('.chkShowAnalysis').click(btnToggleAnalysis);
	$('.chkPos,.chkFunc').each(function() {
		let e = $(this);
		if (e.prop('checked')) {
			e.closest('label').removeClass('strike');
		}
		else {
			e.closest('label').addClass('strike');
		}
	}).click(function() {
		let e = $(this);
		let pfs = $('.'+e.val());
		let which = 'func_';
		if (e.hasClass('chkPos')) {
			which = 'pos_';
		}
		if (e.prop('checked')) {
			e.closest('label').removeClass('strike');
			pfs.removeClass(which+'off');
			matomo_event('ui', 'enable_'+e.val());
		}
		else {
			e.closest('label').addClass('strike');
			pfs.addClass(which+'off');
			matomo_event('ui', 'disable_'+e.val());
		}
	});

	$('.btnOptions').click(function() {
		impl_showOptions(g_tool);
		matomo_event('ui', 'open-options');
	});
	$('.btnRestart').click(function() {
		$('#error').hide();
		$('#working').hide();
		impl_startLogin();
		matomo_event('ui', 'restart');
	});
	$('.btnSupport').click(function() {
		if ($('#chkSupport:visible').length) {
			overlay_pop();
		}
		else {
			overlay_push('#chkSupport');
			matomo_event('ui', 'open-support');
		}
	});
	$('.btnLanguages').click(function() {
		if ($('#chkLanguages:visible').length) {
			overlay_pop();
		}
		else {
			overlay_push('#chkLanguages');
			matomo_event('ui', 'open-languages');
		}
	});
	$('.btnFeedback').click(function() {
		if ($('#chkFeedback:visible').length) {
			overlay_pop();
		}
		else {
			$('#txtFeedback').removeClass('is-invalid').val('');
			$('#txtFeedbackError').hide();
			if ($('#chkChecking:visible').length) {
				$('#txtFeedbackError').show();
			}
			overlay_push('#chkFeedback');
			matomo_event('ui', 'open-feedback');
		}
	});
	$('.btnFeedbackSend').click(feedbackSend);
	$('.btnSeeList').click(btnSeeList);
	$('.btnOverlayPop').click(function() {
		overlay_pop();
	});

	$('.btnLanguage').click(function() {
		session.locale = l10n.lang = $(this).attr('data-which');
		l10n_world();
		overlay_pop();
		matomo_event('ui', 'change-language', session.locale);
	});

	$('.optComma').click(function() {
		let v = $(this).prop('checked');
		$('.optComma').prop('checked', v);
	});

	$('.btnCheckAuto').click(function() {
		if ($(this).hasClass('toolGrammar')) {
			g_tool = 'Grammar';
		}
		else if ($(this).hasClass('toolComma')) {
			g_tool = 'Comma';
		}
		g_mode = 'auto';
		matomo_event('ui', 'check-auto', g_tool);
	});
	$('.btnCheckSelected').click(function() {
		if ($(this).hasClass('toolGrammar')) {
			g_tool = 'Grammar';
		}
		else if ($(this).hasClass('toolComma')) {
			g_tool = 'Comma';
		}
		g_mode = 'selected';
		impl_getSelectedPars();
		matomo_event('ui', 'check-selected', g_tool);
	});
	$('.btnCheckAll').click(function() {
		if ($(this).hasClass('toolGrammar')) {
			g_tool = 'Grammar';
		}
		else if ($(this).hasClass('toolComma')) {
			g_tool = 'Comma';
		}
		g_mode = 'all';
		impl_getAllPars();
		matomo_event('ui', 'check-all', g_tool);
	});

	$('.btnAccept').click(btnAccept);
	$('.btnInput').click(btnInput);
	$('.btnIgnorePopup').click(btnIgnorePopup);
	$('.btnIgnore').click(btnIgnore);
	$('.btnIgnoreAll').click(btnIgnoreAll);
	$('.btnPrev').click(btnPrev);
	$('.btnNext').click(btnNext);

	$('.btnManualInput').click(function () {
		$('#controlsAuto').hide();
		$('#controlsManual').show();
	});
	$('.btnManualCancel').click(function () {
		$('#controlsAuto').show();
		$('#controlsManual').hide();
	});
	$('.btnManualDone').click(function () {
		$('#controlsAuto').show();
		$('#controlsManual').hide();
		impl_recheckSelectedPars();
	});

	$('.btnInputOne').click(btnInputOne);
	$('.btnInputAll').click(btnInputAll);

	$('.btnCheckAgain').click(function() {
		switchSidebar('#chkWelcome' + g_tool);
		matomo_event('ui', 'check-again', g_tool);
	});
	$('.btnCheckGrammar').click(function() {
		g_tool = 'Grammar';
		switchSidebar('#chkWelcome' + g_tool);
		matomo_event('ui', 'check-grammar');
	});
	$('.btnCheckComma').click(function() {
		g_tool = 'Comma';
		switchSidebar('#chkWelcome' + g_tool);
		matomo_event('ui', 'check-comma');
	});

	$('.btnAddWord').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		let mark = cmarking.mark;
		log_marking_action({'a': 'dict-add', 'm': mark.mark, 'w': cmarking.words, 't': mark.tid});
		addToDictionary(cmarking.words);
		$('.btnIgnoreAll').click();
		matomo_event('ui', 'ignore-all');
	});

	$('.btnLoginGrammar').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		g_impl.openExternal(ROOT_URL_GRAMMAR + '/login.php?popup=1&channel='+g_login_channel, 'Login');
		matomo_event('ui', 'login');
	});

	$('.btnLoginSkip').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		g_anonymous = true;
		g_impl.openExternal(ROOT_URL_GRAMMAR + '/login.php?popup=1&anonymous=1&channel='+g_login_channel, 'Login');
		matomo_event('ui', 'login');
	});

	if (typeof impl_getSelectedText !== 'function') {
		$('.hyphen-specific').hide();
	}
	else {
		$('.btnHyphenate').click(function() { impl_getSelectedText(g_impl.hyphenate); });
		$('.btnHyphenateUndo').click(function() { impl_getSelectedText(g_impl.hyphenateUndo); });
	}

	$('.btnLogout').click(logout);
	$('.btnOptions').hide();
	$('.btnLogout').hide();
	$('#controlsManual').hide();

	$('#popupIgnore').hide();
	$('#error').hide();
	$('#working').hide();
	$('.chkProgress').hide();
	$('.sidebar').hide();

	if (/^(word|outlook)$/.test(g_client) && /Trident|MSIE|Edge/.test(window.navigator.userAgent)) {
		$('#placeholder').html(l10n_translate_html('ERR_OFFICE_TOO_OLD'));
	}
	else {
		$('#placeholder').remove();
	}

	$('.rpl-vars').each(function() {
		let e = $(this);
		if (e.text()) {
			e.text(e.text().replace('{VERSION}', VERSION));
		}
		if (e.attr('src')) {
			e.attr('src', e.attr('src').replace('{ROOT_URL_SELF}', ROOT_URL_SELF));
		}
	});

	if (!haveLocalStorage()) {
		let doms = {
			'gramtrans.com': true,
		};
		let host = ROOT_URL_SELF.match(/^https:\/\/([^\/]+)/)[1];
		doms[host] = true;
		doms[window.location.host] = true;
		doms = '<ul><li>'+Object.keys(doms).join('</li><li>')+'</li></ul>';
		//console.log(doms);
		showError('ERR_NO_STORAGE', {TRUSTED_DOMAINS: doms});
		matomo_event('error', 'no-local-storage');
		return;
	}

	impl_startLogin();

	g_impl.showWarning = showWarning;
	g_impl.showError = showError;

	g_impl.parseCheckStart = function() {
		cmarking.m = -1;
		$('.chkProgressBar').css('width', '0%');
	};
	g_impl.parseProgress = function() {
		$('.chkProgressBar').css('width', (to_send_i/to_send.length*100.0) + '%');
	};
	g_impl.parseNoResult = function(rv) {
		$('.chkProgress').hide();
		//console.log(rv);
	};
	g_impl.parseChunkDone = function() {
		if (cmarking.m === -1) {
			btnNext();
		}

		if (to_send_i < to_send.length) {
			sendTexts();
		}
		else {
			$('.chkProgress').hide();
		}
	};
	g_impl.parseError = function(e) {
		//console.log(e);
		$('.chkProgress').hide();
	};
	g_impl.parseSendStart = function() {
		$('.chkProgress').show();
	};
	g_impl.parseSendEnd = function() {
		setTimeout(function() {
			parseResult({c:'', v:VERSION_PROTOCOL, t:0});
		}, 100);
		$('.chkProgress').hide();
	};

	if (g_client == 'adobe') {
		$('a[href^="https://"]').click(function () {
			let url = $(this).attr('href');
			g_impl.openExternal(url);
		});
		$('form[action^="https://"]').submit(function () {
			let url = $(this).attr('action');
			g_impl.openExternal(url);
		});
	}

	matomo_load();
}

function sidebarLoaded() {
	if (!g_impl.loaded) {
		//console.log('Waiting for implementation to load');
		setTimeout(sidebarLoaded, 200);
		return;
	}
	g_impl.init(initSidebar);
}

$(function() {
	sidebarLoaded();
});

function showError(msg, args) {
	if (!select_fail && msg == 'ERR_SELECT_NOTFOUND') {
		//console.log('Retrying select...');
		$('#working').show();
		select_fail = true;
		setTimeout(markingRender, 250);
		return;
	}

	if (typeof args !== 'object') {
		args = {};
	}
	//console.log([msg, args]);
	$('#error').show();
	$('#working').hide();
	let txt = l10n_translate(msg);
	if (txt.indexOf('{SNIPPET}') !== -1) {
		args['SNIPPET'] = markingGetSnippet();
	}
	for (let k in args) {
		txt = txt.replace('{'+k+'}', args[k]);
	}
	$('#error-text').html(txt);
}

function showWarning(msg, args) {
	if (!$('#warning').length) {
		$('#error').after('<div class="closable" id="warning"><div class="closer">&times;</div><div id="warning-text">…</div></div>');
		$('#warning').find('.closer').click(function() {
			$(this).closest('.closable').hide();
		});
	}
	$('#warning').show();
	let txt = l10n_translate(msg);
	for (let k in args) {
		txt = txt.replace('{'+k+'}', escHTML(args[k]));
	}
	$('#warning-text').html(txt);
}
