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

var g_conf = {};
var session = {};
var markings = [];
var cmarking = {s: -1, w: -1};
var cache = {};
var to_send = null;
var to_send_b = 0;
var to_send_i = 0;
var ts_xhr = null;
var ts_slow = null;
var ts_fail = 0;
var ignores = {};

function markingSetSentence() {
	var s = cmarking.s;
	var b = cmarking.w;
	for (; b>0 ; --b) {
		if (markings[s][b-1][0].length === 0) {
			--b;
			break;
		}
	}
	var e = cmarking.w;
	for (; e<markings[s].length ; ++e) {
		if (markings[s][e][0].length === 0) {
			break;
		}
	}

	var sentence = '';
	cmarking.sentence = '';
	for (var i=b; i<e ; ++i) {
		if (i === cmarking.w) {
			sentence += '<span class="marking">' + escHTML(markings[s][i][0]) + '</span> ';
		}
		else {
			sentence += escHTML(markings[s][i][0]) + ' ';
		}
		cmarking.sentence += markings[s][i][0] + ' ';
	}
	return sentence;
}

function markingSetContext() {
	cmarking.prefix = '';
	for (var i=0 ; i<cmarking.w ; ++i) {
		cmarking.prefix += markings[cmarking.s][i][0] + ' ';
	}

	cmarking.suffix = '';
	for (var i=cmarking.w+1 ; i<markings[cmarking.s].length ; ++i) {
		cmarking.suffix += markings[cmarking.s][i][0] + ' ';
	}
}

