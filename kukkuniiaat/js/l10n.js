/*!
 * Copyright 2016-2022 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
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

let l10n = {
	lang: 'da',
	s: {},
	};

l10n.s.dan = {
	BTN_CLOSE: "Luk",
	BTN_DICT_ADD: "Føj til ordbogen",
	BTN_DICT_EDIT: "Rediger",
	BTN_EDIT: "Rediger",
	BTN_EDIT_ALL: "Rediger alle",
	BTN_EDIT_ONE: "Rediger",
	BTN_EXEC_ALL: "Alt",
	BTN_EXEC_ALL_NS: "Tjek alt",
	BTN_EXEC_CONTINUOUS: "Løbende",
	BTN_EXEC_SELECTED: "Markering",
	BTN_EXPL_LESS: "Skjul",
	BTN_EXPL_MORE: "Vis mere",
	BTN_GRAMMAR_AGAIN: "Tjek stavning igen",
	BTN_GRAMMAR_GOTO: "Tjek stavning",
	BTN_GRAMMAR_INSERT: "Indsæt",
	BTN_GRAMMAR_REMOVE: "Fjern",
	BTN_GRAMMAR_REPLACE: "Erstat",
	BTN_GRAMMAR_SUPPORT: "Få hjælp til {PRODUCT_NAME}",
	BTN_IGNORE: "Ignorer",
	BTN_LANGUAGES: "Sprog",
	BTN_LOGIN: "Login til {PRODUCT_NAME}",
	BTN_LOGOUT: "Log ud",
	BTN_NEXT: "Næste",
	BTN_OPTIONS: "Indstillinger",
	BTN_POP_IGNORE: "Ignorer",
	BTN_POP_IGNOREALL: "Ignorer alle",
	BTN_PREFACE_CONTINUE: "Start {PRODUCT_NAME}",
	BTN_PREVIOUS: "Forrige",
	BTN_RESTART: "Start på ny",
	BTN_SEEALL: "Se alle",
	BTN_SUPPORT: "Support",
	BTN_VERSION: "Version {VERSION}",
	BTN_WORD_ADD: "Tilføj ord",
	ERR_CADUCEUS_FAILED: "Kunne ikke oprette en kanal til login. Det kan være du ikke er online eller er bag en proxy eller firewall der blokerer for adgang.",
	ERR_DICT_FAIL_ADD: "Kunne ikke tilføje ordet %s til stavekontrollen!",
	ERR_DICT_FAIL_DELETE: "Kunne ikke slette ordet %s fra stavekontrollen!",
	ERR_DICT_FAIL_EDIT: "Kunne ikke ændre ordet %1$s til %2$s i stavekontrollen!",
	ERR_NO_AUDIO: "Din browser/enhed understøtter ikke HTML5 Audio.",
	ERR_NO_SELECTION: "Der var ingen markering. Du skal markere noget tekst før den funktion virker.",
	ERR_NO_STORAGE: "<p>Din browser understøtter ikke HTML5 Local Storage, som dette program behøver. Det kan være du har slået det fra, har blokeret for tredjepartscookies, eller benytter privat vindue. Slå Local Storage til og prøv igen.</p><p>Alternativt så kan du tilføje disse domæner til din browsers liste af sikre domæner:</p>{TRUSTED_DOMAINS}",
	ERR_POSTBACK: "Der opstod en serverfejl under tjekning af teksten. Prøv evt. igen.",
	ERR_REPLACE_NOSELECT: "Kunne ikke vælge stedet i konteksten for <q><i>{SNIPPET}</i></q>. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.",
	ERR_SELECT_NOMATCH: "Konteksten matchede ikke for <q><i>{SNIPPET}</i></q>. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.",
	ERR_SELECT_NOTFOUND: "Kunne ikke finde konteksten for <q><i>{SNIPPET}</i></q>. Det kan være du eller en anden har ændret i dokumentet siden tjekket blev kørt.",
	HDR_DICTIONARY: "Brugerordbog",
	HDR_DISPLAY: "Visning",
	HDR_EDIT: "Ret selv",
	HDR_ERRORLIST: "Alle markeringer",
	HDR_GRAMMAR: "{PRODUCT_NAME}",
	HDR_GRAMMAR_DONE: "Din tekst er blevet tjekket, og der er ikke flere stave- eller grammatikforslag.",
	HDR_GRAMMAR_ETYPES: "Fejltyper",
	HDR_LANGUAGES: "Vælg brugerfladesprog",
	HDR_LOGIN: "Login",
	HDR_REPLACE_WITH: "Erstat med …",
	HDR_SUPPORT_COPYRIGHT: "Support &amp; Copyright",
	HDR_TTS: "Oplæsning",
	HDR_WHAT_IS: "Hvad er {PRODUCT_NAME}?",
	HDR_YOUR_TEXT: "Din tekst",
	LBL_OPT_COLOR: "Fremhæv rettelser",
	LBL_OPT_IGNORE_MAJ: "Ret ikke fejl ved store/små bogstaver",
	LBL_OPT_IGNORE_UABBR: "Ret ikke fejl med ukendte forkortelser",
	LBL_OPT_IGNORE_UCOMP: "Ret ikke fejl med særskrivning/sammensatte ord",
	LBL_OPT_IGNORE_UNAMES: "Ret ikke fejl med ukendte navne",
	LBL_OPT_IGNORE_UNKNOWN: "Ret ikke fejl med ukendte ord",
	LBL_OPT_IGNORE_UOTHER: "Ret ikke fejl med andre ukendte ord",
	LBL_OPT_ONLY_CONFIDENT: "Vis kun sikre fejl",
	LBL_OPT_TTS: "Læs skærmteksterne op",
	LBL_OPT_USE_DICT: "Anvend brugerordbogen",
	MENU_START: "Start {PRODUCT_NAME}",
	POP_LOADING: "… loading …",
	POP_WORKING: "… arbejder …",
	TAB_DICTIONARY: "Brugerordbog",
	TAB_GRAMMAR: "{PRODUCT_NAME}",
	TAB_GRAMMAR_GENERAL: "Generelt",
	TITLE_OPTIONS: "Indstillinger",
	TITLE_SIDEBAR: "{PRODUCT_NAME}",
	TXT_DICTIONARY_HINT: "Her kan du tilføje, rette eller fjerne ord fra din ordbog.",
	TXT_GRAMMAR_ABOUT: "{PRODUCT_NAME} hjælper dig med at fange og fjerne stave- og slåfejl i dine tekster.",
	TXT_GRAMMAR_COPYRIGHT: "Copyright 2019-2022 Oqaasileriffik.",
	TXT_GRAMMAR_HINT: "Vil du have tjekket din markering eller hele teksten?",
	TXT_GRAMMAR_HINT_NS: "I Outlook kan man kun tjekke hele teksten.",
	TXT_GRAMMAR_INTRO: "Først skal du tjekke din tekst for stavning.",
	TXT_GRAMMAR_SUPPORT: "Du kan få hjælp via <a href=\"https://kukkuniiaat.gl\" target=\"_blank\">Oqaasileriffik</a>.",
	TXT_WHAT_IS: "{PRODUCT_NAME} er en stavekontrol for grønlandsk (kalaallisut), der hjælper dig med at fange og fjerne stave- og slåfejl i dine tekster.<br><br>{PRODUCT_NAME} er udviklet af <a href=\"https://oqaasileriffik.gl/\" target=\"_blank\">Grønlands Sprogsekretariat (Oqaasileriffik)</a>.",
};

l10n.s.eng = {
	BTN_CLOSE: "Close",
	BTN_DICT_ADD: "Add to dictionary",
	BTN_DICT_EDIT: "Edit",
	BTN_EDIT: "Edit",
	BTN_EDIT_ALL: "Edit all",
	BTN_EDIT_ONE: "Edit",
	BTN_EXEC_ALL: "Everything",
	BTN_EXEC_ALL_NS: "Check everything",
	BTN_EXEC_CONTINUOUS: "Continuous",
	BTN_EXEC_SELECTED: "Selection",
	BTN_EXPL_LESS: "Hide",
	BTN_EXPL_MORE: "Show more",
	BTN_GRAMMAR_AGAIN: "Check spelling again",
	BTN_GRAMMAR_GOTO: "Check spelling",
	BTN_GRAMMAR_INSERT: "Insert",
	BTN_GRAMMAR_REMOVE: "Remove",
	BTN_GRAMMAR_REPLACE: "Replace",
	BTN_GRAMMAR_SUPPORT: "Get help with {PRODUCT_NAME}",
	BTN_IGNORE: "Ignore",
	BTN_LANGUAGES: "Language",
	BTN_LOGIN: "{PRODUCT_NAME} log in",
	BTN_LOGOUT: "Log out",
	BTN_NEXT: "Next",
	BTN_OPTIONS: "Options",
	BTN_POP_IGNORE: "Ignore",
	BTN_POP_IGNOREALL: "Ignore all",
	BTN_PREFACE_CONTINUE: "Start {PRODUCT_NAME}",
	BTN_PREVIOUS: "Previous",
	BTN_RESTART: "Start over",
	BTN_SEEALL: "See all",
	BTN_SUPPORT: "Support",
	BTN_VERSION: "Version {VERSION}",
	BTN_WORD_ADD: "Add word",
	ERR_CADUCEUS_FAILED: "Could not create a channel for log in. This may be because you're not online, or you're behind a proxy or firewall that blocks access.",
	ERR_DICT_FAIL_ADD: "Could not add %s to the spell checker!",
	ERR_DICT_FAIL_DELETE: "Could not remove %s from the spell checker!",
	ERR_DICT_FAIL_EDIT: "Could not change %1$s to %2$s in the spell checker!",
	ERR_NO_AUDIO: "Your browser does not support HTML5 Audio.",
	ERR_NO_SELECTION: "There was no selection. You need to select text before this functionality works.",
	ERR_NO_STORAGE: "<p>Your browser does not support HTML5 Local Storage, which this program needs. You may have disabled this feature, blocked 3rd party cookies, or are using a private browsing window. Enable Local Storage and try again.</p><p>Alternatively, add these domains to your browser's list of trusted domains:</p>{TRUSTED_DOMAINS}",
	ERR_POSTBACK: "A server-side error happened while checking the text. Please try again.",
	ERR_REPLACE_NOSELECT: "Could not make the selection in the context for <q><i>{SNIPPET}</i></q>. It may be that you or a collaborator changed the document since the check was run.",
	ERR_SELECT_NOMATCH: "The context didn't match for <q><i>{SNIPPET}</i></q>. It may be that you or a collaborator changed the document since the check was run.",
	ERR_SELECT_NOTFOUND: "Could not find the context for <q><i>{SNIPPET}</i></q>. It may be that you or a collaborator changed the document since the check was run.",
	HDR_DICTIONARY: "User dictionary",
	HDR_DISPLAY: "Display options",
	HDR_EDIT: "Make your own",
	HDR_ERRORLIST: "All errors / markings",
	HDR_GRAMMAR: "{PRODUCT_NAME}",
	HDR_GRAMMAR_ETYPES: "Error types",
	HDR_LANGUAGES: "Select interface language",
	HDR_LOGIN: "Log in",
	HDR_REPLACE_WITH: "Replace with …",
	HDR_SUPPORT_COPYRIGHT: "Support &amp; Copyright",
	HDR_TTS: "Text to speech",
	HDR_WHAT_IS: "What is {PRODUCT_NAME}?",
	HDR_YOUR_TEXT: "Your text",
	LBL_OPT_USE_DICT: "Use the user dictionary",
	MENU_START: "Start {PRODUCT_NAME}",
	POP_LOADING: "Click to open {PRODUCT_NAME}",
	POP_WORKING: "… loading …",
	TAB_DICTIONARY: "… working …",
	TAB_GRAMMAR: "{PRODUCT_NAME}",
	TAB_GRAMMAR_GENERAL: "General",
	TITLE_OPTIONS: "Options",
	TITLE_SIDEBAR: "{PRODUCT_NAME}",
	TXT_DICTIONARY_HINT: "From here you can add, edit, or remove words from your dictionary.",
	TXT_GRAMMAR_COPYRIGHT: "Copyright 2019-2022 Oqaasileriffik.",
	TXT_GRAMMAR_HINT: "Do you want the selection or the whole document checked?",
	TXT_GRAMMAR_HINT_NS: "In Outlook you can only check the whole text.",
	TXT_GRAMMAR_INTRO: "First you should check the document's spelling.",
};

l10n.s.kal = {
	BTN_CLOSE: "Matuguk",
	BTN_DICT_ADD: "Oqaaseq ilannguguk",
	BTN_DICT_EDIT: "Aaqqissuuguk",
	BTN_EDIT: "Allanngortiguk",
	BTN_EDIT_ALL: "Tamaasa allanngortitikkit",
	BTN_EDIT_ONE: "Aaqqissuuguk",
	BTN_EXEC_ALL: "Tamakkiisumik kukkunersiuineq",
	BTN_EXEC_CONTINUOUS: "Ingerlaavartumik kukkunersiuineq",
	BTN_EXEC_SELECTED: "Nalunaakkanik kukkunersiuineq",
	BTN_EXPL_LESS: "Tarrisiguk",
	BTN_EXPL_MORE: "Annertusiguk",
	BTN_GRAMMAR_AGAIN: "Allaqqanera misissoqqiguk",
	BTN_GRAMMAR_GOTO: "Allaqqanera misissoruk",
	BTN_GRAMMAR_INSERT: "Ikkuguk",
	BTN_GRAMMAR_REMOVE: "Peeruk",
	BTN_GRAMMAR_REPLACE: "Taarseruk",
	BTN_GRAMMAR_SUPPORT: "Ikiortigit",
	BTN_IGNORE: "Soqutiginngiinnaruk",
	BTN_LANGUAGES: "Oqaatsit",
	BTN_LOGIN: "Iserit",
	BTN_LOGOUT: "Anigit",
	BTN_NEXT: "Tullia",
	BTN_OPTIONS: "Toqqagassat",
	BTN_POP_IGNORE: "Soqutiginngiinnaruk",
	BTN_POP_IGNOREALL: "Assinganik allassimasut soqutiginngiinnakkit",
	BTN_PREFACE_CONTINUE: "{PRODUCT_NAME} aallartiguk",
	BTN_PREVIOUS: "Siulia",
	BTN_RESTART: "Nutaamik aallartigit",
	BTN_SEEALL: "Tamaasa takukkit",
	BTN_SUPPORT: "Ikiorneqarit",
	BTN_VERSION: "Versioni",
	BTN_WORD_ADD: "Oqaatsimik ikkussigit",
	ERR_CADUCEUS_FAILED: "Isertaammut pisinneqarsinnaanngilatit. Immaqa onlineqqanngilatit imalt. aqqutaani arlaatigut mattunneqarsimavutit.",
	ERR_DICT_FAIL_ADD: "Ikkunneqarsinnaanngilaq.",
	ERR_DICT_FAIL_DELETE: "Peerneqarsinnaanngilaq.",
	ERR_DICT_FAIL_EDIT: "Allanngortinneqarsinnaanngilaq.",
	ERR_NO_AUDIO: "HTML5 Audio qarasaasianni periarfissaanngilaq.",
	ERR_NO_SELECTION: "Nalunaagaqarsimanngilatit. Ingerlaqqinniaruit oqaatsimik nalunaagaqaqqaarit.",
	ERR_NO_STORAGE: "<p>Programmip pisariaqartitaanik browserit HTML5 Local Storeqanngilaq. Imaassinnaavoq atortussaajunnaartissimagit, tredjepartscookiesilluunniit akuerineqartussaajunnaartissimagitit igalaasarluunniit atukkat privatiutikkit. Local Storage atorneqartussanngoreriarlugu misileqqiguk.</p><p>Aamma domænit uku browserinnit akuerineqartussanngortissinnaavatit:</p>{TRUSTED_DOMAINS}",
	ERR_POSTBACK: "Serverimi ajutoortoqarpoq. Misileeqqigit.",
	ERR_REPLACE_NOSELECT: "Suna pineqarnersoq matumani <q><i>{SNIPPET}</i></q> paasineqarsinnaanngilaq. Immaqa allatami allanngortoqarsimavoq.",
	ERR_SELECT_NOMATCH: "Allassimasut manna <q><i>{SNIPPET}</i></q> assiginngilaat. Immaqa allatami allanngortoqarsimavoq.",
	ERR_SELECT_NOTFOUND: "Allassimasut uku <q><i>{SNIPPET}</i></q> nassaarineqanngillat. Immaqa allatami allanngortoqarsimavoq.",
	HDR_DICTIONARY: "Ordbogi",
	HDR_DISPLAY: "Takutiguk",
	HDR_EDIT: "Aaqqiguk",
	HDR_ERRORLIST: "Kukkunilittut nalunaarneqartut tamakkerlugit",
	HDR_GRAMMAR: "{PRODUCT_NAME}",
	HDR_GRAMMAR_DONE: "Allatat misissorneqareerpoq, allanik naqqiissutissaqartoqanngilaq.",
	HDR_GRAMMAR_ETYPES: "Kukkunerit suussusaat",
	HDR_LANGUAGES: "Oqaatsit atorneqartussat toqqakkit",
	HDR_LOGIN: "Isertaat",
	HDR_REPLACE_WITH: "Uuminnga taarseruk",
	HDR_SUPPORT_COPYRIGHT: "Ikiortinneq &amp; Piginneqqaartussaatitaaneq",
	HDR_TTS: "Atuffatsinneq",
	HDR_WHAT_IS: "{PRODUCT_NAME} suua?",
	HDR_YOUR_TEXT: "Allaffissaq",
	LBL_OPT_COLOR: "Naqqissukkat ersarissisikkit",
	LBL_OPT_IGNORE_MAJ: "Naqinnerit mikisut/angisuut naqqissornagit",
	LBL_OPT_IGNORE_UABBR: "Naalisaanerit naqqissornagit",
	LBL_OPT_IGNORE_UCOMP: "Oqaatsit kattutat naqqissornagit",
	LBL_OPT_IGNORE_UNAMES: "Aqqit takornartat naqqissornagit",
	LBL_OPT_IGNORE_UNKNOWN: "Oqaatsit takornartat naqqissornagit",
	LBL_OPT_IGNORE_UOTHER: "Oqaatsit ilisarsaanngitsut naqqissornagit",
	LBL_OPT_ONLY_CONFIDENT: "Kukkunerit qulakkiikkat taamaallaat takutikkit",
	LBL_OPT_TTS: "Allaqqasut atuakkit",
	LBL_OPT_USE_DICT: "Ordbogi atoruk",
	MENU_START: "{PRODUCT_NAME} aallartiguk",
	POP_LOADING: "… aallerpoq …",
	POP_WORKING: "… sulivoq …",
	TAB_DICTIONARY: "Ordbogi",
	TAB_GRAMMAR: "{PRODUCT_NAME}",
	TAB_GRAMMAR_GENERAL: "Tamalaat",
	TITLE_OPTIONS: "Toqqagassat",
	TITLE_SIDEBAR: "{PRODUCT_NAME}",
	TXT_DICTIONARY_HINT: "Uani oqaatsimik ilanngussisinnaavutit, naqqiillutit peersillutilluunniit.",
	TXT_GRAMMAR_ABOUT: "{PRODUCT_NAME}ip naqinnerliukkat nassaaralugillu peertassavai.",
	TXT_GRAMMAR_COPYRIGHT: "Copyright 2019-2022 Oqaasileriffik.",
	TXT_GRAMMAR_HINT: "Toqqakkat taamaallaat misissortikkusuppiuk imalt. allataq tamaat?",
	TXT_GRAMMAR_SUPPORT: "Una aqqutigalugu ikiorneqarsinnaavutit <a href=\"https://kukkuniiaat.gl/\" target=\"_blank\">Oqaasileriffik</a>.",
	TXT_WHAT_IS: "{PRODUCT_NAME} kalaallisut allagaasut naqinnerliukkat kukkusumilluunniit allanneqarsimasut nassaarisarpai peertarlugillu. {PRODUCT_NAME} Oqaasileriffimmit ineriartortinneqarpoq.",
};

l10n.s.da = l10n.s.dan;
l10n.s.kl = l10n.s.kal;
l10n.s.en = l10n.s.eng;
