/*!
 * Copyright 2016-2024 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Eckhard Bick <eckhard.bick@gmail.com>
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
 *
 * All rights reserved.
 * The explanatory texts in this file are NOT released under an open source license.
 */
'use strict';

g_marks.red = {
	"£error": "£error",
	"£comp-": "£comp-",
	"£-comp": "£-comp",
	"£comp-:-": "£comp-:-",
	"£comp": "£comp",
	"£x-etype-apostrophe": "£x-etype-apostrophe",
	"£apostrophe": "£apostrophe",
	"£no-apostrophe": "£no-apostrophe",
	"£x-etype-hyphen": "£x-etype-hyphen",
	"£hyphen-prefix": "£hyphen-prefix",
	"£hyphen-suffix": "£hyphen-suffix",
};

g_marks.yellow = {
	"£proper": "£proper",
	"£new": "£new",
	"£abbreviation": "£abbreviation",
	"£check!": "£check!",
};

g_marks.info = {};

g_marks.comp_right = new RegExp('£comp-( |$)');
g_marks.to_upper = new RegExp('£upper( |$)');
g_marks.to_lower = new RegExp('£lower( |$)');
g_marks.rx_ins = /(£insert|%ko|%k)( |-|$)/;
g_marks.rx_del = /(£nil|%nok|%ok|%nko)( |-|$)/;

g_marks.types_comma = [];
g_marks.types_grammar = [];

