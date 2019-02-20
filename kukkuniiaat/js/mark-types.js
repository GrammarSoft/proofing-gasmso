/*!
 * Copyright 2016-2019 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
 * Linguistic backend by Oqaasileriffik (https://oqaasileriffik.gl/)
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * All rights reserved.
 * The explanatory texts in this file are NOT released under an open source license.
 */
'use strict';

/* exported types_red */
let types_red = {
	"@spell": "@spell",
};

/* exported types_yellow */
let types_yellow = {
	"@unknown": "@unknown",
};

/* exported types_dictionary */
let types_dictionary = new RegExp('.*');

/* exported types_comp_right */
let types_comp_right = new RegExp('@comp-|@comp( |$)');

/* exported types_to_upper */
let types_to_upper = new RegExp('@upper( |$)');

/* exported marking_types */
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
