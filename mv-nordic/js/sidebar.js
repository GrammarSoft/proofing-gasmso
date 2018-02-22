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

let g_tool = null;
let g_mode = null;
let g_conf = {};
/* exported session */
let session = {};
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

function isInDictionary(word) {
	return _live_dictionary.hasOwnProperty(word);
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
			sentence += '<span class="marking">' + escHTML(markings[s][i][0]) + '</span> ';
		}
		else {
			if (markings[s][i].length > 1 && /(@insert|%ko-|%k-)/.test(markings[s][i][1])) {
				//console.log(`Skipping ${s} ${i}: ${markings[s][i][1]}`);
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
		if (markings[cmarking.s][i].length > 1 && /(@insert|%ko-|%k-)/.test(markings[cmarking.s][i][1])) {
			//console.log(`Skipping ${cmarking.s} ${i}: ${markings[cmarking.s][i][1]}`);
			continue;
		}
		cmarking.prefix += markings[cmarking.s][i][0] + ' ';
	}

	cmarking.suffix = '';
	for (let i=cmarking.w+1 ; i<markings[cmarking.s].length ; ++i) {
		if (markings[cmarking.s][i].length > 1 && /(@insert|%ko-|%k-)/.test(markings[cmarking.s][i][1])) {
			//console.log(`Skipping ${cmarking.s} ${i}: ${markings[cmarking.s][i][1]}`);
			continue;
		}
		cmarking.suffix += markings[cmarking.s][i][0] + ' ';
	}
}

function markingRender(skipact) {
	let s = cmarking.s;
	let marking = markings[s][cmarking.w];
	let sentence = markingSetSentence();

	let ik = marking[0] + '\t' + marking[1];
	if (ignores.hasOwnProperty(ik) && ignores[ik].hasOwnProperty(cmarking.sentence) && ignores[ik][cmarking.sentence] === true) {
		//console.log(`Skip ignored ${ik} : ${cmarking.sentence}`);
		markings[s][cmarking.w] = [marking[0]];
		if (skipact === 'prev') {
			btnPrev();
		}
		else {
			btnNext();
		}
		return;
	}

	$('#error').hide();
	$('.sidebar').hide();
	$('#chkChecking'+g_tool).show();

	let btn_lbl = 'BTN_GRAMMAR_';
	if (g_tool === 'Comma') {
		btn_lbl = 'BTN_COMMA_';
	}

	let col = 'green';
	let types = marking[1].split(/ /g);
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

	if (col === 'yellow') {
		$('.btnAddWord').removeClass('disabled');
	}
	else {
		$('.btnAddWord').addClass('disabled');
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

	let alt = '';
	if (g_conf.opt_colorBlind) {
		alt = ' alt';
	}

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
		$('#chkDidYouMeanItems').find('span').off().click(markingAcceptSuggestion);
		$('#chkDidYouMeanItems').find('.suggestion-lookup').off().click(function() {
			alert($(this).text());
		});
		$('#chkDidYouMean').show();
		$('.chkSentence').removeClass('divider');
		$('.btnAccept').removeClass('disabled');
	}

	$('#chkInput').hide();

	markingSetContext();

	$('.icon-accept,.icon-discard').addClass('icon-accept').removeClass('icon-discard');

	if (/(@insert|%ko-|%k-)/.test(marking[1])) {
		let px = /^(.*?)(\S+\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		impl_selectInDocument(px[1], px[2] + sx[1], sx[2]);
		$('.txtAccept').text(l10n.t(btn_lbl + 'INSERT'));
		if (marking[1].indexOf('%k-stop') !== -1) {
			$('.txtAccept').text(l10n.t(btn_lbl + 'INSERT_STOP'));
		}
		$('.btnAccept').removeClass('disabled');
	}
	else if (/(@nil|%nok-)/.test(marking[1])) {
		$('.icon-accept,.icon-discard').addClass('icon-discard').removeClass('icon-accept');
		$('.txtAccept').text(l10n.t(btn_lbl + 'REMOVE'));
		$('.btnAccept').removeClass('disabled');
		impl_selectInDocument(cmarking.prefix, marking[0], cmarking.suffix);
	}
	else {
		$('.txtAccept').text(l10n.t(btn_lbl + 'REPLACE'));
		impl_selectInDocument(cmarking.prefix, marking[0], cmarking.suffix);
	}
}

function btnAccept() {
	if ($(this).hasClass('disabled')) {
		return;
	}
	markingAccept();
}

function btnInput() {
	$('#chkInputText').val(markings[cmarking.s][cmarking.w][0]);
	$('#chkInput').show();
	$('#chkInputText').focus();
}

function markingIgnore() {
	let ik = markings[cmarking.s][cmarking.w][0] + '\t' + markings[cmarking.s][cmarking.w][1];
	if (!ignores[ik]) {
		ignores[ik] = {};
	}
	ignores[ik][cmarking.sentence] = true;
	//console.log(`Ignoring ${ik} in ${cmarking.sentence}`);

	markings[cmarking.s][cmarking.w] = [markings[cmarking.s][cmarking.w][0]];
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
	markingIgnore();
	btnNext();
}

function btnIgnoreAll() {
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
	let found = false;
	for (;;) {
		for (let s=cmarking.s ; s>=0 ; --s) {
			if (!markings[s]) {
				continue;
			}

			for (let w=Math.min(cmarking.w, markings[s].length)-1 ; w>=0 ; --w) {
				//console.log(`${s} ${w}`);
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
	let found = false;
	for (;;) {
		for (let s=cmarking.s ; s<markings.length ; ++s) {
			if (!markings[s]) {
				continue;
			}

			for (let w=cmarking.w+1 ; w<markings[s].length ; ++w) {
				//console.log(`${s} ${w}`);
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
	let rpl = $('#chkInputText').val();
	if (rpl.length === 0) {
		rpl = ' ';
	}
	impl_replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], rpl, cmarking.suffix);
}

function btnInputAll() {
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
				cmarking.s = s;
				cmarking.w = w;
				markingSetContext();
				impl_replaceInDocumentSilent(cmarking.prefix, markings[cmarking.s][cmarking.w][0], $('#chkInputText').val(), cmarking.suffix);
				markings[cmarking.s][cmarking.w] = [rpl];
			}
		}
	}

	cmarking.s = os;
	cmarking.w = ow;
	btnNext();
}

function markingAcceptSuggestion() {
	impl_replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], $(this).text(), cmarking.suffix);
}

