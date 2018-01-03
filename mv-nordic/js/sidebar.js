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

/* globals Defs */
/* globals escHTML */
/* globals g_conf_defaults */
/* globals is_upper */
/* globals marking_types */
/* globals murmurHash3 */
/* globals sanitize_result */
/* globals types_red */
/* globals types_yellow */
/* globals uc_first */
/* globals google */
/* globals g_tool:true */
/* globals g_mode:true */
/* globals l10n */

let g_conf = {};
/* exported session */
let session = {};
let markings = [];
let cmarking = {s: -1, w: -1};
let cache = {
	grammar: {},
	comma: {},
};
let to_send = null;
let to_send_b = 0;
let to_send_i = 0;
let ts_xhr = null;
let ts_slow = null;
let ts_fail = 0;
let ignores = {};

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
		console.log(`Skip ignored ${ik} : ${cmarking.sentence}`);
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
	$('#chkChecking').show();

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
		$('#btnAddWord').removeClass('disabled');
	}
	else {
		$('#btnAddWord').addClass('disabled');
	}

	let es = {};
	let el = {};
	for (let i=0 ; i<types.length ; ++i) {
		let et = marking_types[types[i]] ? marking_types[types[i]][0] : (types[i] + ' ');
		et = '<p>'+et.replace(/(<\/h\d>)/g, '$1<br><br>').replace(/(<br>\s*)+<br>\s*/g, '</p><p>')+'</p>';
		es[et] = et.replace(/<p>\s*<\/p>/g, '');

		et = marking_types[types[i]] ? marking_types[types[i]][1] : (types[i] + ' ');
		et = '<p>'+et.replace(/(<\/h\d>)/g, '$1<br><br>').replace(/(<br>\s*)+<br>\s*/g, '</p><p>')+'</p>';
		el[et] = et.replace(/<p>\s*<\/p>/g, '');
	}
	es = $.map(es, function(v) {
		return v;
	}).join('<hr>');
	el = $.map(el, function(v) {
		return v;
	}).join('<hr>');
	$('#chkExplainLong').hide();
	$('#chkExplainShortText').html(es);
	$('#chkExplainLongText').html(el);
	$('#chkExplainShort').show();

	let alt = '';
	if (g_conf.opt_colorBlind) {
		alt = ' alt';
	}

	$('#chkType').html(marking[1]);

	sentence = sentence.replace(' class="marking"', ' class="marking marking-'+col+alt+' marking-'+g_tool+'"');
	$('#chkSentence').html(sentence);

	if (marking[2].length === 0) {
		$('#chkDidYouMean').hide();
		$('#chkSentence').addClass('divider');
		$('#btnAccept').addClass('disabled');
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
			// \uD83D\uDD0D = 🔍
			suggs += '<div class="suggestion"><span class="link" tabindex="'+(50+i*2)+'">' + escHTML(t) + '</span><a class="suggestion-lookup link" tabindex="'+(50+i*2+1)+'">\uD83D\uDD0D</a></div>';
		}
		$('#chkDidYouMeanItems').html(suggs);
		$('#chkDidYouMeanItems').find('span').off().click(markingAccept);
		$('#chkDidYouMeanItems').find('.suggestion-lookup').off().click(function() {
			alert($(this).text());
		});
		$('#chkDidYouMean').show();
		$('#chkSentence').removeClass('divider');
		$('#btnAccept').removeClass('disabled');
	}

	$('#chkInput').hide();

	markingSetContext();

	if (/(@insert|%ko-|%k-)/.test(markings[s][cmarking.w][1])) {
		let px = /^(.*?)(\S+\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		google.script.run.withFailureHandler(showError).selectInDocument(px[1], px[2] + sx[1], sx[2]);
	}
	else {
		google.script.run.withFailureHandler(showError).selectInDocument(cmarking.prefix, markings[s][cmarking.w][0], cmarking.suffix);
	}
}

function btnAccept() {
	if ($(this).hasClass('disabled')) {
		return;
	}
	$('#chkDidYouMeanItems').find('a').first().click();
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
	console.log(`Ignoring ${ik} in ${cmarking.sentence}`);

	markings[cmarking.s][cmarking.w] = [markings[cmarking.s][cmarking.w][0]];
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
	google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], rpl, cmarking.suffix);
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
				google.script.run.withFailureHandler(showError).replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], $('#chkInputText').val(), cmarking.suffix);
				markings[cmarking.s][cmarking.w] = [rpl];
			}
		}
	}

	cmarking.s = os;
	cmarking.w = ow;
	btnNext();
}