g_marks.types = {
	"£x-etype-list": [
		"£x-etype-list",
		"Stavefejl fundet ved listeopslag",
		"Som udgangspunkt er dette en fejlmarkering med meget pålidelige rettelsesforslag, fordi der her ikke er brug for lighedsalgoritmer og statistik. Men listen bruges også til at foreslå mulige alternativer for eksisterende ord, der kræver kontekstuel disambiguering, og her er der en lidt større risiko for forkerte forslag.",
		"... og <span style=\"color: #ff0000\">kikker</span> [kigger] ned på ham"
	],
	"£x-etype-joined": [
		"£x-etype-joined",
		"Manglende mellemrum",
		"For det meste er der bare tale om slåfejl, men en systematisk fejl er samskrivning af præposition (forholdsord) og styrelse, fx <i>idag (i dag), igår (i går), istedetfor (i stedet for).</i> Tidligere kunne man ikke sammenskrive et stedsadverbium (stedsbiord) med en efterfølgende (steds)præposition når denne havde en styrelse (fx <i>neden under bordet</i>), men dette er nu tilladt, så at der kan bruges samme form <i>(nedenunder bordet)</i> som i rent adverbial anvendelse <i>(hun sover nedenunder).</i> Kombinationer af stedsadverbium og andre præpositioner, også retnings-præpositioner, skal dog stadigvæk adskilles, fx <i>en lyd ude fra gaden</i> (Jf. uden styrelse: <i>indblanding udefra).</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i></i> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"Det har <span style=\"color: #ff0000\">undretmig</span> [undret=mig]<br>\n<br>\nAntallet er dalet fra 1788 anmeldelser <span style=\"color: #ff0000\">til1584</span> [til 1584]<br>\n<br>\n<span style=\"color: #ff0000\">idag</span> [i=dag]"
	],
	"£x-etype-sær": [
		"£x-etype-sær",
		"Manglende samskrivning",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser).</i> Sommetider er det meningsforstyrrende - fx er en <i>engelsklærer</i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer</i> (som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige,</i> men ikke i <i>verdens?rekord.</i> Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv</i> (ubestemt 'land') men <i>landets arkiv</i> (bestem form 'landet')<i>.</i> Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten).</i> Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i></i> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"Jf. <span style=\"color: #ff0000\">andet steds</span> [andetsteds] i bogen<br>\n<br>\n<span style=\"color: #ff0000\">i følge</span> [ifølge] den kontrakt"
	],
	"£x-etype-flex": [
		"£x-etype-flex",
		"Bøjningsfejl (genus, numerus, datid)",
		"Denne markering bruges når den tilsigtede bøjningsendelse er forkert, altså hvis man tager fejl af ordets grammatiske køn <i>(sanden</i> i.st.f. <i>sandet</i>), eller hvis man forveksler flertalsendelserne <i>-erne</i> og <i>-ene,</i> eller datidsendelserne <i>-ede</i> og <i>-te</i>. Fejltypen er mest almindelig hos indvandrere eller små børn, fordi bøjningsendelserne ikke følger meningsfulde regler, men skal læres sammen med det enkelte ord. Muligvis pga. den svage udtale af -r (flertal) og den klare udtale af -t (intetkøn) føles det værre at lave fejl mht. grammatisk køn (genus) end mht. flertalsbøjningen, så som udlænding er det en god idé at fokusere på forskellen -en/-et.<br>\n<br>\nEn mulig øvelse er VISL's <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/genus.html\">Gender Genie</a>. Du kan læse om specielle cases i artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-20-felleskon-eller-intetkon\">Fælleskøn eller intetkøn</a><i></i> på sproget.dk",
		"<span style=\"color: #ff0000\">bilene</span> [bilerne]"
	],
	"£x-etype-ellision": [
		"£x-etype-ellision",
		"Bøjningsfejl ved ord der ender i -el/-en/-er",
		"Substantiver (navneord) og adjektiver (tillægsord) kan miste e'et i sidste stavelse, når de bøjes. Dette gælder dog kun, når stavelsen er tryksvag (altså <i>handel,</i> men ikke fx <i>pedel</i>). Fænomenet er ret regelmæssigt for flertalsformer <i>(handel-handler, cykel-cykler, teater-teatre, ørken-ørkner, moden-modne, fager-fagre),</i> men det er ikke altid obligatorisk (fx <i>bæger-bægre/bægere)</i> og der er en vigtig undtagelse - personord i -er <i>(røver - røvere, dansker - danskere).</i><br>\n<br>\nBemærk at<i></i> dobbeltkonsonanter reduceres i tilfælde af e-bortfald foran <i>-el/-en/-er</i>, fx <i>gammel-gamle, sikker-sikre</i><br>\n<br>\nJf. også artiklerne <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-25-28-adjektiver/a7-25-adjektiver-pa-el-en-og-er\">Adjektiver på -el, -en og -er</a><i></i> og <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-23-substantiver-pa-el-en-og-er\">Substantiver på -el, -en og -er</a> på sproget.dk<br>\n<br>\nDesværre er det meget uregelmæssigt, om e'et droppes i substantivers bestemthedsbøjning. Således gælder reglen obligatorisk for <i>titel-titlen,</i> mens den ikke gælder for <i>minister-ministeren</i> og er valgfri for <i>handelen/handlen</i>. Nogle gange er den lange form forbudt men almindelig (&quot;uofficiel&quot;) , fx <i>cyklen/*cykelen.</i>",
		"<span style=\"color: #ff0000\">cykelen</span> [cyklen]<br>\n<br>\n<span style=\"color: #ff0000\">bødeler, bøddeler</span> [bødler]"
	],
	"£x-etype-um": [
		"£x-etype-um",
		"Forkert bøjning af ord der ender i -um",
		"Mange latinsk-afledte ord i -ium bøjes i bestemt form som -iet/ier, ikke regelmæssigt som -ummet/-ummer, fx <i>gymnasium-gymnasiet/gymnasier</i> (ikke <i>gymnasiummet/gymnasiummer</i>). -um-ord uden 'i' er mere tilbøjelige til at tillade -ummet/-ummer, men det er ikke en fast regel. Således bøjes <i>spektrum</i> kun <i>spektret/spektre,</i> mens <i>farvespektrum</i> er valgfrit <i>farvespektrummet/farvespektrummer</i> eller <i>farvespektret/farvespektre.</i><br>\n<br>\nEn særlig gruppe ord er kemiske stoffer på <i>-um,</i> der altid har <i>-ummet</i>, uanset om de ender på <i>-ium</i> eller ej, fx <i>aluminiummet</i> (ikke <i>alumuminiet)</i><br>\n<br>\nEndeligt kan det nævnes, at enkelte -um-ord har uregelmæssig, latinsk flertal: <i>annuum-annua, antibiotikum-antibiotika</i>",
		"<span style=\"color: #ff0000\">gymnasiummet</span> [gymnasiet]"
	],
	"£x-etype-gemination": [
		"£x-etype-gemination",
		"Bøjningsfejl vedr. bogstavfordobling (geminering)",
		"Geminering (konsonantfordobling) bruges i danske bøjningsformer til at bevare en kort vokallyd i ordrodens sidste stavelse. Fx hedder det <i>dal-dale</i> og <i>vinyl-vinylet</i> (med langt 'a/y'), men <i>hal-haller</i> og <i>idyl-idyller</i> (med kort 'a/y'). Åbne stavelser (uden slutkonsonant) har altid lang vokal <i>(hale-haler),</i> så man kan koncentrere sig om navneord der ender i konsonant.<br>\n<br>\nAldrig konsonantgeminering:<br>\n<br>\n* diftonger (fx <i>astronaut</i>)<br>\n<br>\n* stum konsonant og -g når det udtales svagt <i>(buffeten, fileter, flig, brug)</i><br>\n<br>\n* tryksvag -el, en, -er<br>\n<br>\n* -ur, -j, -v, n udtalt som 'ng'<br>\n<br>\n* -on (dog enkelte gemineringer af <i>-ton</i>)<br>\n<br>\nAltid konsonantgeminering:<br>\n<br>\n* efter trykstærk kort vokal<br>\n<br>\n* -æg, -læg, -væg (selvom vokalen er lang)<br>\n<br>\n* k,m,p,s,t og hårdt g efter kort vokal med bitryk i flerstavelsesord <i>(sennep, bryllup, hotdog, politik, møtrik)</i><br>\n<br>\n* -kar/-par <i>(</i>fx <i>parret),</i> dog ikke <i>vikar, bibliotekar</i><br>\n<br>\nSpeciel vanskelige er ord, der ender på -ud. De fleste har geminering, især dem på <i>-bud</i> og -<i>skud,</i> men der findes også langt 'u', fx i <i>hud-huden</i> og <i>klud-kluden.</i> Bemærk også forskellen mellem <i>bruddet</i> og <i>bruden.</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-7-10\">Dobbeltskrivning eller enkeltskrivning</a><i></i> på sproget.dk",
		"<span style=\"color: #ff0000\">postbudet</span> [postbuddet]<br>\n<br>\n<span style=\"color: #ff0000\">postbudde</span> [postbude]"
	],
	"£x-etype-apostrophe": [
		"£x-etype-apostrophe",
		"Manglende apostrof",
		"Hovedanvendelsen af apostrof i dansk er i forbindelse med bøjning af forkortelser, tal og symboler <i>(pc'en, USA's, sms'erne, 1960'erne, linje 5's endestation, de flade a'er).</i> Undtagelsen er forkortelser med punktum, fx <i>cand.mag.erne,</i> og tunge suffikser, hvor der bruges bindestreg: <i>SMS-agtig.</i><br>\n<br>\nApostrof bruges også til at markere genitiv efter <i>s, z</i> eller <i>x,</i> og mellem <i>ee</i> og <i>e-</i>endelser (fx <i>frisbee'en</i>). Apostrof bruges til gengæld ikke ved almindelig genitiv-s, heller ikke efter udenlandske navne <i>(Clintons,</i> ikke <i>Clinton's</i>), og det er valgfrit ved forkortelser, der kan udtales som almindelige ord <i>(NATOs / NATO's).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-6-apostrof/?exact_terms=apostrof\">Apostrof</a><i></i> på sproget.dk",
		"<span style=\"color: #ff0000\">cden</span> [cd'en]"
	],
	"£x-etype-hyphen": [
		"£x-etype-hyphen",
		"Overflødig eller manglende bindestreg inde i ordet",
		"Bindestreg bruges i slutningen af ordet til at markere udeladte fælles orddele <i>(hjerte- og lungesygdomme),</i> og inde i ordet når forkortelser eller tal forbindes sammensættes med almindelige ord eller tunge suffikser <i>(KODA-afgift, wc-papir, 1800-tallet, 6-kantet, 2.-pladsen, pvc-holdig, SMS-agtig).</i><br>\n<br>\nBindestregen bortfalder hvis tallene skrives ud <i>(sekskantet, andenpladsen)</i> og er valgfrit efter forkortelser der kan udtales som almindelige ord <i>(NATO-øvelse / Nato-øvelse / Natoøvelse).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-40-60/a7-57-bindestreg/?exact_terms=bindestreg\">Bindestreg</a><i></i> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#f\">test-øvelserne</a> om emnet.",
		"<span style=\"color: #ff0000\">dan-skere</span> [danskere]<br>\n<br>\n<span style=\"color: #ff0000\">fem-måneders</span> [femmåneders}<br>\n<br>\n<span style=\"color: #ff0000\">15måneders</span> [15-måneders]"
	],
	"£x-etype-case": [
		"£x-etype-case",
		"Majuskel-/minuskel-fejl",
		"Fejlen går ud på om ordet staves med stort eller med småt. Der bruges bl.a. <b>startmajuskel</b>, altså stort begyndelsesbogstav i starten af en tekst eller helsætning, dvs. efter sætningspunktum og udråbstegn (efter kolon dog kun når der følger en helsætning). Majuskel er valgfrit i punktopstillinger<br>\n<br>\n<b>Proprier</b> (egennavne) staves som udgangspunkt med stort, uanset om der er tale om mennesker, dyr, lande, skibe, organisationer etc. fx <i>Anne, Moderniseringsstyrelsen</i>. I flerleddede navne er første ord med stort, samt betydningsfulde ord inde i navnet (fx <i>Gorm den Gamle</i>). Almindelige benævnelser på dyr, planter, mad og drikke staves dog med småt - her er det ikke individet der er navngivet: <i>zebra, coxorange, gouda, bellis.</i><br>\n<br>\nSystematiske biologiske navne har 1. del med stort og 2. del med småt, fx <i>Rubus chamaemorus</i> (multebær), <i>Haliaeetus albicilla</i> (havørn). Når navne bruges i sammenskrivninger, der ikke selv er navne, er brugen af majuskel valgfrit, fx <i>Nobelpristager - nobelpristager. A</i>fledninger af proprier er dog altid med småt: <i>molbo, marxisme, pasteurisere.</i><br>\n<br>\nMajuskel bruges også i nogle <b>tiltaleformer</b>, herunder pronominer <i>(De, I, Dem, Deres,</i> men ikke afledte former <i>din, jeres</i> etc.) og såkaldte titulaturer der begynder med et ejestedord <i>(Hendes Majestæt, Deres Excellence).</i> Andre tiltaleformer (titler og erhvervbetegnelser) skrives med småt: <i>direktør Jensen, pastor Nielsen, psykolog Malene Iversen, onkel Mads.</i><br>\n<br>\n<b>Forkortelser</b> med punktum staves næsten altid med småt. Såkaldte initialforkortelser (dannet af begyndelsesbogstaver af et flerledsnavn) staves som udgangspunkt med stort <i>(FN, DMI, DSB),</i> men <i>kan</i> skrives med småt hvis de udtales som almindelige ord <i>(NATO/Nato, UNESCO/Unesco).</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-11-14\">majuskelregler</a> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#s\">test-øvelserne</a> vedr. emnet",
		"I <span style=\"color: #ff0000\">odense</span> [Odense], en <span style=\"color: #ff0000\">fiat</span> [Fiat]"
	],
	"£error": [
		"£error",
		"Almindelig stavefejl med rettelsesforslag<br>\n<br>\n(a) fundet ved grafisk/fonetisk sammenligning med godkendte ordbogsformer<br>\n<br>\n(b) systematisk afledt igennem morfologisk og kompositumsanalyse",
		"Almindelig stavefejl med rettelsesforslag<br>\n<br>\n(a) fundet ved grafisk/fonetisk sammenligning med godkendte ordbogsformer<br>\n<br>\n(b) systematisk afledt igennem morfologisk og kompositumsanalyse",
		"<span style=\"color: #ff0000\">gymnasiummet</span> [gymnasiet]<br>\n<br>\n<span style=\"color: #ff0000\">fornemste</span> [fornemmeste]<br>\n<br>\n<span style=\"color: #ff0000\">uintereseret</span> [uinteresseret]<br>\n<br>\n<span style=\"color: #ff0000\">økomisk</span> [økonomisk]<br>\n<br>\n(NOT ø+komisk)"
	],
	"£check!": [
		"£check!",
		"Kunne være forkert, men mangler korrekturforslag",
		"Ordformen er ikke i RetMigs leksikon, og analysemaskinen kunne ikke finde en sikker analyse heller, hverken som bøjningsform eller sammensat ord",
		"<span style=\"color: #ff0000\">serv-serv</span> specialister<br>\n<br>\n<span style=\"color: #ff0000\">/ritzau/</span><br>\n<br>\nDøgntlf.-tid<br>\n<br>\nAnno<span style=\"color: #ff0000\"> dazumal</span>"
	],
	"£:...": [
		"£:...",
		"Korrekturforslag ud fra konteksten, for et ellers eksisterende ord",
		"Denne fejltype dækker ikke kun stavefejl, men også forkerte ordvalg",
		"(a) <span style=\"color: #ff0000\">esdragon</span> [estragon]<br>\n<br>\n(b) Ud <span style=\"color: #ff0000\">og</span> [at] se<br>\n<br>\nUde <span style=\"color: #ff0000\">af</span> [at] rejse"
	],
	"£comp-": [
		"£comp-",
		"Særskrivningsfejl: Ordet burde sammenskrives med det efterfølgende ord",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser).</i> Sommetider er det meningsforstyrrende - fx er en <i>engelsklærer</i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer</i> (som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige,</i> men ikke i <i>verdens?rekord.</i> Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv</i> (ubestemt 'land') men <i>landets arkiv</i> (bestem form 'landet')<i>.</i> Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten).</i> Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i></i> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"<span style=\"color: #ff0000\">banegårds</span> center [banegårdscenter]"
	],
	"£comp-:-": [
		"£comp-:-",
		"Særskrivningsfejl: Ordet burde sammenskrives med det efterfølgende ord, men med bindestreg",
		"Jf. @x-etype-hyphen",
		"<span style=\"color: #ff0000\">FN</span> resolutioner [FN-resolutioner]"
	],
	"£-comp": [
		"£-comp",
		"Særskrivningsfejl: Ordet burde sammenskrives med det forudgående ord",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser).</i> Sommetider er det meningsforstyrrende - fx er en <i>engelsklærer</i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer</i> (som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige,</i> men ikke i <i>verdens?rekord.</i> Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv</i> (ubestemt 'land') men <i>landets arkiv</i> (bestem form 'landet')<i>.</i> Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten).</i> Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i></i> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"Fodbold <span style=\"color: #ff0000\">spiller</span> [fodboldspiller]"
	],
	"£comp": [
		"£comp",
		"Særskrivningsfejl: Ordet burde sammenskrives (de to dele er markeret sammen, med '=' i.st.f. mellemrum)",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser).</i> Sommetider er det meningsforstyrrende - fx er en <i>engelsklærer</i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer</i> (som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige,</i> men ikke i <i>verdens?rekord.</i> Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv</i> (ubestemt 'land') men <i>landets arkiv</i> (bestem form 'landet')<i>.</i> Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten).</i> Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i></i> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"<span style=\"color: #ff0000\">hard core</span> [hardcore] forældre<br>\n<br>\nJf. <span style=\"color: #ff0000\">andet steds</span> [andetsteds] i bogen<br>\n<br>\n<span style=\"color: #ff0000\">siden hen</span> [sidenhen]"
	],
	"£new": [
		"£new",
		"Nyt ord: ikke fundet i ordbogen, og ikke en godkendt sammensætning, men sandsynligvis ok.",
		"Analysemaskinen har fundet en mulig analyse for ordet, som en kæde af præfikser, ordstammer og suffikser, eller også matcher ordet et mønster for engelske låneord e.l. Men der kan være tale om en fejlstavning, der bare tilfældigt matcher teoretisk tilladte mønstre eller sammensætninger. Mindre sikker end godkendte sammensætninger, men mere sikker end ord helt uden mulig analyse.",
		"<span style=\"color: #ff0000\">gulblusede</span> &lt;ADJ:gul+bluset&gt; &lt;compound&gt; ADJ nG P nD<br>\n<br>\nNOM <i>@new</i>"
	],
	"£green": [
		"£green",
		"Fejlmarkeret ord, der dog eksisterer som sådan, og <i>kunne</i> være korrekt, inkluderer &lt;cave-correct&gt; and &lt;frequent&gt;",
		"Bruges også til stavealternativer, der er almindelige men uofficielle",
		"En lyd <span style=\"color: #ff0000\">udefra</span> [ude fra] <i>@green</i> gaden<br>\n<br>\nI <span style=\"color: #ff0000\">her</span> [har] <i>@green</i> en skid at sige"
	],
	"£proper": [
		"£proper",
		"Ukendt proprium (egennavn), der ikke findes i RetMigs leksikon, men godkendes morfologisk og kontekstuelt",
		"De allerfleste navne vil falde i denne kategori, og ikke betragtes som &quot;ukendt&quot; (og derfor forkerte). Til gengæld vil systemet meget sjældent prøve at rette stavefejl i et navn - fordi der jo bare kunne være tale om et andet navn (fx <i>Nielsen, Nilsen, Nilsson, Nilson)</i>",
		"Tidligere LO-formand<br>\n<br>\n<span style=\"color: #ff0000\">Stig=Malm</span> &lt;dg-fused&gt; &lt;exheur&gt; &lt;hum&gt; PR OP NOM <i>@proper</i>"
	],
	"£abbreviation": [
		"£abbreviation",
		"Ukendt forkortelse, der ikke findes i RetMigs leksikon, men godkendes ud fra almindelige forkortelsesmønstre og konteksten",
		"Pga. den udbredte og produktive brug af forkortelser i mange faggenrer, er systemet indstillet til at acceptere de fleste forkortelser, snarere end at prøve at rette de ukendte forkortelser som varianter af kendte forkortelser",
		"Se kap. 5<br>\n<br>\n<span style=\"color: #ff0000\">kap.</span> &lt;heur&gt; N UTR S IDF NOM<i>@abbreviation</i>"
	],
	"£hyphen-prefix": [
		"£hyphen-prefix",
		"Manglende bindestreg efter præfiks, i sideordning",
		"Det markerede ord skal have tilføjet en bindestreg til højre. Der er tale om en sideordning, hvor det første konjunkt &quot;deler&quot; 2. led med det andet konjunkt, men erstatter det delte led med en bindestreg, fx <i>sommer- og vintersolhverv (sommersolhverv og vintersolhverv).</i>",
		"<span style=\"color: #ff0000\">første</span> og andenstemme [første- og ...]"
	],
	"£hyphen-suffix": [
		"£hyphen-suffix",
		"Manglende bindestreg før suffiks, i sideordning",
		"Det markerede ord skal have tilføjet en bindestreg til venstre. Der er tale om en sideordning, hvor det andet konjunkt &quot;deler&quot; 1. led med det første konjunkt, men erstatter det delte led med en bindestreg, fx <i>aluminiumsgryder og -pander (aluminiumsgryder og aluminiumspander).</i>",
		"Hofdamer og <span style=\"color: #ff0000\">herrer</span> [... og -herrer]"
	],
	"£apostrophe": [
		"£apostrophe",
		"Manglende apostrof",
		"Hovedanvendelsen af apostrof i dansk er i forbindelse med bøjning af forkortelser, tal og symboler <i>(pc'en, USA's, sms'erne, 1960'erne, linje 5's endestation, de flade a'er).</i> Undtagelsen er forkortelser med punktum, fx <i>cand.mag.erne,</i> og tunge suffikser, hvor der bruges bindestreg: <i>SMS-agtig.</i><br>\n<br>\nApostrof bruges også til at markere genitiv efter <i>s, z</i> eller <i>x,</i> og mellem <i>ee</i> og <i>e-</i>endelser (fx <i>frisbee'en</i>). Apostrof bruges til gengæld ikke ved almindelig genitiv-s, heller ikke efter udenlandske navne <i>(Clintons,</i> ikke <i>Clinton's</i>), og det er valgfrit ved forkortelser, der kan udtales som almindelige ord <i>(NATOs / NATO's).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-6-apostrof/?exact_terms=apostrof\">Apostrof</a><i></i> på sproget.dk",
		"<span style=\"color: #ff0000\">90erne</span> [90'erne]"
	],
	"£no-apostrophe": [
		"£no-apostrophe",
		"Overflødig apostrof",
		"Hovedanvendelsen af apostrof i dansk er i forbindelse med bøjning af forkortelser, tal og symboler <i>(pc'en, USA's, sms'erne, 1960'erne, linje 5's endestation, de flade a'er).</i> Undtagelsen er forkortelser med punktum, fx <i>cand.mag.erne,</i> og tunge suffikser, hvor der bruges bindestreg: <i>SMS-agtig.</i><br>\n<br>\nApostrof bruges også til at markere genitiv efter <i>s, z</i> eller <i>x,</i> og mellem <i>ee</i> og <i>e-</i>endelser (fx <i>frisbee'en</i>). Apostrof bruges til gengæld ikke ved almindelig genitiv-s, heller ikke efter udenlandske navne <i>(Clintons,</i> ikke <i>Clinton's</i>), og det er valgfrit ved forkortelser, der kan udtales som almindelige ord <i>(NATOs / NATO's).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-6-apostrof/?exact_terms=apostrof\">Apostrof</a><i></i> på sproget.dk",
		"<span style=\"color: #ff0000\">Obama's</span> [Obamas] tale"
	],
	"£upper": [
		"£upper",
		"Første bogstav burde være med stort",
		"Fejlen går ud på om ordet staves med stort eller med småt. Der bruges bl.a. <b>startmajuskel</b>, altså stort begyndelsesbogstav i starten af en tekst eller helsætning, dvs. efter sætningspunktum og udråbstegn (efter kolon dog kun når der følger en helsætning). Majuskel er valgfrit i punktopstillinger<br>\n<br>\n<b>Proprier</b> (egennavne) staves som udgangspunkt med stort, uanset om der er tale om mennesker, dyr, lande, skibe, organisationer etc. fx <i>Anne, Moderniseringsstyrelsen</i>. I flerleddede navne er første ord med stort, samt betydningsfulde ord inde i navnet (fx <i>Gorm den Gamle</i>). Almindelige benævnelser på dyr, planter, mad og drikke staves dog med småt - her er det ikke individet der er navngivet: <i>zebra, coxorange, gouda, bellis.</i><br>\n<br>\nSystematiske biologiske navne har 1. del med stort og 2. del med småt, fx <i>Rubus chamaemorus</i> (multebær), <i>Haliaeetus albicilla</i> (havørn). Når navne bruges i sammenskrivninger, der ikke selv er navne, er brugen af majuskel valgfrit, fx <i>Nobelpristager - nobelpristager. A</i>fledninger af proprier er dog altid med småt: <i>molbo, marxisme, pasteurisere.</i><br>\n<br>\nMajuskel bruges også i nogle <b>tiltaleformer</b>, herunder pronominer <i>(De, I, Dem, Deres,</i> men ikke afledte former <i>din, jeres</i> etc.) og såkaldte titulaturer der begynder med et ejestedord <i>(Hendes Majestæt, Deres Excellence).</i> Andre tiltaleformer (titler og erhvervbetegnelser) skrives med småt: <i>direktør Jensen, pastor Nielsen, psykolog Malene Iversen, onkel Mads.</i><br>\n<br>\n<b>Forkortelser</b> med punktum staves næsten altid med småt. Såkaldte initialforkortelser (dannet af begyndelsesbogstaver af et flerledsnavn) staves som udgangspunkt med stort <i>(FN, DMI, DSB),</i> men <i>kan</i> skrives med småt hvis de udtales som almindelige ord <i>(NATO/Nato, UNESCO/Unesco).</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-11-14\">majuskelregler</a> på sproget.dk, samt <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#s\">test-øvelserne</a> vedr. emnet",
		"<span style=\"color: #ff0000\">han</span> er i <span style=\"color: #ff0000\">alaska</span> [Han ...]"
	],
	"£lower": [
		"£lower",
		"Første bogstav burde være med småt",
		"Brug af stort begyndelsesbogstav er ofte ikke en fejl, men en bevidst fremhævelse af indholdsord, fx i overskrifter, titler eller encyklopædiske tekster (fx Wikipedia). Det kan derfor være en idé at slå fejltypen fra i &quot;indstillinger&quot;.<br>\n<br>\nJf. @x-etype-case",
		"Hun blev bidt af en <span style=\"color: #ff0000\">Løve</span> [... af en løve]"
	],
	"£question": [
		"£question",
		"Manglende spørgsmålstegn (markeres på verbet)",
		"Manglende spørgsmålstegn (markeres på verbet)",
		"Hvad <span style=\"color: #ff0000\">har</span> du set [Hvad har du set?]"
	],
	"£neu": [
		"£neu",
		"Genusfejl: intetkøn",
		"Ordet burde være bøjet i intetkøn i.st.f. fælleskøn. I substantiver (navneord) er genus (grammatisk køn) synligt i bestemt form ental. Endelserne er <i>-en</i> for fælleskøn, og <i>-et</i> for intetkøn <i>(hund-hunden, træ-træet).</i> I adjektiver (tillægsord) er intetkønsendelsen <i>-t,</i> og genus er synligt i netop de ubestemte nominalfraser <i>(en stor hund, et stort træ).</i> Ud over substantiver og adjektiver ses genusmarkering i artikler (kendeord) i ental (<i>en-et, den-det)</i> samt i visse adjektiviske stedord <i>(denne-dette, nogen-noget, megen-meget, al-alt, ingen-intet).</i><br>\n<br>\nJf. også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-20-felleskon-eller-intetkon\">Fælleskøn eller intetkøn</a><i></i> på sproget.dk<br>\n<br>\nDu kan øve substantivers genus med VISL's <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/genus.html\">Gender Genie</a>.<br>\n<br>\nBemærk dog, at mange adjektiver ikke bøjes i intetkøn. Dette gælder adjektiver der ender på<br>\n<br>\nTrykstærk vokal <i>(snu, tro),</i> med undtagelse af -å, -y og fri <i>(råt, nyt, frit)</i><br>\n<br>\n<i>-sk (økonomisk, automatisk, jysk, synsk).</i> Det er dog valgfrit at tilføje <i>-t</i> i enstavelses-adjektiver og deres sammensætninger, når de ikke er afledt af navne: <i>frisk(t), uhumsk(t)</i><br>\n<br>\nDesuden er <i>-t</i> valgfrit ved adjektiver på <i>-vis</i>, fx<i> delvis(t)</i><br>\n<br>\nJf. også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-25-28-adjektiver\">Bøjningsforhold - Adjektiver</a><i></i> på sproget.dk<br>\n<br>\nNormalt er der genuskongruens i en nominalfrase, dvs. at alle bestemmende ord til venstre for substantivet følger dettes grammatiske køn, altså <i>e</i><b><i>t</i></b><i> stor</i><b><i>t</i> </b><i>træ,</i> ikke <i>et stor? træ.</i> Undtagelsen er når genus bruges til at markere tællelighed - her bruges mængdestedord og påpegende stedord i intetkøn for at markere mængder, uanset substantivets køn, fx <i>har du nog</i><b><i>et</i></b><i> mælk? - De</i><b><i>t</i> </b><i>mælk er ikke godt mere.</i> Omvendt kan fælleskøn sommetider bruges til at markere tællelighed: <i>Øllen gik i stykker (dvs. flasken med øllet).</i>",
		"<span style=\"color: #ff0000\">den</span> [det] røde hus ved <span style=\"color: #ff0000\">vanden</span> [vandet]"
	],
	"£neu-sc": [
		"£neu-sc",
		"Genusfejl i subjektsprædikativ: intetkøn",
		"Der er genuskongruens (overensstemmelse i køn) mellem substantiv (navneord) og adjektiv (tillægsord) også, når adjektivet har en selvstændig plads i sætningen som prædikativ (omsagnsled). Så når substantivet er intetkøn, skal adjektivet også være det, og når substantivet er fælleskøn, skal adjektivet også være i fælleskøn. Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet (grundleddet): <i>hund</i><b><i>en</i></b><i> er</i> <b><i>stor</i></b><i>, træ</i><b><i>et</i></b><i> er</i> <b><i>stort</i></b><i>.</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(hunden = stor, træet = stort).</i> De mest typiske verber er <i>være</i> og <i>blive,</i> men tilstandsændringsverber kan også gøre det: <i>hun vågnede glad og munter - barnet vågnede gladt og muntert.</i><br>\n<br>\nUd over subjektsprædikativer findes der også objektsprædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, fx <i>hun maler hus</i><b><i>et</i> </b><i>rø</i><b><i>dt</i> </b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i></i> (intetkøn vs. fælleskøn), eller <i>hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i></i> (flertal).<br>\n<br>\nDu kan finde forklaringer og øvelser om prædikativer i afsnittet <a target=\"_blank\" href=\"https://visl.sdu.dk/urkas/urkas_intro4.html\">Prædikativer</a><i></i> i VISL's Grammy-system om Almen Sprogforståelse.",
		"Huset er <span style=\"color: #ff0000\">rød</span> [rødt]"
	],
	"£utr": [
		"£utr",
		"Genusfejl: fælleskøn",
		"Ordet burde være bøjet i fælleskøn i.st.f. intetkøn. I substantiver (navneord) er genus (grammatisk køn) synligt i bestemt form ental. Endelserne er <i>-en</i> for fælleskøn, og <i>-et</i> for intetkøn <i>(hund-hunden, træ-træet).</i> I adjektiver (tillægsord) er intetkønsendelsen <i>-t,</i> og genus er synligt i netop de ubestemte nominalfraser <i>(en stor hund, et stort træ).</i> Ud over substantiver og adjektiver ses genusmarkering i artikler (kendeord) i ental (<i>en-et, den-det)</i> samt i visse adjektiviske stedord <i>(denne-dette, nogen-noget, megen-meget, al-alt, ingen-intet).</i><br>\n<br>\nJf. også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-20-felleskon-eller-intetkon\">Fælleskøn eller intetkøn</a><i></i> på sproget.dk<br>\n<br>\nDu kan øve substantivers genus med VISL's <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/genus.html\">Gender Genie</a>.",
		"<span style=\"color: #ff0000\">det</span> [den] gamle hest i <span style=\"color: #ff0000\">staldet</span> [stalden]"
	],
	"£utr-sc": [
		"£utr-sc",
		"Genusfejl i subjektsprædikativ: fælleskøn",
		"Der er genuskongruens (overensstemmelse i køn) mellem substantiv (navneord) og adjektiv (tillægsord) også, når adjektivet har en selvstændig plads i sætningen som prædikativ (omsagnsled). Så når substantivet er intetkøn, skal adjektivet også være det, og når substantivet er fælleskøn, skal adjektivet også være i fælleskøn. Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet (grundleddet): <i>hund</i><b><i>en</i></b><i> er</i> <b><i>stor</i></b><i>, træ</i><b><i>et</i></b><i> er</i> <b><i>stort</i></b><i>.</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(hunden = stor, træet = stort).</i> De mest typiske verber er <i>være</i> og <i>blive,</i> men tilstandsændringsverber kan også gøre det: <i>hun vågnede glad og munter - barnet vågnede gladt og muntert.</i><br>\n<br>\nUd over subjektsprædikativer findes der også objektsprædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, fx <i>hun maler hus</i><b><i>et</i> </b><i>rø</i><b><i>dt</i> </b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i></i> (intetkøn vs. fælleskøn), eller <i>hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i></i> (flertal).<br>\n<br>\nDu kan finde forklaringer og øvelser om prædikativer i afsnittet <a target=\"_blank\" href=\"https://visl.sdu.dk/urkas/urkas_intro4.html\">Prædikativer</a><i></i> i VISL's Grammy-system om Almen Sprogforståelse.",
		"Hesten er <span style=\"color: #ff0000\">gammelt</span> [gammel]"
	],
	"£pl": [
		"£pl",
		"Numerusfejl: pluralis",
		"Du har brugt ental (singularis), hvor der skulle have været flertal (pluralis). Programmet mener dette, fordi der er uoverensstemmelse i numerus (tal) mellem et substantiv (navneord) og et afhængigt, bestemmende ord (adjektiv, pronomen eller artikel). Men når to ord ikke passer sammen, kan det også være det andet ord som det er galt med, så hvis du er uenig, burde du tjekke det andet ord i stedet. Fx kan <i> gammel heste</i> (med adjektivet i ental og substantivet i flertal)<i></i> rettes til enten <i>gammel hest (ental),</i> eller <i>gamle heste (flertal).</i><br>\n<br>\nFlertalsendelsen afhænger af det enkelte ord, men for adjektiver (tillægsord) er det altid <i>-e.</i> For substantiver kan det være <i>-er, -e</i> eller ingenting. <i>-er</i> er den mest almindelige form for fælleskøn-substantiver. Engelske låneord har som udgangspunkt ingen flertalsendelse, men beholder dog ofte det engelske <i>-s</i> (fx <i>hotdogs</i>)<i>,</i> og kan ende med at få <i>-er</i> (fx <i>policyer</i>) eller <i>-e</i> (fx <i>printere</i>)<i>,</i> når de er blevet en fast bestanddel af det danske sprog.<br>\n<br>\nDu kan læse mere om pluralis-former af fremmedord på <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-22-substantiver-med-fremmede-pluralisendelser\">sproget.dk</a>.<br>\n<br>\nMan danner bestemt form af et flertals-substantiv ved at tilføje <i>-ne</i> (efter <i>-er</i> og <i>-e</i>) eller <i>-ene</i> (når endelsen er igenting eller <i>-s</i>). Altså <i>bil-er-ne, hest-e-ne, hus-ene, hotdogs-ene.</i> En undtagelse er substantiver på <i>-er,</i> der dropper flertals-e i bestemt form, fx <i>lærer-lærere-lærerne.</i><br>\n<br>\nNår der tilføjes endelser til et ord, kan lukkede stavelser (med konsonant til sidst) blive til åbne stavelser (med vokal til sidst), fx er <i>hus</i> &quot;lukket&quot; af et 's', mens 'hu' i <i>husene</i> er &quot;åben&quot; (ender på vokal), fordi ordet udtales <i>hu-se-ne.</i> Og fordi vokaler udtales langt i åbne stavelser, skal korte vokaler fra lukkede stavelser beskyttes, når man bøjer et ord. Dette gøres ved at indføje en ekstra &quot;lukningskonsonant&quot; - idet man fordobler (geminerer) udlydskonsonanten. Dette sker ved <i>kat,</i> hvor a'et udtales kort (i modsætning til 'u' i <i>hus),</i> så der er dobbelt-t i de bøjede former: <i>katten, katte, kattene.</i><br>\n<br>\nDu kan læse mere om konsonantfordobling i artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-7-10/a7-8-10-konsonanter/a7-10-konsonanter-i-bojningsformer\">Konsonanter i bøjningsformer</a><i></i> på sproget.dk<br>\n<br>\nMulige øvelser er <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/r-problemer/r-problemer/examfolder.2007-07-18.1468473501\">R-problemer - substantiver</a><i></i> og <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#e\">Bøjning - substantiver</a><i></i> på sproget.dk samt VISL's grammatikspil <a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i></i> eller indsætningsøvelsen <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i> .</i>",
		"Mange <span style=\"color: #ff0000\">hest</span> [heste]"
	],
	"£pl-sc": [
		"£pl-sc",
		"Numerusfejl i subjektsprædikativ: pluralis",
		"Der er numeruskongruens (overensstemmelse i tal) mellem substantiv (navneord) og adjektiv (tillægsord) også, når adjektivet har en selvstændig plads i sætningen som prædikativ (omsagnsled). Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet (grundleddet): <i>træ</i><b><i>et</i></b><i> er</i> <b><i>stort</i></b><i>, træ</i><b><i>erne</i></b><i> er stor</i><b><i>e</i></b><i>.</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(træerne = store).</i> De mest typiske verber er <i>være</i> og <i>blive,</i> men tilstandsændringsverber kan også gøre det: <i>Hun vågnede glad og munter - De vågnede glade og muntre.</i><br>\n<br>\nUd over subjektsprædikativer findes der også objektsprædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, <i>fx hun maler hus</i><b><i>et</i> </b><i>rø</i><b><i>dt</i> </b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i></i> (intetkøn vs. fælleskøn), eller<i> hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i></i> (flertal).<br>\n<br>\nDu kan læse mere om <a target=\"_blank\" href=\"https://visl.sdu.dk/urkas/urkas_intro4.html\">prædikativer</a><i></i> i VISL's Grammy-kursus om Almen Sprogforståelse.",
		"Hestene er <span style=\"color: #ff0000\">gammel</span> [gamle]"
	],
	"£sg": [
		"£sg",
		"Numerusfejl: singularis",
		"Du har brugt flertal (pluralis), hvor der skulle have været ental (singularis). Programmet mener dette, fordi der er uoverensstemmelse i numerus (tal) mellem et substantiv (navneord) og et afhængigt, bestemmende ord (adjektiv, pronomen eller artikel). Men når to ord ikke passer sammen, kan det også være det andet ord som det er galt med, så hvis du er uenig, burde du tjekke det andet ord i stedet. Fx kan <i> gammel heste</i> (med adjektivet i ental og substantivet i flertal)<i></i> rettes til enten <i>gammel hest (ental),</i> eller <i>gamle heste (flertal).</i><br>\n<br>\n<i>Mulige øvelser er VISL's grammatikspil</i> <i><a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a></i><i></i> eller indsætningsøvelsen <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i> .</i>",
		"En ung <span style=\"color: #ff0000\">lærere</span> [lærer]"
	],
	"£sg-sc": [
		"£sg-sc",
		"Numerusfejl i subjektsprædikativ: singularis",
		"Der er numeruskongruens (overensstemmelse i tal) mellem substantiv (navneord) og adjektiv (tillægsord) også, når adjektivet har en selvstændig plads i sætningen som prædikativ (omsagnsled). Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet (grundleddet): <i>træ</i><b><i>et</i></b><i> er</i> <b><i>stort</i></b><i>, træ</i><b><i>erne</i></b><i> er stor</i><b><i>e</i></b><i>.</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(træerne = store).</i> De mest typiske verber er <i>være</i> og <i>blive,</i> men tilstandsændringsverber kan også gøre det: <i>Hun vågnede glad og munter - De vågnede glade og muntre.</i><br>\n<br>\nUd over subjektsprædikativer findes der også objektsprædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, <i>fx hun maler hus</i><b><i>et</i> </b><i>rø</i><b><i>dt</i> </b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i></i> (intetkøn vs. fælleskøn), eller<i> hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i></i> (flertal).<br>\n<br>\nDu kan læse mere om <a target=\"_blank\" href=\"https://visl.sdu.dk/urkas/urkas_intro4.html\">prædikativer</a><i></i> i VISL's Grammy-kursus om Almen Sprogforståelse.",
		"Huset er <span style=\"color: #ff0000\">store</span> [stort]"
	],
	"£idf": [
		"£idf",
		"Bestemthedsfejl: ubestemt (indefinit)",
		"Du har brugt en definit (bestemt) bøjning i stedet for en indefinit (ubestemt) bøjning.<br>\n<br>\nBestemthed er en egenskab af substantiver (navneord) og de ord der lægger sig til dem: adjektiver (tillægsord), artikler (kendeord) og visse pronominer (stedord), samt - indirekte - af en sådan ordgruppe (et substantivsyntagme) som helhed. &quot;Definit&quot; betyder at det er én bestemt person eller ét bestemt objekt, man har i tanker, men indefinit betyder, at man ikke tænker på én bestemt referent, men mere på betydningen i almen forstand.<br>\n<br>\nPå substantivet selv markeres bestemthed med endelserne <i>-en</i> (fælleskøn)<i></i> og <i>-et</i> (intetkøn), men i en substantivgruppe er substantivet ikke bestemthedsbøjet. Det er til gengæld de andre ord i gruppen. Således bliver bestemthed slået fast af en bestemt artikel <i>(den, det, de),</i> af ejestedord <i>(min, din, vores),</i> udpegende stedord <i>(denne, dette, disse)</i> og genitiver <i>(Peters gamle bil, hundens hale).</i> Omvendt er der tale om ubestemthed, når sådanne ord mangler <i>(gammelt jern)</i>, eller når ordgruppen indledes af ubestemt artikel <i>(en, et)</i> eller ubestemt pronomen <i>(nogen, intet, lidt).</i> Men ved disse ord ligger bestemthed ikke i bøjningen, men snarere i valget af ordet selv, og derfor vil man normalt ikke lave fejl her.<br>\n<br>\nHvis det markerede ord er et adjektiv (tillægsord), skal du fjerne bestemthedsendelsen <i>-e.</i> Husk at den ubestemte form til gengæld skal markeres for intetkøn (med endelsen <i>-</i>t), hvis adjektivet lægger sig til intetkøns-substantiv.<br>\n<br>\nHvis det markerede ord er et substantiv (navneord), skal du fjerne endelsen <i>-(e)n(e)</i> i flertal, eller <i>-en/-et</i> i ental. Husk, at dansk ikke har dobbelt bestemthed (som fx svensk), og at substantiver normalt ikke får en bestemthedsendelse hvis de har et bestemmende ord til venstre, altså ikke <i>Jyllandspostens læserne</i> eller <i>det lille hust,</i> men <i>Jyllandpostens læsere</i> og <i>det lille hus.</i><br>\n<br>\nEn mulig øvelse mht. bøjningsformer er VISL's grammatikspil <a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i></i> og indsætningsøvelsen <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i>.</i> Du kan læse mere om ordgrupper i den pågældende sektion i <a target=\"_blank\" href=\"https://visl.sdu.dk/grammy/historie5.html\">Grammy</a><i>.</i>",
		"Et <span style=\"color: #ff0000\"><b>røde</b></span> [rødt] æble<br>\n<br>\nJP's <span style=\"color: #ff0000\">læserne</span> [læsere]"
	],
	"£idf-sc": [
		"£idf-sc",
		"Bestemthedsfejl i subjektsprædikativ: ubestemt (indefinit)",
		"Et adjektiv (tillægsord), der lægger sig prædikativt (dvs. som omsagnsled) til et substantiv (navneord), fx &quot;X er <i>stor/stort/store&quot;</i>, vil have samme bøjning som substantivet (X) i tal og køn, men altid være indefinit (ubestemt), uanset om substantivet er bestemt eller ubestemt bøjet. Du har brugt en bøjningsform på -e, der bruges til at markere enten flertal eller bestemthed i adjektiver. Og fordi subjektet (genstandsleddet) i din sætning er i ental, mener programmet, at der er en fejl i kongruensen (dvs. uoverensstemmelse i bøjningen). Enten skal adjektivet ændres til indefinit, eller substantivet til flertal.<br>\n<br>\nNår du ændrer adjektivets bøjning til indefinit (ubestemt), skal du være opmærksom på, at vælge samme genus (køn) som substantivet, altså ingen endelse, hvis substantivet er fælleskøn, eller -t hvis substantivet er intetkøn. Fx skal <i>Huset er gamle?</i> rettes til <i>Hus</i><b><i>et</i></b><i> er gammel</i><b><i>t.</i></b><br>\n<br>\nDu kan læse mere om adjektivbøjning i artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-25-28-adjektiver\">Adjektiver</a><i></i> på sproget.dk",
		"Huset er <span style=\"color: #ff0000\">gamle</span> [gammelt]"
	],
	"£idf-pl": [
		"£idf-pl",
		"Bestemthedsfejl: ubestemt flertal (indefinit pluralis)",
		"RetMig mener, at det markerede substantiv (navneord) skal bøjes i ubestemt flertal. Grunden til dette kan være, at der står et bestemmende ord med en éntydig flertalsendelse til venstre for det markerede substantiv, fx <i>mange/flere/visse huse</i> (ikke ental <i>hus</i> eller bestemt flertal <i>husene</i>).<br>\n<br>\nDenne fejltype giver ikke mening for flertalsformer, fordi flertalsadjektiver alle har endelsen -e, og således ikke skelner mellem bestemt (definit) og ubestemt (indefinit).",
		"Mange <span style=\"color: #ff0000\">helten</span> [helte] i film"
	],
	"£def": [
		"£def",
		"Bestemthedsfejl: bestemt (definit)",
		"Du har brugt en indefinit (ubestemt) bøjning i stedet for en definit (bestemt) bøjning.<br>\n<br>\nBestemthed er en egenskab af substantiver (navneord) og de ord der lægger sig til dem: adjektiver (tillægsord), artikler (kendeord) og visse pronominer (stedord), samt - indirekte - af en sådan ordgruppe (et substantivsyntagme) som helhed. Definit betyder at det er én bestemt person eller ét bestemt objekt man har i tanker, men indefinit betyder at man ikke tænker på én bestemt referent, men mere på betydningen i almen forstand.<br>\n<br>\nPå substantivet selv markeres bestemthed i ental (singularis) med endelserne <i>-en</i> (fælleskøn)<i></i> og <i>-et</i> (intetkøn). I flertal tilføjes <i>-ne</i> (efter <i>-er</i> og <i>-e</i>) eller <i>-ene</i> (når endelsen er igenting eller <i>-s</i>). Altså <i>bil-er-ne, hest-e-ne, hus-ene, hotdogs-ene.</i> En undtagelse er substantiver på <i>-er,</i> der dropper flertals-e i bestemt form, fx <i>lærer-lærere-lærerne.</i><br>\n<br>\nMen i en substantivgruppe er substantivet ikke bestemthedsbøjet. Det er til gengæld de andre ord i gruppen. Således bliver bestemthed slået fast af en bestemt artikel <i>(den, det, de),</i> af ejestedord <i>(min, din, vores),</i> udpegende stedord <i>(denne, dette, disse)</i> og genitiver <i>(Peters gamle bil, hundens hale).</i> Omvendt er der tale om ubestemthed, når sådanne ord mangler <i>(gammelt jern)</i>, eller når ordgruppen indledes af ubestemt artikel <i>(en, et)</i> eller ubestemt pronomen <i>(nogen, intet, lidt).</i> Men ved disse ord ligger bestemthed ikke i bøjningen, men snarere i valget af ordet selv, og derfor vil man normalt ikke lave fejl her.<br>\n<br>\nEn almindelig fejlkilde er derimod et adjektiv i midten af gruppen, fordi dette skal bøjes i bestemthed afhængigt af de andre ord, og fordi bestemthedsendelse er et lydsvagt <i>-e.</i> For eksempel er frasen <i>den stor moské</i> forkert, fordi den indledes af bestemt artikel, men indeholder et ubøjet adjektiv, <i>stor,</i> der burde hedde <i>store</i> i stedet. Frasen er ligeså forkert i intetkøn <i>(Det stort tempel),</i> og adjektivet skal også her rettes til <i>store,</i> men fejlen er mere sjælden, fordi intetkønsendelsen -t er mere markant og forskellig fra -e end den ubøjede fælleskønsform.<br>\n<br>\nEn mulig øvelse mht. bøjningsformer er VISL's grammatikspil <a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i></i> og indsætningsøvelsen <a target=\"_blank\" href=\"https://visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i>.</i> Du kan læse mere om ordgrupper i den pågældende sektion i <a target=\"_blank\" href=\"https://visl.sdu.dk/grammy/historie5.html\">Grammy</a><i>.</i>",
		"Det <span style=\"color: #ff0000\">rød</span> [røde] hus<br>\n<br>\nHele <span style=\"color: #ff0000\">skole</span> [skolen]"
	],
	"£vfin": [
		"£vfin",
		"Finit verbum (tidsbøjet udsagnsord)",
		"Du har sandsynligvis glemt at sætte -r på det markerede ord. Fejlen består i at det markerede verbum (udsagnsord), sådan som det er brugt i sætningen, skal være bøjet i nutid (altså have -r), men at du har brugt en såkaldt ikke-finit form (uden -r), typisk en infinitiv (navnemåde), eller muligvis et participium (kort tillægsmåde).<br>\n<br>\nDer er tale om et finit verbum (med -r), hvis der umiddelbart til venstre eller til højre står et subjekt (grundled), dvs. det sætningsled, der angiver <i>hvem</i> det er, der gør det. Altså enten <b><i>Vi</i></b><i></i> <i>spise</i><b><i>r</i></b><b><i></i> </b><i>pandekager</i> eller <i>Nu</i> <i>spise</i><b><i>r</i></b><b><i> vi</i></b><i> pandekager</i> (Hvem gør det? - Vi). Hvis man ikke umiddelbart kan gennemskue sætningen, kan man også bare inde i hovedet teste, om der kan stå 'jeg' eller 'vi' til venstre for det problematiske verbum. Til gengæld taler det for en infinitiv (uden -r), hvis der til venstre står <i>'at'</i> eller <i>vil/ville, kan/kunne, skal/skulle, bør/burde.</i><br>\n<br>\nEn mulig øvelse er <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/r-problemer/r-problemer/examfolder.2007-07-18.3102694332\">R-problemer - verber</a><i></i> på sproget.dk, samt VISL's grammatikspil <a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i>.</i>",
		"De <span style=\"color: #ff0000\">begynde</span> [begynder] at danse"
	],
	"£inf": [
		"£inf",
		"Infinitiv (navnemåde)",
		"Du har sandsynligvis tilføjet et overflødigt -r til en infinitiv, der dermed bliver til er finit verbum.<br>\n<br>\nEn vigtig regel er at et verbum (udsagnsord) er en ubøjet infinitiv (uden -r), hvis der til venstre står <i>'at'</i> eller <i>vil/ville, kan/kunne, skal/skulle, bør/burde.</i> Omvendt har et finit verbum (med -r) et subjekt (grundled) umiddelbart til venstre eller højre, dvs. det sætningsled, der angiver <i>hvem</i> det er, der gør det. Altså enten <b><i>Vi</i></b><i></i> <i>spise</i><b><i>r</i></b><b><i></i> </b><i>pandekager</i> eller <i>Nu</i> <i>spise</i><b><i>r</i></b><b><i> vi</i></b><i> pandekager</i> (Hvem gør det? - Vi). Hvis man ikke umiddelbart kan gennemskue sætningen, kan man også bare inde i hovedet teste, om der kan stå 'jeg' eller 'vi' til venstre for udsagnsordet.<br>\n<br>\nEn mulig øvelse er <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/r-problemer/r-problemer/examfolder.2007-07-18.3102694332\">R-problemer - verber</a><i></i> på sproget.dk, samt VISL's grammatikspil <a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i>.</i>",
		"De begynder at <span style=\"color: #ff0000\">danser</span><span style=\"color: #ff0000\"><b></b> </span>[danse]"
	],
	"£impf": [
		"£impf",
		"Præteritum (datid)",
		"En mulig øvelse er VISL's grammatikspil <a target=\"_blank\" href=\"https://visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i>.</i>",
		"Så sad vi og <span style=\"color: #ff0000\">snakket</span> [snakkede] lidt"
	],
	"£pcp2-akt": [
		"£pcp2-akt",
		"Aktivt participium (aktiv tillægsform)",
		"Du har formodentlig glemt et -t, muligvis fordi det kun udtales svagt efter et 'e'. Fx hedder det (1) <i>hun kan dans</i><b><i>e</i></b>, men (2) <i>hun har dans</i><b><i>et</i></b>. <i>t</i>'et i (2) markerer den aktive participiumsform (datids tillægsform), der bruges når man udtrykker datid med 'have/har'. Uden t'et bliver ordet til en infinitiv (grundform).",
		"Frede havde også <span style=\"color: #ff0000\">spille</span> [spillet] på holdet en gang."
	],
	"£pas": [
		"£pas",
		"S-passiv",
		"Du har måske brugt endelsen -r i stedet for -s. Tjek, om udsagnsordet skal være aktiv (handleform) eller passiv (lideform). Du kan evt. se det på, om ordet til venstre er subjekt (grundled) eller objekt (genstandsled). Hvis sidstnævnte er tilfældet, typisk når der er tale om ting og ikke mennesker, skal udsagnsordet stå i passiv.",
		"De forskellige værktøjer <span style=\"color: #ff0000\">bruger</span> [bruges] til forskellige opgaver."
	],
	"£ene": [
		"£ene",
		"'-ende' brugt i stedet for '-ene'",
		"De to endelser kan forveksles rent lydligt, men står grammatisk milevidt fra hinanden: '-ende' er en tillægsform der udtrykker processer og egenskaber <i>(løbende, smilende),</i> mens '-ene' er den mest almindelige bestemte flertalsform for intetkøns-substantiver (navneord). Fejlen er derfor grammatisk alvorlig, lidt som -r fejlene, og kan være meningsforstyrrende ved ordstammer, der kan bruges både som substantiv (navneord) og som verbum (udsagnsord), fx <i>husene - husende</i> (af henholdsvis navneordet &quot;<i>hus&quot;</i> og udsagnsordet &quot;<i>at huse&quot;</i>)<i>.</i><br>\n<br>\nDu kan finde <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#f\">tests og øvelser</a> vedr. ene/ende på sproget.dk",
		"<span style=\"color: #ff0000\">husende</span> [husene] var smukke"
	],
	"£ende": [
		"£ende",
		"'-ene' brugt i stedet for '-ende'",
		"De to endelser kan forveksles rent lydligt, men står grammatisk milevidt fra hinanden: '-ende' er en tillægsform der udtrykker processer og egenskaber <i>(løbende, smilende),</i> mens '-ene' er den mest almindelige bestemte flertalsform for intetkøns-substantiver (navneord). Fejlen er derfor grammatisk alvorlig, lidt som -r fejlene, og kan være meningsforstyrrende ved ordstammer, der kan bruges både som substantiv (navneord) og som verbum (udsagnsord), fx <i>husene - husende</i> (af henholdsvis navneordet &quot;<i>hus&quot;</i> og udsagnsordet &quot;<i>at huse&quot;</i>)<i>.</i><br>\n<br>\nDu kan finde <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#f\">tests og øvelser</a> vedr. ene/ende på sproget.dk",
		"Han kom <span style=\"color: #ff0000\">løbene</span> [løbende] ned ad gaden"
	],
	"£nom": [
		"£nom",
		"Nominativ (navnefald)",
		"Du har brugt et pronomen (stedord) med forkert kasus (fald).<br>\n<br>\nPå dansk har substantiver (navneord) ikke længere egentlig kasusbøjning, kun en genitivendelse (ejefald). De eneste ord med kasusbøjning er personlige pronominer (stedord), der findes i nominativ <i>(</i>nævnefald: <i>han, hun, de),</i> akkusativ <i>(</i>genstandsfald: <i>ham, hende, dem)</i> og genitiv <i>(</i>ejefald: <i>hans, hendes, deres).</i> Man kan se hvilken form der skal bruges ved at lave en kryds-og-bolle-analyse af sætningen.<br>\n<br>\nNominativ (navnefald) bruges på subjektpladsen (grundled), akkusativ (genstandsfald) bruges på objektpladsen (genstandsled) og genitiv (ejefald) bruges som bestemmende form foran substantiverne. Subjekt/nominativ bruges om den der gør noget, mens objekt/akkusativ bruges om den det går ud over. En god metode til at skelne mellem subjet/nominativ og objekt/akkusativ er derfor at spørge <i>Hvem x'er hvad?</i> I sætningnen <i>A driller B</i> er det 'A', der gør det, og 'B' det går ud over, så A skal stå i nominativ, og B i akkusativ. Bemærk, at det ikke kommer an på rækkefølgen af ordene - i <i>Ham kan jeg ikke huske</i> eller <i>Det mener du ikke</i> er 'jeg' og 'du' subjekt/nominativ, selvom de står sidst - fordi det er dem, der &quot;x'er&quot;, mens 'ham' og 'det' er det objekt der &quot;x'es&quot;.<br>\n<br>\nDet skal tilføjes at akkusativformen bruges på dansk ikke kun for det direkte objekt (genstandsled), men også for det indirekte objekt (hensynsled), der tidligere havde sin egen form (dativ). Fx er 'hende' i &quot;<i>Peter gav hende en gave&quot;</i> en akkusativform på hensynsledspladsen (mens 'gave' er genstandsleddet).<br>\n<br>\nDu kan finde forklaringer og øvelser om forskellen på subjekt og objekt i artiklen <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/saetningsled-1\">Sætningsled</a><i></i> på sproget.dk, samt i afsnittet <a target=\"_blank\" href=\"https://visl.sdu.dk/urkas/urkas_intro2.html\">Niveau 2: Kryds, bolle, trekant</a><i></i> i VISL's Grammy-kursus i Almen Sprogforståelse. Du kan også bruge <a target=\"_blank\" href=\"https://visl.sdu.dk/games_gym.html\">grammatikspillene</a> PostOffice og Syntrice.",
		"Det mener i hvert fald <span style=\"color: #ff0000\">dem</span> [de] der har fremsat forslaget."
	],
	"£acc": [
		"£acc",
		"Akkusativ (genstandsfald)",
		"Du har brugt et pronomen (stedord) med forkert kasus (fald).<br>\n<br>\nPå dansk har substantiver (navneord) ikke længere egentlig kasusbøjning, kun en genitivendelse (ejefald). De eneste ord med kasusbøjning er personlige pronominer (stedord), der findes i nominativ <i>(</i>nævnefald: <i>han, hun, de),</i> akkusativ <i>(</i>genstandsfald: <i>ham, hende, dem)</i> og genitiv <i>(</i>ejefald: <i>hans, hendes, deres).</i> Man kan se hvilken form der skal bruges ved at lave en kryds-og-bolle-analyse af sætningen.<br>\n<br>\nNominativ (navnefald) bruges på subjektpladsen (grundled), akkusativ (genstandsfald) bruges på objektpladsen (genstandsled) og genitiv (ejefald) bruges som bestemmende form foran substantiverne. Subjekt/nominativ bruges om den der gør noget, mens objekt/akkusativ bruges om den det går ud over. En god metode til at skelne mellem subjet/nominativ og objekt/akkusativ er derfor at spørge <i>Hvem x'er hvad?</i> I sætningnen <i>A driller B</i> er det 'A', der gør det, og 'B' det går ud over, så A skal stå i nominativ, og B i akkusativ. Bemærk, at det ikke kommer an på rækkefølgen af ordene - i <i>Ham kan jeg ikke huske</i> eller <i>Det mener du ikke</i> er 'jeg' og 'du' subjekt/nominativ, selvom de står sidst - fordi det er dem, der &quot;x'er&quot;, mens 'ham' og 'det' er det objekt der &quot;x'es&quot;.<br>\n<br>\nDet skal tilføjes at akkusativformen bruges på dansk ikke kun for det direkte objekt (genstandsled), men også for det indirekte objekt (hensynsled), der tidligere havde sin egen form (dativ). Fx er 'hende' i &quot;<i>Peter gav hende en gave&quot;</i> en akkusativform på hensynsledspladsen (mens 'gave' er genstandsleddet).<br>\n<br>\nDu kan finde forklaringer og øvelser om forskellen på subjekt og objekt i artiklen <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/saetningsled-1\">Sætningsled</a><i></i> på sproget.dk, samt i afsnittet <a target=\"_blank\" href=\"https://visl.sdu.dk/urkas/urkas_intro2.html\">Niveau 2: Kryds, bolle, trekant</a><i></i> i VISL's Grammy-kursus i Almen Sprogforståelse. Du kan også bruge <a target=\"_blank\" href=\"https://visl.sdu.dk/games_gym.html\">grammatikspillene</a> PostOffice og Syntrice.",
		"Jeg har talt med <span style=\"color: #ff0000\">hun</span> [hende]"
	],
	"£gen": [
		"£gen",
		"Genitiv (ejefald)",
		"Det markerede ord mangler genitiv-s.<br>\n<br>\nGenitiv (ejefald) bruges til at markere et ejerskabsforhold af ord 1 over ord 2, fx <i>Peter</i><b><i>s</i> </b><i>moster, hende</i><b><i>s</i></b><i> cykel, manden</i><b><i>s</i> </b><i>hund, danskerne</i><b><i>s</i></b><i> vaner.</i> Genitiv-s er ikke det samme som fuge-s, der bruges i sammensætninger <i>(fx køb</i><b><i>s</i></b><i>tilbud, salg</i><b><i>s</i></b><i>fremstød).</i> Genitiv-s ses mest ved definitte substantiver (bestemthedsbøjede navneord), proprier (egennavne) eller substantivgrupper med bestemthedsmarkør (fx den/det/de/denne/dette), mens 1. led i sammensætninger altid er i ubestemt (indefinit) form. Desuden kan man <i>høre</i> forskellen - ved genitiv er trykket på 2. ord (Peters MOSTER), mens trykket i sammensætninger ligger på 1. led <b>(</b>KØBStilbud).<br>\n<br>\nRent grafisk er det vigtigt at være opmærksom på at genitiv-s kræver apostrof efter taludtryk og efter forkortelser, der ikke kan udtales som almindelige ord <i>(NATO's plan, 68'ernes oprør).</i> Efter s, sh og x i udlyd bruges der kun apostrof, of genitiv-s bortfalder.<br>\n<br>\nDu kan læse mere i artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-21-genitiv\">Genitiv</a><i></i> på sproget.dk, eller lave de tilknyttede <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#g\">tests og øvelser</a> .",
		"<span style=\"color: #ff0000\">Projektet</span> [Projektets] titel"
	],
	"£adv": [
		"£adv",
		"Adverbium (typisk afledt af adjektiv)",
		"Her skal der stå et adverbium (biord), og ikke et adjektiv (tillægsord). Forskellen mellem adjektiver og adverbier er, at førstnævnte bruges som nærmere bestemmelser af substantiver (navneord), mens sidstnævnte lægger sig til verber (udsagnsord) eller hele sætningen og fortæller om <i>hvordan, hvor, hvornår</i> og <i>i hvilken grad.</i> Med sidstnævnte betydning kan adverbier også lægge sig til adjektiver <i>(enormt klog, meget dyr).</i><br>\n<br>\nEn mulig øvelse er VISL's <a target=\"_blank\" href=\"https://visl.sdu.dk/games_gym.html\">ordklassespil</a> .<br>\n<br>\nDer findes ubøjelige adverbier som <i>ganske, ofte, overalt</i> samt adverbier der bøjes med <i>-</i>e for at skifte mellem retning og sted <i>(hjem-hjemme, op-oppe),</i> men stavemæssigt er mest interessant, at et adjektiv kan laves om til et adverbium ved at tilføje -t til adjektivets grundform <i>(ren-rent, offentlig-offentligt).</i> Der gælder næsten samme regler for denne -t-endelse som for adjektivets intetkønsform, der jo også ender i -t. T tilføjes således ikke, når ordet ender i trykstærkt -o eller -u, -sk og er valgfrit ved -vis. Adverbier dannet af adjektiver på -<i>ig</i> eller <i>-lig</i> er <i>-t'et</i> valgfrit når de angiver grad og lægger sig til andre adverbier eller adjektiver <i>(hvor høj/lang/ofte/hurtigt?),</i> fx <i>hun er afsindig(t) smart.</i> Bruges adverbierne derimod som selvstændigt sætningsled eller som mådesadverbier <i>(hvordan?),</i> tilføjes altid <i>-t,</i> fx <i>Han taler hurtigt (hvordan taler han?)</i> eller <i>de offentligt ansatte (hvordan er de ansat?).</i> Endeligt er <i>-t</i> valgfrit ved de fleste tidsadverbier og adverbier der angiver holdning: <i>Arrangementet afholdes årlig(t), personlig(t) synes jeg ikke om det, du kan rolig(t) gøre det.</i><br>\n<br>\nUmiddelbart kan man konkludere at det er sikrest at tilføje -t, når man er i tvivl. Dog er beslutningen ikke valgfrit, når der er betydningsforskel, fx <i>De strejker lovligt (hvordan?)</i> sammenlignet med <i>Du er lovlig fræk i dag,</i> hvor adverbiet udtrykker en personlig holdning.<br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-36-39-adverbier-og-adverbialer\">Adverbier og adverbialer</a><i></i> på sproget.dk<br>\n<br>\nSamt <a target=\"_blank\" href=\"https://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-36-39-adverbier-og-adverbialer/a7-37-betydningsforskel-mellem-t-adverbialer-og-rene-adverbier\">Betydningsforskel mellem t-adverbialer og rene adverbier</a><i>.</i> Sitet har også <a target=\"_blank\" href=\"https://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#a\">tests og øvelser</a> vedr. adverbielt -t.",
		"<span style=\"color: #ff0000\">enorm</span> [enormt] træt<br>\n<br>\n<span style=\"color: #ff0000\">ren</span> [rent] kommunalt<br>\n<br>\nDe <span style=\"color: #ff0000\">offentlige</span> [offentligt] ansatte<br>\n<br>\nHan har svaret <span style=\"color: #ff0000\">rigtig</span> [rigtigt]"
	],
	"£nil": [
		"£nil",
		"Overflødigt ord",
		"Det markerede ord skal slettes.<br>\n<br>\nEt scenarie for et overflødigt ord er forkert brug af infinitiv-markøren 'at' efter 'gad'. Et andet scenarie er fyldord, der bruges i talesprog, men ikke på skrift. Hertil hører et overflødigt pronominalt subjekt <i>(Regeringen</i> <b><i>den</i></b><i> har tænkt sig at sænke skatterne),</i> og en overflødig konjunktion 'at' efter andre ledsætningindledere <i>(Ham der fyren som</i> <b><i>at</i></b><i> der var der i nat ...)</i>",
		"Han gad ikke <span style=\"color: #ff0000\">at</span> [-] lege"
	],
	"£insert": [
		"£insert",
		"Manglende ord",
		"Det markerede ord skal tilføjes<br>\n<br>\nEt eksempel for et manglende ord er en glemt infinitiv-markør <i>'at'</i>, fx <i>Det fik trænerduoen til [</i><b><i>at</i></b><i>] kalde til timeout</i>",
		"Det fik trænerduoen til <span style=\"color: #ff0000\">[at]</span> kalde til time-out"
	],
	"£sentsplit": [
		"£sentsplit",
		"Manglende punktum eller anden sætningsadskillelse",
		"Det ser ud til, at du starter på en ny sætning efter dette ord. Du har muligvis glemt at sætte et punktum eller andet adskillelsestegn (kolon, linjebrud etc.). Hvis dette er tilfældet, skal det næste ord have stort begyndelsesbogstav, fordi det er første ord i en sætning.",
		"Han kan desværre ikke <span style=\"color: #ff0000\">komme</span> [.] <span style=\"color: #ff0000\">han</span> [Han] er syg."
	],
	"£order-sub": [
		"£order-sub",
		"Forkert ordstilling i ledsætning",
		"Der er muligvis et problem med ordstillingen. I ledsætninger skal lette biord eller biordsforbindelser (fx <i>ikke, ofte, aldrig, naturligvis, formodentlig</i>) stå før det finitte verbum (dvs. før udsagnsordet med -r). Du kan kende en ledsætning på, at den er led i en anden sætning og ofte indledes af en konjunktion (<i>at, fordi</i>), et relativt pronomen (<i>som, der</i>) eller et spørgeord <i>(hvornår, hvilken).</i>",
		"Peter skal ikke forklare noget, fordi han <b>har</b> <span style=\"color: #c9211e\">ikke</span> [ikke har] gjort det."
	],
	"£order-main": [
		"£order-main",
		"Forkert ordstilling i hovedsætning",
		"Der er muligvis et problem med ordstillingen. Når frontfeltet i en hovedsætning, altså ordet eller ordgruppen til venstre for det finite (-r) verbum, (udsagnsord) indeholder andet materiale end subjektet (grundleddet), skal verbet og subjektet bytte plads, således at verbet kommer først.",
		"I dag <span style=\"color: #c9211e\">kommunen</span> <b>har</b> [har kommunen] ringet til mig."
	],
	"£order-vp": [
		"£order-vp",
		"Let biord placeret efter hovedverbum i stedet for mellem hjælpeverbum og hovedverbum",
		"Der er muligvis et problem med ordstillingen. Lette biord eller biordsforbindelser (fx <i>ikke, ofte, aldrig, naturligvis, formodentlig, gerne</i>) kan ikke stå efter en udsagnsordsgruppe bestående af et hælpeverbum og et hovedverbum. Den korrekte placering er <i>mellerm</i> hjælpeverbet og hovedverbet for hovedsætninger, og <i>foran</i> hjælpeverbet i ledsætninger.",
		"Han <b>vil hjælpe</b> <span style=\"color: #c9211e\">gerne</span> [vil gerne hjælpe]."
	]
};