function markingAccept() {
	if (/(@insert|%ko-|%k-)/.test(markings[cmarking.s][cmarking.w][1])) {
		let px = /^(.*?)(\S+)(\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		let rpl = markings[cmarking.s][cmarking.w][0];
		if (/@insert/.test(markings[cmarking.s][cmarking.w][1])) {
			rpl = ' ' + rpl;
		}
		impl_insertInDocument(px[1], px[2] + px[3] + sx[1], px[2] + rpl + px[3] + sx[1], sx[2]);
	}
	else if (/(@nil|%nok-)/.test(markings[cmarking.s][cmarking.w][1])) {
		impl_removeInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], ' ', cmarking.suffix);
	}
	else {
		$('#chkDidYouMeanItems').find('.link').first().click();
	}
}

function _parseResult(rv) {
	$('.chkProgressBar').css('width', (to_send_i/to_send.length*100.0) + '%');

	if (!rv.hasOwnProperty('c')) {
		$('.chkProgress').hide();
		console.log(rv);
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
				//console.log(`Par ${k} found in result`);
				ps.push(nps[i]);
				p = i;
				found = true;
				break;
			}
		}
		if (!found && to_send[k].h in cache[g_tool]) {
			//console.log(`Par ${k} found in cache`);
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

			let w = lines[j].split(/\t/);
			w[0] = $.trim(w[0].replace(/(\S)=/g, '$1 '));

			if (w[0] === '') {
				words.push(w);
				continue;
			}

			if (w.length > 1) {
				// Strip marking types belonging to higher than current critique level
				let ws = w[1].split(/ /g);
				let nws = [];
				let crs = [];
				let had_r = false;
				for (let k=0 ; k<ws.length ; ++k) {
					if (ws[k].indexOf('<R:') === 0) {
						let n = ws[k].substr(3);
						n = n.substr(0, n.length-1).replace(/(\S)=/g, '$1 ');
						if (n === w[0]) {
							console.log(n);
							continue;
						}
						crs.unshift(n);
						had_r = true;
						continue;
					}
					if (ws[k].indexOf('<AFR:') === 0) {
						let n = ws[k].substr(5);
						n = n.substr(0, n.length-1).replace(/(\S)=/g, '$1 ');
						if (n === w[0]) {
							console.log(n);
							continue;
						}
						crs.push(n);
						continue;
					}
					if (marking_types.hasOwnProperty(ws[k])) {
						nws.push(ws[k]);
					}
					else {
						console.log('Unknown marking: '+ws[k]);
						if (g_tool === 'Grammar') {
							nws.push('@unknown-marking');
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
								//console.log(`Skipping @upper due to @sentsplit`);
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
						if (g_conf.opt_onlyConfident && !types_red.hasOwnProperty(nws[k])) {
							continue;
						}
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
						if (g_conf.opt_ignMaj && (nws[k] === '@upper' || nws[k] === '@lower')) {
							continue;
						}
					}
					else {
						if (marking_types[nws[k]][2] > g_conf.opt_level) {
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
					if (col === 'yellow' && g_conf.opt_useDictionary && isInDictionary(w[0])) {
						//console.log(`Found ${w[0]} in dictionary`);
						ws = [];
					}
				}

				prev_sentsplit = had_sentsplit;
				if (ws.length && none) {
					//console.log(`MV Nordic whitelist no-match: ${ws}`);
					ws = [];
				}
				nws = ws;
				if (nws.length == 0) {
					crs = [];
				}

				if (crs.length) {
					// Only show addfejl suggestions if the real suggestion icase-matches one of them
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
					//console.log(crs);
				}
				if (nws.length) {
					w[1] = nws.join(' ');
					if (!w[2] || w[2].length === 0) {
						w[2] = '';
					}
					if (w[1].indexOf(' ') !== -1) {
						w[1] = w[1].replace(/ @error /g, ' ').replace(/ @error$/g, '').replace(/^@error /g, '');
					}
					had_mark = true;
				}
				else {
					w.pop();
				}
			}
			if (w.length > 1 && (w[1].indexOf('%k-') !== -1 || w[1].indexOf('%ko-') !== -1)) {
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
		console.log(e);
		$('.chkProgress').hide();
	}
}

function sendTexts() {
	$('.chkProgress').show();
	let text = '';

	for (to_send_b = to_send_i ; to_send_i < to_send.length ; ++to_send_i) {
		let par = to_send[to_send_i];

		if (!par.hasOwnProperty('h')) {
			par.h = 'h-'+murmurHash3.x86.hash128(par.t) + '-' + par.t.length;
		}

		if (par.h in cache[g_tool]) {
			//console.log(`Par ${par.i} found in cache`);
			continue;
		}

		// MS Word Online sends a Narrow No-Break Space
		let t = par.t.replace('\u202F', ' ');

		text += '<s'+par.i+'>\n'+t+'\n</s'+par.i+'>\n\n';
		if (text.length >= Defs.MAX_RQ_SIZE) {
			break;
		}
	}

	if (text) {
		let url = ROOT_URL_GRAMMAR + 'callback.php?a=danproof';
		let token = g_access_grammar;
		if (g_tool === 'Comma') {
			url = ROOT_URL_COMMA + 'callback.php?a=comma';
			token = g_access_comma;
		}
		let data = {
			t: text,
			r: ts_fail,
			SessionID: token.sessionid,
		};
		ts_xhr = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			headers: {HMAC: token.hmac},
			data: data,
		}).done(parseResult).fail(function() {
			console.log(this);
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

	console.log(doc);
	to_send = doc;
	to_send_i = 0;
	to_send_b = 0;
	markings = [];
	cmarking = {s: -1, w: -1};
	$('.chkProgressBar').css('width', '0%');
	sendTexts();
}

function checkDone() {
	if (g_tool === 'Grammar' && $('.optComma').prop('checked')) {
		g_tool = 'Comma';
		if (g_mode === 'all' || g_mode === 'selected') {
			checkParagraphs(to_send);
		}
		else {
			$('.btnCheckComma').click();
		}
	}
	else {
		$('.sidebar').hide();
		$('#chkDone' + g_tool).show();
	}
}

function _did_helper(before, after) {
	for (let i=0 ; i<to_send.length ; ++i) {
		if (to_send[i].t === before) {
			//console.log([before, after]);
			to_send[i].t = after;
			delete to_send[i].h;
		}
	}
}

function didReplace(rv) {
	console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [rv.rpl];
	btnNext();
}

function didReplaceSilent(rv) {
	console.log(rv);
	_did_helper(rv.before, rv.after);
}

function didInsert(rv) {
	console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [markings[cmarking.s][cmarking.w][0]];
	btnNext();
}

function didRemove(rv) {
	console.log(rv);
	_did_helper(rv.before, rv.after);
	markings[cmarking.s][cmarking.w] = [''];
	btnNext();
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
}

function loginCheck() {
	g_access_grammar = ls_get('access-grammar', {hmac: '', sessionid: ''});
	g_access_comma = ls_get('access-comma', {hmac: '', sessionid: ''});
	g_access_grammar.hmac = g_access_grammar.hmac || g_access_comma.hmac;
	g_access_grammar.sessionid = g_access_grammar.sessionid || g_access_comma.sessionid;
	g_access_comma.hmac = g_access_comma.hmac || g_access_grammar.hmac;
	g_access_comma.sessionid = g_access_comma.sessionid || g_access_grammar.sessionid;

	$.ajax({
		url: ROOT_URL_GRAMMAR+'/callback.php',
		type: 'POST',
		dataType: 'json',
		headers: {HMAC: g_access_grammar.hmac},
		data: {a: 'keepalive', SessionID: g_access_grammar.sessionid},
	}).done(function(rv) {
		console.log('Login Grammar success');
		delete rv.a;
		g_access_grammar = rv;
		ls_set('access-grammar', g_access_grammar);
		g_access_comma.hmac = g_access_comma.hmac || g_access_grammar.hmac;
		g_access_comma.sessionid = g_access_comma.sessionid || g_access_grammar.sessionid;

		$.ajax({
			url: ROOT_URL_COMMA+'/callback.php',
			type: 'POST',
			dataType: 'json',
			headers: {HMAC: g_access_comma.hmac},
			data: {a: 'keepalive', SessionID: g_access_comma.sessionid},
		}).done(function(rv) {
			console.log('Login Comma success');
			delete rv.a;
			g_access_comma = rv;
			ls_set('access-comma', g_access_comma);
		}).fail(function() {
			console.log('Login Comma fail');
			g_access_comma = {hmac: '', sessionid: ''};
			ls_set('access-comma', g_access_comma);

			if (g_tool === 'Comma') {
				g_tool = 'Grammar';
				$('.sidebar').hide();
				$('#chkWelcome' + g_tool).show();
			}
		});
	}).fail(function() {
		console.log('Login Grammar fail');
		g_access_grammar = {hmac: '', sessionid: ''};
		ls_set('access-grammar', g_access_grammar);

		$.ajax({
			url: ROOT_URL_COMMA+'/callback.php',
			type: 'POST',
			dataType: 'json',
			headers: {HMAC: g_access_comma.hmac},
			data: {a: 'keepalive', SessionID: g_access_comma.sessionid},
		}).done(function(rv) {
			console.log('Login Comma success');
			delete rv.a;
			g_access_comma = rv;
			ls_set('access-comma', g_access_comma);

			if (g_tool === 'Grammar') {
				g_tool = 'Comma';
				$('.sidebar').hide();
				$('#chkWelcome' + g_tool).show();
			}
		}).fail(function() {
			console.log('Login Comma fail');
			g_access_comma = {hmac: '', sessionid: ''};
			ls_set('access-comma', g_access_comma);

			impl_showLogin(g_tool);
		});
	});
}

function initSidebar() {
	if (g_tool !== 'Grammar' && g_tool !== 'Comma') {
		g_tool = 'Grammar';
	}
	g_conf = Object.assign({}, g_conf_defaults);
	impl_getState();

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
		$('.sidebar').hide();
		$('#chkWelcome' + g_tool).show();
	});
	$('.btnCheckGrammar').click(function() {
		g_tool = 'Grammar';
		$('.sidebar').hide();
		$('#chkWelcome' + g_tool).show();
	});
	$('.btnCheckComma').click(function() {
		g_tool = 'Comma';
		$('.sidebar').hide();
		$('#chkWelcome' + g_tool).show();
	});

	$('.btnAddWord').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		addToDictionary(markings[cmarking.s][cmarking.w][0]);
		$('#chkInputText').val(markings[cmarking.s][cmarking.w][0]);
		$('.btnInputOne').click();
	});

	$('#popupIgnore').hide();
	$('#error').hide();
	$('.chkProgress').hide();
	$('.sidebar').hide();
	if (window.location.href.indexOf('combined=1') !== -1) {
		$('#chkWelcomeShared').show();
	}
	else {
		$('#chkWelcome' + g_tool).show();
	}
	$('#placeholder').remove();

	if (!haveLocalStorage()) {
		showError('ERR_NO_STORAGE');
		return;
	}

	loginCheck();
}

$(function() {
	impl_Init(initSidebar);
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n.t(msg));
}
