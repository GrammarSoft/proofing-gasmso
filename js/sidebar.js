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
let cmarking = {s: -1, w: -1};
let ignores = {};
let act_queue = [];
let select_fail = false;
let grammar_retried = false;
let comma_retried = false;
let overlay_sidebars = [];

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
	let b = cmarking.w;
	for (; b>0 ; --b) {
		if (markings[s][b-1][WF_WORD].length === 0) {
			--b;
			break;
		}
	}
	let e = cmarking.w;
	for (; e<markings[s].length ; ++e) {
		if (markings[s][e][WF_WORD].length === 0) {
			break;
		}
	}

	let sent_ana = [];
	let sentence = '';
	cmarking.sentence = '';
	for (let i=b; i<e ; ++i) {
		let m = markings[s][i];
		if (is_nullish(m[WF_WORD])) {
			continue;
		}

		sent_ana.push(m);
		let func = '';
		let icon = '';
		for (let f=0 ; f<func2label.length ; ++f) {
			if (func2label[f].rx.test(m[WF_ANA].func)) {
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
		if (i === cmarking.w) {
			let w = m[WF_WORD];
			sentence += '<span class="marking pos pos_off pos_'+m[WF_ANA].pos+func+'"><span>' + escHTML(w) + '</span><br><span class="func">' + icon + '</span></span> ';
		}
		else {
			if (m[WF_MARK].length > 1 && g_marks.rx_ins.test(m[WF_MARK])) {
				////console.log(`Skipping ${s} ${i}: ${markings[s][i][WF_MARK]}`);
				continue;
			}
			sentence += '<span class="pos pos_off pos_'+m[WF_ANA].pos+func+'"><span>'+escHTML(m[WF_WORD]) + '</span><br><span class="func">' + icon + '</span></span> ';
		}
		cmarking.sentence += m[WF_WORD] + ' ';
	}
	ls_set('sentence_analysis', sent_ana);
	return sentence;
}

function markingSetContext() {
	cmarking.prefix = '';
	for (let i=0 ; i<cmarking.w ; ++i) {
		if (markings[cmarking.s][i][WF_MARK].length > 1 && g_marks.rx_ins.test(markings[cmarking.s][i][WF_MARK])) {
			////console.log(`Skipping ${cmarking.s} ${i}: ${markings[cmarking.s][i][WF_MARK]}`);
			continue;
		}
		if (is_nullish(markings[cmarking.s][i][WF_WORD])) {
			continue;
		}
		cmarking.prefix += markings[cmarking.s][i][WF_WORD] + ' ';
	}

	cmarking.suffix = '';
	for (let i=cmarking.w+1 ; i<markings[cmarking.s].length ; ++i) {
		if (markings[cmarking.s][i][WF_MARK].length > 1 && g_marks.rx_ins.test(markings[cmarking.s][i][WF_MARK])) {
			////console.log(`Skipping ${cmarking.s} ${i}: ${markings[cmarking.s][i][WF_MARK]}`);
			continue;
		}
		if (is_nullish(markings[cmarking.s][i][WF_WORD])) {
			continue;
		}
		cmarking.suffix += markings[cmarking.s][i][WF_WORD] + ' ';
	}
}

function markingGetSnippet() {
	let snippet = '';
	for (let i=Math.max(0, cmarking.w-2) ; i<cmarking.w ; ++i) {
		if (markings[cmarking.s][i][WF_MARK].length > 1 && g_marks.rx_ins.test(markings[cmarking.s][i][WF_MARK])) {
			continue;
		}
		if (is_nullish(markings[cmarking.s][i][WF_WORD])) {
			continue;
		}
		snippet += markings[cmarking.s][i][WF_WORD] + ' ';
	}

	snippet += markings[cmarking.s][cmarking.w][WF_WORD] + ' ';
	for (let i=cmarking.w+1 ; i<Math.min(markings[cmarking.s].length, cmarking.w+3) ; ++i) {
		if (markings[cmarking.s][i][WF_MARK].length > 1 && g_marks.rx_ins.test(markings[cmarking.s][i][WF_MARK])) {
			continue;
		}
		if (is_nullish(markings[cmarking.s][i][WF_WORD])) {
			continue;
		}
		snippet += markings[cmarking.s][i][WF_WORD] + ' ';
	}

	snippet = $.trim(snippet);
	return snippet;
}

function markingRender(skipact) {
	let s = cmarking.s;
	let marking = markings[s][cmarking.w];
	let sentence = markingSetSentence();

	let ik = marking[WF_WORD] + '\t' + marking[WF_MARK];
	if (ignores.hasOwnProperty(ik) && ignores[ik].hasOwnProperty(cmarking.sentence) && ignores[ik][cmarking.sentence] === true) {
		////console.log(`Skip ignored ${ik} : ${cmarking.sentence}`);
		markings[s][cmarking.w] = [marking[WF_WORD], '', '', 0, marking[WF_ANA]];
		if (skipact === 'prev') {
			btnPrev();
		}
		else {
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

	let types = marking[WF_MARK].split(/ /g);
	let col = markingColor(types);

	if (g_marks.dict.test(marking[WF_MARK])) {
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
		let et = g_marks.types[types[i]] ? g_marks.types[types[i]][0] : (types[i] + ' ');
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
	if (/^[,.:!?;]$/.test(marking[WF_WORD])) {
		alt += ' marking-comma';
	}
	else if (marking[WF_WORD].length <= 2) {
		alt += ' marking-enhance';
	}

	$('.chkType').attr('title', marking[WF_MARK]);

	sentence = sentence.replace(' class="marking ', ' class="marking marking-'+col+alt+' marking-'+g_tool.toLowerCase()+' ');
	$('.chkSentence').html(sentence);

	if (marking[WF_SUGGS].length === 0) {
		$('.btnInput').hide();
		$('#chkDidYouMean').hide();
		$('.chkSentence').addClass('divider');
		$('.btnAccept').addClass('disabled');
	}
	else {
		let all_upper = is_upper(marking[WF_WORD]);
		let first_upper = all_upper || is_upper(marking[WF_WORD].charAt(0));

		if (g_marks.to_lower.test(marking[WF_MARK])) {
			all_upper = first_upper = false;
		}

		let suggs = '';
		let ss = marking[WF_SUGGS].split(/\t/g);
		for (let i=0 ; i<ss.length ; ++i) {
			let t = ss[i];
			if (all_upper) {
				t = t.toUpperCase();
			}
			else if (first_upper) {
				t = uc_first(t);
			}
			suggs += '<div class="suggestion"><span class="link link-suggestion" tabindex="'+(50+i*3)+'">' + escHTML(t) + '</span><span class="suggestion-lookup"><a class="link link-corpus" tabindex="'+(50+i*3+1)+'"><span class="icon">𓂀</span></a><a class="link link-dict" tabindex="'+(50+i*3+2)+'"><span class="icon"><i class="bi bi-book"></i></span></a></span></div>';
		}
		$('#chkDidYouMeanItems').html(suggs);
		$('#chkDidYouMeanItems').find('span.link-suggestion').off().click(markingAcceptSuggestion);
		$('#chkDidYouMeanItems').find('.link-corpus').off().click(function() {
			let query = '';
			for (let i=Math.max(0, cmarking.w-2) ; i<cmarking.w ; ++i) {
				if (markings[cmarking.s][i][WF_MARK].length > 1 && g_marks.rx_ins.test(markings[cmarking.s][i][WF_MARK])) {
					continue;
				}
				if (is_nullish(markings[cmarking.s][i][WF_WORD])) {
					continue;
				}
				query += '[word=="' + markings[cmarking.s][i][WF_WORD] + '"]? ';
			}

			query += '[word=="' + $(this).closest('div').find('.link-suggestion').text() + '"] ';

			for (let i=cmarking.w+1 ; i<Math.min(markings[cmarking.s].length, cmarking.w+3) ; ++i) {
				if (markings[cmarking.s][i][WF_MARK].length > 1 && g_marks.rx_ins.test(markings[cmarking.s][i][WF_MARK])) {
					continue;
				}
				if (is_nullish(markings[cmarking.s][i][WF_WORD])) {
					continue;
				}
				query += '[word=="' + markings[cmarking.s][i][WF_WORD] + '"]? ';
			}
			impl_openCorpus($.trim(query));
		});
		$('#chkDidYouMeanItems').find('.link-dict').off().click(function() {
			impl_openDictionary($(this).closest('div').find('.link-suggestion').text());
		});
		g_impl.attachTTS($('#chkDidYouMeanItems').get(0));
		$('.btnInput').show();
		$('#chkDidYouMean').show();
		$('.chkSentence').removeClass('divider');
		$('.btnAccept').removeClass('disabled');
	}

	$('#chkInput').hide();

	markingSetContext();

	$('.icon-accept,.icon-discard').addClass('icon-accept').removeClass('icon-discard');

	if (g_marks.rx_ins.test(marking[WF_MARK])) {
		let px = /^(.*?)(\S+\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		//console.log([cmarking.prefix, cmarking.suffix, px, sx]);
		impl_selectInDocument(px[1], px[2] + sx[1], sx[2]);
		$('.txtAccept').text(l10n_translate(btn_lbl + 'INSERT'));
		if (marking[WF_MARK].indexOf('%k-stop') !== -1) {
			$('.txtAccept').text(l10n_translate(btn_lbl + 'INSERT_STOP'));
		}
		$('.btnAccept').removeClass('disabled');
	}
	else if (g_marks.rx_del.test(marking[WF_MARK])) {
		$('.icon-accept,.icon-discard').addClass('icon-discard').removeClass('icon-accept');
		$('.txtAccept').text(l10n_translate(btn_lbl + 'REMOVE'));
		$('.btnAccept').removeClass('disabled');
		impl_selectInDocument(cmarking.prefix, marking[WF_WORD], cmarking.suffix);
	}
	else {
		$('.txtAccept').text(l10n_translate(btn_lbl + 'REPLACE'));
		let middle = marking[WF_WORD];
		impl_selectInDocument(cmarking.prefix, middle, cmarking.suffix);
	}

	showHideAnalysis();
}

function markingSelect(s, w) {
	cmarking.s = s;
	cmarking.w = w;
	markingRender();
	window.scrollTo(0, 0);
}

function btnSeeList() {
	let html = '';
	let alt = (_live_options.config.opt_color ? ' alt' : '');
	let en = 0;

	for (let s = 0 ; s<markings.length ; ++s) {
		for (let w = 0 ; w<markings[s].length ; ++w) {
			if (markings[s][w][WF_MARK].length > 1) {
				html += '<div class="errorListEntry" onclick="markingSelect('+s+','+w+');" title="'+escHTML(markings[s][w][WF_MARK])+'"><span class="link">';
				let c = Math.max(w-3, 0);
				if (c > 0) {
					html += '…';
				}
				for ( ; c<w ; ++c) {
					html += escHTML(markings[s][c][WF_WORD]) + ' ';
				}
				let col = markingColor(markings[s][w][WF_MARK].split(/ /g));
				html += '<span class="marking marking-'+col+alt+' marking-'+g_tool.toLowerCase()+'">'+escHTML(markings[s][w][WF_WORD])+'</span>';
				c = w+1;
				for ( ; c<markings[s].length && c<w+3 ; ++c) {
					html += ' '+escHTML(markings[s][c][WF_WORD]);
				}
				if (c < markings[s].length) {
					html += '…';
				}
				html += '</span><span class="link suggestion-lookup"><span class="icon icon-lookup"></span></span></div>';
				++en;
			}
		}
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
	$('#chkInputText').val(markings[cmarking.s][cmarking.w][WF_WORD]);
	$('#chkInput').show();
	$('#chkInputText').focus();
}

function markingIgnore() {
	let marking = markings[cmarking.s][cmarking.w];
	let ik = marking[WF_WORD] + '\t' + marking[WF_MARK];
	if (!ignores[ik]) {
		ignores[ik] = {};
	}
	ignores[ik][cmarking.sentence] = true;
	//console.log('Ignoring %s in %s', ik, cmarking.sentence);

	if (g_marks.rx_ins.test(marking[WF_MARK])) {
		markings[cmarking.s][cmarking.w] = [' ', '', '', 0, {pos:'', func:''}, marking[WF_TID]];
	}
	else {
		markings[cmarking.s][cmarking.w] = [marking[WF_WORD], '', '', 0, marking[WF_ANA], marking[WF_TID]];
	}
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
	$('#popupIgnore').hide();
	let mark = markings[cmarking.s][cmarking.w];
	log_marking_action({'a': 'ignore-one', 'm': mark[WF_MARK], 'w': mark[WF_WORD], 't': mark[WF_TID]});

	markingIgnore();
	matomo_event('btnIgnoreOne', mark[WF_MARK], mark[WF_WORD]);
	btnNext();
}

function btnIgnoreAll() {
	$('#popupIgnore').hide();
	let mark = markings[cmarking.s][cmarking.w];
	log_marking_action({'a': 'ignore-all', 'm': mark[WF_MARK], 'w': mark[WF_WORD], 't': mark[WF_TID]});

	let word = mark[WF_WORD];
	let ts = mark[WF_MARK];
	for (let s=0 ; s<markings.length ; ++s) {
		for (let w=0 ; w<markings[s].length ; ++w) {
			if (markings[s][w][WF_WORD] === word && markings[s][w][WF_MARK] && markings[s][w][WF_MARK] === ts) {
				cmarking.s = s;
				cmarking.w = w;
				markingSetSentence();
				markingIgnore();
			}
		}
	}
	matomo_event('btnIgnoreAll', ts, word);
	btnNext();
}

function btnPrev() {
	matomo_event('btnPrev');

	$('#popupIgnore').hide();
	let found = false;
	for (;;) {
		for (let s=cmarking.s ; s>=0 ; --s) {
			if (!markings[s]) {
				continue;
			}

			for (let w=Math.min(cmarking.w, markings[s].length)-1 ; w>=0 ; --w) {
				////console.log(`${s} ${w}`);
				if (!markings[s][w]) {
					continue;
				}

				if (markings[s][w][WF_MARK].length > 1) {
					cmarking.s = s;
					cmarking.w = w;
					found = true;
					break;
				}
			}
			if (found) {
				break;
			}
			cmarking.w = 9999999;
		}
		if (found) {
			break;
		}
		// If no marking was found and we are searching from the end, give up
		if (!found && cmarking.s === markings.length) {
			break;
		}
		// If no marking was found going backward, loop around and try from the end
		cmarking.s = markings.length;
	}

	if (cmarking.s !== markings.length) {
		markingRender('prev');
	}
	else if (to_send_i >= to_send.length) {
		checkDone();
	}
}

function btnNext() {
	matomo_event('btnNext');

	$('#popupIgnore').hide();
	let found = false;
	for (;;) {
		for (let s=cmarking.s ; s<markings.length ; ++s) {
			if (!markings[s]) {
				continue;
			}

			for (let w=cmarking.w+1 ; w<markings[s].length ; ++w) {
				////console.log(`${s} ${w}`);
				if (!markings[s][w]) {
					continue;
				}

				if (markings[s][w][WF_MARK].length > 1) {
					cmarking.s = s;
					cmarking.w = w;
					found = true;
					break;
				}
			}
			if (found) {
				break;
			}
			cmarking.w = -1;
		}
		if (found) {
			break;
		}
		// If no marking was found and we are searching from the start, give up
		if (!found && cmarking.s === -1) {
			break;
		}
		// If no marking was found going forward, loop around and try from the start
		cmarking.s = -1;
	}

	if (cmarking.s !== -1) {
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

	let rpl = $('#chkInputText').val();
	if (rpl.length === 0) {
		rpl = ' ';
	}
	let mark = markings[cmarking.s][cmarking.w];
	matomo_event('btnInputOne', mark[WF_MARK], cmarking.w, rpl);
	log_marking_action({'a': 'input-one', 'm': mark[WF_MARK], 'w': mark[WF_WORD], 'r': rpl, 't': mark[WF_TID]});
	processQueue({f: impl_replaceInDocument, s: cmarking.s, w: cmarking.w, rpl: rpl});
}

function btnInputAll() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let rpl = $('#chkInputText').val();
	if (rpl.length === 0) {
		rpl = ' ';
	}
	let mark = markings[cmarking.s][cmarking.w];
	let word = mark[WF_WORD];
	let ts = mark[WF_MARK];
	let os = cmarking.s;
	let ow = cmarking.w;

	for (let s=0 ; s<markings.length ; ++s) {
		for (let w=0 ; w<markings[s].length ; ++w) {
			if (markings[s][w][WF_WORD] === word && markings[s][w][WF_MARK] && markings[s][w][WF_MARK] === ts) {
				appendQueue({f: impl_replaceInDocument, s: s, w: w, rpl: rpl});
			}
		}
	}

	matomo_event('btnInputAll', ts, word, rpl);
	log_marking_action({'a': 'input-all', 'm': mark[WF_MARK], 'w': word, 'r': rpl, 't': mark[WF_TID]});
	processQueue({f: btnNext, s: os, w: ow});
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

	let mark = markings[cmarking.s][cmarking.w];
	let middle = mark[WF_WORD];
	log_marking_action({'a': 'accept', 'm': mark[WF_MARK], 'w': middle, 'r': $(this).text(), 't': mark[WF_TID]});
	processQueue({f: impl_replaceInDocument, s: cmarking.s, w: cmarking.w, middle: middle, rpl: $(this).text()});
}

function markingAccept() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let mark = markings[cmarking.s][cmarking.w];

	if (g_marks.rx_ins.test(mark[WF_MARK])) {
		let px = /^(.*?)(\S+)(\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		let rpl = mark[WF_WORD];
		log_marking_action({'a': 'accept-insert', 'm': mark[WF_MARK], 'w': markings[cmarking.s][cmarking.w-1][WF_WORD], 'r': rpl, 't': mark[WF_TID]});
		if (/£insert/.test(mark[WF_MARK])) {
			rpl = ' ' + rpl;
		}
		processQueue({f: impl_insertInDocument, s: cmarking.s, w: cmarking.w, prefix: px[1], middle: px[2] + px[3] + sx[1], rpl: px[2] + rpl + px[3] + sx[1], suffix: sx[2]});
	}
	else if (g_marks.rx_del.test(mark[WF_MARK])) {
		log_marking_action({'a': 'accept-remove', 'm': mark[WF_MARK], 'w': mark[WF_WORD], 't': mark[WF_TID]});
		processQueue({f: impl_removeInDocument, s: cmarking.s, w: cmarking.w, rpl: ' '});
	}
	else {
		$('#chkDidYouMeanItems').find('.link').first().click();
	}
}

function appendQueue(action) {
	if (action) {
		act_queue.push(Object.assign({s:0,w:0,prefix:null,middle:null,rpl:null,suffix:null}, action));
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
	cmarking.s = act.s;
	cmarking.w = act.w;

	if (act.f === btnNext) {
		$('#working').hide();
		return act.f();
	}

	markingSetContext();

	let prefix = (act.prefix === null) ? cmarking.prefix : act.prefix;
	let middle = (act.middle === null) ? markings[cmarking.s][cmarking.w][WF_WORD] : act.middle;
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
	markings[cmarking.s][cmarking.w] = [rv.rpl, '', '', 0, markings[cmarking.s][cmarking.w][WF_ANA], markings[cmarking.s][cmarking.w][WF_TID]];
	processQueue();
}

function didReplaceSilent(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
}

function didInsert(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [markings[cmarking.s][cmarking.w][WF_WORD], '', '', 0, markings[cmarking.s][cmarking.w][WF_ANA], markings[cmarking.s][cmarking.w][WF_TID]];
	processQueue();
}

function didRemove(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [STR_NULLISH, '', '', 0, {pos:'', func:''}, markings[cmarking.s][cmarking.w][WF_TID]];
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
	$('.btnSeeList').click(btnSeeList);
	$('.btnCloseSupport,.btnCloseList,.btnCloseLanguages').click(function() {
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
		let mark = markings[cmarking.s][cmarking.w];
		log_marking_action({'a': 'dict-add', 'm': mark[WF_MARK], 'w': mark[WF_WORD], 't': mark[WF_TID]});
		addToDictionary(mark[WF_WORD]);
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
		cmarking = {s: -1, w: -1};
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
		if (cmarking.s === -1) {
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

$(function() {
	g_impl.init(initSidebar);
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
