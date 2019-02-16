/*!
 * Copyright 2016-2019 Tino Didriksen Consult <consult@tinodidriksen.com> at https://tinodidriksen.com/
 * Linguistic backend by Oqaasileriffik (https://oqaasileriffik.gl/)
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

/* globals session */

/* exported l10n */
let l10n = {};

l10n.s = {
	da: {
		BTN_CLOSE: 'Luk',
		BTN_COMMA_AGAIN: 'Tjek kommatering igen',
		BTN_COMMA_GOTO: 'Tjek kommatering',
		BTN_COMMA_INSERT: 'Indsæt komma',
		BTN_COMMA_INSERT_STOP: 'Indsæt punktum',
		BTN_COMMA_REMOVE: 'Fjern komma',
		BTN_COMMA_SUPPORT: 'Få hjælp til Kommaforslag',
		BTN_DICT_ADD: 'Føj til ordbogen',
		BTN_DICT_EDIT: 'Rediger',
		BTN_EDIT: 'Rediger',
		BTN_EDIT_ALL: 'Rediger alle',
		BTN_EDIT_ONE: 'Rediger',
		BTN_EXEC_ALL: 'Alt',
		BTN_EXEC_CONTINUOUS: 'Løbende',
		BTN_EXEC_SELECTED: 'Markering',
		BTN_EXPL_LESS: 'Skjul',
		BTN_EXPL_MORE: 'Vis mere',
		BTN_GRAMMAR_AGAIN: 'Tjek stavning igen',
		BTN_GRAMMAR_GOTO: 'Tjek stavning',
		BTN_GRAMMAR_INSERT: 'Indsæt',
		BTN_GRAMMAR_REMOVE: 'Fjern',
		BTN_GRAMMAR_REPLACE: 'Erstat',
		BTN_GRAMMAR_SUPPORT: 'Få hjælp til Kukkuniiaat',
		BTN_IGNORE: 'Ignorer',
		BTN_LOGIN: 'Login til Kukkuniiaat',
		BTN_LOGOUT: 'Log ud',
		BTN_NEXT: 'Næste',
		BTN_OPTIONS: 'Indstillinger',
		BTN_POP_IGNORE: 'Ignorer',
		BTN_POP_IGNOREALL: 'Ignorer alle',
		BTN_PREVIOUS: 'Forrige',
		BTN_SEEALL: 'Se alle',
		BTN_SUPPORT: 'Support',
		BTN_RESTART: 'Start på ny',
		BTN_VERSION: 'Version {VERSION}',
		BTN_WORD_ADD: 'Tilføj ord',
		ERR_CADUCEUS_FAILED: 'Kunne ikke oprette en kanal til login. Det kan være du ikke er online eller er bag en proxy eller firewall der blokerer for adgang.',
		ERR_DICTIONARY_404: 'Kunne ikke finde %s i ordbogen.',
		ERR_DICT_FAIL_ADD: 'Kunne ikke tilføje ordet %s til stavekontrollen!',
		ERR_DICT_FAIL_DELETE: 'Kunne ikke slette ordet %s fra stavekontrollen!',
		ERR_DICT_FAIL_EDIT: 'Kunne ikke ændre ordet %1$s til %2$s i stavekontrollen!',
		ERR_NO_AUDIO: 'Din browser/enhed understøtter ikke HTML5 Audio.',
		ERR_NO_SELECTION: 'Der var ingen markering. Du skal markere noget tekst før den funktion virker.',
		ERR_NO_STORAGE: 'Din browser understøtter ikke HTML5 Local Storage, men dette program fungerer ikke uden Local Storage. Det kan være du har slået det fra eller benytter privat vindue. Slå Local Storage til og prøv igen.',
		ERR_POSTBACK: 'Der opstod en serverfejl under tjekning af teksten. Prøv evt. igen.',
		ERR_REPLACE_NOSELECT: 'Kunne ikke vælge stedet i konteksten. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.',
		ERR_SELECT_NOMATCH: 'Konteksten matchede ikke. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.',
		ERR_SELECT_NOTFOUND: 'Kunne ikke finde konteksten. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.',
		HDR_COMMA: 'Kommaforslag',
		HDR_COMMA_DISPLAY: 'Kommavisning',
		HDR_COMMA_DONE: 'Din tekst er blevet tjekket, og der er ikke flere forslag til kommatering.',
		HDR_COMMA_LEVEL: 'Færdighedsniveau',
		HDR_DICTIONARY: 'Brugerordbog',
		HDR_DISPLAY: 'Visning',
		HDR_EDIT: 'Ret selv',
		HDR_ERRORLIST: 'Alle markeringer',
		HDR_GRAMMAR: 'Kukkuniiaat',
		HDR_GRAMMAR_ABOUT: 'Om Kukkuniiaat',
		HDR_GRAMMAR_DONE: 'Din tekst er blevet tjekket, og der er ikke flere stave- eller grammatikforslag.',
		HDR_GRAMMAR_ETYPES: 'Fejltyper',
		HDR_LOGIN: 'Login',
		HDR_REPLACE_WITH: 'Erstat med …',
		HDR_SUBSCRIBE: 'Har du ikke Kukkuniiaat eller Kommaforslag endnu?',
		HDR_SUPPORT_COPYRIGHT: 'Support &amp; Copyright',
		HDR_TTS: 'Oplæsning',
		HDR_WHAT_IS: 'Hvad er Kukkuniiaat?',
		HDR_YOUR_TEXT: 'Din tekst',
		LBL_COMMA_AFTER: 'Tjek også kommaer bagefter.',
		LBL_OPT_COLOR: 'Fremhæv rettelser',
		LBL_OPT_IGNORE_MAJ: 'Ret ikke fejl ved store/små bogstaver',
		LBL_OPT_IGNORE_UABBR: 'Ret ikke fejl med ukendte forkortelser',
		LBL_OPT_IGNORE_UCOMP: 'Ret ikke fejl med særskrivning/sammensatte ord',
		LBL_OPT_IGNORE_UNAMES: 'Ret ikke fejl med ukendte navne',
		LBL_OPT_IGNORE_UNKNOWN: 'Ret ikke fejl med ukendte ord',
		LBL_OPT_IGNORE_UOTHER: 'Ret ikke fejl med andre ukendte ord',
		LBL_OPT_LEVEL_1: '<b>Niveau 1</b>: De 9 nemmeste kommatyper, svarende til folkeskolens nederste klassetrin.',
		LBL_OPT_LEVEL_2: '<b>Niveau 2</b>: 20 kommatyper, svarende til folkeskolens øverste klassetrin.',
		LBL_OPT_LEVEL_3: '<b>Niveau 3</b>: Alle 34 kommatyper, svarende til gymnasiet og højere.',
		LBL_OPT_ONLYGREEN: 'Vis kun manglende kommaer',
		LBL_OPT_ONLY_CONFIDENT: 'Vis kun sikre fejl',
		LBL_OPT_SHOWOPTIONAL: 'Fremhæv valgfrie kommaer',
		LBL_OPT_TTS: 'Læs skærmteksterne op',
		LBL_OPT_USE_DICT: 'Anvend brugerordbogen',
		MENU_OPTIONS: 'Indstillinger',
		MENU_START: 'Start Kukkuniiaat',
		MSO_INSTALLED_BODY: 'Kukkuniiaat er nu installeret. Gå til fanen Hjem og klik på Kukkuniiaat for at komme i gang.',
		MSO_INSTALLED_TITLE: 'Kom godt i gang med Kukkuniiaat!',
		MSO_LEARNMORE_URL: 'https://tinodidriksen.com/spellers/',
		MSO_TOOLTIP: 'Klik for at åbne Kukkuniiaat',
		POP_LOADING: '… loading …',
		POP_WORKING: '… arbejder …',
		TAB_COMMA: 'Kommaforslag',
		TAB_COMMA_GENERAL: 'Generelt',
		TAB_DICTIONARY: 'Brugerordbog',
		TAB_GRAMMAR: 'Kukkuniiaat',
		TAB_GRAMMAR_GENERAL: 'Generelt',
		TITLE_OPTIONS: 'Indstillinger',
		TITLE_SIDEBAR: 'Kukkuniiaat',
		TXT_COMMA_ABOUT: 'Kommaforslag hjælper dig med at sætte komma - dvs. tilføjer manglende kommaer og fjerner eller flytter forkerte kommaer. Desuden skelner programmet mellem over 30 forskellige fejltyper og kan derfor tilbyde forklaringer og eksempler for hvert af de ændrede kommaer.',
		TXT_COMMA_COPYRIGHT: 'Copyright 2016-2019 Tino Didriksen Consult. Alle rettigheder forbeholdt.',
		TXT_COMMA_HINT: 'Vil du have tjekket din markering eller hele teksten?',
		TXT_COMMA_INTRO: 'Du kan også vælge at springe direkte til Kommaforslag for at få tjekket dine kommaer.',
		TXT_COMMA_SUPPORT: 'TODO',
		TXT_DICTIONARY_HINT: 'Her kan du tilføje, rette eller fjerne ord fra din ordbog.',
		TXT_GRAMMAR_ABOUT: 'Kukkuniiaat hjælper dig med at fange og fjerne stave- og slåfejl i dine tekster.',
		TXT_GRAMMAR_COPYRIGHT: 'Copyright 2016-2019 Tino Didriksen Consult.',
		TXT_GRAMMAR_HINT: 'Vil du have tjekket din markering eller hele teksten?',
		TXT_GRAMMAR_INTRO: 'Først skal du tjekke din tekst for stavning.',
		TXT_GRAMMAR_SUPPORT: 'Du kan få hjælp via <a href="https://oqaasileriffik.gl/kukkuniiaat/" target="_blank">Oqaasileriffik</a> eller <a href="https://tinodidriksen.com/spellers/" target="_blank">Tino Didriksen Consult</a>.',
		TXT_MUST_LOGIN: 'Du skal logge ind for at bruge dette værktøj.',
		TXT_SUBSCRIBE: 'Opret abonnement via <a href="https://retmig.dk/" target="_blank">retmig.dk</a> og/eller <a href="https://kommaer.dk/" target="_blank">kommaer.dk</a>',
		TXT_WHAT_IS: 'Kukkuniiaat hjælper dig med at fange og fjerne stave- og slåfejl i dine tekster.',
	},
	en: {
		ERR_NO_SELECTION: 'No selection found. You must select some text before that button will work.',
	},
};

