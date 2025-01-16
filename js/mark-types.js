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
	'£comma-FSstart': '£comma-FSstart',
	'£comma-FSend': '£comma-FSend',
	'£comma-FMco': '£comma-FMco',
	'£comma-FSco': '£comma-FSco',
	'£comma-contrast': '£comma-contrast',
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
		"<span style=\"color: #ff0000\">proceso</span> – procezo<br>\n<br>\n<span style=\"color: #ff0000\">oferi</span> – oferti<br>\n<br>\n<span style=\"color: #ff0000\">aŭdi</span> – aŭskulti<br>\n<br>\n<span style=\"color: #ff0000\">aŭtomatika</span> [aŭtomata]<br>\n<br>\n<span style=\"color: #ff0000\">demobilizi</span> [malmobilizi]<br>\n<br>\n<span style=\"color: #ff0000\">relacio</span> [rilato]"
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
	"£x-etype-auxe": [
		"£x-etype-auxe",
		"E-finaĵo post AU",
		"La tempaj adverboj <i>‘baldaŭ’, ‘hodiaŭ’, ‘morgaŭ’</i> ne bezonas la adverban e-finaĵon, ĉar ili jam estas adverboj.",
		"<span style=\"color: #ff0000\">baldaŭe</span> [baldaŭ]"
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
	"£ig&\"<regul.*>\"": [
		"£ig&\"<regul.*>\"",
		"Transitiveco",
		"Tio ne estas vera eraro, sed oni tre malofte uzas <i>‘reguli’</i> kun objekto. La baza signifo pli logike estus ‘esti regula’, do netransitiva. Konsideru uzi la transitivan <i>‘reguligi’.</i>",
		"La medikamento <span style=\"color: #c9211e\">regulas</span> (reguligas) la apetiton."
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
		"Komoj helpas strukturigi la frazojn kaj faciligas legadon, markante subfrazojn, kunordigojn kaj listojn, aŭ por kontrastigi or reliefigi frazopartojn. Komoj ankaŭ povas esti uzataj por apartigi krominformojn aŭ materialon, kiu ne estas sintaksa parto de la frazo. Kaj foje komo estas la sola indiko, kiu distingas unu signifon de alia.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn. Nek Zamenhof nek la Akademio de Esperanto provis normigi la uzon de komoj, kaj ankaŭ PMEG nur donas minimumajn konsilojn. La uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Mi ne mendis kafon<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">sed</span> teon."
	],
	"£comma-FSstart": [
		"£comma-FSstart",
		"Mankanta komo: komenco de subpropozicio",
		"Ĉi tie komenciĝas subpropozicio. Metu komon por faciligi legadon. En Esperanto, subpropozicio normale komenciĝas per subjunkcio (subordiga konjunkcio, ekz. <i>ke, kvankam, se, kiam, ĉu</i>), relativa pronomo <i>(kiu, kie, kies)</i> aŭ demandovorto (ajna <i>ki-</i>vorto, <i>cxu</i>).<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Mi kredas<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">ke</span> necesas ripari la tegmenton."
	],
	"£comma-FSend": [
		"£comma-FSend",
		"Mankanta komo: fino de subpropozicio",
		"Ĉi tie finiĝas subpropozicio, kaj daŭriĝas aŭ komenciĝas sintakse pli \"alta\" subpropozicio aŭ ĉefpropozicio. Tiu komo estas unu el la plej malfacilaj, sed kompense multe faciligas legadon.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Se vi havas komentojn<span style=\"color: #ff0000\"><b>,</b></span> sendu retmesaĝon al ni!"
	],
	"£comma-FMco": [
		"£comma-FMco",
		"Komo inter cxefpropozicioj",
		"Tiu komo markas la limon inter du cxefpropozicioj, aŭ la komencon de nova cxefpropozicio pos subpropozicio apartenanta al alia, antaŭa cxefpropozicio. Uzu komon antaŭ la konjunkcioj ‘<i>kaj’, ‘aŭ’</i> aŭ<i> ‘nek’,</i> kiam ili kunordigas tutajn propoziciojn, sed ne, kiam ili kunordigas aliajn, pli etajn frazpartojn (substantivajn, adjektivajn, adverbajn aŭ prepoziciajn). Kompare, la kontrastiga konjunkcio ‘<i>sed’</i> ĉiam markas fortan rompon en la frazofluon kaj meritas komon en ajna kazo.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Finfine la pluvo ĉesis<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">kaj</span> la suno reaperis."
	],
	"£comma-FSco": [
		"£comma-FSco",
		"Komo inter subpropozicioj",
		"Tiu komo markas la limon inter du kunordigitaj subpropozicioj. Uzu komon antaŭ la konjunkcioj ‘<i>kaj’, ‘aŭ’</i> aŭ<i> ‘nek’,</i> kiam ili kunordigas tutajn propoziciojn, sed ne, kiam ili kunordigas aliajn, pli etajn frazpartojn (substantivajn, adjektivajn, adverbajn aŭ prepoziciajn).<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Kiam neĝas<span style=\"color: #ff0000\"><b>,</b> </span><span style=\"color: #ff0000\">aŭ</span> kiam forta pluvo kreskigas la riveron, oni fermas la vojon al la montovalo."
	],
	"£comma-contrast": [
		"£comma-contrast",
		"Kontrasta komo",
		"Tiu komo helpas kontrastigi du frazpartojn aŭ du propoziciojn. La plej ofta kontrastiga vorto estas <i>‘sed’</i>.",
		"<i>Ŝi celas afekti klerecon</i><span style=\"color: #ff0000\"><i>, sed</i></span><i> ne parolas Esperanton.</i>"
	],
	"£no-comma": [
		"£no-comma",
		"Troa komo",
		"Komo en tiu loko ne estas kutima kaj povas ĝeni la legadon.<br>\n<br>\nOni uzas komon por apartigi ripetitajn (samtipajn) aŭ klarigajn frazpartojn (do ekz. en listoj kaj ĉirkaŭ apozicioj), kaj por apartigi propoziciojn, sed ne inter malsamaj frazpartoj malpli grandaj ol propozicioj, krom por marki kontraston aŭ paŭzon.<br>\n<br>\nNe uzu komon antaŭ konjunkcio, kiu kunordigas ne propoziciojn, sed nur verbojn aŭ predikatiojn kun la sama subjekto: <i>Ili aĉetis vinon</i> <span style=\"color: #ff0000\"><i>[,]</i></span><i> kaj diboĉis la tutan nokton.</i><br>\n<br>\nNe uzu komon inter subjekto kaj verbo: <i>Cezaro</i><span style=\"color: #ff0000\"><i> [,]</i></span><i> deziras lin vidi.</i><br>\n<br>\nNe uzu komon inter adjektivo kaj substantivo: <i>En tiaj kazoj rapida</i> <span style=\"color: #ff0000\"><i>[,]</i> </span><i>helpo estas necesega.</i><br>\n<br>\nNe uzu komon inter konjunkcio kaj la propozicio, kiun ĝi enkondukas – la komo devas esti <i>antaŭ</i> la konjunkcio: <i>Li diris</i><span style=\"color: #ff0000\"><i> ke</i></span><i></i> <span style=\"color: #ff0000\"><i>[,]</i></span><i> la aziaj kaj euxropaj landoj devas plifortigi cxiuflankan kunlaboron. → Li diris</i><span style=\"color: #ff0000\"><i>,</i></span><i> ke la aziaj …</i>",
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
	"£:el&\"<de>\"": [
		"£:el&\"<de>\"",
		"Malĝusta prepozicio",
		"Oni uzas <i>‘el’,</i> kaj ne <i>‘de’,</i> por indiki, el kiu materialo estas farita objekto, aŭ el kiuj partoj konsistas tuto. Tio ankaŭ validas por homoj aŭ bestoj kiel \"materialo\": <i>fari atleton el iu.</i> Alia uzo por <i>‘el’</i> estas elekto inter pluraj eblecoj. Ĉe movoj, <i>‘de’</i> estas uzata por forlaso de punkto, dum <i>‘el’</i> signifas \"de ene de\" (ujo, domo, kaverno ktp.). Kaj metafore oni povas vekiĝi <i>el dormo.</i><br>\n<br>\n<i>pokalo</i> <b><i>el</i></b><i> oro</i><br>\n<br>\n<i>La glavo estas</i> <b><i>el</i></b><i> ligno.</i><br>\n<br>\n<i>Mi faros atleton</i> <b><i>el</i></b><i> vi.</i><br>\n<br>\n<b><i>El</i></b><i> la raŭpo fariĝis bela papilio.</i><br>\n<br>\n<i>Oni elektis lin</i> <b><i>el</i></b><i> inter 500 kandidatoj.</i><br>\n<br>\n<i>La infano falis</i> <b><i>el</i></b><i> la lito.</i><br>\n<br>\nTrovu ekzemplojn en CorpusEye, kaj difinojn en PIV (butonoj apud la korektopropono)!",
		""
	],
	"£:dum&\"<por>\"": [
		"£:dum&\"<por>\"",
		"Malĝusta prepozicio",
		"Kiel tempa prepozicio, <i>‘por’</i> signifas estontan, celitan tempodaŭron (rezulta/perfektiva aspekto):<br>\n<br>\n– <i>Li sidiĝis por momento</i><br>\n<br>\n<i>– Li forvojaĝis por 2 semajnoj</i><br>\n<br>\n<i>– provizoj por 3 tagoj</i><br>\n<br>\nUzu <i>‘dum’</i> por tempodaŭro ĝenerale (ne-perfektiva aspekto).<br>\n<br>\n– <i>Li ne manĝis dum 3 tagoj</i><br>\n<br>\n<i>– Li dormis dum 8 horoj</i><br>\n<br>\nAtentu pri la angla <i>‘for’</i> kiu kovras ambaŭ signifojn. La germana uzas <i>‘für’</i> por la unua signifo, kaj <i>‘… lang’</i> por la dua. La dana uzas <i>‘for’</i> por la unua signifo, kaj <i>‘i’</i> por la dua.",
		"Li estis hejme <span style=\"color: #ff0000\">por</span> [dum] kelkaj horoj<br>\n<br>\nLi jam konas ŝin <span style=\"color: #ff0000\">por</span> [dum] multaj jaroj"
	],
	"£:en&\"<po>\"": [
		"£:en&\"<po>\"",
		"Malĝusta prepozicio",
		"Por multaj, la slav-devena vorteto <i>‘po’</i> estas unu el la plej malfacilaj en Esperanto. <i>‘Po x’</i> signifas ‘tiel, ke ĉiu havu/kostu x’ (angle: <i>apiece,</i> germane: <i>je,</i> slavaj lingvoj: <i>po</i>). Esence ĝi estas distribua prepozicio, kiu distribuas nombreblan aŭ divideblan kvanton (verda en la ekzemploj) inter \"membroj\" de iu aro aŭ listo (blua).<br>\n<br>\n<i>La</i> <span style=\"color: #0000ff\"><b><i>infanoj</i></b></span><i> manĝis po</i> <span style=\"color: #008000\"><b><i>4</i></b></span><i> keksoj = la infanoj manĝis keksojn, po kvar → ĉiu el ili ricevis 4 keksojn</i><br>\n<br>\n<span style=\"color: #0000ff\"><b><i>Ĉies</i></b></span><i> profito estu po</i> <span style=\"color: #008000\"><b><i>kvarono</i></b></span><i> de la tuto</i><br>\n<br>\n<i>Ŝi mendis du</i> <span style=\"color: #0000ff\"><b><i>boatekskursojn</i></b></span><i> po</i> <span style=\"color: #008000\"><b><i>20</i></b></span><i> dolaroj por horo.</i><br>\n<br>\nSe ne ekzistas aro, listo aŭ plurala vorto maldekstre de <i>‘po’</i> kaj nombro aŭ kvanto dekstre de ĝi, verŝajne temas pri eraro. Plej ofte temas pri x/y-eraro, kie oni uzis <i>‘po’</i> por signifi la dividostrekon ‘/’ (angle: <i>per,</i> germane: <i>pro),</i> ekz. <i>km/h</i>:<br>\n<br>\n<i>La maksimuma rapideco sur aŭtoŝoseo estas 130 kilometroj</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (en) horo.</i><br>\n<br>\n<i>Kelkaj malnovaj aŭtoj foruzis 1 litron da benzino</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (je) kilometro.</i><br>\n<br>\n<i>La ŝtofo kostas 8 dolarojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (por) metro.</i><br>\n<br>\nLa eraro estas, ke ne estas la kilometroj, kiuj (ĉiu) havas horon, aŭ la dolaroj, kiuj (ĉiu) havas metron. Fakte male, ĉiu horo \"ricevas\" 130 kilometroj, kaj ĉiu metro kostas 8 dolarojn. Simile, en la suba ekzemplo ne estas la taskoj, kiuj ricevas studenton, sed la studentoj, kiuj ricevas taskojn:<br>\n<br>\n<i>Mi donis du taskojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (al ĉiu) studento.</i><br>\n<br>\nEn moderna Esperanto, multaj ne-slavoj uzas la vorton kiel adverbon (kvazaŭ <i>‘poe’,</i> angle: <i>each,</i> germane <i>jeweils</i>), kaj en tiu kazo eblas uzi akuzativon post <i>‘po’,</i> ĉar kun adverba interpreto ne estas <i>‘po’,</i> kiu regas la akuzativan substantivon, sed la verbo:<br>\n<br>\n<i>La infanoj manĝis po 4 keksojn = la infanoj po manĝis 4 keksojn = la infanoj manĝis 4 keksojn po.</i><br>\n<br>\nLa avantaĝo de la adverba interpreto de <i>‘po’</i> estas, ke oni aŭtomate nur uzas ĝin en frazoj kie ĝi povas rilatas al la verbo, kaj ne por ligi du substantivojn, evitante la <i>km/h-</i>kazon, ĉar la natura loko de la adverbo estas apud la verbo, kaj ne inter substantivoj. Oni do tute nature serĉas taŭgan prepozicion (alian ol <i>‘po’</i>!) por la tri frazoj supre kun ‘<i>kilometroj ? horo’, ‘benzino ? kilometro’</i> kaj<i> ‘dolaroj ? metro’</i>.",
		""
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
	],
	"£insert&PRP": [
		"£insert&PRP",
		"Mankanta prepozicio",
		"Ĉi tie mankas prepozicio, verŝajne por ligi (dekstran) substantivon al vorto maldekstre, kiu postulas ĝuste tiun prepozicion.",
		""
	],
	"£:BASE-plenkreskulo&\"<adultoj?n?>\"": [
		"£:BASE-plenkreskulo&\"<adultoj?n?>\"",
		"Falsa amiko",
		"Tio povas esti falsa amiko: <i>‘adulto’</i> signifas <i>‘ekstergeedza kromseksumado’,</i> dum plenkreskulo simple estas homo pli aĝa ol 18.",
		""
	],
	"£:BASE-afekcii": [
		"£:BASE-afekcii",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘afekti’</i> signifas troige ŝajnigi propran econ aŭ staton (angle: <i>pretend)</i>, dum <i>‘afekcii’</i> (angle: <i>affect</i>) signifas kaŭzi ŝanĝon en animstato aŭ korpofunkcio. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-akra": [
		"£:BASE-akra",
		"Falsa amiko",
		"En Esperanto, <i>‘akuta’</i> celas aktualan intensecon (ekz. de malsano), dum <i>‘akra’</i> signifas <i>‘tranĉa’, ‘penetra’,</i> inkl. de diversaj metaforaj uzoj (angle: <i>sharp</i>). La falsa amiko estas angla <i>‘acute’</i> en kunteksto de sensorganoj aŭ sonoj. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-preciza": [
		"£:BASE-preciza",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, akurateco temas pri tempo (angle: <i>on time</i>), dum angla <i>‘accurate’</i> en Esperanto esprimiĝas kiel precizeco. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-surveturi": [
		"£:BASE-surveturi",
		"Malĝusta vortelekto",
		"Oni <i>alveturas</i> lokon (vojaĝo), sed <i>surveturas</i> homon aŭ beston en aŭtoakcidento.",
		""
	],
	"£:BASE-akcxento": [
		"£:BASE-akcxento",
		"Falsa amiko / konfuzebla vortoparo",
		"Esterlandano havas <i>akĉenton,</i> vortprononco aŭ rimo havas <i>akcenton,</i> kaj esperantaj literoj havas <i>supersignojn.</i>",
		""
	],
	"£:BASE-sxati&\"<am.*>\"": [
		"£:BASE-sxati&\"<am.*>\"",
		"Konfuzebla vortoparo",
		"Eblas uzi kaj <i>‘ami’</i> kaj <i>‘ŝati’</i> kun preskaŭ ĉiu speco de objekto, sed <i>‘ami’</i> (angle: <i>love</i>) estas pli emocia, \"kora\" ol <i>‘ŝati’</i> (angle: <i>like</i>)<i>.</i> Do tipe oni ŝatas manĝaĵon aŭ libron, sed amas koramik(in)on. Atentu pri propoziciaj objektoj (<i>ke-</i>frazoj kaj infinitivoj) – kun ili nur eblas <i>‘ŝati’:</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>amas</i></span><i> (ŝatas) vojaĝi. Mi</i> <span style=\"color: #ff0000\"><i>amis</i></span><i> (ŝatis), ke vi finverkis nian artikolon.</i>",
		""
	],
	"£:BASE-sxati&\"<placx.*>\"": [
		"£:BASE-sxati&\"<placx.*>\"",
		"Konfuzebla vortoparo",
		"La verbo <i>‘plaĉi’</i> (france: <i>plaire,</i> germane: <i>gefallen</i>) estas netransitiva: <i>Io plaĉas al iu.</i> Kun rekta objekto, uzu <i>‘ŝati’: Iu ŝatas ion.</i>",
		"Mi <span style=\"color: #ff0000\">plaĉas</span> naĝi en la maro. (Mi ŝatas naĝi en la maro. Aŭ alternative: <b>Al</b> <b>mi</b> plaĉas naĝi en la maro.)<br>\n<br>\nTio ne <span style=\"color: #ff0000\">ŝatis</span> (plaĉis) al lia amikino."
	],
	"£:BASE-arko": [
		"£:BASE-arko",
		"Falsa amiko / konfuzebla vortoparo",
		"Oni uzas <i>arĉon</i> por ludi violonon. La ĝenerala vorto estas <i>arko</i> (angle: <span style=\"color: #0000ff\"><i>arch</i></span>).",
		""
	],
	"£:BASE-argumento": [
		"£:BASE-argumento",
		"Falsa amiko",
		"En Esperanto, <i>‘argumento’</i> ĉiam celas kialon or fakton favora al unu opinio aŭ alia. Parola kverelo kun kontraŭulo (angle: <i>argument</i>) estas <i>‘disputo’.</i>",
		""
	],
	"£:BASE-partopreni": [
		"£:BASE-partopreni",
		"Falsa amiko",
		"En Esperanto, oni <i>atendas</i> ekz. alvenon de buso aŭ amiko (angle: <i>wait [for])</i>, dum oni <i>partoprenas</i> en inaŭguro aŭ<i> ĉeestas</i> feston (angle: <span style=\"color: #0000ff\"><i>attend</i></span><i>).</i>Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-atenti": [
		"£:BASE-atenti",
		"Konfuzebla vortoparo",
		"En Esperanto, oni <i>atentas pri</i> io (oni \"malignoras\" ĝin), sed <i>atendas</i> alvenon de buso aŭ amiko. Angla <i>‘attend to’</i> estas falsa amiko en tiu kunteksto; en Esperanto, ‘<i>atendi’</i> (angle: <i>wait [for]</i>) ne uzeblas kun tiu signifo. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-sukcesi": [
		"£:BASE-sukcesi",
		"Malĝusta vortelekto",
		"La vorto <i>‘atingi’</i> (angle: <i>reach</i>) taŭgas kaj en konkreta (loka) kaj en abstrakta kunteksto: <i>atingi urbon, atingi rezultaton.</i> Sed male al kelkaj naciaj lingvoj (germane: <i>erreichen,</i> dane: <i>nå</i>), Esperanto uzas alian vorton, <i>‘sukcesi’,</i> se la atingita afero estas infinitivo:<br>\n<br>\nMalfeliĉo kredeble <span style=\"color: #ff0000\">atingis</span> mian <span style=\"color: #0000ff\">fraton</span> sed eble mi <span style=\"color: #ff0000\">sukcesos</span> ankoraŭ lin <span style=\"color: #0000ff\">savi</span> .<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-alveni": [
		"£:BASE-alveni",
		"Malĝusta sintakso",
		"'Atingi’ prenas rektan, akuzativan objekton. Kun lokaj prepozicioj, uzu <i>‘alveni’:</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>atingi</i></span><i> (alveni) en Parizo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>atingi</i></span><i> (alveni) sur la montopinto</i>",
		""
	],
	"£:BASE-pli": [
		"£:BASE-pli",
		"Malĝusta vortelekto",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:BASE-auxskulti": [
		"£:BASE-auxskulti",
		"Konfuzebla vortoparo: precizigo",
		"En Esperanto, oni distingas inter aktiva kaj pasiva sensado. Do anstataŭ la vortoj <i>vidi</i> kaj<i> aŭdi</i> oni uzas <i>rigardi/spekti</i> kaj <i>aŭskulti,</i> se oni atente sekvas ion:<br>\n<br>\n<i>Li aŭdis tondron – Li aŭskultis radion.</i><br>\n<br>\n<i>Ŝi vidis aglon – Ŝi rigardis bildon. Ŝi spektis filmon</i><br>\n<br>\nNotu, ke oni <i>rigardas</i> ion pli-malpli konstantan/senmovan, dum oni <i>spektas</i> prezentaĵon (kun moviĝo).<br>\n<br>\nNotu ankaŭ, ke ne estas kutime fari analogan distingon por <i>‘flari’.</i> Sed se vi volas, eblas diri <i>‘flarumi’</i> por ekz. hundo, kiu (aktive) priflaras iun. Aktiva perhaŭta sentado estas <i>‘palpi’</i> (ambaŭ angle: <i>feel</i>)<i>.</i><br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-preventi": [
		"£:BASE-preventi",
		"Falsa amiko",
		"En Esperanto, oni <i>avertas</i> (angle: warn) personon pri danĝero, sen por malhelpi la danĝeron oni uzas <i>‘preventi’</i> (angle: <i>avert</i>)<i>.</i>",
		""
	],
	"£:BASE-malhelpi": [
		"£:BASE-malhelpi",
		"Malĝusta vortelekto / sintakso",
		"Oni preventas agon aŭ okazaĵon, sed male al la angla (<i>prevent</i> <i>sb. from -ing</i>) ne eblas uzi tiun verbon kun akuzativo+nefinita verbo (latine: ACI-sintakso), kie persono en akuzativo estas la logika subjekto de la nefinita verbo.<br>\n<br>\n<i>Nur gardu la hejmon de la mastro kaj</i> <span style=\"color: #ff0000\"><i>preventu</i></span><i> (malhelpu)</i> <span style=\"color: #0000ff\"><i>sxtelistojn eniri</i></span><i> nokte</i><br>\n<br>\nUzi <i>malhelpi</i> ebligas reteni la akuzativon kaj infinitivon, sed oni perdas la aspekton de preventa antaŭago (<i>malhelpi</i> povus esti samtempe). Do pli eleganta solvo – sed tro komplika por aŭtomata Lingvohelpilo-propono – estus ke-objekto:<br>\n<br>\n<i>… preventu,</i> <b><i>ke</i></b><i> ŝtelistoj enir</i><b><i>u</i></b><i> nokte</i>",
		""
	],
	"£:BASE-ekvilibrigi": [
		"£:BASE-ekvilibrigi",
		"Falsa amiko",
		"En Esperanto, <i>‘balanci’</i> signifas tien-reen movon de korpoparto aŭ objekto (simile al <i>‘svingi’)</i>, sen ekvilibriga aspekto. Kun tia, uzu <i>‘ekvilibrigi’ (buĝeton, premon, pilkon sur fingro).</i> Notu ankaŭ, ke ‘<i>balanci’</i> estas transitiva! Do:<br>\n<br>\nFinfine, ni <span style=\"color: #ff0000\">balancis</span> (ekvilibrigis) la buĝeton.<br>\n<br>\nFinfine, la buĝeto <span style=\"color: #ff0000\">balancas</span> (ekvilibras).",
		""
	],
	"£:BASE-diri&\"&<babil.*>": [
		"£:BASE-diri&\"&<babil.*>",
		"Transitiveco",
		"La verbo <i>‘babili’</i> estas netransitiva. Kun rekta objekto aŭ ‘<i>ke’,</i> uzu <i>‘diri’.</i>",
		""
	],
	"£:BASE-pokalo": [
		"£:BASE-pokalo",
		"Konfuzebla vortoparo",
		"<i>'Bokalo’</i> (angle: jar) estas ronda ujo por konservi marmeladon, mielon k.s., dum <i>‘pokalo’</i> estas trinkvazo kun piedo, ankaŭ uzata kiel sporta trofeo. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-broso&\"<brosiloj?n?>": [
		"£:BASE-broso&\"<brosiloj?n?>",
		"Troa sufikso",
		"La vorto <i>‘broso’</i> jam estas ilo, do ne havas sencon aldoni la sufikson <i>-il.</i> Ĉe la vortoparo <i>brosi – broso,</i> la verbo devenas de la substantivo, male al <i>tranĉi – tranĉilo,</i> kie, inverse, la verbo estas la bazo.",
		""
	],
	"£:BASE-buko": [
		"£:BASE-buko",
		"Falsa amiko / konfuzebla vortoparo",
		"'Buklo’ estas haro (angle: <i>lock, curl</i>), dum <i>‘buko’</i> (angle: <i>buckle</i>) estas fermilo uzata por fiksi zonon aŭ rubandon. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-certi&\"<sekur.*>\"": [
		"£:BASE-certi&\"<sekur.*>\"",
		"Samtradukaj vortoj / konfuzebla vortoparo",
		"<i>Sekureco</i> signifas foreston de aŭ protekton kontraŭ danĝero (angle: <i>safety</i>), dum <i>certeco</i> indikas altan probablecon (angle: <i>certainty</i>). En la germana kaj kaj dana lingvoj ambaŭ rilatas al la sama vorto (germane: <i>sicher,</i> dane: <i>sikker</i>), kreante riskon de konfuzo.",
		""
	],
	"£:cifereca&\"<ciferaj?n+>": [
		"£:cifereca&\"<ciferaj?n+>",
		"Konfuzebla vortoparo",
		"'Cifera’ estas uzata en esprimoj kiel <i>‘cifera horloĝo’</i> aŭ <i>‘6-cifera pasvorto’.</i> Ĉi tie vi verŝajne celas <i>‘cifereca’</i> (angle: <i>digital</i>), kiu estas la kontraŭo de <i>‘analoga’</i> kaj uzatas en la kunteksto de datenoj, komputiloj, fotiloj kaj televido.<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-dauxrigi&\"<dauxrigx.*>\"": [
		"£:BASE-dauxrigi&\"<dauxrigx.*>\"",
		"Sufikso-eraro: ig/iĝ",
		"<i>'Daŭri’</i> estas netransitiva verbo kaj prenas akuzativon nur por mezuri tempo <i>(La vojaĝo daŭros 7 horojn).</i> Tio signifas, ke ne eblas aldoni <i>-iĝ,</i> kaj ke necesas uzi <i>-ig,</i> se oni celas pluigon de agado aŭ procezo.<br>\n<br>\nLa milito <span style=\"color: #ff0000\">daŭriĝis</span> (daŭris) 4 jarojn.<br>\n<br>\n<i>Mi ne plu povas</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi) tiel.</i><br>\n<br>\n<i>Li lasis la junulon</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi).</i><br>\n<br>\nSe mankas tempa akuzativo aŭ tempa prepozicia grupo <i>(ĝis morgaŭ),</i> konsideru uzi <i>‘pludaŭri’</i> anstataŭ simpla <i>‘daŭri’:</i><br>\n<br>\n<i>Ni aŭdis, ke la a drinkado</i> <span style=\"color: #ff0000\"><i>daŭriĝis</i></span><i> (pludaŭris), la gastoj kantis ĥore.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-debeti": [
		"£:BASE-debeti",
		"Falsa amiko / konfuzebla vortoparo",
		"Oni <i>debetas</i> monsumon (al konto), sed <i>debitas</i> varon (al iu). <i>Debeto</i> estas la antonimo de <i>kredito</i>, dum <i>debito</i> signifas \"podetala vendo\" (angle: turnover, germane: Umsatz).<br>\n<br>\nAlia signifo de debito estas <i>trafluo</i>:<br>\n<br>\n<i>La naftodukto havas debiton de 9 m³/s.</i><br>\n<br>\nPro la konfuzoriskoj, ReVo rekomendas simple eviti debiti/debito.",
		""
	],
	"£:BASE-transfugxi": [
		"£:BASE-transfugxi",
		"Falsa amiko",
		"Difekti signifas <i>‘damaĝi’</i> (angle: <i>damage</i>)<i>.</i> Aparato aŭ aŭto povas esti difektita. Sed oni ne povas <i>difekti</i> de armeo aŭ al la malamiko. Por tiu senco de la angla ‘<i>defect’</i> uzu <i>‘transfugxi’.</i> Notu, ke en Esperanto <i>‘defekti’</i> tute ne ekzistas, nek kun la unua, nek kun la dua signifo.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-rekta": [
		"£:BASE-rekta",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘direkta’</i> signifas ĉiam <i>‘havanta direkton’</i> aŭ <i>‘direktanta’,</i> ekz. <i>direkta remilo/valvo, direkta komitato/konsilio.</i> Ĝi ne havas la sencon <i>‘sen kromvojo’</i> aŭ <i>‘sen kromaĵoj’</i> de la angla <i>‘direct’</i> aŭ germana <i>‘direkt’ .</i> Por tiu senco uzu ne <i>‘direkta’,</i> sed <i>‘rekta’</i> aŭ <i>‘senpera’:</i><br>\n<br>\n<i>rekta metodo, rekta objekto, rekta traduko, rekta elsendo</i><br>\n<br>\n<i>senpera kialo/kaŭzo, senpera lukro/profito</i>",
		""
	],
	"£:BASE-permesi": [
		"£:BASE-permesi",
		"Neologismo",
		"La diferenco inter <i>rajti</i> kaj <i>permesi</i> estas la perspektivo: Oni <i>rajtas</i> fari ion (mem), sed <i>permesas</i> al alia fari ion. <i>‘Rajti’</i> estas la sama kiel <i>‘havi rajton/permeson’</i> aŭ <i>‘esti permesata’.</i> La vorto <i>‘darfi’</i> estas (malofta) neologisma sinonimo de <i>‘rajti’</i>, inspirita de la germana <i>‘dürfen’.</i>",
		""
	],
	"£:BASE-ebligi&\"<permes.*>\"": [
		"£:BASE-ebligi&\"<permes.*>\"",
		"Falsa amiko",
		"Ne temas pri vera eraro, sed striktasence nur homo aŭ eble leĝo povas <i>permesi.</i> Ilo, mono, okazaĵo aŭ cirkonstanco ne permesas, sed <i>ebligas</i> (agon, procezon aŭ simile). Konsideru fari ŝanĝon.",
		"Komputilo <span style=\"color: #ff0000\">permesas</span> (ebligas) al uzanto labori pli rapide."
	],
	"£:BASE-peti&\"<demand.*>\"": [
		"£:BASE-peti&\"<demand.*>\"",
		"Falsa amiko",
		"En Esperanto, oni <i>demandas</i> demandon aŭ personon pri io, sed <i>petas</i> helpon, monon, konsilon aŭ klarigon. Uzu ‘<i>demandi’</i>, se vi povas imagi demandosignon, sed <i>‘peti’</i>, se vi povas imagi voksignon <i>(Helpu! Donu monon!).</i> La esperanta <i>demandi</i> estas kognato de la franca <i>demander,</i> sed ne de la angla <i>demand.</i><br>\n<br>\n<i>Li demandis min, ĉu la trajno jam foriris.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>demandis</i></span><i> (petis) min varti la bebon dum kelkaj horoj.</i>",
		""
	],
	"£:BASE-sxuldi&\"<dev.*>\"": [
		"£:BASE-sxuldi&\"<dev.*>\"",
		"Falsa amiko",
		"La Esperanta vorto <i>‘devi’</i> nur funkcias kiel helpverbo (kun infinitivo). Ĝi ne havas la sencon <i>‘ŝuldi’</i> (angle: <i>owe</i>). Temas pri falsa amiko el latinidaj lingvoj.",
		"Mi <span style=\"color: #ff0000\">devas</span> (ŝuldas) al vi klarigon"
	],
	"£:BASE-diversa": [
		"£:BASE-diversa",
		"Falsa amiko",
		"Se oni celas plurajn nesamajn ekzemplerojn de io, oni diras <i>diversaj (libroj, proponoj, virusoj).</i> Ne uzu <i>‘diferenca’ (</i>aŭ <i>‘diferenta’</i>)<i></i> en tiu senco (angle: <i>various</i>). Se entute, uzu <i>‘diferenca’</i> kiel sinonimon de <i>‘malsama’</i> (angle: <i>different).</i>",
		"Venis <span style=\"color: #ff0000\">diferencaj</span> (diversaj) proponoj por la tagordo.<br>\n<br>\nLa nova propono estas tute diferenca (= malsama)."
	],
	"£:BASE-dolorsuferi": [
		"£:BASE-dolorsuferi",
		"Traduka uzo-interfero",
		"En Esperanto estas nur korpopartoj, kiuj <i>doloras,</i> ne la persono, male al angla ‘<i>hurt’</i>. Kaj ne eblas uzi la vorton transitive (ankaŭ male al angla <i>‘hurt</i>’), necesas aldoni <i>-ig</i> por \"akuzative\" kaŭzi doloron en korpoparto aŭ al persono:<br>\n<br>\n<i>Mia piedo doloras. Doloras al mi la kapo.</i><br>\n<br>\n<i>La filino</i> <span style=\"color: #ff0000\"><i>doloras</i></span><i> (dolorsuferas) pro la morto de sia patro.</i><br>\n<br>\n<i>La fumnebulo</i> <span style=\"color: #ff0000\"><i>doloris</i></span><i> (dolor</i><b><i>ig</i></b><i>is) la okulojn [al la piedirantoj]</i>",
		""
	],
	"£:BASE-damaĝi": [
		"£:BASE-damaĝi",
		"Konfuzebla vortoparo",
		"<i>'Damaĝi’</i> kaj<i> ‘domaĝi’</i> sonas tre simile, sed la unua signifas <i>‘difekti’,</i> dum la dua signifas <i>‘ne voli difekti/foruzi/dolorigi’.</i> Notu ankaŭ, ke <i>domaĝe</i> estas sinonimo de <i>‘bedaŭrinde’,</i> kaj <i>‘domaĝa’</i> signifas <i>‘bedaŭriga’.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Fulmo <span style=\"color: #ff0000\">domaĝis</span> (damaĝis) la turon"
	],
	"£:BASE-vesti": [
		"£:BASE-vesti",
		"Falsa amiko",
		"En Esperanto, oni <i>dresas</i> beston (ekz. hundon, kiu alportu bastonon), sed oni <i>vestas</i> sin aŭ alian personon (per ekz. robo, jupo, ĉapelo). Trovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-trinki": [
		"£:BASE-trinki",
		"Konfuzebla vortoparo",
		"En Esperanto, oni distingas inter trinkado ĝenerale, kaj trinkado de alkoholo. Se temas pri alkoholaj trinkaĵoj en ebriigaj kvantoj, vi povas uzi <i>‘drinki’.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>drinkis</i></span><i> (trinkis) tason da lakto.</i><br>\n<br>\n<i>La studentoj</i> <span style=\"color: #ff0000\"><i>trinkis</i></span><i> (drinkis) bieron la tutan nokton, kantis, danci kaj ĝenerale amuziĝis.</i><br>\n<br>\n<i>La akvo en la fontano ne estas</i> <span style=\"color: #ff0000\"><i>drinkebla</i></span><i> (trinkebla).</i>",
		""
	],
	"£:BASE-diplomitigxi": [
		"£:BASE-diplomitigxi",
		"Transitiveco",
		"Post diplomekzameno oni ricevas <i>diplomon</i> kaj fariĝas <i>diplomito.</i> Do ne eblas diri <i>‘diplomiĝi’ –</i> tio signifus, ke vi fariĝus papero!<br>\n<br>\n<i>Post multaj malfacilaĵoj, li finfine</i> <span style=\"color: #ff0000\"><i>diplomiĝis</i></span><i> (diplomitiĝis).</i>",
		""
	],
	"£:BASE-povi&\"<ebl.*>\"": [
		"£:BASE-povi&\"<ebl.*>\"",
		"Konfuzebla vortoparo",
		"La diferenco inter ‘<i>povi’</i> kaj ‘<i>ebli’</i> estas la rolo de la akompananta infinitivo. <i>‘Povi’</i> estas helpverbo kun infinitiva komplemento, dum eventuala infinitivo ĉe <i>‘ebli’</i> estas subjekto. Ne uzu <i>‘ebli’</i> kiel helpverbon. Do ne diru: <span style=\"color: #0000ff\"><i>Oni</i></span><i> ne</i><i></i> <span style=\"color: #ff0000\"><i>eblas</i></span><i></i> <span style=\"color: #ff0000\"><i>fari</i></span><i> tion.</i> Sed <i>‘fari tion’</i> povas esti subjekto de <i>‘ebli’,</i> anstataŭ alia subjekto: <span style=\"color: #0000ff\"><i>Fari tion</i></span><i> ne eblas.</i> <i>Ne eblas</i> <span style=\"color: #0000ff\"><i>fari tion</i></span><i>.</i><br>\n<br>\n<i>Mi ne povas helpi vin.</i><br>\n<br>\n<i>Ne eblas trovi tiun varon pli malmultekoste.</i><br>\n<br>\n<i>Sukceso ne eblos sen bona preparo.</i>",
		"Dum la UK oni ne <span style=\"color: #ff0000\">eblos</span> (povos) loĝi en la kongresejo"
	],
	"£:BASE-efika&\"<efektivaj?n?>\"": [
		"£:BASE-efika&\"<efektivaj?n?>\"",
		"Konfuzebla vortoparo",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>).<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-sama&\"<egalaj?n?>\"": [
		"£:BASE-sama&\"<egalaj?n?>\"",
		"Konfuzebla vortoparo",
		"<i>'Sama’</i> signifas <i>‘identa’,</i> dum <i>‘egala’</i> signifas <i>‘100% simila’.</i> La unua identigas, la dua komparas. Do oni povas diri <i>‘</i><b><i>la</i></b><i> sama …’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>la egala …</i></span><i>’,</i> kaj <i>‘egala</i> <b><i>al</i></b><i> …’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>sama al …</i></span><i>’.</i> Notu, ke en komparo la komparitoj povas egali (laŭ iu eco), sed ke la eco-mezuro do samas:<br>\n<br>\n<i>Ili estas</i> <b><i>egalaj</i></b><i> laŭ riĉeco, A estas</i> <b><i>egala</i></b><i> al B laŭ riĉeco</i><br>\n<br>\n<i>Sed: Ili estas</i> <b><i>same</i></b><i> riĉaj, li estas</i> <b><i>same</i></b><i> riĉa kiel …, la riĉeco estas la</i> <b><i>sama</i></b><br>\n<br>\n<i>kun egalaj paŝoj</i><br>\n<br>\n<i>tute egale, ĉu li estas blanka, nigra aŭ bruna</i><br>\n<br>\n<i>ili havas (la)</i> <span style=\"color: #ff0000\"><i>egalan</i></span><i> (saman) nomon.</i><br>\n<br>\n<i>Ili estas</i> <span style=\"color: #ff0000\"><i>egale</i></span><i> (same) grandaj.</i><br>\n<br>\n<i>La senco restas ĉiam</i> <span style=\"color: #ff0000\"><i>egala</i></span><i> (sama).</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:jam=de&\"<ekde>\"": [
		"£:jam=de&\"<ekde>\"",
		"Konfuzebla vortoparo",
		"La prepozicio <i>‘ekde’</i> rilatas al tempopunkto <i>(ekde hodiaŭ, ekde Kristnasko, ekde la 7-a de januaro).</i> Kun tempoperiodoj, uzu <i>‘jam de’:</i><br>\n<br>\n<i>Li laboras en la firmao</i> <span style=\"color: #ff0000\"><i>ekde</i></span><i> (jam de) 3 jaroj.</i><br>\n<br>\n<i>Ni konas unu la alian</i> <span style=\"color: #ff0000\"><i>ekde</i></span><i> (jam de) longa tempo.</i>",
		""
	],
	"£:BASE-ekspozicio&\"<ekshibicioj?n?>\"": [
		"£:BASE-ekspozicio&\"<ekshibicioj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto <i>‘ekshibicio’</i> signifas <i>‘sinmontremo’,</i> ofte en seksa/erotika kunteksto. Ne konfuzu tion kun <i>‘ekspozicio’</i> (angle: exhibition), kiu estas publika evento pri iu temo, ekz. <i>komerca/arta/sporta ekspozicio.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"La urbo organizis grandas <span style=\"color: #ff0000\">ekshibicion</span> (ekspozicion) pri moderne arto."
	],
	"£:BASE-fakulo": [
		"£:BASE-fakulo",
		"Falsa amiko",
		"Laŭ PIV, la neologismoj <i>‘eksperto’</i> kaj <i>‘eksperta’</i> (angle: <i>expert)</i> estas evitindaj. Uzu <i>‘fakulo/spertulo’</i> anstataŭ la unua, kaj <i>‘spertula/fakula’</i> anstataŭ la dua.",
		""
	],
	"£:BASE-teamo": [
		"£:BASE-teamo",
		"Falsa amiko",
		"Tio povas esti franca falsa amiko. La vorto <i>‘ekvipo’</i> ne ekzistas en Esperanto, kaj <i>‘ekipo’</i> temas pri <i>ekipado</i> kaj <i>ekipaĵo,</i> kun la signivo de <i>‘provizo’</i> au <i>‘ilaro’.</i> Por grupo de homoj, uzu <i>‘teamo’,</i> aŭ <i>‘skipo’,</i> precipe, se temas pri tempe alternantaj grupoj de laboristoj.",
		""
	],
	"£:BASE-uzi&\"<ekzerc.*>\"": [
		"£:BASE-uzi&\"<ekzerc.*>\"",
		"Falsa amiko",
		"En Esperanto, oni <i>ekzercas</i> sin mem aŭ alian personon pri iu kapablo. Ankaŭ eblas ekzerci korpopartojn <i>(fingrojn, orelon)</i> lertigante ilin.<br>\n<br>\n<i>Li ekzercis la filon pri/al matematiko. Li ekzercis siajn orelojn en la angla.</i><br>\n<br>\nMultaj esperantistoj ankaŭ uzas la kapablon mem, aŭ eĉ ilon ligitan al ĝi, kiel objekton de <i>ekzerci,</i> sed laŭ <a target=\"_blank\" href=\"https://vortaro.net/#ekzerci_d\">PIV</a> tiu uzo estas neĝusta:<br>\n<br>\n<i>Li ekzercis kanti / la anglan / violonon (Li ekzerciĝis pri/en kantado / la angla / violono)</i><br>\n<br>\nNe uzu <i>ekzerci</i> kun la signifo de <i>uzi</i> (angle: <i>exercise):</i><br>\n<br>\n<i>Ŝi</i> <span style=\"color: #ff0000\"><i>ekzercis</i></span><i> (uzis) sian influon/aŭtoritaton en la sociaj retoj.</i><br>\n<br>\n<i>Malmultaj civitanoj</i> <span style=\"color: #ff0000\"><i>ekzercis</i></span><i> (uzis) sian rajton voĉdoni.</i>",
		""
	],
	"£:BASE-ekzisti&\"<est.*>r": [
		"£:BASE-ekzisti&\"<est.*>r",
		"Konfuzebla vortoparo",
		"La vorto <i>esti</i> havas multajn uzojn en Esperanto. Sed ĝi ĉiam bezonas komplementon alian ol substantivo. Povas temi pri predikativo, adverbialo aŭ helpverba komplemento:<br>\n<br>\n<i>predikativo: li estas malsana / franco</i><br>\n<br>\nAdverbialo: <i>ŝi estas heime, estas domaĝe, ke …</i><br>\n<br>\n<i>mi estas sen aŭto / el Turkio / por rekta demokratio</i><br>\n<br>\n<i>la libro estas de William Auld)</i><br>\n<br>\nPasivo: <i>li ne estis invitita</i><br>\n<br>\nNe eblas uzi <i>‘esti’</i> sen komplemento kun la signifo de <i>‘ekzisti’.</i>",
		"Depende de via tempo-disponeblo, <span style=\"color: #ff0000\">estas</span> (ekzistas) multaj ebloj :"
	],
	"£:BASE-alsxuti": [
		"£:BASE-alsxuti",
		"Fakvorto",
		"En komputila kunteksto, uzu <i>‘alŝuti’</i> kaj <i>‘elŝuti’</i> por metado aŭ prenado dosieroj, dokumentoj, bildoj ktp. al aŭ de servilo aŭ retejo.<br>\n<br>\nNotu, ke <i>‘ŝuti’</i> havas pli larĝan signifon, do kompreneble vi povas ŝuti karbon, sablon aŭ rizon en ujon, aŭ de",
		""
	],
	"£:BASE-emo&\"<envioj?n?>\"": [
		"£:BASE-emo&\"<envioj?n?>\"",
		"Falsa amiko",
		"Tio povas esti franca falsa amiko. En Esperanto, <i>‘envii’</i> signifas deziri ton, kion alia posedas, kaj (negative) emocii pri tion. Oni do envias ion al iu, aŭ iun pro io. Sed ne eblas uzi la vorton kun la senco de <i>‘emi’,</i> kun infinitivo.",
		"Mi <span style=\"color: #ff0000\">envias</span> (emas) iri al la plaĝo"
	],
	"£:BASE-atendi&\"<esper.*>\"": [
		"£:BASE-atendi&\"<esper.*>\"",
		"Falsa amiko",
		"Tio estas latinida falsa amiko. En Esperanto, oni <i>esperas</i>, ke io bona okazu (angle: <i>hope</i>), dum oni <i>atendas</i> ekz. buson aŭ iun probablan okazaĵon (angle: <i>expect</i>). Ankaŭ kun tempomezuro oni uzas <i>atendi</i> (angle: <i>wait</i>)<i>:</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>esperis</i></span><i> (atendis) dum 2 horoj / ĝis la kvara posttagmeze</i>",
		""
	],
	"£:BASE-farti": [
		"£:BASE-farti",
		"Malĝusta vortelekto",
		"Oni ne diras <i>‘kiel vi estas?’</i> (angle: <i>how are you?</i>), sed <i>‘kiel vi fartas?’</i> Ankaŭ en la respondo, oni <i>fartas (pli) bone,</i> k.s.",
		""
	],
	"£:BASE-fakulto": [
		"£:BASE-fakulto",
		"Falsa amiko / konfuzebla vortoparo",
		"Temas pri angla falsa amiko <i>(faculty)</i>. En Esperanto, <i>‘fakultato’</i> estas universitata sekcio (ekz. medicino, juro), dum <i>‘fakulto’</i> estas sensa aŭ mensa kapablo aŭ lerto.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<i>Li laboras en la filozofia</i> <span style=\"color: #ff0000\"><i>fakulto</i></span><i> (fakultato).</i><br>\n<br>\n<i>Necesas stimuli la intelektajn</i> <span style=\"color: #ff0000\"><i>fakultatojn</i></span><i> (fakultojn) de infano.</i>"
	],
	"£:BASE-falti": [
		"£:BASE-falti",
		"Konfuzebla vortoparo",
		"Oni faldas faldeblajn objektojn, ekz. paperon, seĝon, manojn aŭ gambojn. Faltoj, aliflanke, rilatas al surfacaj trajtoj, tipe haŭtaj faltoj en vizaĝo kaj faltitaj brovoj. Sed ankaŭ tereno aŭ, je alia skalo, montoj povas havi haltojn.<br>\n<br>\nLa paro <i>faldo/falto</i> estas tipa ekzemplo pri kiel Esperanto uzas malsamajn, sed similajn konsonantojn aŭ vokalojn por eviti eblan ambiguecon en la etimologia fontovorto (‘ĉi tie germana ‘<i>Falte’/’falten’)</i>",
		"La vino bele <span style=\"color: #ff0000\">faltis</span> (faldis) la buŝtukojn.<br>\n<br>\nŜia vizaĵo estis plena je ridetaj <span style=\"color: #ff0000\">faldoj</span> (faltoj)."
	],
	"£:BASE-bieno&\"<farmoj?n?>\"": [
		"£:BASE-bieno&\"<farmoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, ‘<i>farmo</i>’ ne signifas ‘<i>bieno</i>’ (\"terkultivistejo\", angle: <i>farm</i>), sed la agon lupreni teron, bienon aŭ alian ejon portempe kaj komercocele (‘<i>farmi</i>’, angle: <i>lease</i>):<br>\n<br>\n<i>Ne eblas posedi aux farmi pecon da marfundo .</i>",
		"Oni instalis en Afriko gigantajn industriajn <span style=\"color: #ff0000\">farmojn</span> (bienojn)."
	],
	"£:BASE-fonduso": [
		"£:BASE-fonduso",
		"Konfuzebla vortogrupo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-trupo&\"<fortoj?n?>\"": [
		"£:BASE-trupo&\"<fortoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, ‘forto’ ĉiam estas eco (angle: strength, force). Povas temi pri korpa aŭ fizika forto, intenseco aŭ fortikeco. Ne eblas uzi la vorton por signifi soldatan trupon aŭ armeon (angle: military forces). Daŭre kreskis la forto de la uragano.Ne sufiĉis liaj fortoj por levi la ŝtonon.En 1941 la Finnlandajtrupoj partoprenis la siegxon de Leningrado.Trovu ekzemplojn en ReVo aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"La japanaj <span style=\"color: #ff0000\">fortoj</span> (trupoj) defendis la insulon dum monatoj."
	],
	"£:BASE-frunto": [
		"£:BASE-frunto",
		"Konfuzebla vortoparo",
		"<i>'Frunto’</i> havas nur anatomian signifon (angle: <i>forehead</i>). <i>‘Fronto’,</i> aliflanke, havas diversajn signifojn – milita fronto, antaŭa parto de konstruaĵo aŭ partio/organizaĵo.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<i>Post la falo, li sangis ĉe la</i> <span style=\"color: #ff0000\"><i>fronto</i></span><i> (frunto.)</i><br>\n<br>\n<i>Necesas sendi pli da tankoj al la orienta</i> <span style=\"color: #ff0000\"><i>frunto</i></span><i> (fronto).</i>"
	],
	"£:BASE-piedo": [
		"£:BASE-piedo",
		"Falsa amiko",
		"En Esperanto, la vorto <i>‘futo’</i> nur funkcias kiel mezurunuo (ĉ. 33 cm). Por la korpoparto, uzu <i>‘piedo’.</i><br>\n<br>\nLa neologismo <i>futbalo</i> (piedpilkado) estas kurioza kombino el du falsaj amikoj (<i>futo</i> kaj <i>balo</i>), kiuj kune – kaj nur kune! - rehavas siajn malfalsajn signifojn de ‘piedo’ kaj ‘pilko’. Sola, ‘balo’ signifas dancfeston.",
		"Provu stari sur unu <span style=\"color: #ff0000\">futo</span> (piedo) kaj fermu vian okulojn!"
	],
	"£:BASE-fugxi&\"<fusx.*>\"": [
		"£:BASE-fugxi&\"<fusx.*>\"",
		"Similsonaj vortoj",
		"Se via gepatra lingvo ne klare distingas inter voĉaj kaj senvoĉaj konsonantoj, vi eble riskas konfuzi la vortojn <i>‘fugxi’</i> (angle: <i>flee</i>) kaj <i>‘fuŝi</i>’ (angle: <i>mess up</i>). Notu, ke nur la dua permesas objekton.",
		"La jezidoj <span style=\"color: #ff0000\">fuŝis</span> (fuĝis) al la monto."
	],
	"£:BASE-gxoji&\"<gaj.*>\"": [
		"£:BASE-gxoji&\"<gaj.*>\"",
		"Konfuzebla vortoparo",
		"<i>'Ĝoji’</i> kaj <i>‘gaji’</i> havas la saman bazan signifon (esti maltrista), sed <i>‘ĝoji’</i> permesas <i>ke-</i>propozicion aŭ infinitivon kiel komplementon.<br>\n<br>\nNotu, ke oni ĝojas <i>pri</i> aŭ <i>pro</i> io, kaj ke <i>‘ĝoji’</i> ne permesas substantivan, akuzativan komplementon por montri la kialon de la ĝojo. <i>Ĝojigi’</i> signifas ‘kaŭzi ĝojon al iu’.<br>\n<br>\nAlia simila vorto estas transitiva <i>‘gui’,</i> sed ĝia signifo estas iom alia ol tiu de <i>‘ĝoji pri’.</i> Oni ĝuas ekz. bonan manĝaĵon aŭ freŝan aeron, en pli rekta, sensa maniero ol kun <i>‘ĝoji pri’.</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>gajas</i></span><i> (ĝojas), ke vi povas veni.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>gajas</i></span><i> (ĝojas) vi revidi.</i>"
	],
	"£:BASE-gajni&\"<venk.*>\"": [
		"£:BASE-gajni&\"<venk.*>\"",
		"Konfuzebla vortoparo",
		"Oni <i>venkas</i> konkuranton (en konkurso) aŭ malamikon (en milito), sed <i>gajnas</i> konkurson (kontraŭ konkuranto) aŭ militon (kontraŭ malamiko).<br>\n<br>\n<i>Usono</i> <span style=\"color: #ff0000\"><i>venkis</i></span><i> (gajnis) la militon kaj perdis la pacon.</i><br>\n<br>\n<i>Notu, ke ‘gajni’</i> krome havas duan signifon de ‘akiri ion bonan’: <i>gajni monon, spertojn aŭ ies favoron.</i>",
		""
	],
	"£:BASE-gvardio": [
		"£:BASE-gvardio",
		"Konfuzebla vortoparo",
		"En moderna Esperanto, <i>‘gardo’</i> estas simple la ago gardi (protekti per ĉeesto). Laŭ rekomendo de <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>, por la arkaika signifo de <i>‘gardantaro’,</i> prefere uzu <i>‘gvardio’.</i>",
		"La marborda <span style=\"color: #ff0000\">gardo</span> (gvardio) kaptis la kontrabandistojn."
	],
	"£:BASE-gaso&\"<gazoj?n?>\"": [
		"£:BASE-gaso&\"<gazoj?n?>\"",
		"Konfuzebla vortoparo",
		"<i>'Gazo’</i> estas maldika travidebla ŝtofo, kiun oni uzas ekz. por vualo aŭ vestoj, aŭ sur vundo. La similsona vorto <i>‘gaso’</i> celas substancojn kiel <i>aero, hidrogeno</i> kaj <i>oksigeno,</i> aŭ – pli specife – <i>brulgason (metanon).</i>",
		"Rusa <span style=\"color: #ff0000\">gazo</span> (gaso) – aŭ la manko de ĝi - fariĝis grava faktoro en la eŭropa militdiskuto."
	],
	"£:BASE-vitra&\"<glasaj?n?>\"": [
		"£:BASE-vitra&\"<glasaj?n?>\"",
		"Falsa amiko",
		"'Glaso’ estas trinkujo, por la travidebla materialo uzu <i>‘vitro’.</i> Temas pri falsa amiko por pluraj gepatraj lingvoj.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Sur la tablo estis <span style=\"color: #ff0000\">glasaj</span> (vitraj) kandelingoj."
	],
	"£:BASE-kradrosti": [
		"£:BASE-kradrosti",
		"Falsa amiko",
		"<i>'Grilo’</i> estas insekto (angle: <i>cricket,</i> germane: <i>Grille</i>), sed la angla-germana falsamika vortparo <i>‘*grilo/*grili’</i> ne ekzistas en Esperanto. Uzu <i>‘kradrosti’</i> kaj <i>‘kradrostilo’</i> anstataŭ.",
		"Sur la <span style=\"color: #ff0000\">grilo</span> (kradrostilo) estis diversaj specoj de kolbaso kaj fiŝo."
	],
	"£:BASE-ŝtatestro&\"<guvernisto>\"": [
		"£:BASE-ŝtatestro&\"<guvernisto>\"",
		"Falsa amiko",
		"En moderna Esperanto, <i>‘guverni’</i> signifas \"profesie endome eduki infanon\", (plejparte historia) tasko tipe de <i>‘guvernistino’</i> en socie altrangaj familioj (angle: <i>governess</i>). Ne uzu la radikon kun la arkaika senco de <i>‘regi’.</i> Diru <i>‘ŝtatestro’,</i> ne <i>‘*</i><i>guvernisto</i><i>’,</i> kaj <i>‘registaro’,</i> ne <i>‘*guverno’.</i>",
		"Hispanio havas novan <span style=\"color: #ff0000\">guvernon</span> (registaron)."
	],
	"£:BASE-gemo&\"<gxemoj?n?>\"": [
		"£:BASE-gemo&\"<gxemoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"<i>'Ĝemo’</i> estas dolorspiro (angle: <i>moan).</i> Ne konfuzu ĝin kun <i>‘gemo’,</i> kiu signifas ‘juvelŝtono’ (angle: <i>gem</i>). Estas la angla prononco, ne la skribo, kiu kreas la falsan amikon.",
		"La <span style=\"color: #ff0000\">ĝemoj</span> (gemoj) en lia krono estis de netaksebla valoro."
	],
	"£:BASE-milda": [
		"£:BASE-milda",
		"Falsa amiko / konfuzebla vortoparo",
		"Oni mezuras ĝentilecon sur socia skalo, <i>‘ĝentila’</i> signifas ‘bonmaniere afabla’ (angle: <i>polite</i>). Ne konfuzu tion kun <i>‘milda’</i> (angle: <i>gentle</i>), kiu signifas ‘malakra/malsevera’.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<span style=\"color: #ff0000\">Ĝentila</span> (milda) vento movis la foliojn."
	],
	"£:BASE-justa&\"<gxustaj?n?>\"": [
		"£:BASE-justa&\"<gxustaj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"Forigu la finaĵon -n! Nur lokaj e-adverboj permesas akuzativon, kaj nur por indiki direkton, kio ne ŝajnas esti la kazo ĉi-tie.",
		"Tiu imposto estas socie <span style=\"color: #ff0000\">malĝusta</span> (maljusta)."
	],
	"£:BASE-cxesi&\"<halt.*>r": [
		"£:BASE-cxesi&\"<halt.*>r",
		"Konfuzebla vortoparo",
		"Kaj <i>‘ĉesi’</i> kaj <i>‘halti’</i> signifas maldaŭrigon (angle: <i>stop</i>), kaj ambaŭ uzeblas netransitive, sed nur <i>‘ĉesi’</i> permesas infinitivan komplementon.<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>haltis</i></span><i> (ĉesis) labori.</i><br>\n<br>\n<i>Finfine,</i> <span style=\"color: #ff0000\"><i>haltis</i></span><i> (ĉesis) pluvi.</i><br>\n<br>\n<i>'Halti’</i> signifas ‘ĉesi moviĝi’: <i>La buso / promenanto haltis</i><br>\n<br>\nKun proceza aŭ okazaĵa subjekto, <i>‘ĉesi’</i> signifas ‘finiĝi’: <i>La milito / kantado ĉesis.</i><br>\n<br>\nKun homa subjekto kaj infinitiva komplemento, <i>‘ĉesi’</i> signifas ‘fini (propran) agadon’: <i>Li ĉesis labori / helpi / tajpi</i><br>\n<br>\nNotu, ke por akuzativa komplemento, necesas aldoni <i>-ig.</i> Oni <i>ĉesigas</i> procezon aŭ la agadon de alia persono.",
		""
	],
	"£:BASE-agxi": [
		"£:BASE-agxi",
		"Falsa amiko",
		"Striktasense, oni ne havas jarojn, sed aĝon. Kvankam ne estas malpermesite diri <i>‘Mi havas 25 jarojn’,</i> konsideru la jenajn alternativojn:<br>\n<br>\n<i>Mi aĝas 25 jarojn.</i> (Aŭ kun elipso: <i>Mi aĝas 25.)</i><br>\n<br>\n<i>Mi estas 25 jarojn aĝa.</i><br>\n<br>\n<i>Mi estas 25-jara.</i> (Aŭ kun elipso: <i>Mi estas 25.</i>)",
		""
	],
	"£:BASE-senti&\"<hav.*>\"": [
		"£:BASE-senti&\"<hav.*>\"",
		"Falsa amiko",
		"En Esperanto, oni ne <i>havas,</i> sed <i>sentas</i> dormemon, malsaton, soifon aŭ timon.<br>\n<br>\n<i>Post la grimpado, li</i> <span style=\"color: #ff0000\"><i>havis</i></span><i> (sentis) grandan soifon.</i><br>\n<br>\nAlternative, vi ofte povas uzi adjektivon:<br>\n<br>\n<i>Mi estas dormema / malsata / soifa.</i>",
		""
	],
	"£:BASE-preni&\"<hazard.*>\"": [
		"£:BASE-preni&\"<hazard.*>\"",
		"Malĝusta vortelekto",
		"Oni ne <i>hazardas,</i> sed <i>prenas</i> riskon. Krome <i>‘hazardi’</i> estas netransitiva, kun la signifo ‘okazi hazarde’. Eĉ kun transitiviga <i>-ig,</i> oni ne <i>hazardigas</i> riskon, sed studon, eksperimenton aŭ la ordon en listo.",
		"Li <span style=\"color: #ff0000\">hazardis</span> (prenis) grandan riskon."
	],
	"£:hejme&\"<hejmo>\"": [
		"£:hejme&\"<hejmo>\"",
		"Malĝusta sintakso",
		"Anstataŭ <i>‘en hejmo’</i> aŭ <i>‘al hejmo’,</i> uzu la adverbojn <i>‘hejme’</i> aŭ <i>‘hejmen’.</i> Alternative vi povas almeti posedan pronomon:<br>\n<br>\n<i>Li iris</i> <span style=\"color: #ff0000\"><i>al hejmo</i></span><i>.</i><i> → Li iris hejmen. / Li iris al sia hejmo.</i>",
		""
	],
	"£:BASE-herbejo&\"<herbon?>\"": [
		"£:BASE-herbejo&\"<herbon?>\"",
		"Malĝusta vortelekto",
		"Necesas distingi inter la planto-vorto ‘<i>herbo’</i> kaj la loko-vorto <i>‘herbejo’.</i> Ne eblas sidi aŭ kuŝiĝi en herbo.",
		"La infanoj ludis sur la <span style=\"color: #ff0000\">herbo</span> (herbejo)."
	],
	"£:BASE-humanisma": [
		"£:BASE-humanisma",
		"Konfuzebla vortoparo",
		"La vorto <i>‘humana’</i> signifas ‘homama’, dum <i>‘humanismo’</i> estas homkleriga doktrino kun la helenlatina civilizo kiel idealo. Do diru <i>‘humana traktado / celo / maniero,</i> sed <i>‘humanisma eduko / fakultato / studo’.</i>",
		"Li studis en la <span style=\"color: #ff0000\">humana</span> (humanisma) fakultato"
	],
	"£:BASE-humuro": [
		"£:BASE-humuro",
		"Konfuzebla vortoparo",
		"'Humoro’ estas (bona/malbona) animstato, dum <i>‘humuro’</i> temas pri ŝercemo kaj rid(ig)o.<br>\n<br>\nNotu, ke nek unu nek alia rilatas al korpolikvoj:<br>\n<br>\n<span style=\"color: #ff0000\"><i>humora</i></span><i> (korpolikva) medicino</i>",
		"Li estis en festema <span style=\"color: #ff0000\">humuro</span> (humoro).<br>\n<br>\nLa libro estis plena de subtila <span style=\"color: #ff0000\">humoro</span> (humuro)."
	],
	"£:BASE-impliki": [
		"£:BASE-impliki",
		"Konfuzebla vortoparo",
		"Oni <i>implicas</i> fakton aŭ circonstancon (angle: <i>imply</i>), sed <i>implikas</i> personon aŭ aĵon. <i>‘Implici’</i> signifas ‘supozigi’ aŭ ‘logike sekviki’, <i>‘impliki’</i> signifas ‘ĝene entordigi/enplektigi’ (angle: <i>entangle</i>):<br>\n<br>\n<i>Ĉu vi volas implici, ke UEA estas sektisma?</i><br>\n<br>\n<i>Li sin implikis per siaj agoj.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Lia silento <span style=\"color: #ff0000\">implikas</span> (implicas) konsenton.<br>\n<br>\nLi estis <span style=\"color: #ff0000\">implicita</span> (implikita) en la krimon."
	],
	"£:BASE-imposto": [
		"£:BASE-imposto",
		"Konfuzebla vortoparo",
		"'Impoŝto’ estas bazŝtono sub volbo aŭ arĉo – malofte uzata vorto. Plej verŝajne vi celas la vorton <i>‘imposto’,</i> kiu signifas ‘deviga civitana pago al la ŝato\".",
		"La registaro denove altigis la <span style=\"color: #ff0000\">impoŝtojn</span> (impostojn)."
	],
	"£:BASE-trudi&\"<impoz.*>\"": [
		"£:BASE-trudi&\"<impoz.*>\"",
		"Neuzata neologismo",
		"Ne ekzistas kognato (parencvorto) de la angla ‘<i>impose’</i> en Esperanto. Uzu <i>‘trudi’.</i>",
		"La okcidento <span style=\"color: #ff0000\">impozis</span> (trudis) sankciojn."
	],
	"£:BASE-realigi&\"<implement.*>\"": [
		"£:BASE-realigi&\"<implement.*>\"",
		"Neuzata neologismo",
		"Ne ekzistas kognato (parencvorto) de la angla <i>‘implementi’</i> en Esperanto. Uzu <i>‘realigi</i>’.",
		"Ili ankaŭ laboris por <span style=\"color: #ff0000\">implementi</span> (realigi) protekton de Antarktio de ekspluatado per minado ."
	],
	"£:BASE-impona&\"<impozantaj?n?>\"": [
		"£:BASE-impona&\"<impozantaj?n?>\"",
		"Alilingvismo",
		"La vorto <i>‘impozanta’</i>, kvankam etimologie rekonebla por multaj eŭropanoj, ne estas la ĝusta formo en Esperanto. Devas esti <i>‘impona’.</i>",
		""
	],
	"£:BASE-imponi&\"<impres.*>\"": [
		"£:BASE-imponi&\"<impres.*>\"",
		"Falsa amiko",
		"<i>'Impresi’</i> signifas ‘havi efekton al’, dum <i>‘imponi’</i> signifas ‘kaŭzi respekton/admiron’. La du vortoj estas similaj kaj havas la saman anglan tradukon (<i>impress</i>), sed dum <i>‘imponi’</i> ĉiam implicas pozitivan senton, <i>‘impresi’</i> estas pli ĝenerala – eblas impresi agrable aŭ malagrable, kaj io povas impres kiel plej stranga aŭ plej genia. Sed ĝuste pro tio, sen adverbo aŭ kiel-komplemento, la celita senco verŝajne estas <i>‘imponi’.</i>",
		"La <span style=\"color: #ff0000\">impresitaj</span> (imponitaj) spektantoj aplaŭdis."
	],
	"£:BASE-inkludita&\"<inklude>\"": [
		"£:BASE-inkludita&\"<inklude>\"",
		"Malĝusta vortelekto",
		"La vorto <i>‘inkludi’</i> ne aperas en PIV, sed jes en ReVo, kaj akcepteblas kiel internaciismo, kovranta la signifojn de kaj <i>‘inkluzivi’</i> (aro: enhavi ion) kaj <i>‘inkluzivigi’</i> (persono: enhavigi ion en aron).<br>\n<br>\nTamen evitu uzi ĝin kiel adverbon (<i>‘inklude’),</i> en la senco de <i>‘interalie’</i> aŭ anstataŭ la adverbo <i>‘inkluzive’</i> (kun akuzativo aŭ ‘de’-komplemento).<br>\n<br>\n<i>Estis konstruitaj diversaj militaj fortikaĵoj,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (interalie) en West Point.</i><br>\n<br>\n<i>La centro-maldekstraj partioj ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) de Sinn Féin , siaflanke ne disponis pri suficxe da elektitoj por teni la regadon de la lando .</i><br>\n<br>\n<i>Suzanne kaj instruis kaj prizorgis la kursanojn ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) la manĝigon .</i><br>\n<br>\nAnkaŭ ne eblas uzi <i>‘inklude’</i> kiel predikativan komplenton de <i>‘esti’ –</i> uzu participon anstataŭ:<br>\n<br>\n<i>Ankaŭ</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluditaj) en kelkaj ŝafaj dietoj estas mineraloj , cxu el miksaĵo aŭ el salŝtono .</i>",
		""
	],
	"£:BASE-okazo&\"<instancoj?n?>": [
		"£:BASE-okazo&\"<instancoj?n?>",
		"Falsa amiko",
		"En Esperanto, <i>‘instanco’</i> estas juĝa/jura aŭtoritato (angle: <i>court, authority</i>) aŭ foje, evitinde, institucio en pli ĝenerala senco. Ne eblas uzi la vorton kun la signifo de ‘unuopa apero/okazo/kopio’ (angle: <i>instance</i>).",
		"<i>La polico esploras tri novajn</i> <span style=\"color: #ff0000\"><i>instancojn</i></span><i> (okazojn) de pafilouzo.</i><br>\n<br>\n<i>Fermu ĉiujn</i> <span style=\"color: #ff0000\"><i>instancojn</i></span><i> (okazojn) de la programo!</i>"
	],
	"£:BASE-ofendi&\"<insult.*>\"": [
		"£:BASE-ofendi&\"<insult.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"'Insulti’ signifas ‘ofende, fie kaj atakeme <b>paroli</b> al iu. Do nur personoj, gazetoj, radistacio ktp. povas insulti. <i>‘Ofendi’</i> estas pli ĝenerala, ankaŭ ago aŭ ideo povas ofendi. Krome ankaŭ eblas ofendi ne nur personon, sed ankaŭ regulon aŭ principon, en la senco de ‘malobei’.",
		"<i>La ebriulo laŭte kaj akravoĉe</i> <span style=\"color: #ff0000\"><i>ofendis</i></span><i> (insultis) la ĉeestantojn.</i><br>\n<br>\n<i>Lia silento</i> <span style=\"color: #ff0000\"><i>insultis</i></span><i> (ofendis) min.</i>"
	],
	"£:BASE-entrudigxi&\"<interfer.*>\"": [
		"£:BASE-entrudigxi&\"<interfer.*>\"",
		"Falsa amiko",
		"'Interfero’ estas fizika fenomeno, onda interkruciĝo. En figura uzo, ĝi ankaŭ povas signifi interinfluon ĝenerale. Sed <i>‘interferi’</i> ne havas la signifon de ‘entrudigxi/enmiksigxi en’ (angla: <i>interfere with</i>)<i>’.</i>",
		"Eksterlanda registaro <span style=\"color: #ff0000\">interferis</span> (entrudiĝis) en la elekto.<br>\n<br>\nLa informadika vermo Stuxnet estis destinita <span style=\"color: #ff0000\">interferi kun</span> la funkciado de la centrifugoj. (malhelpi la fukciadon ...)"
	],
	"£:BASE-interesigi": [
		"£:BASE-interesigi",
		"Transitiveco",
		"La verbo <i>‘interesi’</i> estas transitiva, do oni diras <i>‘tio interesas min’</i> aŭ <i>‘mi interesiĝas pri tio.’</i> Almeti transitivigan <i>‘-ig’</i> nur havas sencon, se unu persono interesigas duan personon pri io tria. Notu la ne tute logikan lingvouzon en tiu kazo, ĉar ja vere devus esti <i>‘Li interesiĝigis ŝin pri teatro’,</i> ĉar la akuzativa objekto (ŝi) ja ‘interesiĝas’ (pri io), kaj ne interesas (iun), dum estas la teatro, kiu ‘interesas’ (ŝin).<i></i><br>\n<br>\nKiel la verbo <i>‘interesi’</i>, ankaŭ la adjektivo <i>‘interesa’</i> jam estas transitivia (<i>interesa al/por iu),</i> kaj ne necesas krei participon <i>‘interesanta’</i> por havi komplementon <i>(interesanta iun).</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>interesas</i></span><i> (interesiĝas) pri teatro.</i><br>\n<br>\n<i>Politiko ne</i> <span style=\"color: #ff0000\"><i>interesigas</i></span><i> (interesas) min.</i>"
	],
	"£lando-ano": [
		"£lando-ano",
		"Konfuzo de landonomo kaj etnonomo",
		"En Esperanto, oni aŭ uzas sufiksojn por formi landonomojn el etnonomoj <i>(-io, ujo, -lando, -istano)</i> aŭ por formi etnonomon el landonomo <i>(-an),</i> depende de ĉu la radiko estas la etno aŭ la lando.<br>\n<br>\n<i>dano’ → ‘Danio’, ‘Danujo’,</i><br>\n<br>\n<i>sviso → ‘Svislando’</i><br>\n<br>\n<i>taĝiko → ‘Taĝikistano’</i><br>\n<br>\n<i>Kanado → kanadano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>kanadoj</i> </span>aŭ <i>*</i><span style=\"color: #ff0000\"><i>Kanadio/Kanadujo</i></span>)<br>\n<br>\n<i>Indonezio → indoneziano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>indonezoj</i></span>)<br>\n<br>\nLa ĝenerala regulo estas, ke la etno estas la radiko por <b>eŭropaj landoj</b> inkl. de Turkio (kun <i>-io, -ujo, -lando</i> por la lando) kaj por <b>Centralazio</b> (kun <i>-istano),</i> dum la lando estas la radiko en la <b>cetero de la mondo</b> (kun <i>-an</i> por la etno). Esceptoj estas naŭ maljunaj landoj en Orientazio kaj Orientafriko, kun etna radiko: <i>ĉino, japano, mongolo, vjetnamo, tajo, egipto, etiopo, somalo, saudarabo.</i> Historie ankaŭ <i>hindo/Hindujo</i> apartenas al tiu grupo, sed nuntempe <i>Barato/baratano</i> estas pli uzata.<br>\n<br>\nVidu plian klarigojn kaj superrigardan mapon en <a target=\"_blank\" href=\"https://eo.wikipedia.org/wiki/Landnomoj_en_Esperanto\">Vikipedio</a>.",
		""
	],
	"£:BASE-justico&\"<justecoj?n?>\"": [
		"£:BASE-justico&\"<justecoj?n?>\"",
		"Konfuzebla vortoparo",
		"La diferenco inter <i>‘justeco’</i> kaj <i>‘justico’</i> estas, ke la unua celas la econ esti justa, dum la dua temas pri la jura sistemo, kaj la juraj instancoj, kiel tuto.",
		"La <span style=\"color: #c9211e\">justeco</span> (justico) de mia lando laboras malrapide."
	],
	"£:BASE-kamerao&\"<kameroj?n?>\"": [
		"£:BASE-kamerao&\"<kameroj?n?>\"",
		"Konfuzebla vortoparo",
		"'Kamero’ estas malgranda ĉambro, dum <i>‘kamerao’</i> estas fotilo aŭ filmilo.",
		"Oni filmis la transdonon per kaŝita <span style=\"color: #ff0000\">kamero</span> (kamerao)."
	],
	"£:BASE-hxano&\"<kanoj?n?>\"": [
		"£:BASE-hxano&\"<kanoj?n?>\"",
		"Konfuzebla vortoparo",
		"'Kano’ estas planto, dum <i>‘ĥano’</i> estas titolo de turka aŭ mongola reganto.",
		"Ĉiuj timis la grandan <span style=\"color: #c9211e\">kanon</span> (ĥanon)."
	],
	"£:BASE-karaktro": [
		"£:BASE-karaktro",
		"Konfuzebla vortoparo",
		"'Karaktero’ celas la psikan, individuan ecaron de persono, dum <i>‘karaktro’</i> estas neologisma faktermino por litero aŭ alia tajpsigno.",
		"Komence mi havis malfacilaĵojn kun esperantaj <span style=\"color: #ff0000\">karakteroj</span> (karaktroj) en mia telefono."
	],
	"£:BASE-kaverno": [
		"£:BASE-kaverno",
		"Konfuzebla vortoparo",
		"<i>'Kavo’</i> estas pli ĝenerala vorto ol <i>‘kaverno’. ‘Kavo’</i> estas ĉia malplenaĵo en io solida, fermita aŭ ne, ankaŭ en surfaco: <i>kavo en tero, fromaĝo, organo etc.</i> (angle: <i>hole</i>).<br>\n<br>\n<i>‘Kaverno’</i> estas relative granda kaj profunda, subtera kavo kun enirejo (angle: <i>cave</i>), aŭ kavo en organo aŭ arbo, formita pro malsano.",
		"Ili esploris la <span style=\"color: #ff0000\">kavon</span> (kavernon) kaj ĝiajn belajn kristalojn."
	],
	"£insert&\"<kiel>\"": [
		"£insert&\"<kiel>\"",
		"Prepozicio-eraro en ebla objektpredikativo",
		"En Esperanto ekzistas du manieroj por esprimi objektpredikativon, do sintakse ligi (jaman aŭ venontan) atributon al akuzativa objekto, (a) rekta kaj (b) nerekta, kun <i>‘kiel’.</i> Dependas de la verbo, ĉu oni povas uzi (a) aŭ (b) aŭ ambaŭ. Ĉi tie ŝajnas, ke vi elektis erare.<br>\n<br>\nJen ekzemploj de la rekta maniero:<br>\n<br>\n<i>(a1) Li pentris la domon ruĝa</i> (= poste la domo estas ruĝa)<br>\n<br>\n<i>(a2) Li ŝatas sian kafon varmega</i> (= dum ĝi estas ankoraŭ varmega)<br>\n<br>\n<i>(a3) Oni elektis lin prezidanto</i> (= poste li estas prezidanto)<br>\n<br>\nNotu, ke la objektpredikativo <i>(ruĝa, varmega, prezidanto</i>) estas en la nominativo. La frazo <i>‘Li pentris la domon ruĝan’,</i> do kun adjektivo en la akuzativo,<i></i> egalas al <i>‘Li pentris la ruĝan domon’,</i> kaj temas pri simple atributo. Poste, la domo povas havi tute alian koloron.<br>\n<br>\nPor nerekta objektpredikativo, kun <i>‘kiel’</i>,<i></i> oni uzas la akuzativon:<br>\n<br>\n(b1) <i>Ili elektis lin</i> <b><i>kiel</i></b><i> prezidanto</i><b><i>n</i></b><i>.</i>",
		""
	],
	"£:kiel&\"kia\"": [
		"£:kiel&\"kia\"",
		"Nenormala uzo de korelativo",
		"Por rekte aldoni ekzemplojn al substantivo aŭ adjektivo, oni normale uzas <i>‘kiel’,</i> ne <i>‘kia’.</i> Pripensu sekvi tiun kutimon.<br>\n<br>\n<i>Li vizitis famajn urbojn</i> <span style=\"color: #ff0000\"><i>kia</i></span><i> (kiel) Parizo.</i><br>\n<br>\n<i>Li vizitis famajn urbojn</i> <span style=\"color: #ff0000\"><i>kiaj</i></span><i> (kiel) Parizo kaj Londono.</i><br>\n<br>\nArgumento por tamen uzi <i>‘kia’</i> estas, ke temas pri elipsa versio de jena sintakso:<br>\n<br>\n<i>Li vizitis urbojn famajn, kia estas Parizo.</i>",
		""
	],
	"£:BASE-alklaki": [
		"£:BASE-alklaki",
		"Transitiveco",
		"'Klaki’ estas netransitiva verbo. Aŭ iu aĵo aŭ ilo produktas knalan sonon, aŭ homo produktas knalan sonon <i>per</i> aĵo aŭ ilo:<br>\n<br>\n<i>Klakadis la duonfermitaj fenestroj en la ŝtormo.</i><br>\n<br>\n<i>Li klakis dufoje per sia vipo / la manoj</i><br>\n<br>\nEn moderna lingvouzo, oni ankaŭ povas klaki ie per komputila muso. Sed oni ne povas klaki <i>ion,</i> nek vipon nek butonon per muso. Uzu <i>‘klakigi’</i> por la ilo (vipo) kaj <i>‘alklaki’</i> por la celo (butono, kruco, ligo).",
		"<span style=\"color: #ff0000\"><i>Klaku</i></span><i> (alklaku) la ruĝan butonon sube por vidi la bildon.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Klakante</i></span><i> (klakigante) la langon, li ektiris la ĉevalon en la rivereton,</i>"
	],
	"£:BASE-alstrebi&\"<klopod.*>\"": [
		"£:BASE-alstrebi&\"<klopod.*>\"",
		"Transitiveco",
		"La verbo <i>‘klopodi’</i> povas esti uzata netransitive, kun <i>‘pri’</i> aŭ kun infinitiva komplemento:<br>\n<br>\n<i>Ĉiu klopodu en sia metio!</i><br>\n<br>\n<i>Li klopodis vendi la malnovajn meblojn.</i><br>\n<br>\n<i>Iom pli klopodu pri viaj hejmtaskoj!</i><br>\n<br>\n<i>Tiu fiulo klopodis por min ruinigi.</i><br>\n<br>\nSed ne eblas uzi tiun verbon kun rekta substantiva komplemento:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>klopodis</i></span><i> (alstrebis) novan postenon.</i>",
		""
	],
	"£:BASE-rekompenci": [
		"£:BASE-rekompenci",
		"Konfuzebla vortoparo",
		"Oni <i>kompensas</i> elspezon, perdon aŭ damaĝon (al iu), per mono, laŭ la valoro de la perdo. La verbo <i>‘rekompenci’</i> havas similan signifon, sed ĝia rekta objekto celas la personon, ne la perdon:<br>\n<br>\n<i>Post la akcidento, la asekurkompanio kompensis al li</i> <b><i>la damaĝon</i></b><i>.</i><br>\n<br>\n<i>La asekurkompanio</i> <span style=\"color: #ff0000\"><i>kompensis</i></span><i> (rekompencis)</i> <b><i>lin</i></b><i>, pagante novan aŭton.</i>",
		""
	],
	"£:BASE-konduki": [
		"£:BASE-konduki",
		"Konfuzebla vortogrupo",
		"<i>'Konduki’</i> signifas irigi or alvenigi iun aŭ ion al iu loko aŭ stato (angle: <i>lead</i>). La vorto estas tre ĝenerala – oni povas konduki personon, azenon aŭ aŭton, vojo povas konduki al celo, kaj unu evento povas konduki al alia. Nur en la kampo de fiziko, por elektro kaj ondoj, ekzistas alia, sinonima vorto, <i>‘kondukti’.</i> Oni rajtas (en nefaka kunteksto) uzi <i>‘konduki’</i> anstataŭ <i>‘kondukti’,</i> sed ne inverse.<br>\n<br>\n<i>Li ne scias</i> <span style=\"color: #ff0000\"><i>kondukti</i></span><i> (konduki) aŭton.</i><br>\n<br>\nNotu ankaŭ, ke oni ne <i>konduktas,</i> sed <i>direktas</i> orkestron.<br>\n<br>\nTria konfuzebla vorto estas <i>‘konduti’,</i> uzata pri la maniero, kiel ini (inter)agas en socia kunteksto (angle: <i>behave</i>). La verbo estas netransitiva, kaj ne eblas <i>konduti</i> esploron aŭ diskuton:<br>\n<br>\n<i>La firmao promesis</i> <span style=\"color: #ff0000\"><i>konduti</i></span><i> (realigi) esploron por trovi la kaŭzon de la akcidento.</i>",
		""
	],
	"£:BASE-fidi&\"<konfid.*>\"": [
		"£:BASE-fidi&\"<konfid.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"Eblas konfuzi <i>‘fidi’</i> kaj <i>‘konfidi’.</i> Ambaŭ povas signifi <i>‘trust’</i> en la angla, sed la dua havas moralan aspekton, la unua ne. Do oni konfidas al persono, aŭ konfidas sekreton al iu, dum oni <i>fidas</i> la ĝusteston de aserto, aŭ je la kapablo de persono aŭ la taŭgeco de instrumento.<br>\n<br>\n<i>La armeo ankoraŭ ne plene</i> <span style=\"color: #ff0000\"><i>konfidas</i></span><i> (fidas) memgvidajn dronojn.</i><br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>.",
		""
	],
	"£:BASE-fini&\"<konklud.*>\"": [
		"£:BASE-fini&\"<konklud.*>\"",
		"Falsa amiko",
		"En Esperanto, ‘<i>konkludi’</i> nur temas pri logika rezonado, ne eblas <i>konkludi</i> agon, kurson, procezon aŭ simile. Por tiu senco, simple uzu <i>‘fini’.</i>",
		"Li sukcese <span style=\"color: #ff0000\">konkludis</span> (finis) la lastan jaron de la liceo."
	],
	"£:BASE-kolumno": [
		"£:BASE-kolumno",
		"Falsa amiko / konfuzebla vortoparo",
		"'Kolono’ estas parto de konstruaĵo, <i>‘kolumno’</i> estas parto de tabelo aŭ paĝo. <i>‘Kolono’</i> estas la pli ĝenerala vorto, uzebla ankaŭ figure, por kolono de akvo/hidrargo aŭ por kolono de tankoj.",
		"<i>En la dua</i> <span style=\"color: #ff0000\"><i>kolono</i></span><i> (kolumno) vi trovas la anglan tradukon, en la tria la francan.</i><br>\n<br>\n<i>La templo havis bele ornamitajn</i> <span style=\"color: #ff0000\"><i>kolumnojn</i></span><i> (kolonojn).</i>"
	],
	"£:BASE-konkurso": [
		"£:BASE-konkurso",
		"Konfuzebla vortogrupo",
		"'Konkurenco’ estas komerca koncepto, dum <i>‘konkurso’</i> estas sporta okazaĵo. Firmaoj povas havi konkurencajn produktojn, sed oni konkuras pri sporta aŭ alia komuna celo aŭ kapablo. <i>‘Konkuri’</i> estas pli ĝenerala ol <i>‘konkurenci’</i> - oni povas diri, ke <i>konkurenco</i> estas <i>komerca konkurado.</i>",
		"<i>La lernejo organizis piedpilkan</i> <span style=\"color: #ff0000\"><i>konkurencon</i></span><i> (konkurson).</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>konkurencaj</i></span><i> (konkuraj) kandidatoj en la elekto ricevis kune malpli ol duonon de la voĉoj.</i>"
	],
	"£:BASE-konscio": [
		"£:BASE-konscio",
		"Falsa amiko / konfuzebla vortoparo",
		"'Konscio’ estas mensa kapablo (angle: <i>consciousness</i>), dum <i>‘konscienco’</i> estas la morala sento de homo (angle: <i>conscience</i>). Oni <i>konscias</i> pri fakto aŭ situacio, kaj havas malbonan <i>konsciencon</i> pri ago.",
		"<i>Kreskas la</i> <span style=\"color: #ff0000\"><i>konscienco</i></span><i> (konscio) pri la klimataj problemoj.</i><br>\n<br>\n<i>Li havas puran/bonan/trankvilan</i> <span style=\"color: #ff0000\"><i>konscion</i></span><i> (konsciencon) pri la afero.</i>"
	],
	"£:BASE-fidi&\"<kont.*>\"": [
		"£:BASE-fidi&\"<kont.*>\"",
		"Falsa amiko",
		"N<i>e</i> eblas traduki la anglan vorton <i>‘count’</i> per <i>‘konti’.</i> La esperanta vorto estas verbigo de <i>‘konto’</i> (angle: <i>account</i>) kaj temas pri mono k.s.<br>\n<br>\n<i>La asocio</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (nombras) 109 membrojn.</i><br>\n<br>\n<i>Ni</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (fidas) je nia samideana frataro.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (taksas), ke la laboro daŭros 3 monatojn.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>kontis</i></span><i> (nombris/kalkulis) la perlojn en la ĉeno.</i>",
		""
	],
	"£:BASE-scii&\"<kon.*>\"": [
		"£:BASE-scii&\"<kon.*>\"",
		"Konfuzebla vortoparo",
		"Oni <i>konas</i> ion aŭ iun, ĉar oni jam antaŭe renkontis, vidis aŭ spertis la koncernan aferon (germane: <i>kennen</i>). ‘<i>Scii’</i> signifas havi precisan mensan informaron pri io (germane: <i>wissen</i>). Ambaŭ verboj estas transitivaj, sed <i>‘koni’</i> havas substantivan komplementon, dum <i>scii</i> permesas infinitivon aŭ propozician <i>ke-</i>komplementon. Oni <i>konas</i> urbon aŭ personon, sed <i>scias</i> naĝi aŭ<i> scias</i> lingvon. Notu, ke oni ofte uzas <i>‘scipovi’</i> kun infinitiva aŭ substantiva komplemento, sed ne kun <i>ke-</i>propozicio.",
		"Ĉu vi <span style=\"color: #ff0000\">konas</span> (scias/scipovas) la francan?<br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>scias</i></span><i> (konas) bonan lignaĵiston, kiu povas helpi vin.</i>"
	],
	"£:BASE-regi&\"<kontrol.*>\"r": [
		"£:BASE-regi&\"<kontrol.*>\"r",
		"Falsa amiko / konfuzebla vortoparo",
		"Oni <i>kontrolas,</i> ĉu io estas en ordo kaj laŭ supozo (angle: <i>check</i>), kaj en tiu senco eblas kontroli fakton, personon, spezkalkulon ktp. Sed en Esperanto ne eblas uzi la vorto kun la senco ‘regi/direkti’ (angle: <i>control</i>):",
		"La rebeloj <span style=\"color: #ff0000\">kontrolis</span> (regis) la orientan parton de la lando."
	],
	"£:BASE-ekzemplero&\"<kopioj?n?>\"": [
		"£:BASE-ekzemplero&\"<kopioj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘kopio’</i> signifas ‘nova, sama versio de originalo’. Ne uzu la vorton kun la senco de ‘ekzemplero’.",
		"La eldonejo presis tri mil <span style=\"color: #ff0000\">kopiojn</span> (ekzemplerojn) de la libro."
	],
	"£:BASE-gxusta": [
		"£:BASE-gxusta",
		"Falsa amiko",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>).",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-jxus&\"<gxuste>\"": [
		"£:BASE-jxus&\"<gxuste>\"",
		"Falsa amiko",
		"'Ĝuste’ signifas ‘senerare’. La similsona angla <i>‘just’</i> tradukiĝas aŭ kiel <i>‘juste’</i> (= laŭregule) aŭ kiel <i>‘jus’</i> (= antaŭ tre mallonga tempo).",
		"Mi <span style=\"color: #ff0000\">ĝuste</span> (ĵus) alvenis de la flughaveno."
	],
	"£:BASE-responi&\"<korespond.*>\"": [
		"£:BASE-responi&\"<korespond.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘korespondi’</i> signifas ‘interŝanĝi mesaĝojn/leterojn’. Ne konfuzu tion kun <i>‘respondi’</i> en la senco de ‘proporcie/analoge rilati al’ (angle: <i>correspond</i>). Notu, ke tio estas kromsenco de <i>‘respondi’,</i> la baza senco estas ‘respondi al demando (aŭ ago)’.",
		"Tio <span style=\"color: #ff0000\">korespondis</span> (respondis) al unu kvarono de la tiama prezo de juna sklavo ."
	],
	"£:BASE-kramfo": [
		"£:BASE-kramfo",
		"Konfuzebla vortoparo",
		"'Krampo’ estas kurba fiksilo (angle: <i>clamp</i>) aŭ, figursence, kurba interpunkcia signo (angle: <i>bracket</i>). Dume, <i>‘kramfo’</i> estas medicina vorto, kun la signifo ‘spasmo’ (angle: <i>cramp</i>).",
		"La <span style=\"color: #ff0000\">krampoj</span> (kramfoj) en la kruro daŭris kelkajn minutojn."
	],
	"£:BASE-gruo&\"<krano?n?>\"": [
		"£:BASE-gruo&\"<krano?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘krano’</i> estas tubofermilo (angle: <i>faucet, tap</i>). La levomaŝino nomiĝas <i>‘gruo’.</i> Notu, ke <i>‘gruo’</i> ankaŭ estas longgamba birdo (ambaŭ angle: <i>crane</i>).",
		"Oni uzi grandan <span style=\"color: #ff0000\">kranon</span> (gruon) por levi kaj meti la tegmentajn trabojn."
	],
	"£:BASE-kredinda&\"<kredeblaj?n?>\"": [
		"£:BASE-kredinda&\"<kredeblaj?n?>\"",
		"Konfuzebla vortoparo",
		"Kaj homoj kaj asertoj povas esti <i>‘kredindaj’</i> (angle: <i>trustworthy</i>), sed nur la lastaj povas esti <i>‘kredeblaj’</i> (angle: <i>plausible</i>). Homoj, politikoj, strategopk, fontoj, informoj kaj sankcioj estas <i>kredindaj,</i> ne <i>kredeblaj.</i>",
		"Dum jardekoj li estis <span style=\"color: #ff0000\">kredebla</span> (kredinda) kaj lojala partnero."
	],
	"£:per&\"<kun>\"": [
		"£:per&\"<kun>\"",
		"Malĝusta prepozicio",
		"La prepozicio <i>‘kun’</i> signifas ‘kune kun’ (persono) au ‘havanta’ (econ/aĵon), dum <i>‘per’</i> signifas ‘uze de’. Kiam temas pri ilo, kiu estas uzita por iu celo, prefere uzu <i>‘per’.</i>",
		"Li tranĉis la panon <span style=\"color: #ff0000\">kun</span> (per) malnova poŝtranĉilo.<br>\n<br>\n<i>Li iris antaŭen, hezite,</i> <span style=\"color: #ff0000\"><i>kun</i></span><i> (per) mallongaj, malrapidaj paŝoj.</i>"
	],
	"£:BASE-kuraci&\"<kur.*>\"": [
		"£:BASE-kuraci&\"<kur.*>\"",
		"Falsa amiko",
		"Ne konfuzu <i>‘kuri’</i> (angle: <i>run</i>) kun <i>‘kuraci’</i> (angle: <i>cure</i>).",
		"La piloloj <span style=\"color: #ff0000\">kuris</span> (kuracis) min."
	],
	"£:BASE-scivolema&\"<kuriozaj?n?>\"": [
		"£:BASE-scivolema&\"<kuriozaj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘kurioza’</i> signifas ‘stranga’ (angle: <i>odd</i>). Oni ne povas esti kurioza <i>pri io</i>. Ne uzu la vorton en la senco de <i>‘scivolema’</i> (angle: <i>curious</i>)<i>.</i>",
		"Mi estas <span style=\"color: #ff0000\">kurioza</span> (scivolema), ĉu li vere venos."
	],
	"£:BASE-evoluo&\"<kursoj?n?>\"": [
		"£:BASE-evoluo&\"<kursoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘kurso’</i> estas aŭ vojdirekto aŭ instruperiodo. Ne uzu la vorton en pli ĝenerala senco por aliaj tempoperiodoj (ekz. milito aŭ malsano).",
		"La manko de kanonoj influis la kurson (evoluon) de la milito."
	],
	"£:BASE-kvaronjaro&\"<kvartaloj?n?>\"": [
		"£:BASE-kvaronjaro&\"<kvartaloj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘kvartalo’</i> estas urboparto. La vorto ne povas signifi ‘kvaronjaro’.",
		"La profito de la teknofirmaoj multe kreskis dum la tria <span style=\"color: #ff0000\">kvartalo</span> (kvaronjaro) de 2023."
	],
	"£:BASE-granda&\"<largxaj?n?>\"": [
		"£:BASE-granda&\"<largxaj?n?>\"",
		"Falsa amiko",
		"En Esperanto, la adjektivo <i>‘larĝa’</i> celas horizontalan, flank-al-flankan dimension/amplekson. Imagu la mezurojn de kesto kiel longeco x larĝexo x alteco. Esta (angla) falsa amiko uzi la vorton kun la ĝenerala senco de <i>‘granda’.</i>",
		"<span style=\"color: #ff0000\">Larĝa</span> (granda) parto de la afiŝoj estas falsa.<br>\n<br>\nLi manĝis <span style=\"color: #ff0000\">larĝan</span> (grandan) porcion da glaciaĵo."
	],
	"£:BASE-litero": [
		"£:BASE-litero",
		"Falsa amiko / konfuzebla vortoparo",
		"Ne konfuzu <i>‘letero’</i> kun <i>‘litero’.</i> La unua estas skriba mesaĝo, la dua skriba, alfabeta signo (a-z, A-Z).",
		"Tiu alfabeto estis bazita sur kartvelaj <span style=\"color: #ff0000\">leteroj</span> (literoj)."
	],
	"£:BASE-leki&\"<lik.*>\"": [
		"£:BASE-leki&\"<lik.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"Ne konfuzu <i>‘leki’</i> (angle:<i></i> lick) kaj <i>‘liki’</i> (angle: leak). Oni <i>‘lekas’</i> ion per la lango – korpoparton, manĝaĵon aŭ ĝenerale surfacon. <i>‘Liki’</i> signifas ‘tralasi likvaĵon’ aŭ ‘elflueti’. Barelo aŭ ŝipo povas liki en la unua senco, dum akvo, elektro aŭ – figure – sekretoj povas liki en la dua senco.<br>\n<br>\nNotu, ke eblas diri <i>‘akvo tralikiĝis’</i>, kvankam <i>‘liki’</i> jam estas netransitiva. Tio eblas, ĉar la sufikso <i>-iĝ</i> aldoniĝas al la substantivo <i>‘liko’: tra+lik+iĝ+i.</i>",
		"La hundo <span style=\"color: #ff0000\">likis</span> (lekis) lian manon."
	],
	"£:BASE-ligilo&\"<linkoj?n?>\"": [
		"£:BASE-ligilo&\"<linkoj?n?>\"",
		"False friend",
		"En Esperanto, <i>‘linko’</i> estas rabobesto, ne ligilo al retejo aŭ hejmpaĝo.",
		"Sekvu la <span style=\"color: #ff0000\">linkon</span> (ligilon) al mia hejmpaĝo por trovi pli da fotoj."
	],
	"£x-etype-lemma&\"situi\"": [
		"£x-etype-lemma&\"situi\"",
		"Konfuzebla vortoparo",
		"En Esperanto, nur homoj <i>loĝas</i>, institucioj kaj konstruaĵoj <i>situas.</i>",
		"La biciklo-muzeo <span style=\"color: #ff0000\">loĝas</span> (situas) tuj apud la stacidomo."
	],
	"£:BASE-lokalizi&\"<lokig.*>\"": [
		"£:BASE-lokalizi&\"<lokig.*>\"",
		"Konfuzebla vortoparo",
		"<i>'Loki’</i> signifas ‘meti’ kaj estas transitiva verbo. Do almeti <i>-ig</i> al la radiko ‘<i>lok-’</i> ne havas sencon, se per <i>‘lokigi’</i> oni celas ‘meti’ (= igi havi lokon). Kelkaj esperantistoj uzas <i>‘lokigi’</i> kun la sencoj de ‘eltrovi lokon’ (angle: locate) aŭ ‘fiksi lokon’ (angle: <i>confine</i>)<i>.</i> Tamen, ĉar ekzistas aparta vorto, <i>‘lokalizi’,</i> por tiuj sencoj, konsideru uzi ĝin anstataŭ:<br>\n<br>\n<i>La fajrobrigado sukcesis</i> <span style=\"color: #ff0000\"><i>lokigi</i></span><i> (lokalizi, loke limigi) la incendion.</i><br>\n<br>\n<i>Magneta skanado helpis</i> <span style=\"color: #ff0000\"><i>lokigi</i></span><i> (lokalizi, loke eltrovi) la situan de la subteraj ruinoj.</i>",
		""
	],
	"£:BASE-lupago&\"<luoj?n?>\"": [
		"£:BASE-lupago&\"<luoj?n?>\"",
		"Konfuzebla vortoparo",
		"'Luo’ estas la ago lui, do ricevi portempan uzorajton kontraŭ regula pago. Por la pago aŭ ĝia monvaloro uzu <i>‘lupago’.</i>",
		"La <span style=\"color: #ff0000\">luo</span> (lupago) estas 400 EUR monate."
	],
	"£:BASE-matcxo&\"<macxoj?n?>\"": [
		"£:BASE-matcxo&\"<macxoj?n?>\"",
		"Konfuzebla vortoparo",
		"Ĉar la vorto <i>‘maĉo’</i> (= sportkonkurso) estas ambigua pro la ekzisto de la verbo <i>‘maĉi’</i> (= dispremi per la dentoj), oni enkondukis alternativan vortformon por la sportkonkurso, kiu almenaŭ skribe distingeblas: <i>‘matĉo’.</i> Konsideru uzi ĝin.",
		"La klubo gajnis ĉiujn <span style=\"color: #ff0000\">maĉojn</span> (matĉojn) de la sezono."
	],
	"£:BASE-magazeno": [
		"£:BASE-magazeno",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘magazeno’</i> kaj <i>‘magazino’.</i> La unua estas ejo (stokejo aŭ vendejo), la dua estas ilustrita gazeto.",
		"Li abonas naturamikan <span style=\"color: #ff0000\">magazenon</span> (magazinon).<br>\n<br>\nIli uzis tutan horon en la <span style=\"color: #ff0000\">magazino</span> (magazeno) aĉetante donacojn."
	],
	"£:BASE-malgxusta&\"<maljustaj?n?>\"": [
		"£:BASE-malgxusta&\"<maljustaj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"'Malĝusta’ signifas ‘erara’ (angle: <i>incorrect</i>), dum <i>‘maljusta’</i> signifas ‘kontraŭnorme malegala’ (angle: <i>injust</i>).",
		"Dum horoj ili marŝis en la <span style=\"color: #c9211e\">maljusta</span> (malĝusta) direkto."
	],
	"£:BASE-malnova&\"<maljuna?n?>\"": [
		"£:BASE-malnova&\"<maljuna?n?>\"",
		"Konfuzebla vortoparo",
		"Tio povas esti falsa amiko. <i>‘Maljuna’</i> kaj <i>‘malnova’</i> ofte havas la saman tradukon (angle: <i>old,</i> hispane: <i>viejo,</i> germane: <i>alt</i>). Por kompreni la diferencon, pensu pri la malo, <i>‘juna’</i> kaj <i>‘nova’,</i> por kiuj ofte ekzistas malsamaj tradukoj (anlge: <i>young – new,</i> hispane: <i>joven – nuevo,</i> germane: <i>jung – neu</i>). Oni uzas la vorton <i>‘(mal)juna’</i> por vivuloj (homoj, bestoj, plantoj), dum <i>‘(mal)nova’</i> rilatas al aĵoj.<br>\n<br>\nNotu, ke ekzistas esceptoj al tiu regulo: En poezia aŭ figura uzo, aĵoj ankaŭ povas esti (mal)junaj, ekz. <i>‘juna universo’, ‘maljuna vino’.</i> Sufiĉas pensi pri evoluo aŭ vivolinio por la koncerna aĵo. Kaj ankaŭ homo povas esti nova, precipe se oni pensas pri sociaj aŭ profesiaj roloj: <i>‘Maljuna prezidanto’</i> (ekz. 80-jara) kaj <i>‘malnova prezidanto’</i> (la antaŭa prezidanto).",
		"Ne matenmanĝi estis <span style=\"color: #c9211e\">maljuna</span> (malnova) kutimo de li."
	],
	"£:BASE-alta&\"<karaj?n?>\"": [
		"£:BASE-alta&\"<karaj?n?>\"",
		"Konfuzebla vortoparo",
		"La vorto <i>‘kara’</i> havas du signifojn, (a) ‘amata’ kaj (b) ‘multekosta’. Do aĵoj povas esti karaj (multekostaj), sed la prezo aŭ kosto ne estas <i>kara,</i> sed <i>alta.</i>",
		"Ĉar ili venis lastminute, ili devis pagi <span style=\"color: #c9211e\">kara</span> (altan) prezon por la bileto."
	],
	"£:BASE-mandarena": [
		"£:BASE-mandarena",
		"Konfuzebla vortoparo",
		"'Mandarino’ estas frukto, <i>‘mandareno’</i> estas ĉina oficisto. Pli grave, <i>‘mandarena’</i> estas lingvoadjektivo por la ĉina. Ne konfuzu ĝin kun <i>‘mandarina’.</i>",
		"Li lernas la <span style=\"color: #c9211e\">mandarinan</span> (mandarenan)."
	],
	"£:BASE-mangxajxo": [
		"£:BASE-mangxajxo",
		"Mankanta afikso",
		"<i>'Manĝo’</i> signifas ‘manĝo-okazo’, ekz. <i>tagmanĝo, matenmanĝo, lasta/sankta manĝo.</i> Ĝi ankaŭ povas signifi la tuton de la nutraĵoj konsumitaj dume. Sed por unuopa nutraĵo aŭ unuopa plado oni kutime aldonas <i>-aĵ.</i> Do oni manĝas <i>manĝaĵojn</i> dum <i>manĝo</i>.",
		"Li manĝas nur ekologiajn <span style=\"color: #ff0000\">manĝojn</span> (manĝaĵojn)."
	],
	"£:BASE-malhavi&\"<mank.*>\"": [
		"£:BASE-malhavi&\"<mank.*>\"",
		"Transitiveco",
		"'Manki’ ne permesas rektan objekton. Io povas manki al mi, sed mi ne povas <span style=\"color: #ff0000\">manki</span><span style=\"color: #c9211e\"> ion.</span> Uzu <i>‘malhavi’</i> anstataŭ, aŭ revortumu la frazon kun <i>‘al’</i>!",
		"Ni <span style=\"color: #ff0000\">mankas</span> kelkajn pecojn de la puzlo. (Mankas al ni kelkaj pecojn …, ni malhavas kelkajn pecojn ...)"
	],
	"£:BASE-amaso": [
		"£:BASE-amaso",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘maso’</i> kun <i>‘amaso’.</i> La unua, <i>‘maso’</i> havas du signifojn: (a) senforma kunbuliĝo de io aŭ (b) la fizika eco mezurita en (kilo)gramoj. Dume, <i>‘amaso’</i> estas alta kvanto da io.",
		"<i>La nova veturilo estis</i> <span style=\"color: #ff0000\"><i>mase</i></span><i> (amase) produktita.</i><br>\n<br>\n<i>Lia parolado incitis la popolajn</i> <span style=\"color: #ff0000\"><i>masojn</i></span><i> (amasojn).</i>"
	],
	"£:BASE-grandega&\"<masivaj?n?>\"": [
		"£:BASE-grandega&\"<masivaj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘masiva’</i> nur rilatas al denseco, ne eblas uzi la vorton por esprimi intensecon aŭ grandecon ĝenerale.",
		"<i>La rebeloj ricevis</i> <span style=\"color: #ff0000\"><i>masivan</i></span><i> (grandegan) subtenon de Usono.</i><br>\n<br>\n<i>Necesas</i> <span style=\"color: #ff0000\"><i>masivaj</i></span><i> (grandegaj) investoj.</i>"
	],
	"£:BASE-medikamento": [
		"£:BASE-medikamento",
		"Konfuzebla vortoparo",
		"'Medicino’ estas la fako, <i>‘medikamento’</i> estas medicina rimedo, medicinaĵo en formo de ekz. pilolo aŭ eliksiro.",
		"Li aĉetis kontraŭtusan <span style=\"color: #ff0000\">medicinon</span> (medikamenton) por sia filo."
	],
	"£:BASE-reto&\"<medioj?n?>\"": [
		"£:BASE-reto&\"<medioj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘medio’</i> signifas (nur) ‘ĉirkaŭaĵo’ aŭ ‘cirkonstancoj’. Ĝi ne havas la signifon de komunika(j) kanalo(j) (angle: <i>media</i>). Oni do parolu pri <i>‘amaskomunikiloj’</i> (gazetaro, televido ktp.) kaj <i>‘sociaj retoj’.</i>",
		"<i>La internaciaj</i> <span style=\"color: #ff0000\"><i>medioj</i></span><i> (amaskomunikiloj) diskonigis la skandalon.</i><br>\n<br>\n<i>Infanoj facile dependiĝas de sociaj</i> <span style=\"color: #ff0000\"><i>medioj</i></span><i> (retoj).</i>"
	],
	"£:BASE-maniero&\"<modoj?n?>\"": [
		"£:BASE-maniero&\"<modoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, modo estas portempa vesta aŭ konduta furorkutimo (angle: <i>fashion</i>). Ne konfuzu la vorton kun <i>maniero</i> (angle: <i>manner, mode</i>).",
		"Nur ekzistas unu <span style=\"color: #ff0000\">modo</span> (maniero) solvi tion."
	],
	"£:BASE-mortiga&\"<mortaj?n?>\"": [
		"£:BASE-mortiga&\"<mortaj?n?>\"",
		"Mankanta afikso",
		"<i>'Morta’</i> estas stato, dum <i>‘mortiga’</i> rilatas al ago, evento, malsano aŭ veneno, kiu kaŭzas morton. Infekto, ekzemple, logike ne povas esti morta, sed ĝi povas estas mortiga. La uzo de <i>‘morta’</i> kun la signifo <i>‘mortiga’</i> estas nuntempe arkaika – prefere evitu ĝin.",
		""
	],
	"£:BASE-muldilo": [
		"£:BASE-muldilo",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘muldo’</i> simple estas la ago muldi (‘formi’, angle: <i>mold</i>) ion en speciala, formiga ujo. Ne uzu uzu la vorton en la senco de <i>muldaĵo</i> (la produkto) aŭ <i>muldilo</i> (la ujo).<br>\n<br>\nLa germana <i>‘Mulde’</i> estas falsa amiko kaj tradukiĝas al Esperanto kiel <i>‘kavo’.</i>",
		""
	],
	"£:BASE-bezoni&\"<neces.*>\"": [
		"£:BASE-bezoni&\"<neces.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"La vorto <i>‘necesi’</i> estas netransitiva (angle: <i>be necessary</i>).Povas temi pri hispana falsa amiko. En Esperanto, oni ne <span style=\"color: #ff0000\"><i>necesas ion</i></span><i>,</i> sed <i>bezonas ion</i> (angle: <i>need,</i> hispane: <i>necessitar</i>).",
		"Mi <span style=\"color: #ff0000\">necesas</span> (bezonas) novan jakon."
	],
	"£:BASE-trovi&\"<negoc.*>\"": [
		"£:BASE-trovi&\"<negoc.*>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘negoci’</i> signifas ‘komerci, marĉandi’. La verbo ne estas transitiva kaj oni ne povas negoci ekz. vojon aŭ pacon. Povas temi pri angla falsa amiko <i>(negotiate).</i> Diru <i>‘trovi vojon’</i> aŭ <i>‘intertrakti’</i> pacon.",
		"Post <span style=\"color: #ff0000\">negocado</span> (intertraktado) de batalhalto, la urbo reviviĝis."
	],
	"£:BASE-numeri": [
		"£:BASE-numeri",
		"Konfuzeblaj vortoj",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-denove&\"<nove>\"": [
		"£:BASE-denove&\"<nove>\"",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘nove’</i> kaj <i>‘denove’.</i> Plej ofte taŭgas <i>‘denove’.</i> Ĝi signifas ‘alian fojon’, do ĝi implicas, ke okazis antaŭa fojo:<br>\n<br>\n<i>Li jam spektis tiun filmon hieraŭ. Sed hodiaŭ li volas denove spekti ĝin.</i><br>\n<br>\nAnkaŭ <i>‘nove’</i> estas tempa adverbo, sed ĝi signifas ‘ĵus’/’antaŭ nelonge’ kaj ne implicas antaŭan fojon. Oni ĉefe vidas ĝin kune kun is-tempaj participoj:<br>\n<br>\n<i>Nove kuirita kaĉo, nove aperinta libro, nove aĉetita biciklo</i>",
		"Ni hodiaŭ <span style=\"color: #ff0000\">nove</span> (denove) manĝis vegetare"
	],
	"£:BASE-oferti&\"<ofer.*>\"": [
		"£:BASE-oferti&\"<ofer.*>\"",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘oferi’</i> kaj <i>‘oferti’. ‘Oferi’</i> signifas ‘fordonaci ion multvaloran’ kaj implicas malhavosenton, riton aŭ damaĝon (angle: <i>sacrifice</i>). Oni oferas beston, sangon, vivon, tempon aŭ grandan monsumon. <i>‘Oferti’</i> signifas ‘proponi varon, servon aŭ – propran - (help)agon (angle: <i>offer</i>).<br>\n<br>\nNur homoj povas oferi kaj striktasence ankaŭ nur homoj povas oferti. Estas falsamika influo diri, ke <i>‘urbo ofertas vidindaĵojn’,</i> aŭ ke iu <i>‘sistemo ofertas facilan retvendadon’.</i> Konsideru uzi vortojn kiel <i>‘proponi’</i> aŭ <i>‘ebligi’</i> anstataŭ.",
		"<i>La patrino</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) kuketojn al la gastoj.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) helpi en la kuirejo.</i>"
	],
	"£:BASE-oficejo&\"<oficoj?n?>\"": [
		"£:BASE-oficejo&\"<oficoj?n?>\"",
		"Konfuzebla vortoparo",
		"<i>'Ofico’</i> estas oficiala, deĵora okupo, do speco de profesio. Ne konfuzu tion kun <i>‘oficejo’,</i> kiu estas la loko, kutime kun tablo, komputilo ktp., kie oni plenumas sian oficon.",
		"Li pasigis la tutan tagon laborante en la <span style=\"color: #ff0000\">ofico</span> (oficejo)."
	],
	"£nil&\"<ol>\"": [
		"£nil&\"<ol>\"",
		"Malebla konjunkcio",
		"La vorteto <i>‘ol’</i> estas uzata por komparo:<br>\n<br>\n<i>Li estas pli (mal)granda ol sia frato.</i> <i>Li parolas pli rapide ol li pensas.</i><br>\n<br>\nAnkaŭ eblas uzi la vorton kiel konjunkcion por tempa komparo. Sed iom nelogike, tio eblas nur kun <i>‘antaŭ’,</i> ne kun <i>‘post’:</i><br>\n<br>\n<i>Pensu antaŭ ol paroli!</i><br>\n<br>\n<i>Mi aerumis la ĉambron, antaŭ ol vi venis.</i><br>\n<br>\nSed ne:<br>\n<br>\n(a)<i> ?Purigu la kafmaŝinon post</i> <span style=\"color: #ff0000\"><i>ol</i></span><i> uzi ĝin.</i><br>\n<br>\n(b)<i> ?Ili aĉetis pli grandan domon post</i> <span style=\"color: #ff0000\"><i>ol</i></span><i> la bebo naskiĝis.</i><br>\n<br>\nNecesas vortumi alimaniere, sen <i>‘ol’</i>. Kun infinitivo(a) estas plej bone ŝanĝi ĝi al substantivo <i>(… post uzado)</i> au subpropozicio <i>(… post kiam vi uzis ĝin).</i> La \"nuda\" infinitivo <i>(...post uzi ĝin)</i> sonas iom strange, kvankam ne estas vera eraro.<br>\n<br>\nSe post <i>‘post ol’</i> jam venas subpropozicio (b), eblas simple uzi la konjunkcion <i>‘kiam’ (… post kiam la bebo naskiĝis)</i>",
		""
	],
	"£:BASE-honorigi&\"<omagx.*>\"": [
		"£:BASE-honorigi&\"<omagx.*>\"",
		"Transitiveco",
		"'Omaĝi’ estas malofta verbo, kaj laŭ PIV ĝi ne estas transitiva, do: ‘<i>omaĝi al iu’</i>, ne <i>‘omaĝi iun’.</i> Kontraŭe al PIV, ReVo permesas transitivan uzon, do ne temas pri certa eraro. Sed kun rekta objekto, konsideru uzi la pli-malpli samsencan <i>‘honorigi’.</i>",
		""
	],
	"£:BASE-opinii": [
		"£:BASE-opinii",
		"Falsa amiko",
		"Male al la angla <i>‘opine’,</i> la esperanto vorto <i>‘opinii’</i> retenas la radikfinan ‘i’-leteron de <i>‘opinio’</i> (angle: <i>opinion</i>). Ne eblas diri <i>‘opini’</i>.",
		""
	],
	"£:BASE-alineo&\"<paragrafoj?n?>\"": [
		"£:BASE-alineo&\"<paragrafoj?n?>\"",
		"Konfuzebla vortoparo",
		"En Esperanto, <i>‘paragrafo’</i> nur havas juran senco. Tipe temas pri numeritaj paragrafoj en leĝo, statutoj, kontrakto ktp. <i>‘Alineo’</i> estas struktura unuo en teksto, pli granda ol frazo, se malpligranda ol ĉapitro.",
		"Se oni legas la 4-an <span style=\"color: #ff0000\">paragrafon</span> (alineon) de la teksto, oni vidas, ke la elspezoj kreskis lastatempe."
	],
	"£:BASE-preterpasi": [
		"£:BASE-preterpasi",
		"Transitiveco",
		"En moderna Esperanto, 'pasi’ ne povas esti transitiva. Kun homa subjekto ĝi signifas ‘movadi’ (<i>de ie… al ie</i>, aŭ <i>tra/preter io</i>). Kun tempoperiodo kiel subjekto, ĝi signifas ‘forflui’: <i>pasis longa tempo / unu semajno / 3 jaroj.</i> Estas falsa amiko uzi la vorton kun rekta objekto (angle: <i>pass s.th.</i>):<br>\n<br>\nIli <span style=\"color: #ff0000\"><i>pasis</i></span><i> (preterpasis) tri akvofalojn dum la migrado.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Pasu</i></span><i> (donu) al mi la salon, bonvole!</i>",
		""
	],
	"£:BASE-pauxzo": [
		"£:BASE-pauxzo",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘paŭzi’</i> kaj <i>‘paŭsi’,</i> aŭ <i>‘paŭzo’</i> kaj <i>‘paŭso’.</i> La unua rilatas al periode de neaktiveco (angle: <i>break</i>), la dua temas pri ekzakta kopiado aŭ imitado (angle: <i>copy</i>).",
		"Post longa <span style=\"color: #ff0000\">paŭso</span> (paŭzo) <i>denove okazas eksteraj koncertoj en la parko.</i>"
	],
	"£:BASE-pensio": [
		"£:BASE-pensio",
		"Konfuzebla vortoparo",
		"'Pensio’ estas regula monpago al nelaboranta persono, ekz. al maljunulo (angle: <i>pension</i>). La similsona <i>‘pensiono’</i> estas loko, kie oni loĝas kaj manĝas kontraŭ pago (angle: <i>boarding house</i>), aŭ eventuale manĝoskemo en tial loko aŭ hotelo, ekz. <i>‘duona pensiono’ (</i>= matenmanĝo + vespermanĝo). Ne uzu la vorton por mono pagota, en la senco de ‘pensionpago’/’gastoprezo’.",
		"La averaĝa <span style=\"color: #ff0000\">pensiono</span> (pensio) de maljunulo en Grekio ne estas alta."
	],
	"£insert&\"<ke>\"": [
		"£insert&\"<ke>\"",
		"Mankanta konkunkcio",
		"En Esperanto, ne ekzistas finitaj subpropozicioj sen enkonduka subordiga vorto – konjunkcio aŭ relativa aŭ demanda pronomo. Male al la angla kaj la skandinavaj lingvoj, tio ankaŭ validas por <i>ke-</i>frazoj, kiuj rolas kiel objekto:<br>\n<br>\n<i>?Mi pensas ŝi estas amuza. → Mi pensas, ke …</i> (angle: I think (that) she is funny)",
		""
	],
	"£:BASE-pezi&\"<pes.*>\"": [
		"£:BASE-pezi&\"<pes.*>\"",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘pezi’</i> kaj <i>‘pesi’.</i> La unua estas netransitiva, la dua estas transitiva. Iu peza aĵo pezas (x kilogramojn), sed por ekscii ĝian ekzaktan pezon, oni devas pesi ĝin (per persilo).",
		"<i>La valizo</i> <span style=\"color: #ff0000\"><i>pesas</i></span><i> (pezas) 15 kg.</i><br>\n<br>\n<i>Bonvole</i> <span style=\"color: #ff0000\"><i>pezu</i></span><i> (pesu) vian valizon!</i>"
	],
	"£:BASE-benzino": [
		"£:BASE-benzino",
		"Konfuzebla vortogrupo",
		"Oni pumpas <i>nafton</i> el la tero por ekstrakti el ĝi <i>petrolon</i> (mineralan oleon). <i>‘Benzino’</i> estas speciala petrola produkto por aŭtoj, dum la kruda <i>petrolo</i> ankaŭ estas uzata en la kemia industrio, kaj kiel brulpetrolo en lampoj, por hejti ktp.",
		"Ni bezonas pli da <span style=\"color: #ff0000\">petrolo</span> (benzino) por nia aŭto.<br>\n<br>\nSub la maro troviĝas grandaj rezervoj de <span style=\"color: #ff0000\">petrolo</span> (nafto)."
	],
	"£:BASE-plasto": [
		"£:BASE-plasto",
		"Konfuzebla vortogrupo",
		"<i>'Plasto’</i> estas materialo (angle: <i>plastic</i>), dum <i>‘plastiko’</i> signifas ‘form-arto’, do la arto formi skulptaĵon aŭ modlaĵon. <i>‘Plastio’</i> estas operacio por ripari la formon aŭ funkcion de organo aŭ korpoparto.",
		"Eblas recikligi la plej mulltajn aĵojn el <span style=\"color: #ff0000\">plastiko</span> (plasto) / <span style=\"color: #ff0000\">plastikajn</span> (plastajn) aĵojn."
	],
	"£:BASE-poluo&\"<polucioj?n>\"": [
		"£:BASE-poluo&\"<polucioj?n>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"Tio ne estas certa eraro, sed konsideru uzi <i>‘poluo’</i> anstataŭ <i>‘polucio’,</i> kiam vi celas la sencon de ‘malpurigo de la medio’. <i>‘Poluo’</i> estas la plej ofta vorto por tio, dum <i>‘polucio’</i> estas ambigua, kun la unua signifo de ‘nokta elfluo de spermo sen koitado’.",
		"Antaue, karbobruligado multe kontribuis al la <span style=\"color: #ff0000\">aerpolucio</span> (aerpoluo) en industriaj regionoj."
	],
	"£:BASE-mesagxo&\"<posxtoj?n?>\"": [
		"£:BASE-mesagxo&\"<posxtoj?n?>\"",
		"Konfuzebla vortoparo",
		"'Poŝto’ estas sendosistemo aŭ sendofirmao. La vorto ankaŭ uzeblas por ĉiu el la tagaj distribuoj de poŝto, sed ne por la individua sendaĵo aŭ mesaĝo.",
		"Mi ricevis <span style=\"color: #ff0000\">poŝton</span> (mesaĝon) de la banko."
	],
	"£:BASE-ebla&\"<poten.*>\"": [
		"£:BASE-ebla&\"<poten.*>\"",
		"Falsa amiko",
		"Striktasence, <i>‘potencialo’</i> kaj <i>‘potenciala’</i> estas fizika fakvorto kun la signifo de ‘energienhavo’, uzata pri elektra kampo aŭ ekz. la akvo en la digolago de elektrocentralo. Estas falsa amiko uzi <i>‘potencialo’</i> kun la signifo de <i>‘latenta kapablo’,</i> aŭ <i>‘potenciala’</i> kun la signifo de <i>‘ebla’.</i>",
		"La Esperanto-movado havas grandan <span style=\"color: #ff0000\">potencialon</span> (latenton).<br>\n<br>\nLia <span style=\"color: #ff0000\">potenciala</span> (ebla) posteulo donis intervjuon hieraŭ."
	],
	"£:BASE-infancxaro&\"<pramoj?n?>\"": [
		"£:BASE-infancxaro&\"<pramoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘pramo’</i> estas speco de ŝipo, ne <i>‘infanĉaro’.</i> Temas pri (angla) falsa amiko.",
		""
	],
	"£:BASE-fari&\"<pren.*>\"": [
		"£:BASE-fari&\"<pren.*>\"",
		"Falsa amiko",
		"En Esperanto, oni ne <i>prenas</i> foton aŭ paŝon, sed <i>faras</i> foton aŭ paŝon.",
		""
	],
	"£:BASE-okazi&\"<pren.*>\"": [
		"£:BASE-okazi&\"<pren.*>\"",
		"Falsa amiko",
		"En Esperanto, festo aŭ inaŭguro ne <i>prenas lokon,</i> sed <i>okazas.</i>",
		""
	],
	"£:BASE-ekparoli&\"<pren.*>\"": [
		"£:BASE-ekparoli&\"<pren.*>\"",
		"Falsa amiko",
		"En Esperanto, oni ne <i>prenas la parolon,</i> sed <i>ekparolas.</i>",
		""
	],
	"£:BASE-transpreni&\"<pren.*>\"": [
		"£:BASE-transpreni&\"<pren.*>\"",
		"Falsa amiko",
		"En Esperanto, oni ne <i>prenas</i> la komandon, sed <i>transprenas</i> ĝin. Simile, oni ne <i>prenas la kontrolon,</i> sed <i>transprenas la regadon.</i> Notu, ke <i>‘kontrolo’</i> ne uzeblas ĉi tie. Oni <i>kontrolas</i> aserton aŭ fakturon, sed oni <i>regas</i> homojn, urbon aŭ situacion.<i></i>",
		""
	],
	"£:BASE-promeni&\"<pren.*>\"": [
		"£:BASE-promeni&\"<pren.*>\"",
		"Falsa amiko",
		"En Esperanto, oni ne <i>prenas</i> promenon (angle: <i>take a walk</i>), sed simple <i>promenas.</i>",
		""
	],
	"£:BASE-kunporti&\"<pren.*>\"": [
		"£:BASE-kunporti&\"<pren.*>\"",
		"Falsa amiko",
		"En Esperanto, oni ne <i>prenas</i> iun ien, sed <i>kunportas lin.</i>",
		"Mi povas <span style=\"color: #ff0000\">preni</span> (kunporti) vin tien en mia aŭto, se vi volas."
	],
	"£:BASE-pruvi": [
		"£:BASE-pruvi",
		"Konfuzeblaj vortoj",
		"'<i>Provi</i>’ havas la ĉefan sencon de ‘<i>elprovi</i>’ (angle: <i>try</i>), do fari kaj vidi, ĉu funkcias. ‘<i>Pruvi</i>’ signifas ‘montri la verecon/faktecon de io (angle: <i>prove)</i>. Do, oni <i>pruvas, ke …,</i> kaj <i>provas, ĉu</i> … Kun infinitivo, nur eblas ‘<i>provi</i>’ (ekz. <i>Provu kapti min!</i>)<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>pruvis</i></span><i> (provis), cxu la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>provis</i></span><i> (pruvis), ke la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\nNotu, ke por manĝaĵoj kaj trinkaĵoj oni prefere uzu ‘gustumi’, ne ‘provi’:<br>\n<br>\nProvu (gustumu) mian aprikotan marmeladon!",
		""
	],
	"£:BASE-tabulo&\"<plankoj?n?>\"": [
		"£:BASE-tabulo&\"<plankoj?n?>\"",
		"Falsa amiko",
		"<i>'Planko’</i> estas la malsupra parto de ĉambro, sur kiu oni paŝas (angle: <i>floor</i>). Planko povas konsisti el ‘<i>tabuloj’</i> – longaj, maldikaj, plataj lignopecoj (angle: <i>plank, board</i>). Kromaj sencoj de <i>‘tabulo’</i> estas ‘breto’ (el ajna materialo) kaj ‘skribotabulo’.",
		""
	],
	"£:BASE-gipso&\"<plastroj?n?>\"": [
		"£:BASE-gipso&\"<plastroj?n?>\"",
		"Falsa amiko",
		"Povas temi pri (angla) falsa amiko <i>(plaster).</i> En Esperanto 'Plastro’ estas glupansaĵo por kovri vundeton, la moldebla blanka materialo nomiĝas <i>‘gipso’.</i>",
		""
	],
	"£:BASE-proceduro": [
		"£:BASE-proceduro",
		"Konfuzeblaj vortoj",
		"Ekzistas kvar konfuzeblaj radikoj komenciĝantaj per <i>‘proce...’.</i> La diferenco inter <i>‘procezo’</i> kaj <i>‘proceso’</i> estas la uzokampo: <i>‘proceso’</i> estas jura termino (angle: <i>lawsuit</i>), dum <i>‘procezo’</i> estas ĝenerala vorto por disvolviĝanta sinsekvo de eventoj, natura aŭ planita (angle: <i>process</i>). En pluraj lingvoj ambaŭ tradukiĝas same (ekz. germane: <i>Prozess</i>).<br>\n<br>\n'Procedo’ estas difinita agmaniero por atingi iun celon (angle: <i>method, ways</i>), <i>‘proceduro’</i> estas pli normigita, kompleksa procedaro (angle: <i>procedure</i>), speciale en jura, administra kaj komputila kunteksto. Notu, ke ne eblas uzi nek unu nek la alian celante kompletan, konkretan juran <i>proceson</i> kontraŭ iu persono aŭ firmao.<br>\n<br>\nNotu, ke kelkaj verbigas <i>‘procezo’</i> al <i>‘procezi’,</i> kun la transitiva signifo de ‘prilabori’. Ne konfuzu tion kun <i>‘procesi’,</i> kiu signifas ‘realigi juran proceson (kontraŭ).",
		"Ni devas haltigi la <span style=\"color: #ff0000\">proceson</span> (procezon) de senarbarigo.<br>\n<br>\nOni <span style=\"color: #ff0000\">procesas</span> (prilaboras) la agrikulturajn produktojn surloke."
	],
	"£:BASE-eldiro&\"<prononcoj?n?>\"": [
		"£:BASE-eldiro&\"<prononcoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘prononco’</i> nur signifas ‘elparolo’ (de vorto, litero ktp.). Ĝi ne povas havi la sencon de ‘eldiro’ (de iu pri io).",
		"La oficialaj <span style=\"color: #ff0000\">prononcoj</span> (eldiroj) de la brita registaro ( ekz. pri la valuto, EU-membreco ktp.) estis majstre koreografitaj.<br>\n<br>\nLa ĉefministro surprize <span style=\"color: #ff0000\">sin prononcis</span> (parolis) kontraŭ albanofobio"
	],
	"£:BASE-gazetaro&\"<presoj?n?>\"": [
		"£:BASE-gazetaro&\"<presoj?n?>\"",
		"Falsa amiko",
		"'Presi’ signifas ‘reprodukti dokumentojn per maŝino’, do <i>‘preso’</i> estas produktado de dokumento/presaĵo (angle: <i>printing</i>). Ne konfuzu tion kun <i>‘gazetaro’</i> (angle: <i>press</i>).",
		""
	],
	"£:BASE-malhelpi&\"<prevent.*>\"": [
		"£:BASE-malhelpi&\"<prevent.*>\"",
		"Falsa amikol / Verbo kun malĝusta valento",
		"'Preventi’ signifas ‘antaŭmalhelpi’ (agon aŭ okazaĵon). Sed personon oni ne <i>preventas,</i> sed <i>malhelpas.</i> Kaj oni ne povas traduki la anglan plurvalentan strukturon <i>‘prevent sb. from doing s.th.’</i> per <i>‘preventi.</i> Tiucele uzu <i>‘malhelpi’</i>:<br>\n<br>\n<i>La malbona vetero</i> <span style=\"color: #ff0000\"><i>preventis</i></span><i> (malhelpis) la armeon transiri la monton.</i>",
		""
	],
	"£:BASE-pruntepreni&\"<prunt.*>\"": [
		"£:BASE-pruntepreni&\"<prunt.*>\"",
		"Ambigua verbo",
		"'Pruni’ povas signifi kaj ‘pruntepreni’ kaj ‘pruntedoni’. Kun <i>‘de’</i> aŭ <i>‘al’</i> la signifo estas klara, sed sen prepozicio necesas precizigo.",
		""
	],
	"£:BASE-deklari&\"<proviz.*>\"": [
		"£:BASE-deklari&\"<proviz.*>\"",
		"Falsa amikoo",
		"Oni <i>provizas iun per io,</i> aŭ <i>provizas ion al iu</i> (angle: <i>supply</i>). Sed en Esperanto ne eblas uzi la vorton kun la signifo de <i>‘deklari’:</i><br>\n<br>\n<i>La leĝo/konstitucio</i> <span style=\"color: #ff0000\"><i>provizas</i></span><i> (deklaras), ke ...</i>",
		""
	],
	"£:BASE-trinkejo&\"<puboj?n?>\"": [
		"£:BASE-trinkejo&\"<puboj?n?>\"",
		"Falsa amiko",
		"'<i>Pubo</i>’ estas antatomia vorto, celanta la seksregionon de la torso. Ne konfuzu ĝin kun <i>‘trinkejo’</i> (angle<i>: pub).</i>",
		""
	],
	"£:BASE-pulvo": [
		"£:BASE-pulvo",
		"Konfuzebla vortogrupo",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE-rakedo": [
		"£:BASE-rakedo",
		"Konfuzebla vortoparo",
		"<i>'Raketo’</i> estas rapida, senpersona flugvehiklo uzata por milito aŭ spacesploro. Dume, <i>‘rakedo’</i> estas pilkobatilo uzata en ekz. teniso kaj badmintono.<br>\n<br>\nNotu, ke nek unu nek la alia estas uzebla en la senco de <i>‘neĝŝuo’.</i>",
		""
	],
	"£:BASE-reala": [
		"£:BASE-reala",
		"Konfuzebla vortoparo",
		"Ne konfuzu <i>‘vera’</i> kaj <i>‘reala’.</i> La unua temas pri fakteco (angle: <i>true</i>), dum la dua signifas ‘efektive ekzistanta’ (angle: <i>actual</i>).",
		"En la <span style=\"color: #ff0000\">vera</span> (reala) mondo ne funkcias tiel.<br>\n<br>\nLi estas <span style=\"color: #ff0000\">reala</span> (vera) princo."
	],
	"£:BASE-recikligi&\"<recikl.*>\"": [
		"£:BASE-recikligi&\"<recikl.*>\"",
		"Falsa amikol / Transitiveco",
		"En Esperanto, oni <i>recikligas,</i> ne <i>reciklas,</i> plaston, botelojn, vestaĵojn ktp.<br>\n<br>\nLa pasiva participo <i>‘reciklita’</i> estas relative ofte uzata, kaj do ne temas pri grava afero. Sed konsideru aldoni <i>‘-ig’</i> eĉ en tiu kazo.",
		"Ni uzis <span style=\"color: #ff0000\">reciklitan</span> (recikligitan) paperon por la invitoj.<br>\n<br>\nEn tuta Eŭropo oni <span style=\"color: #ff0000\">reciklas</span> (recikligas) botelojn."
	],
	"£:BASE-referenci": [
		"£:BASE-referenci",
		"Falsa amiko",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£:BASE-renkontigxo&\"<renkontoj?n?>\"": [
		"£:BASE-renkontigxo&\"<renkontoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"La diferenco inter <i>‘renkonto’</i> kaj <i>‘renkontiĝo’</i> estas, ke la unua tipe estas hazarda kaj persona, dum la dua estas organizita evento kun pli ol du partoprenantoj kaj difinita loko kaj daŭro, kaj celo aŭ temo. <i>Renkonto</i> ofte okazas <i>kun</i> aŭ <i>inter</i>, dum <i>renkontiĝo</i> tipe estas internacia, germana, esperanta, faka, 3-taga ktp.<br>\n<br>\n<i>Mia mateno komenciĝis per renkonto kun dikaj, malagrablaj insektoj.</i><br>\n<br>\n<i>Mi vizitis kafejan</i> <span style=\"color: #ff0000\"><i>renkonton</i></span><i> (renkontiĝon) de la loka klubo.</i>",
		""
	],
	"£:BASE-interezo&\"<rentoj?n?>\"": [
		"£:BASE-interezo&\"<rentoj?n?>\"",
		"Konfuzebla vortoparo",
		"La vortoj <i>‘rento’</i> kaj <i>‘interezo’</i> havas similajn, sed malsamajn signifojn. <i>‘Interezo’</i> signifas \"pagoprocento\" aŭ \"procentopago\", pagota de ŝuldanto (angle: <i>interest,</i> germane: <i>Zins</i>), dum <i>‘rento’</i> estas la (regula) enspezo el ĝi (angle: <i>annuity income, interest income</i>). <i>‘Interezo’</i> estas mezurata en procentoj, <i>‘rento’</i> en monunuoj. Oni povas derivi unu koncepton el la alia: <i>‘interezo’</i> estas <i>‘rentumo’,</i> kaj <i>‘rento’</i> estas <i>‘interezoenspezo’.</i><br>\n<br>\nEstas angla falsa amiko uzi <i>‘rento’</i> en la senco de <i>‘lupago’.</i>",
		"La unuaj membroj jam ricevis la 6-procentan <span style=\"color: #ff0000\">renton</span> (interezon) por la unua duonjaro.<br>\n<br>\n<i>Mankas loĝejoj, kaj nuntempe, en la centro, la</i> <span style=\"color: #ff0000\"><i>rentoj</i></span><i> (lupagoj) estas tre altaj.</i>"
	],
	"£:BASE-respondeculo": [
		"£:BASE-respondeculo",
		"Mankanta sufikso",
		"<i>'Respondulo’</i> estas homo, kiu dondas respondojn en enketo aŭ demandaro, dum <i>‘respondeculo’</i> estas la persono, kiu havas la respondecon (angle: <i>responsibility</i>) pri iu projekto, plano, ago, loko, infano aŭ simile.",
		"Mi tuj volas paroli kun la <span style=\"color: #ff0000\">respondulo</span> (respondeculo)."
	],
	"£:BASE-retejo": [
		"£:BASE-retejo",
		"Konfuzebla vortoparo",
		"<i>'Retpaĝo’</i> estas unuopa paĝo, dum <i>‘retejo’</i> estas kompleta paĝaro, kun retadreso. Reta vortaro, ekzemple, estas <i>retejo</i> kun <i>retpaĝoj</i> por unuopaj vortoj.",
		""
	],
	"£:BASE-retmesagxo": [
		"£:BASE-retmesagxo",
		"Konfuzebla vortoparo",
		"'Retpoŝto’ estas reta mesaĝoservo, do la sistemo mem, dum <i>‘retmesaĝo’</i> estas la unuopa mesaĝo, kiun oni sendas al specifa <i>‘retpoŝtadreso’.</i><br>\n<br>\nNotu tamen, ke – analoge al la uzo de <i>‘poŝto’ –</i> <i>‘retpoŝto’</i> ankaŭ estas uzata por ĉiu el la distribuoj de retmesaĝoj, kun la signifo de ‘retmesaĝaro’:<br>\n<br>\n<i>Mi ĵus skribis retmesaĝon al vi.</i> SED: <i>Mi ĵus legis mian retpoŝton de la lastaj tagoj.</i>",
		"Donu al mi vian <span style=\"color: #ff0000\">retpoŝton</span> (retpoŝtadreson)!<br>\n<br>\nMultaj <span style=\"color: #ff0000\">retpoŝtoj</span> (retmesaĝoj) nuntempe estas spamo."
	],
	"£:BASE-revo": [
		"£:BASE-revo",
		"Konfuzebla vortoparo",
		"'Sonĝojn’ oni havas nokte, dum dormo, <i>‘revoj’</i> oni havas dumtage, pri imagita estonteco. <i>‘Sonĝo’</i> povas temi pri ĉio ajn, ankaŭ teruraĵoj, sed <i>‘revo’</i> kutime temas pri io bona, dezirata.",
		"<i>Estis lia infanaĝa</i> <span style=\"color: #ff0000\"><i>sonĝo</i></span><i> (revo) fariĝi astronaŭto.</i><br>\n<br>\n<i>Lastnokte mi havis strangan</i> <span style=\"color: #ff0000\"><i>revon</i></span><i> (sonĝon).</i>"
	],
	"£:BASE-rezigno": [
		"£:BASE-rezigno",
		"Falsa amiko / konfuzebla vortoparo",
		"<i>'Rezignacio’</i> estas psika stato, de \"kontraŭŝata akcepto pro fortomanko\", kaj <i>‘rezignacii’</i> signifas eniri tiun staton (angle: <i>state of being resigned</i>). Ne konfuzu tion kun la ago de <i>‘rezigni’</i> (angle: <i>give up</i>)<i>,</i> kiu permesas objekton: Oni povas <i>rezigni monon, postenon, tronon,</i> aŭ, kun infinitivo, <i>rezigni fari ion.</i> Substantive oni diras <i>rezigno je/pri io.</i>",
		"Li energie gvidis la firmaon ĝis sia <span style=\"color: #ff0000\">rezignacio</span> (rezigno) en 2011."
	],
	"£:BASE-ripo&\"<riboj?n?>\"": [
		"£:BASE-ripo&\"<riboj?n?>\"",
		"Falsa amiko",
		"'Ribo’ estas bero (angle: <i>currant</i>), <i>‘ripo’</i> estas osto (angle: <i>rib</i>)",
		""
	],
	"£:BASE-vidi&\"<rimark.*>\"": [
		"£:BASE-vidi&\"<rimark.*>\"",
		"Malĝusta valento",
		"'Rimarki’ (angle: notice) estas transitiva verbo, sed ĝi ne permesas aldonan infinitivon, kiel <i>vidi, aŭdi, senti.</i><br>\n<br>\nNotu, ke <i>‘rimarki’</i> ankaŭ povas signifi ‘(atentige) diri’ (angle: <i>remark).</i> Ne temas pri falsa amiko.",
		"Mi <span style=\"color: #ff0000\">rimarkis</span> (vidis) lin preni plian glason de ŝaŭmvino."
	],
	"£:BASE-kuracilo&\"<rimedoj?n?>": [
		"£:BASE-kuracilo&\"<rimedoj?n?>",
		"Falsa amiko",
		"En Esperanto, <i>‘rimedo’</i> signifas (nur) ‘celatingilo’ (angle: <i>means</i>). Ne eblas uzi ĝin kun la senco de <i>‘kuracilo’</i> (angle: <i>remedy</i>).",
		"La kuracisto preskribis kontraŭtusan <span style=\"color: #ff0000\">rimedon</span> (kuracilon)."
	],
	"£:BASE-auxdi&\"<auxskult.*>\"": [
		"£:BASE-auxdi&\"<auxskult.*>\"",
		"Malĝusta valento",
		"La diferenco inter <i>‘aŭdi’</i> kaj <i>‘aŭskulti’</i> estas, ke la dua estas atenta kaj direkta, dum la unua estas neplanita. Ambaŭ estas transitivaj, sed <i>‘aŭskulti’</i> ne permesas aldonan infinitivon, kiel <i>vidi, aŭdi, senti.</i>",
		"Mi <span style=\"color: #ff0000\">aŭskultis</span> (aŭdis) lin parki la aŭton"
	],
	"£:BASE-ruli&\"<rol.*>\"": [
		"£:BASE-ruli&\"<rol.*>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘roli’</i> rilatas al teatra aŭ filma rolo, aŭ laŭbezona funkcio (angle: <i>role</i>). Ne konfuzu tion kun la transitiva verbo <i>‘ruli’</i> (angle: <i>roll</i>).",
		"La infano <span style=\"color: #ff0000\">rolis</span> (rulis) pilkon laŭ la strato."
	],
	"£:BASE-roma&\"<romanaj?n?>\"": [
		"£:BASE-roma&\"<romanaj?n?>\"",
		"Konfuzebla vortoparo",
		"Kaj <i>‘roma’</i> kaj <i>‘romana’</i> signifas ‘de Romo / Rom-rilata’, sed la bazo de la dua ne estas <i>‘Romo’</i> mem<i>,</i> sed <i>‘rom|an|p’,</i> do enloĝanto de Romo. Krome, la vorto estas ambigua, ĉar <i>‘romano’</i> ankaŭ estas literatura verko. Do, pro klareco, konsideru uzi <i>‘roma’</i> ĉi tie.",
		"La <span style=\"color: #ff0000\">romana</span> (roma) eklezio ĝenerale ne akceptis virinojn kiel pastrojn."
	],
	"£:BASE-latinida&\"<rom.*>\"": [
		"£:BASE-latinida&\"<rom.*>\"",
		"Malĝusta vortelekto",
		"Ne temas pri vera eraro, sed la kutima vorto por la lingvogrupo estas <i>‘latinida’.</i>",
		""
	],
	"£:BASE-rozo&\"<rosoj?n?>\"": [
		"£:BASE-rozo&\"<rosoj?n?>\"",
		"Konfuzebla vortoparo",
		"Eblas konfuzi <i>‘rozo’</i> kaj <i>‘roso’,</i> precipe se oni en la gepatra lingvo ne klare distigas inter voĉaj kaj nevoĉaj konsonantoj. <i>‘Rozo’</i> estas floro, <i>‘roso’</i> estas matenaj surfacgutetoj.",
		"Li plukis <span style=\"color: #ff0000\">rosojn</span> (rozojn) por sia amikino."
	],
	"£:BASE-sceno&\"<cxenoj?n?>\"": [
		"£:BASE-sceno&\"<cxenoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"Ekzemple baze de la itala eblas konfuzi <i>‘sceno’</i> kaj <i>‘ĉeno’.</i> La unua estas teatra aŭ teatreca okazaĵo, aŭ parto de teatra akto (angle: <i>scene</i>), la dua aro de interligitaj eroj (angle: <i>chain</i>).",
		""
	],
	"£:cxu&\"<se>\"": [
		"£:cxu&\"<se>\"",
		"Malĝusta vortelekto",
		"La konjunkcio <i>‘se’</i> (angle: <i>in case,</i> germane: <i>falls</i>) povas enkonduki nur adverbialan propozicion, ne objekt-propozicion. Por ĉi-lasta, uzu <i>‘ĉu’</i> (angle: <i>whether,</i> germane: <i>ob</i>). En la angla la konjunkcio <i>‘if’</i> funkcias kun ambaŭ, kio povas krei konfuzon.",
		"Mi ne scias, <span style=\"color: #ff0000\">se</span> (ĉu) li venas."
	],
	"£:BASE-konsekvenco&\"<sekvoj?n?>\"": [
		"£:BASE-konsekvenco&\"<sekvoj?n?>\"",
		"Konfuzebla vortoparo",
		"La diferenco inter <i>‘sekvo’</i> kaj <i>‘konsekvenco’</i> estas, ke la dua ne estas simpla tempa aŭ natura sekvo, sed logika sekvo aŭ rezulto, racie konkludebla aŭ interligita. Agoj, faktoj, decidoj, principoj havas konsekvencojn, dum (nehomaj) okazoj, ekz. katastrofoj, havas sekvojn.",
		"La aĉeto de la nova klubejo havas la <span style=\"color: #ff0000\">sekvon</span> (konsekvencon), ke ni devas altigi la kotizojn."
	],
	"£:BASE-servado&\"<servicoj?n?>\"": [
		"£:BASE-servado&\"<servicoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘servico’</i> signifas ‘manĝilaro’. Ne konfuzu tion kun <i>‘servado’</i> en restoracio aŭ vendejo (angle: <i>service</i>).",
		"La <span style=\"color: #ff0000\">servico</span> (servado) en la kafejo estis abisma."
	],
	"£:BASE-elekti&\"<selekt.*>\"": [
		"£:BASE-elekti&\"<selekt.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘selekti’</i> havas tre limigitan sencon: ‘elekti kaj apartigi la plej taŭga(j)n ero(j)n el aro, forĵetante la reston’ (angle: <i>select,</i> germane: <i>auswählen</i>), ekz. Kun pli ĝenerala senco, uzu <i>‘elekti’</i> (angle: <i>choose</i>, germane: <i>wählen</i>).<br>\n<br>\n<i>Natura premo sur la insulo helpis selekti la plej sanajn indiviuojn.</i><br>\n<br>\n<i>Ni devas elekti ne nur novan prezidanton, sed ankaŭ vicprezidanton.</i>",
		"Kune ili <span style=\"color: #ff0000\">selectis</span> (elektis) dancmuzikon por la festo."
	],
	"£:BASE-senco": [
		"£:BASE-senco",
		"Konfuzebla vortoparo",
		"Ĝenerale, la uzo de la vorto 'senco’ estas simila al tiu de <i>‘signifo’</i> (de ekz. vorto aŭ esprimo)<i>.</i> Krome, se io <i>havas sencon,</i> ĝi estas memevidenta. Ne konfuzu <i>‘senco’</i> kun <i>‘senso’,</i> kiu estas anatomia vorto kaj celas la kapablon percepti per sensorgano (ekz. <i>vidi</i>, <i>aŭdi</i> ktp.)",
		"<i>Tiu vorto havas kaj ĝeneralan kaj metaforan</i> <span style=\"color: #ff0000\"><i>sensojn</i></span><i> (sencojn).</i><br>\n<br>\n<i>Al li mankas ĉia</i> <span style=\"color: #ff0000\"><i>diplomatia</i></span><i> senco (senso).</i>"
	],
	"£:BASE-surtabligi&\"<serv.*>\"": [
		"£:BASE-surtabligi&\"<serv.*>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"<i>'Servi’</i> havas du ĉefajn signifojn:<br>\n<br>\n(a) homo servanta alian homon, aŭ al alia homo, kaj<br>\n<br>\n(b) aĵo servanta por fari ion, aŭ aĵo servanta kiel io<br>\n<br>\n(a) estas transitiva, kun homa objekto, dum (b) estas netransitiva. La signifo de (b) egalas al tiu de <i>‘utili’ (por/kiel).</i><br>\n<br>\nNotu, ke estas falsa (angla) amiko uzi la vorton kun la sencoj de <i>‘surtabligi’</i> (ekz. kafon) au de <i>‘serviri’</i> (ekz. pilkon en teniso).",
		"La pastajxojn oni <span style=\"color: #ff0000\">servas</span> (surtabligas) dolcxe kun sukero kaj cinamo.<br>\n<br>\nNur tiu ludanto, kiu <span style=\"color: #ff0000\">servas</span> (serviras) la pilkon, povas gajni poenton ."
	],
	"£:BASE-situi&\"<est.*>\"": [
		"£:BASE-situi&\"<est.*>\"",
		"Transitiveco",
		"La verbo <i>‘situi’</i> estas netransitiva, do ne eblas uzi pasivon. Diru simple <i>‘situi’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>esti situita</i></span><i>’.</i>",
		""
	],
	"£:BASE-frazo&\"<sentencoj?n?>\"": [
		"£:BASE-frazo&\"<sentencoj?n?>\"",
		"Falsa amiko",
		"<i>'Sentenco’</i> estas pli ĝenerala vorto po <i>‘aforismo’ –</i> frazeto enhavanta moralan principon (anlge: <i>maxim</i>). Ne konfuzu tion kun <i>‘frazo’</i> (angle: <i>sentence</i>), la ĝenerala vorto por senchava vortoĉeno.",
		"La <span style=\"color: #ff0000\">sentencoj</span> (frazoj) en via eseo estas tro longaj."
	],
	"£:BASE-ejo&\"<sitoj?n?>\"": [
		"£:BASE-ejo&\"<sitoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘sito’</i> estas (nur) birdo (angle: <i>nuthatch</i>). Estas falsa amiko uzi la vorton kun la signifo <i>‘ejo’.</i>",
		"En 1929 oni komencis elfosi la gravan arkeologian <span style=\"color: #ff0000\">siton</span> (ejon) de la antikva urbo Ugarito"
	],
	"£:BASE-lernejo&\"<skoloj?n?>\"": [
		"£:BASE-lernejo&\"<skoloj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘skolo’</i> estas la adeptaro de iu majstro, filozofio aŭ doktrino (angle: <i>school of thought</i>). Ne konfuzu tion kun la <i>‘lernejo’ –</i> la ĝenerala vorto por loko, kie oni lernas.",
		"En tiu <span style=\"color: #ff0000\">skolo</span> (lernejo) la infanoj ne rajtas kunporti poŝtelefonojn."
	],
	"£:BASE-slava&\"<slavonaj?n?>\"": [
		"£:BASE-slava&\"<slavonaj?n?>\"",
		"Konfuzebla vortoparo",
		"La ‘<i>slavona’</i> estas ortodoksa eklezia lingvo kun propraj alfabetoj (glagolico kaj kirilico), dum la adjektivo <i>‘slava’</i> celas orienteŭropan familion de popoloj kaj lingvoj kaj ties historio.",
		""
	],
	"£:BASE-societo&\"<socioj?n?>\"": [
		"£:BASE-societo&\"<socioj?n?>\"",
		"Konfuzebla vortoparo",
		"<i>'Socio’</i> estas la ĝenerala vorto por granda strukturita grupo de homoj kun komuna kulturo, historio kaj identeco. <i>‘Societo’</i> estas organizita grupo kun komuna celo, komerca, scienca, hobia, ideologia ktp. <i>‘Asocio’, ‘korporacio’, ‘sindikato’, ‘klubo’</i> ktp. estas specoj de societo.",
		"En lia testamento li donacis multe da mono al bonfara <span style=\"color: #ff0000\">socio</span> (societo)."
	],
	"£:BASE-grundo&\"<sojloj?n?>\"": [
		"£:BASE-grundo&\"<sojloj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘sojlo’</i> estas portoŝtono aŭ metafore transiro-linio inter du statoj, epokoj aŭ agoj. Estas (angla) falsa amiko uzi la vorton kun la signivo de <i>‘grundo’.</i>",
		"La <span style=\"color: #ff0000\">sojlo</span> (grundo) en malnovaj inundo-ebenaĵoj estas aparte fekunda."
	],
	"£:BASE-nur&\"<sole>\"": [
		"£:BASE-nur&\"<sole>\"",
		"Malklara uzo",
		"La adverbo <i>‘sole’</i> havas du signifojn: (a) ‘malkune’, sen aliaj, (b) ‘nur’. Fine de propozicio kutimo temas pri senco (a), antaŭ verbo, prepozicio aŭ substantivgrupo la vorto kutime pri (b). Zamenhof uzis sencon (b) tute sinonime kun <i>‘nur’,</i> sed hodiaŭ tio estas pli markita uzo ol simple diri <i>‘nur’.</i> Krome, la uzado de nur forigas ĉiun ambiguecon. Pripensu, ĉu simple eblas uzi <i>‘nur’</i> ĉi tie, aŭ ĉu vi preferas la iom pli emfazan <i>‘sole’.</i>",
		"Mi <span style=\"color: #ff0000\">sole</span> (nur) petas peceton da pano."
	],
	"£:BASE-speco&\"<sortoj?n?>\"": [
		"£:BASE-speco&\"<sortoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘sorto’</i> estas simila al <i>‘destino’</i> (angle: <i>fate</i>). Ne eblas uzi la vorton en la senco de <i>‘speco’</i> (angle: type [of]).",
		"En la bulgara ekzistas multe da verbaj tempoj kaj <span style=\"color: #ff0000\">sortoj</span> (specoj) de konjugacio"
	],
	"£:BASE-spado&\"<fosiloj?n?>\"": [
		"£:BASE-spado&\"<fosiloj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘spado’</i> estas mallonga glavo. Ne konfuzu tion kun <i>‘fosilo’</i> (angle: <i>spade).</i>",
		"Tiun tagon ili trovis multajn <span style=\"color: #ff0000\">fosilojn</span> (fosiliojn)."
	],
	"£:BASE-precipe&\"<speciale>\"": [
		"£:BASE-precipe&\"<speciale>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘speciale’</i> signifas ‘laŭ speciala maniero’, ‘por difinita celo’. Por la angla <i>‘especially’,</i> kiam temas pri grado de graveco,<i></i> uzu <i>‘precipe’.</i> Antaŭ adjektivo, kiam temas pri elstareco, konsideru uzi <i>‘aparte’.</i>",
		"Pliboniĝas la stato de industrilandoj, <span style=\"color: #ff0000\">speciale</span> (precipe) en Eŭropo.Iutage , kiam la situacio estis <span style=\"color: #ff0000\">speciale</span> (aparte) strecxa , alvenis José , lia kuzo ."
	],
	"£:BASE-stalo&\"<stabloj?n?>\"": [
		"£:BASE-stalo&\"<stabloj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, ‘<i>stablo’</i> estas metitablo (angle: <i>workbench</i>), ne bestodomo. Por ĉi-lasta, uzu <i>‘stalo’.</i>",
		"Estis 20 ĉevaloj en la <span style=\"color: #ff0000\">stablo</span> (stalo)."
	],
	"£:BASE-normo&\"<standardoj?n?>\"": [
		"£:BASE-normo&\"<standardoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘standardo’</i> estas insigno-flago de armeo, partio ktp. (angle: <i>banner</i>). Ne konfuzu tion kun <i>‘normo’.</i>",
		"Tiu simbolo ne troviĝas en la unikoda <span style=\"color: #ff0000\">standardo</span> (normo)."
	],
	"£:BASE-sxtato": [
		"£:BASE-sxtato",
		"Falsa amiko / konfuzebla vortoparo",
		"Ne konfuzu <i>‘stato’</i> kaj <i>‘ŝtato’.</i> La unua temas pri momenta eco aŭ estomaniero (angle: <i>state = condition</i>), dum la dua havas signifon similan al ‘<i>lando</i>’ (angle: <i>state = country</i>).",
		"La landopeco estis donacita de la greka <span style=\"color: #ff0000\">stato</span> (ŝtato)."
	],
	"£:BASE-temo&\"<subjektoj?n?>\"": [
		"£:BASE-temo&\"<subjektoj?n?>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘subjekto’</i> estas precipe gramatika termino (frazparto). Ĝi ne estas uzebla kun la senco de <i>‘temo’.</i><br>\n<br>\nNotu, ke <i>‘subjekto’</i> fakte havas duan signifon, nome tiun de ‘jura individuo’: <i>politika/jura/ĉefurba subjekto.</i>",
		"Jen anglalingva libro pri la <span style=\"color: #ff0000\">subjekto</span> (temo)."
	],
	"£:BASE-ebleco&\"<sxancoj?n?>\"": [
		"£:BASE-ebleco&\"<sxancoj?n?>\"",
		"Konfuzebla vortoparo",
		"La vorto <i>‘ŝanco’</i> temas pri sukceso-probableco, do oni parolas pri (mal)grandaj aŭ (mal)bonaj ŝancoj (angle: <i>prospect,</i> germane: <i>Chance</i>). Sen la elemento de probableco, kaj sen la perspektivo de (mal)sukceso, uzu simple <i>‘ebleco’</i> (angle: <i>opportunity,</i> germane: <i>Möglichkeit).</i> Ne estas certa eraro, sed pripensu, ĉu vi ĝuste elektis ĉi tie.<br>\n<br>\n<i>Li havas bonajn ŝancojn / nenian ŝancon por esti elektita.</i> (laŭ verŝajneco-prognozoj)<br>\n<br>\n<i>Li havas la eblecon vojaĝi libere.</i> (ĉar li havas tempon kaj monon por tio)",
		"Dum la ekskurso vi havos la <span style=\"color: #ff0000\">ŝancon</span> (eblecon) viziti la etnografian muzeon."
	],
	"£:BASE-subteksto&\"<subtitoloj?n?>\"": [
		"£:BASE-subteksto&\"<subtitoloj?n?>\"",
		"Malĝusta vortelekto",
		"Striktasense <i>‘subtitolo’</i> nur uzeblas kune kun <i>‘titolo’,</i> en libroj kaj aliaj preseblaj verkoj. Filmdialogoj havas <i>‘subtekstojn’.</i> Estas historia falsa amiko uzi <i>‘subtitolo’</i> ĉi tie, el la temp, kie filmoj ne havis sonon, kaj filmscenoj havis sube muntitaj titoloj.",
		"Oni montris filmon kun esperantaj <span style=\"color: #ff0000\">subtitoloj</span> (subtekstoj)."
	],
	"£:BASE-seruro": [
		"£:BASE-seruro",
		"Konfuzebla vortoparo",
		"'Ŝloso’ estas substantivigo de la verbo <i>‘ŝlosi’,</i> kaj do signifas ‘ŝlosado’. Oni metas ŝlosilon ne en ŝloson, sed en <i>seruron.</i>",
		"La <span style=\"color: #ff0000\">ŝloso</span> (seruro) de la trezorkesto estis difektita."
	],
	"£:BASE-veturigi&\"<sxofor.*>\"": [
		"£:BASE-veturigi&\"<sxofor.*>\"",
		"Konfuzebla vortoparo",
		"Oni ŝoforas aŭton, ne personon. Uzu <i>‘veturigi’,</i> se vi celas ‘kunporti personon en aŭto’.",
		"Ĉu vi povas ŝofori (veturigi) min al la stacidomo?"
	],
	"£:BASE-versxi": [
		"£:BASE-versxi",
		"Konfuzeblaj vortoj",
		"Oni <i>verŝas</i> likvaĵojn, ekz. akvon aŭ teon. Erojn aŭ mason de solidaj substancoj oni <i>ŝutas,</i> ekz. sablon, rizon, teron, florojn. Kaj metafore oni el- kaj alŝutas datumojn en la reto.<br>\n<br>\nNe konfuzu <i>‘ŝuti’</i> kun <i>‘ŝoti’.</i> Ĉi-lasta estas piedpilka fakvorto. Oni ne <i>ŝutas</i>, sed <i>ŝotas</i> golon aŭ pilkon.",
		"La vestlavilo <span style=\"color: #ff0000\">ŝutas</span> (verŝas) sian malpuran akvon en la lavabon.<br>\n<br>\nLi ludis en la teamo en 439 matĉoj kaj <span style=\"color: #ff0000\">ŝutis</span> (ŝotis) 21 golojn ."
	],
	"£:BASE-.*imposto&\"<.*taksoj?n?>\"": [
		"£:BASE-.*imposto&\"<.*taksoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"En Esperanto, <i>‘takso’</i> estas substantivigo de la verbo <i>‘taksi’</i> (angle: <i>assess</i>). Ne konfuzu tion kun <i>‘imposto’</i> (deviga pago de civitano al la ŝtato, angle: <i>tax</i>).",
		"Por domoj kun marvido oni pagas altajn <span style=\"color: #ff0000\">grundotaksojn</span> (grundimpostojn)."
	],
	"£:BASE-preni&\"<tank.*>\"": [
		"£:BASE-preni&\"<tank.*>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘tanki’</i> estas verbigo de la substantivo <i>‘tanko’</i> (batalaŭto). Benzinon on <i>prenas</i> aŭ <i>enmetas,</i> ne <i>tankas.</i> Kan oni metas ĝin en <i>benzinujon,</i> ne <i>tankon.</i> Povas temi pri (germana) falsa amiko.",
		"Mi <span style=\"color: #ff0000\">tankis</span> (prenis) 30 litrojn da benzino.<br>\n<br>\nLa aŭto havas 50-litran <span style=\"color: #ff0000\">tankon</span> (benzinujon)."
	],
	"£:BASE-televidilo&\"<televidoj?n?>\"": [
		"£:BASE-televidilo&\"<televidoj?n?>\"",
		"Troa sufikso",
		"La vorto <i>‘televido’</i> celas televidon kiel sistemo, teknologio aŭ programaro. Por la aparato prefere uzu <i>‘televidilo’.</i>",
		"Li aĉetis 40-colan <span style=\"color: #ff0000\">televidon</span> (televidilon)."
	],
	"£:BASE-enhavi&\"<ten.*>\"": [
		"£:BASE-enhavi&\"<ten.*>\"",
		"Falsa amiko",
		"Oni <i>‘tenas’</i> objekton per la manoj, en la brakoj aŭ en certa loko. En Esperanto, la vorto ne havas la senco de <i>‘havi’</i> aŭ <i>‘enhavi’.</i> Povas temi pri (hispana) falsa amiko.",
		"La vortaro <span style=\"color: #ff0000\">tenas</span> (enhavas) 50.000 vortojn."
	],
	"£:BASE-tiraneco&\"<tiranismoj?n?>\"": [
		"£:BASE-tiraneco&\"<tiranismoj?n?>\"",
		"Malĝusta sufikso",
		"Verŝajne vi celas <i>‘tiraneco’,</i> do econ de persono aŭ sistemo. 'Tiranismo’ estus ideologio. La aktuala PIV nur proponas <i>‘tiraneco’,</i> kaj ne plu havas la arkaikan <i>‘tiranismo’,</i> kaj ReVo eĉ difinas <i>‘tiraneco’</i> kiel ‘politika sistemo’, kio ja estas pli \"isma\" ol \"trajto de persono\". Lingvohelpilo rekomendas, ke vi nepre uzu <i>‘tiraneco’</i>, kie temas pri persono <i>(lia tiraneco)</i>, kaj pripensu vian preferon, kie temas pri la abstrakta sistemo aŭ agado kun tiranaj trajtoj <i>(ribeli kontraŭ tiranismo/tiraneco kaj subpremo)</i>.",
		"La popolo ne plu eltenis lian <span style=\"color: #ff0000\">tiranismon</span> (tiranecon)."
	],
	"£:BASE-vojlinio&\"<trajektoj?n?>>\"": [
		"£:BASE-vojlinio&\"<trajektoj?n?>>\"",
		"Neologismo / falsa amiko",
		"La vorto <i>‘trajekto’</i> ne oficiale ekzistas en Esperanto. Jes ekzistas <i>‘trajektorio’,</i> kun la signifo de ‘ĵetlinio’ aŭ ‘(pasiva) fluglinio’. Sed verŝajne vi celas <i>‘vojlinio’</i> aŭ <i>‘veturlinio’.</i> Pripensu ĉu vi volas uzi neoficialan neologismon aŭ alian, kunmetitan vorton.",
		"La Gansu-Koridoro estis la cxefa <span style=\"color: #ff0000\">trajekto</span> (vojlinio) de Silka Vojo ."
	],
	"£:BASE-bagatela&\"<trivialaj?n?>\"": [
		"£:BASE-bagatela&\"<trivialaj?n?>\"",
		"Konfuzebla vortoparo",
		"<i>'Triviala’</i> signifas ‘aĉe vulgara’, sed ĉi tie vi verŝajne celas <i>‘bagatela’,</i> kun la senco ‘malgrava/malkonsiderinda’.",
		"La artikolo nur enhavas <span style=\"color: #ff0000\">trivialajn</span> (bagatelajn) informojn."
	],
	"£:BASE-farigxi&\"<turnigx.*>\"": [
		"£:BASE-farigxi&\"<turnigx.*>\"",
		"Falsa amiko",
		"En Esperanto, <i>‘turniĝi’</i> signifas ‘rondiri surloke’ aŭ ‘ŝanĝi direkton’. Estas (angla) falsa amiko uzi la vorton kun la signifo de <i>‘fariĝi’</i> (angle: <i>become</i>)<i>.</i>",
		"La tankatako <span style=\"color: #ff0000\">turniĝis</span> (fariĝis) kompleta katastrofo.<br>\n<br>\nLi hieraŭ <span style=\"color: #ff0000\">turniĝis</span> (fariĝis) 50."
	],
	"£:BASE-tribunuso": [
		"£:BASE-tribunuso",
		"Konfuzebla vortogrupo",
		"'Tribuno’ estas podio por oratoro aŭ galerio por spektantoj, do loko. Dume, tribunalo estas (jura) evento. <i>‘Tribunuso’</i> estas histori, romia ofico.",
		"<i>La dizertintoj estis juĝitaj en armea</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunalo).</i><br>\n<br>\n<i>La juna</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunuso) venis el nobela familio.</i>"
	],
	"£:BASE-dizerti": [
		"£:BASE-dizerti",
		"Falsa amiko",
		"En Esperanto, <i>‘dezerti’</i> estas verbigo de <i>‘dezerto’</i> (angle: <i>desert</i>), foje uzata kun la signifo de ‘esti senhoma’, por strato, placo, kvartalo ktp. Uzu <i>‘dizerti’</i> por soldato, kiu forlasas senpermese sian armeon.",
		"Fine de la milito, multaj soldatoj <span style=\"color: #ff0000\">dezertis</span> (dizertis)."
	],
	"£:BASE-variajxo&\"<variecoj?n>\"": [
		"£:BASE-variajxo&\"<variecoj?n>\"",
		"Malĝusta sufikso",
		"'Varieco’ estas la eco de esti varia – varia aĵa aŭ afero en la senco de ‘alia sed simila’ estas <i>‘variaĵo’</i> (de ekz. floro, trinkaĵo aŭ melodio)<i>.</i> Notu, ke la angla ‘<i>variety’</i> povas signifi aŭ unu aŭ la alian.",
		""
	],
	"£:BASE-odori": [
		"£:BASE-odori",
		"Konfuzebla vortoparo",
		"<i>'Odori’</i> estas netransitiva, <i>‘flari’</i> transitiva. Floro odoras, sed oni flaras floron.",
		"La kapreolo <span style=\"color: #ff0000\">odoris</span> (flaris) nin kaj forkuris."
	],
	"£:lauxlonge=de": [
		"£:lauxlonge=de",
		"Mankanta prepozicio",
		"<i>'Laŭlonge’</i> ne estas prepozicio, sed adverbo. Oni uzas <i>‘de’</i> post ĝi por alligi substantivon.",
		"Ili veturis <span style=\"color: #ff0000\">laŭlonge</span> (laŭlonge de) la marbordo."
	],
	"£:tia&\"<tio>\"": [
		"£:tia&\"<tio>\"",
		"Tabelvorto",
		"Ne eblas havi du o-tabelvortojn sinsekve. Unu devas estia adjektiva.",
		"Mi neniam antaŭe vidis ion <span style=\"color: #ff0000\">tion</span> (tian)."
	],
	"£:sursxuti&\"<sxut.*>\"": [
		"£:sursxuti&\"<sxut.*>\"",
		"Transitiveco",
		"'Ŝuti’ estas transitiva kaj ne uzeblas kun akuzativa objektoi. Ĉi tie vi verŝajne celas <i>‘surŝuti’.</i>",
		""
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
			let vs = v.split(/\s+/);
			let ana = [];
			for (let i=0 ; i<vs.length ; ++i) {
				ana.push(new RegExp(vs[i]));
			}
			g_marks.types_complex[fk].push({
				ana: ana,
				exp: k,
			});
		}
	}
	g_options_default.types["£new"] = 0;
	g_options_default.types["£proper"] = 0;
}

orderMarkings();
