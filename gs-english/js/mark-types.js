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

let types_comp_right = new RegExp('~no-such-type');

let types_to_upper = new RegExp('~no-such-type');
let types_to_lower = new RegExp('~no-such-type');

let marking_types = {};
let marking_types_comma = [];
let marking_types_grammar = [];

let types_mv = {};

let ctypes = {
	dan: {
		"%k-appo": [
			"%k-appo",
			"Apposition (navnetillæg), start",
			"En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Hvis informationen har parentetisk (tilføjende, ikke-nødvendig) karakter, bruges der komma.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDer bruges ikke komma, hvis informationen er nødvendig og ikke kan udelades. &quot;My sister, Anne&quot; betyder, at jeg har kun én søster, mens &quot;My sister Anne&quot; burde bruges, når der er to eller flere søstre.<br>\n<br>\nTitler og stillingsbetegnelser udgør en særlig form for appositioner og afgrænses med komma. For &quot;Jr.&quot; and &quot;Sr.&quot; er kommaet valgfrit. Åbningskomma skal matches med slutkomma, hvis sætningen fortsætter.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager.</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nDer bruges også appositionskomma i den amerikansk-engelske konstruktion By+Stat/Land:<br>\n<br>\n<i>He was born in Memphis, Tennessee.</i><br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i>",
			"6"
		],
		"%ok-appo": [
			"%ok-appo",
			"Apposition (navnetillæg), start",
			"En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Hvis informationen har parentetisk (tilføjende, ikke-nødvendig) karakter, bruges der komma.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDer bruges ikke komma, hvis informationen er nødvendig og ikke kan udelades. &quot;My sister, Anne&quot; betyder, at jeg har kun én søster, mens &quot;My sister Anne&quot; burde bruges, når der er to eller flere søstre.<br>\n<br>\nTitler og stillingsbetegnelser udgør en særlig form for appositioner og afgrænses med komma. For &quot;Jr.&quot; and &quot;Sr.&quot; er kommaet valgfrit. Åbningskomma skal matches med slutkomma, hvis sætningen fortsætter.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager.</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nDer bruges også appositionskomma i den amerikansk-engelske konstruktion By+Stat/Land:<br>\n<br>\n<i>He was born in Memphis, Tennessee.</i><br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i>",
			"6"
		],
		"%k-appo-end": [
			"%k-appo-end",
			"Apposition (navnetillæg), slut",
			"Hvis en apposition kræver komma (dvs. når den er parentetisk/ikke-definerende), afgrænses den med både start- og slut-komma.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDet samme gælder for titel-appositioner. Komma er valgfrit for &quot;Jr.&quot; og &quot;Sr.&quot;, men bruges der start-komma, skal man også sætte slut-komma, når sætningen fortsætter.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nLandetillæg efter byer, i amerikansk engelsk, får også appositionskomma:<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%ko-appo-end": [
			"%ko-appo-end",
			"Apposition (navnetillæg), slut",
			"Hvis en apposition kræver komma (dvs. når den er parentetisk/ikke-definerende), afgrænses den med både start- og slut-komma.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDet samme gælder for titel-appositioner. Komma er valgfrit for &quot;Jr.&quot; og &quot;Sr.&quot;, men bruges der start-komma, skal man også sætte slut-komma, når sætningen fortsætter.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nLandetillæg efter byer, i amerikansk engelsk, får også appositionskomma:<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%ok-appo-end": [
			"%ok-appo-end",
			"Apposition (navnetillæg), slut",
			"Hvis en apposition kræver komma (dvs. når den er parentetisk/ikke-definerende), afgrænses den med både start- og slut-komma.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDet samme gælder for titel-appositioner. Komma er valgfrit for &quot;Jr.&quot; og &quot;Sr.&quot;, men bruges der start-komma, skal man også sætte slut-komma, når sætningen fortsætter.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nLandetillæg efter byer, i amerikansk engelsk, får også appositionskomma:<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%nok-appo": [
			"%nok-appo",
			"Forkert komma i apposition (navnetillæg), start",
			"Ikke-parentetiske, definerende appositioner (navnetillæg) får ikke komma:<br>\n<br>\n<i>Tokyo is a fictional character in the Netflix series[,] Money Heist.</i>",
			"6"
		],
		"%nok-appo-end": [
			"%nok-appo-end",
			"Forkert komma i apposition (navnetillæg), slut",
			"Ikke-parentetiske, definerende appositioner (navnetillæg) får ikke komma:<br>\n<br>\n<i>The Netflix series[,] Money Heist[,] has wone many awards.</i>",
			"6"
		],
		"%nok-comp": [
			"%nok-comp",
			"Ikke komma ved sammenligning med 'than' eller 'as'",
			"Der skal ikke være komma før sammenlignende 'than' og 'as':<br>\n<br>\n<i>He is taller[,] than his brother.</i><br>\n<br>\n<i>He is as tall[,] as his brother.</i>",
			"15"
		],
		"%k-contrast": [
			"%k-contrast",
			"Modsætningskomma, start",
			"Denne type komma adskiller sætningsdele, der udtrykker en modsætning.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nModsætningskomma er normalt valgfrit før 'but', men skal altid bruges, når ordet forbinder to hovedsætninger.",
			"14"
		],
		"%ko-contrast": [
			"%ko-contrast",
			"Modsætningskomma, start",
			"Denne type komma adskiller sætningsdele, der udtrykker en modsætning.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nModsætningskomma er normalt valgfrit før 'but', men skal altid bruges, når ordet forbinder to hovedsætninger.",
			"14"
		],
		"%ok-contrast": [
			"%ok-contrast",
			"Modsætningskomma, start",
			"Denne type komma adskiller sætningsdele, der udtrykker en modsætning.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nModsætningskomma er normalt valgfrit før 'but', men skal altid bruges, når ordet forbinder to hovedsætninger.",
			"14"
		],
		"%k-contrast-end": [
			"%k-contrast-end",
			"Modsætningskomma, slut",
			"Ved modsætningsindskud bruges der også slut-komma.<br>\n<br>\n<i>That is my money, not yours, that disappeared</i>",
			"14"
		],
		"%ok-contrast-end": [
			"%ok-contrast-end",
			"Modsætningskomma, slut",
			"Ved modsætningsindskud bruges der også slut-komma.<br>\n<br>\n<i>That is my money, not yours, that disappeared</i>",
			"14"
		],
		"%nok-coord": [
			"%nok-coord",
			"Overflødigt sideordningskomma",
			"Der bruges som udgangspunkt ikke komma ved sideordning af to elementer. Dette gælder for både for enkeltord som substantiver (navneord) eller verber (udsagnsord) og for flerordsforbindelser som præpositionsudtryk, nominalfraser eller ledsætninger.<br>\n<br>\n<i>Peter invited his family[,] and friends for a garden party.</i><br>\n<br>\n<i>SpaceX has launched another rocket[,] and retrieved it without incident.</i><br>\n<br>\n<i>They were inseparable in life[,] and in death.</i><br>\n<br>\n&quot;Either...or&quot; og &quot;neither...nor&quot; får heller ikke komma.<br>\n<br>\n<i>Neither his son[,] nor his daughter shared his passion for diving.</i><br>\n<br>\nSideordnede hovedsætninger, med hver deres subjekt, skal dog adskilles med komma.<br>\n<br>\n<i>Peter did the dishes, and Anne fed the cats.</i><br>\n<br>\nSom en undtagelse kan komma dog bruges for at undgå flertydigheder i forbindelse med sideordning, fx ved sideordning af prædikater (uden subjekt):<br>\n<br>\n<i>He spotted another team mate who entered the bar, and waved.</i><br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"20"
		],
		"%k-day": [
			"%k-day",
			"Datokomma (dag), start",
			"Der sættes komma mellem en ugedag og dato/måned. I tillæg bruges der slutkomma, hvis sætningen fortsætter med fx klokkeslet eller stedsangivelse.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%ok-day": [
			"%ok-day",
			"Datokomma (dag), start",
			"Der sættes komma mellem en ugedag og dato/måned. I tillæg bruges der slutkomma, hvis sætningen fortsætter med fx klokkeslet eller stedsangivelse.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%k-day-end": [
			"%k-day-end",
			"Datokomma (dag), slut",
			"Der sættes komma mellem en ugedag og dato/måned. I tillæg bruges der slutkomma, hvis sætningen fortsætter med fx klokkeslet eller stedsangivelse.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%ok-day-end": [
			"%ok-day-end",
			"Datokomma (dag), slut",
			"Der sættes komma mellem en ugedag og dato/måned. I tillæg bruges der slutkomma, hvis sætningen fortsætter med fx klokkeslet eller stedsangivelse.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%k-explain": [
			"%k-explain",
			"Forklaringskomma, start",
			"Forklaringer og præciseringer kræver komma før det indledende ord ('e.g.', 'such as', 'i.e.', 'for instance'). I amerikansk engelsk ses der sommetideer et valgfrit komma mellem det indledende ord og resten af udtrykket.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%ok-explain": [
			"%ok-explain",
			"Forklaringskomma, start",
			"Forklaringer og præciseringer kræver komma før det indledende ord ('e.g.', 'such as', 'i.e.', 'for instance'). I amerikansk engelsk ses der sommetideer et valgfrit komma mellem det indledende ord og resten af udtrykket.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%ko-explain-internal": [
			"%ko-explain-internal",
			"Optionelt indre forklaringskomma",
			"I amerikansk engelsk ses der sommetider et valgfrit komma <i>efter</i> det indledende ord af en forklaring eller præcisering, dvs. efter 'e.g.', 'such as', 'i.e.', 'for instance', i tillæg til det normale start-komma.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%nko-explain-internal": [
			"%nko-explain-internal",
			"Optionelt indre forklaringskomma",
			"I amerikansk engelsk ses der sommetider et valgfrit komma <i>efter</i> det indledende ord af en forklaring eller præcisering, dvs. efter 'e.g.', 'such as', 'i.e.', 'for instance', i tillæg til det normale start-komma.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%k-explain-end": [
			"%k-explain-end",
			"Forklaringskomma, slut",
			"Indskudte forklaringer og præcisering har slut-komma i tillæg til start-komma.<br>\n<br>\n<i>Coniferous trees, such as pine and spruce, do not drop their needles in the winter</i>",
			"13"
		],
		"%k-extra": [
			"%k-extra",
			"Komma ved påhængsytringer",
			"Der skal bruges komma for at adskille påhængsspørgsmål og andre korte tilføjelser efter en helsætning.<br>\n<br>\n<i>The roses are beautiful, aren't they?</i><br>\n<br>\n<i>She lives in Paris, doesn't she?</i><br>\n<br>\n<i>We haven't met, have we?</i><br>\n<br>\n<i>Are you stupid, or what?</i><br>\n<br>\n<i>I just know, ok?</i><br>\n<br>\n<i>The party will be on the beach, where else?</i><br>\n<br>\n<i>He had disappointed both his math and history teachers, not that either mattered.</i>",
			"12"
		],
		"%ok-extra": [
			"%ok-extra",
			"Komma ved påhængsytringer",
			"Der skal bruges komma for at adskille påhængsspørgsmål og andre korte tilføjelser efter en helsætning.<br>\n<br>\n<i>The roses are beautiful, aren't they?</i><br>\n<br>\n<i>She lives in Paris, doesn't she?</i><br>\n<br>\n<i>We haven't met, have we?</i><br>\n<br>\n<i>Are you stupid, or what?</i><br>\n<br>\n<i>I just know, ok?</i><br>\n<br>\n<i>The party will be on the beach, where else?</i><br>\n<br>\n<i>He had disappointed both his math and history teachers, not that either mattered.</i>",
			"12"
		],
		"%k-FSend": [
			"%k-FSend",
			"Komma efter indledende ledsætning",
			"Indledende adverbielle ledsætninger afsluttes med (slut-)komma, dvs. hvis en ledsætning kommer før hovedsætningen. Der står til gengæld ikke (start-)komma, hvis hovedsætningen kommer først og ledsætningen sidst.<br>\n<br>\n<i>If you can make it, please reply to this message!</i><br>\n<br>\nVed indskudte, parentetiske ledsætninger, dvs. hvis hovedsætningen fortsætter efter ledsætningen, bruges både start- og slut-komma.<br>\n<br>\n<i>Although, as you will have seen, the dreaded millenium bug did not materialise, expensive preparations were made.</i>",
			"5.1"
		],
		"%ok-FSend": [
			"%ok-FSend",
			"Komma efter indledende ledsætning",
			"Indledende adverbielle ledsætninger afsluttes med (slut-)komma, dvs. hvis en ledsætning kommer før hovedsætningen. Der står til gengæld ikke (start-)komma, hvis hovedsætningen kommer først og ledsætningen sidst.<br>\n<br>\n<i>If you can make it, please reply to this message!</i><br>\n<br>\nVed indskudte, parentetiske ledsætninger, dvs. hvis hovedsætningen fortsætter efter ledsætningen, bruges både start- og slut-komma.<br>\n<br>\n<i>Although, as you will have seen, the dreaded millenium bug did not materialise, expensive preparations were made.</i>",
			"5.1"
		],
		"%nok-FSend": [
			"%nok-FSend",
			"Ingen komma efter bunden ledsætning",
			"Ikke-parentetiske, ikke-indledende ledsætninger får ikke slut-komma, selvom hovedsætningen fortsætter efter dem. Sådanne ledsætninger er som regel grammatisk bundet (fx &quot;the belief that&quot;) eller restriktive (nødvendige) relativsætninger, dvs. de kan ikke fjernes uden grundlæggende at ændre sætningens mening.<br>\n<br>\n<i>His belief that news should be read on paper[,] is not shared by younger people.</i>",
			"5.1"
		],
		"%k-FSstart": [
			"%k-FSstart",
			"Åbningskomma ved kausale ('fordi'), koncessive ('selvom') og adversative ledsætninger ('altimens')",
			"Som udgangspunkt er der ikke start-komma ved ledsætninger i engelsk. Men der er en række vigtige undtagelser, bl.a. (1) kausale, (2) koncessive and (3) adversative ledsætninger.<br>\n<br>\n(1) Kausale (årsags-) ledsætninger, indledt med &quot;because&quot;, &quot;as&quot; or &quot;since&quot;:<br>\n<br>\n<i>You don't have to worry about the cold, because you will be wearing a wet suit.</i><br>\n<br>\n(2) Koncessive ledsætninger, indledt med &quot;although&quot;, &quot;even if&quot; or &quot;as far as&quot;:<br>\n<br>\n<i>Many big mammals are now endangered species, although some may survive in zoos.</i><br>\n<br>\n(3) Adversative ledsætninger med &quot;while&quot;:<br>\n<br>\n<i>Their factories closed, while those in Ontario prospered</i><br>\n<br>\nDesuden bruges komma omkring indskudte (parentetiske) ledsætninger, fx efter en konjunktion (bindeord), der indleder en anden, omgivende sætning (matrikssætning). I dette tilfælde sættes der både start- og slutkomma.<br>\n<br>\n<i>We hope that, once fighting has stopped, the country will recover quickly.</i><br>\n<br>\n<i></i><br>\n<br>\nEndeligt sættes der også komma omkring parentetiske relativsætninger.",
			"5.2"
		],
		"%ok-FSstart": [
			"%ok-FSstart",
			"Åbningskomma ved kausale ('fordi'), koncessive ('selvom') og adversative ledsætninger ('altimens')",
			"Som udgangspunkt er der ikke start-komma ved ledsætninger i engelsk. Men der er en række vigtige undtagelser, bl.a. (1) kausale, (2) koncessive and (3) adversative ledsætninger.<br>\n<br>\n(1) Kausale (årsags-) ledsætninger, indledt med &quot;because&quot;, &quot;as&quot; or &quot;since&quot;:<br>\n<br>\n<i>You don't have to worry about the cold, because you will be wearing a wet suit.</i><br>\n<br>\n(2) Koncessive ledsætninger, indledt med &quot;although&quot;, &quot;even if&quot; or &quot;as far as&quot;:<br>\n<br>\n<i>Many big mammals are now endangered species, although some may survive in zoos.</i><br>\n<br>\n(3) Adversative ledsætninger med &quot;while&quot;:<br>\n<br>\n<i>Their factories closed, while those in Ontario prospered</i><br>\n<br>\nDesuden bruges komma omkring indskudte (parentetiske) ledsætninger, fx efter en konjunktion (bindeord), der indleder en anden, omgivende sætning (matrikssætning). I dette tilfælde sættes der både start- og slutkomma.<br>\n<br>\n<i>We hope that, once fighting has stopped, the country will recover quickly.</i><br>\n<br>\n<i></i><br>\n<br>\nEndeligt sættes der også komma omkring parentetiske relativsætninger.",
			"5.2"
		],
		"%k-FSstart-unsafe": [
			"%k-FSstart-unsafe",
			"Mulig ledsætnings-startkomma",
			"Hvis konjunktionen (bindeordet) her betyder &quot;fordi&quot;, burde der sættes komma. Man programmet er ikke sikker - det kunne også være en tidsledsætning. Du afgør det!",
			"5.2"
		],
		"%nok-FSstart": [
			"%nok-FSstart",
			"Normalt intet komma ved ledsætninger, der kommer efter hovedsætningen",
			"Med visse undtagelser har engelske ledsætninger aldrig startkomma. Med andre ord, en hovedsætning adskilles ikke fra en efterfølgende ledsætning.<br>\n<br>\n<i>I've made them today[,] while it was snowing</i><br>\n<br>\nDette gælder også for ikke-parentetiske ledsætninger midt i hovedsætningen, især restriktive relativsætninger med essentiel (nødvendig) information, der ikke kan fjernes uden grundlæggende at ændre sætningens betydning.<br>\n<br>\n<i>The apples[,] he had bought[,] were all bruised.</i>",
			"5.2"
		],
		"%k-intro": [
			"%k-intro",
			"Introduktionskomma",
			"Der sættes obligatorisk eller valgfrit komma efter indledende udtryk i starten af en sætning. Sådanne udtryk kan være ord, præpositions- og nominalforbindelser, eller ledsætninger inkl. participial- og infinitiv-konstruktioner (tillægsmådeudtryk).<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (participialkonstruktion)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (ledsætning)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available (præpositionsforbindelse med to præpositioner)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (infinitivsætning)</i><br>\n<br>\nKommaet er valgfrit, hvis udtrykket er klart og kort (3-4 ord). Også simple præpositionsforbindelser med kun én præposition (forholdsord) har valgfrit komma.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nIntroduktionskomma sættes dog normalt altid efter bestemte enkeltord, især visse adverbier (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) og interjektioner (udråbsord). For <i>then, so</i> and <i>yet</i> er kommaet valgfrit.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nOg som altid kan det give mening at bruge komma i tilfælde af flertydigheder eller for at forhindre, at læseren forvirres og skal gå tilbage i sætningen for at genoptage tråden.<br>\n<br>\n<i>Before feeding, the lion roared.</i><br>\n<br>\n<i>(Uden komma risikerer man at læse &quot;the lion&quot; først som objekt af &quot;feeding&quot;, men skal så ændre sit mentale billede af sætningen, når man når til det andet verbum, &quot;roared&quot;)</i>",
			"4"
		],
		"%ko-intro": [
			"%ko-intro",
			"Introduktionskomma",
			"Der sættes obligatorisk eller valgfrit komma efter indledende udtryk i starten af en sætning. Sådanne udtryk kan være ord, præpositions- og nominalforbindelser, eller ledsætninger inkl. participial- og infinitiv-konstruktioner (tillægsmådeudtryk).<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (participialkonstruktion)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (ledsætning)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available (præpositionsforbindelse med to præpositioner)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (infinitivsætning)</i><br>\n<br>\nKommaet er valgfrit, hvis udtrykket er klart og kort (3-4 ord). Også simple præpositionsforbindelser med kun én præposition (forholdsord) har valgfrit komma.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nIntroduktionskomma sættes dog normalt altid efter bestemte enkeltord, især visse adverbier (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) og interjektioner (udråbsord). For <i>then, so</i> and <i>yet</i> er kommaet valgfrit.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nOg som altid kan det give mening at bruge komma i tilfælde af flertydigheder eller for at forhindre, at læseren forvirres og skal gå tilbage i sætningen for at genoptage tråden.<br>\n<br>\n<i>Before feeding, the lion roared.</i><br>\n<br>\n<i>(Uden komma risikerer man at læse &quot;the lion&quot; først som objekt af &quot;feeding&quot;, men skal så ændre sit mentale billede af sætningen, når man når til det andet verbum, &quot;roared&quot;)</i>",
			"4"
		],
		"%ok-intro": [
			"%ok-intro",
			"Introduktionskomma",
			"Der sættes obligatorisk eller valgfrit komma efter indledende udtryk i starten af en sætning. Sådanne udtryk kan være ord, præpositions- og nominalforbindelser, eller ledsætninger inkl. participial- og infinitiv-konstruktioner (tillægsmådeudtryk).<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (participialkonstruktion)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (ledsætning)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available (præpositionsforbindelse med to præpositioner)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (infinitivsætning)</i><br>\n<br>\nKommaet er valgfrit, hvis udtrykket er klart og kort (3-4 ord). Også simple præpositionsforbindelser med kun én præposition (forholdsord) har valgfrit komma.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nIntroduktionskomma sættes dog normalt altid efter bestemte enkeltord, især visse adverbier (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) og interjektioner (udråbsord). For <i>then, so</i> and <i>yet</i> er kommaet valgfrit.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nOg som altid kan det give mening at bruge komma i tilfælde af flertydigheder eller for at forhindre, at læseren forvirres og skal gå tilbage i sætningen for at genoptage tråden.<br>\n<br>\n<i>Before feeding, the lion roared.</i><br>\n<br>\n<i>(Uden komma risikerer man at læse &quot;the lion&quot; først som objekt af &quot;feeding&quot;, men skal så ændre sit mentale billede af sætningen, når man når til det andet verbum, &quot;roared&quot;)</i>",
			"4"
		],
		"%k-list": [
			"%k-list",
			"Opremsningskomma (lister)",
			"Et opremsningskomma adskiller elementerne i en liste på tre eller flere ord, fraser eller (led)sætninger. Det sidste element i listen får typisk &quot;and&quot; eller &quot;or&quot;, samt et valgfrit komma (kaldet Oxford-komma) før konjunktionen (bindeordet).<br>\n<br>\n<i>Peter loves good food, good company(,) and a practical joke.</i><br>\n<br>\n<i>Eat, dance(,) and have fun!</i><br>\n<br>\nHvis listen afsluttes med ordet &quot;etc.&quot; eller et beslægtet udtryk (&quot;and so on&quot;, &quot;and so forth&quot;), sættes der et komma mellem dette og resten af listen - samt et valgfrit slut-komma i tilfælde af at sætningen fortsætter.<br>\n<br>\n<i>You will find plates, cups, glasses, etc.(,) in the cupboard.</i><br>\n<br>\nDet latinske udtryk &quot;et al.&quot; (med betydningen &quot;og andre&quot;) får dog ikke et opremsningskomma, hvis det bruges efter en &quot;liste&quot; af kun ét navn.<br>\n<br>\n<i>Martinson et al. (2015) showed that performance increased over time.</i>",
			"1.1"
		],
		"%ok-list": [
			"%ok-list",
			"Opremsningskomma (lister)",
			"Et opremsningskomma adskiller elementerne i en liste på tre eller flere ord, fraser eller (led)sætninger. Det sidste element i listen får typisk &quot;and&quot; eller &quot;or&quot;, samt et valgfrit komma (kaldet Oxford-komma) før konjunktionen (bindeordet).<br>\n<br>\n<i>Peter loves good food, good company(,) and a practical joke.</i><br>\n<br>\n<i>Eat, dance(,) and have fun!</i><br>\n<br>\nHvis listen afsluttes med ordet &quot;etc.&quot; eller et beslægtet udtryk (&quot;and so on&quot;, &quot;and so forth&quot;), sættes der et komma mellem dette og resten af listen - samt et valgfrit slut-komma i tilfælde af at sætningen fortsætter.<br>\n<br>\n<i>You will find plates, cups, glasses, etc.(,) in the cupboard.</i><br>\n<br>\nDet latinske udtryk &quot;et al.&quot; (med betydningen &quot;og andre&quot;) får dog ikke et opremsningskomma, hvis det bruges efter en &quot;liste&quot; af kun ét navn.<br>\n<br>\n<i>Martinson et al. (2015) showed that performance increased over time.</i>",
			"1.1"
		],
		"%k-list-ADJ": [
			"%k-list-ADJ",
			"Adjektivkomma",
			"Adjektiver (tillægsord) adskilles med et komma, hvis de er på samme niveau betydningsmæssigt, dvs. hvis de kan bytte plads og hvis man kan sætte &quot;and&quot; imellem.<br>\n<br>\n<i>She is a tall, beautiful woman. (a tall and beautiful woman - a beautiful, tall woman)</i><br>\n<br>\n<i>He showed off an expensive German car. (*a German expensive car)</i>",
			"2"
		],
		"%ok-list-ADJ": [
			"%ok-list-ADJ",
			"Adjektivkomma",
			"Adjektiver (tillægsord) adskilles med et komma, hvis de er på samme niveau betydningsmæssigt, dvs. hvis de kan bytte plads og hvis man kan sætte &quot;and&quot; imellem.<br>\n<br>\n<i>She is a tall, beautiful woman. (a tall and beautiful woman - a beautiful, tall woman)</i><br>\n<br>\n<i>He showed off an expensive German car. (*a German expensive car)</i>",
			"2"
		],
		"%nok-list-ADJ": [
			"%nok-list-ADJ",
			"Forkert adjektivkomma",
			"Der står ikke komma mellem adjektiver, der ikke er på samme betydningsmæssige niveau, dvs. hvis rækkefølgen er fast og der ikke kan indføjes &quot;and&quot;.<br>\n<br>\n<i>He showed off an expensive[,] German car. (*a German expensive car)</i>",
			"2"
		],
		"%k-list-unsafe": [
			"%k-list-unsafe",
			"Usikker opremsningskomma",
			"Det er muligt, at der mangler et opremsningskomma her, men det kunne også bare være et sammensat substantiv (navneord). Programmet kunne ikke afgøre det.",
			"1.1"
		],
		"%k-main": [
			"%k-main",
			"Hovedsætningskomma",
			"To hovedsætninger skal altid adskilles, enten som selvstændige perioder eller vha. komma. Hvis sætningerne er forbundet med en sideordnende konkunktion (&quot;and&quot;, &quot;or&quot;, &quot;but&quot;), skal der være komma foran konjunktionen (bindeordet). At knytte to hovedsætninger sammen med kun et komma, dvs. uden konjunktion, anses som dårligt stil i engelsk (&quot;comma splice&quot;), og undgås videst muligt. Brug punktum i stedet.<br>\n<br>\n<i>You are quite right, and I shall send a new copy.</i><br>\n<br>\n<i>Some of you already knew, but now it is official.</i><br>\n<br>\nHvis den 2. sætning ikke har et specificeret subjekt, er der ikke tale om en sætning, men et prædikat, og der bruges kun komma for at undgå misforståelser:<br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"3"
		],
		"%ok-main": [
			"%ok-main",
			"Hovedsætningskomma",
			"To hovedsætninger skal altid adskilles, enten som selvstændige perioder eller vha. komma. Hvis sætningerne er forbundet med en sideordnende konkunktion (&quot;and&quot;, &quot;or&quot;, &quot;but&quot;), skal der være komma foran konjunktionen (bindeordet). At knytte to hovedsætninger sammen med kun et komma, dvs. uden konjunktion, anses som dårligt stil i engelsk (&quot;comma splice&quot;), og undgås videst muligt. Brug punktum i stedet.<br>\n<br>\n<i>You are quite right, and I shall send a new copy.</i><br>\n<br>\n<i>Some of you already knew, but now it is official.</i><br>\n<br>\nHvis den 2. sætning ikke har et specificeret subjekt, er der ikke tale om en sætning, men et prædikat, og der bruges kun komma for at undgå misforståelser:<br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"3"
		],
		"%nok-main": [
			"%nok-main",
			"Forkert hovedsætningskomma (ikke komma mellem prædikater ved delt subjekt)",
			"Der bruges ikke komma mellem to sideordnede prædikater, ikke en gang i en hovedsætning. Uden subjekt er et prædikat ikke en fuld sætning, og komma bruges kun ved sideordning af <i>hele</i> (hoved)sætninger.<br>\n<br>\n<i>Peter bought a Guiness[,] and settled down in a corner.</i><br>\n<br>\n<i>I meant to buy tickets(,) but ran out of time.</i><br>\n<br>\nSommetider ser man dog et komma i det andet eksempel - ikke pga. sideordningen, men som et valgfrit modsætningskomma pga. &quot;but&quot;.",
			"3"
		],
		"%k-OV": [
			"%k-OV",
			"Komma efter (foranstillet) objektsætning",
			"En foranstillet objektsætning afgrænses med komma fra den efterfølgende hovedsætning:<br>\n<br>\n<i>Just how deep the recession would be, no one could have imagined.</i>",
			"19"
		],
		"%ok-OV": [
			"%ok-OV",
			"Komma efter (foranstillet) objektsætning",
			"En foranstillet objektsætning afgrænses med komma fra den efterfølgende hovedsætning:<br>\n<br>\n<i>Just how deep the recession would be, no one could have imagined.</i>",
			"19"
		],
		"%k-oxford": [
			"%k-oxford",
			"Oxford-komma (koordinator-komma)",
			"Konjunktionerne &quot;and&quot; eller &quot;or&quot; sidst i en opremsning kan få et valgfrit komma foran sig. Dette kaldes Oxford-komma og er almindelig i amerikansk, men ikke britisk engelsk. Selvom Oxford-komma er valgfrit, bør det bruges konsistent - enten altid eller aldrig i samme tekst.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nHvis det kan hjælpe med at forhindre flertydighed, kan Oxford-komma dog bruges under alle omstændigheder.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%ko-oxford": [
			"%ko-oxford",
			"Oxford-komma (koordinator-komma)",
			"Konjunktionerne &quot;and&quot; eller &quot;or&quot; sidst i en opremsning kan få et valgfrit komma foran sig. Dette kaldes Oxford-komma og er almindelig i amerikansk, men ikke britisk engelsk. Selvom Oxford-komma er valgfrit, bør det bruges konsistent - enten altid eller aldrig i samme tekst.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nHvis det kan hjælpe med at forhindre flertydighed, kan Oxford-komma dog bruges under alle omstændigheder.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%ok-oxford": [
			"%ok-oxford",
			"Oxford-komma (koordinator-komma)",
			"Konjunktionerne &quot;and&quot; eller &quot;or&quot; sidst i en opremsning kan få et valgfrit komma foran sig. Dette kaldes Oxford-komma og er almindelig i amerikansk, men ikke britisk engelsk. Selvom Oxford-komma er valgfrit, bør det bruges konsistent - enten altid eller aldrig i samme tekst.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nHvis det kan hjælpe med at forhindre flertydighed, kan Oxford-komma dog bruges under alle omstændigheder.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%nok-oxford": [
			"%nok-oxford",
			"Forkert Oxford-komma",
			"Der burde ikke være et Oxford-komma, når der kun er to elementer i en sideordning.<br>\n<br>\n<i>The</i><i> tickets were cheap, but they decided otherwise[,] and stayed at home for a candle-light dinner.</i>",
			"1.2"
		],
		"%nko-oxford": [
			"%nko-oxford",
			"Optionelt Oxford-komma",
			"Dette er et Oxford-komma. Det er helt ok, men valgfrit. Behold det, hvis du bruger Oxford-komma i resten af din tekst, ellers er det bedst at fjerne det, medmindre dette skaber flertydighed.",
			""
		],
		"%k-paren": [
			"%k-paren",
			"Parentetisk komma (ved indskud), start",
			"Parentetisk materiale, dvs. ikke-nødvendige ord, præpositionsforbindelser eller ledsætninger, der afbryder sætningens flow, får komma både før og efter. Typiske udtryk er fx &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, men det kan også være indskudte kommentarer som &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nParentetisk materiale kan også tage form af en eftertanke, med udtryk som &quot;as well as&quot; eller &quot;so much so that&quot;, der i så fald begge kræver komma foran.",
			"8"
		],
		"%ko-paren": [
			"%ko-paren",
			"Parentetisk komma (ved indskud), start",
			"Parentetisk materiale, dvs. ikke-nødvendige ord, præpositionsforbindelser eller ledsætninger, der afbryder sætningens flow, får komma både før og efter. Typiske udtryk er fx &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, men det kan også være indskudte kommentarer som &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nParentetisk materiale kan også tage form af en eftertanke, med udtryk som &quot;as well as&quot; eller &quot;so much so that&quot;, der i så fald begge kræver komma foran.",
			"8"
		],
		"%ok-paren": [
			"%ok-paren",
			"Parentetisk komma (ved indskud), start",
			"Parentetisk materiale, dvs. ikke-nødvendige ord, præpositionsforbindelser eller ledsætninger, der afbryder sætningens flow, får komma både før og efter. Typiske udtryk er fx &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, men det kan også være indskudte kommentarer som &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nParentetisk materiale kan også tage form af en eftertanke, med udtryk som &quot;as well as&quot; eller &quot;so much so that&quot;, der i så fald begge kræver komma foran.",
			"8"
		],
		"%k-paren-end": [
			"%k-paren-end",
			"Parentetisk komma (ved indskud), slut",
			"Parentetisk materiale, dvs. ikke-nødvendige ord, præpositionsforbindelse eller ledsætninger, der afbryder sætningens flow, får komma både før og efter. Typiske udtryk er fx &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, men det kan også være indskudte kommentarer som &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%ko-paren-end": [
			"%ko-paren-end",
			"Parentetisk komma (ved indskud), slut",
			"Parentetisk materiale, dvs. ikke-nødvendige ord, præpositionsforbindelse eller ledsætninger, der afbryder sætningens flow, får komma både før og efter. Typiske udtryk er fx &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, men det kan også være indskudte kommentarer som &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%ok-paren-end": [
			"%ok-paren-end",
			"Parentetisk komma (ved indskud), slut",
			"Parentetisk materiale, dvs. ikke-nødvendige ord, præpositionsforbindelse eller ledsætninger, der afbryder sætningens flow, får komma både før og efter. Typiske udtryk er fx &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, men det kan også være indskudte kommentarer som &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%k-parenth": [
			"%k-parenth",
			"Komma ved parentes",
			"Der kan ikke stå et komma foran hverken en højre eller en venstre parentes. Hvis samme sætning uden parentes ville have fået et komma, placeres det til sidst, efter højre parentes.<br>\n<br>\n<i>With eighteen races run, there are twelve to go[,] (40 % of the series).</i><br>\n<br>\n<i>It's second rate, in any case[,] (he added smiling) so the artistic loss to the world will be nil.</i><br>\n<br>\nKommaet burde her flyttes til efter højre parentes:<br>\n<br>\n<i>It's second rate, in any case (he added smiling), so the artistic loss to the world will be nil.</i>",
			"23"
		],
		"%nok-parenth": [
			"%nok-parenth",
			"Komma ved parentes",
			"Der kan ikke stå et komma foran hverken en højre eller en venstre parentes. Hvis samme sætning uden parentes ville have fået et komma, placeres det til sidst, efter højre parentes.<br>\n<br>\n<i>With eighteen races run, there are twelve to go[,] (40 % of the series).</i><br>\n<br>\n<i>It's second rate, in any case[,] (he added smiling) so the artistic loss to the world will be nil.</i><br>\n<br>\nKommaet burde her flyttes til efter højre parentes:<br>\n<br>\n<i>It's second rate, in any case (he added smiling), so the artistic loss to the world will be nil.</i>",
			"23"
		],
		"%k-quote-start": [
			"%k-quote-start",
			"Citatkomma, start",
			"Der bruges citatkomma til at adskille direkte tale fra den anførende sætning (&quot;he said&quot;, &quot;she suggested&quot;, etc.).<br>\n<br>\n<i>She said, &quot;I don't mind.&quot;</i><br>\n<br>\n<i>&quot;The problem is,&quot; he said, &quot;that we don't know where to look.&quot;</i><br>\n<br>\nCitatkomma er valgfrit før 1-ords citater.<br>\n<br>\n<i>He said &quot;Stop!&quot;</i>",
			"11"
		],
		"%k-quote-end": [
			"%k-quote-end",
			"Citatkomma, slut",
			"Hvis et citat står foran den anførende sætning, bruges et slut-komma, medmindre den anførte sætning selv afsluttes med '!', '?' eller ':' . Et afsluttende punktum bortfalder. I amerikansk engelsk (AE) er den generelle regel, at citatkomma sættes indenfor gåseøjnene, mens det står udenfor i britisk engelsk (BE).<br>\n<br>\n<i>&quot;I don't mind,&quot; she said. (AE)</i><br>\n<br>\n<i>&quot;I don't mind&quot;, she said (BE)</i><br>\n<br>\nSlutkomma er påkrævet, også efter 1-ords citater.<br>\n<br>\n<i>&quot;Please</i><i>,</i><i>&quot; he said.</i><i> (AE)</i><br>\n<br>\n<i>&quot;Please&quot;, he said (BE)</i>",
			"11"
		],
		"%nok-quote": [
			"%nok-quote",
			"Ikke startkomma ved citater uden anførselstegn",
			"Hvis et citat efterfølger den anførende sætning uden gåseøjne, behandles det som enhver anden objektsætning og får IKKE komma.<br>\n<br>\n<i>She said[,] I don't mind.</i>",
			"11"
		],
		"%nok-quote-end": [
			"%nok-quote-end",
			"Ikke citatkomma efter periode-tegnsætning",
			"Der bruges ikke komma efter direkte tale, hvis denne afsluttes med '!', '?' eller ':' . NB: Punktum bortfalder før citatkomma.<br>\n<br>\n<i>&quot;Get out![,]&quot; she screamed.</i><br>\n<br>\n<i>&quot;Get out!&quot;[,] she screamed.</i>",
			"11"
		],
		"%k-rel": [
			"%k-rel",
			"Parentetisk relativesætning, start",
			"Engelske relativsætninger afgrænses af komma, hvis (og kun hvis) de indeholder parentetisk (ikke-væsentlig) information og kan erstattes af en parentes eller fjernes, uden at ødelægge sætningen. Fordi egenavne allerede er specifikke per definition, er en eventuel relativsætning efter dem altid parentetisk og får komma. I amerikansk engelsk er relativsætninger med &quot;which&quot; også næsten altid parentetiske og får komma.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i><br>\n<br>\n<i>They went to the city's harbour, where a dolphin had made its appearance the day before.</i><br>\n<br>\nSommetider er det ikke et ord, <i>which-</i>relativsætningen henfører til, men en hel prædikation (udsigelse). Også her bruges der komma før &quot;which&quot;:<br>\n<br>\n<i>The sun and the moon have the same apparent sizes in the sky, which is surprising, given the huge differences in distance and factual size.</i>",
			"7"
		],
		"%ok-rel": [
			"%ok-rel",
			"Parentetisk relativesætning, start",
			"Engelske relativsætninger afgrænses af komma, hvis (og kun hvis) de indeholder parentetisk (ikke-væsentlig) information og kan erstattes af en parentes eller fjernes, uden at ødelægge sætningen. Fordi egenavne allerede er specifikke per definition, er en eventuel relativsætning efter dem altid parentetisk og får komma. I amerikansk engelsk er relativsætninger med &quot;which&quot; også næsten altid parentetiske og får komma.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i><br>\n<br>\n<i>They went to the city's harbour, where a dolphin had made its appearance the day before.</i><br>\n<br>\nSommetider er det ikke et ord, <i>which-</i>relativsætningen henfører til, men en hel prædikation (udsigelse). Også her bruges der komma før &quot;which&quot;:<br>\n<br>\n<i>The sun and the moon have the same apparent sizes in the sky, which is surprising, given the huge differences in distance and factual size.</i>",
			"7"
		],
		"%k-rel-end": [
			"%k-rel-end",
			"Parentetisk relativsætning, slut",
			"Parentetiske relativsætninger skal, foruden start-komma, også have slut-komma, hvis de ikke står sidst i perioden.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i>",
			"7"
		],
		"%ok-rel-end": [
			"%ok-rel-end",
			"Parentetisk relativsætning, slut",
			"Parentetiske relativsætninger skal, foruden start-komma, også have slut-komma, hvis de ikke står sidst i perioden.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i>",
			"7"
		],
		"%nok-rel": [
			"%nok-rel",
			"Ikke (start)komma ved ikke-parentetiske (essentielle) relativsætninger",
			"Engelske relativsætninger får ikke komma, hvis de er restriktrive, dvs. hvis de indeholder væsentlig information, der ikke kan erstattes af en parentes eller fjernes, uden at ødelægge sætningen. Pronominet &quot;that&quot; bruges næsten kun i denne type relativsætning og får derfor altid et komma foran sig (plus et slut-komma efter relativsætningen).<br>\n<br>\n<i>The 12 stars[,] that adorn the EU flag[,] do not represent a country count.</i><br>\n<br>\nDet samme gælder for relativsætninger helt uden indledende pronomen.<br>\n<br>\n<i>The car[,] he had bought[,] was old.</i><br>\n<br>\nI amerikansk engelsk er relativsætninger med &quot;which&quot; omvendt næsten altid parentetiske og får komma.",
			"7"
		],
		"%nok-rel-end": [
			"%nok-rel-end",
			"Ikke (slut)komma ved ikke-parentetiske (essentielle) relativsætninger",
			"Engelske relativsætninger får ikke komma, hvis de er restriktive, dvs. hvis de indeholder væsentlig information, der er nødvendig for at sætninger beholder sin mening. Sådanne ikke-parentetiske ledsætninger får hverken start- eller slut-komma.<br>\n<br>\n<i>The car[,] he had bought[,] was old.</i>",
			"7"
		],
		"%ko-rel": [
			"%ko-rel",
			"Relativsætning, muligvis parentetisk og derfor komma-krævende",
			"Det er vanskeligt at afgøre, om denne relativsætning er restriktiv (uden komma) eller parentetisk (komma-krævende). Tjek dit valg af komma. Brug komma, hvis informationen kan sættes i parentes uden at ændre meningen.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%ko-rel-end": [
			"%ko-rel-end",
			"Relativsætning, muligvis parentetisk og derfor komma-krævende",
			"Det er vanskeligt at afgøre, om denne relativsætning er restriktiv (uden komma) eller parentetisk (komma-krævende). Tjek dit valg af komma. Brug komma, hvis informationen kan sættes i parentes uden at ændre meningen.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nko-rel": [
			"%nko-rel",
			"Relativsætning, muligvis ikke-parentetisk og derfor uden komma",
			"Det er vanskeligt at afgøre, om denne relativsætning er parentetisk (komma-krævende) eller restriktiv (uden komma). Tjek dit valg af komma. Fjern kommaet, hvis informationen ikke kan sættes i parentes uden at ændre meningen.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nko-rel-end": [
			"%nko-rel-end",
			"Relativsætning, muligvis ikke-parentetisk og derfor uden komma",
			"Det er vanskeligt at afgøre, om denne relativsætning er parentetisk (komma-krævende) eller restriktiv (uden komma). Tjek dit valg af komma. Fjern kommaet, hvis informationen ikke kan sættes i parentes uden at ændre meningen.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nok-soft": [
			"%nok-soft",
			"Muligvis overflødigt komma",
			"Programmet kunne ikke finde en regel for et komma dette sted, men det kan stadigvæk godt være, at det giver mening at bruge komma her, fx som pausekomma eller pga. flertydighed. Tjek dit valg af komma!",
			"21"
		],
		"%k-stop": [
			"%k-stop",
			"Ny periode (sætningsgrænse)",
			"Der synes at være to separate udsagn her, og det var måske en idé at bryde sætningen. Det er muligvis ikke nok at bruge komma. At knytte to hovedsætninger sammen med kun et komma hedder &quot;comma splice&quot; og bliver ofte anset for dårlig stil i en engelsk tekst. Brug eventuelt punktum eller semikolon i stedet.<br>\n<br>\n<i>Claire felt hungry,? she went to the fridge and made herself a sandwich.</i><br>\n<br>\n<i>--&gt; Claire felt hungry. She went to the fridge and made herself a sandwich.</i><br>\n<br>\nAlternativt kan du bruge en kombination af komma plus konjunktion.<br>\n<br>\n<i>--&gt; Claire felt hungry, so she went to the fridge and made herself a sandwich.</i>",
			"16"
		],
		"%nok-SV": [
			"%nok-SV",
			"Ikke komma mellem subjekt (grundled) og verbum (udsagnsord)",
			"Subjekt (grundled) og verbum (udsagnsord) må aldrig adskilles af et komma. Dette er en syntaktisk regel og &quot;vinder&quot; over pausekomma-regelen. Derfor skal der ikke bruges komma her, uanset om der gøres ophold dette sted ved oplæsning.<br>\n<br>\n<i>My friend Peter[,] is a formidable Tennis player.</i><br>\n<br>\n<i>The most important attribute of a ball player[,] is quick reflex actions.</i><br>\n<br>\nBemærk, at der stadigvæk kan stå parentetisk materiale mellem subjekt og verbum, fx parentetiske relativsætninger. Sådanne indskud afgrænses i så fald af både start- og slut-komma, som foreskrevet af andre komma-regler.<br>\n<br>\n<i>The cake, which had been garnished elaborately with blueberries and cream, did not even last to see the coffee.</i><br>\n<br>\n<i>We, just like other companies, will contact your former employer.</i><br>\n<br>\nSammensatte subjekter og ikke-parentetiske appositioner gør derimod ingen forskel - der bruges ikke komma før verbet.<br>\n<br>\n<i>Your family and the people that like you most[,] are not necesssarily the most likely to tell you the truth.</i>",
			"17"
		],
		"%ko-too": [
			"%ko-too",
			"Komma ved &quot;too&quot;",
			"Der sættes et (valgfrit) komma ved ordet &quot;too&quot;, når det betyder &quot;også&quot;. I midten af sætninger står der komma på begge sider.<br>\n<br>\n<i>Claire, too, wanted a piece of the action.</i><br>\n<br>\n<i>Can I have a copy, too?</i>",
			"24"
		],
		"%ko-too-end": [
			"%ko-too-end",
			"Komma ved &quot;too&quot;",
			"Der sættes et (valgfrit) komma ved ordet &quot;too&quot;, når det betyder &quot;også&quot;. I midten af sætninger står der komma på begge sider.<br>\n<br>\n<i>Claire, too, wanted a piece of the action.</i><br>\n<br>\n<i>Can I have a copy, too?</i>",
			"24"
		],
		"%nok-VO": [
			"%nok-VO",
			"Ikke komma mellem verbum (udsagnsord) og objekt (genstandsled)",
			"Et verbum (udsagnsord) må ikke adskilles fra sit efterfølgende objekt (genstandsled). Dette gælder også, hvis objektet er en ledsætning.<br>\n<br>\n<i>I need[,] a hot bath and mulled wine.</i><br>\n<br>\n<i>We all like to think[,] that we are better drivers than the average person.</i><br>\n<br>\n<i>I think[,] she likes chocolate.</i><br>\n<br>\n<i>You can bring along[,] whoever you like.</i>",
			""
		],
		"%k-voc": [
			"%k-voc",
			"Tiltalekomma (vokativ), start",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet eller titlen af den person, der tiltales.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%ko-voc": [
			"%ko-voc",
			"Tiltalekomma (vokativ), start",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet eller titlen af den person, der tiltales.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%ok-voc": [
			"%ok-voc",
			"Tiltalekomma (vokativ), start",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet eller titlen af den person, der tiltales.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%k-voc-end": [
			"%k-voc-end",
			"Tiltalekomma (vokativ), slut",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet eller titlen af den person, der tiltales.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Madam President, let me ask a budget question.</i>",
			"9"
		],
		"%ok-voc-end": [
			"%ok-voc-end",
			"Tiltalekomma (vokativ), slut",
			"Der bruges komma ved tiltale (vokativ), dvs. før og/eller efter navnet eller titlen af den person, der tiltales.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Madam President, let me ask a budget question.</i>",
			"9"
		],
		"%k-year": [
			"%k-year",
			"Datokomma (år), start",
			"Der bruges komma til at adskille tal i dato-udtryk, dvs. start-komma mellem dag og år, og slut-komma efter året.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i><br>\n<br>\nI et datoformat, hvor måneden kommer <i>efter</i> dagen, bruges der ikke komma:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%ok-year": [
			"%ok-year",
			"Datokomma (år), start",
			"Der bruges komma til at adskille tal i dato-udtryk, dvs. start-komma mellem dag og år, og slut-komma efter året.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i><br>\n<br>\nI et datoformat, hvor måneden kommer <i>efter</i> dagen, bruges der ikke komma:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%k-year-end": [
			"%k-year-end",
			"Datokomma (år), slut",
			"I datoudtryk bruges der komma efter året, men kun i måned-dag-år-formatet.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i>",
			"10.2"
		],
		"%ok-year-end": [
			"%ok-year-end",
			"Datokomma (år), slut",
			"I datoudtryk bruges der komma efter året, men kun i måned-dag-år-formatet.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i>",
			"10.2"
		],
		"%nok-year": [
			"%nok-year",
			"Forkert datokomma (år), start",
			"Der bruges ikke komma i datoer, hvor måned og år står direkte ved siden af hinanden.<br>\n<br>\n<i>A local temperature record was recorded in July</i><i>[,]</i><i> 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i>",
			"10.2"
		],
		"%nok-year-end": [
			"%nok-year-end",
			"Forkert datokomma (år), slut",
			"Der bruges ikke komma i datoer, hvor måned og år står direkte ved siden af hinanden.<br>\n<br>\n<i>3 October[,] 1989[,] was an important date in German history.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%number-format": [
			"%number-format",
			"Ikke-engelsk talformat",
			"I engelske taludtryk bruges punktum og komma modsat til hvad der gøres på dansk. Således bruges punktum til decimaler, og komma til at afgrænse grupper på tre cifre, dvs. tusinder, millioner etc.<br>\n<br>\n<i>123,000,609</i><br>\n<br>\n<i>0.74</i><br>\n<br>\n<i>13.19237</i>",
			"22.1"
		],
		"%no-number-format": [
			"%no-number-format",
			"Ikke komma ved tal i adresser o.l.",
			"Segmenteringskomma for cifre bruges ikke i adresser.<br>\n<br>\n<i>1024, Heathrow Rd.</i>",
			"22.2"
		]
	},
	deu: {
		"%k-appo": [
			"%k-appo",
			"Apposition, Anfang",
			"Eine Apposition ist ein substantivisches Attribut, das sein (vorangehendes) Bestimmungswort näher beschreibt. Nicht-definierende Appositionen, die auch in Klammern stehen könnten, werden durch Kommata abgetrennt.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDefinierende Appositionen, die nicht weggelassen werden können, erhalten dagegen kein Komma. &quot;My sister, Anne&quot; bedeutet, dass ich nur eine Schwester habe (es kann sich also sowieso nur um Anne handeln), während der Name in &quot;My sister Anne&quot; eine notwendige/definierende Apposition (ohne Komma) ist, weil es mehr als eine Schwester gibt.<br>\n<br>\nTitel und Berufsbezeichnungen sind eine spezielle Form der Apposition und erhalten im Englischen ein Komma. Nur bei &quot;Jr.&quot; and &quot;Sr.&quot; ist das Komma wahlfrei. Geht der Satz nach dem Titel weiter, wird außerdem ein Schluss-Komma gesetzt.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager.</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nEin Appositionskomma steht auch in der amerikanischen Konstruktion Stadt+Staat:<br>\n<br>\n<i>He was born in Memphis, Tennessee.</i><br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i>",
			"6"
		],
		"%ok-appo": [
			"%ok-appo",
			"Apposition, Anfang",
			"Eine Apposition ist ein substantivisches Attribut, das sein (vorangehendes) Bestimmungswort näher beschreibt. Nicht-definierende Appositionen, die auch in Klammern stehen könnten, werden durch Kommata abgetrennt.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDefinierende Appositionen, die nicht weggelassen werden können, erhalten dagegen kein Komma. &quot;My sister, Anne&quot; bedeutet, dass ich nur eine Schwester habe (es kann sich also sowieso nur um Anne handeln), während der Name in &quot;My sister Anne&quot; eine notwendige/definierende Apposition (ohne Komma) ist, weil es mehr als eine Schwester gibt.<br>\n<br>\nTitel und Berufsbezeichnungen sind eine spezielle Form der Apposition und erhalten im Englischen ein Komma. Nur bei &quot;Jr.&quot; and &quot;Sr.&quot; ist das Komma wahlfrei. Geht der Satz nach dem Titel weiter, wird außerdem ein Schluss-Komma gesetzt.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager.</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nEin Appositionskomma steht auch in der amerikanischen Konstruktion Stadt+Staat:<br>\n<br>\n<i>He was born in Memphis, Tennessee.</i><br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i>",
			"6"
		],
		"%k-appo-end": [
			"%k-appo-end",
			"Apposition, Ende",
			"Nicht-definierende Appositionen, d.h. Appositionen die weggelassen oder in Klammern gesetzt werden könnten, werden mit Kommata abgetrennt, sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDas gleiche gilt für Titel-Appositionen. Das Komma ist wahlfrei bei &quot;Jr.&quot; og &quot;Sr.&quot; - falls man es benutzt, muss es aber auf beiden Seiten hinzugefügt werden.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nStaatszusätze nach Stadtnamen, in amerikanischem Englisch, erfordern auch Appositionskomma, sowohl vor als auch nach dem Staatsnamen.<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%ko-appo-end": [
			"%ko-appo-end",
			"Apposition, Ende",
			"Nicht-definierende Appositionen, d.h. Appositionen die weggelassen oder in Klammern gesetzt werden könnten, werden mit Kommata abgetrennt, sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDas gleiche gilt für Titel-Appositionen. Das Komma ist wahlfrei bei &quot;Jr.&quot; og &quot;Sr.&quot; - falls man es benutzt, muss es aber auf beiden Seiten hinzugefügt werden.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nStaatszusätze nach Stadtnamen, in amerikanischem Englisch, erfordern auch Appositionskomma, sowohl vor als auch nach dem Staatsnamen.<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%ok-appo-end": [
			"%ok-appo-end",
			"Apposition, Ende",
			"Nicht-definierende Appositionen, d.h. Appositionen die weggelassen oder in Klammern gesetzt werden könnten, werden mit Kommata abgetrennt, sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nDas gleiche gilt für Titel-Appositionen. Das Komma ist wahlfrei bei &quot;Jr.&quot; og &quot;Sr.&quot; - falls man es benutzt, muss es aber auf beiden Seiten hinzugefügt werden.<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nStaatszusätze nach Stadtnamen, in amerikanischem Englisch, erfordern auch Appositionskomma, sowohl vor als auch nach dem Staatsnamen.<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%nok-appo": [
			"%nok-appo",
			"Falsches Appositionskomma, Anfang",
			"Definierende Appositionen, die nicht weggelassen werden und nicht in Klammern stehen können, erhalten kein Komma.<br>\n<br>\n<i>Tokyo is a fictional character in the Netflix series[,] Money Heist.</i>",
			"6"
		],
		"%nok-appo-end": [
			"%nok-appo-end",
			"Falsches Appositionskomma, Ende",
			"Definierende Appositionen, die nicht weggelassen werden und nicht in Klammern stehen können, erhalten kein Komma.<br>\n<br>\n<i>The Netflix series[,] Money Heist[,] has wone many awards.</i>",
			"6"
		],
		"%nok-comp": [
			"%nok-comp",
			"Kein Komma bei Vergleichen mit 'than' oder 'as'",
			"Bei Vergleichen mit 'than' oder 'as' wird kein Komma gesetzt:<br>\n<br>\n<i>He is taller[,] than his brother.</i><br>\n<br>\n<i>He is as tall[,] as his brother.</i>",
			"15"
		],
		"%k-contrast": [
			"%k-contrast",
			"Gegensatzkomma, Anfang",
			"Satzteile, die einen Gegensatz ausdrücken, werden durch ein Komma abgesetzt.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nDas Gegensatzkomma ist normalerweise wahlfrei vor 'but', darf aber nie weggelassen werden, wenn es zwei Hauptsätze verbindet.",
			"14"
		],
		"%ko-contrast": [
			"%ko-contrast",
			"Gegensatzkomma, Anfang",
			"Satzteile, die einen Gegensatz ausdrücken, werden durch ein Komma abgesetzt.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nDas Gegensatzkomma ist normalerweise wahlfrei vor 'but', darf aber nie weggelassen werden, wenn es zwei Hauptsätze verbindet.",
			"14"
		],
		"%ok-contrast": [
			"%ok-contrast",
			"Gegensatzkomma, Anfang",
			"Satzteile, die einen Gegensatz ausdrücken, werden durch ein Komma abgesetzt.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nDas Gegensatzkomma ist normalerweise wahlfrei vor 'but', darf aber nie weggelassen werden, wenn es zwei Hauptsätze verbindet.",
			"14"
		],
		"%k-contrast-end": [
			"%k-contrast-end",
			"Gegensatzkomma, Ende",
			"Ved modsætningsindskud bruges der også slut-komma.<br>\n<br>\n<i>That is my money, not yours, that disappeared</i>",
			"14"
		],
		"%ok-contrast-end": [
			"%ok-contrast-end",
			"Gegensatzkomma, Ende",
			"Ved modsætningsindskud bruges der også slut-komma.<br>\n<br>\n<i>That is my money, not yours, that disappeared</i>",
			"14"
		],
		"%nok-coord": [
			"%nok-coord",
			"Überflüssiges Nebenordnungskomma",
			"Bei einer Nebenordnung von nur zwei Elementen wird normalerweise kein Komma benutzt. Dies gilt sowohl für Einzelwörter wie Substantive und Verben als auch für Nebensätze, Nominalgruppen und Präpositionsausdrücke.<br>\n<br>\n<i>Peter invited his family[,] and friends for a garden party.</i><br>\n<br>\n<i>SpaceX has launched another rocket[,] and retrieved it without incident.</i><br>\n<br>\n<i>They were inseparable in life[,] and in death.</i><br>\n<br>\n&quot;Either...or&quot; und &quot;neither...nor&quot; erhalten auch kein Komma.<br>\n<br>\n<i>Neither his son[,] nor his daughter shared his passion for diving.</i><br>\n<br>\nEine Ausnahme sind vollständige Hauptsätze. Hier wird auch bei Nebenordnung ein Komma benutzt.<br>\n<br>\n<i>Peter did the dishes, and Anne fed the cats.</i><br>\n<br>\nDas gleiche Komma ist fakultative bei nebengeordneten Nebensätzen:<br>\n<br>\n<i>I realize more than ever what a special friend you are(,) and how much I have missed our conversations.</i><br>\n<br>\nUnd natürlich kann man, wie auch sonst, ein Komma verwenden, um Missverständnisse zu vermeiden, z.B. bei der Nebenordnung von Prädikaten (subjektlosen Teilsätzen):<br>\n<br>\n<i>He spotted another team mate who entered the bar, and waved.</i><br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"20"
		],
		"%nko-coord": [
			"%nko-coord",
			"Fakultatives Nebenordnungskomma",
			"Bei einer Nebenordnung von nur zwei Wörtern oder Gruppen steht normalerweise kein Komma. Zwei nebengeordnete Hauptsätze dagenen erfordern ein Trennungskomma. Bei nebengeordnetetn Nebensätzen ist das entsprechende Komma wahlfrei:<br>\n<br>\n<i>I realize more than ever what a special friend you are(,) and how much I have missed our conversations.</i>",
			""
		],
		"%k-day": [
			"%k-day",
			"Datumkomma (Tag), Anfang",
			"Wochentag und Datum werden duch ein Komma getrennt. Geht der Satz mit z.B. einer Zeit- oder Ortsangabe weiter, wird nach dem Datum ein zweites Komma gesetzt.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%ok-day": [
			"%ok-day",
			"Datumkomma (Tag), Anfang",
			"Wochentag und Datum werden duch ein Komma getrennt. Geht der Satz mit z.B. einer Zeit- oder Ortsangabe weiter, wird nach dem Datum ein zweites Komma gesetzt.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%k-day-end": [
			"%k-day-end",
			"Datumkomma (Tag), Ende",
			"Wochentag und Datum werden duch ein Komma getrennt. Geht der Satz mit z.B. einer Zeit- oder Ortsangabe weiter, wird nach dem Datum ein zweites Komma gesetzt.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%ok-day-end": [
			"%ok-day-end",
			"Datumkomma (Tag), Ende",
			"Wochentag und Datum werden duch ein Komma getrennt. Geht der Satz mit z.B. einer Zeit- oder Ortsangabe weiter, wird nach dem Datum ein zweites Komma gesetzt.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%k-explain": [
			"%k-explain",
			"Beispielkomma, Anfang",
			"Beispiele und Erklärungen erfordern ein Komma vor dem einleitenden Wort ('e.g.', 'such as', 'i.e.', 'for instance'). Im Amerikanischen wird manchmal außerdem ein wahlfreies Komma<i> nach</i> dem einleitenden Wort benutzt.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%ok-explain": [
			"%ok-explain",
			"Beispielkomma, Anfang",
			"Beispiele und Erklärungen erfordern ein Komma vor dem einleitenden Wort ('e.g.', 'such as', 'i.e.', 'for instance'). Im Amerikanischen wird manchmal außerdem ein wahlfreies Komma<i> nach</i> dem einleitenden Wort benutzt.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%ko-explain-internal": [
			"%ko-explain-internal",
			"Fakultatives inneres Beispielkomma",
			"Im Amerikanischen wird bei Beispielen und Erklärungen manchmal ein wahlfreies Komma <i>hinter</i> das einleitende Wort gesetzt, also hinter 'e.g.', 'such as', 'i.e.', 'for instance' - zusätzlich zum normalen Komma davor.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%nko-explain-internal": [
			"%nko-explain-internal",
			"Fakultatives inneres Beispielkomma",
			"Im Amerikanischen wird bei Beispielen und Erklärungen manchmal ein wahlfreies Komma <i>hinter</i> das einleitende Wort gesetzt, also hinter 'e.g.', 'such as', 'i.e.', 'for instance' - zusätzlich zum normalen Komma davor.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%k-explain-end": [
			"%k-explain-end",
			"Beispielkomma, Ende",
			"Erklärende oder präzisierende Einschübe erhalten Kommata sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>Coniferous trees, such as pine and spruce, do not drop their needles in the winter</i>",
			"13"
		],
		"%k-extra": [
			"%k-extra",
			"Komma bei Satzzusätzen",
			"<i>Man benutzt ein Komma, um Zusätze am Satzende, insbesondere Fragezusätze, abzugrenzen.</i><br>\n<br>\n<i>The roses are beautiful, aren't they?</i><br>\n<br>\n<i>She lives in Paris, doesn't she?</i><br>\n<br>\n<i>We haven't met, have we?</i><br>\n<br>\n<i>Are you stupid, or what?</i><br>\n<br>\n<i>I just know, ok?</i><br>\n<br>\n<i>The party will be on the beach, where else?</i><br>\n<br>\n<i>He had disappointed both his math and history teachers, not that either mattered.</i>",
			"12"
		],
		"%ok-extra": [
			"%ok-extra",
			"Komma bei Satzzusätzen",
			"<i>Man benutzt ein Komma, um Zusätze am Satzende, insbesondere Fragezusätze, abzugrenzen.</i><br>\n<br>\n<i>The roses are beautiful, aren't they?</i><br>\n<br>\n<i>She lives in Paris, doesn't she?</i><br>\n<br>\n<i>We haven't met, have we?</i><br>\n<br>\n<i>Are you stupid, or what?</i><br>\n<br>\n<i>I just know, ok?</i><br>\n<br>\n<i>The party will be on the beach, where else?</i><br>\n<br>\n<i>He had disappointed both his math and history teachers, not that either mattered.</i>",
			"12"
		],
		"%k-FSend": [
			"%k-FSend",
			"Komma nach einleitendem Nebensatz",
			"Einleitende adverbielle Nebensätze werden duch ein Komma vom Hauptsatz abgetrennt. Umgekehrt steht im Englischen kein (!) Komma, wenn der Nebensatz <i>nach</i> dem Hauptsatz kommt.<br>\n<br>\n<i>If you can make it, please reply to this message!</i><br>\n<br>\n<i>Please reply to this message[,] if you can make it!</i><br>\n<br>\nSteht ein grammatisch ungebundener Nebensatz mitten in einem anderen Satz (Nebensatzeinschübe), erfordert das ein Kommata auf beiden Seiten.<br>\n<br>\n<i>Although, as you will have seen, the dreaded millenium bug did not materialise, expensive preparations were made.</i>",
			"5.1"
		],
		"%ok-FSend": [
			"%ok-FSend",
			"Komma nach einleitendem Nebensatz",
			"Einleitende adverbielle Nebensätze werden duch ein Komma vom Hauptsatz abgetrennt. Umgekehrt steht im Englischen kein (!) Komma, wenn der Nebensatz <i>nach</i> dem Hauptsatz kommt.<br>\n<br>\n<i>If you can make it, please reply to this message!</i><br>\n<br>\n<i>Please reply to this message[,] if you can make it!</i><br>\n<br>\nSteht ein grammatisch ungebundener Nebensatz mitten in einem anderen Satz (Nebensatzeinschübe), erfordert das ein Kommata auf beiden Seiten.<br>\n<br>\n<i>Although, as you will have seen, the dreaded millenium bug did not materialise, expensive preparations were made.</i>",
			"5.1"
		],
		"%nok-FSend": [
			"%nok-FSend",
			"Kein Komma bei gebundenden Nebensätzen",
			"Grammatisch gebundene, nicht einleitende Nebensätze (und restriktive Relativsätze) erhalten im Englischen kein Komma, auch nicht am Ende. Ein Nebensatz ist grammatisch gebunden, und kein Einschub, wenn er von einem vorausgehenden Wort abhängig ist (z.B. &quot;the belief that ..&quot;).<br>\n<br>\n<i>His belief that news should be read on paper[,] is not shared by younger people.</i>",
			"5.1"
		],
		"%k-FSstart": [
			"%k-FSstart",
			"Nebensatzkomma bei kausalen ('weil'), koncessiven ('obwohl') og adversativen ('wohingegen') Nebensätzen",
			"Normalerweise wird im Englischen der Anfang eines Nebensatzes nicht mit einem Komma markiert. Allerdings gibt es eine Reihe wichtiger Ausnahmen, u.a. (1) kausale, (2) konzessive and (3) adversative Nebensätze.<br>\n<br>\n(1) Kausale (Ursachen-) Nebensätze, eingeleitet mit &quot;because&quot;, &quot;as&quot; oder &quot;since&quot;:<br>\n<br>\n<i>You don't have to worry about the cold, because you will be wearing a wet suit.</i><br>\n<br>\n(2) Konzessive Nebensätze, eingeleitet mit &quot;although&quot;, &quot;even if&quot; oder &quot;as far as&quot;:<br>\n<br>\n<i>Many big mammals are now endangered species, although some may survive in zoos.</i><br>\n<br>\n(3) Adversative Nebensätze mit &quot;while&quot;:<br>\n<br>\n<i>Their factories closed, while those in Ontario prospered</i><br>\n<br>\nAuch ungebundene Nebensatzeinschübe werden mit einem Kommapaar abgetrennt, z.B. nach einer Konjunktion, die einen höherstehenden, umgebenden Satz (Matrixsatz) einleitet.<br>\n<br>\n<i>We hope that, once fighting has stopped, the country will recover quickly.</i><br>\n<br>\nAußerdem erhalten parenthetische (nicht-restriktive) Relativsätze ein Komma, sowohl am Anfang als auch am Ende.",
			"5.2"
		],
		"%ok-FSstart": [
			"%ok-FSstart",
			"Nebensatzkomma bei kausalen ('weil'), koncessiven ('obwohl') og adversativen ('wohingegen') Nebensätzen",
			"Normalerweise wird im Englischen der Anfang eines Nebensatzes nicht mit einem Komma markiert. Allerdings gibt es eine Reihe wichtiger Ausnahmen, u.a. (1) kausale, (2) konzessive and (3) adversative Nebensätze.<br>\n<br>\n(1) Kausale (Ursachen-) Nebensätze, eingeleitet mit &quot;because&quot;, &quot;as&quot; oder &quot;since&quot;:<br>\n<br>\n<i>You don't have to worry about the cold, because you will be wearing a wet suit.</i><br>\n<br>\n(2) Konzessive Nebensätze, eingeleitet mit &quot;although&quot;, &quot;even if&quot; oder &quot;as far as&quot;:<br>\n<br>\n<i>Many big mammals are now endangered species, although some may survive in zoos.</i><br>\n<br>\n(3) Adversative Nebensätze mit &quot;while&quot;:<br>\n<br>\n<i>Their factories closed, while those in Ontario prospered</i><br>\n<br>\nAuch ungebundene Nebensatzeinschübe werden mit einem Kommapaar abgetrennt, z.B. nach einer Konjunktion, die einen höherstehenden, umgebenden Satz (Matrixsatz) einleitet.<br>\n<br>\n<i>We hope that, once fighting has stopped, the country will recover quickly.</i><br>\n<br>\nAußerdem erhalten parenthetische (nicht-restriktive) Relativsätze ein Komma, sowohl am Anfang als auch am Ende.",
			"5.2"
		],
		"%k-FSstart-unsafe": [
			"%k-FSstart-unsafe",
			"Mögliches Nebensatzkomma",
			"Falls die Konjunktion hier &quot;weil&quot; bedeutet, sollte ein Komma gesetzt werden. Allerdings ist sich das Programm nicht sicher - es könnte sich auch um einen temporalen (Zeit-) Nebensatz handeln. Also bedarf es einer Menschenentscheidung: Wie ist der Satz gemeint?",
			"5.2"
		],
		"%nok-FSstart": [
			"%nok-FSstart",
			"Normalerweise kein Komma bei nachgestellten Nebensätzen",
			"Von wenigen Ausnahmen abgesehen, steht im Englischen nie ein Komma zwischen einem Hauptsatz und einem nachfolgenden Nebensatz.<br>\n<br>\n<i>I've made them today[,] while it was snowing</i><br>\n<br>\nDas gilt auch für Nebensätze mitten im Hauptsatz, solange diese integraler Bestandteil des Satzes sind, d.h. nicht weggelassen oder in Klammern gesetzt werden können. Ein Beispiel sind restriktive Relativsätze:<br>\n<br>\n<i>The apples[,] he had bought[,] were all bruised.</i>",
			"5.2"
		],
		"%k-intro": [
			"%k-intro",
			"Introduktionskomma",
			"Einleitende Ausdrücke am Satzanfang können durch ein Komma abgetrennt werden. Dabei kann es sich um Wörter oder Nominal- und Präpositionsgruppen handeln, oder um Nebensätze, Infinitivgruppen und Partizipialkonstruktionen.<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (Partizipialsatz)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (Nebensatz)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available. (Präpositionsgruppe mit zwei Präpositionen)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (Infinitivgruppe)</i><br>\n<br>\nDas Introduktionskomma ist fakultativ bei kurzen Ausdrücken (3-4 Wörter), und bei Präpositionsgruppen mit nur einer Präposition.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nNach bestimmten Adverbien (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) und Interjektionen am Satzanfang steht fast immer ein Komma. Nach <i>then, so</i> und <i>yet</i> ist das Komma wahlfrei.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nUnd wie immer kann ein Komma gerechtfertigt sein, um Missverständnissen vorzubeugen, oder um zu verhindern, dass der Leser verwirrt mehrere Wörter zurücksetzen muss um den Satzfaden wiederaufzunehmen.<br>\n<br>\n<i>Before feeding, the lion roared.</i><br>\n<br>\n(Ohne Komma könnte &quot;the lion&quot; zunächst als Objekt von &quot;feeding&quot; verstanden werden, eine Satzstruktur die dann beim Erreichen des zweiten Verbs, &quot;roared&quot;, umgedeutet werden muss.)",
			"4"
		],
		"%ko-intro": [
			"%ko-intro",
			"Introduktionskomma",
			"Einleitende Ausdrücke am Satzanfang können durch ein Komma abgetrennt werden. Dabei kann es sich um Wörter oder Nominal- und Präpositionsgruppen handeln, oder um Nebensätze, Infinitivgruppen und Partizipialkonstruktionen.<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (Partizipialsatz)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (Nebensatz)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available. (Präpositionsgruppe mit zwei Präpositionen)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (Infinitivgruppe)</i><br>\n<br>\nDas Introduktionskomma ist fakultativ bei kurzen Ausdrücken (3-4 Wörter), und bei Präpositionsgruppen mit nur einer Präposition.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nNach bestimmten Adverbien (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) und Interjektionen am Satzanfang steht fast immer ein Komma. Nach <i>then, so</i> und <i>yet</i> ist das Komma wahlfrei.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nUnd wie immer kann ein Komma gerechtfertigt sein, um Missverständnissen vorzubeugen, oder um zu verhindern, dass der Leser verwirrt mehrere Wörter zurücksetzen muss um den Satzfaden wiederaufzunehmen.<br>\n<br>\n<i>Before feeding, the lion roared.</i><br>\n<br>\n(Ohne Komma könnte &quot;the lion&quot; zunächst als Objekt von &quot;feeding&quot; verstanden werden, eine Satzstruktur die dann beim Erreichen des zweiten Verbs, &quot;roared&quot;, umgedeutet werden muss.)",
			"4"
		],
		"%ok-intro": [
			"%ok-intro",
			"Introduktionskomma",
			"Einleitende Ausdrücke am Satzanfang können durch ein Komma abgetrennt werden. Dabei kann es sich um Wörter oder Nominal- und Präpositionsgruppen handeln, oder um Nebensätze, Infinitivgruppen und Partizipialkonstruktionen.<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (Partizipialsatz)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (Nebensatz)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available. (Präpositionsgruppe mit zwei Präpositionen)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (Infinitivgruppe)</i><br>\n<br>\nDas Introduktionskomma ist fakultativ bei kurzen Ausdrücken (3-4 Wörter), und bei Präpositionsgruppen mit nur einer Präposition.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nNach bestimmten Adverbien (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) und Interjektionen am Satzanfang steht fast immer ein Komma. Nach <i>then, so</i> und <i>yet</i> ist das Komma wahlfrei.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nUnd wie immer kann ein Komma gerechtfertigt sein, um Missverständnissen vorzubeugen, oder um zu verhindern, dass der Leser verwirrt mehrere Wörter zurücksetzen muss um den Satzfaden wiederaufzunehmen.<br>\n<br>\n<i>Before feeding, the lion roared.</i><br>\n<br>\n(Ohne Komma könnte &quot;the lion&quot; zunächst als Objekt von &quot;feeding&quot; verstanden werden, eine Satzstruktur die dann beim Erreichen des zweiten Verbs, &quot;roared&quot;, umgedeutet werden muss.)",
			"4"
		],
		"%k-list": [
			"%k-list",
			"Aufzählungskomma (Liste)",
			"Ein Aufzählungskomma trennt Elemente in einer Liste von drei oder mehr Elementen - Wörtern, Wortgruppen oder (Neben-)Sätzen. Das letze Element in der List wird typischerweise mit &quot;and&quot; oder &quot;or&quot; angeschlossen.<br>\n<br>\n<i>Peter loves good food, good company(,) and a practical joke.</i><br>\n<br>\n<i>Eat, dance(,) and have fun!</i><br>\n<br>\nWenn die Liste mit &quot;etc.&quot; oder einem verwandten Ausdruck (&quot;and so on&quot;, &quot;and so forth&quot;) endet, wird vor diesem ein Komma eingefügt. Geht der Satz danach weiter, kann auch noch ein fakultatives Schluss-Komma nach &quot;etc.&quot; gesetzt werden.<br>\n<br>\n<i>You will find plates, cups, glasses, etc.(,) in the cupboard.</i><br>\n<br>\nDer lateinische Ausdruck &quot;et al.&quot; (auf Deutsch u.a.) ist eine Ausnahme und bekommt nach einer &quot;Liste&quot; von nur einem Namen kein Komma.<br>\n<br>\n<i>Martinson et al. (2015) showed that performance increased over time.</i>",
			"1.1"
		],
		"%ok-list": [
			"%ok-list",
			"Aufzählungskomma (Liste)",
			"Ein Aufzählungskomma trennt Elemente in einer Liste von drei oder mehr Elementen - Wörtern, Wortgruppen oder (Neben-)Sätzen. Das letze Element in der List wird typischerweise mit &quot;and&quot; oder &quot;or&quot; angeschlossen.<br>\n<br>\n<i>Peter loves good food, good company(,) and a practical joke.</i><br>\n<br>\n<i>Eat, dance(,) and have fun!</i><br>\n<br>\nWenn die Liste mit &quot;etc.&quot; oder einem verwandten Ausdruck (&quot;and so on&quot;, &quot;and so forth&quot;) endet, wird vor diesem ein Komma eingefügt. Geht der Satz danach weiter, kann auch noch ein fakultatives Schluss-Komma nach &quot;etc.&quot; gesetzt werden.<br>\n<br>\n<i>You will find plates, cups, glasses, etc.(,) in the cupboard.</i><br>\n<br>\nDer lateinische Ausdruck &quot;et al.&quot; (auf Deutsch u.a.) ist eine Ausnahme und bekommt nach einer &quot;Liste&quot; von nur einem Namen kein Komma.<br>\n<br>\n<i>Martinson et al. (2015) showed that performance increased over time.</i>",
			"1.1"
		],
		"%k-list-ADJ": [
			"%k-list-ADJ",
			"Adjektivkomma",
			"Zwischen gleichrangigen Adjektiven steht ein Komma. Adjektive sind gleichrangig, wenn sie den Platz tauschen oder mit &quot;and&quot; verbunden werden können.<br>\n<br>\n<i>She is a tall, beautiful woman. (a tall and beautiful woman - a beautiful, tall woman)</i><br>\n<br>\n<i>He showed off an expensive Italian car. (*an Italian expensive car)</i>",
			"2"
		],
		"%ok-list-ADJ": [
			"%ok-list-ADJ",
			"Adjektivkomma",
			"Zwischen gleichrangigen Adjektiven steht ein Komma. Adjektive sind gleichrangig, wenn sie den Platz tauschen oder mit &quot;and&quot; verbunden werden können.<br>\n<br>\n<i>She is a tall, beautiful woman. (a tall and beautiful woman - a beautiful, tall woman)</i><br>\n<br>\n<i>He showed off an expensive Italian car. (*an Italian expensive car)</i>",
			"2"
		],
		"%nok-list-ADJ": [
			"%nok-list-ADJ",
			"Falsches Adjektivkomma",
			"Es wird kein Komma zwischen Adjektiven gesetzt, wenn diese nicht gleichrangig sind, d.h. wenn die Reihenfolge fest und keine Nebenordnung mit &quot;and&quot; möglich ist.<br>\n<br>\n<i>He showed off an expensive[,] Italian car. (*an Italian expensive car)</i>",
			"2"
		],
		"%k-list-unsafe": [
			"%k-list-unsafe",
			"Unsicheres Aufzählungskomma",
			"Hier könnte ein Listenkomma fehlen. Es kan sich aber auch einfach um ein zusammengesetztes Substantiv handeln. Das Programm konnte in diesem Fall keine Entscheidung treffen.",
			"1.1"
		],
		"%k-main": [
			"%k-main",
			"Hauptsatzkomma",
			"Hauptsätze müssen immer voneinander getrennt werden, entweder als selbständige Sätze, mit einer Konjunktion oder mit einem Satzzeichen. Dabei wird vor eine verbindende Konjunktion (&quot;and&quot;, &quot;or&quot;, &quot;but&quot;) ein Komma gesetzt. NB: Ein Komma alleine als Hauptsatztrenner (comma splice) wird im Englischen meist vermieden und gilt als stilistisch fragwürdig.<br>\n<br>\n<i>You are quite right, and I shall send a new copy.</i><br>\n<br>\n<i>Some of you already knew, but now it is official.</i><br>\n<br>\nFalls der 2. Satz kein eigenes Subjekt besitzt, handelt es sich um nebengeordnete Prädikate, und ein Komma sollte nur benutzt werden, wo Missverständnisse auftreten könnten:<br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"3"
		],
		"%ok-main": [
			"%ok-main",
			"Hauptsatzkomma",
			"Hauptsätze müssen immer voneinander getrennt werden, entweder als selbständige Sätze, mit einer Konjunktion oder mit einem Satzzeichen. Dabei wird vor eine verbindende Konjunktion (&quot;and&quot;, &quot;or&quot;, &quot;but&quot;) ein Komma gesetzt. NB: Ein Komma alleine als Hauptsatztrenner (comma splice) wird im Englischen meist vermieden und gilt als stilistisch fragwürdig.<br>\n<br>\n<i>You are quite right, and I shall send a new copy.</i><br>\n<br>\n<i>Some of you already knew, but now it is official.</i><br>\n<br>\nFalls der 2. Satz kein eigenes Subjekt besitzt, handelt es sich um nebengeordnete Prädikate, und ein Komma sollte nur benutzt werden, wo Missverständnisse auftreten könnten:<br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"3"
		],
		"%nok-main": [
			"%nok-main",
			"Falsches Hauptsatzkomma (kein Komma zwischen Prädikaten mit gemeinsamem Subjekt)",
			"Zwei nebengeordnete Prädikate werden nie mit einem Komma getrennt, auch nicht wenn es sich um Hauptsatzprädikate handelt. Ohne Subjekt ist ein Prädikat kein voller Satz, und ein Komma wird nur zwischen vollständigen (Haupt-)Sätzen benutzt.<br>\n<br>\n<i>Peter bought a Guiness[,] and settled down in a corner.</i><br>\n<br>\n<i>I meant to buy tickets(,) but ran out of time.</i><br>\n<br>\nJedoch wird im zweiten Beispiel, mit &quot;but&quot;, manchmal ein Komma gesetzt - allerdings nicht wegen der Nebenordnung, sondern als wahlfreies Gegensatzkomma.",
			"3"
		],
		"%k-OV": [
			"%k-OV",
			"Komma nach (vorangestelltem) Objektsatz",
			"Ein vorangestellter Objektsatz wird vom nachfolgenden Hauptsatz durch ein Komma getrennt.<br>\n<br>\n<i>Just how deep the recession would be, no one could have imagined.</i>",
			"19"
		],
		"%ok-OV": [
			"%ok-OV",
			"Komma nach (vorangestelltem) Objektsatz",
			"Ein vorangestellter Objektsatz wird vom nachfolgenden Hauptsatz durch ein Komma getrennt.<br>\n<br>\n<i>Just how deep the recession would be, no one could have imagined.</i>",
			"19"
		],
		"%k-oxford": [
			"%k-oxford",
			"Oxford-Komma",
			"Vor den Konjunktionen &quot;and&quot; und &quot;or&quot; kann am Ender einer Aufzählung ein sogenanntes Oxford-komma stehen. Dies ist im Amerikanischen der Normalfall, nicht aber im britischen Englisch. Obwohl das Oxford-komma fakultativ ist, sollte es konsequent eingesetzt werden - also entweder überall im Text oder gar nicht.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nAuch in britischem Englisch kann ein Oxford-Komma Sinn machen, wenn es hilft, Mehrdeutigkeiten aufzulösen.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%ko-oxford": [
			"%ko-oxford",
			"Oxford-Komma",
			"Vor den Konjunktionen &quot;and&quot; und &quot;or&quot; kann am Ender einer Aufzählung ein sogenanntes Oxford-komma stehen. Dies ist im Amerikanischen der Normalfall, nicht aber im britischen Englisch. Obwohl das Oxford-komma fakultativ ist, sollte es konsequent eingesetzt werden - also entweder überall im Text oder gar nicht.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nAuch in britischem Englisch kann ein Oxford-Komma Sinn machen, wenn es hilft, Mehrdeutigkeiten aufzulösen.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%ok-oxford": [
			"%ok-oxford",
			"Oxford-Komma",
			"Vor den Konjunktionen &quot;and&quot; und &quot;or&quot; kann am Ender einer Aufzählung ein sogenanntes Oxford-komma stehen. Dies ist im Amerikanischen der Normalfall, nicht aber im britischen Englisch. Obwohl das Oxford-komma fakultativ ist, sollte es konsequent eingesetzt werden - also entweder überall im Text oder gar nicht.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nAuch in britischem Englisch kann ein Oxford-Komma Sinn machen, wenn es hilft, Mehrdeutigkeiten aufzulösen.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%nok-oxford": [
			"%nok-oxford",
			"Falsches Oxford-Komma",
			"In einer Nebenordnung von nur zwei Elementen macht ein Oxford-Komma keinen Sinn.<br>\n<br>\n<i>The</i><i> tickets were cheap, but they decided otherwise[,] and stayed at home for a candle-light dinner.</i>",
			"1.2"
		],
		"%nko-oxford": [
			"%nko-oxford",
			"Optionelt Oxford-komma",
			"Dies ist ein Oxford-Komma. Es steht richtig, ist aber fakultativ. Das Oxford-Komma sollte im ganzen Text einheitlich verwendet werden, also entweder überall oder nur um Missverständnisse zu vermeiden.",
			""
		],
		"%k-paren": [
			"%k-paren",
			"Einschubs- oder Nachsatz-Komma, Anfang",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei um Wörter, Wortgruppen oder Nebensätze handeln. Typische Ausdrücke sind z.B. &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot; und &quot;nevertheless&quot;, oder Kommentare wie &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nAuch bei grammatisch ungebundenen Nachsätze, z.B. Ausdrücken wie &quot;as well as&quot; oder &quot;so much so that&quot;, wird ein Komma (voran)gesetzt.",
			"8"
		],
		"%ko-paren": [
			"%ko-paren",
			"Einschubs- oder Nachsatz-Komma, Anfang",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei um Wörter, Wortgruppen oder Nebensätze handeln. Typische Ausdrücke sind z.B. &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot; und &quot;nevertheless&quot;, oder Kommentare wie &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nAuch bei grammatisch ungebundenen Nachsätze, z.B. Ausdrücken wie &quot;as well as&quot; oder &quot;so much so that&quot;, wird ein Komma (voran)gesetzt.",
			"8"
		],
		"%ok-paren": [
			"%ok-paren",
			"Einschubs- oder Nachsatz-Komma, Anfang",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei um Wörter, Wortgruppen oder Nebensätze handeln. Typische Ausdrücke sind z.B. &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot; und &quot;nevertheless&quot;, oder Kommentare wie &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nAuch bei grammatisch ungebundenen Nachsätze, z.B. Ausdrücken wie &quot;as well as&quot; oder &quot;so much so that&quot;, wird ein Komma (voran)gesetzt.",
			"8"
		],
		"%k-paren-end": [
			"%k-paren-end",
			"Einschubskomma, Ende",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei sowohl um Wörter, Wortgruppen und Nebensätze handeln. Typische Ausdrücke sind z.B. &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot; und &quot;nevertheless&quot;, oder Kommentare wie &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%ko-paren-end": [
			"%ko-paren-end",
			"Einschubskomma, Ende",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei sowohl um Wörter, Wortgruppen und Nebensätze handeln. Typische Ausdrücke sind z.B. &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot; und &quot;nevertheless&quot;, oder Kommentare wie &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%ok-paren-end": [
			"%ok-paren-end",
			"Einschubskomma, Ende",
			"Einschübe, die den Fluss des Satzes unterbrechen, sollten durch Kommata abgegrenzt werden. Es kann sich dabei sowohl um Wörter, Wortgruppen und Nebensätze handeln. Typische Ausdrücke sind z.B. &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot; und &quot;nevertheless&quot;, oder Kommentare wie &quot;I think&quot; eller &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%k-parenth": [
			"%k-parenth",
			"Komma bei Klammern",
			"Man kan kein Komma vor eine Klammer setzen. Wenn der Satz ohne Klammern ein Komma an der Stelle hätte, wo die Klammern waren, sollte dieses nach der rechten (abschließenden) Klammer eingefügt werden.<br>\n<br>\n<i>With eighteen races run, there are twelve to go[,] (40 % of the series).</i><br>\n<br>\n<i>It's second rate, in any case[,] (he added smiling) so the artistic loss to the world will be nil.</i><br>\n<br>\n<i>Das Komma sollte hier hinter die rechte Klammer verschoben werden:</i><br>\n<br>\n<i>It's second rate, in any case (he added smiling), so the artistic loss to the world will be nil.</i>",
			"23"
		],
		"%nok-parenth": [
			"%nok-parenth",
			"Komma bei Klammern",
			"Man kan kein Komma vor eine Klammer setzen. Wenn der Satz ohne Klammern ein Komma an der Stelle hätte, wo die Klammern waren, sollte dieses nach der rechten (abschließenden) Klammer eingefügt werden.<br>\n<br>\n<i>With eighteen races run, there are twelve to go[,] (40 % of the series).</i><br>\n<br>\n<i>It's second rate, in any case[,] (he added smiling) so the artistic loss to the world will be nil.</i><br>\n<br>\n<i>Das Komma sollte hier hinter die rechte Klammer verschoben werden:</i><br>\n<br>\n<i>It's second rate, in any case (he added smiling), so the artistic loss to the world will be nil.</i>",
			"23"
		],
		"%k-quote-start": [
			"%k-quote-start",
			"Zitatkomma, Anfang",
			"Zitate in direkter Rede werden vom Rest des Satzes (&quot;he said&quot;, &quot;she suggested&quot;, etc.) durch Kommata getrennt.<br>\n<br>\n<i>She said, &quot;I don't mind.&quot;</i><br>\n<br>\n<i>&quot;The problem is,&quot; he said, &quot;that we don't know where to look.&quot;</i><br>\n<br>\nDas Zitatkomma ist wahlfrei nach Einwort-Zitaten:<br>\n<br>\n<i>He said &quot;Stop!&quot;</i>",
			"11"
		],
		"%k-quote-end": [
			"%k-quote-end",
			"Zitatkomma, Ende",
			"Wenn ein Zitat am Anfang des Satzes steht, wird danach ein (Schluss-)Komma eingefügt, außer wenn das Zitat selbst mit einem abschließenden Satzzeichen ('!', '?' oder ':') endet. Ein etwaiger Satzpunkt fällt weg. Im amerikanischen English (AE) steht das Komma normalerweise innerhalb der Anführungszeichen, im britischen Englisch (BE) außerhalb.<br>\n<br>\n<i>&quot;I don't mind,&quot; she said. (AE)</i><br>\n<br>\n<i>&quot;I don't mind&quot;, she said (BE)</i><br>\n<br>\nDas abschließende Zitatkomma ist obligatorisch, auch nach Einwort-Zitaten.<br>\n<br>\n<i>&quot;Please</i><i>,</i><i>&quot; he said.</i><i> (AE)</i><br>\n<br>\n<i>&quot;Please&quot;, he said (BE)</i>",
			"11"
		],
		"%nok-quote": [
			"%nok-quote",
			"Kein Zitat-Startkomma ohne Anführungszeichen",
			"Wenn ein Zitat dem zitierenden Satz ohne Anführungszeichen folgt, wird es wie ein normaler Objektsatz behandelt und erhält deshalb kein Komma.<br>\n<br>\n<i>She said[,] I don't mind.</i>",
			"11"
		],
		"%nok-quote-end": [
			"%nok-quote-end",
			"Kein Zitat-Schlusskomma nach Satzendezeichen",
			"Es bedarf keines Kommas nach einem Zitat, das mit einem Satzendezeichen abschließt ('!', '?', ':'). NB: Ein Satzpunkt wird vom Zitatkomma sozusagen ersetzt.<br>\n<br>\n<i>&quot;Get out![,]&quot; she screamed.</i><br>\n<br>\n<i>&quot;Get out!&quot;[,] she screamed.</i>",
			"11"
		],
		"%k-rel": [
			"%k-rel",
			"Nicht-restriktiver (parenthetischeer) Relativsatz, Anfang",
			"Englische Relativsätze werden (nur dann) mit Kommata abgegrenzt, wenn sie parenthetisch (nicht-restriktiv) sind, d.h. wenn sie lediglich Einschübe mit für den Satz nicht-notwendiger Information darstellen. Wenn das Bezugswort ein Proprium (Eigenname) ist, ist dies per Definition der Fall, und es wird ein Komma gesetzt. Im amerikanischen Englisch wird &quot;which&quot; fast nur in Relativsätzen dieser Art verwendet, und hat deshalb immer ein Komma.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i><br>\n<br>\n<i>They went to the city's harbour, where a dolphin had made its appearance the day before.</i><br>\n<br>\nManchmal bezieht sich ein <i>which-</i>Relativsatz nicht auf ein Wort (Nomen), sondern auf eine vorhergehende Aussage in ihrer Gänze (sogenannte weiterführende Relativsätze). Auch in diesem Fall sollte ein Komma verwendet werden.<br>\n<br>\n<i>The sun and the moon have the same apparent sizes in the sky, which is surprising, given the huge differences in distance and factual size.</i>",
			"7"
		],
		"%ok-rel": [
			"%ok-rel",
			"Nicht-restriktiver (parenthetischeer) Relativsatz, Anfang",
			"Englische Relativsätze werden (nur dann) mit Kommata abgegrenzt, wenn sie parenthetisch (nicht-restriktiv) sind, d.h. wenn sie lediglich Einschübe mit für den Satz nicht-notwendiger Information darstellen. Wenn das Bezugswort ein Proprium (Eigenname) ist, ist dies per Definition der Fall, und es wird ein Komma gesetzt. Im amerikanischen Englisch wird &quot;which&quot; fast nur in Relativsätzen dieser Art verwendet, und hat deshalb immer ein Komma.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i><br>\n<br>\n<i>They went to the city's harbour, where a dolphin had made its appearance the day before.</i><br>\n<br>\nManchmal bezieht sich ein <i>which-</i>Relativsatz nicht auf ein Wort (Nomen), sondern auf eine vorhergehende Aussage in ihrer Gänze (sogenannte weiterführende Relativsätze). Auch in diesem Fall sollte ein Komma verwendet werden.<br>\n<br>\n<i>The sun and the moon have the same apparent sizes in the sky, which is surprising, given the huge differences in distance and factual size.</i>",
			"7"
		],
		"%k-rel-end": [
			"%k-rel-end",
			"Nicht-restriktiver (parenthetischer) Relativsatz, Ende",
			"Nicht-restriktive Relativsätze (und im Englischen nur diese!) haben Kommata sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i>",
			"7"
		],
		"%ok-rel-end": [
			"%ok-rel-end",
			"Nicht-restriktiver (parenthetischer) Relativsatz, Ende",
			"Nicht-restriktive Relativsätze (und im Englischen nur diese!) haben Kommata sowohl am Anfang als auch am Ende.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i>",
			"7"
		],
		"%nok-rel": [
			"%nok-rel",
			"Kein (Anfangs-)Komma bei restriktiven Relativsätzen",
			"Englische Relativsätze bekommen kein Komma, wenn sie restriktiv sind, d.h. notwendige Information enthalten und nicht weglassen oder in Klammern gesetzt werden können, ohne den Sinn des Satzes grundlegend zu verändern. Das Relativpronomen &quot;that&quot; wird fast ausschließlich in dieser Art von Relativsatz verwendet und führt nie ein Komma mit sich.<br>\n<br>\n<i>The 12 stars[,] that adorn the EU flag[,] do not represent a country count.</i><br>\n<br>\nDas gleiche gilt für Relativsätze, die überhaupt kein einleitendes Relativpronomen enthalten.<br>\n<br>\n<i>The car[,] he had bought[,] was old.</i><br>\n<br>\nIm amerikanischen Englisch gilt umgekehrt, dass &quot;which&quot; fast nur in parenthetischen (nicht-restriktiven) Relativsätzen vorkommt und deshalb immer ein Komma mit sich führt.",
			"7"
		],
		"%nok-rel-end": [
			"%nok-rel-end",
			"Kein (Schluss-)Komma bei restriktiven Relativsätzen",
			"Englische Relativsätze bekommen kein Komma, weder am Anfang noch am Ende, wenn sie restriktiv sind, d.h. wenn man sie nicht weglassen oder in Klammern setzen kann, ohne den Sinn des Satzes grundlegend zu verändern.<br>\n<br>\n<i>The car[,] he had bought[,] was old.</i>",
			"7"
		],
		"%ko-rel": [
			"%ko-rel",
			"Relativsatz, möglicherweise nicht-restriktiv (parenthetisch) und deshalb mit Komma",
			"Es ist unklar, ob dieser Relativsatz restriktiv ist oder nicht (d.h. parenthetisch). Ist die Information entbehrlich? Könnte man Klammern setzten? Falls ja, sollte kommatiert werden.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%ko-rel-end": [
			"%ko-rel-end",
			"Relativsatz, möglicherweise nicht-restriktiv (parenthetisch) und deshalb mit Komma",
			"Es ist unklar, ob dieser Relativsatz restriktiv ist oder nicht (d.h. parenthetisch). Ist die Information entbehrlich? Könnte man Klammern setzten? Falls ja, sollte kommatiert werden.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nko-rel": [
			"%nko-rel",
			"Relativsatz, möglicherweise restriktiv und deshalb ohne Komma",
			"Es ist unklar, ob dieser Relativsatz restriktiv ist oder nicht (d.h. parenthetisch). Ist die Information entbehrlich? Könnte man Klammern setzten? Falls nicht, sollte kein Komma verwendet werden.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nko-rel-end": [
			"%nko-rel-end",
			"Relativsatz, möglicherweise restriktiv und deshalb ohne Komma",
			"Es ist unklar, ob dieser Relativsatz restriktiv ist oder nicht (d.h. parenthetisch). Ist die Information entbehrlich? Könnte man Klammern setzten? Falls nicht, sollte kein Komma verwendet werden.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nok-soft": [
			"%nok-soft",
			"Möglicherweise überflüssiges Komma",
			"Es konnte keine Regel für ein Komma an dieser Stelle gefunden werden. Es kann aber durchaus sein, dass es trotzdem gute Gründe für ein Komma gibt, z.B. als Pausenkomma, zur Aufgliederung von sehr langen Sätzen oder um Missverständnisse zu vermeiden. Falls nicht, sollte das Komma entfernt werden. Unnötige Kommata werden im Englischen stilistisch eher negativ bewertet.",
			"21"
		],
		"%k-stop": [
			"%k-stop",
			"Satzgrenze",
			"An dieser Stelle vermutet das Programm einen Bruch im Satzfluss. Es scheinen zwei separate Aussagen vorzuliegen, und es wäre möglicherweise besser, hier einen neuen Satz zu beginnen. Ein Punkt oder Semikolon wären einem Komma dabei vorzuziehen. Zwei Hauptsätze mit lediglich einem Komma (ohne Konjunktion) zu verbinden, wird auf English als &quot;comma splice&quot; kritisiert und normalerweise vermieden.<br>\n<br>\n<i>Claire felt hungry,? she went to the fridge and made herself a sandwich.</i><br>\n<br>\n<i>--&gt; Claire felt hungry. She went to the fridge and made herself a sandwich.</i><br>\n<br>\nAlternativ kann man eine Kombination von Komma und Konjunktion verwenden:<br>\n<br>\n<i>--&gt; Claire felt hungry, so she went to the fridge and made herself a sandwich.</i>",
			"16"
		],
		"%nok-SV": [
			"%nok-SV",
			"Kein Komma zwischen Subjekt und Verb",
			"Subjekt und Verb werden nie durch ein (!) Komma getrennt. Dies ist eine syntaktische Regel und &quot;gewinnt&quot; als solche über die Pausenkommaregel. Deshalb darf hier kein Komma stehen, selbst wenn Sprecher/Leser and dieser Stelle eine Pause machen würden.<br>\n<br>\n<i>My friend Peter[,] is a formidable Tennis player.</i><br>\n<br>\n<i>The most important attribute of a ball player[,] is quick reflex actions.</i><br>\n<br>\nEin Einschub mit Kommapaar (also zwei (!) Kommas) ist allerdings auch zwischen Subjekt und Verb erlaubt, z.B. ein parenthetischer (nicht-restriktiver) Relativsatz mit dem Subjekt als Bezugswort.<br>\n<br>\n<i>The cake, which had been garnished elaborately with blueberries and cream, did not even last to see the coffee.</i><br>\n<br>\n<i>We, just like other companies, will contact your former employer.</i><br>\n<br>\nKomplexe Subjekte mit Nebenordnung, definierenden Appositionen oder restriktiven Relativsätzen erfordern dagegen gar kein Komma und liegen sozusagen als Ganzes vor der Subjekt-Verb-Grenze.<br>\n<br>\n<i>Your family and the people that like you most[,] are not necesssarily the most likely to tell you the truth.</i>",
			"17"
		],
		"%ko-too": [
			"%ko-too",
			"&quot;too&quot;-Komma",
			"Das Wort &quot;too&quot; wird durch ein fakultatives Komma abgesetzt, wenn es &quot;auch&quot; bedeutet. In der Satzmitte stehen Kommata auf beiden Seiten.<br>\n<br>\n<i>Claire, too, wanted a piece of the action.</i><br>\n<br>\n<i>Can I have a copy, too?</i>",
			"24"
		],
		"%ko-too-end": [
			"%ko-too-end",
			"&quot;too&quot;-Komma",
			"Das Wort &quot;too&quot; wird durch ein fakultatives Komma abgesetzt, wenn es &quot;auch&quot; bedeutet. In der Satzmitte stehen Kommata auf beiden Seiten.<br>\n<br>\n<i>Claire, too, wanted a piece of the action.</i><br>\n<br>\n<i>Can I have a copy, too?</i>",
			"24"
		],
		"%nok-VO": [
			"%nok-VO",
			"Kein Komma zwischen Verb und Objekt",
			"Ein Verb darf nicht von seinem nachfolgenden Objekt durch ein Komma getrennt werden. Dies gilt auch, wenn das Objekt ein Nebensatz ist.<br>\n<br>\n<i>I need</i><i>[,] a hot bath and mulled wine.</i><br>\n<br>\n<i>We all like to think[,] that we are better drivers than the average person.</i><br>\n<br>\n<i>I think[,] she likes chocolate.</i><br>\n<br>\n<i>You can bring along[,] whoever you like.</i>",
			"18"
		],
		"%k-voc": [
			"%k-voc",
			"Anredekomma (Vokativ), links",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%ko-voc": [
			"%ko-voc",
			"Anredekomma (Vokativ), links",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%ok-voc": [
			"%ok-voc",
			"Anredekomma (Vokativ), links",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%k-voc-end": [
			"%k-voc-end",
			"Anredekomma (Vokativ), rechts",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Madam President, let me ask a budget question.</i>",
			"9"
		],
		"%ok-voc-end": [
			"%ok-voc-end",
			"Anredekomma (Vokativ), rechts",
			"In Anredesätzen wird der Name, Titel o.ä. der angesprochenen Person durch Kommata abgetrennt.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Madam President, let me ask a budget question.</i>",
			"9"
		],
		"%k-year": [
			"%k-year",
			"Datumkomma (Jahr), links",
			"In Datum-Ausdrücken werden Tag und Jahr durch ein Komma getrennt. Außerdem erhält das Jahr ein Schluss-Komma, wenn der Satz danach weitergeht.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i><br>\n<br>\nWird ein Datumformat verwendet, wo der Tag <i>vor</i> dem Monat steht, ist kein Jahreszahl-Komma erforderlich:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%ok-year": [
			"%ok-year",
			"Datumkomma (Jahr), links",
			"In Datum-Ausdrücken werden Tag und Jahr durch ein Komma getrennt. Außerdem erhält das Jahr ein Schluss-Komma, wenn der Satz danach weitergeht.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i><br>\n<br>\nWird ein Datumformat verwendet, wo der Tag <i>vor</i> dem Monat steht, ist kein Jahreszahl-Komma erforderlich:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%k-year-end": [
			"%k-year-end",
			"Datumkomma (Jahr), rechts",
			"In Datumausdrücken im Monat-Tag-Jahr-Format folgt der Jahreszahl ein Schluss-Komma, als Teil eines Kommapaares mit dem ersten Komma vor der Jahreszahl.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i>",
			"10.2"
		],
		"%ok-year-end": [
			"%ok-year-end",
			"Datumkomma (Jahr), rechts",
			"In Datumausdrücken im Monat-Tag-Jahr-Format folgt der Jahreszahl ein Schluss-Komma, als Teil eines Kommapaares mit dem ersten Komma vor der Jahreszahl.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i>",
			"10.2"
		],
		"%nok-year": [
			"%nok-year",
			"Falsches Datumkomma (Jahr), links",
			"Stehen Monat und Jahr nebeneinander in Datum-Angaben, wird kein Komma verwendet, weder vor noch nach der Jahreszahl.<br>\n<br>\n<i>A local temperature record was recorded in July</i><i>[,]</i><i> 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i>",
			"10.2"
		],
		"%nok-year-end": [
			"%nok-year-end",
			"Falsches Datumkomma (Jahr), rechts",
			"Stehen Monat und Jahr nebeneinander in Datum-Angaben, wird kein Komma verwendet, weder vor noch nach der Jahreszahl.<br>\n<br>\n<i>3 October[,] 1989[,] was an important date in German history.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%number-format": [
			"%number-format",
			"Zahlenkomma",
			"In englischen Zahlenausdrücken werden Punkt und Komma umgekehrt wie im Deutschen verwendet, d.h. Dezimalstellen werden mit einem Punkt abgesezt, und Tausender, Millionen usw. mit einem Komma.<br>\n<br>\n<i>123,000,609</i><br>\n<br>\n<i>0.74</i><br>\n<br>\n<i>13.19237</i>",
			"22.1"
		],
		"%no-number-format": [
			"%no-number-format",
			"Kein Zahlenkomma in Adressen",
			"Hausnummern in Adressen werden nicht mit Zahlenkomma formatiert.<br>\n<br>\n<i>1024, Heathrow Rd.</i>",
			"22.2"
		]
	},
	eng: {
		"%k-appo": [
			"%k-appo",
			"Apposition comma",
			"An apposition is a construction with two parallel noun prases where the second (called appositive) provides additional information about the first. Non-restrictive appositives are surrounded by commas.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nNo comma is used if the second noun phrase conveys essential information. Thus, &quot;My sister, Anne&quot; implies that I have only one sister, while &quot;My sister Anne&quot; would be correct if there are two or more sisters.<br>\n<br>\nA special case are title appositions. Here, a person's title or profession, often in abbreviated form, is set off with commas. For &quot;Jr.&quot; and &quot;Sr.&quot; the comma is optional. It is not possible to use an opening title comma without a matching closing comma (or fullstop).<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager.</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nSimilarly, apposition commas are used in the American English construction Town+State/Country:<br>\n<br>\n<i>He was born in Memphis, Tennessee.</i><br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i>",
			"6"
		],
		"%ok-appo": [
			"%ok-appo",
			"Apposition comma",
			"An apposition is a construction with two parallel noun prases where the second (called appositive) provides additional information about the first. Non-restrictive appositives are surrounded by commas.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\nNo comma is used if the second noun phrase conveys essential information. Thus, &quot;My sister, Anne&quot; implies that I have only one sister, while &quot;My sister Anne&quot; would be correct if there are two or more sisters.<br>\n<br>\nA special case are title appositions. Here, a person's title or profession, often in abbreviated form, is set off with commas. For &quot;Jr.&quot; and &quot;Sr.&quot; the comma is optional. It is not possible to use an opening title comma without a matching closing comma (or fullstop).<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager.</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nSimilarly, apposition commas are used in the American English construction Town+State/Country:<br>\n<br>\n<i>He was born in Memphis, Tennessee.</i><br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i>",
			"6"
		],
		"%k-appo-end": [
			"%k-appo-end",
			"Apposition closing comma",
			"A comma is needed at the end of an apposition, matching the opening comma before the appositive.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\n<i></i><br>\n<br>\nA special case are title appositions. Here, a person's title or profession, often in abbreviated form, is set off with commas. For &quot;Jr.&quot; and &quot;Sr.&quot; the comma is optional. It is not possible to use an opening title comma without a matching closing comma (or fullstop).<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nSimilarly, apposition commas are used in the American English construction Town+State/Country. Here, too, closing commas must match opening commas.<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%ko-appo-end": [
			"%ko-appo-end",
			"Apposition closing comma",
			"A comma is needed at the end of an apposition, matching the opening comma before the appositive.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\n<i></i><br>\n<br>\nA special case are title appositions. Here, a person's title or profession, often in abbreviated form, is set off with commas. For &quot;Jr.&quot; and &quot;Sr.&quot; the comma is optional. It is not possible to use an opening title comma without a matching closing comma (or fullstop).<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nSimilarly, apposition commas are used in the American English construction Town+State/Country. Here, too, closing commas must match opening commas.<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%ok-appo-end": [
			"%ok-appo-end",
			"Apposition closing comma",
			"A comma is needed at the end of an apposition, matching the opening comma before the appositive.<br>\n<br>\n<i>My best friend, Peter, will visit later this week.</i><br>\n<br>\n<i>Greece, a country with lots of sun and sea, attracts many tourists each summer.</i><br>\n<br>\n<i>The painter, one of the city’s most promising young artists, began showing his work in galleries before he was sixteen.</i><br>\n<br>\n<i></i><br>\n<br>\nA special case are title appositions. Here, a person's title or profession, often in abbreviated form, is set off with commas. For &quot;Jr.&quot; and &quot;Sr.&quot; the comma is optional. It is not possible to use an opening title comma without a matching closing comma (or fullstop).<br>\n<br>\n<i>Theodor S. Monroe, MD, chaired the session.</i><br>\n<br>\n<i>Jonathan Johnson, sales manager, and his wife</i><br>\n<br>\n<i>Martin Luther King(,) Jr.(,) quotes are famous.</i><br>\n<br>\nSimilarly, apposition commas are used in the American English construction Town+State/Country. Here, too, closing commas must match opening commas.<br>\n<br>\n<i>A list of Memphis, TN, Zip codes</i><br>\n<br>\n<i>Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935.</i>",
			"6"
		],
		"%nok-appo": [
			"%nok-appo",
			"Spurious apposition comma (opening)",
			"In this apposition, the appositive appears to be restrictive, conveying essential information. Therefore, no comma should be used.<br>\n<br>\n<i>Tokyo is a fictional character in the Netflix series[,] Money Heist.</i>",
			"6"
		],
		"%nok-appo-end": [
			"%nok-appo-end",
			"Spurious apposition comma (closing)",
			"In this apposition, the appositive appears to be restrictive, conveying essential information. Therefore, no commas should be used.<br>\n<br>\n<i>The Netflix series[,] Money Heist[,] has wone many awards.</i>",
			"6"
		],
		"%nok-comp": [
			"%nok-comp",
			"Spurious comparison comma",
			"There should not be a comma before a comparative &quot;than&quot; or &quot;as&quot;.<br>\n<br>\n<i>He is taller[,] than his brother.</i><br>\n<br>\n<i>He is as tall[,] as his brother.</i>",
			"15"
		],
		"%k-contrast": [
			"%k-contrast",
			"Contrastive comma",
			"This type of comma separates contrasting parts of a sentence.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nA contrastive comma before 'but' is optional, unless the word joins two independent clauses (in which case the comma is obligatory).",
			"14"
		],
		"%ko-contrast": [
			"%ko-contrast",
			"Contrastive comma",
			"This type of comma separates contrasting parts of a sentence.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nA contrastive comma before 'but' is optional, unless the word joins two independent clauses (in which case the comma is obligatory).",
			"14"
		],
		"%ok-contrast": [
			"%ok-contrast",
			"Contrastive comma",
			"This type of comma separates contrasting parts of a sentence.<br>\n<br>\n<i>It's excellence we're looking for, not an ideological position.</i><br>\n<br>\n<i>The players were nervous, yet optimistic.</i><br>\n<br>\nA contrastive comma before 'but' is optional, unless the word joins two independent clauses (in which case the comma is obligatory).",
			"14"
		],
		"%k-contrast-end": [
			"%k-contrast-end",
			"Contrastive closing comma",
			"A closing comma is needed at the end of an embedded contrasting insertion.<br>\n<br>\n<i>That is my money, not yours, that disappeared</i>",
			"14"
		],
		"%ok-contrast-end": [
			"%ok-contrast-end",
			"Contrastive closing comma",
			"A closing comma is needed at the end of an embedded contrasting insertion.<br>\n<br>\n<i>That is my money, not yours, that disappeared</i>",
			"14"
		],
		"%nok-coord": [
			"%nok-coord",
			"Spurious coordination comma",
			"In a two-part coordination, no comma is usually needed, as long as the coordination is straightforward and clear. This holds for both nouns, verbs and prepositional phrases.<br>\n<br>\n<i>Peter invited his family[,] and friends for a garden party.</i><br>\n<br>\n<i>SpaceX has launched another rocket[,] and retrieved it without incident.</i><br>\n<br>\n<i>They were inseparable in life[,] and in death.</i><br>\n<br>\n&quot;Either...or&quot; and &quot;neither...nor&quot; are no exception to the rule, and no comma is necessary.<br>\n<br>\n<i>Neither his son[,] nor his daughter shared his passion for diving.</i><br>\n<br>\nHowever, coordinated mainclauses (independent clauses), with separate subjects, do get a separating comma.<br>\n<br>\n<i>Peter did the dishes, and Anne fed the cats.</i><br>\n<br>\nThe same comma is optional for coordinated subclauses:<br>\n<br>\n<i>I realize more than ever what a special friend you are(,) and how much I have missed our conversations.</i><br>\n<br>\nContrary to standard practice, a comma should be used in predicate coordination if it helps to avoid ambiguity.<br>\n<br>\n<i>He spotted another team mate who entered the bar, and waved.</i><br>\n<br>\n<i>She saw that the child was hungry, and peeled a banana.</i>",
			"20"
		],
		"%nko-coord": [
			"%nko-coord",
			"Optional coordination comma",
			"In a two-part coordination of words or groups, no comma is used. Coordinated mainclauses, however, do get a comma. For coordinated subclauses, the comma is optional:<br>\n<br>\n<i>I realize more than ever what a special friend you are(,) and how much I have missed our conversations.</i>",
			""
		],
		"%k-day": [
			"%k-day",
			"Date comma (opening)",
			"Day-of-the-month expressions are set off by commas. Thus, an opening comma is used between a weekday term and the date. A closing comma separates the day of the month from further information, such as time or place.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%ok-day": [
			"%ok-day",
			"Date comma (opening)",
			"Day-of-the-month expressions are set off by commas. Thus, an opening comma is used between a weekday term and the date. A closing comma separates the day of the month from further information, such as time or place.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%k-day-end": [
			"%k-day-end",
			"Date comma (closing)",
			"Day-of-the-month expressions are set off by commas. Thus, an opening comma is used between a weekday term and the date. A closing comma separates the day of the month from further information, such as time or place.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%ok-day-end": [
			"%ok-day-end",
			"Date comma (closing)",
			"Day-of-the-month expressions are set off by commas. Thus, an opening comma is used between a weekday term and the date. A closing comma separates the day of the month from further information, such as time or place.<br>\n<br>\n<i>There will be a reception on Sunday, April 20, at five o'clock.</i>",
			"10.1"
		],
		"%k-explain": [
			"%k-explain",
			"Explanation comma (opening)",
			"Examples and specifics require an opening comma before the triggering word ('e.g.', 'such as', 'i.e.', 'for instance'). In the US, an optional comma is sometimes used after the triggering word, too.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%ok-explain": [
			"%ok-explain",
			"Explanation comma (opening)",
			"Examples and specifics require an opening comma before the triggering word ('e.g.', 'such as', 'i.e.', 'for instance'). In the US, an optional comma is sometimes used after the triggering word, too.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%ko-explain-internal": [
			"%ko-explain-internal",
			"Explanation comma (internal)",
			"In the US, an optional comma is sometimes used after the triggering word ('e.g.', 'such as', 'i.e.', 'for instance') of an explanation list, in addition to the opening comma before it.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%nko-explain-internal": [
			"%nko-explain-internal",
			"Explanation comma (internal)",
			"In the US, an optional comma is sometimes used after the triggering word ('e.g.', 'such as', 'i.e.', 'for instance') of an explanation list, in addition to the opening comma before it.<br>\n<br>\n<i>The shop sells mostly hiking gear, e.g. (,) boots, tents, sleeping bags and outdoor cooking utensils.</i>",
			"13"
		],
		"%k-explain-end": [
			"%k-explain-end",
			"Explanation comma (closing)",
			"If examples are embedded inside a clause, a closing comma is necessary in addition to the opening comma.<br>\n<br>\n<i>Coniferous trees, such as pine and spruce, do not drop their needles in the winter</i>",
			"13"
		],
		"%k-extra": [
			"%k-extra",
			"Extras comma (tag comma)",
			"<i>A comma is used to separate small add-on utterances and other extra material at the end of a sentence, such as tag questions.</i><br>\n<br>\n<i>The roses are beautiful, aren't they?</i><br>\n<br>\n<i>She lives in Paris, doesn't she?</i><br>\n<br>\n<i>We haven't met, have we?</i><br>\n<br>\n<i>Are you stupid, or what?</i><br>\n<br>\n<i>I just know, ok?</i><br>\n<br>\n<i>The party will be on the beach, where else?</i><br>\n<br>\n<i>He had disappointed both his math and history teachers, not that either mattered.</i>",
			"12"
		],
		"%ok-extra": [
			"%ok-extra",
			"Extras comma (tag comma)",
			"<i>A comma is used to separate small add-on utterances and other extra material at the end of a sentence, such as tag questions.</i><br>\n<br>\n<i>The roses are beautiful, aren't they?</i><br>\n<br>\n<i>She lives in Paris, doesn't she?</i><br>\n<br>\n<i>We haven't met, have we?</i><br>\n<br>\n<i>Are you stupid, or what?</i><br>\n<br>\n<i>I just know, ok?</i><br>\n<br>\n<i>The party will be on the beach, where else?</i><br>\n<br>\n<i>He had disappointed both his math and history teachers, not that either mattered.</i>",
			"12"
		],
		"%k-FSend": [
			"%k-FSend",
			"Subclause closing comma",
			"When an adverbial dependent clause (subclause) is used in the beginning of a sentence, a closing comma is used after it. However, no comma is used before a subclause at the end of the sentence. In the middle of a sentence, parenthetical subclauses have both an opening comma and a closing comma.<br>\n<br>\n<i>If you can make it, please reply to this message!</i><br>\n<br>\n<i>Although, as you will have seen, the dreaded millenium bug did not materialise, expensive preparations were made.</i>",
			"5.1"
		],
		"%ok-FSend": [
			"%ok-FSend",
			"Subclause closing comma",
			"When an adverbial dependent clause (subclause) is used in the beginning of a sentence, a closing comma is used after it. However, no comma is used before a subclause at the end of the sentence. In the middle of a sentence, parenthetical subclauses have both an opening comma and a closing comma.<br>\n<br>\n<i>If you can make it, please reply to this message!</i><br>\n<br>\n<i>Although, as you will have seen, the dreaded millenium bug did not materialise, expensive preparations were made.</i>",
			"5.1"
		],
		"%nok-FSend": [
			"%nok-FSend",
			"Spurious subclause closing comma",
			"Non-parenthetical embedded subclauses do not need a closing comma. Such clauses are typically grammatically bound (e.g. &quot;the belief that&quot;) or essential relative clauses, i.e. clauses that cannot be removed without changing the core meaning of the sentence.<br>\n<br>\n<i>His belief that news should be read on paper[,] is not shared by younger people.</i>",
			"5.1"
		],
		"%k-FSstart": [
			"%k-FSstart",
			"Subclause starting comma before certain conjunctions (&quot;because&quot;, &quot;although&quot;)",
			"As a default, there is no opening comma for dependent clauses (subclauses) in English. An exception are (1) causal, (2) concessive and (3) adversative subclauses.<br>\n<br>\n(1) Causal subclauses are introduced by &quot;because&quot;, &quot;as&quot; or &quot;since&quot;:<br>\n<br>\n<i>You don't have to worry about the cold, because you will be wearing a wet suit.</i><br>\n<br>\n(2) Concessive subclauses beging with &quot;although&quot;, &quot;even if&quot; or &quot;as far as&quot;:<br>\n<br>\n<i>Many big mammals are now endangered species, although some may survive in zoos.</i><br>\n<br>\n(3) Adversative subclauses can be constructed with &quot;while&quot;:<br>\n<br>\n<i>Their factories closed, while those in Ontario prospered</i><br>\n<br>\nAn opening comma is also necessary for embedded (parenthetical) subclauses, e.g. after a conjunction opening another, higher-level clause (matrix clause). In this case, the opening comma is matched by a closing comma at the end of the subclause.<br>\n<br>\n<i>We hope that, once fighting has stopped, the country will recover quickly.</i>",
			"5.2"
		],
		"%ok-FSstart": [
			"%ok-FSstart",
			"Subclause starting comma before certain conjunctions (&quot;because&quot;, &quot;although&quot;)",
			"As a default, there is no opening comma for dependent clauses (subclauses) in English. An exception are (1) causal, (2) concessive and (3) adversative subclauses.<br>\n<br>\n(1) Causal subclauses are introduced by &quot;because&quot;, &quot;as&quot; or &quot;since&quot;:<br>\n<br>\n<i>You don't have to worry about the cold, because you will be wearing a wet suit.</i><br>\n<br>\n(2) Concessive subclauses beging with &quot;although&quot;, &quot;even if&quot; or &quot;as far as&quot;:<br>\n<br>\n<i>Many big mammals are now endangered species, although some may survive in zoos.</i><br>\n<br>\n(3) Adversative subclauses can be constructed with &quot;while&quot;:<br>\n<br>\n<i>Their factories closed, while those in Ontario prospered</i><br>\n<br>\nAn opening comma is also necessary for embedded (parenthetical) subclauses, e.g. after a conjunction opening another, higher-level clause (matrix clause). In this case, the opening comma is matched by a closing comma at the end of the subclause.<br>\n<br>\n<i>We hope that, once fighting has stopped, the country will recover quickly.</i>",
			"5.2"
		],
		"%k-FSstart-unsafe": [
			"%k-FSstart-unsafe",
			"Possible subclause comma",
			"If the conjunction here means &quot;because&quot;, there should be a comma. However, the program isn't sure, it could just be a temporal subclause. Your call!",
			"5.2"
		],
		"%nok-FSstart": [
			"%nok-FSstart",
			"Spurious subclause starting comma",
			"With certain exceptions, there is normally no opening comma for dependent clauses (subclauses) that appear after the mainclause.<br>\n<br>\n<i>I've made them today[,] while it was snowing</i><br>\n<br>\nThis is also true for non-parenthetical embedded clauses, especially relative clauses with essential information that can not be removed without changing the core meaning of the sentence.<br>\n<br>\n<i>The apples[,] he had bought[,] were all bruised.</i>",
			"5.2"
		],
		"%k-intro": [
			"%k-intro",
			"Introductory comma",
			"A comma is used between introductory material and the mainclause proper. This holds for both phrases and clauses.<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (participle clause)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (finite subclause)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available. (prepositional phrase with two prepositions)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (infinitive clause)</i><br>\n<br>\nIf the introductory phrase is clear and short (3-4 words) or a simple prepositional phrase with only one preposition, the comma is optional.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nSome individual words, mostly adverbs (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) and interjections, also warrant an introductory comma. After <i>then, so</i> and <i>yet,</i> the comma is optional.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nAs always, ambiguity or the risk of reader backtracking can warrant a comma, even where it would not have been used otherwise.<br>\n<br>\n<i>Before feeding, the lion roared. (Without a comma, one may first read &quot;the lion&quot; as an object of &quot;feeding&quot;, having to reconstruct the sentence when reaching the second, finite verb &quot;roared&quot;)</i>",
			"4"
		],
		"%ko-intro": [
			"%ko-intro",
			"Introductory comma",
			"A comma is used between introductory material and the mainclause proper. This holds for both phrases and clauses.<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (participle clause)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (finite subclause)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available. (prepositional phrase with two prepositions)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (infinitive clause)</i><br>\n<br>\nIf the introductory phrase is clear and short (3-4 words) or a simple prepositional phrase with only one preposition, the comma is optional.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nSome individual words, mostly adverbs (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) and interjections, also warrant an introductory comma. After <i>then, so</i> and <i>yet,</i> the comma is optional.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nAs always, ambiguity or the risk of reader backtracking can warrant a comma, even where it would not have been used otherwise.<br>\n<br>\n<i>Before feeding, the lion roared. (Without a comma, one may first read &quot;the lion&quot; as an object of &quot;feeding&quot;, having to reconstruct the sentence when reaching the second, finite verb &quot;roared&quot;)</i>",
			"4"
		],
		"%ok-intro": [
			"%ok-intro",
			"Introductory comma",
			"A comma is used between introductory material and the mainclause proper. This holds for both phrases and clauses.<br>\n<br>\n<i>Having finally finished shopping, we went to the beach. (participle clause)</i><br>\n<br>\n<i>Because symptoms for this type of disease take years to appear, new cases are still being filed. (finite subclause)</i><br>\n<br>\n<i>For this kind of disease, only experimental therapy is available. (prepositional phrase with two prepositions)</i><br>\n<br>\n<i>To file a formal complaint, please use the attached form. (infinitive clause)</i><br>\n<br>\nIf the introductory phrase is clear and short (3-4 words) or a simple prepositional phrase with only one preposition, the comma is optional.<br>\n<br>\n<i>In the meantime(,) I would like to show you a couple of pictures.</i><br>\n<br>\n<i>When in Rome(,) do as the Romans do.</i><br>\n<br>\n<i>If at all possible(,) government and parliament have to tread the same path.</i><br>\n<br>\n<i>Outside(,) seagulls played in the fresh autumn breeze.</i><br>\n<br>\nSome individual words, mostly adverbs (<i>however, in fact, therefore, nevertheless, moreover, furthermore, still, instead</i>) and interjections, also warrant an introductory comma. After <i>then, so</i> and <i>yet,</i> the comma is optional.<br>\n<br>\n<i>However, it's not a free lunch.</i><br>\n<br>\n<i>No, I have not seen your boy-friend.</i><br>\n<br>\nAs always, ambiguity or the risk of reader backtracking can warrant a comma, even where it would not have been used otherwise.<br>\n<br>\n<i>Before feeding, the lion roared. (Without a comma, one may first read &quot;the lion&quot; as an object of &quot;feeding&quot;, having to reconstruct the sentence when reaching the second, finite verb &quot;roared&quot;)</i>",
			"4"
		],
		"%k-list": [
			"%k-list",
			"Listing comma",
			"A listing comma separates items in a list of three or more words, phrases or clauses. The last item is usually marked with &quot;and&quot; or &quot;or&quot;, and has an optional comma (called Oxford comma).<br>\n<br>\n<i>Peter loves good food, good company(,) and a practical joke.</i><br>\n<br>\n<i>Eat, dance(,) and have fun!</i><br>\n<br>\nThe word &quot;etc.&quot; and some related expressions (&quot;and so on&quot;, &quot;and so forth&quot;) should be set of from the rest of the list by a serial comma, and can be followed by an optional closing comma in mid-sentence.<br>\n<br>\n<i>You will find plates, cups, glasses, etc.(,) in the cupboard.</i><br>\n<br>\nThe Latin expression &quot;et al.&quot; (meaning &quot;and others&quot;), when used with only one name, does not warrant a serial comma.<br>\n<br>\n<i>Martinson et al. (2015) showed that performance increased over time.</i>",
			"1.1"
		],
		"%ok-list": [
			"%ok-list",
			"Listing comma",
			"A listing comma separates items in a list of three or more words, phrases or clauses. The last item is usually marked with &quot;and&quot; or &quot;or&quot;, and has an optional comma (called Oxford comma).<br>\n<br>\n<i>Peter loves good food, good company(,) and a practical joke.</i><br>\n<br>\n<i>Eat, dance(,) and have fun!</i><br>\n<br>\nThe word &quot;etc.&quot; and some related expressions (&quot;and so on&quot;, &quot;and so forth&quot;) should be set of from the rest of the list by a serial comma, and can be followed by an optional closing comma in mid-sentence.<br>\n<br>\n<i>You will find plates, cups, glasses, etc.(,) in the cupboard.</i><br>\n<br>\nThe Latin expression &quot;et al.&quot; (meaning &quot;and others&quot;), when used with only one name, does not warrant a serial comma.<br>\n<br>\n<i>Martinson et al. (2015) showed that performance increased over time.</i>",
			"1.1"
		],
		"%k-list-ADJ": [
			"%k-list-ADJ",
			"Adjective comma",
			"Adjectives are separated by a comma if they are at the same level, i.e. if their order is interchangeable and they could be joined by &quot;and&quot;.<br>\n<br>\n<i>She is a tall, beautiful woman. (a tall and beautiful woman - a beautiful, tall woman)</i><br>\n<br>\n<i>He showed off an expensive[,] German car. (*a German expensive car)</i>",
			"2"
		],
		"%ok-list-ADJ": [
			"%ok-list-ADJ",
			"Adjective comma",
			"Adjectives are separated by a comma if they are at the same level, i.e. if their order is interchangeable and they could be joined by &quot;and&quot;.<br>\n<br>\n<i>She is a tall, beautiful woman. (a tall and beautiful woman - a beautiful, tall woman)</i><br>\n<br>\n<i>He showed off an expensive[,] German car. (*a German expensive car)</i>",
			"2"
		],
		"%nok-list-ADJ": [
			"%nok-list-ADJ",
			"Spurious adjective comma",
			"There should be no comma between adjectives that are not interchangeable and not coordinated (don't allow &quot;and&quot;).<br>\n<br>\n<i>He showed off an expensive[,] German car. (*a German expensive car)</i>",
			"2"
		],
		"%k-list-unsafe": [
			"%k-list-unsafe",
			"Unsafe listing comma",
			"This might be a list, with a need for a comma. However, it might also just be a compound noun. The program couldn't decide.",
			"1.1"
		],
		"%k-main": [
			"%k-main",
			"Main clause comma",
			"Two independent clauses (mainclauses) must always be separated from each other. If a coordinating conjunction is used (&quot;and&quot;, &quot;or&quot;, &quot;but&quot;), there should be a comma before it. Otherwise, use a fullstop. Unless there is ambiguity, using just a comma, without the conjunction, is considered bad style (comma splice).<br>\n<br>\n<i>You are quite right, and I shall send a new copy.</i><br>\n<br>\n<i>Some of you already knew, but now it is official.</i>",
			"3"
		],
		"%ok-main": [
			"%ok-main",
			"Main clause comma",
			"Two independent clauses (mainclauses) must always be separated from each other. If a coordinating conjunction is used (&quot;and&quot;, &quot;or&quot;, &quot;but&quot;), there should be a comma before it. Otherwise, use a fullstop. Unless there is ambiguity, using just a comma, without the conjunction, is considered bad style (comma splice).<br>\n<br>\n<i>You are quite right, and I shall send a new copy.</i><br>\n<br>\n<i>Some of you already knew, but now it is official.</i>",
			"3"
		],
		"%nok-main": [
			"%nok-main",
			"Spurious main clause comma",
			"No comma is needed when coordinating two predicates, not even in a main clause. Only use a comma if both parts are full (independent) clauses with their own subjects.<br>\n<br>\n<i>Peter bought a Guiness[,] and settled down in a corner.</i><br>\n<br>\n<i>I meant to buy tickets[,] but ran out of time.</i><br>\n<br>\nHowever, some people would use a comma in the second example, with &quot;but&quot; - not because of the coordination, but as an (optional) contrasting comma.",
			"3"
		],
		"%k-OV": [
			"%k-OV",
			"Object-initial comma",
			"Sentence-initial objects are set off by a comma.<br>\n<br>\n<i>Just how deep the recession would be, no one could have imagined.</i>",
			"19"
		],
		"%ok-OV": [
			"%ok-OV",
			"Object-initial comma",
			"Sentence-initial objects are set off by a comma.<br>\n<br>\n<i>Just how deep the recession would be, no one could have imagined.</i>",
			"19"
		],
		"%k-oxford": [
			"%k-oxford",
			"Oxford comma",
			"The &quot;and&quot; or &quot;or&quot; before the last item in a list can have an optional comma, called Oxford comma and common in American English. Usage should be consistent for the entire text.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nIf it can help to resolve ambiguity, the Oxford comma becomes mandatory.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%ko-oxford": [
			"%ko-oxford",
			"Oxford comma",
			"The &quot;and&quot; or &quot;or&quot; before the last item in a list can have an optional comma, called Oxford comma and common in American English. Usage should be consistent for the entire text.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nIf it can help to resolve ambiguity, the Oxford comma becomes mandatory.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%ok-oxford": [
			"%ok-oxford",
			"Oxford comma",
			"The &quot;and&quot; or &quot;or&quot; before the last item in a list can have an optional comma, called Oxford comma and common in American English. Usage should be consistent for the entire text.<br>\n<br>\n<i>The lake was dotted with swans, ducks(,) and seagulls.</i><br>\n<br>\nIf it can help to resolve ambiguity, the Oxford comma becomes mandatory.<br>\n<br>\n<i>They sold beer, fish and chips, and peanuts.</i>",
			"1.2"
		],
		"%nok-oxford": [
			"%nok-oxford",
			"Spurious Oxford comma",
			"An Oxford comma should not be used in a two-part coordination.<br>\n<br>\n<i>The tickets were cheap, but they decided otherwise[,] and stayed at home for a candle-light dinner.</i>",
			"1.2"
		],
		"%nko-oxford": [
			"%nko-oxford",
			"Optional Oxford comma",
			"This is an Oxford comma. It is quite ok, but optional. Keep it if you are using Oxford comma in the rest of your text. Remove it if you aren't.",
			"1.2"
		],
		"%k-paren": [
			"%k-paren",
			"Parenthetical opening comma",
			"Parenthetical material, i.e. non-essential words, (prepositional) phrases or clauses that interrupt the sentence flow, are set off by commas. Typical expressions include &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, but also parenthetical comments, such as &quot;I think&quot; or &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nThe parenthetical material may also take the form of an afterthought, triggering a comma before expressions such as &quot;as well as&quot; or &quot;so much so that&quot;.",
			"8"
		],
		"%ko-paren": [
			"%ko-paren",
			"Parenthetical opening comma",
			"Parenthetical material, i.e. non-essential words, (prepositional) phrases or clauses that interrupt the sentence flow, are set off by commas. Typical expressions include &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, but also parenthetical comments, such as &quot;I think&quot; or &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nThe parenthetical material may also take the form of an afterthought, triggering a comma before expressions such as &quot;as well as&quot; or &quot;so much so that&quot;.",
			"8"
		],
		"%ok-paren": [
			"%ok-paren",
			"Parenthetical opening comma",
			"Parenthetical material, i.e. non-essential words, (prepositional) phrases or clauses that interrupt the sentence flow, are set off by commas. Typical expressions include &quot;however&quot;, &quot;after all&quot;, &quot;on the other hand&quot;, &quot;nevertheless&quot;, but also parenthetical comments, such as &quot;I think&quot; or &quot;they say&quot;:<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i><br>\n<br>\nThe parenthetical material may also take the form of an afterthought, triggering a comma before expressions such as &quot;as well as&quot; or &quot;so much so that&quot;.",
			"8"
		],
		"%k-paren-end": [
			"%k-paren-end",
			"Parenthetical closing comma",
			"Parenthetical material, i.e. non-essential words, (prepositional) phrases or clauses that interrupt the sentence flow, are set off by both an opening and a closing comma.<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%ko-paren-end": [
			"%ko-paren-end",
			"Parenthetical closing comma",
			"Parenthetical material, i.e. non-essential words, (prepositional) phrases or clauses that interrupt the sentence flow, are set off by both an opening and a closing comma.<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%ok-paren-end": [
			"%ok-paren-end",
			"Parenthetical closing comma",
			"Parenthetical material, i.e. non-essential words, (prepositional) phrases or clauses that interrupt the sentence flow, are set off by both an opening and a closing comma.<br>\n<br>\n<i>I have, by the way, finished the painting.</i><br>\n<br>\n<i>Nobody, they say, has ever found the grave of Genghis Khan.</i><br>\n<br>\n<i>That is precisely the time when you may, if you wish, raise this question</i>",
			"8"
		],
		"%k-parenth": [
			"%k-parenth",
			"Parenthesis comma",
			"There should never be a comma before a parenthesis. If the sentence would have a comma without the part in parentheses, that comma is placed after the closing parenthesis.<br>\n<br>\n<i>With eighteen races run, there are twelve to go[,] (40 % of the series).</i><br>\n<br>\n<i>It's second rate, in any case[,] (he added smiling) so the artistic loss to the world will be nil.</i><br>\n<br>\nThe comma should here be moved after the closing parenthesis:<br>\n<br>\n<i>It's second rate, in any case (he added smiling), so the artistic loss to the world will be nil.</i>",
			"23"
		],
		"%nok-parenth": [
			"%nok-parenth",
			"Parenthesis comma",
			"There should never be a comma before a parenthesis. If the sentence would have a comma without the part in parentheses, that comma is placed after the closing parenthesis.<br>\n<br>\n<i>With eighteen races run, there are twelve to go[,] (40 % of the series).</i><br>\n<br>\n<i>It's second rate, in any case[,] (he added smiling) so the artistic loss to the world will be nil.</i><br>\n<br>\nThe comma should here be moved after the closing parenthesis:<br>\n<br>\n<i>It's second rate, in any case (he added smiling), so the artistic loss to the world will be nil.</i>",
			"23"
		],
		"%k-quote-start": [
			"%k-quote-start",
			"Quotation start comma",
			"Commas are used to set off direct quotations or to resume interrupted quotes. These quotation commas help to separate the quote from the attribute tag, i.e. the part of the sentence that identifies the speaker (&quot;he said&quot;, &quot;she suggested&quot;, etc.).<br>\n<br>\n<i>She said, &quot;I don't mind.&quot;</i><br>\n<br>\n<i>&quot;The problem is,&quot; he said, &quot;that we don't know where to look.&quot;</i><br>\n<br>\nThis opening comma is optional with 1-word quotes:<br>\n<br>\n<i>He said &quot;Stop!&quot;</i>",
			"11"
		],
		"%k-quote-end": [
			"%k-quote-end",
			"Quotation end comma",
			"If a quotation precedes the quoting clause, it should be separated by a comma, unless there is other closing punctuation ('!', '?', ':'). Before a quotation comma, no fullstop is used. The general rule for American English is to have the comma inside the quotation, while British English places the comma after the quotation mark.<br>\n<br>\n<i>&quot;I don't mind,&quot; she said. (AE)</i><br>\n<br>\n<i>&quot;I don't mind&quot;, she said (BE)</i><br>\n<br>\nThis closing comma is obligatory, even after a 1-word quote.<br>\n<br>\n<i>&quot;Please,&quot; he said. (AE)</i><br>\n<br>\n<i>&quot;Please&quot;, he said (BE)</i>",
			"11"
		],
		"%nok-quote": [
			"%nok-quote",
			"Spurious quotation comma",
			"When a quotation follows a quoting verb without quotes, it functions just like any other object clause. And because verb and object must not be separated, a comma is prohibited.<br>\n<br>\n<i>She said[,] I don't mind.</i>",
			"11"
		],
		"%nok-quote-end": [
			"%nok-quote-end",
			"Spurious quotation end comma",
			"In the presence of other closing punctuation ('!', '?', ':'), the quotation end comma is omitted. NB: No fullstop is used before a quotation comma.<br>\n<br>\n<i>&quot;Get out![,]&quot; she screamed.</i><br>\n<br>\n<i>&quot;Get out!&quot;[,] she screamed.</i>",
			"11"
		],
		"%k-rel": [
			"%k-rel",
			"Relative clause opening comma",
			"English relative clauses are (only) enclosed in commas if the information provided is non-essential (parenthetical). Such relative clauses are called non-restrictive relative clauses and can be omitted without changing the core meaning of the sentence. Because names are already specific by definition, they only allow relative clauses with a comma. In American English, &quot;which&quot; is almost always non-restrictive and gets a comma.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i><br>\n<br>\n<i>They went to the city's harbour, where a dolphin had made its appearance the day before.</i><br>\n<br>\nSometimes a relative clause refers not to a noun phrase, but to an entire predication. Here, too, a comma is needed:<br>\n<br>\n<i>The sun and the moon have the same apparent sizes in the sky, which is surprising, given the huge differences in distance and factual size.</i>",
			"7"
		],
		"%ok-rel": [
			"%ok-rel",
			"Relative clause opening comma",
			"English relative clauses are (only) enclosed in commas if the information provided is non-essential (parenthetical). Such relative clauses are called non-restrictive relative clauses and can be omitted without changing the core meaning of the sentence. Because names are already specific by definition, they only allow relative clauses with a comma. In American English, &quot;which&quot; is almost always non-restrictive and gets a comma.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i><br>\n<br>\n<i>They went to the city's harbour, where a dolphin had made its appearance the day before.</i><br>\n<br>\nSometimes a relative clause refers not to a noun phrase, but to an entire predication. Here, too, a comma is needed:<br>\n<br>\n<i>The sun and the moon have the same apparent sizes in the sky, which is surprising, given the huge differences in distance and factual size.</i>",
			"7"
		],
		"%k-rel-end": [
			"%k-rel-end",
			"Relative clause closing comma",
			"Non-restrictive (parenthetical) relative clauses need a closing comma to match the opening comma used before the clause.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i>",
			"7"
		],
		"%ok-rel-end": [
			"%ok-rel-end",
			"Relative clause closing comma",
			"Non-restrictive (parenthetical) relative clauses need a closing comma to match the opening comma used before the clause.<br>\n<br>\n<i>Emma, who had not eaten all day, piled huge amounts of salad on her plate.</i><br>\n<br>\n<i>The Titanic, which sank in 1912, was build in Ireland.</i>",
			"7"
		],
		"%nok-rel": [
			"%nok-rel",
			"Spurious opening comma in restrictive relative clause",
			"English relative clauses are only enclosed in commas if the information provided is non-essential (parenthetical). Relative clauses with essential information (so-called restrictive relative clauses), on the other hand, do not need a comma. The relative pronoun &quot;that&quot; is almost always restrictive and therefore never gets a comma.<br>\n<br>\n<i>The 12 stars[,] that adorn the EU flag[,] do not represent a country count.</i><br>\n<br>\nThe same goes for relative clauses without a relative pronoun altogether.<br>\n<br>\n<i>The car[,] he had bought[,] was old.</i><br>\n<br>\nIn American English, &quot;which&quot; is always non-restrictive and does get a comma.",
			"7"
		],
		"%nok-rel-end": [
			"%nok-rel-end",
			"Spurious closing comma in restrictive relative clause",
			"English relative clauses are only enclosed in commas if the information provided is non-essential (parenthetical). Such relative clauses get neither an opening nor a closing comma.<br>\n<br>\nThe car[,] he had bought[,] was old.",
			"7"
		],
		"%ko-rel": [
			"%ko-rel",
			"Possible relative clause comma",
			"This relative clause may be either restrictive (with commas) or non-restrictive (without commas), possibly because of ambiguity. Please check you choice of commas. Use commas if the information conveyed is not essential to the sentence.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%ko-rel-end": [
			"%ko-rel-end",
			"Possible relative clause comma",
			"This relative clause may be either restrictive (with commas) or non-restrictive (without commas), possibly because of ambiguity. Please check you choice of commas. Use commas if the information conveyed is not essential to the sentence.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nko-rel": [
			"%nko-rel",
			"Possible spurious relative clause comma",
			"This relative clause may be either restrictive (with commas) or non-restrictive (without commas), possibly because of ambiguity. Please check you choice of commas. Use commas if the information conveyed is not essential to the sentence.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nko-rel-end": [
			"%nko-rel-end",
			"Possible spurious relative clause comma",
			"This relative clause may be either restrictive (with commas) or non-restrictive (without commas), possibly because of ambiguity. Please check you choice of commas. Use commas if the information conveyed is not essential to the sentence.<br>\n<br>\n<i>The last Neanderthals(,?) found in Southern Spain(,?) may have lived only 24,000 years ago.</i>",
			"7"
		],
		"%nok-soft": [
			"%nok-soft",
			"Possible spurious comma",
			"The correction program couldn't find a rule for a comma in this place. However, the comma might still be meaningful, e.g. for pausing or clarity. Please check!",
			"21"
		],
		"%k-stop": [
			"%k-stop",
			"Sentence break",
			"There are two separate utterances here, and it might be better to break up the sentence. Using a comma as separator (a so-called comma splice) might not be enough. Please consider using a fullstop ir a semicolon to split the sentence in two.<br>\n<br>\n<i>Claire felt hungry,? she went to the fridge and made herself a sandwich.</i><br>\n<br>\n<i>--&gt; Claire felt hungry. She went to the fridge and made herself a sandwich.</i><br>\n<br>\nAlternatively, you can use a combination of a comma and a linking conjunction.<br>\n<br>\n<i>--&gt; Claire felt hungry, so she went to the fridge and made herself a sandwich.</i>",
			"16"
		],
		"%nok-SV": [
			"%nok-SV",
			"Spurious subject comma",
			"Subject and verb must not be separated by a comma. This is a syntactic rule and as such takes precedence over the general pausing comma rule. So no comma should be used, no matter if a speaker would pause here.<br>\n<br>\n<i>My friend Peter[,] is a formidable Tennis player.</i><br>\n<br>\n<i>The most important attribute of a ball player[,] is quick reflex actions.</i><br>\n<br>\nIf there is intervening parenthetical material between the subject and the verb, however, it should be set off by a pair of commas, governed by other comma rules.<br>\n<br>\n<i>The cake, which had been garnished elaborately with blueberries and cream, did not even last to see the coffee.</i><br>\n<br>\n<i>We, just like other companies, will contact your former employer.</i><br>\n<br>\nOn the other hand, compound subjects and non-parenthetical appositions or restrictive relative clauses do not make a difference to the rule - no comma should be used here.<br>\n<br>\n<i>Your family and the people that like you most[,] are not necesssarily the most likely to tell you the truth.</i>",
			"17"
		],
		"%ko-too": [
			"%ko-too",
			"Comma around &quot;too&quot;",
			"The word &quot;too&quot; is set off with an optional comma when meaning &quot;also&quot;. In the middle of the sentence, it is surrounded by a comma pair.<br>\n<br>\n<i>Claire, too, wanted a piece of the action.</i><br>\n<br>\n<i>Can I have a copy, too?</i>",
			"24"
		],
		"%ko-too-end": [
			"%ko-too-end",
			"Comma around &quot;too&quot;",
			"The word &quot;too&quot; is set off with an optional comma when meaning &quot;also&quot;. In the middle of the sentence, it is surrounded by a comma pair.<br>\n<br>\n<i>Claire, too, wanted a piece of the action.</i><br>\n<br>\n<i>Can I have a copy, too?</i>",
			"24"
		],
		"%nok-VO": [
			"%nok-VO",
			"Spurious object comma",
			"A verb and its (following) object must not be separated by a comma. This holds even where the object is a clause.<br>\n<br>\n<i>I need[,] a hot bath and mulled wine.</i><br>\n<br>\n<i>We all like to think[,] that we are better drivers than the average person.</i><br>\n<br>\n<i>I think[,] she likes chocolate.</i><br>\n<br>\n<i>You can bring along[,] whoever you like.</i>",
			"18"
		],
		"%k-voc": [
			"%k-voc",
			"Vocative start comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment term of a person directly addressed.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%ko-voc": [
			"%ko-voc",
			"Vocative start comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment term of a person directly addressed.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%ok-voc": [
			"%ok-voc",
			"Vocative start comma",
			"Commas are used to set off vocative elements in the sentence, i.e. the name, title or endearment term of a person directly addressed.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Tell me about the game, Peter!</i>",
			"9"
		],
		"%k-voc-end": [
			"%k-voc-end",
			"Vocative end comma",
			"Commas are used to set of vocative elements in the sentence, i.e. the name, title or endearment term of a person directly addressed.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Madam President, let me ask a budget question.</i>",
			"9"
		],
		"%ok-voc-end": [
			"%ok-voc-end",
			"Vocative end comma",
			"Commas are used to set of vocative elements in the sentence, i.e. the name, title or endearment term of a person directly addressed.<br>\n<br>\n<i>Yes, my dear, I will help.</i><br>\n<br>\n<i>Madam President, let me ask a budget question.</i>",
			"9"
		],
		"%k-year": [
			"%k-year",
			"Year comma (opening)",
			"In date expressions, the year is set of with commas. Thus, there is an opening comma between the day of the month and the year, and a closing comma after the year.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i><br>\n<br>\nNo comma is used where month and year appear next to each other:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%ok-year": [
			"%ok-year",
			"Year comma (opening)",
			"In date expressions, the year is set of with commas. Thus, there is an opening comma between the day of the month and the year, and a closing comma after the year.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i><br>\n<br>\nNo comma is used where month and year appear next to each other:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%k-year-end": [
			"%k-year-end",
			"Year comma (closing)",
			"In date expressions, a closing comma is used after the year, but only in the month-day-year format.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i>",
			"10.2"
		],
		"%ok-year-end": [
			"%ok-year-end",
			"Year comma (closing)",
			"In date expressions, a closing comma is used after the year, but only in the month-day-year format.<br>\n<br>\n<i>October 3, 1989, was an important day in German history and heralded the end of the Cold War.</i>",
			"10.2"
		],
		"%nok-year": [
			"%nok-year",
			"Spurious year comma (opening)",
			"No comma is used where month and year appear next to each other:<br>\n<br>\n<i>A local temperature record was recorded in July[,] 2017.</i><br>\n<br>\n<i>3 October[,] 1989[,] was an important date.</i>",
			"10.2"
		],
		"%nok-year-end": [
			"%nok-year-end",
			"Spurious year comma (closing)",
			"No comma is used after the year - nor before it - if the year is directly preceded by the name of the month.<br>\n<br>\n<i>3 October[,] 1989[,] was an important date in German history.</i><br>\n<br>\n<i>You can find details in my September[,] 2019[,] article.</i>",
			"10.2"
		],
		"%number-format": [
			"%number-format",
			"Non-English number formatting",
			"In English, a dot is used to mark the decimals in a number, while a comma groups digits into groups of three, i.e. thousands, millions, billions, etc. In German, Danish and most other European languages, it's the opposite.<br>\n<br>\n<i>123,000,609</i><br>\n<br>\n<i>0.74</i><br>\n<br>\n<i>13.19237</i>",
			"22.1"
		],
		"%no-number-format": [
			"%no-number-format",
			"Unwarranted number formatting",
			"Segmenting commas are not used in numbers occurring in addresses<br>\n<br>\n<i>1024, Heathrow Rd.</i>",
			"22.2"
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

		if (/^%ko-/.test(k)) {
			types_yellow[k] = k;
		}
		else if (/^%nko-/.test(k) || /^%ok-/.test(k)) {
			types_info[k] = k;
		}
		else if (/^%nok-/.test(k)) {
			types_red[k] = k;
		}
	}

	g_options_default.types = {};
	for (let k in marking_types) {
		if (/^%(ok|nko)-/.test(k)) {
			g_options_default.types[k] = 0;
		}
		else {
			g_options_default.types[k] = 1;
		}
	}
}
