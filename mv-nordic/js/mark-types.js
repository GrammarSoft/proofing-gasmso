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

var types_red = {
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

var types_yellow = {
	"@proper": "@proper",
	"@new": "@new",
	"@abbreviation": "@abbreviation",
	"@check!": "@check!",
};

var marking_types = {
	"@x-etype-list": [
		"@x-etype-list",
		"Stavefejl fundet ved listeopslag",
		"Som udgangspunkt er dette en fejlmarkering med meget pålidelige rettelsesforslag, fordi der her ikke er brug for lighedsalgoritmer og statistik. Men listen bruges også til at foreslå mulige alternativer for eksisterende ord, der kræver kontekstuel disambiguering, og her er der en lidt større risiko for forkerte forslag.",
		"... og <span style=\"color: #ff0000\">kikker</span> [kigger] ned på ham",
	],
	"@x-etype-joined": [
		"@x-etype-joined",
		"Manglende mellemrum",
		"For det meste er der bare tale om slåfejl, men en systematisk fejl er samskrivning af præposition of styrelse, fx <i>idag (i dag), igår (i går), istedetfor (i stedet for). </i>Tidligere kunne man ikke sammenskrive et stedsadverbium med en efterfølgende (steds)præposition når denne havde en styrelse (fx <i>neden under bordet</i>), men dette er nu tilladt, så at der kan bruges samme form <i>(nedenunder bordet) </i>som i rent adverbial anvendelse <i>(hun sover nedenunder). </i>Kombinationer af stedsadverbium og andre præpositioner, også retnings-præpositioner, skal dog stadigvæk adskilles, fx. <i>en lyd ude fra gaden </i>(Jf. uden styrelse: <i>indblanding udefra).</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"det har <span style=\"color: #ff0000\">undretmig</span> [undret=mig]<br>\n<br>\nantalvar er davar fra 1788 anmeldelser <span style=\"color: #ff0000\">til1584</span> [til 1584]<br>\n<br>\n<span style=\"color: #ff0000\">idag</span> [i=dag]",
	],
	"@x-etype-sær": [
		"@x-etype-sær",
		"Manglende samskrivning",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser). </i>Sommetider er det meningsforstyrrende, fx er en <i>engelsklærer </i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer </i>(som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige, </i>men ikke i <i>verdens?rekord. </i>Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv </i>(ubestemt 'land') men <i>landets arkiv </i>(bestem form 'landet')<i>. </i>Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten). </i>Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx. <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"Jf. <span style=\"color: #ff0000\">andet steds</span> [andetsteds] i bogen<br>\n<br>\n<span style=\"color: #ff0000\">i følge</span> [ifølge] den kontrakt",
	],
	"@x-etype-flex": [
		"@x-etype-flex",
		"bøjningsfejl (genus, numerus, datid)",
		"Denne markering bruges når den tilsigtede bøjningsendelse er forkert, altså hvis man tager fejl af ordets grammatiske køn <i>(sanden </i>i.st.f. <i>sandet</i>), eller hvis man forveksler flertalsendelserne <i>-erne </i>og <i>-ene, </i>eller datidsendelserne <i>-ede </i>og <i>-te</i>. Fejltypen er mest almindelig hos indvandrere eller små børn, fordi bøjningsendelserne ikke følger meningsfulde regler, men skal læres sammen med det enkelte ord. Muligvis pga. den svage udtale af -r (flertal) og den klare udtale af -t (intetkøn) føles det værre at lave fejl mht. grammatisk køn (genus) end mht. flertalsbøjningen, så som udlænding er det en god idé af fokusere på forskellen -en/-et.<br>\n<br>\nEn mulig øvelse er VISL's <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/genus.html\">Gender Genie</a>. Du kan læse om specielle cases i artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-20-felleskon-eller-intetkon\">Fælleskøn eller intetkøn</a><i> </i>på sproget.dk",
		"<span style=\"color: #ff0000\">bilene</span> [bilerne]",
	],
	"@x-etype-ellision": [
		"@x-etype-ellision",
		"bøjningsfejl ved ord der ender i -el/-en/-er",
		"Substantiver (navneord) og adjektiver (tillægsord) kan miste e'et i sidste stavelse, når de bøjes. Dette gælder dog kun, når stavelsen er tryksvag (altså <i>handel, </i>men ikke fx <i>pedel</i>). Fænomenet er ret regelmæssigt for flertalsformer <i>(handel-handler, cykel-cykler, teater-teatre, ørken-ørkner, moden-modne, fager-fagre),</i> men det er ikke altid obligatorisk (fx <i>bæger-bægre/bægere)</i> og der er en vigtig undtagelse - personord i -er <i>(røver - røvere, dansker - danskere).</i><br>\n<br>\nBemærk at<i> </i>dobbeltkonsonanter reduceres i tilfælde af e-bortfald foran <i>-el/-en/-er</i>, fx <i>gammel-gamle, sikker-sikre</i><br>\n<br>\nJf. også artiklerne <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-25-28-adjektiver/a7-25-adjektiver-pa-el-en-og-er\">Adjektiver på -el, -en og -er</a><i> </i>og <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-23-substantiver-pa-el-en-og-er\">Substantiver på -el, -en og -er</a> på sproget.dk<br>\n<br>\nDesværre er det meget uregelmæssigt, om e'et droppes i substantivers bestemthedsbøjning. Således gælder reglen obligatorisk for <i>titel-titlen, </i>mens den ikke gælder for <i>minister-ministeren </i>og er valgfri for <i>handelen/handlen</i>. Nogle gange er den lange form forbudt men almindelig (&quot;uofficiel&quot;) , fx <i>cyklen/*cykelen.</i>",
		"<span style=\"color: #ff0000\">cykelen</span> [cyklen]<br>\n<br>\n<span style=\"color: #ff0000\">bødeler, bøddeler</span> [bødler]",
	],
	"@x-etype-um": [
		"@x-etype-um",
		"Forkert bøjning af ord der ender i -um",
		"Mange latinsk-afledte ord i -ium bøjes i bestem form som -iet/ier, ikke regelmæssigt som -ummet/-ummer, fx <i>gymnasium-gymnasiet/gymnasier </i>(ikke <i>gymnasiummet/gymnasiummer</i>). -um-ord uden 'i' er mere tilbøjelige til at tillade -ummet/-ummer, men det er ikke en fast regel. Således bøjes <i>spektrum </i>kun <i>spektret/spektre, </i>mens <i>farvespektrum </i>er valgfrit <i>farvespektrummet/farvespektrummer </i>eller <i>farvespektret/farvespektre.</i><br>\n<br>\nEn særlig gruppe ord er kemiske stoffer på <i>-um,</i> der altid har <i>-ummet</i>, uanset om de ender på <i>-ium </i>eller ej, fx. <i>aluminiummet </i>(ikke <i>alumuminiet)</i><br>\n<br>\nEndeligt kan de nævnes, at enkelte -um-ord har uregelmæssig, latinsk flertal: <i>annuum-annua, antibiotikum-antibiotika</i>",
		"<span style=\"color: #ff0000\">gymnasiummet</span> [gymnasiet]",
	],
	"@x-etype-gemination": [
		"@x-etype-gemination",
		"bøjningsfejl vedr. bogstavfordobling (geminering)",
		"Geminering (konsonantfordobling) bruges i danske bøjningsformer til at bevare en kort vokallyd i ordrodens sidste stavelse. Fx. hedder det <i>dal-dale </i>og <i>vinyl-vinyvar </i>(med langt 'a/y'), men <i>hal-haller</i> og <i>idyl-idyller </i>(med kort 'a/y'). Åbne stavelser (uden slutkonsonant) har altid lang vokal <i>(hale-haler), </i>så man kan koncentrere sig om navneord der ender i konsonant.<br>\n<br>\nAldrig konsonantgeminering:<br>\n<br>\ndiftonger (fx <i>astronaut</i>)<br>\n<br>\nstum konsonant og -g når det udtales svagt <i>(buffeten, fileter, flig, brug)</i><br>\n<br>\ntryksvag -el, en, -er<br>\n<br>\n-ur, -j, -v, n udtalt som 'ng'<br>\n<br>\n-on (dog enkelte gemineringer af <i>-ton</i>)<br>\n<br>\nAltid konsonantgeminering:<br>\n<br>\nefter trykstærk kort vokal<br>\n<br>\n-æg, -læg, -væg (selvom vokalen er lang)<br>\n<br>\nk,m,p,s,t og hårdt g efter kort vokal be bitryk i flerstavelsesord <i>(sennep, bryllup, hotdog, politik, møtrik)</i><br>\n<br>\n-kar/-par <i>(</i>fx <i>parret), </i>dog ikke <i>vikar, bibliotekar</i><br>\n<br>\nSpeciel vanskelige er ord, der ender på -ud. De fleste har geminering, især dem på <i>-bud</i> og -<i>skud,</i> men der findes også langt 'u', fx i <i>hud-huden </i>og <i>klud-kluden. </i>Bemærk også forskellen mellem <i>bruddet </i>og <i>bruden.</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-7-10\">Dobbeltskrivning eller enkeltskrivning</a><i> </i>på sproget.dk",
		"<span style=\"color: #ff0000\">postbudet</span> [postbuddet]<br>\n<br>\n<span style=\"color: #ff0000\">postbudde</span> [postbude]",
	],
	"@x-etype-apostrophe": [
		"@x-etype-apostrophe",
		"manglende apostrof",
		"Hovedanvendelsen af apostrof i dansk er i forbindelse med bøjning af forkortelser, tal og symboler <i>(pc'en, USA's, sms'erne, 1960'erne, linje 5's endestation, de flade a'er). </i>Undtagelsen er forkortelser med punktum, fx <i>cand.mag.erne, </i>og tunge suffikser, hvor der bruges bindestreg: <i>SMS-agtig. </i><br>\n<br>\nApostrof bruges også til at markere genitiv efter <i>s, z </i>eller <i>x, </i>og mellem <i>ee </i>og <i>e-</i>endelser (fx <i>frisbee'en</i>). Apostrof bruges til gengæld ikke ved almindelig genitiv-s, heller ikke efter udenlandske navne <i>(Clintons, </i>ikke <i>Clinton's</i>), og det er valgfrit ved forkortelser, der kan udtales som almindelige ord <i>(NATOs / NATO's).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-6-apostrof/?exact_terms=apostrof\">Apostrof</a><i> </i>på sproget.dk",
		"<span style=\"color: #ff0000\">cden</span> [cd'en]",
	],
	"@x-etype-hyphen": [
		"@x-etype-hyphen",
		"overflødig eller manglende bindestreg inde i ordet",
		"Bindestreg bruges i slutningen af ordet til at markere udeladte fælles orddele <i>(hjerte- og lungesygdomme), </i>og inde i ordet når forkortelser eller tal forbindes sammensættes med almindelige ord eller tunge suffikser <i>(KODA-afgift, wc-papir, 1800-tallet, 6-kantet, 2.-pladsen, pvc-holdig, SMS-agtig).</i><br>\n<br>\nBindestregen bortfalder hvis tallene skrives ud <i>(sekskantet, andenpladsen) </i>og er valgfrit efter forkortelser der kan udtales som almindelige ord <i>(NATO-øvelse / Nato-øvelse / Natoøvelse).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-40-60/a7-57-bindestreg/?exact_terms=bindestreg\">Bindestreg</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#f\">test-øvelserne</a> om emnet.",
		"<span style=\"color: #ff0000\">dan-skere</span> [danskere]<br>\n<br>\n<span style=\"color: #ff0000\">fem-måneders</span> [femmåneders}<br>\n<br>\n<span style=\"color: #ff0000\">15måneders</span> [15-måneders]",
	],
	"@x-etype-case": [
		"@x-etype-case",
		"Majuskel-/minuskel-fejl",
		"Fejlen går ud på om ordet staves med stort eller med småt. Der bruges bl.a. <b>startmajuskel</b>, altså stort begyndelsesbogstav i starten af en tekst eller helsætning, dvs. efter sætningspunktum og udråbstegn (efter kolon dog kun når der følger en helsætning). Majuskel er valgfrit punktopstillinger<br>\n<br>\n<b>Proprier</b> (egennavne) staves som udgangspunkt med stort, uanset om der er tale om mennesker, dyr, lande, skibe, organisationer etc. fx. <i>Anne, Moderniseringsstyrelsen</i>. I flerleddede navne er første ord med stort, samt betydningsfulde ord inde i navnet (fx. <i>Gorm den Gamle</i>). Almindelige benævnelser på dyr, planter, mad og drikke staves dog med småt - her er det ikke individet der er navngivet: <i>zebra, coxorange, gouda, bellis.</i><br>\n<br>\nSystematiske biologiske navne har 1. del med stort og 2. del med småt, fx. <i>Rubus chamaemorus </i>(multebær), <i>Haliaeetus albicilla </i>(havørn). Når navne bruges i sammenskrivninger, der ikke selv er navne, er brugen af majuskel valgfrit, fx. <i>Nobelpristager - nobelpristager. A</i>fledninger af proprier er dog altid med småt: <i>molbo, marxisme, pasteurisere.</i><br>\n<br>\nMajuskel bruges også i nogle <b>tiltaleformer</b>, herunder pronominer <i>(De, I, Dem, Deres</i> men ikke afledte former <i>din, jeres </i>etc.) og såkaldte titulaturer der begynder med et ejestedord <i>(Hendes Majestæt, Deres Excellence). </i>Andre tiltaleformer (titler og erhvervbetegnelser) skrives med småt: <i>direktør Jensen, pastor Nielsen, psykolog Malene Iversen, onkel Mads.</i><br>\n<br>\n<b>Forkortelser</b> med punktum staves næsten altid med småt. Såkaldte initialforkortelser (dannet af begyndelsesbogstaver af et flerledsnavn) staves som udgangspunkt med stort <i>(FN, DMI, DSB), </i>men <i>kan </i>skrives med småt hvis de udtales som almindelige ord <i>(NATO/Nato, UNESCO/Unesco).</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-11-14\">majuskelregler</a> på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#s\">test-øvelserne</a> vedr. emnet",
		"i <span style=\"color: #ff0000\">odense</span> [Odense], en <span style=\"color: #ff0000\">fiat</span> [Fiat]",
	],
	"@error": [
		"@error",
		"almindelig stavefejl med rettelsesforslag<br>\n<br>\n(a) funded ved grafisk/fonetisk sammenligning med godkendte ordbogsformer<br>\n<br>\n(b) systematisk afledt igennem morfologisk og kompositumsanalyse",
		"almindelig stavefejl med rettelsesforslag<br>\n<br>\n(a) funded ved grafisk/fonetisk sammenligning med godkendte ordbogsformer<br>\n<br>\n(b) systematisk afledt igennem morfologisk og kompositumsanalyse",
		"<span style=\"color: #ff0000\">gymnasiummet </span>[gymnasiet]<br>\n<br>\n<span style=\"color: #ff0000\">fornemste</span> [fornemmeste]<br>\n<br>\n<span style=\"color: #ff0000\">uintereseret</span> [uinteresseret]<br>\n<br>\n<span style=\"color: #ff0000\">økomisk</span> [økonomisk]<br>\n<br>\n(NOT ø+komisk)",
	],
	"@check!": [
		"@check!",
		"kunne være forkert, men mangler korrekturforslag",
		"Ordformen er ikke i DanProofs leksikon, og DanGram parseren kunne ikke finde en sikker analyse heller, hverken som bøningsform eller sammensat ord",
		"<span style=\"color: #ff0000\">serv-serv </span>specialister<br>\n<br>\n<span style=\"color: #ff0000\">/ritzau/</span><br>\n<br>\ndøgntlf.-tid<br>\n<br>\nanno<span style=\"color: #ff0000\"> dazumal</span>",
	],
	"@:...": [
		"@:...",
		"korrekturforslag ud fra konteksten, for et ellers eksisterende ord",
		"Denne fejltype dækker ikke kun stavefejl, men også forkerte ordvalg",
		"(a) <span style=\"color: #ff0000\">esdragon</span> [estragon]<br>\n<br>\n(b) Ud <span style=\"color: #ff0000\">og</span> [at] se<br>\n<br>\nUde <span style=\"color: #ff0000\">af</span> [at] rejse",
	],
	"@comp-": [
		"@comp-",
		"særskrivningsfejl: Ordet burde sammenskrives med det efterfølgende ord",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser). </i>Sommetider er det meningsforstyrrende, fx er en <i>engelsklærer </i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer </i>(som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige, </i>men ikke i <i>verdens?rekord. </i>Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv </i>(ubestemt 'land') men <i>landets arkiv </i>(bestem form 'landet')<i>. </i>Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten). </i>Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx. <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"<span style=\"color: #ff0000\">banegårds </span>center [banegårdscenter]",
	],
	"@comp-:-": [
		"@comp-:-",
		"særskrivningsfejl: Ordet burde sammenskrives med det efterfølgende ord, men med bindestreg",
		"Bindestreg bruges i slutningen af ordet til at markere udeladte fælles orddele <i>(hjerte- og lungesygdomme), </i>og inde i ordet når forkortelser eller tal forbindes sammensættes med almindelige ord eller tunge suffikser <i>(KODA-afgift, wc-papir, 1800-tallet, 6-kantet, 2.-pladsen, pvc-holdig, SMS-agtig).</i><br>\n<br>\nBindestregen bortfalder hvis tallene skrives ud <i>(sekskantet, andenpladsen) </i>og er valgfrit efter forkortelser der kan udtales som almindelige ord <i>(NATO-øvelse / Nato-øvelse / Natoøvelse).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-40-60/a7-57-bindestreg/?exact_terms=bindestreg\">Bindestreg</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#f\">test-øvelserne</a> om emnet.",
		"<span style=\"color: #ff0000\">FN </span>resolutioner [FN-resolutioner]",
	],
	"@-comp": [
		"@-comp",
		"særskrivningsfejl: Ordet burde sammenskrives med det forudgående ord",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser). </i>Sommetider er det meningsforstyrrende, fx er en <i>engelsklærer </i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer </i>(som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige, </i>men ikke i <i>verdens?rekord. </i>Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv </i>(ubestemt 'land') men <i>landets arkiv </i>(bestem form 'landet')<i>. </i>Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten). </i>Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx. <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"fodbold <span style=\"color: #ff0000\">spiller </span>[fodboldspiller]",
	],
	"@comp": [
		"@comp",
		"særskrivningsfejl: Ordet burde sammenskrives (de to dele er markeret sammen, med '=' i.st.f. mellemrum)",
		"Der kan være tale om en slåfejl, men som regel er det en ægte grammatisk fejl, hvor sammensatte ord splittes i deres bestanddele, især når delene faktisk også findes som selvstændige ord <i>(fodbold_spiller, bade_bukser). </i>Sommetider er det meningsforstyrrende, fx er en <i>engelsklærer </i> (altså en, der underviser i engelsk) ikke det samme som en <i>engelsk lærer </i>(som altså ikke er dansker eller tysker). Man kan teste om to ord skal sammenskrives ved at se hvor trykket ligger - er der tryk på første del, skal det sandsynligvis skrives sammen. En anden test er at se om man kan sætte andre ord imellem uden at ændre meningen - det kan man i <i>verdens (mange) fattige, </i>men ikke i <i>verdens?rekord. </i>Sammensætninger af navneord har ofte et såkaldt fuge-s eller fuge-e på førsteled, der markerer at der er tale om en sammensætning <i>(drenge?bande, afløbs?brønd)</i>. S-markøren er meget sikker i ubestemt form, altså <i>landsarkiv </i>(ubestemt 'land') men <i>landets arkiv </i>(bestem form 'landet')<i>. </i>Bestemthed er også vigtig på anden vis - hvis det andet af to substantiver (navneord) er i bestemt form, er der sandsynligvis tale om en sammensætning (fx <i>præsident?kandidaten). </i>Endelig kan man se om der står bestemmende ord (artikler, adjektiver, genitiver) til venstre for den mulige sammensætning, altså fx. <i>den amerikanske præsident?kandidat, morens blåbær?kage.</i><br>\n<br>\nBemærk at samskrivning er valgfrit efter tal+ord+s, fx <i>18-års fødselsdag / 18-årsfødselsdag, toværelses lejlighed / toværelseslejlighed.</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-18-19\">Ét eller flere ord</a><i> </i>på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#g\">test-øvelserne</a> vedr. emnet.",
		"<span style=\"color: #ff0000\">hard core</span> [hardcore] forældre<br>\n<br>\njf. <span style=\"color: #ff0000\">andet steds</span> [andetsteds] i bogen<br>\n<br>\n<span style=\"color: #ff0000\">siden hen</span> [sidenhen]",
	],
	"@new": [
		"@new",
		"nyt ord: ikke fundet i ordbogen, og ikke en godkendt sammensætning, men sandsynligvis ok.",
		"Dette tag betyder, at DanGram har fundet en mulig analyse for ordet, som en kæde af præfikser, ordstammer og suffikser, eller at ordet matcher et mønster for engelske låneord e.l. Men der kan være tale om en fejlstavning, der bare tilfældigt matcher teoretisk tilladte mønstre eller sammensætninger. Mindre sikker end &lt;good-compound&gt;, men mere sikker end @check!",
		"<span style=\"color: #ff0000\">gulblusede</span> &lt;ADJ:gul+bluset&gt; &lt;compound&gt; ADJ nG P nD<br>\n<br>\nNOM <i>@new </i>",
	],
	"@green": [
		"@green",
		"fejlmarkeret ord, der dog eksisterer som sådan, og <i>kunne </i>være korrekt, inkluderer &lt;cave-correct&gt; and &lt;frequent&gt;",
		"Bruges også til stavealternativer, der er almindelige men uofficielle",
		"en lyd <span style=\"color: #ff0000\">udefra</span> [ude fra] <i>@green</i> gaden<br>\n<br>\nI <span style=\"color: #ff0000\">her</span> [har] <i>@green</i> en skid at sige",
	],
	"@proper": [
		"@proper",
		"ukendt proprium (egennavn), der ikke findes i DanProofs leksikon, men godkendes morfologisk og kontekstuelt",
		"De allerfleste navne vil få dette tag, og ikke betragtes som &quot;ukendt&quot; (og derfor forkerte). Til gengæld vil systemet meget sjældent prøve at rette stavefejl i et navn - fordi der jo bare kunne være tale om et andet navn (fx <i>Nielsen, Nilsen, Nilsson, Nilson)</i>",
		"tidligere LO-formand<br>\n<br>\n<span style=\"color: #ff0000\">Stig=Malm</span> &lt;dg-fused&gt; &lt;exheur&gt; &lt;hum&gt; PR OP NOM <i>@proper </i>",
	],
	"@abbreviation": [
		"@abbreviation",
		"ukendt forkortelse, der ikke findes i DanProofs leksikon, men godkendes ud fra almindelige forkortelsesmønstre og konteksten",
		"Pga. den udbredte og produktive brug af forkortelser i mange faggenrer, er systemet indstilvar til at acceptere de fleste forkortelser, snarere end at prøve at rette de ukendte forkortelser som varianter af kendte forkortelser",
		"se kap. 5<br>\n<br>\n<span style=\"color: #ff0000\">kap. </span>&lt;heur&gt; N UTR S IDF NOM<i>@abbreviation</i>",
	],
	"@hyphen-prefix": [
		"@hyphen-prefix",
		"manglende bindestreg efter præfiks, i sideordning",
		"Det markerede ord skal have tilføjet en bindestreg til højre. Der er tale om en sideordning, hvor det første konjunkt &quot;deler&quot; 2. led med det andet konjunkt, men erstatter det delte led med en bindestreg, fx <i>sommer- og vintersolhverv (sommersolhverv og vintersolhverv).</i>",
		"<span style=\"color: #ff0000\">første</span> og andenstemme [første- og ...]",
	],
	"@hyphen-suffix": [
		"@hyphen-suffix",
		"manglende bindestreg før suffiks, i sideordning",
		"Det markerede ord skal have tilføjet en bindestreg til venstre. Der er tale om en sideordning, hvor det andet konjunkt &quot;deler&quot; 1. led med det første konjunkt, men erstatter det delte led med en bindestreg, fx <i>aluminiumgsgryder og -pander (aluminiumsgryder og aluminiumspander).</i>",
		"hofdamer og <span style=\"color: #ff0000\">herrer </span>[... og -herrer]",
	],
	"@apostrophe": [
		"@apostrophe",
		"manglende apostrof",
		"Hovedanvendelsen af apostrof i dansk er i forbindelse med bøjning af forkortelser, tal og symboler <i>(pc'en, USA's, sms'erne, 1960'erne, linje 5's endestation, de flade a'er). </i>Undtagelsen er forkortelser med punktum, fx <i>cand.mag.erne, </i>og tunge suffikser, hvor der bruges bindestreg: <i>SMS-agtig. </i><br>\n<br>\nApostrof bruges også til at markere genitiv efter <i>s, z </i>eller <i>x, </i>og mellem <i>ee </i>og <i>e-</i>endelser (fx <i>frisbee'en</i>). Apostrof bruges til gengæld ikke ved almindelig genitiv-s, heller ikke efter udenlandske navne <i>(Clintons, </i>ikke <i>Clinton's</i>), og det er valgfrit ved forkortelser, der kan udtales som almindelige ord <i>(NATOs / NATO's).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-6-apostrof/?exact_terms=apostrof\">Apostrof</a><i> </i>på sproget.dk",
		"<span style=\"color: #ff0000\">90erne</span> [90'erne]",
	],
	"@no-apostrophe": [
		"@no-apostrophe",
		"overflødig apostrof",
		"Hovedanvendelsen af apostrof i dansk er i forbindelse med bøjning af forkortelser, tal og symboler <i>(pc'en, USA's, sms'erne, 1960'erne, linje 5's endestation, de flade a'er). </i>Undtagelsen er forkortelser med punktum, fx <i>cand.mag.erne, </i>og tunge suffikser, hvor der bruges bindestreg: <i>SMS-agtig. </i><br>\n<br>\nApostrof bruges også til at markere genitiv efter <i>s, z </i>eller <i>x, </i>og mellem <i>ee </i>og <i>e-</i>endelser (fx <i>frisbee'en</i>). Apostrof bruges til gengæld ikke ved almindelig genitiv-s, heller ikke efter udenlandske navne <i>(Clintons, </i>ikke <i>Clinton's</i>), og det er valgfrit ved forkortelser, der kan udtales som almindelige ord <i>(NATOs / NATO's).</i><br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-6-apostrof/?exact_terms=apostrof\">Apostrof</a><i> </i>på sproget.dk",
		"<span style=\"color: #ff0000\">Obama's</span> [Obamas] tale",
	],
	"@upper": [
		"@upper",
		"første bogstav burde være med stort",
		"Fejlen går ud på om ordet staves med stort eller med småt. Der bruges bl.a. <b>startmajuskel</b>, altså stort begyndelsesbogstav i starten af en tekst eller helsætning, dvs. efter sætningspunktum og udråbstegn (efter kolon dog kun når der følger en helsætning). Majuskel er valgfrit punktopstillinger<br>\n<br>\n<b>Proprier</b> (egennavne) staves som udgangspunkt med stort, uanset om der er tale om mennesker, dyr, lande, skibe, organisationer etc. fx. <i>Anne, Moderniseringsstyrelsen</i>. I flerleddede navne er første ord med stort, samt betydningsfulde ord inde i navnet (fx. <i>Gorm den Gamle</i>). Almindelige benævnelser på dyr, planter, mad og drikke staves dog med småt - her er det ikke individet der er navngivet: <i>zebra, coxorange, gouda, bellis.</i><br>\n<br>\nSystematiske biologiske navne har 1. del med stort og 2. del med småt, fx. <i>Rubus chamaemorus </i>(multebær), <i>Haliaeetus albicilla </i>(havørn). Når navne bruges i sammenskrivninger, der ikke selv er navne, er brugen af majuskel valgfrit, fx. <i>Nobelpristager - nobelpristager. A</i>fledninger af proprier er dog altid med småt: <i>molbo, marxisme, pasteurisere.</i><br>\n<br>\nMajuskel bruges også i nogle <b>tiltaleformer</b>, herunder pronominer <i>(De, I, Dem, Deres</i> men ikke afledte former <i>din, jeres </i>etc.) og såkaldte titulaturer der begynder med et ejestedord <i>(Hendes Majestæt, Deres Excellence). </i>Andre tiltaleformer (titler og erhvervbetegnelser) skrives med småt: <i>direktør Jensen, pastor Nielsen, psykolog Malene Iversen, onkel Mads.</i><br>\n<br>\n<b>Forkortelser</b> med punktum staves næsten altid med småt. Såkaldte initialforkortelser (dannet af begyndelsesbogstaver af et flerledsnavn) staves som udgangspunkt med stort <i>(FN, DMI, DSB), </i>men <i>kan </i>skrives med småt hvis de udtales som almindelige ord <i>(NATO/Nato, UNESCO/Unesco).</i><br>\n<br>\nSe også <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-11-14\">majuskelregler</a> på sproget.dk, samt <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#s\">test-øvelserne</a> vedr. emnet",
		"<span style=\"color: #ff0000\">han</span> er i <span style=\"color: #ff0000\">alaska </span>[Han ...]",
	],
	"@lower": [
		"@lower",
		"første bogstav burde være med småt",
		"Brug af stort begyndelsesbogstav er ofte ikke en fejl, men en bevidst fremhævelse af indholdsord, fx i overskrifter, titler eller encyklopædiske tekster (fx Wikipedia). Det kan derfor være en idé at slå fejltypen fra i &quot;indstillinger&quot;.<br>\n<br>\nJf. @x-etype-case",
		"Hun blev bidt af en <span style=\"color: #ff0000\">Løve </span>[... af en løve]",
	],
	"@question": [
		"@question",
		"manglende spørgsmålstegn (markeres på verbet)",
		"manglende spørgsmålstegn (markeres på verbet)",
		"Hvad <span style=\"color: #ff0000\">har</span> du set [Hvad har du set?]",
	],
	"@neu": [
		"@neu",
		"genusfejl: intetkøn",
		"Ordet burde være bøjet i intetkøn i.st.f. fælleskøn. I substantiver (navneord) er genus (grammatisk køn) synligt i bestemt form ental. Endelserne er <i>-en </i>for fælleskøn, og <i>-et </i>for intetkøn <i>(hund-hunden, træ-træet). </i>I adjektiver (tillægsord) er intetkønsendelsen <i>-t, </i>og genus er synligt i netop de ubestemte nominalfraser <i>(en stor hund, et stort træ). </i>Ud over substantiver og adjektiver ses genusmarkering i artikler (kendeord) i ental (<i>en-et, den-det) </i>samt i visse adjektiviske stedord <i>(denne-dette, nogen-noget, megen-meget, al-alt, ingen-intet).</i><br>\n<br>\nJf. også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-20-felleskon-eller-intetkon\">Fælleskøn eller intetkøn</a><i> </i>på sproget.dk<br>\n<br>\nDu kan øve substantivers genus med VISL's <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/genus.html\">Gender Genie</a>.<br>\n<br>\nBemærk dog, at mange adjektiver ikke bøjes i intetkøn. Dette gælder adjektiver der ender på<br>\n<br>\ntrykstærk vokal <i>(snu, tro), </i>med undtagelse af -å, -y og fri <i>(råt, nyt, frit)</i><br>\n<br>\n<i>-sk (økonomisk, automatisk, jysk, synsk). </i>Det er dog valgfrit at tilføjt <i>-t </i>i enstavelses-adjektiver og deres sammensætninger, når de ikke er afledt af navne: <i>frisk(t), uhumsk(t)</i><br>\n<br>\nDesuden er <i>-t </i>valgfrit ved adjektiver på <i>-vis</i>, fx<i> delvis(t)</i><br>\n<br>\nJf. også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-25-28-adjektiver\">Bøjningsforhold - Adjektiver</a><i> </i>på sproget.dk<br>\n<br>\nNormalt er der genuskongruens i en nominalfrase, dvs. at alle bestemmende ord til venstre for substantivet følger dettes grammatiske køn, altså <i>e</i><b><i>t</i></b><i> stor</i><b><i>t </i></b><i>træ, </i>ikke <i>et stor? træ. </i>Undtagelsen er når genus bruges til at markere tællelighed - her bruges mængdestedord og påpegende stedord i intetkøn for at markere mængder, uanset substantivets køn, fx. <i>har du nog</i><b><i>et</i></b><i> mælk? - De</i><b><i>t </i></b><i>mælk er ikke godt mere. </i>Omvendt kan fælleskøn sommetider bruges til at markere tællelighed: <i>Øllen gik i stykker (dvs. flasken med øllet).</i>",
		"<span style=\"color: #ff0000\">den </span>[det] røde hus ved <span style=\"color: #ff0000\">vanden </span>[vandet]",
	],
	"@neu-sc": [
		"@neu-sc",
		"genusfejl i subjektsprædikativ: intetkøn",
		"Der er genuskongruens (overensstemmelse i køn) mellem substantiv og adjektiv også, når adjektivet har en selvstændig plads i sætningen som prædikativ. Så når substantivet er intetkøn, skal adjektivet også være det, og når substantivet er fælleskøn, skal adjektivet også være i fælleskøn. Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet (grundleddet): <i>hund</i><b><i>en</i></b><i> er </i><b><i>stor</i></b><i>, træ</i><b><i>et</i></b><i> er </i><b><i>stort</i></b><i>.</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(hunden = stor, træet = stort). </i>De mest typiske verber er <i>være </i>og <i>blive, </i>men tilstandsændringsverber kan også gøre det: <i>hun vågnede glad og munter - barnet vågnede gladt og muntert.</i><br>\n<br>\nUd over subjektspædikativer findes der også objektspædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, fx. <i>hun maler hus</i><b><i>et </i></b><i>rø</i><b><i>dt </i></b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i> </i>(intetkøn vs. fælleskøn), eller <i>hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i> </i>(flertal).<br>\n<br>\nDu kan finde forklaringer og øvelser om prædikativer i afsnittet <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/urkas/urkas_intro4.html\">Prædikativer</a><i> </i>i VISL's Grammy-system om Almen Sprogforståelse.",
		"huset er <span style=\"color: #ff0000\">rød </span>[rødt]",
	],
	"@utr": [
		"@utr",
		"genusfejl: fælleskøn",
		"Ordet burde være bøjet i fælleskøn i.st.f. intetkøn. I substantiver (navneord) er genus (grammatisk køn) synligt i bestemt form ental. Endelserne er <i>-en </i>for fælleskøn, og <i>-et </i>for intetkøn <i>(hund-hunden, træ-træet). </i>I adjektiver (tillægsord) er intetkønsendelsen <i>-t, </i>og genus er synligt i netop de ubestemte nominalfraser <i>(en stor hund, et stort træ). </i>Ud over substantiver og adjektiver ses genusmarkering i artikler (kendeord) i ental (<i>en-et, den-det) </i>samt i visse adjektiviske stedord <i>(denne-dette, nogen-noget, megen-meget, al-alt, ingen-intet).</i><br>\n<br>\nJf. også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-20-felleskon-eller-intetkon\">Fælleskøn eller intetkøn</a><i> </i>på sproget.dk<br>\n<br>\nDu kan øve substantivers genus med VISL's <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/genus.html\">Gender Genie</a>.",
		"<span style=\"color: #ff0000\">det </span>[den] gamle hest i <span style=\"color: #ff0000\">staldet </span>[stalden]",
	],
	"@utr-sc": [
		"@utr-sc",
		"genusfejl i subjektsprædikativ: fælleskøn",
		"Der er genuskongruens (overensstemmelse i køn) mellem substantiv og adjektiv også, når adjektivet har en selvstændig plads i sætningen som prædikativ. Så når substantivet er intetkøn, skal adjektivet også være det, og når substantivet er fælleskøn, skal adjektivet også være i fælleskøn. Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet (grundleddet): <i>hund</i><b><i>en</i></b><i> er </i><b><i>stor</i></b><i>, træ</i><b><i>et</i></b><i> er </i><b><i>stort</i></b><i>.</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(hunden = stor, træet = stort). </i>De mest typiske verber er <i>være </i>og <i>blive, </i>men tilstandsændringsverber kan også gøre det: <i>hun vågnede glad og munter - barnet vågnede gladt og muntert.</i><br>\n<br>\nUd over subjektspædikativer findes der også objektspædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, fx. <i>hun maler hus</i><b><i>et </i></b><i>rø</i><b><i>dt </i></b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i> </i>(intetkøn vs. fælleskøn), eller <i>hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i> </i>(flertal).<br>\n<br>\nDu kan finde forklaringer og øvelser om prædikativer i afsnittet <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/urkas/urkas_intro4.html\">Prædikativer</a><i> </i>i VISL's Grammy-system om Almen Sprogforståelse.",
		"hesten er <span style=\"color: #ff0000\">gammelt </span>[gammel]",
	],
	"@pl": [
		"@pl",
		"numerusfejl: pluralis",
		"Du har brugt ental (singularis), hvor der skulle have været flertal (pluralis). Programmet mener dette, fordi der er uoverensstemmelse i numerus (tal) mellem et substantiv (navneord) og et afhængigt, bestemmende ord (adjektiv, pronomen eller artikel). Men når to ord ikke passer sammen, kan det også være det andet ord som det er galt med, så hvis du er uenig, burde du checke det andet ord i stedet. Fx. kan <i> gammel heste </i>(med adjektivet i ental og substantivet i flertal)<i> </i>rettes til enten <i>gammel hest (ental), </i>eller <i>gamle heste (flertal).</i><br>\n<br>\nFlertalsendelsen afhænger af det enkelte ord, men for adjektiver (tillægsord) er det altid <i>-e. </i>For substantiver kan det være <i>-er, -e </i>eller ingenting. <i>-er </i>er den mest almindelige form for fælleskøn-substantiver. Engelske låneord har som udgangspunkt ingen flertalsendelse, men beholder dog ofter det engelske <i>-s </i>(fx <i>hotdogs</i>)<i>, </i>og kan ende med at få <i>-er </i>(fx <i>policyer</i>) eller <i>-e </i>(fx <i>printere</i>)<i>, </i>når de er blevet en fast bestanddel af det danske sprog.<br>\n<br>\nDu kan læse mere om pluralis-former af fremmedord på <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-22-substantiver-med-fremmede-pluralisendelser\">sproget.dk</a>.<br>\n<br>\nMan danner bestemt form af et flertals-substantiv ved at tilføje <i>-ne </i>(efter <i>-er </i>og <i>-e</i>) eller <i>-ene </i>(når endelsen er igenting eller <i>-s</i>). Altså <i>bil-er-ne, hest-e-ne, hus-ene, hotdogs-ene.</i> En undtagelse er substantiver på <i>-er, </i>der dropper flertals-e i bestemt form, fx. <i>lærer-lærere-lærerne.</i><br>\n<br>\nNår der tilføjes endelser til et ord, kan lukkede stavelser (med konsonant til sidst) blive til åbne stavelser (med vokal til sidst), fx er <i>hus </i>&quot;lukket&quot; af et 's', mens 'hu' i <i>husene </i>er &quot;åben&quot; (ender på vokal), fordi ordet udtales <i>hu-se-ne. </i>Og fordi vokaler udtales langt i åbne stavelser, skal korte vokaler fra lukkede stavelser beskytte nå man bøjer et ord. Dette gøres ved at indføje en ekstra &quot;lukningskonsonant&quot; - idet man fordobler (geminerer) udlydskonsonanten. Dette sker ved <i>kat, </i>hvor a'et udtales kort (i modsætning til 'u' i <i>hus), </i>så der er dobbelt-t i de bøjede former: <i>katten, katte, kattene.</i><br>\n<br>\nDu kan læse mere om konsonantfordobling i artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-7-10/a7-8-10-konsonanter/a7-10-konsonanter-i-bojningsformer\">Konsonanter i bøjningsformer</a><i> </i>på sproget.dk<br>\n<br>\nMulige øvelser er <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/r-problemer/r-problemer/examfolder.2007-07-18.1468473501\">R-problemer - substantiver</a><i> </i>og <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#e\">Bøjning - substantiver</a><i> </i>på sproget.dk samt VISL's grammatikspil <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i> </i>eller indsætningsøvelsen <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i> .</i>",
		"mange <span style=\"color: #ff0000\">hest </span>[heste]",
	],
	"@pl-sc": [
		"@pl-sc",
		"numerusfejl i subjektsprædikativ: pluralis",
		"Der er numeruskongruens (overensstemmelse i tal) mellem substantiv og adjektiv også, når adjektivet har en selvstændig plads i sætningen som prædikativ. Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet <i>(træ</i><b><i>et</i></b><i> er </i><b><i>stort</i></b><i>, træ</i><b><i>erne</i></b><i> er stor</i><b><i>e</i></b><i>).</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(træerne = store). </i>De mest typiske verber er <i>være </i>og <i>blive, </i>men tilstandsændringsverber kan også gøre det: <i>Hun vågnede glad og munter - De vågnede glade og muntre.</i><br>\n<br>\nUd over subjektspædikativer findes der også objektspædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, <i>fx. hun maler hus</i><b><i>et </i></b><i>rø</i><b><i>dt </i></b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i> </i>(intetkøn vs. fælleskøn), eller<i> hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i> </i>(flertal).<br>\n<br>\nDu kan læse mere om <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/urkas/urkas_intro4.html\">prædikativer</a><i> </i>i VISL's Grammy-kursus om Almen Sprogforståelse.",
		"hestene er <span style=\"color: #ff0000\">gammel </span>[gamle]",
	],
	"@sg": [
		"@sg",
		"numerusfejl: singularis",
		"Du har brugt flertal (pluralis), hvor der skulle have været ental (singularis). Programmet mener dette, fordi der er uoverensstemmelse i numerus (tal) mellem et substantiv (navneord) og et afhængigt, bestemmende ord (adjektiv, pronomen eller artikel). Men når to ord ikke passer sammen, kan det også være det andet ord som det er galt med, så hvis du er uenig, burde du checke det andet ord i stedet. Fx. kan <i> gammel heste </i>(med adjektivet i ental og substantivet i flertal)<i> </i>rettes til enten <i>gammel hest (ental), </i>eller <i>gamle heste (flertal).</i><br>\n<br>\n<i>Mulige øvelser er VISL's grammatikspil </i><i><a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a></i><i> </i>eller indsætningsøvelsen <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i> .</i>",
		"en ung <span style=\"color: #ff0000\">lærere</span> [lærer]",
	],
	"@sg-sc": [
		"@sg-sc",
		"numerusfejl i subjektsprædikativ: singularis",
		"Der er numeruskongruens (overensstemmelse i tal) mellem substantiv og adjektiv også, når adjektivet har en selvstændig plads i sætningen som prædikativ. Det mest almindelige er subjektsprædikativer, hvor adjektivet lægger sig til subjektet <i>(træ</i><b><i>et</i></b><i> er </i><b><i>stort</i></b><i>, træ</i><b><i>erne</i></b><i> er stor</i><b><i>e</i></b><i>).</i> Man kan kende denne konstruktion på at verbet (udsagnsordet) før adjektivet kan erstattes med et lighedstegn <i>(træerne = store). </i>De mest typiske verber er <i>være </i>og <i>blive, </i>men tilstandsændringsverber kan også gøre det: <i>Hun vågnede glad og munter - De vågnede glade og muntre.</i><br>\n<br>\nUd over subjektspædikativer findes der også objektspædikativer, hvor adjektivet lægger sig til objektet (genstandsleddet). Her følger adjektivets bøjning objektet, og skal have samme genus og tal som dette, <i>fx. hun maler hus</i><b><i>et </i></b><i>rø</i><b><i>dt </i></b><i>- hun maler by</i><b><i>en</i></b><i> rø</i><b><i>d</i></b><i> </i>(intetkøn vs. fælleskøn), eller<i> hun malede vægg</i><b><i>ene</i></b><i> rød</i><b><i>e</i></b><i> </i>(flertal).<br>\n<br>\nDu kan læse mere om <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/urkas/urkas_intro4.html\">prædikativer</a><i> </i>i VISL's Grammy-kursus om Almen Sprogforståelse.",
		"huset er <span style=\"color: #ff0000\">store </span>[stort]",
	],
	"@idf": [
		"@idf",
		"bestemthedsfejl: ubestemt (indefinit)",
		"Du har brugt en definit (bestemt) bøjning i stedet for en indefinit (ubestemt) bøjning.<br>\n<br>\nBestemhed er en egenskab af substantiver (navneord) og de ord der lægger sig til dem: adjektiver (tillægsord), artikler (kendeord) og visse pronominer (stedord), samt - indirekte - af en sådan ordgruppe (et substantivsyntagme) som helhed. Definit betyder at det er én bestemt person eller ét bestem objekt man har i tanker, men indefinit betyder at man ikke tænker på én bestem referent, men mere på betydningen i almen forstant.<br>\n<br>\nPå substantivet selv markeres bestemthed med endelserne <i>-en </i>(fælleskøn)<i> </i>og <i>-et </i>(intetkøn), men i en substantivgruppe er substantivet ikke bestemthedsbøjet. Det er til gengæld de andre ord i gruppen. Således bliver bestemthed slået fast af en bestemt artikel <i>(den, det, de), </i>af ejestedord <i>(min, din, vores), </i>udpegende stedord <i>(denne, dette, disse) </i>og genitiver <i>(Peters gamle bil, hundens hale). </i>Omvendt er der tale om ubestemthed, når sådanne ord mangler <i>(gammelt jern)</i>, eller når ordgruppen indledes af ubestemt artikel <i>(en, et) </i>eller ubestemt pronomen <i>(nogen, intet, lidt).</i> Men ved disse ord ligger bestemthed ikke i bøjningen, men snarere i valget af ordet selv, og derfor vil man normalt ikke lave fejl her.<br>\n<br>\nHvis det markerede ord er et adjektiv (tillægsord), skal du fjerne bestemthedsendelsen <i>-e. </i>Husk at den ubestemte form til gengæld skal markeres for intetkøn (med endelsen <i>-</i>t), hvis adjektivet lægger sig til intetkøns-substantiv.<br>\n<br>\nHvis det markerede ord er et substantiv (navneord), skal du fjerne endelsen <i>-(e)n(e)</i> i flertal, eller <i>-en/-et </i>i ental. Husk, at dansk ikke har dobbelt bestemthed (som fx svensk), og at substantiver normalt ikke får en bestemhedsendelse hvis de har et bestemmende ord til venstre, altså ikke <i>Jyllandspostens læserne </i>eller <i>det lille hust, </i>men <i>Jyllandpostens læsere </i>og <i>det lille hus.</i><br>\n<br>\nEn mulig øvelse mht. bøjningsformer er VISL's grammatikspil <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i> </i>og indsætningsøvelsen <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i>. </i>Du kan læse mere om ordgrupper i den pågældende sektion i <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/grammy/historie5.html\">Grammy</a><i>.</i>",
		"et <span style=\"color: #ff0000\"><b>røde</b></span> [rødt] æble<br>\n<br>\nJP's <span style=\"color: #ff0000\">læserne</span> [læsere]",
	],
	"@idf-sc": [
		"@idf-sc",
		"bestemthedsfejl i subjektsprædikativ: ubestemt (indefinit)",
		"Et adjektiv, der lægger sig prædikativt til et substantivt (fx. X er <i>stor/stort/store)</i>, vil have samme bøjning som substantivet (X) i tal og køn, men altid være indefinit (ubestemt), uanset om substantivet er bestemt eller ubestemt bøjet. Du har brugt en bøjningsform på -e, der bruges til at markere enten flertal eller bestemthed i adjektiver. Og fordi subjektet (genstandsleddet) i din sætning er i ental, mener programmet, at der er en fejl i kongruensen (dvs. uoverensstemmelse i bøjningen). Enten skal adjektivet ændres til indefinit, eller substantivet til flertal.<br>\n<br>\nNår du ændrer adjektivets bøjning til indefinit (ubestemt), skal du være opmærksom på, at vælge samme genus (køn) som substantivet, altså ingen endelse, hvis substantivet er fælleskøn, eller -t hvis substantivet er intetkøn. Fx skal <i>Huset er gamle? </i>rettes til <i>Hus</i><b><i>et</i></b><i> er gammel</i><b><i>t.</i></b><br>\n<br>\nDu kan læse mere om adjektivbøjning i artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-25-28-adjektiver\">Adjektiver</a><i> </i>på sproget.dk",
		"huset er <span style=\"color: #ff0000\">gamle</span> [gammelt]",
	],
	"@idf-pl": [
		"@idf-pl",
		"bestemthedsfejl: ubestemt flertal (indefinit pluralis)",
		"DanProof mener, at det markerede substantiv skal bøjes i ubestemt flertal. Grunden til dette kan være, at der står et bestemmende ord med en éntydig flertalsendelse til venstre for det markerede substantiv, fx <i>mange/flere/visse huse </i>(ikke ental <i>hus </i>eller bestemt flertal <i>husene</i>).<br>\n<br>\nMarkøren @idf-pl giver ikke mening for adjektiver, fordi flertalsadjektiver alle har endelsen -e, og således ikke skelner mellem bestemt (definit) og ubestemt (indefinit).",
		"mange <span style=\"color: #ff0000\">helten</span> [helte] i film",
	],
	"@def": [
		"@def",
		"bestemthedsfejl: bestemt (definit)",
		"Du har brugt en indefinit (ubestemt) bøjning i stedet for en definit (bestemt) bøjning.<br>\n<br>\nBestemhed er en egenskab af substantiver (navneord) og de ord der lægger sig til dem: adjektiver (tillægsord), artikler (kendeord) og visse pronominer (stedord), samt - indirekte - af en sådan ordgruppe (et substantivsyntagme) som helhed. Definit betyder at det er én bestemt person eller ét bestem objekt man har i tanker, men indefinit betyder at man ikke tænker på én bestem referent, men mere på betydningen i almen forstant.<br>\n<br>\nPå substantivet selv markeres bestemthed i ental (singularis) med endelserne <i>-en </i>(fælleskøn)<i> </i>og <i>-et </i>(intetkøn). I flertal tilføjes <i>-ne </i>(efter <i>-er </i>og <i>-e</i>) eller <i>-ene </i>(når endelsen er igenting eller <i>-s</i>). Altså <i>bil-er-ne, hest-e-ne, hus-ene, hotdogs-ene.</i> En undtagelse er substantiver på <i>-er, </i>der dropper flertals-e i bestemt form, fx. <i>lærer-lærere-lærerne.</i><br>\n<br>\nmen i en substantivgruppe er substantivet ikke bestemthedsbøjet. Det er til gengæld de andre ord i gruppen. Således bliver bestemthed slået fast af en bestemt artikel <i>(den, det, de), </i>af ejestedord <i>(min, din, vores), </i>udpegende stedord <i>(denne, dette, disse) </i>og genitiver <i>(Peters gamle bil, hundens hale). </i>Omvendt er der tale om ubestemthed, når sådanne ord mangler <i>(gammelt jern)</i>, eller når ordgruppen indledes af ubestemt artikel <i>(en, et) </i>eller ubestemt pronomen <i>(nogen, intet, lidt).</i> Men ved disse ord ligger bestemthed ikke i bøjningen, men snarere i valget af ordet selv, og derfor vil man normalt ikke lave fejl her.<br>\n<br>\nEn almindelig fejlkilde er derimod et adjektiv i midten af gruppen, fordi dette skal bøjes i bestemthed afhængigt af de andre ord, og fordi bestemhedsendelse er et lydsvagt <i>-e.</i> For eksempel frasen <i>den stor moské </i>forkert, fordi den indledes af bestemt artikel, men indeholder et ubøjet adjektiv, <i>stor, </i>der burde hedde <i>store</i> i stedet. Frasen er ligeså forkert i intetkøn <i>(Det stort tempel), </i>og adjektivet skal også her rettes til <i>store, </i>men fejlen er mere sjælden, fordi intetkønsendelsen -t er mere markant og forskellig fra -e end den ubøjede fælleskønsform.<br>\n<br>\nEn mulig øvelse mht. bøjningsformer er VISL's grammatikspil <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i> </i>og indsætningsøvelsen <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl2/killerfiller.html\">Killerfiller</a><i>. </i>Du kan læse mere om ordgrupper i den pågældende sektion i <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/grammy/historie5.html\">Grammy</a><i>.</i>",
		"det <span style=\"color: #ff0000\">rød</span> [røde] hus<br>\n<br>\nhele <span style=\"color: #ff0000\">skole</span> [skolen]",
	],
	"@vfin": [
		"@vfin",
		"finit verbum (tidsbøjet udsagnsord)",
		"Du har sandsynligvis glemt at sætte -r på det markerede ord. Fejlen består i at det markerede verbum (udsagnsord), sådan som det er brugt i sætningen, skal være bøjet i nutid (altså have -r), men at du har brugt en såkaldt ikke-finit form (uden -r), typisk en infinitiv (navnemåde), eller muligvis et participium (kort tillægsmåde).<br>\n<br>\nDer er tale om et finit verbum (med -r), hvis der umiddelbart til venstre eller til højre står et subjekt (grundled), dvs. det sætningsled, der angiver <i>hvem</i> det er, der gør det. Altså enten <b><i>Vi</i></b><i> </i><i>spise</i><b><i>r</i></b><b><i> </i></b><i>padekager </i>eller <i>Nu </i><i>spise</i><b><i>r</i></b><b><i> vi</i></b><i> pandekager </i>(Hvem gør det? - Vi). Hvis man ikke umiddelbart kan gennemskue sætningen, kan man også bare inde i hovedet teste, om der kan stå 'jeg' eller 'vi' til venstre for det problematiske verbum. Til gengæld taler det for en infinitiv (uden -r), hvis der til venstre står <i>'at' </i>eller <i>vil/ville, kan/kunne, skal/skulle, bør/burde. </i><br>\n<br>\nEn mulig øvelse er <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/r-problemer/r-problemer/examfolder.2007-07-18.3102694332\">R-problemer - verber</a><i> </i>på sproget.dk, samt VISL's grammatikspil <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i>.</i>",
		"De <span style=\"color: #ff0000\">begynde</span> [begynder] at danse",
	],
	"@inf": [
		"@inf",
		"infinitiv (navnemåde)",
		"Du har sandsynligvis tilføjet et overflødigt -r til en infinitiv, der dermed bliver til er finit verbum.<br>\n<br>\nEn vigtig regel er at et verbum (udsagnsord) er en ubøjet infinitiv (uden -r), hvis der til venstre står <i>'at' </i>eller <i>vil/ville, kan/kunne, skal/skulle, bør/burde. </i>Omvendt har et finit verbum (med -r) et subjekt (grundled) umiddelbart til venstre eller højre, dvs. det sætningsled, der angiver <i>hvem</i> det er, der gør det. Altså enten <b><i>Vi</i></b><i> </i><i>spise</i><b><i>r</i></b><b><i> </i></b><i>padekager </i>eller <i>Nu </i><i>spise</i><b><i>r</i></b><b><i> vi</i></b><i> pandekager </i>(Hvem gør det? - Vi). Hvis man ikke umiddelbart kan gennemskue sætningen, kan man også bare inde i hovedet teste, om der kan stå 'jeg' eller 'vi' til venstre for det problematiske verbum.<br>\n<br>\nEn mulig øvelse er <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/r-problemer/r-problemer/examfolder.2007-07-18.3102694332\">R-problemer - verber</a><i> </i>på sproget.dk, samt VISL's grammatikspil <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i>.</i>",
		"De begynder at <span style=\"color: #ff0000\">danser</span><span style=\"color: #ff0000\"><b> </b></span>[danse]",
	],
	"@impf": [
		"@impf",
		"præteritum (datid)",
		"En mulig øvelse er VISL's grammatikspil <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/visl/da/edutainment/games/balloonride.php\">Balloon Ride</a><i>.</i>",
		"Så sad vi og <span style=\"color: #ff0000\">snakket</span> [snakkede] lidt",
	],
	"@pcp2-akt": [
		"@pcp2-akt",
		"aktivt participium (aktiv tillægsform)",
		"Du har formodentlig glemt et -t, muligvis fordi det kun udtales svagt efter et 'e'. Fx hedder det (1) <i>hun kan dans</i><b><i>e</i></b>, men (2) <i>hun har dans</i><b><i>et</i></b>. <i>t</i>'et i (2) markerer den aktive participiumsform (tillægsform), der bruges når man udtrykker datid med 'have/har'. Uden t'et bliver ordet til en infinitiv (grundform).",
		"Frede havde også <span style=\"color: #ff0000\">spille</span> [spillet] på holdet en gang.",
	],
	"@pas": [
		"@pas",
		"s-passiv",
		"Du har måske brugt endelsen -r i stedet for -s. Check, om udsagnsordet skal være aktiv eller passiv. Du kan evt. se det på, om ordet til venstre er subjekt (grundled) eller objekt (genstandsled). Hvis sidstnævnte er tilfældet, typisk når der er tale om ting og ikke mennesker, skal udsagnsordet stå i passiv.",
		"De forskellige værktøjer <span style=\"color: #ff0000\">bruger</span> [bruges] til forskellige opgaver.",
	],
	"@ene": [
		"@ene",
		"'-ende' brugt i stedet for '-ene'",
		"De to endelser kan forveksles rent lydligt, men står grammatisk milevidt fra hinanden: '-ende' er en tillægsform der udtrykker processer og egenskaber <i>(løbende, smilende), </i>mens '-ene' er den mest almindelige bestemte flertalsform for intetkøns-substantiver. Fejlen er derfor grammatisk alvorligt, lidt som -r fejlene, og kan være meningsforstyrrende ved ordstammer, der kan bruges både verbalt og substantivisk <i>(hus/husene - huse/husende).</i><br>\n<br>\nDu kan finde <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#f\">tests og øvelser</a> vedr. ene/ende på sproget.dk",
		"<span style=\"color: #ff0000\">husende</span> [husene] var smukke",
	],
	"@ende": [
		"@ende",
		"'-ene' brugt i stedet for '-ende'",
		"De to endelser kan forveksles rent lydligt, men står grammatisk milevidt fra hinanden: '-ende' er en tillægsform der udtrykker processer og egenskaber <i>(løbende, smilende), </i>mens '-ene' er den mest almindelige bestemte flertalsform for intetkøns-substantiver. Fejlen er derfor grammatisk alvorligt, lidt som -r fejlene, og kan være meningsforstyrrende ved ordstammer, der kan bruges både verbalt og substantivisk <i>(hus/husene - huse/husende).</i><br>\n<br>\nDu kan finde <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#f\">tests og øvelser</a> vedr. ene/ende på sproget.dk",
		"han kom <span style=\"color: #ff0000\">løbene</span> [løbende] ned ad gaden",
	],
	"@nom": [
		"@nom",
		"nominativ (navnefald)",
		"Du har brugt et pronomen (stedord) med forkert kasus (fald).<br>\n<br>\nPå dansk har substantiver (navneord) ikke længere egentlig kasusbøjning, kun en genitivendelse (ejefald). De eneste ord med kasusbøjning er personlige stedord, der findes i nominativ <i>(han, hun, de), </i>akkusativ <i>(ham, hende, dem) </i>og genitive <i>(hans, hendes, deres).</i> Man kan se hvilken form der skal bruges ved at lave en kryds-og-bolle-analyse af sætningen.<br>\n<br>\nNominativ (navnefald) bruges på subjektpladsen (grundled), akkusativ (genstandsfald) bruges på objektpladsen (genstandsled) og genitiv (ejefald) bruges som bestemmende form foran substantiverne. Subjekt/nominativ bruges om den der gør noget, mens objekt/akkusativ bruges om den det går ud over. En god metode til at skelne mellem subjet/nominativ og objekt/akkusativ er derfor at spørge <i>Hvem x'er hvad? </i>I sætningnen <i>A driller B </i>er det 'A', der gør det, og 'B' det går ud over, så A skal stå i nominativ, og B i akkusativ. Bemærk, at det ikke kommer an på rækkefølgen af ordene - i <i>Ham kan jeg ikke huske </i>eller <i>Det mener du ikke </i>er 'jeg' og 'du' subjekt/nominativ, selvom de står sidst - fordi det er dem, der &quot;x'er&quot;, mens 'ham' og 'det' er det objekt der &quot;x'es&quot;.<br>\n<br>\nDet skal tilføjes at akkusativformen bruges på dansk ikke kun for det direkte objekt (genstandsled), men også for det indirekte objekt (hensynsled), der tidliger havde sin egen form (dativ). Fx er 'hende' i &quot;<i>Peter gav hende en gave&quot; </i>en akkusativform på hensynsledspladsen (mens 'gave' er genstandsleddet).<br>\n<br>\nDu kan finde forklaringer og øvelser om forskellen på subjekt og objekt i artiklen <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/saetningsled-1\">Sætningsled</a><i> </i>på sproget.dk, samt i afsnittet <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/urkas/urkas_intro2.html\">Niveau 2: Kryds, bolle, trekant</a><i> </i>i VISL's Grammy-kursus i Almen Sprogforståelse. Du kan også bruge <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/games_gym.html\">grammatikspillene</a> PostOffice og Syntrice.",
		"det mener i hvert fald <span style=\"color: #ff0000\">dem</span> [de] der har fremsat forslaget.",
	],
	"@acc": [
		"@acc",
		"akkusativ (genstandsfald)",
		"Du har brugt et pronomen (stedord) med forkert kasus (fald).<br>\n<br>\nPå dansk har substantiver (navneord) ikke længere egentlig kasusbøjning, kun en genitivendelse (ejefald). De eneste ord med kasusbøjning er personlige stedord, der findes i nominativ <i>(han, hun, de), </i>akkusativ <i>(ham, hende, dem) </i>og genitive <i>(hans, hendes, deres).</i> Man kan se hvilken form der skal bruges ved at lave en kryds-og-bolle-analyse af sætningen.<br>\n<br>\nNominativ (navnefald) bruges på subjektpladsen (grundled), akkusativ (genstandsfald) bruges på objektpladsen (genstandsled) og genitiv (ejefald) bruges som bestemmende form foran substantiverne. Subjekt/nominativ bruges om den der gør noget, mens objekt/akkusativ bruges om den det går ud over. En god metode til at skelne mellem subjet/nominativ og objekt/akkusativ er derfor at spørge <i>Hvem x'er hvad? </i>I sætningnen <i>A driller B </i>er det 'A', der gør det, og 'B' det går ud over, så A skal stå i nominativ, og B i akkusativ. Bemærk, at det ikke kommer an på rækkefølgen af ordene - i <i>Ham kan jeg ikke huske </i>eller <i>Det mener du ikke </i>er 'jeg' og 'du' subjekt/nominativ, selvom de står sidst - fordi det er dem, der &quot;x'er&quot;, mens 'ham' og 'det' er det objekt der &quot;x'es&quot;.<br>\n<br>\nDet skal tilføjes at akkusativformen bruges på dansk ikke kun for det direkte objekt (genstandsled), men også for det indirekte objekt (hensynsled), der tidliger havde sin egen form (dativ). Fx er 'hende' i &quot;<i>Peter gav hende en gave&quot; </i>en akkusativform på hensynsledspladsen (mens 'gave' er genstandsleddet).<br>\n<br>\nDu kan finde forklaringer og øvelser om forskellen på subjekt og objekt i artiklen <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/saetningsled-1\">Sætningsled</a><i> </i>på sproget.dk, samt i afsnittet <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/urkas/urkas_intro2.html\">Niveau 2: Kryds, bolle, trekant</a><i> </i>i VISL's Grammy-kursus i Almen Sprogforståelse. Du kan også bruge <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/games_gym.html\">grammatikspillene</a> PostOffice og Syntrice.",
		"Jeg har talt med <span style=\"color: #ff0000\">hun</span> [hende]",
	],
	"@gen": [
		"@gen",
		"genitiv (ejefald)",
		"Det markerede ord mangler genitiv-s.<br>\n<br>\nGenitiv bruges til at markere et ejerskabsforhold af ord 1 over ord 2, fx. <i>Peter</i><b><i>s </i></b><i>moster, hende</i><b><i>s</i></b><i> cykel, manden</i><b><i>s </i></b><i>hund, danskerne</i><b><i>s</i></b><i> vaner.</i> Genitiv-s er ikke det samme som fuge-s, der bruges i sammensætninger <i>(fx køb</i><b><i>s</i></b><i>tilbud, salg</i><b><i>s</i></b><i>fremstød).</i> Genitiv-s ses mest ved definitte (bestemte) substantiver, egnennavne eller substantivgrupper med bestemthedsmarkør (fx den/det/de/denne/dette), men 1. led i sammensætninger altid er i ubestemt (indefinit) form. Desuden kan man <i>høre </i>forskellen - ved genitiv er trykket på 2. ord (Peters MOSTER), mens trykket i sammensætninger ligger på 1. led <b>(</b>KØBStilbud).<br>\n<br>\nRent grafisk er det vigtig at være opmærksom på at genitiv-s kræver apostrof efter taludtryk og efter forkortelser, der ikke kan udtales som almindelige ord <i>(NATO's plan, 68'ernes oprør).</i> Efter s, sh og x i udlyd bruges der kun apostrof, of genitiv-s bortfalder.<br>\n<br>\nDu kan læse mere i artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-20-24-substantiver/a7-21-genitiv\">Genitiv</a><i> </i>på sproget.dk, eller lave de tilknyttede <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/bojning-1#g\">tests og øvelser</a> .",
		"<span style=\"color: #ff0000\">Projektet</span> [Projektets] titel",
	],
	"@adv": [
		"@adv",
		"adverbium (typisk afledt af adjektiv)",
		"Her skal der stå et adverbium (biord), og ikke et adjektiv (tillægsord). Forskellen mellem adjektiver og adverbier er, at førstnævnte bruges som nærmere bestemmelser af substantiver (navneord), mens sidstnævnte lægger sig til verber (udsagnsord) eller hele sætningen og fortæller om <i>hvordan, hvor, hvornår </i>og <i>i hvilken grad. </i>Med sidstnævnte betydning kan adverbier også lægge sig til adjektiver <i>(enormt klog, meget dyr).</i><br>\n<br>\nEn mulig øvelse er VISL's <a target=\"_blank\" href=\"http://beta.visl.sdu.dk/games_gym.html\">ordklassespil</a> .<br>\n<br>\nDer findes ubøjelige adverbier som <i>ganske, ofte, overalt </i>samt adverbier der bøjes med <i>-</i>e for at skifte mellem retning og sted <i>(hjem-hjemme, op-oppe), </i>men stavemæssigt er mest interessant, at et adjektiv kan laves om til et adverbium ved at tilføje -t til adjektivets grundform <i>(ren-rent, offentlig-offentligt). </i>Der gælder næsten samme regler for denne -t-endelse som for adjektivets intetkønsform, der jo også ender i -t. T tilføjes således ikke, når ordet ender i trykstærkt -o eller -u, -sk og er valgfrit ved -vis. Adverbier dannet af adjektiver på -<i>ig </i>eller <i>-lig </i>er <i>-t'et </i>valgfrit når de angiver grad og lægger sig til andre adverbier eller adjektiver <i>(hvor høj/lang/ofte/hurtigt?), </i>fx <i>hun er afsindig(t) smart. </i>Bruges adverbierne derimod som selvstændigt sætningsled eller som mådesadverbier <i>(hvordan?), </i>tilføjes altid <i>-t, </i>fx <i>Han taler hurtigt (hvordan taler han?) </i>eller <i>de offentligt ansatte (hvordan er de ansat?).</i> Endeligt er <i>-t </i>valgfrit ved de fleste tidsadverbier og adverbier der angiver holdning: <i>Arrangementet afholdes årlig(t), personlig(t) synes jeg ikke om det, du kan rolig(t) gøre det.</i><br>\n<br>\nUmiddelbart kan man konkludere at det er sikrest at tilføje -t, når man er i tvivl. Dog er beslutningen ikke valgfrit, når der er betydningsforskel, fx. <i>De strejker lovligt (hvordan?) </i>sammenlignet med <i>Du er lovlig fræk i dag, </i>hvor adverbiet udtrykker en personlig holdning.<br>\n<br>\nSe også artiklen <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-36-39-adverbier-og-adverbialer\">Adverbier og adverbialer</a><i> </i>på sproget.dk<br>\n<br>\nsamt <a target=\"_blank\" href=\"http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-20-39/a7-36-39-adverbier-og-adverbialer/a7-37-betydningsforskel-mellem-t-adverbialer-og-rene-adverbier\">Betydningsforskel mellem t-adverbialer og rene adverbier</a><i>. </i>Sitet har også <a target=\"_blank\" href=\"http://sproget.dk/leg-og-ler/quizzer-og-ovelser/retskrivning#a\">tests og øvelser</a> vedr. adverbielt -t.",
		"<span style=\"color: #ff0000\">enorm</span> [enormt] træt<br>\n<br>\n<span style=\"color: #ff0000\">ren</span> [rent] kommunalt<br>\n<br>\nde <span style=\"color: #ff0000\">offentlige</span> [offentligt] ansatte<br>\n<br>\nhan har svaret <span style=\"color: #ff0000\">rigtig</span> [rigtigt]",
	],
	"@nil": [
		"@nil",
		"overflødigt ord",
		"Det markerede ord skal slettes.<br>\n<br>\nEt scenarie for et overflødigt ord er forkert brug af infinitiv-markøren 'at' efter 'gad'. Et andet scenarie er fyldord, der bruges i talesprog, men ikke på skrift. Hertil hører et overflødigt pronominalt subjekt <i>(Regeringen </i><b><i>den</i></b><i> har tænkt sig at sænke skatterne), </i>og en overflødig konjunktion 'at' efter andre ledsætningindledere <i>(Ham der fyren som </i><b><i>at</i></b><i> der var der i nat ...)</i>",
		"han gad ikke <span style=\"color: #ff0000\">at</span> [-] lege",
	],
	"@insert": [
		"@insert",
		"manglende ord",
		"Det markerede ord skal tilføjes<br>\n<br>\nEt eksempel for et manglende ord er en glemt infinitiv-markør 'at', fx. <i>Det fik trænerduoen til [at] kalde til time-out</i>",
		"det fik trænerduoen til <span style=\"color: #ff0000\">[at]</span> kalde til time-out",
	],
	"@sentsplit": [
		"@sentsplit",
		"manglende punktum eller anden sætningsadskillelse",
		"Det ser ud til, at du starter på en ny sætning efter dette ord. Du har muligvis glemt at sætte et punktum eller andet adskillelsestegn (kolon, linjebrud etc.). Hvis dette er tilfældet, skal det næste ord have stort begyndelsesbogstav, fordi det er første ord i en sætning (jf. @upper)",
		"Han kan desværre ikke <span style=\"color: #ff0000\">komme</span> [.] <span style=\"color: #ff0000\">han</span> [Han] er syg.",
	],
};
