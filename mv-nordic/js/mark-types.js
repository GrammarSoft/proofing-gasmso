/*!
 * Copyright 2016-2019 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Vitec MV (https://vitec-mv.com/)
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * All rights reserved.
 * The explanatory texts in this file are NOT released under an open source license.
 */
'use strict';

/* exported types_mv */
let types_mv = {
	"@vfin": "@vfin",
	"@inf": "@inf",
	"@impf": "@impf",
	"@pcp2-akt": "@pcp2-akt",
	"@ene": "@ene",
	"@ende": "@ende",
	"@comp-": "@comp-",
	"@comp-:-": "@comp-:-",
	"@-comp": "@-comp",
	"@comp": "@comp",
	"@error": "@error",
	"@apostrophe": "@apostrophe",
	"@no-apostrophe": "@no-apostrophe",
	"@check!": "@check!",
	"@new": "@new",
	"@green": "@green",
	"@proper": "@proper",
	"@abbreviation": "@abbreviation",
	"@upper": "@upper",
	"@lower": "@lower",
};

/* exported types_red */
let types_red = {
	"@error": "@error",
	"@comp-": "@comp-",
	"@-comp": "@-comp",
	"@comp-:-": "@comp-:-",
	"@comp": "@comp",
	"@x-etype-apostrophe": "@x-etype-apostrophe",
	"@apostrophe": "@apostrophe",
	"@no-apostrophe": "@no-apostrophe",
	"@x-etype-hyphen": "@x-etype-hyphen",
	"@hyphen-prefix": "@hyphen-prefix",
	"@hyphen-suffix": "@hyphen-suffix",
};

/* exported types_yellow */
let types_yellow = {
	"@proper": "@proper",
	"@new": "@new",
	"@abbreviation": "@abbreviation",
	"@check!": "@check!",
};

/* exported types_dictionary */
let types_dictionary = null;

/* exported types_comp_right */
let types_comp_right = null;

/* exported types_to_upper */
let types_to_upper = null;

