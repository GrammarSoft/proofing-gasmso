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
//'use strict';

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
if (typeof Object.assign !== 'function') {
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

function object_copy(a, b, c) {
	let cp = Object.assign({}, a);
	if (typeof b === 'object') {
		cp = Object.assign(cp, b);
	}
	if (typeof c === 'object') {
		cp = Object.assign(cp, c);
	}
	return cp;
}

function object_values(obj) {
	let vals = [];
	for (let k in obj) {
		if (!obj.hasOwnProperty(k)) {
			continue;
		}
		vals.push(obj[k]);
	}
	return vals;
}

function object_join(obj, s) {
	return object_values(obj).join(s);
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Polyfill
if (!String.prototype.repeat) {
	String.prototype.repeat = function(count) {
		'use strict';
		if (this == null) {
			throw new TypeError('can\'t convert ' + this + ' to object');
		}
		let str = '' + this;
		count = +count;
		if (count != count) {
			count = 0;
		}
		if (count < 0) {
			throw new RangeError('repeat count must be non-negative');
		}
		if (count == Infinity) {
			throw new RangeError('repeat count must be less than infinity');
		}
		count = Math.floor(count);
		if (str.length == 0 || count == 0) {
			return '';
		}
		// Ensuring count is a 31-bit integer allows us to heavily optimize the
		// main part. But anyway, most current (August 2014) browsers can't handle
		// strings 1 << 28 chars or longer, so:
		if (str.length * count >= 1 << 28) {
			throw new RangeError('repeat count must not overflow maximum string size');
		}
		let rpt = '';
		for (let i = 0; i < count; i++) {
			rpt += str;
		}
		return rpt;
	}
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
if (!String.prototype.normalize) {
	String.prototype.normalize = function(form) {
		if (form && form !== 'NFC') {
			throw new RangeError('String.normalize() polyfill only knows a tiny subset of NFC');
		}

		if (!/[AaEeIiOoUuNn][\u0300-\u0303\u0308\u030A]/.test(this)) {
			return this;
		}

		let rv = this;

		// Combining Grave Accent U+0300
		rv = rv.replace(/A\u0300/g, 'À');
		rv = rv.replace(/a\u0300/g, 'à');
		rv = rv.replace(/E\u0300/g, 'È');
		rv = rv.replace(/e\u0300/g, 'è');
		rv = rv.replace(/I\u0300/g, 'Ì');
		rv = rv.replace(/i\u0300/g, 'ì');
		rv = rv.replace(/O\u0300/g, 'Ò');
		rv = rv.replace(/o\u0300/g, 'ò');
		rv = rv.replace(/U\u0300/g, 'Ù');
		rv = rv.replace(/u\u0300/g, 'ù');

		// Combining Acute Accent U+0301
		rv = rv.replace(/A\u0301/g, 'Á');
		rv = rv.replace(/a\u0301/g, 'á');
		rv = rv.replace(/E\u0301/g, 'É');
		rv = rv.replace(/e\u0301/g, 'é');
		rv = rv.replace(/I\u0301/g, 'Í');
		rv = rv.replace(/i\u0301/g, 'í');
		rv = rv.replace(/O\u0301/g, 'Ó');
		rv = rv.replace(/o\u0301/g, 'ó');
		rv = rv.replace(/U\u0301/g, 'Ú');
		rv = rv.replace(/u\u0301/g, 'ú');

		// Combining Circumflex Accent U+0302
		rv = rv.replace(/A\u0302/g, 'Â');
		rv = rv.replace(/a\u0302/g, 'â');
		rv = rv.replace(/E\u0302/g, 'Ê');
		rv = rv.replace(/e\u0302/g, 'ê');
		rv = rv.replace(/I\u0302/g, 'Î');
		rv = rv.replace(/i\u0302/g, 'î');
		rv = rv.replace(/O\u0302/g, 'Ô');
		rv = rv.replace(/o\u0302/g, 'ô');
		rv = rv.replace(/U\u0302/g, 'Û');
		rv = rv.replace(/u\u0302/g, 'û');

		// Combining Tilde U+0303
		rv = rv.replace(/A\u0303/g, 'Ã');
		rv = rv.replace(/a\u0303/g, 'ã');
		rv = rv.replace(/I\u0303/g, 'Ĩ');
		rv = rv.replace(/i\u0303/g, 'ĩ');
		rv = rv.replace(/O\u0303/g, 'Õ');
		rv = rv.replace(/o\u0303/g, 'õ');
		rv = rv.replace(/U\u0303/g, 'Ũ');
		rv = rv.replace(/u\u0303/g, 'ũ');
		rv = rv.replace(/N\u0303/g, 'Ñ');
		rv = rv.replace(/n\u0303/g, 'ñ');

		// Combining Diaeresis U+0308
		rv = rv.replace(/A\u0308/g, 'Ä');
		rv = rv.replace(/a\u0308/g, 'ä');
		rv = rv.replace(/E\u0308/g, 'Ë');
		rv = rv.replace(/e\u0308/g, 'ë');
		rv = rv.replace(/I\u0308/g, 'Ï');
		rv = rv.replace(/i\u0308/g, 'ï');
		rv = rv.replace(/O\u0308/g, 'Ö');
		rv = rv.replace(/o\u0308/g, 'ö');
		rv = rv.replace(/U\u0308/g, 'Ü');
		rv = rv.replace(/u\u0308/g, 'ü');

		// Combining Ring Above U+030A
		rv = rv.replace(/A\u030A/g, 'Å');
		rv = rv.replace(/a\u030A/g, 'å');

		return rv;
	}
}

if (typeof ROOT_URL_SELF === 'undefined') {
	ROOT_URL_SELF = '';
}

const Defs = {
	CAP_ADMIN:    (1 <<  0),
	CAP_COMMA:    (1 <<  1),
	CAP_DANPROOF: (1 <<  2),
	CAP_AKUTUTOR: (1 <<  3),
	CAP_COMMA_TRIAL:     (1 <<  4),
	CAP_DANPROOF_TRIAL:  (1 <<  5),
	CAP_AKUTUTOR_TRIAL:  (1 <<  6),
	CAP_COMMA_ENG:       (1 <<  7),
	CAP_COMMA_ENG_TRIAL: (1 <<  8),
	CAP_COMMA_DEU:       (1 <<  9),
	CAP_COMMA_DEU_TRIAL: (1 << 10),
	MAX_SESSIONS: 5,
	MAX_RQ_SIZE: 4096,
	'comma-commercial': 'Kommaforslag Erhverv',
	'comma-private': 'Kommaforslag Privat',
	'comma-student': 'Kommaforslag Studerende',
	'danproof-commercial': 'RetMig Erhverv',
	'danproof-private': 'RetMig Privat',
	'danproof-student': 'RetMig Studerende',
	'akututor-clinic': 'Akututor Klinik',
	'akututor-student': 'Akututor Studerende',
	'engcom-commercial': 'Commatizer Commercial',
	'engcom-private': 'Commatizer Private',
	'engcom-student': 'Commatizer Student',
	'deucom-commercial': 'Kommatroll Commercial',
	'deucom-private': 'Kommatroll Private',
	'deucom-student': 'Kommatroll Student',
};

class GS_Analysis {
	pos = '';
	func = '';
	raw = '';
}

class GS_Word {
	word = '';
	space = ' ';
	mark = '';
	suggs = '';
	oword = null;
	omark = '';
	osuggs = '';
	ana = new GS_Analysis();
	tid = 0;

	constructor(word, mark) {
		if (typeof mark === 'undefined') {
			mark = '';
		}
		this.word = word;
		this.mark = mark;
	}
}

class GS_Suggestion {
	word = '';
	space = ' ';

	constructor(word, space) {
		if (typeof space === 'undefined') {
			space = ' ';
		}
		if (word === '' || word === STR_NULLISH) {
			space = '';
		}
		this.word = word;
		this.space = space;
	}
}

class GS_MarkRange {
	seg = 0;
	begin = -1;
	end = -1;
	mark = '';
	ef_mark = '';
	suggs = [];
	tid = 0;
	ins = null;

	constructor(seg, begin, mark, suggs, tid) {
		this.seg = seg;
		this.begin = begin;
		this.end = begin + 1;
		this.mark = mark;
		this.ef_mark = mark;
		if (typeof suggs === 'string') {
			if (suggs) {
				suggs = suggs.split('\t').map(function(e) { return [new GS_Suggestion(e)]; });
			}
			else {
				suggs = [];
			}
		}
		this.suggs = suggs;
		this.tid = tid;
	}
}

const VERSION_PROTOCOL = 1;
let MATOMO_ROOT = '//gramtrans.com/matomo/';

const STR_SENT_BREAK = '\ue00a';
const STR_NULLISH = '\ue00b';
const STR_PLACEHOLDER = '\ue00c';

// Upper-case because we compare them to DOM nodeName
let text_nodes = {'ADDRESS': true, 'ARTICLE': true, 'ASIDE': true, 'AUDIO': true, 'BLOCKQUOTE': true, 'BODY': true, 'CANVAS': true, 'DD': true, 'DIV': true, 'DL': true, 'FIELDSET': true, 'FIGCAPTION': true, 'FIGURE': true, 'FOOTER': true, 'FORM': true, 'H1': true, 'H2': true, 'H3': true, 'H4': true, 'H5': true, 'H6': true, 'HEADER': true, 'HGROUP': true, 'HTML': true, 'HR': true, 'LI': true, 'MAIN': true, 'NAV': true, 'NOSCRIPT': true, 'OL': true, 'OUTPUT': true, 'P': true, 'PRE': true, 'SECTION': true, 'TABLE': true, 'TD': true, 'TH': true, 'UL': true, 'VIDEO': true};

let g_dictionary = {};
let g_dictionary_json = '{}';
let _live_dictionary = {};

const g_access_token_defaults = {
	hmac: '{}',
	session: '',
	ai: [],
};
let g_access_token = object_copy(g_access_token_defaults);
let g_access_hmac = {};
let g_keepalive = null;
let g_login_channel = '';
let g_login_ws = null;
let g_client = 'unknown';
let g_anonymous = false;

let g_tts_speaker = null;
let g_tts_tap = 0;

let g_options = {};
let g_options_json = {};
let _live_options = {};

// Letters we're likely to see in Danish, Norwegian, Swedish, Greenlandic
// Can't rely on Unicode escapes or /u modifier because of IE11
const Letters = '\\da-zA-ZŭŬĉĈĝĜĥĤĵĴŝŜÂâÊêÎîÔôÛûÃãĨĩÕõŨũÀàÈèÌìÒòÙùÁáÉéÍíÓóÚúÄäËëÏïÖöÜüÆæØøÅåĸ.,!;:';
const Const = {
	LetterT: new RegExp('['+Letters+']+', 'i'),
	NonLetter: new RegExp('[^'+Letters+']+', 'ig'),
	NonLetterT: new RegExp('[^'+Letters+']+', 'i'),
	PrefixNonLetterT: new RegExp('^[^'+Letters+']+', 'i'),
	SuffixNonLetterT: new RegExp('[^'+Letters+']+$', 'i'),
	OnlyNonLetterT: new RegExp('^[^'+Letters+']*$', 'i'),
	SpaceOrEmpty: /^\s*$/,
	Split_String: ' ,.?!"#¤%&/()=@£${}|*^¨~/\\½§<>:;-',
};
Const.Split_Array = Const.Split_String.split('');
Const.Split_Regex = new RegExp('(['+Const.Split_String+'])');

const func2label = [
	{rx:/^@<*SUBJ>*$/, f:'S', i:'x-lg', w:false}, // subject
	{rx:/^@[FS]-<*SUBJ>*$/, f:'Sf', i:'x-lg', w:true}, // formal subject
	{rx:/^@(FMV|FAUX|FS-.*|ICL-(?!AUX<).*)$/, f:'Vm', i:'circle-fill', w:false}, // main verb
	{rx:/^@<*(DAT|IOBJ)>*$/, f:'Oi', i:'square-fill', w:false}, // indirect object
	{rx:/^@<*(ACC|OBJ)>*$/, f:'Od', i:'triangle-fill', w:false}, // direct object
	{rx:/^@<*(PIV)>*$/, f:'Op', i:'diamond-fill', w:false}, // prepositional object
	{rx:/^@<*(ADV[SOL])>*$/, f:'A', i:ROOT_URL_SELF+'/imgs/bi-chevron-down-half.svg', w:false}, // adverbial
	{rx:/^@<*PASS>*$/, f:'A', i:ROOT_URL_SELF+'/imgs/bi-chevron-down-half.svg', w:false}, // passive adjunct
	{rx:/^@<*(SC)>*$/, f:'Cs', i:'x-circle', w:false}, // subject predicative/complement
	{rx:/^@<*(OC)>*$/, f:'Co', i:'plus-circle', w:false}, // object predicative/complement
	{rx:/^@<*(SA|OA)>*$/, f:'A', i:ROOT_URL_SELF+'/imgs/bi-chevron-down-half.svg', w:false}, // focus
	{rx:/^@(<*FOC>*|>P)$/, f:'A', i:ROOT_URL_SELF+'/imgs/bi-chevron-down-half.svg', w:false}, // focus, including pre-pp
];

let g_marks = {
	types: {},
	types_comma: [],
	types_grammar: [],
	types_complex: {},

	comp_left: /[£%]-comp( |&|$)/,
	comp_right: /[£%]comp-?( |&|$)/,
	comp_hyphen: /[£%]comp-:-( |&|$)/,
	comp_preswap: /[£%]PRESWAP( |&|$)/,
	to_upper: /£upper( |&|$)/,
	to_lower: /£lower( |&|$)/,
	rx_ins: /(£comma|£insert\S*|%ko|%k)( |-|&|$)/,
	rx_ins_before: /((?:%ko|%k|£comma)(?:-\S+)?)(?: |&|$)/,
	rx_del: /(£nil|£no-comma|%nok|%ok|%nko)( |-|&|$)/,
	rx_editable: /£(vfin|no-refl)/,

	red: {},
	yellow: {},
	purple: {},
	blue: {},
	info: {},
	order: [
		[/^£:.*/, 10],
		[/^£(upper|lower|comma)/, -10],
		[/^£green/, -20],
	],

	dict: {},
};

let segments = [];
let segment_ids = [];
let marking_ranges = [];
let to_send = null;
let to_send_b = 0;
let to_send_i = 0;
let to_send_last = '';
let ts_xhr = null;
let ts_slow = null;
let ts_fail = 0;
let cache = {
	Grammar: {},
	Comma: {},
};

let g_tool = window.hasOwnProperty('g_tool') ? window.g_tool : null;
let g_tools = {
	grammar: false,
	comma: false,
};
let session = {locale: 'da'};

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function escapeRegExpTokens(txt) {
	let ts = txt.split(/\s+/g);
	for (let i=0 ; i<ts.length ; ++i) {
		ts[i] = escapeRegExp(ts[i]);
	}
	return ts.join('\\s+');
}

function is_nullish(s) {
	return (!s) || (s.length == 0) || (s === STR_NULLISH) || (s === STR_SENT_BREAK);
}

function loadOptions(s) {
	let nv = ls_get_try('options-'+s);

	if (nv) {
		if (g_options_json.hasOwnProperty(s) && nv === g_options_json[s]) {
			return g_options[s];
		}
		g_options_json[s] = nv;
		nv = JSON.parse(nv);
	}
	else {
		nv = object_copy(g_options_default);
	}

	_live_options[s] = object_copy(nv);

	['config', 'types'].forEach(function(key) {
		_live_options[s][key] = object_copy(g_options_default[key]);
		if (!_live_options.hasOwnProperty(key)) {
			_live_options[key] = object_copy(g_options_default[key]);
		}
		if (nv.hasOwnProperty(key)) {
			for (let k in nv[key]) {
				////console.log([k, nv[key][k]]);
				_live_options[s][key][k] = nv[key][k];
				_live_options[key][k] = nv[key][k];
			}
		}
	});

	return nv;
}

function loadDictionary() {
	let nv = ls_get_try('dictionary');
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

function isInDictionary(word) {
	return _live_dictionary.hasOwnProperty(word);
}

function addToDictionary(word) {
	if ($.trim(word).length === 0) {
		return false;
	}

	if (!g_dictionary.hasOwnProperty(word)) {
		////console.log(`Add to dict: ${word}`);
		g_dictionary[word] = true;
		_live_dictionary[word] = true;
		_live_dictionary[uc_first(word)] = true;
		_live_dictionary[word.toUpperCase()] = true;

		g_dictionary_json = JSON.stringify(g_dictionary);
		ls_set_try('dictionary', g_dictionary_json);
		impl_addToDictionary(word);
		return true;
	}

	return false;
}

function removeFromDictionary(word) {
	if ($.trim(word).length === 0) {
		return false;
	}

	if (g_dictionary.hasOwnProperty(word)) {
		////console.log(`Remove from dict: ${word}`);
		delete g_dictionary[word];
		delete _live_dictionary[word];
		delete _live_dictionary[uc_first(word)];
		delete _live_dictionary[word.toUpperCase()];

		g_dictionary_json = JSON.stringify(g_dictionary);
		ls_set_try('dictionary', g_dictionary_json);
		impl_removeFromDictionary(word);
		return true;
	}

	return false;
}

function is_upper(ch) {
	return (ch === ch.toUpperCase() && ch !== ch.toLowerCase());
}

function uc_first(str) {
	return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function lc_first(str) {
	return str.substr(0, 1).toLowerCase() + str.substr(1);
}

function escHTML(t) {
	let nt = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
	////console.log([t, nt]);
	return nt;
}

function decHTML(t) {
	let nt = t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
	////console.log([t, nt]);
	return nt;
}

function slugify(t) {
	let nt = t.replace(/%+/g, 'p').replace(/£+/g, 'a').replace(/[^A-Za-z0-9]+/g, '-');
	return nt;
}

function haveLocalStorage() {
	try {
		let storage = window.localStorage;
		let x = 'LocalStorageTest';
		storage.setItem(x, x);
		storage.removeItem(x);
	}
	catch (e) {
		return false;
	}
	return true;
}

function ls_get_try(key) {
	let v = null;
	try {
		v = window.localStorage.getItem(key);
	}
	catch (e) {
	}
	return v;
}

function ls_get(key, def) {
	let v = ls_get_try(key);
	if (v === null) {
		if (def !== null && typeof def === 'object') {
			v = object_copy(def);
		}
		else {
			v = def;
		}
	}
	else {
		v = JSON.parse(v);
	}
	return v;
}

function ls_set_try(key, val) {
	try {
		window.localStorage.setItem(key, val);
	}
	catch (e) {
	}
}

function ls_set(key, val) {
	ls_set_try(key, JSON.stringify(val));
}

function ls_del(key) {
	window.localStorage.removeItem(key);
}

function markingColor(types) {
	let col = 'green';
	for (let i=0 ; i<types.length ; ++i) {
		if (g_marks.info.hasOwnProperty(types[i])) {
			col = 'info';
		}
		if (g_marks.yellow.hasOwnProperty(types[i])) {
			col = 'yellow';
		}
		if (g_marks.blue.hasOwnProperty(types[i])) {
			col = 'blue';
		}
		if (g_marks.purple.hasOwnProperty(types[i])) {
			col = 'purple';
		}
		if (g_marks.red.hasOwnProperty(types[i])) {
			col = 'red';
			break;
		}
	}
	for (let i=0 ; i<types.length ; ++i) {
		if (types[i] === '£green') {
			col = 'green';
		}
	}
	return col;
}

function orderMarkings() {
	order = {};
	for (let m in g_marks.types) {
		order[m] = 0;
		for (let rx of g_marks.order) {
			if (rx[0].test(m)) {
				order[m] = rx[1];
			}
		}
	}
	g_marks.order = order;
	////console.log(g_marks.order);
}

function sortMarkings(a, b) {
	if (a === b) {
		return 0;
	}
	if (!g_marks.order.hasOwnProperty(a)) {
		return 1;
	}
	if (!g_marks.order.hasOwnProperty(b)) {
		return -1;
	}
	return g_marks.order[b] - g_marks.order[a];
}

function sortRanges(a, b) {
	if (a.seg == b.seg) {
		return a.begin - b.begin;
	}
	return a.seg - b.seg;
}

function findTextNodes(nodes, filter) {
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
				if (typeof filter !== 'function' || filter(node.childNodes[i])) {
					_findTextNodes(node.childNodes[i]);
				}
			}
		}
	}

	for (let i=0 ; i<nodes.length ; ++i) {
		if (typeof filter !== 'function' || filter(nodes[i])) {
			_findTextNodes(nodes[i]);
		}
	}
	return tns;
}

function sanitize_result(txt) {
	if (txt.search(/\t[A-Z]+ @\S+/g) == -1) {
		txt = txt.replace(/([ \t])@/g, '$1£');
		//console.log(txt);
	}

	txt = txt.replace(/\n<\/?p>\n/g, '\n');

	// Special case
	txt = txt.replace(/£x-etype-case/g, '£upper');

	// Puntuation on a line of its own should be a sentence break
	txt = txt.replace(/\n([.?!:])\n/g, '\n$1\n\n');

	// Workaround for bug https://trello.com/c/ixmc92EB
	txt = txt.replace(/.'.\t£proper\n"/g, '.\n"');

	// Workaround for bug https://trello.com/c/JbXrn5ub
	txt = txt.replace(/\n-[LR]\n/g, '\n-\n').replace(/ -[LR] /g, ' - ');

	// Swap markers that the backend has mangled
	txt = txt.replace(new RegExp('<s(\\d+)>(\n<[^\\d]+?)</s(\\d+)>', 'g'), function(m, p1, p2, p3, o, s) {
		//console.log([m, p1, p2, p3]);
		if (parseInt(p1) > parseInt(p3)) {
			return '</s'+p3+'>'+p2+'<s'+p1+'>';
		}
		return m;
	});

	// Swap markers that the backend has mangled due to sentence-ending parentheticals
	for (let i=0 ; i<Defs.MAX_RQ_SIZE ; ++i) {
		let t1 = '</s'+i+'>';
		let t2 = '<s'+(i+1)+'>';
		let s1 = txt.indexOf(t1);
		let s2 = txt.indexOf(t2);
		if (s1 !== -1 && s2 !== -1 && s2 < s1) {
			txt = txt.replace(new RegExp('('+t2+')((.|\\s)*?'+t1+')', 'g'), '$2\n\n$1\n');
			//console.log('Swapped markers '+i+' with '+(i+1));
		}
	}

	// Fix or remove split suffixes such as for must_ _n't or you_ _re
	txt = txt.replace(/\n([Ww])ill_(\t\S+)?\n_(n'?t)\n/g, '\n$1o$3$2\n'); // will not
	txt = txt.replace(/\n([Ss])hall_(\t\S+)?\n_(n'?t)\n/g, '\n$1ha$3$2\n'); // shall not
	txt = txt.replace(/\n([Cc])an_(\t\S+)?\n_(n'?t)\n/g, '\n$1a$3$2\n'); // can not
	txt = txt.replace(/\n(\S+)_(\t\S+)?\n_(n'?t)\n/g, '\n$1$3$2\n'); // are not, would not, etc
	txt = txt.replace(/\n(\S+)_(\t\S+)?\n_(re|s|m|ll|d|ve)\n/g, '\n$1\'$3$2\n'); // you are, they will, etc
	// Any remaining unhandled suffix goes into the void
	txt = txt.replace(/\n_\S+\n/g, '\n');
	txt = txt.replace(/\n(\S+?)_/g, '\n$1');

	// %k-stop that changes a comma should be a replacement type, not a comma type
	txt = txt.replace(/\n,\t%k-stop\n/g, '\n,\t%x-to-stop <R:.>\n');

	// Remove empty sentences
	txt = txt.replace(/<s\d+>[\s\n]*<\/s\d+>/g, '');

	// Remove noise before sentences
	txt = txt.replace(/^[^]*?(<s\d+>)/, '$1');

	// Remove noise between sentences
	txt = txt.replace(/(\n<\/s\d+>)[^]*?(<s\d+>\n)/g, '$1\n\n$2');

	// Remove noise after sentences
	txt = txt.replace(/(<\/s\d+>)[^<]*?$/, '$1');

	if (g_tool === 'Comma') {
		txt = txt.replace(/(\n[^\t]+\t<R:[^>]+>)\n/, '$1 £error\n');
	}

	return txt;
}

function findToSend(prefix, word, suffix, casing, closer) {
	////console.log([prefix, word, suffix, casing, closer]);
	let prefix_s = prefix.replace(Const.NonLetter, '');
	let word_s = word.replace(Const.NonLetter, '');
	let suffix_s = suffix.replace(Const.NonLetter, '');
	let prefix_s_org = prefix_s;
	let word_s_org = word_s;
	let suffix_s_org = suffix_s;

	if (casing) {
		prefix_s = prefix_s.toLowerCase();
		word_s = word_s.toLowerCase();
		suffix_s = suffix_s.toLowerCase();
	}

	for (let i=0 ; i<to_send.length ; ++i) {
		let t_org = to_send[i].t;
		let t = to_send[i].t;
		let found = true;

		if (casing) {
			t = t.toLowerCase();
		}

		let p_off = 0;
		if (closer) {
			// Try to find verbatim prefix in the text
			let pof = t.indexOf(prefix);
			if (pof == -1) {
				pof = t.indexOf(prefix.toLowerCase());
			}
			if (pof != -1) {
				p_off = pof + prefix.length;
			}
		}
		if (!p_off) {
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
				if (!closer && p_off === 0 && Const.LetterT.test(t.substring(0, nof))) {
					// There is something substantial before the prefix
					//console.log('Prefix: '+t.substring(0, nof));
					found = false;
					break;
				}
				p_off = nof + f.length;
			}
		}
		if (!found) {
			//console.log('Not-found: prefix');
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
			//console.log('Not-found: word');
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
			//console.log('Not-found: suffix');
			continue;
		}
		while (s_off < t.length && Const.SpaceOrEmpty.test(t.charAt(s_off))) {
			++s_off;
		}

		if (!closer && Const.LetterT.test(t.substring(s_off))) {
			// There is something substantial after the suffix
			//console.log('Suffix: '+t.substring(s_off));
			continue;
		}

		if (/^\s/.test(word)) {
			while (p_off > 1 && Const.SpaceOrEmpty.test(t.charAt(p_off-1))) {
				--p_off;
			}
		}
		else if (Const.PrefixNonLetterT.test(word)) {
			while (p_off > 1 && Const.NonLetterT.test(t.charAt(p_off-1))) {
				--p_off;
			}
		}
		else {
			while (p_off < t.length && Const.NonLetterT.test(t.charAt(p_off))) {
				++p_off;
			}
		}

		if (/\s$/.test(word)) {
			while (w_off < t.length && Const.SpaceOrEmpty.test(t.charAt(w_off))) {
				++w_off;
			}
		}
		else if (Const.SuffixNonLetterT.test(word)) {
			while (w_off < t.length && Const.NonLetterT.test(t.charAt(w_off))) {
				++w_off;
			}
		}
		else {
			while (w_off > 1 && Const.NonLetterT.test(t.charAt(w_off-1))) {
				--w_off;
			}
		}

		let rv = {
			prefix: t_org.substring(0, p_off),
			word: t_org.substring(p_off, w_off),
			suffix: t_org.substring(w_off, s_off),
			t: t_org,
			};

		if (!closer && casing) {
			if (rv.prefix.replace(Const.NonLetter, '').toLowerCase() !== prefix_s) {
				//console.log('Non-prefix: '+rv.prefix+' != '+prefix_s);
				continue;
			}
			if (rv.word.replace(Const.NonLetter, '').toLowerCase() !== word_s) {
				//console.log('Non-word: '+rv.word+' != '+word_s);
				continue;
			}
			if (rv.suffix.replace(Const.NonLetter, '').toLowerCase() !== suffix_s) {
				//console.log('Non-suffix: '+rv.suffix+' != '+suffix_s);
				continue;
			}
		}
		else if (!closer) {
			if (rv.prefix.replace(Const.NonLetter, '') !== prefix_s_org) {
				//console.log('Non-prefix: '+rv.prefix+' != '+prefix_s_org);
				continue;
			}
			if (rv.word.replace(Const.NonLetter, '') !== word_s_org) {
				//console.log('Non-word: '+rv.word+' != '+word_s_org);
				continue;
			}
			if (rv.suffix.replace(Const.NonLetter, '') !== suffix_s_org) {
				//console.log('Non-suffix: '+rv.suffix+' != '+suffix_s_org);
				continue;
			}
		}

		return rv;
	}

	let rv = false;
	if (/\w+\. \./.test(prefix) || /\w+\. \./.test(word) || /\w+\. \./.test(suffix)) {
		//console.log('findToSend snip extra abbreviation full stops');
		rv = findToSend(prefix.replace(/(\w+\.) \./g, '$1'), word.replace(/(\w+\.) \./g, '$1'), suffix.replace(/(\w+\.) \./g, '$1'));
	}
	if (rv === false && !casing) {
		//console.log('findToSend case-insensitive');
		rv = findToSend(prefix, word, suffix, true, closer);
	}
	if (rv === false && !closer && !casing) {
		let px = /\s(\S+\s\S+\s\S+\s*)$/.exec(prefix);
		if (px) {
			prefix = px[1];
		}
		let sx = /^(\s*\S+\s\S+\s\S+)\s/.exec(suffix);
		if (sx) {
			suffix = sx[1];
		}
		//console.log('findToSend(px:"'+prefix+'", sx:"'+suffix+'") close-context');
		rv = findToSend(prefix, word, suffix, false, true);
	}
	return rv;
}

function _parseResult(rv) {
	g_impl.parseProgress();

	if (rv.hasOwnProperty('hmac')) {
		g_access_token.hmac = rv.hmac;
	}

	if (!rv.hasOwnProperty('c')) {
		g_impl.parseNoResult();
		return;
	}

	if (!rv.hasOwnProperty('v') || parseInt(rv.v) !== VERSION_PROTOCOL) {
		g_impl.showWarning('WARN_VERSION_MISMATCH');
	}

	let tid = parseInt(rv.t);

	let txt = sanitize_result(rv.c);
	txt = g_impl.beforeParseResult(txt);

	let ps = [];
	let nps = $.trim(txt.replace(/\n+<\/s>\n+/g, "\n\n")).split(/<\/s\d+>/);

	// Where missing in result, copy from the cache
	for (let k = to_send_b, p=0 ; k<to_send_i ; ++k) {
		let found = false;
		for (let i=p ; i<nps.length ; ++i) {
			if (nps[i].indexOf('<s'+to_send[k].i+'>\n') !== -1) {
				////console.log(`Par ${k} found in result`);
				ps.push([tid, nps[i]]);
				p = i;
				found = true;
				break;
			}
		}
		if (!found && to_send[k].h in cache[g_tool]) {
			////console.log(`Par ${k} found in cache`);
			ps.push([cache[g_tool][to_send[k].h].tid, '<s'+to_send[k].i+'>\n'+cache[g_tool][to_send[k].h].txt]);
		}
	}

	for (let i=0 ; i<ps.length ; ++i) {
		let tid = ps[i][0];
		let cp = $.trim(ps[i][1]);
		if (!cp) {
			continue;
		}

		let otxt = '';

		let lines = cp.split(/\n/);
		let id = parseInt(lines[0].replace(/^<s(.+)>$/, '$1'));
		for (let k = to_send_b ; k<to_send_i ; ++k) {
			if (to_send[k].i === id) {
				otxt = to_send[k].t;
				cache[g_tool][to_send[k].h] = {
					tid: tid,
					txt: $.trim(cp.replace(/^<s.+>/g, '')),
					};
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

			let w = new GS_Word(...$.trim(lines[j]).split(/\t/));
			let wf = '"<'+w.word+'>"';
			w.word = $.trim(w.word.replace(/(\S)=/g, '$1 '));

			w.ana.raw = ' ' + wf + ' ';
			w.tid = tid;

			if (w.word === '') {
				w.word = STR_SENT_BREAK;
				w.space = '';
				words.push(w);
				continue;
			}

			if (w.mark) {
				let ws = w.mark.split(/ /g);
				w.mark = '';

				let nws = [];
				let rs = [];
				let crs = [];
				let had_r = false;
				for (let k=0 ; k<ws.length ; ++k) {
					ws[k] = $.trim(ws[k]);
					if (!ws[k]) {
						continue;
					}

					if (ws[k].indexOf('<R:') === 0) {
						let n = ws[k].substr(3);
						n = n.substr(0, n.length-1).replace(/(\S)=/g, '$1 ');
						if (n === w.word) {
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
						if (n === w.word) {
							//console.log(n);
							continue;
						}
						crs.push(n);
						continue;
					}
					if (!/^[%£]/.test(ws[k])) {
						w.ana.raw += ws[k] + ' ';
						if (/^[A-Z]+$/.test(ws[k])) {
							w.ana.pos = ws[k];
						}
						else if (/^@/.test(ws[k])) {
							w.ana.func = ws[k];
						}
						else {
							//console.log('Unknown marking/tag ' + ws[k]);
						}
					}
					else {
						nws.push(ws[k]);
					}
				}

				let dnws = [];
				for (let k=0 ; k<nws.length ; ++k) {
					if (g_marks.types_complex.hasOwnProperty(nws[k])) {
						//console.log(`Complex marking ${nws[k]}`);
						let cs = g_marks.types_complex[nws[k]];
						let good = false;
						for (let ci = 0 ; ci<cs.length ; ++ci) {
							let c = cs[ci];
							good = true;
							for (let a=0 ; a<c.ana.length ; ++a) {
								//console.log(`Complex testing ${c.ana[a]} in ${w.ana.raw}`);
								if (!c.ana[a].test(w.ana.raw)) {
									//console.log(`Complex not-found ${nws[k]}`);
									good = false;
									break;
								}
							}
							if (good) {
								//console.log(`Complex found ${nws[k]} => ${c.exp}`);
								dnws.push(c.exp);
								break;
							}
						}
						if (good) {
							continue;
						}
					}

					if (!g_marks.types.hasOwnProperty(nws[k])) {
						nws[k] = nws[k].replace(/^£:\S+/, '£:...');
					}

					if (g_marks.types.hasOwnProperty(nws[k]) || /^£(xor)?[<>]/.test(nws[k])) {
						dnws.push(nws[k]);
					}
					else {
						//console.log('Unknown marking/tag ' + nws[k]);
					}
				}
				nws = dnws;

				crs = rs.concat(crs);
				// Remove £sentsplit from last token
				if (j == lines.length-1 && nws.length == 1 && nws[0] === '£sentsplit') {
					crs = [];
					nws = [];
				}
				// Only show addfejl suggestions if there were real suggestions
				if (!had_r) {
					crs = [];
				}

				ws = [];
				let had_sentsplit = false;
				let none = true;

				for (let k=0 ; k<nws.length ; ++k) {
					if (nws[k] === '£sentsplit') {
						had_sentsplit = true;
					}
					if (g_marks.to_upper.test(nws[k]) && prev_sentsplit) {
						////console.log(`Skipping £upper due to £sentsplit`);
						continue;
					}
					if (/^£(xor)?[<>]/.test(nws[k])) {
						//console.log(nws[k]);
					}
					else if (_live_options.types.hasOwnProperty(nws[k]) && !_live_options.types[nws[k]]) {
						continue;
					}
					none = false;
					ws.push(nws[k]);
				}

				if (_live_options.config.opt_useDictionary && g_marks.dict.test(ws[0]) && isInDictionary(w[0])) {
					////console.log(`Found ${w[0]} in dictionary`);
					ws = [];
				}

				prev_sentsplit = had_sentsplit;
				if (ws.length && none) {
					////console.log(`Vitec MV whitelist no-match: ${ws}`);
					if (ws.indexOf('£insert') !== -1) {
						w.word = ' ';
					}
					ws = [];
				}
				nws = ws.unique().sort(sortMarkings);
				if (nws.length == 0) {
					crs = [];
				}

				// For case-folding, create a correction if none exists and fold all corrections to the desired case
				for (let k=0 ; k<nws.length ; ++k) {
					if (g_marks.to_upper.test(nws[k])) {
						if (crs.length == 0) {
							crs.push(w.word);
						}
						for (let c=0 ; c<crs.length ; ++c) {
							crs[c] = uc_first(crs[c]);
						}
					}
					else if (g_marks.to_lower.test(nws[k])) {
						if (crs.length == 0) {
							crs.push(w.word);
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
					w.suggs = crs.join('\t');
					////console.log(crs);
				}
				if (nws.length) {
					w.mark = nws.join(' ');
					if (w.mark.indexOf(' ') !== -1) {
						w.mark = w.mark.replace(/ £error /g, ' ').replace(/ £error$/g, '').replace(/^£error /g, '');
					}

					had_mark = true;
				}
				else {
					w.suggs = '';
				}
			}
			if (g_marks.rx_ins_before.test(w.mark)) {
				let mos = w.mark.split(' ');
				let mo = [];
				let mw = [];
				for (let k=0 ; k<mos.length ; ++k) {
					if (g_marks.rx_ins_before.test(mos[k])) {
						mw.push(mos[k]);
					}
					else {
						mo.push(mos[k]);
					}
				}
				let wo = new GS_Word(w.word, mo.join(' '));
				wo.ana.pos = w.ana.pos;
				wo.ana.func = w.ana.func;
				wo.ana.raw = w.ana.raw;
				wo.tid = w.tid;

				w = new GS_Word(',', mw.join(' '));
				if (w.mark.indexOf('%k-stop') !== -1) {
					w.word = '.';
				}
				w.ana.pos = 'PU';
				words.push(w);
				w = wo;
			}
			words.push(w);
		}

		// Try to fix backend's mangling of symbols, by detecting non-letters and adopting them from the input text
		if (otxt) {
			let rx = /^([^a-zA-Z0-9])/;
			let good = true;
			for (let j=0 ; j<words.length ; ++j) {
				let w = words[j];
				if (is_nullish(w.word) || g_marks.rx_ins.test(w.mark)) {
					continue;
				}
				if (otxt.indexOf(w.word) == 0) {
					otxt = otxt.substr(w.word.length).trim();
				}
				else {
					let ws = w.word.split(/([^a-zA-Z0-9])/);
					for (let k=0 ; k<ws.length ; ++k) {
						if (otxt.indexOf(ws[k]) == 0) {
							otxt = otxt.substr(ws[k].length).trim();
						}
						else {
							let m = rx.exec(otxt);
							if (m) {
								ws[k] = m[1];
								otxt = otxt.substr(ws[k].length).trim();
							}
							else {
								good = false;
								//console.log([w, ws, j]);
								break;
							}
						}
					}
					if (good) {
						let sgs = words[j].suggs.split('\t');
						for (let k=0 ; k<sgs.length ; ++k) {
							let sg = sgs[k].split(/([^a-zA-Z0-9])/);
							if (sg.length === ws.length) {
								for (let m=0 ; m<ws.length ; ++m) {
									if (/^[^a-zA-Z0-9]$/.test(sg[m])) {
										sg[m] = ws[m];
									}
								}
								sgs[k] = sg.join('');
							}
						}
						words[j].suggs = sgs.join('\t');
						let nw = ws.join('');
						words[j].word = nw;
					}
				}
			}
		}

		if (had_mark) {
			// First loop only handles spanning marks so they can eat types behind them
			for (let j=0 ; j<words.length ; ++j) {
				if (words[j].mark) {
					let rx = /£(xor)?([<>])(\S+)/;
					let span = rx.exec(words[j].mark);
					if (span) {
						let range = new GS_MarkRange(segments.length, j, words[j].mark, words[j].suggs, words[j].tid);
						let px = [];
						let sx = [];
						let wb = words[j].word;
						let we = '';
						if (span[2] == '<') {
							for (let k=j-1 ; k>-1 ; --k) {
								if (!words[k].word) {
									break;
								}
								if (words[k].mark.indexOf('£'+span[3]) !== -1) {
									we = wb;
									wb = words[k].word;
									range.begin = k;
									range.mark = (words[k].mark + ' ' + words[j].mark).replace(rx, '').replace(/  +/g, ' ').trim().split(' ').unique().join(' ');
									px = words[k].suggs.split('\t');
									if (!words[k].suggs) {
										px = [words[k].word];
									}
									if (g_marks.rx_del.test(words[k].mark)) {
										px = [''];
										wb = '';
									}
									sx = words[j].suggs.split('\t');
									if (!words[j].suggs) {
										sx = [words[j].word];
									}
									if (g_marks.rx_del.test(words[j].mark)) {
										sx = [''];
										we = '';
									}
									words[j].omark = words[j].mark;
									words[j].osuggs = words[j].suggs;
									words[k].omark = words[k].mark;
									words[k].osuggs = words[k].suggs;
									words[j].mark = words[k].mark = '';
									words[j].suggs = words[k].suggs = '';
									break;
								}
							}
						}
						else if (span[2] == '>') {
							for (let k=j+1 ; k<words.length ; ++k) {
								if (!words[k].word) {
									break;
								}
								if (words[k].mark.indexOf('£'+span[3]) !== -1) {
									we = words[k].word;
									range.end = k + 1;
									range.mark = (words[j].mark + ' ' + words[k].mark).replace(rx, '').replace(/  +/g, ' ').trim().split(' ').unique().join(' ');
									px = words[j].suggs.split('\t');
									if (!words[j].suggs) {
										px = [words[j].word];
									}
									if (g_marks.rx_del.test(words[j].mark)) {
										px = [''];
										wb = '';
									}
									sx = words[k].suggs.split('\t');
									if (!words[k].suggs) {
										sx = [words[k].word];
									}
									if (g_marks.rx_del.test(words[k].mark)) {
										sx = [''];
										we = '';
									}
									words[j].omark = words[j].mark;
									words[j].osuggs = words[j].suggs;
									words[k].omark = words[k].mark;
									words[k].osuggs = words[k].suggs;
									words[j].mark = words[k].mark = '';
									words[j].suggs = words[k].suggs = '';
									break;
								}
							}
						}

						let sgs = [];
						if (span[1] === 'xor') {
							for (let s=0 ; s<sx.length ; ++s) {
								let sug = Array(range.end - range.begin);
								sug.fill(new GS_Suggestion(STR_PLACEHOLDER));
								sug[0] = new GS_Suggestion(wb);
								sug[sug.length-1] = new GS_Suggestion(sx[s]);
								sgs.push(sug);
							}
							for (let p=0 ; p<px.length ; ++p) {
								let sug = Array(range.end - range.begin);
								sug.fill(new GS_Suggestion(STR_PLACEHOLDER));
								sug[0] = new GS_Suggestion(px[p]);
								sug[sug.length-1] = new GS_Suggestion(we);
								sgs.push(sug);
							}
						}
						else {
							for (let p=0 ; p<px.length ; ++p) {
								for (let s=0 ; s<sx.length ; ++s) {
									let sug = Array(range.end - range.begin);
									sug.fill(new GS_Suggestion(STR_PLACEHOLDER));
									sug[0] = new GS_Suggestion(px[p]);
									sug[sug.length-1] = new GS_Suggestion(sx[s]);
									sgs.push(sug);
								}
							}
						}
						range.suggs = sgs;
						if (sgs.length) {
							range.ef_mark = range.mark.replace(new RegExp(g_marks.rx_del, 'g'), ' ').replace(/  +/g, ' ').trim();
						}
						marking_ranges.push(range);
					}
				}
			}
			// Second loop handles everything else
			for (let j=0 ; j<words.length ; ++j) {
				if (words[j].mark) {
					let range = new GS_MarkRange(segments.length, j, words[j].mark, words[j].suggs, words[j].tid);
					words[j].omark = words[j].mark;
					words[j].osuggs = words[j].suggs;
					words[j].mark = words[j].suggs = '';

					if (g_marks.comp_left.test(range.mark)) {
						range.begin -= 1;
					}
					else if (g_marks.comp_right.test(range.mark)) {
						range.end += 1;
					}
					else if (g_marks.comp_hyphen.test(range.mark)) {
						range.end += 1;
					}
					else if (g_marks.comp_preswap.test(range.mark)) {
						range.begin -= 1;
					}

					if (g_marks.rx_ins_before.test(range.mark) || g_marks.rx_ins.test(range.mark)) {
						range.ins = words[j];
						range.suggs = [];
						words[j] = new GS_Word(STR_NULLISH);
						words[j].oword = range.ins.word;
						words[j].omark = range.ins.omark;
						words[j].osuggs = range.ins.osuggs;
					}

					marking_ranges.push(range);
				}
			}
			// Third loop resets marks and suggestions
			for (let j=0 ; j<words.length ; ++j) {
				words[j].mark = words[j].omark;
				words[j].suggs = words[j].osuggs;
			}
			marking_ranges.sort(sortRanges);
			for (let j=0 ; j<marking_ranges.length ; ++j) {
				if (marking_ranges[j].mark && !marking_ranges[j].ef_mark) {
					marking_ranges[j].ef_mark = marking_ranges[j].mark;
				}
			}
			////console.log(marking_ranges);

			segment_ids[segments.length] = id;
			segments.push(words);
		}
	}

	g_impl.parseChunkDone();
}

function parseResult(rv) {
	try {
		_parseResult(rv);
	}
	catch (e) {
		g_impl.parseError(e);
	}
}

function sendTexts() {
	g_impl.parseSendStart();
	let text = '';

	for (to_send_b = to_send_i ; to_send_i < to_send.length && text.length < Defs.MAX_RQ_SIZE ; ++to_send_i) {
		let par = to_send[to_send_i];

		let marks = /((?:\S+\s+){0,2})(\S+?)(\S[\u0300-\u036F]+)((?:\s+\S+){0,2})/.exec(par.t);
		if (marks && par.t !== par.t.normalize()) {
			g_impl.showWarning('WARN_COMBINING_CHARACTER', {
				chr: marks[3],
				cntx: marks[0],
				});
			continue;
		}

		if (!par.hasOwnProperty('h')) {
			par.h = 'h-'+murmurHash3.x86.hash128(par.t) + '-' + par.t.length;
		}

		if (par.h in cache[g_tool]) {
			////console.log(`Par ${par.i} found in cache`);
			continue;
		}

		// MS Word Online sends a Narrow No-Break Space
		let t = par.t.replace('\u202F', ' ');

		t = t.replace(/\u00AD/g, ''); // Soft Hyphen
		// Turn <> into ⟨⟩ so that plain-text markup isn't passed through
		t = t.replace(/</g, '⟨');
		t = t.replace(/>/g, '⟩');

		text += '<s'+par.i+'>\n'+t+'\n</s'+par.i+'>\n\n';
	}

	if (text) {
		text = g_impl.beforeSendTexts(text);

		to_send_last = text;
		let url = ROOT_URL_GRAMMAR + '/callback.php?a=' + g_tools.grammar;
		if (g_tool === 'Comma') {
			url = ROOT_URL_GRAMMAR + '/callback.php?a=' + g_tools.comma;
		}
		let data = {
			t: text,
			r: ts_fail,
			c: g_client,
			v: VERSION_PROTOCOL,
			gdpr: _live_options.config.opt_confidential + 0,
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
			g_impl.showError('ERR_POSTBACK');
		});
	}
	else {
		g_impl.parseSendEnd();
	}
}

function checkParagraphs(doc) {
	loadOptions((g_tool == 'Comma') ? SERVICES.Comma : SERVICES.Grammar);
	loadDictionary();

	//console.log(doc);
	to_send = doc;
	to_send_i = 0;
	to_send_b = 0;
	segments = [];
	segment_ids = [];
	marking_ranges = [];
	g_impl.parseCheckStart();
	sendTexts();
}

function recheckParagraphs(doc) {
	if (ts_xhr) {
		ts_xhr.abort();
	}
	ts_xhr = null;

	for (let k = 0 ; k<to_send.length ; ++k) {
		if (to_send[k].i === segment_ids[cmarking.s]) {
			to_send.splice(k, 1, ...doc);
			break;
		}
	}
	for (let k = 0 ; k<to_send.length ; ++k) {
		to_send[k].i = k+1;
	}

	loadOptions((g_tool == 'Comma') ? SERVICES.Comma : SERVICES.Grammar);
	loadDictionary();

	//console.log(doc, to_send);
	to_send_i = 0;
	to_send_b = 0;
	segments = [];
	segment_ids = [];
	marking_ranges = [];
	g_impl.parseCheckStart();
	sendTexts();
}

function object2tsv(obj) {
	let rv = '';

	for (let k in obj) {
		if (!obj.hasOwnProperty(k)) {
			continue;
		}
		rv += k.replace(/\n/g, '\\n').replace(/\t/g, '\\t') + '\t';
		rv += obj[k].replace(/\n/g, '\\n').replace(/\t/g, '\\t');
		rv += '\n';
	}

	return rv;
}

function object2pot(obj) {
	let rv = '';

	rv += 'msgid ""\n';
	rv += 'msgstr ""\n';
	rv += '"MIME-Version: 1.0\\n"\n';
	rv += '"Content-Type: text/plain; charset=utf-8\\n"\n';
	rv += '"Content-Transfer-Encoding: 8bit\\n"\n';
	rv += '\n';

	for (let k in obj) {
		if (!obj.hasOwnProperty(k)) {
			continue;
		}
		rv += '# ' + obj[k].replace(/\n/g, '\\n') + '\n';
		rv += 'msgid "' + k + '"\n';
		rv += 'msgstr ""\n';
		rv += '\n';
	}

	return rv;
}

function object2po(obj, base) {
	let rv = '';

	rv += 'msgid ""\n';
	rv += 'msgstr ""\n';
	rv += '"MIME-Version: 1.0\\n"\n';
	rv += '"Content-Type: text/plain; charset=utf-8\\n"\n';
	rv += '"Content-Transfer-Encoding: 8bit\\n"\n';
	rv += '\n';

	let seen = {};
	for (let k in obj) {
		if (!obj.hasOwnProperty(k)) {
			continue;
		}
		if (base.hasOwnProperty(k)) {
			rv += '# ' + base[k].replace(/\n/g, '\\n') + '\n';
		}
		seen[k] = true;
		rv += 'msgid "' + k + '"\n';
		rv += 'msgstr "' + obj[k].replace(/\n/g, '\\n').replace(/"/g, '\\"') + '"\n';
		rv += '\n';
	}

	for (let k in base) {
		if (!base.hasOwnProperty(k)) {
			continue;
		}
		if (seen.hasOwnProperty(k)) {
			continue;
		}
		rv += '# ' + base[k].replace(/\n/g, '\\n') + '\n';
		rv += 'msgid "' + k + '"\n';
		rv += 'msgstr ""\n';
		rv += '\n';
	}

	return rv;
}

function nl2html(v) {
	v = '<p>'+v.replace(/\n+<ul>/g, '</p><ul>').replace(/\n+<\/ul>/g, '</ul>').replace(/<\/ul>\n+/g, '</ul><p>').replace(/\n+<ol>/g, '</p><ol>').replace(/\n+<\/ol>/g, '</ol>').replace(/<\/ol>\n+/g, '</ol><p>').replace(/\n+<li>/g, '<li>').replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>')+'</p>';
	return v;
}

function l10n_detectLanguage() {
	l10n.lang = navigator.language;
	try {
		if (window.hasOwnProperty('parent') && window.parent && window.parent.hasOwnProperty('UILANG2') && window.parent.UILANG2) {
			l10n.lang = window.parent.UILANG2;
		}
	}
	catch (DOMException) {
	}
	if (window.hasOwnProperty('UILANG2') && window.UILANG2) {
		l10n.lang = window.UILANG2;
	}
	if (!l10n.s.hasOwnProperty(l10n.lang)) {
		l10n.lang = l10n.lang.replace(/^([^-_]+).*$/, '$1');
	}
	if (!l10n.s.hasOwnProperty(l10n.lang)) {
		l10n.lang = 'da';
	}
	return l10n.lang;
}

function l10n_translate(s, g) {
	s = '' + s; // Coerce to string

	// Special case for the version triad
	if (s === 'VERSION') {
		return VERSION;
	}
	if (s === 'PRODUCT_NAME') {
		return PRODUCT_NAME;
	}
	if (s === 'PRODUCT_DOMAIN') {
		return PRODUCT_DOMAIN;
	}

	let l = session.locale;
	let t = '';

	if (!l10n.s.hasOwnProperty(l)) {
		l = 'da';
	}

	// If the string doesn't exist in the locale, fall back
	if (!l10n.s[l].hasOwnProperty(s)) {
		// Try English
		if (l10n.s.hasOwnProperty('en') && l10n.s.en.hasOwnProperty(s)) {
			t = l10n.s.en[s];
		}
		// ...then Danish
		else if (l10n.s.hasOwnProperty('da') && l10n.s.da.hasOwnProperty(s)) {
			t = l10n.s.da[s];
		}
		// ...give up and return as-is
		else {
			t = s;
		}
	}
	else {
		t = l10n.s[l][s];
	}

	let did = false;
	do {
		did = false;
		let rx = /\{([A-Z0-9_]+)\}/g;
		let ms = [];
		let m = null;
		while ((m = rx.exec(t)) !== null) {
			ms.push(m[1]);
		}
		for (let i=0 ; i<ms.length ; ++i) {
			let nt = l10n_translate(ms[i]);
			if (nt !== ms[i]) {
				t = t.replace('{'+ms[i]+'}', nt);
				did = true;
			}
		}

		rx = /%([A-Za-z0-9]+)%/;
		m = null;
		while ((m = rx.exec(t)) !== null) {
			t = t.replace(m[0], g[m[1]]);
			did = true;
		}
	} while (did);

	return t;
}

function l10n_translate_html(s, g) {
	return nl2html(l10n_translate(s, g));
}

function _l10n_world_helper() {
	let e = $(this);
	let k = e.attr('data-l10n');
	let v = l10n_translate(k);

	if (k === v) {
		return;
	}

	if (/^TXT_/.test(k)) {
		v = nl2html(v);
	}
	e.html(v);
	if (/^TXT_/.test(k)) {
		l10n_world(e);
	}
}

function l10n_world(node) {
	if (!node) {
		node = document;
	}
	$(node).find('[data-l10n]').each(_l10n_world_helper);
	$(node).find('[data-l10n-alt]').each(function() {
		let e = $(this);
		let k = e.attr('data-l10n-alt');
		let v = l10n_translate(k);
		e.attr('alt', v);
	});
	$(node).find('[data-l10n-href]').each(function() {
		let e = $(this);
		let k = e.attr('data-l10n-href');
		let v = l10n_translate(k);
		e.attr('href', v);
	});
	$(node).find('[data-l10n-placeholder]').each(function() {
		let e = $(this);
		let k = e.attr('data-l10n-placeholder');
		let v = l10n_translate(k);
		e.attr('placeholder', v);
	});

	if (node == document && typeof l10n_marking_types === 'function') {
		l10n_marking_types(session.locale);
		if (g_marks.types.hasOwnProperty('%k-stop') && !g_marks.types.hasOwnProperty('%x-to-stop')) {
			g_marks.types['%x-to-stop'] = g_marks.types['%k-stop'];
			g_marks.types_comma.push('%x-to-stop');
		}
	}
}

function addScript(url) {
	//console.log('Loading '+url);
	let script = document.createElement('script');
	script.src = url;
	document.body.appendChild(script);
}

function addScriptDefer(url) {
	let script = document.createElement('script');
	script.setAttribute('defer', true);
	script.src = url;
	document.body.appendChild(script);
}

function matomo_load() {
	if (window.hasOwnProperty('_paq')) {
		//console.log('Matomo already loaded');
		return;
	}

	//console.log('Loading Matomo');
	let _paq = window._paq = window._paq || [];
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
		let u= MATOMO_ROOT;
		_paq.push(['setTrackerUrl', u+'matomo.php']);
		_paq.push(['setSiteId', g_impl.matomo_sid]);
		let d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
	})();
}

function matomo_event(cat, act, name, value) {
	if (typeof _paq === 'undefined') {
		//console.log('Matomo not loaded yet');
		return false;
	}
	//console.log([cat, act, name, value]);
	if (typeof act === 'undefined' || !act) {
		act = cat;
	}
	_paq.push(['trackEvent', cat, act, name, value]);
}

function log_marking_action(data) {
	let rq = {
		a: 'marking-action',
		data: data,
		};
	g_impl.callback(rq);
}

function contentLoaded() {
	const CLIENT = window.hasOwnProperty('CLIENT') ? window.CLIENT : '';

	if (CLIENT === 'adobe' || location.search.indexOf('host=adobe') !== -1) {
		g_client = 'adobe';
		//console.log('Adobe');
		addScript(ROOT_URL_SELF+'/js/impl-adobe.js');
	}
	else if (CLIENT === 'web' || location.search.indexOf('host=web') !== -1) {
		g_client = 'web';
		//console.log('Web');
	}
	else if (CLIENT === 'word' || location.search.indexOf('host=word') !== -1 || location.search.indexOf('host=msoffice') !== -1 || location.search.indexOf('_host_Info=Word') !== -1) {
		g_client = 'word';
		//console.log('MS Office');
		addScript('https://appsforoffice.microsoft.com/lib/1/hosted/office.js');
		addScript(ROOT_URL_SELF+'/js/impl-officejs.js');
	}
	else if (CLIENT === 'outlook' || location.search.indexOf('host=outlook') !== -1) {
		g_client = 'outlook';
		//console.log('MS Office (Outlook)');
		addScript('https://appsforoffice.microsoft.com/lib/1/hosted/office.js');
		addScript(ROOT_URL_SELF+'/vendor/findAndReplaceDOMText.js');
		addScript(ROOT_URL_SELF+'/js/impl-outlook.js');
	}
	else {
		g_client = 'gdocs';
		//console.log('Google');
		addScript(ROOT_URL_SELF+'/js/impl-gas.js');
	}

	let id = $(document.body).attr('id');
	if (id === 'sidebar' || id === 'options' || id === 'dictionary') {
		// Delay ever so slightly to force other scripts to load first
		// No, defer doesn't work. No, async doesn't work either.
		setTimeout(function() {addScript(ROOT_URL_SELF+'/js/'+id+'.js'); }, 100);
	}

	if (/^(word|outlook)$/.test(g_client) && /Trident|MSIE|Edge/.test(window.navigator.userAgent)) {
		$('#working').hide();
		$('#placeholder').html(l10n_translate_html('ERR_OFFICE_TOO_OLD'));
	}
}

if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		$(window).on('load', contentLoaded);
	}
	else {
		contentLoaded();
	}
}
