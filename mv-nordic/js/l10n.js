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

l10n.s = {
	da: {
		STR_DICTIONARY: 'Min ordbog',
		HTML_DICTIONARY: '<i>{STR_DICTIONARY}</i>',

		BTN_CLOSE: 'Luk',
		BTN_COMMA_AGAIN: 'Tjek kommatering igen',
		BTN_COMMA_GOTO: 'Tjek kommatering',
		BTN_COMMA_INSERT: 'Indsæt komma',
		BTN_COMMA_INSERT_STOP: 'Indsæt punktum',
		BTN_COMMA_REMOVE: 'Fjern komma',
		BTN_COMMA_SUPPORT: 'Få hjælp til Kommaforslag',
		BTN_DICT_ADD: 'Føj til {HTML_DICTIONARY}',
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
		BTN_GRAMMAR_SUPPORT: 'Få hjælp til Grammateket',
		BTN_IGNORE: 'Ignorer',
		BTN_LOGIN: 'Login til Grammateket',
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
		HDR_COMMA_LINKS: 'Inspirationsmateriale til Kommaforslag',
		HDR_DICTIONARY: 'Min ordbog',
		HDR_DISPLAY: 'Visning',
		HDR_EDIT: 'Ret selv',
		HDR_ERRORLIST: 'Alle markeringer',
		HDR_GRAMMAR: 'Grammateket',
		HDR_GRAMMAR_ABOUT: 'Om Grammateket',
		HDR_GRAMMAR_DONE: 'Din tekst er blevet tjekket, og der er ikke flere stave- eller grammatikforslag.',
		HDR_GRAMMAR_ETYPES: 'Fejltyper',
		HDR_LOGIN: 'Login',
		HDR_REPLACE_WITH: 'Erstat med …',
		HDR_SUBSCRIBE: 'Har du ikke Grammateket endnu?',
		HDR_SUPPORT_COPYRIGHT: 'Support &amp; Copyright',
		HDR_TTS: 'Oplæsning',
		HDR_WHAT_IS: 'Hvad er Grammateket?',
		HDR_YOUR_TEXT: 'Din tekst',
		LBL_COMMA_AFTER: 'Sæt flueben i boksen hvis du vil have tjekket dine kommaer bagefter.',
		LBL_OPT_COLOR: 'Fremhæv rettelser',
		LBL_OPT_IGNORE_MAJ: 'Ret ikke fejl ved store/små bogstaver',
		LBL_OPT_IGNORE_UABBR: 'Ret ikke fejl med ukendte forkortelser',
		LBL_OPT_IGNORE_UCOMP: 'Ret ikke fejl med særskrivning/sammensatte ord',
		LBL_OPT_IGNORE_UNAMES: 'Ret ikke fejl med ukendte navne',
		LBL_OPT_IGNORE_UNKNOWN: 'Ret ikke fejl med ukendte ord',
		LBL_OPT_IGNORE_UOTHER: 'Ret ikke fejl med andre ukendte ord',
		LBL_OPT_LEVEL_1: '<b>Niveau 1</b>: Du kan sætte tegn og har viden om punktum, spørgsmålstegn og udråbstegn.',
		LBL_OPT_LEVEL_2: '<b>Niveau 2</b>: Du kan anvende afsnit og sætte komma og har viden om sætnings- og tekststruktur.',
		LBL_OPT_LEVEL_3: '<b>Niveau 3</b>: Du kan fremstille tekster med korrekt grammatik, stavning, tegnsætning og layout.',
		LBL_OPT_MVNORDIC: 'Vis kun typer udvalgt af MV-Nordic',
		LBL_OPT_ONLYGREEN: 'Vis kun manglende kommaer',
		LBL_OPT_ONLY_CONFIDENT: 'Vis kun sikre fejl',
		LBL_OPT_SHOWOPTIONAL: 'Fremhæv valgfrie kommaer',
		LBL_OPT_TTS: 'Læs skærmteksterne op',
		LBL_OPT_USE_DICT: 'Brug {HTML_DICTIONARY}',
		MENU_OPTIONS: 'Indstillinger',
		MENU_START: 'Start Grammateket',
		MSO_INSTALLED_BODY: 'Grammateket er nu installeret. Gå til fanen Hjem og klik på Grammateket for at komme i gang.',
		MSO_INSTALLED_TITLE: 'Kom godt i gang med Grammateket & Kommaforslag!',
		MSO_LEARNMORE_URL: 'https://www.mv-nordic.com/',
		MSO_TOOLTIP: 'Klik for at åbne Grammateket & Kommaforslag',
		POP_LOADING: '… loading …',
		POP_WORKING: '… arbejder …',
		TAB_COMMA: 'Kommaforslag',
		TAB_COMMA_ABOUT: 'Om Kommaforslag',
		TAB_COMMA_GENERAL: 'Generelt',
		TAB_COMMA_LINKS: 'Inspiration til undervisning',
		TAB_DICTIONARY: 'Min ordbog',
		TAB_GRAMMAR: 'Grammateket',
		TAB_GRAMMAR_ABOUT: 'Om Grammateket',
		TAB_GRAMMAR_GENERAL: 'Generelt',
		TITLE_DICTIONARY: 'IntoWords Ordbog',
		TITLE_OPTIONS: 'Indstillinger',
		TITLE_SIDEBAR: 'Grammateket',
		TXT_COMMA_ABOUT: "Når du har fået tjekket din tekst for stavning og grammatik, kan du efterfølgende få tjekket din tekst for kommatering. Kommaforslag foreslår kommaer i din tekst eller retter fejl i tekstens kommatering.\n\nDu får en forklaring af reglerne bag de kommaer, programmet foreslår eller markerer som fejl - og kan på den måde lære at sætte komma, samtidig med at du får hjælp. Programmet følger reglerne for kommatering med startkomma - også kendt som grammatisk komma eller 'kryds og bolle'-komma.\n\nKommaforslag er integreret i Grammateket.",
		TXT_COMMA_COPYRIGHT: 'Copyright 2016-2019 GrammarSoft ApS. Alle rettigheder forbeholdt.\nDistribueret af MV-Nordic, Part of Vitec Software Group.',
		TXT_COMMA_HINT: 'Vil du have tjekket din markering eller hele teksten?',
		TXT_COMMA_INTRO: 'Du kan også vælge at springe direkte til Kommaforslag for at få tjekket dine kommaer.',
		TXT_COMMA_LINKS: 'Fra 4. klasse kan eleverne bruge forslagene til at reflektere over egen kommasætning. De tre niveauer i indstillingsmenuen leder frem mod videns- og færdighedsmål efter 6. klasse (niveau 1-2) og efter 9.-10. klasse (niveau 3).\n\nHar du brug for inspiration til brug af Kommaforslag i undervisningen, så <a href="https://www.mv-nordic.com/dk/support/kommaforslag/inspirationsmateriale-til-kommaforslag" target="_blank">følg linket</a>.',
		TXT_COMMA_SUPPORT: 'Besøg vores website på <a href="https://www.mv-nordic.com/" target="_blank">mv-nordic.com</a>. Kommaforslag <a href="https://www.mv-nordic.com/" target="_blank">hjælp</a>.',
		TXT_DICTIONARY_HINT: 'Her kan du tilføje, rette eller fjerne ord fra din ordbog.',
		TXT_GRAMMAR_ABOUT: 'Med Grammateket kan du tjekke din tekst for stavning, grammatik og efterfølgende for kommatering vha. Kommaforslag.\n\nDu får hjælp til:\n<ul>\n<li>Stavekontrol</li>\n<li>Sammensatte ord</li>\n<li>Nutids-r</li>\n<li>Kort og lang tillægsform</li>\n<li>Kommatering</li>\n</ul>\n\nGrammateket kan bruges når du arbejder med læse- og skriveværktøjerne IntoWords og CD-ORD. Grammateket giver også adgang til nemt opslag i IntoWords Ordbog (baseret på Den Danske Ordbog).',
		TXT_GRAMMAR_COPYRIGHT: 'Copyright 2016-2019 GrammarSoft ApS. Alle rettigheder forbeholdt.\nDistribueret af MV-Nordic, Part of Vitec Software Group.',
		TXT_GRAMMAR_HINT: 'Vil du have tjekket din markering eller hele teksten?',
		TXT_GRAMMAR_INTRO: 'Først skal du tjekke din tekst for stavning og grammatik.',
		TXT_GRAMMAR_SUPPORT: 'Besøg vores website på <a href="https://www.mv-nordic.com/" target="_blank">mv-nordic.com</a>. Grammateket <a href="https://www.mv-nordic.com/" target="_blank">hjælp</a>.',
		TXT_MUST_LOGIN: 'Du skal logge ind for at bruge dette værktøj.',
		TXT_SUBSCRIBE: '<a href="https://www.mv-nordic.com/" target="_blank">Kontakt MV-Nordic</a> for at prøve programmet gratis eller for information om abonnement.',
		TXT_WHAT_IS: 'Grammateket forbedrer din skriftlighed og støtter dig i din skriveproces ved at komme med forslag til rettelser, beskrivelser af fejlkategorier og mulighed for at slå ord op i ordbogen.\n\nNår du har skrevet en tekst, åbner du Grammateket for at få tjekket din stavning, grammatik og kommaer.\n\nDu får hjælp til stavning, sammensatte ord, nutids-r, kort og lang tillægsform og kommatering.',
	},
	nb: {
		STR_DICTIONARY: 'Min ordbok',
		HTML_DICTIONARY: '<i>{STR_DICTIONARY}</i>',
		BTN_COMMA_AGAIN: 'Sjekk komma',
		BTN_COMMA_GOTO: 'Sjekk komma',
		BTN_COMMA_INSERT: 'Sett inn komma',
		BTN_COMMA_INSERT_STOP: 'Sett inn punktum',
		BTN_COMMA_REMOVE: 'Fjern komma',
		BTN_COMMA_SUPPORT: 'Få hjelp med komma',
		BTN_DICT_ADD: 'Legg til {HTML_DICTIONARY}',
		BTN_DICT_EDIT: 'Rediger',
		BTN_EDIT: 'Rediger',
		BTN_EDIT_ALL: 'Rediger alle',
		BTN_EDIT_ONE: 'Rediger',
		BTN_EXEC_ALL: 'Alt',
		BTN_EXEC_CONTINUOUS: 'Løpende',
		BTN_EXEC_SELECTED: 'Markering',
		BTN_EXPL_LESS: 'Skjul',
		BTN_EXPL_MORE: 'Vis mer',
		BTN_GRAMMAR_AGAIN: 'Sjekk staving og punktum igjen',
		BTN_GRAMMAR_GOTO: 'Sjekk staving',
		BTN_GRAMMAR_INSERT: 'Sett inn',
		BTN_GRAMMAR_REMOVE: 'Fjern',
		BTN_GRAMMAR_REPLACE: 'Erstatt',
		BTN_GRAMMAR_SUPPORT: 'Få hjelp til Grammateket',
		BTN_IGNORE: 'Ignorer',
		BTN_LOGIN: 'Login til Grammateket',
		BTN_LOGOUT: 'Logg ut',
		BTN_NEXT: 'Neste',
		BTN_OPTIONS: 'Innstillinger',
		BTN_POP_IGNORE: 'Ignorer',
		BTN_POP_IGNOREALL: 'Ignorer alle',
		BTN_PREVIOUS: 'Forrige',
		BTN_RESTART: 'Start på nytt',
		BTN_VERSION: 'Versjon {VERSION}',
		BTN_WORD_ADD: 'Legg til ord',
		ERR_CADUCEUS_FAILED: 'Kunne ikke logge inn. Det kan være du ikke er på nett eller at du er bak en proxy eller firewall som blokkerer for tilgang',
		ERR_DICTIONARY_404: 'Kunne ikke finne %s i ordboken.',
		ERR_DICT_FAIL_ADD: 'Kunne ikke tilføye %s i stavekontrollen!',
		ERR_DICT_FAIL_DELETE: 'Kunne ikke slette ordet %s fra stavekontrollen!',
		ERR_DICT_FAIL_EDIT: 'Kunne ikke endre ordet %1$s til %2$s i stavekontrollen!',
		ERR_NO_AUDIO: 'Din browser/enhet støtter ikke HTML5 Audio',
		ERR_NO_SELECTION: 'Det var ingen markering. Du må merke noe tekst før den funksjonen virker.',
		ERR_NO_STORAGE: 'Browseren din støtter ikke HTML5 Local Storage, men dette programmet fungerer ikke uten Local Storage. Det kan vøre du har slått det av eller benytter privat vindu. Slå på Local Storage og prøv igjen.',
		ERR_POSTBACK: 'Det oppsto en serverfeil under sjekking av teksten. Prøv en gang til.',
		ERR_REPLACE_NOSELECT: 'Kunne ikke velge stedet i konteksten. Det kan være du eller en annen har endret i dokumentet etter at det ble sjekket.',
		ERR_SELECT_NOMATCH: 'Konteksten passet ikke. Det kan være du eller en annen har endret i dokumentet etter at det ble sjekket.',
		ERR_SELECT_NOTFOUND: 'Kunne ikke finne konteksten. Det kan være du eller en annen har endret i dokumentet etter at det ble sjekket.',
		HDR_COMMA: 'Kommaforslag',
		HDR_COMMA_DISPLAY: 'Kommavisning',
		HDR_COMMA_DONE: 'Teksten din har blitt sjekket og det er ikke flere forslag til komma.',
		HDR_COMMA_LEVEL: 'Ferdighetsnivå',
		HDR_COMMA_LINKS: 'Inspirasjonsmateriale til kommaforslag',
		HDR_DICTIONARY: 'Min ordbok',
		HDR_DISPLAY: 'Visning',
		HDR_EDIT: 'Rett selv',
		HDR_GRAMMAR: 'Grammateket',
		HDR_GRAMMAR_ABOUT: 'Om Grammateket',
		HDR_GRAMMAR_DONE: 'Teksten din har blitt sjekket og det er ikke flere stave- eller grammatikkforslag.',
		HDR_GRAMMAR_ETYPES: 'Feiltyper',
		HDR_LOGIN: 'Login',
		HDR_REPLACE_WITH: 'Erstatt med …',
		HDR_SUBSCRIBE: 'Har du ikke Grammateket enda?',
		HDR_TTS: 'Opplesning',
		HDR_WHAT_IS: 'Hva er Grammateket?',
		HDR_YOUR_TEXT: 'Din tekst',
		LBL_COMMA_AFTER: 'Sett hake i boksen hvis du vil ha sjekket komma.',
		LBL_OPT_COLOR: 'Fremhev rettelser',
		LBL_OPT_IGNORE_MAJ: 'Rett ikke feil med store/små bokstaver',
		LBL_OPT_IGNORE_UABBR: 'Rett ikke feil med ukjente forkortelser',
		LBL_OPT_IGNORE_UCOMP: 'Rett ikke feil med sammensatte ord',
		LBL_OPT_IGNORE_UNAMES: 'Rett ikke feil med ukjente navn',
		LBL_OPT_IGNORE_UNKNOWN: 'Rett ikke feil med ukjente ord',
		LBL_OPT_IGNORE_UOTHER: 'Rett ikke feil med andre ukjente ord',
		LBL_OPT_LEVEL_1: '<b>Nivå 1</b>: Du kan sette tegn og kan punktum, spærsmålstegn og utropstegn.',
		LBL_OPT_LEVEL_2: '<b>Nivå 2 </b>: Du kan lage avsnitt og sette komma og har kjennskal til setningsstruktur.',
		LBL_OPT_LEVEL_3: '<b> Nivå 3</b>: Du kan produsere tekster med riktig grammatikk, staving, tegnsetting og layout.',
		LBL_OPT_MVNORDIC: 'Vis kun typer utvalgt av MV-Nordic',
		LBL_OPT_ONLYGREEN: 'Vis kun manglende komma',
		LBL_OPT_ONLY_CONFIDENT: 'Vis kun sikre feil',
		LBL_OPT_SHOWOPTIONAL: 'Fremhev valgfrie komma',
		LBL_OPT_TTS: 'Les opp skjermtekstene',
		LBL_OPT_USE_DICT: 'Bruk {HTML_DICTIONARY}',
		MENU_OPTIONS: 'Innstillinger',
		MENU_START: 'Start Grammateket',
		MSO_INSTALLED_BODY: 'Grammateket er nå installert. Gå til fanen Hjem og klikk på Grammateket for å komme i gang.',
		MSO_INSTALLED_TITLE: 'Kom godt i gang med Grammateket!',
		MSO_LEARNMORE_URL: 'https://www.mv-nordic.com/',
		MSO_TOOLTIP: 'Klikk for å åpne Grammateket',
		POP_LOADING: '… loading …',
		POP_WORKING: '… arbeider …',
		TAB_COMMA: 'Kommaforslag',
		TAB_COMMA_ABOUT: 'Om Kommaforslag',
		TAB_COMMA_GENERAL: 'Generelt',
		TAB_COMMA_LINKS: 'Inspirasjon til undervisning',
		TAB_DICTIONARY: 'Min ordbok',
		TAB_GRAMMAR: 'Grammateket',
		TAB_GRAMMAR_ABOUT: 'Om Grammateket',
		TAB_GRAMMAR_GENERAL: 'Generelt',
		TITLE_DICTIONARY: 'IntoWords Ordbok',
		TITLE_OPTIONS: 'Innstillinger',
		TITLE_SIDEBAR: 'Grammateket',
		TXT_DICTIONARY_HINT: 'Her kan du legge til, rette eller fjerne ord fra ordboken din',
		TXT_GRAMMAR_HINT: 'Vil du sjekke det som er markert eller hele teksten?',
		TXT_GRAMMAR_INTRO: 'Først må du sjekke staving i teksten.',
		TXT_MUST_LOGIN: 'Du må logge inn for å bruke dette verktøyet.',
		TXT_SUBSCRIBE: '<a href="https://www.mv-nordic.com/" target="_blank">Kontakt MV-Nordic for å få mer informasjon om abonnement.',
		TXT_WHAT_IS: 'Grammateket gjør teksten din bedre og støtter deg i skriveprosessen ved å komme med forslag til rettelser. Når du har skrevet en tekst, åpner du Grammateket for å sjekke staving. Du får hjelp til staving, sammensatte ord og punktum.',
	},
	sv: {
		STR_DICTIONARY: 'Min ordbok',
		HTML_DICTIONARY: '<i>{STR_DICTIONARY}</i>',
		BTN_CLOSE: 'Stäng',
		BTN_DICT_ADD: 'Lägg till i {HTML_DICTIONARY}',
		BTN_DICT_EDIT: 'Redigera',
		BTN_EDIT: 'Redigera',
		BTN_EDIT_ALL: 'Redigera alla',
		BTN_EDIT_ONE: 'Redigera',
		BTN_EXEC_ALL: 'Hela',
		BTN_EXEC_CONTINUOUS: 'Löpande',
		BTN_EXEC_SELECTED: 'Markerad',
		BTN_EXPL_LESS: 'Dölj',
		BTN_EXPL_MORE: 'Visa mer',
		BTN_GRAMMAR_AGAIN: 'Gör om stavning och grammatik',
		BTN_GRAMMAR_GOTO: 'Kontrollera stavning och grammatik',
		BTN_GRAMMAR_INSERT: 'Infoga',
		BTN_GRAMMAR_REMOVE: 'Ta bort',
		BTN_GRAMMAR_REPLACE: 'Ersätt',
		BTN_GRAMMAR_SUPPORT: 'Få hjälp med Grammateket',
		BTN_IGNORE: 'Ignorera',
		BTN_LOGIN: 'Logga in till Grammateket',
		BTN_LOGOUT: 'Logga ut',
		BTN_NEXT: 'Nästa',
		BTN_OPTIONS: 'Inställningar',
		BTN_POP_IGNORE: 'Ignorera',
		BTN_POP_IGNOREALL: 'Ignorera alla',
		BTN_PREVIOUS: 'Föregående',
		BTN_SEEALL: 'Visa alla',
		BTN_SUPPORT: 'Hjälp',
		BTN_RESTART: 'Börja om på nytt',
		BTN_VERSION: 'Version {VERSION}',
		BTN_WORD_ADD: 'Lägg till ord',
		ERR_CADUCEUS_FAILED: 'Kunde inte upprätta en förbindelse till login. Det kan vara att du inte är på nätet eller du är bakom en firewall eller proxy som blockerar tillgång.',
		ERR_DICTIONARY_404: 'Kunde inte hitta %s i ordboken.',
		ERR_DICT_FAIL_ADD: 'Kunde inte lägga till ordet %s i stavningskontrollen.',
		ERR_DICT_FAIL_DELETE: 'Kunde inte ta bort ordet %s från stavningskontrollen.',
		ERR_DICT_FAIL_EDIT: 'Kunde inte ändra ordet %1$s till %2$s i stavningskontrollen.',
		ERR_NO_AUDIO: 'Din webbläsare eller enhet stödjer inte HTML5 Audio.',
		ERR_NO_SELECTION: 'Inget är markerat. Du måste markera något först.',
		ERR_NO_STORAGE: 'Din webbläsare stödjer inte HTML5 Local Storage och detta program kräver det. Det är möjligt att du har valt bort det eller att du använder ett privat fönster. Slå till Local Storage och försök på nytt.',
		ERR_POSTBACK: 'Det uppstod ett serverfel vid textkontrollen. Försök igen för att se om det hjälper.',
		ERR_REPLACE_NOSELECT: 'Kunde inte markera platsen i kontexten. Det kan hända att du eller någon annan har ändrat i dokumentet sedan det kontrollerades sist.',
		ERR_SELECT_NOMATCH: 'Vi fick inte träff på kontexten. Det kan hända att du eller någon annan har ändrat i dokumentet sedan det sist kontrollerades.',
		ERR_SELECT_NOTFOUND: 'Kunde inte hitta kontexten. Det kan hända att du eller någon annan har ändrat i dokumentet sedan det sist kontrollerades.',
		HDR_DICTIONARY: 'Min ordbok',
		HDR_DISPLAY: 'Visning',
		HDR_EDIT: 'Rätta själv',
		HDR_ERRORLIST: 'Alla markerade',
		HDR_GRAMMAR: 'Grammateket',
		HDR_GRAMMAR_ABOUT: 'Om Grammateket',
		HDR_GRAMMAR_DONE: 'Din text har kontrollerats och det finns inte fler stavnings- eller grammatikförslag.',
		HDR_GRAMMAR_ETYPES: 'Feltyper',
		HDR_LOGIN: 'Logga in',
		HDR_REPLACE_WITH: 'Ersätt med …',
		HDR_SUBSCRIBE: 'Har du inte Grammateket ännu?',
		HDR_SUPPORT_COPYRIGHT: 'Hjälp &amp; Copyright',
		HDR_TTS: 'Uppläsning',
		HDR_WHAT_IS: 'Vad är Grammateket?',
		HDR_YOUR_TEXT: 'Din text',
		LBL_OPT_COLOR: 'Markera rättelser',
		LBL_OPT_IGNORE_MAJ: 'Rätta inte fel i stora/små bokstäver',
		LBL_OPT_IGNORE_UABBR: 'Rätta inte fel med okända förkortningar',
		LBL_OPT_IGNORE_UCOMP: 'Rätta inte särskrivningsfel',
		LBL_OPT_IGNORE_UNAMES: 'Rätta inte fel med okända namn',
		LBL_OPT_IGNORE_UNKNOWN: 'Rätta inte fel med okända ord',
		LBL_OPT_IGNORE_UOTHER: 'Rätta inte fel med andra okända ord',
		LBL_OPT_ONLY_CONFIDENT: 'Visa enbart säkra fel',
		LBL_OPT_TTS: 'Läs texten högt',
		LBL_OPT_USE_DICT: 'Använd {HTML_DICTIONARY}',
		MENU_OPTIONS: 'Inställningar',
		MENU_START: 'Starta Grammateket',
		MSO_INSTALLED_BODY: 'Grammateket är nu installerat. Gå till fliken Hem och klicka på Grammateket för att komma i gång.',
		MSO_INSTALLED_TITLE: 'Kom gott i gång med Grammateket!',
		MSO_LEARNMORE_URL: 'https://www.mv-nordic.com/',
		POP_LOADING: '… laddar …',
		POP_WORKING: '… arbetar …',
		TAB_DICTIONARY: 'Min ordbok',
		TAB_GRAMMAR: 'Grammateket',
		TAB_GRAMMAR_ABOUT: 'Om Grammateket',
		TAB_GRAMMAR_GENERAL: 'Allmänt',
		TITLE_DICTIONARY: 'IntoWords Ordbok',
		TITLE_OPTIONS: 'Inställningar',
		TITLE_SIDEBAR: 'Grammateket',
		TXT_DICTIONARY_HINT: 'Här kan du lägga till, rätta eller ta bort ord från din ordbok.',
		TXT_GRAMMAR_ABOUT: 'Med Grammateket kan du kontrollera din text för stavning och vissa vanliga grammtiska fel.\n\nDu får hjälp med:\n<ul>\n<li>Rättstavning</li>\n<li>Sammansatta ord</li>\n<li>Korrekt användning av <b>vart</b></li>\n<li>Att skilja mellan <b>de</b> och <b>dem</b> istället för "dom"</li>\n</ul>\n\nGrammateket kan användas när du arbetar med läs- och skrivverktygen IntoWords och CD-ORD. Grammateket ger också tillgång till lätt uppslag i IntoWords Ordbok.',
		TXT_GRAMMAR_COPYRIGHT: 'Copyright 2019',
		TXT_GRAMMAR_HINT: 'Vill du kontrollera den markerade texten eller hela texten?',
		TXT_GRAMMAR_INTRO: 'Först ska du kontrollera din text för rättstavning och grammatik.',
		TXT_GRAMMAR_SUPPORT: 'Besök vår webbsajt <a href="https://www-mvnordic.com/" target=_blank">mv-nordic.com</a>. Grammateket <a href="https://www.mv-nordic.com/" target="_blank">hjälp</a>',
		TXT_MUST_LOGIN: 'Du måste logga in för att kunna använda detta verktyg.',
		TXT_SUBSCRIBE: '<a href="https://www.mv-nordic.com/" target="_blank">Kontakta MV-Nordic</a> för att testa programmet kostnadsfritt eller för information om abonnemang.',
		TXT_WHAT_IS: 'Grammateket förbättrar dina skrivkunskaper och stödjer dig i skrivprocessen genom att komma med förslag till rättelser, beskriva felkategorier och ge möjlighet att slå upp ord i ordboken.\n\nNär du har skrivit en text, öppnar du Grammateket för att kontrollera din stavning och vanliga grammatiska fel.\n\nDu får hjälp med stavning, sammansatta ord och korrekt använding av orden \'vart\' och \'dom\'.',
	},
	en: {
		ERR_NO_SELECTION: 'No selection found. You must select some text before that button will work.',
	},
};

l10n.s.no = l10n.s.nb;
l10n.s.nn = l10n.s.nb;

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
	if (g_access_hmac.hasOwnProperty('ai')) {
		let m = /\.([a-z]{2})\./.exec(g_access_hmac['ai'].join(','));
		if (m) {
			l = m[1];
			console.log('Set locale from AIs: '+l);
			if (l !== 'da') {
				// Reduce RQ size so that paragraphs are sent serially
				Defs.MAX_RQ_SIZE = 1;
			}
			activate_markings(l);
		}
	}
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