function markingRender(skipact) {
	var s = cmarking.s;
	var marking = markings[s][cmarking.w];
	var sentence = markingSetSentence();

	var ik = marking[0] + '\t' + marking[1];
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
	$('#checking').show();

	var col = 'green';
	var types = marking[1].split(/ /g);
	for (var i=0 ; i<types.length ; ++i) {
		if (types_yellow.hasOwnProperty(types[i])) {
			col = 'yellow';
		}
		if (types_red.hasOwnProperty(types[i])) {
			col = 'red';
			break;
		}
	}
	for (var i=0 ; i<types.length ; ++i) {
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

	var es = {};
	var el = {};
	for (var i=0 ; i<types.length ; ++i) {
		var et = marking_types[types[i]] ? marking_types[types[i]][1] : (ts[i] + ' ');
		et = '<p>'+et.replace(/(<\/h\d>)/g, '$1<br><br>').replace(/(<br>\s*)+<br>\s*/g, '</p><p>')+'</p>';
		es[et] = et.replace(/<p>\s*<\/p>/g, '');

		var et = marking_types[types[i]] ? marking_types[types[i]][2] : (ts[i] + ' ');
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

	var alt = '';
	if (g_conf.opt_colorBlind) {
		alt = ' alt';
	}

	$('#chkType').html(marking[1]);

	sentence = sentence.replace(' class="marking"', ' class="marking marking-'+col+alt+'"');
	$('#chkSentence').html(sentence);

	if (marking[2].length === 0) {
		$('#chkDidYouMean').hide();
		$('#chkSentence').addClass('divider');
		$('#btnAccept').addClass('disabled');
	}
	else {
		var all_upper = is_upper(marking[0]);
		var first_upper = all_upper || is_upper(marking[0].charAt(0));

		if (marking[1].indexOf('@lower') !== -1) {
			all_upper = first_upper = false;
		}

		var suggs = '';
		var ss = marking[2].split(/\t/g);
		for (var i=0 ; i<ss.length ; ++i) {
			var t = ss[i];
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
		$('#chkDidYouMeanItems').find('.suggestion-lookup').off().click(function() { alert($(this).text()); });
		$('#chkDidYouMean').show();
		$('#chkSentence').removeClass('divider');
		$('#btnAccept').removeClass('disabled');
	}

	$('#chkInput').hide();

	markingSetContext();

	google.script.run.withFailureHandler(showError).selectInDocument(cmarking.prefix, markings[s][cmarking.w][0], cmarking.suffix);
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
	var ik = markings[cmarking.s][cmarking.w][0] + '\t' + markings[cmarking.s][cmarking.w][1];
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
	var s = cmarking.s;
	var w = cmarking.w;
	var word = markings[cmarking.s][cmarking.w][0];
	var ts = markings[cmarking.s][cmarking.w][1];
	for (var s=0 ; s<markings.length ; ++s) {
		for (var w=0 ; w<markings[s].length ; ++w) {
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
	var found = false;
	for (;;) {
		for (var s=cmarking.s ; s>=0 ; --s) {
			if (!markings[s]) {
				continue;
			}

			for (var w=Math.min(cmarking.w, markings[s].length)-1 ; w>=0 ; --w) {
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
	var found = false;
	for (;;) {
		for (var s=cmarking.s ; s<markings.length ; ++s) {
			if (!markings[s]) {
				continue;
			}

			for (var w=cmarking.w+1 ; w<markings[s].length ; ++w) {
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
	var rpl = $('#chkInputText').val();
	if (rpl.length === 0) {
		rpl = ' ';
	}
	google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], rpl, cmarking.suffix);
}

function btnInputAll() {
	var rpl = $('#chkInputText').val();
	if (rpl.length === 0) {
		rpl = ' ';
	}
	var word = markings[cmarking.s][cmarking.w][0];
	var ts = markings[cmarking.s][cmarking.w][1];
	var os = cmarking.s;
	var ow = cmarking.w;

	for (var s=0 ; s<markings.length ; ++s) {
		for (var w=0 ; w<markings[s].length ; ++w) {
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
	google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(cmarking.prefix, markings[cmarking.s][cmarking.w][0], $(this).text(), cmarking.suffix);
}

function _parseResult(rv) {
	$('.chkProgressBar').attr('value', to_send_i);

	if (!rv.hasOwnProperty('c')) {
		$('.chkProgress').hide();
		console.log(rv);
		return;
	}

	var txt = sanitize_result(rv.c);
	var ps = [];
	var nps = $.trim(txt.replace(/\n+<\/s>\n+/g, "\n\n")).split(/<\/s\d+>/);

	// Where missing in result, copy from the cache
	for (var k = to_send_b, p=0 ; k<to_send_i ; ++k) {
		var found = false;
		for (var i=p ; i<nps.length ; ++i) {
			if (nps[i].indexOf('<s'+to_send[k].i+'>\n') !== -1) {
				//console.log(`Par ${k} found in result`);
				ps.push(nps[i]);
				p = i;
				found = true;
				break;
			}
		}
		if (!found && to_send[k].h in cache) {
			//console.log(`Par ${k} found in cache`);
			ps.push('<s'+to_send[k].i+'>\n'+cache[to_send[k].h]);
		}
	}

	for (var i=0 ; i<ps.length ; ++i) {
		var cp = $.trim(ps[i]);
		if (!cp) {
			continue;
		}

		var lines = cp.split(/\n/);
		var id = parseInt(lines[0].replace(/^<s(.+)>$/, '$1'));
		for (var k = to_send_b ; k<to_send_i ; ++k) {
			if (to_send[k].i === id) {
				cache[to_send[k].h] = $.trim(cp.replace(/^<s.+>/g, ''));
				break;
			}
		}

		var words = [];
		var had_mark = false;

		for (var j=1 ; j<lines.length ; ++j) {
			// Ignore duplicate opening tags
			if (/^<s\d+>$/.test(lines[j])) {
				continue;
			}

			var w = lines[j].split(/\t/);
			w[0] = $.trim(w[0].replace(/(\S)=/g, '$1 '));

			if (w[0] === '') {
				words.push(w);
				continue;
			}

			if (w.length > 1) {
				// Strip marking types belonging to higher than current critique level
				var ws = w[1].split(/ /g);
				var nws = [];
				var crs = [];
				var had_r = false;
				for (var k=0 ; k<ws.length ; ++k) {
					if (ws[k].indexOf('<R:') === 0) {
						var n = ws[k].substr(3);
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
						var n = ws[k].substr(5);
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
						nws.push('@unknown-marking');
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
				for (var k=0 ; k<nws.length ; ++k) {
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
					ws.push(nws[k]);
				}
				nws = ws;
				if (nws.length == 0) {
					crs = [];
				}

				if (crs.length) {
					// Only show addfejl suggestions if the real suggestion icase-matches one of them
					var use_adf = false;
					for (var c=1 ; c<crs.length ; ++c) {
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
	var text = '';

	for (to_send_b = to_send_i ; to_send_i < to_send.length ; ++to_send_i) {
		var par = to_send[to_send_i];

		if (!par.hasOwnProperty('h')) {
			par.h = 'h-'+murmurHash3.x86.hash128(par.t) + '-' + par.t.length;
		}

		if (par.h in cache) {
			//console.log(`Par ${par.i} found in cache`);
			continue;
		}

		text += `<s${par.i}>\n${par.t}\n</s${par.i}>\n\n`;
		if (text.length >= Defs.MAX_RQ_SIZE) {
			break;
		}
	}

	if (text) {
		var data = {
			t: text,
			r: ts_fail,
		};
		ts_xhr = $.post('https://retmig.dk/callback.php?a=danproof', data).done(parseResult).fail(() => {
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
	$('#done').show();
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

	$('#btnCheckSelected').click(function() {
		google.script.run.withSuccessHandler(checkParagraphs).withFailureHandler(showError).getSelectedPars();
	});
	$('#btnCheckAll').click(function() {
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
	$('#welcome').show();
	$('#placeholder').remove();
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n.t(msg));
}
