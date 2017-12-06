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

var l10n = {};

l10n.s = {
	da: {
		ERR_NO_SELECTION: 'Der var ingen markering. Du skal markere noget tekst før den funktion virker.',
		ERR_SELECT_NOTFOUND: 'Kunne ikke finde konteksten. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.',
		ERR_SELECT_NOMATCH: 'Konteksten matchede ikke. Denne fejl bør ikke kunne ske.',
		ERR_REPLACE_NOSELECT: 'Kunne ikke vælge stedet i konteksten. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.',
		},
	en: {
		ERR_NO_SELECTION: 'No selection found. You must select some text before that button will work.',
		},
	};

l10n.t = function(s) {
	s = '' + s; // Coerce to string

	var l = session.locale;
	// If the string doesn't exist in the locale, fall back
	if (!l10n.s[session.locale].hasOwnProperty(s)) {
		// Try English
		if (l10n.s.en.hasOwnProperty(s)) {
			return l10n.s.en[s];
		}
		// ...then Danish
		if (l10n.s.da.hasOwnProperty(s)) {
			return l10n.s.en[s];
		}
		// ...give up and return as-is
		return s;
	}
	return l10n.s[l][s];
};
