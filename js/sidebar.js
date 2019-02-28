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

/* globals Defs */
/* globals escHTML */
/* globals g_conf_defaults */
/* globals is_upper */
/* globals marking_types */
/* globals murmurHash3 */
/* globals sanitize_result */
/* globals types_mv */
/* globals types_red */
/* globals types_yellow */
/* globals uc_first */
/* globals google */
/* globals g_tool:true */
/* globals g_mode:true */
/* globals l10n */

let g_mode = null;
let markings = [];
let cmarking = {s: -1, w: -1};
let cache = {
	Grammar: {},
	Comma: {},
};
let to_send = null;
let to_send_b = 0;
let to_send_i = 0;
let ts_xhr = null;
let ts_slow = null;
let ts_fail = 0;
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
		if (markings[s][b-1][0].length === 0) {
			--b;
			break;
		}
	}
	let e = cmarking.w;
	for (; e<markings[s].length ; ++e) {
		if (markings[s][e][0].length === 0) {
			break;
		}
	}

	let sentence = '';
	cmarking.sentence = '';
	for (let i=b; i<e ; ++i) {
		if (i === cmarking.w) {
			let w = markings[s][i][0];
			sentence += '<span class="marking">' + escHTML(w) + '</span> ';
		}
		else {
			if (markings[s][i].length > 1 && /(@insert|%ko-|%k-|%k\b)/.test(markings[s][i][1])) {
				////console.log(`Skipping ${s} ${i}: ${markings[s][i][1]}`);
				continue;
			}
			sentence += escHTML(markings[s][i][0]) + ' ';
		}
		cmarking.sentence += markings[s][i][0] + ' ';
	}
	return sentence;
}

function markingSetContext() {
	cmarking.prefix = '';
	for (let i=0 ; i<cmarking.w ; ++i) {
		if (markings[cmarking.s][i].length > 1 && /(@insert|%ko-|%k-|%k\b)/.test(markings[cmarking.s][i][1])) {
			////console.log(`Skipping ${cmarking.s} ${i}: ${markings[cmarking.s][i][1]}`);
			continue;
		}
		cmarking.prefix += markings[cmarking.s][i][0] + ' ';
	}

	cmarking.suffix = '';
	for (let i=cmarking.w+1 ; i<markings[cmarking.s].length ; ++i) {
		if (markings[cmarking.s][i].length > 1 && /(@insert|%ko-|%k-|%k\b)/.test(markings[cmarking.s][i][1])) {
			////console.log(`Skipping ${cmarking.s} ${i}: ${markings[cmarking.s][i][1]}`);
			continue;
		}
		cmarking.suffix += markings[cmarking.s][i][0] + ' ';
	}
}

function markingColor(types) {
	let col = 'green';
	for (let i=0 ; i<types.length ; ++i) {
		if (types_yellow.hasOwnProperty(types[i])) {
			col = 'yellow';
		}
		if (types_red.hasOwnProperty(types[i])) {
			col = 'red';
			break;
		}
	}
	for (let i=0 ; i<types.length ; ++i) {
		if (types[i] === '@green') {
			col = 'green';
		}
	}
	return col;
}

