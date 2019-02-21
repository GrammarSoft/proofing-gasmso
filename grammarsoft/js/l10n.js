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

/* globals session */

/* exported l10n */
let l10n = {};

l10n.lang = 'da';

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
		BTN_GRAMMAR_AGAIN: 'Tjek stavning og grammatik igen',
		BTN_GRAMMAR_GOTO: 'Tjek stavning og grammatik',
		BTN_GRAMMAR_INSERT: 'Indsæt',
		BTN_GRAMMAR_REMOVE: 'Fjern',
		BTN_GRAMMAR_REPLACE: 'Erstat',
		BTN_GRAMMAR_SUPPORT: 'Få hjælp til RetMig &amp; Kommaforslag',
		BTN_IGNORE: 'Ignorer',
		BTN_LOGIN: 'Login til RetMig &amp; Kommaforslag',
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
		HDR_GRAMMAR: 'RetMig',
		HDR_GRAMMAR_ABOUT: 'Om RetMig',
		HDR_GRAMMAR_DONE: 'Din tekst er blevet tjekket, og der er ikke flere stave- eller grammatikforslag.',
		HDR_GRAMMAR_ETYPES: 'Fejltyper',
		HDR_LOGIN: 'Login',
		HDR_REPLACE_WITH: 'Erstat med …',
		HDR_SUBSCRIBE: 'Har du ikke RetMig eller Kommaforslag endnu?',
		HDR_SUPPORT_COPYRIGHT: 'Support &amp; Copyright',
		HDR_WHAT_IS: 'Hvad er RetMig &amp; Kommaforslag?',
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
		LBL_OPT_USE_DICT: 'Anvend brugerordbogen',
		MENU_OPTIONS: 'Indstillinger',
		MENU_START: 'Start RetMig & Kommaforslag',
		MSO_INSTALLED_BODY: 'RetMig & Kommaforslag er nu installeret. Gå til fanen Hjem og klik på RetMig & Kommaforslag for at komme i gang.',
		MSO_INSTALLED_TITLE: 'Kom godt i gang med RetMig & Kommaforslag!',
		MSO_LEARNMORE_URL: 'https://grammarsoft.com/',
		MSO_TOOLTIP: 'Klik for at åbne RetMig & Kommaforslag',
		POP_LOADING: '… loading …',
		POP_WORKING: '… arbejder …',
		TAB_COMMA: 'Kommaforslag',
		TAB_COMMA_GENERAL: 'Generelt',
		TAB_DICTIONARY: 'Brugerordbog',
		TAB_GRAMMAR: 'RetMig',
		TAB_GRAMMAR_GENERAL: 'Generelt',
		TITLE_OPTIONS: 'Indstillinger',
		TITLE_SIDEBAR: 'RetMig &amp; Kommaforslag',
		TXT_COMMA_ABOUT: 'Kommaforslag hjælper dig med at sætte komma - dvs. tilføjer manglende kommaer og fjerner eller flytter forkerte kommaer. Desuden skelner programmet mellem over 30 forskellige fejltyper og kan derfor tilbyde forklaringer og eksempler for hvert af de ændrede kommaer.',
		TXT_COMMA_COPYRIGHT: 'Copyright 2016-2019 GrammarSoft ApS. Alle rettigheder forbeholdt.',
		TXT_COMMA_HINT: 'Vil du have tjekket din markering eller hele teksten?',
		TXT_COMMA_INTRO: 'Du kan også vælge at springe direkte til Kommaforslag for at få tjekket dine kommaer.',
		TXT_COMMA_SUPPORT: 'TODO',
		TXT_DICTIONARY_HINT: 'Her kan du tilføje, rette eller fjerne ord fra din ordbog.',
		TXT_GRAMMAR_ABOUT: 'RetMig hjælper dig med at fange og fjerne sproglige fejl i dine tekster. Og ikke kun de almindelige stave- og slåfejl, men også grammatiske fejl og fejl, hvor det forkerte ord findes i ordbogen, men bare er forkert i konteksten. Programmet skelner mellem over 40 forskellige grammatiske fejltyper og kan derfor tilbyde forklaringer og eksempler specifikt for de enkelte fejl.',
		TXT_GRAMMAR_COPYRIGHT: 'Copyright 2016-2019 GrammarSoft ApS.',
		TXT_GRAMMAR_HINT: 'Vil du have tjekket din markering eller hele teksten?',
		TXT_GRAMMAR_INTRO: 'Først skal du tjekke din tekst for stavning og grammatik.',
		TXT_GRAMMAR_SUPPORT: 'Du kan få hjælp via <a href="https://retmig.dk/" target="_blank">retmig.dk</a> og <a href="https://kommaer.dk/" target="_blank">kommaer.dk</a>.',
		TXT_MUST_LOGIN: 'Du skal logge ind for at bruge dette værktøj.',
		TXT_SUBSCRIBE: 'Opret abonnement via <a href="https://retmig.dk/" target="_blank">retmig.dk</a> og/eller <a href="https://kommaer.dk/" target="_blank">kommaer.dk</a>',
		TXT_WHAT_IS: 'RetMig hjælper dig med at fange og fjerne sproglige fejl i dine tekster, både almindelige stave- og slåfejl, men også grammatiske fejl og fejl, hvor det forkerte ord findes i ordbogen.\n\nKommaforslag hjælper dig med at sætte komma - dvs. tilføjer manglende kommaer og fjerner eller flytter forkerte kommaer.',
	},
	en: {
		ERR_NO_SELECTION: 'No selection found. You must select some text before that button will work.',
	},
};

function l10n_detectLanguage() {
	l10n.lang = navigator.language;
	if (!l10n.s.hasOwnProperty(l10n.lang)) {
		l10n.lang = l10n.lang.replace(/^([^-_]+).*$/, '$1');
	}
	if (!l10n.s.hasOwnProperty(l10n.lang)) {
		l10n.lang = 'da';
	}
	return l10n.lang;
}
