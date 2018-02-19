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

/* exported g_dictionary */
let g_dictionary = {};
/* exported g_dictionary_json */
let g_dictionary_json = '{}';
/* exported _live_dictionary */
let _live_dictionary = {};

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
	opt_colorBlind: false,
	opt_longExplanations: true,
	opt_mvNordic: true,
	opt_level: 3,
};

/* exported g_conf_json */
let g_conf_json = JSON.stringify(g_conf_defaults);

/* exported Const */
const Const = {
	NonLetter: /[^\d\wa-zA-ZéÉöÖæÆøØåÅ.,!;:]+/ig,
	Split_String: ' ,.?!"#¤%&/()=@£${}|*^¨~/\\½§<>:;-',
};
Const.Split_Array = Const.Split_String.split('');
Const.Split_Regex = new RegExp('(['+Const.Split_String+'])');

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
/* exported escapeRegExp */
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/* exported escapeRegExpTokens */
function escapeRegExpTokens(txt) {
	let ts = txt.split(/\s+/g);
	for (var i=0 ; i<ts.length ; ++i) {
		ts[i] = escapeRegExp(ts[i]);
	}
	return ts.join('\\s+');
}

/* exported loadConfig */
function loadConfig() {
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

/* exported sanitize_result */
function sanitize_result(txt) {
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
