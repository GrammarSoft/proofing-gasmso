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

var g_conf = Object.assign({}, g_conf_defaults);
var session = {};
var cache = {};
var to_send = null;
var to_send_b = 0;
var to_send_i = 0;
var ts_xhr = null;
var ts_slow = null;
var ts_fail = 0;

function _parseResult(rv) {
	$('#gtdp-progress-bar').attr('value', to_send_i);

	if (!rv.hasOwnProperty('c')) {
		$('#gtdp-progress').hide();
		$.featherlight.close();
		console.log(rv);
		return;
	}

	var rs = '';

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

		rs += '<p id="s'+id+'">';
		var space = 0;
		var txt = '';

		for (var j=1 ; j<lines.length ; ++j) {
			// Ignore duplicate opening tags
			if (/^<s\d+>$/.test(lines[j])) {
				continue;
			}

			var w = lines[j].split(/\t/);
			w[0] = $.trim(w[0].replace(/(\S)=/g, '$1 '));

			if (w[0] === '') {
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
				}
				else {
					w.pop();
				}
			}

			/*
			if (w.length > 1) {
				var rv = createMarking(w);
				rs += rv.html;
				space = rv.space;

				if (context.ggl) {
					if (rv.html.charAt(0) === ' ') {
						txt += ' ';
						rv.html = rv.html.substr(1);
					}
					ggl_createMarking(id, txt, w[0], rv.html);
					txt += w[0];
				}
			}
			else if (w[0] !== ',' || w.length === 1) {
				if (txt.length && space === 0 && w[0].search(/^[-,.:;?!$*½§£$%&()={}+]$/) === -1) {
					rs += ' ';
					txt += ' ';
				}
				space = 0;
				rs += escHTML(w[0]);
				txt += w[0];
			}
			//*/
		}
		rs += '</p>';
	}

	/*
	var ms = [];
	if (context.ggl) {
		ms = $('#gtdp-markings').find('span.marking');
	}
	else {
		if (!floater_doc) {
			floater_doc = floater.contentWindow.document;
			$(floater_doc).find('#btn-close').off().click(() => {
				$.featherlight.close();
			});
		}
		$(floater_doc).find('#result').get(0).innerHTML += rs;
		ms = $(floater_doc).find('span.marking');
	}
	ms.off().click(markingClick);
	//*/

	if (to_send_i < to_send.length) {
		sendTexts();
	}
	/*
	else {
		$('#gtdp-progress').hide();
		if (ms.length === 0) {
			setTimeout(msgNoMarkingsFound, 100);
		}
	}
	//*/
}

function parseResult(rv) {
	try {
		_parseResult(rv);
	}
	catch (e) {
		console.log(e);
		$('#gtdp-progress').hide();
	}
}

function sendTexts() {
	$('#gtdp-progress').show();
	$('#gtdp-progress-bar').attr('max', to_send.length);
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
	}
}

function checkParagraphs(doc) {
	console.log(doc);
	to_send = doc;
	to_send_i = 0;
	to_send_b = 0;
	sendTexts();
}

function didReplace(rv) {
	console.log(rv);
}

function replaceInDocument() {
	var prefix = $('#prefix').val();
	var word = $('#word').val();
	var rpl = $('#rpl').val();
	var suffix = $('#suffix').val();
	google.script.run.withSuccessHandler(didReplace).withFailureHandler(showError).replaceInDocument(prefix, word, rpl, suffix);
}

function didSelect(rv) {
	console.log(rv);
}

function selectInDocument() {
	var prefix = $('#prefix').val();
	var word = $('#word').val();
	var suffix = $('#suffix').val();
	google.script.run.withSuccessHandler(didSelect).withFailureHandler(showError).selectInDocument(prefix, word, suffix);
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

	$('#error').hide();
	$('.sidebar').hide();
	$('#welcome').show();
});

function showError(msg) {
	console.log(msg);
	$('#error').show();
	$('#error-text').text(l10n.t(msg));
}
