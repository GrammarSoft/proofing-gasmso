/*!
 * Copyright 2016-2022 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
 * Linguistic backend by Oqaasileriffik (https://oqaasileriffik.gl/)
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * All rights reserved.
 * The explanatory texts in this file are NOT released under an open source license.
 */
'use strict';

let types_red = {
	"@spell": "@spell",
};

let types_yellow = {
	"@unknown": "@unknown",
};

let types_info = {};
let types_dictionary = new RegExp('.*');

let types_comp_right = new RegExp('@comp-|@comp( |$)');
let types_to_upper = new RegExp('@upper( |$)');
let types_to_lower = new RegExp('~no-such-type');
let rx_insertable = /(@insert|%ko|%k)( |-|$)/;
let rx_removable = /(@nil|%nok|%ok|%nko)( |-|$)/;

let marking_types = {
	"@spell": [
		"Stavefejl",
		"Du har lavet en stavefejl, som programmet har fundet rettelsesforslag til.<br>\n<br>\nFx <i>intereseret → interesseret</i>",
	],
	"@unknown": [
		"Muligt forkert ord uden ændringsforslag",
		"Du har skrevet et specielt ord, som kan være forkert.<br>\n<br>\nFx <i>døgntlf.-tid.</i>",
	],
};

function l10n_marking_types(lang) {
	g_options_default.types = {};
	for (let k in marking_types) {
		g_options_default.types[k] = 1;
	}
}