for (let k in g_marks.types) {
	let v = [
		g_marks.types[k][1],
		g_marks.types[k][2] + "<br>\n<br>\n<i>" + g_marks.types[k][3] + '</i>'
		];
	if (g_marks.types[k][1] === g_marks.types[k][2]) {
		v[1] = '<i>' + g_marks.types[k][3] + '</i>';
	}
	g_marks.types[k] = v;
	g_marks.types_grammar.push(k);
}

let ctypes = {
	"%k-appo": [
		"%k-appo",
		"Apposition (navnetillæg)",
		"<i>En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen afgrænses med komma.</i><br>\n<br>\n<i>Den længste tyske flod, Rhinen, udspringer i Schweiz.</i><br>\n<br>\n<i>Min bedste ven, Peter, kommer på besøg i weekenden.</i><br>\n<br>\n<i>Der bruges dog kun appositionskomma, hvor der er tale om en parentetisk, forklarende tilføjelse - ikke hvis tilføjelsen er nødvendig for at gøre referencen entydig.</i><br>\n<br>\n<i>Man har fundet ukrudtsmidlet[,] <b>Roundup</b>[,] i grundvandet.</i><br>\n<br>\nSommetider kan brugen af komma derfor gøre en meningsforskel:<br>\n<br>\n<i>Hans bror Peter (Peter er én af flere brødre)</i><br>\n<br>\n<i>Hans bror, Peter (Peter er den eneste bror)</i>",
		"3",
		"§47.2"
	],
	"%k-appo-end": [
		"%k-appo-end",
		"Apposition (navnetillæg)",
		"<i>En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen afgrænses med komma.</i><br>\n<br>\n<i>Den længste tyske flod, Rhinen, udspringer i Schweiz.</i><br>\n<br>\n<i>Min bedste ven, Peter, kommer på besøg i weekenden.</i><br>\n<br>\n<i>Der bruges dog kun appositionskomma, hvor der er tale om en parentetisk, forklarende tilføjelse - ikke hvis tilføjelsen er nødvendig for at gøre referencen entydig.</i><br>\n<br>\n<i>Man har fundet ukrudtsmidlet[,] <b>Roundup</b>[,] i grundvandet.</i><br>\n<br>\nSommetider kan brugen af komma derfor gøre en meningsforskel:<br>\n<br>\n<i>Hans bror Peter (Peter er én af flere brødre)</i><br>\n<br>\n<i>Hans bror, Peter (Peter er den eneste bror)</i>",
		"3",
		"§47.2"
	],
	"%ok-appo": [
		"%ok-appo",
		"Apposition (navnetillæg)",
		"<i>En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen afgrænses med komma.</i><br>\n<br>\n<i>Den længste tyske flod, Rhinen, udspringer i Schweiz.</i><br>\n<br>\n<i>Min bedste ven, Peter, kommer på besøg i weekenden.</i><br>\n<br>\n<i>Der bruges dog kun appositionskomma, hvor der er tale om en parentetisk, forklarende tilføjelse - ikke hvis tilføjelsen er nødvendig for at gøre referencen entydig.</i><br>\n<br>\n<i>Man har fundet ukrudtsmidlet[,] <b>Roundup</b>[,] i grundvandet.</i><br>\n<br>\nSommetider kan brugen af komma derfor gøre en meningsforskel:<br>\n<br>\n<i>Hans bror Peter (Peter er én af flere brødre)</i><br>\n<br>\n<i>Hans bror, Peter (Peter er den eneste bror)</i>",
		"3",
		"§47.2"
	],
	"%ok-appo-end": [
		"%ok-appo-end",
		"Apposition (navnetillæg)",
		"<i>En apposition (navnetillæg) er en konstruktion med to parallele nominalfraser, hvor den anden indeholder yderligere information om den første. Appositionen afgrænses med komma.</i><br>\n<br>\n<i>Den længste tyske flod, Rhinen, udspringer i Schweiz.</i><br>\n<br>\n<i>Min bedste ven, Peter, kommer på besøg i weekenden.</i><br>\n<br>\n<i>Der bruges dog kun appositionskomma, hvor der er tale om en parentetisk, forklarende tilføjelse - ikke hvis tilføjelsen er nødvendig for at gøre referencen entydig.</i><br>\n<br>\n<i>Man har fundet ukrudtsmidlet[,] <b>Roundup</b>[,] i grundvandet.</i><br>\n<br>\nSommetider kan brugen af komma derfor gøre en meningsforskel:<br>\n<br>\n<i>Hans bror Peter (Peter er én af flere brødre)</i><br>\n<br>\n<i>Hans bror, Peter (Peter er den eneste bror)</i>",
		"3",
		"§47.2"
	],
	"%nok-appo": [
		"%nok-appo",
		"Forkert appositionskomma",
		"<i>Der bruges dog kun appositionskomma, hvor der er tale om en parentetisk, forklarende tilføjelse - ikke hvis tilføjelsen er nødvendig for at gøre referencen entydig.</i><br>\n<br>\n<i>Man har fundet ukrudtsmidlet[,] <b>Roundup</b>[,] i grundvandet.</i>",
		"3",
		"§47.2"
	],
	"%k-list": [
		"%k-list",
		"Opremsningskomma",
		"Et opremsningskomma adskiller elementerne i en liste (sidestilling) - ord, ordgrupper eller sætninger. Man kan sige, at komma her erstatter en konjunktion ('og' eller 'eller'). Konjunktionen er forbeholdt sidste led i listen, og modsat engelsk kan den normalt ikke kombineres med et komma, når der er tale om ord eller ordgrupper.<br>\n<br>\n<i>Gulerødder, porrer, kål, løg og andre grønsager</i><br>\n<br>\n<i>Ung, smuk og provokerende.</i><br>\n<br>\n<i>Spis frugt, ikke kager.</i><br>\n<br>\n<i>De drak cocktails, sang karaoke og dansede.</i><br>\n<br>\nUnderstregende gentagelse behandles på samme måde:<br>\n<br>\n<i>Jeg blev meget, meget glad for hans brev.</i><br>\n<br>\nNår opremsningens elementer er hel- eller ledsætninger, bruges komma også, når der allerede er en konjunktion:<br>\n<br>\n<i>Mia var på facebook med vennerne, Peter så en film, og børnene legede under bordet.</i><br>\n<br>\nDette gælder i princippet også imperativer (bydemåde), der kan anses som helsætninger uden subjekt. Kun når imperativerne er meget tæt forbundet, kan man undlade komma før konjunktionen:<br>\n<br>\n<i>Hold op med at ryge, motionér og drik mindre.</i>",
		"1",
		"§46.1<br>\n<br>\n§46.5"
	],
	"%ko-list": [
		"%ko-list",
		"Opremsningskomma",
		"Et opremsningskomma adskiller elementerne i en liste (sidestilling) - ord, ordgrupper eller sætninger. Man kan sige, at komma her erstatter en konjunktion ('og' eller 'eller'). Konjunktionen er forbeholdt sidste led i listen, og modsat engelsk kan den normalt ikke kombineres med et komma, når der er tale om ord eller ordgrupper.<br>\n<br>\n<i>Gulerødder, porrer, kål, løg og andre grønsager</i><br>\n<br>\n<i>Ung, smuk og provokerende.</i><br>\n<br>\n<i>Spis frugt, ikke kager.</i><br>\n<br>\n<i>De drak cocktails, sang karaoke og dansede.</i><br>\n<br>\nUnderstregende gentagelse behandles på samme måde:<br>\n<br>\n<i>Jeg blev meget, meget glad for hans brev.</i><br>\n<br>\nNår opremsningens elementer er hel- eller ledsætninger, bruges komma også, når der allerede er en konjunktion:<br>\n<br>\n<i>Mia var på facebook med vennerne, Peter så en film, og børnene legede under bordet.</i><br>\n<br>\nDette gælder i princippet også imperativer (bydemåde), der kan anses som helsætninger uden subjekt. Kun når imperativerne er meget tæt forbundet, kan man undlade komma før konjunktionen:<br>\n<br>\n<i>Hold op med at ryge, motionér og drik mindre.</i>",
		"1",
		"§46.1<br>\n<br>\n§46.5"
	],
	"%ok-list": [
		"%ok-list",
		"Opremsningskomma",
		"Et opremsningskomma adskiller elementerne i en liste (sidestilling) - ord, ordgrupper eller sætninger. Man kan sige, at komma her erstatter en konjunktion ('og' eller 'eller'). Konjunktionen er forbeholdt sidste led i listen, og modsat engelsk kan den normalt ikke kombineres med et komma, når der er tale om ord eller ordgrupper.<br>\n<br>\n<i>Gulerødder, porrer, kål, løg og andre grønsager</i><br>\n<br>\n<i>Ung, smuk og provokerende.</i><br>\n<br>\n<i>Spis frugt, ikke kager.</i><br>\n<br>\n<i>De drak cocktails, sang karaoke og dansede.</i><br>\n<br>\nUnderstregende gentagelse behandles på samme måde:<br>\n<br>\n<i>Jeg blev meget, meget glad for hans brev.</i><br>\n<br>\nNår opremsningens elementer er hel- eller ledsætninger, bruges komma også, når der allerede er en konjunktion:<br>\n<br>\n<i>Mia var på facebook med vennerne, Peter så en film, og børnene legede under bordet.</i><br>\n<br>\nDette gælder i princippet også imperativer (bydemåde), der kan anses som helsætninger uden subjekt. Kun når imperativerne er meget tæt forbundet, kan man undlade komma før konjunktionen:<br>\n<br>\n<i>Hold op med at ryge, motionér og drik mindre.</i>",
		"1",
		"§46.1<br>\n<br>\n§46.5"
	],
	"%nko-list": [
		"%nko-list",
		"Opremsningskomma",
		"Et opremsningskomma adskiller elementerne i en liste (sidestilling) - ord, ordgrupper eller sætninger. Man kan sige, at komma her erstatter en konjunktion ('og' eller 'eller'). Konjunktionen er forbeholdt sidste led i listen, og modsat engelsk kan den normalt ikke kombineres med et komma, når der er tale om ord eller ordgrupper.<br>\n<br>\n<i>Gulerødder, porrer, kål, løg og andre grønsager</i><br>\n<br>\n<i>Ung, smuk og provokerende.</i><br>\n<br>\n<i>Spis frugt, ikke kager.</i><br>\n<br>\n<i>De drak cocktails, sang karaoke og dansede.</i><br>\n<br>\nUnderstregende gentagelse behandles på samme måde:<br>\n<br>\n<i>Jeg blev meget, meget glad for hans brev.</i><br>\n<br>\nNår opremsningens elementer er hel- eller ledsætninger, bruges komma også, når der allerede er en konjunktion:<br>\n<br>\n<i>Mia var på facebook med vennerne, Peter så en film, og børnene legede under bordet.</i><br>\n<br>\nDette gælder i princippet også imperativer (bydemåde), der kan anses som helsætninger uden subjekt. Kun når imperativerne er meget tæt forbundet, kan man undlade komma før konjunktionen:<br>\n<br>\n<i>Hold op med at ryge, motionér og drik mindre.</i>",
		"1",
		"§46.1<br>\n<br>\n§46.5"
	],
	"%k-list-ADJ": [
		"%k-list-ADJ",
		"Sideordnede adjektiver",
		"<i>Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et 'og' imellem sig og kan bytte plads uden større meningsforskel.</i><br>\n<br>\n<i>En varm, strålende sommerdag.</i><br>\n<br>\n<i>(en varm og strålende sommerdag - en strålende, varm sommerdag)</i><br>\n<br>\n<i>En lang, udmattende arbejdsdag</i><br>\n<br>\n<i>(en lang og udmattende arbejdsdag - en udmattende, lang arbejdsdag)</i>",
		"2",
		"§46.2"
	],
	"%ok-list-ADJ": [
		"%ok-list-ADJ",
		"Sideordnede adjektiver",
		"<i>Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et 'og' imellem sig og kan bytte plads uden større meningsforskel.</i><br>\n<br>\n<i>En varm, strålende sommerdag.</i><br>\n<br>\n<i>(en varm og strålende sommerdag - en strålende, varm sommerdag)</i><br>\n<br>\n<i>En lang, udmattende arbejdsdag</i><br>\n<br>\n<i>(en lang og udmattende arbejdsdag - en udmattende, lang arbejdsdag)</i>",
		"2",
		"§46.2"
	],
	"%nko-list-ADJ": [
		"%nko-list-ADJ",
		"Sideordnede adjektiver",
		"<i>Der sættes komma mellem sideordnede attributer (bestemmelser), hvis disse tillader et 'og' imellem sig og kan bytte plads uden større meningsforskel.</i><br>\n<br>\n<i>En varm, strålende sommerdag.</i><br>\n<br>\n<i>(en varm og strålende sommerdag - en strålende, varm sommerdag)</i><br>\n<br>\n<i>En lang, udmattende arbejdsdag</i><br>\n<br>\n<i>(en lang og udmattende arbejdsdag - en udmattende, lang arbejdsdag)</i>",
		"2",
		"§46.2"
	],
	"%nok-list-ADJ": [
		"%nok-list-ADJ",
		"Forkert adjektiv-komma",
		"Der bruges ikke komma mellem adjektiver (tillægsord), hvis det første adjektiv lægger sig til en helhed, der består af det andet adjektiv og det efterfølgende substantiv (navneord). Adjektiverne kan i så fald ikke bytte plads, og man kan ikke sætte et 'og' ind.<br>\n<br>\n<i>En dyr italiensk bil (*en italiensk dyr bil, *en dyr og italiensk bil)</i><br>\n<br>\nI særdeleshed må der ikke bruges komma, hvis det andet adjektiv danner et fast udtryk med det efterfølgende substantiv (navneord) eller hvis det andet adjektiv beskriver en central egenskab ved substantivet, og det første ikke gør det.<br>\n<br>\nCentrale egenskaber kan være bl.a. følgende, fra mindst central til mest central:<br>\n<br>\nIkke-centrale egenskaber kan være subjektive vurderinger <i>(populær, træls, ubrugelig, dejlig, god, dårlig</i><i>, irriterende</i><i>)</i> eller selektive udpegninger <i>(første, sidste, øvre, nedre, venste, højre).</i><br>\n<br>\nHvis man kombinerer to centrale egenskaber, og den mindre centrale kommer først, bliver denne tolket som ikke-central, og der står ikke komma:<br>\n<br>\n<i>Høje[,] østrigske bjerge</i><br>\n<br>\n<i>Små[,] røde blomster</i><br>\n<br>\nDet mere centrale adjektiv kommer sjældent først, men hvis det gør, fremtvinger det en sideordning, det første adjektiv får en mere selektiv-beskrivende karakter, og der bruges komma:<br>\n<br>\n<i>Røde, små blomster</i><br>\n<br>\nAdjektiviske pronominer <i>(min, denne, hver, alle)</i>, talord og deiktiske (udpegende) adjektiver <i>(førnævnte, overnnævte, nedenstående)</i> er aldrig sideordnet med et efterfølgende &quot;normalt&quot; adjektiv og får derfor aldrig komma efter sig:<br>\n<br>\n<i>Fire[,] små dværge</i><br>\n<br>\n<i>Det nedenstående[,] berømte citat</i><br>\n<br>\nBemærk, at man ved nogle adjektiver ikke kan se, om de er brugt adverbialt, fordi de ikke kræver - eller slet ikke tillader - den adverbiale <i>t-</i>endelse. Her kan kommaet gør en betydningsforskel. Der må nemlig ikke stå komma mellem et adverbium og det adjektiv, det lægger sig til:<br>\n<br>\n<i>En irriterende, langsom sagsbehandler (adjektiv: sagsbehandleren er irriterende og langsom)</i><br>\n<br>\n<i>En irriterende langsom sagsbehandler (adverbium: det er langsomheden der er irriterende)</i>",
		"2",
		"§46.2"
	],
	"%k-list-emph": [
		"%k-list-emph",
		"Gentagelseskomma",
		"Der sættes komma ved fremhævende gentagelse:<br>\n<br>\n<i>Jeg blev meget, meget glad for hans brev.</i><br>\n<br>\n<i>Det var en lang, lang rejse.</i>",
		"",
		""
	],
	"%ok-list-emph": [
		"%ok-list-emph",
		"Gentagelseskomma",
		"Der sættes komma ved fremhævende gentagelse:<br>\n<br>\n<i>Jeg blev meget, meget glad for hans brev.</i><br>\n<br>\n<i>Det var en lang, lang rejse.</i>",
		"",
		""
	],
	"%k-title": [
		"%k-title",
		"Stillingsbetegnelser og titler",
		"Der sættes komma mellem stillingsbetegnelser og titler, der ikke er forbundet med 'og':<br>\n<br>\n<i>Adm. direktør, cand.mag. Torben Taastrup.</i>",
		"4.1",
		"§46.3"
	],
	"%k-address": [
		"%k-address",
		"Addresser",
		"De enkelte dele i en adresse adskilles med komma.<br>\n<br>\n<i>Kommavej 17, 3200 Nykomming</i><br>\n<br>\nStår adresseudtrykket inde i en sætning, afsluttes det med appositionskomma, før den omsluttende sætning fortsætter:<br>\n<br>\n<i>Kontakt M. Nordtoft, Søndergade 32 C, 2. tv., snarest muligt.</i>",
		"4.2",
		"§46.4"
	],
	"%ok-address": [
		"%ok-address",
		"Addresser",
		"De enkelte dele i en adresse adskilles med komma.<br>\n<br>\n<i>Kommavej 17, 3200 Nykomming</i><br>\n<br>\nStår adresseudtrykket inde i en sætning, afsluttes det med appositionskomma, før den omsluttende sætning fortsætter:<br>\n<br>\n<i>Kontakt M. Nordtoft, Søndergade 32 C, 2. tv., snarest muligt.</i>",
		"4.2",
		"§46.4"
	],
	"%k-reference": [
		"%k-reference",
		"Referencer",
		"Ved kildeangivelser, fx ved literaturhenvisninger eller i lovtekster, adskilles de enkelte dele med komma:<br>\n<br>\n<i>Forlaget Kommakunst, 2011, side 20-23</i><br>\n<br>\n<i>Bistandsloven, § 56, stk 2</i>",
		"4.3",
		"§46.4"
	],
	"%ok-reference": [
		"%ok-reference",
		"Referencer",
		"Ved kildeangivelser, fx ved literaturhenvisninger eller i lovtekster, adskilles de enkelte dele med komma:<br>\n<br>\n<i>Forlaget Kommakunst, 2011, side 20-23</i><br>\n<br>\n<i>Bistandsloven, § 56, stk 2</i>",
		"4.3",
		"§46.4"
	],
	"%nko-reference": [
		"%nko-reference",
		"Reference-komma",
		"Ved en henvisning i parentes er det valgfrit at sætte komma mellem forfatternavn og årstal, alt efter det brugte stilsystem. Det skal dog håndteres éns for hele teksten.<br>\n<br>\n<i>(Jensen &amp; Jaspers(,) 2017)</i><br>\n<br>\n<i>(Johannesen et al.(,) 2004:235)</i>",
		"4.3",
		""
	],
	"%ko-date": [
		"%ko-date",
		"Optionelt dato-komma",
		"Der kan optionelt bruges komma til at separere en dato fra en stedsangivelse eller en anden, præciserende tidsangivelse. Der sættes dog normalt ikke komma mellem ugedag og dato.<br>\n<br>\n<i>Odense(,) 20. september 2015</i><br>\n<br>\n<i>Torsdag[,] den 20. september 2015(,) kl. 16.00</i>",
		"4.4",
		""
	],
	"%nko-date": [
		"%nko-date",
		"Optionelt dato-komma",
		"Der kan optionelt bruges komma til at separere en dato fra en stedsangivelse eller en anden, præciserende tidsangivelse. Der sættes dog normalt ikke komma mellem ugedag og dato.<br>\n<br>\n<i>Odense(,) 20. september 2015</i><br>\n<br>\n<i>Torsdag[,] den 20. september 2015(,) kl. 16.00</i>",
		"4.4",
		""
	],
	"%nok-date": [
		"%nok-date",
		"Optionelt dato-komma",
		"Der kan optionelt bruges komma til at separere en dato fra en stedsangivelse eller en anden, præciserende tidsangivelse. Der sættes dog normalt ikke komma mellem ugedag og dato.<br>\n<br>\n<i>Odense(,) 20. september 2015</i><br>\n<br>\n<i>Torsdag[,] den 20. september 2015(,) kl. 16.00</i>",
		"4.4",
		""
	],
	"%ko": [
		"%ko",
		"Optionelt komma",
		"Her er det ikke påkrævet, men muligt at sætte komma - enten for at lette læsningen eller for at tydeliggøre en bestemt mening.",
		"",
		""
	],
	"%k-extra": [
		"%k-extra",
		"Særfeltskomma, ved sætningstilføjelser (start eller slut)",
		"Der bruges komma til at markere materiale, der står uden for sætningen, dvs. ikke udgør bundne syntaktiske sætningsled. Der kan være tale om (a) tiltaleord, (b) udråb, (c) hilsner, (d) bekræftelser og afvisninger<i>,</i> (e) spørgetilføjelser, (f) frie prædikativer eller (g) såkaldte topikaliseringer.<br>\n<br>\n(a) <i>Lad være, Maria!</i><br>\n<br>\n<i></i><i>Men kære ven, har du aldrig hørt om gaffatape?</i><br>\n<br>\n(b)<i></i> <i>S</i><i>hit, nu skete det igen.</i><br>\n<br>\n(c) <i>Hej</i> <i>(</i><i>Rasmus</i><i>)</i><i>, vil du lige hjælpe mig?</i><br>\n<br>\n(d) <i>Nej, jeg har ikke set hende i lang tid.</i><br>\n<br>\n<i></i><i>Ok, bare gør det!</i><br>\n<br>\n(e) <i>Du har sendt det af sted, vel?</i><br>\n<br>\n(f) <i>Endelig nåede de tilbage til lejren, lettede over ikke at være faret vild.</i><br>\n<br>\n(g) <i>Peter, han er sej.</i><br>\n<br>\n<i></i><i>Han</i> <i>ligner</i><i> en spøgefugl</i><i>,</i><i></i> <i>ham</i><i> Johannes.</i>",
		"",
		"§47.3"
	],
	"%ok-extra": [
		"%ok-extra",
		"Særfeltskomma, ved sætningstilføjelser (start eller slut)",
		"Der bruges komma til at markere materiale, der står uden for sætningen, dvs. ikke udgør bundne syntaktiske sætningsled. Der kan være tale om (a) tiltaleord, (b) udråb, (c) hilsner, (d) bekræftelser og afvisninger<i>,</i> (e) spørgetilføjelser, (f) frie prædikativer eller (g) såkaldte topikaliseringer.<br>\n<br>\n(a) <i>Lad være, Maria!</i><br>\n<br>\n<i></i><i>Men kære ven, har du aldrig hørt om gaffatape?</i><br>\n<br>\n(b)<i></i> <i>S</i><i>hit, nu skete det igen.</i><br>\n<br>\n(c) <i>Hej</i> <i>(</i><i>Rasmus</i><i>)</i><i>, vil du lige hjælpe mig?</i><br>\n<br>\n(d) <i>Nej, jeg har ikke set hende i lang tid.</i><br>\n<br>\n<i></i><i>Ok, bare gør det!</i><br>\n<br>\n(e) <i>Du har sendt det af sted, vel?</i><br>\n<br>\n(f) <i>Endelig nåede de tilbage til lejren, lettede over ikke at være faret vild.</i><br>\n<br>\n(g) <i>Peter, han er sej.</i><br>\n<br>\n<i></i><i>Han</i> <i>ligner</i><i> en spøgefugl</i><i>,</i><i></i> <i>ham</i><i> Johannes.</i>",
		"",
		"§47.3"
	],
	"%nok-extra": [
		"%nok-extra",
		"Forkert særfeltskomma",
		"Der er ikke normalt at sætte komma på dette sted, selvom det føles, som om noget står uden for sætningen her. Problemet opstår især ved hilsner.<br>\n<br>\nKommareglerne ved hilsner (c) er lidt komplicerede. Således skal der være komma mellem fx 'hej' og navnet i et udråb, men ikke, hvis sætningen fortsætter - så kommer kommaet efter navnet.<br>\n<br>\n<i>Hej, Rasmus!</i> (udråb)<br>\n<br>\n<i>Hej Rasmus, har du set Maria?</i> (almindelig sætning)<br>\n<br>\nI en mail, hvor der bruges linjeskift efter navnet, er der slet ikke noget komma, hverken før eller efter navnet. Normalt er der ingenting ud over linjeskift, heller ikke punktum. Især i uformelle mails kan man bruge et udråbstegn, men det gør ikke indledningen til et egentligt udråb, så der skal heller ikke her være komma i midten.<br>\n<br>\nDer fortsættes med stort begyndelsesbogstav, uanset om man har brugt udråbstegn eller bare linjeskift.<br>\n<br>\nBemærk, at sluthilsen håndteres på samme måde - med linjeskift og uden komma.<br>\n<br>\n<i>Hej Rasmus</i><i>(!)</i><br>\n<br>\n<i>Jeg skriver til dig, fordi jeg fylder rundt og gerne vil invitere dig til min fødselsdag.</i>",
		"",
		""
	],
	"%k-explain": [
		"%k-explain",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%k-explain-end": [
		"%k-explain-end",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%k-explain-evt": [
		"%k-explain-evt",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%ko-explain": [
		"%ko-explain",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%ko-explain-end": [
		"%ko-explain-end",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%ok-explain": [
		"%ok-explain",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%ok-explain-end": [
		"%ok-explain-end",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%nko-explain": [
		"%nko-explain",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%nko-explain-end": [
		"%nko-explain-end",
		"Forklaringer og præciseringer",
		"Der sættes komma omkring forklarende eller præciserende tilføjelser. Typisk er der et indledende ord eller udtryk som <i>fx, bl.a., herunder, inkl., uanset:</i><br>\n<br>\n<i>Sommetider får han en depression, f.eks. om vinteren.</i><br>\n<br>\n<i>En konstitueret leder, dvs. en midlertidig leder, har som opgave …</i><br>\n<br>\nHvis tilføjelsen indeholder en ledsætning, bortfalder reglen om optionelt startkomma, og kommaet placeres før det indledende forklaringsudtryk:<br>\n<br>\n<i>Jeg kan desværre ikke hjælpe dig med flytningen, bl.a. fordi jeg skal aflevere min opgave på mandag.</i><br>\n<br>\nNogle ord og udtryk <i>(nemlig, også, dels...dels, enten...eller)</i> bruges både inde i sætningen og foran forklarende tilføjelser. Her bruges der kun komma, hvis der er tale om tilføjelser, dvs. hvis resten af sætningen kan stå alene.<br>\n<br>\n<i>Turen må aflyses, dels på grund af vejret, dels på grund af mangel på tid. (Turen må aflyses.)</i><br>\n<br>\n<i>Det gælder dels udlandsrejser, dels rejser til Grønland. (*Det gælder.)</i>",
		"",
		"§47.4"
	],
	"%ko-paren-group": [
		"%ko-paren-group",
		"Parentetisk indskudskomma",
		"Ligesom ved parentetiske relativsætninger, selvstændige ledsætninger og markerede forklaringer og præciseringer, kan man også bruge parentetisk komma ved indskudte eller tilføjede ordgrupper, hvis disse fungerer som selvstændige led og bryder sætningsstrømmen. Dette komma er valgfrit og sjældent, men bruges sommetider ved præciserende eller koncessive (indrømmende) præpositions- og participiumsforbindelser. Typiske placeringer er lige efter det bøjede verbum, mellem subjekt og verbum eller efter en ellers afsluttet sætning. Bruger man dette komme ved et indskud midt i sætningen, skal der være komma både før og efter.<br>\n<br>\n<i>Irland</i> <i>er</i><i>(,)</i> <i>bortset fra det regnfulde vejr</i><i>(,)</i> <i>et dejligt feriemål</i><i>.</i><br>\n<br>\n<i>Irland</i> <i>er</i><i></i> <i>et dejligt feriemål</i><i>(,)</i> <i>lige</i> <i>bortset fra det regnfulde</i><i> vejr.</i><br>\n<br>\n<i>James Cook</i><i>(,)</i><i> født i fattige kår</i><i>(,)</i><i> men med mod på livet</i><i>(,)</i><i> elskede at rejse.</i><br>\n<br>\nEfter substantiver kan sådanne indskud minde om appositioner (navnetillæg):<br>\n<br>\n<i></i><br>\n<br>\n<i>Regeringen</i><i>(</i><i>,</i><i>)</i><i> og</i> <i>ikke mindst</i><i> finansministeren</i><i>(</i><i>,</i><i>)</i><i> må have vidst det længe.</i>",
		"",
		""
	],
	"%nko-paren-group": [
		"%nko-paren-group",
		"Parentetisk indskudskomma",
		"Ligesom ved parentetiske relativsætninger, selvstændige ledsætninger og markerede forklaringer og præciseringer, kan man også bruge parentetisk komma ved indskudte eller tilføjede ordgrupper, hvis disse fungerer som selvstændige led og bryder sætningsstrømmen. Dette komma er valgfrit og sjældent, men bruges sommetider ved præciserende eller koncessive (indrømmende) præpositions- og participiumsforbindelser. Typiske placeringer er lige efter det bøjede verbum, mellem subjekt og verbum eller efter en ellers afsluttet sætning. Bruger man dette komme ved et indskud midt i sætningen, skal der være komma både før og efter.<br>\n<br>\n<i>Irland</i> <i>er</i><i>(,)</i> <i>bortset fra det regnfulde vejr</i><i>(,)</i> <i>et dejligt feriemål</i><i>.</i><br>\n<br>\n<i>Irland</i> <i>er</i><i></i> <i>et dejligt feriemål</i><i>(,)</i> <i>lige</i> <i>bortset fra det regnfulde</i><i> vejr.</i><br>\n<br>\n<i>James Cook</i><i>(,)</i><i> født i fattige kår</i><i>(,)</i><i> men med mod på livet</i><i>(,)</i><i> elskede at rejse.</i><br>\n<br>\nEfter substantiver kan sådanne indskud minde om appositioner (navnetillæg):<br>\n<br>\n<i></i><br>\n<br>\n<i>Regeringen</i><i>(</i><i>,</i><i>)</i><i> og</i> <i>ikke mindst</i><i> finansministeren</i><i>(</i><i>,</i><i>)</i><i> må have vidst det længe.</i>",
		"",
		""
	],
	"%ko-paren-group-end": [
		"%ko-paren-group-end",
		"Parentetisk indskudskomma",
		"Ligesom ved parentetiske relativsætninger, selvstændige ledsætninger og markerede forklaringer og præciseringer, kan man også bruge parentetisk komma ved indskudte eller tilføjede ordgrupper, hvis disse fungerer som selvstændige led og bryder sætningsstrømmen. Dette komma er valgfrit og sjældent, men bruges sommetider ved præciserende eller koncessive (indrømmende) præpositions- og participiumsforbindelser. Typiske placeringer er lige efter det bøjede verbum, mellem subjekt og verbum eller efter en ellers afsluttet sætning. Bruger man dette komme ved et indskud midt i sætningen, skal der være komma både før og efter.<br>\n<br>\n<i>Irland</i> <i>er</i><i>(,)</i> <i>bortset fra det regnfulde vejr</i><i>(,)</i> <i>et dejligt feriemål</i><i>.</i><br>\n<br>\n<i>Irland</i> <i>er</i><i></i> <i>et dejligt feriemål</i><i>(,)</i> <i>lige</i> <i>bortset fra det regnfulde</i><i> vejr.</i><br>\n<br>\n<i>James Cook</i><i>(,)</i><i> født i fattige kår</i><i>(,)</i><i> men med mod på livet</i><i>(,)</i><i> elskede at rejse.</i><br>\n<br>\nEfter substantiver kan sådanne indskud minde om appositioner (navnetillæg):<br>\n<br>\n<i></i><br>\n<br>\n<i>Regeringen</i><i>(</i><i>,</i><i>)</i><i> og</i> <i>ikke mindst</i><i> finansministeren</i><i>(</i><i>,</i><i>)</i><i> må have vidst det længe.</i>",
		"",
		""
	],
	"%nko-paren-group-end": [
		"%nko-paren-group-end",
		"Parentetisk indskudskomma",
		"Ligesom ved parentetiske relativsætninger, selvstændige ledsætninger og markerede forklaringer og præciseringer, kan man også bruge parentetisk komma ved indskudte eller tilføjede ordgrupper, hvis disse fungerer som selvstændige led og bryder sætningsstrømmen. Dette komma er valgfrit og sjældent, men bruges sommetider ved præciserende eller koncessive (indrømmende) præpositions- og participiumsforbindelser. Typiske placeringer er lige efter det bøjede verbum, mellem subjekt og verbum eller efter en ellers afsluttet sætning. Bruger man dette komme ved et indskud midt i sætningen, skal der være komma både før og efter.<br>\n<br>\n<i>Irland</i> <i>er</i><i>(,)</i> <i>bortset fra det regnfulde vejr</i><i>(,)</i> <i>et dejligt feriemål</i><i>.</i><br>\n<br>\n<i>Irland</i> <i>er</i><i></i> <i>et dejligt feriemål</i><i>(,)</i> <i>lige</i> <i>bortset fra det regnfulde</i><i> vejr.</i><br>\n<br>\n<i>James Cook</i><i>(,)</i><i> født i fattige kår</i><i>(,)</i><i> men med mod på livet</i><i>(,)</i><i> elskede at rejse.</i><br>\n<br>\nEfter substantiver kan sådanne indskud minde om appositioner (navnetillæg):<br>\n<br>\n<i></i><br>\n<br>\n<i>Regeringen</i><i>(</i><i>,</i><i>)</i><i> og</i> <i>ikke mindst</i><i> finansministeren</i><i>(</i><i>,</i><i>)</i><i> må have vidst det længe.</i>",
		"",
		""
	],
	"%k-rel": [
		"%k-rel",
		"Parentetisk relativsætning",
		"Der bruges komma omkring parentetiske (selvstændige) relativsætninger. En relativsætning er parentetisk, hvis den kan udelades, uden at det er meningsforstyrrende. Dette er bl.a. tilfældet, hvor relativsætningen indeholder udtryk som <i>ellers, jo, i øvrigt</i><i>, som bekendt,</i> holdningsadverbier <i>(forhåbentlig, beklageligvis</i><i>, desværre</i><i>)</i> eller adverbier, der udtrykker (u)sandsynlighed <i>(sandsynligvis, næppe</i><i>, nok</i><i>).</i><br>\n<br>\n<i>Jeg har læst de to bøger, som jeg i øvrigt allerede havde set som film.</i><br>\n<br>\n<i>I en toværelses-lejlighed, hvor der jo ikke er plads til mange overnattende gæster, kan sovesofaer være en idé.</i><br>\n<br>\nIkke-parentetiske (essentielle/nødvendige) relativsætninger, dvs. relativsætninger, der ikke kan udelades, har obligatorisk slut-komma og optionelt start-komma, ligesom bundne ledsætninger generelt.<br>\n<br>\n<i>Personer (,) der ikke kan fremvise en negativ corona-test, henvises til udendørsservering.</i>",
		"",
		"§47.5a"
	],
	"%k-rel-end": [
		"%k-rel-end",
		"Parentetisk relativsætning",
		"Der bruges komma omkring parentetiske (selvstændige) relativsætninger. En relativsætning er parentetisk, hvis den kan udelades, uden at det er meningsforstyrrende. Dette er bl.a. tilfældet, hvor relativsætningen indeholder udtryk som <i>ellers, jo, i øvrigt</i><i>, som bekendt,</i> holdningsadverbier <i>(forhåbentlig, beklageligvis</i><i>, desværre</i><i>)</i> eller adverbier, der udtrykker (u)sandsynlighed <i>(sandsynligvis, næppe</i><i>, nok</i><i>).</i><br>\n<br>\n<i>Jeg har læst de to bøger, som jeg i øvrigt allerede havde set som film.</i><br>\n<br>\n<i>I en toværelses-lejlighed, hvor der jo ikke er plads til mange overnattende gæster, kan sovesofaer være en idé.</i><br>\n<br>\nIkke-parentetiske (essentielle/nødvendige) relativsætninger, dvs. relativsætninger, der ikke kan udelades, har obligatorisk slut-komma og optionelt start-komma, ligesom bundne ledsætninger generelt.<br>\n<br>\n<i>Personer (,) der ikke kan fremvise en negativ corona-test, henvises til udendørsservering.</i>",
		"",
		"§47.5a"
	],
	"%ok-rel": [
		"%ok-rel",
		"Parentetisk relativsætning",
		"Der bruges komma omkring parentetiske (selvstændige) relativsætninger. En relativsætning er parentetisk, hvis den kan udelades, uden at det er meningsforstyrrende. Dette er bl.a. tilfældet, hvor relativsætningen indeholder udtryk som <i>ellers, jo, i øvrigt</i><i>, som bekendt,</i> holdningsadverbier <i>(forhåbentlig, beklageligvis</i><i>, desværre</i><i>)</i> eller adverbier, der udtrykker (u)sandsynlighed <i>(sandsynligvis, næppe</i><i>, nok</i><i>).</i><br>\n<br>\n<i>Jeg har læst de to bøger, som jeg i øvrigt allerede havde set som film.</i><br>\n<br>\n<i>I en toværelses-lejlighed, hvor der jo ikke er plads til mange overnattende gæster, kan sovesofaer være en idé.</i><br>\n<br>\nIkke-parentetiske (essentielle/nødvendige) relativsætninger, dvs. relativsætninger, der ikke kan udelades, har obligatorisk slut-komma og optionelt start-komma, ligesom bundne ledsætninger generelt.<br>\n<br>\n<i>Personer (,) der ikke kan fremvise en negativ corona-test, henvises til udendørsservering.</i>",
		"",
		"§47.5a"
	],
	"%ok-rel-end": [
		"%ok-rel-end",
		"Parentetisk relativsætning",
		"Der bruges komma omkring parentetiske (selvstændige) relativsætninger. En relativsætning er parentetisk, hvis den kan udelades, uden at det er meningsforstyrrende. Dette er bl.a. tilfældet, hvor relativsætningen indeholder udtryk som <i>ellers, jo, i øvrigt</i><i>, som bekendt,</i> holdningsadverbier <i>(forhåbentlig, beklageligvis</i><i>, desværre</i><i>)</i> eller adverbier, der udtrykker (u)sandsynlighed <i>(sandsynligvis, næppe</i><i>, nok</i><i>).</i><br>\n<br>\n<i>Jeg har læst de to bøger, som jeg i øvrigt allerede havde set som film.</i><br>\n<br>\n<i>I en toværelses-lejlighed, hvor der jo ikke er plads til mange overnattende gæster, kan sovesofaer være en idé.</i><br>\n<br>\nIkke-parentetiske (essentielle/nødvendige) relativsætninger, dvs. relativsætninger, der ikke kan udelades, har obligatorisk slut-komma og optionelt start-komma, ligesom bundne ledsætninger generelt.<br>\n<br>\n<i>Personer (,) der ikke kan fremvise en negativ corona-test, henvises til udendørsservering.</i>",
		"",
		"§47.5a"
	],
	"%ko-rel": [
		"%ko-rel",
		"Ikke-parentetisk relativsætning",
		"Før en ikke-parentetisk ledsætning er startkomma valgfrit, svarende til andre bundne ledsætninger. Ikke-parentetiske relativsætninger indholder essentiel information og kan ikke droppes uden at forstyrre meningen.<br>\n<br>\n<i>Et firma(,) der ikke tjener penge, vil før eller senere se sin aktiekurs falde.</i><br>\n<br>\n<i>Den bil(,) han havde leaset, var en Porsche.</i>",
		"",
		""
	],
	"%nko-rel": [
		"%nko-rel",
		"Ikke-parentetisk relativsætning",
		"Før en ikke-parentetisk ledsætning er startkomma valgfrit, svarende til andre bundne ledsætninger. Ikke-parentetiske relativsætninger indholder essentiel information og kan ikke droppes uden at forstyrre meningen.<br>\n<br>\n<i>Et firma(,) der ikke tjener penge, vil før eller senere se sin aktiekurs falde.</i><br>\n<br>\n<i>Den bil(,) han havde leaset, var en Porsche.</i>",
		"",
		""
	],
	"%nok-rel": [
		"%nok-rel",
		"Forkert relativkomma",
		"Der skal ikke være komma før pronominet 'der', hvis denne bare fungerer som pladsholder efter et interrogativt subjekt, der indleder en ledsætning med 'hvilken' eller 'hvor'.<br>\n<br>\n<i>Det er svært at sige, hvilken af de mange vine[,] der smagte bedst.</i><br>\n<br>\n<i>Det tog lang tid at nå til en beslutning om, hvor stor en del af budgettet[,] der skulle bruges på vedligeholdelse.</i>",
		"",
		""
	],
	"%k-paren": [
		"%k-paren",
		"Selvstændig (parentetisk) ledsætning",
		"Der sættes obligatorisk komma før og efter parentetiske (selvstændige) ledsætninger, dvs. ledsætninger, der kan udelades uden at ødelægge sætningen. Typiske indledende ord er <i>hvorimod, omend, mens</i> og <i>således at.</i><br>\n<br>\n<i>Han er altædende, hvorimod hun dyrker sit vegetar-image.</i><br>\n<br>\n<i>Man bør sprede sine investeringer, således at aktierne dækker over flere forskellige lande og brancher.</i><br>\n<br>\nOgså kommentartilføjelser adskilles med komma:<br>\n<br>\n<i>De levede, skulle man tro, et helt andet familieliv end vores.</i><br>\n<br>\n<i>Det er sandt, ville jeg mene.</i>",
		"",
		"§47.5b<br>\n<br>\n§49.3"
	],
	"%k-paren-end": [
		"%k-paren-end",
		"Selvstændig (parentetisk) ledsætning",
		"Der sættes obligatorisk komma før og efter parentetiske (selvstændige) ledsætninger, dvs. ledsætninger, der kan udelades uden at ødelægge sætningen. Typiske indledende ord er <i>hvorimod, omend, mens</i> og <i>således at.</i><br>\n<br>\n<i>Han er altædende, hvorimod hun dyrker sit vegetar-image.</i><br>\n<br>\n<i>Man bør sprede sine investeringer, således at aktierne dækker over flere forskellige lande og brancher.</i><br>\n<br>\nOgså kommentartilføjelser adskilles med komma:<br>\n<br>\n<i>De levede, skulle man tro, et helt andet familieliv end vores.</i><br>\n<br>\n<i>Det er sandt, ville jeg mene.</i>",
		"",
		"§47.5b<br>\n<br>\n§49.3"
	],
	"%ok-paren": [
		"%ok-paren",
		"Selvstændig (parentetisk) ledsætning",
		"Der sættes obligatorisk komma før og efter parentetiske (selvstændige) ledsætninger, dvs. ledsætninger, der kan udelades uden at ødelægge sætningen. Typiske indledende ord er <i>hvorimod, omend, mens</i> og <i>således at.</i><br>\n<br>\n<i>Han er altædende, hvorimod hun dyrker sit vegetar-image.</i><br>\n<br>\n<i>Man bør sprede sine investeringer, således at aktierne dækker over flere forskellige lande og brancher.</i><br>\n<br>\nOgså kommentartilføjelser adskilles med komma:<br>\n<br>\n<i>De levede, skulle man tro, et helt andet familieliv end vores.</i><br>\n<br>\n<i>Det er sandt, ville jeg mene.</i>",
		"",
		"§47.5b<br>\n<br>\n§49.3"
	],
	"%ok-paren-end": [
		"%ok-paren-end",
		"Selvstændig (parentetisk) ledsætning",
		"Der sættes obligatorisk komma før og efter parentetiske (selvstændige) ledsætninger, dvs. ledsætninger, der kan udelades uden at ødelægge sætningen. Typiske indledende ord er <i>hvorimod, omend, mens</i> og <i>således at.</i><br>\n<br>\n<i>Han er altædende, hvorimod hun dyrker sit vegetar-image.</i><br>\n<br>\n<i>Man bør sprede sine investeringer, således at aktierne dækker over flere forskellige lande og brancher.</i><br>\n<br>\nOgså kommentartilføjelser adskilles med komma:<br>\n<br>\n<i>De levede, skulle man tro, et helt andet familieliv end vores.</i><br>\n<br>\n<i>Det er sandt, ville jeg mene.</i>",
		"",
		"§47.5b<br>\n<br>\n§49.3"
	],
	"%ko-men": [
		"%ko-men",
		"Valgfrit <i>'men'</i><i>-</i>komma mellem sætningsled",
		"Man kan sætte komma før '<i>men</i>' - også hvor ordet ikke adskiller to sætninger.<br>\n<br>\n<i>Vi tager snart på ferie(,) men har ikke bestilt en rejse endnu.</i>",
		"",
		"§47.6"
	],
	"%nko-men": [
		"%nko-men",
		"Valgfrit <i>'men'</i><i>-</i>komma mellem sætningsled",
		"Man kan sætte komma før '<i>men</i>' - også hvor ordet ikke adskiller to sætninger.<br>\n<br>\n<i>Vi tager snart på ferie(,) men har ikke bestilt en rejse endnu.</i>",
		"",
		"§47.6"
	],
	"%k-men": [
		"%k-men",
		"Obligatorisk <i>'men'-</i>komma ved særlig fremhævelse",
		"Der sættes komma både før og efter '<i>men</i>'-udtryk for at understrege en modsætning.<br>\n<br>\n<i>En træt, men lykkelig, vinder.</i>",
		"",
		"§47.6"
	],
	"%k-men-end": [
		"%k-men-end",
		"Obligatorisk <i>'men'-</i>komma ved særlig fremhævelse",
		"Der sættes komma både før og efter '<i>men</i>'-udtryk for at understrege en modsætning.<br>\n<br>\n<i>En træt, men lykkelig, vinder.</i>",
		"",
		"§47.6"
	],
	"%ok-men": [
		"%ok-men",
		"Obligatorisk <i>'men'-</i>komma ved særlig fremhævelse",
		"Der sættes komma både før og efter '<i>men</i>'-udtryk for at understrege en modsætning.<br>\n<br>\n<i>En træt, men lykkelig, vinder.</i>",
		"",
		"§47.6"
	],
	"%ok-men-end": [
		"%ok-men-end",
		"Obligatorisk <i>'men'-</i>komma ved særlig fremhævelse",
		"Der sættes komma både før og efter '<i>men</i>'-udtryk for at understrege en modsætning.<br>\n<br>\n<i>En træt, men lykkelig, vinder.</i>",
		"",
		"§47.6"
	],
	"%k-main": [
		"%k-main",
		"Komma mellem helsætninger",
		"Helsætninger skal adskilles med komma (§3.1) - der er så at sige tale om en opremsning af flere udsagn. Hvis der er et bindeord mellem sætningerne (<i>og, eller, men, for, så</i>), står kommaet før dette.<br>\n<br>\n<i>Folket brøler, og diktatorerne er bange.</i><br>\n<br>\n<i>Vejen er spærret, så vi må køre udenom.</i><br>\n<br>\n<i>Nogle dansede, andre snakkede.</i><br>\n<br>\nGentagelse af verbal og subjekt betragtes også som en hovedsætning.<br>\n<br>\n<i>Hun er godt nok yndig, er hun.</i><br>\n<br>\nImperativer (bydemåde) regnes også som hovedsætninger, og medmindre handlingen i den anden imperativ er en direkte konsekvens af den første, sættes komma.<br>\n<br>\n<i>Sæt vandet over, og svits løgene!</i>",
		"5.1",
		"§48"
	],
	"%ok-main": [
		"%ok-main",
		"Komma mellem helsætninger",
		"Helsætninger skal adskilles med komma (§3.1) - der er så at sige tale om en opremsning af flere udsagn. Hvis der er et bindeord mellem sætningerne (<i>og, eller, men, for, så</i>), står kommaet før dette.<br>\n<br>\n<i>Folket brøler, og diktatorerne er bange.</i><br>\n<br>\n<i>Vejen er spærret, så vi må køre udenom.</i><br>\n<br>\n<i>Nogle dansede, andre snakkede.</i><br>\n<br>\nGentagelse af verbal og subjekt betragtes også som en hovedsætning.<br>\n<br>\n<i>Hun er godt nok yndig, er hun.</i><br>\n<br>\nImperativer (bydemåde) regnes også som hovedsætninger, og medmindre handlingen i den anden imperativ er en direkte konsekvens af den første, sættes komma.<br>\n<br>\n<i>Sæt vandet over, og svits løgene!</i>",
		"5.1",
		"§48"
	],
	"%k-main-emph": [
		"%k-main-emph",
		"Gentagelseskomma",
		"Der sættes komma før en fremhævende gentagelse af verbal og subjekt sidst i sætningen.<br>\n<br>\n<i>Han er god nok, er han.</i><br>\n<br>\n<i>Han er god nok, han er.</i><br>\n<br>\n<i>Der var ikke meget ved den film, var der?</i><br>\n<br>\n<i>Det hjælper virkelig, det gør.</i>",
		"5.2",
		""
	],
	"%ok-main-emph": [
		"%ok-main-emph",
		"Gentagelseskomma",
		"Der sættes komma før en fremhævende gentagelse af verbal og subjekt sidst i sætningen.<br>\n<br>\n<i>Han er god nok, er han.</i><br>\n<br>\n<i>Han er god nok, han er.</i><br>\n<br>\n<i>Der var ikke meget ved den film, var der?</i><br>\n<br>\n<i>Det hjælper virkelig, det gør.</i>",
		"5.2",
		""
	],
	"%k-main-stop": [
		"%k-main-stop",
		"Komma mellem sætninger",
		"Her synes der at være starten på en ny sætning. Alt efter hvor uafhængige sætningerne er, burde der sættes komma eller punktum.",
		"",
		""
	],
	"%ok-main-stop": [
		"%ok-main-stop",
		"Komma mellem sætninger",
		"Dette komma adskiller to helsætninger. Alt efter hvor uafhængige sætningerne er, kan læsningen evt. lettes ved at sætte punktum i stedet.",
		"",
		""
	],
	"%nok-main": [
		"%nok-main",
		"Forkert helsætningskomma",
		"Hvis en sideordnet sætning deler subjekt (genstandsled) med den første, er der ikke tale om en hel sætning, men kun et prædikat, og hvis der er et bindeord, bruges der ikke komma.<br>\n<br>\n<i>De slukkede lyset, låste huset[,] og tog af sted.</i>",
		"",
		"§48.6"
	],
	"%k-quote-end": [
		"%k-quote-end",
		"Direkte anført tale, slut-komma",
		"Der sættes komma mellem anført tale og den anførende sætning (inquit). Kommaet kan placeres såvel (a) før som (b) efter anførselstegnet, hvor (a) er lidt mere almindelig i dag.<br>\n<br>\n<i>(a) ”Akupunktur ved fødsler,” sagde pindsvinepigen, ”får jeg hver gang. Især sædefødsler.”</i><br>\n<br>\n<i>(b) ”Akupunktur ved fødsler”, sagde pindsvinepigen, ”får jeg hver gang. Især sædefødsler.”</i><br>\n<br>\nCitat-slut-komma kan udelades, hvis citatet slutter med et spørgsmålstegn eller udråbstegn.<br>\n<br>\n<i>&quot;Har du set mit kamera?&quot;(,) spurgte hun.</i><br>\n<br>\nHvis den anførte tale slutter med punktum, kan der ikke samtidigt bruges komma.",
		"10.1",
		"§48.5"
	],
	"%ok-quote-end": [
		"%ok-quote-end",
		"Direkte anført tale, slut-komma",
		"Der sættes komma mellem anført tale og den anførende sætning (inquit). Kommaet kan placeres såvel (a) før som (b) efter anførselstegnet, hvor (a) er lidt mere almindelig i dag.<br>\n<br>\n<i>(a) ”Akupunktur ved fødsler,” sagde pindsvinepigen, ”får jeg hver gang. Især sædefødsler.”</i><br>\n<br>\n<i>(b) ”Akupunktur ved fødsler”, sagde pindsvinepigen, ”får jeg hver gang. Især sædefødsler.”</i><br>\n<br>\nCitat-slut-komma kan udelades, hvis citatet slutter med et spørgsmålstegn eller udråbstegn.<br>\n<br>\n<i>&quot;Har du set mit kamera?&quot;(,) spurgte hun.</i><br>\n<br>\nHvis den anførte tale slutter med punktum, kan der ikke samtidigt bruges komma.",
		"10.1",
		"§48.5"
	],
	"%nko-quote-end": [
		"%nko-quote-end",
		"Direkte anført tale, slut-komma",
		"Der sættes komma mellem anført tale og den anførende sætning (inquit). Kommaet kan placeres såvel (a) før som (b) efter anførselstegnet, hvor (a) er lidt mere almindelig i dag.<br>\n<br>\n<i>(a) ”Akupunktur ved fødsler,” sagde pindsvinepigen, ”får jeg hver gang. Især sædefødsler.”</i><br>\n<br>\n<i>(b) ”Akupunktur ved fødsler”, sagde pindsvinepigen, ”får jeg hver gang. Især sædefødsler.”</i><br>\n<br>\nCitat-slut-komma kan udelades, hvis citatet slutter med et spørgsmålstegn eller udråbstegn.<br>\n<br>\n<i>&quot;Har du set mit kamera?&quot;(,) spurgte hun.</i><br>\n<br>\nHvis den anførte tale slutter med punktum, kan der ikke samtidigt bruges komma.",
		"10.1",
		"§48.5"
	],
	"%k-quote-start": [
		"%k-quote-start",
		"Direkte anført tale, start-komma",
		"Der sættes komma, når anført tale genoptages efter et anførende indskud (inquit):<br>\n<br>\n<i>”Akupunktur ved fødsler”, sagde pindsvine-pigen, ”får jeg hver gang . Især sædefødsler.”</i>",
		"10.1",
		"§48.5"
	],
	"%ok-quote-start": [
		"%ok-quote-start",
		"Direkte anført tale, start-komma",
		"Der sættes komma, når anført tale genoptages efter et anførende indskud (inquit):<br>\n<br>\n<i>”Akupunktur ved fødsler”, sagde pindsvine-pigen, ”får jeg hver gang . Især sædefødsler.”</i>",
		"10.1",
		"§48.5"
	],
	"%nok-quote": [
		"%nok-quote",
		"Forkert anførselskomma",
		"Der bruges ikke anførselskomma efter direkte tale, der slutter med punktum.<br>\n<br>\n<i>&quot;Jeg er træt.&quot;[,] sagde hun.</i><br>\n<br>\nDer er valgtfrit komma efter direkte tale, der slutter med '?' eller '!'<br>\n<br>\n<i>&quot;Luk døren!&quot;(,) råbte hun.</i><br>\n<br>\nNår et (kortere) citat fungerer som sætningsled (fx subjekt eller objekt) i den overordnede sætning, behøver der ikke at stå komma eller kolon..<br>\n<br>\n<i>&quot;Vi klarer det&quot;[,] er nu et politisk citat. (Subjekt)</i><br>\n<br>\n<i>Hun åndede[,] &quot;ja&quot; og skrev under på MeToo-erklæringen. (Objekt)</i><br>\n<br>\nDer bruges heller ikke komma, når citatet udgør en integreret del af sætningen.<br>\n<br>\n<i>Efter festen indrømmede Martina(,) at Vodka[,] &quot;alligevel indeholder marginalt mere alkohol end øl&quot;.</i>",
		"10.1",
		""
	],
	"%k-ellision": [
		"%k-ellision",
		"Ufuldstændig helsætning",
		"Der sættes altid komma før en ny helsætning - også hvis denne mangler sit verbum (udsagnsord). Hvis den ufuldstændige sætning starter med et bindeord (<i>og, men, eller</i>), står kommaet foran dette.<br>\n<br>\n<i>Mænd er fra Mars, og kvinder fra Venus.</i><br>\n<br>\n<i>Jeg gik til venstre, han til højre</i><br>\n<br>\nModsat skal der ikke være komma før en sideordnet ufuldstændig (verbumsløs) <b>led</b>sætning. Dette gælder dog kun, hvis der er en konjunktion <i>(og/eller) -</i> ellers er der brug for et opremsningskomma.<br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin[,] og hun en kage.</i><br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin, hun en kage.</i>",
		"7",
		"§48.6"
	],
	"%ok-ellision": [
		"%ok-ellision",
		"Ufuldstændig helsætning",
		"Der sættes altid komma før en ny helsætning - også hvis denne mangler sit verbum (udsagnsord). Hvis den ufuldstændige sætning starter med et bindeord (<i>og, men, eller</i>), står kommaet foran dette.<br>\n<br>\n<i>Mænd er fra Mars, og kvinder fra Venus.</i><br>\n<br>\n<i>Jeg gik til venstre, han til højre</i><br>\n<br>\nModsat skal der ikke være komma før en sideordnet ufuldstændig (verbumsløs) <b>led</b>sætning. Dette gælder dog kun, hvis der er en konjunktion <i>(og/eller) -</i> ellers er der brug for et opremsningskomma.<br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin[,] og hun en kage.</i><br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin, hun en kage.</i>",
		"7",
		"§48.6"
	],
	"%k-FSend": [
		"%k-FSend",
		"Fast slutkomma ved ledsætninger",
		"Ledsætninger er sætninger, der fungerer som led i en anden, overordnet sætning eller ordgruppe. Der sættes <i>altid</i> komma efter en ledsætning, medmindre ledsætningen står sidst i sætningen.<br>\n<br>\n<i>Hvis du vil vinde, skal du træne.</i><br>\n<br>\n<i>Selvom en struds har vinger, kan den ikke flyve.</i><br>\n<br>\n<i>Når den overordnede sætning fortsætter med en ny ledsætning, er kommaet mellem ledsætningerne et (obligatorisk) slut-komma for den første ledsætning, ikke et (valgfrit) start-komma for den anden.</i><br>\n<br>\n<i>(a) Vi havde allerede hørt(,) at bryllupet var aflyst, da Peter ringede.</i><br>\n<br>\nTil gengæld er kommaet før den anden ledsætning et (valgfrit) startkomma, hvis denne er underordnet den første ledsætning snarere end hovedsætningen:<br>\n<br>\n<i>(b) Vi havde allerede hørt(,) at bryllupet var aflyst(,) fordi Peter havde fået kolde fødder.</i><br>\n<br>\nMed Nyt Komma er tegnsætningen altså forskellig i (a) og (b), mens den er éns med Grammatisk Komma.",
		"6.1",
		"§49.1"
	],
	"%ok-FSend": [
		"%ok-FSend",
		"Fast slutkomma ved ledsætninger",
		"Ledsætninger er sætninger, der fungerer som led i en anden, overordnet sætning eller ordgruppe. Der sættes <i>altid</i> komma efter en ledsætning, medmindre ledsætningen står sidst i sætningen.<br>\n<br>\n<i>Hvis du vil vinde, skal du træne.</i><br>\n<br>\n<i>Selvom en struds har vinger, kan den ikke flyve.</i><br>\n<br>\n<i>Når den overordnede sætning fortsætter med en ny ledsætning, er kommaet mellem ledsætningerne et (obligatorisk) slut-komma for den første ledsætning, ikke et (valgfrit) start-komma for den anden.</i><br>\n<br>\n<i>(a) Vi havde allerede hørt(,) at bryllupet var aflyst, da Peter ringede.</i><br>\n<br>\nTil gengæld er kommaet før den anden ledsætning et (valgfrit) startkomma, hvis denne er underordnet den første ledsætning snarere end hovedsætningen:<br>\n<br>\n<i>(b) Vi havde allerede hørt(,) at bryllupet var aflyst(,) fordi Peter havde fået kolde fødder.</i><br>\n<br>\nMed Nyt Komma er tegnsætningen altså forskellig i (a) og (b), mens den er éns med Grammatisk Komma.",
		"6.1",
		"§49.1"
	],
	"%ko-FSstart": [
		"%ko-FSstart",
		"Valgfrit startkomma ved ledsætninger",
		"For at lette læsningen, kan man markere starten af en ledsætning med komma. Dette er i alle tilfælde obligatorisk ved brug af Grammatisk Komma og gør det nemmere at afkode sætningsstrukturen, især når der mangler et bindeord, eller når bindeordet ikke er det første ord i ledsætningen. Bruger man derimod Nyt Komma, anbefales det at udelade kommaet før ikke-selvstændige ledsætninger, dvs. før ledsætninger, der udgør en integreret del af den overordnede sætning.<br>\n<br>\n<i>Jeg tror(,) han lyver.</i><br>\n<br>\n<i>Det er vigtigt(,) at du kommer.</i><br>\n<br>\n<i>Computerne blev stjålet(,) uden at nogen opdagede det.</i><br>\n<br>\n<i>Ved du(,) hvem der har gjort det?</i><br>\n<br>\n<i>Godt(,) du kan lide jordbærtærte.</i><br>\n<br>\n<i>Hun fik mistanke om(,) at noget var galt.</i><br>\n<br>\nUanset om man bruger det valgfrie startkomma eller ej, har ledsætningen altid slutkomma:<br>\n<br>\n<i>Hans bemærkning om(,) at kvinder burde holde sig fra fodbold, faldt ikke i god jord.</i><br>\n<br>\nUanset om man bruger Grammatisk Komma eller Nyt Komma, er startkomma obligatorisk ved selvstændige (parentetiske) ledsætninger, herunder parentetiske relativsætninger. Selvstændige ledsætninger kan udelades uden at ødelægge sætningen og indeholder ofte ord, der markerer dette<i> (i øvrigt)</i> eller udtrykker et forbehold <i>(uanset, omend, hvorimod)</i><i>,</i> en usikkerhed <i>(formodentlig, sandsynligvis, måske)</i> eller en vurdering <i>(heldigvis).</i><br>\n<br>\n<i>Han er altædende, hvorimod hun dyrker sit vegetar-image.</i><br>\n<br>\n<i>Jeg har læst de to bøger, som jeg i øvrigt allerede havde set som film.</i><br>\n<br>\n<i>Når den overordnede sætning fortsætter med en ny ledsætning, er kommaet mellem ledsætningerne et (obligatorisk) slut-komma for den første ledsætning, ikke et (valgfrit) startkomma for den anden.</i><br>\n<br>\n<i>Vi havde allerede hørt(,) at bryllupet var aflyst, da Peter ringede.</i><br>\n<br>\nHvis ledsætningen indledes af en underordnende konjunktion <i>(</i>bindeord som <i>at, fordi, selvom etc.)</i> eller hv-ord <i>(hvem, hvad, hvilken, etc.)</i><i>,</i> placeres<i></i> komma som udgangspunkt umiddelbart før dette underordnende ord. Men hvis der er andre indledende ord eller ordforbindelser før det underordnende ord, rykkes komma tilsvarende længere til venstre. Sådanne ord kan være præpositioner, sammenligningskonjunktioner eller adverbialer:<br>\n<br>\n(a) præposition (forholdsord)<br>\n<br>\n<i>De fjernede cyklen(,) <b>uden</b> at han opdagede det.</i><br>\n<br>\n<i>Du kan få rabat(,) <b>mod</b>[,] at du selv afhenter varen.</i><br>\n<br>\n<i>Han inviterede hele landsbyen(,) <b>i anledning af</b>[,] at han blev 50.</i><br>\n<br>\n(b) sammenligningskonjunktion (<i>som, end</i>)<br>\n<br>\n<i>Det var nemmere</i><i>(</i><i>,</i><i>)</i><i></i> <b><i>end</i></b><i> hvis jeg havde været alene.</i><br>\n<br>\n(c) visse participier og andre udtryk brugt som konjunktion/præposition <i>(uanset, forudsat</i><i>, lige</i><i></i> <i>meget,</i> <i>ligegyldigt,</i> <i>alt efter</i><i>)</i><br>\n<br>\n<i>Du kan også få kage(,) <b>forudsat</b>[,] der er nok til alle.</i><br>\n<br>\n<i>Her får alle hjælp(,) <b>l</b><b>ige</b><b></b> <b>meget</b>[,] hvor de kommer fra.</i><br>\n<br>\n(d) adverbial (biled)<br>\n<br>\n<i>Du skal give besked(,) <b>en måned</b> før du skal rejse.</i><br>\n<br>\nKomma sættes dog efter adverbialet ved tidskonjunktionerne <i>da, når</i> eller <i>mens:</i><br>\n<br>\n<i>Du kan kigge forbi</i> <b><i>en aften</i></b><i>(</i><i>,</i><i>)</i><i> når du har tid.</i><br>\n<br>\nMen hvis tidskonkunktionen er udeladt, er der to muligheder - startkommaet kan så sættes enten før eller efter adverbialet:<br>\n<br>\n<i>Vi er altid på stranden de dage(,) solen skinner.</i><br>\n<br>\n<i>Vi er altid på stranden(,) de dage solen skinner.</i><br>\n<br>\nMan taler om sætningsknuder, når en del af ledsætningen flyttes op foran hovedsætningen, således at denne omsluttes af ledsætninger. Her kan man sætte et valgfrit startkomma til at markere brudet mellem hovedsætning og ledsætning.<br>\n<br>\n<i>Det tror jeg(,) at han vil støtte.</i><br>\n<br>\n<i>Hvem synes I(,) vi skal spørge?</i>",
		"6.2",
		"§49.1<br>\n<br>\n§49.5"
	],
	"%nko-FSstart": [
		"%nko-FSstart",
		"Valgfrit startkomma ved ledsætninger",
		"For at lette læsningen, kan man markere starten af en ledsætning med komma. Dette er i alle tilfælde obligatorisk ved brug af Grammatisk Komma og gør det nemmere at afkode sætningsstrukturen, især når der mangler et bindeord, eller når bindeordet ikke er det første ord i ledsætningen. Bruger man derimod Nyt Komma, anbefales det at udelade kommaet før ikke-selvstændige ledsætninger, dvs. før ledsætninger, der udgør en integreret del af den overordnede sætning.<br>\n<br>\n<i>Jeg tror(,) han lyver.</i><br>\n<br>\n<i>Det er vigtigt(,) at du kommer.</i><br>\n<br>\n<i>Computerne blev stjålet(,) uden at nogen opdagede det.</i><br>\n<br>\n<i>Ved du(,) hvem der har gjort det?</i><br>\n<br>\n<i>Godt(,) du kan lide jordbærtærte.</i><br>\n<br>\n<i>Hun fik mistanke om(,) at noget var galt.</i><br>\n<br>\nUanset om man bruger det valgfrie startkomma eller ej, har ledsætningen altid slutkomma:<br>\n<br>\n<i>Hans bemærkning om(,) at kvinder burde holde sig fra fodbold, faldt ikke i god jord.</i><br>\n<br>\nUanset om man bruger Grammatisk Komma eller Nyt Komma, er startkomma obligatorisk ved selvstændige (parentetiske) ledsætninger, herunder parentetiske relativsætninger. Selvstændige ledsætninger kan udelades uden at ødelægge sætningen og indeholder ofte ord, der markerer dette<i> (i øvrigt)</i> eller udtrykker et forbehold <i>(uanset, omend, hvorimod)</i><i>,</i> en usikkerhed <i>(formodentlig, sandsynligvis, måske)</i> eller en vurdering <i>(heldigvis).</i><br>\n<br>\n<i>Han er altædende, hvorimod hun dyrker sit vegetar-image.</i><br>\n<br>\n<i>Jeg har læst de to bøger, som jeg i øvrigt allerede havde set som film.</i><br>\n<br>\n<i>Når den overordnede sætning fortsætter med en ny ledsætning, er kommaet mellem ledsætningerne et (obligatorisk) slut-komma for den første ledsætning, ikke et (valgfrit) startkomma for den anden.</i><br>\n<br>\n<i>Vi havde allerede hørt(,) at bryllupet var aflyst, da Peter ringede.</i><br>\n<br>\nHvis ledsætningen indledes af en underordnende konjunktion <i>(</i>bindeord som <i>at, fordi, selvom etc.)</i> eller hv-ord <i>(hvem, hvad, hvilken, etc.)</i><i>,</i> placeres<i></i> komma som udgangspunkt umiddelbart før dette underordnende ord. Men hvis der er andre indledende ord eller ordforbindelser før det underordnende ord, rykkes komma tilsvarende længere til venstre. Sådanne ord kan være præpositioner, sammenligningskonjunktioner eller adverbialer:<br>\n<br>\n(a) præposition (forholdsord)<br>\n<br>\n<i>De fjernede cyklen(,) <b>uden</b> at han opdagede det.</i><br>\n<br>\n<i>Du kan få rabat(,) <b>mod</b>[,] at du selv afhenter varen.</i><br>\n<br>\n<i>Han inviterede hele landsbyen(,) <b>i anledning af</b>[,] at han blev 50.</i><br>\n<br>\n(b) sammenligningskonjunktion (<i>som, end</i>)<br>\n<br>\n<i>Det var nemmere</i><i>(</i><i>,</i><i>)</i><i></i> <b><i>end</i></b><i> hvis jeg havde været alene.</i><br>\n<br>\n(c) visse participier og andre udtryk brugt som konjunktion/præposition <i>(uanset, forudsat</i><i>, lige</i><i></i> <i>meget,</i> <i>ligegyldigt,</i> <i>alt efter</i><i>)</i><br>\n<br>\n<i>Du kan også få kage(,) <b>forudsat</b>[,] der er nok til alle.</i><br>\n<br>\n<i>Her får alle hjælp(,) <b>l</b><b>ige</b><b></b> <b>meget</b>[,] hvor de kommer fra.</i><br>\n<br>\n(d) adverbial (biled)<br>\n<br>\n<i>Du skal give besked(,) <b>en måned</b> før du skal rejse.</i><br>\n<br>\nKomma sættes dog efter adverbialet ved tidskonjunktionerne <i>da, når</i> eller <i>mens:</i><br>\n<br>\n<i>Du kan kigge forbi</i> <b><i>en aften</i></b><i>(</i><i>,</i><i>)</i><i> når du har tid.</i><br>\n<br>\nMen hvis tidskonkunktionen er udeladt, er der to muligheder - startkommaet kan så sættes enten før eller efter adverbialet:<br>\n<br>\n<i>Vi er altid på stranden de dage(,) solen skinner.</i><br>\n<br>\n<i>Vi er altid på stranden(,) de dage solen skinner.</i><br>\n<br>\nMan taler om sætningsknuder, når en del af ledsætningen flyttes op foran hovedsætningen, således at denne omsluttes af ledsætninger. Her kan man sætte et valgfrit startkomma til at markere brudet mellem hovedsætning og ledsætning.<br>\n<br>\n<i>Det tror jeg(,) at han vil støtte.</i><br>\n<br>\n<i>Hvem synes I(,) vi skal spørge?</i>",
		"6.2",
		"§49.1<br>\n<br>\n§49.5"
	],
	"%k-FSco": [
		"%k-FSco",
		"Komma mellem sideordnede ledsætninger",
		"Der sættes komma mellem sideordnede ledsætninger, til venstre for <i>og/eller:</i><br>\n<br>\n<i>Hvis du har lyst, og hvis vejret er til det, kan vi tage ud at sejle.</i><br>\n<br>\nDette komma er et sideordningskomma og ikke et startkomma, så det skal derfor bruges, uanset om man er tilhænger af Nyt Komma og derfor ikke har sat komma før den første ledsætning:<br>\n<br>\n<i>Han fortalte(,) at han havde solgt sin bil, og at han regnede med at købe en elcykel i stedet.</i><br>\n<br>\nDog må der ikke stå sideordningskomma, hvis de sideordnede ledsætninger er ufuldstændige (dvs. uden verbum):<br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin[,] og hun en kage.</i><br>\n<br>\nKommaet mellem sideordnede ledsætninger kan valgfrit udelades, hvis de har fælles indledningsordet.<br>\n<br>\n<i>Hvis du har lyst(,) og vejret er til det, kan vi tage ud at sejle.</i>",
		"17.1<br>\n<br>\n17.3",
		"§49.2a"
	],
	"%ok-FSco": [
		"%ok-FSco",
		"Komma mellem sideordnede ledsætninger",
		"Der sættes komma mellem sideordnede ledsætninger, til venstre for <i>og/eller:</i><br>\n<br>\n<i>Hvis du har lyst, og hvis vejret er til det, kan vi tage ud at sejle.</i><br>\n<br>\nDette komma er et sideordningskomma og ikke et startkomma, så det skal derfor bruges, uanset om man er tilhænger af Nyt Komma og derfor ikke har sat komma før den første ledsætning:<br>\n<br>\n<i>Han fortalte(,) at han havde solgt sin bil, og at han regnede med at købe en elcykel i stedet.</i><br>\n<br>\nDog må der ikke stå sideordningskomma, hvis de sideordnede ledsætninger er ufuldstændige (dvs. uden verbum):<br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin[,] og hun en kage.</i><br>\n<br>\nKommaet mellem sideordnede ledsætninger kan valgfrit udelades, hvis de har fælles indledningsordet.<br>\n<br>\n<i>Hvis du har lyst(,) og vejret er til det, kan vi tage ud at sejle.</i>",
		"17.1<br>\n<br>\n17.3",
		"§49.2a"
	],
	"%ko-FSco": [
		"%ko-FSco",
		"Valgfrit komma ved ledsætninger der deler konjunktion",
		"Hvis to ledsætninger deler konjunktion, er det valgfrit at sætte komma imellem dem:<br>\n<br>\n<i>Hvis han igen er syg(,) og hun ikke vil rejse alene, må vi flytte ferien.</i>",
		"17.3",
		"§49.2b"
	],
	"%nko-FSco": [
		"%nko-FSco",
		"Valgfrit komma ved ledsætninger der deler konjunktion",
		"Hvis to ledsætninger deler konjunktion, er det valgfrit at sætte komma imellem dem:<br>\n<br>\n<i>Hvis han igen er syg(,) og hun ikke vil rejse alene, må vi flytte ferien.</i>",
		"17.3",
		"§49.2b"
	],
	"%nok-FSstart": [
		"%nok-FSstart",
		"Forkert startkomma",
		"Uanset om man bruger startkomma, sættes der aldrig komma mellem en konjunktion (<i>og, eller, men</i><i>, for, så,</i> <i>at</i>) og en efterfølgende ledsætning. Hvis der er to konjunktioner i træk, placeres startkommaet før den første.<br>\n<br>\n<i>Han var sulten(,) og[,] fordi køleskabet var tomt, købte han ind.</i><br>\n<br>\n<i>Du skal tage hynderne ind(,) for[,]</i> <i>hvis der falder dug, kan vi ikke bruge dem til morgenmaden.</i><br>\n<br>\n<i>Han sagde(,) at[,] hvis du vil med, skal du skynde dig.</i><br>\n<br>\nStartkomma skal rykkes til venstre eller - i starten af sætningen - droppes helt, hvis der før en konjunktion eller et <i>hv-</i>ord står en præposition (forholdsord), '<i>som', 'end'</i> eller et andet udtryk, der også er del af ledsætningen:<br>\n<br>\n<i>Du kan få rabat(,) mod[,] at du selv afhenter varen.</i><br>\n<br>\n<i>Han inviterede hele landsbyen(,) i anledning af[,] at han blev 50.</i><br>\n<br>\n<i>Hun er ked af det(,) fordi[,] [at] hendes kat har ædt hamstret.</i><br>\n<br>\n<i>Uanset[,] hvem du spørger, vil du få samme svar.</i><br>\n<br>\nHvis præpositionen derimod hører til den overordnede sætning <i>(tror på ...)</i>, og ikke til ledsætningen <i>(... at)</i>, står startkomma direkte før konjunktionen:<br>\n<br>\n<i>Jeg tror[,] på, at vi vinder i aften.</i>",
		"6.5",
		"§49.4<br>\n<br>\n§49.1"
	],
	"%ko-ellision-end": [
		"%ko-ellision-end",
		"Valgfrit komma efter ufuldstændig ledsætning o.l.",
		"Efter indledende ufuldstændige ledsætninger uden verbal kan der valgfrit sættes slutkomma. Det samme gælder faste udtryk, hvis de kan opfattes som ufuldstændige ledsætninger. Især ved sidstnævnte er der dog en tendens til at droppe slutkomma.<br>\n<br>\n<i>Som [det] tidligere [blev] nævnt(,) er bilen næsten ny.</i><br>\n<br>\n<i>Hvor [det er] muligt(,) vil vi hjælpe med transporten.</i><br>\n<br>\n<i>Hvis ikke (,) finder vi en anden løsning.</i><br>\n<br>\n<i>Skønt gammeldags(,) er det en smuk film.</i>",
		"7.2.1",
		"§49.6a"
	],
	"%nko-ellision-end": [
		"%nko-ellision-end",
		"Valgfrit komma efter ufuldstændig ledsætning o.l.",
		"Efter indledende ufuldstændige ledsætninger uden verbal kan der valgfrit sættes slutkomma. Det samme gælder faste udtryk, hvis de kan opfattes som ufuldstændige ledsætninger. Især ved sidstnævnte er der dog en tendens til at droppe slutkomma.<br>\n<br>\n<i>Som [det] tidligere [blev] nævnt(,) er bilen næsten ny.</i><br>\n<br>\n<i>Hvor [det er] muligt(,) vil vi hjælpe med transporten.</i><br>\n<br>\n<i>Hvis ikke (,) finder vi en anden løsning.</i><br>\n<br>\n<i>Skønt gammeldags(,) er det en smuk film.</i>",
		"7.2.1",
		"§49.6a"
	],
	"%nok-ellision": [
		"%nok-ellision",
		"Ikke komma før ufuldstændig ledsætning o.l.",
		"Der bruges normalt ikke komma <i>før</i> ufuldstændige ledsætninger (sætninger uden verbal), heller ikke når de er sideordnet. Det samme gælder faste udtryk, hvis de kan opfattes som ufuldstændige ledsætninger.<br>\n<br>\n<i>De aftalte(,) at han skulle medbringe vin[,] og hun en kage.</i><br>\n<br>\n<i>Skabet samles[,] som vist.</i><br>\n<br>\n<i>Jeg hader rucola lige så meget[,] som du.</i><br>\n<br>\nDette gælder, selv hvor den ufuldstændige ledsætning <i>har</i> fået slutkomma:<br>\n<br>\n<i>Vi forsikrer kun skader[,] opstået under selve rejsen(,) og henviser i øvrigt til forbeholdene i policen.</i><br>\n<br>\nDer sættes heller ikke komma, når en ledsætning er reduceret til et enkelt 'hv-' udtryk.<br>\n<br>\n<i>Vi får gæster. Vi ved bare ikke[,] hvornår / hvor mange</i><br>\n<br>\n<i>Han spiller tennis i aften, men jeg ved ikke[,] med hvem.</i><br>\n<br>\nTil gengæld skal der sættes komma mellem ufuldstændige helsætninger:<br>\n<br>\n<i>Mænd er fra Mars, og kvinder fra Venus.</i><br>\n<br>\nBemærk også, at der naturligvis skal stå opremsningskomma ved sideordning af både hoved- og ledsætninger, hvis der ikke er en konjunktion (<i>og/men</i>) imellem dem:<br>\n<br>\n<i>Jeg gik til venstre, han til højre.</i><br>\n<br>\n<i>De aftalte, at han skulle medbringe vin, hun en kage.</i>",
		"7.2.2",
		"§49.6b"
	],
	"%ko-ellision": [
		"%ko-ellision",
		"Parentetisk ufuldstændig ledsætning",
		"Normalt sættes ikke komma før ufuldstændige ledsætninger. Men der kan gøres en undtagelse, hvis den ufuldstændige ledsætning er parentetisk, dvs. indskudt eller efterstillet med en høj grad af selvstændighed.<br>\n<br>\n<i>Jeg skal simpelthen på ferie(,) lige meget hvor.</i><br>\n<br>\n<i>Hun elsker at skændes om politik(,) uanset med hvem.</i><br>\n<br>\n<i>Irland er(,) uanset hvornår(,) et dejligt feriemål.</i>",
		"7.2.4",
		"§49.6b"
	],
	"%nko-ellision": [
		"%nko-ellision",
		"Parentetisk ufuldstændig ledsætning",
		"Normalt sættes ikke komma før ufuldstændige ledsætninger. Men der kan gøres en undtagelse, hvis den ufuldstændige ledsætning er parentetisk, dvs. indskudt eller efterstillet med en høj grad af selvstændighed.<br>\n<br>\n<i>Jeg skal simpelthen på ferie(,) lige meget hvor.</i><br>\n<br>\n<i>Hun elsker at skændes om politik(,) uanset med hvem.</i><br>\n<br>\n<i>Irland er(,) uanset hvornår(,) et dejligt feriemål.</i>",
		"7.2.4",
		"§49.6b"
	],
	"%ko-tangle": [
		"%ko-tangle",
		"Sætningsknude",
		"Sætningsknuder er konstruktioner, hvor en del af en efterstillet ledsætning er løftet frem foran den overordnede sætning. Man kan lette læsningen ved at sætte et (valgfrit) startkomma dér, hvor brudet er mellem den overordnede sætning og den trunkerede ledsætning.<br>\n<br>\n<i>Peter tror jeg<b>(,)</b> (at) han vil støtte. (= Jeg tror(,) at han vil støtte Peter.)</i><br>\n<br>\n<i>Det er der ikke noget<b>(,)</b> der tyder på. (= Der er ikke noget(,) der tyder på det.)</i><br>\n<br>\nBemærk, at den overordnede sætning selv kan være en (anden) ledsætning:<br>\n<br>\n<i>Jeg har endelig mødt en politiker(,) som jeg kan forsvare<b>(,)</b> at jeg vil støtte.</i><br>\n<br>\n<i>(= Jeg har endelig mødt en politiker(,) hvor jeg kan forsvare(,) at jeg vil støtte ham.)</i><br>\n<br>\n<i>De har oplevet en kontrol(,) som nogle mener(,) nærmer sig sexchikane.</i><br>\n<br>\n<i>(= De har oplevet en kontrol, om hvilken nogle mener, at den nærmer sig sexchikane.)</i><br>\n<br>\nNogle gange bliver det led, der løftes ud af ledsætningen, løftet hele to niveauer op. I nedenstående eksempel stammer det indledende 'det' fra den sidste ledsætning, der er objektsætning i en anden objektsætning, der igen er underordnet hovedsætningen 'tror jeg'.<br>\n<br>\n<i>Det tror jeg(,) at han ved(,) at vi gør.</i><br>\n<br>\nHer er det det første komma, der fungerer som sætningsknude-komma, mens det andet er et almindeligt startkomma.",
		"8",
		"49.5"
	],
	"%nko-tangle": [
		"%nko-tangle",
		"Sætningsknude",
		"Sætningsknuder er konstruktioner, hvor en del af en efterstillet ledsætning er løftet frem foran den overordnede sætning. Man kan lette læsningen ved at sætte et (valgfrit) startkomma dér, hvor brudet er mellem den overordnede sætning og den trunkerede ledsætning.<br>\n<br>\n<i>Peter tror jeg<b>(,)</b> (at) han vil støtte. (= Jeg tror(,) at han vil støtte Peter.)</i><br>\n<br>\n<i>Det er der ikke noget<b>(,)</b> der tyder på. (= Der er ikke noget(,) der tyder på det.)</i><br>\n<br>\nBemærk, at den overordnede sætning selv kan være en (anden) ledsætning:<br>\n<br>\n<i>Jeg har endelig mødt en politiker(,) som jeg kan forsvare<b>(,)</b> at jeg vil støtte.</i><br>\n<br>\n<i>(= Jeg har endelig mødt en politiker(,) hvor jeg kan forsvare(,) at jeg vil støtte ham.)</i><br>\n<br>\n<i>De har oplevet en kontrol(,) som nogle mener(,) nærmer sig sexchikane.</i><br>\n<br>\n<i>(= De har oplevet en kontrol, om hvilken nogle mener, at den nærmer sig sexchikane.)</i><br>\n<br>\nNogle gange bliver det led, der løftes ud af ledsætningen, løftet hele to niveauer op. I nedenstående eksempel stammer det indledende 'det' fra den sidste ledsætning, der er objektsætning i en anden objektsætning, der igen er underordnet hovedsætningen 'tror jeg'.<br>\n<br>\n<i>Det tror jeg(,) at han ved(,) at vi gør.</i><br>\n<br>\nHer er det det første komma, der fungerer som sætningsknude-komma, mens det andet er et almindeligt startkomma.",
		"8",
		"49.5"
	],
	"%ko-cleft": [
		"%ko-cleft",
		"Kløvningskomma",
		"En sætningskløvning er en konstruktion, hvor et led i sætningen fremhæves med 'Det er/var'. Resten af sætningen har form af en relativsætning, der efterfølger det fremhævede led. Det letter læsningen, at markere kløvningen med et (valgfrit) komma.<br>\n<br>\n<i>Det var lægehelikopteren(,) (som) vi så.</i><br>\n<br>\n<i>Det er Maria(,) (som) han er vild med.</i><br>\n<br>\n<i>Det er Peter(,) der har sagt det.</i><br>\n<br>\nHvis de fremhævede sætningsled er et adverbial, følger der en <i>at-</i>sætning snarere end en relativsætning:<br>\n<br>\n<i>Det var i Frankrig(,) (at) han mødte hende.</i><br>\n<br>\nBemærk, at det fremhævede element kan stamme fra en efterstillet ledsætning.<br>\n<br>\n<i>Det er så der(,) jeg synes(,) kæden hopper af for ham.</i><br>\n<br>\nHer er det første komma et kløvningskomma, mens det andet er et almindeligt startkomma.",
		"9",
		""
	],
	"%nko-cleft": [
		"%nko-cleft",
		"Kløvningskomma",
		"En sætningskløvning er en konstruktion, hvor et led i sætningen fremhæves med 'Det er/var'. Resten af sætningen har form af en relativsætning, der efterfølger det fremhævede led. Det letter læsningen, at markere kløvningen med et (valgfrit) komma.<br>\n<br>\n<i>Det var lægehelikopteren(,) (som) vi så.</i><br>\n<br>\n<i>Det er Maria(,) (som) han er vild med.</i><br>\n<br>\n<i>Det er Peter(,) der har sagt det.</i><br>\n<br>\nHvis de fremhævede sætningsled er et adverbial, følger der en <i>at-</i>sætning snarere end en relativsætning:<br>\n<br>\n<i>Det var i Frankrig(,) (at) han mødte hende.</i><br>\n<br>\nBemærk, at det fremhævede element kan stamme fra en efterstillet ledsætning.<br>\n<br>\n<i>Det er så der(,) jeg synes(,) kæden hopper af for ham.</i><br>\n<br>\nHer er det første komma et kløvningskomma, mens det andet er et almindeligt startkomma.",
		"9",
		""
	],
	"%nok-inf": [
		"%nok-inf",
		"Ikke komma før infinitiv",
		"På dansk sætter man ikke komma før infinitiv-konstruktioner. Man skal i denne forbindelse gøre sig klart, om ordet 'at' fungerer som konjunktion (valgfrit startkomma) eller som infinitiv-markør (uden komma).<br>\n<br>\n<i>Hele formiddagen forsøgte han[,] at komme igennem til Skat på telefonen.</i><br>\n<br>\nDer bruges heller ikke komma før sideordnede infinitiver, når disse lægger sig til et hjælpeverbum uden 'at':<br>\n<br>\n<i>Han lovede at gå tur med hunden[,] og at vande blomsterne.</i>",
		"11",
		""
	],
	"%nok-inf-end": [
		"%nok-inf-end",
		"Ikke komma efter infinitiv",
		"På dansk sætter man ikke komma efter infinitiv-sætninger. Man skal i denne forbindelse gøre sig klart, om ordet 'at' fungerer som konjunktion (valgfrit startkomma) eller som infinitiv-markør (uden komma).<br>\n<br>\n<i>At følge med i spanske serier på Netflix[,] er en god måde at øve sproget på.</i>",
		"11",
		""
	],
	"%nok-intro": [
		"%nok-intro",
		"Forkert indledningskomma",
		"I modsætning til engelsk, har dansk ikke noget indledningskomma efter indledende præpositionsforbindelser (a-b) og andre adverbialer (c). Det skal heller ikke være komma efter participiumsforbindelser, hvor participiet fungerer som en præposition (d).<br>\n<br>\n<i>(a) Med moms og afgifter[,] er bensinprisen steget 20% siden nytår.</i><br>\n<br>\n<i>(b) Sent fredag aften[,] meddelte regeringen, at grænserne igen var åbne.</i><br>\n<br>\n<i>(c) Bortset fra det regnfulde vejr[,] er Irland et dejligt feriemål.</i><br>\n<br>\n<i>(d) Uanset vejret[,] skal vi sejle i morgen.</i><br>\n<br>\nKun hvis en indledende participiumsfobindelse kan tolkes som en ufuldstændig sætning, er der mulighed for at sætte et valgfrit slutkomma efter den.<br>\n<br>\n<i>Som [det] tidligere [blev] nævnt(,) er bilen næsten ny.</i><br>\n<br>\n<i>Fratrukket udgifter(,) er der en lille million til udbytte.</i><br>\n<br>\nEn anden undtagelse er topikalisering. Her kan en præpositionsforbindelse i begyndelses af sætningen fremhæves ved at den gøres til &quot;emne&quot; og genoptages med 'der'/'dér' (sted) eller 'da' (tid). Her sætte komma efter præpositionsforbindelsen:<br>\n<br>\n<i>I spejderhytten ved Julsø, dér har vi festest før.</i><br>\n<br>\n<i>Næste jul, da kan vi så komme til jer.</i>",
		"13.4",
		""
	],
	"%k": [
		"%k",
		"Ikke-klassificeret komma",
		"Programmet mener, at der er et brud i sætningen på dette sted. Overvej at sætte komma, punktum, bindestreg eller anden tegnsætning.",
		"",
		""
	],
	"%k-stop": [
		"%k-stop",
		"Periode",
		"Overgangen fra en periode til den næste skal markeres med tegnsætning. Overvej, om du vil bruge punktum, komma, kolon, semikolon eller - fx efter overskrifter - linjeskift.<br>\n<br>\n<i>Skammens dag [.,;]Det er skammens dag for tv-selskaberne i Los Angeles</i>",
		"21.1",
		"§41"
	],
	"%nok-stop": [
		"%nok-stop",
		"Periode",
		"Programmet mener, at der her er to sætninger, der støder sammen. Overvej at skifte komma ud med punktum.<br>\n<br>\n<i>Det ser ud til, at sygdommen skyldes en virusinfektion, her får man ikke meget ud af at bruge antibiotika. (... virusinfektion. Her ...)</i>",
		"21.1",
		"§41"
	],
	"%nok-co": [
		"%nok-co",
		"Forkert sideordningskomma",
		"Der bruges ikke komma før 'og'/'eller', når det, der sideordnes, er ord, ordgrupper, prædikater (subjektsløse sætninger) eller ufuldstændige ledsætninger.<br>\n<br>\n<i>I morgen besøger vi bedstefar[,] og bedstemor.</i><br>\n<br>\nMed til denne regel hører det, at man på dansk ikke sætter komma foran 'og'/'eller' i slutningen af en liste - noget der på engelsk kendes som <i>Oxford-comma.</i><br>\n<br>\n<i>Gulerødder, porrer, kål, løg[,] og andre grønsager</i><br>\n<br>\nKun sideordnede fuldstændige helsætninger eller ledsætninger, samt ufuldstændige helsætninger får komma før 'og/eller'.<br>\n<br>\n<i>Folket brøler, og diktatorerne er bange.</i><br>\n<br>\n<i>Hvis du har lyst, og hvis vejret er til det, kan vi tage ud at sejle.</i><br>\n<br>\nDog kan kommaet mellem sideordnede ledsætninger valgfrit udelades, hvis de har fælles indledningsord.<br>\n<br>\n<i>Hvis du har lyst(,) og vejret er til det, kan vi tage ud at sejle.</i>",
		"17.2",
		"§49.2<br>\n<br>\n§49.6"
	],
	"%k-contrast": [
		"%k-contrast",
		"Modsætningskomma",
		"Der sættes komma før 'dog' og 'bare ikke/aldrig' , når de indleder selvstændige tilføjelser, der rummer en modsætning til et forudgående element. Der er som regel tale om et særfeltskommaen sidst i sætningen, hvor kommaet kan skiftes ud med en tankestreg.<br>\n<br>\n<i>Hun elsker at skændes om politik, dog ikke med sin bror.</i><br>\n<br>\n<i>I må gerne sparke bold i pausen, bare ikke her.</i><br>\n<br>\nNår to sætningsled af samme type sidestilles uden konjunktion, sættes der komma - uanset om der er tale om en opremsning på tre eller flere led, en forstærkende gentagelse eller en modsætning mellem to led:<br>\n<br>\n<i>Det er mine penge, ikke dine.</i>",
		"14.2",
		""
	],
	"%ok-contrast": [
		"%ok-contrast",
		"Modsætningskomma",
		"Der sættes komma før 'dog' og 'bare ikke/aldrig' , når de indleder selvstændige tilføjelser, der rummer en modsætning til et forudgående element. Der er som regel tale om et særfeltskommaen sidst i sætningen, hvor kommaet kan skiftes ud med en tankestreg.<br>\n<br>\n<i>Hun elsker at skændes om politik, dog ikke med sin bror.</i><br>\n<br>\n<i>I må gerne sparke bold i pausen, bare ikke her.</i><br>\n<br>\nNår to sætningsled af samme type sidestilles uden konjunktion, sættes der komma - uanset om der er tale om en opremsning på tre eller flere led, en forstærkende gentagelse eller en modsætning mellem to led:<br>\n<br>\n<i>Det er mine penge, ikke dine.</i>",
		"14.2",
		""
	],
	"%ko-contrast": [
		"%ko-contrast",
		"Valgfrit modsætningskomma",
		"Der kan stå et valgfrit modsætningskomma ved <i>'og ikke/aldrig'</i>, selv når det ikke er sætninger, der sideordnes.<br>\n<br>\n<i>Det er mine penge(,) og ikke dine.</i><br>\n<br>\n<i>Bogen er frisk(,) og ikke frelst.</i>",
		"14.2",
		""
	],
	"%nko-contrast": [
		"%nko-contrast",
		"Valgfrit modsætningskomma",
		"Der kan stå et valgfrit modsætningskomma ved <i>'og ikke/aldrig'</i>, selv når det ikke er sætninger, der sideordnes.<br>\n<br>\n<i>Det er mine penge(,) og ikke dine.</i><br>\n<br>\n<i>Bogen er frisk(,) og ikke frelst.</i>",
		"14.2",
		""
	],
	"%nok-SV": [
		"%nok-SV",
		"Ikke komma mellem subjekt og verbum",
		"Subjekt (grundled) og verbum (udsagnsord) må aldrig adskilles af et komma, sålænge subjektet består af nominale elementer og ikke udgøres af en ledsætning eller en infinitiv-gruppe. Dette er en syntaktisk regel og gælder, selv hvis der gøres ophold i læsestrømmen på dette sted.<br>\n<br>\n<i>Dette maleri fra Skagens guldalder[,] har aldrig været på en auktion.</i><br>\n<br>\nBemærk: Det er selvfølgelig stadigvæk muligt at have et inskud med et kommapar - dvs. to (!) kommas - mellem subjekt og verbum, fx en apposition (navnetillæg) eller en relativsætning med subjektet som referenceord:<br>\n<br>\n<i>Dette guldalermaleri, som for nyligt blev fundet på et gammelt loft, har aldrig været på en auktion.</i><br>\n<br>\nKomplekse subjekter med sideordning eller infinitiv-subjekter er derimod stadigvæk bare subjekter og skal ikke have komme foran et efterfølgende verbum.<br>\n<br>\n<i>Det store oliemaleriet og de små kridttegningerne stammer begge fra samme kunstner tidlige periode.</i><br>\n<br>\n<i>At følge med i spanske serier på Netflix[,] er en god måde at øve sproget på.</i>",
		"16",
		""
	],
	"%nok-soft": [
		"%nok-soft",
		"Ikke-påkrævet komma",
		"Programmet har ikke fundet nogen regel, der kræver komma dette sted, så der er muligvis tale om en fejl. Gør dig klart, hvorfor du vil sætte dette komma. Falder det naturligt sammen med et ophold i sætningen? Er det nødvendigt for klarhedens skyld? Drop kommaet, hvis der ikke er ophold, og ordene på højre side af kommaet hænger tæt sammen med dem på venstre side.<br>\n<br>\n<i>I det mindste på nuværende tidspunkt [,] kan vi ikke give noget entydigt svar.</i><br>\n<br>\n<i>De har mindre angst, depression og stress[,] end pårørende(,) der ikke mediterer.</i>",
		"",
		""
	],
	"%nok": [
		"%nok",
		"Forkert komma",
		"Dette komma adskiller ord, der syntaktisk hører sammen.<br>\n<br>\n<i>Dette er en[,] fejl. (Artiklen 'en' og substantivet 'fejl' hører sammen.)</i>",
		"",
		""
	],
	"%fullstop": [
		"%fullstop",
		"Sætningspunktum",
		"Der bruges punktum - eller ved nært forbundne sætninger semikolon - efter afsluttede hovedsætninger, ikke mindst hvis sætningen indeholder et finit (bøjet) verbum. Der sættes dog ikke noget ekstra punktum, hvis der sidst i sætningen står en forkortelse, der selv slutter med punktum.<br>\n<br>\n<i>Alt ser nemt ud i bagklogskabens klare lys.</i><br>\n<br>\n<i>Gartneriet sælger også vaser, krukker, potteskjuler mv.</i><br>\n<br>\nBemærk, at punktum også kan bruges til at afslutte andet end sætninger, fx forkortede sætningsdele eller fremhævede selvstændige sætningsdele, der dermed får karakter af uafhængige ytringer.<br>\n<br>\n<i>Han skulle bare vinde den kamp. Ingen over, ingen ved siden af.</i><br>\n<br>\n<i>Jeg får tit akupunktur. Især mod rygsmerter.</i><br>\n<br>\nSlutpunktum erstatter udråbstegnet, hvis en opfording har karakter af anvisning snarere end udråb.<br>\n<br>\n<i>Skær løgene og svits dem.</i><br>\n<br>\n<i>Ræk mig lige peberkværnet.</i><br>\n<br>\nOgså efter indirekte spørge- eller opfordringssætninger står der punktum, ikke spørgsmålstegn:<br>\n<br>\n<i>Han spurgte hende, om hun ville komme til festen.</i><br>\n<br>\n<i>Guiden har sagt, vi ikke skal gå tæt på dyrene.</i>",
		"21.1",
		"§41"
	],
	"%fullstop-after": [
		"%fullstop-after",
		"Sætningspunktum",
		"Der bruges punktum - eller ved nært forbundne sætninger semikolon - efter afsluttede hovedsætninger, ikke mindst hvis sætningen indeholder et finit (bøjet) verbum. Der sættes dog ikke noget ekstra punktum, hvis der sidst i sætningen står en forkortelse, der selv slutter med punktum.<br>\n<br>\n<i>Alt ser nemt ud i bagklogskabens klare lys.</i><br>\n<br>\n<i>Gartneriet sælger også vaser, krukker, potteskjuler mv.</i><br>\n<br>\nBemærk, at punktum også kan bruges til at afslutte andet end sætninger, fx forkortede sætningsdele eller fremhævede selvstændige sætningsdele, der dermed får karakter af uafhængige ytringer.<br>\n<br>\n<i>Han skulle bare vinde den kamp. Ingen over, ingen ved siden af.</i><br>\n<br>\n<i>Jeg får tit akupunktur. Især mod rygsmerter.</i><br>\n<br>\nSlutpunktum erstatter udråbstegnet, hvis en opfording har karakter af anvisning snarere end udråb.<br>\n<br>\n<i>Skær løgene og svits dem.</i><br>\n<br>\n<i>Ræk mig lige peberkværnet.</i><br>\n<br>\nOgså efter indirekte spørge- eller opfordringssætninger står der punktum, ikke spørgsmålstegn:<br>\n<br>\n<i>Han spurgte hende, om hun ville komme til festen.</i><br>\n<br>\n<i>Guiden har sagt, vi ikke skal gå tæt på dyrene.</i>",
		"21.1",
		"§41"
	],
	"%no-fullstop": [
		"%no-fullstop",
		"Forkert sætningspunktum",
		"På dansk kan det afsluttende punktum efter anført direkte tale stå både før og efter det afsluttende anførselstegn, men førstnævnte er langt mere almindeligt.<br>\n<br>\n<i>Hun sagde: &quot;Jeg har hovedpine.&quot; (normalt)</i><br>\n<br>\n<i>Hun sagde: &quot;Jeg har hovedpine&quot;. (sjældent)</i><br>\n<br>\nKun hvis citatet er et almindeligt sætningsled, uden kolon/inquit, skal punktum stå efter det afsluttende anførselstegn, fordi det så tilhører hovedsætningen. Dette er fx tilfældet, når en sætning slutter med titlen på et værk i gåseøjne. Her står punktummet efter, ikke foran, det afsluttende anførselsestegn.<br>\n<br>\n<i>Bogens titel hedder</i><i> &quot;Komma</i> <i>eller kaos</i><i> - e</i><i>n</i> <i>brugsanvisning</i><i>&quot;.</i> (korrekt)<br>\n<br>\n<i>Bogens titel hedder</i><i> &quot;Komma</i> <i>eller kaos - en brugsanvisning</i><i>.&quot;</i> (forkert)<br>\n<br>\nDen anførende sætning mister sit punktum, hvis citatet selv allerede slutter med sætningsafsluttende tegnsætning.<br>\n<br>\n<i>Er råbte: &quot;Kom så, drenge!&quot;[.]</i><br>\n<br>\nOmvendt mister den anførte sætning sit punktum (men ikke spørgsmålstegn eller udråbstegn), hvis den står foran den anførende sætning (inquit):<br>\n<br>\n<i>&quot;</i><i>Jeg er ligeglad</i><i>[.]&quot;, sag</i><i>de han</i><i>.</i><br>\n<br>\nMan sætter ikke slutpunktum efter tekstbider, der står på en linje for sig, med mindre der er tale om hele sætninger i løbende tekst. Detter gælder bl.a. overskrifter og punktopstillinger sam adresseelementer og tidsangivelser, når de står på separate linjer.<br>\n<br>\n<i>Japan: Over 1000 døde efter skælv</i><br>\n<br>\n<i>Kommatrold ApS</i><br>\n<br>\n<i>Kommatorvet 17a</i><br>\n<br>\n<i>9999 Kommingen Ø</i><br>\n<br>\n<i>Kommingen, den 7. april 2021</i><br>\n<br>\nSelv hele sætninger får ikke punktum i en overskrift:<br>\n<br>\n<i>Perseverance lander på Mars</i><br>\n<br>\nPå dansk bruger man hverken komma eller punktum efter indlednings- og sluthilsner i breve og e-mails. Kun udråbstegn efter starthilsen er tilladt - i modsætning til engelsk, der bruger komma begge steder, og tysk, der bruger komma efter åbningshilsen, men ikke efter sluthilsen.<br>\n<br>\n<i></i><i>Hej Rasmus</i><i>(!)</i><br>\n<br>\n<i></i><i>Jeg skriver til dig, fordi jeg fylder rundt og gerne vil invitere dig til min fødselsdag.</i><br>\n<br>\n<i></i><i>M</i><i>ed venlig hilsen</i><br>\n<br>\n<i></i><i>Ronja</i>",
		"21.2",
		"§41"
	],
	"%colon2k": [
		"%colon2k",
		"Komma i stedet for kolon",
		"Der skal bruges komma i stedet for kolon, hvis der følger en uddybende forklaring - altså før <i>d.h. (das heißt), d.i. (das ist), z.B. (zum Beispiel), genauer gesagt, nämlich usw.</i><br>\n<br>\n<i>Jeg har kun et rejseønske i år, nemlig at bestige en vulkan.</i><i></i> (korrekt)<br>\n<br>\n<i>Jeg har kun et rejseønske i år: nemlig at bestige en vulkan. (forkert)</i>",
		"18.4",
		"§52"
	],
	"%colon": [
		"%colon",
		"Kolon i stedet for komma",
		"Mellem en anførende sætning og efterfølgende direkte tale bruges der kolon, ikke komma:<br>\n<br>\n<i>Han sagde</i><i>: &quot;</i><i>Jeg er ligeglad</i><i>.</i><i>&quot;</i> (korrekt)<br>\n<br>\n<i>Han sagde, &quot;Jeg er ligeglad.&quot; (forkert)</i><br>\n<br>\n<i>Han sagde &quot;Jeg er ligeglad.&quot; (forkert)</i>",
		"18.4",
		"§52"
	],
	"%colon-after": [
		"%colon-after",
		"Manglende kolon",
		"Mellem en aførende sætning og efterfølgende direkte tale skal der stå et kolon:<br>\n<br>\n<i>Han sagde</i><i>: &quot;</i><i>Jeg er ligeglad</i><i>.</i><i>&quot;</i> (korrekt)<br>\n<br>\n<i>Han sagde &quot;Jeg er ligeglad.&quot; (forkert)</i>",
		"18.4",
		"§52"
	],
	"%questmark": [
		"%questmark",
		"Spørgsmålstegn",
		"Der bruges spørgsmålstegn ikke bare efter direkte spørgsmål, men også efter høflighedsspørgsmål, rhetoriske spørgsmål og udsagn eller ordgrupper med spørgsmålsintonation.<br>\n<br>\n<i>Hvor har du sovet sidste nat?</i><br>\n<br>\n<i>Med eller uden sukker?</i><br>\n<br>\n<i>Du har inviteret hvem?</i><br>\n<br>\n<i>Und du tror(,) det virker?</i><br>\n<br>\n<i>Mon han kommer?</i><br>\n<br>\n<i>Må jeg få saltet?</i><br>\n<br>\n<i>Du har taget et førstehjælpskursus, ikke sandt?</i><br>\n<br>\nDerimod står der ikke spørgsmålstegn efter indirekte spørgesætninger.<br>\n<br>\n<i>Hun spurgte(,) hvorfor hun ikke måtte se hans frimærkesamling.</i><br>\n<br>\n<i>Ingen idé(,) hvem der har sendt blomsterne.</i>",
		"19",
		"§53"
	],
	"%questmark-after": [
		"%questmark-after",
		"Spørgsmålstegn",
		"Der bruges spørgsmålstegn ikke bare efter direkte spørgsmål, men også efter høflighedsspørgsmål, rhetoriske spørgsmål og udsagn eller ordgrupper med spørgsmålsintonation.<br>\n<br>\n<i>Hvor har du sovet sidste nat?</i><br>\n<br>\n<i>Med eller uden sukker?</i><br>\n<br>\n<i>Du har inviteret hvem?</i><br>\n<br>\n<i>Und du tror(,) det virker?</i><br>\n<br>\n<i>Mon han kommer?</i><br>\n<br>\n<i>Må jeg få saltet?</i><br>\n<br>\n<i>Du har taget et førstehjælpskursus, ikke sandt?</i><br>\n<br>\nDerimod står der ikke spørgsmålstegn efter indirekte spørgesætninger.<br>\n<br>\n<i>Hun spurgte(,) hvorfor hun ikke måtte se hans frimærkesamling.</i><br>\n<br>\n<i>Ingen idé(,) hvem der har sendt blomsterne.</i>",
		"19",
		"§53"
	],
	"%exclam": [
		"%exclam",
		"Udråbstegn",
		"Der bruges udråbstegn efter udråb, henstillinger, opfordringer, ønsker og ordrer - lige meget om der er tale om fuldstændige sætninger, ordgrupper eller enkeltord såsom imperativer (bydemåde) og interjektioner (udråbsord).<br>\n<br>\n<i>Lad babyen sove!</i><br>\n<br>\n<i>Ud af min kiosk!</i><br>\n<br>\n<i>At du gider!</i><br>\n<br>\n<i>Bare jeg havde vidst det noget før!</i><br>\n<br>\n<i>Godt Nytår!</i><br>\n<br>\n<i>Puha, hvor ulækkert!</i><br>\n<br>\nBemærk, at udråbstegnet kræver uafhængige sætninger. Efter ikke-uafhængige opfordringssætninger står der bare punktum:<br>\n<br>\n<i>Hun siger(,) du skal tømme opvaskemaskinen.</i><br>\n<br>\nDesuden bruges udråbstegn i tiltale:<br>\n<br>\n<i>Mine damer og herrer!</i><br>\n<br>\n<i>Kære venner!</i><br>\n<br>\n<i>Hej(,) Camilla!</i><br>\n<br>\nUdråbstegnet er i øvrigt det eneste tegn, der er tilladt efter indledningshilsner i breve og e-mails, hvor der - modsat engelsk og tysk - ikke må bruges komma.",
		"20",
		"§54"
	],
	"%exclam-after": [
		"%exclam-after",
		"Udråbstegn",
		"Der bruges udråbstegn efter udråb, henstillinger, opfordringer, ønsker og ordrer - lige meget om der er tale om fuldstændige sætninger, ordgrupper eller enkeltord såsom imperativer (bydemåde) og interjektioner (udråbsord).<br>\n<br>\n<i>Lad babyen sove!</i><br>\n<br>\n<i>Ud af min kiosk!</i><br>\n<br>\n<i>At du gider!</i><br>\n<br>\n<i>Bare jeg havde vidst det noget før!</i><br>\n<br>\n<i>Godt Nytår!</i><br>\n<br>\n<i>Puha, hvor ulækkert!</i><br>\n<br>\nBemærk, at udråbstegnet kræver uafhængige sætninger. Efter ikke-uafhængige opfordringssætninger står der bare punktum:<br>\n<br>\n<i>Hun siger(,) du skal tømme opvaskemaskinen.</i><br>\n<br>\nDesuden bruges udråbstegn i tiltale:<br>\n<br>\n<i>Mine damer og herrer!</i><br>\n<br>\n<i>Kære venner!</i><br>\n<br>\n<i>Hej(,) Camilla!</i><br>\n<br>\nUdråbstegnet er i øvrigt det eneste tegn, der er tilladt efter indledningshilsner i breve og e-mails, hvor der - modsat engelsk og tysk - ikke må bruges komma.",
		"20",
		"§54"
	],
	"%k-parenth": [
		"%k-parenth",
		"Ikke komma før parentes",
		"Der må ikke være komma før hverken en venstre eller en højre parentes. Hvis sætningen uden parentes ville have et komma på dette sted, skal det placeres efter hele parentesen.<br>\n<br>\n<i>Der er helt klart tale om en B-film[,] (eller værre) der ikke bør vises i nogen biograf. (forkert)</i><br>\n<br>\n<i>Der er helt klart tale om en B-film (eller værre), der ikke bør vises i nogen biograf. (korrekt)</i>",
		"24",
		"§56"
	],
	"%nok-parenth": [
		"%nok-parenth",
		"Ikke komma før parentes",
		"Der må ikke være komma før hverken en venstre eller en højre parentes. Hvis sætningen uden parentes ville have et komma på dette sted, skal det placeres efter hele parentesen.<br>\n<br>\n<i>Der er helt klart tale om en B-film[,] (eller værre) der ikke bør vises i nogen biograf. (forkert)</i><br>\n<br>\n<i>Der er helt klart tale om en B-film (eller værre), der ikke bør vises i nogen biograf. (korrekt)</i>",
		"24",
		"§56"
	],
	"%upper-colon": [
		"%upper-colon",
		"Majuskel",
		"Der staves med stort efter et kolon, hvis der følger direkte tale eller en selvstændig sætning, herunder også infinitiv-sætninger. Enkeltord eller ordgrupper, der ikke er sætninger, staves med småt (medmindre selvfølgelig der er tale om substantiver eller navne)<br>\n<br>\n<i>Hun spurgte: &quot;Hvem har bagt kagen?&quot;</i><br>\n<br>\n<i>Der er ingen anden udvej: Katten skal til dyrlægen.</i><br>\n<br>\n<i>Men: Holdbarhed: en uge i køleskab.</i>",
		"18.2",
		"§11.3"
	],
	"%lower-colon": [
		"%lower-colon",
		"Minuskel",
		"Der staves med småt efter et kolon, hvis det er efterfulgt af enkeltord eller ordgrupper, der ikke er sætninger (medmindre selvfølgelig der er tale om substantiver eller navne). Modsat fortsættes der med stort, hvis der følger en selvstændig sætning eller direkte tale.<br>\n<br>\n<i>Emil havde hentet alle sine vener i hulen: bamsen, tigerdyret og den udstoppede måge.</i><br>\n<br>\n<i>Holdbarhed: en uge i køleskab.</i><br>\n<br>\nMen: <i>Han tænkte: Det kunne have været nemmere.</i>",
		"18.2",
		"§11.3"
	]
};

for (let k in ctypes) {
	if (!ctypes.hasOwnProperty(k)) {
		continue;
	}
	let c = ctypes[k];
	g_marks.types[k] = [c[1], c[2], [3]];
	g_marks.types_comma.push(k);

	if (/^%ko-/.test(k)) {
		g_marks.yellow[k] = k;
	}
	else if (/^%nok-/.test(k)) {
		g_marks.red[k] = k;
	}
}

ctypes = null;

g_marks.dict = ['(£error)'];
for (let k in g_marks.yellow) {
	g_marks.dict.push('('+escapeRegExp(k)+')');
}
g_marks.dict = new RegExp('('+g_marks.dict.join('|')+')( |$)');

function l10n_marking_types(lang) {
	g_options_default.types = {};
	for (let k in g_marks.types) {
		if (/^%(ok|nko)(-|$)/.test(k)) {
			g_options_default.types[k] = 0;
		}
		else {
			g_options_default.types[k] = 1;
		}
	}
	g_options_default.types["£new"] = 0;
	g_options_default.types["£proper"] = 0;
}
