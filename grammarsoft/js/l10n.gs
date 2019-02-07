/*!
 * Copyright 2016-2019 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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
		MENU_START: 'Start RetMig & Kommaforslag',
		MENU_OPTIONS: 'Indstillinger',
		TITLE_OPTIONS: 'Indstillinger',
		TITLE_SIDEBAR: 'RetMig & Kommaforslag',
		},
	};

l10n.t = function(s) {
	s = '' + s; // Coerce to string

	var l = 'da';
	var m = /^([a-z]+)/.exec(Session.getActiveUserLocale());
	if (m) {
		l = m[1];
	}
	if (!l10n.s.hasOwnProperty(l)) {
		l = 'da';
	}
	var t = '';

	Logger.log('Locale: '+l);

	// If the string doesn't exist in the locale, fall back
	if (!l10n.s[l].hasOwnProperty(s)) {
		// Try Danish
		if (l10n.s.da.hasOwnProperty(s)) {
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

	return t;
};