/* exported marking_types */
let marking_types = {
	"@x-etype-list": [
		"Forkert skrevet ord",
		"Du har skrevet et ord forkert, måske fordi det engang blev stavet sådan.<br>\n<br>\nDet kan fx være, at du skrev <i>vanilie</i> i stedet for <i>vanilje</i>, som er den eneste rigtige stavemåde.",
	],
	"@x-etype-joined": [
		"Manglende mellemrum",
		"Du mangler et mellemrum mellem to ord, måske fordi du har lavet en slåfejl, så to ord er skrevet forkert sammen. Det kunne fx være <i>undret mig</i>, der er skrevet ud i et <i>undretmig,</i> men også samskrivning af præposition og styrelse som fx <i>i går</i> og <i>i dag</i>, der skal skrives hver for sig.",
	],
	"@x-etype-sær": [
		"Manglende sammenskrivning",
		"Du har undladt at skrive to ord sammen, som i denne sammenhæng skal være skrevet sammen. Grammatisk kan ordene stå hver for sig, men betydningen ændres, når de skrives sammen. Der er fx stor forskel på en <i>engelsk lærer</i> (som altså ikke er hverken dansker eller tysker) og en<i> engelsklærer</i>, som underviser i engelsk.",
	],
	"@x-etype-flex": [
		"Bøjningsfejl",
		"Du har brugt en forkert bøjning af ordet.<br>\n<br>\nDet kunne være <i>sandet</i>, hvor der skulle stå <i>sanden,</i> eller <i>huserne</i> i stedet for <i>husene.</i><br>\n<br>\nDet kan også være, hvis du har forvekslet flertalsendelserne <i>-erne</i> og <i>-ene,</i> eller datidsendelserne <i>-ede</i> og <i>-te</i>.",
	],
	"@x-etype-ellision": [
		"Bøjningsfejl ved ord der ender i -el/-en/-er",
		"Du har skrevet et -<i>e</i>- for meget i ord, der ender på -<i>el,-en og -er</i>. Disse ord mister -e i sidste stavelse, når de bøjes. Det kan fx være <i>en cykel, flere cykler</i> (altså ikke cykeler), en <i>moden</i> mand → to <i>modne</i> mænd.",
	],
	"@x-etype-um": [
		"Bøjningsfejl ved ord der ender i -um",
		"Du har brugt forkert bøjning af ord, der ender på -um.<br>\n<br>\nDet kunne fx være <i>gymnasium,</i> der bøjes <i>gymnasiet/gymnasier</i> (ikke <i>gymnasiummet/gymnasiummer</i>).",
	],
	"@x-etype-gemination": [
		"Bøjningsfejl ved bogstavsfordobling",
		"Du har bøjet ord ved at bruge dobbeltkonsonant, fx <i>en dal → to daller,</i> hvor brugen af et -<i>l</i> bevarer en lang vokal. Eller du har undladt dobbeltvokal, når en kort vokal skal bevares, som fx <i>en hal → to haller.</i>",
	],
	"@x-etype-hyphen": [
		"Overflødig eller manglende bindestreg inde i ordet",
		"Du har tilføjet en overflødig bindestreg inde i ord, som fx<i> binde-streg.</i><br>\n<br>\nEller du mangler en bindestreg, som fx <i>is- og slikfabrik</i> (fælles orddel), <i>1800-tallet</i> (tal + andet ord) og <i>wc-papir</i> (forkortelse + andet ord).",
	],
	"@error": [
		"Stavefejl",
		"Du har lavet en almindelig stavefejl, som programmet har rettet.<br>\n<br>\nFx <i>intereseret → interesseret</i>",
	],
	"@check!": [
		"Muligt forkert ord uden ændringsforslag",
		"Du har skrevet et specielt ord, som kan være forkert.<br>\n<br>\nFx <i>døgntlf.-tid.</i>",
	],
	"@:...": [
		"Forslag til rettelse ud fra sammenhæng",
		"Du har skrevet ord med stavefejl eller forkert ordvalg.<br>\n<br>\nFx <i>esdragon</i> → <i>estragon, ud og se</i> → <i>ud at se</i>",
	],
	"@comp-": [
		"Særskrivningsfejl – bør sammenskrives med næste ord",
		"Du har skrevet et ord, som skal skrives sammen, i to ord.<br>\n<br>\nFx <i>banegårds center</i> → <i>banegårdscenter</i>",
	],
	"@comp-:-": [
		"Særskrivningsfejl – bør sammenskrives med næste ord, med bindestreg",
		"Du har skrevet et sammensat ord uden bindestreg, selvom der i denne sammensætning skal være en bindestreg.<br>\n<br>\nFx <i>FN resolution</i> → <i>FN-resolution</i>",
	],
	"@-comp": [
		"Særskrivningsfejl – bør sammenskrives med forudgående ord",
		"Du har skrevet sammensat ord i to ord.<br>\n<br>\nFx <i>De havde spist for inden → De havde spist forinden</i>",
	],
	"@comp": [
		"Særskrivningsfejl – de to dele skal skrives sammen",
		"Du har skrevet et sammensat ord i to ord.<br>\n<br>\nFx <i>De havde spist for inden → De havde spist forinden</i>",
	],
	"@new": [
		"Nyt ord, der sandsynligvis er ok",
		"Du har skrevet et ord, der ikke findes i ordbogen, men som ser ud til at være rigtigt. Kig på det en ekstra gang for at være sikker på, at du har skrevet det rigtigt.",
	],
	"@green": [
		"Ord, der er forkert i sammenhængen",
		"Du har skrevet et korrekt ord, der dog i denne sammenhæng er forkert.<br>\n<br>\nFx <i>I her travlt → I har travlt</i>",
	],
	"@proper": [
		"Ukendt egennavn",
		"Dette ord er et egennavn og er sandsynligvis korrekt. Det findes bare ikke i programmets ordbog. Så du afgør selv, om det er korrekt stavet.",
	],
	"@abbreviation": [
		"Ukendt forkortelse",
		"Du har skrevet en forkortelse, som ikke er almindelig kendt. Kig på den igen for at være sikker på, at du har skrevet forkortelsen rigtigt.<br>\n<br>\nFx <i>se kap. 5</i>",
	],
	"@hyphen-prefix": [
		"Manglende bindestreg efter forreste orddel i sideordning",
		"Du har undladt at skrive en bindestreg i en sideordning, hvor to ord deler en del af det sidste ord.<br>\n<br>\nFx <i>sommer og vintertøj → sommer- og vintertøj</i>",
	],
	"@hyphen-suffix": [
		"Manglende bindestreg før sidste orddel i sideordning",
		"Du har undladt at skrive en bindestreg i en sideordning, hvor to ord deler en del af det første ord.<br>\n<br>\nFx <i>papkrus og tallerkener → papkrus og -tallerkener</i>",
	],
	"@apostrophe": [
		"Manglende apostrof",
		"Du har undladt at bruge apostrof i forbindelse med bøjning af forkortelser.<br>\n<br>\nFx <i>pc'en,</i> tal som <i>1960'erne</i><br>\n<br>\nEller du mangler apostrof til at markere genitiv efter s, z eller x.<br>\n<br>\nFx <i>Jens</i> → <i>Jens'</i><br>\n<br>\nHusk, at du på dansk ikke må bruge apostrof som genitiv-s. Altså nej til <i>Jensen'</i>. Det hedder <i>Jensens</i>.",
	],
	"@no-apostrophe": [
		"Overflødig apostrof",
		"Du har brugt apostrof forkert, som fx <i>Jensen's</i>. Det hedder <i>Jensens.</i>",
	],
	"@upper": [
		"Første bogstav bør være med stort",
		"Du har begyndt din sætning med lille begyndelsesbogstav. Sætninger begynder altid med stort.<br>\n<br>\nFx <i>han er i alaska → Han er i Alaska</i>",
	],
	"@lower": [
		"Første bogstav bør være med småt",
		"Du har skrevet ord med stort begyndelsesbogstav, hvor første bogstav bør skrives med småt.<br>\n<br>\n<i>Fx Hun blev bidt af en Løve → Hun blev bidt af en løve</i>.<br>\n<br>\nMåske er det din mening, at ordet skal fremhæves ved at skrives med stort begyndelsesbogstav?",
	],
	"@question": [
		"Manglende spørgsmålstegn",
		"Du har glemt at sætte spørgsmålstegn efter en spørgende sætning.<br>\n<br>\nFx <i>Hvad har du set. → Hvad har du set?</i>",
	],
	"@neu": [
		"Bøjningsfejl - intetkøn",
		"Du har skrevet en forkert bøjningsform af ordet. Ordet burde være bøjet i intetkøn i stedet for fælleskøn.<br>\n<br>\nFx <i>Den røde hus ved vanden → Det røde ved vandet</i>",
	],
	"@neu-sc": [
		"Bøjningsfejl - intetkøn",
		"Du har skrevet en forkert bøjningsform af ordet. Ordet burde være bøjet i intetkøn i stedet for fælleskøn.<br>\n<br>\nFx <i>Huset er rød → Huset er rødt</i>",
	],
	"@utr": [
		"Bøjningsfejl - fælleskøn",
		"Du har skrevet en forkert bøjningsform af ordet. Ordet burde være bøjet i fælleskøn i stedet for intetkøn.<br>\n<br>\nFx <i>Det gamle hest i staldet → Den gamle hest i stalden</i>",
	],
	"@utr-sc": [
		"Bøjningsfejl – fælleskøn",
		"Du har skrevet en forkert bøjningsform af ordet. Ordet burde være bøjet i fælleskøn i stedet for intetkøn.<br>\n<br>\nFx <i>Hesten er gammelt → Hesten er gammel</i>",
	],
	"@pl": [
		"Bøjningsfejl – ental/flertal",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt ental i stedet for flertal.<br>\n<br>\nFx <i>mange hest → mange heste</i>",
	],
	"@pl-sc": [
		"Bøjningsfejl – ental/flertal",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt flertal i stedet for ental.<br>\n<br>\nFx <i>hestene er gammel → hestene er gamle</i>",
	],
	"@sg": [
		"Bøjningsfejl – ental/flertal",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt flertal i stedet for ental.<br>\n<br>\nFx <i>en ung lærere → en ung lærer</i>",
	],
	"@sg-sc": [
		"Bøjningsfejl – ental/flertal",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt flertal i stedet for ental.<br>\n<br>\nFx <i>huset er store → huset er stort</i>",
	],
	"@idf": [
		"Bøjningsfejl – bestemt/ubestemt",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt ubestemt form i stedet for bestemt form.<br>\n<br>\nFx <i>et røde æble → et rødt æble</i>",
	],
	"@idf-sc": [
		"Bøjningsfejl – bestemt/ubestemt",
		"Du har skrevet en forkert bøjningsform af ordet. Du har Du har brugt ubestemt form i stedet for bestemt form.<br>\n<br>\nFx <i>huset er gamle → huset er gammelt</i>",
	],
	"@idf-pl": [
		"Bøjningsfejl – bestemt/ubestemt",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt bestemt form i stedet for ubestemt form.<br>\n<br>\nFx <i>mange helten i film → mange helte i film</i>",
	],
	"@def": [
		"Bøjningsfejl – bestemt/ubestemt",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt ubestemt form i stedet for bestemt form.<br>\n<br>\nFx <i>hele skole → hele skolen</i>",
	],
	"@vfin": [
		"Bøjningsfejl – navneform/nutidsform",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt navneform (uden -r) i stedet for nutidsform ( med -r).<br>\n<br>\nFx <i>han høre aldrig efter → han hører aldrig efter</i>",
	],
	"@inf": [
		"Bøjningsfejl – navneform/nutidsform",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt nutidsform (med -r) i stedet for navneform (uden -r).<br>\n<br>\nFx <i>Han begyndte at hører efter → Han begyndte at høre efter</i>",
	],
	"@impf": [
		"Bøjningsfejl - datidsform",
		"Du har skrevet en forkert bøjningsform af ordet. Du har brugt en forkert datidsform.<br>\n<br>\nFx <i>vi sad og snakket → vi sad og snakkede</i>",
	],
	"@pcp2-akt": [
		"Bøjningsfejl - tillægsform",
		"Du har skrevet en forkert bøjningsform af ordet. Måske har du glemt et –t.<br>\n<br>\nFx <i>Han har også spille på holdet. → Han har også spillet på holdet.</i>",
	],
	"@pas": [
		"Bøjningsfejl – passiv",
		"Du har skrevet en forkert bøjningsform af ordet. Verbet skal være i passiv.<br>\n<br>\nFx <i>Hammeren bruger til mange ting → Hammeren bruges til mange ting</i>",
	],
	"@ene": [
		"Forveksling af -ene/-ende",
		"Du har forvekslet to ord, der lyder ens, men som betyder noget meget forskelligt.<br>\n<br>\nFx <i>Husende var smukke → Husene var smukke</i><br>\n<br>\n'Husene' er den mest almindelige bestemte flertalsform for navneord, mens 'Husende' er en tillægsform, der udtrykker processer og egenskaber.",
	],
	"@ende": [
		"Forveksling af -ene/-ende",
		"Du har forvekslet to ord, der lyder ens, men som betyder noget meget forskelligt.<br>\n<br>\nFx <i>Han kom løbene ned ad gaden. → Han kom løbende ned ad gaden.</i><br>\n<br>\n'løbene' er den mest almindelige bestemte flertalsform for navneord, mens 'løbende' er en tillægsform, der udtrykker processer og egenskaber.",
	],
	"@nom": [
		"Bøjningsfejl – stedord og kasus",
		"Du har brugt et stedord med forkert kasus (fald).<br>\n<br>\nFx <i>Dem kommer i morgen → De kommer i morgen</i>",
	],
	"@acc": [
		"Bøjningsfejl – stedord og kasus",
		"Du har brugt et stedord med forkert kasus (fald).<br>\n<br>\nFx <i>Jeg har talt med hun → Jeg har talt med hende</i>",
	],
	"@gen": [
		"Manglende markering af ejefald.",
		"Du har glemt at markere ejefald (genitiv) med et -s.<br>\n<br>\nFx <i>bogen titel → bogens titel</i>",
	],
	"@adv": [
		"Manglende -t i biord",
		"Du har undladt et -t i biord<i>.</i><br>\n<br>\nFx <i>han er enorm træt → han er enormt træt</i>",
	],
	"@nil": [
		"Overflødigt ord",
		"Du har anvendt et overflødigt ord.<br>\n<br>\nFx <i>Han gad ikke at lege. → Han gad ikke lege.</i>",
	],
	"@insert": [
		"Manglende ord",
		"Du mangler at skrive et ord. Indsæt selv det manglende ord.<br>\n<br>\nFx <i>Han begyndte råbe. → Han begyndte at råbe.</i>",
	],
	"@sentsplit": [
		"Manglende punktum eller andet tegn",
		"Du mangler at sætte punktum eller evt. komma.<br>\n<br>\nFx <i>Han kommer ikke han er syg. → Han kommer ikke. Han er syg</i>.",
	],
};

