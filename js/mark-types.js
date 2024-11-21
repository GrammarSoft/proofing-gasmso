/*!
 * Copyright 2016-2024 GrammarSoft ApS <info£grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Eckhard Bick <eckhard.bick£gmail.com>
 * Frontend by Tino Didriksen <mail£tinodidriksen.com>
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

g_marks.yellow = {
	'£proper': '£proper',
	'£new': '£new',
	'£abbreviation': '£abbreviation',
	'£foreign': '£foreign',
	'£compound': '£compound',
};

g_marks.purple = {
	'£comma': '£comma',
	'£no-comma': '£no-comma',
	'£colon': '£colon',
	//'£sentstop': '£sentstop', // Converted to £sentsplit
	'£sentsplit': '£sentsplit',
};

g_marks.blue = {
	'£-io': '£-io',
	'£-iu': '£-iu',
	'£PREADD:subject': '£PREADD:subject',
	'£PRESWAP': '£PRESWAP',
	'£adj': '£adj',
	'£ado': '£ado',
	'£adv': '£adv',
	'£akt': '£akt',
	'£ante': '£ante',
	'£as': '£as',
	'£ata': '£ata',
	'£clefting': '£clefting',
	'£cond': '£cond',
	'£ig': '£ig',
	'£igx': '£igx',
	'£inf': '£inf',
	'£insert': '£insert',
	'£inte': '£inte',
	'£is': '£is',
	'£ita': '£ita',
	'£ki-': '£ki-',
	'£nil': '£nil',
	'£no-refl': '£no-refl',
	'£noun': '£noun',
	'£ordinal': '£ordinal',
	'£os': '£os',
	'£pas': '£pas',
	'£pcp': '£pcp',
	'£pl': '£pl',
	'£poss': '£poss',
	'£question': '£question',
	'£refl': '£refl',
	'£sg': '£sg',
	'£u': '£u',
	'£ul': '£ul',
	'£us': '£us',
	'£vfin': '£vfin',
	'£warning': '£warning',
};

g_marks.comp_right = new RegExp('£comp-( |$)');
g_marks.to_upper = new RegExp('£upper( |$)');
g_marks.to_lower = new RegExp('£lower( |$)');
g_marks.rx_ins = /(£comma\S*|£insert\S*)( |-|$)/;
g_marks.rx_del = /(£nil\S*|£no-comma\S*)( |-|$)/;

g_marks.types_comma = [];
g_marks.types_grammar = [];

g_marks.types = {
	"£x-etype-list": [
		"£x-etype-list",
		"Literumeraro trovita en listo de eraroj",
		"La korektopropono venas de preta listo de eraraj vortoj, radikoj kaj vortpartoj. La plej multaj el tiuj korektoj estas tre certaj kaj ne dependas de la kunteksto.",
		""
	],
	"£x-etype-lemma": [
		"£x-etype-lemma",
		"Malĝusta vortelekto aŭ falsa amiko",
		"La vorto estas leksike malĝusta: Ne temas pri simpla literumeraro aŭ pri gramatika eraro, sed pri laŭsignife malĝusta vortelekto, evitinda neologismo aŭ falsa amiko el alia lingvo.",
		"Proceso – procezo<br>\n<br>\nOferi – oferti<br>\n<br>\nAŭdi – aŭskulti<br>\n<br>\n<span style=\"color: #ff0000\">aŭtomatika</span> [aŭtomata]<br>\n<br>\n<span style=\"color: #ff0000\">demobilizi</span> [malmobilizi]<br>\n<br>\n<span style=\"color: #ff0000\">relacio</span> [rilato]"
	],
	"£x-etype-neo": [
		"£x-etype-neo",
		"Neologismo",
		"La vorto estas neologismo. Lingvohelpilo proponas pli normalan alternativon.",
		"<span style=\"color: #ff0000\">adspaco</span> [reklamspaco]"
	],
	"£x-etype-arch": [
		"£x-etype-arch",
		"Arkaismo",
		"La vorto estas arkaismo. Lingvohelpilo proponas pli modernan alternativon.",
		"<span style=\"color: #ff0000\">kapelano</span> [vikario]<br>\n<br>\n<span style=\"color: #ff0000\">falombrelo</span> [paraŝuto]"
	],
	"£x-etype-rare": [
		"£x-etype-rare",
		"Malofta radiko",
		"La vorto ekzistas, ekz. kiel lingvoreforma propono, sed estas malofte uzata. Lingvohelpilo proponas pli vaste uzatan alternativon.",
		""
	],
	"£x-etype-ocr": [
		"£x-etype-ocr",
		"OSR-eraro",
		"Verŝajne temas pri OSR-eraro (optika signo-rekono) dum maŝin-skanado de teksto.",
		"<span style=\"color: #ff0000\">fomo</span> [forno]"
	],
	"£x-etype-artefact": [
		"£x-etype-artefact",
		"Kodo-eraro (karaktraro) aŭ OSR-eraro",
		"Lingvohelpilo devis filtri certajn karaktrojn por povi rekoni tiun vorton. La problemo verŝajne estas uzo de ne-standarda karaktraro, eksdata kodigo de specialaj literoj (i.a. supersignoj), misskanado de fotita teksto aŭ pdf ktp.",
		"<span style=\"color: #ff0000\">Çu</span> [Ĉu] <span style=\"color: #ff0000\">ÿia</span> [ŝia] respondo estas <span style=\"color: #ff0000\">¸usta</span> [ĝusta]"
	],
	"£x-etype-h-style": [
		"£x-etype-h-style",
		"H anstataŭ supersigno",
		"Tiu vorto estis rekonebla nur se oni supozas uzon de ‘h’ anstataŭ supersigno, ekz. pro problemoj kun klavaro. Ĉar tio estas permesita en la Fundamento, ne temas pri vera eraro. Se vi intence uzas tiun konvencion, aŭ kopiis malnovan tekston uzante ĝin, vi povas malŝalti la markadon de tiu \"eraro\" en viaj <i>personaj agordoj.</i>",
		"<span style=\"color: #ff0000\">shanghi</span> [ŝanĝi]"
	],
	"£x-etype-au": [
		"£x-etype-au",
		"AU/EU anstataŭ AŬ/EŬ",
		"En tiu vorto aperas <i>‘au’</i> anstataŭ <i>‘aŭ’,</i> aŭ <i>‘eu’</i> anstataŭ <i>‘eŭ’.</i> Tio povas esti intenca uzo, precipe en kombino kun la uzo de <i>‘h’</i> anstataŭ supersigno. Sed ankaŭ povas temi pri rapida tajperaro.",
		"<span style=\"color: #ff0000\">ambau</span> [ambaŭ], <span style=\"color: #ff0000\">europa</span> [eŭropa]"
	],
	"£x-etype-joined": [
		"£x-etype-joined",
		"Kunfando-eraro (mankanta spaco)",
		"Du individuaj vortoj estis erare kunskribitaj. Plej ofte tio estas tajperaro aŭ OCR-eraro. Adverbo antaŭ alia adverbo aŭ adjektivo estas normale individua vorto, sed la lingvouzo estas malklara in kelkaj kazoj, precipe kun <i>‘plej’</i>. Tiel eblas skribi kaj \"plej ofte\" kaj \"plejofte\". La vorteto <i>‘ĉi’</i> ne estu kunskribita kun montraj tabelvortoj. Ankaŭ mallongigoj de mezurunuoj estu apartigitaj post ciferoj.",
		"<span style=\"color: #ff0000\">septembrokaj</span> [septempro kaj] oktobro, <span style=\"color: #ff0000\">ĉitiu</span> [ĉi tiu], <span style=\"color: #ff0000\">24°C</span> [24 °C["
	],
	"£x-etype-dis": [
		"£x-etype-dis",
		"Disigo-eraro (spaco en vorto)",
		"Vorto estis skribita en du partoj, do kun spaco en la mezo. Povas temi pri tajperaro aŭ OCR-eraro, sed ankaŭ povas esti kunmetita vorto, kie la unua parto aspektas kiel sendependa vorto, sed en la konkreta kunteksto aŭ kun la konkreta signifo ne povas stari sola. Tiel, substantivo ne povas esti (antaŭ)atributo de alia substantivo krom ene de kunmetaĵo.",
		"<span style=\"color: #ff0000\"><b>aĝo</b></span><span style=\"color: #ff0000\"> limo</span> [aĝolimo], en <span style=\"color: #ff0000\">plej</span> <span style=\"color: #ff0000\"><b>parto</b></span><span style=\"color: #ff0000\"></span> [plejparto] de Eŭropo"
	],
	"£x-etype-apostrophe": [
		"£x-etype-apostrophe",
		"Mankanta apostrofo",
		"En Esperanto, oni uzas apostrofon por marki la forlason de la fina vokalo en la artikolo <i>(l’ akvo)</i> aŭ la substantiva ‘-o’ <i>(dum temp’ eterna)</i>. Uzi \"nudan\" radikon sen tiu apostrofo estas eraro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/apostrofo\">apostrofo</a>.",
		"Flavgajas <span style=\"color: #ff0000\">foliar</span> [foliar’] de helianto<br>\n<br>\nHo mia <span style=\"color: #ff0000\">kor</span> [kor’], kiam venos <span style=\"color: #ff0000\">liber</span> [liber’]"
	],
	"£x-etype-Hyphen": [
		"£x-etype-Hyphen",
		"Streketo-eraro",
		"Oni uzas streketon por disigi vorton fine de linio aŭ por faciligi legadon en kunmetitaj vortoj, precipe inter cifera aŭ majuskla parto kaj la cetero de la vorto <i>(3-a, UEA-estraro)</i>. Krome streketo estas uzata por marki la mankantan mezan parton de mallongigo (ekz. <i>s-ino, n-ro</i>). Ankaŭ eblas streketon por aldoni finaĵon al fremdvorto aŭ nomo, kiu ne finiĝas per <i>‘o’</i> (nomoj aŭ substantivoj) aŭ <i>‘a’</i> (adjektivo), ekz. <i>‘la nashi-oj’, ‘Clinton-a’.</i><br>\n<br>\nSe oni ligas du kunmetitajn vortojn kun unu sama parto per ‘kaj’ aŭ ‘aŭ’, oni markas la forfalintan parton per streketo <i>(karbo- kaj naftoriĉaj landoj, bier- kaj vinglasoj, laktotrinkaĵoj kaj -manĝaĵoj)</i><br>\n<br>\nOne <i>ne</i> uzas streketon inter la vorteto <i>‘ĉi’</i> kaj montra tabelvorto <i>(*ĉi-tie, tie-ĉi)</i> aŭ substantivo <i>(*ĉi-libro)</i>, sed jes en derivaĵoj kun <i>‘ĉi’ (ĉi-jare, ĉi-rilata)</i>.",
		"UEAestraro [UEA-estraro]"
	],
	"£x-etype-missing-hyphen": [
		"£x-etype-missing-hyphen",
		"Mankanta streketo ene de vorto",
		"En tiu vorto oni kutime uzas streketon por apartigi la du vortopartojn.",
		"Ĉijara [ĉi-jara]"
	],
	"£x-etype-case": [
		"£x-etype-case",
		"Uskleco-eraro",
		"La eraro temas pri uskleco, do ĉu la vorto literumiĝas majuskle aŭ minuskle.<br>\n<br>\nOni uzas majusklon komence de teksto aŭ frazo, kaj eblas uzi majusklon por ĉiu nova punkto en vertikala listo.<br>\n<br>\n<b>Nomoj</b> skribiĝas kun majusklo, sendepende de ĉu temas pri nomoj de personoj, bestoj, landoj, organizaĵoj, ŝipoj ktp. En nomoj konsistantaj el pluraj partoj oni uzas majusklon por la unua vorto kaj por ĉiuj semantike pezaj vortoj, normale substantivoj kaj adjektivoj. En titoloj de libroj, filmoj ktp. oni foje nur majuskligas la unuan vorton, precipe se temas pri pli longaj titoloj kun verboj kaj adverboj.<br>\n<br>\nOni normale ne uzas majusklon por la esperantaj nomoj de etnioj, besto- aŭ plantospecoj, manĝaĵoj, trinkaĵoj ktp. <i>(zebro, kverko, cidro).</i><br>\n<br>\nKelkaj homoj, laŭ angla tradicio, uzas majusklon por <b>geografiaj, naciaj kaj etniaj adjektivoj</b>, sed tio ne reflektas la originan esperantan uzon. Kiam nomoj uziĝas kiel partoj en drivaĵoj aŭ kunmetaĵoj, ili ne havas majusklon <i>(marksismo, usondevena),</i> krom se la nome videblas kiel tuto kaj estas markita per streketo.<br>\n<br>\nEblas – nedevige – uzi majusklon por <b>honoraj titoloj</b> kaj religiaj konceptoj <i>(Reĝino Elizabeta, Dio, la Virgulino, la Profeto),</i> sen normalaj titoloj kaj alparoloj estas minusklaj <i>(direktoro Jensen, onklino Maja, mia kara, vi).</i><br>\n<br>\nLiter-mallongigoj de plurpartaj nomoj kutime estas tute majusklaj <i>(UEA, UN).</i> Esceptoj estas kelkaj mallongigoj transprenitaj el aliaj lingvoj kun literuma fonetiko <i>(Usono, Komsomolo).</i><br>\n<br>\nLegu pli en la konvencioj de MONATO pri <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#pers\">propraj nomoj</a> kaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#maju\">uskleco</a>.",
		"La <span style=\"color: #ff0000\">Franca</span> [franca] popolo"
	],
	"£x-etype-lc": [
		"£x-etype-lc",
		"Minusklo-eraro",
		"La vorto estis rekonita kiel nomo, sed skribita kun minusklo.",
		"Ĝirafoj vivas en <span style=\"color: #ff0000\">afriko</span> [Afriko]"
	],
	"£compound": [
		"£compound",
		"Vorto ne en la vortaro, sed ebla analizo kiel kunmetaĵo",
		"Pro la multaj afiksoj kaj aglomera karaktero de Esperanto vorto kun literumeraro, aŭ falsa amiko el alia lingvo, foje permesas (malĝustan, sed teorie eblan) analizon kiel derivaĵo aŭ kunmetaĵo. Eventuale kontrolu, ĉu tamen temas pri eraro.",
		"<span style=\"color: #c9211e\">patro|preni</span> [partopreni]<span style=\"color: #c9211e\">, ino|cento</span> [senkulpulo]"
	],
	"£error": [
		"£error",
		"Simpla literumeraro, kun korektopropono",
		"La vorto ne troviĝis en la vortaro de Lingvohelpilo, kaj ne eblis trovi derivan aŭ kunmetan analizon. Por proponi korekto(j)n, la programo uzis aŭ similecon kun konata vorto (marko &lt;dp&gt;) aŭ sistemajn ŝanĝojn dum morfologia analizo (marko &lt;dg&gt;).",
		""
	],
	"£check!": [
		"£check!",
		"Ebla literumeraro, sen korektopropono",
		"La vorto ne troviĝis en la vortaro de Lingvohelpilo, kaj ne eblis trovi derivan aŭ kunmetan analizon. Aliflanke la vorto ne similas konatan vorton sufiĉe por fari korektoproponon. Povas temi pri neologismo, fremdvorto aŭ pri vorto kun pluraj eraroj samtempe.",
		""
	],
	"£:...": [
		"£:...",
		"Kunteksta korektopropono por vera vorto",
		"Tiu vorto jes ekzistas, sed estas malĝusta en la kunteksto. Povas temi pri konfuzo de similaj vortoj, falsa amiko (el alia lingvo) aŭ malĝusta vortelekto laŭ signifo.",
		"Ĉu vi <span style=\"color: #ff0000\">konas</span> [scias/scipovas] la francan?<br>\n<br>\nMi ne <span style=\"color: #ff0000\">scias</span> [konas] tiun personon.<br>\n<br>\nTiu floro <span style=\"color: #ff0000\">semblas</span> [similas] al leontodo"
	],
	"£comp-": [
		"£comp-",
		"Disigo-eraro: Tiu vorto devus esti kunskribita kun la venonta",
		"Vorto estis skribita en du partoj, do kun spaco en la mezo. Povas temi pri tajperaro aŭ OCR-eraro, sed ankaŭ povas esti kunmetita vorto, kie la unua parto aspektas kiel sendependa vorto, sed en la konkreta kunteksto aŭ kun la konkreta signifo ne povas stari sola. Tiel, substantivo ne povas esti (antaŭ)atributo de alia substantivo krom ene de kunmetaĵo.",
		"<span style=\"color: #ff0000\">aĝo</span> limo [aĝolimo], en <span style=\"color: #ff0000\">plej</span> parto [plejparto] de Eŭropo"
	],
	"£comp-:-": [
		"£comp-:-",
		"Disigo-eraro: Tiu vorto devus esti ligita kun la venonta per streketo",
		"Vorto estis skribita en du partoj, do kun spaco en la mezo. Povas temi pri tajperaro aŭ OCR-eraro, sed ankaŭ povas esti kunmetita vorto, kie la unua parto aspektas kiel sendependa vorto, sed en la konkreta kunteksto aŭ kun la konkreta signifo ne povas stari sola. Tiel, substantivo ne povas esti (antaŭ)atributo de alia substantivo krom ene de kunmetaĵo.",
		"<span style=\"color: #ff0000\">MSN mesaĝilo</span> [MSN-mesaĝilo]"
	],
	"£-comp": [
		"£-comp",
		"Disigo-eraro: Tiu vorto devus esti kunskribita kun la antaŭa",
		"Vorto estis skribita en du partoj, do kun spaco en la mezo. Povas temi pri tajperaro aŭ OCR-eraro, sed ankaŭ povas esti kunmetita vorto, kie la unua parto aspektas kiel sendependa vorto, sed en la konkreta kunteksto aŭ kun la konkreta signifo ne povas stari sola. Tiel, substantivo ne povas esti (antaŭ)atributo de alia substantivo krom ene de kunmetaĵo.",
		"Aĝo <span style=\"color: #ff0000\">limo</span> [aĝolimo]"
	],
	"£comp": [
		"£comp",
		"Disigo-eraro: Tiuj vortoj devas esti kunskribitaj",
		"Vorto estis skribita en du parto, do kun spaco en la mezo. Povas temi pri tajperaro aŭ OCR-eraro, sed ankaŭ povas esti kunmetita vorto, kie la unua parto aspektas kiel sendependa vorto, sed en la konkreta kunteksto aŭ kun la konkreta signifo ne povas stari sola. Tiel, substantivo ne povas esti (antaŭ)atributo de alia substantivo krom ene de kunmetaĵo.",
		"<span style=\"color: #ff0000\">aĝo limo</span> [aĝolimo], en <span style=\"color: #ff0000\">plej parto</span> [plejparto] de Eŭropo"
	],
	"£new": [
		"£new",
		"Nova vorto: La vorto ne estas en la vortaro, kaj ne certa kunmetaĵo aŭ derivaĵo, sed ĝi verŝajne ekzistas",
		"La analizomaŝino ne rekonis la vorton, sed ĝi verŝajne ekzistas, ĉar ankaŭ ne eblis trovi similan vorton por proponi korekton. Povas ekz. temi pri fremdvorto aŭ neologismo. Tiu kategorio tamen estas malpli sekura ol rekonita kunmetaĵo aŭ derivaĵo, do eble pripensu ĉu vi vere celis ĝin.",
		"Hamarondano, leusa"
	],
	"£unknown": [
		"£unknown",
		"Nespecifita literumeraro",
		"Lingvohelpilo trovis literum-eraron kaj laŭeble proponas korekton, sed ne havas apartan kategorion aŭ klarigojn por tiu eraro.",
		"<span style=\"color: #ff0000\">duon</span> [duono]"
	],
	"£green": [
		"£green",
		"Malgrava aŭ necerta eraro en vorto kiu ezistas kiel tia",
		"Povas temi pri (a) malcerta gramatika eraro, (b) tre malofta vorto kun pli normala alternativo aŭ (c) arĥaismo, neologismo, idismo aŭ simile. Malŝaltu tiun kategorion en viaj <i>personaj agordoj,</i> se vi opinias, kie tiaj markoj pli ĝenas ol helpas.",
		"<span style=\"color: #ff0000\">ties</span> [aliula]<br>\n<br>\n<span style=\"color: #ff0000\">alpinismo</span> [alpismo]<br>\n<br>\n<span style=\"color: #ff0000\">atraktiva</span> [alloga]"
	],
	"£proper": [
		"£proper",
		"Nekonata nomo",
		"Ja ekzistas senlima kvanto da nomo, kaj la ple multaj ne troviĝas en la vortaro. Do la sistempo provas nur certigi, ke vere temas pri nomo, sed nur esceptokaze proponas korekton, eĉ se simila nomo estas en la vortaro, ĉar povas temi pri tute bonaj variantoj (ekz. la familiaj nomoj <i>Nielsen, Nilsen, Nilsson, Nilson).</i>",
		"Tim Wall"
	],
	"£foreign": [
		"£foreign",
		"Fremdvorto",
		"Lingvohelpilo ne rekonis tiun vorton kiel esperantan, sed kredas, ke ĝi estas (akceptebla) fremdvorto. Eble temas pri pruntesprimo el alia lingvo aŭ pri citaĵo. Se temas pri unuopa vorto, eble pripensu ĉu ekzistas esperanta esprimo, kiun vi povus uzi anstataŭe.",
		"Fracking"
	],
	"£abbreviation": [
		"£abbreviation",
		"Abbreviation",
		"Lingvohelpilo pensas, ke tio estas mallongigo, kaj ne trovis certan eraron.",
		"Ekz., inkl., k.a."
	],
	"£abbr-error": [
		"£abbr-error",
		"Mallongigo-eraro",
		"Lingvohelpilo rekonis mallongigon, sed proponas ŝanĝon al pli normala formo. Povas temi pri mankanta punkto.",
		"<span style=\"color: #ff0000\">jc</span> [jc.] (jarcento)"
	],
	"£hyphen-split": [
		"£hyphen-split",
		"Forigenda streketo inter vortoj",
		"Ĉi tie temas pri du apartaj vortoj, ne pri unu vorto kun klariganta streketo. Anstataŭu la streketon per spaco!<br>\n<br>\nNe necesas streketo inter la vorteto ‘ĉi’ kaj montra tabelvorto <i>(ĉi tie)</i>. Ankaŭ antaŭ substantivo ‘ĉi’ estas aparta vorto <i>(ĉi solvo)</i>, nun mem kun funkcio de montrovorto. Aliflanke oni uzas kunskribon kun klariga streketo en adjektivaj aŭ adverbaj derivaĵoj kun ‘ĉi’ <i>(ĉi-jare, ĉi-sezona)</i>",
		"<span style=\"color: #ff0000\">ĉi-tie</span> [ĉi tie], <span style=\"color: #ff0000\">tiu-ĉi</span> [tiu ĉi]"
	],
	"£no-hyphen": [
		"£no-hyphen",
		"Forigenda streketo ene de vorto",
		"Eblas uzi streketon ene de longaj vortoj por klarigi ties strukturon, kaj inter silaboj ĉe liniofino. Sed foje tia intersilaba rompo-streketo supervivas formatigon ekz. al alia liniolongo, kaj tiam estas eraro.<br>\n<br>\nLa streketo en bazaj numeraloj <i>(dek-ses, tricent-dudek-kvin)</i> malaperas en ordaj kaj frakciaj numeraloj <i>(deksesa, dekduono).</i>",
		"<span style=\"color: #ff0000\">dek-sesa</span> [deksesa], <span style=\"color: #ff0000\">dek-duono</span> [dekduono]"
	],
	"£hyphen-prefix": [
		"£hyphen-prefix",
		"Mankanta streketo post memstara prefikso, en kunordigo",
		"La markita vorto devas havi streketon dekstre. Temas pri kunordigo de kunmetaĵoj aŭ derivaĵoj, kie la unua vorto \"partumas\" sian duan parton kun la dua vorto.",
		"<span style=\"color: #ff0000\">somer</span> kaj vintro-ferioj [somer- kaj vintroferioj]"
	],
	"£hyphen-suffix": [
		"£hyphen-suffix",
		"Mankanta streketo antaŭ memstara sufikso, en kunordigo",
		"La markita vorto devas havi streketon maldekstre. Temas pri kunordigo de kunmetaĵoj aŭ derivaĵoj, kie la dua vorto \"partumas\" sian unuan parton kun la unua vorto.",
		"Esperanto-poemoj kaj <span style=\"color: #ff0000\">romanoj</span> [Esperanto-poemoj kaj -romanoj]"
	],
	"£apostrophe": [
		"£apostrophe",
		"Mankanta apostrofo",
		"En Esperanto, oni uzas apostrofon por marki la forlason de la fina vokalo en la artikolo <i>(l’ akvo)</i> aŭ la substantiva ‘-o’ <i>(dum temp’ eterna)</i>. Uzi \"nudan\" radikon sen tiu apostrofo estas eraro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/apostrofo\">apostrofo</a>.",
		""
	],
	"£no-apostrophe": [
		"£no-apostrophe",
		"Troa apostrofo",
		"En Esperanto, oni uzas apostrofon por marki la forlason de la fina vokalo en la artikolo <i>(l’ akvo)</i> aŭ la substantiva ‘-o’ <i>(dum temp’ eterna)</i>. Uzi \"nudan\" radikon sen tiu apostrofo estas eraro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/apostrofo\">apostrofo</a>.",
		""
	],
	"£upper": [
		"£upper",
		"Mankanta majuskligo",
		"La eraro temas pri uskleco, do ĉu la vorto literumiĝas majuskle aŭ minuskle.<br>\n<br>\nOni uzas majusklon komence de teksto aŭ frazo, kaj eblas uzi majusklon por ĉiu nova punkto en vertikala listo.<br>\n<br>\n<b>Nomoj</b> skribiĝas kun majusklo, sendepende de ĉu temas pri nomoj de personoj, bestoj, landoj, organizaĵoj, ŝipoj ktp. En nomoj konsistantaj el pluraj partoj oni uzas majusklon por la unua vorto kaj por ĉiuj semantike pezaj vortoj, normale substantivoj kaj adjektivoj. En titoloj de libroj, filmoj ktp. oni foje nur majuskligas la unuan vorton, precipe se temas pri pli longaj titoloj kun verboj kaj adverboj.<br>\n<br>\nOni normale ne uzas majusklon por la esperantaj nomoj de etnioj, besto- aŭ plantospecoj, manĝaĵoj, trinkaĵoj ktp. <i>(zebro, kverko, cidro).</i><br>\n<br>\nKelkaj homoj, laŭ angla tradicio, uzas majusklon por <b>geografiaj, naciaj kaj etniaj adjektivoj</b>, sed tio ne reflektas la originan esperantan uzon. Kiam nomoj uziĝas kiel partoj en drivaĵoj aŭ kunmetaĵoj, ili ne havas majusklon <i>(marksismo, usondevena),</i> krom se la nome videblas kiel tuto kaj estas markita per streketo.<br>\n<br>\nEblas – nedevige – uzi majusklon por <b>honoraj titoloj</b> kaj religiaj konceptoj <i>(Reĝino Elizabeta, Dio, la Virgulino, la Profeto),</i> sen normalaj titoloj kaj alparoloj estas minusklaj <i>(direktoro Jensen, onklino Maja, mia kara, vi).</i><br>\n<br>\nLiter-mallongigoj de plurpartaj nomoj kutime estas tute majusklaj <i>(UEA, UN).</i> Esceptoj estas kelkaj mallongigoj transprenitaj el aliaj lingvoj kun literuma fonetiko <i>(Usono, Komsomolo).</i><br>\n<br>\nLegu pli en la konvencioj de MONATO pri <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#pers\">propraj nomoj</a> kaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#maju\">uskleco</a>.",
		"<span style=\"color: #ff0000\">li</span> estas en <span style=\"color: #ff0000\">alasko</span> [Li estas en Alasko]"
	],
	"£lower": [
		"£lower",
		"Nenecesa majuskligo",
		"La eraro temas pri uskleco, do ĉu la vorto literumiĝas majuskle aŭ minuskle.<br>\n<br>\nOni uzas majusklon komence de teksto aŭ frazo, kaj eblas uzi majusklon por ĉiu nova punkto en vertikala listo.<br>\n<br>\n<b>Nomoj</b> skribiĝas kun majusklo, sendepende de ĉu temas pri nomoj de personoj, bestoj, landoj, organizaĵoj, ŝipoj ktp. En nomoj konsistantaj el pluraj partoj oni uzas majusklon por la unua vorto kaj por ĉiuj semantike pezaj vortoj, normale substantivoj kaj adjektivoj. En titoloj de libroj, filmoj ktp. oni foje nur majuskligas la unuan vorton, precipe se temas pri pli longaj titoloj kun verboj kaj adverboj.<br>\n<br>\nOni normale ne uzas majusklon por la esperantaj nomoj de etnioj, besto- aŭ plantospecoj, manĝaĵoj, trinkaĵoj ktp. <i>(zebro, kverko, cidro).</i><br>\n<br>\nKelkaj homoj, laŭ angla tradicio, uzas majusklon por <b>geografiaj, naciaj kaj etniaj adjektivoj</b>, sed tio ne reflektas la originan esperantan uzon. Kiam nomoj uziĝas kiel partoj en drivaĵoj aŭ kunmetaĵoj, ili ne havas majusklon <i>(marksismo, usondevena),</i> krom se la nome videblas kiel tuto kaj estas markita per streketo.<br>\n<br>\nEblas – nedevige – uzi majusklon por <b>honoraj titoloj</b> kaj religiaj konceptoj <i>(Reĝino Elizabeta, Dio, la Virgulino, la Profeto),</i> sen normalaj titoloj kaj alparoloj estas minusklaj <i>(direktoro Jensen, onklino Maja, mia kara, vi).</i><br>\n<br>\nLiter-mallongigoj de plurpartaj nomoj kutime estas tute majusklaj <i>(UEA, UN).</i> Esceptoj estas kelkaj mallongigoj transprenitaj el aliaj lingvoj kun literuma fonetiko <i>(Usono, Komsomolo).</i><br>\n<br>\nLegu pli en la konvencioj de MONATO pri <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#pers\">propraj nomoj</a> kaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#maju\">uskleco</a>.",
		"Oni diras, ke <span style=\"color: #ff0000\">Francoj</span> ne ŝatas <span style=\"color: #ff0000\">Anglan</span> manĝaĵon. [Oni diras, ke francoj ne ŝatas anglan manĝaĵon]"
	],
	"£question": [
		"£question",
		"Mankanta demandosigno (markita ĉe la verbo)",
		"Via frazo ŝajnas esti demando. Konsideru uzi demandosignon fine.",
		"Kion vi <b>vidis</b> en la urbo [Kion vi vidis en la urbo?]"
	],
	"£pl": [
		"£pl",
		"Pluralo",
		"Vi uzis singularon anstataŭ pluralo, mankas la finaĵo <i>‘-j’</i>.<br>\n<br>\nLingvohelpilo trovis konflikton kun alia, interdependa vorto, kiu indikas pluralon. Notu ke interdependaj substantivecaj kaj adjektivecaj vortoj (a-vortoj, numeraloj, determinaj pronomoj) devas agordi en nombro, do ne eblas diri ‘<i>granda domoj’,</i> devas esti aŭ <i>‘granda domo’</i> au <i>‘grandaj domoj’. S</i>e vi ne volas ŝanĝi la markitan singularan vorton, konsideru evantuale fari la inversan ŝanĝon (al singularo) en interdependa vorto.<br>\n<br>\nEn Esperanto, la plurala finaĵo estas ‘-j’. Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/singularo_pluralo\">singularo kaj pluralo</a>.",
		"Ambaŭ <span style=\"color: #ff0000\">virino</span> [ambaŭ virinoj]<br>\n<br>\nDiferenco inter la antaŭa kaj nuna <span style=\"color: #c9211e\">versio</span> [versioj]<br>\n<br>\nManjo kaj ŝia patro estis <span style=\"color: #c9211e\">laca</span> [lacaj]"
	],
	"£sg": [
		"£sg",
		"Singularo",
		"Vi uzis pluralon anstataŭ singularo, forigu la finaĵon <i>‘-j’</i>.<br>\n<br>\nLingvohelpilo trovis konflikton kun alia, interdependa vorto, kiu indikas singularon. Notu ke interdependaj substantivecaj kaj adjektivecaj vortoj (a-vortoj, numeraloj, determinaj pronomoj) devas agordi en nombro, do ne eblas diri ‘<i>granda domoj’,</i> devas esti aŭ <i>‘granda domo’</i> au <i>‘grandaj domoj’. S</i>e vi ne volas ŝanĝi la markitan singularan vorton, konsideru evantuale fari la inversan ŝanĝon (al singularo) en interdependa vorto.<br>\n<br>\nEn Esperanto, la plurala finaĵo estas ‘-j’. Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/singularo_pluralo\">singularo kaj pluralo</a>.",
		"Li estas <span style=\"color: #ff0000\">junaj</span> [li estas juna]<br>\n<br>\nĈiu el ili estis <span style=\"color: #ff0000\">kontentaj</span> [kontenta]<br>\n<br>\nLa polico estis <span style=\"color: #ff0000\">armitaj</span> [armita]"
	],
	"£nom": [
		"£nom",
		"Nominativo",
		"Ĉi tie devus esti nominativo, ne akuzativo. Forigu la finaĵon -n!<br>\n<br>\nAkuzativo estas uzata por marki rektan objekton <i>(manĝi kuko</i><b><i>n</i></b><i>)</i>, direkton <i>(iri hejme</i><b><i>n</i></b><i>, iri en la domo</i><b><i>n</i></b><i>)</i>, kvanton <i>(2 metroj</i><b><i>n</i></b><i> alta)</i> aŭ tempon<i> (la 2-a</i><b><i>n</i></b><i> de februaro, venonta</i><b><i>n</i></b><i> ĵaŭdo</i><b><i>n</i></b><i>).</i> Ne uzu akuzativon por subjekto, eĉ se ĝi venas post la verbo.<br>\n<br>\nOni povas trovi la subjekton inter pluraj roloj en la frazo demandante <i>‘Kiu agis? Kio okazis?’</i> La respondo estas la subjekto.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/nominativo\">nominativo</a>.",
		"Ĉeestis tie <span style=\"color: #ff0000\">multajn junulojn</span> [multaj junuloj]"
	],
	"£nom-prp": [
		"£nom-prp",
		"Nominativo post prepozicio",
		"Ĉi tie devus esti nominativo, ne akuzativo. Forigu la finaĵon -n! Post prepozicioj normale venas nominativo. Escepto estas direkta akuzativo post lokaj prepozicioj <i>(li iris en la domon),</i> sed atentu, ke la sama prepozicio bezonas nominativon, se temas pri loko anstataŭ direkto <i>(la infano ludis en la domo).</i> Atentu ankaŭ pri prepozicioj, kie via gepatra lingvo uzas kazan fleksion.",
		"Laŭ min [laŭ mi]<br>\n<br>\nVeni sen la <span style=\"color: #ff0000\">gepatrojn</span> [gepatroj]"
	],
	"£nom-oc": [
		"£nom-oc",
		"Nominativo en objektpredikativo",
		"Ne uzu -n en objektpredikativo, krom se ĝi estas regita de <i>‘kiel’.</i><br>\n<br>\nOni uzas objektpredikativon, kiam verbo ligas rezultan aŭ portempan econ al rekta objekto:<br>\n<br>\n– <i>Li farbis la ovon blua.</i><br>\n<br>\nNe temas pri objektpredikativo, se adjektiva post-epiteto montras fiksan econ de rekta objekto, kaj/aŭ la verbo ne ludas ligan rolon. En tiu kazo uzu -n por la epiteto, agorde kun la rekta objekto:<br>\n<br>\n<i>– Li farbis ovojn kokinajn kaj anserajn.</i><br>\n<br>\n<i>– Li ŝoforas aŭton elektran.</i><br>\n<br>\nEscepto estas objektpredikativo kun <i>‘kiel’:</i><br>\n<br>\n<i>– Li rigardas ĉiujn eksterlandanojn kiel malamikojn.</i> (= <i>same kiel li rigardas malamikojn)</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/nominativo\">nominativo</a> (objektpredikativo).",
		"Mi trovas la libron <span style=\"color: #ff0000\">interesan</span> [interesa]"
	],
	"£nom-pcp": [
		"£nom-pcp",
		"Nominativo post participo",
		"Ĉi tie devas esti nominativo, ne akuzativo. Forigu la finaĵon -n! Temas pri subjekt-predikativo en participa frazeto, kaj predikativoj ĉiam estas nominativaj.",
		"Estante <span style=\"color: #ff0000\">bonan homon</span> [estante bona homo]"
	],
	"£nom&ADV": [
		"£nom&ADV",
		"Nominativo en adverbo",
		"Forigu la finaĵon -n! Nur lokaj e-adverboj permesas akuzativon, kaj nur por indiki direkton, kio ne ŝajnas esti la kazo ĉi-tie.",
		"Tio estas kion oni aŭdas <span style=\"color: #ff0000\">ĉirkaŭen</span> [ĉirkaŭe]"
	],
	"£acc": [
		"£acc",
		"Akuzativo en rekta objekto",
		"Mankas akuzativa -n en rekta objekto. En Esperanto, sendepende de vortordo, oni distingas objekton de subjekto per la finaĵo -n. Kutime subjekto indikas aganton aŭ kaŭzantan eventon, dum objekto indikas dependan rolon, ekz. viktimon, celon, rezulton aŭ vehiklon de ago aŭ okazaĵo. En frazo ‘A<i>-o xxxas B-on’,</i> vi povas fari teston demandante: <i>Ĉu estas A-o aŭ B-o, kiu xxxas?</i> La respondo estas la subjekto (A-o). La objekto (B-o) ne xxxas, sed estas xxxata.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/akuzativo\">akuzativo</a> (Objekto).",
		"Li manĝis <span style=\"color: #ff0000\">pomo</span> [pomon]<br>\n<br>\nDu <span style=\"color: #ff0000\">jaroj</span> [jarojn] antaŭ la milito<br>\n<br>\nŜi preferas la francan kiel <span style=\"color: #ff0000\">dua lingvo</span> [kiel duan lingvon]"
	],
	"£acc-oc": [
		"£acc-oc",
		"Akuzativo en objekta predikativo",
		"Mankas akuzativa -n en objekta predikativo post <i>‘kiel’.</i> Objekta predikativo donas informon pri rezulta, stata aŭ rola eco de la objekto – male al adjektiva atributo, kiu informas pri fiksa, jama eco de la objekto. Atributo havas akuzativan -n, same kiel la objekto mem <i>(kuraci la infanon</i> <b><i>malsanan</i></b><i>),</i> dum objekta predikativo ne <i>(igi la infanon</i> <b><i>malsana</i></b><i>).</i> Speciala kazo estas rol-predikativo kun <i>‘kiel’,</i> kie necesas akuzativa -n, ĉar la <i>‘kiel’</i> kvazaŭ kunordigas/komparas du akuzativojn. Tiel, <i>‘uzi keston kiel seĝon’</i> signifas <i>‘uzi keston (same) kiel (oni uzas) seĝon’.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/nominativo\">nominativo</a> (Objekta predikativo) aŭ en la PMEG-paĝo pri <a target=\"_blank\" href=\"https://dvd.ikso.net/edukado/pmeg/pmeg_12.1_x/gramatiko/specialaj_priskriboj/perverba/objekto.html\">objekta predikativo</a> (perverba priskribo de objekto)",
		"Mi studas fizikon kiel <span style=\"color: #ff0000\">fakultativa fako</span> [kiel fakultativan fakon]"
	],
	"£acc-dir": [
		"£acc-dir",
		"Direkto-akuzativo",
		"Mankas akuzativo, aldonu -n! Temas pri direkto-akuzativo post loka prepozicio aŭ en loka adverbo.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/akuzativo\">akuzativo</a> (Direkto).",
		"Li metis kvin telerojn <span style=\"color: #ff0000\">sur la</span> <span style=\"color: #ff0000\"><b>tablo</b></span> [sur la tablon]<br>\n<br>\nLi iris <span style=\"color: #ff0000\">hejme</span> [hejmen]"
	],
	"£acc-quant": [
		"£acc-quant",
		"Kvanto-akuzativo",
		"Mankas (kvanto-)akuzativo, aldonu -n! Por indiki kvantomezuron oni uzas akuzativon kun la kvanto-vorto (unuo). Ĉi tie ne troviĝas prepozicio, do necesas -n.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/akuzativo\">akuzativo</a> (Mezuro).",
		"La turo altas <span style=\"color: #ff0000\">58 metroj</span> [58 metrojn]<br>\n<br>\n<span style=\"color: #ff0000\">15 jaroj</span> aĝa [15 jarojn aĝa]<br>\n<br>\n<span style=\"color: #ff0000\">multaj kilometroj</span> longa vojaĝo [multajn kilometrojn longa vojaĝo]"
	],
	"£acc-temp": [
		"£acc-temp",
		"Tempo-akuzativo",
		"Mankas (tempo-)akuzativo, aldonu -n! Por indiki tempodaŭron aŭ tempopunkton eblas uzi aŭ prepozicion <i>(dum du semajnoj, je la 3-a de oktobro)</i> aŭ akuzativon. Ĉi tie mankas prepozicio, do necesas akuzativo.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/akuzativo\">akuzativo</a> (Tempo).",
		"Ni vojaĝis <span style=\"color: #ff0000\">tri horoj</span> [tri horojn]"
	],
	"£acc-trans": [
		"£acc-trans",
		"Akuzativo post transitiva adverbo",
		"Mankas akuzativo post transitiva adverbo, aldonu -n! Kelkaj adverboj <i>(inkluzive, ekskluzive, koncerne, rilate)</i>, kun verbeca signifo, estas transitivaj kaj postulas akuzativon en rekta komplemento. Se la komplemento ne estas rekta, sed prepozicia , ne sekvas akuzativo, sed nominativo <i>(inkluzive de, rilate al).</i>",
		"Mi telefonas koncerne<span style=\"color: #ff0000\"> via kunlaboropropono</span> [vian kunlaboroproponon]<br>\n<br>\nInkluzive la <span style=\"color: #ff0000\">gastoj</span> [gastojn], ni estas 11 personoj en la domo"
	],
	"£vfin": [
		"£vfin",
		"Finitivo",
		"Vi uzis infinitivon (i-formon), kie devas esti finita verboformo (s-formo aŭ u-formo). Infinitivon eblas uzi nur post helpverbo <i>(li</i> <i>volas/povas/rajtas</i><i></i> <b><i>fari</i></b><i> longan ferion),</i> aŭ anstataŭ substantivo <i>(savi la klimaton estas malfacila tasko).</i><br>\n<br>\nEn Esperanto, infinitivoj ne permesas subjekton<i> (*ne eblas la homaro savi la klimaton)</i>, do kun subjekto uzu finitivon <i>(ne eblas, ke la homaro savos la klimaton).</i><br>\n<br>\nNur malmultaj prepozicioj estas uzeblaj antaŭ infinitivo: <i>por, anstataŭ, krom, sen</i> kaj la plurvortaĵo <i>antaŭ ol.</i> Post aliaj prepozicioj uzu substantivigon kun <i>-ado</i> aŭ<i></i> simpla <i>-o (post</i> <span style=\"color: #ff0000\"><i>aldoni</i></span><i> salon → post aldonado/aldono de salo).</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (infinitivo kaj finitivo)",
		"Post 6 monatoj estis alia ŝtato kiu <span style=\"color: #ff0000\">transpreni</span> [transprenis] la EU-prezidantecon<br>\n<br>\nIli diskutis la aferon dum <span style=\"color: #ff0000\">manĝi</span> [dum ili manĝis]"
	],
	"£as": [
		"£as",
		"Nuntempo (as-tempo, prezenco)",
		"Konsideru uzi as-tempon (prezencon). As-tempo esprimas nunon, daŭron, aktualon, ĝerneralecon, validecon kaj realecon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (indikativo)",
		"Mi ne kredas, ke li <span style=\"color: #ff0000\">scipovu</span> [scipovas] la francan"
	],
	"£is": [
		"£is",
		"Pasinteco (is-tempo, preterito)",
		"Konsideru uzi is-tempon (preteriton). Is-tempo esprimas, ke io jam okazis/finiĝis kaj implicas, ke la parolanto kredas je ĝi realeco.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (indikativo)",
		"Antaŭ 50 jaroj en Eŭropo preskaŭ ne <span style=\"color: #ff0000\">ekzistas</span> [ekzistis] …"
	],
	"£os": [
		"£os",
		"Futuro (os-tempo)",
		"Konsideru uzi os-tempon (futuron). Os-tempo esprimas, ke iu ago aŭ stato ankoraŭ ne okazis/komenciĝis, sed ke la parolanto kredas, ke ĝi realiĝos.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (indikativo)",
		"Mi <span style=\"color: #ff0000\">venas</span> [venos] morgaŭ.<br>\n<br>\nMi dubas, ke li <span style=\"color: #ff0000\">venu</span> [venos]."
	],
	"£u": [
		"£u",
		"Volitivo (u-modalo)",
		"Konsideru uzi u-finaĵon. La u-modalo montras deziron, ordonon, intencon aŭ celon, parolante pri estonta ago aŭ stato. Plej ofte ĝi estas uzata kiel imperativo, sen subjekto <i>(Donu al mi pli da vino!)</i> aŭ en ke-frazo en la supre menciitaj kontekstoj.<br>\n<br>\nNe apliku regulojn pri konjunktivo el aliaj lingvoj, kaj ne uzu volitivon post verbo esprimanta timon, dubon, promeson aŭ neadon. Uzu finitivon anstataŭ (-as, -os).<br>\n<br>\nNecesas atenti pri la diferenco inter kondicionalo kaj volitivo, speciale se ambaŭ respondas as konjunktivo en la gepatra lingvo. Uzu kondicionalon se eblas meti <i>‘se’</i> antaŭ la (sub)frazon, kaj volitivon, se eblas meti <i>‘ke’.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (volitivo)",
		"Mi volas, ke vi <span style=\"color: #ff0000\">estas</span> [estu] tre zorgema<br>\n<br>\nEstas necese, ke ni <span style=\"color: #ff0000\">faros</span> [faru] tion"
	],
	"£inf": [
		"£inf",
		"Infinitivo (i-moduso)",
		"Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (infinitivo)",
		"La politikistoj tion volas <span style=\"color: #ff0000\">ŝanĝos</span> [ŝanĝi]"
	],
	"£cond": [
		"£cond",
		"Kondicionalo (us-modalo)",
		"Konsideru uzi us-finaĵon. La us-modal indikas ne-realecon, ion imagitan. Por realaj kondiĉoj, uzu <i>-as.</i> Por samtempe esprimi ne-realon kaj tempon, necesas kombini <i>estus</i> kun participo, eluzante la tempan vokalon de la participa finaĵo <i>(Se mi estus malhelpinta tion, …).</i><br>\n<br>\nNecesas atenti pri la diferenco inter kondicionalo kaj volitivo, speciale se ambaŭ respondas as konjunktivo en la gepatra lingvo. Uzu kondicionalon se eblas meti <i>‘se’</i> antaŭ la (sub)frazon, kaj volitivon, se eblas meti <i>‘ke’.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (kondicionalo)",
		"Se mi <span style=\"color: #ff0000\">estu</span> [estus] riĉa, mi <span style=\"color: #ff0000\">aĉetu</span> [aĉetus] domon ĉe la maro."
	],
	"£akt": [
		"£akt",
		"Aktivo",
		"Uzu aktivan participon anstataŭ pasiva.<br>\n<br>\nEsperantaj participoj estas aktivaj, se ili havas -n- inter la tempo-vokalo kaj la participa -t- <i>(ekz. -a</i><b><i>n</i></b><i>to, -i</i><b><i>n</i></b><i>taj, -o</i><b><i>n</i></b><i>te)</i>, pasivaj se ne <i>(ekz. -ato, -itaj, -ote).</i><br>\n<br>\nParticipo de netransitiva verbo ne povas esti pasiva. Simile participo de transitiva verbo ne povas esti pasiva, se ĝi regas rektan objekton.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		"<span style=\"color: #ff0000\">Laborate</span> [Laborante] en banko, li havas bonan salajron.<br>\n<br>\nEsperanto povus esti <span style=\"color: #ff0000\">gajnite</span> [gajninte] multe pli da parolantoj"
	],
	"£pas": [
		"£pas",
		"Pasivo",
		"Uzu aktivan participon anstataŭ pasiva.<br>\n<br>\nEsperantaj participoj estas aktivaj, se ili havas -n- inter la tempo-vokalo kaj la participa -t- <i>(ekz. -a</i><b><i>n</i></b><i>to, -i</i><b><i>n</i></b><i>taj, -o</i><b><i>n</i></b><i>te)</i>, pasivaj se ne <i>(ekz. -ato, -itaj, -ote).</i><br>\n<br>\nEn pasiva frazo la objekto de transitiva verbo fariĝas subjekto, dum la origina subjekto forfalas aŭ sekvas kun la prepozicio <i>‘de’</i> tuj post la participo<i> (Petro trovis la ŝlosilon → La ŝlosilo estis trovita [de Petro]).</i> Do aktiva participo de transitiva verbo sen rekta objekto, kaj kun ne-aganta, \"objekteca\" subjekto, aŭ sekvata de <i>‘de’</i> plus aganto, tre verŝajne devus esti pasiva anstataŭ aktiva.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		"<span style=\"color: #ff0000\">Trafinte</span> [Trafite] de la pafo, li falis teren<br>\n<br>\nTiuj reguloj povas esti <span style=\"color: #ff0000\">rigardantaj</span> [rigardataj] kiel universalaj"
	],
	"£ata": [
		"£ata",
		"Malperfektiva/proceza aspekto (ata-aspekto)",
		"Konsideru uzi -ata anstataŭ -ita. Temas pri aspekto-diferenco. Pasivaj participo kun -ata esprimas procezan (malperfektivan) aspekton, dum pasiva participo kun -ita esprimas rezultan/perfektigan aspekton. Oni povas testi la diferencon per aldono de tempoadverbialo. Proceza aspekto permesas <i>‘dum tri horoj/tagoj/jaroj ktp’.</i> sed ne <i>‘en dato/horo/jaro ktp.’,</i> kaj rezulta aspekto male. Ekz. eblas diri <i>‘la ponto estis detruita en 1944’,</i> sed ne <i>‘la ponto estis detruita dum dum 3 jaroj’,</i> ĉar oni perceptas detruadon kiel punktan eventon kun rezulto, ne kiel procezon kun daŭro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a> (Pasivo - participelekto).",
		"Ŝi estis plu kaj plu <span style=\"color: #ff0000\">amita</span> [amata]"
	],
	"£ita": [
		"£ita",
		"Perfektiva/rezulta aspekto (ita-aspekto)",
		"Konsideru uzi -ita anstataŭ -ata. Temas pri aspekto-diferenco. Pasivaj participo kun -ata esprimas procezan (malperfektivan) aspekton, dum pasiva participo kun -ita esprimas rezultan/perfektigan aspekton. Oni povas testi la diferencon per aldono de tempoadverbialo. Proceza aspekto permesas <i>‘dum tri horoj/tagoj/jaroj ktp’.</i> sed ne <i>‘en dato/horo/jaro ktp.’,</i> kaj rezulta aspekto male. Ekz. eblas diri <i>‘la ponto estis detruita en 1944’,</i> sed ne <i>‘la ponto estis detruita dum dum 3 jaroj’,</i> ĉar oni perceptas detruadon kiel punktan eventon kun rezulto, ne kiel procezon kun daŭro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a> (Pasivo - participelekto).",
		"La bebo estis <span style=\"color: #ff0000\">naskata</span> [naskita] en januaro"
	],
	"£ante": [
		"£ante",
		"Adverba participo (prezenco)",
		"Ne eblas uzi ‘post’ kun infinitivo (ekz. <i>post manĝi</i>). Necesas uzi -ado <i>(post manĝado)</i> aŭ participon <i>(manĝinte).</i> Kun participo eblas rekte transpreni objekton aŭ alian dependan frazeron de la (malĝusta) infinitivo: <i>Manĝinte multe/glaciaĵon.</i>",
		"<span style=\"color: #ff0000\">Post diri</span> tiujn vortojn [Dirinte tiujn vortojn]"
	],
	"£inte": [
		"£inte",
		"Adverba participo (preterito)",
		"Ne eblas uzi ‘per’ kun infinitivo (ekz. <i>per naĝi</i>). Necesas uzi -ado <i>(per naĝado)</i> aŭ participon <i>(naĝante).</i> Kun participo eblas rekte transpreni objekton aŭ alian dependan frazeron de la (malĝusta) infinitivo: <i>Naĝante longajn distancojn.</i>",
		"Tion mi provos atingi <span style=\"color: #ff0000\">per ekzameni</span> kelkajn slangajn esprimojn [… ekzamenante kelkajn slangajn esprimojn]"
	],
	"£pcp": [
		"£pcp",
		"Participo",
		"Necesas uzi participon ĉi tie, ne infinitivon aŭ finitivon.",
		"Mi estis <span style=\"color: #ff0000\">studi</span> ekonomion [Mi estis studanta ekonomion]"
	],
	"£adv": [
		"£adv",
		"Adverbo",
		"Ĉi tie devas esti adverbo (e-vorto), kaj ne adjektivo (a-vorto). La diferenco estas, ke adjektivoj rilatas la substantivoj (o-vortoj), dum adverboj rilatas al verboj (i/as-vortoj) aŭ al la tuta frazo. Adverboj informas pri <i>kiel, kie, kiam</i> kaj <i>kiom (kiagrade).</i> Kun ĉi-lasta funkcio adverboj ankaŭ povas rilati al adjektivoj <i>(tre ĉarma, vaste konata)</i><br>\n<br>\nEkzistas en Esperanto kelkaj ne-derivitaj, \"radikaj\" adverboj <i>(tre, tro, ankaŭ, almenaŭ),</i> sed la plej multaj adverboj estas derivitaj de aliaj vortklasoj uzante e-finaĵon. Lokajn adverbojn eblas ŝangi al direktaj adverboj aldonante n-finaĵon (ekz. <i>tie – tien, hejme – hejmen</i>).<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/adverboj\">adverboj</a>.",
		"Estas <span style=\"color: #ff0000\">normala</span> ke … [Estas normale ke …]<br>\n<br>\nDu jaroj <span style=\"color: #ff0000\">antaŭ</span> [antaŭe] me estis en Islando"
	],
	"£adj": [
		"£adj",
		"Adjektivo",
		"Ĉi tie devas esti adjektivo, uzu a-finaĵon!<br>\n<br>\nAdjektivo (a-vorto) havas du ĉefajn rolojn en la frazo: Unue, ĝi povas esti epiteto de substantivo, esprimante econ de la substantivo. Due, ĝi povas roli kiel predikativo de la subjekto aŭ de (rekta) objekto.<br>\n<br>\nEn esperanto, substantivo ne povas esti (antaŭ)epiteto de alia substantivo (kiel en la angla, ekzemple). Oni devas en tiu kazo ŝanĝi la o-finaĵon al a-finaĵo, do krei adjektivon el la substantivo. Ne eblas diri <i>‘gepatroj domo’,</i> devas esti <i>‘gepatra domo’.</i><br>\n<br>\nEn subjektpredikativo kun adjektiva signifo, ne uzu adverbon (e-vorton) anstataŭ adjektivo, krom se en la frazo mankas subjekto,. Do, diru <i>‘Li/tio/Petro estas granda’,</i> ne <i>‘Li/tio/Petro estas grande’.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/adjektivoj\">adjektivoj</a>.",
		"Tio estas <span style=\"color: #ff0000\">bone</span> [bona]<br>\n<br>\n<span style=\"color: #ff0000\">Berlino</span> Esperanto-klubo [berlina Esperanto-klubo<br>\n<br>\nLi havis du fratojn <span style=\"color: #ff0000\">muzikistojn</span> [du fratojn muzikistajn]"
	],
	"£noun": [
		"£noun",
		"Substantivo",
		"Ĉi tie devas esti substantivo, uzu o-finaĵon, eventuale post substantiviga sufikso <i>(-ado, -eco, -ulo)</i><br>\n<br>\nSubstantivo (o-vorto) priskribas aĵon, aferon, vivantajn estaĵojn, ecojn, konceptojn ktp. Substantivo tipe rolas kiel kerno de la subjekto aŭ objekto, aŭ kiel komplemento de prepozicio.<br>\n<br>\nEĉ adjektiva aŭ adverba radikoj normale ricevas o-finaĵon, eventuale kune kun substantiviga sufikso, kiam ili aperas en \"substantiva\" loko, nome komplementas prepozicion <i>(post *malsana [malsano])</i>, sekvas artikolon aŭ estas uzataj kiel kerno en subjekto aŭ objekto. Tamen ne substantivigu adjektivon post kvantoadverbo <i>(la plej *saĝulo [saĝa]).</i><br>\n<br>\nVerboj jes povas roli kiel subjekto aŭ objekto, en infinitiva formo, sed eĉ verban radikon necesas substantivigi post artikolo kaj post multaj prepozicioj (nur <i>por, sen, anstataŭ</i> kaj <i>antaŭ ol</i> permesas infinitivon).<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/substantivoj\">substantivoj</a>.",
		"5 metrojn de <span style=\"color: #ff0000\">longa</span> kaj 3 metrojn de <span style=\"color: #ff0000\">larĝa</span> [5 metrojn laŭ longo kaj 3 metrojn laŭ larĝo]<br>\n<br>\nBonaj <span style=\"color: #ff0000\">naĝantaj</span> [naĝantoj] povas atingi la insuleton vidalvide de la plaĝo<br>\n<br>\nLa <span style=\"color: #ff0000\">ofte</span> [ofto/ofteco] de varmondoj kreskis<br>\n<br>\nNe ludu dum <span style=\"color: #ff0000\">manĝi</span> [manĝo/manĝado]"
	],
	"£ordinal": [
		"£ordinal",
		"Ordonombro (orda numeralo)",
		"Ĉi tie devas esti ordonombro, uzu a-finaĵon. Post cifero ankaŭ eblas uzi punkton.<br>\n<br>\nOrdonombro informas pri loko en vico kaj respondas la demandon \"<i>la kioma …?\"</i> Oni formas ordonombrojn el simplaj numeralo per aldono de adjektiva finaĵo: <i>unua, dua, tria.</i> Aldonante a-finaĵon al ciferoj oni ofte uzas streketon por apartigi ĝin (do <i>21a</i> aŭ<i> 21-a</i>).<br>\n<br>\nPor la tagoj de monato oni uzas ordonombrojn: <i>la 4-an de januaro, 12.-15. aprilo</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/nombraj_vortoj\">nombroj</a> (adjektivaj nombrovortoj).",
		"La <span style=\"color: #ff0000\">20</span> jarcento [La 20-a jarcento]"
	],
	"£poss": [
		"£poss",
		"Posesivo",
		"Ĉi tie devas esti posesiva pronomo anstataŭ simpla persona numero. Aldonu a-finaĵon!<br>\n<br>\nOni kreas posesivajn (posedajn) pronomojn per adjektivigo de personaj pronomoj. Sen tio, personaj pronomoj rolas kiel substantivoj kaj ne povas esti epitetoj.<br>\n<br>\nLegu pri en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/pronomoj\">pronomoj</a> (posedaj pronomoj).",
		"Mi amiko [mia amiko]"
	],
	"£refl": [
		"£refl",
		"Mankanta refleksivo",
		"Ĉi tie necesas refleksiva pronomo. Uzu <i>‘si(n)’</i> aŭ <i>‘sia(j/n)’</i>!<br>\n<br>\nOni uzas <i>‘si’</i> aŭ <i>‘sia’</i> anstataŭ triapersona pronomo <i>(li, ŝi, ĝi, ili, lia, ŝia, ĝia, ilia)</i>, se tiu referencas al la subjekto de la sama (sub)frazo. Uzu refleksivon, se eblas aldoni <i>‘mem’</i> aŭ <i>‘propra’:</i><br>\n<br>\n<i>– \"Li kulpigis sin (mem).\"</i><br>\n<br>\n<i>– \"Li venis en sia (propra) aŭto.\"</i><br>\n<br>\nRefleksivo ne povas esti subjekto aŭ parto de ĝi. Do ne eblas diri:<br>\n<br>\n– \"?<span style=\"color: #ff0000\">Li kaj sia frato</span> forlasis la feston frue.\" [Li kaj lia frato …]<br>\n<br>\nTio ankaŭ validas por pasiva frazo:<br>\n<br>\n– \"?<span style=\"color: #ff0000\">Sia edzino</span> estis kisata de li.\" [Lia edzino ...]<br>\n<br>\nLegu pri en la Legu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/pronomoj\">pronomoj</a> (si).",
		"Li preferas <span style=\"color: #ff0000\">lian</span> [sian] propran biciklon"
	],
	"£no-refl": [
		"£no-refl",
		"Malĝusta refleksivo",
		"Ĉi tie ne eblas uzi refleksivan pronomon. Anstataŭu <i>‘si(n)’</i> aŭ <i>‘sia(j/n)’</i> per triapersona pronomo <i>(li, ŝi, ĝi, ili, lia, ŝia, ĝia, ilia).</i><br>\n<br>\nOni uzas <i>‘si’</i> aŭ <i>‘sia’</i> anstataŭ persona pronomo nur, se tiu referencas al la subjekto de la sama frazo aŭ subfrazo. Refleksivo en subfrazo ne povas referenci al la subjekto de ĉeffrazo.<br>\n<br>\n– Ŝi sentis, ke pluvas sur <span style=\"color: #ff0000\">sin</span> [ŝin]<br>\n<br>\nNe uzu refleksivon, se ne eblas aldoni <i>‘mem’</i> aŭ <i>‘propra’:</i><br>\n<br>\n<i>– \"Petro vidis Markon kun la ŝtelita biciklo. Li kulpigis lin (?mem).\"</i><br>\n<br>\n<i>– \"Petro estas senlabora, sed havas riĉan patron. Li venis en lia (?propra) aŭto.\"</i><br>\n<br>\nRefleksivo ne povas esti subjekto aŭ parto de ĝi. Do ne eblas diri:<br>\n<br>\n– \"?<span style=\"color: #ff0000\">Li kaj sia frato</span> forlasis la feston frue.\" [Li kaj lia frato …]<br>\n<br>\nTio ankaŭ validas por pasiva frazo:<br>\n<br>\n– \"?<span style=\"color: #ff0000\">Sia edzino</span> estis kisata de li.\" [Lia edzino ...]<br>\n<br>\nLegu pri en la Legu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/pronomoj\">pronomoj</a> (si).",
		"Ŝi ne sciis, ke li amas <span style=\"color: #ff0000\">sin</span> [ŝin]"
	],
	"£ki-": [
		"£ki-",
		"Demandovorto",
		"En tiu loko necesas demanda tabelvorto, ne montra.",
		"Mi demandis <span style=\"color: #ff0000\">tial</span> [kial] li venis."
	],
	"£-iu": [
		"£-iu",
		"Malĝusta tabelvorto",
		"Tabelvorto kun -o <i>(kio, tio, io, ĉio, nenio)</i> estas memstara, substantiveca. Ne eblas uzi ĝin adjektivece antaŭ substantivo. Uzu tabelvorton kun -u anstataŭ.",
		"<span style=\"color: #ff0000\">ĉio</span> [ĉiu] granda religio<br>\n<br>\n<span style=\"color: #ff0000\">Kio</span> [Kiu] filmo plej plaĉis al vi?"
	],
	"£-io": [
		"£-io",
		"Malĝusta tabelvorto",
		"Oni uzas tabelvorton kun -u <i>(kiu, tiu, iu, ĉiu, neniu)</i> aŭ precizige antaŭ substantivo, aŭ memstare celante personon. Ne eblas uzi ĝin memstare celante aĵon aŭ aferon. En tiu kazo, uzu tabelvorton kun -o anstataŭ.",
		"<span style=\"color: #ff0000\">Kiun</span> [Kion] vi volas diri?<br>\n<br>\nEsprimi<span style=\"color: #ff0000\"> tiun, kiun</span> [tion, kion] oni sentas"
	],
	"£ig": [
		"£ig",
		"Mankanta afikso: -ig",
		"Aldonu la sufikson -ig!<br>\n<br>\nOni uzas -ig por esprimi kaŭzadon aŭ ŝanĝadon, kun la proksimuma signifo de <i>‘fari’.</i> Do, <i>‘gajigi lin’ = ‘fari lin gaja’, ‘pecigi ĝin’ = fari ĝin pecoj’, ‘kantigi ŝin’ = ‘fari ŝin kanti’</i>. Verboj kun -ig estas transitivaj, kun objekto indikanta la subjekton de la kaŭzata ago aŭ evento, aŭ al kiu/kio efikas la ŝanĝo. Se la radiko jam estas transitiva verbo, la objekto de ig-verbo ankaŭ povas indiki la objekton de la radiko:<br>\n<br>\n– <i>\"Li legigis sian filon.\"</i><br>\n<br>\n– <i>\"Li legigis la libron al sia filo.\"</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ig)",
		"<span style=\"color: #ff0000\">mallaŭleĝante</span> [mallaŭleĝigante] alkoholon<br>\n<br>\n<span style=\"color: #ff0000\">lumita</span> [lumigita] strato"
	],
	"£igx": [
		"£igx",
		"Mankanta afikso: -iĝ",
		"Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-iĝ)",
		"Kiam <span style=\"color: #ff0000\">komencas</span> [komenciĝas] la koncerto?"
	],
	"£DEL:ig": [
		"£DEL:ig",
		"Forigenda afikso: -ig",
		"Ĉi tie ne eblas uzi la sufikson -ig, aŭ ĝi estas troa, ĉar la radiko estas verbo, kiu jam havas similan signifon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ig)",
		"La tasko estis <span style=\"color: #ff0000\">finigita</span> [finita] en nur kelkaj horoj<br>\n<br>\nMi <span style=\"color: #ff0000\">konfuzigis</span> [konfuzis] lin kun alia partoprenanto."
	],
	"£DEL:igx": [
		"£DEL:igx",
		"Forigenda afikso: -iĝ",
		"Ĉi tie ne eblas uzi la sufikson -iĝ. Aŭ ĝi aŭ io en la kunteksto estas erara.<br>\n<br>\nVerboj kun -iĝ estas netransitivaj kaj tial ne permesas rektan objekton aŭ pasivigon. Se la radiko mem estas transitiva verbo, sufiĉas forigi -iĝ, se ne pripensu anstataŭi -iĝ per ig.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-iĝ)",
		"Ŝi planis <span style=\"color: #ff0000\">renkontiĝi</span> [renkonti] sian amikon"
	],
	"£ul": [
		"£ul",
		"Mankanta afikso: -ul",
		"La sufikso ‘-ul’ kreas person-vorton, kies difina eco estas la radiko de la derivaĵo, ofte – sed ne nepre – adjektivo, ekz. <i>saĝa → saĝulo, ŝako → ŝakulo.</i> Ankaŭ eblas uzi ‘-ul’ por ŝipoj <i>(tri|mast|ulo).</i> Notu, ke simpla substantivigo de adjektivo (do sen ‘-ul’) plej ofte kreas eco-vorton, ne person-vorton <i>(longa → longo ~ longeco, alta → alto → alteco).</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ul)",
		"Li estas <span style=\"color: #ff0000\">genio</span> [geniulo]"
	],
	"£DEL:ul": [
		"£DEL:ul",
		"Forigenda afikso: -ul",
		"Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ul)",
		"<span style=\"color: #ff0000\">ĉinulo</span> [ĉino], <span style=\"color: #ff0000\">skribantulo</span> [skribanto]"
	],
	"£DEL:ist": [
		"£DEL:ist",
		"Forigenda afikso: -ist",
		"Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ist)",
		"<span style=\"color: #ff0000\">kardiologisto</span> [kardiologo]<br>\n<br>\n<span style=\"color: #ff0000\">ortopedisto</span> [ortopedo]"
	],
	"£ado": [
		"£ado",
		"Mankanta afikso: -ad",
		"Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ad)",
		"Post <span style=\"color: #ff0000\">vendi</span> la domon [post <b>vendado</b> de la domo]<br>\n<br>\nLi pensas pri <span style=\"color: #ff0000\">veni</span> [venado] al Eŭropo"
	],
	"£DEL:ec": [
		"£DEL:ec",
		"Forigenda afikso: -ec",
		"Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ec)",
		"<span style=\"color: #ff0000\">adaptiĝemeco</span> [adaptiĝemo]"
	],
	"£nil": [
		"£nil",
		"Forigenda (troa) vorto",
		"Ne eblas havi tiun vorton en tiu loko/kunteksto. La programo proponas forigi ĝin. Povas temi ekzemple pri troa artikolo aŭ prepozicio, aŭ pri kopiado-eraro kun duobligo de vorto.<br>\n<br>\nFoje forigo de unu vorto ligiĝas al ŝanĝado de alia, ekz. antataŭante ‘al + nominativo’ per akuzativo sen ‘al’ <i>(mi amas</i> <span style=\"color: #ff0000\"><b><i>al vi</i></b></span><i> → mi amas</i> <b><i>vin</i></b><i>)</i>",
		"En <span style=\"color: #ff0000\">*la</span> mia domo [en mia domo]<br>\n<br>\nLa urbo <span style=\"color: #ff0000\">*de</span> Novjorko [la urbo Novjorko]"
	],
	"£insert": [
		"£insert",
		"Mankanta vorto",
		"Necesas aldoni la markitan vorton.<br>\n<br>\nEkzemplo povas esti mankanta artikolo aŭ mankanta konjunkcio.",
		"Mi ŝatus vojaĝi kaj ekkoni [<b>la</b>] mondon.<br>\n<br>\nMi pensas [<b>ke</b>] vi pravas."
	],
	"£PREADD:subject": [
		"£PREADD:subject",
		"Mankanta subjekto",
		"En Esperanto, finita verbo normale devas havi subjekton, eĉ se nur pronoman. Tiel, post ‘<b><i>Petro</i></b><i> estas laca.’</i> oni daŭrigas<b><i> ‘Li</i></b><i> dormas’,</i> ne ‘*Dormas’.<br>\n<br>\nEsceptoj estas kunordigo <i>(Petro manĝis kaj trinkis multe)</i> kaj certaj vetero- kaj stato-verboj <i>(pluvas, neĝas, noktiĝas, malhelas).</i> Notu, ke ankaŭ subfrazoj povas funkcii kiel subjekto: <i>‘Gravas, ke la teamo havas novan trejniston’.</i>",
		"JES estas junula Esperanto-renkontiĝo. Normale [<b>ĝi</b>] <span style=\"color: #ff0000\">okazas</span> en Germanio."
	],
	"£PRESWAP": [
		"£PRESWAP",
		"Inversa vortordo",
		"Ĉi tie du vortoj aperas en malĝusta sinsekvo. La markita vorto interŝangu lokon kun la vorto tuj maldekstre.<br>\n<br>\nEn Esperanto, la ordo de frazpartoj estas teorie libera. Tamen la sinsekvo subjekto-verbo-objekto estas plej normala, kaj ŝanĝi ĝin kreas efikon de emfazo aŭ poezieco.<br>\n<br>\nEne de frazparto, do en substantiva, adjektiva aŭ verba vortgrupo, la vortordo estas malpli libera. Adjektivaj epitetoj povas stari aŭ antaŭ aŭ post substantivo, sed artikoloj kaj difiniloj devas stari en la komenco de substantiva vortgrupo. Prepozicioj staras tuj antaŭ la vortgrupo, kiun ili regas, kaj konjunkcioj staras antaŭ tio, kion ili ligas. Relativaj kaj interrogativaj pronomoj staras en la komenco de frazo aŭ subfrazo, sed post eventuala prepozicio.<br>\n<br>\nAdverboj, kiuj priskribas manieron, tempon, lokon aŭ direkton, kaj la plej multaj derivitaj adverbo rolas kiel liberaj frazpartoj, dum emfazaj, fokusaj, intensigaj, kvantaj kaj neaj adverboj <i>(ne, eĉ, tre, tro, pli, plej, nur, ankaŭ, nek, ekzemple)</i> staras tuj antaŭ la vorto aŭ vortgrupo, al kiu ili rilatas.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/vortordo\">vortordo</a>.",
		"En <span style=\"color: #ff0000\">la</span> <span style=\"color: #ff0000\"><b>preskaŭ</b></span> tuta mondo [en <b>preskaŭ la</b> tuta mondo]<br>\n<br>\n<span style=\"color: #ff0000\">nek</span> <span style=\"color: #ff0000\"><b>estas</b></span> ĝenerala nek tutkovra [<b>estas nek</b> ĝenerala nek tutkovra]"
	],
	"£sentstop": [
		"£sentstop",
		"Kunfando de frazoj, manko de frazpunkto",
		"Lingvohelpilo pensas, ke komenciĝas nova frazo post tiu vorto. Eble mankas frazpunkto aŭ alia apartigilo (dupunkto, liniorompo aŭ similie). Se vere komenciĝas nova frazo ĉi tie, kontrolu ĉu la venonta vorto estas majuskla.",
		"Li bedaŭrinde ne povas <span style=\"color: #ff0000\">veni</span> [veni.] Li estas malsana."
	],
	"£comma": [
		"£comma",
		"Mankanta komo",
		"Komoj helpas strukturigi la frazojn kaj faciligas legadon, markante subfrazojn, kunordigojn kaj listojn. Komoj ankaŭ povas esti uzataj por apartigi krominformojn aŭ materialon, kiu ne estas sintaksa parto de la frazo. Kaj foje komo estas la sola indiko, kiu distingas unu signifon de alia.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn. Nek Zamenhof nek la Akademio de Esperanto provis normigi la uzon de komoj, kaj ankaŭ PMEG nur donas minimumajn konsilojn. La uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		""
	],
	"£no-comma": [
		"£no-comma",
		"Troa komo",
		"Komo en tiu loko ne estas kutima kaj povas ĝeni la legadon.",
		""
	],
	"£colon": [
		"£colon",
		"Mankanta dupunkto",
		"Ĉi tie mankas dupunkto.",
		"ROSMER <span style=\"color: #ff0000\">Neniu</span> nomo menciigxas [ROSMER: Neniu …]"
	],
	"£clefting": [
		"£clefting",
		"Fraznodo (interplekto de frazoj)",
		"Lingvohelpilo kredas ke la markita(j) vortoj estas parto de fraznodo. Fraznodo \"levas\" parton de ke-frazo al la antaŭo de la ĉeffrazo, pro emfazo. Fraznodoj estas relative oftaj en kelkaj lingvoj (ekz. skandinavaj), sed ne en Esperanto. Eventuale pripensu alternativon.",
		"Tiu laboro <span style=\"color: #ff0000\">mi pensas, ke</span> estas malfacila.<br>\n<br>\nTiun laboron <span style=\"color: #ff0000\">mi pensas, ke</span> vi devas fari"
	],
	"£warning": [
		"£warning",
		"Konflikto en la frazanalizo",
		"Okazis konflikto inter sintaksaj etikedoj dum la analizo de la frazo, kio povas indiki eraron – aŭ de la sistemo (plej verŝajne) aŭ de vi (kontrolu!).<br>\n<br>\nEkz. ne eblas havi, sen kunordigo, du subjektojn aŭ du objekton de la sama tipo en la sama (sub)propozicio. En tiu kazo povas esti, ke mankas aŭ troas akuzativo en la markita vorto, aŭ ke ĝi bezonas prepozicion.",
		"En 1949 la registaro SUBJ&gt; prenis la sunan kalendaron ŝtata <span style=\"color: #ff0000\">kalendaro</span> &lt;SUBJ [… prenis la sunan kalendaron <b>kiel</b> ŝtata<b>n</b> kalendaro<b>n</b>]"
	],
	"£:de&\"<da>\"": [
		"£:de&\"<da>\"",
		"Malĝusta prepozicio",
		"La prepozicio <i>‘da’</i> havas kvantan signifon. Oni uzas ĝin post kvantaj vortoj <i>(amaso, multe, malmulte, iom, pli, malpli, milo, miliono, litro, kilogramo)</i> aŭ post ujoj aŭ aliaj vortoj, kiuj implicas kvanton <i>(glaso da teo, fasko da herboj).</i><br>\n<br>\nUzu la prepozicion <i>‘de’</i> post ne-kvantaj vortoj <i>(multaj specoj de, manko/perdo/gajno de)</i> kaj post <i>-ono (duono de kuko, 12-ono de jaro).</i> Grupvortojn eblas uzi kaj kun <i>‘de’</i> (el kio la grupo konsistas?) kaj kun <i>‘da’</i> (kiom da?): <i>grupo de/da soldatoj, reto de/da komputioj.</i><br>\n<br>\n<i>Ne eblas uzi 'da’</i> antaŭ vorto, kiu estas pronomo aŭ alimaniere jam kvante difinita, per numeralo aŭ alia kvanta epiteto: <i>glaso/multe de unu vino, glaso de ĝi, iom de kelkaj bieroj, iom de ili.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/da\">da</a>.",
		"Manko <span style=\"color: #ff0000\">da</span> [de] tempo<br>\n<br>\nMultaj specoj <span style=\"color: #ff0000\">da</span> [de] floroj"
	],
	"£:da&\"<de>\"": [
		"£:da&\"<de>\"",
		"Malĝusta prepozicio",
		"La prepozicio <i>‘da’</i> havas kvantan signifon. Oni uzas ĝin post kvantaj vortoj <i>(amaso, multe, malmulte, iom, pli, malpli, milo, miliono, litro, kilogramo)</i> aŭ post ujoj aŭ aliaj vortoj, kiuj implicas kvanton <i>(glaso da teo, fasko da herboj).</i><br>\n<br>\nUzu la prepozicion <i>‘de’</i> post ne-kvantaj vortoj <i>(multaj specoj de, manko/perdo/gajno de)</i> kaj post <i>-ono (duono de kuko, 12-ono de jaro).</i> Grupvortojn eblas uzi kaj kun <i>‘de’</i> (el kio la grupo konsistas?) kaj kun <i>‘da’</i> (kiom da?): <i>grupo de/da soldatoj, reto de/da komputioj.</i><br>\n<br>\n<i>Ne eblas uzi 'da’</i> antaŭ vorto, kiu estas pronomo aŭ alimaniere jam kvante difinita, per numeralo aŭ alia kvanta epiteto: <i>glaso/multe de unu vino, glaso de ĝi, iom de kelkaj bieroj, iom de ili.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/da\">da</a>.",
		"Multe <span style=\"color: #ff0000\">de</span> [da] vino<br>\n<br>\nManpleno <span style=\"color: #ff0000\">de</span> [da] beroj"
	],
	"£:dum&\"<por>\"": [
		"£:dum&\"<por>\"",
		"Malĝusta prepozicio",
		"Kiel tempa prepozicio, <i>‘por’</i> signifas estontan, celitan tempodaŭron (rezulta/perfektiva aspekto):<br>\n<br>\n– <i>Li sidiĝis por momento</i><br>\n<br>\n<i>– Li forvojaĝis por 2 semajnoj</i><br>\n<br>\n<i>– provizoj por 3 tagoj</i><br>\n<br>\nUzu <i>‘dum’</i> por tempodaŭro ĝenerale (ne-perfektiva aspekto).<br>\n<br>\n– <i>Li ne manĝis dum 3 tagoj</i><br>\n<br>\n<i>– Li dormis dum 8 horoj</i><br>\n<br>\nAtentu pri la angla <i>‘for’</i> kiu kovras ambaŭ signifojn. La germana uzas <i>‘für’</i> por la unua signifo, kaj <i>‘… lang’</i> por la dua. La dana uzas <i>‘for’</i> por la unua signifo, kaj <i>‘i’</i> por la dua.",
		"Li estis hejme <span style=\"color: #ff0000\">por</span> [dum] kelkaj horoj<br>\n<br>\nLi jam konas ŝin <span style=\"color: #ff0000\">por</span> [dum] multaj jaroj"
	],
	"£:BASE-kutime": [
		"£:BASE-kutime",
		"Malĝusta Vortelekto",
		"La radiko ‘<i>ordinare</i>’ plej ofte havas la signifon <i>‘ne aparte’, ‘malstrange’,</i> dum ‘<i>kutime</i>’ signifas<i> ‘plej ofte’</i>. Temas pri nuanca diferenco, kaj vi povas elekti la ĝustan por via celo.",
		"Li <span style=\"color: #ff0000\">ordinare</span> [kutime] ne manĝas fiŝon."
	],
	"£nil&ART": [
		"£nil&ART",
		"Malĝusta/troa artikolo",
		"En ĉi tiu kunteksto estas malkutime uzi difinan artikolon.<br>\n<br>\nOni uzas artikolon por ĝenerale konata, videbla, divenebla, unika aŭ antaŭe menciita afero, aŭ generale kiam oni supozas, ke la aŭskultanto scias pri kio aŭ pri kiu(j) temas. Ne uzu difinan artikolon antaŭ nomo aŭ antaŭ alia difinilo <i>(tiu, ĉiu, kies, ambaŭ, unu, mia, via</i> ktp.). Eblas uzi <i>‘la’</i> anstataŭ posesiva pronomo <i>(li levis la manon)</i> aŭ ĝeneralig anstataŭ <i>‘ĉiuj’ (la spektantoj aplaŭdis).</i> Oni krome uzas <i>‘la’</i> por krei lingvonomon el nacia aŭ etna adjektivo <i>(la angla, la japana).</i>",
		"Helpis <span style=\"color: #ff0000\">*la</span> mia patrino.<br>\n<br>\n<span style=\"color: #ff0000\">*La</span> Petro naskiĝis en<span style=\"color: #c9211e\"> *</span><span style=\"color: #ff0000\">la</span> Turkio.<br>\n<br>\nAlica estas *la instruisto."
	],
	"£insert&ART": [
		"£insert&ART",
		"Mankanta artikolo",
		"Ĉi tie devus esti difina artikolo.<br>\n<br>\nOni uzas artikolon por ĝenerale konata, videbla, divenebla, unika aŭ antaŭe menciita afero, aŭ generale kiam oni supozas, ke la aŭskultanto scias pri kio aŭ pri kiu(j) temas. Ne uzu difinan artikolon antaŭ nomo aŭ antaŭ alia difinilo <i>(tiu, ĉiu, kies, ambaŭ, unu, mia, via ktp.).</i> Eblas uzi <i>‘la’</i> anstataŭ posesiva pronomo <i>(li levis la manon)</i> aŭ ĝeneralig anstataŭ <i>‘ĉiuj’</i> <i>(la spektantoj aplaŭdis)</i>. Oni krome uzas <i>‘la’</i> por krei lingvonomon el nacia aŭ etna adjektivo <i>(la angla, la japana)</i>.",
		"La ŝtrumpoj estas en <span style=\"color: #ff0000\">la</span> plej suba tirkesto.<br>\n<br>\nEn <span style=\"color: #ff0000\">la</span> nuna periodo …<br>\n<br>\nParolis <span style=\"color: #ff0000\">la</span> reĝo de Bestolando"
	]
};

let g_green = {
	'£green': '£green',
	'£warning': '£warning',
	'£clefting': '£clefting',
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

	if (g_marks.yellow.hasOwnProperty(k) || g_marks.blue.hasOwnProperty(k) || g_marks.purple.hasOwnProperty(k) || g_green.hasOwnProperty(k)) {
		// Nothing
	}
	else if (/^£(nom.*|acc.*|DEL.*|PREADD.*)$/.test(k)) {
		g_marks.blue[k] = k;
	}
	else {
		g_marks.red[k] = k;
	}
}

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
		if (k.indexOf('&') !== -1) {
			let fk = k.substring(0, k.indexOf('&'));
			let v = k.substring(k.indexOf('&')+1);
			if (!g_marks.types_complex.hasOwnProperty(fk)) {
				g_marks.types_complex[fk] = [];
			}
			g_marks.types_complex[fk].push({
				ana: v.split(/\s+/),
				exp: k,
			});
		}
	}
	g_options_default.types["£new"] = 0;
	g_options_default.types["£proper"] = 0;
}