l10n.t = function(s) {
	s = '' + s; // Coerce to string

	// Special case for the version triad
	if (s === 'VERSION') {
		return VERSION;
	}

	let l = session.locale;
	let t = '';

	if (!l10n.s.hasOwnProperty(l)) {
		l = 'da';
	}

	// If the string doesn't exist in the locale, fall back
	if (!l10n.s[l].hasOwnProperty(s)) {
		// Try English
		if (l10n.s.en.hasOwnProperty(s)) {
			t = l10n.s.en[s];
		}
		// ...then Danish
		else if (l10n.s.da.hasOwnProperty(s)) {
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

	let rx = /\{([A-Z0-9_]+)\}/;
	let m = null;
	while ((m = rx.exec(t)) !== null) {
		let nt = l10n.t(m[1]);
		t = t.replace(m[0], nt);
	}

	return t;
};

function l10n_detectLanguage() {
	let l = navigator.language;
	if (!l10n.s.hasOwnProperty(l)) {
		l = l.replace(/^([^-_]+).*$/, '$1');
	}
	if (!l10n.s.hasOwnProperty(l)) {
		l = 'da';
	}
	return l;
}

function l10n_world() {
	$('[data-l10n]').each(function() {
		let e = $(this);
		let k = e.attr('data-l10n');
		let v = l10n.t(k);
		if (/^TXT_/.test(k)) {
			v = '<p>'+v.replace(/\n+<ul>/g, '</p><ul>').replace(/\n+<\/ul>/g, '</ul>').replace(/<\/ul>\n+/g, '</ul><p>').replace(/\n+<li>/g, '<li>').replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>')+'</p>';
		}
		e.html(v);
	});
}
