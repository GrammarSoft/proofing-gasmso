/*!
 * Copyright 2016-2021 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Eckhard Bick <eckhard.bick@gmail.com>
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * All rights reserved.
 * The explanatory texts in this file are NOT released under an open source license.
 */
'use strict';

let types_red = {};

let types_yellow = {};

let types_info = {};

let types_comp_right = new RegExp('%comp-');
let types_to_upper = new RegExp('%upper( |$)');
let types_to_lower = new RegExp('%lower( |$)');
let rx_insertable = /(@insert|%ko|%k)( |-|$)/;
let rx_removable = /(@nil|%nok|%ok|%nko)( |-|$)/;

let marking_types = {};
let marking_types_comma = [];
let marking_types_grammar = [];

let types_mv = {};

let ctypes = {
	dan: {
		"%k-appo": [
			"%k-appo",
			"Apposition (navnetillæg), start",
			"En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, <b>Peter</b>, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein <b>Land</b> mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten <b>Söhne</b> der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nNormalt står appositionen i samme kasus (fald) som det ord den relaterer til:<br>\n<br>\n<i>Nach der Freilandausstellung, der größten <b>Veranstaltung</b> ihrer Art auf deutschem Boden, kaufte die Stadt zwei der beliebtesten Kunstwerke.</i><br>\n<br>\nAlt efter kontekst kan forskellen mellem opremsningskomma og appositionskomma gøre en betydningsforskel:<br>\n<br>\n<i>Anne, meine</i> <b><i>Schwester</i></b><i>, und ich</i> (apposition: Anne = søster, 2 personer)<br>\n<br>\n<i>Anne, meine Schwester und ich</i> (opremsning: Anne + søster, 3 personer)<br>\n<br>\nOgså efterstillede fornavne får appositionskomma:<br>\n<br>\n<i>Gerber, Heinrich, und Kleinschmidt, Johannes, haben das Examen mit Auszeichnung bestanden.</i><br>\n<br>\nTillæggene &quot;geb.&quot; (født), &quot;verh.&quot; (gift) und &quot;verw.&quot; (enke) kan få et valgfrit appositionskomma.<br>\n<br>\n<i>Maria Schmidt(,) geb. Krüger</i><br>\n<br>\nDer står appositionskomma ved stedtillæg, der lægger sig til en anden stedangivelse eller en hændelse:<br>\n<br>\n<i>In der Nikolauskirche, Ludwigshafen</i><br>\n<br>\n<i>Die 19. Bundesgartenschau, Frankfurt Niddatal</i><br>\n<br>\n<i>Memphis, Tennessee</i><br>\n<br>\nVed adresser er slut-kommaet valgfrit, alt efter om adressen forstås som apposition (med slutkomma) eller som opremsning (uden slutkomma):<br>\n<br>\n<i>Frau Mahler aus Oldenburg, Goethestraße 32(,) hat einen Leserbrief geschrieben.</i><br>\n<br>\nLiteraturangivelser i flere led behandles kommamæssigt på samme måde som adresser, med et komma imellem de enkelt led. Også her er slutkommaet valgfrit:<br>\n<br>\n<i>Die Rezension ist in &quot;Spektrum der Wissenschaft&quot;, 12/2019, S. 72(,) erschienen.</i>",
			"D109<br>\n<br>\nD115<br>\n<br>\nD116<br>\n<br>\nE61<br>\n<br>\nE64<br>\n<br>\nE70ff<br>\n<br>\nE87<br>\n<br>\nE92"
		],
		"%ok-appo": [
			"%ok-appo",
			"Apposition (navnetillæg), start",
			"En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, <b>Peter</b>, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein <b>Land</b> mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten <b>Söhne</b> der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nNormalt står appositionen i samme kasus (fald) som det ord den relaterer til:<br>\n<br>\n<i>Nach der Freilandausstellung, der größten <b>Veranstaltung</b> ihrer Art auf deutschem Boden, kaufte die Stadt zwei der beliebtesten Kunstwerke.</i><br>\n<br>\nAlt efter kontekst kan forskellen mellem opremsningskomma og appositionskomma gøre en betydningsforskel:<br>\n<br>\n<i>Anne, meine</i> <b><i>Schwester</i></b><i>, und ich</i> (apposition: Anne = søster, 2 personer)<br>\n<br>\n<i>Anne, meine Schwester und ich</i> (opremsning: Anne + søster, 3 personer)<br>\n<br>\nOgså efterstillede fornavne får appositionskomma:<br>\n<br>\n<i>Gerber, Heinrich, und Kleinschmidt, Johannes, haben das Examen mit Auszeichnung bestanden.</i><br>\n<br>\nTillæggene &quot;geb.&quot; (født), &quot;verh.&quot; (gift) und &quot;verw.&quot; (enke) kan få et valgfrit appositionskomma.<br>\n<br>\n<i>Maria Schmidt(,) geb. Krüger</i><br>\n<br>\nDer står appositionskomma ved stedtillæg, der lægger sig til en anden stedangivelse eller en hændelse:<br>\n<br>\n<i>In der Nikolauskirche, Ludwigshafen</i><br>\n<br>\n<i>Die 19. Bundesgartenschau, Frankfurt Niddatal</i><br>\n<br>\n<i>Memphis, Tennessee</i><br>\n<br>\nVed adresser er slut-kommaet valgfrit, alt efter om adressen forstås som apposition (med slutkomma) eller som opremsning (uden slutkomma):<br>\n<br>\n<i>Frau Mahler aus Oldenburg, Goethestraße 32(,) hat einen Leserbrief geschrieben.</i><br>\n<br>\nLiteraturangivelser i flere led behandles kommamæssigt på samme måde som adresser, med et komma imellem de enkelt led. Også her er slutkommaet valgfrit:<br>\n<br>\n<i>Die Rezension ist in &quot;Spektrum der Wissenschaft&quot;, 12/2019, S. 72(,) erschienen.</i>",
			"D109<br>\n<br>\nD115<br>\n<br>\nD116<br>\n<br>\nE61<br>\n<br>\nE64<br>\n<br>\nE70ff<br>\n<br>\nE87<br>\n<br>\nE92"
		],
		"%k-appo-end": [
			"%k-appo-end",
			"Apposition (navnetillæg), slut",
			"En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, Peter, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein Land mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten Söhne der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nAppositionskommaet er valgfrit ved navne med en foranstillet stillings- eller erhvervsbetegnelse, hvis navnet kan fjernes uden at skabe flertydighed:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nUndtagelse: Hvis der står en bestem artikel <i>(der, die, den, dem, des)</i> foran stillings-/erhvervsbetegnelsen, er kommaet alligevel påkrævet.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nDer må derimod ikke bruges komma, hvis personnavnetillægget er en nødvendig del af sætningen, dvs. hvis det ellers ikke står klart hvem der tales om.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nBruger man alligevel komma, betyder det, at der (i konteksten) kun findes én svejser.",
			"D113<br>\n<br>\nD115<br>\n<br>\nD116"
		],
		"%ok-appo-end": [
			"%ok-appo-end",
			"Apposition (navnetillæg), slut",
			"En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, Peter, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein Land mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten Söhne der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nAppositionskommaet er valgfrit ved navne med en foranstillet stillings- eller erhvervsbetegnelse, hvis navnet kan fjernes uden at skabe flertydighed:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nUndtagelse: Hvis der står en bestem artikel <i>(der, die, den, dem, des)</i> foran stillings-/erhvervsbetegnelsen, er kommaet alligevel påkrævet.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nDer må derimod ikke bruges komma, hvis personnavnetillægget er en nødvendig del af sætningen, dvs. hvis det ellers ikke står klart hvem der tales om.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nBruger man alligevel komma, betyder det, at der (i konteksten) kun findes én svejser.",
			"D113<br>\n<br>\nD115<br>\n<br>\nD116"
		],
		"%ko-appo": [
			"%ko-appo",
			"Apposition, valgfrit komma",
			"Ved personnavnetillæg efter stillings- eller erhvervsbetegnelser er appositionskommaet valgfrit, hvis navnet kan udelades uden at skabe flertydighed i konteksten.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nUndtagelse: Hvis der står en bestem artikel <i>(der, die, den, dem, des)</i> foran stillings-/erhvervsbetegnelsen, er kommaet alligevel påkrævet.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nDer må derimod ikke bruges komma, hvis personnavnetillægget er en nødvendig del af sætningen, dvs. hvis det ellers ikke står klart hvem der tales om.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nBruger man alligevel komma, betyder det, at der (i konteksten) kun findes én svejser.",
			""
		],
		"%ko-appo-end": [
			"%ko-appo-end",
			"Apposition, valgfrit komma",
			"Ved personnavnetillæg efter stillings- eller erhvervsbetegnelser er appositionskommaet valgfrit, hvis navnet kan udelades uden at skabe flertydighed i konteksten.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nUndtagelse: Hvis der står en bestem artikel <i>(der, die, den, dem, des)</i> foran stillings-/erhvervsbetegnelsen, er kommaet alligevel påkrævet.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nDer må derimod ikke bruges komma, hvis personnavnetillægget er en nødvendig del af sætningen, dvs. hvis det ellers ikke står klart hvem der tales om.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nBruger man alligevel komma, betyder det, at der (i konteksten) kun findes én svejser.",
			""
		],
		"%nko-appo": [
			"%nko-appo",
			"Apposition, valgfrit komma",
			"Ved personnavnetillæg efter stillings- eller erhvervsbetegnelser er appositionskommaet valgfrit, hvis navnet kan udelades uden at skabe flertydighed i konteksten.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nUndtagelse: Hvis der står en bestem artikel <i>(der, die, den, dem, des)</i> foran stillings-/erhvervsbetegnelsen, er kommaet alligevel påkrævet.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nDer må derimod ikke bruges komma, hvis personnavnetillægget er en nødvendig del af sætningen, dvs. hvis det ellers ikke står klart hvem der tales om.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nBruger man alligevel komma, betyder det, at der (i konteksten) kun findes én svejser.",
			""
		],
		"%nko-appo-end": [
			"%nko-appo-end",
			"Apposition, valgfrit komma",
			"Ved personnavnetillæg efter stillings- eller erhvervsbetegnelser er appositionskommaet valgfrit, hvis navnet kan udelades uden at skabe flertydighed i konteksten.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nUndtagelse: Hvis der står en bestem artikel <i>(der, die, den, dem, des)</i> foran stillings-/erhvervsbetegnelsen, er kommaet alligevel påkrævet.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nDer må derimod ikke bruges komma, hvis personnavnetillægget er en nødvendig del af sætningen, dvs. hvis det ellers ikke står klart hvem der tales om.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nBruger man alligevel komma, betyder det, at der (i konteksten) kun findes én svejser.",
			""
		],
		"%nok-appo": [
			"%nok-appo",
			"Forkert appositionskomma, start",
			"Der er ikke appositionskomma efter foranstillede titler eller stillings-/erhvervsbetegnelser der bruges som titel.<br>\n<br>\n<i>Dekan[,] Professor Dr. Markus Moorbacher</i><br>\n<br>\n<i>Seine Heiligkeit[,] Papst Pius sprach am Vortag.</i><br>\n<br>\nDer bruges heller ikke appositionskomma mellem et navn og en attributiv (beskrivende) navnetilføjelse, såsom adjektiver eller et øgenavn:<br>\n<br>\n<i>Kaiser Karl[,] der Große</i><br>\n<br>\n<i>Mehmet[,] der Eroberer</i><br>\n<br>\n<i>Gustav Schneider[,] junior</i><br>\n<br>\n<i>Du[,] Glücklicher hast schon wieder gewonnen.</i><br>\n<br>\nAppositioner (navnetillæg), der ikke kan udelades eller sættes i parentes, må ikke få komma.<br>\n<br>\n<i>Tokyo ist eine fiktive Figur in der Netflix-Serie[,] Money Heist.</i><br>\n<br>\n<i>Die Stadt[,] Rom[,] wurde auf sieben Hügeln erbaut.</i><br>\n<br>\nMen: <i>Der damalige Präsident</i><i>(</i><i>,</i><i>)</i><i> Barak Obama</i><i>(</i><i>,</i><i>)</i><i> engagierte sich für eine Gesundheitsreform.</i><i></i> (personen er entydig selv uden apposition)<br>\n<br>\nVed personnavnetillæg er det ofte kun konteksten, der afgør, om navnet er nødvendigt eller ej. Uden kontekst og uden tidligere nævnelse burde der derfor <i>ikke</i> stå komma. I modsat fald er kommaet valgfrit. Bruges det, betyder det, at der (i konteksten) kun findes én person af den pågældende kategori.<br>\n<br>\n<i>Der Schweißer,? Anton Arensberg,? hatte sieben Söhne. (je nach Kontext)</i><br>\n<br>\nI modsætning til normale literaturhenvisninger står der ikke komma mellem leddene i paragrafhenvisninger (fx i love og vedtægter):<br>\n<br>\n<i>Diese Möglichkeit besteht gemäß §12[,] Abs. 3[,] des Gesetzentwurfes.</i>",
			"D110<br>\n<br>\nD116<br>\n<br>\nE93"
		],
		"%nok-appo-end": [
			"%nok-appo-end",
			"Forkert appositionskomma, slut",
			"Personnavnetillæg og andre definerende appositioner, der ikke kan udelades eller sættes i parentes, bliver ikke adskilt med komma.<br>\n<br>\n<i>Kaiser Karl[,] der Große[,] residierte in Aachen.</i><br>\n<br>\n<i>Die Netflix-Serie[,] Money Heist[,] wurde in Spanien gedreht.</i>",
			"D110"
		],
		"%k-comp": [
			"%k-comp",
			"Sammenligningskomma",
			"Der bruges komma foran sammenligningsordene <i>&quot;wie&quot;</i> og <i>&quot;als&quot;</i><i>,</i> når disse indleder en ledsætning eller et infinitivsyntagme.<br>\n<br>\n<i>Er spielte nicht ganz so gut,</i> <b><i>wie</i></b><i> wir erwartet hatten.</i><i></i> (ledsætning)<br>\n<br>\n<i>Er schnitt besser ab, <b>als</b> wir erwartet hatten. (ledsætning)</i><br>\n<br>\n<i>Nichts hat ihn so geärgert, <b>wie</b> gegen seinen 5-jährigen Sohn im Schach zu verlieren. (infinitiv)</i><br>\n<br>\nModsat står der ikke komma foran<i></i> <i>&quot;wie&quot;</i> og<i> &quot;als&quot;</i>, når disse bruges som præposition (forholdsord), dvs. foran et substantiv (navneord) eller en substantivisk ordgruppe (nominalsyntagme), foran et pronomen (forholdsord) eller foran et participiumssyntagme (tillægsmåde-ordgruppe).<br>\n<br>\n<i>Nichts hat ihn so geärgert[,] <b>wie</b> diese Niederlage.</i><br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i>",
			""
		],
		"%ok-comp": [
			"%ok-comp",
			"Sammenligningskomma",
			"Der bruges komma foran sammenligningsordene <i>&quot;wie&quot;</i> og <i>&quot;als&quot;</i><i>,</i> når disse indleder en ledsætning eller et infinitivsyntagme.<br>\n<br>\n<i>Er spielte nicht ganz so gut,</i> <b><i>wie</i></b><i> wir erwartet hatten.</i><i></i> (ledsætning)<br>\n<br>\n<i>Er schnitt besser ab, <b>als</b> wir erwartet hatten. (ledsætning)</i><br>\n<br>\n<i>Nichts hat ihn so geärgert, <b>wie</b> gegen seinen 5-jährigen Sohn im Schach zu verlieren. (infinitiv)</i><br>\n<br>\nModsat står der ikke komma foran<i></i> <i>&quot;wie&quot;</i> og<i> &quot;als&quot;</i>, når disse bruges som præposition (forholdsord), dvs. foran et substantiv (navneord) eller en substantivisk ordgruppe (nominalsyntagme), foran et pronomen (forholdsord) eller foran et participiumssyntagme (tillægsmåde-ordgruppe).<br>\n<br>\n<i>Nichts hat ihn so geärgert[,] <b>wie</b> diese Niederlage.</i><br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i>",
			""
		],
		"%nok-comp": [
			"%nok-comp",
			"Forkert sammenligningskomma",
			"Der står ikke komma foran<i></i> <i>&quot;wie&quot;</i> og<i> &quot;als&quot;</i>, når disse bruges som præposition (forholdsord), dvs. foran et substantiv (navneord) eller en substantivisk ordgruppe (nominalsyntagme), foran et pronomen (forholdsord) eller foran et participiumssyntagme (tillægsmåde-ordgruppe).<br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i><br>\n<br>\nModsat <i>skal</i> der stå et komma, når <i>&quot;als&quot;</i> eller <i>&quot;wie&quot;</i> indleder en sammenligning bestående af en ledsætning eller et infinitivsyntagme:<br>\n<br>\n<i>Er schnitt besser ab, als wir erwartet hatten.</i><br>\n<br>\nBemærk: Når &quot;wie&quot; indleder et forklarende navnetillæg, kan der stå et valgfrit appositionskomma.<br>\n<br>\n<i>Die meisten Nadelbäume(,) wie Kiefer oder Fichte(,) behalten im Winter ihre Nadeln.</i>",
			"D128"
		],
		"%nok-comp-end": [
			"%nok-comp-end",
			"Forkert sammenligningskomma",
			"Der står ikke komma foran<i></i> <i>&quot;wie&quot;</i> og<i> &quot;als&quot;</i>, når disse bruges som præposition (forholdsord), dvs. foran et substantiv (navneord) eller en substantivisk ordgruppe (nominalsyntagme), foran et pronomen (forholdsord) eller foran et participiumssyntagme (tillægsmåde-ordgruppe).<br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i><br>\n<br>\nModsat <i>skal</i> der stå et komma, når <i>&quot;als&quot;</i> eller <i>&quot;wie&quot;</i> indleder en sammenligning bestående af en ledsætning eller et infinitivsyntagme:<br>\n<br>\n<i>Er schnitt besser ab, als wir erwartet hatten.</i><br>\n<br>\nBemærk: Når &quot;wie&quot; indleder et forklarende navnetillæg, kan der stå et valgfrit appositionskomma.<br>\n<br>\n<i>Die meisten Nadelbäume(,) wie Kiefer oder Fichte(,) behalten im Winter ihre Nadeln.</i>",
			"D128"
		],
		"%k-contrast": [
			"%k-contrast",
			"Modsætningskomma (start)",
			"Sætningsdele, der udtrykker en modsætning, får et start-komma. Dette gælder i særdeleshed konjunktionerne &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; og &quot;sondern&quot;. Et matchende slut-komma er valgfrit ved disse fire konjuktioner, men ikke ved andre modsægningsindskud.<br>\n<br>\n<i>Die Spieler waren nervös, <b>aber</b> optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, <b>andererseits</b> die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ko-contrast": [
			"%ko-contrast",
			"Modsætningskomma (start)",
			"Sætningsdele, der udtrykker en modsætning, får et start-komma. Dette gælder i særdeleshed konjunktionerne &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; og &quot;sondern&quot;. Et matchende slut-komma er valgfrit ved disse fire konjuktioner, men ikke ved andre modsægningsindskud.<br>\n<br>\n<i>Die Spieler waren nervös, <b>aber</b> optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, <b>andererseits</b> die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ok-contrast": [
			"%ok-contrast",
			"Modsætningskomma (start)",
			"Sætningsdele, der udtrykker en modsætning, får et start-komma. Dette gælder i særdeleshed konjunktionerne &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; og &quot;sondern&quot;. Et matchende slut-komma er valgfrit ved disse fire konjuktioner, men ikke ved andre modsægningsindskud.<br>\n<br>\n<i>Die Spieler waren nervös, <b>aber</b> optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, <b>andererseits</b> die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ko-contrast-end": [
			"%ko-contrast-end",
			"Modsætningskomma (slut)",
			"Slut-kommaet efter modsætningsled med &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; eller &quot;sondern&quot; er valgfrit, fordi det ikke altid står klart, om der er tale om et indskud (med slut-koma) eller en sideordning (uden slutkomma). Mest ualmindelig er slut-kommaet i forbindelse med &quot;sondern&quot;.<br>\n<br>\n<i>Nicht deine Freunde, <b>sondern</b> meine(,) haben aufgeräumt nach dem Fest.</i><br>\n<br>\nVed andre modsætningsindskud bruges der altid både start- og slutkomma.<br>\n<br>\n<i>Das Reisebüreau bezahlte ihm sein Geld zurück, <b>allerdings</b> unter Abzug einer Bearbeitungsgebühr, und annulierte den Flug.</i>",
			"D108<br>\n<br>\nE63"
		],
		"%nko-contrast-end": [
			"%nko-contrast-end",
			"Modsætningskomma (slut)",
			"Slut-kommaet efter modsætningsled med &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; eller &quot;sondern&quot; er valgfrit, fordi det ikke altid står klart, om der er tale om et indskud (med slut-koma) eller en sideordning (uden slutkomma). Mest ualmindelig er slut-kommaet i forbindelse med &quot;sondern&quot;.<br>\n<br>\n<i>Nicht deine Freunde, <b>sondern</b> meine(,) haben aufgeräumt nach dem Fest.</i><br>\n<br>\nVed andre modsætningsindskud bruges der altid både start- og slutkomma.<br>\n<br>\n<i>Das Reisebüreau bezahlte ihm sein Geld zurück, <b>allerdings</b> unter Abzug einer Bearbeitungsgebühr, und annulierte den Flug.</i>",
			"D108<br>\n<br>\nE63"
		],
		"%nok-contrast-end": [
			"%nok-contrast-end",
			"Forkert modsætningskomma (slut)",
			"Slut-kommaet efter modsætningsled med &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; eller &quot;sondern&quot; er i princippet valgfrit, fordi det ikke altid står klart, om der er tale om et indskud (med slut-koma) eller en sideordning (uden slutkomma).<br>\n<br>\nSlutkommaet er dog særdeles sjældent i forbindelse med <i>'sondern'</i><i>,</i> og det anbefales som udgangspunkt at droppe det:<br>\n<br>\n<i>Ich möchte kein Pony, sondern ein richtiges Pferd[,] reiten.</i><br>\n<br>\n<i>Das Original ist nicht englisch, sondern chinesisch[,] und wurde nicht direkt ins Deutsche übersetzt.</i>",
			""
		],
		"%k-coord": [
			"%k-coord",
			"Sideordningskomma",
			"De mest almindelige sideordningskommaer er kommaer der erstatter sideordnende konjunktioner <i>(und, oder),</i> og ses i opremsninger og mellem sideordnede sætninger eller syntagmer af samme slags. Kommatroll kalder dette komma opremsningskomma.<br>\n<br>\nHerudover kan der dog også stå et sideordningskomma foran visse konjunktioner <i>(geschweige)</i> eller foran anden del af bestemte konjunktionspar <i>(halb ... halb,</i> <i>mal ... mal, teils ... teils,</i> <i>je ... desto).</i><br>\n<br>\n<i></i><br>\n<br>\n<i>Je früher, <b>desto</b> besser</i><br>\n<br>\n<i>Das Wesen war halb Tiger, <b>halb</b> Mensch.</i>",
			"E159<br>\n<br>\nE160<br>\n<br>\nE164"
		],
		"%ok-coord": [
			"%ok-coord",
			"Sideordningskomma",
			"De mest almindelige sideordningskommaer er kommaer der erstatter sideordnende konjunktioner <i>(und, oder),</i> og ses i opremsninger og mellem sideordnede sætninger eller syntagmer af samme slags. Kommatroll kalder dette komma opremsningskomma.<br>\n<br>\nHerudover kan der dog også stå et sideordningskomma foran visse konjunktioner <i>(geschweige)</i> eller foran anden del af bestemte konjunktionspar <i>(halb ... halb,</i> <i>mal ... mal, teils ... teils,</i> <i>je ... desto).</i><br>\n<br>\n<i></i><br>\n<br>\n<i>Je früher, <b>desto</b> besser</i><br>\n<br>\n<i>Das Wesen war halb Tiger, <b>halb</b> Mensch.</i>",
			"E159<br>\n<br>\nE160<br>\n<br>\nE164"
		],
		"%nok-coord": [
			"%nok-coord",
			"Overflødigt sideordningskomma",
			"Når to elementer (eller det sidste element i en opremsning) sideordnes med &quot;und&quot;, &quot;oder&quot;, &quot;bzw.&quot;, &quot;resp.&quot;, &quot;sowie&quot; eller &quot;wie&quot;, står der normalt komma. Dette gælder både for enkeltord, syntagmer og ledsætninger.<br>\n<br>\n<i>Peter lud Freunde[,] und Verwandte zu einer Garten-Party ein.</i><br>\n<br>\n<i>SpaceX ha</i><i>t</i> <i>wieder</i> <i>eine Rakete</i><i> getestet</i><i>[,]</i> <i>und dabei</i> <i>50 Satelliten in die Erdumlaufbahn gebracht.</i><br>\n<br>\n<i>Der König[,] sowie sein gesamtes Gefolge[,] mussten notgedrungen auf der Insel übernachten.</i><br>\n<br>\nTilsvarende bruges der heller ikke ledsætningskomma, når ledsætningen står som sideordning til en substantivliste eller en præpositionsforbindelse:<br>\n<br>\n<i>Ich kaufe Brot, Wein und[,] was sonst noch fehlt.</i><br>\n<br>\n<i>Wenn die Kraniche kommen[,] oder in den Sommerferien kann man in Zingst viele Touristen sehen.</i><br>\n<br>\nDer står heller ikke sideordningskomma ved de sideordnende konjunktionspar <i>&quot;s</i><i>owohl ... als auch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>sowohl ... wie auch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>weder ... noch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>nicht ... noch</i><i>&quot;</i><i>, &quot;entweder ... oder&quot;</i>.<br>\n<br>\n<i>Weder sein Sohn[,] noch seine Tochter teilten seine Begeisterung für Volkstänze.</i><br>\n<br>\n<i>Volkstänze begeisterten weder seinen Sohn[,] noch seine Tochter.</i><br>\n<br>\nBemærk: Denne regel forhindrer ikke, at der kan stå parentetisk komma foran eller omkring hele udtrykket, hvis det bruges som indskud eller efterstilling. Men heller ikke her står der et komma foran den anden, sideordnende del af konjunktionspares.<br>\n<br>\n<i>Er trinkt nie Kaffee, weder zu Hause[,] noch im Büro.</i><br>\n<br>\nMen: Der stå altid komma foran kontrastive konjunktioner (<i>&quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot;</i><i>,</i> <i>&quot;sondern&quot;</i><i>)</i> samt foran 2. del af sammenlignende konjunktionspar (<i>&quot;einerseits ... andererseits&quot;, &quot;je ... desto&quot;, &quot;teils ... teils&quot;, &quot;mal ... mal&quot;</i><i>,</i> <i>&quot;zum einen ... zum anderen&quot;</i><i>).</i> I tillæg kan sidstnævnte få et parentetisk komma foran 1. led.<br>\n<br>\nBemærk: Selv foran &quot;und&quot; og &quot;oder&quot; kan der være komma, nemlig hvis det et påkrævet som slutkomma, fx efter en ledsætning eller en apposition (navnetillæg).<br>\n<br>\n<i>Ich hoffe, dass du kommen kannst, und freue mich auf ein gemeinsames Wochenende.</i><br>\n<br>\n<i>Sein Vater, ein passionierter Golfspieler, frönte gerade seinem Hobby auf Lanzarote.</i>",
			"D104<br>\n<br>\nD107<br>\n<br>\nE46"
		],
		"%nko-coord": [
			"%nko-coord",
			"Valgfrit sideordningskomma",
			"Normalt står der ikke komma foran sideordnende konjunktioner <i>(und, oder, sowie)</i><i>,</i> medmindre der er andre grunde, fx et slutkomma efter ledsætninger, indskud, uddybninger eller navnetillæg.<br>\n<br>\nMen man kan valgfrit, for at lette læsningen, indføje et tydelighedskomma foran &quot;und&quot; eller &quot;oder&quot; mellem to sideordnede sætninger, fx hvis subjektet af 2. sætning kan misforstås som (sideordnet) objekt af 1. sætning:<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (Kritik der Aktionäre?)</i>",
			"E126"
		],
		"%ko-coord": [
			"%ko-coord",
			"Valgfrit sideordningskomma",
			"Normalt står der ikke komma foran sideordnende konjunktioner <i>(und, oder, sowie)</i><i>,</i> medmindre der er andre grunde, fx et slutkomma efter ledsætninger, indskud, uddybninger eller navnetillæg.<br>\n<br>\nMen man kan valgfrit, for at lette læsningen, indføje et tydelighedskomma foran &quot;und&quot; eller &quot;oder&quot; mellem to sideordnede sætninger, fx hvis subjektet af 2. sætning kan misforstås som (sideordnet) objekt af 1. sætning:<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (Kritik der Aktionäre?)</i>",
			"E126"
		],
		"%k-day": [
			"%k-day",
			"Datokomma (dag)",
			"Ugedag og dato bliver adskilt af komma. Hvis sætningen fortsætter, kan der også komme et valgfrit slutkomma, alt efter om datoen opfattes som apposition (altid slutkomma) eller som led i en opremsning (kun slutkomma foran klokkesletsangivelse uden præposition).<br>\n<br>\n<i>Der Empfang ist am Sonntag, dem 12. April(,) um 20 Uhr.</i><br>\n<br>\n<i>Der Empfang ist am Sonntag, 12. April, 20 Uhr.</i><br>\n<br>\nDer står også datokomme mellem sted og tid i brevhoveder:<br>\n<br>\n<i>Oldenburg, 23.11.2019</i><br>\n<br>\n<i>Oldenburg, den 23. November 2019</i>",
			"D114<br>\n<br>\nE89<br>\n<br>\nE90"
		],
		"%ok-day": [
			"%ok-day",
			"Datokomma (dag)",
			"Ugedag og dato bliver adskilt af komma. Hvis sætningen fortsætter, kan der også komme et valgfrit slutkomma, alt efter om datoen opfattes som apposition (altid slutkomma) eller som led i en opremsning (kun slutkomma foran klokkesletsangivelse uden præposition).<br>\n<br>\n<i>Der Empfang ist am Sonntag, dem 12. April(,) um 20 Uhr.</i><br>\n<br>\n<i>Der Empfang ist am Sonntag, 12. April, 20 Uhr.</i><br>\n<br>\nDer står også datokomme mellem sted og tid i brevhoveder:<br>\n<br>\n<i>Oldenburg, 23.11.2019</i><br>\n<br>\n<i>Oldenburg, den 23. November 2019</i>",
			"D114<br>\n<br>\nE89<br>\n<br>\nE90"
		],
		"%nok-day": [
			"%nok-day",
			"Forkert datokomma",
			"I en to-leds tidsangivelse står der ikke komma mellem dato og klokkeslet, hvis sidstnævnt har en præposition (&quot;um&quot;).<br>\n<br>\n<i>Das Ergebnis wurde am Montag <b>um</b> 16:15 Uhr bekanntgegeben.</i><br>\n<br>\nUden præposition, eller når der er 3 eller flere led i tidsangivelsen, adskilles klokkesletsangivelsen med komma.<br>\n<br>\n<i>Das Ergebnis wurde am Montag, 16:15(,) bekanntgegeben.</i><br>\n<br>\n<i>Das Ergebnins wurde am Montag, den 15. April, um 16:15(,) bekanntgegeben.</i><br>\n<br>\nEfter klokkeslettet er der valgfrit slutkomma, alt efter om konstruktionen opfattes som apposition (med slutkomma) eller som opremsning (uden slutkomma).",
			"E90"
		],
		"%k-ellipsis": [
			"%k-ellipsis",
			"Ellipsekomma",
			"En ellipse med to sætningskonstituenter, hvor verbum er udeladt snarere end gentaget, adskilles fra den forudgående hovedsætning med et komma:<br>\n<br>\n<i>Auf der Arbeit ist er ein Held, zu Hause ein Versager.</i><br>\n<br>\n<i>Karl studiert Medizin, Klara Psychologie und Karel Physik.</i><br>\n<br>\nMen: Der står ikke komma, hvis der står en sideordnende konjunktion <i>(und, oder)</i> foran ellipsen:<br>\n<br>\n<i>Peter kaufte einen Pullover[,] und seine Freundin einen Schal.</i>",
			"E44"
		],
		"%ok-ellipsis": [
			"%ok-ellipsis",
			"Ellipsekomma",
			"En ellipse med to sætningskonstituenter, hvor verbum er udeladt snarere end gentaget, adskilles fra den forudgående hovedsætning med et komma:<br>\n<br>\n<i>Auf der Arbeit ist er ein Held, zu Hause ein Versager.</i><br>\n<br>\n<i>Karl studiert Medizin, Klara Psychologie und Karel Physik.</i><br>\n<br>\nMen: Der står ikke komma, hvis der står en sideordnende konjunktion <i>(und, oder)</i> foran ellipsen:<br>\n<br>\n<i>Peter kaufte einen Pullover[,] und seine Freundin einen Schal.</i>",
			"E44"
		],
		"%nok-ellipsis": [
			"%nok-ellipsis",
			"Forkert ellipsekomma",
			"Der bruges ikke ellipsekomma, hvis ellipsen er føjet til hovedsætningen med en sideordnende konjunktion (&quot;und&quot;/&quot;oder&quot;):<br>\n<br>\n<i>Peter</i> <i>kaufte einen Pullover</i><i>[</i><i>,</i><i>]</i><i> und seine Freundin einen Schal.</i>",
			"E45"
		],
		"%k-explain": [
			"%k-explain",
			"Uddybningskomma, start",
			"Uddybninger, fx eksempler og forklaringer, kræver komma foran det indledende ord: &quot;z.B.&quot;, &quot;nämlich&quot;, &quot;insbesondere&quot;, &quot;und zwar&quot;, &quot;d.h.&quot; etc.<br>\n<br>\n<i>Der Online-Shop verkauft hauptsächlich Wanderbedarf, z.B. Wanderschuhe, Zelte, Schlafsäcke und Outdoor-Kochgerät.</i><br>\n<br>\n<i>Ryan Air fliegt jede Woche zweimal nach Mallorca, und zwar Freitags und Montags.</i><br>\n<br>\nHvis en uddybning består af en ledsætning, mister denne som oftest sit åbningskomma - eller rettere sat, det første komma, uddybningskomma, overtager begge funktioner. At bruge et ekstra åbningskomma foran ledsætningen konjunktion er godt nok ikke forbudt, men ualmindeligt.<br>\n<br>\n<i>Mann kan dieses Modell zusammenklappen, z.B.(,) wenn man es in der Bahn mitnehmen will.</i><br>\n<br>\nEn undtagelse fra denne regel er <i>&quot;d.h.&quot;/&quot;das heißt&quot;, &quot;d.i.&quot;, &quot;will heißen&quot;</i> og <i>&quot;sprich&quot;</i>. Her bevares det separate ledsætningskomma <i>efter</i> uddybnings-indledningen.<br>\n<br>\n<i>Nach seiner erwarteten Wiederwahl, d.h., sobald alle Stimmen ausgezählt sind, wird er eine Ansprache halten.</i>",
			"D111<br>\n<br>\nE62"
		],
		"%ok-explain": [
			"%ok-explain",
			"Uddybningskomma, start",
			"Uddybninger, fx eksempler og forklaringer, kræver komma foran det indledende ord: &quot;z.B.&quot;, &quot;nämlich&quot;, &quot;insbesondere&quot;, &quot;und zwar&quot;, &quot;d.h.&quot; etc.<br>\n<br>\n<i>Der Online-Shop verkauft hauptsächlich Wanderbedarf, z.B. Wanderschuhe, Zelte, Schlafsäcke und Outdoor-Kochgerät.</i><br>\n<br>\n<i>Ryan Air fliegt jede Woche zweimal nach Mallorca, und zwar Freitags und Montags.</i><br>\n<br>\nHvis en uddybning består af en ledsætning, mister denne som oftest sit åbningskomma - eller rettere sat, det første komma, uddybningskomma, overtager begge funktioner. At bruge et ekstra åbningskomma foran ledsætningen konjunktion er godt nok ikke forbudt, men ualmindeligt.<br>\n<br>\n<i>Mann kan dieses Modell zusammenklappen, z.B.(,) wenn man es in der Bahn mitnehmen will.</i><br>\n<br>\nEn undtagelse fra denne regel er <i>&quot;d.h.&quot;/&quot;das heißt&quot;, &quot;d.i.&quot;, &quot;will heißen&quot;</i> og <i>&quot;sprich&quot;</i>. Her bevares det separate ledsætningskomma <i>efter</i> uddybnings-indledningen.<br>\n<br>\n<i>Nach seiner erwarteten Wiederwahl, d.h., sobald alle Stimmen ausgezählt sind, wird er eine Ansprache halten.</i>",
			"D111<br>\n<br>\nE62"
		],
		"%k-explain-end": [
			"%k-explain-end",
			"Uddybningskomma, slut",
			"Forklarende eller præciserende indskud får både start- og slutkomma.<br>\n<br>\n<i>Die meisten Nadelbäume, wie z.B. Kiefer und Fichte, werfen ihre Nadeln im Winter nicht ab.</i>",
			"D111"
		],
		"%ok-explain-end": [
			"%ok-explain-end",
			"Uddybningskomma, slut",
			"Forklarende eller præciserende indskud får både start- og slutkomma.<br>\n<br>\n<i>Die meisten Nadelbäume, wie z.B. Kiefer und Fichte, werfen ihre Nadeln im Winter nicht ab.</i>",
			"D111"
		],
		"%ko-explain": [
			"%ko-explain",
			"Valgfrit uddbyningskomma",
			"Et uddybningskomma er valgfrit, hvis det ikke bryder sætningens normale flow og ikke introduceres af konjunktioner, der er indskrænkende eller modsættende <i>(</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i> og ikke indeholder &quot;und&quot; eller en verbal del <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nMen med komma som indskud eller efterstillet:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (uddbyning efter et navn, brud på sætningsstrømmen)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (efterstillet uddybning, adskilt fra hovedsætningen)</i>",
			"E66"
		],
		"%nko-explain": [
			"%nko-explain",
			"Valgfrit uddbyningskomma",
			"Et uddybningskomma er valgfrit, hvis det ikke bryder sætningens normale flow og ikke introduceres af konjunktioner, der er indskrænkende eller modsættende <i>(</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i> og ikke indeholder &quot;und&quot; eller en verbal del <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nMen med komma som indskud eller efterstillet:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (uddbyning efter et navn, brud på sætningsstrømmen)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (efterstillet uddybning, adskilt fra hovedsætningen)</i>",
			"E66"
		],
		"%ko-explain-end": [
			"%ko-explain-end",
			"Valgfrit uddbyningskomma",
			"Et uddybningskomma er valgfrit, hvis det ikke bryder sætningens normale flow og ikke introduceres af konjunktioner, der er indskrænkende eller modsættende <i>(</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i> og ikke indeholder &quot;und&quot; eller en verbal del <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nMen med komma som indskud eller efterstillet:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (uddbyning efter et navn, brud på sætningsstrømmen)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (efterstillet uddybning, adskilt fra hovedsætningen)</i>",
			"E66"
		],
		"%nko-explain-end": [
			"%nko-explain-end",
			"Valgfrit uddbyningskomma",
			"Et uddybningskomma er valgfrit, hvis det ikke bryder sætningens normale flow og ikke introduceres af konjunktioner, der er indskrænkende eller modsættende <i>(</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i> og ikke indeholder &quot;und&quot; eller en verbal del <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nMen med komma som indskud eller efterstillet:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (uddbyning efter et navn, brud på sætningsstrømmen)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (efterstillet uddybning, adskilt fra hovedsætningen)</i>",
			"E66"
		],
		"%nok-explain-end": [
			"%nok-explain-end",
			"Forkert uddybningskomma",
			"Uddybende tilføjelser efter attributer (bestemmelser) eller ikke-selvstændige verber (udsagnsord) får ikke slutkomma.<br>\n<br>\n<i>Er hat viele fremdsprachliche, z.B. französische und englische[,] Aufsätze publiziert.</i><br>\n<br>\n<i>Die Unterlagen erhält man, nachdem man sich immatrikuliert, d.h. an der Hochschule registriert[,] hat.</i>",
			"D111"
		],
		"%ok-extra": [
			"%ok-extra",
			"Særfeltskomma, ved sætningstilføjelser (start eller slut)",
			"<i>Der bruges komma for at afgrænse tilføjelser i starten eller slutningen af sætningen. Der er tale om et særligt &quot;ekstra&quot;-felt uden for sætningens normale syntaks, der kan indholde fx interjektioner (udråbsord), bekræftelses- og afvisningsudtryk (ja, nein, ok, doch) eller korte kommenterende ytringer.</i><br>\n<br>\n<i>Das Eis ist lecker, nicht wahr?</i><br>\n<br>\n<i>Nein, den Hund habe ich noch nie gesehen.</i><br>\n<br>\n<i>Ach, das kann doch nicht sein.</i><br>\n<br>\n<i>Super, das machen wir!</i><br>\n<br>\n<i>Mir reicht das eine Bier, danke.</i><br>\n<br>\n<i>Doch, der Gutschein ist abgelafufen, leider.</i><br>\n<br>\n<i>Unmöglich, er blufft nur.</i><br>\n<br>\nSærfeltskomma<i></i> bruges også ved såkaldt topikaliseringer, når et substantiv (navneord) eller en præpositionsforbindelse (forholdsordsled) i sætningsstarten fremhæves ved at genoptage det med et pronomen.<br>\n<br>\n<i>Deine Schwester, die mag ich!</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\n<i>Denn der Gärtner, der ist immer der Mörder.</i>",
			"D130<br>\n<br>\nD129<br>\n<br>\nE42<br>\n<br>\nE57<br>\n<br>\nE58<br>\n<br>\nE59"
		],
		"%k-extra": [
			"%k-extra",
			"Særfeltskomma, ved sætningstilføjelser (start eller slut)",
			"<i>Der bruges komma for at afgrænse tilføjelser i starten eller slutningen af sætningen. Der er tale om et særligt &quot;ekstra&quot;-felt uden for sætningens normale syntaks, der kan indholde fx interjektioner (udråbsord), bekræftelses- og afvisningsudtryk (ja, nein, ok, doch) eller korte kommenterende ytringer.</i><br>\n<br>\n<i>Das Eis ist lecker, nicht wahr?</i><br>\n<br>\n<i>Nein, den Hund habe ich noch nie gesehen.</i><br>\n<br>\n<i>Ach, das kann doch nicht sein.</i><br>\n<br>\n<i>Super, das machen wir!</i><br>\n<br>\n<i>Mir reicht das eine Bier, danke.</i><br>\n<br>\n<i>Doch, der Gutschein ist abgelafufen, leider.</i><br>\n<br>\n<i>Unmöglich, er blufft nur.</i><br>\n<br>\nSærfeltskomma<i></i> bruges også ved såkaldt topikaliseringer, når et substantiv (navneord) eller en præpositionsforbindelse (forholdsordsled) i sætningsstarten fremhæves ved at genoptage det med et pronomen.<br>\n<br>\n<i>Deine Schwester, die mag ich!</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\n<i>Denn der Gärtner, der ist immer der Mörder.</i>",
			"D130<br>\n<br>\nD129<br>\n<br>\nE42<br>\n<br>\nE57<br>\n<br>\nE58<br>\n<br>\nE59"
		],
		"%nok-extra": [
			"%nok-extra",
			"Forkert særfeltskomma",
			"I modsætning til engelsk bliver indledende præpositionsforbindelser normalt ikke adskilt med komma (medmindre de er topikaliseret og efterfulgt af .<br>\n<br>\n<i>Abgesehen von dem ewigen Regen[,] ist Irland eine sehr schöne Insel.</i><br>\n<br>\n<i>Einschließlich der neu eingeführten Energieabgaben[,] ist der Strompreis dieses Jahr um 30% gestiegen.</i><br>\n<br>\nUndtagelse: Topikalisering med efterfølgende <i>&quot;da&quot;, &quot;daran&quot;, &quot;damit&quot;</i> etc.:<br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\nHvis de samme ordgrupper optræder andre steder i sætningen, hvor de kan opfattes som indskud eller efterstillinger, kan et (valgfrit) komma eventuelt komme på tale som fremhævning. Dette komma er imidlertid kun obligatorisk, hvis ordgruppen bryder sætningsstrømmen.<br>\n<br>\n<i>Irland ist(,) abgesehen vom ewigen Regen(,) eine sehr schöne Insel.</i><br>\n<br>\n<i>Irland, trotz des ewigen Regens, ist eigentlich eine schöne Insel.</i><br>\n<br>\n<i>Et indledende &quot;Bitte&quot; får normalt heller ikke komma:</i><br>\n<br>\n<i>Bitte[,] nehmen Sie noch ein Stück Kuchen.</i><br>\n<br>\nEt komma kan dog komme på tale som særlig fremhævning, fx efter &quot;aber&quot;:<br>\n<br>\n<i>Aber bitte, nehmen Sie doch noch ein Stück Kuchen.</i>",
			"E57<br>\n<br>\nE84"
		],
		"%k-FSstart": [
			"%k-FSstart",
			"Ledsætningskomma, start",
			"Ledsætninger, dvs. sætninger, der udgør led i en anden, overordnet sætning, adskilles fra denne med såvel start- som slutkomma. De tyske regler minder her om dansk grammatisk komma, og står i modsætning til de engelske regler.<br>\n<br>\nLedsætninger er nemt at identificere på tysk, fordi de næsten altid indledes af et underordnende ord - enten en konjunktion <i>(&quot;dass&quot;, &quot;weil&quot;, &quot;wenn&quot;),</i> et relativprotonmen<i> (&quot;der&quot;, &quot;welcher&quot;, &quot;woran&quot;)</i> eller et spørgeord<i> (&quot;wie&quot;, &quot;ob&quot;, &quot;warum&quot;)</i><i>.</i> Desuden står det finitte (bøjede) verbum altid sidst i sætningen og markerer dens afslutning. Ledsætninger kan have en adverbiel funktion (temporal, kausal, konditional, final etc.) eller erstatte andre sætningsdelde (fx subjekt eller objekt).<br>\n<br>\n<i>Es ist nett, <b>dass</b> du mir helfen willst. (subjekt-sætning med konjunktion)</i><br>\n<br>\n<i>Versprich mir, <b>dass</b> du dich anstrengst! (objekt-sætning med konjunktion)</i><br>\n<br>\n<i>Ich weiß nicht, <b>wie</b> das weitergehen soll. (objekt-sætning med spørgeord)</i><br>\n<br>\n<i><b>Wenn</b> wir noch ins Kino wollen, müssen wir früher essen. (konditionalsætning)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (indskudt relativ- eller attributsætning)</i><br>\n<br>\n<i>Sammensatte konjunktioner behandles som helhed (typisik + konjunktion) og må splittes ad med et komma (als ob, als dass, anstatt dass, wie wenn, wenn auch, außer wenn, außer wo).</i><br>\n<br>\n<i>Sie feierten, <b>als ob</b> morgen die Welt unterginge.</i><br>\n<br>\nNogle gange står der et adverbium (biord) foran konjunktionen. Hvis adverbiet lægger sig til konjunktionen (og altså ikke hører til hovedsætningen), flyttes ledsætningens startkomma til venstre, foran adverbiet:<br>\n<br>\n<i>Er hat jeden Tag trainiert, <b>sogar</b> <b>wenn</b> er Fieber hatte.</i><br>\n<br>\n<i>Er wird wohl wiedergewählt werden, <b>nicht weil</b> er es verdient hätte, <b>sondern weil</b> es keine Alternative gibt.</i><br>\n<br>\nAber: <i>Das Rückgaberecht gilt</i> <b><i>auch, wenn</i></b><i> die Bestellung mündlich aufgegeben wurde.</i> ('auch' hører til hovedsætningen)<br>\n<br>\nBemærk: Uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> og '<i>will heißen'</i> er ikke rigtige adverbier, men i en slags minisætninger med et verbal element. Derfor udgør de en undtagelse og får to kommas, hvid de bruges som indledning af en ledsætning - et uddybningskomma til venstre og et ledsætninge-startkomma til højre.<br>\n<br>\n<i>Bei Regen, d.h., wenn die Felsen nass sind, ist der Abstieg schwierig.</i><br>\n<br>\nOgså mellem ledsætninger af forskellig rang/niveau i sætningtræet står der et komma. Dette komma fungerer som start- eller slutkomma for den underordnede sætning.<br>\n<br>\n<i>Man kann den Strandparkplatz nicht bei Vollmond benutzen, <b>weil</b> dann die Gefahr besteht, <b>dass</b> er überschwemmt wird.</i><br>\n<br>\nBemærk: Der findes undtagelser, hvor den overordnede enhed ikke er en anden sætning, men et enkelt ord. Også her bruges der åbningskomma:<br>\n<br>\n<i>Vielleicht,</i> <b><i>dass</i></b><i> es doch noch klappt.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%ok-FSstart": [
			"%ok-FSstart",
			"Ledsætningskomma, start",
			"Ledsætninger, dvs. sætninger, der udgør led i en anden, overordnet sætning, adskilles fra denne med såvel start- som slutkomma. De tyske regler minder her om dansk grammatisk komma, og står i modsætning til de engelske regler.<br>\n<br>\nLedsætninger er nemt at identificere på tysk, fordi de næsten altid indledes af et underordnende ord - enten en konjunktion <i>(&quot;dass&quot;, &quot;weil&quot;, &quot;wenn&quot;),</i> et relativprotonmen<i> (&quot;der&quot;, &quot;welcher&quot;, &quot;woran&quot;)</i> eller et spørgeord<i> (&quot;wie&quot;, &quot;ob&quot;, &quot;warum&quot;)</i><i>.</i> Desuden står det finitte (bøjede) verbum altid sidst i sætningen og markerer dens afslutning. Ledsætninger kan have en adverbiel funktion (temporal, kausal, konditional, final etc.) eller erstatte andre sætningsdelde (fx subjekt eller objekt).<br>\n<br>\n<i>Es ist nett, <b>dass</b> du mir helfen willst. (subjekt-sætning med konjunktion)</i><br>\n<br>\n<i>Versprich mir, <b>dass</b> du dich anstrengst! (objekt-sætning med konjunktion)</i><br>\n<br>\n<i>Ich weiß nicht, <b>wie</b> das weitergehen soll. (objekt-sætning med spørgeord)</i><br>\n<br>\n<i><b>Wenn</b> wir noch ins Kino wollen, müssen wir früher essen. (konditionalsætning)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (indskudt relativ- eller attributsætning)</i><br>\n<br>\n<i>Sammensatte konjunktioner behandles som helhed (typisik + konjunktion) og må splittes ad med et komma (als ob, als dass, anstatt dass, wie wenn, wenn auch, außer wenn, außer wo).</i><br>\n<br>\n<i>Sie feierten, <b>als ob</b> morgen die Welt unterginge.</i><br>\n<br>\nNogle gange står der et adverbium (biord) foran konjunktionen. Hvis adverbiet lægger sig til konjunktionen (og altså ikke hører til hovedsætningen), flyttes ledsætningens startkomma til venstre, foran adverbiet:<br>\n<br>\n<i>Er hat jeden Tag trainiert, <b>sogar</b> <b>wenn</b> er Fieber hatte.</i><br>\n<br>\n<i>Er wird wohl wiedergewählt werden, <b>nicht weil</b> er es verdient hätte, <b>sondern weil</b> es keine Alternative gibt.</i><br>\n<br>\nAber: <i>Das Rückgaberecht gilt</i> <b><i>auch, wenn</i></b><i> die Bestellung mündlich aufgegeben wurde.</i> ('auch' hører til hovedsætningen)<br>\n<br>\nBemærk: Uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> og '<i>will heißen'</i> er ikke rigtige adverbier, men i en slags minisætninger med et verbal element. Derfor udgør de en undtagelse og får to kommas, hvid de bruges som indledning af en ledsætning - et uddybningskomma til venstre og et ledsætninge-startkomma til højre.<br>\n<br>\n<i>Bei Regen, d.h., wenn die Felsen nass sind, ist der Abstieg schwierig.</i><br>\n<br>\nOgså mellem ledsætninger af forskellig rang/niveau i sætningtræet står der et komma. Dette komma fungerer som start- eller slutkomma for den underordnede sætning.<br>\n<br>\n<i>Man kann den Strandparkplatz nicht bei Vollmond benutzen, <b>weil</b> dann die Gefahr besteht, <b>dass</b> er überschwemmt wird.</i><br>\n<br>\nBemærk: Der findes undtagelser, hvor den overordnede enhed ikke er en anden sætning, men et enkelt ord. Også her bruges der åbningskomma:<br>\n<br>\n<i>Vielleicht,</i> <b><i>dass</i></b><i> es doch noch klappt.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%k-FSend": [
			"%k-FSend",
			"Ledsætningskomma, slut",
			"Indledende eller indskudte ledsætninger bliver adskilt fra den efterfølgende hovedsætning(sdel) med et obligatorisk slutkomma.<br>\n<br>\n<i><b>Wenn</b> du kommen kannst, gib mir bitte Bescheid! (Adverbialsatz)</i><br>\n<br>\n<i><b>Dass</b> er nicht schwimmen konnte, war ein Problem. (Subjekt-Satz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\nBemærk: Slutkommaet er også påkrævet, selvom den overordnede sætning fortsætter me &quot;und&quot; eller &quot;oder&quot;.<br>\n<br>\n<i>Wenn man vermeiden will, dass Bären ins Zelt kommen, <b>oder</b> wenn es Ameisen gibt, kann man das Essen in einen Baum hängen.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%ok-FSend": [
			"%ok-FSend",
			"Ledsætningskomma, slut",
			"Indledende eller indskudte ledsætninger bliver adskilt fra den efterfølgende hovedsætning(sdel) med et obligatorisk slutkomma.<br>\n<br>\n<i><b>Wenn</b> du kommen kannst, gib mir bitte Bescheid! (Adverbialsatz)</i><br>\n<br>\n<i><b>Dass</b> er nicht schwimmen konnte, war ein Problem. (Subjekt-Satz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\nBemærk: Slutkommaet er også påkrævet, selvom den overordnede sætning fortsætter me &quot;und&quot; eller &quot;oder&quot;.<br>\n<br>\n<i>Wenn man vermeiden will, dass Bären ins Zelt kommen, <b>oder</b> wenn es Ameisen gibt, kann man das Essen in einen Baum hängen.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%nok-FSstart": [
			"%nok-FSstart",
			"Forkert ledsætningskomma",
			"Ved ledsætninger, der indledes af et flerordsudtryk bestående af præposition + konjunktion (forholdsord + bindeord), står der ikke komma direkte foran konjunktionen. Er ledsætningen efterstillet, står startkommaet til venstre for hele udtrykket, dvs. foran præpositionen.<br>\n<br>\n<i>Er läuft, <b>als[,] ob</b> sein Leben davon abhinge.</i><br>\n<br>\n<i><b>Anstatt[,] dass</b> eine Brücke gebaut wurde, wurden zusätzliche Fähren eingesetzt.</i>",
			"D121"
		],
		"%nko-FSstart-mwe": [
			"%nko-FSstart-mwe",
			"Indre konjunktionskomma",
			"Ved ledsætninger, der indledes af et flerordsudtryk bestående af et adverbium og/eller participium plus en konjunktion, kan der sættes et valgfrit konjun ktions-komma midt i udtrykket, direkte foran konjunktionen.<br>\n<br>\n<i>Je nachdem(,) ob Weihnachten Schnee liegt, werden wir den Kindern einen Schlitten kaufen.</i><br>\n<br>\n<i>Egal(,) ob es stürmt oder nicht, wir müssen da hinauf.</i><br>\n<br>\n<i>Geschweige denn(,) dass Stau ist, sind wir um fünf da.</i><br>\n<br>\nUafhængigt af dette indre komma står der så et ledsætnings-startkomma til venstre for hele konjunktionsudtrykket, hvis ledsætninger er efterstillet eller indskudt.<br>\n<br>\n<i>Er spricht kaum französich, <b>ausgenommen(,) wenn</b> er getrunken hat.</i><br>\n<br>\nTilsvarende for følgende konjunktionsforbindelser:<br>\n<br>\n<i>Angenommen/ausgenommen/vorausgesetzt + dass</i><br>\n<br>\n<i>Z.B./beispielsweise/und zwar + dass/wenn/weil</i><br>\n<br>\n<i>Besonders/namentlich/nämlich/vor allem + wenn/weil</i><br>\n<br>\n<i>Soweit/insofern/so/um so mehr/weniger/eher + als</i><br>\n<br>\n<i>Egal/gleichviel/je nachdem + ob</i><br>\n<br>\n<i>Kaum/geschweige denn + dass</i><br>\n<br>\n<i>Im Fall + dass</i>",
			"<i>D122</i>"
		],
		"%ko-FSstart-mwe": [
			"%ko-FSstart-mwe",
			"Indre konjunktionskomma",
			"Ved ledsætninger, der indledes af et flerordsudtryk bestående af et adverbium og/eller participium plus en konjunktion, kan der sættes et valgfrit konjun ktions-komma midt i udtrykket, direkte foran konjunktionen.<br>\n<br>\n<i>Je nachdem(,) ob Weihnachten Schnee liegt, werden wir den Kindern einen Schlitten kaufen.</i><br>\n<br>\n<i>Egal(,) ob es stürmt oder nicht, wir müssen da hinauf.</i><br>\n<br>\n<i>Geschweige denn(,) dass Stau ist, sind wir um fünf da.</i><br>\n<br>\nUafhængigt af dette indre komma står der så et ledsætnings-startkomma til venstre for hele konjunktionsudtrykket, hvis ledsætninger er efterstillet eller indskudt.<br>\n<br>\n<i>Er spricht kaum französich, <b>ausgenommen(,) wenn</b> er getrunken hat.</i><br>\n<br>\nTilsvarende for følgende konjunktionsforbindelser:<br>\n<br>\n<i>Angenommen/ausgenommen/vorausgesetzt + dass</i><br>\n<br>\n<i>Z.B./beispielsweise/und zwar + dass/wenn/weil</i><br>\n<br>\n<i>Besonders/namentlich/nämlich/vor allem + wenn/weil</i><br>\n<br>\n<i>Soweit/insofern/so/um so mehr/weniger/eher + als</i><br>\n<br>\n<i>Egal/gleichviel/je nachdem + ob</i><br>\n<br>\n<i>Kaum/geschweige denn + dass</i><br>\n<br>\n<i>Im Fall + dass</i>",
			"<i>D122</i>"
		],
		"%nko-FSstart": [
			"%nko-FSstart",
			"Valgfrit ledsætningskomma",
			"I flerordsudtryk, der indleder en uddybning eller forklaring og består af en adverbiel ellipse (med udeladt verbum) og en efterfølgende konjunktion, kan der stå et ekstra, valgfrit ledsætningskomma foran konjunktionen. Det egentlige, obligatoriske hovedkomma står til venstre for hele udtrykket og er ikke et ledsætningskomma, men et uddybnings- eller slut-komma.<br>\n<br>\n<i>Sie sprangen ins eiskalte Wasser, <b>und das(,) obwohl</b> es schneite. (Erläuterung)</i><br>\n<br>\n<i>Wenn ich mich einmische, <b>dann nur(,) weil</b> ich keinen anderen Ausweg sehe. (Nachsatz-Ellipsis)</i><br>\n<br>\n<i>Der Abend verlief zufriedenstellend, <b>wenn auch nicht ganz(,) wie</b> wir es erwartet hatten. (konzessiver/einräumender Zusatz)</i><br>\n<br>\nOgså foran spørgeord, der erstatter en hel ledsætning, kan der stå et valgfrit tydelighedskomma:<br>\n<br>\n<i>Die Pandemie wird enden, es fragt sich nur(,) wann.</i>",
			""
		],
		"%ko-FSstart": [
			"%ko-FSstart",
			"Valgfrit ledsætningskomma",
			"I flerordsudtryk, der indleder en uddybning eller forklaring og består af en adverbiel ellipse (med udeladt verbum) og en efterfølgende konjunktion, kan der stå et ekstra, valgfrit ledsætningskomma foran konjunktionen. Det egentlige, obligatoriske hovedkomma står til venstre for hele udtrykket og er ikke et ledsætningskomma, men et uddybnings- eller slut-komma.<br>\n<br>\n<i>Sie sprangen ins eiskalte Wasser, <b>und das(,) obwohl</b> es schneite. (Erläuterung)</i><br>\n<br>\n<i>Wenn ich mich einmische, <b>dann nur(,) weil</b> ich keinen anderen Ausweg sehe. (Nachsatz-Ellipsis)</i><br>\n<br>\n<i>Der Abend verlief zufriedenstellend, <b>wenn auch nicht ganz(,) wie</b> wir es erwartet hatten. (konzessiver/einräumender Zusatz)</i><br>\n<br>\nOgså foran spørgeord, der erstatter en hel ledsætning, kan der stå et valgfrit tydelighedskomma:<br>\n<br>\n<i>Die Pandemie wird enden, es fragt sich nur(,) wann.</i>",
			""
		],
		"%ok-ASstart": [
			"%ok-ASstart",
			"Komma ved ufuldstændig ledsætning",
			"Ufuldstændige ledsætninger, der mangler et verbum og kun består af en konjunktion og et andet sætningsled, behandles i princippet som andre ledsætninger og afgrænses med komma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nUndtagelse: Hvis en sådan konstruktion relateres til et forudgående attribut (a) eller til det afhængige verbum i et verbalsyntagme (b), bruges der ikke slutkomma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%k-ASstart": [
			"%k-ASstart",
			"Komma ved ufuldstændig ledsætning",
			"Ufuldstændige ledsætninger, der mangler et verbum og kun består af en konjunktion og et andet sætningsled, behandles i princippet som andre ledsætninger og afgrænses med komma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nUndtagelse: Hvis en sådan konstruktion relateres til et forudgående attribut (a) eller til det afhængige verbum i et verbalsyntagme (b), bruges der ikke slutkomma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%ok-ASend": [
			"%ok-ASend",
			"Komma ved ufuldstændig ledsætning",
			"Ufuldstændige ledsætninger, der mangler et verbum og kun består af en konjunktion og et andet sætningsled, behandles i princippet som andre ledsætninger og afgrænses med komma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nUndtagelse: Hvis en sådan konstruktion relateres til et forudgående attribut (a) eller til det afhængige verbum i et verbalsyntagme (b), bruges der ikke slutkomma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%k-ASend": [
			"%k-ASend",
			"Komma ved ufuldstændig ledsætning",
			"Ufuldstændige ledsætninger, der mangler et verbum og kun består af en konjunktion og et andet sætningsled, behandles i princippet som andre ledsætninger og afgrænses med komma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nUndtagelse: Hvis en sådan konstruktion relateres til et forudgående attribut (a) eller til det afhængige verbum i et verbalsyntagme (b), bruges der ikke slutkomma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%nko-ASstart": [
			"%nko-ASstart",
			"Valgfrit komma ved ufyldstændig ledsætning",
			"Hvis en ufuldstændig ledsætning har karakter af en fast vending eller et flerordsudtryk, kan man valgfrit droppe ledsætningskommaet.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%ko-ASstart": [
			"%ko-ASstart",
			"Valgfrit komma ved ufyldstændig ledsætning",
			"Hvis en ufuldstændig ledsætning har karakter af en fast vending eller et flerordsudtryk, kan man valgfrit droppe ledsætningskommaet.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%nko-ASend": [
			"%nko-ASend",
			"Valgfrit komma ved ufyldstændig ledsætning",
			"Hvis en ufuldstændig ledsætning har karakter af en fast vending eller et flerordsudtryk, kan man valgfrit droppe ledsætningskommaet.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%ko-ASend": [
			"%ko-ASend",
			"Valgfrit komma ved ufyldstændig ledsætning",
			"Hvis en ufuldstændig ledsætning har karakter af en fast vending eller et flerordsudtryk, kan man valgfrit droppe ledsætningskommaet.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%nok-ASend": [
			"%nok-ASend",
			"Forkert slutkomma ved ufuldstændig ledsætning",
			"Ved ufuldstændige ledsætninger, der lægger sig til et forudgående attribut (a) eller til det afhængige verbum i et verbalsyntagme (b), bruges der ikke slutkomma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges[,] Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			"E171"
		],
		"%ok-inf": [
			"%ok-inf",
			"Obligatorisk infinitiv-komma",
			"Infinitiver, der ikke er del af en hjælpeverbumskonstruktion, markeres normalt med partiklen &quot;zu&quot;. Kommer der andre afhængige led til, dvs. når infinitiven danner et syntagme med ét eller flere andre sætningsled, taler man på tysk om en &quot;udvidet&quot; infinitiv eller en infinitv-gruppe. På mange måder minder et sådant infinitiv-syntagme om en ledsætning og kunne med rette kaldes en infinitiv-sætning. Derfor er det også logisk, at den kan afgrænses med start- og slut-komma på samme måde som en ledsætning.<br>\n<br>\nEt sådant infinitiv-komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(1) Infinitiv-gruppen indledes med en trigger-konjunktion <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) En udvidet infinitiv-gruppe lægger sig til et substantiv (i sjældne tilfælde et adjektiv).<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) En udvidet infinitiv-gruppe lægger sig til en pladsholder i den overordnede sætning <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nI (1) er kommaet obligatorisk, selv ved ikke-udvidede infinitiver (dvs. uden andre led en &quot;zu&quot;). I (2) und (3) er kommaet valgfrit ved sådanne &quot;nøgne&quot; infinitiver.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (valgfrit kommapar, enten 0 eller 2 kommaer)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nI sjældne tilfælde kan placeringen af et infinitiv-komma afgøre sætningens mening:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können. (an etwas verdienen)</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%k-inf": [
			"%k-inf",
			"Obligatorisk infinitiv-komma",
			"Infinitiver, der ikke er del af en hjælpeverbumskonstruktion, markeres normalt med partiklen &quot;zu&quot;. Kommer der andre afhængige led til, dvs. når infinitiven danner et syntagme med ét eller flere andre sætningsled, taler man på tysk om en &quot;udvidet&quot; infinitiv eller en infinitv-gruppe. På mange måder minder et sådant infinitiv-syntagme om en ledsætning og kunne med rette kaldes en infinitiv-sætning. Derfor er det også logisk, at den kan afgrænses med start- og slut-komma på samme måde som en ledsætning.<br>\n<br>\nEt sådant infinitiv-komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(1) Infinitiv-gruppen indledes med en trigger-konjunktion <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) En udvidet infinitiv-gruppe lægger sig til et substantiv (i sjældne tilfælde et adjektiv).<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) En udvidet infinitiv-gruppe lægger sig til en pladsholder i den overordnede sætning <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nI (1) er kommaet obligatorisk, selv ved ikke-udvidede infinitiver (dvs. uden andre led en &quot;zu&quot;). I (2) und (3) er kommaet valgfrit ved sådanne &quot;nøgne&quot; infinitiver.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (valgfrit kommapar, enten 0 eller 2 kommaer)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nI sjældne tilfælde kan placeringen af et infinitiv-komma afgøre sætningens mening:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können. (an etwas verdienen)</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%ok-inf-end": [
			"%ok-inf-end",
			"Obligatorisk infinitiv-komma",
			"Infinitiver, der ikke er del af en hjælpeverbumskonstruktion, markeres normalt med partiklen &quot;zu&quot;. Kommer der andre afhængige led til, dvs. når infinitiven danner et syntagme med ét eller flere andre sætningsled, taler man på tysk om en &quot;udvidet&quot; infinitiv eller en infinitv-gruppe. På mange måder minder et sådant infinitiv-syntagme om en ledsætning og kunne med rette kaldes en infinitiv-sætning. Derfor er det også logisk, at den kan afgrænses med start- og slut-komma på samme måde som en ledsætning.<br>\n<br>\nEt sådant infinitiv-komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(1) Infinitiv-gruppen indledes med en trigger-konjunktion <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) En udvidet infinitiv-gruppe lægger sig til et substantiv (i sjældne tilfælde et adjektiv).<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) En udvidet infinitiv-gruppe lægger sig til en pladsholder i den overordnede sætning <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nI (1) er kommaet obligatorisk, selv ved ikke-udvidede infinitiver (dvs. uden andre led en &quot;zu&quot;). I (2) und (3) er kommaet valgfrit ved sådanne &quot;nøgne&quot; infinitiver.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (valgfrit kommapar, enten 0 eller 2 kommaer)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nI sjældne tilfælde kan placeringen af et infinitiv-komma afgøre sætningens mening:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können. (an etwas verdienen)</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%k-inf-end": [
			"%k-inf-end",
			"Obligatorisk infinitiv-komma",
			"Infinitiver, der ikke er del af en hjælpeverbumskonstruktion, markeres normalt med partiklen &quot;zu&quot;. Kommer der andre afhængige led til, dvs. når infinitiven danner et syntagme med ét eller flere andre sætningsled, taler man på tysk om en &quot;udvidet&quot; infinitiv eller en infinitv-gruppe. På mange måder minder et sådant infinitiv-syntagme om en ledsætning og kunne med rette kaldes en infinitiv-sætning. Derfor er det også logisk, at den kan afgrænses med start- og slut-komma på samme måde som en ledsætning.<br>\n<br>\nEt sådant infinitiv-komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(1) Infinitiv-gruppen indledes med en trigger-konjunktion <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) En udvidet infinitiv-gruppe lægger sig til et substantiv (i sjældne tilfælde et adjektiv).<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) En udvidet infinitiv-gruppe lægger sig til en pladsholder i den overordnede sætning <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nI (1) er kommaet obligatorisk, selv ved ikke-udvidede infinitiver (dvs. uden andre led en &quot;zu&quot;). I (2) und (3) er kommaet valgfrit ved sådanne &quot;nøgne&quot; infinitiver.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (valgfrit kommapar, enten 0 eller 2 kommaer)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nI sjældne tilfælde kan placeringen af et infinitiv-komma afgøre sætningens mening:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können. (an etwas verdienen)</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%nko-inf": [
			"%nko-inf",
			"Valgfrit infinitiv-komma",
			"Ved infinitiv-grupper med &quot;zu&quot;, der udgør et led i en overordnet sætning og lægger sig til verbet i denne sætning, er infinitiv-kommaet valgfrit, medmindre infinitiven har en trigger-konjunktion <i>(anstatt, ohne, um)</i> eller er udvidet og har en pladsholder i hovedsætningen <i>(es, das, daran)</i><i>.</i><br>\n<br>\nSåledes er der valgfrit komma, når infititiven udfylder rollen af et subjekt eller objekt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nVed &quot;nøgne&quot;, ikke-udvidede infinitiver som i sidste eksempel, er tendensen at droppe kommaet helt. Jo længre og jo mere kompliceret infinitiv-gruppen er, desto mere udbredt er brugen af det valgfrie komma.<br>\n<br>\nBemærk: En infinitiv, der lægger sig til et substantiv (fx <i>Idee, Vorschlag)</i><i></i> er led i et substantivsyntagme, og ikke en overordnet sætning<i>.</i><i></i> Her er kommaet obligatorisk for udvidede infinitiver.<br>\n<br>\nI sjældne tilfælde kan et ellers valgfrit infinitiv-komma alligevel blive påkrævet, fordi sætningen ellers ville være flertydig:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nVed infinitiver, der afhænger af et substantiv eller som har en pladsholder i den overordnede sætning, er kommaet valgfrit, hvis infinitiven ikke er udvidet, dvs. ikke styrer andre ord en &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDet valgfrie infinitiv-komma spiller en særlig rolle efter verber, der uden egentlig betydningsforskel kan bruges både som fuldverbum og som støtte-/hjælpeverbum (fx<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hvis man her udelader infinitiv-kommaet, svækker det verbernes selvstændige funktion i sætningen og lader dem fremstå som modificerende ledsagere (støtteverber) af infinitiven.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nDet taler for et komma, hvis støtteverbet selv er ledsaget af et hjælpeverbum (a), eller hvis det styrer et adverbial eller et objekt før starten af infinitivgruppen (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kan der stå et valgfrit komma, hvis disse er efterfulgt af en infinitv-gruppe. Dette komma er muligt på trods af, at der allerede står et uddybningskomma til venstre. Forklaringen er, at disse udtryk ikke er adverbier, men en slags minisætninger med et verbalt element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%ko-inf": [
			"%ko-inf",
			"Valgfrit infinitiv-komma",
			"Ved infinitiv-grupper med &quot;zu&quot;, der udgør et led i en overordnet sætning og lægger sig til verbet i denne sætning, er infinitiv-kommaet valgfrit, medmindre infinitiven har en trigger-konjunktion <i>(anstatt, ohne, um)</i> eller er udvidet og har en pladsholder i hovedsætningen <i>(es, das, daran)</i><i>.</i><br>\n<br>\nSåledes er der valgfrit komma, når infititiven udfylder rollen af et subjekt eller objekt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nVed &quot;nøgne&quot;, ikke-udvidede infinitiver som i sidste eksempel, er tendensen at droppe kommaet helt. Jo længre og jo mere kompliceret infinitiv-gruppen er, desto mere udbredt er brugen af det valgfrie komma.<br>\n<br>\nBemærk: En infinitiv, der lægger sig til et substantiv (fx <i>Idee, Vorschlag)</i><i></i> er led i et substantivsyntagme, og ikke en overordnet sætning<i>.</i><i></i> Her er kommaet obligatorisk for udvidede infinitiver.<br>\n<br>\nI sjældne tilfælde kan et ellers valgfrit infinitiv-komma alligevel blive påkrævet, fordi sætningen ellers ville være flertydig:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nVed infinitiver, der afhænger af et substantiv eller som har en pladsholder i den overordnede sætning, er kommaet valgfrit, hvis infinitiven ikke er udvidet, dvs. ikke styrer andre ord en &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDet valgfrie infinitiv-komma spiller en særlig rolle efter verber, der uden egentlig betydningsforskel kan bruges både som fuldverbum og som støtte-/hjælpeverbum (fx<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hvis man her udelader infinitiv-kommaet, svækker det verbernes selvstændige funktion i sætningen og lader dem fremstå som modificerende ledsagere (støtteverber) af infinitiven.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nDet taler for et komma, hvis støtteverbet selv er ledsaget af et hjælpeverbum (a), eller hvis det styrer et adverbial eller et objekt før starten af infinitivgruppen (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kan der stå et valgfrit komma, hvis disse er efterfulgt af en infinitv-gruppe. Dette komma er muligt på trods af, at der allerede står et uddybningskomma til venstre. Forklaringen er, at disse udtryk ikke er adverbier, men en slags minisætninger med et verbalt element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%nko-inf-end": [
			"%nko-inf-end",
			"Valgfrit infinitiv-komma",
			"Ved infinitiv-grupper med &quot;zu&quot;, der udgør et led i en overordnet sætning og lægger sig til verbet i denne sætning, er infinitiv-kommaet valgfrit, medmindre infinitiven har en trigger-konjunktion <i>(anstatt, ohne, um)</i> eller er udvidet og har en pladsholder i hovedsætningen <i>(es, das, daran)</i><i>.</i><br>\n<br>\nSåledes er der valgfrit komma, når infititiven udfylder rollen af et subjekt eller objekt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nVed &quot;nøgne&quot;, ikke-udvidede infinitiver som i sidste eksempel, er tendensen at droppe kommaet helt. Jo længre og jo mere kompliceret infinitiv-gruppen er, desto mere udbredt er brugen af det valgfrie komma.<br>\n<br>\nBemærk: En infinitiv, der lægger sig til et substantiv (fx <i>Idee, Vorschlag)</i><i></i> er led i et substantivsyntagme, og ikke en overordnet sætning<i>.</i><i></i> Her er kommaet obligatorisk for udvidede infinitiver.<br>\n<br>\nI sjældne tilfælde kan et ellers valgfrit infinitiv-komma alligevel blive påkrævet, fordi sætningen ellers ville være flertydig:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nVed infinitiver, der afhænger af et substantiv eller som har en pladsholder i den overordnede sætning, er kommaet valgfrit, hvis infinitiven ikke er udvidet, dvs. ikke styrer andre ord en &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDet valgfrie infinitiv-komma spiller en særlig rolle efter verber, der uden egentlig betydningsforskel kan bruges både som fuldverbum og som støtte-/hjælpeverbum (fx<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hvis man her udelader infinitiv-kommaet, svækker det verbernes selvstændige funktion i sætningen og lader dem fremstå som modificerende ledsagere (støtteverber) af infinitiven.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nDet taler for et komma, hvis støtteverbet selv er ledsaget af et hjælpeverbum (a), eller hvis det styrer et adverbial eller et objekt før starten af infinitivgruppen (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kan der stå et valgfrit komma, hvis disse er efterfulgt af en infinitv-gruppe. Dette komma er muligt på trods af, at der allerede står et uddybningskomma til venstre. Forklaringen er, at disse udtryk ikke er adverbier, men en slags minisætninger med et verbalt element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%ko-inf-end": [
			"%ko-inf-end",
			"Valgfrit infinitiv-komma",
			"Ved infinitiv-grupper med &quot;zu&quot;, der udgør et led i en overordnet sætning og lægger sig til verbet i denne sætning, er infinitiv-kommaet valgfrit, medmindre infinitiven har en trigger-konjunktion <i>(anstatt, ohne, um)</i> eller er udvidet og har en pladsholder i hovedsætningen <i>(es, das, daran)</i><i>.</i><br>\n<br>\nSåledes er der valgfrit komma, når infititiven udfylder rollen af et subjekt eller objekt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nVed &quot;nøgne&quot;, ikke-udvidede infinitiver som i sidste eksempel, er tendensen at droppe kommaet helt. Jo længre og jo mere kompliceret infinitiv-gruppen er, desto mere udbredt er brugen af det valgfrie komma.<br>\n<br>\nBemærk: En infinitiv, der lægger sig til et substantiv (fx <i>Idee, Vorschlag)</i><i></i> er led i et substantivsyntagme, og ikke en overordnet sætning<i>.</i><i></i> Her er kommaet obligatorisk for udvidede infinitiver.<br>\n<br>\nI sjældne tilfælde kan et ellers valgfrit infinitiv-komma alligevel blive påkrævet, fordi sætningen ellers ville være flertydig:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nVed infinitiver, der afhænger af et substantiv eller som har en pladsholder i den overordnede sætning, er kommaet valgfrit, hvis infinitiven ikke er udvidet, dvs. ikke styrer andre ord en &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDet valgfrie infinitiv-komma spiller en særlig rolle efter verber, der uden egentlig betydningsforskel kan bruges både som fuldverbum og som støtte-/hjælpeverbum (fx<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hvis man her udelader infinitiv-kommaet, svækker det verbernes selvstændige funktion i sætningen og lader dem fremstå som modificerende ledsagere (støtteverber) af infinitiven.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nDet taler for et komma, hvis støtteverbet selv er ledsaget af et hjælpeverbum (a), eller hvis det styrer et adverbial eller et objekt før starten af infinitivgruppen (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kan der stå et valgfrit komma, hvis disse er efterfulgt af en infinitv-gruppe. Dette komma er muligt på trods af, at der allerede står et uddybningskomma til venstre. Forklaringen er, at disse udtryk ikke er adverbier, men en slags minisætninger med et verbalt element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%nok-inf": [
			"%nok-inf",
			"Forkert infinitiv-komma",
			"En infinitiv, der hører til et hjælpeverbum<i> (können, wollen, müssen etc.)</i>, danner sammen med dette en fast verbalenhed og tillader ikke komma. En sådan infinitiv får heller ikke &quot;zu&quot;. Men selv infinitiver med &quot;zu&quot; får ikke komma hvis de er del af en støtteverbumskonstruktion med <i>sein, haben, pflegen, scheinen</i><i>, brauchen, es gibt</i><i>:</i><br>\n<br>\n<i>Markus scheint[,] hungrig zu sein.</i><br>\n<br>\n<i>Im Sommer pflegten sie[,] im Garten zu frühstücken.</i><br>\n<br>\n<i>Der Weg war[,] leicht zu finden.</i><br>\n<br>\n<i>Ich habe[,] dazu nichts hinzuzufügen.</i><br>\n<br>\nNogle verber bruges som støtteverber i en betydning (uden komma), og som fuldverber i en anden (med komma): <i>drohen&quot;</i> (som støtteverbum: = laufen), <i>versprechen</i> (den Anschein haben), <i>vermögen/verstehen/wissen</i> (= können), <i>suchen</i> (= versuchen).<br>\n<br>\n<i>Die Brücke drohte[,] einzustürzen und den Zug mit sich in die Tiefe zu reißen.</i><br>\n<br>\n<i>Die Geiselnehmer drohten(,) den Bus in die Luft zu sprengen.</i><br>\n<br>\nUndtagelse: Hvis de sidstnævnte støtteverber styrer deres eget adverbial (omsagnsled) uafhængigt af infinitiv-gruppen, kan der stå et valgfrit komma:<br>\n<br>\n<i>Sie versteht wirklich(,) mich auf die Palme zu bringen.</i><br>\n<br>\nInfinitivgrupper, der via en akkusativ (genstandsled) styres af et sanseverbum<i> (sehen, hören, fühlen)</i> eller af <i>&quot;lassen&quot;</i> eller <i>&quot;machen&quot;</i><i>,</i> får hverken &quot;zu&quot; eller et komma. Akkusativen fungerer her som infinitivens semantiske subjekt (grundled) og danner med denne en sekundær sætningsenhed (på engelsk: small clause), der ikke må brydes af et komma.<br>\n<br>\n<i>Er sah das Schiff[,] am Horizont verschwinden.</i><br>\n<br>\nVed infinitiv-grupper, der udfylder subjektpladsen i en overordnet sætning, er det udelukkende partiklen &quot;zu&quot;, der afgør, om der må stå komma eller ej.<br>\n<br>\n<i>Ein guter Staatsbürger sein[,] bedeutet[,] wählen gehen und Steuern zahlen. (Kein &quot;zu&quot;, kein Komma)</i><br>\n<br>\n<i>Ein guter Staatsbürger zu sein(,) bedeutet(,) wählen zu gehen und Steuern zu zahlen. (Komma wahlfrei)</i><br>\n<br>\n<i></i><br>\n<br>\nPå trods af &quot;zu&quot; må der ikke bruges komma, hvis infinitiv-gruppen som helhed er omgivet af en sætningsparentes (1), hvis den omgiver den overordnede sætning (2) eller hvis de to overlapper (3).<br>\n<br>\n<i>(1a) Wir wollen genau dieses Problem[,] zu vermeiden versuchen.</i><br>\n<br>\n<i>(1b) Wir wollen[,] genau dieses Problem zu vermeiden[,] versuchen.</i><br>\n<br>\n<i>(1c) Ich glaube, dass er genau dieses Problem[,] zu vermeiden versucht.</i><br>\n<br>\n(2) <i>Genau dieses Problem wollen wir versuchen[,] zu vermeiden.</i><br>\n<br>\n(3) <i>Genau dieses Problem wollen wir[,] zu vermeiden versuchen.</i>",
			"D125<br>\n<br>\nE107<br>\n<br>\nE111"
		],
		"%nok-inf-end": [
			"%nok-inf-end",
			"Forkert infinitiv-komma",
			"En infinitiv, der hører til et hjælpeverbum<i> (können, wollen, müssen etc.)</i>, danner sammen med dette en fast verbalenhed og tillader ikke komma. En sådan infinitiv får heller ikke &quot;zu&quot;. Men selv infinitiver med &quot;zu&quot; får ikke komma hvis de er del af en støtteverbumskonstruktion med <i>sein, haben, pflegen, scheinen</i><i>, brauchen, es gibt</i><i>:</i><br>\n<br>\n<i>Markus scheint[,] hungrig zu sein.</i><br>\n<br>\n<i>Im Sommer pflegten sie[,] im Garten zu frühstücken.</i><br>\n<br>\n<i>Der Weg war[,] leicht zu finden.</i><br>\n<br>\n<i>Ich habe[,] dazu nichts hinzuzufügen.</i><br>\n<br>\nNogle verber bruges som støtteverber i en betydning (uden komma), og som fuldverber i en anden (med komma): <i>drohen&quot;</i> (som støtteverbum: = laufen), <i>versprechen</i> (den Anschein haben), <i>vermögen/verstehen/wissen</i> (= können), <i>suchen</i> (= versuchen).<br>\n<br>\n<i>Die Brücke drohte[,] einzustürzen und den Zug mit sich in die Tiefe zu reißen.</i><br>\n<br>\n<i>Die Geiselnehmer drohten(,) den Bus in die Luft zu sprengen.</i><br>\n<br>\nUndtagelse: Hvis de sidstnævnte støtteverber styrer deres eget adverbial (omsagnsled) uafhængigt af infinitiv-gruppen, kan der stå et valgfrit komma:<br>\n<br>\n<i>Sie versteht wirklich(,) mich auf die Palme zu bringen.</i><br>\n<br>\nInfinitivgrupper, der via en akkusativ (genstandsled) styres af et sanseverbum<i> (sehen, hören, fühlen)</i> eller af <i>&quot;lassen&quot;</i> eller <i>&quot;machen&quot;</i><i>,</i> får hverken &quot;zu&quot; eller et komma. Akkusativen fungerer her som infinitivens semantiske subjekt (grundled) og danner med denne en sekundær sætningsenhed (på engelsk: small clause), der ikke må brydes af et komma.<br>\n<br>\n<i>Er sah das Schiff[,] am Horizont verschwinden.</i><br>\n<br>\nVed infinitiv-grupper, der udfylder subjektpladsen i en overordnet sætning, er det udelukkende partiklen &quot;zu&quot;, der afgør, om der må stå komma eller ej.<br>\n<br>\n<i>Ein guter Staatsbürger sein[,] bedeutet[,] wählen gehen und Steuern zahlen. (Kein &quot;zu&quot;, kein Komma)</i><br>\n<br>\n<i>Ein guter Staatsbürger zu sein(,) bedeutet(,) wählen zu gehen und Steuern zu zahlen. (Komma wahlfrei)</i><br>\n<br>\n<i></i><br>\n<br>\nPå trods af &quot;zu&quot; må der ikke bruges komma, hvis infinitiv-gruppen som helhed er omgivet af en sætningsparentes (1), hvis den omgiver den overordnede sætning (2) eller hvis de to overlapper (3).<br>\n<br>\n<i>(1a) Wir wollen genau dieses Problem[,] zu vermeiden versuchen.</i><br>\n<br>\n<i>(1b) Wir wollen[,] genau dieses Problem zu vermeiden[,] versuchen.</i><br>\n<br>\n<i>(1c) Ich glaube, dass er genau dieses Problem[,] zu vermeiden versucht.</i><br>\n<br>\n(2) <i>Genau dieses Problem wollen wir versuchen[,] zu vermeiden.</i><br>\n<br>\n(3) <i>Genau dieses Problem wollen wir[,] zu vermeiden versuchen.</i>",
			"D125<br>\n<br>\nE107<br>\n<br>\nE111"
		],
		"%k-list": [
			"%k-list",
			"Opremsningskomma (liste)",
			"Et opremsningskomma adskiller elementer i en liste (sidestilling) af tre eller flere elementer - ord, ordgrupper eller sætninger. Det sidste element i opremsningen får normalt et &quot;und&quot; eller &quot;oder&quot; i stedet for kommaet. Tysk tillader ikke kombinationen af opremsningskomma + und/oder (det såkaldte Oxford-komma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nOpremsningskommaet bruges også ved en opremsning af subjekt-løse prædikater:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nOpremsningskommaet bruges stilistisk ved forstærkende ordgentagelser.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%ok-list": [
			"%ok-list",
			"Opremsningskomma (liste)",
			"Et opremsningskomma adskiller elementer i en liste (sidestilling) af tre eller flere elementer - ord, ordgrupper eller sætninger. Det sidste element i opremsningen får normalt et &quot;und&quot; eller &quot;oder&quot; i stedet for kommaet. Tysk tillader ikke kombinationen af opremsningskomma + und/oder (det såkaldte Oxford-komma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nOpremsningskommaet bruges også ved en opremsning af subjekt-løse prædikater:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nOpremsningskommaet bruges stilistisk ved forstærkende ordgentagelser.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%ko-list": [
			"%ko-list",
			"Opremsningskomma (liste)",
			"Et opremsningskomma adskiller elementer i en liste (sidestilling) af tre eller flere elementer - ord, ordgrupper eller sætninger. Det sidste element i opremsningen får normalt et &quot;und&quot; eller &quot;oder&quot; i stedet for kommaet. Tysk tillader ikke kombinationen af opremsningskomma + und/oder (det såkaldte Oxford-komma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nOpremsningskommaet bruges også ved en opremsning af subjekt-løse prædikater:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nOpremsningskommaet bruges stilistisk ved forstærkende ordgentagelser.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%nko-list": [
			"%nko-list",
			"Opremsningskomma (liste)",
			"Et opremsningskomma adskiller elementer i en liste (sidestilling) af tre eller flere elementer - ord, ordgrupper eller sætninger. Det sidste element i opremsningen får normalt et &quot;und&quot; eller &quot;oder&quot; i stedet for kommaet. Tysk tillader ikke kombinationen af opremsningskomma + und/oder (det såkaldte Oxford-komma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nOpremsningskommaet bruges også ved en opremsning af subjekt-løse prædikater:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nOpremsningskommaet bruges stilistisk ved forstærkende ordgentagelser.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%k-list-ADJ": [
			"%k-list-ADJ",
			"Adjektiv-komma",
			"Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et &quot;und&quot; og kan bytte plads uden større meningsforskel.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektiver (tillægsord) adskilles altid med komma, hvis der foran det andet adjektiv står en nærmere bestemmelse.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%ok-list-ADJ": [
			"%ok-list-ADJ",
			"Adjektiv-komma",
			"Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et &quot;und&quot; og kan bytte plads uden større meningsforskel.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektiver (tillægsord) adskilles altid med komma, hvis der foran det andet adjektiv står en nærmere bestemmelse.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%nko-list-ADJ": [
			"%nko-list-ADJ",
			"Adjektiv-komma",
			"Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et &quot;und&quot; og kan bytte plads uden større meningsforskel.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektiver (tillægsord) adskilles altid med komma, hvis der foran det andet adjektiv står en nærmere bestemmelse.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%ko-list-ADJ": [
			"%ko-list-ADJ",
			"Adjektiv-komma",
			"Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et &quot;und&quot; og kan bytte plads uden større meningsforskel.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektiver (tillægsord) adskilles altid med komma, hvis der foran det andet adjektiv står en nærmere bestemmelse.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%nok-list-ADJ": [
			"%nok-list-ADJ",
			"Forkert adjektiv-komma",
			"Der bruges ikke komma mellem adjektiver (tillægsord), hvis disse ikke er &quot;jævnbyrdige&quot;, dvs. hvis der ikke kan stå &quot;und&quot; imellem dem og hvis rækkefølgen er fast.<br>\n<br>\n<i>Er fuhr ein teures[,] italienisches Auto (*ein italienisches teures Auto)</i><br>\n<br>\nI særdeleshed må der ikke bruges komma, hvis det andet adjektiv danner et fast udtryk med et efterfølgende substantiv (navneord). Dette ses især ved adjektiver, der betegner farver <i>(rot, grün, gelb)</i>, materialier <i>(steinern, hölzern)</i>, oprindelse/tilhørighed<i> (italienisch, hessisch, städtisch</i><i>)</i><i></i> eller kategorier<i> (schulisch, psysikalisch, fleischfressend)</i><i>.</i><br>\n<br>\nTalord, artikler (kendeord) og - i de fleste tilfælde - attributive pronominer (stedord) er ikke &quot;jævnbyrdige&quot; med adjektiver. Ordene har en fast rækkefølge og der kan ikke bruges &quot;und&quot; eller komma mellem disse og et adjektiv.<br>\n<br>\n<i>In der Einfahrt standen vier[,] teure Sportwagen.</i><br>\n<br>\n<i>Er fand viele/mehrere/einige[,] kleine Spinnen in der Badewanne.</i><br>\n<br>\nUndtagelse: I sjældne tilfælde kan de attributive pronominer <i>&quot;andere&quot;, &quot;solche&quot;, &quot;viele&quot;</i> und<i> &quot;wenige&quot;</i>, alt efter kontekst, alligevel kræve et komma.<br>\n<br>\n<i>Sie sprachen von anderen, glücklicheren Zeiten. (Kommaet kan her udskiftes med &quot;und&quot; - der er ikke tale om et nyt sæt lykkelige tider, der er forskellige fra de nuværende lykkelige tider)</i>",
			"D101<br>\n<br>\nE50<br>\n<br>\nE51<br>\n<br>\nE53"
		],
		"%k-list-unsafe": [
			"%k-list-unsafe",
			"Usikkert opremsningskomma",
			"Det er muligt, at der mangler et opremsningskomma her, men det kunne også bare være et sammensat substantiv (navneord). Programmet kunne ikke afgøre det.",
			""
		],
		"%k-main": [
			"%k-main",
			"Hovedsætningskomma",
			"Hovedsætninger (samt ledsætninger på samme niveau) adskilles enten af en sideordnende konjunktion (&quot;und&quot;, &quot;oder&quot;) eller et opremsningskomma. Hvis sætningerne er forbundet med en modsætnings-konjunktion <i>(&quot;aber&quot;</i><i>, &quot;jedoch&quot;</i><i>)</i> kommer kommaet oveni, til venstre for konjunktionen.<br>\n<br>\n<i>Du hast Recht, ich schicke eine neue Version.</i><br>\n<br>\n<i>Du hast völlig Recht[,] und ich bitte um Verzeihung.</i><br>\n<br>\n<i>Du hast zwar Recht, aber das ist jetzt nicht mehr zu ändern.</i><br>\n<br>\n<i>Wann ist die Pandemie zu Ende, wann kan man wieder verreisen?</i>",
			"D102"
		],
		"%ok-main": [
			"%ok-main",
			"Hovedsætningskomma",
			"Hovedsætninger (samt ledsætninger på samme niveau) adskilles enten af en sideordnende konjunktion (&quot;und&quot;, &quot;oder&quot;) eller et opremsningskomma. Hvis sætningerne er forbundet med en modsætnings-konjunktion <i>(&quot;aber&quot;</i><i>, &quot;jedoch&quot;</i><i>)</i> kommer kommaet oveni, til venstre for konjunktionen.<br>\n<br>\n<i>Du hast Recht, ich schicke eine neue Version.</i><br>\n<br>\n<i>Du hast völlig Recht[,] und ich bitte um Verzeihung.</i><br>\n<br>\n<i>Du hast zwar Recht, aber das ist jetzt nicht mehr zu ändern.</i><br>\n<br>\n<i>Wann ist die Pandemie zu Ende, wann kan man wieder verreisen?</i>",
			"D102"
		],
		"%nok-main": [
			"%nok-main",
			"Forkert hovedsætningskomma",
			"Som udgangspunkt står der ikke komma mellem to hovedsætninger, der er forbundet med en sideordnende, ikke-kontrastiv konjunktion <i>(und, oder,</i> <i>weder</i><i> ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nUndtagelse: Hvis den anden hovedsætning starteer med en ledsætning eller et infinitiv-syntagme, må der undtagelsesvis godt bruges et (vagfrit) komma:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i>",
			"D104<br>\n<br>\nE126"
		],
		"%nko-main": [
			"%nko-main",
			"Valgfrit hovedsætningskomma",
			"Som udgangspunkt står der ikke komma mellem to hovedsætninger, der er forbundet med en sideordnende, ikke-kontrastiv konjunktion <i>(und, oder,</i> <i>weder</i><i> ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nUndtagelse: Hvis den anden hovedsætning starteer med en ledsætning eller et infinitiv-syntagme, må der undtagelsesvis godt bruges et (vagfrit) komma:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i><br>\n<br>\nHerudover er det tilladt at bruge komma mellem hovedsætninger for at tydeliggøre, at en eventuel ledsætning (før 1. eller efter 2. hovedsætning) kun relaterer til den ene af de to sætninger.<br>\n<br>\n<i>Weil niemand den Witz zu kennen schien, erzählte ich ihn(,) und die Stimmung wurde schlagartig besser. (At vittigheden er ukendt [LS] er ikke årsagen for stemningsskiftet [HS2], men kun anledningen til at den fortælles [HS1])</i><br>\n<br>\nMan må også godt bruge et tydelighedskomma mellem hovedsætninger, hvis subjektet af den 2. sætning kunne misforstås som (sideordnet) objekt af 1. sætning (såkaldt &quot;garden path&quot;-problem).<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (kritik også af aktionæerne?)</i>",
			""
		],
		"%ko-main": [
			"%ko-main",
			"Valgfrit hovedsætningskomma",
			"Som udgangspunkt står der ikke komma mellem to hovedsætninger, der er forbundet med en sideordnende, ikke-kontrastiv konjunktion <i>(und, oder,</i> <i>weder</i><i> ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nUndtagelse: Hvis den anden hovedsætning starteer med en ledsætning eller et infinitiv-syntagme, må der undtagelsesvis godt bruges et (vagfrit) komma:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i><br>\n<br>\nHerudover er det tilladt at bruge komma mellem hovedsætninger for at tydeliggøre, at en eventuel ledsætning (før 1. eller efter 2. hovedsætning) kun relaterer til den ene af de to sætninger.<br>\n<br>\n<i>Weil niemand den Witz zu kennen schien, erzählte ich ihn(,) und die Stimmung wurde schlagartig besser. (At vittigheden er ukendt [LS] er ikke årsagen for stemningsskiftet [HS2], men kun anledningen til at den fortælles [HS1])</i><br>\n<br>\nMan må også godt bruge et tydelighedskomma mellem hovedsætninger, hvis subjektet af den 2. sætning kunne misforstås som (sideordnet) objekt af 1. sætning (såkaldt &quot;garden path&quot;-problem).<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (kritik også af aktionæerne?)</i>",
			""
		],
		"%k-paren": [
			"%k-paren",
			"Parentetisk komma, start",
			"Indskud og efterstillinger, der bryder sætningsstrømmen, burde markeres med komma. Der kan være tale om både ord, ordgrupper eller (ofte forkortede) sætninger. Ofter er der tale om efterstillede adjektiver (tillægsord), adjektivgrupper eller participiumsgrupper (tillægsmåde). Sidstnævnte får i forvejen komma efter reglerne om participiumskomma.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den gelben, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i><br>\n<br>\n<i>Der finnische Marathonläufer, zäh und ausdauernd, holte auf.</i><br>\n<br>\n<i>Die Läufer, angefeuert von der Menschenmenge am Straßenrand, gaben ihr Letztes. (participiumskomma)</i><br>\n<br>\nSelv hovedsætninger kan forekomme som indskud og får i så fald parentetisk komma.<br>\n<br>\n<i>Das ist, da bin ich mir sicher, streng verboten.</i><br>\n<br>\nVed indskud, der <i>ikke</i> afbryder sætningsstrømmen, især adverbier og adverbielle præpositions- og participiumsforbindelser, er det parentetiske komma valgfrit. Det er mest normalt at udelade kommaet, men det kan komme på tale for at markere ordgruppen som en separat tilføjelse og for at udløse et ophold i læsestrømmen. Hvis kommaet bruges, skal det bruges parvist.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117<br>\n<br>\nE68"
		],
		"%ok-paren": [
			"%ok-paren",
			"Parentetisk komma, start",
			"Indskud og efterstillinger, der bryder sætningsstrømmen, burde markeres med komma. Der kan være tale om både ord, ordgrupper eller (ofte forkortede) sætninger. Ofter er der tale om efterstillede adjektiver (tillægsord), adjektivgrupper eller participiumsgrupper (tillægsmåde). Sidstnævnte får i forvejen komma efter reglerne om participiumskomma.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den gelben, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i><br>\n<br>\n<i>Der finnische Marathonläufer, zäh und ausdauernd, holte auf.</i><br>\n<br>\n<i>Die Läufer, angefeuert von der Menschenmenge am Straßenrand, gaben ihr Letztes. (participiumskomma)</i><br>\n<br>\nSelv hovedsætninger kan forekomme som indskud og får i så fald parentetisk komma.<br>\n<br>\n<i>Das ist, da bin ich mir sicher, streng verboten.</i><br>\n<br>\nVed indskud, der <i>ikke</i> afbryder sætningsstrømmen, især adverbier og adverbielle præpositions- og participiumsforbindelser, er det parentetiske komma valgfrit. Det er mest normalt at udelade kommaet, men det kan komme på tale for at markere ordgruppen som en separat tilføjelse og for at udløse et ophold i læsestrømmen. Hvis kommaet bruges, skal det bruges parvist.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117<br>\n<br>\nE68"
		],
		"%ko-paren": [
			"%ko-paren",
			"Valgfrit parentetisk komma, start",
			"Ved indskud, der <i>ikke</i> afbryder sætningsstrømmen, især adverbier og adverbielle præpositions- og participiumsforbindelser, er det parentetiske komma valgfrit. Det er mest normalt at udelade kommaet, men det kan komme på tale for at markere ordgruppen som en separat tilføjelse og for at udløse et ophold i læsestrømmen. Hvis kommaet bruges, skal det bruges parvist.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i><br>\n<br>\n<i>Der Präsident(,) oder gegebenenfalls sein Nachfolger(,) wird den Vertrag im Juni unterzeichnen.</i><br>\n<br>\nMen: <i>Die Regierung, und der Finanzminister erst recht, muss das schon lange gewusst haben.</i> (Dette indskud kan ikke stå som normal 'und'-sideordning i sætningsstrømmen, fordi der er et overlap mellem de potentielle konjunkter: finansministeren er del af regeringen)<br>\n<br>\nDet parentetiske komma er også valgfrit ved uddybende indskud med &quot;wie&quot;:<br>\n<br>\n<i>Erneuerbare Energiequellen(,) wie Wind und Sonne(,) sollen nach wie vor bezuschusst werden.</i>",
			""
		],
		"%nko-paren": [
			"%nko-paren",
			"Valgfrit parentetisk komma, start",
			"Ved indskud, der <i>ikke</i> afbryder sætningsstrømmen, især adverbier og adverbielle præpositions- og participiumsforbindelser, er det parentetiske komma valgfrit. Det er mest normalt at udelade kommaet, men det kan komme på tale for at markere ordgruppen som en separat tilføjelse og for at udløse et ophold i læsestrømmen. Hvis kommaet bruges, skal det bruges parvist.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i><br>\n<br>\n<i>Der Präsident(,) oder gegebenenfalls sein Nachfolger(,) wird den Vertrag im Juni unterzeichnen.</i><br>\n<br>\nMen: <i>Die Regierung, und der Finanzminister erst recht, muss das schon lange gewusst haben.</i> (Dette indskud kan ikke stå som normal 'und'-sideordning i sætningsstrømmen, fordi der er et overlap mellem de potentielle konjunkter: finansministeren er del af regeringen)<br>\n<br>\nDet parentetiske komma er også valgfrit ved uddybende indskud med &quot;wie&quot;:<br>\n<br>\n<i>Erneuerbare Energiequellen(,) wie Wind und Sonne(,) sollen nach wie vor bezuschusst werden.</i>",
			""
		],
		"%k-paren-end": [
			"%k-paren-end",
			"Parentetisk komma, slut",
			"Indskud, der afbryder sætningsstrømmen, bør afgrænses med både start- og slutkomma. Der kan være tale om både ord, ordgrupper og sætninger.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den</i> <i>roten</i><i>, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117"
		],
		"%ok-paren-end": [
			"%ok-paren-end",
			"Parentetisk komma, slut",
			"Indskud, der afbryder sætningsstrømmen, bør afgrænses med både start- og slutkomma. Der kan være tale om både ord, ordgrupper og sætninger.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den</i> <i>roten</i><i>, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117"
		],
		"%ko-paren-end%nko-paren-end": [
			"%ko-paren-end%nko-paren-end",
			"Valgfrit parentetisk komma, slut",
			"Ved indskud, der <i>ikke</i> afbryder sætningsstrømmen, især adverbier og adverbielle præpositions- og participiumsforbindelser, er det parentetiske komma valgfrit. Hvis kommaet bruges, skal det bruges parvist.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			""
		],
		"%k-parenth": [
			"%k-parenth",
			"Ikke komma før parentes",
			"Der må ikke være komma før hverken en venstre eller en højre parentes. Hvis sætningen uden parentes ville have et komma på dette sted, skal det placeres efter hele parentesen.<br>\n<br>\n<i>Das ist ganz klar ein B-Film[,] (oder schlimmer) der hier nicht auf die Leinwand gehört. (forkert)</i><br>\n<br>\n<i>Das ist ganz klar ein B-Film (oder schlimmer), der hier nicht auf die Leinwand gehört. (korrekt)</i>",
			""
		],
		"%nok-parenth": [
			"%nok-parenth",
			"Ikke komma før parentes",
			"Der må ikke være komma før hverken en venstre eller en højre parentes. Hvis sætningen uden parentes ville have et komma på dette sted, skal det placeres efter hele parentesen.<br>\n<br>\n<i>Das ist ganz klar ein B-Film[,] (oder schlimmer) der hier nicht auf die Leinwand gehört. (forkert)</i><br>\n<br>\n<i>Das ist ganz klar ein B-Film (oder schlimmer), der hier nicht auf die Leinwand gehört. (korrekt)</i>",
			""
		],
		"%ok-pcp": [
			"%ok-pcp",
			"Participiums-komma",
			"I stil med infinitiver kræver også participier og participiums-lignende adjektiver ofte et komma, hvis de er udvidet med et eller flere afhængige led, dvs. når der er tale om participiumg-grupper (participiums-sætninger).<br>\n<br>\nDette komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(a) den overordnede sætning indeholder en pladsholder <i>(so, auf diese Weise)</i><br>\n<br>\n(b) participiums-gruppen bryder sætningsstrømmen, især som indskud efter et substantiv (navneord) eller pronomen (stedord)<br>\n<br>\n(c) participiums-gruppen står som et efterstillet tillæg, fx en uddybning eller forklaring, efter sætningens normale afslutning.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (pladsholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (efterstillet prædikativ-tillæg)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (indskud efter substantiv)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (efterstillet mådestillæg)</i><br>\n<br>\nI alle andre tilfælde er participiums-kommaet valgfrit, men det kan benyttes til at strukturere sætningen (1) eller til at afgrænse og fremhæve et tillæg i starten af sætningen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nøgne&quot;, ikke-udvidede participier får kun komma, hvis de bryder sætningsstrømmen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%k-pcp": [
			"%k-pcp",
			"Participiums-komma",
			"I stil med infinitiver kræver også participier og participiums-lignende adjektiver ofte et komma, hvis de er udvidet med et eller flere afhængige led, dvs. når der er tale om participiumg-grupper (participiums-sætninger).<br>\n<br>\nDette komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(a) den overordnede sætning indeholder en pladsholder <i>(so, auf diese Weise)</i><br>\n<br>\n(b) participiums-gruppen bryder sætningsstrømmen, især som indskud efter et substantiv (navneord) eller pronomen (stedord)<br>\n<br>\n(c) participiums-gruppen står som et efterstillet tillæg, fx en uddybning eller forklaring, efter sætningens normale afslutning.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (pladsholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (efterstillet prædikativ-tillæg)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (indskud efter substantiv)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (efterstillet mådestillæg)</i><br>\n<br>\nI alle andre tilfælde er participiums-kommaet valgfrit, men det kan benyttes til at strukturere sætningen (1) eller til at afgrænse og fremhæve et tillæg i starten af sætningen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nøgne&quot;, ikke-udvidede participier får kun komma, hvis de bryder sætningsstrømmen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%ok-pcp-end": [
			"%ok-pcp-end",
			"Participiums-komma",
			"I stil med infinitiver kræver også participier og participiums-lignende adjektiver ofte et komma, hvis de er udvidet med et eller flere afhængige led, dvs. når der er tale om participiumg-grupper (participiums-sætninger).<br>\n<br>\nDette komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(a) den overordnede sætning indeholder en pladsholder <i>(so, auf diese Weise)</i><br>\n<br>\n(b) participiums-gruppen bryder sætningsstrømmen, især som indskud efter et substantiv (navneord) eller pronomen (stedord)<br>\n<br>\n(c) participiums-gruppen står som et efterstillet tillæg, fx en uddybning eller forklaring, efter sætningens normale afslutning.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (pladsholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (efterstillet prædikativ-tillæg)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (indskud efter substantiv)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (efterstillet mådestillæg)</i><br>\n<br>\nI alle andre tilfælde er participiums-kommaet valgfrit, men det kan benyttes til at strukturere sætningen (1) eller til at afgrænse og fremhæve et tillæg i starten af sætningen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nøgne&quot;, ikke-udvidede participier får kun komma, hvis de bryder sætningsstrømmen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%k-pcp-end": [
			"%k-pcp-end",
			"Participiums-komma",
			"I stil med infinitiver kræver også participier og participiums-lignende adjektiver ofte et komma, hvis de er udvidet med et eller flere afhængige led, dvs. når der er tale om participiumg-grupper (participiums-sætninger).<br>\n<br>\nDette komma er obligatorisk i følgende tilfælde:<br>\n<br>\n(a) den overordnede sætning indeholder en pladsholder <i>(so, auf diese Weise)</i><br>\n<br>\n(b) participiums-gruppen bryder sætningsstrømmen, især som indskud efter et substantiv (navneord) eller pronomen (stedord)<br>\n<br>\n(c) participiums-gruppen står som et efterstillet tillæg, fx en uddybning eller forklaring, efter sætningens normale afslutning.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (pladsholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (efterstillet prædikativ-tillæg)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (indskud efter substantiv)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (efterstillet mådestillæg)</i><br>\n<br>\nI alle andre tilfælde er participiums-kommaet valgfrit, men det kan benyttes til at strukturere sætningen (1) eller til at afgrænse og fremhæve et tillæg i starten af sætningen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nøgne&quot;, ikke-udvidede participier får kun komma, hvis de bryder sætningsstrømmen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%nko-pcp": [
			"%nko-pcp",
			"Valgfrit participiums-komma",
			"Udvidede participiums- og adjektiv-grupper kan afgrænses af et valgfrit komma, selv uden pladsholder i den overordnede sætning. I steded for at være motiveret af et ekstisterende/syntaktisk brud i sætningsstrømmen, kan et sådan komma selv fremtvinge et ophold hos læseren.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> og '<i>will heißen'</i> kan der stå et valgfrit komma, hvis udtrykkene indleder en participiums-guppe. Dette gælder, selvom der allerede står et (uddybnings-)komma til venstre for<i> 'd.h.'</i> osv., fordi disse udtryk ikke er adverbier, men snarere minisætninger med et verbalt indhold (fx <i>heißt</i> i <i>d.h.</i>).<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nKun når sætningsstrømmen har et eksisterende/syntaktisk brud, ved tillæg efter sætningsafslutningen og efter pladsholderord er participiums-kommaet obligatorisk:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%ko-pcp": [
			"%ko-pcp",
			"Valgfrit participiums-komma",
			"Udvidede participiums- og adjektiv-grupper kan afgrænses af et valgfrit komma, selv uden pladsholder i den overordnede sætning. I steded for at være motiveret af et ekstisterende/syntaktisk brud i sætningsstrømmen, kan et sådan komma selv fremtvinge et ophold hos læseren.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> og '<i>will heißen'</i> kan der stå et valgfrit komma, hvis udtrykkene indleder en participiums-guppe. Dette gælder, selvom der allerede står et (uddybnings-)komma til venstre for<i> 'd.h.'</i> osv., fordi disse udtryk ikke er adverbier, men snarere minisætninger med et verbalt indhold (fx <i>heißt</i> i <i>d.h.</i>).<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nKun når sætningsstrømmen har et eksisterende/syntaktisk brud, ved tillæg efter sætningsafslutningen og efter pladsholderord er participiums-kommaet obligatorisk:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%nko-pcp-end": [
			"%nko-pcp-end",
			"Valgfrit participiums-komma",
			"Udvidede participiums- og adjektiv-grupper kan afgrænses af et valgfrit komma, selv uden pladsholder i den overordnede sætning. I steded for at være motiveret af et ekstisterende/syntaktisk brud i sætningsstrømmen, kan et sådan komma selv fremtvinge et ophold hos læseren.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> og '<i>will heißen'</i> kan der stå et valgfrit komma, hvis udtrykkene indleder en participiums-guppe. Dette gælder, selvom der allerede står et (uddybnings-)komma til venstre for<i> 'd.h.'</i> osv., fordi disse udtryk ikke er adverbier, men snarere minisætninger med et verbalt indhold (fx <i>heißt</i> i <i>d.h.</i>).<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nKun når sætningsstrømmen har et eksisterende/syntaktisk brud, ved tillæg efter sætningsafslutningen og efter pladsholderord er participiums-kommaet obligatorisk:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%ko-pcp-end": [
			"%ko-pcp-end",
			"Valgfrit participiums-komma",
			"Udvidede participiums- og adjektiv-grupper kan afgrænses af et valgfrit komma, selv uden pladsholder i den overordnede sætning. I steded for at være motiveret af et ekstisterende/syntaktisk brud i sætningsstrømmen, kan et sådan komma selv fremtvinge et ophold hos læseren.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nOgså efter uddybningsindledningerne '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> og '<i>will heißen'</i> kan der stå et valgfrit komma, hvis udtrykkene indleder en participiums-guppe. Dette gælder, selvom der allerede står et (uddybnings-)komma til venstre for<i> 'd.h.'</i> osv., fordi disse udtryk ikke er adverbier, men snarere minisætninger med et verbalt indhold (fx <i>heißt</i> i <i>d.h.</i>).<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nKun når sætningsstrømmen har et eksisterende/syntaktisk brud, ved tillæg efter sætningsafslutningen og efter pladsholderord er participiums-kommaet obligatorisk:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%nok-pcp": [
			"%nok-pcp",
			"Forkert participiums-komma",
			"Ved faste vendinger står der ikke participiums-komma:<br>\n<br>\n<i>Er hat[,] genau genommen[,] nichts falsch gemacht.</i><br>\n<br>\n<i>Davon abgesehen[,] schmeckte das Essen vorzüglich.</i><br>\n<br>\nDer bruges heller ikke komm i ordsprog med en participiums-gruppe som subjekt (grundled) eller objekt (genstandsled):<br>\n<br>\n<i>Gut gedacht[,] ist halb gemacht.</i><br>\n<br>\n<i>Besser spät gefreut[,] als früh bereut.</i>",
			"E116"
		],
		"%nok-pcp-end": [
			"%nok-pcp-end",
			"Forkert participiums-komma",
			"Ved faste vendinger står der ikke participiums-komma:<br>\n<br>\n<i>Er hat[,] genau genommen[,] nichts falsch gemacht.</i><br>\n<br>\n<i>Davon abgesehen[,] schmeckte das Essen vorzüglich.</i><br>\n<br>\nDer bruges heller ikke komm i ordsprog med en participiums-gruppe som subjekt (grundled) eller objekt (genstandsled):<br>\n<br>\n<i>Gut gedacht[,] ist halb gemacht.</i><br>\n<br>\n<i>Besser spät gefreut[,] als früh bereut.</i>",
			"E116"
		],
		"%k-quote": [
			"%k-quote",
			"Citatkomma, start",
			"Citater adskilles med komma fra den anførende sætning (&quot;er sagte ...&quot;, &quot;... sagte sie&quot; osv.). Ved direkte tale sættes citate is gåseøjne (»...«, „...“, evt. fransk «...» eller engelsk &quot;...&quot;). Kommaerne skal her stå uden for anførselstegnene. Start-kommaet erstatter et kolon, slut-kommaet et eventuelt punktum sidst i citatet.<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (direkte tale)</i><br>\n<br>\n<i>Er sagte, das sei ihm egal. (indirekte tale)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.&quot;</i>",
			""
		],
		"%ok-quote": [
			"%ok-quote",
			"Citatkomma, start",
			"Citater adskilles med komma fra den anførende sætning (&quot;er sagte ...&quot;, &quot;... sagte sie&quot; osv.). Ved direkte tale sættes citate is gåseøjne (»...«, „...“, evt. fransk «...» eller engelsk &quot;...&quot;). Kommaerne skal her stå uden for anførselstegnene. Start-kommaet erstatter et kolon, slut-kommaet et eventuelt punktum sidst i citatet.<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (direkte tale)</i><br>\n<br>\n<i>Er sagte, das sei ihm egal. (indirekte tale)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.&quot;</i>",
			""
		],
		"%k-quote-end": [
			"%k-quote-end",
			"Citatkomma, slut",
			"Hvis et citat står foran den anførende sætning, står der et slutkomma efter citatet. Ved direkte tale står dette komma efter anførselstegnet - ikke foran det som i amerikansk engelsk. Et eventuelt sætningspunktum sidst i citatet bortfalder, mens anden afsluttende tegnsætning bevares ('!', '?' oder ':').<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (direkte tale)</i><br>\n<br>\n<i>Das sei ihm egal, sagte er. (indirekte tale)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.</i><br>\n<br>\n<i>&quot;Wie geht es deiner Tante?&quot;, fragte sie.</i>",
			""
		],
		"%ok-quote-end": [
			"%ok-quote-end",
			"Citatkomma, slut",
			"Hvis et citat står foran den anførende sætning, står der et slutkomma efter citatet. Ved direkte tale står dette komma efter anførselstegnet - ikke foran det som i amerikansk engelsk. Et eventuelt sætningspunktum sidst i citatet bortfalder, mens anden afsluttende tegnsætning bevares ('!', '?' oder ':').<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (direkte tale)</i><br>\n<br>\n<i>Das sei ihm egal, sagte er. (indirekte tale)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.</i><br>\n<br>\n<i>&quot;Wie geht es deiner Tante?&quot;, fragte sie.</i>",
			""
		],
		"%nok-quote": [
			"%nok-quote",
			"Forkert citatkomma",
			"Hvis et (kort) citat fungerer som egentlig sætningsled i den overordnede sætningen, står der undtagelsesvis hverken komma eller kolon.<br>\n<br>\n<i>&quot;Wir schaffen das&quot;[,] war sein einziger Kommentar. (subjekt)</i><br>\n<br>\n<i>Sie hauchte[,] &quot;ja&quot; und unterschrieb die MeToo-Erklärung. (objekt)</i><br>\n<br>\nOgså når et (del)citat er flettet ind i den anførende sætning således, at det udgør en naturlig del af dennes ordstrøm, bortfalder citatkommaet:<br>\n<br>\n<i>Nach dem Fest räumte Martina ein, dass Wodka doch[,] &quot;marginal mehr Alkohol als Bier&quot; enthält.</i>",
			""
		],
		"%nok-quote-end": [
			"%nok-quote-end",
			"Forkert citatkomma, slut",
			"Hvis et (kort) citat fungerer som egentlig sætningsled i den overordnede sætningen, står der undtagelsesvis hverken komma eller kolon.<br>\n<br>\n<i>&quot;Wir schaffen das&quot;[,] war sein einziger Kommentar. (subjekt)</i><br>\n<br>\n<i>Sie hauchte[,] &quot;ja&quot; und unterschrieb die MeToo-Erklärung. (objekt)</i><br>\n<br>\nEt citat-slutkomma må ikke - som i amerikansk engelsk - stå foran det afsluttende anførselstegn, men skal altid placeres til højre for dette.<br>\n<br>\n<i>&quot;Das ist mir egal[,]&quot; sagte er. (falsch)</i><br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (richtig)</i>",
			""
		],
		"%k": [
			"%k",
			"Uspecificeret komma",
			"Kommatroll har identificeret et syntaktisk brud på dette sted og foreslår et komma, men er ikke sikker. Det mest sandsynlige er et opremsningskomma.<br>\n<br>\n<i>Kauf ihr doch einen Schal ? warme Handschuhe oder etwas ähnliches</i>",
			""
		],
		"%nok-soft": [
			"%nok-soft",
			"Muligvis overflødigt komma",
			"Programmet kunne ikke finde en regel for et komma dette sted, men det kan stadigvæk godt være, at det giver mening at bruge komma her, fx som pausekomma eller pga. flertydighed. Tjek dit valg af komma!",
			""
		],
		"%k-stop": [
			"%k-stop",
			"Ny periode (sætningsgrænse)",
			"Kommatroll mener at have identificeret et brud i sætningsstrømmen på dette sted. Der synes at foreligge to separate udsagn, og det ville muligvis være bedre at starte en ny sætning. Som adskillelsestegn anbefales punktum eller evt. semikolon, snarere end et komma.",
			""
		],
		"%nok-SV": [
			"%nok-SV",
			"Ikke komma mellem subjekt (grundled) og verbum (udsagnsord)",
			"Subjekt (grundled) og verbum (udsagnsord) må aldrig adskilles af et komma, sålænge subjektet består af nominale elementer og ikke udgøres af en ledsætning eller en infinitiv-gruppe. Dette er en syntaktisk regel og gælder, selv hvis der gøres ophold i læsestrømmen på dette sted.<br>\n<br>\n<i>Dieses Gemälde[,] kann viel Geld wert sein.</i><br>\n<br>\nBemærk: Det er selvfølgelig stadigvæk muligt at have et inskud med et kommapar - dvs. to (!) kommas - mellem subjekt og verbum, fx en apposition (navnetillæg) eller en relativsætning med subjektet som referenceord:<br>\n<br>\n<i>Das Gemälde, das wir auf dem Speicher gefunden haben, scheint viel Geld wert zu sein.</i><br>\n<br>\nKomplekse subjekter med sideordning eller participial-subjekter er derimod stadigvær bare subjekter og skal ikke have komme foran et efterfølgende verbum.<br>\n<br>\n<i>Das Ölgemälde und die Kreidezeichnungen[,] sind vom selben Künstler.</i><br>\n<br>\n<i>Gut gekaut[,] ist halb verdaut.</i><br>\n<br>\n<i>Doppelt genäht[,] hält besser.</i>",
			""
		],
		"%k-voc": [
			"%k-voc",
			"Tiltalekomma (vokativ)",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet, titlen osv. af den person, der tiltales.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%ko-voc": [
			"%ko-voc",
			"Valgfrit tiltalekomma (vokativ)",
			"Mellem et udråb (interjektion) og en tiltale (vokativ) må der valgfrit sættes et komma:<br>\n<br>\n<i>Hallo(,) Christine, kannst du mir mit den Pferden helfen?</i><br>\n<br>\n<i>Oh(,) Julia, wenn Romeo das wüsste ...</i>",
			"D132"
		],
		"%ok-voc": [
			"%ok-voc",
			"Tiltalekomma (vokativ)",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet, titlen osv. af den person, der tiltales.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%k-voc-end": [
			"%k-voc-end",
			"Tiltalekomma (vokativ)",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet, titlen osv. af den person, der tiltales.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%ok-voc-end": [
			"%ok-voc-end",
			"Tiltalekomma (vokativ)",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet, titlen osv. af den person, der tiltales.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%nko-voc": [
			"%nko-voc",
			"Valgfrit tiltalekomma (vokativ)",
			"Mellem et udråb (interjektion) og en tiltale (vokativ) må der valgfrit sættes et komma:<br>\n<br>\n<i>Hallo(,) Christine, kannst du mir mit den Pferden helfen?</i><br>\n<br>\n<i>Oh(,) Julia, wenn Romeo das wüsste ...</i>",
			"D132"
		],
		"%number-format": [
			"%number-format",
			"Separatortegn i taludtryk",
			"I tyske taludtryk bruges punktum og komma modsat til hvad der gælder for engelsk. Således bruges komma til decimaler, og punktum til at afgrænse grupper på tre cifre, dvs. tusinder, millioner etc.<br>\n<br>\n<i>123.000.609</i><br>\n<br>\n<i>0,74</i><br>\n<br>\n<i>13,19237</i><br>\n<br>\n<i>32,50 EUR</i><br>\n<br>\nUndtagelse: Møntenheden schweizerfranc får punktum som decimalseparator:<br>\n<br>\n<i>17.60 Franken</i><br>\n<br>\nVed klokkesletangivelser bruges såvel punktum som kolon, men aldrig komma.<br>\n<br>\n<i>Die Rakete startete um 21.17.45 (21:17:45) Uhr.</i><br>\n<br>\n<i>Der Zug kommt um 16.45 (16:45) Uhr an.</i><br>\n<br>\nHvis et taludtryk indeholder et kolon som forholdstegn, bør dette omgives af mellemrumstegn.<br>\n<br>\n<i>Seine Überlebenschancen standen 50 : 50.</i><br>\n<br>\n<i>Der Maßstab war 1 : 200.000</i><br>\n<br>\n<i>Die deutsche Elf gewann das Finale mit 7 : 1.</i>",
			"E36<br>\n<br>\nE37"
		],
		"%upper": [
			"%upper",
			"Majuskel",
			"Der staves med stort efter et kolon, hvis der følger direkte tale eller en selbstændig sætning, herunder også infinitiv-sætninger. Enkeltord eller ordgrupper, der ikke er sætninger, staves med småt (medmindre selvfølgelig der er tale om substantiver eller navne)<br>\n<br>\n<i>Sie fragte: &quot;Wer hat den Kuchen gebacken?&quot;</i><br>\n<br>\n<i>Haltbarkeit: Angebrochene Packungen bitte im Kühlschrank aufbewahren.</i><br>\n<br>\n<i>Aber: Haltbarkeit: höchstens 5 Tage im Kühlschrank (4 Grad)</i><br>\n<br>\nHvis der foran et kolon står et tilslutningsord, der fx indleder en forklaring, kan kolonet betragtes som et stilistisk alternativ til et komma, og der kan valgfrit bruges majuskel eller minuskel i starten af en efterfølgende sætning.<br>\n<br>\n<i>Bei Internetkäufen har der Kunde volles Rückgaberecht, sprich: Er/er kann den Kauf ohne Begründung stornieren und die Ware zurücksenden.</i>",
			""
		],
		"%lower": [
			"%lower",
			"Minuskel",
			"Der staves med småt efter et kolon, hvis det er efterfulgt af enkeltord eller ordgrupper, der ikke er sætninger (medmindre selvfølgelig der er tale om substantiver eller navne). Modsat fortsættes der med stort, hvis der følger en selvstændig sætning eller direkte tale.<br>\n<br>\n<i>Haltbarkeit: höchstens 5 Tage im Kühlschrank (4 Grad)</i><br>\n<br>\n<i>Emil hatte alle seine Freunde in die Höhle geholt: den Teddy, die Tigerente und die ausgestopfte Möwe.</i><br>\n<br>\nMen: <i>Er dachte:</i> <i>Das hätte ich auch einfacher haben können.</i><br>\n<br>\nHvis der foran et kolon står et tilslutningsord, der fx indleder en forklaring, kan kolonet betragtes som et stilistisk alternativ til et komma, og der kan valgfrit bruges majuskel eller minuskel i starten af en efterfølgende sætning.<br>\n<br>\n<i>Bei Internetkäufen har der Kunde volles Rückgaberecht, sprich: Er/er kann den Kauf ohne Begründung stornieren und die Ware zurücksenden.</i>",
			""
		],
		"%comp-": [
			"%comp-",
			"Samskrivning",
			"Dette ord skrives sammen.<br>\n<br>\n<i>Die Menge klatschte, als die ersten Athleten vorbeiliefen. (richtig)</i><br>\n<br>\n<i>Die Menge klatschte, als die ersten Athleten vorbei liefen. (falsch)</i>",
			""
		],
		"%colon2k": [
			"%colon2k",
			"Komma i stedet for kolon",
			"Der skal bruges komma i stedet for kolon, hvis der følger en uddybende forklaring - altså før <i>d.h. (das heißt), d.i. (das ist), z.B. (zum Beispiel), genauer gesagt, nämlich usw.</i><br>\n<br>\n<i>Ich habe nur einen Reisewunsch, nämlich einen Vulkan zu besteigen. (richtig)</i><br>\n<br>\n<i>Ich habe nur einen Reisewunsch: nämlich einen Vulkan zu besteigen.</i> (falsch)",
			""
		],
		"%colon": [
			"%colon",
			"Kolon i stedet for komma",
			"Mellem en anførende sætning og efterfølgende direkte tale bruges der kolon, ikke komma:<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal</i><i>.</i><i>&quot;</i> (richtig)<br>\n<br>\n<i>Er sagte, &quot;Das ist mir egal.&quot; (falsch)</i>",
			""
		],
		"%colon-after": [
			"%colon-after",
			"Manglende kolon",
			"Mellem en aførende sætning og efterfølgende direkte tale skal der stå et kolon:<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (richtig)</i><br>\n<br>\n<i>Er sagte &quot;Das ist mir egal.&quot; (falsch)</i>",
			""
		],
		"%questmark": [
			"%questmark",
			"Spørgsmålstegn",
			"Der bruges spørgsmålstegn ikke bare efter direkte spørgsmål, men også efter høflighedsspørgsmål, rhetoriske spørgsmål og udsagn eller ordgrupper med spørgsmålsintonation.<br>\n<br>\n<i>Wo hast du letzte Nacht geschlafen?</i><br>\n<br>\n<i>Mit oder ohne Zucker?</i><br>\n<br>\n<i>Du hast wen eingeladen?</i><br>\n<br>\n<i>Und du glaubst, das klappt?</i><br>\n<br>\n<i>Ob er wohl kommt?</i><br>\n<br>\n<i>Kann ich bitte den Pfeffer haben?</i><br>\n<br>\n<i>Du hast eine Sanitäterausbildung, nicht wahr?</i><br>\n<br>\nDerimod står der ikke spørgsmålstegn efter indirekte spørgesætninger.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%questmark-after": [
			"%questmark-after",
			"Spørgsmålstegn",
			"Der bruges spørgsmålstegn ikke bare efter direkte spørgsmål, men også efter høflighedsspørgsmål, rhetoriske spørgsmål og udsagn eller ordgrupper med spørgsmålsintonation.<br>\n<br>\n<i>Wo hast du letzte Nacht geschlafen?</i><br>\n<br>\n<i>Mit oder ohne Zucker?</i><br>\n<br>\n<i>Du hast wen eingeladen?</i><br>\n<br>\n<i>Und du glaubst, das klappt?</i><br>\n<br>\n<i>Ob er wohl kommt?</i><br>\n<br>\n<i>Kann ich bitte den Pfeffer haben?</i><br>\n<br>\n<i>Du hast eine Sanitäterausbildung, nicht wahr?</i><br>\n<br>\nDerimod står der ikke spørgsmålstegn efter indirekte spørgesætninger.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%exclam": [
			"%exclam",
			"Udråbstegn",
			"Der bruges udråbstegn efter udråb, henstillinger, opfordringer, ønsker og ordrer - lige meget om der er tale om fuldstændige sætninger, ordgrupper eller enkeltord såsom imperativer (bydemåde) og interjektioner (udråbsord).<br>\n<br>\n<i>Lass das Baby schlafen!</i><br>\n<br>\n<i>Raus!</i><br>\n<br>\n<i>Jetzt abonnieren!</i><br>\n<br>\n<i>Hätte ich das bloß vorher gewusst!</i><br>\n<br>\n<i>Guten Rutsch!</i><br>\n<br>\n<i>Igitt, wie scheußlich!</i><br>\n<br>\nNach abhängigen Aufforderungssätzen steht dagegen nur ein Satzpunkt:<br>\n<br>\n<i>Sie sagt, du sollst die Spülmaschine ausräumen.</i>",
			""
		],
		"%exclam-after": [
			"%exclam-after",
			"Udråbstegn",
			"Der bruges udråbstegn efter udråb, henstillinger, opfordringer, ønsker og ordrer - lige meget om der er tale om fuldstændige sætninger, ordgrupper eller enkeltord såsom imperativer (bydemåde) og interjektioner (udråbsord).<br>\n<br>\n<i>Lass das Baby schlafen!</i><br>\n<br>\n<i>Raus!</i><br>\n<br>\n<i>Jetzt abonnieren!</i><br>\n<br>\n<i>Hätte ich das bloß vorher gewusst!</i><br>\n<br>\n<i>Guten Rutsch!</i><br>\n<br>\n<i>Igitt, wie scheußlich!</i><br>\n<br>\nNach abhängigen Aufforderungssätzen steht dagegen nur ein Satzpunkt:<br>\n<br>\n<i>Sie sagt, du sollst die Spülmaschine ausräumen.</i>",
			""
		],
		"%fullstop": [
			"%fullstop",
			"Sætningspunktum",
			"Der bruges punktum, eller evt. semikolon, efter afsluttede hovedsætninger, ikke mindst hvis sætningen indeholder et finit (bøjet) verbum.<br>\n<br>\nOgså efter indirekte spørgesætninger står der punktum, ikke spørgsmålstegn.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%fullstop-after": [
			"%fullstop-after",
			"Sætningspunktum",
			"Der bruges punktum, eller evt. semikolon, efter afsluttede hovedsætninger, ikke mindst hvis sætningen indeholder et finit (bøjet) verbum.<br>\n<br>\nOgså efter indirekte spørgesætninger står der punktum, ikke spørgsmålstegn.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%no-fullstop": [
			"%no-fullstop",
			"Forkert sætningspunktum",
			"Når en sætning slutter med titlen på et værk i gåseøjne, står punktummet efter, ikke foran, det afsluttende anførselsestegn.<br>\n<br>\n<i>Der Titel des Buches lautet &quot;Komma oder Chaos - ein Leitfaden&quot;. (richtig)</i><br>\n<br>\n<i>Der Titel des Buche</i><i>s</i><i> lautet &quot;Komma oder Chaos - ein Leitfaden.&quot;</i> (falsch)",
			""
		],
		"%no-quote-left": [
			"%no-quote-left",
			"Forkert venstre anførselstegn",
			"En bøjet artikel (kendeord) i starten af en værktitel adskille fra denne ved at det indledende anførselstegn står efter artiklen, ikke foran.<br>\n<br>\n<i>I</i><i>ch habe gerade zum zweiten Mal den &quot;Mann ohne Eigenschaften&quot; gelesen.</i> (korrekt)<br>\n<br>\n<i>Ich habe gerade zum zweiten Mal &quot;den Mann ohne Eigenschaften&quot; gelesen.</i> (forkert)",
			""
		],
		"%quote-left": [
			"%quote-left",
			"Venstre anførselstegn",
			"En bøjet artikel (kendeord) i starten af en værktitel adskille fra denne ved at det indledende anførselstegn står efter artiklen, ikke foran.<br>\n<br>\n<i>Ich habe gerade zum zweiten Mal den &quot;Mann ohne Eigenschaften&quot; gelesen. (richtig)</i><br>\n<br>\n<i>Ich habe gerade zum zweiten Mal &quot;den Mann ohne Eigenschaften&quot; gelesen.</i> (falsch)",
			""
		],
		"%spell-local": [
			"%spell-local",
			"Skrivefejl, fx slåfejl eller lydfejl",
			"Kommatroll kender ikke ordet, men har et korrekturforslag. Denne bygger på en udskiftningstabel, der dækker over hyppige bogstavforvekslinger eller -udeladelser. Kriterier er bl.a. tastaturplacering <i>(v/b, b/n, s/l)</i> eller fonetiske (lydlige) egenskaber <i>(i/ie/ih)</i>.",
			""
		],
		"%spell-local-1": [
			"%spell-local-1",
			"Skrivefejl, ss/ß",
			"Kommatroll mener, at der kunne være en <i>ss/ß-</i>fejl i ordet.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-3": [
			"%spell-local-3",
			"Skrivefejl, ss/ß",
			"Kommatroll mener, at der kunne være en <i>ss/ß-</i>fejl i ordet.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-6": [
			"%spell-local-6",
			"Skrivefejl, ss/ß",
			"Kommatroll mener, at der kunne være en <i>ss/ß-</i>fejl i ordet.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-2": [
			"%spell-local-2",
			"Skrivefejl, umlaut",
			"Kommatroll mener, at der kunne være en umlaut-fejl i ordet.<br>\n<br>\n<i>Naturlich --&gt; natürlich</i>",
			""
		],
		"%spell-local-5": [
			"%spell-local-5",
			"Skrivefejl, dobbeltbogstav",
			"Kommatroll mener, at der kunne være en geminationsfejl i ordet, dvs. en utilsigtet gentagelse af et bogstav, eller - omvendt - et dobbeltbogstav, der er blevet reduceret til et enkeltbogstav.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-7": [
			"%spell-local-7",
			"Skrivefejl, dobbeltbogstav",
			"Kommatroll mener, at der kunne være en geminationsfejl i ordet, dvs. en utilsigtet gentagelse af et bogstav, eller - omvendt - et dobbeltbogstav, der er blevet reduceret til et enkeltbogstav.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-8": [
			"%spell-local-8",
			"Skrivefejl, dobbeltbogstav",
			"Kommatroll mener, at der kunne være en geminationsfejl i ordet, dvs. en utilsigtet gentagelse af et bogstav, eller - omvendt - et dobbeltbogstav, der er blevet reduceret til et enkeltbogstav.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-9": [
			"%spell-local-9",
			"Skrivefejl, dobbeltbogstav",
			"Kommatroll mener, at der kunne være en geminationsfejl i ordet, dvs. en utilsigtet gentagelse af et bogstav, eller - omvendt - et dobbeltbogstav, der er blevet reduceret til et enkeltbogstav.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-a": [
			"%spell-local-a",
			"Skrivefejl, i-forlængelse",
			"Kommatroll mener, at der kunne være en<i> i-</i>forlængelsesfejl i ordet, dvs. et overflødigt - eller manglende - 'e' eller 'h' efter et lang 'i'-vokal.<br>\n<br>\n<i>Maschiene --&gt; Maschine, Maschihne --&gt; Maschine</i><br>\n<br>\n<i>Schine --&gt; Schiene</i>",
			""
		],
		"%spell-local-b": [
			"%spell-local-b",
			"Skrivefejl, forlængelses-h",
			"Kommatroll mener, at der måske mangler et forlængelses-<i>h</i> efter en lang vokal.<br>\n<br>\n<i>Änlich --&gt; ähnlich, versönlich --&gt; versöhnlich</i><br>\n<br>\n<i>Folen --&gt; Fohlen</i>",
			""
		],
		"%spell-local-c": [
			"%spell-local-c",
			"Slåfejl, tastaturfejl",
			"Kommatroll mener, at der kunne være en tastaturfejl i ordet. En mulighed er en forveksling af to bogstaver, der ligger tæt på hinanden på tastaturet eller kan forveksles i 10-finger-systemet (fx <i>v/b, b/n, s/l)</i><i>.</i> En anden mulighed er at en del af en hyppig bogstavkombination er gået tabt pga. for hurtig indtastning. (fx <i>ck/k, tz/z, ch/sch</i>).",
			""
		],
		"%spell-local-d": [
			"%spell-local-d",
			"Opmærksomhedsfejl",
			"Kommatroll mener, at der kunne foreligge en af en række typiske bogstavforvekslinger (1a-b) eller at et lydligt &quot;svagt&quot; bogstav <i>(e,i)</i> er gået tabt på et typisk sted i ordet (2a-b).<br>\n<br>\n<i>(1a) vertäufelt --&gt; verteufelt, Heuserzeile --&gt; Häuserzeile</i><br>\n<br>\n<i>(1b) bedeutenste --&gt; bedeutendste</i><br>\n<br>\n<i>(2a) gkauft --&gt; gekauft</i><br>\n<br>\n<i>(2b) pakistanschen --&gt; pakistanischen</i>",
			""
		],
		"%spell-local-e": [
			"%spell-local-e",
			"Slåfejl, ekstra-bogstav",
			"Kommatroll mener, at ordet måske indeholder en slå- eller opmærksomhedsfejl, hvor et utilsigtet ekstra-bogstav har sneget sig ind.<br>\n<br>\n<i>Beineame --&gt; Beiname</i><br>\n<br>\n<i>Freunding --&gt; Freunding</i><br>\n<br>\n<i>Brötschen --&gt; Brötchen</i><br>\n<br>\n<i>GehSe --&gt; gehe</i>",
			""
		],
		"%spell-local-f": [
			"%spell-local-f",
			"Slåfejl, fordopling",
			"Kommatroll mener, at der i dette ord måske er sket en fordopling af et bogstavpar.<br>\n<br>\n<i>Ahnenenreihe --&gt; Ahnenreihe</i><br>\n<br>\n<i>Digititale --&gt; digitale</i>",
			""
		],
		"%spell-local-z": [
			"%spell-local-z",
			"Slåfejl, bogstavrækkefølge",
			"Kommatroll mener, at der kan være sket et bogstavbytte, hvor to på hinanden følgende bogstaver har byttet plads.<br>\n<br>\n<i>Gegnesatz --&gt; Gegensatz</i><br>\n<br>\n<i>Er turg --&gt; er trug, sie gignen --&gt; sie gingen</i><br>\n<br>\n<i>Tennismeitser --&gt; Tennismeister</i><br>\n<br>\n<i></i>",
			""
		],
		"%spell-endbase": [
			"%spell-endbase",
			"Ordstammefejl",
			"Kommatroll kender ikke ordet, men mener at kunne identificere et suffiks og/eller en bøjningsendelse. Korrekturforslaget bygger på en rettelse af den resterende del af ordet (ordstammen).<br>\n<br>\n<i>Kollergialer -&gt; kollegialer</i>",
			""
		],
		"%spell-first": [
			"%spell-first",
			"Kompositumsfejl, 1. led",
			"Kommatroll kender ikke ordet, men mener at have genkendt anden del af et kompositum (sammensat ord). Korrekturforslaget bygger så på en rettelse af den ukendte, første del.<br>\n<br>\n<i>Pedophilie|verdächtiger -&gt; Pädophilieverdächtiger</i><br>\n<br>\n<i>Pædophlie|verdächtig -&gt; pädophilieverdächtig</i>",
			""
		],
		"%spell-second": [
			"%spell-second",
			"Kompositumsfejl, 2. led",
			"Kommatroll kender ikke ordet, men mener at have genkendt første del af et kompositum (sammensat ord). Korrekturforslaget bygger så på en rettelse af den ukendte, anden del.<br>\n<br>\n<i>Voraussage|mögichkeit -&gt; Voraussagemöglichkeit</i>",
			""
		],
		"%spell-last": [
			"%spell-last",
			"Stavefejl, usikker",
			"Kommatroll kender ikke ordet, men har et korrekturforslag, der bygger på lignende, kendte fejl i ander ord.<br>\n<br>\n<i>Vorgesort -&gt; vorgesorgt</i><br>\n<br>\n<i>Vorshlag -&gt; Vorschlag</i><br>\n<br>\n<i>Ferig -&gt; fertig</i><br>\n<br>\n<i>Entschuldigun -&gt; Entschuldigung</i>",
			""
		],
		"%spell-error": [
			"%spell-error",
			"Stavefejl, sikker",
			"Kommatroll har genkendt ordet som fejlstavet. Et eventuelt korrekturforslag er relativt pålidelig, fordi det bygger på et databaseopslag eller en grammatisk regel.<br>\n<br>\n<i>Nich / nciht -&gt; nicht</i><br>\n<br>\n<i>Zulett -&gt; zuletzt</i>",
			""
		]
	},
	deu: {
		"%k-appo": [
			"%k-appo",
			"Apposition, Startkomma",
			"Eine Apposition (nachgestellter Beisatz) ist ein substantivisches (Rechts-) Attribut, das ein vorangehendes Bestimmungswort näher beschreibt. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, <b>Peter</b>, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein <b>Land</b> mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten <b>Söhne</b> der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nFür gewöhnlich steht die Apposition im gleichen Fall wie das Bezugswort:<br>\n<br>\n<i>Nach der Freilandausstellung, der größten <b>Veranstaltung</b> ihrer Art auf deutschem Boden, kaufte die Stadt zwei der beliebtesten Kunstwerke.</i><br>\n<br>\nJe nach Kontext kann es einen Bedeutungsunterschied zwischen Aufzählungskomma und Appositionskomma geben:<br>\n<br>\n<i>Anne, meine <b>Schwester</b>, und ich (Apposition: Anne = Schwester, 2 Personen)</i><br>\n<br>\n<i>Anne, meine Schwester und ich (Aufzählung: Anne + Schwester, 3 Personen)</i><br>\n<br>\nAuch nachgestellte Vornamen erhalten ein (paariges) Appositionskomma:<br>\n<br>\n<i>Gerber, Heinrich, und Kleinschmidt, Johannes, haben das Examen mit Auszeichnung bestanden.</i><br>\n<br>\nOptionell kan ein (paariges) Appositionskomma für die Zusätzen &quot;geb.&quot;, &quot;verh.&quot; und &quot;verw.&quot; benutzt werden.<br>\n<br>\n<i>Maria Schmidt(,) geb. Krüger</i><br>\n<br>\nEin Appositionskomma steht auch vor Ortsbeisätzen, wenn diese eine andere Ortsangabe oder ein Ereignis näher erläutern.<br>\n<br>\n<i>In der Nikolauskirche, Ludwigshafen</i><br>\n<br>\n<i>Die 19. Bundesgartenschau, Frankfurt Niddatal</i><br>\n<br>\n<i>Memphis, Tennessee</i><br>\n<br>\nBei Adressen ist das Schluss-Komma optionell, je nachdem ob die Adresse als Apposition (Komma) oder Reihung (kein Komma) verstanden wird:<br>\n<br>\n<i>Frau Mahler aus Oldenburg, Goethestraße 32(,) hat einen Leserbrief geschrieben.</i><br>\n<br>\nMehrteilige Literaturangaben werden kommamäßig wie Adressen behandelt, d.h. zwischen den einzelnen Teilen steht ein Komma. Dabei ist auch hier das Schluss-Komma optionell:<br>\n<br>\n<i>Die Rezension ist in &quot;Spektrum der Wissenschaft&quot;, 12/2019, S. 72(,) erschienen.</i>",
			"D109<br>\n<br>\nD115<br>\n<br>\nD116<br>\n<br>\nE61<br>\n<br>\nE64<br>\n<br>\nE70ff<br>\n<br>\nE87<br>\n<br>\nE92"
		],
		"%ok-appo": [
			"%ok-appo",
			"Apposition, Startkomma",
			"Eine Apposition (nachgestellter Beisatz) ist ein substantivisches (Rechts-) Attribut, das ein vorangehendes Bestimmungswort näher beschreibt. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, <b>Peter</b>, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein <b>Land</b> mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten <b>Söhne</b> der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nFür gewöhnlich steht die Apposition im gleichen Fall wie das Bezugswort:<br>\n<br>\n<i>Nach der Freilandausstellung, der größten <b>Veranstaltung</b> ihrer Art auf deutschem Boden, kaufte die Stadt zwei der beliebtesten Kunstwerke.</i><br>\n<br>\nJe nach Kontext kann es einen Bedeutungsunterschied zwischen Aufzählungskomma und Appositionskomma geben:<br>\n<br>\n<i>Anne, meine <b>Schwester</b>, und ich (Apposition: Anne = Schwester, 2 Personen)</i><br>\n<br>\n<i>Anne, meine Schwester und ich (Aufzählung: Anne + Schwester, 3 Personen)</i><br>\n<br>\nAuch nachgestellte Vornamen erhalten ein (paariges) Appositionskomma:<br>\n<br>\n<i>Gerber, Heinrich, und Kleinschmidt, Johannes, haben das Examen mit Auszeichnung bestanden.</i><br>\n<br>\nOptionell kan ein (paariges) Appositionskomma für die Zusätzen &quot;geb.&quot;, &quot;verh.&quot; und &quot;verw.&quot; benutzt werden.<br>\n<br>\n<i>Maria Schmidt(,) geb. Krüger</i><br>\n<br>\nEin Appositionskomma steht auch vor Ortsbeisätzen, wenn diese eine andere Ortsangabe oder ein Ereignis näher erläutern.<br>\n<br>\n<i>In der Nikolauskirche, Ludwigshafen</i><br>\n<br>\n<i>Die 19. Bundesgartenschau, Frankfurt Niddatal</i><br>\n<br>\n<i>Memphis, Tennessee</i><br>\n<br>\nBei Adressen ist das Schluss-Komma optionell, je nachdem ob die Adresse als Apposition (Komma) oder Reihung (kein Komma) verstanden wird:<br>\n<br>\n<i>Frau Mahler aus Oldenburg, Goethestraße 32(,) hat einen Leserbrief geschrieben.</i><br>\n<br>\nMehrteilige Literaturangaben werden kommamäßig wie Adressen behandelt, d.h. zwischen den einzelnen Teilen steht ein Komma. Dabei ist auch hier das Schluss-Komma optionell:<br>\n<br>\n<i>Die Rezension ist in &quot;Spektrum der Wissenschaft&quot;, 12/2019, S. 72(,) erschienen.</i>",
			"D109<br>\n<br>\nD115<br>\n<br>\nD116<br>\n<br>\nE61<br>\n<br>\nE64<br>\n<br>\nE70ff<br>\n<br>\nE87<br>\n<br>\nE92"
		],
		"%k-appo-end": [
			"%k-appo-end",
			"Apposition, Schlusskomma",
			"Eine Apposition (Beisatz) ist ein nachgestelltes substantivisches Attribut, das sein (vorangehendes) Bestimmungswort näher beschreibt. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, Peter, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein Land mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten Söhne der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nBei Namen, die Funktions-/Berufsbezeichnungen nachgestellt sind und weggelassen werden könnten, ist das Appositionskomma wahlfrei:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nAusnahme: Wenn der Berufsbezeichnung ein unbestimmter Artikel vorausgeht, ist das Appositionskomma doch obligatorisch.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIst der Namenszusatz dagegen ein notwendiger Teil des Satzes (weil die Person sonst nicht eindeutig ist), steht kein Komma:<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\n<i>Benutzt man das Komma doch, bedeutet das, dass es (im Kontext) nur einen Schweißer gibt.</i>",
			"D113<br>\n<br>\nD115<br>\n<br>\nD116"
		],
		"%ok-appo-end": [
			"%ok-appo-end",
			"Apposition, Schlusskomma",
			"Eine Apposition (Beisatz) ist ein nachgestelltes substantivisches Attribut, das sein (vorangehendes) Bestimmungswort näher beschreibt. Appositionen werden generell durch sowohl Start- als auch Schluss-Komma abgetrennt.<br>\n<br>\n<i>Mein bester Freund, Peter, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein Land mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten Söhne der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nBei Namen, die Funktions-/Berufsbezeichnungen nachgestellt sind und weggelassen werden könnten, ist das Appositionskomma wahlfrei:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nAusnahme: Wenn der Berufsbezeichnung ein unbestimmter Artikel vorausgeht, ist das Appositionskomma doch obligatorisch.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIst der Namenszusatz dagegen ein notwendiger Teil des Satzes (weil die Person sonst nicht eindeutig ist), steht kein Komma:<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\n<i>Benutzt man das Komma doch, bedeutet das, dass es (im Kontext) nur einen Schweißer gibt.</i>",
			"D113<br>\n<br>\nD115<br>\n<br>\nD116"
		],
		"%ko-appo": [
			"%ko-appo",
			"Apposition, optionelles Komma",
			"Bei Namen, die Funktionsbezeichnungen nachgestellt sind, ist das Appositionskomma wahlfrei, falls man den Namen weglassen kann ohne den Sinn des Satzes zu ändern.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nAusnahme: Wenn der Berufsbezeichnung ein unbestimmter Artikel vorausgeht, ist das Appositionskomma doch obligatorisch.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIst der Namenszusatz dagegen ein notwendiger Teil des Satzes (weil die Person sonst nicht eindeutig ist), steht kein Komma:<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\n<i>Benutzt man das Komma doch, bedeutet das, dass es (im Kontext) nur einen Schweißer gibt.</i>",
			""
		],
		"%ko-appo-end": [
			"%ko-appo-end",
			"Apposition, optionelles Komma",
			"Bei Namen, die Funktionsbezeichnungen nachgestellt sind, ist das Appositionskomma wahlfrei, falls man den Namen weglassen kann ohne den Sinn des Satzes zu ändern.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nAusnahme: Wenn der Berufsbezeichnung ein unbestimmter Artikel vorausgeht, ist das Appositionskomma doch obligatorisch.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIst der Namenszusatz dagegen ein notwendiger Teil des Satzes (weil die Person sonst nicht eindeutig ist), steht kein Komma:<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\n<i>Benutzt man das Komma doch, bedeutet das, dass es (im Kontext) nur einen Schweißer gibt.</i>",
			""
		],
		"%nko-appo": [
			"%nko-appo",
			"Apposition, optionelles Komma",
			"Bei Namen, die Funktionsbezeichnungen nachgestellt sind, ist das Appositionskomma wahlfrei, falls man den Namen weglassen kann ohne den Sinn des Satzes zu ändern.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nAusnahme: Wenn der Berufsbezeichnung ein unbestimmter Artikel vorausgeht, ist das Appositionskomma doch obligatorisch.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIst der Namenszusatz dagegen ein notwendiger Teil des Satzes (weil die Person sonst nicht eindeutig ist), steht kein Komma:<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\n<i>Benutzt man das Komma doch, bedeutet das, dass es (im Kontext) nur einen Schweißer gibt.</i>",
			""
		],
		"%nko-appo-end": [
			"%nko-appo-end",
			"Apposition, optionelles Komma",
			"Bei Namen, die Funktionsbezeichnungen nachgestellt sind, ist das Appositionskomma wahlfrei, falls man den Namen weglassen kann ohne den Sinn des Satzes zu ändern.<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nAusnahme: Wenn der Berufsbezeichnung ein unbestimmter Artikel vorausgeht, ist das Appositionskomma doch obligatorisch.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIst der Namenszusatz dagegen ein notwendiger Teil des Satzes (weil die Person sonst nicht eindeutig ist), steht kein Komma:<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\n<i>Benutzt man das Komma doch, bedeutet das, dass es (im Kontext) nur einen Schweißer gibt.</i>",
			""
		],
		"%nok-appo": [
			"%nok-appo",
			"Kein Appositionskomma (Start-Komma)",
			"Vorangestellte Zusätze wie Titel und als Titel benutzte Berufsbezeichnungen erhalten kein Appositionskomma.<br>\n<br>\n<i>Dekan[,] Professor Dr. Markus Moorbacher</i><br>\n<br>\n<i>Seine Heiligkeit[,] Papst Pius sprach am Vortag.</i><br>\n<br>\nEine Ausnahme beim Appositionskomma sind Beinamen oder einzeln nachgestellte Adjektive in festen Fügungen, wo kein Komma benutzt werden sollte:<br>\n<br>\n<i>Kaiser Karl[,] der Große</i><br>\n<br>\n<i>Mehmet[,] der Eroberer</i><br>\n<br>\n<i>Gustav Schneider[,] junior</i><br>\n<br>\n<i>Du[,] Glücklicher hast schon wieder gewonnen.</i><br>\n<br>\nDefinierende Appositionen, die nicht weggelassen werden und nicht in Klammern stehen können, erhalten kein Komma.<br>\n<br>\n<i>Tokyo ist eine fiktive Figur in der Netflix-Serie[,] Money Heist.</i><br>\n<br>\n<i>Die Stadt[,] Rom[,] wurde auf sieben Hügeln erbaut.</i><br>\n<br>\n<i>Aber: Der damalige Präsident(,) Barak Obama(,) engagierte sich für eine Gesundheitsreform. (die Person ist auch ohne Apposition eindeutig)</i><br>\n<br>\nBei Personen ist allerdings oft nur im Kontext zu entscheiden, ob der Name weglassbar ist oder nicht. Ohne Kontext und ohne vorherige Erwähnung sollte kein Komma stehen, anderenfalls ist das Komma freigestellt. Benutzt man es, bedeutet das, dass es (im Kontext) nur eine Person dieser Kategorie gibt.<br>\n<br>\n<i>Der Schweißer,? Anton Arensberg,? hatte sieben Söhne. (je nach Kontext)</i><br>\n<br>\nIm Gegensatz zu normalen Literaturangaben steht bei Paragraph-Verweisen (z.B. in Gesetzen) kein Komma:<br>\n<br>\n<i>Diese Möglichkeit besteht gemäß §12[,] Abs. 3[,] des Gesetzentwurfes.</i>",
			"D110<br>\n<br>\nD116<br>\n<br>\nE93"
		],
		"%nok-appo-end": [
			"%nok-appo-end",
			"Kein Appositionskomma (Schluss-Komma)",
			"Beinamen, sowie definierende Appositionen, die nicht weggelassen werden und nicht in Klammern stehen können, erhalten kein Komma.<br>\n<br>\n<i>Kaiser Karl[,] der Große[,] residierte in Aachen.</i><br>\n<br>\n<i>Die Netflix-Serie[,] Money Heist[,] wurde in Spanien gedreht.</i>",
			"D110"
		],
		"%k-comp": [
			"%k-comp",
			"Vergleichskomma",
			"Vor den Vergleichswörtern <i>&quot;wie&quot;</i> und <i>&quot;als&quot;</i> steht ein Komma, wenn sie einen Nebensatz oder eine Infinitiv-Gruppe einleiten.<br>\n<br>\n<i>Er spielte nicht ganz so gut, <b>wie</b> wir erwartet hatten. (Nebensatz)</i><br>\n<br>\n<i>Er schnitt besser ab, <b>als</b> wir erwartet hatten. (Nebensatz)</i><br>\n<br>\n<i>Nichts hat ihn so geärgert, <b>wie</b> gegen seinen 5-jährigen Sohn im Schach zu verlieren. (Infinitiv)</i><br>\n<br>\nDagegen steht kein Komma vor<i></i> <i>&quot;wie&quot;</i> oder<i> &quot;als&quot;</i>, wenn diese als<i></i> Präposition benutzt werden, d.h. in Verbindung mit einer Nominal- oder Partizipgruppe.<br>\n<br>\n<i>Nichts hat ihn so geärgert[,] <b>wie</b> diese Niederlage.</i><br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i>",
			""
		],
		"%ok-comp": [
			"%ok-comp",
			"Vergleichskomma",
			"Vor den Vergleichswörtern <i>&quot;wie&quot;</i> und <i>&quot;als&quot;</i> steht ein Komma, wenn sie einen Nebensatz oder eine Infinitiv-Gruppe einleiten.<br>\n<br>\n<i>Er spielte nicht ganz so gut, <b>wie</b> wir erwartet hatten. (Nebensatz)</i><br>\n<br>\n<i>Er schnitt besser ab, <b>als</b> wir erwartet hatten. (Nebensatz)</i><br>\n<br>\n<i>Nichts hat ihn so geärgert, <b>wie</b> gegen seinen 5-jährigen Sohn im Schach zu verlieren. (Infinitiv)</i><br>\n<br>\nDagegen steht kein Komma vor<i></i> <i>&quot;wie&quot;</i> oder<i> &quot;als&quot;</i>, wenn diese als<i></i> Präposition benutzt werden, d.h. in Verbindung mit einer Nominal- oder Partizipgruppe.<br>\n<br>\n<i>Nichts hat ihn so geärgert[,] <b>wie</b> diese Niederlage.</i><br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i>",
			""
		],
		"%nok-comp": [
			"%nok-comp",
			"Kein Vergleichskomma",
			"Es steht kein Komma vor <i>&quot;als&quot;</i> oder <i>&quot;wie&quot;</i>, wenn diese als vergleichende Präposition benutzt werden, d.h. in Verbindung mit einer Nominal- oder Partizipgruppe.<br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i><br>\n<br>\nDagegen muss ein Komma stehen, wenn <i>&quot;als&quot;</i> oder <i>&quot;wie&quot;</i> einen vergleichenden Nebensatz einleiten oder Infinitiv einleiten:<br>\n<br>\n<i>Er schnitt besser ab, als wir erwartet hatten.</i><br>\n<br>\nEin optionelles Appositionskomma steht, wenn &quot;wie&quot; einen Beispielzusatz einleitet.<br>\n<br>\n<i>Die meisten Nadelbäume(,) wie Kiefer oder Fichte(,) behalten im Winter ihre Nadeln.</i>",
			"D128"
		],
		"%nok-comp-end": [
			"%nok-comp-end",
			"Kein Vergleichskomma",
			"Es steht kein Komma vor <i>&quot;als&quot;</i> oder <i>&quot;wie&quot;</i>, wenn diese als vergleichende Präposition benutzt werden, d.h. in Verbindung mit einer Nominal- oder Partizipgruppe.<br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i><br>\n<br>\nDagegen muss ein Komma stehen, wenn <i>&quot;als&quot;</i> oder <i>&quot;wie&quot;</i> einen vergleichenden Nebensatz einleiten oder Infinitiv einleiten:<br>\n<br>\n<i>Er schnitt besser ab, als wir erwartet hatten.</i><br>\n<br>\nEin optionelles Appositionskomma steht, wenn &quot;wie&quot; einen Beispielzusatz einleitet.<br>\n<br>\n<i>Die meisten Nadelbäume(,) wie Kiefer oder Fichte(,) behalten im Winter ihre Nadeln.</i>",
			"D128"
		],
		"%k-contrast": [
			"%k-contrast",
			"Gegensatz-Startkomma",
			"Satzteile, die einen Gegensatz ausdrücken, werden durch ein Start-Komma abgesetzt. Dies gilt insbesondere für die Konjunktionen &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; und &quot;sondern&quot;. Ein entsprechendes Schluss-Komma ist optionell.<br>\n<br>\n<i>Die Spieler waren nervös, aber optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, andererseits die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ko-contrast": [
			"%ko-contrast",
			"Gegensatz-Startkomma",
			"Satzteile, die einen Gegensatz ausdrücken, werden durch ein Start-Komma abgesetzt. Dies gilt insbesondere für die Konjunktionen &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; und &quot;sondern&quot;. Ein entsprechendes Schluss-Komma ist optionell.<br>\n<br>\n<i>Die Spieler waren nervös, aber optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, andererseits die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ok-contrast": [
			"%ok-contrast",
			"Gegensatz-Startkomma",
			"Satzteile, die einen Gegensatz ausdrücken, werden durch ein Start-Komma abgesetzt. Dies gilt insbesondere für die Konjunktionen &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; und &quot;sondern&quot;. Ein entsprechendes Schluss-Komma ist optionell.<br>\n<br>\n<i>Die Spieler waren nervös, aber optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, andererseits die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ko-contrast-end": [
			"%ko-contrast-end",
			"Gegensatz-Schlusskomma",
			"Nach Gegensatzeinschüben, die mit &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; oder &quot;sondern&quot; beginnen, ist das Schluss-Komma optionell, weil nicht immer klar ist, ob es sich um einen Einschub (mit Schluss-Komma) oder eine Reihung (ohne Schluss-Komma) handelt. Besonders selten ist das Schluss-Komma bei &quot;sondern&quot;.<br>\n<br>\n<i>Nicht deine Freunde, sondern meine(,) haben aufgeräumt nach dem Fest.</i><br>\n<br>\nBei anderen kontrastiven Einschüben ist das Komma jedoch immer paarig, mit normalem Schluss-Komma.<br>\n<br>\n<i>Das Reisebüreau bezahlte ihm sein Geld zurück, allerdings unter Abzug einer Bearbeitungsgebühr, und annulierte den Flug.</i>",
			"D108<br>\n<br>\nE63"
		],
		"%nko-contrast-end": [
			"%nko-contrast-end",
			"Gegensatz-Schlusskomma",
			"Nach Gegensatzeinschüben, die mit &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; oder &quot;sondern&quot; beginnen, ist das Schluss-Komma optionell, weil nicht immer klar ist, ob es sich um einen Einschub (mit Schluss-Komma) oder eine Reihung (ohne Schluss-Komma) handelt. Besonders selten ist das Schluss-Komma bei &quot;sondern&quot;.<br>\n<br>\n<i>Nicht deine Freunde, sondern meine(,) haben aufgeräumt nach dem Fest.</i><br>\n<br>\nBei anderen kontrastiven Einschüben ist das Komma jedoch immer paarig, mit normalem Schluss-Komma.<br>\n<br>\n<i>Das Reisebüreau bezahlte ihm sein Geld zurück, allerdings unter Abzug einer Bearbeitungsgebühr, und annulierte den Flug.</i>",
			"D108<br>\n<br>\nE63"
		],
		"%nok-contrast-end": [
			"%nok-contrast-end",
			"Kein Gegensatz-Schlusskomma",
			"Nach Gegensatz-Einschüben mit &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; oder &quot;sondern&quot; ist ein Schluss-Komma wahlfrei, je nachdem ob man den Einschub als solchen betrachtet und hervorhebt (mit Komma) oder ob man ihn als Reihung ansieht und nicht hervorhebt (kein Komma).<br>\n<br>\nIm Falle von <i>'sondern'</i><i></i> ist dieses Schluss-Komma jedoch sehr selten, und vom Gebrauch wird abgeraten:<br>\n<br>\n<i>Ich möchte kein Pony, sondern ein richtiges Pferd[,] reiten.</i><br>\n<br>\n<i>Das Original ist nicht englisch, sondern chinesisch[,] und wurde nicht direkt ins Deutsche übersetzt.</i>",
			""
		],
		"%k-coord": [
			"%k-coord",
			"Nebenordnungskomma",
			"Die häufigsten Arten des Nebenordungskommas sind das Listen-Komma (s. dort) und das Komma zwischen gleichrangigen Sätzen oder Gruppen ohne verbindende Konjunktion. Darüber hinaus steht ein Nebenordnungskomma zusätzlich vor bestimmten Konjunktionen <i>(geschweige)</i> oder dem zweiten Teil von bestimmten Konjunktionspaaren <i>(halb ... halb,</i> <i>mal ... mal, teils ... teils,</i> <i>je ... desto).</i><br>\n<br>\n<i>Je früher, desto besser</i><br>\n<br>\n<i>Das Wesen war halb Tiger, halb Mensch.</i>",
			"E159<br>\n<br>\nE160<br>\n<br>\nE164"
		],
		"%ok-coord": [
			"%ok-coord",
			"Nebenordnungskomma",
			"Die häufigsten Arten des Nebenordungskommas sind das Listen-Komma (s. dort) und das Komma zwischen gleichrangigen Sätzen oder Gruppen ohne verbindende Konjunktion. Darüber hinaus steht ein Nebenordnungskomma zusätzlich vor bestimmten Konjunktionen <i>(geschweige)</i> oder dem zweiten Teil von bestimmten Konjunktionspaaren <i>(halb ... halb,</i> <i>mal ... mal, teils ... teils,</i> <i>je ... desto).</i><br>\n<br>\n<i>Je früher, desto besser</i><br>\n<br>\n<i>Das Wesen war halb Tiger, halb Mensch.</i>",
			"E159<br>\n<br>\nE160<br>\n<br>\nE164"
		],
		"%nok-coord": [
			"%nok-coord",
			"Überflüssiges Nebenordnungskomma",
			"Bei einer Nebenordnung von nur zwei Elementen mit &quot;und&quot;, &quot;oder&quot;, &quot;bzw.&quot;, &quot;resp.&quot;, &quot;sowie&quot; oder &quot;wie&quot; wird normalerweise kein Komma benutzt. Dies gilt sowohl für Einzelwörter wie Substantive und Verben als auch für Nebensätze, Nominalgruppen und Präpositionsausdrücke.<br>\n<br>\n<i>Peter lud Freunde[,] und Verwandte zu einer Garten-Party ein.</i><br>\n<br>\n<i>SpaceX ha</i><i>t</i> <i>wieder</i> <i>eine Rakete</i><i> getestet</i><i>[,]</i> <i>und dabei</i> <i>50 Satelliten in die Erdumlaufbahn gebracht.</i><br>\n<br>\n<i>Der König[,] sowie sein gesamtes Gefolge[,] mussten notgedrungen auf der Insel übernachten.</i><br>\n<br>\nEntsprechend wird auch kein Nebensatz-Komma gesetzt, wenn der Nebensatz einer Liste von Substantiven oder einer Präpositionsverbindung beigeordnet ist:<br>\n<br>\n<i>Ich kaufe Brot, Wein und[,] was sonst noch fehlt.</i><br>\n<br>\n<i>Wenn die Kraniche kommen[,] oder in den Sommerferien kann man in Zingst viele Touristen sehen.</i><br>\n<br>\nDie nebenordnenden Konjunktionspaare <i>&quot;s</i><i>owohl ... als auch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>sowohl ... wie auch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>weder ... noch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>nicht ... noch</i><i>&quot;</i><i>, &quot;entweder ... oder&quot;</i> erhalten ebenfalls kein Komma.<br>\n<br>\n<i>Weder sein Sohn[,] noch seine Tochter teilten seine Begeisterung für Volkstänze.</i><br>\n<br>\n<i>Volkstänze begeisterten weder seinen Sohn[,] noch seine Tochter.</i><br>\n<br>\nAnmerkung: Diese Regel steht nicht im Widerspruch zu anderen, nicht-nebenordnenden Kommas, die notwendig werden, wenn entsprechende Ausdrücke als Ganzes eingeschoben oder nachgestellt werden. Aber auch in diesem Fall steht kein Komma vor dem zweiten, nebenordnenden Teil des Konjunktionspaares (&quot;noch&quot;).<br>\n<br>\n<i>Er trinkt nie Kaffee, weder zu Hause[,] noch im Büro.</i><br>\n<br>\nAnders verhält es sich bei den kontrastiven Konjunktionen <i>&quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; und &quot;sondern&quot;</i><i>,</i> sowie beim 2. Teil von vergleichenden oder auflistenden Konjunktionspaaren wie <i>&quot;einerseits ... andererseits&quot;, &quot;je ... desto&quot;, &quot;teils ... teils&quot;, &quot;mal ... mal&quot;</i> und<i> &quot;zum einen ... zum anderen&quot;</i><i></i> - hier muss immer ein Komma gesetzt werden. Zusätzlich kommt bei letzteren auch vor den 1. Teil ein Komma, wenn sie als Einschub oder Nachtrag stehen.<br>\n<br>\nAnmerkung: Selbst vor &quot;und&quot; oder &quot;oder&quot; kann ein Komma stehen, wenn es als Schlusskomma erforderlich ist, z.B. nach einem Nebensatz oder einer Apposition.<br>\n<br>\n<i>Ich hoffe, dass du kommen kannst, und freue mich auf ein gemeinsames Wochenende.</i><br>\n<br>\n<i>Sein Vater, ein passionierter Golfspieler, frönte gerade seinem Hobby auf Lanzarote.</i>",
			"D104<br>\n<br>\nD107<br>\n<br>\nE46"
		],
		"%nko-coord": [
			"%nko-coord",
			"Optionelles Nebenordnungskomma",
			"Vor einer nebenordnenden Konjunktion <i>(und, oder, sowie)</i> steht normalerweise kein Komma, es sei den es gibt andere Gründe für ein Komma an dieser Stelle, z.B. ein Schluss-Komma nach Nebensätzen, Infinitivgruppen, Einschüben, Erläuterungen oder Appositionen.<br>\n<br>\nJedoch darf zwischen zwei nebengeordneten Sätzen ein Deutlichkeitskomma gesetzt werden, um den Lesefluss zu erleichtern, z.B. wenn das Subjekt des 2. Satzes als (nebengeordnetes) Objekt des 1. Satzes missverstanden werden kann:<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (Kritik der Aktionäre?)</i>",
			"E126"
		],
		"%ko-coord": [
			"%ko-coord",
			"Optionelles Nebenordnungskomma",
			"Vor einer nebenordnenden Konjunktion <i>(und, oder, sowie)</i> steht normalerweise kein Komma, es sei den es gibt andere Gründe für ein Komma an dieser Stelle, z.B. ein Schluss-Komma nach Nebensätzen, Infinitivgruppen, Einschüben, Erläuterungen oder Appositionen.<br>\n<br>\nJedoch darf zwischen zwei nebengeordneten Sätzen ein Deutlichkeitskomma gesetzt werden, um den Lesefluss zu erleichtern, z.B. wenn das Subjekt des 2. Satzes als (nebengeordnetes) Objekt des 1. Satzes missverstanden werden kann:<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (Kritik der Aktionäre?)</i>",
			"E126"
		],
		"%k-day": [
			"%k-day",
			"Datumkomma (Tag)",
			"Wochentag und Datum werden duch ein Komma getrennt. Geht der Satz mit z.B. einer Zeit- oder Ortsangabe weiter, kann ein optionelles Schlusskomma gesetzt werden, je nachdem, ob das Datum als Apposition verstanden wird (immer Komma) oder als Teil einer Reihung (Komma nur bei Uhrzeit ohne Präposition).<br>\n<br>\n<i>Der Empfang ist am Sonntag, dem 12. April(,) um 20 Uhr.</i><br>\n<br>\n<i>Der Empfang ist am Sonntag, 12. April, 20 Uhr.</i><br>\n<br>\nEin Datumskomma steht auch im Briefkopf zwischen Orts- und Datumsangabe.<br>\n<br>\n<i>Oldenburg, 23.11.2019</i><br>\n<br>\n<i>Oldenburg, den 23. November 2019</i>",
			"D114<br>\n<br>\nE89<br>\n<br>\nE90"
		],
		"%ok-day": [
			"%ok-day",
			"Datumkomma (Tag)",
			"Wochentag und Datum werden duch ein Komma getrennt. Geht der Satz mit z.B. einer Zeit- oder Ortsangabe weiter, kann ein optionelles Schlusskomma gesetzt werden, je nachdem, ob das Datum als Apposition verstanden wird (immer Komma) oder als Teil einer Reihung (Komma nur bei Uhrzeit ohne Präposition).<br>\n<br>\n<i>Der Empfang ist am Sonntag, dem 12. April(,) um 20 Uhr.</i><br>\n<br>\n<i>Der Empfang ist am Sonntag, 12. April, 20 Uhr.</i><br>\n<br>\nEin Datumskomma steht auch im Briefkopf zwischen Orts- und Datumsangabe.<br>\n<br>\n<i>Oldenburg, 23.11.2019</i><br>\n<br>\n<i>Oldenburg, den 23. November 2019</i>",
			"D114<br>\n<br>\nE89<br>\n<br>\nE90"
		],
		"%nok-day": [
			"%nok-day",
			"Kein Datum-Komma",
			"In einer zweiteiligen Zeitangabe steht zwischen Datum und Uhrzeit kein Komma, wenn die Uhrzeit nach einer Präposition steht.<br>\n<br>\n<i>Das Ergebnis wurde am Montag um 16:15 Uhr bekanntgegeben.</i><br>\n<br>\nOhne Präposition, oder bei 3- oder mehrteiligen Zeitangaben, steht ein Trennkomma vor der Uhrzeit.<br>\n<br>\n<i>Das Ergebnis wurde am Montag, 16:15(,) bekanntgegeben.</i><br>\n<br>\n<i>Das Ergebnins wurde am Montag, den 15. April, um 16:15(,) bekanntgegeben.</i><br>\n<br>\nDas Schlusskomma nach der Uhrzeit ist optionell, je nachdem ob die Konstruktion als Reihung (ohne Schlusskomma) oder als Apposition (mit Schlusskomma) auffasst.",
			"E90"
		],
		"%k-ellipsis": [
			"%k-ellipsis",
			"Ellipsenkomma",
			"Eine elliptische Konstruktion mit zwei verbundenen Satzteilen ohne dazugehöriges Verb wird vom vorausgehenden Hauptsatz durch ein Komma abgetrennt:<br>\n<br>\n<i>Auf der Arbeit ist er ein Held, zu Hause ein Versager.</i><br>\n<br>\n<i>Karl studiert Medizin, Klara Psychologie und Karel Physik.</i><br>\n<br>\nDas Komma steht jedoch nicht, wenn eine nebenordnende Konjunktion <i>(und, oder)</i> benutzt wurde:<br>\n<br>\n<i>Peter kaufte einen Pullover[,] und seine Freundin einen Schal.</i>",
			"E44"
		],
		"%ok-ellipsis": [
			"%ok-ellipsis",
			"Ellipsenkomma",
			"Eine elliptische Konstruktion mit zwei verbundenen Satzteilen ohne dazugehöriges Verb wird vom vorausgehenden Hauptsatz durch ein Komma abgetrennt:<br>\n<br>\n<i>Auf der Arbeit ist er ein Held, zu Hause ein Versager.</i><br>\n<br>\n<i>Karl studiert Medizin, Klara Psychologie und Karel Physik.</i><br>\n<br>\nDas Komma steht jedoch nicht, wenn eine nebenordnende Konjunktion <i>(und, oder)</i> benutzt wurde:<br>\n<br>\n<i>Peter kaufte einen Pullover[,] und seine Freundin einen Schal.</i>",
			"E44"
		],
		"%nok-ellipsis": [
			"%nok-ellipsis",
			"Kein Ellipsenkomma",
			"Wenn eine elliptische Konstruktion mit &quot;und&quot;/&quot;oder&quot; an den Hauptsatz angeschlossen ist, steht kein Komma:<br>\n<br>\n<i>Peter</i> <i>kaufte einen Pullover</i><i>[</i><i>,</i><i>]</i><i> und seine Freundin einen Schal.</i>",
			"E45"
		],
		"%k-explain": [
			"%k-explain",
			"Erläuterungskomma, Anfang",
			"Beispiele und Erklärungen erfordern ein Komma vor dem einleitenden Wort: &quot;z.B.&quot;, &quot;nämlich&quot;, &quot;insbesondere&quot;, &quot;und zwar&quot;, &quot;d.h.&quot; etc.<br>\n<br>\n<i>Der Online-Shop verkauft hauptsächlich Wanderbedarf, z.B. Wanderschuhe, Zelte, Schlafsäcke und Outdoor-Kochgerät.</i><br>\n<br>\n<i>Ryan Air fliegt jede Woche zweimal nach Mallorca, und zwar Freitags und Montags.</i><br>\n<br>\nWenn die Erläuterung aus einem Nebensatz besteht, braucht dieser meist kein eigenes Nebensatz-Komma - dieses wird sozusagen vorgezogen, so dass es mit dem Erläuterungskomma zusammenfällt. Ein zusätzliches Nebensatz-Komma nach dem Erläuterungsword ist zwar nicht verboten, aber ungewöhnlich.<br>\n<br>\n<i>Mann kan dieses Modell zusammenklappen, z.B.(,) wenn man es in der Bahn mitnehmen will.</i><br>\n<br>\nAusgenommen von dieser Regel sind &quot;d.h.&quot;/&quot;das heißt&quot;, &quot;d.i.&quot;, &quot;will heißen&quot; und &quot;sprich&quot;. Bei ihnen wird ein eventuelles Nebensatz-Komma nicht vorgezogen und steht also<i> nach</i> dem Erläuterungswort.<br>\n<br>\n<i>Nach seiner erwarteten Wiederwahl, d.h., sobald alle Stimmen ausgezählt sind, wird er eine Ansprache halten.</i>",
			"D111<br>\n<br>\nE62"
		],
		"%ok-explain": [
			"%ok-explain",
			"Erläuterungskomma, Anfang",
			"Beispiele und Erklärungen erfordern ein Komma vor dem einleitenden Wort: &quot;z.B.&quot;, &quot;nämlich&quot;, &quot;insbesondere&quot;, &quot;und zwar&quot;, &quot;d.h.&quot; etc.<br>\n<br>\n<i>Der Online-Shop verkauft hauptsächlich Wanderbedarf, z.B. Wanderschuhe, Zelte, Schlafsäcke und Outdoor-Kochgerät.</i><br>\n<br>\n<i>Ryan Air fliegt jede Woche zweimal nach Mallorca, und zwar Freitags und Montags.</i><br>\n<br>\nWenn die Erläuterung aus einem Nebensatz besteht, braucht dieser meist kein eigenes Nebensatz-Komma - dieses wird sozusagen vorgezogen, so dass es mit dem Erläuterungskomma zusammenfällt. Ein zusätzliches Nebensatz-Komma nach dem Erläuterungsword ist zwar nicht verboten, aber ungewöhnlich.<br>\n<br>\n<i>Mann kan dieses Modell zusammenklappen, z.B.(,) wenn man es in der Bahn mitnehmen will.</i><br>\n<br>\nAusgenommen von dieser Regel sind &quot;d.h.&quot;/&quot;das heißt&quot;, &quot;d.i.&quot;, &quot;will heißen&quot; und &quot;sprich&quot;. Bei ihnen wird ein eventuelles Nebensatz-Komma nicht vorgezogen und steht also<i> nach</i> dem Erläuterungswort.<br>\n<br>\n<i>Nach seiner erwarteten Wiederwahl, d.h., sobald alle Stimmen ausgezählt sind, wird er eine Ansprache halten.</i>",
			"D111<br>\n<br>\nE62"
		],
		"%k-explain-end": [
			"%k-explain-end",
			"Erläuterungskomma, Ende",
			"Erklärende oder präzisierende Einschübe erhalten Kommata sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>Die meisten Nadelbäume, wie z.B. Kiefer und Fichte, werfen ihre Nadeln im Winter nicht ab.</i>",
			"D111"
		],
		"%ok-explain-end": [
			"%ok-explain-end",
			"Erläuterungskomma, Ende",
			"Erklärende oder präzisierende Einschübe erhalten Kommata sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>Die meisten Nadelbäume, wie z.B. Kiefer und Fichte, werfen ihre Nadeln im Winter nicht ab.</i>",
			"D111"
		],
		"%ko-explain": [
			"%ko-explain",
			"Optionelles Erläuterungskomma",
			"In Satzgliedstellung, d.h. wenn die Erläuterung den Satzfluss nicht unterbricht und nicht nachgestellt ist, ist das Erläuterungskomma wahlfrei, wenn die einleitende Konjunktion oder Fügung nicht entgegensetzend oder einschränkend ist<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> ist und wenn sie nicht &quot;und&quot; oder einen verbalen Teil enthält <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nAber nachgestellt:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Erläuterung ist dem Bezugswort nachgestellt)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Erläuterung ist dem Hauptsatz nachgestellt)</i>",
			"E66"
		],
		"%nko-explain": [
			"%nko-explain",
			"Optionelles Erläuterungskomma",
			"In Satzgliedstellung, d.h. wenn die Erläuterung den Satzfluss nicht unterbricht und nicht nachgestellt ist, ist das Erläuterungskomma wahlfrei, wenn die einleitende Konjunktion oder Fügung nicht entgegensetzend oder einschränkend ist<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> ist und wenn sie nicht &quot;und&quot; oder einen verbalen Teil enthält <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nAber nachgestellt:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Erläuterung ist dem Bezugswort nachgestellt)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Erläuterung ist dem Hauptsatz nachgestellt)</i>",
			"E66"
		],
		"%ko-explain-end": [
			"%ko-explain-end",
			"Optionelles Erläuterungskomma",
			"In Satzgliedstellung, d.h. wenn die Erläuterung den Satzfluss nicht unterbricht und nicht nachgestellt ist, ist das Erläuterungskomma wahlfrei, wenn die einleitende Konjunktion oder Fügung nicht entgegensetzend oder einschränkend ist<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> ist und wenn sie nicht &quot;und&quot; oder einen verbalen Teil enthält <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nAber nachgestellt:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Erläuterung ist dem Bezugswort nachgestellt)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Erläuterung ist dem Hauptsatz nachgestellt)</i>",
			"E66"
		],
		"%nko-explain-end": [
			"%nko-explain-end",
			"Optionelles Erläuterungskomma",
			"In Satzgliedstellung, d.h. wenn die Erläuterung den Satzfluss nicht unterbricht und nicht nachgestellt ist, ist das Erläuterungskomma wahlfrei, wenn die einleitende Konjunktion oder Fügung nicht entgegensetzend oder einschränkend ist<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> ist und wenn sie nicht &quot;und&quot; oder einen verbalen Teil enthält <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nAber nachgestellt:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Erläuterung ist dem Bezugswort nachgestellt)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Erläuterung ist dem Hauptsatz nachgestellt)</i>",
			"E66"
		],
		"%nok-explain-end": [
			"%nok-explain-end",
			"Kein Erläuterungs-Schlusskomma",
			"Erläuternde Zusätze nach Attributen oder nicht-selbständigen Verben erhalten kein Schluss-Komma.<br>\n<br>\n<i>Er hat viele fremdsprachliche, z.B. französische und englische[,] Aufsätze publiziert.</i><br>\n<br>\n<i>Die Unterlagen erhält man, nachdem man sich immatrikuliert, d.h. an der Hochschule registriert[,] hat.</i>",
			"D111"
		],
		"%ok-extra": [
			"%ok-extra",
			"Absetzungs-Komma bei Satzzusätzen",
			"<i>Man benutzt ein Komma, um Zusätze am Satzanfang oder Satzende abzugrenzen und hervorzuheben. Das gilt z.B. für Interjektionen (Ausrufe), Zustimmung-/Ablehnungsausdrücke und kommentierende Kurzäußerungen.</i><br>\n<br>\n<i>Das Eis ist lecker, nicht wahr?</i><br>\n<br>\n<i>Nein, den Hund habe ich noch nie gesehen.</i><br>\n<br>\n<i>Ach, das kann doch nicht sein.</i><br>\n<br>\n<i>Super, das machen wir!</i><br>\n<br>\n<i>Mir reicht das eine Bier, danke.</i><br>\n<br>\n<i>Doch, der Gutschein ist abgelafufen, leider.</i><br>\n<br>\n<i>Unmöglich, er blufft nur.</i><br>\n<br>\nDas Absetzungs-Komma wird auch bei Topikalisierungen benutzt, also wenn ein Substantiv oder eine Präpositionsverbindung am Satzanfang mit einem Pronomen wieder aufgegriffen wird.<br>\n<br>\n<i>Deine Schwester, die mag ich!</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\n<i>Denn der Gärtner, der ist immer der Mörder.</i>",
			"D130<br>\n<br>\nD129<br>\n<br>\nE42<br>\n<br>\nE57<br>\n<br>\nE58<br>\n<br>\nE59"
		],
		"%k-extra": [
			"%k-extra",
			"Absetzungs-Komma bei Satzzusätzen",
			"<i>Man benutzt ein Komma, um Zusätze am Satzanfang oder Satzende abzugrenzen und hervorzuheben. Das gilt z.B. für Interjektionen (Ausrufe), Zustimmung-/Ablehnungsausdrücke und kommentierende Kurzäußerungen.</i><br>\n<br>\n<i>Das Eis ist lecker, nicht wahr?</i><br>\n<br>\n<i>Nein, den Hund habe ich noch nie gesehen.</i><br>\n<br>\n<i>Ach, das kann doch nicht sein.</i><br>\n<br>\n<i>Super, das machen wir!</i><br>\n<br>\n<i>Mir reicht das eine Bier, danke.</i><br>\n<br>\n<i>Doch, der Gutschein ist abgelafufen, leider.</i><br>\n<br>\n<i>Unmöglich, er blufft nur.</i><br>\n<br>\nDas Absetzungs-Komma wird auch bei Topikalisierungen benutzt, also wenn ein Substantiv oder eine Präpositionsverbindung am Satzanfang mit einem Pronomen wieder aufgegriffen wird.<br>\n<br>\n<i>Deine Schwester, die mag ich!</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\n<i>Denn der Gärtner, der ist immer der Mörder.</i>",
			"D130<br>\n<br>\nD129<br>\n<br>\nE42<br>\n<br>\nE57<br>\n<br>\nE58<br>\n<br>\nE59"
		],
		"%nok-extra": [
			"%nok-extra",
			"Kein Absetzungs-Komma",
			"Im Gegensatz zum Englischen werden im Deutschen einleitende Präpositionsverbindungen u.ä. nicht mit einem Komma abgetrennt.<br>\n<br>\n<i>Abgesehen von dem ewigen Regen[,] ist Irland eine sehr schöne Insel.</i><br>\n<br>\n<i>Einschließlich der neu eingeführten Energieabgaben[,] ist der Strompreis dieses Jahr um 30% gestiegen.</i><br>\n<br>\nAusnahme: Topikalisierung mit nachfolgendem <i>&quot;da&quot;, &quot;daran&quot;, &quot;damit&quot;</i><i></i> etc:<br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\nTreten die gleichen Wortgruppen jedoch an anderer Stelle im Satz auf, kann man evt. ein Komma verwenden, wenn man sie im Kontext als Einschub oder Nachsatz auffasst. Dieses Einschub- oder Nachsatz-Komma ist allerdings nur obligatorisch, wenn die Wortgruppe den Satzfluss bricht.<br>\n<br>\n<i>Irland ist(,) abgesehen vom ewigen Regen(,) eine sehr schöne Insel.</i><br>\n<br>\n<i>Irland, trotz des ewigen Regens, ist eigentlich eine schöne Insel.</i><br>\n<br>\n<i>Ein einleitendes &quot;Bitte&quot; wird normalerweise auch nicht mit Kommas abgetrennt.</i><br>\n<br>\n<i>Bitte[,] nehmen Sie noch ein Stück Kuchen.</i><br>\n<br>\nNur bei besonderer Hervorhebung, z.B. nach &quot;aber&quot;, kommt ein Komma evt. in Frage:<br>\n<br>\n<i>Aber bitte, nehmen Sie doch noch ein Stück Kuchen.</i>",
			"E57<br>\n<br>\nE84"
		],
		"%k-FSstart": [
			"%k-FSstart",
			"Nebensatz-Startkomma",
			"Nebensätze, d.h. dem Hauptsatz untergeordnete Sätze, erhalten im Deutschen sowohl Start- als auch Schluss-Komma. Man erkennt Nebensätze daran, dass sie von einer Konjunktion <i>(&quot;dass&quot;, &quot;weil&quot;, &quot;wenn&quot;),</i> einem Relativpronomen<i> (&quot;der&quot;, &quot;welcher&quot;, &quot;woran&quot;)</i> oder einem Fragewort<i> (&quot;wie&quot;, &quot;ob&quot;, &quot;warum&quot;)</i> eingeleitet werden und daran, dass das gebeugte (finite) Verb am Schluss steht. Nebensätze können eine adverbielle Funktion haben (temporal, kausal, konditional, final etc.) oder andere Satzteile ersetzen (z.B. Subjekt oder Objekt).<br>\n<br>\n<i>Es ist nett, <b>dass</b> du mir helfen willst. (Subjekt-Satz mit Konjunktion)</i><br>\n<br>\n<i>Versprich mir, <b>dass</b> du dich anstrengst! (Objekt-Satz mit Konjunktion)</i><br>\n<br>\n<i>Ich weiß nicht, <b>wie</b> das weitergehen soll. (Objekt-Satz mit Fragewort)</i><br>\n<br>\n<i><b>Wenn</b> wir noch ins Kino wollen, müssen wir früher essen. (Konditionalsatz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\n<i>Zusammengesetzte Konjunktionen (typischerweise Präposition + Konjunktion) werden als ganzes behandelt und nicht durch Komma getrennt (als ob, als dass, anstatt dass, wie wenn, wenn auch, außer wenn, außer wo).</i><br>\n<br>\n<i>Sie feierten, <b>als ob</b> morgen die Welt unterginge.</i><br>\n<br>\n<i>Manchmal steht vor der einleitenden Konjuktion noch ein Adverbium. Wenn sich dieses auf die Konjunktion bezieht (und also nicht zum Hauptsatz gehört), wird das Nebensatz-Startkomma vorgezogen:</i><br>\n<br>\n<i>Er hat jeden Tag trainiert, <b>sogar</b> <b>wenn</b> er Fieber hatte.</i><br>\n<br>\n<i>Er wird wohl wiedergewählt werden, <b>nicht weil</b> er es verdient hätte, <b>sondern weil</b> es keine Alternative gibt.</i><br>\n<br>\nAber: <i>Das Rückgaberecht gilt</i> <b><i>auch, wenn</i></b><i> die Bestellung mündlich aufgegeben wurde.</i> ('auch' gehört zum Hauptsatz)<br>\n<br>\nJedoch sind die Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> in diesem Sinne keine Adverbien, sondern Minisätze mit Verbum. Deshalb muss nach ihnen noch ein Start-Komma stehen, wenn die Erläuterung aus einem Nebensatz besteht.<br>\n<br>\n<i>Bei Regen, d.h., wenn die Felsen nass sind, ist der Abstieg schwierig.</i><br>\n<br>\n<i>Auch zwischen Nebensätzen verschiedenen Grades steht ein Komma. Dieses kann als Start- oder Schluss-Komma für den untergeordneten Nebensatz verstanden werden.</i><br>\n<br>\n<i>Man kann den Strandparkplatz nicht bei Vollmond benutzen, <b>weil</b> dann die Gefahr besteht, <b>dass</b> er überschwemmt wird.</i><br>\n<br>\nNicht immer ist der Nebensatz einem Hauptsatz untergeordnet - manchmal reicht ein einzelnes Wort:<br>\n<br>\n<i>Vielleicht, <b>dass</b> es doch noch klappt.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%ok-FSstart": [
			"%ok-FSstart",
			"Nebensatz-Startkomma",
			"Nebensätze, d.h. dem Hauptsatz untergeordnete Sätze, erhalten im Deutschen sowohl Start- als auch Schluss-Komma. Man erkennt Nebensätze daran, dass sie von einer Konjunktion <i>(&quot;dass&quot;, &quot;weil&quot;, &quot;wenn&quot;),</i> einem Relativpronomen<i> (&quot;der&quot;, &quot;welcher&quot;, &quot;woran&quot;)</i> oder einem Fragewort<i> (&quot;wie&quot;, &quot;ob&quot;, &quot;warum&quot;)</i> eingeleitet werden und daran, dass das gebeugte (finite) Verb am Schluss steht. Nebensätze können eine adverbielle Funktion haben (temporal, kausal, konditional, final etc.) oder andere Satzteile ersetzen (z.B. Subjekt oder Objekt).<br>\n<br>\n<i>Es ist nett, <b>dass</b> du mir helfen willst. (Subjekt-Satz mit Konjunktion)</i><br>\n<br>\n<i>Versprich mir, <b>dass</b> du dich anstrengst! (Objekt-Satz mit Konjunktion)</i><br>\n<br>\n<i>Ich weiß nicht, <b>wie</b> das weitergehen soll. (Objekt-Satz mit Fragewort)</i><br>\n<br>\n<i><b>Wenn</b> wir noch ins Kino wollen, müssen wir früher essen. (Konditionalsatz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\n<i>Zusammengesetzte Konjunktionen (typischerweise Präposition + Konjunktion) werden als ganzes behandelt und nicht durch Komma getrennt (als ob, als dass, anstatt dass, wie wenn, wenn auch, außer wenn, außer wo).</i><br>\n<br>\n<i>Sie feierten, <b>als ob</b> morgen die Welt unterginge.</i><br>\n<br>\n<i>Manchmal steht vor der einleitenden Konjuktion noch ein Adverbium. Wenn sich dieses auf die Konjunktion bezieht (und also nicht zum Hauptsatz gehört), wird das Nebensatz-Startkomma vorgezogen:</i><br>\n<br>\n<i>Er hat jeden Tag trainiert, <b>sogar</b> <b>wenn</b> er Fieber hatte.</i><br>\n<br>\n<i>Er wird wohl wiedergewählt werden, <b>nicht weil</b> er es verdient hätte, <b>sondern weil</b> es keine Alternative gibt.</i><br>\n<br>\nAber: <i>Das Rückgaberecht gilt</i> <b><i>auch, wenn</i></b><i> die Bestellung mündlich aufgegeben wurde.</i> ('auch' gehört zum Hauptsatz)<br>\n<br>\nJedoch sind die Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> in diesem Sinne keine Adverbien, sondern Minisätze mit Verbum. Deshalb muss nach ihnen noch ein Start-Komma stehen, wenn die Erläuterung aus einem Nebensatz besteht.<br>\n<br>\n<i>Bei Regen, d.h., wenn die Felsen nass sind, ist der Abstieg schwierig.</i><br>\n<br>\n<i>Auch zwischen Nebensätzen verschiedenen Grades steht ein Komma. Dieses kann als Start- oder Schluss-Komma für den untergeordneten Nebensatz verstanden werden.</i><br>\n<br>\n<i>Man kann den Strandparkplatz nicht bei Vollmond benutzen, <b>weil</b> dann die Gefahr besteht, <b>dass</b> er überschwemmt wird.</i><br>\n<br>\nNicht immer ist der Nebensatz einem Hauptsatz untergeordnet - manchmal reicht ein einzelnes Wort:<br>\n<br>\n<i>Vielleicht, <b>dass</b> es doch noch klappt.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%k-FSend": [
			"%k-FSend",
			"Nebensatz-Schlusskomma",
			"Einleitende oder eingeschobene Nebensätze werden durch ein Schluss-Komma von einem nachfolgenden Hauptsatz (-Teil) abgetrennt.<br>\n<br>\n<i><b>Wenn</b> du kommen kannst, gib mir bitte Bescheid! (Adverbialsatz)</i><br>\n<br>\n<i><b>Dass</b> er nicht schwimmen konnte, war ein Problem. (Subjekt-Satz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\nEin Schluss-Komma ist auch erforderlich, wenn der übergeordnete Haupt- oder Nebensatz mit &quot;und&quot; oder &quot;oder&quot; weitergeführt wird.<br>\n<br>\n<i>Wenn man vermeiden will, dass Bären ins Zelt kommen, <b>oder</b> wenn es Ameisen gibt, kann man das Essen in einen Baum hängen.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%ok-FSend": [
			"%ok-FSend",
			"Nebensatz-Schlusskomma",
			"Einleitende oder eingeschobene Nebensätze werden durch ein Schluss-Komma von einem nachfolgenden Hauptsatz (-Teil) abgetrennt.<br>\n<br>\n<i><b>Wenn</b> du kommen kannst, gib mir bitte Bescheid! (Adverbialsatz)</i><br>\n<br>\n<i><b>Dass</b> er nicht schwimmen konnte, war ein Problem. (Subjekt-Satz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\nEin Schluss-Komma ist auch erforderlich, wenn der übergeordnete Haupt- oder Nebensatz mit &quot;und&quot; oder &quot;oder&quot; weitergeführt wird.<br>\n<br>\n<i>Wenn man vermeiden will, dass Bären ins Zelt kommen, <b>oder</b> wenn es Ameisen gibt, kann man das Essen in einen Baum hängen.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%nok-FSstart": [
			"%nok-FSstart",
			"Falsches Nebensatz-Komma",
			"Bei Nebensätzen, die von einer mehrteiligen Fügung aus Präposition und Konjunktion eingeleitet werden, steht kein Komma vor der Konjunktion. Bei nachgestellten Nebensätzen wird das Startkomma statt dessen vor die gesamte Fügung, d.h. vor die Präposition gesetzt.<br>\n<br>\n<i>Er läuft, <b>als[,] ob</b> sein Leben davon abhinge.</i><br>\n<br>\n<i><b>Anstatt[,] dass</b> eine Brücke gebaut wurde, wurden zusätzliche Fähren eingesetzt.</i>",
			"D121"
		],
		"%nko-FSstart-mwe": [
			"%nko-FSstart-mwe",
			"Fügungskomma in Konjunktionsausdrücken",
			"Bei Nebensätzen, die von einer mehrteiligen Fügung aus Adverbien und/oder Partizip sowie einer Konjunktion bestehen, kann vor der Konjunktion ein optionelles Fügungskomma stehen.<br>\n<br>\n<i>Je nachdem(,) ob Weihnachten Schnee liegt, werden wir den Kindern einen Schlitten kaufen.</i><br>\n<br>\n<i>Egal(,) ob es stürmt oder nicht, wir müssen da hinauf.</i><br>\n<br>\n<i>Geschweige denn(,) dass Stau ist, sind wir um fünf da.</i><br>\n<br>\nIst der Nebensatz nachgestellt, steht das eigentliche Start-Komma dann vor der gesamten Fügung, d.h. vor dem ersten Adverbium oder vor dem Partizipium.<br>\n<br>\n<i>Er spricht kaum französich, ausgenommen(,) wenn er getrunken hat.</i><br>\n<br>\nEntsprechendes gilt für Fügungskomma in folgenden Konjunktonsverbindungen:<br>\n<br>\n<i>Angenommen/ausgenommen/vorausgesetzt + dass</i><br>\n<br>\n<i>Z.B./beispielsweise/und zwar + dass/wenn/weil</i><br>\n<br>\n<i>Besonders/namentlich/nämlich/vor allem + wenn/weil</i><br>\n<br>\n<i>Soweit/insofern/so/um so mehr/weniger/eher + als</i><br>\n<br>\n<i>Egal/gleichviel/je nachdem + ob</i><br>\n<br>\n<i>Kaum/geschweige denn + dass</i><br>\n<br>\n<i>Im Fall + dass</i>",
			"<i>D122</i>"
		],
		"%ko-FSstart-mwe": [
			"%ko-FSstart-mwe",
			"Fügungskomma in Konjunktionsausdrücken",
			"Bei Nebensätzen, die von einer mehrteiligen Fügung aus Adverbien und/oder Partizip sowie einer Konjunktion bestehen, kann vor der Konjunktion ein optionelles Fügungskomma stehen.<br>\n<br>\n<i>Je nachdem(,) ob Weihnachten Schnee liegt, werden wir den Kindern einen Schlitten kaufen.</i><br>\n<br>\n<i>Egal(,) ob es stürmt oder nicht, wir müssen da hinauf.</i><br>\n<br>\n<i>Geschweige denn(,) dass Stau ist, sind wir um fünf da.</i><br>\n<br>\nIst der Nebensatz nachgestellt, steht das eigentliche Start-Komma dann vor der gesamten Fügung, d.h. vor dem ersten Adverbium oder vor dem Partizipium.<br>\n<br>\n<i>Er spricht kaum französich, ausgenommen(,) wenn er getrunken hat.</i><br>\n<br>\nEntsprechendes gilt für Fügungskomma in folgenden Konjunktonsverbindungen:<br>\n<br>\n<i>Angenommen/ausgenommen/vorausgesetzt + dass</i><br>\n<br>\n<i>Z.B./beispielsweise/und zwar + dass/wenn/weil</i><br>\n<br>\n<i>Besonders/namentlich/nämlich/vor allem + wenn/weil</i><br>\n<br>\n<i>Soweit/insofern/so/um so mehr/weniger/eher + als</i><br>\n<br>\n<i>Egal/gleichviel/je nachdem + ob</i><br>\n<br>\n<i>Kaum/geschweige denn + dass</i><br>\n<br>\n<i>Im Fall + dass</i>",
			"<i>D122</i>"
		],
		"%nko-FSstart": [
			"%nko-FSstart",
			"Optionelles Nebensatzkomma",
			"In Fügungen, die eine Erläuterung oder einen Zusatz/Nachsatz einleiten und aus ener adverbialen Ellipse (mit fehlendem Verb) und einer nachfolgenden (unterordnenden) Konjunktion bestehen, kann vor dieser ein zusätzliches (Nebensatz-) Komma stehen. Das Hauptkomma, vor der Fügung, ist selbst kein Nebensatz-Komma, sondern ein Erläuterungs-, Einschub- oder Schluss-Komma.<br>\n<br>\n<i>Sie sprangen ins eiskalte Wasser, <b>und das(,) obwohl</b> es schneite. (Nachsatz-Erläuterung)</i><br>\n<br>\n<i>Wenn ich mich einmische, <b>dann nur(,) weil</b> ich keinen anderen Ausweg sehe. (Hauptsatz-Ellipsis)</i><br>\n<br>\n<i>Der Abend verlief zufriedenstellend, <b>wenn auch nicht ganz(,) wie</b> wir es erwartet hatten. (konzessiver/einräumender Zusatz)</i><br>\n<br>\n<i>Vor Fragewörtern, die einen Nebensatz ersetzen, kann zur Verdeutlichung auch ein Komma eingefügt werden.</i><br>\n<br>\n<i>Die Pandemie wird enden, es fragt sich nur(,) wann.</i>",
			""
		],
		"%ko-FSstart": [
			"%ko-FSstart",
			"Optionelles Nebensatzkomma",
			"In Fügungen, die eine Erläuterung oder einen Zusatz/Nachsatz einleiten und aus ener adverbialen Ellipse (mit fehlendem Verb) und einer nachfolgenden (unterordnenden) Konjunktion bestehen, kann vor dieser ein zusätzliches (Nebensatz-) Komma stehen. Das Hauptkomma, vor der Fügung, ist selbst kein Nebensatz-Komma, sondern ein Erläuterungs-, Einschub- oder Schluss-Komma.<br>\n<br>\n<i>Sie sprangen ins eiskalte Wasser, <b>und das(,) obwohl</b> es schneite. (Nachsatz-Erläuterung)</i><br>\n<br>\n<i>Wenn ich mich einmische, <b>dann nur(,) weil</b> ich keinen anderen Ausweg sehe. (Hauptsatz-Ellipsis)</i><br>\n<br>\n<i>Der Abend verlief zufriedenstellend, <b>wenn auch nicht ganz(,) wie</b> wir es erwartet hatten. (konzessiver/einräumender Zusatz)</i><br>\n<br>\n<i>Vor Fragewörtern, die einen Nebensatz ersetzen, kann zur Verdeutlichung auch ein Komma eingefügt werden.</i><br>\n<br>\n<i>Die Pandemie wird enden, es fragt sich nur(,) wann.</i>",
			""
		],
		"%ok-ASstart": [
			"%ok-ASstart",
			"Kurzsatz-Komma",
			"Unvollständige Kurzsätze ohne Verbum, die nur aus einer Konjunktion und einem anderen Satzteil bestehen, werden im Prinzip wie andere Nebensätze behandelt und mit Kommas abgetrennt.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nAusnahme: Wenn eine entsprechende Konstruktion als zusätzliches Attribut verwendet wird (a) oder sich nur auf den zweiten, hilfsverbabhängigen Teil einer Verbgruppe bezieht (b), steht kein Schluss-Komma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%k-ASstart": [
			"%k-ASstart",
			"Kurzsatz-Komma",
			"Unvollständige Kurzsätze ohne Verbum, die nur aus einer Konjunktion und einem anderen Satzteil bestehen, werden im Prinzip wie andere Nebensätze behandelt und mit Kommas abgetrennt.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nAusnahme: Wenn eine entsprechende Konstruktion als zusätzliches Attribut verwendet wird (a) oder sich nur auf den zweiten, hilfsverbabhängigen Teil einer Verbgruppe bezieht (b), steht kein Schluss-Komma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%ok-ASend": [
			"%ok-ASend",
			"Kurzsatz-Komma",
			"Unvollständige Kurzsätze ohne Verbum, die nur aus einer Konjunktion und einem anderen Satzteil bestehen, werden im Prinzip wie andere Nebensätze behandelt und mit Kommas abgetrennt.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nAusnahme: Wenn eine entsprechende Konstruktion als zusätzliches Attribut verwendet wird (a) oder sich nur auf den zweiten, hilfsverbabhängigen Teil einer Verbgruppe bezieht (b), steht kein Schluss-Komma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%k-ASend": [
			"%k-ASend",
			"Kurzsatz-Komma",
			"Unvollständige Kurzsätze ohne Verbum, die nur aus einer Konjunktion und einem anderen Satzteil bestehen, werden im Prinzip wie andere Nebensätze behandelt und mit Kommas abgetrennt.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nAusnahme: Wenn eine entsprechende Konstruktion als zusätzliches Attribut verwendet wird (a) oder sich nur auf den zweiten, hilfsverbabhängigen Teil einer Verbgruppe bezieht (b), steht kein Schluss-Komma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%nko-ASstart": [
			"%nko-ASstart",
			"Optionelles Kurzsatz-Komma",
			"Bei formelhaft verkürzten Nebensätzen (Kurzsätzen) kann das Nebensatzkomma optionell wegfallen.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%ko-ASstart": [
			"%ko-ASstart",
			"Optionelles Kurzsatz-Komma",
			"Bei formelhaft verkürzten Nebensätzen (Kurzsätzen) kann das Nebensatzkomma optionell wegfallen.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%nko-ASend": [
			"%nko-ASend",
			"Optionelles Kurzsatz-Komma",
			"Bei formelhaft verkürzten Nebensätzen (Kurzsätzen) kann das Nebensatzkomma optionell wegfallen.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%ko-ASend": [
			"%ko-ASend",
			"Optionelles Kurzsatz-Komma",
			"Bei formelhaft verkürzten Nebensätzen (Kurzsätzen) kann das Nebensatzkomma optionell wegfallen.<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%nok-ASend": [
			"%nok-ASend",
			"Falsches Schluss-Komma bei Kurzsatz",
			"Bei Kurzsätzen, die als zusätzliches Attribut vor einem Substantiv verwendet werden (a) oder sich nur auf den zweiten, hilfverbabhängigen Teil einer Verbgruppe beziehen (b), steht kein Schluss-Komma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges[,] Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			"E171"
		],
		"%ok-inf": [
			"%ok-inf",
			"Obligatorisches Infinitiv-Komma",
			"Infinitive, die nicht Teil einer Hilfsverb-Konstruktion sind, werden meist mit dem Partikel &quot;zu&quot; markiert. Bildet der Infinitiv mit anderen Satzteilen eine Gruppe (Satz), spricht man von erweiterten Infinitiven. Infinitiv-Gruppen mit &quot;zu&quot; werden oft durch Komma vom übergeordneten Satz getrennt. Dieses Infinitiv-Komma ist obligatorisch in folgenden Fällen:<br>\n<br>\n(1) Die Infinitiv-Gruppe wird mit einer Trigger-Konjunktion eingeleitet <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) Eine erweiterte Infinitiv-Gruppe ist an ein Substantiv (seltener Adjektiv) gebunden.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) Der übergeordnete Satz enthält einen Platzhalter für eine erweiterte Infinitiv-Gruppe <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nIm Fall (1) ist das Komma obligatorisch, selbst wenn der Infinitiv nicht mit einem anderen Satzteil erweitert ist. In (2) und (3) ist das Komma in diesem Fall wahlfrei.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (wahlfreies, aber paariges Komma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn seltenen Fällen entscheidet die Plazierung des Infinitivkommas den Sinn des Satzes:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können.</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können.</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%k-inf": [
			"%k-inf",
			"Obligatorisches Infinitiv-Komma",
			"Infinitive, die nicht Teil einer Hilfsverb-Konstruktion sind, werden meist mit dem Partikel &quot;zu&quot; markiert. Bildet der Infinitiv mit anderen Satzteilen eine Gruppe (Satz), spricht man von erweiterten Infinitiven. Infinitiv-Gruppen mit &quot;zu&quot; werden oft durch Komma vom übergeordneten Satz getrennt. Dieses Infinitiv-Komma ist obligatorisch in folgenden Fällen:<br>\n<br>\n(1) Die Infinitiv-Gruppe wird mit einer Trigger-Konjunktion eingeleitet <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) Eine erweiterte Infinitiv-Gruppe ist an ein Substantiv (seltener Adjektiv) gebunden.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) Der übergeordnete Satz enthält einen Platzhalter für eine erweiterte Infinitiv-Gruppe <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nIm Fall (1) ist das Komma obligatorisch, selbst wenn der Infinitiv nicht mit einem anderen Satzteil erweitert ist. In (2) und (3) ist das Komma in diesem Fall wahlfrei.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (wahlfreies, aber paariges Komma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn seltenen Fällen entscheidet die Plazierung des Infinitivkommas den Sinn des Satzes:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können.</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können.</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%ok-inf-end": [
			"%ok-inf-end",
			"Obligatorisches Infinitiv-Komma",
			"Infinitive, die nicht Teil einer Hilfsverb-Konstruktion sind, werden meist mit dem Partikel &quot;zu&quot; markiert. Bildet der Infinitiv mit anderen Satzteilen eine Gruppe (Satz), spricht man von erweiterten Infinitiven. Infinitiv-Gruppen mit &quot;zu&quot; werden oft durch Komma vom übergeordneten Satz getrennt. Dieses Infinitiv-Komma ist obligatorisch in folgenden Fällen:<br>\n<br>\n(1) Die Infinitiv-Gruppe wird mit einer Trigger-Konjunktion eingeleitet <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) Eine erweiterte Infinitiv-Gruppe ist an ein Substantiv (seltener Adjektiv) gebunden.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) Der übergeordnete Satz enthält einen Platzhalter für eine erweiterte Infinitiv-Gruppe <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nIm Fall (1) ist das Komma obligatorisch, selbst wenn der Infinitiv nicht mit einem anderen Satzteil erweitert ist. In (2) und (3) ist das Komma in diesem Fall wahlfrei.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (wahlfreies, aber paariges Komma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn seltenen Fällen entscheidet die Plazierung des Infinitivkommas den Sinn des Satzes:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können.</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können.</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%k-inf-end": [
			"%k-inf-end",
			"Obligatorisches Infinitiv-Komma",
			"Infinitive, die nicht Teil einer Hilfsverb-Konstruktion sind, werden meist mit dem Partikel &quot;zu&quot; markiert. Bildet der Infinitiv mit anderen Satzteilen eine Gruppe (Satz), spricht man von erweiterten Infinitiven. Infinitiv-Gruppen mit &quot;zu&quot; werden oft durch Komma vom übergeordneten Satz getrennt. Dieses Infinitiv-Komma ist obligatorisch in folgenden Fällen:<br>\n<br>\n(1) Die Infinitiv-Gruppe wird mit einer Trigger-Konjunktion eingeleitet <i>(als, anstatt, außer, ohne, statt, um)</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) Eine erweiterte Infinitiv-Gruppe ist an ein Substantiv (seltener Adjektiv) gebunden.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) Der übergeordnete Satz enthält einen Platzhalter für eine erweiterte Infinitiv-Gruppe <i>(es, das, daran, darauf, dafür etc.)</i><br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nIm Fall (1) ist das Komma obligatorisch, selbst wenn der Infinitiv nicht mit einem anderen Satzteil erweitert ist. In (2) und (3) ist das Komma in diesem Fall wahlfrei.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (wahlfreies, aber paariges Komma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn seltenen Fällen entscheidet die Plazierung des Infinitivkommas den Sinn des Satzes:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können.</i><br>\n<br>\n<i>Er glaubt, daran viel verdienen zu können.</i>",
			"D125<br>\n<br>\nE95ff"
		],
		"%nko-inf": [
			"%nko-inf",
			"Optionelles Infinitiv-Komma",
			"Bei Infinitiv-Gruppen mit &quot;zu&quot;, die einen Satzteil in einem übergeordneten Satz ausmachen und von dessen Verb abhängen, ist das Infinitiv-Komma optionell, es sei denn, es geht eine Trigger-Konjunktion <i>(anstatt, ohne, um)</i><i> v</i>oraus<i>,</i><i></i> oder der Infinitiv ist erweitert und hat einen Platzhalter <i>(es, das, daran)</i> im übergeordneten Satz.<br>\n<br>\nInsbesondere kann das Komma weggelassen werden, wenn der Infinitiv die Rolle eines Subjekts oder Objekts übernimmt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nBei nicht erweiterten Infinitiven wie im letzten Satz ist die Tendenz allerdings, das Komma wegzulassen. Je länger und je komplizierter die Infinitiv-Gruppe, desto wahrscheinlicher wird das Komma.<br>\n<br>\nAnmerkung: Ein Infinitiv, der einem Substantiv mit Infinitv-Valens folgt (z.B. <i>Idee, Vorschlag)</i><i></i> ist Teil einer Substantivgruppe und kein Satzteil. Hier ist das Komma obligatorisch für erweiterte Infinitive.<br>\n<br>\nIn seltenen Fällen kann das optionelle Infinitiv-Komma doch obligatorisch sein, weil der Satz sonst mehrdeutig wäre.<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nBei Infinitiven, die von Substantiven oder einem Platzhalterwort<i></i> abhängen, ist das Infinitv-Komma wahlfrei, wenn der Infinitiv nicht erweitert ist, d.h. wenn außer &quot;zu&quot; keine anderen Wörter von ihm abhängig sind.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDas wahlfreie Infinitiv-Komma spielt eine Sonderrolle bei Verben, die ohne eigentlichen Bedeutungsunterschied sowohl als Vollverben als auch als Hilfsverben (Stützverben) gedeutet werden können <i>(z.B. anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hier kein Komma zu setzen, schwächt die selbständige Aussagekraft dieser Verben ab und lässt sie als bloße Modifikatoren des Infinitvs erscheinen.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nFür ein Komma spricht es, wenn das Stützverb selbst von einem Hilfsverb begleitet ist (a), oder wenn es vor dem Infinitiv noch ein Adverbial oder Objekt bindet (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Infinitiv-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%ko-inf": [
			"%ko-inf",
			"Optionelles Infinitiv-Komma",
			"Bei Infinitiv-Gruppen mit &quot;zu&quot;, die einen Satzteil in einem übergeordneten Satz ausmachen und von dessen Verb abhängen, ist das Infinitiv-Komma optionell, es sei denn, es geht eine Trigger-Konjunktion <i>(anstatt, ohne, um)</i><i> v</i>oraus<i>,</i><i></i> oder der Infinitiv ist erweitert und hat einen Platzhalter <i>(es, das, daran)</i> im übergeordneten Satz.<br>\n<br>\nInsbesondere kann das Komma weggelassen werden, wenn der Infinitiv die Rolle eines Subjekts oder Objekts übernimmt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nBei nicht erweiterten Infinitiven wie im letzten Satz ist die Tendenz allerdings, das Komma wegzulassen. Je länger und je komplizierter die Infinitiv-Gruppe, desto wahrscheinlicher wird das Komma.<br>\n<br>\nAnmerkung: Ein Infinitiv, der einem Substantiv mit Infinitv-Valens folgt (z.B. <i>Idee, Vorschlag)</i><i></i> ist Teil einer Substantivgruppe und kein Satzteil. Hier ist das Komma obligatorisch für erweiterte Infinitive.<br>\n<br>\nIn seltenen Fällen kann das optionelle Infinitiv-Komma doch obligatorisch sein, weil der Satz sonst mehrdeutig wäre.<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nBei Infinitiven, die von Substantiven oder einem Platzhalterwort<i></i> abhängen, ist das Infinitv-Komma wahlfrei, wenn der Infinitiv nicht erweitert ist, d.h. wenn außer &quot;zu&quot; keine anderen Wörter von ihm abhängig sind.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDas wahlfreie Infinitiv-Komma spielt eine Sonderrolle bei Verben, die ohne eigentlichen Bedeutungsunterschied sowohl als Vollverben als auch als Hilfsverben (Stützverben) gedeutet werden können <i>(z.B. anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hier kein Komma zu setzen, schwächt die selbständige Aussagekraft dieser Verben ab und lässt sie als bloße Modifikatoren des Infinitvs erscheinen.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nFür ein Komma spricht es, wenn das Stützverb selbst von einem Hilfsverb begleitet ist (a), oder wenn es vor dem Infinitiv noch ein Adverbial oder Objekt bindet (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Infinitiv-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%nko-inf-end": [
			"%nko-inf-end",
			"Optionelles Infinitiv-Komma",
			"Bei Infinitiv-Gruppen mit &quot;zu&quot;, die einen Satzteil in einem übergeordneten Satz ausmachen und von dessen Verb abhängen, ist das Infinitiv-Komma optionell, es sei denn, es geht eine Trigger-Konjunktion <i>(anstatt, ohne, um)</i><i> v</i>oraus<i>,</i><i></i> oder der Infinitiv ist erweitert und hat einen Platzhalter <i>(es, das, daran)</i> im übergeordneten Satz.<br>\n<br>\nInsbesondere kann das Komma weggelassen werden, wenn der Infinitiv die Rolle eines Subjekts oder Objekts übernimmt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nBei nicht erweiterten Infinitiven wie im letzten Satz ist die Tendenz allerdings, das Komma wegzulassen. Je länger und je komplizierter die Infinitiv-Gruppe, desto wahrscheinlicher wird das Komma.<br>\n<br>\nAnmerkung: Ein Infinitiv, der einem Substantiv mit Infinitv-Valens folgt (z.B. <i>Idee, Vorschlag)</i><i></i> ist Teil einer Substantivgruppe und kein Satzteil. Hier ist das Komma obligatorisch für erweiterte Infinitive.<br>\n<br>\nIn seltenen Fällen kann das optionelle Infinitiv-Komma doch obligatorisch sein, weil der Satz sonst mehrdeutig wäre.<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nBei Infinitiven, die von Substantiven oder einem Platzhalterwort<i></i> abhängen, ist das Infinitv-Komma wahlfrei, wenn der Infinitiv nicht erweitert ist, d.h. wenn außer &quot;zu&quot; keine anderen Wörter von ihm abhängig sind.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDas wahlfreie Infinitiv-Komma spielt eine Sonderrolle bei Verben, die ohne eigentlichen Bedeutungsunterschied sowohl als Vollverben als auch als Hilfsverben (Stützverben) gedeutet werden können <i>(z.B. anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hier kein Komma zu setzen, schwächt die selbständige Aussagekraft dieser Verben ab und lässt sie als bloße Modifikatoren des Infinitvs erscheinen.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nFür ein Komma spricht es, wenn das Stützverb selbst von einem Hilfsverb begleitet ist (a), oder wenn es vor dem Infinitiv noch ein Adverbial oder Objekt bindet (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Infinitiv-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%ko-inf-end": [
			"%ko-inf-end",
			"Optionelles Infinitiv-Komma",
			"Bei Infinitiv-Gruppen mit &quot;zu&quot;, die einen Satzteil in einem übergeordneten Satz ausmachen und von dessen Verb abhängen, ist das Infinitiv-Komma optionell, es sei denn, es geht eine Trigger-Konjunktion <i>(anstatt, ohne, um)</i><i> v</i>oraus<i>,</i><i></i> oder der Infinitiv ist erweitert und hat einen Platzhalter <i>(es, das, daran)</i> im übergeordneten Satz.<br>\n<br>\nInsbesondere kann das Komma weggelassen werden, wenn der Infinitiv die Rolle eines Subjekts oder Objekts übernimmt:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nBei nicht erweiterten Infinitiven wie im letzten Satz ist die Tendenz allerdings, das Komma wegzulassen. Je länger und je komplizierter die Infinitiv-Gruppe, desto wahrscheinlicher wird das Komma.<br>\n<br>\nAnmerkung: Ein Infinitiv, der einem Substantiv mit Infinitv-Valens folgt (z.B. <i>Idee, Vorschlag)</i><i></i> ist Teil einer Substantivgruppe und kein Satzteil. Hier ist das Komma obligatorisch für erweiterte Infinitive.<br>\n<br>\nIn seltenen Fällen kann das optionelle Infinitiv-Komma doch obligatorisch sein, weil der Satz sonst mehrdeutig wäre.<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nBei Infinitiven, die von Substantiven oder einem Platzhalterwort<i></i> abhängen, ist das Infinitv-Komma wahlfrei, wenn der Infinitiv nicht erweitert ist, d.h. wenn außer &quot;zu&quot; keine anderen Wörter von ihm abhängig sind.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nDas wahlfreie Infinitiv-Komma spielt eine Sonderrolle bei Verben, die ohne eigentlichen Bedeutungsunterschied sowohl als Vollverben als auch als Hilfsverben (Stützverben) gedeutet werden können <i>(z.B. anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Hier kein Komma zu setzen, schwächt die selbständige Aussagekraft dieser Verben ab und lässt sie als bloße Modifikatoren des Infinitvs erscheinen.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nFür ein Komma spricht es, wenn das Stützverb selbst von einem Hilfsverb begleitet ist (a), oder wenn es vor dem Infinitiv noch ein Adverbial oder Objekt bindet (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Infinitiv-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%nok-inf": [
			"%nok-inf",
			"Kein Infinitiv-Komma",
			"Ein Infinitiv ohne &quot;zu&quot;, der zu einem Hilfsverb gehört<i> (können, wollen, müssen</i> <i>etc.)</i>, bildet mit diesem ein untrennbares Prädikat und erlaubt kein Komma. Das gilt auch für Infinitive mit &quot;zu&quot;, wenn sie an folgende Stützverben gebunden sind: <i>sein, haben, pflegen, scheinen</i><i>, brauchen, es gibt</i><i>.</i><br>\n<br>\n<i>Markus scheint[,] hungrig zu sein.</i><br>\n<br>\n<i>Im Sommer pflegten sie[,] im Garten zu frühstücken.</i><br>\n<br>\n<i>Der Weg war[,] leicht zu finden.</i><br>\n<br>\n<i>Ich habe[,] dazu nichts hinzuzufügen.</i><br>\n<br>\nManche Verben werden in einer Bedeutung als Stützverben verwendet (ohne Infinitv-Komma), in einer anderen aber als Vollverben (mit optionellem Infinitiv-Komma): <i>drohen&quot;</i> (als Stützverb: = Gefahr laufen), <i>versprechen</i> (= den Anschein haben), <i>vermögen/verstehen/wissen</i> (= können), <i>suchen</i> (= versuchen).<br>\n<br>\n<i>Die Brücke drohte[,] einzustürzen und den Zug mit sich in die Tiefe zu reißen.</i><br>\n<br>\n<i>Die Geiselnehmer drohten(,) den Bus in die Luft zu sprengen.</i><br>\n<br>\nFür die letzgenannte Gruppe von Stützverben gilt die Ausnahme, dass ein (wahlfreies) Komma erlaubt ist, wenn vor der Infinitv-Gruppe noch ein ans Stützverb gebundenes Adverbial (Umstandsbestimmung) steht:<br>\n<br>\n<i>Sie versteht wirklich(,) mich auf die Palme zu bringen.</i><br>\n<br>\nInfinitivgruppen, die mit einem Akkusativ an Sinnesverben<i> (sehen, hören, fühlen)</i> oder an die Veben <i>&quot;lassen&quot;</i> oder <i>&quot;machen&quot;</i> angeschlossen sind, erhalten weder ein &quot;zu&quot; noch ein Komma. Der Akkusativ ist hier das semantische Subjekt des Infinitivs und bildet mit diesem eine (sekundäre) Satzeinheit, die nicht durch ein Komma aufgebrochen werden darf.<br>\n<br>\n<i>Er sah das Schiff[,] am Horizont verschwinden.</i><br>\n<br>\nBei Infinitv-Gruppen, die den Platz eines Subjekts oder Subjektsprädikativs ausfüllen, entscheidet allein der Partikel &quot;zu&quot;, ob ein Komma gesetzt werden darf oder nicht.<br>\n<br>\n<i>Ein guter Staatsbürger sein[,] bedeutet[,] wählen gehen und Steuern zahlen. (Kein &quot;zu&quot;, kein Komma)</i><br>\n<br>\n<i>Ein guter Staatsbürger zu sein(,) bedeutet(,) wählen zu gehen und Steuern zu zahlen. (Komma wahlfrei)</i><br>\n<br>\nTrotz des &quot;zu&quot;-Partikels steht auch dann kein Infinitiv-Komma, wenn die Infinitiv-Gruppe als Ganzes in eine Satzklammer eingebettet ist (1), oder wenn sie den übergeordneten Satz umgibt (2) oder mit ihm verschränkt ist (3).<br>\n<br>\n<i>(1a) Wir wollen genau dieses Problem[,] zu vermeiden versuchen.</i><br>\n<br>\n<i>(1b) Wir wollen[,] genau dieses Problem zu vermeiden[,] versuchen.</i><br>\n<br>\n<i>(1c) Ich glaube, dass er genau dieses Problem[,] zu vermeiden versucht.</i><br>\n<br>\n(2) <i>Genau dieses Problem wollen wir versuchen[,] zu vermeiden.</i><br>\n<br>\n(3) <i>Genau dieses Problem wollen wir[,] zu vermeiden versuchen.</i>",
			"D125<br>\n<br>\nE107<br>\n<br>\nE111"
		],
		"%nok-inf-end": [
			"%nok-inf-end",
			"Kein Infinitiv-Komma",
			"Ein Infinitiv ohne &quot;zu&quot;, der zu einem Hilfsverb gehört<i> (können, wollen, müssen</i> <i>etc.)</i>, bildet mit diesem ein untrennbares Prädikat und erlaubt kein Komma. Das gilt auch für Infinitive mit &quot;zu&quot;, wenn sie an folgende Stützverben gebunden sind: <i>sein, haben, pflegen, scheinen</i><i>, brauchen, es gibt</i><i>.</i><br>\n<br>\n<i>Markus scheint[,] hungrig zu sein.</i><br>\n<br>\n<i>Im Sommer pflegten sie[,] im Garten zu frühstücken.</i><br>\n<br>\n<i>Der Weg war[,] leicht zu finden.</i><br>\n<br>\n<i>Ich habe[,] dazu nichts hinzuzufügen.</i><br>\n<br>\nManche Verben werden in einer Bedeutung als Stützverben verwendet (ohne Infinitv-Komma), in einer anderen aber als Vollverben (mit optionellem Infinitiv-Komma): <i>drohen&quot;</i> (als Stützverb: = Gefahr laufen), <i>versprechen</i> (= den Anschein haben), <i>vermögen/verstehen/wissen</i> (= können), <i>suchen</i> (= versuchen).<br>\n<br>\n<i>Die Brücke drohte[,] einzustürzen und den Zug mit sich in die Tiefe zu reißen.</i><br>\n<br>\n<i>Die Geiselnehmer drohten(,) den Bus in die Luft zu sprengen.</i><br>\n<br>\nFür die letzgenannte Gruppe von Stützverben gilt die Ausnahme, dass ein (wahlfreies) Komma erlaubt ist, wenn vor der Infinitv-Gruppe noch ein ans Stützverb gebundenes Adverbial (Umstandsbestimmung) steht:<br>\n<br>\n<i>Sie versteht wirklich(,) mich auf die Palme zu bringen.</i><br>\n<br>\nInfinitivgruppen, die mit einem Akkusativ an Sinnesverben<i> (sehen, hören, fühlen)</i> oder an die Veben <i>&quot;lassen&quot;</i> oder <i>&quot;machen&quot;</i> angeschlossen sind, erhalten weder ein &quot;zu&quot; noch ein Komma. Der Akkusativ ist hier das semantische Subjekt des Infinitivs und bildet mit diesem eine (sekundäre) Satzeinheit, die nicht durch ein Komma aufgebrochen werden darf.<br>\n<br>\n<i>Er sah das Schiff[,] am Horizont verschwinden.</i><br>\n<br>\nBei Infinitv-Gruppen, die den Platz eines Subjekts oder Subjektsprädikativs ausfüllen, entscheidet allein der Partikel &quot;zu&quot;, ob ein Komma gesetzt werden darf oder nicht.<br>\n<br>\n<i>Ein guter Staatsbürger sein[,] bedeutet[,] wählen gehen und Steuern zahlen. (Kein &quot;zu&quot;, kein Komma)</i><br>\n<br>\n<i>Ein guter Staatsbürger zu sein(,) bedeutet(,) wählen zu gehen und Steuern zu zahlen. (Komma wahlfrei)</i><br>\n<br>\nTrotz des &quot;zu&quot;-Partikels steht auch dann kein Infinitiv-Komma, wenn die Infinitiv-Gruppe als Ganzes in eine Satzklammer eingebettet ist (1), oder wenn sie den übergeordneten Satz umgibt (2) oder mit ihm verschränkt ist (3).<br>\n<br>\n<i>(1a) Wir wollen genau dieses Problem[,] zu vermeiden versuchen.</i><br>\n<br>\n<i>(1b) Wir wollen[,] genau dieses Problem zu vermeiden[,] versuchen.</i><br>\n<br>\n<i>(1c) Ich glaube, dass er genau dieses Problem[,] zu vermeiden versucht.</i><br>\n<br>\n(2) <i>Genau dieses Problem wollen wir versuchen[,] zu vermeiden.</i><br>\n<br>\n(3) <i>Genau dieses Problem wollen wir[,] zu vermeiden versuchen.</i>",
			"D125<br>\n<br>\nE107<br>\n<br>\nE111"
		],
		"%k-list": [
			"%k-list",
			"Aufzählungskomma (Liste)",
			"Ein Aufzählungskomma trennt Elemente in einer Liste von drei oder mehr Elementen - Wörtern, Wortgruppen oder (Neben-)Sätzen. Das letze Element in der Liste wird typischerweise mit &quot;und&quot; oder &quot;oder&quot; angeschlossen, ohne Komma.<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nAuch bei einer Reihung von Subjekt-losen Prädikaten wird ein Listenkomma gesetzt:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nDas Aufzählungskomma wird auch bei verstärkenden Wortwiederholungen benuzt.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%ok-list": [
			"%ok-list",
			"Aufzählungskomma (Liste)",
			"Ein Aufzählungskomma trennt Elemente in einer Liste von drei oder mehr Elementen - Wörtern, Wortgruppen oder (Neben-)Sätzen. Das letze Element in der Liste wird typischerweise mit &quot;und&quot; oder &quot;oder&quot; angeschlossen, ohne Komma.<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nAuch bei einer Reihung von Subjekt-losen Prädikaten wird ein Listenkomma gesetzt:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nDas Aufzählungskomma wird auch bei verstärkenden Wortwiederholungen benuzt.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%ko-list": [
			"%ko-list",
			"Aufzählungskomma (Liste)",
			"Ein Aufzählungskomma trennt Elemente in einer Liste von drei oder mehr Elementen - Wörtern, Wortgruppen oder (Neben-)Sätzen. Das letze Element in der Liste wird typischerweise mit &quot;und&quot; oder &quot;oder&quot; angeschlossen, ohne Komma.<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nAuch bei einer Reihung von Subjekt-losen Prädikaten wird ein Listenkomma gesetzt:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nDas Aufzählungskomma wird auch bei verstärkenden Wortwiederholungen benuzt.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%nko-list": [
			"%nko-list",
			"Aufzählungskomma (Liste)",
			"Ein Aufzählungskomma trennt Elemente in einer Liste von drei oder mehr Elementen - Wörtern, Wortgruppen oder (Neben-)Sätzen. Das letze Element in der Liste wird typischerweise mit &quot;und&quot; oder &quot;oder&quot; angeschlossen, ohne Komma.<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nAuch bei einer Reihung von Subjekt-losen Prädikaten wird ein Listenkomma gesetzt:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\nDas Aufzählungskomma wird auch bei verstärkenden Wortwiederholungen benuzt.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%k-list-ADJ": [
			"%k-list-ADJ",
			"Adjektivkomma",
			"Zwischen gleichrangigen, nebengeordneten Attributen steht ein Komma. Adjektive sind gleichrangig, wenn sie den Platz tauschen oder mit &quot;und&quot; verbunden werden können.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektive werden immer mit Komma getrennt, wenn vor dem zweiten Adjektiv eine nähere Bestimmung steht.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%ok-list-ADJ": [
			"%ok-list-ADJ",
			"Adjektivkomma",
			"Zwischen gleichrangigen, nebengeordneten Attributen steht ein Komma. Adjektive sind gleichrangig, wenn sie den Platz tauschen oder mit &quot;und&quot; verbunden werden können.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektive werden immer mit Komma getrennt, wenn vor dem zweiten Adjektiv eine nähere Bestimmung steht.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%nko-list-ADJ": [
			"%nko-list-ADJ",
			"Adjektivkomma",
			"Zwischen gleichrangigen, nebengeordneten Attributen steht ein Komma. Adjektive sind gleichrangig, wenn sie den Platz tauschen oder mit &quot;und&quot; verbunden werden können.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektive werden immer mit Komma getrennt, wenn vor dem zweiten Adjektiv eine nähere Bestimmung steht.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%ko-list-ADJ": [
			"%ko-list-ADJ",
			"Adjektivkomma",
			"Zwischen gleichrangigen, nebengeordneten Attributen steht ein Komma. Adjektive sind gleichrangig, wenn sie den Platz tauschen oder mit &quot;und&quot; verbunden werden können.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nAdjektive werden immer mit Komma getrennt, wenn vor dem zweiten Adjektiv eine nähere Bestimmung steht.<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%nok-list-ADJ": [
			"%nok-list-ADJ",
			"Kein Adjektivkomma",
			"Es wird kein Komma zwischen Adjektiven gesetzt, wenn diese nicht gleichrangig sind, d.h. wenn die Reihenfolge fest und keine Nebenordnung mit &quot;und&quot; möglich ist.<br>\n<br>\n<i>Er fuhr ein teures[,] italienisches Auto (*ein italienisches teures Auto)</i><br>\n<br>\nInsbesondere steht kein Komma, wenn das zweite Adjektiv mit einem nachfolgenden Substantiv einen Gesamtbegriff bildet. Dies gilt vor allem für Adjektive, die Farben <i>(rot, grün, gelb)</i>, Materialien <i>(steinern, hölzern)</i>, Herkunft/Zugehörigkeit<i> (italienisch, hessisch, städtisch</i><i>)</i><i></i> oder Kategorien<i> (schulisch, psysikalisch, fleischfressend)</i><i></i> bezeichnen.<br>\n<br>\nZahlen, Artikel und normalerweise auch attributive Pronomen sind nicht gleichrangig mit Adjektiven und werden nicht mit Komma abgegrenzt.<br>\n<br>\n<i>In der Einfahrt standen vier[,] teure Sportwagen.</i><br>\n<br>\n<i>Er fand viele/mehrere/einige[,] kleine Spinnen in der Badewanne.</i><br>\n<br>\nIn seltenen Fällen können die adjektivischen Pronomen &quot;andere&quot;, &quot;solche&quot;, &quot;viele&quot; und &quot;wenige&quot; jedoch, je nach Kontext, ein Komma erfordern.<br>\n<br>\n<i>Sie sprachen von anderen, glücklicheren Zeiten. (Das Komma kann als &quot;und&quot; gelesen werden - es ist nicht von mehreren glücklichen Zeiten die Rede)</i>",
			"D101<br>\n<br>\nE50<br>\n<br>\nE51<br>\n<br>\nE53"
		],
		"%k-list-unsafe": [
			"%k-list-unsafe",
			"Unsicheres Aufzählungskomma",
			"Hier könnte ein Listenkomma fehlen. Es kan sich aber auch einfach um ein zusammengesetztes Substantiv oder einen Analysefehler handeln. Das Programm konnte in diesem Fall keine Entscheidung treffen.",
			""
		],
		"%k-main": [
			"%k-main",
			"Hauptsatzkomma",
			"Hauptsätze (und gleichrangige Nebensätze) werden entweder durch eine Konjunktion (&quot;und&quot;, &quot;oder&quot;), durch ein (Aufreihungs-)Komma oder - bei kontrastiven Konjunktionen<i> (&quot;aber&quot;</i><i>, &quot;jedoch&quot;</i><i>) -</i> durch beides gemeinsam getrennt.<br>\n<br>\n<i>Du hast Recht, ich schicke eine neue Version.</i><br>\n<br>\n<i>Du hast völlig Recht[,] und ich bitte um Verzeihung.</i><br>\n<br>\n<i>Du hast zwar Recht, aber das ist jetzt nicht mehr zu ändern.</i><br>\n<br>\n<i>Wann ist die Pandemie zu Ende, wann kan man wieder verreisen?</i>",
			"D102"
		],
		"%ok-main": [
			"%ok-main",
			"Hauptsatzkomma",
			"Hauptsätze (und gleichrangige Nebensätze) werden entweder durch eine Konjunktion (&quot;und&quot;, &quot;oder&quot;), durch ein (Aufreihungs-)Komma oder - bei kontrastiven Konjunktionen<i> (&quot;aber&quot;</i><i>, &quot;jedoch&quot;</i><i>) -</i> durch beides gemeinsam getrennt.<br>\n<br>\n<i>Du hast Recht, ich schicke eine neue Version.</i><br>\n<br>\n<i>Du hast völlig Recht[,] und ich bitte um Verzeihung.</i><br>\n<br>\n<i>Du hast zwar Recht, aber das ist jetzt nicht mehr zu ändern.</i><br>\n<br>\n<i>Wann ist die Pandemie zu Ende, wann kan man wieder verreisen?</i>",
			"D102"
		],
		"%nok-main": [
			"%nok-main",
			"Kein Hauptsatzkomma",
			"Im Ausgangspunkt werden zwei Hauptsätze nicht durch Komma getrennt, wenn sie durch eine nebenordnende, nicht kontrastierende Konjunktion verbunden sind <i>(und, oder,</i> <i>weder</i><i> ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nWenn der 2. Hauptsatz jedoch mit einem Nebensatz oder einer Infinitivgruppe eingeleitet wird, darf ausnahmsweise vor die Konjunktion noch ein Komma gesetzt werden:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i>",
			"D104<br>\n<br>\nE126"
		],
		"%nko-main": [
			"%nko-main",
			"Optionelles Hauptsatzkomma",
			"Im Ausgangspunkt werden zwei Hauptsätze nicht durch Komma getrennt, wenn sie durch eine nebenordnende, nicht kontrastierende Konjunktion verbunden sind <i>(und, oder, weder ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nWenn der 2. Hauptsatz jedoch mit einem Nebensatz oder einer Infinitivgruppe eingeleitet wird, darf ausnahmsweise vor die Konjunktion noch ein Komma gesetzt werden:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i><br>\n<br>\nDarüberhinaus dürfen Hauptsätze mit einem (wahlfreien) Komma getrennt werden, um deutlich zu machen, dass eine eventuelle Nebensatzerweiterung (vor dem 1. oder nach dem 2. Hauptsatz) sich nur auf einen der zwei Hauptsätze bezieht.<br>\n<br>\n<i>Weil niemand den Witz zu kennen schien, erzählte ich ihn(,) und die Stimmung wurde schlagartig besser. (Die Unbekanntheit des Witzes [NS] ist nicht die Ursache des Stimmungsumschlags [HS2], sondern nur der Anlass für das Erzählen [HS1])</i><br>\n<br>\nAuch kann ein Deutlichkeitskomma notwendig werden, um den Lesefluss zu erleichtern, z.B. wenn das Subjekt des 2. Satzes als (nebengeordnetes) Objekt des 1. Satzes missverstanden werden kann (sogenannter &quot;Holzwegeffekt&quot;):<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (Kritik der Aktionäre?)</i>",
			""
		],
		"%ko-main": [
			"%ko-main",
			"Optionelles Hauptsatzkomma",
			"Im Ausgangspunkt werden zwei Hauptsätze nicht durch Komma getrennt, wenn sie durch eine nebenordnende, nicht kontrastierende Konjunktion verbunden sind <i>(und, oder, weder ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nWenn der 2. Hauptsatz jedoch mit einem Nebensatz oder einer Infinitivgruppe eingeleitet wird, darf ausnahmsweise vor die Konjunktion noch ein Komma gesetzt werden:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i><br>\n<br>\nDarüberhinaus dürfen Hauptsätze mit einem (wahlfreien) Komma getrennt werden, um deutlich zu machen, dass eine eventuelle Nebensatzerweiterung (vor dem 1. oder nach dem 2. Hauptsatz) sich nur auf einen der zwei Hauptsätze bezieht.<br>\n<br>\n<i>Weil niemand den Witz zu kennen schien, erzählte ich ihn(,) und die Stimmung wurde schlagartig besser. (Die Unbekanntheit des Witzes [NS] ist nicht die Ursache des Stimmungsumschlags [HS2], sondern nur der Anlass für das Erzählen [HS1])</i><br>\n<br>\nAuch kann ein Deutlichkeitskomma notwendig werden, um den Lesefluss zu erleichtern, z.B. wenn das Subjekt des 2. Satzes als (nebengeordnetes) Objekt des 1. Satzes missverstanden werden kann (sogenannter &quot;Holzwegeffekt&quot;):<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (Kritik der Aktionäre?)</i>",
			""
		],
		"%k-paren": [
			"%k-paren",
			"Einschub- oder Nachsatz-Komma, Anfang",
			"Einschübe oder Nachsätze, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei um Wörter, Wortgruppen oder (oft verkürzte) Sätze handeln. Oft sind es Adjektive oder Partizipien mit vorangestellten Modaladverbien oder abhängigen Präpositionsverbindungen, die als nachgestellte Attribute den Satzfluss unterbrechen. Bei letzteren heißt dieses Komma auch Partizipkomma.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den gelben, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i><br>\n<br>\n<i>Der finnische Marathonläufer, zäh und ausdauernd, holte auf.</i><br>\n<br>\n<i>Die Läufer, angefeuert von der Menschenmenge am Straßenrand, gaben ihr Letztes. (Partizipkomma)</i><br>\n<br>\nAuch Hauptsätze kommen als Einschübe vor, und werden dann von Kommas abgetrennt.<br>\n<br>\n<i>Das ist, da bin ich mir sicher, streng verboten.</i><br>\n<br>\nBei Einschüben, die den Satzfluss nicht unterbrechen, besonders Adverbien und Präpositionsverbindungen, sowie adverbiell benutzte Partizipgruppen, ist das Komma wahlfrei. Im Normalfall wird es weggelassen, kann aber benutzt werden, um die Wortgruppe als Zusatz oder nachgestellte Bestimmung zu markieren und eine Pause im Lesefluss auszulösen. Allerdings müssen die Kommas paarweise gesetzt oder nicht gesetzt werden.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117<br>\n<br>\nE68"
		],
		"%ok-paren": [
			"%ok-paren",
			"Einschub- oder Nachsatz-Komma, Anfang",
			"Einschübe oder Nachsätze, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei um Wörter, Wortgruppen oder (oft verkürzte) Sätze handeln. Oft sind es Adjektive oder Partizipien mit vorangestellten Modaladverbien oder abhängigen Präpositionsverbindungen, die als nachgestellte Attribute den Satzfluss unterbrechen. Bei letzteren heißt dieses Komma auch Partizipkomma.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den gelben, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i><br>\n<br>\n<i>Der finnische Marathonläufer, zäh und ausdauernd, holte auf.</i><br>\n<br>\n<i>Die Läufer, angefeuert von der Menschenmenge am Straßenrand, gaben ihr Letztes. (Partizipkomma)</i><br>\n<br>\nAuch Hauptsätze kommen als Einschübe vor, und werden dann von Kommas abgetrennt.<br>\n<br>\n<i>Das ist, da bin ich mir sicher, streng verboten.</i><br>\n<br>\nBei Einschüben, die den Satzfluss nicht unterbrechen, besonders Adverbien und Präpositionsverbindungen, sowie adverbiell benutzte Partizipgruppen, ist das Komma wahlfrei. Im Normalfall wird es weggelassen, kann aber benutzt werden, um die Wortgruppe als Zusatz oder nachgestellte Bestimmung zu markieren und eine Pause im Lesefluss auszulösen. Allerdings müssen die Kommas paarweise gesetzt oder nicht gesetzt werden.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117<br>\n<br>\nE68"
		],
		"%ko-paren": [
			"%ko-paren",
			"Optionelles Einschub- oder Nachsatz-Komma, Anfang",
			"Bei Einschüben, die den Satzfluss nicht unterbrechen, besonders Adverbien und Präpositionsverbindungen, sowie adverbiell benutzte Partizipgruppen, ist das Einschub-Komma wahlfrei. Allerdings müssen die Kommas paarweise gesetzt oder nicht gesetzt werden.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i><br>\n<br>\n<i>Der Präsident(,) oder gegebenenfalls sein Nachfolger(,) wird den Vertrag im Juni unterzeichnen.</i><br>\n<br>\n<i>Aber: Die Regierung, und der Finanzminister erst recht, muss das schon lange gewusst haben. (Dieser Einschub kann nicht als normale 'und'-Nebenordnung im</i><br>\n<br>\nSatzfluss stehen, weil der Finanzminister Teil der Regierung ist)<br>\n<br>\nDas Einschub-Komma ist auch optionell bei erläuternden Einschüben mit &quot;wie&quot;:<br>\n<br>\n<i>Erneuerbare Energiequellen(,) wie Wind und Sonne(,) sollen nach wie vor bezuschusst werden.</i>",
			""
		],
		"%nko-paren": [
			"%nko-paren",
			"Optionelles Einschub- oder Nachsatz-Komma, Anfang",
			"Bei Einschüben, die den Satzfluss nicht unterbrechen, besonders Adverbien und Präpositionsverbindungen, sowie adverbiell benutzte Partizipgruppen, ist das Einschub-Komma wahlfrei. Allerdings müssen die Kommas paarweise gesetzt oder nicht gesetzt werden.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i><br>\n<br>\n<i>Der Präsident(,) oder gegebenenfalls sein Nachfolger(,) wird den Vertrag im Juni unterzeichnen.</i><br>\n<br>\n<i>Aber: Die Regierung, und der Finanzminister erst recht, muss das schon lange gewusst haben. (Dieser Einschub kann nicht als normale 'und'-Nebenordnung im</i><br>\n<br>\nSatzfluss stehen, weil der Finanzminister Teil der Regierung ist)<br>\n<br>\nDas Einschub-Komma ist auch optionell bei erläuternden Einschüben mit &quot;wie&quot;:<br>\n<br>\n<i>Erneuerbare Energiequellen(,) wie Wind und Sonne(,) sollen nach wie vor bezuschusst werden.</i>",
			""
		],
		"%k-paren-end": [
			"%k-paren-end",
			"Einschub-Komma, Ende",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch (paarige) Kommas abgegrenzt werden. Es kann sich dabei sowohl um Wörter, Wortgruppen und Nebensätze handeln.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den</i> <i>roten</i><i>, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117"
		],
		"%ok-paren-end": [
			"%ok-paren-end",
			"Einschub-Komma, Ende",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch (paarige) Kommas abgegrenzt werden. Es kann sich dabei sowohl um Wörter, Wortgruppen und Nebensätze handeln.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den</i> <i>roten</i><i>, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117"
		],
		"%ko-paren-end%nko-paren-end": [
			"%ko-paren-end%nko-paren-end",
			"Optionelles Einschub-Komma, Ende",
			"Bei Einschüben, die den Satzfluss nicht unterbrechen, besonders Adverbien und Präpositionsverbindungen, sowie adverbiell benutzte Partizipgruppen, ist das Komma wahlfrei. Allerdings müssen die Kommas paarweise gesetzt oder nicht gesetzt werden.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			""
		],
		"%k-parenth": [
			"%k-parenth",
			"Kein Komma vor einer Klammer",
			"Man kan kein Komma vor eine Klammer setzen. Wenn der Satz ohne Klammern ein Komma an der Stelle hätte, wo die Klammern waren, sollte dieses nach der rechten (abschließenden) Klammer eingefügt werden.<br>\n<br>\n<i>Das ist ganz klar ein B-Film[,] (oder schlimmer) der hier nicht auf die Leinwand gehört. (falsch)</i><br>\n<br>\n<i>Das ist ganz klar ein B-Film (oder schlimmer), der hier nicht auf die Leinwand gehört. (richtig)</i>",
			""
		],
		"%nok-parenth": [
			"%nok-parenth",
			"Kein Komma vor einer Klammer",
			"Man kan kein Komma vor eine Klammer setzen. Wenn der Satz ohne Klammern ein Komma an der Stelle hätte, wo die Klammern waren, sollte dieses nach der rechten (abschließenden) Klammer eingefügt werden.<br>\n<br>\n<i>Das ist ganz klar ein B-Film[,] (oder schlimmer) der hier nicht auf die Leinwand gehört. (falsch)</i><br>\n<br>\n<i>Das ist ganz klar ein B-Film (oder schlimmer), der hier nicht auf die Leinwand gehört. (richtig)</i>",
			""
		],
		"%ok-pcp": [
			"%ok-pcp",
			"Partizip-Komma",
			"Ähnlich wie Infinitiv-Gruppen erforden Partizip-Gruppen und Partizip-ähnliche Adjektiv-Gruppen oft ein Komma, wenn sie mit einer näheren Bestimmung erweitert sind. Dieses Komma ist obligatorisch, wenn (a) der übergeordnete Satz ein Ankerwort enthält <i>(so, auf diese Weise),</i> wenn (b) die Partizipgruppe den Satzfluss unterbricht, besonders nach einem Substantiv oder Pronomen, oder wenn sie (c) als nachgetragener Zusatz oder Erläuterung am Satzende steht.<br>\n<br>\n<i>Genau <b>so</b>, von der Sonne <b>gebräunt</b>, hatte ich sie mir vorgestellt. (Hinweiswort)</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat <b>enttäuscht</b>. (Nachtrag)</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (Substantiv-Zusatz)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (Nachtrag)</i><br>\n<br>\nIn allen anderen Fällen ist das Komma wahlfrei, kann aber benutzt werden, um den Satz zu gliedern (1), oder einen Zusatz am Satzanfang abzugrenzen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nackte&quot;, nicht erweiterte Partizipien erhalten nur ein Komma, wenn sie den Satzfluss unterbrechen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%k-pcp": [
			"%k-pcp",
			"Partizip-Komma",
			"Ähnlich wie Infinitiv-Gruppen erforden Partizip-Gruppen und Partizip-ähnliche Adjektiv-Gruppen oft ein Komma, wenn sie mit einer näheren Bestimmung erweitert sind. Dieses Komma ist obligatorisch, wenn (a) der übergeordnete Satz ein Ankerwort enthält <i>(so, auf diese Weise),</i> wenn (b) die Partizipgruppe den Satzfluss unterbricht, besonders nach einem Substantiv oder Pronomen, oder wenn sie (c) als nachgetragener Zusatz oder Erläuterung am Satzende steht.<br>\n<br>\n<i>Genau <b>so</b>, von der Sonne <b>gebräunt</b>, hatte ich sie mir vorgestellt. (Hinweiswort)</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat <b>enttäuscht</b>. (Nachtrag)</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (Substantiv-Zusatz)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (Nachtrag)</i><br>\n<br>\nIn allen anderen Fällen ist das Komma wahlfrei, kann aber benutzt werden, um den Satz zu gliedern (1), oder einen Zusatz am Satzanfang abzugrenzen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nackte&quot;, nicht erweiterte Partizipien erhalten nur ein Komma, wenn sie den Satzfluss unterbrechen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%ok-pcp-end": [
			"%ok-pcp-end",
			"Partizip-Komma",
			"Ähnlich wie Infinitiv-Gruppen erforden Partizip-Gruppen und Partizip-ähnliche Adjektiv-Gruppen oft ein Komma, wenn sie mit einer näheren Bestimmung erweitert sind. Dieses Komma ist obligatorisch, wenn (a) der übergeordnete Satz ein Ankerwort enthält <i>(so, auf diese Weise),</i> wenn (b) die Partizipgruppe den Satzfluss unterbricht, besonders nach einem Substantiv oder Pronomen, oder wenn sie (c) als nachgetragener Zusatz oder Erläuterung am Satzende steht.<br>\n<br>\n<i>Genau <b>so</b>, von der Sonne <b>gebräunt</b>, hatte ich sie mir vorgestellt. (Hinweiswort)</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat <b>enttäuscht</b>. (Nachtrag)</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (Substantiv-Zusatz)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (Nachtrag)</i><br>\n<br>\nIn allen anderen Fällen ist das Komma wahlfrei, kann aber benutzt werden, um den Satz zu gliedern (1), oder einen Zusatz am Satzanfang abzugrenzen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nackte&quot;, nicht erweiterte Partizipien erhalten nur ein Komma, wenn sie den Satzfluss unterbrechen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%k-pcp-end": [
			"%k-pcp-end",
			"Partizip-Komma",
			"Ähnlich wie Infinitiv-Gruppen erforden Partizip-Gruppen und Partizip-ähnliche Adjektiv-Gruppen oft ein Komma, wenn sie mit einer näheren Bestimmung erweitert sind. Dieses Komma ist obligatorisch, wenn (a) der übergeordnete Satz ein Ankerwort enthält <i>(so, auf diese Weise),</i> wenn (b) die Partizipgruppe den Satzfluss unterbricht, besonders nach einem Substantiv oder Pronomen, oder wenn sie (c) als nachgetragener Zusatz oder Erläuterung am Satzende steht.<br>\n<br>\n<i>Genau <b>so</b>, von der Sonne <b>gebräunt</b>, hatte ich sie mir vorgestellt. (Hinweiswort)</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat <b>enttäuscht</b>. (Nachtrag)</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (Substantiv-Zusatz)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (Nachtrag)</i><br>\n<br>\nIn allen anderen Fällen ist das Komma wahlfrei, kann aber benutzt werden, um den Satz zu gliedern (1), oder einen Zusatz am Satzanfang abzugrenzen (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Nackte&quot;, nicht erweiterte Partizipien erhalten nur ein Komma, wenn sie den Satzfluss unterbrechen.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%nko-pcp": [
			"%nko-pcp",
			"Optionelles Partizip-Komma",
			"Erweiterte Partizip- und Adjektiv-Gruppen können durch ein optionelles Komma abgetrennt werden, selbst ohne ein Ankerwort. Anstatt auf einen existierenden/syntaktischen Bruch im Satzfluss zu reagieren, können diese Kommas ihn selbst beim Leser hervorrufen.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Partizip-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nNur bei einem existierenden/syntaktischen Bruch im Satzfluss, bei nachgestellten Zusätzen oder in Gegenwart eines Hinweiswortes ist das Partizip-Komma obligatorisch:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%ko-pcp": [
			"%ko-pcp",
			"Optionelles Partizip-Komma",
			"Erweiterte Partizip- und Adjektiv-Gruppen können durch ein optionelles Komma abgetrennt werden, selbst ohne ein Ankerwort. Anstatt auf einen existierenden/syntaktischen Bruch im Satzfluss zu reagieren, können diese Kommas ihn selbst beim Leser hervorrufen.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Partizip-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nNur bei einem existierenden/syntaktischen Bruch im Satzfluss, bei nachgestellten Zusätzen oder in Gegenwart eines Hinweiswortes ist das Partizip-Komma obligatorisch:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%nko-pcp-end": [
			"%nko-pcp-end",
			"Optionelles Partizip-Komma",
			"Erweiterte Partizip- und Adjektiv-Gruppen können durch ein optionelles Komma abgetrennt werden, selbst ohne ein Ankerwort. Anstatt auf einen existierenden/syntaktischen Bruch im Satzfluss zu reagieren, können diese Kommas ihn selbst beim Leser hervorrufen.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Partizip-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nNur bei einem existierenden/syntaktischen Bruch im Satzfluss, bei nachgestellten Zusätzen oder in Gegenwart eines Hinweiswortes ist das Partizip-Komma obligatorisch:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%ko-pcp-end": [
			"%ko-pcp-end",
			"Optionelles Partizip-Komma",
			"Erweiterte Partizip- und Adjektiv-Gruppen können durch ein optionelles Komma abgetrennt werden, selbst ohne ein Ankerwort. Anstatt auf einen existierenden/syntaktischen Bruch im Satzfluss zu reagieren, können diese Kommas ihn selbst beim Leser hervorrufen.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paariges Komma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAuch nach den Erläuterungseinleitungen '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i> kann ein wahlfreies Komma stehen, wenn diese eine Partizip-Gruppe einleiten. Das gilt, obwohl bereits ein Erläuterungs-Komma vor<i> 'd.h.'</i> o.ä. steht, weil es sich hier nicht um Adverbien, sondern sozusagen um Minisätze mit Verbum handelt.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nNur bei einem existierenden/syntaktischen Bruch im Satzfluss, bei nachgestellten Zusätzen oder in Gegenwart eines Hinweiswortes ist das Partizip-Komma obligatorisch:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%nok-pcp": [
			"%nok-pcp",
			"Kein Partizip-Komma",
			"Bei festen Wendungen steht kein Partizip-Komma:<br>\n<br>\n<i>Er hat[,] genau genommen[,] nichts falsch gemacht.</i><br>\n<br>\n<i>Davon abgesehen[,] schmeckte das Essen vorzüglich.</i><br>\n<br>\nAuch bei Sprichwörtern mit einer Partizip-Gruppe als Subjekt oder Kern steht kein Komma:<br>\n<br>\n<i>Gut gedacht[,] ist halb gemacht.</i><br>\n<br>\n<i>Besser spät gefreut[,] als früh bereut.</i>",
			"E116"
		],
		"%nok-pcp-end": [
			"%nok-pcp-end",
			"Kein Partizip-Komma",
			"Bei festen Wendungen steht kein Partizip-Komma:<br>\n<br>\n<i>Er hat[,] genau genommen[,] nichts falsch gemacht.</i><br>\n<br>\n<i>Davon abgesehen[,] schmeckte das Essen vorzüglich.</i><br>\n<br>\nAuch bei Sprichwörtern mit einer Partizip-Gruppe als Subjekt oder Kern steht kein Komma:<br>\n<br>\n<i>Gut gedacht[,] ist halb gemacht.</i><br>\n<br>\n<i>Besser spät gefreut[,] als früh bereut.</i>",
			"E116"
		],
		"%k-quote": [
			"%k-quote",
			"Zitatkomma, Startkomma",
			"Zitate werden vom Rest des Satzes (&quot;er sagte ...&quot;, &quot;... sagte sie&quot; etc.) durch Kommata abgetrennt. Bei direkter Rede wird das Zitat in Anführungszeichen (»...«, „...“, evt. franz. «...» oder engl. &quot;...&quot;) eingeschlossen, wobei die Kommas außerhalb der Anführungzeichen stehen. Das Start-Komma ersetzt einen Doppelpunkt, das Schlusskomma einen eventuellen Satzpunkt im Zitat.<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (Direkte Rede)</i><br>\n<br>\n<i>Er sagte, das sei ihm egal. (Indirekte Rede)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.&quot;</i>",
			""
		],
		"%ok-quote": [
			"%ok-quote",
			"Zitatkomma, Startkomma",
			"Zitate werden vom Rest des Satzes (&quot;er sagte ...&quot;, &quot;... sagte sie&quot; etc.) durch Kommata abgetrennt. Bei direkter Rede wird das Zitat in Anführungszeichen (»...«, „...“, evt. franz. «...» oder engl. &quot;...&quot;) eingeschlossen, wobei die Kommas außerhalb der Anführungzeichen stehen. Das Start-Komma ersetzt einen Doppelpunkt, das Schlusskomma einen eventuellen Satzpunkt im Zitat.<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (Direkte Rede)</i><br>\n<br>\n<i>Er sagte, das sei ihm egal. (Indirekte Rede)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.&quot;</i>",
			""
		],
		"%k-quote-end": [
			"%k-quote-end",
			"Zitatkomma, Schlusskomma",
			"Wenn ein Zitat am Anfang des Begleitsatzes steht, wird danach ein (Schluss-)Komma eingefügt. Bei direkter Rede steht dieses nach dem Anführungszeichen, nicht davor wie im amerikanischen Englisch. Ein etwaiger Satzpunkt im Zitat fällt dabei weg, nicht aber andere abschließende Satzzeichen ('!', '?' oder ':').<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (Direkte Rede)</i><br>\n<br>\n<i>Das sei ihm egal, sagte er. (Indirekte Rede)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.</i><br>\n<br>\n<i>&quot;Wie geht es deiner Tante?&quot;, fragte sie.</i>",
			""
		],
		"%ok-quote-end": [
			"%ok-quote-end",
			"Zitatkomma, Schlusskomma",
			"Wenn ein Zitat am Anfang des Begleitsatzes steht, wird danach ein (Schluss-)Komma eingefügt. Bei direkter Rede steht dieses nach dem Anführungszeichen, nicht davor wie im amerikanischen Englisch. Ein etwaiger Satzpunkt im Zitat fällt dabei weg, nicht aber andere abschließende Satzzeichen ('!', '?' oder ':').<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (Direkte Rede)</i><br>\n<br>\n<i>Das sei ihm egal, sagte er. (Indirekte Rede)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.</i><br>\n<br>\n<i>&quot;Wie geht es deiner Tante?&quot;, fragte sie.</i>",
			""
		],
		"%nok-quote": [
			"%nok-quote",
			"Kein Zitat-Startkomma",
			"Wenn ein (kurzes) Zitat die Rolle eines integrierten Satzteils im Begleitsatz übernimmt, steht ausnahmsweise weder Komma noch Doppelpunkt.<br>\n<br>\n<i>&quot;Wir schaffen das&quot;[,] war sein einziger Kommentar. (Subjekt)</i><br>\n<br>\n<i>Sie hauchte[,] &quot;ja&quot; und unterschrieb die MeToo-Erklärung. (Objekt)</i><br>\n<br>\n<i>Auch wenn ein (Teil-)Zitat in den Satzfluss des Begleitsatzes eingebaut ist, steht kein Komma.</i><br>\n<br>\n<i>Nach dem Fest räumte Martina ein, dass Wodka doch[,] &quot;marginal mehr Alkohol als Bier&quot; enthält.</i>",
			""
		],
		"%nok-quote-end": [
			"%nok-quote-end",
			"Kein Zitat-Schlusskomma",
			"Wenn ein (kurzes) Zitat die Rolle eines integrierten Satzteils im Begleitsatz übernimmt, steht ausnahmsweise weder Komma noch Doppelpunkt.<br>\n<br>\n<i>&quot;Wir schaffen das&quot;[,] war sein einziger Kommentar. (Subjekt)</i><br>\n<br>\n<i>Sie hauchte[,] &quot;ja&quot; und unterschrieb die MeToo-Erklärung. (Objekt)</i><br>\n<br>\nEin Zitat-Schlusskomma darf nicht wie im Amerikanischen Englisch vor ein abschließenden Anführungszeichen gesetzt werden, sonder steht immer danach.<br>\n<br>\n<i>&quot;Das ist mir egal[,]&quot; sagte er. (falsch)</i><br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (richtig)</i>",
			""
		],
		"%k": [
			"%k",
			"Unspezifiziertes Komma",
			"Kommatroll hat an dieser Stelle einen syntaktischen Bruch identifiziert und schlägt ein Komma vor, ist sich aber nicht sicher. Am ehesten könnte es sich um ein Aufreihungs-/Listenkomma handeln.<br>\n<br>\n<i>Kauf ihr doch einen Schal ? warme Handschuhe oder etwas ähnliches</i>",
			""
		],
		"%nok-soft": [
			"%nok-soft",
			"Möglicherweise überflüssiges Komma",
			"Es konnte keine Regel für ein Komma an dieser Stelle gefunden werden. Es kann aber durchaus sein, dass es trotzdem gute Gründe für ein Komma gibt, z.B. als Pausenkomma, zur Aufgliederung von sehr langen Sätzen oder um Missverständnisse zu vermeiden. Falls nicht, sollte das Komma entfernt werden.",
			""
		],
		"%k-stop": [
			"%k-stop",
			"Satzgrenze",
			"An dieser Stelle vermutet das Programm einen Bruch im Satzfluss. Es scheinen zwei separate Aussagen vorzuliegen, und es wäre möglicherweise besser, hier einen neuen Satz zu beginnen. Ein Punkt oder Semikolon wären einem Komma dabei vorzuziehen.",
			""
		],
		"%nok-SV": [
			"%nok-SV",
			"Kein Komma zwischen Subjekt und Verb",
			"Subjekt und Verb werden nie durch ein Komma getrennt, solange das Subjekt aus nominalen Elementen besteht und nicht aus einem Nebensatz oder einer Infinitiv-Gruppe. Dies ist eine syntaktische Regel und gilt, selbst wenn der Sprecher/Leser and dieser Stelle eine Pause machen würden.<br>\n<br>\n<i>Dieses Gemälde[,] kann viel Geld wert sein.</i><br>\n<br>\nEin Einschub mit Kommapaar - also zwei (!) Kommas - ist allerdings auch zwischen Subjekt und Verb möglich, z.B. eine Apposition oder ein Relativsatz mit dem Subjekt als Bezugswort.<br>\n<br>\n<i>Das Gemälde, das wir auf dem Speicher gefunden haben, scheint viel Geld wert zu sein.</i><br>\n<br>\nKomplexe Subjekte mit Nebenordnung oder Partizipial-Subjekte erfordern dagegen gar kein Komma und liegen sozusagen als Ganzes vor der Subjekt-Verb-Grenze.<br>\n<br>\n<i>Das Ölgemälde und die Kreidezeichnungen[,] sind vom selben Künstler.</i><br>\n<br>\n<i>Gut gekaut[,] ist halb verdaut.</i><br>\n<br>\n<i>Doppelt genäht[,] hält besser.</i>",
			""
		],
		"%k-voc": [
			"%k-voc",
			"Anredekomma (Vokativ)",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%ko-voc": [
			"%ko-voc",
			"Optionelles Anredekomma (Vokativ)",
			"Zwischen einem Ausruf (Interjektion) und einer Anrede (Vokativ) kann wahlfrei ein Komma gesetzt werden:<br>\n<br>\n<i>Hallo(,) Christine, kannst du mir mit den Pferden helfen?</i><br>\n<br>\n<i>Oh(,) Julia, wenn Romeo das wüsste ...</i>",
			"D132"
		],
		"%ok-voc": [
			"%ok-voc",
			"Anredekomma (Vokativ)",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%k-voc-end": [
			"%k-voc-end",
			"Anredekomma (Vokativ)",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%ok-voc-end": [
			"%ok-voc-end",
			"Anredekomma (Vokativ)",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%nko-voc": [
			"%nko-voc",
			"Optionelles Anredekomma (Vokativ)",
			"Zwischen einem Ausruf (Interjektion) und einer Anrede (Vokativ) kann wahlfrei ein Komma gesetzt werden:<br>\n<br>\n<i>Hallo(,) Christine, kannst du mir mit den Pferden helfen?</i><br>\n<br>\n<i>Oh(,) Julia, wenn Romeo das wüsste ...</i>",
			"D132"
		],
		"%number-format": [
			"%number-format",
			"Zahlenkomma",
			"In deutschen Zahlenausdrücken werden Punkt und Komma umgekehrt wie im Englischen verwendet, d.h. Dezimalstellen werden mit einem Komma abgesezt, und Tausender, Millionen usw. mit einem Punkt.<br>\n<br>\n<i>123.000.609</i><br>\n<br>\n<i>0,74</i><br>\n<br>\n<i>13,19237</i><br>\n<br>\n<i>32,50 EUR</i><br>\n<br>\nEine Ausnahme sind Schweizer Franken:<br>\n<br>\n<i>17.60 Franken</i><br>\n<br>\nBei Uhrzeitangaben wird Punkt oder Doppelpunkt als Trennzeichen benuzt, aber kein Komma.<br>\n<br>\n<i>Die Rakete startete um 21.17.45 (21:17:45) Uhr.</i><br>\n<br>\n<i>Der Zug kommt um 16.45 (16:45) Uhr an.</i><br>\n<br>\nWenn Zahlenausdrücke einen Doppelpunkt als Verhältniszeichen enthalten, sollte dieser von Leerzeichen umgeben sein.<br>\n<br>\n<i>Seine Überlebenschancen standen 50 : 50.</i><br>\n<br>\n<i>Der Maßstab war 1 : 200.000</i><br>\n<br>\n<i>Die deutsche Elf gewann das Finale mit 7 : 1.</i>",
			"E36<br>\n<br>\nE37"
		],
		"%upper": [
			"%upper",
			"Großschreibung",
			"Nach einem Doppelpunkt wird groß geschrieben, wenn ihm eine direkte Rede oder ein selbständiger Satz folgt, Infinitiv-Sätze eingeschlossen. Einzelwörter oder Wortgruppen werden kleingeschrieben (außer Substantiven und Eigennamen natürlich).<br>\n<br>\n<i>Sie fragte: &quot;Wer hat den Kuchen gebacken?&quot;</i><br>\n<br>\n<i>Haltbarkeit: Angebrochene Packungen bitte im Kühlschrank aufbewahren.</i><br>\n<br>\n<i>Aber: Haltbarkeit: höchstens 5 Tage im Kühlschrank (4 Grad)</i><br>\n<br>\nSteht vor dem Doppelpunkt ein Anschlusswort, das z.B. eine Erläuterung einleitet, kann der Doppelpunkt als stilistische Alternative zum Komma aufgefasst werden, und ein nachfolgender Satz darf sowohl groß wie klein geschrieben werden.<br>\n<br>\n<i>Bei Internetkäufen har der Kunde volles Rückgaberecht, sprich: Er/er kann den Kauf ohne Begründung stornieren und die Ware zurücksenden.</i>",
			""
		],
		"%lower": [
			"%lower",
			"Kleinschreibung",
			"Nach einem Doppelpunkt wird klein geschrieben, wenn ihm Einzelwörter oder Wordgruppen folgen (außer Substantiven und Eigennamen natürlich). Folgt dem Doppelpunkt ein selbständiger Satz oder ein Zitat, wird groß geschrieben.<br>\n<br>\n<i>Haltbarkeit: höchstens 5 Tage im Kühlschrank (4 Grad)</i><br>\n<br>\n<i>Emil hatte alle seine Freunde in die Höhle geholt: den Teddy, die Tigerente und die ausgestopfte Möwe.</i><br>\n<br>\nAber: <i>Er dachte:</i> <i>Das hätte ich auch einfacher haben können.</i><br>\n<br>\nSteht vor dem Doppelpunkt ein Anschlusswort, das z.B. eine Erläuterung einleitet, kann der Doppelpunkt als stilistische Alternative zum Komma aufgefasst werden, und ein nachfolgender Satz darf sowohl groß wie klein geschrieben werden.<br>\n<br>\n<i>Bei Internetkäufen har der Kunde volles Rückgaberecht, sprich: Er/er kann den Kauf ohne Begründung stornieren und die Ware zurücksenden.</i>",
			""
		],
		"%comp-": [
			"%comp-",
			"Zusammenschreibung",
			"Dieses Wort sollte zusammengeschrieben werden.<br>\n<br>\n<i>Die Menge klatschte, als die ersten Athleten vorbeiliefen. (richtig)</i><br>\n<br>\n<i>Die Menge klatschte, als die ersten Athleten vorbei liefen. (falsch)</i>",
			""
		],
		"%colon2k": [
			"%colon2k",
			"Komma statt Doppelpunkt",
			"Statt des Doppelpunkts muss ein Komma stehen, wenn ihm eine Erläuterung folgt - also vor <i>d.h. (das heißt), d.i. (das ist), z.B. (zum Beispiel), genauer gesagt, nämlich usw.</i><br>\n<br>\n<i>Ich habe nur einen Reisewunsch, nämlich einen Vulkan zu besteigen. (richtig)</i><br>\n<br>\n<i>Ich habe nur einen Reisewunsch: nämlich einen Vulkan zu besteigen.</i> (falsch)",
			""
		],
		"%colon": [
			"%colon",
			"Doppelpunkt statt Komma",
			"Vor einer wörtlichen Wiedergabe (direkte Rede) steht am Satzanfang ein Doppelpunkt, kein Komma:<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (richtig)</i><br>\n<br>\n<i>Er sagte, &quot;Das ist mir egal.&quot; (falsch)</i>",
			""
		],
		"%colon-after": [
			"%colon-after",
			"Fehlender Doppelpunkt",
			"Vor einer wörtlichen Wiedergabe (direkte Rede) steht am Satzanfang ein Doppelpunkt:<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (richtig)</i><br>\n<br>\n<i>Er sagte &quot;Das ist mir egal.&quot; (falsch)</i>",
			""
		],
		"%questmark": [
			"%questmark",
			"Fragezeichen",
			"Ein Fragezeichen steht nicht nur nach direkten Fragesätzen, sondern auch nach Höflichkeitsfragen, rhetorischen Fragen und Aussagesätzen oder Wortgruppen mit Frageintonation.<br>\n<br>\n<i>Wo hast du letzte Nacht geschlafen?</i><br>\n<br>\n<i>Mit oder ohne Zucker?</i><br>\n<br>\n<i>Du hast wen eingeladen?</i><br>\n<br>\n<i>Und du glaubst, das klappt?</i><br>\n<br>\n<i>Ob er wohl kommt?</i><br>\n<br>\n<i>Kann ich bitte den Pfeffer haben?</i><br>\n<br>\n<i>Du hast eine Sanitäterausbildung, nicht wahr?</i><br>\n<br>\nNach indirekten Fragesätzen steht dagegen kein Fragezeichen.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%questmark-after": [
			"%questmark-after",
			"Fragezeichen",
			"Ein Fragezeichen steht nicht nur nach direkten Fragesätzen, sondern auch nach Höflichkeitsfragen, rhetorischen Fragen und Aussagesätzen oder Wortgruppen mit Frageintonation.<br>\n<br>\n<i>Wo hast du letzte Nacht geschlafen?</i><br>\n<br>\n<i>Mit oder ohne Zucker?</i><br>\n<br>\n<i>Du hast wen eingeladen?</i><br>\n<br>\n<i>Und du glaubst, das klappt?</i><br>\n<br>\n<i>Ob er wohl kommt?</i><br>\n<br>\n<i>Kann ich bitte den Pfeffer haben?</i><br>\n<br>\n<i>Du hast eine Sanitäterausbildung, nicht wahr?</i><br>\n<br>\nNach indirekten Fragesätzen steht dagegen kein Fragezeichen.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%exclam": [
			"%exclam",
			"Ausrufezeichen",
			"Nach Ausrufen, Aufforderungen, Wünschen und Befehlen steht ein Ausrufezeichen, egal ob es sich um Vollsätze, Wortgruppen oder Einzelwörter (Imperative oder Interjektionen) handelt.<br>\n<br>\n<i>Lass das Baby schlafen!</i><br>\n<br>\n<i>Raus!</i><br>\n<br>\n<i>Jetzt abonnieren!</i><br>\n<br>\n<i>Hätte ich das bloß vorher gewusst!</i><br>\n<br>\n<i>Guten Rutsch!</i><br>\n<br>\n<i>Igitt, wie scheußlich!</i><br>\n<br>\nNach abhängigen Aufforderungssätzen steht dagegen nur ein Satzpunkt:<br>\n<br>\n<i>Sie sagt, du sollst die Spülmaschine ausräumen.</i>",
			""
		],
		"%exclam-after": [
			"%exclam-after",
			"Ausrufezeichen",
			"Nach Ausrufen, Aufforderungen, Wünschen und Befehlen steht ein Ausrufezeichen, egal ob es sich um Vollsätze, Wortgruppen oder Einzelwörter (Imperative oder Interjektionen) handelt.<br>\n<br>\n<i>Lass das Baby schlafen!</i><br>\n<br>\n<i>Raus!</i><br>\n<br>\n<i>Jetzt abonnieren!</i><br>\n<br>\n<i>Hätte ich das bloß vorher gewusst!</i><br>\n<br>\n<i>Guten Rutsch!</i><br>\n<br>\n<i>Igitt, wie scheußlich!</i><br>\n<br>\nNach abhängigen Aufforderungssätzen steht dagegen nur ein Satzpunkt:<br>\n<br>\n<i>Sie sagt, du sollst die Spülmaschine ausräumen.</i>",
			""
		],
		"%fullstop": [
			"%fullstop",
			"Satzpunkt",
			"Am Ende eines abgeschlossenen Aussagesatzes sollte ein Satzpunkt (oder evt. Semikolon) stehen, insbesondere wenn der Satz ein gebeugtes Verb enthält.<br>\n<br>\nAuch nach indirekten Fragesätzen steht ein Satzpunkt, kein Fragezeichen:<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%fullstop-after": [
			"%fullstop-after",
			"Satzpunkt",
			"Am Ende eines abgeschlossenen Aussagesatzes sollte ein Satzpunkt (oder evt. Semikolon) stehen, insbesondere wenn der Satz ein gebeugtes Verb enthält.<br>\n<br>\nAuch nach indirekten Fragesätzen steht ein Satzpunkt, kein Fragezeichen:<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%no-fullstop": [
			"%no-fullstop",
			"Kein Satzpunkt",
			"Ein Satzpunkt nach Werktiteln u.ä. steht nach, nicht vor dem abschließenden Anführungszeichen.<br>\n<br>\n<i>Der Titel des Buches lautet &quot;Komma oder Chaos - ein Leitfaden&quot;. (richtig)</i><br>\n<br>\n<i>Der Titel des Buche</i><i>s</i><i> lautet &quot;Komma oder Chaos - ein Leitfaden.&quot;</i> (falsch)",
			""
		],
		"%no-quote-left": [
			"%no-quote-left",
			"Falschplaziertes 1. Anführungszeichen",
			"Einleitende deklinierte Artikel in Werktiteln werden von diesem im Satzfluss abgetrennt, indem das Anführungszeichen nach dem Artikel steht, nicht davor.<br>\n<br>\n<i>Ich habe gerade zum zweiten Mal den &quot;Mann ohne Eigenschaften&quot; gelesen. (richtig)</i><br>\n<br>\n<i>Ich habe gerade zum zweiten Mal &quot;den Mann ohne Eigenschaften&quot; gelesen.</i> (falsch)",
			""
		],
		"%quote-left": [
			"%quote-left",
			"Umplaziertes 1. Anführungszeichen",
			"Einleitende deklinierte Artikel in Werktiteln werden von diesem im Satzfluss abgetrennt, indem das Anführungszeichen nach dem Artikel steht, nicht davor.<br>\n<br>\n<i>Ich habe gerade zum zweiten Mal den &quot;Mann ohne Eigenschaften&quot; gelesen. (richtig)</i><br>\n<br>\n<i>Ich habe gerade zum zweiten Mal &quot;den Mann ohne Eigenschaften&quot; gelesen.</i> (falsch)",
			""
		],
		"%spell-local": [
			"%spell-local",
			"Schreibfehler, z.B. Tippfehler oder Phonemfehler",
			"Kommatroll kennt das Wort nicht, hat aber einen Korrekturvorschlag. Dieser basiert auf einer Vertauschungsmatrix, wo bestimmte Buchstaben gegen andere ausgetauscht oder weggelassen wurden. Kriterien sind z.B. Tastaturplazierung <i>(v/b, b/n, s/l)</i><i></i> oder lautliche Eigenschaften <i>(i/ie/ih)</i>.",
			""
		],
		"%spell-local-1": [
			"%spell-local-1",
			"Schreibfehler, ss/ß",
			"Kommatroll meint, dass das Wort einen <i>ss/ß-</i>Fehler enthalten könnte.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-3": [
			"%spell-local-3",
			"Schreibfehler, ss/ß",
			"Kommatroll meint, dass das Wort einen <i>ss/ß-</i>Fehler enthalten könnte.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-6": [
			"%spell-local-6",
			"Schreibfehler, ss/ß",
			"Kommatroll meint, dass das Wort einen <i>ss/ß-</i>Fehler enthalten könnte.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-2": [
			"%spell-local-2",
			"Schreibfehler, Umlaut",
			"Kommatroll meint, dass das Wort einen Umlautfehler enthalten könnte.<br>\n<br>\n<i>Naturlich --&gt; natürlich</i>",
			""
		],
		"%spell-local-5": [
			"%spell-local-5",
			"Schreibfehler, Doppelbuchstabe",
			"Kommatroll meint, dass das Wort einen Geminationsfehler enthalten könnte, d.h. einen versehentlich einfach oder mehrfach wiederholten Buchstaben, oder einen Doppelbuchstaben, der nur einfach geschrieben wurde.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-7": [
			"%spell-local-7",
			"Schreibfehler, Doppelbuchstabe",
			"Kommatroll meint, dass das Wort einen Geminationsfehler enthalten könnte, d.h. einen versehentlich einfach oder mehrfach wiederholten Buchstaben, oder einen Doppelbuchstaben, der nur einfach geschrieben wurde.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-8": [
			"%spell-local-8",
			"Schreibfehler, Doppelbuchstabe",
			"Kommatroll meint, dass das Wort einen Geminationsfehler enthalten könnte, d.h. einen versehentlich einfach oder mehrfach wiederholten Buchstaben, oder einen Doppelbuchstaben, der nur einfach geschrieben wurde.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-9": [
			"%spell-local-9",
			"Schreibfehler, Doppelbuchstabe",
			"Kommatroll meint, dass das Wort einen Geminationsfehler enthalten könnte, d.h. einen versehentlich einfach oder mehrfach wiederholten Buchstaben, oder einen Doppelbuchstaben, der nur einfach geschrieben wurde.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-a": [
			"%spell-local-a",
			"Schreibfehler, i-Dehnung",
			"Kommatroll meint, dass das Wort einen<i> i-</i>Dehnungsfehler<i></i> enthalten könnte, d.h ein überflüssiges 'e' oder 'h' nach einen langen 'i'.<br>\n<br>\n<i>Maschiene --&gt; Maschine, Maschihne --&gt; Maschine</i><br>\n<br>\n<i>Schine --&gt; Schiene</i>",
			""
		],
		"%spell-local-b": [
			"%spell-local-b",
			"Schreibfehler, Dehnungs-h",
			"Kommatroll meint, dass das Wort einen h-Dehnungsfehler enthalten könnte, wo ein 'h' nach einem langen Vokal ausgelassen wurde.<br>\n<br>\n<i>Änlich --&gt; ähnlich, versönlich --&gt; versöhnlich</i><br>\n<br>\n<i>Folen --&gt; Fohlen</i>",
			""
		],
		"%spell-local-c": [
			"%spell-local-c",
			"Tippfehler, Tastaturtauscher",
			"Kommatroll meint, dass das Wort einen &quot;Tastaturtauscher&quot; enthalten könnte, wo zwei auf der Tastatur benachbarte oder beim 10-Finger-Tippen verwechselbare Buchstaben vertauscht <i>(</i>z.B. <i>v/b, b/n, s/l)</i>, oder bestimmte Buchstabenkombinationen durch flüchtiges Schreiben &quot;verschliffen&quot; wurden <i>(</i>z.B. <i>ck/k, tz/z, ch/sch</i>).",
			""
		],
		"%spell-local-d": [
			"%spell-local-d",
			"Flüchtigkeitsfehler",
			"Kommatroll meint, dass in diesem Wort eine typische Buchstabenverwechslung vorliegt (1a-b) oder dass ein Schwachbuchstabe <i>(e,i)</i> an typischer Stelle ausgelassen wurde (2a-b).<br>\n<br>\n<i>(1a) vertäufelt --&gt; verteufelt, Heuserzeile --&gt; Häuserzeile</i><br>\n<br>\n<i>(1b) bedeutenste --&gt; bedeutendste</i><br>\n<br>\n<i>(2a) gkauft --&gt; gekauft</i><br>\n<br>\n<i>(2b) pakistanschen --&gt; pakistanischen</i>",
			""
		],
		"%spell-local-e": [
			"%spell-local-e",
			"Tippfehler, Extrabuchstabe",
			"Kommatroll meint, dass das Wort einen Flüchtigkeits- oder Tippfehler enthalten könnte, wo sich ein zusätzlicher Buchstabe eingeschlichen hat.<br>\n<br>\n<i>Beineame --&gt; Beiname</i><br>\n<br>\n<i>Freunding --&gt; Freunding</i><br>\n<br>\n<i>Brötschen --&gt; Brötchen</i><br>\n<br>\n<i>GehSe --&gt; gehe</i>",
			""
		],
		"%spell-local-f": [
			"%spell-local-f",
			"Tippfehler, Verdopplung",
			"Kommatroll meint, dass das Wort eine unbeabsichtigte Verdopplung eines Buchstabenpaares enthalten könnte.<br>\n<br>\n<i>Ahnenenreihe --&gt; Ahnenreihe</i><br>\n<br>\n<i>Digititale --&gt; digitale</i>",
			""
		],
		"%spell-local-z": [
			"%spell-local-z",
			"Tippfehler, Buchstabentauscher",
			"Kommatroll meint, dass das Wort einen &quot;Buchstabentauscher&quot; enthalten könnte, wo zwei im Wort aufeinander folgende Buchstaben vertauscht wurden.<br>\n<br>\n<i>Gegnesatz --&gt; Gegensatz</i><br>\n<br>\n<i>Er turg --&gt; er trug, sie gignen --&gt; sie gingen</i><br>\n<br>\n<i>Tennismeitser --&gt; Tennismeister</i>",
			""
		],
		"%spell-endbase": [
			"%spell-endbase",
			"Wortstammfehler",
			"Kommatroll kennt das Wort nicht, meint aber die Endung identifizieren zu können und hat einen ähnlichen Wortstamm gefunden.<br>\n<br>\n<i>Kollergialer -&gt; kollegialer</i>",
			""
		],
		"%spell-first": [
			"%spell-first",
			"Kompositumsfehler, 1. Teil",
			"Kommatroll kennt das Wort nicht, meint aber den zweiten Teil eines möglichen Kompositums zu erkennen, und hat einen Korrekturvorschlag für den unbekannten, ersten Teil.<br>\n<br>\n<i>Pedophilie|verdächtiger -&gt; Pädophilieverdächtiger</i><br>\n<br>\n<i>Pædophlie|verdächtig -&gt; pädophilieverdächtig</i>",
			""
		],
		"%spell-second": [
			"%spell-second",
			"Kompositumsfehler, 2. Teil",
			"Kommatroll kennt das Wort nicht, meint aber den ersten Teil eines möglichen Kompositums zu erkennen, und hat einen Korrekturvorschlag für den unbekannten, zweiten Teil.<br>\n<br>\n<i>Voraussage|mögichkeit -&gt; Voraussagemöglichkeit</i>",
			""
		],
		"%spell-last": [
			"%spell-last",
			"Rechtschreibfehler, unsicher",
			"Kommatroll kennt das Wort nicht, hat aber einen Korrekturvorschlag, der sich an ähnlichen Fehlern in anderen Wörtern orientiert.<br>\n<br>\n<i>Vorgesort -&gt; vorgesorgt</i><br>\n<br>\n<i>Vorshlag -&gt; Vorschlag</i><br>\n<br>\n<i>Ferig -&gt; fertig</i><br>\n<br>\n<i>Entschuldigun -&gt; Entschuldigung</i>",
			""
		],
		"%spell-error": [
			"%spell-error",
			"Rechtschreibfehler, sicher",
			"Kommatroll hat das Wort als fehlerhaft erkannt. Ein eventueller Korrekturvorschlag ist durch eine Datenbank oder eine grammatische Regel abgesichert und relativ zuverlässig.<br>\n<br>\n<i>Nich / nciht -&gt; nicht</i><br>\n<br>\n<i>Zulett -&gt; zuletzt</i>",
			""
		]
	},
	eng: {
		"%k-appo": [
			"%k-appo",
			"Apposition, opening comma",
			"An apposition is a construction with two parallel noun phrases where the second (called appositive) provides additional information about the first. An appositive is delimited by commas, unless it is a necessary complement of the preceding noun phrase.<br>\n<br>\n<i>Mein bester Freund, <b>Peter</b>, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein <b>Land</b> mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten <b>Söhne</b> der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nNormally, the appositive agrees in case with the noun it refers to.<br>\n<br>\n<i>Nach der Freilandausstellung, der größten <b>Veranstaltung</b> ihrer Art auf deutschem Boden, kaufte die Stadt zwei der beliebtesten Kunstwerke.</i><br>\n<br>\nDepending on the context, there may be a meaning difference between a listing comma and an apposition comma:<br>\n<br>\n<i>Anne, meine</i> <b><i>Schwester</i></b><i>, und ich</i> (Apposition: Anne = sister, 2 people)<br>\n<br>\n<i>Anne, meine Schwester und ich</i> (List: Anne + sister, 3 people)<br>\n<br>\nIf a first name is placed after the family name, it also gets an apposition comma:<br>\n<br>\n<i>Gerber, Heinrich, und Kleinschmidt, Johannes, haben das Examen mit Auszeichnung bestanden.</i><br>\n<br>\nAn optional apposition comma can be used before <i>&quot;geb.&quot;</i> (born), <i>&quot;verh.&quot;</i> (married) and <i>&quot;verw.&quot;</i> (widowed).<br>\n<br>\n<i>Maria Schmidt(,) geb. Krüger</i><br>\n<br>\nPlace name appositives, used after other place names or events, also get an apposition comma.<br>\n<br>\n<i>In der Nikolauskirche, Ludwigshafen</i><br>\n<br>\n<i>Die 19. Bundesgartenschau, Frankfurt Niddatal</i><br>\n<br>\n<i>Memphis, Tennessee</i><br>\n<br>\nAfter addresses, the closing comma is optional, depending on whether the address is thought of as an apposition (with comma) or as a list element (without comma):<br>\n<br>\n<i>Frau Mahler aus Oldenburg, Goethestraße 32(,) hat einen Leserbrief geschrieben.</i><br>\n<br>\nMulti-part bibliographical references are treated like addresses, with a comma between the individual elements. Here, too, the closing comma is optional:<br>\n<br>\n<i>Die Rezension ist in &quot;Spektrum der Wissenschaft&quot;, 12/2019, S. 72(,) erschienen.</i>",
			"D109<br>\n<br>\nD115<br>\n<br>\nD116<br>\n<br>\nE61<br>\n<br>\nE64<br>\n<br>\nE70ff<br>\n<br>\nE87<br>\n<br>\nE92"
		],
		"%ok-appo": [
			"%ok-appo",
			"Apposition, opening comma",
			"An apposition is a construction with two parallel noun phrases where the second (called appositive) provides additional information about the first. An appositive is delimited by commas, unless it is a necessary complement of the preceding noun phrase.<br>\n<br>\n<i>Mein bester Freund, <b>Peter</b>, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein <b>Land</b> mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten <b>Söhne</b> der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nNormally, the appositive agrees in case with the noun it refers to.<br>\n<br>\n<i>Nach der Freilandausstellung, der größten <b>Veranstaltung</b> ihrer Art auf deutschem Boden, kaufte die Stadt zwei der beliebtesten Kunstwerke.</i><br>\n<br>\nDepending on the context, there may be a meaning difference between a listing comma and an apposition comma:<br>\n<br>\n<i>Anne, meine</i> <b><i>Schwester</i></b><i>, und ich</i> (Apposition: Anne = sister, 2 people)<br>\n<br>\n<i>Anne, meine Schwester und ich</i> (List: Anne + sister, 3 people)<br>\n<br>\nIf a first name is placed after the family name, it also gets an apposition comma:<br>\n<br>\n<i>Gerber, Heinrich, und Kleinschmidt, Johannes, haben das Examen mit Auszeichnung bestanden.</i><br>\n<br>\nAn optional apposition comma can be used before <i>&quot;geb.&quot;</i> (born), <i>&quot;verh.&quot;</i> (married) and <i>&quot;verw.&quot;</i> (widowed).<br>\n<br>\n<i>Maria Schmidt(,) geb. Krüger</i><br>\n<br>\nPlace name appositives, used after other place names or events, also get an apposition comma.<br>\n<br>\n<i>In der Nikolauskirche, Ludwigshafen</i><br>\n<br>\n<i>Die 19. Bundesgartenschau, Frankfurt Niddatal</i><br>\n<br>\n<i>Memphis, Tennessee</i><br>\n<br>\nAfter addresses, the closing comma is optional, depending on whether the address is thought of as an apposition (with comma) or as a list element (without comma):<br>\n<br>\n<i>Frau Mahler aus Oldenburg, Goethestraße 32(,) hat einen Leserbrief geschrieben.</i><br>\n<br>\nMulti-part bibliographical references are treated like addresses, with a comma between the individual elements. Here, too, the closing comma is optional:<br>\n<br>\n<i>Die Rezension ist in &quot;Spektrum der Wissenschaft&quot;, 12/2019, S. 72(,) erschienen.</i>",
			"D109<br>\n<br>\nD115<br>\n<br>\nD116<br>\n<br>\nE61<br>\n<br>\nE64<br>\n<br>\nE70ff<br>\n<br>\nE87<br>\n<br>\nE92"
		],
		"%k-appo-end": [
			"%k-appo-end",
			"Apposition, closing comma",
			"An apposition is a construction with two parallel noun prases where the second (called appositive) provides additional information about the first. An appositive is delimited by commas, unless it is a necessary complement of the preceding noun phrase.<br>\n<br>\n<i>Mein bester Freund, Peter, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein Land mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten Söhne der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nAn optional apposition comma is used with names occurring after profession terms, as long as the name can be omitted without meaning change:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nException: The comma is obligatory if the profession term is preceded by a definite article.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIf the name is, however, a necessary part of the sentence, it does not get a comma.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nHere, a comma would mean that, in the given context, there is only one person with the profession of welder.",
			"D113<br>\n<br>\nD115<br>\n<br>\nD116"
		],
		"%ok-appo-end": [
			"%ok-appo-end",
			"Apposition, closing comma",
			"An apposition is a construction with two parallel noun prases where the second (called appositive) provides additional information about the first. An appositive is delimited by commas, unless it is a necessary complement of the preceding noun phrase.<br>\n<br>\n<i>Mein bester Freund, Peter, kommt Ende der Woche zu Besuch.</i><br>\n<br>\n<i>Italien, ein Land mit viel Meer und Sonne, zieht jeden Sommer Millionen von Touristen an.</i><br>\n<br>\n<i>Der Maler, einer der bekanntesten Söhne der Stadt, hatte sein eigenes Museum.</i><br>\n<br>\nAn optional apposition comma is used with names occurring after profession terms, as long as the name can be omitted without meaning change:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nException: The comma is obligatory if the profession term is preceded by a definite article.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIf the name is, however, a necessary part of the sentence, it does not get a comma.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (ohne vorherige Erwähnung)</i><br>\n<br>\nHere, a comma would mean that, in the given context, there is only one person with the profession of welder.",
			"D113<br>\n<br>\nD115<br>\n<br>\nD116"
		],
		"%ko-appo": [
			"%ko-appo",
			"Apposition, optional comma",
			"An optional apposition comma is used with names occurring after profession terms, as long as the name can be omitted without meaning change:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nException: The comma is obligatory if the profession term is preceded by a definite article.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIf the name is a necessary part of the sentence, it does not get a comma.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (withou prior mention)</i><br>\n<br>\nHere, a comma would mean that, in the given context, there is only one person with the profession of welder.",
			""
		],
		"%ko-appo-end": [
			"%ko-appo-end",
			"Apposition, optional comma",
			"An optional apposition comma is used with names occurring after profession terms, as long as the name can be omitted without meaning change:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nException: The comma is obligatory if the profession term is preceded by a definite article.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIf the name is a necessary part of the sentence, it does not get a comma.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (withou prior mention)</i><br>\n<br>\nHere, a comma would mean that, in the given context, there is only one person with the profession of welder.",
			""
		],
		"%nko-appo": [
			"%nko-appo",
			"Apposition, optional comma",
			"An optional apposition comma is used with names occurring after profession terms, as long as the name can be omitted without meaning change:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nException: The comma is obligatory if the profession term is preceded by a definite article.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIf the name is a necessary part of the sentence, it does not get a comma.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (withou prior mention)</i><br>\n<br>\nHere, a comma would mean that, in the given context, there is only one person with the profession of welder.",
			""
		],
		"%nko-appo-end": [
			"%nko-appo-end",
			"Apposition, optional comma",
			"An optional apposition comma is used with names occurring after profession terms, as long as the name can be omitted without meaning change:<br>\n<br>\n<i>Der Zeuge(,) Karl Kaufmann(,) konnte sich an nichts erinnern.</i><br>\n<br>\n<i>Der amerikanische Präsident(,) Donald Trump(,) erkannte seine Niederlage zunächst nicht an.</i><br>\n<br>\nException: The comma is obligatory if the profession term is preceded by a definite article.<br>\n<br>\n<i>Gerade hat ein Versicherungsagent, Herr Mauthausen-Müller, angerufen.</i><br>\n<br>\nIf the name is a necessary part of the sentence, it does not get a comma.<br>\n<br>\n<i>Der Schweißer[,] Anton Arensberg[,] hatte sieben Söhne. (withou prior mention)</i><br>\n<br>\nHere, a comma would mean that, in the given context, there is only one person with the profession of welder.",
			""
		],
		"%nok-appo": [
			"%nok-appo",
			"No apposition comma (start)",
			"If a name follows a title or a profession term functioning as a title, no apposition comma is used.<br>\n<br>\n<i>Dekan[,] Professor Dr. Markus Moorbacher</i><br>\n<br>\n<i>Seine Heiligkeit[,] Papst Pius sprach am Vortag.</i><br>\n<br>\nThere should be no comma between a name or addressing pronoun and a nickname or adjectival name part addition:<br>\n<br>\n<i>Kaiser Karl[,] der Große</i><br>\n<br>\n<i>Mehmet[,] der Eroberer</i><br>\n<br>\n<i>Gustav Schneider[,] junior</i><br>\n<br>\n<i>Du[,] Glücklicher hast schon wieder gewonnen.</i><br>\n<br>\nDefining/restrictive appositives, that cannot be omitted or put in parentheses, do not get a comma.<br>\n<br>\n<i>Tokyo ist eine fiktive Figur in der Netflix-Serie[,] Money Heist.</i><br>\n<br>\n<i>Die Stadt[,] Rom[,] wurde auf sieben Hügeln erbaut.</i><br>\n<br>\nBut: <i>Der damalige Präsident</i><i>(</i><i>,</i><i>)</i><i> Barak Obama</i><i>(</i><i>,</i><i>)</i><i> engagierte sich für eine Gesundheitsreform.</i><i></i> (The reference is unambiguous even without the name appositive)<br>\n<br>\nIt is, however, often difficult and context-dependent whether a name appositive can be omitted or not. Without context and with no prior mention of the person, there should be no comma. Otherwise, the comma is optional. If used, the comma suggests that there is only one person of this category in the available context.<br>\n<br>\n<i>Der Schweißer,? Anton Arensberg,? hatte sieben Söhne. (depending on context)</i><br>\n<br>\nUnlike ordinary literature references, paragraph references in laws, contracts or statutes do not get a comma:<br>\n<br>\n<i>Diese Möglichkeit besteht gemäß §12[,] Abs. 3[,] des Gesetzentwurfes.</i>",
			"D110<br>\n<br>\nD116<br>\n<br>\nE93"
		],
		"%nok-appo-end": [
			"%nok-appo-end",
			"No apposition comma (end)",
			"Restrictive/defining appositives, nicknames and adjectival name additions do not get a comma if they cannot be omitted or used in parentheses.<br>\n<br>\n<i>Kaiser Karl[,] der Große[,] residierte in Aachen.</i><br>\n<br>\n<i>Die Netflix-Serie[,] Money Heist[,] wurde in Spanien gedreht.</i>",
			"D110"
		],
		"%k-comp": [
			"%k-comp",
			"Comparison comma",
			"Before the comparison particles <i>&quot;wie&quot;</i> <i>a</i>nd <i>&quot;als&quot;</i><i>,</i> a comma is used if they introduce a subclause or an infinitive phrase.<br>\n<br>\n<i>Er spielte nicht ganz so gut,</i> <b><i>wie</i></b><i> wir erwartet hatten.</i><i></i> (subclause)<br>\n<br>\n<i>Er schnitt besser ab, <b>als</b> wir erwartet hatten. (subclause)</i><br>\n<br>\n<i>Nichts hat ihn so geärgert, <b>wie</b> gegen seinen 5-jährigen Sohn im Schach zu verlieren. (infinitive)</i><br>\n<br>\nOn the other hand, no comma is used before<i></i> <i>&quot;wie&quot;</i> or<i> &quot;als&quot;</i>, where they are used as prepositions, i.e. in connection with a noun phrase or participle phrase.<br>\n<br>\n<i>Nichts hat ihn so geärgert[,] <b>wie</b> diese Niederlage.</i><br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i>",
			""
		],
		"%ok-comp": [
			"%ok-comp",
			"Comparison comma",
			"Before the comparison particles <i>&quot;wie&quot;</i> <i>a</i>nd <i>&quot;als&quot;</i><i>,</i> a comma is used if they introduce a subclause or an infinitive phrase.<br>\n<br>\n<i>Er spielte nicht ganz so gut,</i> <b><i>wie</i></b><i> wir erwartet hatten.</i><i></i> (subclause)<br>\n<br>\n<i>Er schnitt besser ab, <b>als</b> wir erwartet hatten. (subclause)</i><br>\n<br>\n<i>Nichts hat ihn so geärgert, <b>wie</b> gegen seinen 5-jährigen Sohn im Schach zu verlieren. (infinitive)</i><br>\n<br>\nOn the other hand, no comma is used before<i></i> <i>&quot;wie&quot;</i> or<i> &quot;als&quot;</i>, where they are used as prepositions, i.e. in connection with a noun phrase or participle phrase.<br>\n<br>\n<i>Nichts hat ihn so geärgert[,] <b>wie</b> diese Niederlage.</i><br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i>",
			""
		],
		"%nok-comp": [
			"%nok-comp",
			"No comparison comma",
			"No comma is used before<i></i> <i>&quot;wie&quot;</i> or<i> &quot;als&quot;</i> where they are used as prepositions, i.e. in connection with a noun phrase or participle phrase.<br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i><br>\n<br>\nOn the other hand, the comma is obligatory if <i>&quot;als&quot;</i> or <i>&quot;wie&quot;</i> introduce a comparison that consists of a subclause or an infinitive phrase.<br>\n<br>\n<i>Er schnitt besser ab, als wir erwartet hatten.</i><br>\n<br>\nIf used to introduce an example, <i>&quot;wie&quot;</i> gets an optional apposition comma.<br>\n<br>\n<i>Die meisten Nadelbäume(,) wie Kiefer oder Fichte(,) behalten im Winter ihre Nadeln.</i>",
			"D128"
		],
		"%nok-comp-end": [
			"%nok-comp-end",
			"No comparison comma",
			"No comma is used before<i></i> <i>&quot;wie&quot;</i> or<i> &quot;als&quot;</i> where they are used as prepositions, i.e. in connection with a noun phrase or participle phrase.<br>\n<br>\n<i>Er schnitt besser ab[,] <b>als</b> erwartet.</i><br>\n<br>\n<i><b>Wie</b> schon beim ersten Versuch[,] scheiterte er an den strengen Aufnahmebedingungen.</i><br>\n<br>\nOn the other hand, the comma is obligatory if <i>&quot;als&quot;</i> or <i>&quot;wie&quot;</i> introduce a comparison that consists of a subclause or an infinitive phrase.<br>\n<br>\n<i>Er schnitt besser ab, als wir erwartet hatten.</i><br>\n<br>\nIf used to introduce an example, <i>&quot;wie&quot;</i> gets an optional apposition comma.<br>\n<br>\n<i>Die meisten Nadelbäume(,) wie Kiefer oder Fichte(,) behalten im Winter ihre Nadeln.</i>",
			"D128"
		],
		"%k-contrast": [
			"%k-contrast",
			"Contrast comma (start), obligatory",
			"Contrastive insertions are introduced by an opening comma. In particular, this is true for the conjunctions &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; and &quot;sondern&quot;. The corresponding closing comma is optional.<br>\n<br>\n<i>Die Spieler waren nervös, aber optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, andererseits die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ko-contrast": [
			"%ko-contrast",
			"Contrast comma (start), obligatory",
			"Contrastive insertions are introduced by an opening comma. In particular, this is true for the conjunctions &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; and &quot;sondern&quot;. The corresponding closing comma is optional.<br>\n<br>\n<i>Die Spieler waren nervös, aber optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, andererseits die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ok-contrast": [
			"%ok-contrast",
			"Contrast comma (start), obligatory",
			"Contrastive insertions are introduced by an opening comma. In particular, this is true for the conjunctions &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; and &quot;sondern&quot;. The corresponding closing comma is optional.<br>\n<br>\n<i>Die Spieler waren nervös, aber optimistisch.</i><br>\n<br>\n<i>Die Herbststürme brachten einerseits frischen Sauerstoff ins Wasser, andererseits die Gefahr von Hochwasserschäden.</i>",
			"D108"
		],
		"%ko-contrast-end": [
			"%ko-contrast-end",
			"Contrast comma (end), optional",
			"After contrastive insertions beginning with &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; or &quot;sondern&quot;, the closing comma is optional, because it isn't always clear whether the construction is a true insertion (with a closing comma) or a juxtaposition / list element (without a closing comma). The comma is least likely in connection with &quot;sondern&quot;.<br>\n<br>\n<i>Nicht deine Freunde, sondern meine(,) haben aufgeräumt nach dem Fest.</i><br>\n<br>\nIn all other cases, however, contrastive insertions get the ordinary paired comma, i.e. both opening and closing comma.<br>\n<br>\n<i>Das Reisebüreau bezahlte ihm sein Geld zurück, allerdings unter Abzug einer Bearbeitungsgebühr, und annulierte den Flug.</i>",
			"D108<br>\n<br>\nE63"
		],
		"%nko-contrast-end": [
			"%nko-contrast-end",
			"Contrast comma (end), optional",
			"After contrastive insertions beginning with &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; or &quot;sondern&quot;, the closing comma is optional, because it isn't always clear whether the construction is a true insertion (with a closing comma) or a juxtaposition / list element (without a closing comma). The comma is least likely in connection with &quot;sondern&quot;.<br>\n<br>\n<i>Nicht deine Freunde, sondern meine(,) haben aufgeräumt nach dem Fest.</i><br>\n<br>\nIn all other cases, however, contrastive insertions get the ordinary paired comma, i.e. both opening and closing comma.<br>\n<br>\n<i>Das Reisebüreau bezahlte ihm sein Geld zurück, allerdings unter Abzug einer Bearbeitungsgebühr, und annulierte den Flug.</i>",
			"D108<br>\n<br>\nE63"
		],
		"%nok-contrast-end": [
			"%nok-contrast-end",
			"No contrast comma (end)",
			"After contrastive insertions beginning with &quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; or &quot;sondern&quot;, the closing comma is optional, because it isn't always clear whether the construction is a true insertion (with closing comma) or a juxtaposition / list element (without closing comma).<br>\n<br>\nHowever, the closing comma is very rare with &quot;sondern&quot;, and its use is discouraged:<br>\n<br>\n<i>Ich möchte kein Pony, sondern ein richtiges Pferd[,] reiten.</i><br>\n<br>\n<i>Das Original ist nicht englisch, sondern chinesisch[,] und wurde nicht direkt ins Deutsche übersetzt.</i>",
			""
		],
		"%k-coord": [
			"%k-coord",
			"Coordination comma",
			"The most common types of a juxtaposition comma are the listing comma and the comma between juxtaposed, same-level clauses or phrases not separated by a conjunction. However, certain coordinating conjunctions<i> (geschweige)</i> or second parts of coordinating conjunction pairs <i>(halb ... halb,</i> <i>mal ... mal, teils ... teils,</i> <i>je ... desto)</i><i></i> do get a comma in juxtapositions.<br>\n<br>\n<i>Je früher, desto besser</i><br>\n<br>\n<i>Das Wesen war halb Tiger, halb Mensch.</i>",
			"E159<br>\n<br>\nE160<br>\n<br>\nE164"
		],
		"%ok-coord": [
			"%ok-coord",
			"Coordination comma",
			"The most common types of a juxtaposition comma are the listing comma and the comma between juxtaposed, same-level clauses or phrases not separated by a conjunction. However, certain coordinating conjunctions<i> (geschweige)</i> or second parts of coordinating conjunction pairs <i>(halb ... halb,</i> <i>mal ... mal, teils ... teils,</i> <i>je ... desto)</i><i></i> do get a comma in juxtapositions.<br>\n<br>\n<i>Je früher, desto besser</i><br>\n<br>\n<i>Das Wesen war halb Tiger, halb Mensch.</i>",
			"E159<br>\n<br>\nE160<br>\n<br>\nE164"
		],
		"%nok-coord": [
			"%nok-coord",
			"Spurious coordination comma",
			"In a coordination of only two element with &quot;und&quot;, &quot;oder&quot;, &quot;bzw.&quot;, &quot;resp.&quot;, &quot;sowie&quot; or &quot;wie&quot;, no comma is normally used. This is true of individual words (nouns, verbs, adjectives) as well as clauses and phrases.<br>\n<br>\n<i>Peter lud Freunde[,] und Verwandte zu einer Garten-Party ein.</i><br>\n<br>\n<i>SpaceX ha</i><i>t</i> <i>wieder</i> <i>eine Rakete</i><i> getestet</i><i>[,]</i> <i>und dabei</i> <i>50 Satelliten in die Erdumlaufbahn gebracht.</i><br>\n<br>\n<i>Der König[,] sowie sein gesamtes Gefolge[,] mussten notgedrungen auf der Insel übernachten.</i><br>\n<br>\nIn the same vein, no subclause comma is used if the subclause is coordinated with a list of nouns or a prepositional phrase:<br>\n<br>\n<i>Ich kaufe Brot, Wein und[,] was sonst noch fehlt.</i><br>\n<br>\n<i>Wenn die Kraniche kommen[,] oder in den Sommerferien kann man in Zingst viele Touristen sehen.</i><br>\n<br>\nThe coordinating conjunction pairs <i>&quot;s</i><i>owohl ... als auch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>sowohl ... wie auch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>weder ... noch</i><i>&quot;</i><i>,</i> <i>&quot;</i><i>nicht ... noch</i><i>&quot;</i><i>, &quot;entweder ... oder&quot;</i><i></i> do not get a comma either.<br>\n<br>\n<i>Weder sein Sohn[,] noch seine Tochter teilten seine Begeisterung für Volkstänze.</i><br>\n<br>\n<i>Volkstänze begeisterten weder seinen Sohn[,] noch seine Tochter.</i><br>\n<br>\nNote: This rule does not contradict parenthetical commas before or around expression as a whole if it is used as an insertion or afterthought. But even in this case, there is no comma before the second, coordinating part of the conjunction pair.<br>\n<br>\n<i>Er trinkt nie Kaffee, weder zu Hause[,] noch im Büro.</i><br>\n<br>\nContrastive coordinators (&quot;aber&quot;, &quot;doch&quot;, &quot;jedoch&quot; und &quot;sondern&quot;), however, are always preceded by a comma, as are the second parts of juxtaposing conjunction pairs:<i> &quot;einerseits ... andererseits&quot;, &quot;je ... desto&quot;, &quot;teils ... teils&quot;, &quot;mal ... mal&quot;</i> and<i> &quot;zum einen ... zum anderen&quot;</i><i>.</i><i></i> In addition, the latter get a parenthetical comma before the first part if they break the sentence flow.<br>\n<br>\nNote: A comma may occur even before the ordinary coordinators &quot;und&quot; or &quot;oder&quot; if it is needed for other reasons, e.g. as a closing comma after a subclause or appositive.<br>\n<br>\n<i>Ich hoffe, dass du kommen kannst, und freue mich auf ein gemeinsames Wochenende.</i><br>\n<br>\n<i>Sein Vater, ein passionierter Golfspieler, frönte gerade seinem Hobby auf Lanzarote.</i>",
			"D104<br>\n<br>\nD107<br>\n<br>\nE46"
		],
		"%nko-coord": [
			"%nko-coord",
			"Coordination comma, optional",
			"Ordinarily, there is no comma before a coordinating conjunction <i>(und, oder, sowie)</i> <i>-</i> unles there are other reasons for a comma in this position, for instance, as a closing comma after a subclause, infinitive group, explanation, insertion or appositive.<br>\n<br>\nStill, it is possible to place a clarity comma between two coordinated clauses, in order to facilitate reading coherence. A good example are cases where the subject of the second clause can be misunderstood as an object of the first (so-called garden path constructions):<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (criticizing the shareholders, too?)</i>",
			"E126"
		],
		"%ko-coord": [
			"%ko-coord",
			"Coordination comma, optional",
			"Ordinarily, there is no comma before a coordinating conjunction <i>(und, oder, sowie)</i> <i>-</i> unles there are other reasons for a comma in this position, for instance, as a closing comma after a subclause, infinitive group, explanation, insertion or appositive.<br>\n<br>\nStill, it is possible to place a clarity comma between two coordinated clauses, in order to facilitate reading coherence. A good example are cases where the subject of the second clause can be misunderstood as an object of the first (so-called garden path constructions):<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (criticizing the shareholders, too?)</i>",
			"E126"
		],
		"%k-day": [
			"%k-day",
			"Date comma (day)",
			"Weekdays and dates get separated by a date comma. If the sentence goes on after the date, e.g. adding time or place, there can be an optional closing comma, depending on whether the date is perceived as an appositive (always with a closing comma) or as a juxtaposed list element (comma only before an hour expression that is not introduced by a preposition).<br>\n<br>\n<i>Der Empfang ist am Sonntag, dem 12. April(,) um 20 Uhr.</i><br>\n<br>\n<i>Der Empfang ist am Sonntag, 12. April, 20 Uhr.</i><br>\n<br>\nIn letter headings, a date comma is used between place and date:<br>\n<br>\n<i>Oldenburg, 23.11.2019</i><br>\n<br>\n<i>Oldenburg, den 23. November 2019</i>",
			"D114<br>\n<br>\nE89<br>\n<br>\nE90"
		],
		"%ok-day": [
			"%ok-day",
			"Date comma (day)",
			"Weekdays and dates get separated by a date comma. If the sentence goes on after the date, e.g. adding time or place, there can be an optional closing comma, depending on whether the date is perceived as an appositive (always with a closing comma) or as a juxtaposed list element (comma only before an hour expression that is not introduced by a preposition).<br>\n<br>\n<i>Der Empfang ist am Sonntag, dem 12. April(,) um 20 Uhr.</i><br>\n<br>\n<i>Der Empfang ist am Sonntag, 12. April, 20 Uhr.</i><br>\n<br>\nIn letter headings, a date comma is used between place and date:<br>\n<br>\n<i>Oldenburg, 23.11.2019</i><br>\n<br>\n<i>Oldenburg, den 23. November 2019</i>",
			"D114<br>\n<br>\nE89<br>\n<br>\nE90"
		],
		"%nok-day": [
			"%nok-day",
			"No date comma",
			"In a two-part time construction, there is no comma between the date and the hour if the hour expression is introduced by a preposition.<br>\n<br>\n<i>Das Ergebnis wurde am Montag um 16:15 Uhr bekanntgegeben.</i><br>\n<br>\nWithout a preposition, or in a 3-part time construction, a separation comma is used before the hour expression:<br>\n<br>\n<i>Das Ergebnis wurde am Montag, 16:15(,) bekanntgegeben.</i><br>\n<br>\n<i>Das Ergebnins wurde am Montag, den 15. April, um 16:15(,) bekanntgegeben.</i><br>\n<br>\nThe closing comma after the hour expression is optional, depending on whether the construction is seen as a juxtaposition/list (without a closing comma) or as an apposition (with a closing comma).",
			"E90"
		],
		"%k-ellipsis": [
			"%k-ellipsis",
			"Ellipsis comma",
			"Verb-elliptical constructions, i.e. two linked clause constituents with omission of the (repeated) head verb, should be set off from the preceding main clause with a comma.<br>\n<br>\n<i>Auf der Arbeit ist er ein Held, zu Hause ein Versager.</i><br>\n<br>\n<i>Karl studiert Medizin, Klara Psychologie und Karel Physik.</i><br>\n<br>\nHowever, no comma is warranted if the elliptical construction is linked to the main clause with a coordinating conjunction <i>(und, oder)</i>:<br>\n<br>\n<i>Peter kaufte einen Pullover[,] und seine Freundin einen Schal.</i>",
			"E44"
		],
		"%ok-ellipsis": [
			"%ok-ellipsis",
			"Ellipsis comma",
			"Verb-elliptical constructions, i.e. two linked clause constituents with omission of the (repeated) head verb, should be set off from the preceding main clause with a comma.<br>\n<br>\n<i>Auf der Arbeit ist er ein Held, zu Hause ein Versager.</i><br>\n<br>\n<i>Karl studiert Medizin, Klara Psychologie und Karel Physik.</i><br>\n<br>\nHowever, no comma is warranted if the elliptical construction is linked to the main clause with a coordinating conjunction <i>(und, oder)</i>:<br>\n<br>\n<i>Peter kaufte einen Pullover[,] und seine Freundin einen Schal.</i>",
			"E44"
		],
		"%nok-ellipsis": [
			"%nok-ellipsis",
			"No ellipsis comma",
			"No comma is warranted if an ellipsis is joined to the preceding main clause with <i>&quot;und&quot;</i> or <i>&quot;oder&quot;</i>:<br>\n<br>\n<i>Peter</i> <i>kaufte einen Pullover</i><i>[</i><i>,</i><i>]</i><i> und seine Freundin einen Schal.</i>",
			"E45"
		],
		"%k-explain": [
			"%k-explain",
			"Explanation comma (start)",
			"Elaborations (examples and explanations) get a comma before the introducing word or expression: &quot;z.B.&quot;, &quot;nämlich&quot;, &quot;insbesondere&quot;, &quot;und zwar&quot;, &quot;d.h.&quot; etc.<br>\n<br>\n<i>Der Online-Shop verkauft hauptsächlich Wanderbedarf, z.B. Wanderschuhe, Zelte, Schlafsäcke und Outdoor-Kochgerät.</i><br>\n<br>\n<i>Ryan Air fliegt jede Woche zweimal nach Mallorca, und zwar Freitags und Montags.</i><br>\n<br>\nIf the elaboration consists of a subclause, the latter does not normally need its own opening comma - the delimiting task has, so to say, already been handled by the opening comma of the elaboration. Therefore, an additional (subclause) opening comma is unusual, though not forbidden.<br>\n<br>\n<i>Mann kan dieses Modell zusammenklappen, z.B.(,) wenn man es in der Bahn mitnehmen will.</i><br>\n<br>\nAn exception to this rule are &quot;d.h.&quot;/&quot;das heißt&quot;, &quot;d.i.&quot;, &quot;will heißen&quot; und &quot;sprich&quot; (all with verbal elements). Here, a possible subclause opening comma is placed<i> after</i> the elaboration opening, and<i></i> does <i>not</i> coincide with the elaboration opening comma.<br>\n<br>\n<i>Nach seiner erwarteten Wiederwahl, d.h., sobald alle Stimmen ausgezählt sind, wird er eine Ansprache halten.</i>",
			"D111<br>\n<br>\nE62"
		],
		"%ok-explain": [
			"%ok-explain",
			"Explanation comma (start)",
			"Elaborations (examples and explanations) get a comma before the introducing word or expression: &quot;z.B.&quot;, &quot;nämlich&quot;, &quot;insbesondere&quot;, &quot;und zwar&quot;, &quot;d.h.&quot; etc.<br>\n<br>\n<i>Der Online-Shop verkauft hauptsächlich Wanderbedarf, z.B. Wanderschuhe, Zelte, Schlafsäcke und Outdoor-Kochgerät.</i><br>\n<br>\n<i>Ryan Air fliegt jede Woche zweimal nach Mallorca, und zwar Freitags und Montags.</i><br>\n<br>\nIf the elaboration consists of a subclause, the latter does not normally need its own opening comma - the delimiting task has, so to say, already been handled by the opening comma of the elaboration. Therefore, an additional (subclause) opening comma is unusual, though not forbidden.<br>\n<br>\n<i>Mann kan dieses Modell zusammenklappen, z.B.(,) wenn man es in der Bahn mitnehmen will.</i><br>\n<br>\nAn exception to this rule are &quot;d.h.&quot;/&quot;das heißt&quot;, &quot;d.i.&quot;, &quot;will heißen&quot; und &quot;sprich&quot; (all with verbal elements). Here, a possible subclause opening comma is placed<i> after</i> the elaboration opening, and<i></i> does <i>not</i> coincide with the elaboration opening comma.<br>\n<br>\n<i>Nach seiner erwarteten Wiederwahl, d.h., sobald alle Stimmen ausgezählt sind, wird er eine Ansprache halten.</i>",
			"D111<br>\n<br>\nE62"
		],
		"%k-explain-end": [
			"%k-explain-end",
			"Explanation comma (end)",
			"Elaborating insertions (explanations and examples) are comma-delimited both at the beginning and the end.<br>\n<br>\n<i>Die meisten Nadelbäume, wie z.B. Kiefer und Fichte, werfen ihre Nadeln im Winter nicht ab.</i>",
			"D111"
		],
		"%ok-explain-end": [
			"%ok-explain-end",
			"Explanation comma (end)",
			"Elaborating insertions (explanations and examples) are comma-delimited both at the beginning and the end.<br>\n<br>\n<i>Die meisten Nadelbäume, wie z.B. Kiefer und Fichte, werfen ihre Nadeln im Winter nicht ab.</i>",
			"D111"
		],
		"%ko-explain": [
			"%ko-explain",
			"Explanation comma, optional",
			"Explanation commas are optional if the elaboration fulfills the following conditions: (1) It is not post-positioned and does not break the flow of the sentence. (2) The introducing conjunction or opening expression is neither contrastive nor concessive<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> and does not contain &quot;und&quot; or a verbal element <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nIn post-position, however, after a noun or sentence closure, comma(s) must be used:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Elaboration placed after its target word)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Elaboration placed after the main clause)</i>",
			"E66"
		],
		"%nko-explain": [
			"%nko-explain",
			"Explanation comma, optional",
			"Explanation commas are optional if the elaboration fulfills the following conditions: (1) It is not post-positioned and does not break the flow of the sentence. (2) The introducing conjunction or opening expression is neither contrastive nor concessive<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> and does not contain &quot;und&quot; or a verbal element <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nIn post-position, however, after a noun or sentence closure, comma(s) must be used:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Elaboration placed after its target word)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Elaboration placed after the main clause)</i>",
			"E66"
		],
		"%ko-explain-end": [
			"%ko-explain-end",
			"Explanation comma, optional",
			"Explanation commas are optional if the elaboration fulfills the following conditions: (1) It is not post-positioned and does not break the flow of the sentence. (2) The introducing conjunction or opening expression is neither contrastive nor concessive<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> and does not contain &quot;und&quot; or a verbal element <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nIn post-position, however, after a noun or sentence closure, comma(s) must be used:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Elaboration placed after its target word)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Elaboration placed after the main clause)</i>",
			"E66"
		],
		"%nko-explain-end": [
			"%nko-explain-end",
			"Explanation comma, optional",
			"Explanation commas are optional if the elaboration fulfills the following conditions: (1) It is not post-positioned and does not break the flow of the sentence. (2) The introducing conjunction or opening expression is neither contrastive nor concessive<i> (</i><i>allerdings, jedoch,</i> <i>ob</i><i>wohl</i><i>, wenngleich, wenn auch, wenn schon</i><i>, vielmehr</i><i>)</i><i></i> and does not contain &quot;und&quot; or a verbal element <i>(und zwar, d.h., das ist, sprich, will heißen).</i><br>\n<br>\n<i>S</i><i>ie hat(,) z.B. für unsere Spieletreffen(,) viele leckere Kuchen gebacken.</i><br>\n<br>\nIn post-position, however, after a noun or sentence closure, comma(s) must be used:<br>\n<br>\n<i>Sie hat oft sehr leckere Kuchen, vor allem Obstkuchen und Hefekuchen, für unsere Treffen gebacken. (Elaboration placed after its target word)</i><br>\n<br>\n<i>Sie kann leckeren Kuchen backen, vor allem Obst- und Hefekuchen. (Elaboration placed after the main clause)</i>",
			"E66"
		],
		"%nok-explain-end": [
			"%nok-explain-end",
			"No explanation comma",
			"Elaborations after attributes or dependent parts of a verb phrase do not get a closing comma.<br>\n<br>\n<i>Er hat viele fremdsprachliche, z.B. französische und englische[,] Aufsätze publiziert.</i><br>\n<br>\n<i>Die Unterlagen erhält man, nachdem man sich immatrikuliert, d.h. an der Hochschule registriert[,] hat.</i>",
			"D111"
		],
		"%ok-extra": [
			"%ok-extra",
			"Extras comma",
			"<i>Extra material at the beginning or at the end of a sentence is set apart from the latter by a comma. The set-off material belongs outside the sentence flow, either syntactically or because it is stressed. Typical cases are interjections, affirmation or rejection expressions or comment tags.</i><br>\n<br>\n<i>Das Eis ist lecker, nicht wahr?</i><br>\n<br>\n<i>Nein, den Hund habe ich noch nie gesehen.</i><br>\n<br>\n<i>Ach, das kann doch nicht sein.</i><br>\n<br>\n<i>Super, das machen wir!</i><br>\n<br>\n<i>Mir reicht das eine Bier, danke.</i><br>\n<br>\n<i>Doch, der Gutschein ist abgelafufen, leider.</i><br>\n<br>\n<i>Unmöglich, er blufft nur.</i><br>\n<br>\nAn extras comma is also used for topicalizations, i.e. where a sentence starts with a noun or prepositional phrase (topic) that is then taken up again by a pronoun:<br>\n<br>\n<i>Deine Schwester, die mag ich!</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\n<i>Denn der Gärtner, der ist immer der Mörder.</i>",
			"D130<br>\n<br>\nD129<br>\n<br>\nE42<br>\n<br>\nE57<br>\n<br>\nE58<br>\n<br>\nE59"
		],
		"%k-extra": [
			"%k-extra",
			"Extras comma",
			"<i>Extra material at the beginning or at the end of a sentence is set apart from the latter by a comma. The set-off material belongs outside the sentence flow, either syntactically or because it is stressed. Typical cases are interjections, affirmation or rejection expressions or comment tags.</i><br>\n<br>\n<i>Das Eis ist lecker, nicht wahr?</i><br>\n<br>\n<i>Nein, den Hund habe ich noch nie gesehen.</i><br>\n<br>\n<i>Ach, das kann doch nicht sein.</i><br>\n<br>\n<i>Super, das machen wir!</i><br>\n<br>\n<i>Mir reicht das eine Bier, danke.</i><br>\n<br>\n<i>Doch, der Gutschein ist abgelafufen, leider.</i><br>\n<br>\n<i>Unmöglich, er blufft nur.</i><br>\n<br>\nAn extras comma is also used for topicalizations, i.e. where a sentence starts with a noun or prepositional phrase (topic) that is then taken up again by a pronoun:<br>\n<br>\n<i>Deine Schwester, die mag ich!</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\n<i>Denn der Gärtner, der ist immer der Mörder.</i>",
			"D130<br>\n<br>\nD129<br>\n<br>\nE42<br>\n<br>\nE57<br>\n<br>\nE58<br>\n<br>\nE59"
		],
		"%nok-extra": [
			"%nok-extra",
			"No extras comma",
			"Unlike English, German does not set off introducing prepositional phrases with a comma, unless they are explicitly topicalized through pronominal repetition.<br>\n<br>\n<i>Abgesehen von dem ewigen Regen[,] ist Irland eine sehr schöne Insel.</i><br>\n<br>\n<i>Einschließlich der neu eingeführten Energieabgaben[,] ist der Strompreis dieses Jahr um 30% gestiegen.</i><br>\n<br>\nException: Topicalization with subsequent <i>&quot;da&quot;, &quot;daran&quot;, &quot;damit&quot;</i><i></i> etc<i>:</i><br>\n<br>\n<i>In dieser Berghütte, da haben wir schon öfter gefeiert.</i><br>\n<br>\nIf the same expression occurs in another, non-initial position, a comma is sometimes used if the expression is perceived as an insertion or a post-position. However, this type of comma is only obligatory if the expression breaks the sentence flow.<br>\n<br>\n<i>Irland ist(,) abgesehen vom ewigen Regen(,) eine sehr schöne Insel.</i><br>\n<br>\n<i>Irland, trotz des ewigen Regens, ist eigentlich eine schöne Insel.</i><br>\n<br>\n<i>The word &quot;Bitte&quot; is not normally comma-separated from the rest of the sentence either:</i><br>\n<br>\n<i>Bitte[,] nehmen Sie noch ein Stück Kuchen.</i><br>\n<br>\nOnly with special emphasis, e.g. after &quot;aber&quot;, a comma may be used:<br>\n<br>\n<i>Aber bitte, nehmen Sie doch noch ein Stück Kuchen.</i>",
			"E57<br>\n<br>\nE84"
		],
		"%k-FSstart": [
			"%k-FSstart",
			"Subclause opening comma",
			"In German, subclauses (subordinate clauses) are delimited with both an opening and a closing comma. German subclauses are relatively easy to identify because they almost always are introduced by a (subordinating) conjunction <i>(&quot;dass&quot;, &quot;weil&quot;, &quot;wenn&quot;),</i> a relative pronoun<i> (&quot;der&quot;, &quot;welcher&quot;, &quot;woran&quot;)</i> or an interrogative<i> (&quot;wie&quot;, &quot;ob&quot;, &quot;warum&quot;)</i>. An additional marker is the fact that the finite (inflected) verb is placed last in a subclause. Subclauses can have an adverbial function (temporal, causal, conditional, final etc.) or replace other clause constituents (e.g. subject or object).<br>\n<br>\n<i>Es ist nett, <b>dass</b> du mir helfen willst. (Subjekt-Satz mitKonjunktion)</i><br>\n<br>\n<i>Versprich mir, <b>dass</b> du dich anstrengst! (Objekt-Satz mit Konjunktion)</i><br>\n<br>\n<i>Ich weiß nicht, <b>wie</b> das weitergehen soll. (Objekt-Satz mit Fragewort)</i><br>\n<br>\n<i><b>Wenn</b> wir noch ins Kino wollen, müssen wir früher essen. (Konditionalsatz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\n<i>Complex conjunctions (typically preposition + conjunction) are treated as a whole and not split by the opening comma (als ob, als dass, anstatt dass, wie wenn, wenn auch, außer wenn, außer wo). Rather, the opening comma is placed to the left of the first element, even if that is a preposition or adverb, and not a conjunction.</i><br>\n<br>\n<i>Sie feierten, <b>als ob</b> morgen die Welt unterginge.</i><br>\n<br>\n<i>Sometimes, the subordinating conjunction or conjunctional expression is preceded by an adverb. If this adverb relates to the conjunction (and is thus not a part of the main clause), the subclause opening comma is moved left, before the adverb:</i><br>\n<br>\n<i>Er hat jeden Tag trainiert, <b>sogar</b> <b>wenn</b> er Fieber hatte.</i><br>\n<br>\n<i>Er wird wohl wiedergewählt werden, <b>nicht weil</b> er es verdient hätte, <b>sondern weil</b> es keine Alternative gibt.</i><br>\n<br>\nBut: <i>Das Rückgaberecht gilt</i> <b><i>auch, wenn</i></b><i> die Bestellung mündlich aufgegeben wurde.</i> ('auch' is part of the main clause)<br>\n<br>\nNote: The elaborating introductions '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> and '<i>will heißen'</i> are not, in this sense, regarded as adverbs or adverbial expressions, but rather as mini-clauses with a verbal element. Therefore, an additional comma is needed between these expression and the opening conjunction of a possible subclause.<br>\n<br>\n<i>Bei Regen, d.h., wenn die Felsen nass sind, ist der Abstieg schwierig.</i><br>\n<br>\n<i>Subclauses are not only comma-separated from the mainclause, but also from each other if they belong to different levels in the syntactic tree, i.e. if one is a constituent of the other. Here, the lower-level subclause gets opening/closing commas just like a subclause before, after or inside a main clause.</i><br>\n<br>\n<i>Man kann den Strandparkplatz nicht bei Vollmond benutzen, <b>weil</b> dann die Gefahr besteht, <b>dass</b> er überschwemmt wird.</i><br>\n<br>\nNote: As a special case, subclauses can be subordinated not to another clause, but to a single word or phrase:<br>\n<br>\n<i>Vielleicht, <b>dass</b> es doch noch klappt.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%ok-FSstart": [
			"%ok-FSstart",
			"Subclause opening comma",
			"In German, subclauses (subordinate clauses) are delimited with both an opening and a closing comma. German subclauses are relatively easy to identify because they almost always are introduced by a (subordinating) conjunction <i>(&quot;dass&quot;, &quot;weil&quot;, &quot;wenn&quot;),</i> a relative pronoun<i> (&quot;der&quot;, &quot;welcher&quot;, &quot;woran&quot;)</i> or an interrogative<i> (&quot;wie&quot;, &quot;ob&quot;, &quot;warum&quot;)</i>. An additional marker is the fact that the finite (inflected) verb is placed last in a subclause. Subclauses can have an adverbial function (temporal, causal, conditional, final etc.) or replace other clause constituents (e.g. subject or object).<br>\n<br>\n<i>Es ist nett, <b>dass</b> du mir helfen willst. (Subjekt-Satz mitKonjunktion)</i><br>\n<br>\n<i>Versprich mir, <b>dass</b> du dich anstrengst! (Objekt-Satz mit Konjunktion)</i><br>\n<br>\n<i>Ich weiß nicht, <b>wie</b> das weitergehen soll. (Objekt-Satz mit Fragewort)</i><br>\n<br>\n<i><b>Wenn</b> wir noch ins Kino wollen, müssen wir früher essen. (Konditionalsatz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\n<i>Complex conjunctions (typically preposition + conjunction) are treated as a whole and not split by the opening comma (als ob, als dass, anstatt dass, wie wenn, wenn auch, außer wenn, außer wo). Rather, the opening comma is placed to the left of the first element, even if that is a preposition or adverb, and not a conjunction.</i><br>\n<br>\n<i>Sie feierten, <b>als ob</b> morgen die Welt unterginge.</i><br>\n<br>\n<i>Sometimes, the subordinating conjunction or conjunctional expression is preceded by an adverb. If this adverb relates to the conjunction (and is thus not a part of the main clause), the subclause opening comma is moved left, before the adverb:</i><br>\n<br>\n<i>Er hat jeden Tag trainiert, <b>sogar</b> <b>wenn</b> er Fieber hatte.</i><br>\n<br>\n<i>Er wird wohl wiedergewählt werden, <b>nicht weil</b> er es verdient hätte, <b>sondern weil</b> es keine Alternative gibt.</i><br>\n<br>\nBut: <i>Das Rückgaberecht gilt</i> <b><i>auch, wenn</i></b><i> die Bestellung mündlich aufgegeben wurde.</i> ('auch' is part of the main clause)<br>\n<br>\nNote: The elaborating introductions '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> and '<i>will heißen'</i> are not, in this sense, regarded as adverbs or adverbial expressions, but rather as mini-clauses with a verbal element. Therefore, an additional comma is needed between these expression and the opening conjunction of a possible subclause.<br>\n<br>\n<i>Bei Regen, d.h., wenn die Felsen nass sind, ist der Abstieg schwierig.</i><br>\n<br>\n<i>Subclauses are not only comma-separated from the mainclause, but also from each other if they belong to different levels in the syntactic tree, i.e. if one is a constituent of the other. Here, the lower-level subclause gets opening/closing commas just like a subclause before, after or inside a main clause.</i><br>\n<br>\n<i>Man kann den Strandparkplatz nicht bei Vollmond benutzen, <b>weil</b> dann die Gefahr besteht, <b>dass</b> er überschwemmt wird.</i><br>\n<br>\nNote: As a special case, subclauses can be subordinated not to another clause, but to a single word or phrase:<br>\n<br>\n<i>Vielleicht, <b>dass</b> es doch noch klappt.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%k-FSend": [
			"%k-FSend",
			"Subclause closing comma",
			"Introductory or enclosed subclauses get a closing comma to separate them from the continuing part of the higher-level clause.<br>\n<br>\n<i><b>Wenn</b> du kommen kannst, gib mir bitte Bescheid! (Adverbialsatz)</i><br>\n<br>\n<i><b>Dass</b> er nicht schwimmen konnte, war ein Problem. (Subjekt-Satz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\nThis closing comma is needed even if the higher-level clause continues with an &quot;und&quot; or &quot;oder&quot;, the reason being that the conjunction does not coordinate the subclause, but rather a preceding higher-level element.<br>\n<br>\n<i>Wenn man vermeiden will, dass Bären ins Zelt kommen, <b>oder</b> wenn es Ameisen gibt, kann man das Essen in einen Baum hängen.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%ok-FSend": [
			"%ok-FSend",
			"Subclause closing comma",
			"Introductory or enclosed subclauses get a closing comma to separate them from the continuing part of the higher-level clause.<br>\n<br>\n<i><b>Wenn</b> du kommen kannst, gib mir bitte Bescheid! (Adverbialsatz)</i><br>\n<br>\n<i><b>Dass</b> er nicht schwimmen konnte, war ein Problem. (Subjekt-Satz)</i><br>\n<br>\n<i>Das Meerschweinchen, <b>das</b> ich meiner Nichte geschenkt habe, hat Junge bekommen. (eingeschobener Relativ- oder Attributsatz)</i><br>\n<br>\nThis closing comma is needed even if the higher-level clause continues with an &quot;und&quot; or &quot;oder&quot;, the reason being that the conjunction does not coordinate the subclause, but rather a preceding higher-level element.<br>\n<br>\n<i>Wenn man vermeiden will, dass Bären ins Zelt kommen, <b>oder</b> wenn es Ameisen gibt, kann man das Essen in einen Baum hängen.</i>",
			"D118<br>\n<br>\nD119"
		],
		"%nok-FSstart": [
			"%nok-FSstart",
			"Spurious subclause comma",
			"In multi-word conjunctional expressions consisting of a preposition and a conjunction, no internal comma is allowed. If the expression introduces a post-positioned or enclosed subclause, the opening comma is placed left of the whole expression, i.e. before the preposition.<br>\n<br>\n<i>Er läuft, <b>als[,] ob</b> sein Leben davon abhinge.</i><br>\n<br>\n<i><b>Anstatt[,] dass</b> eine Brücke gebaut wurde, wurden zusätzliche Fähren eingesetzt.</i>",
			"D121"
		],
		"%nko-FSstart-mwe": [
			"%nko-FSstart-mwe",
			"Internal conjunction comma in subordinating expressions",
			"<i>When a subclause is introduced by a multi-word expression consisting of adverb(s) and/or a participle followed by a conjunction, an expression-internal comma can be placed before the conjunction. This internal conjunction comma is optional.</i><br>\n<br>\n<i>Je nachdem(,) ob Weihnachten Schnee liegt, werden wir den Kindern einen Schlitten kaufen.</i><br>\n<br>\n<i>Egal(,) ob es stürmt oder nicht, wir müssen da hinauf.</i><br>\n<br>\n<i>Geschweige denn(,) dass Stau ist, sind wir um fünf da.</i><br>\n<br>\nIf such subclauses occur after a main clause or are embedded within it, the real opening comma is obligatory and placed left of the entire multi-word expression, i.e. before the first adverb or before the participle part.<br>\n<br>\n<i></i><br>\n<br>\n<i>Er spricht kaum französich, ausgenommen(,) wenn er getrunken hat.</i><br>\n<br>\nThis rule applies to subordinating expressions like the following:<br>\n<br>\n<i>Angenommen/ausgenommen/vorausgesetzt + dass</i><br>\n<br>\n<i>Z.B./beispielsweise/und zwar + dass/wenn/weil</i><br>\n<br>\n<i>Besonders/namentlich/nämlich/vor allem + wenn/weil</i><br>\n<br>\n<i>Soweit/insofern/so/um so mehr/weniger/eher + als</i><br>\n<br>\n<i>Egal/gleichviel/je nachdem + ob</i><br>\n<br>\n<i>Kaum/geschweige denn + dass</i><br>\n<br>\n<i>Im Fall + dass</i>",
			"<i>D122</i>"
		],
		"%ko-FSstart-mwe": [
			"%ko-FSstart-mwe",
			"Internal conjunction comma in subordinating expressions",
			"<i>When a subclause is introduced by a multi-word expression consisting of adverb(s) and/or a participle followed by a conjunction, an expression-internal comma can be placed before the conjunction. This internal conjunction comma is optional.</i><br>\n<br>\n<i>Je nachdem(,) ob Weihnachten Schnee liegt, werden wir den Kindern einen Schlitten kaufen.</i><br>\n<br>\n<i>Egal(,) ob es stürmt oder nicht, wir müssen da hinauf.</i><br>\n<br>\n<i>Geschweige denn(,) dass Stau ist, sind wir um fünf da.</i><br>\n<br>\nIf such subclauses occur after a main clause or are embedded within it, the real opening comma is obligatory and placed left of the entire multi-word expression, i.e. before the first adverb or before the participle part.<br>\n<br>\n<i></i><br>\n<br>\n<i>Er spricht kaum französich, ausgenommen(,) wenn er getrunken hat.</i><br>\n<br>\nThis rule applies to subordinating expressions like the following:<br>\n<br>\n<i>Angenommen/ausgenommen/vorausgesetzt + dass</i><br>\n<br>\n<i>Z.B./beispielsweise/und zwar + dass/wenn/weil</i><br>\n<br>\n<i>Besonders/namentlich/nämlich/vor allem + wenn/weil</i><br>\n<br>\n<i>Soweit/insofern/so/um so mehr/weniger/eher + als</i><br>\n<br>\n<i>Egal/gleichviel/je nachdem + ob</i><br>\n<br>\n<i>Kaum/geschweige denn + dass</i><br>\n<br>\n<i>Im Fall + dass</i>",
			"<i>D122</i>"
		],
		"%nko-FSstart": [
			"%nko-FSstart",
			"Optional subclause comma",
			"In multi-word expressions that introduce an explanation or other elaboration, and consist of an adverbial ellipsis (with a missing verb) followed by a (subordinating) conjunction, an optional (subclause) comma may be placed before the conjunction. The main comma, left of the entire expression, is itself not a subclause comma, but an elaboration comma or a closing comma.<br>\n<br>\n<i>Sie sprangen ins eiskalte Wasser, <b>und das(,) obwohl</b> es schneite. (elaboration)</i><br>\n<br>\n<i>Wenn ich mich einmische,<b> dann nur(,) weil</b> ich keinen anderen Ausweg sehe. (post-positioned main-clause ellipsis)</i><br>\n<br>\n<i>Der Abend verlief zufriedenstellend, <b>wenn auch nicht ganz(,) wie</b> wir es erwartet hatten. (concessive afterthought)</i><br>\n<br>\n<i>If an interrogative clause is shrunk to consist only of the interrogative itself, a subclause comma can still be used before it, for reasons of clarity. However, in this case, the comma is optional.</i><br>\n<br>\n<i>Die Pandemie wird enden, es fragt sich nur(,) wann.</i>",
			""
		],
		"%ko-FSstart": [
			"%ko-FSstart",
			"Optional subclause comma",
			"In multi-word expressions that introduce an explanation or other elaboration, and consist of an adverbial ellipsis (with a missing verb) followed by a (subordinating) conjunction, an optional (subclause) comma may be placed before the conjunction. The main comma, left of the entire expression, is itself not a subclause comma, but an elaboration comma or a closing comma.<br>\n<br>\n<i>Sie sprangen ins eiskalte Wasser, <b>und das(,) obwohl</b> es schneite. (elaboration)</i><br>\n<br>\n<i>Wenn ich mich einmische,<b> dann nur(,) weil</b> ich keinen anderen Ausweg sehe. (post-positioned main-clause ellipsis)</i><br>\n<br>\n<i>Der Abend verlief zufriedenstellend, <b>wenn auch nicht ganz(,) wie</b> wir es erwartet hatten. (concessive afterthought)</i><br>\n<br>\n<i>If an interrogative clause is shrunk to consist only of the interrogative itself, a subclause comma can still be used before it, for reasons of clarity. However, in this case, the comma is optional.</i><br>\n<br>\n<i>Die Pandemie wird enden, es fragt sich nur(,) wann.</i>",
			""
		],
		"%ok-ASstart": [
			"%ok-ASstart",
			"Subordinator comma (verbless subclause)",
			"Incomplete (verbless) subordinator clauses consisting only of a subordinator (conjunction) and one predicating constituent are treated like ordinary, full subclauses and comma-delimited with a paired comma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nException: When a verbless subordinator clause is used as a juxtaposed attribute (a) or when it is linked to the dependent part of a verb phrase (b), it does not get a closing comma, only an opening comma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%k-ASstart": [
			"%k-ASstart",
			"Subordinator comma (verbless subclause)",
			"Incomplete (verbless) subordinator clauses consisting only of a subordinator (conjunction) and one predicating constituent are treated like ordinary, full subclauses and comma-delimited with a paired comma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nException: When a verbless subordinator clause is used as a juxtaposed attribute (a) or when it is linked to the dependent part of a verb phrase (b), it does not get a closing comma, only an opening comma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%ok-ASend": [
			"%ok-ASend",
			"Subordinator comma (verbless subclause)",
			"Incomplete (verbless) subordinator clauses consisting only of a subordinator (conjunction) and one predicating constituent are treated like ordinary, full subclauses and comma-delimited with a paired comma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nException: When a verbless subordinator clause is used as a juxtaposed attribute (a) or when it is linked to the dependent part of a verb phrase (b), it does not get a closing comma, only an opening comma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%k-ASend": [
			"%k-ASend",
			"Subordinator comma (verbless subclause)",
			"Incomplete (verbless) subordinator clauses consisting only of a subordinator (conjunction) and one predicating constituent are treated like ordinary, full subclauses and comma-delimited with a paired comma.<br>\n<br>\n<i>Der Pilot, obwohl schwer verletzt, hatte das Flugzeug noch sicher gelandet.</i><br>\n<br>\nException: When a verbless subordinator clause is used as a juxtaposed attribute (a) or when it is linked to the dependent part of a verb phrase (b), it does not get a closing comma, only an opening comma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			""
		],
		"%nko-ASstart": [
			"%nko-ASstart",
			"Optional subordinator comma (verbless subclause)",
			"Verbless subordinator clauses can optionally be used without a comma if they are short and formulaic in nature:<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%ko-ASstart": [
			"%ko-ASstart",
			"Optional subordinator comma (verbless subclause)",
			"Verbless subordinator clauses can optionally be used without a comma if they are short and formulaic in nature:<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%nko-ASend": [
			"%nko-ASend",
			"Optional subordinator comma (verbless subclause)",
			"Verbless subordinator clauses can optionally be used without a comma if they are short and formulaic in nature:<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%ko-ASend": [
			"%ko-ASend",
			"Optional subordinator comma (verbless subclause)",
			"Verbless subordinator clauses can optionally be used without a comma if they are short and formulaic in nature:<br>\n<br>\n<i>Er soll mich(,) wenn möglich(,) noch heute abend anrufen.</i>",
			"D120"
		],
		"%nok-ASend": [
			"%nok-ASend",
			"Spurious subordinator closing comma (verbless subclause)",
			"When a verbless subordinator clause is used as a juxtaposed attribute (a) or when it is linked to the dependent part of a verb phrase (b), it does not get a closing comma, only an opening comma.<br>\n<br>\n<i>(a) Paella ist ein leckeres, wenn auch etwas aufwendiges[,] Essen.</i><br>\n<br>\n<i>(b) Ich habe gehört, dass er die Schachmeisterschaft belebt, wenngleich nicht gewonnen[,] hat.</i>",
			"E171"
		],
		"%ok-inf": [
			"%ok-inf",
			"Obligatory infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas. These infinitive commas are obligatory in the following cases:<br>\n<br>\n(1) The infinitive phrase or clause is introduced by a trigger conjunction <i>(als, anstatt, außer, ohne, statt, um)</i><i>.</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) An expanded infinitive phrase (infinitive clause) is valency-bound to a noun or (rarely) an adjective.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) The higher-level clause contains a placeholder for the infinitive <i>(es, das, daran, darauf, dafür etc.)</i>, and the infinitive is expanded (infinitive clause).<br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nOnly in case (1) is the comma is obligatory even for &quot;naked&quot; (un-expanded) infinitives. In cases (2) and (3) the comma can be omitted if the infinitive phrase contains no arguments or adjuncts besides the particle &quot;zu&quot;.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (optional paired comma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt,</i> <i>daran</i><i> viel verdienen zu können.</i><i></i> (an etwas verdienen)",
			"D125<br>\n<br>\nE95ff"
		],
		"%k-inf": [
			"%k-inf",
			"Obligatory infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas. These infinitive commas are obligatory in the following cases:<br>\n<br>\n(1) The infinitive phrase or clause is introduced by a trigger conjunction <i>(als, anstatt, außer, ohne, statt, um)</i><i>.</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) An expanded infinitive phrase (infinitive clause) is valency-bound to a noun or (rarely) an adjective.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) The higher-level clause contains a placeholder for the infinitive <i>(es, das, daran, darauf, dafür etc.)</i>, and the infinitive is expanded (infinitive clause).<br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nOnly in case (1) is the comma is obligatory even for &quot;naked&quot; (un-expanded) infinitives. In cases (2) and (3) the comma can be omitted if the infinitive phrase contains no arguments or adjuncts besides the particle &quot;zu&quot;.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (optional paired comma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt,</i> <i>daran</i><i> viel verdienen zu können.</i><i></i> (an etwas verdienen)",
			"D125<br>\n<br>\nE95ff"
		],
		"%ok-inf-end": [
			"%ok-inf-end",
			"Obligatory infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas. These infinitive commas are obligatory in the following cases:<br>\n<br>\n(1) The infinitive phrase or clause is introduced by a trigger conjunction <i>(als, anstatt, außer, ohne, statt, um)</i><i>.</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) An expanded infinitive phrase (infinitive clause) is valency-bound to a noun or (rarely) an adjective.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) The higher-level clause contains a placeholder for the infinitive <i>(es, das, daran, darauf, dafür etc.)</i>, and the infinitive is expanded (infinitive clause).<br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nOnly in case (1) is the comma is obligatory even for &quot;naked&quot; (un-expanded) infinitives. In cases (2) and (3) the comma can be omitted if the infinitive phrase contains no arguments or adjuncts besides the particle &quot;zu&quot;.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (optional paired comma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt,</i> <i>daran</i><i> viel verdienen zu können.</i><i></i> (an etwas verdienen)",
			"D125<br>\n<br>\nE95ff"
		],
		"%k-inf-end": [
			"%k-inf-end",
			"Obligatory infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas. These infinitive commas are obligatory in the following cases:<br>\n<br>\n(1) The infinitive phrase or clause is introduced by a trigger conjunction <i>(als, anstatt, außer, ohne, statt, um)</i><i>.</i><br>\n<br>\n<i>Es gibt nichts Romantischeres, <b>als</b> bei Sonnenuntergang im Meer <b>zu baden</b>.</i><br>\n<br>\n<i><b>Anstatt</b> im Fußball-Trikot auf dem Sofa <b>zu liegen</b>, solltest du lieber den Aufsatz zu Ende schreiben.</i><br>\n<br>\n(2) An expanded infinitive phrase (infinitive clause) is valency-bound to a noun or (rarely) an adjective.<br>\n<br>\n<i>Die <b>Idee</b>, ihm einen Rucksack <b>zu schenken</b>, gefällt mir.</i><br>\n<br>\n(3) The higher-level clause contains a placeholder for the infinitive <i>(es, das, daran, darauf, dafür etc.)</i>, and the infinitive is expanded (infinitive clause).<br>\n<br>\n<i>Ich freue mich <b>darauf</b>, den Sommer am Mittelmeer <b>zu verbringen</b>.</i><br>\n<br>\n<i>Ich hasse <b>es</b>, den ganzen Tag nur im Büro <b>zu sitzen</b>.</i><br>\n<br>\nOnly in case (1) is the comma is obligatory even for &quot;naked&quot; (un-expanded) infinitives. In cases (2) and (3) the comma can be omitted if the infinitive phrase contains no arguments or adjuncts besides the particle &quot;zu&quot;.<br>\n<br>\n<i>Sein Versuch(,) zu helfen(,) scheiterte kläglich. (optional paired comma)</i><br>\n<br>\n<i>Sie liebt es(,) zu tanzen.</i><br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Er glaubt daran, viel verdienen zu können. (an etwas glauben)</i><br>\n<br>\n<i>Er glaubt,</i> <i>daran</i><i> viel verdienen zu können.</i><i></i> (an etwas verdienen)",
			"D125<br>\n<br>\nE95ff"
		],
		"%nko-inf": [
			"%nko-inf",
			"Optional infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas.<br>\n<br>\nHowever, as a rule of thumb, these commas are only obligatory after a trigger conjunction <i>(anstatt, ohne, um)</i> or - for expanded infinitives - in the presence of a place holder <i>(es, das, daran)</i> or an infinitive-governing noun <i>(Idee, Vorschlag)</i>. In all other cases, including when the infinitive functions as subject or object, the comma is optional:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nFor un-expanded infinitives (last example), the tendency is to omit the comma. The longer and the more complex the infinitive clause, the more likely the comma.<br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nFor infinitives that depend on a noun or placeholder word, the comma can be omitted, if the infinitiv phrase is not expanded, i.e. if it doesn't contain other elements than the infinitive marker &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nThe optional infinitive comma has a special &quot;grading&quot; role with verbs that can occur, with the same sense, as either full verbs or support verbs <i>(</i>e.g.<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Here, not using a comma means weakening the independent role of these verbs in the sentence, letting them appear as mere modifiers of the infinitive.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nIn these cases, a comma gets more likely, if the support verb is itself accompanied by an auxiliary (a), or if it carries its own object or adverbial, separate of the infinitive phrase (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAnother type of optional infinitive comma can be inserted after the elaboration openers '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i><i>,</i> if they are followed by an infinitive phrase. This is possible, even though there is already an (elaboration) comma left of these expressions, because they are not adverbs and can be regarded as miniature clauses due to their verbal element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%ko-inf": [
			"%ko-inf",
			"Optional infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas.<br>\n<br>\nHowever, as a rule of thumb, these commas are only obligatory after a trigger conjunction <i>(anstatt, ohne, um)</i> or - for expanded infinitives - in the presence of a place holder <i>(es, das, daran)</i> or an infinitive-governing noun <i>(Idee, Vorschlag)</i>. In all other cases, including when the infinitive functions as subject or object, the comma is optional:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nFor un-expanded infinitives (last example), the tendency is to omit the comma. The longer and the more complex the infinitive clause, the more likely the comma.<br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nFor infinitives that depend on a noun or placeholder word, the comma can be omitted, if the infinitiv phrase is not expanded, i.e. if it doesn't contain other elements than the infinitive marker &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nThe optional infinitive comma has a special &quot;grading&quot; role with verbs that can occur, with the same sense, as either full verbs or support verbs <i>(</i>e.g.<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Here, not using a comma means weakening the independent role of these verbs in the sentence, letting them appear as mere modifiers of the infinitive.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nIn these cases, a comma gets more likely, if the support verb is itself accompanied by an auxiliary (a), or if it carries its own object or adverbial, separate of the infinitive phrase (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAnother type of optional infinitive comma can be inserted after the elaboration openers '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i><i>,</i> if they are followed by an infinitive phrase. This is possible, even though there is already an (elaboration) comma left of these expressions, because they are not adverbs and can be regarded as miniature clauses due to their verbal element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%nko-inf-end": [
			"%nko-inf-end",
			"Optional infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas.<br>\n<br>\nHowever, as a rule of thumb, these commas are only obligatory after a trigger conjunction <i>(anstatt, ohne, um)</i> or - for expanded infinitives - in the presence of a place holder <i>(es, das, daran)</i> or an infinitive-governing noun <i>(Idee, Vorschlag)</i>. In all other cases, including when the infinitive functions as subject or object, the comma is optional:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nFor un-expanded infinitives (last example), the tendency is to omit the comma. The longer and the more complex the infinitive clause, the more likely the comma.<br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nFor infinitives that depend on a noun or placeholder word, the comma can be omitted, if the infinitiv phrase is not expanded, i.e. if it doesn't contain other elements than the infinitive marker &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nThe optional infinitive comma has a special &quot;grading&quot; role with verbs that can occur, with the same sense, as either full verbs or support verbs <i>(</i>e.g.<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Here, not using a comma means weakening the independent role of these verbs in the sentence, letting them appear as mere modifiers of the infinitive.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nIn these cases, a comma gets more likely, if the support verb is itself accompanied by an auxiliary (a), or if it carries its own object or adverbial, separate of the infinitive phrase (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAnother type of optional infinitive comma can be inserted after the elaboration openers '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i><i>,</i> if they are followed by an infinitive phrase. This is possible, even though there is already an (elaboration) comma left of these expressions, because they are not adverbs and can be regarded as miniature clauses due to their verbal element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%ko-inf-end": [
			"%ko-inf-end",
			"Optional infinitive comma",
			"In German, infinitives that are not part of an auxiliary construction are usually marked with the particle &quot;zu&quot; (infinitive phrase). Such infinitives can be expanded into infinitve clauses by adding arguments or adjuncts. Like finite subclauses, infinitive clauses can be set off from a higher-level clause with opening and closing commas.<br>\n<br>\nHowever, as a rule of thumb, these commas are only obligatory after a trigger conjunction <i>(anstatt, ohne, um)</i> or - for expanded infinitives - in the presence of a place holder <i>(es, das, daran)</i> or an infinitive-governing noun <i>(Idee, Vorschlag)</i>. In all other cases, including when the infinitive functions as subject or object, the comma is optional:<br>\n<br>\n<i>Er versuchte(,) mit Technologieaktien Geld zu verdienen.</i><br>\n<br>\n<i>Eine Brücke zu bauen(,) würde dem Inseltourismus helfen.</i><br>\n<br>\n<i>Petra weigerte sich(,) mitzumachen.</i><br>\n<br>\nFor un-expanded infinitives (last example), the tendency is to omit the comma. The longer and the more complex the infinitive clause, the more likely the comma.<br>\n<br>\nIn a few rare cases, the placement of the opening comma can decide the meaning of the sentence:<br>\n<br>\n<i>Sie versprach, ihm zu helfen.</i><br>\n<br>\n<i>Sie versprach ihm, zu helfen.</i><br>\n<br>\nFor infinitives that depend on a noun or placeholder word, the comma can be omitted, if the infinitiv phrase is not expanded, i.e. if it doesn't contain other elements than the infinitive marker &quot;zu&quot;.<br>\n<br>\n<i>Ich hasse es(,) zu warten.</i><br>\n<br>\n<i>Ihre Lust(,) zu tanzen(,) war ansteckend.</i><br>\n<br>\nThe optional infinitive comma has a special &quot;grading&quot; role with verbs that can occur, with the same sense, as either full verbs or support verbs <i>(</i>e.g.<i> anfangen/beginnen/aufhören,</i> <i>bitten,</i> <i>denken/gedenken, wagen, wünschen, fürchten, glauben, hoffen, verdienen, verlangen, versuchen).</i> Here, not using a comma means weakening the independent role of these verbs in the sentence, letting them appear as mere modifiers of the infinitive.<br>\n<br>\n<i>Er fïng an(,) sich Sorgen zu machen.</i><br>\n<br>\nIn these cases, a comma gets more likely, if the support verb is itself accompanied by an auxiliary (a), or if it carries its own object or adverbial, separate of the infinitive phrase (b).<br>\n<br>\n<i>(a) Er <b>hatte</b> gehofft(,) die Korrekturen noch vor dem Abend erledigen zu können.</i><br>\n<br>\n<i>(b) Er bat <b>seine Freunde</b>(,) ihm beim Umzug zu helfen.</i><br>\n<br>\nAnother type of optional infinitive comma can be inserted after the elaboration openers '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> und '<i>will heißen'</i><i>,</i> if they are followed by an infinitive phrase. This is possible, even though there is already an (elaboration) comma left of these expressions, because they are not adverbs and can be regarded as miniature clauses due to their verbal element.<br>\n<br>\n<i>Insbesondere bei älteren Rotweinen kann es eine gute Idee sein, den Wein zu dekantieren, d.h.(,) ihn vor dem Trinken in eine Karaffe umzufüllen.</i>",
			"D124<br>\n<br>\nE95ff<br>\n<br>\nE112"
		],
		"%nok-inf": [
			"%nok-inf",
			"No infinitive comma",
			"An infinitive without &quot;zu&quot; that is governed by an auxiliary<i> (können, wollen, müssen etc.)</i> forms a predicator unit with the latter and may not be set off with a comma. The same is true for &quot;zu&quot; infinitives depending on the following support verbs: <i>sein, haben, pflegen, scheinen</i><i>, brauchen, es gibt</i><i>)</i><i>.</i><br>\n<br>\n<i>Markus scheint[,] hungrig zu sein.</i><br>\n<br>\n<i>Im Sommer pflegten sie[,] im Garten zu frühstücken.</i><br>\n<br>\n<i>Der Weg war[,] leicht zu finden.</i><br>\n<br>\n<i>Ich habe[,] dazu nichts hinzuzufügen.</i><br>\n<br>\nSome verbs are used as full verbs in one sense, and as support verbs in another. In the first case, they invite an (optional) infinitive comma, in the second they do not: <i>drohen&quot;</i> (as a support verb: = Gefahr laufen), <i>versprechen</i> (= den Anschein haben), <i>vermögen/verstehen/wissen</i> (= können), <i>suchen</i> (= versuchen)<br>\n<br>\n<i>Die Brücke drohte[,] einzustürzen und den Zug mit sich in die Tiefe zu reißen. (The bridge risked collapsing / was on the verge of collapsing)</i><br>\n<br>\n<i>Die Geiselnehmer drohten(,) den Bus in die Luft zu sprengen. (The kidnapper threatened to blow up the bus)</i><br>\n<br>\nException: Even when used as support verbs, the above-mentioned group of verbs can allow an (optional) infinitive comma if they carry their own adverbial modifier before the infinitive phrase:<br>\n<br>\n<i>Sie versteht wirklich(,) mich auf die Palme zu bringen.</i><br>\n<br>\nNo comma is allowed with infinitives linked to a direct (accusative) object after sense verbs<i> (sehen, hören, fühlen)</i> or after the verbs <i>&quot;lassen&quot;</i> and <i>&quot;machen&quot;</i><i>.</i> In these constructions, there is no infinitive marker (&quot;zu&quot;) and the accusative object semantically functions as the subject of the infinitive, forming a secondary clause (a so-called <i>small clause</i>) that must not be broken by a comma.<br>\n<br>\n<i>Er sah das Schiff[,] am Horizont verschwinden.</i><br>\n<br>\nWith infinitives that function as subjects or subject complements, the infinitive comma depends on the presence or absence of the infinitive marker &quot;zu&quot;. The infinitive marker triggers an optional comma. Without it, there is no comma.<br>\n<br>\n<i>Ein guter Staatsbürger sein[,] bedeutet[,] wählen gehen und Steuern zahlen. (no &quot;zu&quot;, no comma)</i><br>\n<br>\n<i>Ein guter Staatsbürger zu sein(,) bedeutet(,) wählen zu gehen und Steuern zu zahlen. (optional comma)</i><br>\n<br>\nEven in the presence of the &quot;zu&quot; particle, no comma may be used if the infinitive phrase is embedded in a sentence bracket in its entirety (1), if it surrounds the higher-level clause (2) or if it the two are intertwined (3).<br>\n<br>\n<i>(1a) Wir wollen genau dieses Problem[,] zu vermeiden versuchen.</i><br>\n<br>\n<i>(1b) Wir wollen[,] genau dieses Problem zu vermeiden[,] versuchen.</i><br>\n<br>\n<i>(1c) Ich glaube, dass er genau dieses Problem[,] zu vermeiden versucht.</i><br>\n<br>\n(2) <i>Genau dieses Problem wollen wir versuchen[,] zu vermeiden.</i><br>\n<br>\n(3) <i>Genau dieses Problem wollen wir[,] zu vermeiden versuchen.</i>",
			"D125<br>\n<br>\nE107<br>\n<br>\nE111"
		],
		"%nok-inf-end": [
			"%nok-inf-end",
			"No infinitive comma",
			"An infinitive without &quot;zu&quot; that is governed by an auxiliary<i> (können, wollen, müssen etc.)</i> forms a predicator unit with the latter and may not be set off with a comma. The same is true for &quot;zu&quot; infinitives depending on the following support verbs: <i>sein, haben, pflegen, scheinen</i><i>, brauchen, es gibt</i><i>)</i><i>.</i><br>\n<br>\n<i>Markus scheint[,] hungrig zu sein.</i><br>\n<br>\n<i>Im Sommer pflegten sie[,] im Garten zu frühstücken.</i><br>\n<br>\n<i>Der Weg war[,] leicht zu finden.</i><br>\n<br>\n<i>Ich habe[,] dazu nichts hinzuzufügen.</i><br>\n<br>\nSome verbs are used as full verbs in one sense, and as support verbs in another. In the first case, they invite an (optional) infinitive comma, in the second they do not: <i>drohen&quot;</i> (as a support verb: = Gefahr laufen), <i>versprechen</i> (= den Anschein haben), <i>vermögen/verstehen/wissen</i> (= können), <i>suchen</i> (= versuchen)<br>\n<br>\n<i>Die Brücke drohte[,] einzustürzen und den Zug mit sich in die Tiefe zu reißen. (The bridge risked collapsing / was on the verge of collapsing)</i><br>\n<br>\n<i>Die Geiselnehmer drohten(,) den Bus in die Luft zu sprengen. (The kidnapper threatened to blow up the bus)</i><br>\n<br>\nException: Even when used as support verbs, the above-mentioned group of verbs can allow an (optional) infinitive comma if they carry their own adverbial modifier before the infinitive phrase:<br>\n<br>\n<i>Sie versteht wirklich(,) mich auf die Palme zu bringen.</i><br>\n<br>\nNo comma is allowed with infinitives linked to a direct (accusative) object after sense verbs<i> (sehen, hören, fühlen)</i> or after the verbs <i>&quot;lassen&quot;</i> and <i>&quot;machen&quot;</i><i>.</i> In these constructions, there is no infinitive marker (&quot;zu&quot;) and the accusative object semantically functions as the subject of the infinitive, forming a secondary clause (a so-called <i>small clause</i>) that must not be broken by a comma.<br>\n<br>\n<i>Er sah das Schiff[,] am Horizont verschwinden.</i><br>\n<br>\nWith infinitives that function as subjects or subject complements, the infinitive comma depends on the presence or absence of the infinitive marker &quot;zu&quot;. The infinitive marker triggers an optional comma. Without it, there is no comma.<br>\n<br>\n<i>Ein guter Staatsbürger sein[,] bedeutet[,] wählen gehen und Steuern zahlen. (no &quot;zu&quot;, no comma)</i><br>\n<br>\n<i>Ein guter Staatsbürger zu sein(,) bedeutet(,) wählen zu gehen und Steuern zu zahlen. (optional comma)</i><br>\n<br>\nEven in the presence of the &quot;zu&quot; particle, no comma may be used if the infinitive phrase is embedded in a sentence bracket in its entirety (1), if it surrounds the higher-level clause (2) or if it the two are intertwined (3).<br>\n<br>\n<i>(1a) Wir wollen genau dieses Problem[,] zu vermeiden versuchen.</i><br>\n<br>\n<i>(1b) Wir wollen[,] genau dieses Problem zu vermeiden[,] versuchen.</i><br>\n<br>\n<i>(1c) Ich glaube, dass er genau dieses Problem[,] zu vermeiden versucht.</i><br>\n<br>\n(2) <i>Genau dieses Problem wollen wir versuchen[,] zu vermeiden.</i><br>\n<br>\n(3) <i>Genau dieses Problem wollen wir[,] zu vermeiden versuchen.</i>",
			"D125<br>\n<br>\nE107<br>\n<br>\nE111"
		],
		"%k-list": [
			"%k-list",
			"Listing comma",
			"A listing comma separates elements in a list (juxtaposition) of three or more elements - words, phrases or clauses. The last element in the list typically gets an &quot;und&quot; or &quot;oder&quot; instead of the comma. Unlike English, German does not allow a combination of listing comma + and/or (the so-called serial comma or Oxford comma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nA list of subject-less predicates is treated like a list of clauses, warranting a listing comma:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\n<i></i><br>\n<br>\nAs a special case, the listing comma is used when words are repeated for emphasis.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%ok-list": [
			"%ok-list",
			"Listing comma",
			"A listing comma separates elements in a list (juxtaposition) of three or more elements - words, phrases or clauses. The last element in the list typically gets an &quot;und&quot; or &quot;oder&quot; instead of the comma. Unlike English, German does not allow a combination of listing comma + and/or (the so-called serial comma or Oxford comma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nA list of subject-less predicates is treated like a list of clauses, warranting a listing comma:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\n<i></i><br>\n<br>\nAs a special case, the listing comma is used when words are repeated for emphasis.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%ko-list": [
			"%ko-list",
			"Listing comma",
			"A listing comma separates elements in a list (juxtaposition) of three or more elements - words, phrases or clauses. The last element in the list typically gets an &quot;und&quot; or &quot;oder&quot; instead of the comma. Unlike English, German does not allow a combination of listing comma + and/or (the so-called serial comma or Oxford comma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nA list of subject-less predicates is treated like a list of clauses, warranting a listing comma:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\n<i></i><br>\n<br>\nAs a special case, the listing comma is used when words are repeated for emphasis.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%nko-list": [
			"%nko-list",
			"Listing comma",
			"A listing comma separates elements in a list (juxtaposition) of three or more elements - words, phrases or clauses. The last element in the list typically gets an &quot;und&quot; or &quot;oder&quot; instead of the comma. Unlike English, German does not allow a combination of listing comma + and/or (the so-called serial comma or Oxford comma).<br>\n<br>\n<i>Das Essen, der Wein und die Stimmung waren ausgezeichnet.</i><br>\n<br>\n<i>Wir wollten nur auf dem Sofa liegen, plaudern und alte Filme anschauen.</i><br>\n<br>\n<i>Wir wissen nicht, was die Tour kostet, ob alle Zeit haben und wer überhaupt Lust hat mitzukommen.</i><br>\n<br>\nA list of subject-less predicates is treated like a list of clauses, warranting a listing comma:<br>\n<br>\n<i>Wir kletterten auf eine Aussichtsturm, suchten nach wilden Orchideen und bestaunten einen überdimensionalen Ameisenhaufen.</i><br>\n<br>\n<i></i><br>\n<br>\nAs a special case, the listing comma is used when words are repeated for emphasis.<br>\n<br>\n<i>Wir hatten einen sehr, sehr nassen Herbst.</i>",
			"D100<br>\n<br>\nE39"
		],
		"%k-list-ADJ": [
			"%k-list-ADJ",
			"Adjective comma",
			"Adjectives are separated by a comma if they function as attributes at the same level, i.e. if their order is interchangeable and they could be linked by &quot;and&quot;.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nA comma is always obligatory if there is a pre-modifier before the second adjective:<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%ok-list-ADJ": [
			"%ok-list-ADJ",
			"Adjective comma",
			"Adjectives are separated by a comma if they function as attributes at the same level, i.e. if their order is interchangeable and they could be linked by &quot;and&quot;.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nA comma is always obligatory if there is a pre-modifier before the second adjective:<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%nko-list-ADJ": [
			"%nko-list-ADJ",
			"Adjective comma",
			"Adjectives are separated by a comma if they function as attributes at the same level, i.e. if their order is interchangeable and they could be linked by &quot;and&quot;.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nA comma is always obligatory if there is a pre-modifier before the second adjective:<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%ko-list-ADJ": [
			"%ko-list-ADJ",
			"Adjective comma",
			"Adjectives are separated by a comma if they function as attributes at the same level, i.e. if their order is interchangeable and they could be linked by &quot;and&quot;.<br>\n<br>\n<i>Sie trug ein gelbes, enganliegendes Kleid.</i> <i>(</i><i>ein gelbes und enganliegendes Kleid - ein enganliegendes, gelbes Kleid)</i><br>\n<br>\n<i>Ein seltsamer, süßlicher Geruch füllte den Raum.</i><br>\n<br>\nA comma is always obligatory if there is a pre-modifier before the second adjective:<br>\n<br>\n<i>Hohe, vom Wind gepeitschte Wellen schlugen gegen die Mole.</i><br>\n<br>\n<i>Er gab ein kurzes, kaum sichtbares Zeichen.</i>",
			"D101<br>\n<br>\nE49-54"
		],
		"%nok-list-ADJ": [
			"%nok-list-ADJ",
			"No adjective comma",
			"No comma is used between adjectives that are not at the same level semantically. In this case, their order is fixed and they cannot be coordinated with &quot;und&quot;.<br>\n<br>\n<i>Er fuhr ein teures[,] italienisches Auto (*ein italienisches teures Auto)</i><br>\n<br>\nIn particular, there is no comma where the second adjective forms a fixed expression together with a subsequent noun. This is often the case for adjectives denoting colours <i>(rot, grün, gelb)</i>, materials <i>(steinern, hölzern)</i>, origin/belonging<i> (italienisch, hessisch, städtisch</i><i>)</i><i></i> or categories<i> (schulisch, psysikalisch, fleischfressend)</i>.<br>\n<br>\nNumbers, articles and - normally - attributive pronouns have their own syntactic slot and are not on par with a subsequent adjective. No comma is permitted in these cases.<br>\n<br>\n<i>In der Einfahrt standen vier[,] teure Sportwagen.</i><br>\n<br>\n<i>Er fand viele/mehrere/einige[,] kleine Spinnen in der Badewanne.</i><br>\n<br>\nException: Sometimes, the adjectival pronouns &quot;andere&quot;, &quot;solche&quot;, &quot;viele&quot; and &quot;wenige&quot; occur in contexts where they are coordinated with the subsequent adjective and do allow an adjective comma:<br>\n<br>\n<i>Sie sprachen von anderen, glücklicheren Zeiten. (The comma can be read as &quot;and&quot; - without a comma, the meaning would be &quot;a second period of happiness different from the current one&quot;)</i>",
			"D101<br>\n<br>\nE50<br>\n<br>\nE51<br>\n<br>\nE53"
		],
		"%k-list-unsafe": [
			"%k-list-unsafe",
			"Listing comma, unsafe",
			"This might be a list, with a need for a comma. However, it might also just be a compound noun or an analysis error. The program couldn't decide.",
			""
		],
		"%k-main": [
			"%k-main",
			"Main clause comma",
			"Main clauses (and same-level subclauses) need to be separated by either a coordinating conjunction<i> (&quot;und&quot;, &quot;oder&quot;)</i>, a juxtaposition/listing comma or both <i>(&quot;aber&quot;</i><i>, &quot;jedoch&quot;</i><i>)</i>.<br>\n<br>\n<i>Du hast Recht, ich schicke eine neue Version.</i><br>\n<br>\n<i>Du hast völlig Recht[,] und ich bitte um Verzeihung.</i><br>\n<br>\n<i>Du hast zwar Recht, aber das ist jetzt nicht mehr zu ändern.</i><br>\n<br>\n<i>Wann ist die Pandemie zu Ende, wann kan man wieder verreisen?</i>",
			"D102"
		],
		"%ok-main": [
			"%ok-main",
			"Main clause comma",
			"Main clauses (and same-level subclauses) need to be separated by either a coordinating conjunction<i> (&quot;und&quot;, &quot;oder&quot;)</i>, a juxtaposition/listing comma or both <i>(&quot;aber&quot;</i><i>, &quot;jedoch&quot;</i><i>)</i>.<br>\n<br>\n<i>Du hast Recht, ich schicke eine neue Version.</i><br>\n<br>\n<i>Du hast völlig Recht[,] und ich bitte um Verzeihung.</i><br>\n<br>\n<i>Du hast zwar Recht, aber das ist jetzt nicht mehr zu ändern.</i><br>\n<br>\n<i>Wann ist die Pandemie zu Ende, wann kan man wieder verreisen?</i>",
			"D102"
		],
		"%nok-main": [
			"%nok-main",
			"No main clause comma",
			"Normally, two consecutive main clauses are not comma-separated if they are linked by a coodinating, non-contrastive conjunction <i>(und, oder, weder ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nException: If the 2. main clause starts with a subclause or an infinitive phrase, an optional comma may be used before the coordinator:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i>",
			"D104<br>\n<br>\nE126"
		],
		"%nko-main": [
			"%nko-main",
			"Optional main clause comma",
			"Normally, two consecutive main clauses are not comma-separated if they are linked by a coodinating, non-contrastive conjunction <i>(und, oder, weder ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nException: If the 2. main clause starts with a subclause or an infinitive phrase, an optional comma may be used before the coordinator:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i><br>\n<br>\nIn addition, a comma is allowed before the coordinator in order to indicate whether a subclause with ambiguous attachment, before the first or after the second main clause, relates to both or only one of them.<br>\n<br>\n<i>Weil niemand den Witz zu kennen schien, erzählte ich ihn(,) und die Stimmung wurde schlagartig besser. (The unfamiliarity of the joke [SC] is not the cause of the better mood [MC2], but only the reason for telling it [MC1]).</i><br>\n<br>\nFurther, a clarity comma may be indicated if it facilitates the reading flow and prevents mental backtracking. This is the case when the subject of the second clause can be misread as an object of the first (so-called garden path effect):<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (criticizing the shareholders, too?)</i>",
			""
		],
		"%ko-main": [
			"%ko-main",
			"Optional main clause comma",
			"Normally, two consecutive main clauses are not comma-separated if they are linked by a coodinating, non-contrastive conjunction <i>(und, oder, weder ... noch)</i>.<br>\n<br>\n<i>Die Kellnerin machte einen Tisch frei[,] und Peter bestellte ein Bier.</i><br>\n<br>\nException: If the 2. main clause starts with a subclause or an infinitive phrase, an optional comma may be used before the coordinator:<br>\n<br>\n<i>Wir waren gestern bei den Großeltern(,) und weil es schneite, haben wir dort auch übernachtet.</i><br>\n<br>\nIn addition, a comma is allowed before the coordinator in order to indicate whether a subclause with ambiguous attachment, before the first or after the second main clause, relates to both or only one of them.<br>\n<br>\n<i>Weil niemand den Witz zu kennen schien, erzählte ich ihn(,) und die Stimmung wurde schlagartig besser. (The unfamiliarity of the joke [SC] is not the cause of the better mood [MC2], but only the reason for telling it [MC1]).</i><br>\n<br>\nFurther, a clarity comma may be indicated if it facilitates the reading flow and prevents mental backtracking. This is the case when the subject of the second clause can be misread as an object of the first (so-called garden path effect):<br>\n<br>\n<i>Wild gestikulierend kritisierte er den Vorstand(,) und die anwesenden Aktionäre hatten ihren Spaß. (criticizing the shareholders, too?)</i>",
			""
		],
		"%k-paren": [
			"%k-paren",
			"Parenthetical comma (start)",
			"Parenthetical insertions and addtions are often not part of the normal sentence flow and should then be set off by commas. Such parenthetical material can consist of words, phrases or (mostly shortened) clauses. Common flow-brakers are post-positioned adjectives with or without adverbial modifiers or participles with dependent prepositional phrases. In case of the latter, the comma is also called participle comma.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den gelben, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i><br>\n<br>\n<i>Der finnische Marathonläufer, zäh und ausdauernd, holte auf.</i><br>\n<br>\n<i>Die Läufer, angefeuert von der Menschenmenge am Straßenrand, gaben ihr Letztes. (participle comma)</i><br>\n<br>\nEven main clauses may appear as insertions. In this case, they, too, require parenthetical commas:<br>\n<br>\n<i>Das ist, da bin ich mir sicher, streng verboten.</i><br>\n<br>\n<i></i><br>\n<br>\nA parenthetical comma is not required if the insertion does not break the sentence flow. This is often the case for adverbs and adverbial participles or prepositional phrases, in particular when they appear next to a verb. The tendency is to drop the comma in these cases, but it can optionally be used to mark a word or phrase as parenthetical, calling for a short pause in the flow of reading/speaking. If used, the parenthetical comma is always a paired opening/closing comma.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117<br>\n<br>\nE68"
		],
		"%ok-paren": [
			"%ok-paren",
			"Parenthetical comma (start)",
			"Parenthetical insertions and addtions are often not part of the normal sentence flow and should then be set off by commas. Such parenthetical material can consist of words, phrases or (mostly shortened) clauses. Common flow-brakers are post-positioned adjectives with or without adverbial modifiers or participles with dependent prepositional phrases. In case of the latter, the comma is also called participle comma.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den gelben, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i><br>\n<br>\n<i>Der finnische Marathonläufer, zäh und ausdauernd, holte auf.</i><br>\n<br>\n<i>Die Läufer, angefeuert von der Menschenmenge am Straßenrand, gaben ihr Letztes. (participle comma)</i><br>\n<br>\nEven main clauses may appear as insertions. In this case, they, too, require parenthetical commas:<br>\n<br>\n<i>Das ist, da bin ich mir sicher, streng verboten.</i><br>\n<br>\n<i></i><br>\n<br>\nA parenthetical comma is not required if the insertion does not break the sentence flow. This is often the case for adverbs and adverbial participles or prepositional phrases, in particular when they appear next to a verb. The tendency is to drop the comma in these cases, but it can optionally be used to mark a word or phrase as parenthetical, calling for a short pause in the flow of reading/speaking. If used, the parenthetical comma is always a paired opening/closing comma.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117<br>\n<br>\nE68"
		],
		"%ko-paren": [
			"%ko-paren",
			"Optional parenthetical comma (start)",
			"Parenthetical commas are optional if the insertion/addition does not break the sentence flow. This is often the case for adverbs and adverbial participles or prepositional phrases, in particular when they appear next to a verb. The tendency is to drop the comma in these cases, but it can optionally be used to mark a word or phrase as parenthetical, calling for a short pause in the flow of reading/speaking. If used, the parenthetical comma is always a paired opening/closing comma.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i><br>\n<br>\n<i>Der Präsident(,) oder gegebenenfalls sein Nachfolger(,) wird den Vertrag im Juni unterzeichnen.</i><br>\n<br>\nBut: <i>Die Regierung, und der Finanzminister erst recht, muss das schon lange gewusst haben.</i> (In this case, the insertion does not work as a normal coordination because there is an overlap between the potential conjuncts: the finance minister is himself part of the government)<br>\n<br>\nSpecial case: The parenthetical comma is optional before elaborating additions introduced by <i>&quot;wie&quot;</i>:<br>\n<br>\n<i>Erneuerbare Energiequellen(,) wie Wind und Sonne(,) sollen nach wie vor bezuschusst werden.</i>",
			""
		],
		"%nko-paren": [
			"%nko-paren",
			"Optional parenthetical comma (start)",
			"Parenthetical commas are optional if the insertion/addition does not break the sentence flow. This is often the case for adverbs and adverbial participles or prepositional phrases, in particular when they appear next to a verb. The tendency is to drop the comma in these cases, but it can optionally be used to mark a word or phrase as parenthetical, calling for a short pause in the flow of reading/speaking. If used, the parenthetical comma is always a paired opening/closing comma.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i><br>\n<br>\n<i>Der Präsident(,) oder gegebenenfalls sein Nachfolger(,) wird den Vertrag im Juni unterzeichnen.</i><br>\n<br>\nBut: <i>Die Regierung, und der Finanzminister erst recht, muss das schon lange gewusst haben.</i> (In this case, the insertion does not work as a normal coordination because there is an overlap between the potential conjuncts: the finance minister is himself part of the government)<br>\n<br>\nSpecial case: The parenthetical comma is optional before elaborating additions introduced by <i>&quot;wie&quot;</i>:<br>\n<br>\n<i>Erneuerbare Energiequellen(,) wie Wind und Sonne(,) sollen nach wie vor bezuschusst werden.</i>",
			""
		],
		"%k-paren-end": [
			"%k-paren-end",
			"Parenthetical comma (end)",
			"Parenthetical insertions and additions are set off by (paired) commas if they break the sentence flow. This can happen with both words, phrases and clauses.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den</i> <i>roten</i><i>, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117"
		],
		"%ok-paren-end": [
			"%ok-paren-end",
			"Parenthetical comma (end)",
			"Parenthetical insertions and additions are set off by (paired) commas if they break the sentence flow. This can happen with both words, phrases and clauses.<br>\n<br>\n<i>Kannst du mir deinen Bikini, den</i> <i>roten</i><i>, leihen?</i><br>\n<br>\n<i>Sie tauschten Gerüchte aus, alte und neue.</i><br>\n<br>\n<i>Er, den Finger am Abzug, lauerte hinter dem Vorsprung.</i>",
			"D112<br>\n<br>\nD113<br>\n<br>\nD117"
		],
		"%ko-paren-end%nko-paren-end": [
			"%ko-paren-end%nko-paren-end",
			"Optional parenthetical comma (end)",
			"Parenthetical commas are optional if the insertion/addition does not break the sentence flow. This is often the case for adverbs and adverbials in the vicinity of verbs. Here, the tendency is to drop the comma, but it can be used to force a pause in the reading flow and to set apart the words in question. If used, the comma should be paired.<br>\n<br>\n<i>Wild gestikulierend(,) rannte der Schiedsrichter auf ihn zu.</i><br>\n<br>\n<i>Die Besprechung wurde(,) wegen der Corona-Beschränkungen(,) als Video-Konferenz anberaumt.</i><br>\n<br>\n<i>Alle Kinder(,) bis auf Mathilde(,) wollten im Wald spielen.</i>",
			""
		],
		"%k-parenth": [
			"%k-parenth",
			"No comma before a parenthesis",
			"It is not possible to have a comma before a bracket, neither opening nor closing. If - after removing the parenthesis - the sentence would have a comma in this place, it should be inserted after ther closing (right) bracket.<br>\n<br>\n<i>Das ist ganz klar ein B-Film[,] (oder schlimmer) der hier nicht auf die Leinwand gehört. (wrong)</i><br>\n<br>\n<i>Das ist ganz klar ein B-Film (oder schlimmer), der hier nicht auf die Leinwand gehört. (correct)</i>",
			""
		],
		"%nok-parenth": [
			"%nok-parenth",
			"No comma before a parenthesis",
			"It is not possible to have a comma before a bracket, neither opening nor closing. If - after removing the parenthesis - the sentence would have a comma in this place, it should be inserted after ther closing (right) bracket.<br>\n<br>\n<i>Das ist ganz klar ein B-Film[,] (oder schlimmer) der hier nicht auf die Leinwand gehört. (wrong)</i><br>\n<br>\n<i>Das ist ganz klar ein B-Film (oder schlimmer), der hier nicht auf die Leinwand gehört. (correct)</i>",
			""
		],
		"%ok-pcp": [
			"%ok-pcp",
			"Participle comma",
			"Similar to infinitive clauses, participles often require a comma if they are expanded with an argument or adjunct. In addition to participle phrases, this is true for particple-like adjectives. The participle comma is obligatory in the following cases: (a) the higher-level clause contains a placeholder <i>(so, auf diese Weise),</i> (b) the participle phrase breaks the sentence flow, especially after nouns or pronouns, (c) the participle phrase is a separat addition or explanation at the end of the sentence.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (placeholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (sentence-final addition)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (noun-following insertion)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (sentence-final addition)</i><br>\n<br>\nIn all other cases, the participle comma is optional, but can be used for structuring the sentence (1), or for setting apart a piece of sentence-initial information (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Naked&quot;, un-expanded participles only get a comma if they break the sentence flow.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%k-pcp": [
			"%k-pcp",
			"Participle comma",
			"Similar to infinitive clauses, participles often require a comma if they are expanded with an argument or adjunct. In addition to participle phrases, this is true for particple-like adjectives. The participle comma is obligatory in the following cases: (a) the higher-level clause contains a placeholder <i>(so, auf diese Weise),</i> (b) the participle phrase breaks the sentence flow, especially after nouns or pronouns, (c) the participle phrase is a separat addition or explanation at the end of the sentence.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (placeholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (sentence-final addition)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (noun-following insertion)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (sentence-final addition)</i><br>\n<br>\nIn all other cases, the participle comma is optional, but can be used for structuring the sentence (1), or for setting apart a piece of sentence-initial information (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Naked&quot;, un-expanded participles only get a comma if they break the sentence flow.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%ok-pcp-end": [
			"%ok-pcp-end",
			"Participle comma",
			"Similar to infinitive clauses, participles often require a comma if they are expanded with an argument or adjunct. In addition to participle phrases, this is true for particple-like adjectives. The participle comma is obligatory in the following cases: (a) the higher-level clause contains a placeholder <i>(so, auf diese Weise),</i> (b) the participle phrase breaks the sentence flow, especially after nouns or pronouns, (c) the participle phrase is a separat addition or explanation at the end of the sentence.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (placeholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (sentence-final addition)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (noun-following insertion)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (sentence-final addition)</i><br>\n<br>\nIn all other cases, the participle comma is optional, but can be used for structuring the sentence (1), or for setting apart a piece of sentence-initial information (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Naked&quot;, un-expanded participles only get a comma if they break the sentence flow.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%k-pcp-end": [
			"%k-pcp-end",
			"Participle comma",
			"Similar to infinitive clauses, participles often require a comma if they are expanded with an argument or adjunct. In addition to participle phrases, this is true for particple-like adjectives. The participle comma is obligatory in the following cases: (a) the higher-level clause contains a placeholder <i>(so, auf diese Weise),</i> (b) the participle phrase breaks the sentence flow, especially after nouns or pronouns, (c) the participle phrase is a separat addition or explanation at the end of the sentence.<br>\n<br>\n<i>Genau</i> <b><i>so</i></b><i>, von der Sonne</i> <b><i>gebräunt</i></b><i>, hatte ich sie mir vorgestellt.</i><i></i> (placeholder)<br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat</i> <b><i>enttäuscht</i></b><i>.</i><i></i> (sentence-final addition)<br>\n<br>\n<i>Alle Teilnehmer, die Kinder <b>eingeschlossen</b>, hatten einen Heidenspaß. (noun-following insertion)</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild <b>gestikulierend</b>. (sentence-final addition)</i><br>\n<br>\nIn all other cases, the participle comma is optional, but can be used for structuring the sentence (1), or for setting apart a piece of sentence-initial information (2).<br>\n<br>\n<i>(1) Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>(2a) Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>(2b) Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>(2c) Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\n&quot;Naked&quot;, un-expanded participles only get a comma if they break the sentence flow.<br>\n<br>\n<i>Das Baby, gewaschen und gewickelt, lag zufrieden in seiner Wiege.</i><br>\n<br>\n<i>Gelangweilt[,] stocherte sie im Essen herum.</i>",
			"D127<br>\n<br>\nE114"
		],
		"%nko-pcp": [
			"%nko-pcp",
			"Optional participle comma",
			"Expanded participle-phrases and similar adjective phrases may be set off by optional commas, even without a placeholder or a syntactic break. Rather than reacting to a syntactic break in the sentence flow, these commas can themselves be used to trigger a (reading) break in the sentence flow.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAn optional participle comma can also be placed after certain elaboration introductions - '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> <i>a</i>nd '<i>will heißen'</i> - if they precede a particple phrase and even though there already is an (elaboration) comma to the left. This double comma is possible because the introductions are not adverbs, but rather mini-sentences with a verbal element.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nParticiple commas are only obligatory in the presence of a placeholder word or when they present a clear break in the sentence flow, typically after nouns or pronouns, or as separate additions at the end of the sentence:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%ko-pcp": [
			"%ko-pcp",
			"Optional participle comma",
			"Expanded participle-phrases and similar adjective phrases may be set off by optional commas, even without a placeholder or a syntactic break. Rather than reacting to a syntactic break in the sentence flow, these commas can themselves be used to trigger a (reading) break in the sentence flow.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAn optional participle comma can also be placed after certain elaboration introductions - '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> <i>a</i>nd '<i>will heißen'</i> - if they precede a particple phrase and even though there already is an (elaboration) comma to the left. This double comma is possible because the introductions are not adverbs, but rather mini-sentences with a verbal element.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nParticiple commas are only obligatory in the presence of a placeholder word or when they present a clear break in the sentence flow, typically after nouns or pronouns, or as separate additions at the end of the sentence:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%nko-pcp-end": [
			"%nko-pcp-end",
			"Optional participle comma",
			"Expanded participle-phrases and similar adjective phrases may be set off by optional commas, even without a placeholder or a syntactic break. Rather than reacting to a syntactic break in the sentence flow, these commas can themselves be used to trigger a (reading) break in the sentence flow.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAn optional participle comma can also be placed after certain elaboration introductions - '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> <i>a</i>nd '<i>will heißen'</i> - if they precede a particple phrase and even though there already is an (elaboration) comma to the left. This double comma is possible because the introductions are not adverbs, but rather mini-sentences with a verbal element.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nParticiple commas are only obligatory in the presence of a placeholder word or when they present a clear break in the sentence flow, typically after nouns or pronouns, or as separate additions at the end of the sentence:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%ko-pcp-end": [
			"%ko-pcp-end",
			"Optional participle comma",
			"Expanded participle-phrases and similar adjective phrases may be set off by optional commas, even without a placeholder or a syntactic break. Rather than reacting to a syntactic break in the sentence flow, these commas can themselves be used to trigger a (reading) break in the sentence flow.<br>\n<br>\n<i>Der Gärtner lief(,) wild gestikulierend(,) auf sie zu. (paired comma!)</i><br>\n<br>\n<i>Auf die Zahl der Einwohner bezogen(,) ist die Zahl der Krankheitsfälle hier noch niedrig.</i><br>\n<br>\n<i>Wie immer schlecht gelaunt(,) schimpfte er die Kinder aus.</i><br>\n<br>\n<i>Deinem Vorschlag entsprechend(,) habe ich die Einleitung umgeschrieben.</i><br>\n<br>\nAn optional participle comma can also be placed after certain elaboration introductions - '<i>d.h.' (das heißt), 'd.i.' (das ist), 'sprich'</i> <i>a</i>nd '<i>will heißen'</i> - if they precede a particple phrase and even though there already is an (elaboration) comma to the left. This double comma is possible because the introductions are not adverbs, but rather mini-sentences with a verbal element.<br>\n<br>\n<i>Links</i><i>, d.h.</i><i>(,) nach Osten schauend, erblickt man das Matterhorn</i><i>.</i><br>\n<br>\nParticiple commas are only obligatory in the presence of a placeholder word or when they present a clear break in the sentence flow, typically after nouns or pronouns, or as separate additions at the end of the sentence:<br>\n<br>\n<i>Genau so, von der Sonne gebräunt, hatte ich sie mir vorgestellt.</i><br>\n<br>\n<i>Schließlich war er ins Ausland geflüchtet, von der Heimat enttäuscht.</i><br>\n<br>\n<i>Alle Teilnehmer, die Kinder eingeschlossen, hatten einen Heidenspaß.</i><br>\n<br>\n<i>Der Gärtner lief auf sie zu, wild gestikulierend.</i>",
			"D126<br>\n<br>\nE116"
		],
		"%nok-pcp": [
			"%nok-pcp",
			"No participle comma",
			"Fixed expressions do not get a participle comma:<br>\n<br>\n<i>Er hat[,] genau genommen[,] nichts falsch gemacht.</i><br>\n<br>\n<i>Davon abgesehen[,] schmeckte das Essen vorzüglich.</i><br>\n<br>\nAnother exception are proverbs built around a participle phrase:<br>\n<br>\n<i>Gut gedacht[,] ist halb gemacht.</i><br>\n<br>\n<i>Besser spät gefreut[,] als früh bereut.</i>",
			"E116"
		],
		"%nok-pcp-end": [
			"%nok-pcp-end",
			"No participle comma",
			"Fixed expressions do not get a participle comma:<br>\n<br>\n<i>Er hat[,] genau genommen[,] nichts falsch gemacht.</i><br>\n<br>\n<i>Davon abgesehen[,] schmeckte das Essen vorzüglich.</i><br>\n<br>\nAnother exception are proverbs built around a participle phrase:<br>\n<br>\n<i>Gut gedacht[,] ist halb gemacht.</i><br>\n<br>\n<i>Besser spät gefreut[,] als früh bereut.</i>",
			"E116"
		],
		"%k-quote": [
			"%k-quote",
			"Quotation comma (start)",
			"Quotes are comma-separated from the rest of the sentence (&quot;er sagte ...&quot;, &quot;... sagte sie&quot; etc.). When reporting direct speech, the quote is enclosed in quotation marks (»...«, „...“) sometimes using French («...») or English style (&quot;...&quot;).<br>\n<br>\nQuotation commas are placed<i> outside</i> the quotation marks. The opening comma replaces a colon, the closing comma replaces what would have been a fullstop in the quote.<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (direct speech)</i><br>\n<br>\n<i>Er sagte, das sei ihm egal. (indirect speech)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.&quot;</i>",
			""
		],
		"%ok-quote": [
			"%ok-quote",
			"Quotation comma (start)",
			"Quotes are comma-separated from the rest of the sentence (&quot;er sagte ...&quot;, &quot;... sagte sie&quot; etc.). When reporting direct speech, the quote is enclosed in quotation marks (»...«, „...“) sometimes using French («...») or English style (&quot;...&quot;).<br>\n<br>\nQuotation commas are placed<i> outside</i> the quotation marks. The opening comma replaces a colon, the closing comma replaces what would have been a fullstop in the quote.<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (direct speech)</i><br>\n<br>\n<i>Er sagte, das sei ihm egal. (indirect speech)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.&quot;</i>",
			""
		],
		"%k-quote-end": [
			"%k-quote-end",
			"Quotation comma (stop)",
			"If a quotation occurs at the beginning of a sentence, it is followed by a closing comma. In the case of direct speech, the comma is placed <i>after</i> the closing quotation mark - unlike American English, that has the comma <i>before</i> the closing quotation mark. The quote loses a possible fullstop, but not other sentence-final punctuation ('!', '?' or ':').<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (direct speech)</i><br>\n<br>\n<i>Das sei ihm egal, sagte er. (indirect speech)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.</i><br>\n<br>\n<i>&quot;Wie geht es deiner Tante?&quot;, fragte sie.</i>",
			""
		],
		"%ok-quote-end": [
			"%ok-quote-end",
			"Quotation comma (stop)",
			"If a quotation occurs at the beginning of a sentence, it is followed by a closing comma. In the case of direct speech, the comma is placed <i>after</i> the closing quotation mark - unlike American English, that has the comma <i>before</i> the closing quotation mark. The quote loses a possible fullstop, but not other sentence-final punctuation ('!', '?' or ':').<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (direct speech)</i><br>\n<br>\n<i>Das sei ihm egal, sagte er. (indirect speech)</i><br>\n<br>\n<i>&quot;Dieses Virus&quot;, sagte sie, &quot;ist ein Segen für die Netzhändler.</i><br>\n<br>\n<i>&quot;Wie geht es deiner Tante?&quot;, fragte sie.</i>",
			""
		],
		"%nok-quote": [
			"%nok-quote",
			"No quotation start comma",
			"If a (short) quote functions as an integrated clause constituent (e.g. subject or object), neither a comma nor a colon is used:<br>\n<br>\n<i>&quot;Wir schaffen das&quot;[,] war sein einziger Kommentar. (subject)</i><br>\n<br>\n<i>Sie hauchte[,] &quot;ja&quot; und unterschrieb die MeToo-Erklärung. (object)</i><br>\n<br>\nThe quotation comma is also omitted if a quote, or part of it, is integrated in the flow of the containing sentence:<br>\n<br>\n<i>Nach dem Fest räumte Martina ein, dass Wodka doch[,] &quot;marginal mehr Alkohol als Bier&quot; enthält.</i>",
			""
		],
		"%nok-quote-end": [
			"%nok-quote-end",
			"No quotation end comma",
			"If a (short) quotation functions as an integrated clause constituent (e.g. subject or object), neither a comma nor a colon is used:<br>\n<br>\n<i>&quot;Wir schaffen das&quot;[,] war sein einziger Kommentar. (subject)</i><br>\n<br>\n<i>Sie hauchte[,] &quot;ja&quot; und unterschrieb die MeToo-Erklärung. (object)</i><br>\n<br>\nThe closing comma of a quote must not precede the closing quotation mark. Unlike in American English, it must always be placed after/outside the quote.<br>\n<br>\n<i>&quot;Das ist mir egal[,]&quot; sagte er.</i> (wrong)<br>\n<br>\n<i>&quot;Das ist mir egal&quot;, sagte er. (correct)</i>",
			""
		],
		"%k": [
			"%k",
			"Unspecified comma",
			"Kommatroll has identified a syntactic break and suggests a comma, but isn't sure. The most probable case is a missing listing comma.<br>\n<br>\n<i>Kauf ihr doch einen Schal ? warme Handschuhe oder etwas ähnliches</i>",
			""
		],
		"%nok-soft": [
			"%nok-soft",
			"Possible spurious comma",
			"Kommatroll couldn't find a rule for a comma in this place. However, the comma might still be meaningful, e.g. for pausing or clarity, or in order to structure very long sentences. Please check!",
			""
		],
		"%k-stop": [
			"%k-stop",
			"Sentence boundary",
			"Kommatroll thinks there might be a break in the sentence flow in this place. Please check if there are two separate utterances without separating punctuation or conjunctions. If so, it might be an idea to start a new sentence. In this case, a fullstop or a semicolon are probably a better solution than a comma.",
			""
		],
		"%nok-SV": [
			"%nok-SV",
			"No comma between subject and verb",
			"Subject and verb never get separated by a comma, as long as the subject is a noun or noun phrase, and not a subclause or infinitive clause. This is a syntactic rule and holds even if there is a pause in the reading flow at this place.<br>\n<br>\n<i>Dieses Gemälde[,] kann viel Geld wert sein.</i><br>\n<br>\nNote: Even between subject and verb, an insertion with a comma <i>pair</i> - i.e. two (!) commas - is still possible. This happens, for instance, when the subject is followed by an apposition or a relative clause.<br>\n<br>\n<i>Das Gemälde, das wir auf dem Speicher gefunden haben, scheint viel Geld wert zu sein.</i><br>\n<br>\nComplex coordinated subjects or participial subjects are still just subjects and do not get a comma after them:<br>\n<br>\n<i>Das Ölgemälde und die Kreidezeichnungen[,] sind vom selben Künstler.</i><br>\n<br>\n<i>Gut gekaut[,] ist halb verdaut.</i><br>\n<br>\n<i>Doppelt genäht[,] hält besser.</i>",
			""
		],
		"%k-voc": [
			"%k-voc",
			"Vocative comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment attribute of a person directly addressed.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%ko-voc": [
			"%ko-voc",
			"Optional vocative comma",
			"An optional comma can be placed between an interjection and a vocative:<br>\n<br>\n<i>Hallo(,) Christine, kannst du mir mit den Pferden helfen?</i><br>\n<br>\n<i>Oh(,) Julia, wenn Romeo das wüsste ...</i>",
			"D132"
		],
		"%ok-voc": [
			"%ok-voc",
			"Vocative comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment attribute of a person directly addressed.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%k-voc-end": [
			"%k-voc-end",
			"Vocative comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment attribute of a person directly addressed.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%ok-voc-end": [
			"%ok-voc-end",
			"Vocative comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment attribute of a person directly addressed.<br>\n<br>\n<i>Martin, zeig mir mal dein neues Rennrad!</i><br>\n<br>\n<i>Das, meine Liebe, ist kein Walzer.</i><br>\n<br>\n<i>Vielen Dank für die Hilfe, Kumpels.</i>",
			"D132<br>\n<br>\nE56"
		],
		"%nko-voc": [
			"%nko-voc",
			"Optional vocative comma",
			"An optional comma can be placed between an interjection and a vocative:<br>\n<br>\n<i>Hallo(,) Christine, kannst du mir mit den Pferden helfen?</i><br>\n<br>\n<i>Oh(,) Julia, wenn Romeo das wüsste ...</i>",
			"D132"
		],
		"%number-format": [
			"%number-format",
			"Number formatting",
			"In German and most other European languages, a comma is used to mark the decimals in a number, while a dot groups digits into groups of three, i.e. thousands, millions, billions, etc. In Englisch, it's the opposite.<br>\n<br>\n<i>123.000.609</i><br>\n<br>\n<i>0,74</i><br>\n<br>\n<i>13,19237</i><br>\n<br>\n<i>32,50 EUR</i><br>\n<br>\nException: For Swiss Francs (Schweizer Franken), the decimal marker is a dot:<br>\n<br>\n<i>17.60 Franken</i><br>\n<br>\nBoth a dot and a colon (but not a comma!) can be used to delimit hours, minutes and seconds in numerical time expressions.<br>\n<br>\n<i>Die Rakete startete um 21.17.45 (21:17:45) Uhr.</i><br>\n<br>\n<i>Der Zug kommt um 16.45 (16:45) Uhr an.</i><br>\n<br>\nWhen used as a ratio marker, a colon should be flanked by a pair of space characters.<br>\n<br>\n<i>Seine Überlebenschancen standen 50 : 50.</i><br>\n<br>\n<i>Der Maßstab war 1 : 200.000</i><br>\n<br>\n<i>Die deutsche Elf gewann das Finale mit 7 : 1.</i>",
			"E36<br>\n<br>\nE37"
		],
		"%upper": [
			"%upper",
			"Uppercase",
			"In German, nouns are always in uppercase. In addition, lowercase words will be uppercased at the start of a sentence or at the left edge of a work-of-art title.<br>\n<br>\nAfter a colon, uppercasing is used, if the colon is followed by direct speech or by an independent sentence, including infinitive clauses. On the other hand, if the colon is followed by individual words or phrases (or lists of them), casing is left unchanged.<br>\n<br>\n<i>Sie fragte: &quot;Wer hat den Kuchen gebacken?&quot;</i><br>\n<br>\n<i>Haltbarkeit: Angebrochene Packungen bitte im Kühlschrank aufbewahren.</i><br>\n<br>\nBut: <i>Haltbarkeit: höchstens 5 Tage im Kühlschrank (4 Grad)</i><br>\n<br>\nIf the colon is preceded by an elaboration introduction, it can be read as a stylistic alternative to a comma, and uppercasing of a following sentence is optional.<br>\n<br>\n<i>Bei Internetkäufen har der Kunde volles Rückgaberecht, sprich: Er/er kann den Kauf ohne Begründung stornieren und die Ware zurücksenden.</i>",
			""
		],
		"%lower": [
			"%lower",
			"Lowercase",
			"Lowercase is maintained after a colon if it is followed by words or phrases rather than a sentence.<br>\n<br>\n<i>Haltbarkeit: höchstens 5 Tage im Kühlschrank (4 Grad)</i><br>\n<br>\n<i>Emil hatte alle seine Freunde in die Höhle geholt: den Teddy, die Tigerente und die ausgestopfte Möwe.</i><br>\n<br>\nBut: <i>Er dachte:</i> <i>Das hätte ich auch einfacher haben können.</i><br>\n<br>\nIf the colon is preceded by an elaboration introduction, it can be read as a stylistic alternative to a comma, and uppercasing of a following sentence is optional.<br>\n<br>\n<i>Bei Internetkäufen har der Kunde volles Rückgaberecht, sprich: Er/er kann den Kauf ohne Begründung stornieren und die Ware zurücksenden.</i>",
			""
		],
		"%comp-": [
			"%comp-",
			"Written as one word",
			"This word should not be split into two parts.<br>\n<br>\n<i>Die Menge klatschte, als die ersten Athleten vorbeiliefen. (richtig)</i><br>\n<br>\n<i>Die Menge klatschte, als die ersten Athleten vorbei liefen. (falsch)</i>",
			""
		],
		"%colon2k": [
			"%colon2k",
			"Comma instead of colon",
			"A comma has to be used instead of a colon if it is followed by an elaboration/explanation, typically introduced by <i>d.h. (das heißt), d.i. (das ist), z.B. (zum Beispiel), genauer gesagt, nämlich</i> etc<i>.</i><br>\n<br>\n<i>Ich habe nur einen Reisewunsch, nämlich einen Vulkan zu besteigen.</i> (correct)<br>\n<br>\n<i>Ich habe nur einen Reisewunsch: nämlich einen Vulkan zu besteigen.</i> (wrong)",
			""
		],
		"%colon": [
			"%colon",
			"Colon instead of comma",
			"Between a quoting sentence and a direct-speech quote, a colon is used rather than a comma:<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal</i><i>.</i><i>&quot;</i> (correct)<br>\n<br>\n<i>Er sagte, &quot;Das ist mir egal</i><i>.</i><i>&quot;</i> (wrong)",
			""
		],
		"%colon-after": [
			"%colon-after",
			"Missing colon",
			"A quoting sentence is separated from a direct-speech quote with a colon:<br>\n<br>\n<i>Er sagte: &quot;Das ist mir egal.&quot; (correct)</i><br>\n<br>\n<i>Er sagte &quot;Das ist mir egal.&quot; (wrong)</i>",
			""
		],
		"%questmark": [
			"%questmark",
			"Question mark",
			"A question mark is used not only after straight questions, but also after politeness questions, rhetorical questions and utterances that have the syntax of a statement or phrase, but are meant to be read with the intonation of a question.<br>\n<br>\n<i>Wo hast du letzte Nacht geschlafen?</i><br>\n<br>\n<i>Mit oder ohne Zucker?</i><br>\n<br>\n<i>Du hast wen eingeladen?</i><br>\n<br>\n<i>Und du glaubst, das klappt?</i><br>\n<br>\n<i>Ob er wohl kommt?</i><br>\n<br>\n<i>Kann ich bitte den Pfeffer haben?</i><br>\n<br>\n<i>Du hast eine Sanitäterausbildung, nicht wahr?</i><br>\n<br>\nIndirect questions, on the other hand, to not trigger a question mark.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%questmark-after": [
			"%questmark-after",
			"Question mark",
			"A question mark is used not only after straight questions, but also after politeness questions, rhetorical questions and utterances that have the syntax of a statement or phrase, but are meant to be read with the intonation of a question.<br>\n<br>\n<i>Wo hast du letzte Nacht geschlafen?</i><br>\n<br>\n<i>Mit oder ohne Zucker?</i><br>\n<br>\n<i>Du hast wen eingeladen?</i><br>\n<br>\n<i>Und du glaubst, das klappt?</i><br>\n<br>\n<i>Ob er wohl kommt?</i><br>\n<br>\n<i>Kann ich bitte den Pfeffer haben?</i><br>\n<br>\n<i>Du hast eine Sanitäterausbildung, nicht wahr?</i><br>\n<br>\nIndirect questions, on the other hand, to not trigger a question mark.<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%exclam": [
			"%exclam",
			"Exclamation mark",
			"After exclamations, proposals, wishes and orders, an exclamation mark is used. It doesn't matter if the utterance consists of a complete sentence, a phrase or even an individual word (imperatives, interjections).<br>\n<br>\n<i>Lass das Baby schlafen!</i><br>\n<br>\n<i>Raus!</i><br>\n<br>\n<i>Jetzt abonnieren!</i><br>\n<br>\n<i>Hätte ich das bloß vorher gewusst!</i><br>\n<br>\n<i>Guten Rutsch!</i><br>\n<br>\n<i>Igitt, wie scheußlich!</i><br>\n<br>\nIndirect or relayed orders and proposals, however, only get a fullstop:<br>\n<br>\n<i>Sie sagt, du sollst die Spülmaschine ausräumen.</i>",
			""
		],
		"%exclam-after": [
			"%exclam-after",
			"Exclamation mark",
			"After exclamations, proposals, wishes and orders, an exclamation mark is used. It doesn't matter if the utterance consists of a complete sentence, a phrase or even an individual word (imperatives, interjections).<br>\n<br>\n<i>Lass das Baby schlafen!</i><br>\n<br>\n<i>Raus!</i><br>\n<br>\n<i>Jetzt abonnieren!</i><br>\n<br>\n<i>Hätte ich das bloß vorher gewusst!</i><br>\n<br>\n<i>Guten Rutsch!</i><br>\n<br>\n<i>Igitt, wie scheußlich!</i><br>\n<br>\nIndirect or relayed orders and proposals, however, only get a fullstop:<br>\n<br>\n<i>Sie sagt, du sollst die Spülmaschine ausräumen.</i>",
			""
		],
		"%fullstop": [
			"%fullstop",
			"Fullstop",
			"A complete statement should be concluded with a fullstop (or possibly a semicolon), in particular if it contains a finite verb.<br>\n<br>\nIndirect questions also get a fullstop, not a question mark:<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%fullstop-after": [
			"%fullstop-after",
			"Fullstop",
			"A complete statement should be concluded with a fullstop (or possibly a semicolon), in particular if it contains a finite verb.<br>\n<br>\nIndirect questions also get a fullstop, not a question mark:<br>\n<br>\n<i>Er fragte, ob sie zur Party komme.</i>",
			""
		],
		"%no-fullstop": [
			"%no-fullstop",
			"No fullstop",
			"In a sentence that finishes with a work-of-art title in quotation marks, the fullstop is placed after the closing quote, not before it.<br>\n<br>\n<i>Der Titel des Buche</i><i>s</i><i> lautet &quot;Komma oder Chaos - ein Leitfaden&quot;.</i> (correct)<br>\n<br>\n<i>Der Titel des Buche</i><i>s</i><i> lautet &quot;Komma oder Chaos - ein Leitfaden.&quot;</i> (wrong)",
			""
		],
		"%no-quote-left": [
			"%no-quote-left",
			"Wrongly placed left quotation mark",
			"When a work-of-art title (in quotation marks) starts with an inflected (!) article, the latter is &quot;removed&quot; from the title by placing the opening quotation mark after it, not before it:<br>\n<br>\n<i>I</i><i>ch habe gerade zum zweiten Mal den &quot;Mann ohne Eigenschaften&quot; gelesen.</i> (correct)<br>\n<br>\n<i>Ich habe gerade zum zweiten Mal &quot;den Mann ohne Eigenschaften&quot; gelesen.</i> (wrong)",
			""
		],
		"%quote-left": [
			"%quote-left",
			"Moved left quotation mark",
			"When a work-of-art title (in quotation marks) starts with an inflected (!) article, the latter is &quot;removed&quot; from the title by placing the opening quotation mark after it, not before it:<br>\n<br>\n<i>Ich habe gerade zum zweiten Mal den &quot;Mann ohne Eigenschaften&quot; gelesen. (richtig)</i><br>\n<br>\n<i>Ich habe gerade zum zweiten Mal &quot;den Mann ohne Eigenschaften&quot; gelesen.</i> (falsch)",
			""
		],
		"%spell-local": [
			"%spell-local",
			"Writing error, e.g. typo or phoneme error",
			"Kommatroll doesn't know the word, but has a correction suggestion. The suggestion is based on a confusion table, where certain letters are exchanged or deleted. Criteria are e.g. keyboard adjacency <i>(v/b, b/n, s/l)</i> and sound similarities <i>(i/ie/ih)</i>.",
			""
		],
		"%spell-local-1": [
			"%spell-local-1",
			"Writing error, ss/ß",
			"Kommatroll thinks that the word might contain an <i>ss/ß-</i>error.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-3": [
			"%spell-local-3",
			"Writing error, ss/ß",
			"Kommatroll thinks that the word might contain an <i>ss/ß-</i>error.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-6": [
			"%spell-local-6",
			"Writing error, ss/ß",
			"Kommatroll thinks that the word might contain an <i>ss/ß-</i>error.<br>\n<br>\n<i>Mußt --&gt; musst, Graß --&gt; Gras</i><br>\n<br>\n<i>Giessen --&gt; gießen, Massnahme --&gt; Maßnahme</i><br>\n<br>\n<i>Entschluß|losigkeit --&gt; Entschluss|losigkeit</i>",
			""
		],
		"%spell-local-2": [
			"%spell-local-2",
			"Writing error, umlaut",
			"Kommatroll thinks that the word might contain an umlaut error.<br>\n<br>\n<i>Naturlich --&gt; natürlich</i>",
			""
		],
		"%spell-local-5": [
			"%spell-local-5",
			"Writing error, double letter",
			"Kommatroll thinks that the word might contain a gemination error, i.e. an inadvertant letter repetition or a single letter where there should have been a double letter.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-7": [
			"%spell-local-7",
			"Writing error, double letter",
			"Kommatroll thinks that the word might contain a gemination error, i.e. an inadvertant letter repetition or a single letter where there should have been a double letter.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-8": [
			"%spell-local-8",
			"Writing error, double letter",
			"Kommatroll thinks that the word might contain a gemination error, i.e. an inadvertant letter repetition or a single letter where there should have been a double letter.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-9": [
			"%spell-local-9",
			"Writing error, double letter",
			"Kommatroll thinks that the word might contain a gemination error, i.e. an inadvertant letter repetition or a single letter where there should have been a double letter.<br>\n<br>\n<i>Gaaanz lang --&gt; ganz</i><br>\n<br>\n<i>Hammmer --&gt; Hammer</i><br>\n<br>\n<i>Tannte --&gt; Tante</i><br>\n<br>\n<i>Papkasse --&gt; Pappkasse</i><br>\n<br>\n<i>Grafiti --&gt; Graffiti</i>",
			""
		],
		"%spell-local-a": [
			"%spell-local-a",
			"Writing error, i-lengthening",
			"Kommatroll thinks that the word might contain an i-lengthening error, with a superfluous or missing 'e' or 'h' after a long i-vowel.<br>\n<br>\n<i>Maschiene --&gt; Maschine, Maschihne --&gt; Maschine</i><br>\n<br>\n<i>Schine --&gt; Schiene</i>",
			""
		],
		"%spell-local-b": [
			"%spell-local-b",
			"Writing error, lengthening-h",
			"Kommatroll thinks that the word might contain an h-lengthening error, with a missing or superfluous 'h' after a long vowel.<br>\n<br>\n<i>Änlich --&gt; ähnlich, versönlich --&gt; versöhnlich</i><br>\n<br>\n<i>Folen --&gt; Fohlen</i>",
			""
		],
		"%spell-local-c": [
			"%spell-local-c",
			"Typo, keyboard",
			"Kommatroll thinks the word might contain a keyboard typo, i.e. a speed error in group letters <i>(</i>e.g. <i>ck/k, tz/z, ch/sch</i>) or a confusion of two letters that are either placed next to each other on the keyboard <i>(</i><i>e.g</i>. <i>v/b, b/n, s/l)</i>, or form confusable pairs in 10-finger typing.",
			""
		],
		"%spell-local-d": [
			"%spell-local-d",
			"Speed writing error",
			"Kommatroll thinks that this word might contain a speed writing error with either a typical letter confusion pair (1a-b) or the omission of a weak letter <i>(e,i)</i> in a typical position (2a-b).<br>\n<br>\n<i>(1a) vertäufelt --&gt; verteufelt, Heuserzeile --&gt; Häuserzeile</i><br>\n<br>\n<i>(1b) bedeutenste --&gt; bedeutendste</i><br>\n<br>\n<i>(2a) gkauft --&gt; gekauft</i><br>\n<br>\n<i>(2b) pakistanschen --&gt; pakistanischen</i>",
			""
		],
		"%spell-local-e": [
			"%spell-local-e",
			"Typo, extra letter",
			"Kommatroll thinks that the word might contain a typo with the inadvertant insertion of an extra letter.<br>\n<br>\n<i>Beineame --&gt; Beiname</i><br>\n<br>\n<i>Freunding --&gt; Freunding</i><br>\n<br>\n<i>Brötschen --&gt; Brötchen</i><br>\n<br>\n<i>GehSe --&gt; gehe</i>",
			""
		],
		"%spell-local-f": [
			"%spell-local-f",
			"Typo, letter pair repetition",
			"Kommatroll thinks that the word might contain a typo where a letter pair was inadvertantly repeated.<br>\n<br>\n<i>Ahnenenreihe --&gt; Ahnenreihe</i><br>\n<br>\n<i>Digititale --&gt; digitale</i>",
			""
		],
		"%spell-local-z": [
			"%spell-local-z",
			"Typo, letter swap",
			"Kommatroll thinks that the word might contain a &quot;letter swap&quot;, where two consecutive letters have changed place.<br>\n<br>\n<i>Gegnesatz --&gt; Gegensatz</i><br>\n<br>\n<i>Er turg --&gt; er trug, sie gignen --&gt; sie gingen</i><br>\n<br>\n<i>Tennismeitser --&gt; Tennismeister</i>",
			""
		],
		"%spell-endbase": [
			"%spell-endbase",
			"Word root error",
			"Kommatroll does not know this word, but has identified a common letter combination at the end of the word (e.g. a grammatical ending or a suffix) and suggests a correction alternative based on a similar/spellchecked root with the same ending.<br>\n<br>\n<i>Kollergialer -&gt; kollegialer</i>",
			""
		],
		"%spell-first": [
			"%spell-first",
			"Compound error, 1. part",
			"Kommatroll does not know this word, but has identified a possible second part of a compound and suggests a spelling correction for the unknown, first part.<br>\n<br>\n<i>Pedophilie|verdächtiger -&gt; Pädophilieverdächtiger</i><br>\n<br>\n<i>Pædophlie|verdächtig -&gt; pädophilieverdächtig</i>",
			""
		],
		"%spell-second": [
			"%spell-second",
			"Compound error, 2. part",
			"Kommatroll does not know this word, but has identified a possible first part of a compound and suggests a spelling correction for the unknown, second part.<br>\n<br>\n<i>Voraussage|mögichkeit -&gt; Voraussagemöglichkeit</i>",
			""
		],
		"%spell-last": [
			"%spell-last",
			"Spelling error, unsafe",
			"Kommatroll does not know this word, but has a correction suggestion based on similar, known errors in other words.<br>\n<br>\n<i>Vorgesort -&gt; vorgesorgt</i><br>\n<br>\n<i>Vorshlag -&gt; Vorschlag</i><br>\n<br>\n<i>Ferig -&gt; fertig</i><br>\n<br>\n<i>Entschuldigun -&gt; Entschuldigung</i>",
			""
		],
		"%spell-error": [
			"%spell-error",
			"Spelling error, safe",
			"Kommatroll has recognized the word as a spelling error. A possible correction suggestion has support from an error database or a grammatical-morphological rule and should be fairly reliable.<br>\n<br>\n<i>Nich / nciht -&gt; nicht</i><br>\n<br>\n<i>Zulett -&gt; zuletzt</i>",
			""
		]
	},
};

ctypes.da = ctypes.dan;
ctypes.de = ctypes.deu;
ctypes.en = ctypes.eng;

let types_dictionary = [];
for (let k in types_yellow) {
	types_dictionary.push('('+escapeRegExp(k)+')');
}
if (types_dictionary.length) {
	types_dictionary = new RegExp('('+types_dictionary.join('|')+')( |$)');
}
else {
	types_dictionary = new RegExp('^!NO-SUCH-TYPE');
}

function l10n_marking_types(lang) {
	marking_types = {};
	marking_types_comma = [];
	marking_types_grammar = [];

	for (let k in ctypes[lang]) {
		if (!ctypes[lang].hasOwnProperty(k)) {
			continue;
		}
		let v = ctypes[lang][k];
		marking_types[k] = [v[1], v[2], v[3]];
		marking_types_comma.push(k);

		if (/^%ko(-|$)/.test(k)) {
			types_yellow[k] = k;
		}
		else if (/^%nko(-|$)/.test(k) || /^%ok-/.test(k)) {
			types_info[k] = k;
		}
		else if (/^%nok(-|$)/.test(k)) {
			types_red[k] = k;
		}
	}

	g_options_default.types = {};
	for (let k in marking_types) {
		if (/^%(ok|nko)(-|$)/.test(k)) {
			g_options_default.types[k] = 0;
		}
		else {
			g_options_default.types[k] = 1;
		}
	}
}