let ctypes = {
	'%k-list': ['<h3>1.3 Komma ved opremsning af ord og sætninger.</h3>Komma erstatter <i>og</i>, hvis der er mere end to led efter hinanden.<br><br><i>Man kunne købe is, chokolade og varme pølser.<br><br>Fluerne summede, og fuglene sang, kvidrede og legede.</i>', 1],
	'%k-list-ADJ': ['<h3>1.3 Komma ved opremsning af adjektiver.</h3>Komma erstatter <i>og</i>, hvis der er mere end to adjektiver efter hinanden.<br><br><i>Man kunne købe friske, røde og lækre æbler.</i>', 1],
	'%k-title': ['<h3>Komma ved stillingsbetegnelser og titler</h3>Der sættes komma mellem stillingsbetegnelser, titler, akademiske grader og lignende der ikke er forbundet med <i>og</i>.<br><br><i>Direktør, cand.mag. Torben Taastrup</i>', 3],
	'%k-address': ['<h3>Komma ved adresser</h3>Der sættes normalt komma mellem de enkelte dele af adresser og lignende beskrivelser, når de skrives ud i ét:<br><br><i>Mette Hansen, Kastanjevej 6, 2920 Charlottenlund</i>', 3],
	'%k-reference': ['<h3>Komma ved referencer</h3>Der sættes komma mellem stillingsbetegnelser, titler, akademiske grader og lign. der ikke er forbundet med <i>og</i>.<br><br><i>"Oprør fra Midten", Gyldendal, 1977, side 54</i>', 3],
	'%ko': ['<h3>Komma mellem adresse og tid</h3>Det er valgfrit, om man vil sætte komma mellem adresser og datoer/tidspunkter.<br><br><i>Næstved(,) 21. september 2001<br>fredag den 21. september 2001(,) kl. 16.00</i>', 3],
	'%k-appo': ['<h3>3.2 Komma ved apposition</h3>Der sættes komma omkring en apposition (en forklarende tilføjelse).<br><br><i>Den største danske å, <u>Gudenåen</u>, løber gennem Silkeborg.<br><br>Hendes bror, <u>firmaets bedste sælger</u>, blev fyret i går.</i>', 3],
	'%k-appo-end': ['<h3>3.2 Komma ved apposition</h3>Der sættes komma omkring en apposition (en forklarende tilføjelse).<br><br><i>Den største danske å, <u>Gudenåen</u>, løber gennem Silkeborg.<br><br>Hendes bror, <u>firmaets bedste sælger</u>, blev fyret i går.</i>', 3],
	'%k-extra': ['<h3>3.3 Komma ved tiltaleord</h3>Der sættes komma foran tiltaleord.<br><br><i>Kom herhen, <u>Hans</u>!</i><h3>3.4 Komma ved udråb</h3>Der sættes komma efter udråbsord.<br><br><i>Halløj, kom lige her.<br>Øv, nu gik bilen i stå.</i><h3>3.5 Komma ved frie prædikativer</h3>Der sættes komma før slutstillede frie prædikativer. Prædikativer er beskrivende ord og led. Fx <i>stille og roligt</i>.<br><br><i>Han står og venter, <u>stille og alene</u>.<br><br>Endelig nåede vi hjem med hele flokken, <u>glade over at være sluppet for uheld undervejs</u>.</i><h3>3.6 Komma ved ekstraposition</h3>Der sættes komma omkring ekstraposition. Ekstraposition er et ekstra forklarende ord eller led.<br><br><i>Jens, <u>ham</u> kan vi stole på.<br><br>På fredag, <u>da</u> skal jeg til læge.</i><h3>Komma ved spørgende tilføjelser</h3>Der sættes komma ved spørgende tilføjelser.<br><br><i>Du kommer på lørdag, <u>ikke</u>?<br><br>Hun er nok kommet i godt selskab, <u>hvad</u>?</i>', 3],
	'%k-explain': ['<h3>3.7 Komma ved forklaringer og præciseringer</h3>Der sættes komma ved forklaringer og præciseringer.<br><br><i>Vi skal rejse søndag, <u>uanset vejr og vind</u>.<br><br>Han håndterede værktøjet fint, <u>også den tunge hammer</u>.</i>', 3],
	'%k-explain-evt': ['<h3>Muligt komma ved forklaringer og præciseringer</h3>Der kan sættes komma ved forklaringer og præciseringer.<br><br><i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid.</i>', 3],
	'%k-explain-end': ['<h3>3.7 Komma omkring forklaringer og præciseringer</h3>Der sættes komma omkring forklaringer og præciseringer.<br><br><i>Vi skal rejse søndag, <u>uanset vejr og vind</u>, hvis vi vinder konkurrencen.<br><br>Køb lidt snack, <u>fx popcorn</u>, hvis du alligevel skal i Brugsen.</i>', 3],
	'%k-rel': ['<h3>2.3 Komma før parentetiske relativsætninger</h3>Der sættes komma før parentetiske relativsætninger, hvor ledsætningen godt kan udelades, uden at sammenhængen bliver meningsløs.<br><br><i>De kom en time for sent, <u>hvilket ikke overraskede os</u>.</i>', 2],
	'%k-rel-end': ['<h3>2.3 Komma omkring parentetisk relativsætninger</h3>Der sættes komma omkring parentetiske relativsætninger, hvor ledsætningen godt kan udelades, uden at sammenhængen bliver meningsløs.<br><br><i>I en toværelses-lejlighed, <u>hvor der ikke er plads til mange gæster</u>, kan sovesofaer være en god løsning.</i>', 2],
	'%k-paren': ['<h3>2.3 Komma før ledsætning</h3>Der sættes komma før selvstændige ledsætninger.<br><br><i>Han er altædende, <u>hvorimod hun dyrker at være vegetar</u>.</i>', 2],
	'%k-paren-end': ['<h3>Komma efter ledsætning</h3>Der sættes komma efter selvstændige ledsætninger.<br><br><i>De levede, <u>skulle man tro</u>, et helt andet familieliv end vores.</i>', 2],
	'%ko-men': ['<h3>Valgfrit komma foran men, der ikke forbinder to sætninger</h3>Der kan valgfrit sættes komma foran et <i>men</i>, der ikke forbinder to sætninger:<br><br><i>Huset var billigt(,) men faldefærdigt.<br><br>De var meget trætte(,) men lykkelige for sejren.</i>', 3],
	'%k-men': ['<h3>Komma omkring men-udtryk</h3>Der sættes komma omkring <i>men</i>-udtryk med en særlig grad af selvstændighed eller fremhævelse.<br><br><i>En træt, <u>men lykkelig</u>, vinder.</i>', 3],
	'%k-men-end': ['<h3>Komma omkring men-udtryk</h3>Der sættes komma omkring <i>men</i>-udtryk med en særlig grad af selvstændighed eller fremhævelse.<br><br><i>En træt, <u>men lykkelig</u>, vinder.</i>', 3],
	'%k-main': ['<h3>1.1 Komma mellem helsætninger</h3>Der sættes komma mellem helsætninger, når to eller flere helsætninger sættes sammen med et bindeord som <i>og</i>, <i>eller</i>, <i>men</i>, <i>for</i>, <i>så</i>. Komma står foran bindeordet.<br><br><i>Fuglene fløjtede, og solen skinnede varmt.<br><br>Fuglene fløjtede, men solen skinnede varmt.<br><br>Fuglene fløjtede, for solen skinnede varmt.</i><br><br>Verber i bydeform fungerer som subjekt og verballed (udsagnsled og grundled). Derfor er der helsætningskomma mellem to bydeformer.<br><br><i><u>Skrid</u>, og <u>kom</u> aldrig igen.</i>', 1],
	'%nok-main': ['<h3>Ingen komma mellem prædikater</h3>Der sættes ikke komma, når der optræder et subjekt og to verber.<br><br><i>De låste huset og tog af sted.</i>', 3],
	'%k-quote-end': ['<h3>1.2 Komma ved direkte tale</h3>Der sættes komma før inkvit (anførende sætning).<br><br><i>"Kom straks tilbage", råbte han.</i>', 1],
	'%k-quote-start': ['<h3>1.2 Komma omkring direkte tale</h3>Der sættes komma før og efter inkvit (anførende sætning).<br><br><i>"Jeg er på arbejde," sagde han, "også når du kommer hjem."</i>', 1],
	'%k-ellision': ['<h3>1.4 Komma ved ufuldstændige helsætninger</h3>Der sættes komma mellem helsætninger – også når den sidste sætning er ufuldstændig, altså mangler verbal/udsagnsled.<br><br><i>Hun gik til højre, han til venstre.</i>', 1],
	'%k-FSend': ['<h3>2.1 Komma efter ledsætninger</h3>Der skal sættes komma efter en ledsætning.<br><br><i><u>At døren var låst</u>, så jeg for sent.<br><br><u>Fordi hegnet var itu</u>, løb køerne væk.<br><br><u>Hvordan jeg skulle gøre det</u>, havde ingen fortalt.<br><br><u>Mens toget kørte videre</u>, holdt alle bilerne stille.</i>', 2],
	'%ko-FSstart': ['<h3>2.1 Komma før ledsætninger</h3>Der sættes komma før en ledsætning. Denne type komma kaldes startkomma.<br>Komma sættes som regel før bindeordet.<br><br><i>Jeg så, <u>at døren var låst</u>.<br><br>Køerne løb væk, <u>fordi hegnet var itu</u>.<br><br>Ingen havde fortalt, <u>hvordan jeg skulle gøre det</u>.<br><br>Fortæl mig nu, <u>hvornår du kommer tilbage</u>.<br><br>Biosfæren er den del af Jorden, <u>hvor levende væsner kan leve</u>.<br><br>En horst er et højtliggende område, <u>som er presset op fra jorden</u>.</i><br><br>En ledsætning er led i en helsætning og kan ikke stå alene.<br>Den indledes ofte med et bindeord. Fx <i>at</i>, <i>der</i>, <i>som</i>, <i>hvad</i>, <i>hvornår</i>, <i>fordi</i>, <i>efter at</i>, <i>selv om</i>, <i>mens</i>.<br><br>Hvis ledsætningen indledes med et hv-ord, sættes komma foran dette.<br><br><i>Jeg ved, <u>hvilken</u> vej vi skal gå.<br><br>Ved du, <u>hvem</u> der kommer?</i><h3>2.1 Komma efter ledsætninger</h3><i><u>At døren var låst</u>, så jeg for sent.<br><br><u>Fordi hegnet var itu</u>, løb køerne væk.<br><br><u>Hvordan jeg skulle gøre det</u>, havde ingen fortalt.<br><br><u>Mens toget kørte videre</u>, holdt alle bilerne stille.</i><h3>2.3 Komma før og efter indskudte ledsætninger</h3>Der sættes komma omkring indskudte ledsætninger.<br><br><i>Jeg så, <u>at døren var låst</u>, og råbte efter hjælp.<br><br>Køerne løb væk, <u>fordi hegnet var itu</u>, og blev aldrig fundet igen.<br><br>Ingen havde fortalt, <u>hvordan jeg skulle gøre det</u>, så jeg måtte prøve mig frem.<br><br>Forleden dag, <u>da vi mødtes på perronen</u>, lånte jeg ham 20 kroner.</i>', 2],
	'%k-FSco': ['<h3>Komma mellem sideordnede ledsætninger</h3>Der sættes komma mellem sideordnede ledsætninger.<br><br><i>Jeg så, <u>at døren var låst</u>, og <u>at postkassen ikke var tømt</u>.</i>', 2],
	'%ko-FSco': ['<h3>Komma mellem sideordnede ledsætninger</h3>Der sættes komma mellem sideordnede ledsætninger, der deler bindeord/konjunktion.<br><br><i>Hvis han igen er syg, og hun ikke vil rejse alene, må vi flytte ferien.</i>', 2],
	'%nok-FSstart': ['<h3>Forkert ledsætnings-startkomma</h3>Du har sat et ledsætnings-startkomma det forkerte sted.<br>Sandsynligvis skal kommaet flyttes til venstre, og programmet har forhåbentlig allerede markeret det korrekte sted. Reglerne er følgende:<br><br>1. Et komma må ikke adskille en sideordnende konjunktion fra den ledsætning, den sideordner.<br><i>Han var sulten, og [,] fordi køleskabet var tomt, købte han ind.</i><br><br>2. Et komma må ikke adskille indlederordet fra den ledsætning, det indleder. Dette gælder underordnende konjunktioner, spørgepronominer og relative pronominer, samt forklaringspartikler som <i>dvs</i>.<br><i>Du kan få rabat, mod [,] at du selv afhenter varen. Hun er ked af det, fordi [,] hendes kat har ædt hamsteren.</i><br><br>3. Et komma må kun adskille en præposition fra sin ledsætnings-styrelse, hvis præpositionen er tæt knyttet (valensbundet) til et element i hovedsætningen - altså ikke, hvis præpositionen udgør en løs tilføjelse.<br><i>Jeg tror [,] på, at vi vinder i aften.</i><br>Men: <i>Han inviterede hele landsbyen, i anledning af [,] at han blev 50.</i><br><br>4. Et komma må ikke adskille et adverbial fra den sætning, den betydningsmæssigt tilhører. Det skal altså stå før - og ikke efter - adverbier som <i>især</i> og <i>netop</i>, når de står i starten af en ledsætning.<br><i>Jeg hader regn, især [,] når det er koldt.</i>', 2],
	'%ko-ellision-end': ['<h3>Valgfrit komma efter ufuldstændige ledsætninger</h3>Valgfrit komma efter ufuldstændige ledsætninger, der mangler subjekt og verballed.<br><br><i>Hvis ikke (,) finder vi en anden løsning.<br>Skønt gammeldags (,) er det en fin film.</i>', 2],
	'%nok-ellision': ['<h3>Ikke komma foran ufuldstændige ledsætninger</h3><i>Skabet samles [,] som vist.</i>', 2],
	'%k': ['<h3>Ukendt komma</h3>Kommatypen er ukendt, men vi anbefaler dig at tjekke, om den sætning, hvor kommaet står, er korrekt.', 1],
	'%k-stop': ['<h3>Manglende sætningsbrud</h3>Der indsættes punktum, komma, kolon, semikolon eller linjeskift mellem to selvstændige sætninger, eller mellem en overskrift og første sætning.', 1],
	'%nok-soft': ['<h3>Overflødigt komma</h3>Dette komma er overflødigt, så du bør se på, om det skal være der. Du har måske sat det for at fremhæve noget i din tekst.', 1],
};