function markingRender(skipact) {
	let s = cmarking.s;
	let marking = markings[s][cmarking.w];
	let sentence = markingSetSentence();

	let ik = marking[0] + '\t' + marking[1];
	if (ignores.hasOwnProperty(ik) && ignores[ik].hasOwnProperty(cmarking.sentence) && ignores[ik][cmarking.sentence] === true) {
		////console.log(`Skip ignored ${ik} : ${cmarking.sentence}`);
		markings[s][cmarking.w] = [marking[0]];
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
	switchSidebar('#chkChecking'+g_tool);

	let btn_lbl = 'BTN_GRAMMAR_';
	if (g_tool === 'Comma') {
		btn_lbl = 'BTN_COMMA_';
	}

	let types = marking[1].split(/ /g);
	let col = markingColor(types);

	if (types_dictionary.test(marking[1])) {
		$('.btnAddWord').removeClass('disabled');
	}
	else {
		$('.btnAddWord').addClass('disabled');
	}

	if (g_tool === 'Comma' && col === 'yellow' && g_conf.opt_maybe == false) {
		col = 'green';
	}

	let es = {};
	let el = {};
	for (let i=0 ; i<types.length ; ++i) {
		let et = marking_types[types[i]] ? marking_types[types[i]][0] : (types[i] + ' ');
		es[i] = '<h2>'+et+'</h2>';

		et = marking_types[types[i]] ? marking_types[types[i]][1] : (types[i] + ' ');
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

	let alt = (g_conf.opt_color ? ' alt' : '');

	$('.chkType').attr('title', marking[1]);

	sentence = sentence.replace(' class="marking"', ' class="marking marking-'+col+alt+' marking-'+g_tool.toLowerCase()+'"');
	$('.chkSentence').html(sentence);

	if (marking[2].length === 0) {
		$('#chkDidYouMean').hide();
		$('.chkSentence').addClass('divider');
		$('.btnAccept').addClass('disabled');
	}
	else {
		let all_upper = is_upper(marking[0]);
		let first_upper = all_upper || is_upper(marking[0].charAt(0));

		if (marking[1].indexOf('@lower') !== -1) {
			all_upper = first_upper = false;
		}

		let suggs = '';
		let ss = marking[2].split(/\t/g);
		for (let i=0 ; i<ss.length ; ++i) {
			let t = ss[i];
			if (all_upper) {
				t = t.toUpperCase();
			}
			else if (first_upper) {
				t = uc_first(t);
			}
			suggs += '<div class="suggestion"><span class="link" tabindex="'+(50+i*2)+'">' + escHTML(t) + '</span><a class="suggestion-lookup link" tabindex="'+(50+i*2+1)+'"><span class="icon icon-lookup"></span></a></div>';
		}
		$('#chkDidYouMeanItems').html(suggs);
		$('#chkDidYouMeanItems').find('span.link').off().click(markingAcceptSuggestion);
		$('#chkDidYouMeanItems').find('.suggestion-lookup').off().click(function() {
			impl_openDictionary($(this).closest('div').text());
		});
		itw_speak_attach($('#chkDidYouMeanItems').get(0));
		$('#chkDidYouMean').show();
		$('.chkSentence').removeClass('divider');
		$('.btnAccept').removeClass('disabled');
	}

	$('#chkInput').hide();

	markingSetContext();

	$('.icon-accept,.icon-discard').addClass('icon-accept').removeClass('icon-discard');

	if (/(@insert|%ko-|%k-|%k\b)/.test(marking[1])) {
		let px = /^(.*?)(\S+\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		impl_selectInDocument(px[1], px[2] + sx[1], sx[2]);
		$('.txtAccept').text(l10n_translate(btn_lbl + 'INSERT'));
		if (marking[1].indexOf('%k-stop') !== -1) {
			$('.txtAccept').text(l10n_translate(btn_lbl + 'INSERT_STOP'));
		}
		$('.btnAccept').removeClass('disabled');
	}
	else if (/(@nil|%nok-)/.test(marking[1])) {
		$('.icon-accept,.icon-discard').addClass('icon-discard').removeClass('icon-accept');
		$('.txtAccept').text(l10n_translate(btn_lbl + 'REMOVE'));
		$('.btnAccept').removeClass('disabled');
		impl_selectInDocument(cmarking.prefix, marking[0], cmarking.suffix);
	}
	else {
		$('.txtAccept').text(l10n_translate(btn_lbl + 'REPLACE'));
		let middle = marking[0];
		impl_selectInDocument(cmarking.prefix, middle, cmarking.suffix);
	}
}

function markingSelect(s, w) {
	cmarking.s = s;
	cmarking.w = w;
	markingRender();
	window.scrollTo(0, 0);
}

function btnSeeList() {
	let html = '';
	let alt = (g_conf.opt_color ? ' alt' : '');
	let en = 0;

	for (let s = 0 ; s<markings.length ; ++s) {
		for (let w = 0 ; w<markings[s].length ; ++w) {
			if (markings[s][w].length > 1) {
				html += '<div class="errorListEntry" onclick="markingSelect('+s+','+w+');" title="'+escHTML(markings[s][w][1])+'"><span class="link">';
				let c = Math.max(w-3, 0);
				if (c > 0) {
					html += '…';
				}
				for ( ; c<w ; ++c) {
					html += escHTML(markings[s][c][0]) + ' ';
				}
				let col = markingColor(markings[s][w][1].split(/ /g));
				html += '<span class="marking marking-'+col+alt+' marking-'+g_tool.toLowerCase()+'">'+escHTML(markings[s][w][0])+'</span>';
				c = w+1;
				for ( ; c<markings[s].length && c<w+3 ; ++c) {
					html += ' '+escHTML(markings[s][c][0]);
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
	itw_speak_attach($('#errorList').get(0));
	overlay_push('#chkErrorList');
}

function btnAccept() {
	if ($(this).hasClass('disabled')) {
		return;
	}
	$(this).addClass('disabled');
	markingAccept();
}

function btnInput() {
	$('#chkInputText').val(markings[cmarking.s][cmarking.w][0]);
	$('#chkInput').show();
	$('#chkInputText').focus();
}

function markingIgnore() {
	let marking = markings[cmarking.s][cmarking.w];
	let ik = marking[0] + '\t' + marking[1];
	if (!ignores[ik]) {
		ignores[ik] = {};
	}
	ignores[ik][cmarking.sentence] = true;
	//console.log('Ignoring %s in %s', ik, cmarking.sentence);

	if (/(@insert|%ko-|%k-|%k\b)/.test(marking[1])) {
		markings[cmarking.s][cmarking.w] = [' '];
	}
	else {
		markings[cmarking.s][cmarking.w] = [marking[0]];
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
	markingIgnore();
	btnNext();
}

function btnIgnoreAll() {
	$('#popupIgnore').hide();
	let word = markings[cmarking.s][cmarking.w][0];
	let ts = markings[cmarking.s][cmarking.w][1];
	for (let s=0 ; s<markings.length ; ++s) {
		for (let w=0 ; w<markings[s].length ; ++w) {
			if (markings[s][w][0] === word && markings[s][w][1] && markings[s][w][1] === ts) {
				cmarking.s = s;
				cmarking.w = w;
				markingSetSentence();
				markingIgnore();
			}
		}
	}
	btnNext();
}

function btnPrev() {
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

				if (markings[s][w].length > 1) {
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

				if (markings[s][w].length > 1) {
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
	let word = markings[cmarking.s][cmarking.w][0];
	let ts = markings[cmarking.s][cmarking.w][1];
	let os = cmarking.s;
	let ow = cmarking.w;

	for (let s=0 ; s<markings.length ; ++s) {
		for (let w=0 ; w<markings[s].length ; ++w) {
			if (markings[s][w][0] === word && markings[s][w][1] && markings[s][w][1] === ts) {
				appendQueue({f: impl_replaceInDocument, s: s, w: w, rpl: rpl});
			}
		}
	}

	processQueue({f: btnNext, s: os, w: ow});
}

function markingAcceptSuggestion() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	let middle = markings[cmarking.s][cmarking.w][0];
	processQueue({f: impl_replaceInDocument, s: cmarking.s, w: cmarking.w, middle: middle, rpl: $(this).text()});
}

function markingAccept() {
	if (act_queue.length || $('#working').css('display') !== 'none') {
		//console.log('Prevented double action');
		return;
	}

	if (/(@insert|%ko-|%k-|%k\b)/.test(markings[cmarking.s][cmarking.w][1])) {
		let px = /^(.*?)(\S+)(\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		let rpl = markings[cmarking.s][cmarking.w][0];
		if (/@insert/.test(markings[cmarking.s][cmarking.w][1])) {
			rpl = ' ' + rpl;
		}
		processQueue({f: impl_insertInDocument, s: cmarking.s, w: cmarking.w, prefix: px[1], middle: px[2] + px[3] + sx[1], rpl: px[2] + rpl + px[3] + sx[1], suffix: sx[2]});
	}
	else if (/(@nil|%nok-)/.test(markings[cmarking.s][cmarking.w][1])) {
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
	let middle = (act.middle === null) ? markings[cmarking.s][cmarking.w][0] : act.middle;
	let suffix = (act.suffix === null) ? cmarking.suffix : act.suffix;

	return act.f(prefix, middle, act.rpl, suffix);
}

function _parseResult(rv) {
	$('.chkProgressBar').css('width', (to_send_i/to_send.length*100.0) + '%');

	if (!rv.hasOwnProperty('c')) {
		$('.chkProgress').hide();
		//console.log(rv);
		return;
	}

	let txt = sanitize_result(rv.c);
	let ps = [];
	let nps = $.trim(txt.replace(/\n+<\/s>\n+/g, "\n\n")).split(/<\/s\d+>/);

	// Where missing in result, copy from the cache
	for (let k = to_send_b, p=0 ; k<to_send_i ; ++k) {
		let found = false;
		for (let i=p ; i<nps.length ; ++i) {
			if (nps[i].indexOf('<s'+to_send[k].i+'>\n') !== -1) {
				////console.log(`Par ${k} found in result`);
				ps.push(nps[i]);
				p = i;
				found = true;
				break;
			}
		}
		if (!found && to_send[k].h in cache[g_tool]) {
			////console.log(`Par ${k} found in cache`);
			ps.push('<s'+to_send[k].i+'>\n'+cache[g_tool][to_send[k].h]);
		}
	}

	for (let i=0 ; i<ps.length ; ++i) {
		let cp = $.trim(ps[i]);
		if (!cp) {
			continue;
		}

		let lines = cp.split(/\n/);
		let id = parseInt(lines[0].replace(/^<s(.+)>$/, '$1'));
		for (let k = to_send_b ; k<to_send_i ; ++k) {
			if (to_send[k].i === id) {
				cache[g_tool][to_send[k].h] = $.trim(cp.replace(/^<s.+>/g, ''));
				break;
			}
		}

		let words = [];
		let had_mark = false;
		let prev_sentsplit = false;

		for (let j=1 ; j<lines.length ; ++j) {
			// Ignore duplicate opening tags
			if (/^<s\d+>$/.test(lines[j])) {
				continue;
			}

			let w = $.trim(lines[j]).split(/\t/);
			w[0] = $.trim(w[0].replace(/(\S)=/g, '$1 '));

			if (w[0] === '') {
				words.push(w);
				continue;
			}

			if (w.length > 1) {
				// Strip marking types belonging to higher than current critique level
				let ws = w[1].split(/ /g);
				let nws = [];
				let rs = [];
				let crs = [];
				let had_r = false;
				for (let k=0 ; k<ws.length ; ++k) {
					if (ws[k].indexOf('<R:') === 0) {
						let n = ws[k].substr(3);
						n = n.substr(0, n.length-1).replace(/(\S)=/g, '$1 ');
						if (n === w[0]) {
							//console.log(n);
							continue;
						}
						rs.push(n);
						had_r = true;
						continue;
					}
					if (ws[k].indexOf('<AFR:') === 0) {
						let n = ws[k].substr(5);
						n = n.substr(0, n.length-1).replace(/(\S)=/g, '$1 ');
						if (n === w[0]) {
							//console.log(n);
							continue;
						}
						crs.push(n);
						continue;
					}
					if (marking_types.hasOwnProperty(ws[k])) {
						nws.push(ws[k]);
					}
					else {
						//console.log('Unknown marking: '+ws[k]);
						if (g_tool === 'Grammar') {
							nws.push(ws[k]);
						}
						else {
							if (ws[k].indexOf('%nok-') === 0) {
								nws.push('%nok-soft');
							}
							else {
								nws.push('%k');
							}
						}
					}
				}
				crs = rs.concat(crs);
				// Remove @sentsplit from last token
				if (j == lines.length-1 && nws.length == 1 && nws[0] === '@sentsplit') {
					crs = [];
					nws = [];
				}
				// Only show addfejl suggestions if there were real suggestions
				if (!had_r) {
					crs = [];
				}

				ws = [];
				let had_sentsplit = false;
				let none = (g_tool === 'Grammar' && g_conf.opt_mvNordic);

				for (let k=0 ; k<nws.length ; ++k) {
					if (g_tool === 'Grammar') {
						if (nws[k] === '@sentsplit') {
							had_sentsplit = true;
						}
						if (g_conf.opt_mvNordic) {
							if (nws[k] === '@upper' && prev_sentsplit) {
								////console.log(`Skipping @upper due to @sentsplit`);
								continue;
							}
							if (types_mv.hasOwnProperty(nws[k])) {
								none = false;
							}
						}
						if (nws[k] === '@green') {
							ws.push(nws[k]);
							continue;
						}

						// Common
						if (g_conf.opt_onlyConfident && !types_red.hasOwnProperty(nws[k])) {
							continue;
						}
						if (g_conf.opt_ignMaj && (types_to_upper.test(nws[k]) || nws[k] === '@lower')) {
							continue;
						}

						// Danish
						if (g_conf.opt_ignUNames && nws[k] === '@proper') {
							continue;
						}
						if (g_conf.opt_ignUComp && nws[k] === '@new') {
							continue;
						}
						if (g_conf.opt_ignUAbbr && nws[k] === '@abbreviation') {
							continue;
						}
						if (g_conf.opt_ignUOther && nws[k] === '@check!') {
							continue;
						}

						// Swedish
						if (g_conf.opt_ignVartVerb && /@Y(700|710)/.test(nws[k])) {
							continue;
						}
						if (g_conf.opt_ignDomDefinite && /@Y10/.test(nws[k])) {
							continue;
						}
						if (g_conf.opt_ignDomSubjobj && /@Y(20|30)/.test(nws[k])) {
							continue;
						}
						if (g_conf.opt_ignDomPrep && /@Y4[0-4]/.test(nws[k])) {
							continue;
						}
					}
					else {
						if (marking_types[nws[k]][2] > g_conf.opt_level) {
							continue;
						}
						else if (g_conf.opt_green && /^%nok-/.test(nws[k])) {
							continue;
						}
					}
					ws.push(nws[k]);
				}

				if (g_tool === 'Grammar') {
					let col = 'green';
					for (let k=0 ; k<ws.length ; ++k) {
						if (types_yellow.hasOwnProperty(ws[k])) {
							col = 'yellow';
						}
						if (types_red.hasOwnProperty(ws[k])) {
							col = 'red';
							break;
						}
					}
					if (g_conf.opt_useDictionary && types_dictionary.test(ws[0]) && isInDictionary(w[0])) {
						////console.log(`Found ${w[0]} in dictionary`);
						ws = [];
					}
				}

				prev_sentsplit = had_sentsplit;
				if (ws.length && none) {
					////console.log(`Vitec MV whitelist no-match: ${ws}`);
					ws = [];
				}
				nws = ws;
				if (nws.length == 0) {
					crs = [];
				}

				// For case-folding, create a correction if none exists and fold all corrections to the desired case
				for (let k=0 ; k<nws.length ; ++k) {
					if (types_to_upper.test(nws[k])) {
						if (crs.length == 0) {
							crs.push(w[0]);
						}
						for (let c=0 ; c<crs.length ; ++c) {
							crs[c] = uc_first(crs[c]);
						}
					}
					else if (nws[k] == '@lower') {
						if (crs.length == 0) {
							crs.push(w[0]);
						}
						for (let c=0 ; c<crs.length ; ++c) {
							crs[c] = lc_first(crs[c]);
						}
					}
				}

				if (crs.length) {
					// Only show additional suggestions if the real suggestion icase-matches one of them
					let use_adf = false;
					for (let c=1 ; c<crs.length ; ++c) {
						if (crs[0].toUpperCase() == crs[c].toUpperCase()) {
							use_adf = true;
							break;
						}
					}
					if (!use_adf) {
						crs = [crs[0]];
					}
					crs = crs.unique();
					w[2] = crs.join('\t');
					////console.log(crs);
				}
				if (nws.length) {
					w[1] = nws.join(' ');
					if (!w[2] || w[2].length === 0) {
						w[2] = '';
					}
					if (w[1].indexOf(' ') !== -1) {
						w[1] = w[1].replace(/ @error /g, ' ').replace(/ @error$/g, '').replace(/^@error /g, '');
					}

					w[3] = 0;
					if (w[1].indexOf('@-comp') !== -1) {
						w[3] |= Defs.TYPE_COMP_LEFT;
					}
					if (types_comp_right.test(w[1])) {
						w[3] |= Defs.TYPE_COMP_RIGHT;
					}
					if (w[1].indexOf('@comp-:-') !== -1) {
						w[3] |= Defs.TYPE_COMP_HYPHEN;
					}

					had_mark = true;
				}
				else {
					w.pop();
				}
			}
			if (w.length > 1 && /(%ko-|%k-|%k\b)/.test(w[1])) {
				let wo = w[0];
				w[0] = ',';
				if (w[1].indexOf('%k-stop') !== -1) {
					w[0] = '.';
				}
				words.push(w);
				w = [wo];
			}
			words.push(w);
		}
		if (had_mark) {
			// Pre-merge compound errors with the token they're supposed to be with, respecting other corrections to either side of the merge
			for (let j=0 ; j<words.length ; ) {
				if (words[j].length > 1 && words[j][3] & Defs.TYPE_COMP) {
					let ts = words[j][1];
					let wx = '';
					let px = '';
					let sx = '';
					if (words[j][3] & Defs.TYPE_COMP_LEFT) {
						if (words[j-1].length > 1 && words[j-1][1]) {
							ts += ' '+words[j-1][1];
						}
						wx = words[j-1][0] + ' ' + words[j][0];
						px = words[j-1][0];
						if (words[j-1].length > 1 && words[j-1][2]) {
							px = words[j-1][2];
						}
						sx = words[j][0];
						if (words[j][2]) {
							sx = words[j][2];
						}
					}
					if (words[j][3] & Defs.TYPE_COMP_RIGHT) {
						if (words[j+1].length > 1 && words[j+1][1]) {
							ts += ' '+words[j+1][1];
						}
						wx = words[j][0] + ' ' + words[j+1][0];
						px = words[j][0];
						if (words[j][2]) {
							px = words[j][2];
						}
						sx = words[j+1][0];
						if (words[j+1].length > 1 && words[j+1][2]) {
							sx = words[j+1][2];
						}
					}

					px = px.split(/\t/);
					sx = sx.split(/\t/);
					let space = '';
					if (words[j][3] & Defs.TYPE_COMP_HYPHEN) {
						space = '‐';
					}
					let es = [];
					for (let p=0 ; p<px.length ; ++p) {
						for (let s=0 ; s<sx.length ; ++s) {
							es.push(px[p] + space + sx[s]);
						}
					}
					let nw = [wx, ts.split(/ /).unique().join(' ').replace(/ +/g, ' '), es.join('\t')];
					words[j] = nw;

					if (words[j][3] & Defs.TYPE_COMP_LEFT) {
						words.splice(j-1, 1);
					}
					else {
						words.splice(j+1, 1);
						++j;
					}
				}
				else {
					++j;
				}
			}
			markings.push(words);
		}
	}

	if (cmarking.s === -1) {
		btnNext();
	}

	if (to_send_i < to_send.length) {
		sendTexts();
	}
	else {
		$('.chkProgress').hide();
	}
}

function parseResult(rv) {
	try {
		_parseResult(rv);
	}
	catch (e) {
		//console.log(e);
		$('.chkProgress').hide();
	}
}

function sendTexts() {
	$('.chkProgress').show();
	let text = '';

	for (to_send_b = to_send_i ; to_send_i < to_send.length && text.length < Defs.MAX_RQ_SIZE ; ++to_send_i) {
		let par = to_send[to_send_i];

		if (!par.hasOwnProperty('h')) {
			par.h = 'h-'+murmurHash3.x86.hash128(par.t) + '-' + par.t.length;
		}

		if (par.h in cache[g_tool]) {
			////console.log(`Par ${par.i} found in cache`);
			continue;
		}

		// MS Word Online sends a Narrow No-Break Space
		let t = par.t.replace('\u202F', ' ');

		t = t.replace('\u00AD', ''); // Soft Hyphen

		text += '<s'+par.i+'>\n'+t+'\n</s'+par.i+'>\n\n';
	}

	if (text) {
		let url = ROOT_URL_GRAMMAR + '/callback.php?a=grammar';
		if (g_tool === 'Comma') {
			url = ROOT_URL_GRAMMAR + '/callback.php?a=comma';
		}
		let data = {
			t: text,
			r: ts_fail,
			SessionID: g_access_token.sessionid,
		};
		ts_xhr = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			headers: {HMAC: g_access_token.hmac},
			data: data,
		}).done(parseResult).fail(function() {
			//console.log(this);
			showError('ERR_POSTBACK');
		});
	}
	else {
		setTimeout(function() {
			parseResult({c:''});
		}, 500);
		$('.chkProgress').hide();
	}
}

function checkParagraphs(doc) {
	loadConfig();
	loadDictionary();

	//console.log(doc);
	to_send = doc;
	to_send_i = 0;
	to_send_b = 0;
	markings = [];
	cmarking = {s: -1, w: -1};
	$('.chkProgressBar').css('width', '0%');
	sendTexts();
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
	markings[cmarking.s][cmarking.w] = [rv.rpl];
	processQueue();
}

function didReplaceSilent(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
}

function didInsert(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [markings[cmarking.s][cmarking.w][0]];
	processQueue();
}

function didRemove(rv) {
	//console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [''];
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

	loadConfig();
	loadDictionary();
	itw_speak_attach(document.body);
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
			if (impl_canGrammar() && impl_canComma()) {
				$('.chkGrammarToComma').show();
				$('.btnCheckComma').show();
				$('.comma-specific').show();
				switchSidebar('#chkWelcomeShared');
			}
			else if (impl_canComma()) {
				$('.chkGrammarToComma').hide();
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
		g_access_token = Object.assign({}, g_access_token_defaults);
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
	window.open(SIGNOUT_URL+g_access_token.sessionid, 'Logout');

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

	g_access_token = Object.assign({}, g_access_token_defaults);
	ls_set('access-token', g_access_token);

	loginListener();
	switchSidebar('#chkWelcomeLogin');
}

function initSidebar() {
	$.ajaxSetup({
		xhrFields: {
			withCredentials: true,
		},
	});

	window.addEventListener('message', loginMessage, false);

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
	});
	$('.chkExplainLess').click(function() {
		$('.chkExplainLong').hide();
		$('.chkExplainShort').show();
	});

	if (g_conf.opt_longExplanations) {
		$('.chkExplainLong').show();
		$('.chkExplainShort').hide();
	}
	else {
		$('.chkExplainLong').hide();
		$('.chkExplainShort').show();
	}

	$('.btnOptions').click(function() {
		impl_showOptions(g_tool);
	});
	$('.btnRestart').click(function() {
		$('#error').hide();
		$('#working').hide();
		ignores = {};
		impl_startLogin();
	});
	$('.btnSupport').click(function() {
		if ($('#chkSupport:visible').length) {
			overlay_pop();
		}
		else {
			overlay_push('#chkSupport');
		}
	});
	$('.btnSeeList').click(btnSeeList);
	$('.btnCloseSupport,.btnCloseList').click(function() {
		overlay_pop();
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
	});
	$('.btnCheckGrammar').click(function() {
		g_tool = 'Grammar';
		switchSidebar('#chkWelcome' + g_tool);
	});
	$('.btnCheckComma').click(function() {
		g_tool = 'Comma';
		switchSidebar('#chkWelcome' + g_tool);
	});

	$('.btnAddWord').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		addToDictionary(markings[cmarking.s][cmarking.w][0]);
		$('.btnIgnoreAll').click();
	});

	$('.btnLoginGrammar').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		window.open(ROOT_URL_GRAMMAR + '/login.php?popup=1&channel='+g_login_channel, 'Login');
	});

	$('.btnLogout').click(logout);
	$('.btnOptions').hide();
	$('.btnLogout').hide();

	$('#popupIgnore').hide();
	$('#error').hide();
	$('#working').hide();
	$('.chkProgress').hide();
	$('.sidebar').hide();
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

	if (!haveLocalStorage()) {
		showError('ERR_NO_STORAGE');
		return;
	}

	impl_startLogin();
}

$(function() {
	impl_Init(initSidebar);
});

function showError(msg) {
	if (!select_fail && msg == 'ERR_SELECT_NOTFOUND') {
		//console.log('Retrying select...');
		$('#working').show();
		select_fail = true;
		setTimeout(markingRender, 250);
		return;
	}
	//console.log(msg);
	$('#error').show();
	$('#working').hide();
	$('#error-text').text(l10n_translate(msg));
}
