require('util').inspect.defaultOptions.depth = Infinity;
const fs = require('fs');

const g_conf_defaults = {};
let $ = function(){};
let window = {};

let js = fs.readFileSync(__dirname + '/../js/shared.js', 'utf-8') + '';
js = js.replace("$(window).on('load', function() {", 'let __ignore = (function() {');
js = js.replace(/['"]use strict['"](;?)/g, '');
js = js.replace(/\nlet\b/g, '\nvar');
eval(js);

to_send = [];

let tests = [
	{t: 'abc def ghi', a: ['abc ', 'def', ' ghi'], e: {word: 'def'}},
	{t: 'abc def ghi', a: ['abc', ' def', ' ghi'], e: {word: ' def'}},
	{t: 'abc def ghi', a: ['abc', 'def ', 'ghi'], e: {word: 'def '}},
	{t: 'abc def ghi', a: ['abc', ' def ', 'ghi'], e: {word: ' def '}},
	{t: 'abc def ghi klm', a: ['abc ', 'def ghi', ' klm'], e: {word: 'def ghi'}},
	{t: 'abc def ghi klm', a: ['abc', ' def ghi', ' klm'], e: {word: ' def ghi'}},
	{t: 'abc def ghi klm', a: ['abc', 'def ghi ', 'klm'], e: {word: 'def ghi '}},
	{t: 'abc def ghi klm', a: ['abc', ' def ghi ', 'klm'], e: {word: ' def ghi '}},
	{t: '19) järtsjuke', a: ['19) ', 'järtsjuke', ''], e: {word: 'järtsjuke'}},
	{t: 'gulerødder 👍 og  blomkål abc.', a: ['gulerødder 👍 og ', 'blomkål', ' abc.'], e: {word: 'blomkål'}},
	{t: 'gulerødder 👍 og  blomkål.', a: ['gulerødder 👍 ', 'og blomkål', '.'], e: {word: 'og blomkål'}},
	{t: 'abc def ghi', a: ['Abc ', 'def', ' ghi'], e: {word: 'def'}},
	{t: 'abc def ghi', a: ['abc ', 'Def', ' ghi'], e: {word: 'def'}},
	{t: 'abc def ghi', a: ['abc ', 'def', ' Ghi'], e: {word: 'def'}},
	{t: 'abc def ghi.', a: ['abc ', 'def', ' ghi.'], e: {word: 'def'}},
	{t: 'abc def ghi. .', a: ['abc ', 'def', ' ghi. .'], e: {word: 'def'}},
	{t: 'abc def ghi..', a: ['abc ', 'def', ' ghi. .'], e: {word: 'def'}},
	{t: 'abc def ghi.', a: ['abc ', 'def', ' ghi. .'], e: {word: 'def'}},
	{t: 'This program will add missing commas in your English texts and offer advice on superfluous ones as well. Commatizer classifies comma errors into over 30 different categories, and can therefore provide targeted explanations and examples for each suggestion. In addition, explanations are also available for most existing, correct commas. For more information on comma types and errors, please see our English<a href="english_comma.odt">comma manual</a>.', a: ['This program will add missing commas in your English texts and offer advice on superfluous ones as well .  Commatizer classifies comma errors into over 30 different categories ', ',', 'and can therefore provide targeted explanations and examples for each suggestion .  In addition , explanations are also available for most existing , correct commas .  For more information on comma types and errors , please see our English<a href » english_comma.odt » >comma manual  a. '], e: {word: ','}},
	{ts: ['yuh zyv tyv jkl abc def ghi jkl tyv yuh tyv'], a: ['xuh xyv tyv jkl abc ', 'def', ' ghi jkl tyv xuh xyv'], e: {word: 'def'}},
	{t: 'Jeg havde planer om at tilbringe eftermiddagen med at fylde min hjerne med så mange græske madrelaterede ord, jeg kunne proppe ind, i forberedelse til aftenen forude. Tidligere samme morgen var Marigold taget forbi landsbybutikken. Hun mente at smart, dekorativt drys af flormelis, kunne være nok til at narre damerne, der samledes på kirkegården, til at tro de var hjemmelavede lækkerier fra hendes egen ovn. Hun vendte tilbage fra butikken med den frygtelige nyhed, at Dina, den ene halvdel af parret, der drev den lokale taverna, havde været så uheldig at falde ned fra en usikkert opstillet oliventræsstige og havde brækket sin arm i faldet.', a: ['Jeg havde planer om at tilbringe eftermiddagen med at fylde min hjerne med så mange græske madrelaterede ord, jeg kunne proppe ind i forberedelse til aftenen forude. Tidligere samme morgen var Marigold taget forbi landsbybutikken. Hun mente at smart, dekorativt drys af flormelis, kunne være nok til at narre damerne, der samledes på kirkegården, til at tro de var hjemmelavede lækkerier fra hendes egen ovn. Hun vendte tilbage fra butikken med den frygtelige nyhed, at Dina, den ene halvdel af parret, der drev den lokale taverna, havde været så uheldig at falde ned fra en usikkert opstillet ', 'oliventræsstige og', ' havde brækket sin arm i faldet.'], e: {word: 'oliventræsstige og'}},
	];

for (let i=0 ; i<tests.length ; ++i) {
	let t = tests[i];
	to_send = [];
	if (t.hasOwnProperty('ts')) {
		for (let j=0 ; j<t.ts.length ; ++j) {
			to_send.push({t: t.ts[j]});
		}
	}
	else {
		to_send = [{t: t.t}];
	}

	let rv = findToSend(t.a[0], t.a[1], t.a[2]);

	let did = false;
	for (let k in t.e) {
		if (!t.e.hasOwnProperty(k) || !rv.hasOwnProperty(k)) {
			continue;
		}

		// Normalize spaces
		if (typeof(rv[k]) === 'string') {
			rv[k] = rv[k].replace(/\s+/g, ' ');
			t.e[k] = t.e[k].replace(/\s+/g, ' ');
		}

		if (t.e[k] !== rv[k]) {
			console.log(`${i+1} FAIL: '${t.e[k]}' !== '${rv[k]}'`);
		}
		else {
			did = true;
		}
	}
	if (!did) {
		console.log(`${i+1} FAIL: Returned had no expected fields`);
	}
	else {
		console.log(`${i+1} SUCCESS: ` + JSON.stringify(rv));
	}
}