for (let k in ctypes) {
	if (!ctypes.hasOwnProperty(k)) {
		continue;
	}
	let rx = new RegExp('^<h3>([^]+?)<\/h3>([^]+)$');
	let ms = rx.exec(ctypes[k][0]);
	marking_types[k] = [ms[1], ms[2], ctypes[k][1]];

	if (/^%ko-/.test(k)) {
		types_yellow[k] = k;
	}
	else if (/^%nok-/.test(k)) {
		types_red[k] = k;
	}
}
ctypes = null;

let types_lang = {
	da: {
		mv: Object.assign({}, types_mv),
		red: Object.assign({}, types_red),
		yellow: Object.assign({}, types_yellow),
		types: Object.assign({}, marking_types),
		comp_right: new RegExp('@comp-|@comp( |$)'),
		to_upper: new RegExp('@upper( |$)'),
	},
	nb: {
		comp_right: new RegExp('@(R|Y)-comp[^ ]*( |$)'),
		to_upper: new RegExp('@R-LowerCase( |$)'),
		types: {
    "@R-LowerCase": [
        "Stor bokstav etter punktum",
        "En ny setning begynner alltid med stor bokstav. <BR>Punktum avslutter en setning.<BR>Etter et punktum skal det være stor bokstav.<BR>Navn skal alltid ha stor bokstav selv om det ikke er et punktum foran."
    ],
    "@R-SPELL": [
        "Stavefeil",
        "Det har blitt en skrivefeil fordi bokstavene er satt i feil rekkefølge eller det er brukt feil bokstaver."
    ],
    "@R-SPELL-CONTEXT": [
        "Ordet forkert i kontekst",
        "Placeholder Du har skrevet et korrekt ord, men ud fra konteksten ser det ud som vil skrive et andet"
    ],
    "@R-aa-default": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et infintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-aa-noninf": [
        "Verbet skal stå i infinitiv",
        "Placeholder"
    ],
    "@R-aa-nonverb": [
        "Mangler verb i infinitiv",
        "Placeholder"
    ],
    "@R-aa-og-begin": [
        "Forveksling av og – å",
        "Du har skrevet <B>å</B> i stedet for <B>og</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et infintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-comp-AQ": [
        "Ord som du har delt skal være sammensatte ord",
        "Du har skrevet et sammensatt ord med et adjektiv til slutt som to ord.<BR><BR>Eksempler:<BR><EM>skoleflink</EM> - substantiv og adjektiv <BR><EM>dansegal</EM> - verb og adjektiv <BR><EM> blågrå</EM> - adjektiv og adjektiv<BR><EM>gennomvårt</EM> preposisjon adjektiv"
    ],
    "@R-comp-NC-NC": [
        "Ord som du har delt skal være sammensatte ord",
        "Når to substantiv følger etter hverandre, skriver vi dem som ett ord. Det første substantivet forteller noe om det andre substantivet.<BR>En <EM>bilbane</EM> = en bane som man kjører bil på <BR>En <EM>solhatt</EM> en hatt man bruker i solen <BR><BR><EM>En bane</EM> er hankjønn og bøyes <EM>en bane-banen-baner-banene</EM><BR><BR>Husk at noen ganger blir substantiver som har verb som skrives likt et problem fordi når de er delt (særskrevet) og når de er sammensatte betyr de noe helt forskellig.<BR><BR><EM> Ananas biter</EM> = Jeg mener at ananas biter ikke. <BR><EM> Ananasbiter </EM> = Jeg elsker ananasbiter. <BR><BR><BR>Noen ganger er den første delen et verb. Dette verbet må fortelle noe om substantivet. Verbet står <b>alltid</b> i infinitiv, også når det bøyes. <BR><BR><EM>ei lesebok-leseboka-lesebøker-lesebøkene</EM> = ei bok til å lese i <BR><EM>et hoppetau</EM> = et tau å hoppe med</EM>"
    ],
    "@R-comp-adverb": [
        "Sjekk om ord du har delt bør skrives som et sammensatt ord",
        "Ord som begynner med av, for, i med, om, over, på og til skrives ofte som delte ord (særskrives), men det finnes noen unntak."
    ],
    "@R-comp-altfor": [
        "Sjekk om ord du har delt bør skrives som et sammensatt ord",
        "Skriv ordene sammen for at udtrykke <EM> i for høg grad </EM>. Ellers skriv <EM>alt for</EM> som i <EM> Jeg gjøre alt for deg!</EM>"
    ],
    "@R-infinitive-finite": [
        "Du må bøye verbet i setningen",
        "Du har skrevet verbet i infinitiv som er en form av verbet.  Du må derfor bøye verbet slik at vi får det i riktig tid (presens, preteritum m.m). Eks. <EM>Jeg GÅ til skolen</EM> blir til <EM>Jeg GÅR til skolen</EM> eller <EM>Jeg GIKK til skolen</EM>."
    ],
    "@R-og-aa-noleft": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et inf\nintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-og-å": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et inf\nintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-og-å-SPS": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et inf\nintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-og-å-får": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et inf\nintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-og-å-verbinset": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et inf\nintinivsmerke. <BR>En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@R-og-å-verbleft": [
        "Forveksling av og - å",
        "Du har skrevet <B>og</B> i stedet for <B>å</B>. Ordene lyder likt, men <B>og</B> er en konjunksjon og <B>å</B> er et inf\nintinivsmerke. <BR> En konjunksjon er et bideord og  binder sammen  like ord, setnningledd eller setninger. For eksempel <EM>hus <B>og</B> hage<EM>, <EM>Frida går på skolen og Ben går i barnehagen</EM>.<BR>Infinitivsmerket <B>å</B> kan vi bare bruke framfor et verb som står i infinitiv.  <EM>Jeg elsker <B>å</B> løpe</EM> eller <EM>Han er redd for <B>å</B> sykle</EM>."
    ],
    "@Y-comp-AQ-NC": [
        "Sjekk om ord du har delt bør skrives som et sammensatt ord",
        "Noen ord kan være både et delt ord (særskrevet) og et sammensatt ord, men har da som regel forskjellig betydning. Forskjellen kan gå å være liten til å bety noe helt annet.<BR><BR><EM>Små barn</EM> - Jeg underviser små barn.<BR><EM>Småbarn</EM> - Småbarn trenger stell.<BR><EM>En svensk lærer</EM> - en lærer som er fra Sverige<BR><EM>En svensklærer</EM> - en lærer som underviser svensk"
    ]
}
	},
	sv: {
		comp_right: new RegExp('((@R50[01])|(@(R|Y)-comp[^ ]*))( |$)'),
		to_upper: new RegExp('@R-LowerCase( |$)'),
		types: {
    "@R-LowerCase": [
        "Stor bokstav",
        "Man ska börja en mening med en stor bokstav."
    ],
    "@R-SPELL": [
        "Stavfel",
        "Det ser ut att vara ett stavfel. Kontrollera förslagen i så fall!"
    ],
    "@R-comp-AQ": [
        "Särskrivning",
        "Adjectiv och substantiv kan också bilda en sammansättning."
    ],
    "@R-comp-AQ-AF": [
        "Särskrivning",
        "Adjectiv och perfektparticip kan också bilda en sammansättning."
    ],
    "@R-comp-AQ-NC": [
        "Särskrivning",
        "Adjectiv och substantiv kan också bilda en sammansättning."
    ],
    "@R-comp-NC-NC": [
        "Särskrivning",
        "Dessa två substantiv bildar en sammansättning."
    ],
    "@R-comp-V-NC": [
        "Särskrivning",
        "Dessa två ord kan bilda en sammansättning."
    ],
    "@R11": [
        "Dem är alltid fel som bestämd artikel",
        "Bestämd artikel i plural är alltid <B>de</B>. <B>Dem</B> är objektform av det personliga pronominet i plural.<BR><BR><BR><EM>Jag skall se till och spara till ett par till boots då det är <B>de</B> skorna jag använder mest.</EM><BR><BR><B>Dem</B> kan aldrig stå som bestämd artikel eller subjekt."
    ],
    "@R31": [
        "Pronomenets subjektform",
        "Det personliga pronomenets subjektform kan aldrig vara <B>dem</B>. Det är inte vardagligt. Det är helt enkelt fel. Om man vill skriva vardagligt, är formen <B>dom</B> och om man vill skriva mer korrekt, är formen <B>de</B>.<BR><BR>Nästan alla uttalar <B>de</B> och <B>dem</B> som \"dom.\" Många vet att det finns en mer korrekt form av \"dom\", när man menar <B>dem</B>. Men <B>dem</B> kan bara användas som objektform av det personliga pronomenet, inte som bestämd artikel i plural och inte som subjektform.<BR><BR><EM>Oj så söta <B>de</B> är!</EM> (aldrig ... så söta <FEL>dem</FEL> är!)<BR><EM>Jag vet inte riktigt hur länge de håller, men ...</EM> (aldrig ... hur länge <FEL>dem</FEL> håller)"
    ],
    "@R500": [
        "Vartannat",
        "Det ska skrivas ihop, <B>vartannat</B>, inte isär."
    ],
    "@R501": [
        "Vartefter",
        "Det ska skrivas ihop, <B>vartefter</B>, inte isär."
    ],
    "@R550": [
        "Var inte vart",
        "Vart används oftast felaktigt. Det ska användas tillsammans med riktningsverb eller uttryck:<BR><BR><EM><B>Vart</B> är du på väg?</EM><BR><BR><B>Var</B> använder man med befintlighetsverb och verb som inte uttrycker en riktning.<BR><BR><EM><B>Var</B> bor du?</EM><BR><EM><B>Var</B> köpte du skorna?</EM>"
    ],
    "@R600": [
        "\"Var\" är korrekt form i kombination med befintlighetsverb.",
        "För att uttrycka befintlighet använder man ordet \"var\".<BR><BR><EM>Jag vet <B>var</B> du är någonstans.</EM><BR><BR> För att uttrycka riktning, dvs att man är på väg, använder man \"vart\".<BR><BR><EM>Jag vet <B>vart</B> du ska resa.</EM>"
    ],
    "@R710": [
        "\"Varit\" är den korrekta formen av \"vara\" i supinum.",
        "När man vill uttrycka sig i skrift med verbet \"vara\" i supinum efter \"ha\", \"har\" och \"hade\", är den rätta formen \"varit\".<BR><BR><EM>Han <B>har varit</B> sjuk länge nu. Hans mamma <B>hade varit</B> noga med medicineringen. Kan det <B>ha varit</B så att han fått fel diagnos?</EM>"
    ],
    "@Y-comp-V-NC": [
        "Sammansättning",
        "Dessa ord bildar ett sammansatt ord."
    ],
    "@Y10": [
        "\"De\" som bestämd artikel",
        "Bestämd artikel är alltid \"de\" i plural, både i subjekt och i objekt.<BR><BR><EM>De är bröder och de har gjort <B>de</B> allra bästa filmerna tillsammans.</EM>"
    ],
    "@Y20": [
        "Pronomenets objektform",
        "Objektform av pronomenet i plural är <B>dem</B>. Objektform av <B>jag</B> är <B>mig</B>, av <B>du</B> är det <B>dig</B>, av <B>hon</B> och <B>han</B> är det <B>henne</B> och <B>honom</B>. Objektform av <B>de</B> är <B>dem</B>. För det opersonliga pronomenen <B>det</B> och <B>den</B> använder vi <B>sig</B> som objektform. Formen <B>dom</B> istället för <B>dem</B> används ofta i vardagligt tal, men om man vill skriva mer korrekt, ska det vara <B>dem</B>.<BR><BR><EM>Jag har hjälpt mamma att tömma typ tre skåp på plastburkar och sorterat <B>dom -> dem</B> idag.</EM><BR></BR/><B>dem</B> är objekt till <B>sorterat</B>.<BR><BR>De allra flesta säger \"dom\", men när vi skriver, är det mer korrekt med <B>dem</B>."
    ],
    "@Y30": [
        "\"De\" är korrekt subjektform för personligt pronomen i 3:e person plural.",
        "I talspråk uttalar nästan alla orden \"de\" och \"dem\" som \"dom\" både i subjekt och i objekt. När man skriver, är den mer korrekta formen i subjekt \"de\" och i objekt \"dem\".<BR><BR> Vissa använder felaktigt objektformen \"dem\" i subjekt, vilket är helt fel. Man kan numera använda formen \"dom\" men aldrig \"dem\".<BR><BR><EM><B>De</B> är snygga. Jag gillar <B>dem</B></EM> Eller <EM>Dom är snygga. Jag gillar dom.</EM> men aldrig <EM><FEL>Dem</FEL> är snygga.</EM>"
    ],
    "@Y40": [
        "Dem i prepositionsfraser",
        "Pluralpronomenet <B>de</B> blir <B>dem</B> i prepositionsfraser.<BR></BR><EM>Här är iallafall en bild som jag knäppte på <B>dem</B> i somras.</EM><BR><EM>Vilken storlek har du på <B>dem</B>?</EM>"
    ],
    "@Y41": [
        "\"Utan\" kan vara preposition eller konjunktion",
        "<B>Preposition:</B> När ordet \"utan\" är en preposition, följs det av ordet \"dem\".<BR><BR><EM>Utan <B>dem</B> had jag inte klarat det.</EM><BR><BR><B>Konjunktion:</B> Om ordet \"utan\" däremot är en konjunktion, följs det av ordet \"de\".<BR><BR><EM>Böckerna är inte mina, utan de är lånade från biblioteket.</EM><BR><BR>Obs! när \"dom\" är objekt ska det skrivas \"dem\".<BR><BR><EM>Pengarna sparades inte, utan dem köpte han godis för.</EM>"
    ],
    "@Y42": [
        "\"Om\" kan vara preposition eller konjunktion",
        "<B>Preposition:</B> När \"om\" står som preposition, följer den böjda formen av \"de\", dvs. \"dem\".<BR><BR><EM>De svarta skorna är dyra och jag tycker inte om <B>dem</B>.<BR><BR><B>Konjunktion:</B> När \"om\" står som konjunktion, följer subjektformen av \"de\", dvs. \"de\".<BR><BR><EM>Jag köper de vita skorna, om <B>de</B> har ett par i min storlek."
    ],
    "@Y43": [
        "Till(s), preposition eller konjunktion",
        "Om \"dom\" följer en preposition skriver man oftast objektformen \"dem\". Ibland skriver man \"till\" när man menar \"tills\" som en konjunktion, \"till den tid då\". I sådana fall är efterföljande \"dom\" oftast subjekt och man ska skriva subjektformen \"de\".<BR><BR><B>Preposition</B>:<BR><EM>Flera har frågat om jag vill komma till dem och hälsa på.</EM><BR><EM>Varför ska jag betala in pengar till dem varje månad och sen inte ens få ett vettigt svar?</EM><BR><B>Konjunktion</B>:<BR><EM>Samtidigt hjälper ju dessa mig att hitta mitt mål i livet, vilket helt enkelt får bli att kämpa tills de krossas.</EM><BR>"
    ],
    "@Y44": [
        "\"För\" kan vara preposition eller konjunktion",
        "<B>Preposition:</B> När \"för\" står som preposition, följer \"dem\".<BR><BR><EM>Här finns det gott om plats för <B>dem</B>.<BR><BR><B>Konjunktion:</B> När \"för\" står som konjunktion och följs av \"dom\" i talspråk, är det oftast subjekt och ska skrivas \"de\".<BR><BR><EM>Det är synd, för <B>de</B> får inte plats här.</EM>"
    ],
    "@Y700": [
        "\"Vart\" är en ålderdomlig verbform",
        "\"Vart\" är preteritum av det äldre verbet \"varda\" och används knappt längre.<BR><BR><EM>Och Gud sade: \"Varde ljus; och det vart ljus.\"</EM> (Gammal bibelöversättning)<BR><BR> I vissa dialekter används \"vart\" som verb istället för \"blev\" i preteritum.<BR><BR><EM>Han vart sur</EM> skrivs på korrekt rikssvenska: <EM>Han <B>blev</B> sur.</EM>"
    ]
}
	},
};

function activate_markings(lang) {
	marking_types = types_lang[lang].types;
	types_comp_right = types_lang[lang].comp_right;
	types_to_upper = types_lang[lang].to_upper;

	if (lang === 'da') {
		types_mv = types_lang[lang].mv;
		types_red = types_lang[lang].red;
		types_yellow = types_lang[lang].yellow;

		let td = ['(@error)'];
		for (let k in types_yellow) {
			td.push('('+escapeRegExp(k)+')');
		}
		types_dictionary = new RegExp('('+td.join('|')+')( |$)');
	}
	else {
		g_conf.opt_mvNordic = false;
		types_mv = {};
		types_red = {};
		types_yellow = {};
		types_dictionary = new RegExp('@R-SPELL( |$)');
		for (let k in marking_types) {
			types_mv[k] = k;
			if (k.indexOf('@R') !== -1) {
				types_red[k] = k;
			}
			if (k.indexOf('@Y') !== -1) {
				types_yellow[k] = k;
			}
		}
	}
}
