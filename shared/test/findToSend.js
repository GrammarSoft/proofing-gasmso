const fs = require('fs');

const g_conf_defaults = {};
let to_send = [];

let js = fs.readFileSync('../js/shared.js', 'utf-8') + '';
eval(js.replace(/['"]use strict['"](;?)/g, ''));

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
	];

for (let i=0 ; i<tests.length ; ++i) {
	let t = tests[i];
	to_send = [{t: t.t}];

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
		did = true;
	}
	if (!did) {
		console.log(`${i+1} FAIL: Returned had no expected fields`);
	}
}
