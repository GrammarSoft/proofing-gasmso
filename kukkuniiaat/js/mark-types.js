/*!
 * Copyright 2016-2024 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
 * Linguistic backend by Oqaasileriffik (https://oqaasileriffik.gl/)
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * All rights reserved.
 * The explanatory texts in this file are NOT released under an open source license.
 */
'use strict';

g_marks.red = {
	"£spell": "£spell",
};

g_marks.yellow = {
	"£unknown": "£unknown",
};

g_marks.info = {};
g_marks.dict = new RegExp('.*');

g_marks.comp_right = new RegExp('£comp-|£comp( |$)');
g_marks.to_upper = new RegExp('£upper( |$)');
g_marks.to_lower = new RegExp('~no-such-type');
g_marks.rx_ins = /(£insert|%ko|%k)( |-|$)/;
g_marks.rx_del = /(£nil|%nok|%ok|%nko)( |-|$)/;

g_marks.types = {
	"£spell": [
		"Stavefejl",
		"Du har lavet en stavefejl, som programmet har fundet rettelsesforslag til.<br>\n<br>\nFx <i>intereseret → interesseret</i>",
	],
	"£unknown": [
		"Muligt forkert ord uden ændringsforslag",
		"Du har skrevet et specielt ord, som kan være forkert.<br>\n<br>\nFx <i>døgntlf.-tid.</i>",
	],
};

function l10n_marking_types(lang) {
	g_options_default.types = {};
	for (let k in g_marks.types) {
		g_options_default.types[k] = 1;
	}
}