function markingAccept() {
	if (/(@insert|%ko-|%k-)/.test(markings[cmarking.s][cmarking.w][1])) {
		let px = /^(.*?)(\S+)(\s?)$/.exec(cmarking.prefix);
		let sx = /^(\s?\S+)(.*)$/.exec(cmarking.suffix);
		google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(px[1], px[2] + px[3] + sx[1], px[2] + markings[cmarking.s][cmarking.w][0] + px[3] + sx[1], sx[2]);
	}
	else if (/(@nil|%nok-)/.test(markings[cmarking.s][cmarking.w][1])) {
		google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], '', cmarking.suffix);
	}
	else {
		google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], $(this).text(), cmarking.suffix);
	}
}

function _parseResult(rv) {
	$('.chkProgressBar').attr('value', to_send_i);

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
						if (g_tool === 'grammar') {
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
				for (let k=0 ; k<nws.length ; ++k) {
					if (g_tool === 'grammar') {
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
	$('.chkProgressBar').attr('max', to_send.length);
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

		text += `<s${par.i}>\n${par.t}\n</s${par.i}>\n\n`;
		if (text.length >= Defs.MAX_RQ_SIZE) {
			break;
		}
	}

	if (text) {
		let data = {
			t: text,
			r: ts_fail,
		};
		let url = 'https://retmig.dk/callback.php?a=danproof';
		if (g_tool === 'comma') {
			url = 'https://kommaer.dk/dev2/callback.php?a=comma&gac-override=1';
		}
		ts_xhr = $.post(url, data).done(parseResult).fail(() => {
			console.log(this);
			showError('ERR_POSTBACK');
		});
	}
	else {
		setTimeout(() => {
			parseResult({c:''});
		}, 500);
		$('.chkProgress').hide();
	}
}

function checkParagraphs(doc) {
	console.log(doc);
	to_send = doc;
	to_send_i = 0;
	to_send_b = 0;
	markings = [];
	cmarking = {s: -1, w: -1};
	$('.chkProgressBar').attr('value', 0);
	sendTexts();
}

function checkDone() {
	$('.sidebar').hide();
	$('#chkDone').show();
}

function didReplace(rpl) {
	console.log(rpl);
	markings[cmarking.s][cmarking.w] = [rpl];
	btnNext();
}

function getSession(s) {
	console.log(s);
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

$(function() {
	if (g_tool !== 'grammar' && g_tool !== 'comma') {
		g_tool = 'grammar';
	}
	g_conf = Object.assign({}, g_conf_defaults);
	google.script.run.withSuccessHandler(getSession).withFailureHandler(showError).getSession();

	$('.closer').click(function() {
		$(this).closest('.closable').hide();
	});
	$('#chkExplainMore').click(function() {
		$('#chkExplainShort').hide();
		$('#chkExplainLong').show();
	});
	$('#chkExplainLess').click(function() {
		$('#chkExplainLong').hide();
		$('#chkExplainShort').show();
	});

	$('#btnCheckAuto').click(function() {
		g_mode = 'auto';
	});
	$('#btnCheckSelected').click(function() {
		g_mode = 'selected';
		google.script.run.withSuccessHandler(checkParagraphs).withFailureHandler(showError).getSelectedPars();
	});
	$('#btnCheckAll').click(function() {
		g_mode = 'all';
		google.script.run.withSuccessHandler(checkParagraphs).withFailureHandler(showError).getAllPars();
	});

	$('#btnAccept').click(btnAccept);
	$('#btnInput').click(btnInput);
	$('#btnIgnore').click(btnIgnore);
	$('#btnIgnoreAll').click(btnIgnoreAll);
	$('#btnPrev').click(btnPrev);
	$('#btnNext').click(btnNext);

	$('#btnInputOne').click(btnInputOne);
	$('#btnInputAll').click(btnInputAll);

	$('#error').hide();
	$('.chkProgress').hide();
	$('.sidebar').hide();
	$('#chkWelcome').show();
	$('#placeholder').remove();
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n.t(msg));
}
