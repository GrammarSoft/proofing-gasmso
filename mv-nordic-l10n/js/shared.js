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

const VERSION_MAJOR = 1;
const VERSION_MINOR = 0;
const VERSION_PATCH = 0;
const ROOT_URL_SELF = 'https://retmig.dk/gas/dev/';
const ROOT_URL_GRAMMAR = 'https://kommaer.dk/mv-grammar/';
const ROOT_URL_COMMA = 'https://kommaer.dk/mv-comma/';
const CADUCEUS_URL = 'wss://gramtrans.com/caduceus/';
const MVID_SIGNOUT_URL = 'https://signon.vitec-mv.com/logout.php?return_to='+encodeURIComponent(ROOT_URL_GRAMMAR+'/logout.php')+'&sessionUid=';

const VERSION = ''+VERSION_MAJOR+'.'+VERSION_MINOR+'.'+VERSION_PATCH;

if (!Array.prototype.unique) {
	Array.prototype.unique = function() {
		let unique = [];
		for (let i=0; i<this.length; ++i) {
			if (unique.indexOf(this[i]) == -1) {
				unique.push(this[i]);
			}
		}
		return unique;
	};
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
if (typeof Object.assign != 'function') {
	// Must be writable: true, enumerable: false, configurable: true
	Object.defineProperty(Object, "assign", {
		value: function assign(target, varArgs) { // .length of function is 2
			'use strict';
			if (target == null) { // TypeError if undefined or null
				throw new TypeError('Cannot convert undefined or null to object');
			}

			let to = Object(target);

			for (let index = 1; index < arguments.length; index++) {
				let nextSource = arguments[index];

				if (nextSource != null) { // Skip over if undefined or null
					for (let nextKey in nextSource) {
						// Avoid bugs when hasOwnProperty is shadowed
						if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
			}
			return to;
		},
		writable: true,
		configurable: true,
	});
}

/* exported Defs */
const Defs = {
	CAP_ADMIN:	  (1 <<	 0),
	CAP_COMMA:	  (1 <<	 1),
	CAP_DANPROOF: (1 <<	 2),
	CAP_AKUTUTOR: (1 <<	 3),
	CAP_COMMA_TRIAL:	(1 <<  4),
	CAP_DANPROOF_TRIAL: (1 <<  5),
	CAP_AKUTUTOR_TRIAL: (1 <<  6),
	OPT_COMMA_LEVEL_1:	   (1 <<  0),
	OPT_COMMA_LEVEL_2:	   (1 <<  1),
	OPT_COMMA_LEVEL_3:	   (1 <<  2),
	OPT_COMMA_GREEN:	   (1 <<  3),
	OPT_COMMA_MAYBE:	   (1 <<  4),
	OPT_COMMA_COLOR:	   (1 <<  5),
	OPT_DP_ONLY_CONFIDENT: (1 <<  0),
	OPT_DP_IGNORE_NAMES:   (1 <<  1),
	OPT_DP_IGNORE_COMP:	   (1 <<  2),
	OPT_DP_IGNORE_ABBR:	   (1 <<  3),
	OPT_DP_IGNORE_OTHER:   (1 <<  4),
	OPT_DP_IGNORE_MAJ:	   (1 <<  5),
	OPT_DP_COLOR:		   (1 <<  6),
	OPT_DP_USE_DICT:	   (1 <<  7),
	MAX_SESSIONS: 5,
	MAX_RQ_SIZE: 4096,
	'comma-commercial': 'Kommaforslag Erhverv',
	'comma-private': 'Kommaforslag Privat',
	'comma-student': 'Kommaforslag Studerende',
	'danproof-commercial': 'Ret Mig Erhverv',
	'danproof-private': 'Ret Mig Privat',
	'danproof-student': 'Ret Mig Studerende',
	'akututor-clinic': 'Akututor Klinik',
	'akututor-student': 'Akututor Studerende',
};
Defs.OPT_DP_IGNORE_UNKNOWN = Defs.OPT_DP_IGNORE_NAMES|Defs.OPT_DP_IGNORE_COMP|Defs.OPT_DP_IGNORE_ABBR|Defs.OPT_DP_IGNORE_OTHER;

// Upper-case because we compare them to DOM nodeName
let text_nodes = {'ADDRESS': true, 'ARTICLE': true, 'ASIDE': true, 'AUDIO': true, 'BLOCKQUOTE': true, 'BODY': true, 'CANVAS': true, 'DD': true, 'DIV': true, 'DL': true, 'FIELDSET': true, 'FIGCAPTION': true, 'FIGURE': true, 'FOOTER': true, 'FORM': true, 'H1': true, 'H2': true, 'H3': true, 'H4': true, 'H5': true, 'H6': true, 'HEADER': true, 'HGROUP': true, 'HTML': true, 'HR': true, 'LI': true, 'MAIN': true, 'NAV': true, 'NOSCRIPT': true, 'OL': true, 'OUTPUT': true, 'P': true, 'PRE': true, 'SECTION': true, 'TABLE': true, 'TD': true, 'TH': true, 'UL': true, 'VIDEO': true};

/* exported g_dictionary */
let g_dictionary = {};
/* exported g_dictionary_json */
let g_dictionary_json = '{}';
/* exported _live_dictionary */
let _live_dictionary = {};

/* exported g_access_token */
let g_access_token = false;
/* exported g_keepalive */
let g_keepalive = null;
/* exported g_login_channel */
let g_login_channel = '';
/* exported g_login_ws */
let g_login_ws = null;

let g_itw_speaker = null;
let g_itw_tap = 0;

/* exported g_conf_defaults */
const g_conf_defaults = {
	opt_onlyConfident: false,
	opt_ignUnknown: false,
	opt_ignUNames: false,
	opt_ignUComp: false,
	opt_ignUAbbr: false,
	opt_ignUOther: false,
	opt_ignMaj: false,
	opt_useDictionary: true,
	opt_color: false,
	opt_maybe: true,
	opt_green: false,
	opt_longExplanations: true,
	opt_mvNordic: true,
	opt_speak: true,
	opt_level: 3,
};

/* exported g_conf_json */
let g_conf_json = JSON.stringify(g_conf_defaults);

/* exported Const */
const Const = {
	SpaceOrEmpty: /^\s*$/,
	LetterT: /[\d\wa-zA-ZéÉöÖæÆøØåÅ.,!;:]+/i,
	NonLetter: /[^\d\wa-zA-ZéÉöÖæÆøØåÅ.,!;:]+/ig,
	NonLetterT: /[^\d\wa-zA-ZéÉöÖæÆøØåÅ.,!;:]+/i,
	OnlyNonLetterT: /^[^\d\wa-zA-ZéÉöÖæÆøØåÅ.,!;:]*$/i,
	Split_String: ' ,.?!"#¤%&/()=@£${}|*^¨~/\\½§<>:;-',
};
Const.Split_Array = Const.Split_String.split('');
Const.Split_Regex = new RegExp('(['+Const.Split_String+'])');

/* exported g_tool */
let g_tool = null;
/* exported g_conf */
let g_conf = Object.assign({}, g_conf_defaults);
/* exported session */
let session = {};

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
/* exported escapeRegExp */
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/* exported escapeRegExpTokens */
function escapeRegExpTokens(txt) {
	let ts = txt.split(/\s+/g);
	for (let i=0 ; i<ts.length ; ++i) {
		ts[i] = escapeRegExp(ts[i]);
	}
	return ts.join('\\s+');
}

/* exported loadConfig */
function loadConfig() {
	if (!g_conf.hasOwnProperty('opt_color')) {
		console.log('Initializing g_conf');
		g_conf = Object.assign({}, g_conf_defaults);
	}

	let nv = window.localStorage.getItem('config');
	if (!nv) {
		return;
	}
	if (nv === g_conf_json) {
		return;
	}

	g_conf_json = nv;
	nv = JSON.parse(nv);
	for (let k in nv) {
		if (!nv.hasOwnProperty(k)) {
			continue;
		}
		if (g_conf[k] !== nv[k]) {
			console.log([k, g_conf[k], nv[k]]);
			g_conf[k] = nv[k];
		}
	}
}

/* exported loadDictionary */
function loadDictionary() {
	let nv = window.localStorage.getItem('dictionary');
	if (!nv) {
		return;
	}
	if (nv === g_dictionary_json) {
		return;
	}

	_live_dictionary = {};

	g_dictionary_json = nv;
	g_dictionary = JSON.parse(g_dictionary_json);
	for (let word in g_dictionary) {
		if (!g_dictionary.hasOwnProperty(word)) {
			continue;
		}
		_live_dictionary[word] = true;
		_live_dictionary[uc_first(word)] = true;
		_live_dictionary[word.toUpperCase()] = true;
	}
}

/* exported isInDictionary */
function isInDictionary(word) {
	return _live_dictionary.hasOwnProperty(word);
}

/* exported addToDictionary */
function addToDictionary(word) {
	if ($.trim(word).length === 0) {
		return false;
	}

	if (!g_dictionary.hasOwnProperty(word)) {
		//console.log(`Add to dict: ${word}`);
		g_dictionary[word] = true;
		_live_dictionary[word] = true;
		_live_dictionary[uc_first(word)] = true;
		_live_dictionary[word.toUpperCase()] = true;

		g_dictionary_json = JSON.stringify(g_dictionary);
		window.localStorage.setItem('dictionary', g_dictionary_json);
		return true;
	}

	return false;
}

/* exported addToDictionary */
function removeFromDictionary(word) {
	if ($.trim(word).length === 0) {
		return false;
	}

	if (g_dictionary.hasOwnProperty(word)) {
		//console.log(`Remove from dict: ${word}`);
		delete g_dictionary[word];
		delete _live_dictionary[word];
		delete _live_dictionary[uc_first(word)];
		delete _live_dictionary[word.toUpperCase()];

		g_dictionary_json = JSON.stringify(g_dictionary);
		window.localStorage.setItem('dictionary', g_dictionary_json);
		return true;
	}

	return false;
}

/* exported is_upper */
function is_upper(ch) {
	return (ch === ch.toUpperCase() && ch !== ch.toLowerCase());
}

/* exported uc_first */
function uc_first(str) {
	return str.substr(0, 1).toUpperCase() + str.substr(1);
}

/* exported escHTML */
function escHTML(t) {
	let nt = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
	//console.log([t, nt]);
	return nt;
}

/* exported decHTML */
function decHTML(t) {
	let nt = t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
	//console.log([t, nt]);
	return nt;
}

/* exported haveLocalStorage */
function haveLocalStorage() {
	try {
		let storage = window.localStorage;
		let x = 'LocalStorageTest';
		storage.setItem(x, x);
		storage.removeItem(x);
	}
	catch(e) {
		return false;
	}
	return true;
}

/* exported ls_get */
function ls_get(key, def) {
	let v = window.localStorage.getItem(key);
	if (v === null) {
		v = def;
	}
	else {
		v = JSON.parse(v);
	}
	return v;
}

/* exported ls_set */
function ls_set(key, val) {
	window.localStorage.setItem(key, JSON.stringify(val));
}

/* exported ls_del */
function ls_del(key) {
	window.localStorage.removeItem(key);
}

function findTextNodes(nodes) {
	let tns = [], wsx = /\S/;

	if (!$.isArray(nodes)) {
		nodes = [nodes];
	}

	function _findTextNodes(node) {
		if (node.nodeType == 3) {
			if (wsx.test(node.nodeValue)) {
				tns.push(node);
			}
		}
		else {
			for (let i=0 ; i < node.childNodes.length ; ++i) {
				_findTextNodes(node.childNodes[i]);
			}
		}
	}

	for (let i=0 ; i<nodes.length ; ++i) {
		_findTextNodes(nodes[i]);
	}
	return tns;
}

/* exported sanitize_result */
function sanitize_result(txt) {
	// Special case
	txt = txt.replace(/@x-etype-case/g, '@upper');

	// Swap markers that the backend has mangled due to sentence-ending parentheticals
	for (let i=0 ; i<Defs.MAX_RQ_SIZE ; ++i) {
		let t1 = '</s'+i+'>';
		let t2 = '<s'+(i+1)+'>';
		let s1 = txt.indexOf(t1);
		let s2 = txt.indexOf(t2);
		if (s1 !== -1 && s2 !== -1 && s2 < s1) {
			txt = txt.replace(new RegExp('('+t2+')((.|\\s)*?'+t1+')', 'g'), '$2\n\n$1\n');
			console.log('Swapped markers '+i+' with '+(i+1));
		}
	}

	// Remove empty sentences
	txt = txt.replace(/<s\d+>[\s\n]*<\/s\d+>/g, '');

	// Remove noise before sentences
	txt = txt.replace(/^[^]*?(<s\d+>)/, '$1');

	// Remove noise between sentences
	txt = txt.replace(/(\n<\/s\d+>)[^]*?(<s\d+>\n)/g, '$1\n\n$2');
	return txt;
}

/* exported itw_speak */
function itw_speak(text) {
	if (!g_conf.opt_speak) {
		return;
	}

	let data = {
		t: text,
	};
	$.post(ROOT_URL_GRAMMAR + 'callback.php?a=itw-speak', data).done(function(rv) {
		if (!rv.hasOwnProperty('result') || !rv.result.hasOwnProperty('value') || !rv.result.value.hasOwnProperty('mp3_url') || !rv.result.value.mp3_url) {
			console.log(this);
			//showError('ERR_ITW_SPEAK');
			return;
		}

		$('#speaker').attr('src', 'https://online.intowords.com' + rv.result.value.mp3_url).get(0).play();
	}).fail(function() {
		console.log(this);
		//showError('ERR_ITW_SPEAK');
	});
}

/* exported itw_speak_attach */
function itw_speak_attach(node) {
	if (!g_conf.opt_speak) {
		return;
	}

	let tns = findTextNodes(node);
	let ns = [];
	for (let i=0 ; i<tns.length ; ++i) {
		let n = tns[i];
		do {
			n = n.parentNode;
		} while(n && n.parentNode && !text_nodes.hasOwnProperty(n.parentNode.nodeName));
		ns.push(n);
	}

	$(ns).addClass('itw_tts').mouseover(function() {
		let txt = $(this).text();
		if (g_itw_speaker) {
			clearTimeout(g_itw_speaker);
		}
		g_itw_speaker = setTimeout(function() {
			itw_speak(txt);
		}, 1000);
	}).mouseout(function() {
		if (g_itw_speaker) {
			clearTimeout(g_itw_speaker);
		}
		g_itw_speaker = null;
	}).on('touchstart', function() {
		++g_itw_tap;
	}).on('touchmove', function() {
		g_itw_tap = 0;
	}).on('touchend', function(e) {
		if (g_itw_tap >= 2) {
			if (g_itw_speaker) {
				clearTimeout(g_itw_speaker);
			}
			g_itw_speaker = null;

			itw_speak($(this).text());
			g_itw_tap = 0;

			e.preventDefault();
			return false;
		}
	});
}

/* exported findToSend */
function findToSend(prefix, word, suffix) {
	let prefix_s = prefix.replace(Const.NonLetter, '');
	let word_s = word.replace(Const.NonLetter, '');
	let suffix_s = suffix.replace(Const.NonLetter, '');

	for (let i=0 ; i<to_send.length ; ++i) {
		let t = to_send[i].t;
		let found = true;

		let p_off = 0;
		for (let j=0 ; j<prefix_s.length ; ++j) {
			let f = prefix_s.charAt(j);
			if (Const.SpaceOrEmpty.test(f)) {
				continue;
			}
			let nof = t.indexOf(f, p_off);
			if (nof === -1) {
				found = false;
				break;
			}
			if (p_off === 0 && Const.LetterT.test(t.substring(0, nof))) {
				// There is something substantial before the prefix
				console.log('Prefix: '+t.substring(0, nof));
				found = false;
				break;
			}
			p_off = nof + f.length;
		}
		if (!found) {
			console.log('Not-found: prefix');
			continue;
		}
		while (p_off < t.length && Const.SpaceOrEmpty.test(t.charAt(p_off))) {
			++p_off;
		}

		let w_off = p_off;
		for (let j=0 ; j<word_s.length ; ++j) {
			let f = word_s.charAt(j);
			if (Const.SpaceOrEmpty.test(f)) {
				continue;
			}
			let nof = t.indexOf(f, w_off);
			if (nof === -1) {
				found = false;
				break;
			}
			w_off = nof + f.length;
		}
		if (!found) {
			console.log('Not-found: word');
			continue;
		}
		if (Const.NonLetterT.test(word.charAt(word.length-1))) {
			while (w_off < t.length && Const.NonLetterT.test(t.charAt(w_off))) {
				++w_off;
			}
		}

		let s_off = w_off;
		while (s_off < t.length && Const.SpaceOrEmpty.test(t.charAt(s_off))) {
			++s_off;
		}
		for (let j=0 ; j<suffix_s.length ; ++j) {
			let f = suffix_s.charAt(j);
			if (Const.SpaceOrEmpty.test(f)) {
				continue;
			}
			let nof = t.indexOf(f, s_off);
			if (nof === -1) {
				found = false;
				break;
			}
			s_off = nof + f.length;
		}
		if (!found) {
			console.log('Not-found: suffix');
			continue;
		}
		while (s_off < t.length && Const.SpaceOrEmpty.test(t.charAt(s_off))) {
			++s_off;
		}

		if (Const.LetterT.test(t.substring(s_off))) {
			// There is something substantial after the suffix
			console.log('Suffix: '+t.substring(s_off));
			continue;
		}

		if (/^\s/.test(word)) {
			while (p_off > 1 && Const.SpaceOrEmpty.test(t.charAt(p_off-1))) {
				--p_off;
			}
		}
		else {
			while (p_off < t.length && Const.SpaceOrEmpty.test(t.charAt(p_off))) {
				++p_off;
			}
		}

		if (/\s$/.test(word)) {
			while (w_off < t.length && Const.SpaceOrEmpty.test(t.charAt(w_off))) {
				++w_off;
			}
		}
		else {
			while (w_off > 1 && Const.SpaceOrEmpty.test(t.charAt(w_off-1))) {
				--w_off;
			}
		}

		let rv = {
			prefix: t.substring(0, p_off),
			word: t.substring(p_off, w_off),
			suffix: t.substring(w_off, s_off),
			t: t,
			};

		if (rv.prefix.replace(Const.NonLetter, '') !== prefix_s) {
			console.log('Non-prefix: '+rv.prefix+' != '+prefix_s);
			continue;
		}
		if (rv.word.replace(Const.NonLetter, '') !== word_s) {
			console.log('Non-word: '+rv.word+' != '+word_s);
			continue;
		}
		if (rv.suffix.replace(Const.NonLetter, '') !== suffix_s) {
			console.log('Non-suffix: '+rv.suffix+' != '+suffix_s);
			continue;
		}

		return rv;
	}

	return false;
}
