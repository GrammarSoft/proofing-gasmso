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
import * as s from './shared.js';
'use strict';

s.g.marks.yellow = {
	'£proper': '£proper',
	'£new': '£new',
	'£abbreviation': '£abbreviation',
	'£foreign': '£foreign',
	'£compound': '£compound',
};

s.g.marks.purple = {
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

s.g.marks.blue = {
	'£-io': '£-io',
	'£-iu': '£-iu',
	'£PREADD:subject': '£PREADD:subject',
	'£PRESWAP': '£PRESWAP',
	'£adj': '£adj',
	'£ado': '£ado',
	'£adv': '£adv',
	'£akt': '£akt',
	'£an': '£an',
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
	'£pl-sem': '£pl-sem',
	'£poss': '£poss',
	'£question': '£question',
	'£refl': '£refl',
	'£sg': '£sg',
	'£sg-sem': '£sg-sem',
	'£u': '£u',
	'£ul': '£ul',
	'£us': '£us',
	'£vfin': '£vfin',
	'£warning': '£warning',
	'£x-etype-inner-pl': '£x-etype-inner-pl',
};

s.g.marks.types_comma = [];
s.g.marks.types_grammar = [];

s.g.marks.types = {
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
	"£x-etype-affix": [
		"£x-etype-affix",
		"Malĝusta afikso",
		"La vorto estas teorie ebla, sed Lingvohelpilo pensas, ke vi elektis malĝustan afikson.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/prefiksoj\">prefiksoj</a> kaj <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> .",
		""
	],
	"£x-etype-affix&\"<.*ig.*>\"&\"[a-z]+um[a-z]+\"": [
		"£x-etype-affix&\"<.*ig.*>\"&\"[a-z]+um[a-z]+\"",
		"Malĝusta sufikso: -ig → -um",
		"Post substantiva aŭ adjektiva radiko ‘x’ la sufikso ‘-ig’ signifas ‘igi esti x’. Ĉi tie ne temas pri tio, sed pri ‘provizi/trakti per x’. Konsideru uzi ‘-um’ anstataŭ ‘-ig’.<br>\n<br>\nNotu tamen, ke ekzistas multaj esceptoj, kie la tradicia lingvouzo tamen ne sekvas tiun distingon kaj \"erare\" uzas ‘-ig’ kun ĝuste la signifo de ‘provizi per’, ekz. <i>‘subtekstigi/subtitoligi’</i> (de filmoj).<br>\n<br>\nNotu plie, ke ekzistas teknika sufikso, ‘-iz’, kun la signifo de ‘provizi per’ kaj uzata precipe en kemio kaj por materialoj kaj surfacoj, ekz. <i>‘elektrizi’, ‘kapitalizi’, ‘asfaltizi’, ‘nikelizi’.</i>",
		"Ŝi <span style=\"color: #ff0000\">sunkremigis</span> (sunkremumis) la infanojn."
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
		"<span style=\"color: #ff0000\">kapelano</span> [vikario]<br>\n<br>\n<span style=\"color: #ff0000\">falombrelo</span> [paraŝuto]<br>\n<br>\n<span style=\"color: #ff0000\">alesti</span> [ĉeesti]"
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
		"E-finaĵo post AŬ",
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
	"£x-etype-multiword": [
		"£x-etype-multiword",
		"Plurvorta eraro",
		"Tiu eraro koncernas vortgrupon. Povas esti ligitaj erarmarkoj ĉe apuda(j) vorto(j).",
		"Li <span style=\"color: #ff0000\">daŭrigis viziti</span> (plue vizitis) la maljunulinon."
	],
	"£x-etype-apostrophe": [
		"£x-etype-apostrophe",
		"Mankanta apostrofo",
		"En Esperanto, oni uzas apostrofon por marki la forlason de la fina vokalo en la artikolo <i>(l’ akvo)</i> aŭ la substantiva ‘-o’ <i>(dum temp’ eterna)</i>. Uzi \"nudan\" radikon sen tiu apostrofo estas eraro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/apostrofo\">apostrofo</a>.",
		"Flavgajas <span style=\"color: #ff0000\">foliar</span> [foliar’] de helianto<br>\n<br>\nHo mia <span style=\"color: #ff0000\">kor</span> [kor’], kiam venos <span style=\"color: #ff0000\">liber</span> [liber’]"
	],
	"£x-etype-number": [
		"£x-etype-number",
		"Nombro-formato",
		"La fundamento ne enhavas regulojn pri nombro-formato, do ĉi tie ne temas pri vera eraro, sed pri rekomendo de Lingvohelpilo, kiun vi cetere laŭplaĉe povas malŝalti en la agordoj:<br>\n<br>\n* En ne-entjeraj nombroj, uzu komon (ne punkton) por apartgi la entjeran parton de la decimala. Tio estas la tradicia uzo kaj rekomendata de <i>Monato:</i> 0,25 = 1/4<br>\n<br>\n* Uzu punkton (ne komon) por marki cifero-triopojn en grandaj nombroj: <i>5.352.714.</i> Monato rekomendas nerompeblan spacon, sed ĝi ne videblas kiel tia. Lingvohelpilo rekomendas punkton.<br>\n<br>\n<i>*</i> Uzu spacon antaŭ ‘%: <i>70,5 % de la loĝantaro</i><br>\n<br>\n* Libervole uzu streketon inter nombro kaj la adjektiva gramatika finaĵo: <i>Frederiko la 3a / 3-a, La 5an / 5-an de septembro</i>",
		""
	],
	"£x-etype-hyphen": [
		"£x-etype-hyphen",
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
		"La eraro temas pri uskleco, do ĉu la vorto literumiĝas majuskle aŭ minuskle.<br>\n<br>\nOni uzas majusklon komence de teksto aŭ frazo, kaj eblas uzi majusklon por ĉiu nova punkto en vertikala listo.<br>\n<br>\n<b>Nomoj</b> skribiĝas kun majusklo, sendepende de ĉu temas pri nomoj de personoj, bestoj, landoj, organizaĵoj, ŝipoj ktp. En nomoj konsistantaj el pluraj partoj oni uzas majusklon por la unua vorto kaj por ĉiuj semantike pezaj vortoj, normale substantivoj kaj adjektivoj. En titoloj de libroj, filmoj ktp. oni foje nur majuskligas la unuan vorton, precipe se temas pri pli longaj titoloj kun verboj kaj adverboj.<br>\n<br>\nOni normale ne uzas majusklon por la esperantaj nomoj de etnioj, besto- aŭ plantospecoj, manĝaĵoj, trinkaĵoj ktp. <i>(zebro, kverko, cidro).</i><br>\n<br>\nKelkaj homoj, laŭ angla tradicio, uzas majusklon por <b>geografiaj, naciaj kaj etniaj adjektivoj</b>, sed tio ne reflektas la originan esperantlingvan uzon. Kiam nomoj uziĝas kiel partoj en derivaĵoj aŭ kunmetaĵoj, ili ne havas majusklon <i>(marksismo, usondevena),</i> krom se la nomo videblas kiel tuto kaj estas markita per streketo.<br>\n<br>\nEblas – nedevige – uzi majusklon por <b>honoraj titoloj</b> kaj religiaj konceptoj <i>(Reĝino Elizabeta, Dio, la Virgulino, la Profeto),</i> sen normalaj titoloj kaj alparoloj estas minusklaj <i>(direktoro Jensen, onklino Maja, mia kara, vi).</i><br>\n<br>\nLiter-mallongigoj de plurpartaj nomoj kutime estas tute majusklaj <i>(UEA, UN).</i> Esceptoj estas kelkaj mallongigoj transprenitaj el aliaj lingvoj kun literuma fonetiko <i>(Usono, Komsomolo).</i><br>\n<br>\nLegu pli en la konvencioj de MONATO pri <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#pers\">propraj nomoj</a> kaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#maju\">uskleco</a>.",
		"La <span style=\"color: #ff0000\">Franca</span> [franca] popolo"
	],
	"£x-etype-adv-pl": [
		"£x-etype-adv-pl",
		"Pluralo en adverbo",
		"Ne eblas uzi pluralan -j en adverboj.",
		""
	],
	"£x-etype-inner-pl": [
		"£x-etype-inner-pl",
		"Pluralo meze de vorto",
		"Ne eblas uzi pluralan -oj en kunmetaĵoj. Simple uzu radikon sen -oj, aŭ – antaŭ alia radiko – radikon kun liga -o.",
		"<span style=\"color: #ff0000\"><i>libr</i></span><span style=\"color: #ff0000\"><b><i>oj</i></b></span><span style=\"color: #ff0000\"><i>vendejoj</i></span><i> [libr|oj+vendejoj] →</i> <b><i>libro</i></b><i>vendejo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Sen</i></span><span style=\"color: #ff0000\"><i>har</i></span><span style=\"color: #ff0000\"><b><i>oj</i></b></span><span style=\"color: #ff0000\"><i>igi</i></span><i> [sen+har|oj+igi]→ sen</i><b><i>har</i></b><i>igi</i>"
	],
	"£x-etype-lc": [
		"£x-etype-lc",
		"Minusklo-eraro",
		"La vorto estis rekonita kiel nomo, sed skribita kun minusklo.",
		"Ĝirafoj vivas en <span style=\"color: #ff0000\">afriko</span> [Afriko]"
	],
	"£x-etype-mixed=number": [
		"£x-etype-mixed=number",
		"Miksaĵo el singularo kaj pluralo",
		"En tiu nomvorto parto indikas singularon, alia parto pluralon.",
		"Universal<span style=\"color: #ff0000\">a_</span>Kongres<span style=\"color: #ff0000\">oj</span> [Universalaj_Kongresoj]"
	],
	"£x-etype-mixed=case": [
		"£x-etype-mixed=case",
		"Miksaĵo el nominativo kaj akuzativo",
		"En tiu nomvorto parto indikas nominativon, alia parto akuzativon.",
		"Universal<span style=\"color: #ff0000\">a_</span>Kongres<span style=\"color: #ff0000\">on</span> [Universalan_Kongreson]"
	],
	"£x-etype-phon": [
		"£x-etype-phon",
		"Mankanta ligo-vokalo en kunmetaĵo",
		"Tiu vorto estas kunmetaĵo, kie la unua parto estas radika kaj finiĝas per konsonantoparo malfacile prononcebla antaŭ dua parto, kiu mem komenciĝas per konsonanto. Lingvohelpilo proponas enmeti substantivan -o kiel ligovokalon por faciligi la prononcon.",
		"<i>li</i><span style=\"color: #ff0000\"><i>br|f</i></span><i>orme → libroforme</i><br>\n<br>\n<i>e</i><span style=\"color: #ff0000\"><i>tn|l</i></span><i>ingvo → etnolingvo</i><br>\n<br>\n<i>a</i><span style=\"color: #ff0000\"><i>gl|p</i></span><i>lumo → agloplumo</i><br>\n<br>\n<i>tea</i><span style=\"color: #ff0000\"><i>tr|d</i></span><i>irektoro → teatrodirektoro</i><br>\n<br>\n<i>dese</i><span style=\"color: #ff0000\"><i>gn|m</i></span><i>aniero → desegnomaniero</i><br>\n<br>\n<i>li</i><span style=\"color: #ff0000\"><i>gn|str</i></span><i>uktura → lignostruktura</i>"
	],
	"£x-etype-poscomp": [
		"£x-etype-poscomp",
		"Malĝusta ligo-vokalo en kunmetaĵo",
		"Tiu vorto estas kunmetaĵo, kie la unua parto estas adjektivo kaj la dua substantivo. Kutime tia kombino estas skribita en du partoj. Por ebligi la kunmeton, la unua parto devas esti substantiva. Forigu la ligovokalon ‘-a’ inter la du partoj, aŭ uzu ‘-o’, depende de belsoneco.",
		"<span style=\"color: #ff0000\">rokobildoj</span> → rokbildoj"
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
	"": [
		"",
		"Transitiveco: ŝtopigo → ŝtopiĝo, stopado",
		"La vorto <i>‘ŝtopigo’</i> preskaŭ ĉiam estas eraro. Se temas pri trafiko aŭ fluo, vi verŝajne celis la ne-transitivan <i>‘ŝtopiĝo’</i>. Sed en la kunteksto de motoro aŭ maŝino ankaŭ povas esti, ke temas pri <i>‘stopado’</i> (haltigo) aŭ <i>‘stopiĝo’</i> (moviĝoĉeso).",
		"La akcidento kaŭzis severan <span style=\"color: #ff0000\">ŝtopigon</span> (ŝtopiĝon) en la trafiko."
	],
	"£:BASE-...": [
		"£:BASE-...",
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
	"£x-etype-dis)": [
		"£x-etype-dis)",
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
		"Malgrava aŭ necerta eraro en vorto kiu ekzistas kiel tia",
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
		"Lingvohelpilo ne rekonis tiun vorton kiel Esperanto-vorton, sed kredas, ke ĝi estas (akceptebla) fremdvorto. Eble temas pri pruntesprimo el alia lingvo aŭ pri citaĵo. Se temas pri unuopa vorto, eble pripensu, ĉu ekzistas esperantlingva esprimo, kiun vi povus uzi anstataŭe.",
		"Fracking"
	],
	"£abbreviation": [
		"£abbreviation",
		"Mallongigo",
		"Lingvohelpilo pensas, ke tio estas mallongigo, kaj ne trovis konfirmeblan eraron.",
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
	"£no-hyphen-maybe": [
		"£no-hyphen-maybe",
		"Superflua streketo ene de vorto",
		"Ĉi tie ne necesas streketo. Ŝajne ĝi simple markas limon inter du partoj de kunmetaĵo. Tio foje igas longan vorton pli komprenebla kaj ne estas vera eraro, sed normale estas superflua.",
		"<span style=\"color: #ff0000\">energi-fonto</span> [energifonto]<br>\n<br>\n<span style=\"color: #ff0000\">transmisi-rapideco</span> [transmisirapideco]"
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
		"La eraro temas pri uskleco, do ĉu la vorto literumiĝas majuskle aŭ minuskle.<br>\n<br>\nOni uzas majusklon komence de teksto aŭ frazo, kaj eblas uzi majusklon por ĉiu nova punkto en vertikala listo.<br>\n<br>\n<b>Nomoj</b> skribiĝas kun majusklo, sendepende de ĉu temas pri nomoj de personoj, bestoj, landoj, organizaĵoj, ŝipoj ktp. En nomoj konsistantaj el pluraj partoj oni uzas majusklon por la unua vorto kaj por ĉiuj semantike pezaj vortoj, normale substantivoj kaj adjektivoj. En titoloj de libroj, filmoj ktp. oni foje nur majuskligas la unuan vorton, precipe se temas pri pli longaj titoloj kun verboj kaj adverboj.<br>\n<br>\nOni normale ne uzas majusklon por la esperantaj nomoj de etnioj, besto- aŭ plantospecoj, manĝaĵoj, trinkaĵoj ktp. <i>(zebro, kverko, cidro).</i><br>\n<br>\nKelkaj homoj, laŭ angla tradicio, uzas majusklon por <b>geografiaj, naciaj kaj etniaj adjektivoj</b>, sed tio ne reflektas la originan esperantlingvan uzon. Kiam nomoj uziĝas kiel partoj en derivaĵoj aŭ kunmetaĵoj, ili ne havas majusklon <i>(marksismo, usondevena),</i> krom se la nomo videblas kiel tuto kaj estas markita per streketo.<br>\n<br>\nEblas – nedevige – uzi majusklon por <b>honoraj titoloj</b> kaj religiaj konceptoj <i>(Reĝino Elizabeta, Dio, la Virgulino, la Profeto),</i> sen normalaj titoloj kaj alparoloj estas minusklaj <i>(direktoro Jensen, onklino Maja, mia kara, vi).</i><br>\n<br>\nLiter-mallongigoj de plurpartaj nomoj kutime estas tute majusklaj <i>(UEA, UN).</i> Esceptoj estas kelkaj mallongigoj transprenitaj el aliaj lingvoj kun literuma fonetiko <i>(Usono, Komsomolo).</i><br>\n<br>\nLegu pli en la konvencioj de MONATO pri <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#pers\">propraj nomoj</a> kaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#maju\">uskleco</a>.",
		"<span style=\"color: #ff0000\">li</span> estas en <span style=\"color: #ff0000\">alasko</span> [Li estas en Alasko]"
	],
	"£lower": [
		"£lower",
		"Nenecesa majuskligo",
		"La eraro temas pri uskleco, do ĉu la vorto literumiĝas majuskle aŭ minuskle.<br>\n<br>\nOni uzas majusklon komence de teksto aŭ frazo, kaj eblas uzi majusklon por ĉiu nova punkto en vertikala listo.<br>\n<br>\n<b>Nomoj</b> skribiĝas kun majusklo, sendepende de ĉu temas pri nomoj de personoj, bestoj, landoj, organizaĵoj, ŝipoj ktp. En nomoj konsistantaj el pluraj partoj oni uzas majusklon por la unua vorto kaj por ĉiuj semantike pezaj vortoj, normale substantivoj kaj adjektivoj. En titoloj de libroj, filmoj ktp. oni foje nur majuskligas la unuan vorton, precipe se temas pri pli longaj titoloj kun verboj kaj adverboj.<br>\n<br>\nOni normale ne uzas majusklon por la esperantaj nomoj de etnioj, besto- aŭ plantospecoj, manĝaĵoj, trinkaĵoj ktp. <i>(zebro, kverko, cidro).</i><br>\n<br>\nKelkaj homoj, laŭ angla tradicio, uzas majusklon por <b>geografiaj, naciaj kaj etniaj adjektivoj</b>, sed tio ne reflektas la originan esperantlingvan uzon. Kiam nomoj uziĝas kiel partoj en derivaĵoj aŭ kunmetaĵoj, ili ne havas majusklon <i>(marksismo, usondevena),</i> krom se la nomo videblas kiel tuto kaj estas markita per streketo.<br>\n<br>\nEblas – nedevige – uzi majusklon por <b>honoraj titoloj</b> kaj religiaj konceptoj <i>(Reĝino Elizabeta, Dio, la Virgulino, la Profeto),</i> sen normalaj titoloj kaj alparoloj estas minusklaj <i>(direktoro Jensen, onklino Maja, mia kara, vi).</i><br>\n<br>\nLiter-mallongigoj de plurpartaj nomoj kutime estas tute majusklaj <i>(UEA, UN).</i> Esceptoj estas kelkaj mallongigoj transprenitaj el aliaj lingvoj kun literuma fonetiko <i>(Usono, Komsomolo).</i><br>\n<br>\nLegu pli en la konvencioj de MONATO pri <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#pers\">propraj nomoj</a> kaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#maju\">uskleco</a>.",
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
	"£pl&\"<.*’>\"": [
		"£pl&\"<.*’>\"",
		"Pluralo kun apostrofo",
		"Ne eblas uzi apostrofitan substantivon kun plurala senco. Necesas uzi normalan -o(j)-formon.",
		"Falis ruĝaj <span style=\"color: #ff0000\">foli’</span> (folioj)"
	],
	"£pl-sem": [
		"£pl-sem",
		"Plurala signifo",
		"Ĉi tie la semantiko de la kunteksto postulas pluralon. En kvanta kunteksto (ekz. Post <i>‘da</i>’), se ne temas pri mas-vorto, sed pri nombreblaĵo, uzu pluralon. Kelkaj aĵoj preskaŭ ĉiam aperas en multaj ekzempleroj kune (ekz. pizoj aŭ faboj) aŭ en paroj (ekz. okulvitroj). Pripensu, ĉu vi vere celis nur 1 ekzempleron.",
		"<i>Sur la tegmento sidis multe da</i> <span style=\"color: #ff0000\"><i>kato</i></span><i> (katoj).</i><br>\n<br>\n<i>Tofuo estas manĝaĵo farita el</i> <span style=\"color: #ff0000\"><i>sojfabo</i></span><i> (sojfaboj).</i>"
	],
	"£xor>pl": [
		"£xor>pl",
		"Interdependa singularo/pluralo",
		"En substantiva vortgrupo, ĉiuj partoj devas esti samaj – aŭ ĉiuj pluralaj aŭ ĉiuj singularaj. Elektu, ĉu vi volas pluraligi ĉi tiun adjektivon, aŭ singularigi la substantivon apude.",
		""
	],
	"£sg": [
		"£sg",
		"Singularo",
		"Vi uzis pluralon anstataŭ singularo, forigu la finaĵon <i>‘-j’</i>.<br>\n<br>\nLingvohelpilo trovis konflikton kun alia, interdependa vorto, kiu indikas singularon. Notu ke interdependaj substantivecaj kaj adjektivecaj vortoj (a-vortoj, numeraloj, determinaj pronomoj) devas agordi en nombro, do ne eblas diri ‘<i>granda domoj’,</i> devas esti aŭ <i>‘granda domo’</i> au <i>‘grandaj domoj’. S</i>e vi ne volas ŝanĝi la markitan singularan vorton, konsideru evantuale fari la inversan ŝanĝon (al singularo) en interdependa vorto.<br>\n<br>\nEn Esperanto, la plurala finaĵo estas ‘-j’. Legu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/singularo_pluralo\">singularo kaj pluralo</a>.",
		"Li estas <span style=\"color: #ff0000\">junaj</span> [li estas juna]<br>\n<br>\nĈiu el ili estis <span style=\"color: #ff0000\">kontentaj</span> [kontenta]<br>\n<br>\nLa polico estis <span style=\"color: #ff0000\">armitaj</span> [armita]"
	],
	"£sg-sem": [
		"£sg-sem",
		"Singulara signifo",
		"Ne uzu pluralon kun singulara signifo. Pro historiaj kialoj, en multaj lingvoj, certaj \"par-simetriaj\" aŭ \"mult-eraj\" vortoj kiel <i>‘kalsono’, ‘pantalono’, ‘mono’</i> kaj <i>‘statuto’</i> estas uzataj plurale kun singulara signifo (1 vestaĵo, 1 regularo), sed estas falsamika uzo fari tion en Esperanto.<br>\n<br>\nEscepto, kie ankaŭ Esperanto uzas pluralon, estas <i>‘okulvitroj’.</i>",
		"<i>Li vestis sin per</i> <span style=\"color: #ff0000\"><i>blankaj kalsonoj</i></span><i> (blanka kalsono) kaj</i> <span style=\"color: #ff0000\"><i>nigraj pantalonoj</i></span><i> (nigra pantalono).</i><br>\n<br>\n<i>La asocio ricevis</i> <span style=\"color: #ff0000\"><i>novajn statutojn</i></span><i> (novan statuton.</i><br>\n<br>\n<i>Mi elspezis</i> <span style=\"color: #ff0000\"><i>miajn tutajn monojn</i></span><i> (mian tutan monon).</i>"
	],
	"£xor>sg": [
		"£xor>sg",
		"Interdependa singularo/pluralo",
		"En substantiva vortgrupo, ĉiuj partoj devas esti samaj – aŭ ĉiuj pluralaj aŭ ĉiuj singularaj. Elektu, ĉu vi volas singularigi ĉi tiun adjektivon, aŭ pluraligi la substantivon apude.",
		""
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
	"£acc&\"<[A-Za-z][a-z-]+’>\"": [
		"£acc&\"<[A-Za-z][a-z-]+’>\"",
		"Akuzativo ĉe apostrofo",
		"Ne eblas aldoni gramatikajn finaĵojn al substantivo, kiu finiĝas per apostrofo. Uzu la ‘-o’-formon de la vorto.",
		"Koro batas, <span style=\"color: #ff0000\">flor’</span> (floron) mi ŝatas."
	],
	"£acc&&N<PRED": [
		"£acc&&N<PRED",
		"Akuzativo en atributa predikativo",
		"Predikativaj post-atributoj, izolitaj per komo aŭ parentezo, agordas same kiel normalaj antaŭ- aŭ post-atributoj.<br>\n<br>\n<i>Li ŝatas frukt</i><span style=\"color: #008000\"><b><i>ajn</i></b></span><i> kuk</i><b><i>ojn</i></b><i>.</i> (antaŭ-atributo)<br>\n<br>\n<i>Li ŝatas kuk</i><b><i>ojn</i></b><i> frukt</i><span style=\"color: #008000\"><b><i>ajn</i></b></span><i>.</i> (post-atributo)<br>\n<br>\n<i>Li ŝatas kuk</i><b><i>ojn</i></b><i>, aparte frukt</i><b><i>ajn</i></b><i>.</i> (predikativa atributo post komo)<br>\n<br>\n<i>Li ŝatas kuk</i><b><i>ojn</i></b><i> (frukt</i><span style=\"color: #008000\"><b><i>ajn</i></b></span><i>, krem</i><span style=\"color: #008000\"><b><i>ajn</i></b></span><i> kaj ali</i><span style=\"color: #008000\"><b><i>ajn</i></b></span><i>).</i> (predikativaj atributoj inter krampoj)<br>\n<br>\nPrincipe, tio validas ne nur por adjektivaj, sed ankaŭ por substantivaj predikativoj:<br>\n<br>\n<i>Li havas du hund</i><b><i>ojn</i></b><i>, grand</i><span style=\"color: #008000\"><b><i>ajn</i></b></span><i> best</i><span style=\"color: #0000ff\"><b><i>ojn</i></b></span><i> kun timigaj dentoj.</i><br>\n<br>\nPrecipe kun parentezo, homoj tamen ne ĉiam sekvas tiun regulon:<br>\n<br>\n<i>En 1910, ĝi havis 1657 enloĝant</i><b><i>ojn</i></b><i> (ruman</i><span style=\"color: #ff0000\"><b><i>oj</i></b></span><i>, hungar</i><span style=\"color: #ff0000\"><b><i>oj</i></b></span><i>, german</i><span style=\"color: #ff0000\"><b><i>oj</i></b></span><i>).</i><br>\n<br>\nNotu, ke agordo nur okazas, se la predikativa substantivo estas sinonimo, ekzemplo aŭ atributo, do referencas la saman aĵon aŭ aferon. Por alitipaj parentezaj informoj, simple uzu nominativon:<br>\n<br>\n<i>Ŝi gajnis kaj oran medal</i><b><i>on</i></b><i> (dorsnaĝad</i><b><i>o</i></b><i>) kaj arĝentan medal</i><b><i>on</i></b><i> (turplonĝad</i><b><i>o</i></b><i>).</i>",
		""
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
		"Mankas akuzativo post transitiva adverbo, aldonu -n! Kelkaj adverboj <i>(inkluzive, ekskluzive, koncerne, rilate)</i>, kun verbeca signifo, estas transitivaj kaj postulas akuzativon en rekta komplemento. Se la komplemento ne estas rekta, sed prepozicia, ne sekvas akuzativo, sed nominativo <i>(inkluzive de, rilate al).</i>",
		"Mi telefonas koncerne<span style=\"color: #ff0000\"> via kunlaboropropono</span> [vian kunlaboroproponon]<br>\n<br>\nInkluzive la <span style=\"color: #ff0000\">gastoj</span> [gastojn], ni estas 11 personoj en la domo"
	],
	"£acc-komp": [
		"£acc-komp",
		"Akuzativo en komparo",
		"La komparaĵo post <i>‘ol’</i> agordas kun la kazo de la vorto, kun kiu oni komparas ĝin. Do kiam oni komparas kun la objekto, devas esti akuzativo:<br>\n<br>\n<i>Mi ŝatas</i> <span style=\"color: #0000ff\"><i>fiŝ</i></span><span style=\"color: #0000ff\"><b><i>on</i></b></span><i> pli ol</i> <span style=\"color: #0000ff\"><i>viand</i></span><span style=\"color: #0000ff\"><b><i>on</i></b></span><i>.</i><br>\n<br>\nSed se oni komparas kun la subjekto, devas esti nominativo:<br>\n<br>\n<span style=\"color: #0000ff\"><i>Esperant</i></span><span style=\"color: #0000ff\"><b><i>o</i></b></span><i> taŭgas pli bone por verki poemojn ol eĉ la gepatra</i> <span style=\"color: #0000ff\"><i>lingv</i></span><span style=\"color: #0000ff\"><b><i>o</i></b></span><i>.</i><br>\n<br>\nLa vorto <i>‘ol’</i> en tiuj frazoj funkcias pli kiel konjunkcio ol kiel prepozicio, kvazaŭ enkonduko de frazeto kun forlasita verbo: <i>‘ol (mi ŝatas) viandon’, ‘ol (taŭgas) la gepatra lingvo’.</i><br>\n<br>\n<i>Notu, ke post ‘anstataŭ’ tiu \"konjunkcia\" uzo estas libervola – oni povas aŭ uzi normalan post-prepozician nominativon aŭ sekvi la kazon de la anstataŭaĵo:</i><br>\n<br>\n<i>Hodiaŭ, mi volas trinki teon anstataŭ kafo(n).</i><br>\n<br>\nTria kandidato por ĉi tiu regulo estas <i>‘krom’</i>, sed la konjunkcia uzo estas malpli ofta, menciita en PMEG kaj ReVo, sed ne en PIV, kiu traktas la vorton kiel simplan prepozicion. Zamenhof ne uzis akuzativon post <i>‘krom’</i>, sed jes ekz. <i>‘al-’</i> komplementojn.",
		"Li spektas serialojn pli ol <span style=\"color: #ff0000\">filmoj</span> (filmojn).<br>\n<br>\nMi volas manĝi ion alian ol <span style=\"color: #ff0000\">salato</span> (salaton)."
	],
	"£vfin": [
		"£vfin",
		"Finitivo",
		"Vi uzis infinitivon (i-formon), kie devas esti finita verboformo (s-formo aŭ u-formo). Infinitivon eblas uzi nur post helpverbo <i>(li</i> <i>volas/povas/rajtas</i><i></i> <b><i>fari</i></b><i> longan ferion),</i> aŭ anstataŭ substantivo <i>(</i><b><i>savi</i></b><i> la klimaton estas malfacila tasko).</i><br>\n<br>\nEn Esperanto, infinitivoj ne permesas subjekton<i> (*ne eblas la homaro savi la klimaton)</i>, do kun subjekto uzu finitivon <i>(ne eblas, ke la homaro savos la klimaton).</i><br>\n<br>\nNur malmultaj prepozicioj estas uzeblaj antaŭ infinitivo: <i>por, anstataŭ, krom, sen</i> kaj la plurvortaĵo <i>antaŭ ol.</i> Post aliaj prepozicioj uzu substantivigon kun <i>-ado</i> aŭ<i></i> simpla <i>-o (post</i> <span style=\"color: #ff0000\"><i>aldoni</i></span><i> salon → post aldonado/aldono de salo).</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (infinitivo kaj finitivo)",
		"Post 6 monatoj estis alia ŝtato kiu <span style=\"color: #ff0000\">transpreni</span> [transprenis] la EU-prezidantecon<br>\n<br>\nIli diskutis la aferon dum <span style=\"color: #ff0000\">manĝi</span> [dum ili manĝis]"
	],
	"£as": [
		"£as",
		"Nuntempo (as-tempo, prezenco)",
		"Konsideru uzi as-tempon (prezencon). As-tempo esprimas nunon, daŭron, aktualon, ĝeneralecon, validecon kaj realecon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (indikativo)",
		"Mi ne kredas, ke li <span style=\"color: #ff0000\">scipovu</span> [scipovas] la francan"
	],
	"£as&\"<.+u>\"": [
		"£as&\"<.+u>\"",
		"Nuntempo (-as) anstataŭ volitivo (-u)",
		"Konsideru uzi as-tempon (prezencon) ĉi tie. Povas temi pri falsamika uzo de -u laŭ la reguloj por (franca/hispana/itala/portugala) \"konjunktivo\".<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (indikativo)",
		"Ne eblas, ke virino <span style=\"color: #ff0000\">eniru</span> (eniras) la moskeon sen kaptuko.<br>\n<br>\nNe eblas, ke homo <span style=\"color: #ff0000\">transvivu</span> (transvivas) longe en tiu alteco."
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
		"Konsideru uzi u-finaĵon. La u-modalo montras deziron, ordonon, intencon aŭ celon, parolante pri estonta ago aŭ stato. Plej ofte ĝi estas uzata kiel imperativo, sen subjekto <i>(Donu al mi pli da vino!)</i> aŭ en ke-frazo en la supre menciitaj kontekstoj.<br>\n<br>\nNe apliku regulojn pri konjunktivo el aliaj lingvoj, kaj ne uzu volitivon post verbo esprimanta timon, dubon, promeson aŭ neadon. Uzu finitivon anstataŭ (-as, -os).<br>\n<br>\nNecesas atenti pri la diferenco inter kondicionalo kaj volitivo, speciale se ambaŭ respondas al konjunktivo en la gepatra lingvo. Uzu kondicionalon, se eblas meti <i>‘se’</i> antaŭ la (sub)frazon, kaj volitivon, se eblas meti <i>‘ke’.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (volitivo)",
		"Mi volas, ke vi <span style=\"color: #ff0000\">estas</span> [estu] tre zorgema<br>\n<br>\nEstas necese, ke ni <span style=\"color: #ff0000\">faros</span> [faru] tion"
	],
	"£inf": [
		"£inf",
		"Infinitivo (i-moduso)",
		"Vi uzis finitan verbformon (s-formo aŭ u-formo), kie devas esti infinitivo (i-formo). Kontrolu la vortkuntekston! Ĉu troviĝas alia finita verbo tuj maldekstre? Ĉu la vorto estas ligita al (alia) infinitivo per <i>‘kaj’, ‘aŭ’</i> aŭ komo?<br>\n<br>\nOni tipe uzas infinitivon post helpverbo <i>(li</i> <i>volas/povas/rajtas</i><i></i> <b><i>fari</i></b><i> longan ferion),</i> aŭ anstataŭ substantivo <i>(</i><b><i>savi</i></b><i> la klimaton estas malfacila tasko).</i> Infinitivo ankaŭ povas aperi post kelkaj prepozicioj: <i>por, anstataŭ, krom, sen</i> kaj la plurvortaĵo <i>antaŭ ol.</i><br>\n<br>\nEn kelkaj lingvoj, kaj ankaŭ en Esperanto, ekzistas t.n. akuzativo-kun-infinitivo, strukturo, kie la objekto de la unua verbo fariĝas la laŭsenca \"subjekto\" de dua, infinitiva verbo:<br>\n<br>\n<i>Mi vidis/aŭdis/sentis</i><b><i></i> </b><span style=\"color: #0000ff\"><b><i>lin</i></b></span><b><i> alproksimiĝi</i></b><i>.</i><br>\n<br>\n<i>La reĝo petis/lasis/igis la</i> <span style=\"color: #0000ff\"><b><i>serviston</i></b></span><b><i> gustumi</i></b><i> la vinon unue.</i><br>\n<br>\nKrome, kelkaj substantivoj, kaj malmultaj adjektivoj, ankaŭ regas infinitivon:<br>\n<br>\n<i>La</i> <span style=\"color: #0000ff\"><b><i>provo</i></b></span><i></i> <b><i>ripari</i></b><i> la ponton fiaskis.</i><br>\n<br>\n<i>Ŝi ne estas</i> <span style=\"color: #0000ff\"><b><i>kapabla</i></b></span><i></i> <b><i>mensogi</i></b><i>.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (infinitivo)",
		"La politikistoj tion volas <span style=\"color: #ff0000\">ŝanĝos</span> [ŝanĝi]"
	],
	"£cond": [
		"£cond",
		"Kondicionalo (us-modalo)",
		"Konsideru uzi us-finaĵon. La us-modalo indikas ne-realecon, do ion imagitan. Por realaj kondiĉoj, uzu <i>-as.</i> Por samtempe esprimi ne-realon kaj tempon, necesas kombini <i>estus</i> kun participo, eluzante la tempan vokalon de la participa finaĵo <i>(Se mi est</i><b><i>us</i></b><i> malhelp</i><b><i>inta</i></b><i> tion, …).</i><br>\n<br>\nNecesas atenti pri la diferenco inter kondicionalo kaj volitivo, speciale se ambaŭ respondas al konjunktivo en la gepatra lingvo. Uzu kondicionalon, se eblas meti <i>‘se’</i> antaŭ la (sub)frazon, kaj volitivon, se eblas meti <i>‘ke’.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/verboj\">verboformoj</a> (kondicionalo)",
		"Se mi <span style=\"color: #ff0000\">estu</span> [estus] riĉa, mi <span style=\"color: #ff0000\">aĉetu</span> [aĉetus] domon ĉe la maro."
	],
	"£akt": [
		"£akt",
		"Aktivo",
		"Uzu aktivan participon anstataŭ pasiva.<br>\n<br>\nEsperantaj participoj estas aktivaj, se ili havas -n- inter la tempo-vokalo kaj la participa -t- <i>(ekz. -a</i><b><i>n</i></b><i>to, -i</i><b><i>n</i></b><i>taj, -o</i><b><i>n</i></b><i>te)</i>, pasivaj se ne <i>(ekz. -ato, -itaj, -ote).</i><br>\n<br>\nParticipo de netransitiva verbo ne povas esti pasiva. Simile participo de transitiva verbo ne povas esti pasiva, se ĝi regas rektan objekton.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		"<span style=\"color: #ff0000\">Laborate</span> [Laborante] en banko, li havas bonan salajron.<br>\n<br>\nEsperanto povus esti <span style=\"color: #ff0000\">gajnite</span> [gajninte] multe pli da parolantoj"
	],
	"£x-etype-akt": [
		"£x-etype-akt",
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
		"Konsideru uzi ‘<i>-ata’</i> anstataŭ ‘<i>-ita’</i>. Temas pri aspekto-diferenco. Pasivaj participo kun ‘<i>-ata’</i> esprimas procezan (malperfektivan) aspekton, dum pasiva participo kun ‘<i>-ita’</i> esprimas rezultan/perfektivan aspekton. Oni povas testi la diferencon per aldono de tempoadverbialo. Proceza aspekto permesas <i>‘dum tri horoj/tagoj/jaroj ktp.’,</i> sed ne <i>‘en dato/horo/jaro ktp.’,</i> kaj rezulta aspekto male. Ekz. eblas diri <i>‘la ponto estis detruita en 1944’,</i> sed ne <i>‘la ponto estis detruita dum dum 3 jaroj’,</i> ĉar oni perceptas detruadon kiel punktan eventon kun rezulto, ne kiel procezon kun daŭro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a> (Pasivo - participelekto).",
		"Ŝi estis plu kaj plu <span style=\"color: #ff0000\">amita</span> [amata]"
	],
	"£anta": [
		"£anta",
		"Malperfektiva/proceza aspekto en aktiva participo",
		"Konsideru uzi <i>‘-anta’</i> anstataŭ <i>‘-inta’.</i> Povas temi pri aspekto-diferenco. Participo kun -a- esprimas procezan (malperfektivan) aspekton, dum participo kun -i- esprimas rezultan/perfektivan aspekton. Oni povas testi la diferencon per aldono de tempoadverbialo. Proceza aspekto permesas <i>‘dum tri horoj/tagoj/jaroj’</i> ktp., sed ne <i>‘en dato/horo/jaro’</i> ktp. Estas male ĉe rezulta (-i-) aspekto.<br>\n<br>\n<i>Ili estis jam</i> <b><i>finmanĝintaj</i></b><i> la tutan kukon.</i><br>\n<br>\n<i>Ili estis ĉiam/daŭre</i> <span style=\"color: #ff0000\"><i>kverelintaj</i></span><i> (kverelantaj).</i><br>\n<br>\nNotu, ke foje ekzistas <i>tempa</i> klarigo por la uzo de -i-participo en normale \"malperfektivema\" verbo, precipe en kombino kun nea vorto aŭ la adverbo <i>‘jam’:</i><br>\n<br>\n<i>Ili jam estis</i> <b><i>kverelintaj</i></b><i> plurajn horojn.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		""
	],
	"£ita": [
		"£ita",
		"Perfektiva/rezulta aspekto (ita-aspekto)",
		"Konsideru uzi <i>‘-ita’</i> anstataŭ <i>‘-ata’</i>. Temas pri aspekto-diferenco. Pasivaj participo kun <i>‘-ata’</i> esprimas procezan (malperfektivan) aspekton, dum pasiva participo kun <i>‘-ita’</i> esprimas rezultan/perfektigan aspekton. Oni povas testi la diferencon per aldono de tempoadverbialo. Proceza aspekto permesas <i>‘dum tri horoj/tagoj/jaroj ktp’.</i> sed ne <i>‘en dato/horo/jaro ktp.’,</i> kaj rezulta aspekto male. Ekz. eblas diri <i>‘la ponto estis detruita en 1944’,</i> sed ne <i>‘la ponto estis detruita dum dum 3 jaroj’,</i> ĉar oni perceptas detruadon kiel punktan eventon kun rezulto, ne kiel procezon kun daŭro.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a> (Pasivo - participelekto).",
		"La bebo estis <span style=\"color: #ff0000\">naskata</span> [naskita] en januaro"
	],
	"£inta": [
		"£inta",
		"Perfektiva/rezulta aspekto en aktiva participo",
		"Konsideru uzi <i>‘-inta’</i> anstataŭ <i>‘-anta’.</i> Povas temi pri aspekto-diferenco. Participo kun -a- esprimas procezan (malperfektivan) aspekton, dum participo kun -i- esprimas rezultan/perfektivan aspekton. Oni povas testi la diferencon per aldono de tempoadverbialo. Proceza aspekto permesas <i>‘dum tri horoj/tagoj/jaroj’</i> ktp., sed ne <i>‘en dato/horo/jaro’</i> ktp. Estas male ĉe rezulta (-i-) aspekto.<br>\n<br>\n<i>Ili estis ĉiam/daŭre</i> <b><i>kverelantaj</i></b><i>.</i><br>\n<br>\n<i>Ili estis</i> <span style=\"color: #ff0000\"><i>finmanĝantaj</i></span><i> (finmanĝintaj) la tutan kukon.</i><br>\n<br>\n<i>Ili jam estis</i> <span style=\"color: #ff0000\"><i>manĝantaj</i></span><i> (manĝintaj) la tutan kukon.</i><br>\n<br>\nNotu, ke foje ekzistas <i>tempa</i> klarigo por la uzo de -a-participo eĉ en normale \"perfektivema\" verbo, precipe en kombino kun la adverboj <i>‘daŭre’</i> aŭ <i>‘ofte’:</i><br>\n<br>\n<i>Drinkinta tro, li daŭre estis stumbl</i><b><i>anta</i></b><b><i>.</i></b><i></i><br>\n<br>\n<i>Li estis ofte rekomenc</i><b><i>anta</i></b><i> sian frazon.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		""
	],
	"£ante": [
		"£ante",
		"Adverba participo (prezenco)",
		"Ĉi tie, anstataŭ prepozicio+infinitivo, taŭgas pli bone adverba participo por esprimi samtempecon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		"Tion mi provos atingi <span style=\"color: #ff0000\">per ekzameni</span> kelkajn slangajn esprimojn [… ekzamenante kelkajn slangajn esprimojn]"
	],
	"£inte": [
		"£inte",
		"Adverba participo (preterito)",
		"Ĉi tie, anstataŭ prepozicio+infinitivo, taŭgas pli bone adverba participo por esprimi antaŭ-tempecon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		"<span style=\"color: #ff0000\">Post diri</span> tiujn vortojn [Dirinte tiujn vortojn]"
	],
	"£pcp": [
		"£pcp",
		"Participo",
		"Por plenverbo post la helpverbo <i>‘esti’,</i> por esprimi procezan aŭ statan aspekton, uzu ne infinitivon, sed participon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/participoj\">participoj</a>.",
		"Mi estis <span style=\"color: #ff0000\">studi</span> ekonomion [Mi estis studanta ekonomion]"
	],
	"£adv": [
		"£adv",
		"Adverbo",
		"Lingvohelpilo pensas, ke ĉi tie devas esti adverbo (e-vorto). Se vi uzis adjektivon (a-vorton) aŭ prepozicion, kontrolu, ĉu ekzistas substantivo proksime, al kiu ĝi povas rilati. Se la vorto rilatas al verbo aŭ al la tuta propozicio, uzu adverbon!<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/adverboj\">adverboj</a> (e-vortoj).",
		"Estas <span style=\"color: #ff0000\">normala</span> ke … [Estas normale ke …]<br>\n<br>\nDu jarojn <span style=\"color: #ff0000\">antaŭ</span> [antaŭe] mi estis en Islando"
	],
	"£adv&<num-fract>": [
		"£adv&<num-fract>",
		"Sintaksa problemo",
		"Ne eblas fari ol-komparon post <i>‘-ono’</i> aŭ <i>‘-oblo’.</i> Uzu adverban strukturon anstataŭe, kun <i>‘-one malpli’</i> aŭ <i>‘-oble pli’.</i>",
		"La virinaj kandidatoj ricevis nur <span style=\"color: #ff0000\">duonon</span> (duone malpli) da ofertoj ol la viraj.<br>\n<br>\nLa virinaj kandidatoj ricevis <span style=\"color: #ff0000\">[la] duoblon</span> (duoble pli) da ofertoj ol la viraj"
	],
	"£adv&\"<.*oblon?>\"": [
		"£adv&\"<.*oblon?>\"",
		"Sintaksa problemo",
		"Ne eblas fari ol-komparon post <i>‘-ono’</i> aŭ <i>‘-oblo’.</i> Uzu adverban strukturon anstataŭe, kun <i>‘-one malpli’</i> aŭ <i>‘-oble pli’.</i>",
		"La virinaj kandidatoj ricevis nur <span style=\"color: #ff0000\">duonon</span> (duone malpli) da ofertoj ol la viraj.<br>\n<br>\nLa virinaj kandidatoj ricevis <span style=\"color: #ff0000\">[la] duoblon</span> (duoble pli) da ofertoj ol la viraj"
	],
	"£adj": [
		"£adj",
		"Adjektivo",
		"Lingvohelpilo pensas, ke ĉi tie devas esti adjektivo, ĉar la vorto precizigas o-vorton. Se vi uzis e-vorton (adverbon), kontrolu, ĉu ĝi vere nur povas rilati al verbo aŭ al la tuta propozicio. Se vi uzis o-vorton (substantivon aŭ nomvorton) ĉi tie, kontrolu, ĉu la du o-vortoj estas sendependaj. Se ne, uzu adjektivon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/adjektivoj\">adjektivoj</a> (a-vortoj).",
		"Tio estas <span style=\"color: #ff0000\">bone</span> [bona]<br>\n<br>\n<span style=\"color: #ff0000\">Berlino</span> Esperanto-klubo [berlina Esperanto-klubo<br>\n<br>\nLi havis du fratojn <span style=\"color: #ff0000\">muzikistojn</span> [du fratojn muzikistajn]"
	],
	"£noun": [
		"£noun",
		"Substantivo",
		"Lingvohelpilo pensas, ke ĉi tie devas esti substantivo. Kontrolu, ĉu la vorton akompanas artikolo (‘la’) aŭ a-vorto (adjektivo), aŭ ĉu ĝi plenumas \"substantivan\" rolon en la frazo, ekzemple kiel ĉefvorto post prepozicio aŭ kiel kerno en subjekto aŭ objekto.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/substantivoj\">substantivoj</a> (o-vortoj).",
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
		"Mi amiko [<b>mia</b> amiko]"
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
		"En tiu loko necesas demanda tabelvorto, ne montra.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/tabelvortoj\">tabelvortoj</a>.",
		"Mi demandis <span style=\"color: #ff0000\">tial</span> [kial] li venis."
	],
	"£-iu": [
		"£-iu",
		"Malĝusta tabelvorto",
		"Tabelvorto kun -o <i>(kio, tio, io, ĉio, nenio)</i> estas memstara, substantiveca. Ne eblas uzi ĝin adjektivece antaŭ substantivo. Uzu tabelvorton kun -u anstataŭ.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/tabelvortoj\">tabelvortoj</a>.",
		"<span style=\"color: #ff0000\">ĉio</span> [ĉiu] granda religio<br>\n<br>\n<span style=\"color: #ff0000\">Kio</span> [Kiu] filmo plej plaĉis al vi?"
	],
	"£-io": [
		"£-io",
		"Malĝusta tabelvorto",
		"Oni uzas tabelvorton kun -u <i>(kiu, tiu, iu, ĉiu, neniu)</i> aŭ precizige antaŭ substantivo, aŭ memstare celante personon. Ne eblas uzi ĝin memstare celante aĵon aŭ aferon. En tiu kazo, uzu tabelvorton kun -o anstataŭ.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/tabelvortoj\">tabelvortoj</a>.",
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
		"La medikamento <span style=\"color: #ff0000\">regulas</span> (reguligas) la apetiton."
	],
	"£ig&\"<anstataux.*>\"": [
		"£ig&\"<anstataux.*>\"",
		"Mankanta afikso:-ig",
		"Unu afero A <i>anstataŭas</i> alian B prenante ĝian lokon aŭ rolon. Sed por la homo kaŭzanta tiun anstataŭon, oni uzu <i>‘anstataŭigi A … per B’.</i>",
		"<i>Oni</i> <span style=\"color: #ff0000\"><i>anstataŭis</i></span><i> (anstataŭigis) la dungitojn per aŭtomatoj.</i>"
	],
	"£igx": [
		"£igx",
		"Mankanta afikso: -iĝ",
		"Aldonu la sufikxon -iĝ!<br>\n<br>\nOni uzas -iĝ por esprimi transiron al alia \"esto-stato\". ‘A x-iĝas’ signifas ‘A ekestas x’. Tipe do temas pri adjektiva aŭ substantiva radiko:<br>\n<br>\n<i>– Li malsan</i><b><i>iĝ</i></b><i>is = Li ekestis malsana.</i><br>\n<br>\n<i>– Li prezidant</i><b><i>iĝ</i></b><i>is = Li ekestis prezidanto.</i><br>\n<br>\nVerboj kun -iĝ estas netransitivaj. Se oni uzas -iĝ kun transitiva radiko, la rezulto similas pasivon sen eksplicita aganto (dana -s-pasivo aŭ \"refleksiva\" se-pasivo/medialo en la hispana):<br>\n<br>\n– <i>Oni elektis lin → Li estis elektita → Li elekt</i><b><i>iĝ</i></b><i>is</i><br>\n<br>\nNotu, ke eblas uzi -iĝ ankaŭ kiel radikon, kun la signifo de ‘fariĝi/ekesti’:<br>\n<br>\n<i>– Ĉiu plenkreskulo povas</i> <b><i>iĝi</i></b><i> (fariĝi/ekesti) membro de la asocio.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-iĝ)",
		"Kiam <span style=\"color: #ff0000\">komencas</span> [komenciĝas] la koncerto?"
	],
	"£igx&\"<sent.*>\"": [
		"£igx&\"<sent.*>\"",
		"Transitiveco",
		"La verbo <i>‘senti’</i> estas devige transitiva. Ne eblas uzi ĝin en la senco de ‘senti sin’ (angle: <i>I feel lucky</i>) aŭ ‘doni senton de’ (angle: <i>the water feels warm</i>). En ambaŭ kazoj eblas uzi la netransitivigan sufikson -igx.",
		"Vi <span style=\"color: #ff0000\">sentas</span> (sentiĝas) pli bone ol hieraux, cxu?<br>\n<br>\nLa aero <span style=\"color: #ff0000\">sentas</span> (sentiĝas) pli freŝa hodiaŭ, ĉu ne?"
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
	"£an": [
		"£an",
		"Mankanta afikso: -an",
		"La sufikso ‘-an’ kreas, post nomo-radiko, person-vorton, kies difina eco estas aparteneco al la radikaj loko, komunumo, ismo aŭ famulo. Do:<br>\n<br>\n<i>Usonano =</i> enloĝanto de Usono<br>\n<br>\n<i>hamburgano =</i> enloĝanto de Hamburgo<br>\n<br>\n<i>kristano</i> = sekvanto de Kristo<br>\n<br>\n<i>islamano</i> = sekvanto de islamo<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-an)",
		"<span style=\"color: #ff0000\">Nederlandoj</span> (nederlandanoj) vespermanĝas pli frue ol <span style=\"color: #ff0000\">hispanioj</span> (hispanoj)."
	],
	"£ulino": [
		"£ulino",
		"Mankanta afikso: -ul",
		"Ŝajnas, ke vi uzis la sufikson ‘-in’ post ne-substantivo. Necesas unue substantivigi la radikon per ‘-ul’. La vorto <i>‘</i><span style=\"color: #ff0000\"><i>kompatindino</i></span><i>’,</i> ekzemple, ne eblas, ĉar <i>‘kompatinda’</i> estas adjektiva. Devas esti <i>‘kompatindulino’.</i>",
		""
	],
	"£DEL:ul": [
		"£DEL:ul",
		"Forigenda afikso: -ul",
		"La sufikso ‘-ul’ kreas personvorton el alia vorto (tipe adjektivo), kiu difinas trajton de la koncerna persono. Sed se jam ekzistas o-formo de la adjektivo, kiu mem signifas personon, tio ne havas sencon (ekz. ĉe etnovortoj). Simile ne eblas afiksi ‘-ul’ al substantivoj, kiuj jam estas personvortoj (ekz. profesioj).<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ul)",
		"<span style=\"color: #ff0000\">ĉinulo</span> [ĉino], <span style=\"color: #ff0000\">skribantulo</span> [skribanto]"
	],
	"£DEL:ist": [
		"£DEL:ist",
		"Forigenda afikso: -ist",
		"La sufikso ‘-ist’ kreas vortojn por profesiuloj aŭ sekvantoj de ideologio. Sed se la signifo de la radiko jam estas personvorto (ekz. profesio), tio ne havas sencon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ist)",
		"<span style=\"color: #ff0000\">kardiologisto</span> [kardiologo]<br>\n<br>\n<span style=\"color: #ff0000\">ortopedisto</span> [ortopedo]"
	],
	"£ado": [
		"£ado",
		"Mankanta afikso: -ad",
		"Oni uzas la sufikson ‘-ad’ por esprimi daŭran agon (ekz. <i>kantadi = longe kanti</i>). Kun o-finaĵo, tiu sufikso permesas substantivigi verbojn, ekzemple post prepozicioj, kiuj ne permesas infinitivon.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/sufiksoj\">sufiksoj</a> (-ad)",
		"Post <span style=\"color: #ff0000\">vendi</span> la domon [post <b>vendado</b> de la domo]<br>\n<br>\nLi pensas pri <span style=\"color: #ff0000\">veni</span> [venado] al Eŭropo"
	],
	"£ado&INF": [
		"£ado&INF",
		"Infinitivo-problemo",
		"Ĉi tie normale aperas substantivo, ne infinitivo. Eblas fari la ŝanĝon aldonante la sufikson ‘-ado’. Ĉe verboj, kiuj finiĝas per ‘-igi’ aŭ ‘iĝi’, sufiĉas simple anstataŭigi la ‘-i finaĵon per ‘-o’. Notu, ke ne ĉiuj prepozicioj kongruas kun infinitivo. Tiel, <i>‘por’, ‘sen’, ‘anstataŭ’</i> kaj la kompara <i>‘ol’</i> permesas infinitivon, sed <i>‘post’, ‘dum’, ‘per’</i> kaj <i>‘pro’</i> kutime ne estas uzataj kun infinitivo.",
		"Post <span style=\"color: #ff0000\">purigi</span> la legomoj<span style=\"color: #c9211e\">n</span> (post purig[ad]o de la legomoj), boligu akvon."
	],
	"£noun&INF": [
		"£noun&INF",
		"Infinitivo-problemo",
		"Ĉi tie normale aperas substantivo, ne infinitivo. Eblas fari la ŝanĝon aldonante la sufikson ‘-ado’. Ĉe verboj, kiuj finiĝas per ‘-igi’ aŭ ‘iĝi’, sufiĉas simple anstataŭigi la ‘-i finaĵon per ‘-o’. Notu, ke ne ĉiuj prepozicioj kongruas kun infinitivo. Tiel, <i>‘por’, ‘sen’, ‘anstataŭ’</i> kaj la kompara <i>‘ol’</i> permesas infinitivon, sed <i>‘post’, ‘dum’, ‘per’</i> kaj <i>‘pro’</i> kutime ne estas uzataj kun infinitivo.",
		"Post <span style=\"color: #ff0000\">purigi</span> la legomoj<span style=\"color: #c9211e\">n</span> (post purig[ad]o de la legomoj), boligu akvon."
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
		"Ĉi tie du vortoj aperas en malĝusta sinsekvo. La markita vorto interŝangu lokon kun la vorto tuj maldekstre.<br>\n<br>\nEn Esperanto, la ordo de frazpartoj estas teorie libera. Tamen la sinsekvo subjekto-verbo-objekto estas plej normala, kaj ŝanĝi ĝin kreas efekton de emfazo aŭ poezieco.<br>\n<br>\nEne de frazparto, do en substantiva, adjektiva aŭ verba vortgrupo, la vortordo estas malpli libera. Adjektivaj epitetoj povas stari aŭ antaŭ aŭ post substantivo, sed artikoloj kaj difiniloj devas stari en la komenco de substantiva vortgrupo. Prepozicioj staras tuj antaŭ la vortgrupo, kiun ili regas, kaj konjunkcioj staras antaŭ tio, kion ili ligas. Relativaj kaj interrogativaj pronomoj staras en la komenco de frazo aŭ subfrazo, sed post eventuala prepozicio.<br>\n<br>\nAdverboj, kiuj priskribas manieron, tempon, lokon aŭ direkton, kaj la plej multaj derivitaj adverbo rolas kiel liberaj frazpartoj, dum emfazaj, fokusaj, intensigaj, kvantaj kaj neaj adverboj <i>(ne, eĉ, tre, tro, pli, plej, nur, ankaŭ, nek, ekzemple)</i> staras tuj antaŭ la vorto aŭ vortgrupo, al kiu ili rilatas.<br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/vortordo\">vortordo</a>.",
		"En <span style=\"color: #ff0000\">la</span> <span style=\"color: #ff0000\"><b>preskaŭ</b></span> tuta mondo [en <b>preskaŭ la</b> tuta mondo]<br>\n<br>\n<span style=\"color: #ff0000\">nek</span> <span style=\"color: #ff0000\"><b>estas</b></span> ĝenerala nek tutkovra [<b>estas nek</b> ĝenerala nek tutkovra]"
	],
	"£sentstop": [
		"£sentstop",
		"Kunfando de frazoj, manko de frazpunkto",
		"Lingvohelpilo pensas, ke komenciĝas nova frazo post tiu vorto. Eble mankas frazpunkto aŭ alia apartigilo (dupunkto, liniorompo aŭ similie). Se vere komenciĝas nova frazo ĉi tie, kontrolu ĉu la venonta vorto estas majuskla.",
		"Li bedaŭrinde ne povas <span style=\"color: #ff0000\">veni</span> [veni.] Li estas malsana."
	],
	"£headstop": [
		"£headstop",
		"Mankanta frazapartigilo post titolo a.s.",
		"Lingvohelpilo pensas, ke komenciĝas nova frazo post tiu vorto. Eble mankas apartigilo (dupunkto, liniorompo aŭ similie) post titolo aŭ simile.",
		"<span style=\"color: #ff0000\">Sociogeografio</span> En la jaro 2000 en la komunumo vivis 12356 personoj"
	],
	"£comma": [
		"£comma",
		"Mankanta komo",
		"Komoj helpas strukturigi la frazojn kaj faciligas legadon, markante subfrazojn, kunordigojn kaj listojn, aŭ por kontrastigi or reliefigi frazopartojn. Komoj ankaŭ povas esti uzataj por apartigi krominformojn aŭ materialon, kiu ne estas sintaksa parto de la frazo. Kaj foje komo estas la sola indiko, kiu distingas unu signifon de alia.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn. Nek Zamenhof nek la Akademio de Esperanto provis normigi la uzon de komoj, kaj ankaŭ PMEG nur donas minimumajn konsilojn. La uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Mi ne mendis kafon<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">sed</span> teon."
	],
	"£insert&\"<$,>\"": [
		"£insert&\"<$,>\"",
		"Mankanta komo",
		"Komoj helpas strukturigi la frazojn kaj faciligas legadon, markante subfrazojn, kunordigojn kaj listojn, aŭ por kontrastigi or reliefigi frazopartojn. Komoj ankaŭ povas esti uzataj por apartigi krominformojn aŭ materialon, kiu ne estas sintaksa parto de la frazo. Kaj foje komo estas la sola indiko, kiu distingas unu signifon de alia.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn. Nek Zamenhof nek la Akademio de Esperanto provis normigi la uzon de komoj, kaj ankaŭ PMEG nur donas minimumajn konsilojn. La uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Mi ne mendis kafon<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">sed</span> teon."
	],
	"£insert&\",\"": [
		"£insert&\",\"",
		"Mankanta komo",
		"Komoj helpas strukturigi la frazojn kaj faciligas legadon, markante subfrazojn, kunordigojn kaj listojn, aŭ por kontrastigi or reliefigi frazopartojn. Komoj ankaŭ povas esti uzataj por apartigi krominformojn aŭ materialon, kiu ne estas sintaksa parto de la frazo. Kaj foje komo estas la sola indiko, kiu distingas unu signifon de alia.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn. Nek Zamenhof nek la Akademio de Esperanto provis normigi la uzon de komoj, kaj ankaŭ PMEG nur donas minimumajn konsilojn. La uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Mi ne mendis kafon<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">sed</span> teon."
	],
	"£comma-FSstart": [
		"£comma-FSstart",
		"Mankanta komo: komenco de subpropozicio",
		"Ĉi tie komenciĝas subpropozicio. Metu komon por faciligi legadon. En Esperanto, subpropozicio normale komenciĝas per subjunkcio (subordiga konjunkcio, ekz. <i>ke, kvankam, se, kiam, ĉu</i>), relativa pronomo <i>(kiu, kie, kies)</i> aŭ demandovorto (ajna <i>ki-</i>vorto, <i>ĉu</i>).<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Mi kredas<span style=\"color: #ff0000\"><b>,</b></span> <span style=\"color: #ff0000\">ke</span> necesas ripari la tegmenton."
	],
	"£comma-FSend": [
		"£comma-FSend",
		"Mankanta komo: fino de subpropozicio",
		"Ĉi tie finiĝas subpropozicio, kaj daŭriĝas aŭ komenciĝas sintakse pli \"alta\" subpropozicio aŭ ĉefpropozicio. Tiu komo estas unu el la plej malfacilaj, sed kompense multe faciligas legadon.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"Se vi havas komentojn<span style=\"color: #ff0000\"><b>,</b></span> sendu retmesaĝon al ni!"
	],
	"£comma-quote-end": [
		"£comma-quote-end",
		"Mankanta komo post citaĵo",
		"Ĉi tie finiĝas citita parolo. Oni kutime metas komon inter citaĵo kaj la sekvanta citanta verbo aŭ ĉefpropozicio.<br>\n<br>\nTamen ne metu komon, se la citaĵo finiĝas per interpunkcio (!, ?, …, :). Se la citita frazo sola finiĝus per simpla frazpunkto, forlasu tiun, kaj metu komon post citilo.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn. Nek Zamenhof nek la Akademio de Esperanto provis normigi la uzon de komoj, kaj ankaŭ PMEG nur donas minimumajn konsilojn. La uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
		"<i>\"Mankas benzino\"</i><span style=\"color: #ff0000\"><i>, konstatis</i></span><i> la patro.</i><br>\n<br>\n<i>\"Helpu kun la kestoj\"</i><span style=\"color: #ff0000\"><i>, li</i></span><i> petis.</i><br>\n<br>\n<i>\"Helpu kun la kestoj!\"</i><span style=\"color: #ff0000\"><i>[,] li</i></span><i> petis.</i>"
	],
	"£comma-FMco": [
		"£comma-FMco",
		"Komo inter ĉefpropozicioj",
		"Tiu komo markas la limon inter du ĉefpropozicioj, aŭ la komencon de nova ĉefpropozicio post subpropozicio apartenanta al alia, antaŭa ĉefpropozicio. Uzu komon antaŭ la konjunkcioj ‘<i>kaj’, ‘aŭ’</i> aŭ<i> ‘nek’,</i> kiam ili kunordigas tutajn propoziciojn, sed ne, kiam ili kunordigas aliajn, pli etajn frazpartojn (substantivajn, adjektivajn, adverbajn aŭ prepoziciajn). Kompare, la kontrastiga konjunkcio ‘<i>sed’</i> ĉiam markas fortan rompon en la frazofluon kaj meritas komon en ajna kazo.<br>\n<br>\nEsperanto ne havas eksplicitajn komo-regulojn, sed la uzado en klasika literaturo tamen estas relative kohera kaj sekvas la tradician mezeŭropan tradicion kun t.n. gramatika komo, kiu celas faciligi legadon markante la limojn inter propozicioj kaj subpropozicioj. Tian sistemon sufiĉe detale priskribas Monato en siaj <a target=\"_blank\" href=\"https://www.monato.be/konvencioj.php#inter\">redaktoraj konvencioj</a> .",
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
	"£comma-app": [
		"£comma-app",
		"Apozicia komo",
		"Oni kutime metas komon ĉirkaŭ apozicio por indiki, ke temas pri krominformo, do ekzemple post substantiva vortgrupo kiu jam referencas unikan individuon:<br>\n<br>\n<i>Lia patrino</i><span style=\"color: #ff0000\"><i>, Emilia</i></span><i> Maribo</i><span style=\"color: #ff0000\"><i>, ofertis</i></span><i> …</i> (nur povas temi pri unu patrino)<br>\n<br>\nAŭ ĉe precizigoj:<br>\n<br>\n<i>Alia esploristo</i><span style=\"color: #ff0000\"><i>, Zongyu</i></span><i> Yue</i><span style=\"color: #ff0000\"><i>, opinias</i> </span><i>…</i> (la nomo estas precizigo, ne nepre necesa)<br>\n<br>\nNe uzu apozician komon, kiam la ĉemetita vorto estas necesa struktura parto de substantiva vortgrupo, tipe post artikolo kaj kategoria vorto:<br>\n<br>\n<i>La usona nacia parko</i> <span style=\"color: #ff0000\"><i>[,]</i></span><i> Yellowstone</i> <span style=\"color: #ff0000\"><i>[,]</i></span><i> estas ...</i> (La artikolo implicas, ke temas pri difinita parko, sed tio nur havas sencon kune kun la nomo).<br>\n<br>\nVi povas testi la neceson de apoziciaj komoj forigante la ĉemetaĵon – se la frazo funkcias bone ankaŭ sen ĝi, necesas meti komojn.",
		""
	],
	"£comma-tagquest": [
		"£comma-tagquest",
		"Refrendemanda komo",
		"Refrendemandoj estas aldoneblaj fine de konstataj aŭ demandaj frazoj kaj konsistas el la konjunkcio <i>‘ĉu’</i> plus eventuale 1-2 aliaj vortoj, kutime adverboj aŭ pronomoj. Oni uzas refrendemandojn por peti konfirmon aŭ malkonfirmon de la alparolato, aŭ simple por antaŭenigi komunikadon. Refrendemandoj estas senverbaj kaj ne estas plenaj subpropozicioj. Sed ili ankaŭ ne estas integra parto de la ĉeffrazo, do necesas apartigi ilin per komo:",
		"Vi jam ricevis tiun dokumenton<span style=\"color: #c9211e\">, ĉu ne</span>?<br>\n<br>\nMi venos morgaŭ je la dua<span style=\"color: #c9211e\">, ĉu</span> <span style=\"color: #c9211e\">bone</span>?"
	],
	"£no-comma": [
		"£no-comma",
		"Troa komo",
		"Komo en tiu loko ne estas kutima kaj povas ĝeni la legadon.<br>\n<br>\nOni uzas komon por apartigi ripetitajn (samtipajn) aŭ klarigajn frazpartojn (do ekz. en listoj kaj ĉirkaŭ apozicioj), kaj por apartigi propoziciojn, sed ne inter malsamaj frazpartoj malpli grandaj ol propozicioj, krom por marki kontraston aŭ paŭzon.<br>\n<br>\nNe uzu komon antaŭ konjunkcio, kiu kunordigas ne propoziciojn, sed nur verbojn aŭ predikatiojn kun la sama subjekto: <i>Ili aĉetis vinon</i> <span style=\"color: #ff0000\"><i>[,]</i></span><i> kaj diboĉis la tutan nokton.</i><br>\n<br>\nNe uzu komon inter subjekto kaj verbo: <i>Cezaro</i><span style=\"color: #ff0000\"><i> [,]</i></span><i> deziras lin vidi.</i><br>\n<br>\nNe uzu komon inter adjektivo kaj substantivo: <i>En tiaj kazoj rapida</i> <span style=\"color: #ff0000\"><i>[,]</i> </span><i>helpo estas necesega.</i><br>\n<br>\nNe uzu komon inter konjunkcio kaj la propozicio, kiun ĝi enkondukas – la komo devas esti <i>antaŭ</i> la konjunkcio: <i>Li diris</i><span style=\"color: #ff0000\"><i> ke</i></span><i></i> <span style=\"color: #ff0000\"><i>[,]</i></span><i> la aziaj kaj euxropaj landoj devas plifortigi cxiuflankan kunlaboron. → Li diris</i><span style=\"color: #ff0000\"><i>,</i></span><i> ke la aziaj …</i><br>\n<br>\nKonsideru ankaŭ ne uzi komon antaŭ listo-fina <i>‘kaj’, ‘aŭ’</i> aŭ <i>‘ktp.’</i>. Tiu komo nomiĝas ‘oksforda komo’ kaj ne estas natura en klasika Esperanto, ĉar ĝi markas (eblan) spirpaŭzeton, ne sintaksan rompon. Monato rekomendas eviti ĝin, sed ne temas pri vera eraro. Multaj homoj, precipe denaskaj parolantoj de la angla, uzas ĝin. Decidu mem – kaj poste uzu tiun komon (au ne) samdecide en la tuta teksto: <i>Li parolas la anglan, la francan</i> <span style=\"color: #ff0000\"><i>(,)</i></span><i> kaj la germanan. Vi ricevos rabaton por diversaj gazetoj, magazinoj, ĵurnaloj</i> <span style=\"color: #ff0000\"><i>(,)</i></span><i> ktp.</i>",
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
		"Lingvohelpilo kredas ke la markita(j) vorto(j) estas parto de fraznodo. Fraznodo \"levas\" parton de ke-frazo al la antaŭo de la ĉeffrazo, pro emfazo. Fraznodoj estas relative oftaj en kelkaj lingvoj (ekz. skandinavaj), sed ne en Esperanto. Eventuale pripensu alternativon.",
		"Tiu laboro <span style=\"color: #ff0000\">mi pensas, ke</span> estas malfacila.<br>\n<br>\nTiun laboron <span style=\"color: #ff0000\">mi pensas, ke</span> vi devas fari"
	],
	"£warning": [
		"£warning",
		"Konflikto en la frazanalizo",
		"Okazis konflikto inter sintaksaj etikedoj dum la analizo de la frazo, kio povas indiki eraron – aŭ de la sistemo (plej verŝajne) aŭ de vi (kontrolu!).<br>\n<br>\nEkz. ne eblas havi, sen kunordigo, du subjektojn aŭ du objekton de la sama tipo en la sama (sub)propozicio. En tiu kazo povas esti, ke mankas aŭ troas akuzativo en la markita vorto, aŭ ke ĝi bezonas prepozicion.",
		"En 1949 la registaro SUBJ&gt; prenis la sunan kalendaron ŝtata <span style=\"color: #ff0000\">kalendaro</span> &lt;SUBJ [… prenis la sunan kalendaron <b>kiel</b> ŝtata<b>n</b> kalendaro<b>n</b>]"
	],
	"£:BASE-impona&\"<impozantaj?n?>\"": [
		"£:BASE-impona&\"<impozantaj?n?>\"",
		"Alilingvismo: impozanta → impona",
		"La vorto <i>‘impozanta’</i>, kvankam etimologie rekonebla por multaj eŭropanoj, ne estas la ĝusta formo en Esperanto. Devas esti <i>‘impona’.</i>",
		""
	],
	"£:BASE-pruntepreni&\"<prunt.*>\"": [
		"£:BASE-pruntepreni&\"<prunt.*>\"",
		"Ambigua verbo: prunti → pruntepreni/pruntedoni",
		"'Pruni’ povas signifi kaj ‘pruntepreni’ kaj ‘pruntedoni’. Kun prepozicio (<i>‘de’</i> aŭ <i>‘al’</i>)<i></i> la signifo estas klara, sed sen prepozicio necesas precizigo.",
		""
	],
	"£:BASE-tremao": [
		"£:BASE-tremao",
		"Ambigueco: dierezo → tremao",
		"La ĉefa senco de <i>‘dierezo’</i> estas ‘maldiftongo’, do du apudaj vokaloj elparolitaj unuope. <i>‘Tremao’</i> estas supersigno, kiu en kelkaj lingvoj estas uzata por marki dierezon. Prefere ne kreu ambiguecon uzante la vorton <i>‘dierezo’</i> en la senco de <i>‘tremao’.</i> Tamen ne temas pri vera eraro, kaj ReVo kaj PIV malsamopinias pri tiu temo.",
		"Ekzistas longigitaj vokaloj, reprezentataj kun <span style=\"color: #ff0000\">dierezo</span> (tremao) super si."
	],
	"£:BASE-fermentilo": [
		"£:BASE-fermentilo",
		"Ambigueco: fermento → fermentilo",
		"La fundamenta vortklaso de la radiko <i>‘ferment-’</i> estas verbo: <i>‘fermenti’.</i> La substantivo <i>‘fermento’</i> do estas derivita, kun aga signifo (= ‘fermentado’). Prefere ne uzu ĝin kun la senco de <i>‘fermentilo’.</i>",
		"La medikamento blokas la virusajn <span style=\"color: #ff0000\">fermentojn</span> (fermentilojn), la proteazojn."
	],
	"£:BASE-retropasxi": [
		"£:BASE-retropasxi",
		"Ambigueco: posteniĝi → retropaŝi, enposteniĝi",
		"Ekzistas du analizoj de la vorto <i>‘posteniĝi’:</i> (a) ‘posten+iĝi’ (= ekposteni) kaj (b) ‘post+en+iĝi (= malantaŭen moviĝi). Por eviti tiun ambiguecon, kaj ĉar <i>‘post’</i> estas iom nekutima kiel loka/direkta prepozicio, konsideru uzi <i>‘retropaŝi’ aŭ</i> ‘<i>moviĝi malantaŭen’</i> por la kazo (b).<br>\n<br>\nNotu, ke eĉ (a) fakte povas signifi du sufiĉe malsamajn aferojn – aŭ (a1) ricevi laborpostenon (pri oficisto) aŭ (a2) poziciiĝi (ekposteni) por gardi ion or en batalo (pri soldato). Konsideru uzi <i>‘enposteniĝi’</i> por (a1).",
		"<i>Ŝi</i> <span style=\"color: #ff0000\"><i>posteniĝis</i></span><i> (retropaŝis) timigita.</i><br>\n<br>\n<i>En 1896 li</i> <span style=\"color: #ff0000\"><i>posteniĝis</i></span><i> (enposteniĝis) en Hungara Nacia Muzeo</i>"
	],
	"£:BASE-enpostenigxi": [
		"£:BASE-enpostenigxi",
		"Ambigueco: posteniĝi → retropaŝi, enposteniĝi",
		"Ekzistas du analizoj de la vorto <i>‘posteniĝi’:</i> (a) ‘posten+iĝi’ (= ekposteni) kaj (b) ‘post+en+iĝi (= malantaŭen moviĝi). Por eviti tiun ambiguecon, kaj ĉar <i>‘post’</i> estas iom nekutima kiel loka/direkta prepozicio, konsideru uzi <i>‘retropaŝi’ aŭ</i> ‘<i>moviĝi malantaŭen’</i> por la kazo (b).<br>\n<br>\nNotu, ke eĉ (a) fakte povas signifi du sufiĉe malsamajn aferojn – aŭ (a1) ricevi laborpostenon (pri oficisto) aŭ (a2) poziciiĝi (ekposteni) por gardi ion or en batalo (pri soldato). Konsideru uzi <i>‘enposteniĝi’</i> por (a1).",
		"<i>Ŝi</i> <span style=\"color: #ff0000\"><i>posteniĝis</i></span><i> (retropaŝis) timigita.</i><br>\n<br>\n<i>En 1896 li</i> <span style=\"color: #ff0000\"><i>posteniĝis</i></span><i> (enposteniĝis) en Hungara Nacia Muzeo</i>"
	],
	"£:BASE-roma&\"<romana>\"": [
		"£:BASE-roma&\"<romana>\"",
		"Ambigueco: romana → roma",
		"Por eviti konfuzon kun la literatura koncepto de <i>‘romano’,</i> Lingvohelpilo proponas uzi <i>‘roma’</i> (ne <i>‘romana’</i>), kiam temas pri Romo, la roma imperio, epoko, juro ktp.",
		""
	],
	"£:BASE-sankciumo": [
		"£:BASE-sankciumo",
		"Ambigueco: sankcio → sankciumo",
		"Ne taŭgas uzi la vortojn <i>‘sankcio’</i> kaj <i>‘sankcii’</i> kun kaj aproba kaj malaproba senco samtempe – jen kiel ‘permeso’ kaj jen kiel ‘puno’, ĉar tio povas krei ambiguecon. La kerna senco en Esperanto estas la unua, oficiala permeso/aprobo. Por la alia, ofte politika senco (ekz. ago de unu ŝtato kontraŭ alia) prefere uzu <i>‘sankciumo’</i> kaj <i>‘sankciumi’.</i> Kun ago-objektoj povas esti malfacile diveni la sencon en la kunteksto:<br>\n<br>\n<i>La registaro sankciis la vendadon de kanabo. (= permesis, aprobante)</i><br>\n<br>\n<i>La registaro</i> <span style=\"color: #ff0000\"><i>sankciis</i></span><i> (sankciumis) la vendadon de kanabo. (=punis, malaprobante)</i>",
		"EU enkondukis pliajn <span style=\"color: #ff0000\">sankciojn</span> (sankciumojn) kontraŭ Rusio.<br>\n<br>\nTiu agentejo ne havas la povon <span style=\"color: #ff0000\">sankcii</span> (sankciumi) membroŝtaton."
	],
	"£:BASE-sankciumi": [
		"£:BASE-sankciumi",
		"Ambigueco: sankcio → sankciumo",
		"Ne taŭgas uzi la vortojn <i>‘sankcio’</i> kaj <i>‘sankcii’</i> kun kaj aproba kaj malaproba senco samtempe – jen kiel ‘permeso’ kaj jen kiel ‘puno’, ĉar tio povas krei ambiguecon. La kerna senco en Esperanto estas la unua, oficiala permeso/aprobo. Por la alia, ofte politika senco (ekz. ago de unu ŝtato kontraŭ alia) prefere uzu <i>‘sankciumo’</i> kaj <i>‘sankciumi’.</i> Kun ago-objektoj povas esti malfacile diveni la sencon en la kunteksto:<br>\n<br>\n<i>La registaro sankciis la vendadon de kanabo. (= permesis, aprobante)</i><br>\n<br>\n<i>La registaro</i> <span style=\"color: #ff0000\"><i>sankciis</i></span><i> (sankciumis) la vendadon de kanabo. (=punis, malaprobante)</i>",
		"EU enkondukis pliajn <span style=\"color: #ff0000\">sankciojn</span> (sankciumojn) kontraŭ Rusio.<br>\n<br>\nTiu agentejo ne havas la povon <span style=\"color: #ff0000\">sankcii</span> (sankciumi) membroŝtaton."
	],
	"£:BASE-sxteliri&\"<sxtel.*>\"": [
		"£:BASE-sxteliri&\"<sxtel.*>\"",
		"Ambigueco: sin ŝteli → kaŝiri",
		"Oni ne diras <i>‘sin ŝteli’</i> (laŭvorte: ŝteli la propran personon)<i>,</i> sed <i>‘ŝteliri’/kaŝiri’.</i>",
		"En ĉambron sin ŝtelis la frosto."
	],
	"£:BASE-solvilo&\"<solvantoj?n?>\"": [
		"£:BASE-solvilo&\"<solvantoj?n?>\"",
		"Ambigueco: solvanto → solvilo",
		"Por eviti ambiguecon, konsideru uzi <i>‘solvanto’</i> por personoj kun problemoj, kaj ‘<i>solvilo’</i> por likvaĵoj en kemia kunteksto.",
		"La substanco estas nesolvebla en akvo sed solvebla en organikaj <span style=\"color: #ff0000\">solvantoj</span> (solviloj)."
	],
	"£:BASE-kialo&\"<tialoj?n?>\"": [
		"£:BASE-kialo&\"<tialoj?n?>\"",
		"Ambigueco: tialo → kialo",
		"Teorie, eblas formi la vorton <i>‘tialo’</i> el la tabelvorto <i>‘tial’,</i> same kiel <i>‘kialo’</i> el <i>‘kial’.</i> Sed <i>‘tialo’</i> ankaŭ estas kemia substanco, do por eviti ambigueco, prefere uzu <i>‘kialo’</i> ĉi tie.",
		"Ekzistas pluraj <span style=\"color: #ff0000\">tialoj</span> (kialoj) por tio."
	],
	"£:BASE-varmegsanga": [
		"£:BASE-varmegsanga",
		"Ambigueco: varmsanga → varmegsanga",
		"Oni uzas la adjektivon <i>‘varmsanga’</i> pri bestoj kun konstanta, reguligita korpotemperaturo. Por eviti ambiguecon, konsideru uzi <i>‘varmegsanga’</i> por priskribi la temperamenton de pasiiĝema persono.",
		"La princino estis sufiĉe varmsanga (varmegsanga)."
	],
	"£:BASE-angio": [
		"£:BASE-angio",
		"Ambigueco: vazo → angio",
		"La kerna signifo de <i>‘vazo’</i> estas ‘ujo’. Tamen, en anatomiaj kaj medicinaj terminoj la vorto ankaŭ funkcias kun morfemo kun la signifo <i>‘angio/vaskulo’</i> (sangotubo). Prefere ne uzu <i>‘vazo’</i> kiel memstaran vorton kun tiu medicina senco.",
		""
	],
	"£:BASE-revizii&\"<revid.*>\"": [
		"£:BASE-revizii&\"<revid.*>\"",
		"Arkaismo: revidi → revizii",
		"Prefere ne uzu <i>‘revidi’</i> en la senco de <i>‘revizii’.</i> Oni <i>revidas</i> personon aŭ lokon, sed <i>reviziias</i> tekston aŭ planon.",
		"Li petis min <span style=\"color: #ff0000\">revidi</span> (revizii) lian artikolon."
	],
	"£:BASE-siliksxtono": [
		"£:BASE-siliksxtono",
		"Arkaismo: siliko → (silik)ŝton(et)o",
		"En moderna Esperanto, <i>‘siliko’</i> estas (ŝtona) materialo. Estas arkaismo uzi la vorton por la unuopa (nombrebla, prenebla, ĵetebla) ŝtono. Se vi volas emfazi, ke la ŝtono estas el siliko, diru <i>‘silikŝtono’</i> (angle: <i>flint,</i> germane: <i>Kieselstein</i>), sed foje sufiĉas simple diri <i>‘ŝtono’</i> aŭ <i>‘ŝtoneto’</i> (angle: <i>pebble</i>).",
		"Troviĝis tie multaj <span style=\"color: #ff0000\">silikoj</span> (ŝtonetoj) kaj konkoj."
	],
	"£:BASE-realigi&\"<implement.*>\"": [
		"£:BASE-realigi&\"<implement.*>\"",
		"Evitinda neologismo: implementi → realigi",
		"Ne ekzistas kognato (parencvorto) de la angla <i>‘implementi’</i> en Esperanto. Uzu <i>‘realigi</i>’.",
		"Ili ankaŭ laboris por <span style=\"color: #ff0000\">implementi</span> (realigi) protekton de Antarktio de ekspluatado per minado ."
	],
	"£:BASE-trudi&\"<impoz.*>\"": [
		"£:BASE-trudi&\"<impoz.*>\"",
		"Evitinda neologismo: impozi → trudi",
		"Ne ekzistas kognato (parencvorto) de la angla ‘<i>impose’</i> en Esperanto. Uzu <i>‘trudi’.</i>",
		"La okcidento <span style=\"color: #ff0000\">impozis</span> (trudis) sankciojn."
	],
	"£:BASE-alsxuti": [
		"£:BASE-alsxuti",
		"Fakvorto: enŝuti/deŝuti → alŝuti/elŝuti",
		"En komputila kunteksto, uzu <i>‘alŝuti’</i> kaj <i>‘elŝuti’</i> por metado aŭ prenado dosieroj, dokumentoj, bildoj ktp. al aŭ de servilo aŭ retejo. Ne uzu <i>‘enŝuti/deŝuti’</i> for tiu celo.<br>\n<br>\nNotu, ke <i>‘ŝuti’</i> havas pli larĝan signifon, do kompreneble vi povas ŝuti karbon, sablon aŭ rizon en ujon, aŭ de",
		"Mi tuj <span style=\"color: #c9211e\">deŝutos</span> (elŝutos) novan version de la programo."
	],
	"£:BASE-elsxuti": [
		"£:BASE-elsxuti",
		"Fakvorto: enŝuti/deŝuti → alŝuti/elŝuti",
		"En komputila kunteksto, uzu <i>‘alŝuti’</i> kaj <i>‘elŝuti’</i> por metado aŭ prenado dosieroj, dokumentoj, bildoj ktp. al aŭ de servilo aŭ retejo. Ne uzu <i>‘enŝuti/deŝuti’</i> for tiu celo.<br>\n<br>\nNotu, ke <i>‘ŝuti’</i> havas pli larĝan signifon, do kompreneble vi povas ŝuti karbon, sablon aŭ rizon en ujon, aŭ de",
		"Mi tuj <span style=\"color: #c9211e\">deŝutos</span> (elŝutos) novan version de la programo."
	],
	"£:BASE-artikolo": [
		"£:BASE-artikolo",
		"Falsa amiko – konfuzebla vortoparo: artikolo ↔ artiklo",
		"Ne konfuzu <i>‘artikolo’</i> kaj <i>‘artiklo’.</i> La unua kutime celas skriban verkaĵon en ekz. libro aŭ gazeto, la dua signifas <i>‘varo’.</i> Oni skribas aŭ aperigas artikolojn, sed vendas aŭ aĉetas (komercajn) artiklojn.<br>\n<br>\nNotu, ke <i>‘artikolo’</i> ankaŭ povas esti gramatika esprimo (vortklaso) aŭ numerita paragrafo/sekcio en leĝo aŭ statuto.",
		"Li verkis longan <span style=\"color: #ff0000\">artiklon</span> (artikolo) por nia revuo.<br>\n<br>\nLa firmao vendas luksajn, manfaritajn <span style=\"color: #ff0000\">artikolojn</span> (artiklojn) el diversaj metaloj."
	],
	"£:BASE-artiklo": [
		"£:BASE-artiklo",
		"Falsa amiko – konfuzebla vortoparo: artikolo ↔ artiklo",
		"Ne konfuzu <i>‘artikolo’</i> kaj <i>‘artiklo’.</i> La unua kutime celas skriban verkaĵon en ekz. libro aŭ gazeto, la dua signifas <i>‘varo’.</i> Oni skribas aŭ aperigas artikolojn, sed vendas aŭ aĉetas (komercajn) artiklojn.<br>\n<br>\nNotu, ke <i>‘artikolo’</i> ankaŭ povas esti gramatika esprimo (vortklaso) aŭ numerita paragrafo/sekcio en leĝo aŭ statuto.",
		"Li verkis longan <span style=\"color: #ff0000\">artiklon</span> (artikolo) por nia revuo.<br>\n<br>\nLa firmao vendas luksajn, manfaritajn <span style=\"color: #ff0000\">artikolojn</span> (artiklojn) el diversaj metaloj."
	],
	"£:BASE-lineara": [
		"£:BASE-lineara",
		"Falsa amiko – konfuzebla vortoparo: linea → lineara",
		"La adjektivo <i>‘linea’</i> celas konduktilon, ekz. Elektran aŭ telefonan lineon. <i>‘Lineara’</i> estas matematika termino kaj rilatas al ekz. vektoraj spacoj.<br>\n<br>\nNotu, ke <i>‘linea’</i> ankaŭ povas rilati al la biologo Lineo (Linné), ekz. <i>‘linea taksonomio’, ‘linea nomo’.</i>",
		"<span style=\"color: #ff0000\">lineaj</span> (linearaj) kombinoj de statoj"
	],
	"£:BASE-logxantaro&\"<populacioj?n?>\"": [
		"£:BASE-logxantaro&\"<populacioj?n?>\"",
		"Falsa amiko – konfuzebla vortoparo: populacio → enloĝantaro",
		"La normala esperanta vorto por homgrupo loĝanta en lando, regiono aŭ urbo estas <i>‘loĝantaro’.</i> La alternativa <i>‘populacio’</i> (angle: <i>population</i>) estas statistika faktermino, uzata ĉefe en sciencaj tekstoj, kaj rilate al bestoj, plantoj aŭ malsanuloj. Ne temas pri certa eraro, sed konsideru fari ŝanĝon ĉi tie.",
		"La <span style=\"color: #ff0000\">populacio</span> (loĝantaro) de la urbo ribelis kontraŭ la invadintoj."
	],
	"£:BASE-.*provajxo": [
		"£:BASE-.*provajxo",
		"Falsa amiko – konfuzebla vortoparo: provo → provaĵo",
		"<i>'Provo’</i> estas ago, <i>‘provaĵo’</i> estas aĵo. Do oni legas, korektas aŭ sendas <i>‘presprovaĵon’</i> aŭ <i>‘lingvoprovaĵon’,</i> ne <i>‘presprovon’</i> aŭ <i>‘lingvoprovon’.</i>",
		"La libro enhavis 900-radikan vortaron kaj <span style=\"color: #ff0000\">lingvoprovojn</span> (lingvoprovaĵojn)."
	],
	"£:BASE-rombo&\"<lozangxoj?n?>\"": [
		"£:BASE-rombo&\"<lozangxoj?n?>\"",
		"Falsa amiko / ambigueco: lozanĝo → rombo",
		"Por eviti ambiguecon, prefere uzu la vorton <i>‘lozanĝo’</i> nur por la pilolo, ne kiel (falsamika) sinonimo de la geometria formo <i>‘rombo’.</i> Kun geometria senco nur uzu <i>‘lozanĝo’</i> por fajna (pintangula) rombo uzata por ornamaĵoj aŭ kiel simbolo en ekz. heraldiko (kp. difinon de Vikipedio).",
		"La kontraŭaj anguloj de lozanĝo (rombo) estas identaj."
	],
	"£:BASE-realigi&\"<ekzeku.*>\"": [
		"£:BASE-realigi&\"<ekzeku.*>\"",
		"Falsa amiko / konfuzebla vortogrupo: ekzekuti ↔ ekzekucii ↔ realigi",
		"<i>'Ekzekuto</i>’ estas punmortigo, oni do <i>ekzekutas</i> personon. Verdikton aŭ punon oni <i>ekzekucias,</i> kaj kutime temas pri finance-administraj aferoj. Ne uzu <i>‘ekzekuti’</i> aŭ <i>‘ekzekucii’</i> en la senco de ‘realigi’ (planon, ideon) aŭ ‘plenumi’ (taskon, ordonon).",
		"La nova registaro <span style=\"color: #ff0000\">ekzekutis</span> (realigis) socian programon.<br>\n<br>\nLa ribelantoj estis <span style=\"color: #ff0000\">ekzekuciitaj</span> (ekzekutitaj)."
	],
	"£:BASE-plenumi&\"<ekzeku.*\"": [
		"£:BASE-plenumi&\"<ekzeku.*\"",
		"Falsa amiko / konfuzebla vortogrupo: ekzekuti ↔ ekzekucii ↔ realigi",
		"<i>'Ekzekuto</i>’ estas punmortigo, oni do <i>ekzekutas</i> personon. Verdikton aŭ punon oni <i>ekzekucias,</i> kaj kutime temas pri finance-administraj aferoj. Ne uzu <i>‘ekzekuti’</i> aŭ <i>‘ekzekucii’</i> en la senco de ‘realigi’ (planon, ideon) aŭ ‘plenumi’ (taskon, ordonon).",
		"La nova registaro <span style=\"color: #ff0000\">ekzekutis</span> (realigis) socian programon.<br>\n<br>\nLa ribelantoj estis <span style=\"color: #ff0000\">ekzekuciitaj</span> (ekzekutitaj)."
	],
	"£:BASE-ekzekuti": [
		"£:BASE-ekzekuti",
		"Falsa amiko / konfuzebla vortogrupo: ekzekuti ↔ ekzekucii ↔ realigi",
		"<i>'Ekzekuto</i>’ estas punmortigo, oni do <i>ekzekutas</i> personon. Verdikton aŭ punon oni <i>ekzekucias,</i> kaj kutime temas pri finance-administraj aferoj. Ne uzu <i>‘ekzekuti’</i> aŭ <i>‘ekzekucii’</i> en la senco de ‘realigi’ (planon, ideon) aŭ ‘plenumi’ (taskon, ordonon).",
		"La nova registaro <span style=\"color: #ff0000\">ekzekutis</span> (realigis) socian programon.<br>\n<br>\nLa ribelantoj estis <span style=\"color: #ff0000\">ekzekuciitaj</span> (ekzekutitaj)."
	],
	"£:BASE-ekzekucii": [
		"£:BASE-ekzekucii",
		"Falsa amiko / konfuzebla vortogrupo: ekzekuti ↔ ekzekucii ↔ realigi",
		"<i>'Ekzekuto</i>’ estas punmortigo, oni do <i>ekzekutas</i> personon. Verdikton aŭ punon oni <i>ekzekucias,</i> kaj kutime temas pri finance-administraj aferoj. Ne uzu <i>‘ekzekuti’</i> aŭ <i>‘ekzekucii’</i> en la senco de ‘realigi’ (planon, ideon) aŭ ‘plenumi’ (taskon, ordonon).",
		"La nova registaro <span style=\"color: #ff0000\">ekzekutis</span> (realigis) socian programon.<br>\n<br>\nLa ribelantoj estis <span style=\"color: #ff0000\">ekzekuciitaj</span> (ekzekutitaj)."
	],
	"£:BASE-pravi&\"<rajt.*>\"": [
		"£:BASE-pravi&\"<rajt.*>\"",
		"Falsa amiko / konfuzebla vortogrupo: rajti – pravi – ĝusti",
		"Ne konfuzu <i>‘pravi’, ‘rajti’</i> kaj <i>‘ĝusti’.</i> En disputo estas la persono, kiu pravas (angle: <i>be right</i>), kaj estas la fakto aŭ respondo, kiu ĝustas (angle: <i>be correct)</i>.<br>\n<br>\nLa verbo <i>‘Rajti’</i> signifas ‘havi permeson’ (angle: <i>have the right to,</i> germane: <i>dürfen</i>), kaj oni kutime uzas la vorton kun aga infinitivo, ekz. <i>rajti aĉeti alkoholon.</i> Estas (germana) falsa amiko uzi <i>‘rajti’</i> en la senco de <i>‘pravi’</i> (germane: <i>Recht haben</i>).<br>\n<br>\nNotu ankaŭ la diferencon inter <i>‘ĝusta’</i> kaj <i>‘korekta’</i> (angle: <i>correcting</i>).",
		"Ne <span style=\"color: #ff0000\">pravas</span> (ĝustas), ke vakcinoj kaŭzas sterilecon.<br>\n<br>\nVi <span style=\"color: #ff0000\">rajtas</span> (pravas), ke estas tro malhele por daŭrigi."
	],
	"£:BASE-gxusti&\"<prav.*>\"": [
		"£:BASE-gxusti&\"<prav.*>\"",
		"Falsa amiko / konfuzebla vortogrupo: rajti – pravi – ĝusti",
		"Ne konfuzu <i>‘pravi’, ‘rajti’</i> kaj <i>‘ĝusti’.</i> En disputo estas la persono, kiu pravas (angle: <i>be right</i>), kaj estas la fakto aŭ respondo, kiu ĝustas (angle: <i>be correct)</i>.<br>\n<br>\nLa verbo <i>‘Rajti’</i> signifas ‘havi permeson’ (angle: <i>have the right to,</i> germane: <i>dürfen</i>), kaj oni kutime uzas la vorton kun aga infinitivo, ekz. <i>rajti aĉeti alkoholon.</i> Estas (germana) falsa amiko uzi <i>‘rajti’</i> en la senco de <i>‘pravi’</i> (germane: <i>Recht haben</i>).<br>\n<br>\nNotu ankaŭ la diferencon inter <i>‘ĝusta’</i> kaj <i>‘korekta’</i> (angle: <i>correcting</i>).",
		"Ne <span style=\"color: #ff0000\">pravas</span> (ĝustas), ke vakcinoj kaŭzas sterilecon.<br>\n<br>\nVi <span style=\"color: #ff0000\">rajtas</span> (pravas), ke estas tro malhele por daŭrigi."
	],
	"£:BASE-stalo&\"<stabloj?n?>\"": [
		"£:BASE-stalo&\"<stabloj?n?>\"",
		"Falsa amiko / konfuzebla vortogrupo: stablo/ŝtalo → stalo",
		"En Esperanto, ‘<i>stablo’</i> estas metitablo (angle: <i>workbench</i>), kaj <i>‘ŝtalo’</i> (germane: <i>Stahl)</i> estas fera materialo. Por bestodomo, uzu <i>‘stalo’.</i>",
		"Estis 20 ĉevaloj en la <span style=\"color: #ff0000\">stablo</span> (stalo)."
	],
	"£:BASE-stalo&\"<sxtaloj?n?>\"": [
		"£:BASE-stalo&\"<sxtaloj?n?>\"",
		"Falsa amiko / konfuzebla vortogrupo: stablo/ŝtalo → stalo",
		"En Esperanto, ‘<i>stablo’</i> estas metitablo (angle: <i>workbench</i>), kaj <i>‘ŝtalo’</i> (germane: <i>Stahl)</i> estas fera materialo. Por bestodomo, uzu <i>‘stalo’.</i>",
		"Estis 20 ĉevaloj en la <span style=\"color: #ff0000\">stablo</span> (stalo)."
	],
	"£:BASE-tablojdo": [
		"£:BASE-tablojdo",
		"Falsa amiko / konfuzebla vortogrupo: tableto/tabledo → tablojdo/pleto",
		"En Esperanto, <i>'tableto'</i> simple estas eta tablo. Por la diversaj alilingvaj falsaj amikoj oni uzas <i>'tablojdo'</i> (medicina premaĵo), <i>'pleto'</i> (plato por servi manĝaĵojn aŭ trinkaĵojn) kaj <i>'tabulkomputilo/platkomputilo'.</i> Por ĉiuj tri iuj foje uzas <i>'tabledo',</i> sed tio ne estas oficiala Esperanta vorto.",
		"Trifoje tage manĝu po tri <span style=\"color: #ff0000\">tabletojn</span> (tablojdojn) kun akvo.<br>\n<br>\nLa kelnero alportis drinkaĵojn sur arĝenta <span style=\"color: #ff0000\">tableto</span> (pleto).<br>\n<br>\nVi povas uzi la programon per saĝtelefono aŭ tabledo (platkomputilo)"
	],
	"£:BASE-pleto&\"<tabl.*>\"": [
		"£:BASE-pleto&\"<tabl.*>\"",
		"Falsa amiko / konfuzebla vortogrupo: tableto/tabledo → tablojdo/pleto",
		"En Esperanto, <i>'tableto'</i> simple estas eta tablo. Por la diversaj alilingvaj falsaj amikoj oni uzas <i>'tablojdo'</i> (medicina premaĵo), <i>'pleto'</i> (plato por servi manĝaĵojn aŭ trinkaĵojn) kaj <i>'tabulkomputilo/platkomputilo'.</i> Por ĉiuj tri iuj foje uzas <i>'tabledo',</i> sed tio ne estas oficiala Esperanta vorto.",
		"Trifoje tage manĝu po tri <span style=\"color: #ff0000\">tabletojn</span> (tablojdojn) kun akvo.<br>\n<br>\nLa kelnero alportis drinkaĵojn sur arĝenta <span style=\"color: #ff0000\">tableto</span> (pleto).<br>\n<br>\nVi povas uzi la programon per saĝtelefono aŭ tabledo (platkomputilo)"
	],
	"£:BASE-tabulo&\"<tabl.*>\"": [
		"£:BASE-tabulo&\"<tabl.*>\"",
		"Falsa amiko / konfuzebla vortogrupo: tableto/tabledo → tablojdo/pleto",
		"En Esperanto, <i>'tableto'</i> simple estas eta tablo. Por la diversaj alilingvaj falsaj amikoj oni uzas <i>'tablojdo'</i> (medicina premaĵo), <i>'pleto'</i> (plato por servi manĝaĵojn aŭ trinkaĵojn) kaj <i>'tabulkomputilo/platkomputilo'.</i> Por ĉiuj tri iuj foje uzas <i>'tabledo',</i> sed tio ne estas oficiala Esperanta vorto.",
		"Trifoje tage manĝu po tri <span style=\"color: #ff0000\">tabletojn</span> (tablojdojn) kun akvo.<br>\n<br>\nLa kelnero alportis drinkaĵojn sur arĝenta <span style=\"color: #ff0000\">tableto</span> (pleto).<br>\n<br>\nVi povas uzi la programon per saĝtelefono aŭ tabledo (platkomputilo)"
	],
	"£:BASE-tabulkomputilo&\"<tabl.*>\"": [
		"£:BASE-tabulkomputilo&\"<tabl.*>\"",
		"Falsa amiko / konfuzebla vortogrupo: tableto/tabledo → tablojdo/pleto",
		"En Esperanto, <i>'tableto'</i> simple estas eta tablo. Por la diversaj alilingvaj falsaj amikoj oni uzas <i>'tablojdo'</i> (medicina premaĵo), <i>'pleto'</i> (plato por servi manĝaĵojn aŭ trinkaĵojn) kaj <i>'tabulkomputilo/platkomputilo'.</i> Por ĉiuj tri iuj foje uzas <i>'tabledo',</i> sed tio ne estas oficiala Esperanta vorto.",
		"Trifoje tage manĝu po tri <span style=\"color: #ff0000\">tabletojn</span> (tablojdojn) kun akvo.<br>\n<br>\nLa kelnero alportis drinkaĵojn sur arĝenta <span style=\"color: #ff0000\">tableto</span> (pleto).<br>\n<br>\nVi povas uzi la programon per saĝtelefono aŭ tabledo (platkomputilo)"
	],
	"£:BASE-materiismo&\"<materialismon?>\"": [
		"£:BASE-materiismo&\"<materialismon?>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"'Materialismo’ estas vivmaniero, kiu prioritatigas materialajn bezonojn super spiritajn. <i>‘Materiismo’</i> estas filozofia sistemo centrita je materio kiel bazo de ĉio, male al <i>‘ideismo’.</i>",
		""
	],
	"£:BASE-riparo&\"<reparacioj?n>\"": [
		"£:BASE-riparo&\"<reparacioj?n>\"",
		"Falsa amiko / konfuzebla vortoparo",
		"'Reparacioj' estas kompenspagoj, kiujn devas pagi la venkito al la venkinto post milito. Ne konfuzu tion kun <i>'riparo'</i> (maldifektigo) de ilo, maŝino aŭ aŭto.",
		"La <span style=\"color: #ff0000\">reparacio</span> (riparo) de la ŝipmotoro daŭris unu semajnon."
	],
	"£:BASE-mustardo": [
		"£:BASE-mustardo",
		"Falsa amiko / konfuzebla vortoparo",
		"'Sinapo' estas planto, <i>'mustardo'</i> spicaĵo el tiu planto.",
		"La salatsaŭco enhavis multe da <span style=\"color: #ff0000\">sinapo</span> (mustardo) kaj iom da vasabio."
	],
	"£:BASE-afekcii": [
		"£:BASE-afekcii",
		"Falsa amiko / konfuzebla vortoparo: afekti → afekcii",
		"En Esperanto, <i>‘afekti’</i> signifas troige ŝajnigi propran econ aŭ staton (angle: <i>pretend)</i>, dum <i>‘afekcii’</i> (angle: <i>affect</i>) signifas kaŭzi ŝanĝon en animstato aŭ korpofunkcio. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-influi&\"<afekt.*>\"": [
		"£:BASE-influi&\"<afekt.*>\"",
		"Falsa amiko / konfuzebla vortoparo: afekti → influi",
		"En Esperanto, <i>‘afekti’</i> nur povas signifi ‘troige ŝajnigi’ (econ, staton aŭ agon). Ne uzu la vorton kun la senco de ‘havi efikon al, influi’ (angle: <i>affect</i>).",
		"La usona armeo uzas la <span style=\"color: #c9211e\">designadon</span> (nomon) CC-130J por tiu aviadilo."
	],
	"£:BASE-akcxento": [
		"£:BASE-akcxento",
		"Falsa amiko / konfuzebla vortoparo: akcento – akĉento – supersigno",
		"Esterlandano havas <i>akĉenton,</i> vortprononco aŭ rimo havas <i>akcenton,</i> kaj esperantaj literoj havas <i>supersignojn.</i>",
		""
	],
	"£:BASE-akcento": [
		"£:BASE-akcento",
		"Falsa amiko / konfuzebla vortoparo: akcento – akĉento – supersigno",
		"Esterlandano havas <i>akĉenton,</i> vortprononco aŭ rimo havas <i>akcenton,</i> kaj esperantaj literoj havas <i>supersignojn.</i>",
		""
	],
	"£:BASE-supersigno": [
		"£:BASE-supersigno",
		"Falsa amiko / konfuzebla vortoparo: akcento – akĉento – supersigno",
		"Esterlandano havas <i>akĉenton,</i> vortprononco aŭ rimo havas <i>akcenton,</i> kaj esperantaj literoj havas <i>supersignojn.</i>",
		""
	],
	"£:BASE-preciza": [
		"£:BASE-preciza",
		"Falsa amiko / konfuzebla vortoparo: akurata ↔ preciza",
		"En Esperanto, akurateco temas pri tempo (angle: <i>on time</i>), dum angla <i>‘accurate’</i> en Esperanto esprimiĝas kiel precizeco. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-precize": [
		"£:BASE-precize",
		"Falsa amiko / konfuzebla vortoparo: akurata ↔ preciza",
		"En Esperanto, akurateco temas pri tempo (angle: <i>on time</i>), dum angla <i>‘accurate’</i> en Esperanto esprimiĝas kiel precizeco. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-akurate": [
		"£:BASE-akurate",
		"Falsa amiko / konfuzebla vortoparo: akurata ↔ preciza",
		"En Esperanto, akurateco temas pri tempo (angle: <i>on time</i>), dum angla <i>‘accurate’</i> en Esperanto esprimiĝas kiel precizeco. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-arko": [
		"£:BASE-arko",
		"Falsa amiko / konfuzebla vortoparo: arĉo → arko",
		"Oni uzas <i>arĉon</i> por ludi violonon. La ĝenerala vorto estas <i>arko</i> (angle: <span style=\"color: #0000ff\"><i>arch</i></span>).",
		""
	],
	"£:BASE-bendo&\"<bandoj?n?>\"": [
		"£:BASE-bendo&\"<bandoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: bando → bendo",
		"En Esperanto, <i>'bando'</i> estas homgrupo, ekz. muzika aŭ krimula, dum <i>'bendo'</i> estas longa mallarĝa ŝtof- aŭ plastpeco.",
		"La infanoj svingis buntajn <span style=\"color: #ff0000\">bandojn</span> (bendojn)."
	],
	"£:BASE-buko": [
		"£:BASE-buko",
		"Falsa amiko / konfuzebla vortoparo: buklo → buko",
		"'Buklo’ estas haro (angle: <i>lock, curl</i>), dum <i>‘buko’</i> (angle: <i>buckle</i>) estas fermilo uzata por fiksi zonon aŭ rubandon. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-sceno&\"<cxenoj?n?>\"": [
		"£:BASE-sceno&\"<cxenoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: ĉeno → sceno",
		"Ekzemple baze de la itala eblas konfuzi <i>‘sceno’</i> kaj <i>‘ĉeno’.</i> La unua estas teatra aŭ teatreca okazaĵo, aŭ parto de teatra akto (angle: <i>scene</i>), la dua aro de interligitaj eroj (angle: <i>chain</i>).",
		""
	],
	"£:BASE-sxuldi&\"<danki.*>\"": [
		"£:BASE-sxuldi&\"<danki.*>\"",
		"Falsa amiko / konfuzebla vortoparo: danki → ŝuldi",
		"La kerna signifo de <i>‘danki’</i> estas ‘diri dankon!’ Oni dankas iun aŭ al iu pro io. Estas arkaismo uzi la vorton en la senco de <i>‘ŝuldi’</i> (ion al iu).<br>\n<br>\nAnkaŭ notu, ke ne estas normale uzi la kialon de la dankado kiel objekton: ‘danki ion al iu’ estas strukture ambigua kaj miskomprenebla kiel ĝuste la arkaika senco <i>‘ŝuldi’.</i>",
		"Tiu albumo dankas (ŝuldas) sian sukceson al kanzono el la 60-aj jaroj.Ege midankas viajn bondezirojn (pro viaj bondeziroj) al vi cxiuj."
	],
	"£:BASE-debeti": [
		"£:BASE-debeti",
		"Falsa amiko / konfuzebla vortoparo: debeto ↔ debito",
		"Oni <i>debetas</i> monsumon (al konto), sed <i>debitas</i> varon (al iu). <i>Debeto</i> estas la antonimo de <i>kredito</i>, dum <i>debito</i> signifas \"podetala vendo\" (angle: turnover, germane: Umsatz).<br>\n<br>\nAlia signifo de debito estas <i>trafluo</i>:<br>\n<br>\n<i>La naftodukto havas debiton de 9 m³/s.</i><br>\n<br>\nPro la konfuzoriskoj, ReVo rekomendas simple eviti debiti/debito.",
		""
	],
	"£:BASE-debeto": [
		"£:BASE-debeto",
		"Falsa amiko / konfuzebla vortoparo: debeto ↔ debito",
		"Oni <i>debetas</i> monsumon (al konto), sed <i>debitas</i> varon (al iu). <i>Debeto</i> estas la antonimo de <i>kredito</i>, dum <i>debito</i> signifas \"podetala vendo\" (angle: turnover, germane: Umsatz).<br>\n<br>\nAlia signifo de debito estas <i>trafluo</i>:<br>\n<br>\n<i>La naftodukto havas debiton de 9 m³/s.</i><br>\n<br>\nPro la konfuzoriskoj, ReVo rekomendas simple eviti debiti/debito.",
		""
	],
	"£:BASE-debiti": [
		"£:BASE-debiti",
		"Falsa amiko / konfuzebla vortoparo: debeto ↔ debito",
		"Oni <i>debetas</i> monsumon (al konto), sed <i>debitas</i> varon (al iu). <i>Debeto</i> estas la antonimo de <i>kredito</i>, dum <i>debito</i> signifas \"podetala vendo\" (angle: turnover, germane: Umsatz).<br>\n<br>\nAlia signifo de debito estas <i>trafluo</i>:<br>\n<br>\n<i>La naftodukto havas debiton de 9 m³/s.</i><br>\n<br>\nPro la konfuzoriskoj, ReVo rekomendas simple eviti debiti/debito.",
		""
	],
	"£:BASE-debito": [
		"£:BASE-debito",
		"Falsa amiko / konfuzebla vortoparo: debeto ↔ debito",
		"Oni <i>debetas</i> monsumon (al konto), sed <i>debitas</i> varon (al iu). <i>Debeto</i> estas la antonimo de <i>kredito</i>, dum <i>debito</i> signifas \"podetala vendo\" (angle: turnover, germane: Umsatz).<br>\n<br>\nAlia signifo de debito estas <i>trafluo</i>:<br>\n<br>\n<i>La naftodukto havas debiton de 9 m³/s.</i><br>\n<br>\nPro la konfuzoriskoj, ReVo rekomendas simple eviti debiti/debito.",
		""
	],
	"£:BASE-trafluo&\"<debitoj?n?>\"": [
		"£:BASE-trafluo&\"<debitoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: debeto ↔ debito",
		"Oni <i>debetas</i> monsumon (al konto), sed <i>debitas</i> varon (al iu). <i>Debeto</i> estas la antonimo de <i>kredito</i>, dum <i>debito</i> signifas \"podetala vendo\" (angle: turnover, germane: Umsatz).<br>\n<br>\nAlia signifo de debito estas <i>trafluo</i>:<br>\n<br>\n<i>La naftodukto havas debiton de 9 m³/s.</i><br>\n<br>\nPro la konfuzoriskoj, ReVo rekomendas simple eviti debiti/debito.",
		""
	],
	"£:BASE-rekta": [
		"£:BASE-rekta",
		"Falsa amiko / konfuzebla vortoparo: direkta → rekta/senpera",
		"En Esperanto, <i>‘direkta’</i> signifas ĉiam <i>‘havanta direkton’</i> aŭ <i>‘direktanta’,</i> ekz. <i>direkta remilo/valvo, direkta komitato/konsilio.</i> Ĝi ne havas la sencon <i>‘sen kromvojo’</i> aŭ <i>‘sen kromaĵoj’</i> de la angla <i>‘direct’</i> aŭ germana <i>‘direkt’ .</i> Por tiu senco uzu ne <i>‘direkta’,</i> sed <i>‘rekta’</i> aŭ <i>‘senpera’:</i><br>\n<br>\n<i>rekta metodo, rekta objekto, rekta traduko, rekta elsendo</i><br>\n<br>\n<i>senpera kialo/kaŭzo, senpera lukro/profito</i>",
		""
	],
	"£:BASE-senpera": [
		"£:BASE-senpera",
		"Falsa amiko / konfuzebla vortoparo: direkta → rekta/senpera",
		"En Esperanto, <i>‘direkta’</i> signifas ĉiam <i>‘havanta direkton’</i> aŭ <i>‘direktanta’,</i> ekz. <i>direkta remilo/valvo, direkta komitato/konsilio.</i> Ĝi ne havas la sencon <i>‘sen kromvojo’</i> aŭ <i>‘sen kromaĵoj’</i> de la angla <i>‘direct’</i> aŭ germana <i>‘direkt’ .</i> Por tiu senco uzu ne <i>‘direkta’,</i> sed <i>‘rekta’</i> aŭ <i>‘senpera’:</i><br>\n<br>\n<i>rekta metodo, rekta objekto, rekta traduko, rekta elsendo</i><br>\n<br>\n<i>senpera kialo/kaŭzo, senpera lukro/profito</i>",
		""
	],
	"£:BASE-ekspozicio&\"<ekshibicioj?n?>\"": [
		"£:BASE-ekspozicio&\"<ekshibicioj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: ekshibicio → ekspozicio",
		"En Esperanto <i>‘ekshibicio’</i> signifas <i>‘sinmontremo’,</i> ofte en seksa/erotika kunteksto. Ne konfuzu tion kun <i>‘ekspozicio’</i> (angle: exhibition), kiu estas publika evento pri iu temo, ekz. <i>komerca/arta/sporta ekspozicio.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"La urbo organizis grandas <span style=\"color: #ff0000\">ekshibicion</span> (ekspozicion) pri moderne arto."
	],
	"£:BASE-fakulto": [
		"£:BASE-fakulto",
		"Falsa amiko / konfuzebla vortoparo: fakulto ↔ fakultato",
		"Temas pri angla falsa amiko <i>(faculty)</i>. En Esperanto, <i>‘fakultato’</i> estas universitata sekcio (ekz. medicino, juro), dum <i>‘fakulto’</i> estas sensa aŭ mensa kapablo aŭ lerto.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<i>Li laboras en la filozofia</i> <span style=\"color: #ff0000\"><i>fakulto</i></span><i> (fakultato).</i><br>\n<br>\n<i>Necesas stimuli la intelektajn</i> <span style=\"color: #ff0000\"><i>fakultatojn</i></span><i> (fakultojn) de infano.</i>"
	],
	"£:BASE-fakultato": [
		"£:BASE-fakultato",
		"Falsa amiko / konfuzebla vortoparo: fakulto ↔ fakultato",
		"Temas pri angla falsa amiko <i>(faculty)</i>. En Esperanto, <i>‘fakultato’</i> estas universitata sekcio (ekz. medicino, juro), dum <i>‘fakulto’</i> estas sensa aŭ mensa kapablo aŭ lerto.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<i>Li laboras en la filozofia</i> <span style=\"color: #ff0000\"><i>fakulto</i></span><i> (fakultato).</i><br>\n<br>\n<i>Necesas stimuli la intelektajn</i> <span style=\"color: #ff0000\"><i>fakultatojn</i></span><i> (fakultojn) de infano.</i>"
	],
	"£:BASE-.*formularo": [
		"£:BASE-.*formularo",
		"Falsa amiko / konfuzebla vortoparo: formo → formularo",
		"En Esperanto, <i>‘formo’</i> havas la kernan signifon de (ekstera) aspekto aŭ maniero de iu aĵo aŭ ago. Estas (angla) falsa amiko uzi la vorton anstataŭ <i>‘formularo’</i> (ŝablona dokumento).",
		""
	],
	"£:BASE-gemo&\"<gxemoj?n?>\"": [
		"£:BASE-gemo&\"<gxemoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: ĝemo → gemo",
		"<i>'Ĝemo’</i> estas dolorspiro (angle: <i>moan).</i> Ne konfuzu ĝin kun <i>‘gemo’,</i> kiu signifas ‘juvelŝtono’ (angle: <i>gem</i>). Estas la angla prononco, ne la skribo, kiu kreas la falsan amikon.",
		"La <span style=\"color: #ff0000\">ĝemoj</span> (gemoj) en lia krono estis de netaksebla valoro."
	],
	"£:BASE-milda": [
		"£:BASE-milda",
		"Falsa amiko / konfuzebla vortoparo: ĝentila → milda",
		"Oni mezuras ĝentilecon sur socia skalo, <i>‘ĝentila’</i> signifas ‘bonmaniere afabla’ (angle: <i>polite</i>). Ne konfuzu tion kun <i>‘milda’</i> (angle: <i>gentle</i>), kiu signifas ‘malakra/malsevera’.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<span style=\"color: #ff0000\">Ĝentila</span> (milda) vento movis la foliojn."
	],
	"£:BASE-milde": [
		"£:BASE-milde",
		"Falsa amiko / konfuzebla vortoparo: ĝentila → milda",
		"Oni mezuras ĝentilecon sur socia skalo, <i>‘ĝentila’</i> signifas ‘bonmaniere afabla’ (angle: <i>polite</i>). Ne konfuzu tion kun <i>‘milda’</i> (angle: <i>gentle</i>), kiu signifas ‘malakra/malsevera’.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<span style=\"color: #ff0000\">Ĝentila</span> (milda) vento movis la foliojn."
	],
	"£:BASE-justa&\"<gxustaj?n?>\"": [
		"£:BASE-justa&\"<gxustaj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: ĝusta → justa",
		"La adjektivo <i>‘ĝusta’</i> signifas ‘senerara’ aŭ ‘celtaŭga’, dum <i>‘justa’</i> temas pri moraleco, pri konformo kun leĝo aŭ (socia) regulo.",
		"Tiu imposto estas socie <span style=\"color: #ff0000\">malĝusta</span> (maljusta)."
	],
	"£:BASE-ideismo&\"<idealismon?>\"": [
		"£:BASE-ideismo&\"<idealismon?>\"",
		"Falsa amiko / konfuzebla vortoparo: ideismo → idealismo",
		"'Idealismo’ estas (ofte sinofera) celado al idealoj, dum <i>‘ideismo’</i> estas filozofia sitemo centrita je la koncepto de ideoj, male al <i>‘materiismo’.</i>",
		""
	],
	"£:BASE-indico": [
		"£:BASE-indico",
		"Falsa amiko / konfuzebla vortoparo: indekso → indico",
		"En Esperanto, <i>‘indekso’</i> estas ordigita listo de enhavo ktp. (ekz. <i>bibliografia/enhava indekso</i>), dum ‘<i>indico’</i> estas ordigonumero en vico (ekz. suba aŭ supra indico) aŭ mezurnombro pri io, ekz. <i>vivkosta/borsa/refrakta indico.</i>",
		"La firmao troviĝas en la <span style=\"color: #ff0000\">indekso</span> (indico) S&amp;P 500."
	],
	"£:BASE-ofendi&\"<insult.*>\"": [
		"£:BASE-ofendi&\"<insult.*>\"",
		"Falsa amiko / konfuzebla vortoparo: insulti → ofendi",
		"'Insulti’ signifas ‘ofende, fie kaj atakeme <b>paroli</b> al iu. Do nur personoj, gazetoj, radistacio ktp. povas insulti. <i>‘Ofendi’</i> estas pli ĝenerala, ankaŭ ago aŭ ideo povas ofendi. Krome ankaŭ eblas ofendi ne nur personon, sed ankaŭ regulon aŭ principon, en la senco de ‘malobei’.",
		"<i>La ebriulo laŭte kaj akravoĉe</i> <span style=\"color: #ff0000\"><i>ofendis</i></span><i> (insultis) la ĉeestantojn.</i><br>\n<br>\n<i>Lia silento</i> <span style=\"color: #ff0000\"><i>insultis</i></span><i> (ofendis) min.</i>"
	],
	"£:BASE-kolumno": [
		"£:BASE-kolumno",
		"Falsa amiko / konfuzebla vortoparo: kolumno ↔ kolono",
		"'Kolono’ estas parto de konstruaĵo, <i>‘kolumno’</i> estas parto de tabelo aŭ paĝo. <i>‘Kolono’</i> estas la pli ĝenerala vorto, uzebla ankaŭ figure, por kolono de akvo/hidrargo aŭ por kolono de tankoj.",
		"<i>En la dua</i> <span style=\"color: #ff0000\"><i>kolono</i></span><i> (kolumno) vi trovas la anglan tradukon, en la tria la francan.</i><br>\n<br>\n<i>La templo havis bele ornamitajn</i> <span style=\"color: #ff0000\"><i>kolumnojn</i></span><i> (kolonojn).</i>"
	],
	"£:BASE-kolono": [
		"£:BASE-kolono",
		"Falsa amiko / konfuzebla vortoparo: kolumno ↔ kolono",
		"'Kolono’ estas parto de konstruaĵo, <i>‘kolumno’</i> estas parto de tabelo aŭ paĝo. <i>‘Kolono’</i> estas la pli ĝenerala vorto, uzebla ankaŭ figure, por kolono de akvo/hidrargo aŭ por kolono de tankoj.",
		"<i>En la dua</i> <span style=\"color: #ff0000\"><i>kolono</i></span><i> (kolumno) vi trovas la anglan tradukon, en la tria la francan.</i><br>\n<br>\n<i>La templo havis bele ornamitajn</i> <span style=\"color: #ff0000\"><i>kolumnojn</i></span><i> (kolonojn).</i>"
	],
	"£:BASE-fidi&\"<konfid.*>\"": [
		"£:BASE-fidi&\"<konfid.*>\"",
		"Falsa amiko / konfuzebla vortoparo: konfidi → fidi",
		"Eblas konfuzi <i>‘fidi’</i> kaj <i>‘konfidi’.</i> Ambaŭ povas signifi <i>‘trust’</i> en la angla, sed la dua havas moralan aspekton, la unua ne. Do oni konfidas al persono, aŭ konfidas sekreton al iu, dum oni <i>fidas</i> la ĝusteston de aserto, aŭ je la kapablo de persono aŭ la taŭgeco de instrumento.<br>\n<br>\n<i>La armeo ankoraŭ ne plene</i> <span style=\"color: #ff0000\"><i>konfidas</i></span><i> (fidas) memgvidajn dronojn.</i><br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>.",
		""
	],
	"£:BASE-konscio": [
		"£:BASE-konscio",
		"Falsa amiko / konfuzebla vortoparo: konscio ↔ konscienco",
		"'Konscio’ estas mensa kapablo (angle: <i>consciousness</i>), dum <i>‘konscienco’</i> estas la morala sento de homo (angle: <i>conscience</i>). Oni <i>konscias</i> pri fakto aŭ situacio, kaj havas malbonan <i>konsciencon</i> pri ago.",
		"<i>Kreskas la</i> <span style=\"color: #ff0000\"><i>konscienco</i></span><i> (konscio) pri la klimataj problemoj.</i><br>\n<br>\n<i>Li havas puran/bonan/trankvilan</i> <span style=\"color: #ff0000\"><i>konscion</i></span><i> (konsciencon) pri la afero.</i>"
	],
	"£:BASE-konscienco": [
		"£:BASE-konscienco",
		"Falsa amiko / konfuzebla vortoparo: konscio ↔ konscienco",
		"'Konscio’ estas mensa kapablo (angle: <i>consciousness</i>), dum <i>‘konscienco’</i> estas la morala sento de homo (angle: <i>conscience</i>). Oni <i>konscias</i> pri fakto aŭ situacio, kaj havas malbonan <i>konsciencon</i> pri ago.",
		"<i>Kreskas la</i> <span style=\"color: #ff0000\"><i>konscienco</i></span><i> (konscio) pri la klimataj problemoj.</i><br>\n<br>\n<i>Li havas puran/bonan/trankvilan</i> <span style=\"color: #ff0000\"><i>konscion</i></span><i> (konsciencon) pri la afero.</i>"
	],
	"£:BASE-konsiliano&\"<konsilanoj?n?>\"": [
		"£:BASE-konsiliano&\"<konsilanoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: konsilo → konsilio",
		"En Esperanto, <i>‘konsilo’</i> estas helpindiko (angle: <i>advice</i>). Ĝi ne havas la sencon de <i>‘konsilio’</i> (konsilantaro, angle: <i>council</i>). Temas pri plurlingva falsa amiko. <i>‘Konsilano’</i> estas neebla vortformaĵo, ĉar oni ne povas esti ano de ago. Devas esti <i>‘konsiliano’.</i> Simile ne eblas formi <i>‘konsilanaro’</i> kun la signifo de <i>‘konsilistaro’.</i>",
		"La <span style=\"color: #ff0000\">konsilanoj</span> (konsilianoj) parolis per telekunveno."
	],
	"£:BASE-konsilistaro&\"<konsilanaroj?n?>\"": [
		"£:BASE-konsilistaro&\"<konsilanaroj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: konsilo → konsilio",
		"En Esperanto, <i>‘konsilo’</i> estas helpindiko (angle: <i>advice</i>). Ĝi ne havas la sencon de <i>‘konsilio’</i> (konsilantaro, angle: <i>council</i>). Temas pri plurlingva falsa amiko. <i>‘Konsilano’</i> estas neebla vortformaĵo, ĉar oni ne povas esti ano de ago. Devas esti <i>‘konsiliano’.</i> Simile ne eblas formi <i>‘konsilanaro’</i> kun la signifo de <i>‘konsilistaro’.</i>",
		"La <span style=\"color: #ff0000\">konsilanoj</span> (konsilianoj) parolis per telekunveno."
	],
	"£:BASE-konsilio&\"<konsiloj?n?>\"": [
		"£:BASE-konsilio&\"<konsiloj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: konsilo → konsilio",
		"En Esperanto, <i>‘konsilo’</i> estas helpindiko (angle: <i>advice</i>). Ĝi ne havas la sencon de <i>‘konsilio’</i> (konsilantaro, angle: <i>council</i>). Temas pri plurlingva falsa amiko. <i>‘Konsilano’</i> estas neebla vortformaĵo, ĉar oni ne povas esti ano de ago. Devas esti <i>‘konsiliano’.</i> Simile ne eblas formi <i>‘konsilanaro’</i> kun la signifo de <i>‘konsilistaro’.</i>",
		"La <span style=\"color: #ff0000\">konsilanoj</span> (konsilianoj) parolis per telekunveno."
	],
	"£:BASE-regi&\"<kontrol.*>\"r": [
		"£:BASE-regi&\"<kontrol.*>\"r",
		"Falsa amiko / konfuzebla vortoparo: kontroli → regi",
		"Oni <i>kontrolas,</i> ĉu io estas en ordo kaj laŭ supozo (angle: <i>check</i>), kaj en tiu senco eblas kontroli fakton, personon, spezkalkulon ktp. Sed en Esperanto ne eblas uzi la vorto kun la senco ‘regi/direkti’ (angle: <i>control</i>):",
		"La rebeloj <span style=\"color: #ff0000\">kontrolis</span> (regis) la orientan parton de la lando."
	],
	"£:BASE-regilo&\"<kontroliloj?n?>\"": [
		"£:BASE-regilo&\"<kontroliloj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: kontroli → regi",
		"Oni <i>kontrolas,</i> ĉu io estas en ordo kaj laŭ supozo (angle: <i>check</i>), kaj en tiu senco eblas kontroli fakton, personon, spezkalkulon ktp. Sed en Esperanto ne eblas uzi la vorto kun la senco ‘regi/direkti’ (angle: <i>control</i>):",
		"La rebeloj <span style=\"color: #ff0000\">kontrolis</span> (regis) la orientan parton de la lando."
	],
	"£:BASE-responi&\"<korespond.*>\"": [
		"£:BASE-responi&\"<korespond.*>\"",
		"Falsa amiko / konfuzebla vortoparo: korespondi → respondi",
		"En Esperanto, <i>‘korespondi’</i> signifas ‘interŝanĝi mesaĝojn/leterojn’. Ne konfuzu tion kun <i>‘respondi’</i> en la senco de ‘proporcie/analoge rilati al’ (angle: <i>correspond</i>). Notu, ke tio estas kromsenco de <i>‘respondi’,</i> la baza senco estas ‘respondi al demando (aŭ ago)’.",
		"Tio <span style=\"color: #ff0000\">korespondis</span> (respondis) al unu kvarono de la tiama prezo de juna sklavo ."
	],
	"£:BASE-litero": [
		"£:BASE-litero",
		"Falsa amiko / konfuzebla vortoparo: letero → litero",
		"Ne konfuzu <i>‘letero’</i> kun <i>‘litero’.</i> La unua estas skriba mesaĝo, la dua skriba, alfabeta signo (a-z, A-Z).",
		"Tiu alfabeto estis bazita sur kartvelaj <span style=\"color: #ff0000\">leteroj</span> (literoj)."
	],
	"£:BASE-libera&\"<liberal.*>\"": [
		"£:BASE-libera&\"<liberal.*>\"",
		"Falsa amiko / konfuzebla vortoparo: liberala → libera",
		"'Liberala’ signifas ‘tolerem-ideologia’. Nedungita profesio estas <i>‘libera profesio’,</i> ne <i>‘</i><span style=\"color: #ff0000\"><i>liberala profesio</i></span><i>’.</i>",
		""
	],
	"£:BASE-leki&\"<lik.*>\"": [
		"£:BASE-leki&\"<lik.*>\"",
		"Falsa amiko / konfuzebla vortoparo: liki → leki",
		"Ne konfuzu <i>‘leki’</i> (angle:<i></i> lick) kaj <i>‘liki’</i> (angle: leak). Oni <i>‘lekas’</i> ion per la lango – korpoparton, manĝaĵon aŭ ĝenerale surfacon. <i>‘Liki’</i> signifas ‘tralasi likvaĵon’ aŭ ‘elflueti’. Barelo aŭ ŝipo povas liki en la unua senco, dum akvo, elektro aŭ – figure – sekretoj povas liki en la dua senco.<br>\n<br>\nNotu, ke eblas diri <i>‘akvo tralikiĝis’</i>, kvankam <i>‘liki’</i> jam estas netransitiva. Tio eblas, ĉar la sufikso <i>-iĝ</i> aldoniĝas al la substantivo <i>‘liko’: tra+lik+iĝ+i.</i>",
		"La hundo <span style=\"color: #ff0000\">likis</span> (lekis) lian manon."
	],
	"£:BASE-malgxusta&\"<maljustaj?n?>\"": [
		"£:BASE-malgxusta&\"<maljustaj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: maljusta → malĝusta",
		"'Malĝusta’ signifas ‘erara’ (angle: <i>incorrect</i>), dum <i>‘maljusta’</i> signifas ‘kontraŭnorme malegala’ (angle: <i>injust</i>).",
		"Dum horoj ili marŝis en la <span style=\"color: #c9211e\">maljusta</span> (malĝusta) direkto."
	],
	"£:BASE-majstro": [
		"£:BASE-majstro",
		"Falsa amiko / konfuzebla vortoparo: mastro → majstro → ĉampiono",
		"Ne konfuzu <i>'mastro'</i> kaj <i>'majstro'</i> – la unua estas estro de servist(ar)o aŭ ejo aŭ la ringoj de Tolkien, la dua estas respektita lertulo aŭ spertulo, speciale pri arta aŭ metia fako, aŭ – kompreneble – LA majstro, Zamenhof.<br>\n<br>\nNotu ankaŭ, ke estas germana/dana falsa amiko, uzi <i>'majstro'</i> por sporta ĉampiono.",
		"Mi ŝatas la pentraĵon de la renesancaj <span style=\"color: #ff0000\">mastroj</span> (majstroj).<br>\n<br>\nTrifoje li fariĝis olimpika <span style=\"color: #ff0000\">majstro</span> (ĉampiono)."
	],
	"£:BASE-cxampiono": [
		"£:BASE-cxampiono",
		"Falsa amiko / konfuzebla vortoparo: mastro → majstro → ĉampiono",
		"Ne konfuzu <i>'mastro'</i> kaj <i>'majstro'</i> – la unua estas estro de servist(ar)o aŭ ejo aŭ la ringoj de Tolkien, la dua estas respektita lertulo aŭ spertulo, speciale pri arta aŭ metia fako, aŭ – kompreneble – LA majstro, Zamenhof.<br>\n<br>\nNotu ankaŭ, ke estas germana/dana falsa amiko, uzi <i>'majstro'</i> por sporta ĉampiono.",
		"Mi ŝatas la pentraĵon de la renesancaj <span style=\"color: #ff0000\">mastroj</span> (majstroj).<br>\n<br>\nTrifoje li fariĝis olimpika <span style=\"color: #ff0000\">majstro</span> (ĉampiono)."
	],
	"£:BASE-maniero&\"<modoj?n?>\"": [
		"£:BASE-maniero&\"<modoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: modo → maniero",
		"En Esperanto, modo estas portempa vesta aŭ konduta furorkutimo (angle: <i>fashion</i>). Ne konfuzu la vorton kun <i>maniero</i> (angle: <i>manner, mode</i>).",
		"Nur ekzistas unu <span style=\"color: #ff0000\">modo</span> (maniero) solvi tion."
	],
	"£:BASE-muldilo": [
		"£:BASE-muldilo",
		"Falsa amiko / konfuzebla vortoparo: muldo – muldilo – muldaĵo",
		"En Esperanto, <i>‘muldo’</i> simple estas la ago muldi (‘formi’, angle: <i>mold</i>) ion en speciala, formiga ujo. Ne uzu uzu la vorton en la senco de <i>muldaĵo</i> (la produkto) aŭ <i>muldilo</i> (la ujo).<br>\n<br>\nLa germana <i>‘Mulde’</i> estas falsa amiko kaj tradukiĝas al Esperanto kiel <i>‘kavo’.</i>",
		""
	],
	"£:BASE-muldajxo": [
		"£:BASE-muldajxo",
		"Falsa amiko / konfuzebla vortoparo: muldo – muldilo – muldaĵo",
		"En Esperanto, <i>‘muldo’</i> simple estas la ago muldi (‘formi’, angle: <i>mold</i>) ion en speciala, formiga ujo. Ne uzu uzu la vorton en la senco de <i>muldaĵo</i> (la produkto) aŭ <i>muldilo</i> (la ujo).<br>\n<br>\nLa germana <i>‘Mulde’</i> estas falsa amiko kaj tradukiĝas al Esperanto kiel <i>‘kavo’.</i>",
		""
	],
	"£:BASE-kavo&\"<muldoj?n?>\"": [
		"£:BASE-kavo&\"<muldoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: muldo – muldilo – muldaĵo",
		"En Esperanto, <i>‘muldo’</i> simple estas la ago muldi (‘formi’, angle: <i>mold</i>) ion en speciala, formiga ujo. Ne uzu uzu la vorton en la senco de <i>muldaĵo</i> (la produkto) aŭ <i>muldilo</i> (la ujo).<br>\n<br>\nLa germana <i>‘Mulde’</i> estas falsa amiko kaj tradukiĝas al Esperanto kiel <i>‘kavo’.</i>",
		""
	],
	"£:BASE-bezoni&\"<neces.*>\"": [
		"£:BASE-bezoni&\"<neces.*>\"",
		"Falsa amiko / konfuzebla vortoparo: necesi → bezoni",
		"La vorto <i>‘necesi’</i> estas netransitiva (angle: <i>be necessary</i>).Povas temi pri hispana falsa amiko. En Esperanto, oni ne <span style=\"color: #ff0000\"><i>necesas ion</i></span><i>,</i> sed <i>bezonas ion</i> (angle: <i>need,</i> hispane: <i>necessitar</i>).",
		"Mi <span style=\"color: #ff0000\">necesas</span> (bezonas) novan jakon."
	],
	"£:BASE-origina": [
		"£:BASE-origina",
		"Falsa amiko / konfuzebla vortoparo: originala/e → origina/e",
		"<i>'Originala’</i> havas du bazajn signifojn. Unue ĝi povas celi la veran, ne-kopiitan, ne-tradukitan version de io. Due, ĝi povas signifi ‘unika/individua’. La tre simila vorto <i>‘origina’</i> havas tempan aŭ lokan aspekton kaj celas la (nun ŝanĝitan) elirstaton, -econ aŭ -lokon de io. Temas pri falsa amiko en multaj lingvoj, kie ambaŭ vortoj tradukiĝas same <i>(</i>ekz. angle: <i>original).</i> Kelkaj lingvoj tamen havas, kiel Esperanto, apartan vorton por <i>‘origina’</i> (ekz. germane: <i>ursprünglich</i>).",
		"La <span style=\"color: #ff0000\">originala</span> (origina) finstacio de la metroo estis la flughaveno."
	],
	"£:origine&\"<originale>\"": [
		"£:origine&\"<originale>\"",
		"Falsa amiko / konfuzebla vortoparo: originala/e → origina/e",
		"<i>'Originala’</i> havas du bazajn signifojn. Unue ĝi povas celi la veran, ne-kopiitan, ne-tradukitan version de io. Due, ĝi povas signifi ‘unika/individua’. La tre simila vorto <i>‘origina’</i> havas tempan aŭ lokan aspekton kaj celas la (nun ŝanĝitan) elirstaton, -econ aŭ -lokon de io. Temas pri falsa amiko en multaj lingvoj, kie ambaŭ vortoj tradukiĝas same <i>(</i>ekz. angle: <i>original).</i> Kelkaj lingvoj tamen havas, kiel Esperanto, apartan vorton por <i>‘origina’</i> (ekz. germane: <i>ursprünglich</i>).",
		"La <span style=\"color: #ff0000\">originala</span> (origina) finstacio de la metroo estis la flughaveno."
	],
	"£:BASE-poluo&\"<polucioj?n>\"": [
		"£:BASE-poluo&\"<polucioj?n>\"",
		"Falsa amiko / konfuzebla vortoparo: polucio → poluo",
		"Tio ne estas certa eraro, sed konsideru uzi <i>‘poluo’</i> anstataŭ <i>‘polucio’,</i> kiam vi celas la sencon de ‘malpurigo de la medio’. <i>‘Poluo’</i> estas la plej ofta vorto por tio, dum <i>‘polucio’</i> estas ambigua, kun la unua signifo de ‘nokta elfluo de spermo sen koitado’.",
		"Antaue, karbobruligado multe kontribuis al la <span style=\"color: #ff0000\">aerpolucio</span> (aerpoluo) en industriaj regionoj."
	],
	"£x-etype-lemma&\"<.+polucio>\"": [
		"£x-etype-lemma&\"<.+polucio>\"",
		"Falsa amiko / konfuzebla vortoparo: polucio → poluo",
		"Tio ne estas certa eraro, sed konsideru uzi <i>‘poluo’</i> anstataŭ <i>‘polucio’,</i> kiam vi celas la sencon de ‘malpurigo de la medio’. <i>‘Poluo’</i> estas la plej ofta vorto por tio, dum <i>‘polucio’</i> estas ambigua, kun la unua signifo de ‘nokta elfluo de spermo sen koitado’.",
		"Antaue, karbobruligado multe kontribuis al la <span style=\"color: #ff0000\">aerpolucio</span> (aerpoluo) en industriaj regionoj."
	],
	"£:BASE-renkontigxo&\"<renkontoj?n?>\"": [
		"£:BASE-renkontigxo&\"<renkontoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: renkonto → renkontiĝo",
		"La diferenco inter <i>‘renkonto’</i> kaj <i>‘renkontiĝo’</i> estas, ke la unua tipe estas hazarda kaj persona, dum la dua estas organizita evento kun pli ol du partoprenantoj kaj difinita loko kaj daŭro, kaj celo aŭ temo. <i>Renkonto</i> ofte okazas <i>kun</i> aŭ <i>inter</i>, dum <i>renkontiĝo</i> tipe estas internacia, germana, esperanta, faka, 3-taga ktp.<br>\n<br>\n<i>Mia mateno komenciĝis per renkonto kun dikaj, malagrablaj insektoj.</i><br>\n<br>\n<i>Mi vizitis kafejan</i> <span style=\"color: #ff0000\"><i>renkonton</i></span><i> (renkontiĝon) de la loka klubo.</i>",
		""
	],
	"£:BASE-rezigno": [
		"£:BASE-rezigno",
		"Falsa amiko / konfuzebla vortoparo: rezignacii/o → rezigni/o",
		"<i>'Rezignacio’</i> estas psika stato, de \"kontraŭŝata akcepto pro fortomanko\", kaj <i>‘rezignacii’</i> signifas eniri tiun staton (angle: <i>state of being resigned</i>). Ne konfuzu tion kun la ago de <i>‘rezigni’</i> (angle: <i>give up</i>)<i>,</i> kiu permesas objekton: Oni povas <i>rezigni monon, postenon, tronon,</i> aŭ, kun infinitivo, <i>rezigni fari ion.</i> Substantive oni diras <i>rezigno je/pri io.</i>",
		"Li energie gvidis la firmaon ĝis sia <span style=\"color: #ff0000\">rezignacio</span> (rezigno) en 2011."
	],
	"£:BASE-rezigni": [
		"£:BASE-rezigni",
		"Falsa amiko / konfuzebla vortoparo: rezignacii/o → rezigni/o",
		"<i>'Rezignacio’</i> estas psika stato, de \"kontraŭŝata akcepto pro fortomanko\", kaj <i>‘rezignacii’</i> signifas eniri tiun staton (angle: <i>state of being resigned</i>). Ne konfuzu tion kun la ago de <i>‘rezigni’</i> (angle: <i>give up</i>)<i>,</i> kiu permesas objekton: Oni povas <i>rezigni monon, postenon, tronon,</i> aŭ, kun infinitivo, <i>rezigni fari ion.</i> Substantive oni diras <i>rezigno je/pri io.</i>",
		"Li energie gvidis la firmaon ĝis sia <span style=\"color: #ff0000\">rezignacio</span> (rezigno) en 2011."
	],
	"£:BASE-elekti&\"<selekt.*>\"": [
		"£:BASE-elekti&\"<selekt.*>\"",
		"Falsa amiko / konfuzebla vortoparo: selekti → elekti",
		"En Esperanto, <i>‘selekti’</i> havas tre limigitan sencon: ‘elekti kaj apartigi la plej taŭga(j)n ero(j)n el aro, forĵetante la reston’ (angle: <i>select,</i> germane: <i>auswählen</i>), ekz. Kun pli ĝenerala senco, uzu <i>‘elekti’</i> (angle: <i>choose</i>, germane: <i>wählen</i>).<br>\n<br>\n<i>Natura premo sur la insulo helpis selekti la plej sanajn indiviuojn.</i><br>\n<br>\n<i>Ni devas elekti ne nur novan prezidanton, sed ankaŭ vicprezidanton.</i>",
		"Kune ili <span style=\"color: #ff0000\">selectis</span> (elektis) dancmuzikon por la festo."
	],
	"£:BASE-elektigxi&\"<selektigx.*>\"": [
		"£:BASE-elektigxi&\"<selektigx.*>\"",
		"Falsa amiko / konfuzebla vortoparo: selekti → elekti",
		"En Esperanto, <i>‘selekti’</i> havas tre limigitan sencon: ‘elekti kaj apartigi la plej taŭga(j)n ero(j)n el aro, forĵetante la reston’ (angle: <i>select,</i> germane: <i>auswählen</i>), ekz. Kun pli ĝenerala senco, uzu <i>‘elekti’</i> (angle: <i>choose</i>, germane: <i>wählen</i>).<br>\n<br>\n<i>Natura premo sur la insulo helpis selekti la plej sanajn indiviuojn.</i><br>\n<br>\n<i>Ni devas elekti ne nur novan prezidanton, sed ankaŭ vicprezidanton.</i>",
		"Kune ili <span style=\"color: #ff0000\">selectis</span> (elektis) dancmuzikon por la festo."
	],
	"£:BASE-elekto&\"<selektoj?n?>\"": [
		"£:BASE-elekto&\"<selektoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: selekti → elekti",
		"En Esperanto, <i>‘selekti’</i> havas tre limigitan sencon: ‘elekti kaj apartigi la plej taŭga(j)n ero(j)n el aro, forĵetante la reston’ (angle: <i>select,</i> germane: <i>auswählen</i>), ekz. Kun pli ĝenerala senco, uzu <i>‘elekti’</i> (angle: <i>choose</i>, germane: <i>wählen</i>).<br>\n<br>\n<i>Natura premo sur la insulo helpis selekti la plej sanajn indiviuojn.</i><br>\n<br>\n<i>Ni devas elekti ne nur novan prezidanton, sed ankaŭ vicprezidanton.</i>",
		"Kune ili <span style=\"color: #ff0000\">selectis</span> (elektis) dancmuzikon por la festo."
	],
	"£:BASE-surtabligi&\"<serv.*>\"": [
		"£:BASE-surtabligi&\"<serv.*>\"",
		"Falsa amiko / konfuzebla vortoparo: servi → surtabligi, serviri",
		"<i>'Servi’</i> havas du ĉefajn signifojn:<br>\n<br>\n(a) homo servanta alian homon, aŭ al alia homo, kaj<br>\n<br>\n(b) aĵo servanta por fari ion, aŭ aĵo servanta kiel io<br>\n<br>\n(a) estas transitiva, kun homa objekto, dum (b) estas netransitiva. La signifo de (b) egalas al tiu de <i>‘utili’ (por/kiel).</i><br>\n<br>\nNotu, ke estas falsa (angla) amiko uzi la vorton kun la sencoj de <i>‘surtabligi’</i> (ekz. kafon) au de <i>‘serviri’</i> (ekz. pilkon en teniso).",
		"La pastajxojn oni <span style=\"color: #ff0000\">servas</span> (surtabligas) dolcxe kun sukero kaj cinamo.<br>\n<br>\nNur tiu ludanto, kiu <span style=\"color: #ff0000\">servas</span> (serviras) la pilkon, povas gajni poenton ."
	],
	"£:BASE-serviri": [
		"£:BASE-serviri",
		"Falsa amiko / konfuzebla vortoparo: servi → surtabligi, serviri",
		"<i>'Servi’</i> havas du ĉefajn signifojn:<br>\n<br>\n(a) homo servanta alian homon, aŭ al alia homo, kaj<br>\n<br>\n(b) aĵo servanta por fari ion, aŭ aĵo servanta kiel io<br>\n<br>\n(a) estas transitiva, kun homa objekto, dum (b) estas netransitiva. La signifo de (b) egalas al tiu de <i>‘utili’ (por/kiel).</i><br>\n<br>\nNotu, ke estas falsa (angla) amiko uzi la vorton kun la sencoj de <i>‘surtabligi’</i> (ekz. kafon) au de <i>‘serviri’</i> (ekz. pilkon en teniso).",
		"La pastajxojn oni <span style=\"color: #ff0000\">servas</span> (surtabligas) dolcxe kun sukero kaj cinamo.<br>\n<br>\nNur tiu ludanto, kiu <span style=\"color: #ff0000\">servas</span> (serviras) la pilkon, povas gajni poenton ."
	],
	"£:BASE-speco&\"<sortoj?n?>\"": [
		"£:BASE-speco&\"<sortoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: sorto → speco",
		"En Esperanto, <i>‘sorto’</i> estas simila al <i>‘destino’</i> (angle: <i>fate</i>). Ne eblas uzi la vorton en la senco de <i>‘speco’</i> (angle: type [of]).",
		"En la bulgara ekzistas multe da verbaj tempoj kaj <span style=\"color: #ff0000\">sortoj</span> (specoj) de konjugacio"
	],
	"£:BASE-fosilo&\"<spadoj?n?>\"": [
		"£:BASE-fosilo&\"<spadoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: spado → fosilo",
		"En Esperanto, <i>‘spado’</i> estas mallonga glavo. Ne konfuzu tion kun <i>‘fosilo’</i> (angle: <i>spade).</i>",
		"Tiun tagon ili trovis multajn <span style=\"color: #ff0000\">fosilojn</span> (fosiliojn)."
	],
	"£:BASE-precipe&\"<speciale>\"": [
		"£:BASE-precipe&\"<speciale>\"",
		"Falsa amiko / konfuzebla vortoparo: speciale → precipe/aparte",
		"En Esperanto, <i>‘speciale’</i> signifas ‘laŭ speciala maniero’, ‘por difinita celo’. Por la angla <i>‘especially’,</i> kiam temas pri grado de graveco,<i></i> uzu <i>‘precipe’.</i> Antaŭ adjektivo, kiam temas pri elstareco, konsideru uzi <i>‘aparte’.</i>",
		"Pliboniĝas la stato de industrilandoj, <span style=\"color: #ff0000\">speciale</span> (precipe) en Eŭropo.Iutage , kiam la situacio estis <span style=\"color: #ff0000\">speciale</span> (aparte) strecxa , alvenis José , lia kuzo ."
	],
	"£:BASE-aparte&\"<speciale>\"": [
		"£:BASE-aparte&\"<speciale>\"",
		"Falsa amiko / konfuzebla vortoparo: speciale → precipe/aparte",
		"En Esperanto, <i>‘speciale’</i> signifas ‘laŭ speciala maniero’, ‘por difinita celo’. Por la angla <i>‘especially’,</i> kiam temas pri grado de graveco,<i></i> uzu <i>‘precipe’.</i> Antaŭ adjektivo, kiam temas pri elstareco, konsideru uzi <i>‘aparte’.</i>",
		"Pliboniĝas la stato de industrilandoj, <span style=\"color: #ff0000\">speciale</span> (precipe) en Eŭropo.Iutage , kiam la situacio estis <span style=\"color: #ff0000\">speciale</span> (aparte) strecxa , alvenis José , lia kuzo ."
	],
	"£:BASE-normo&\"<standardoj?n?>\"": [
		"£:BASE-normo&\"<standardoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: standardo → normo",
		"En Esperanto, <i>‘standardo’</i> estas insigno-flago de armeo, partio ktp. (angle: <i>banner</i>). Ne konfuzu tion kun <i>‘normo’.</i> Kaj tute ne ekzistas <i>'standarto'.</i>",
		"Tiu simbolo ne troviĝas en la unikoda <span style=\"color: #ff0000\">standardo</span> (normo).<br>\n<br>\nNecesas <span style=\"color: #ff0000\">standardigi</span> (normigi) la literumon de tiu vorto.<br>\n<br>\n<span style=\"color: #ff0000\">skribstandardo</span> (skribnormo)"
	],
	"£x-etype-lemma&\"<.*standar[dt].*>\"&\".*norm.*\"": [
		"£x-etype-lemma&\"<.*standar[dt].*>\"&\".*norm.*\"",
		"Falsa amiko / konfuzebla vortoparo: standardo → normo",
		"En Esperanto, <i>‘standardo’</i> estas insigno-flago de armeo, partio ktp. (angle: <i>banner</i>). Ne konfuzu tion kun <i>‘normo’.</i> Kaj tute ne ekzistas <i>'standarto'.</i>",
		"Tiu simbolo ne troviĝas en la unikoda <span style=\"color: #ff0000\">standardo</span> (normo).<br>\n<br>\nNecesas <span style=\"color: #ff0000\">standardigi</span> (normigi) la literumon de tiu vorto.<br>\n<br>\n<span style=\"color: #ff0000\">skribstandardo</span> (skribnormo)"
	],
	"£:BASE-sxtato": [
		"£:BASE-sxtato",
		"Falsa amiko / konfuzebla vortoparo: stato → ŝtato",
		"Ne konfuzu <i>‘stato’</i> kaj <i>‘ŝtato’.</i> La unua temas pri momenta eco aŭ estomaniero (angle: <i>state = condition</i>), dum la dua havas signifon similan al ‘<i>lando</i>’ (angle: <i>state = country</i>).",
		"La landopeco estis donacita de la greka <span style=\"color: #ff0000\">stato</span> (ŝtato)."
	],
	"£x-etype-lemma&\"<stat.*>\"&\"sxtat.*\"": [
		"£x-etype-lemma&\"<stat.*>\"&\"sxtat.*\"",
		"Falsa amiko / konfuzebla vortoparo: stato → ŝtato",
		"Ne konfuzu <i>‘stato’</i> kaj <i>‘ŝtato’.</i> La unua temas pri momenta eco aŭ estomaniero (angle: <i>state = condition</i>), dum la dua havas signifon similan al ‘<i>lando</i>’ (angle: <i>state = country</i>).",
		"La landopeco estis donacita de la greka <span style=\"color: #ff0000\">stato</span> (ŝtato)."
	],
	"£:BASE-sukcedo": [
		"£:BASE-sukcedo",
		"Falsa amiko / konfuzebla vortoparo: sukcesio → sukcedo",
		"En Esperanto, <i>'sukcesio'</i> estas biologia fakesprimo kun la signifo 'sinsekvo de diversspecaj biocenozoj'. Ne konfuzu la vorton kun la politika koncepto de <i>'sukcedo'</i> (de reĝaj familioj aŭ apostoloj).",
		"La konflikto pri la hispana <span style=\"color: #ff0000\">sukcesio</span> (sukcedo) estis kaŭzo por milito."
	],
	"£:BASE-tabelo": [
		"£:BASE-tabelo",
		"Falsa amiko / konfuzebla vortoparo: tablo → tabelo",
		"<i>'Tablo'</i> estas meblo, dum <i>'tabelo'</i> estas metoda aranĝo de informoj en kolumnoj kaj linioj.",
		"La ĉi-suba <span style=\"color: #ff0000\">tablo</span> (tabelo) montras la evoluon dum la lasta jardeko."
	],
	"£:BASE-.*imposto&\"<.*taksoj?n?>\"": [
		"£:BASE-.*imposto&\"<.*taksoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: takso → imposto",
		"En Esperanto, <i>‘takso’</i> estas substantivigo de la verbo <i>‘taksi’</i> (angle: <i>assess</i>). Ne konfuzu tion kun <i>‘imposto’</i> (deviga pago de civitano al la ŝtato, angle: <i>tax</i>).",
		"Por domoj kun marvido oni pagas altajn <span style=\"color: #ff0000\">grundotaksojn</span> (grundimpostojn)."
	],
	"£:BASE-tendo&\"<tentoj?n?>\"": [
		"£:BASE-tendo&\"<tentoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: tento → tendo → klopodo",
		"En Esperanto, <i>'tento'</i> signifas 'veki ardajn dezirojn en iu', kaj ofte temas pri religia kunteksto. Ne uzu la vorton en la senco de <i>'strebi'</i> aŭ <i>'klopodi'</i> (fari ion). Kaj ne konfuzu ĝin kun <i>'tendo'</i> (portempa loĝejo el tolo aŭ feloj, kun stanga skeleto, angle: <i>tend</i>).",
		"Liaj <span style=\"color: #ff0000\">tentoj</span> (klopodoj) reformi la pensian sistemon fiaskis.<br>\n<br>\nNi dormis ĉiuj kune en granda <span style=\"color: #ff0000\">tento</span> (tendo)."
	],
	"£:BASE-klopodo&\"<tentoj?n?>\"": [
		"£:BASE-klopodo&\"<tentoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: tento → tendo → klopodo",
		"En Esperanto, <i>'tento'</i> signifas 'veki ardajn dezirojn en iu', kaj ofte temas pri religia kunteksto. Ne uzu la vorton en la senco de <i>'strebi'</i> aŭ <i>'klopodi'</i> (fari ion). Kaj ne konfuzu ĝin kun <i>'tendo'</i> (portempa loĝejo el tolo aŭ feloj, kun stanga skeleto, angle: <i>tend</i>).",
		"Liaj <span style=\"color: #ff0000\">tentoj</span> (klopodoj) reformi la pensian sistemon fiaskis.<br>\n<br>\nNi dormis ĉiuj kune en granda <span style=\"color: #ff0000\">tento</span> (tendo)."
	],
	"£:BASE-termino&\"<termoj?n?>\"": [
		"£:BASE-termino&\"<termoj?n?>\"",
		"Falsa amiko / konfuzebla vortoparo: termo → termino",
		"En Esperanto, <i>‘termo’</i> estas parto de matematika objekto, dum <i>‘termino’</i> estas fakvorto aŭ esprimo (angle: <i>expression, term</i>).",
		"Dimorfismo estas teknika <span style=\"color: #ff0000\">termo</span> (termino) devenanta el la greka."
	],
	"£:BASE-iri&\"<vojagx.*>\"": [
		"£:BASE-iri&\"<vojagx.*>\"",
		"Falsa amiko / konfuzebla vortoparo: vojaĝi → iri/veni/moviĝi",
		"En Esperanto, la verbo <i>‘vojaĝi’</i> (angle: <i>travel</i>) havas relative mallarĝan signifon. Temas pri homo, kiu moviĝas al aŭ tra iom granda geografia areo – lando, regiono, urbo. Se temas pri moviĝantaj aĵoj, veturiloj aŭ pri la moviĝo mem, necesas uzi alian vorton, krom se temas pri intenca metafora uzo. Plej ofte taŭgas la tre ĝenerala <i>‘iri’,</i> eble ‘<i>veni’</i> aŭ simple <i>‘moviĝi’.</i> Por veturiloj kaj ĝenerale transportmaŝinoj eblas ankaŭ <i>‘veturi’.</i>",
		"La marŝo <span style=\"color: #ff0000\">vojaĝis</span> (iris) laŭ la aŭtoŝoseo al la centro.<br>\n<br>\nVia mendo <span style=\"color: #ff0000\">vojaĝas</span> (venas) per ordinara poŝto.<br>\n<br>\nLumo <span style=\"color: #ff0000\">vojaĝas</span> (moviĝas) rapide."
	],
	"£:BASE-movigxi&\"<vojagx.*>\"": [
		"£:BASE-movigxi&\"<vojagx.*>\"",
		"Falsa amiko / konfuzebla vortoparo: vojaĝi → iri/veni/moviĝi",
		"En Esperanto, la verbo <i>‘vojaĝi’</i> (angle: <i>travel</i>) havas relative mallarĝan signifon. Temas pri homo, kiu moviĝas al aŭ tra iom granda geografia areo – lando, regiono, urbo. Se temas pri moviĝantaj aĵoj, veturiloj aŭ pri la moviĝo mem, necesas uzi alian vorton, krom se temas pri intenca metafora uzo. Plej ofte taŭgas la tre ĝenerala <i>‘iri’,</i> eble ‘<i>veni’</i> aŭ simple <i>‘moviĝi’.</i> Por veturiloj kaj ĝenerale transportmaŝinoj eblas ankaŭ <i>‘veturi’.</i>",
		"La marŝo <span style=\"color: #ff0000\">vojaĝis</span> (iris) laŭ la aŭtoŝoseo al la centro.<br>\n<br>\nVia mendo <span style=\"color: #ff0000\">vojaĝas</span> (venas) per ordinara poŝto.<br>\n<br>\nLumo <span style=\"color: #ff0000\">vojaĝas</span> (moviĝas) rapide."
	],
	"£:BASE-veni&\"<vojagx.*>\"": [
		"£:BASE-veni&\"<vojagx.*>\"",
		"Falsa amiko / konfuzebla vortoparo: vojaĝi → iri/veni/moviĝi",
		"En Esperanto, la verbo <i>‘vojaĝi’</i> (angle: <i>travel</i>) havas relative mallarĝan signifon. Temas pri homo, kiu moviĝas al aŭ tra iom granda geografia areo – lando, regiono, urbo. Se temas pri moviĝantaj aĵoj, veturiloj aŭ pri la moviĝo mem, necesas uzi alian vorton, krom se temas pri intenca metafora uzo. Plej ofte taŭgas la tre ĝenerala <i>‘iri’,</i> eble ‘<i>veni’</i> aŭ simple <i>‘moviĝi’.</i> Por veturiloj kaj ĝenerale transportmaŝinoj eblas ankaŭ <i>‘veturi’.</i>",
		"La marŝo <span style=\"color: #ff0000\">vojaĝis</span> (iris) laŭ la aŭtoŝoseo al la centro.<br>\n<br>\nVia mendo <span style=\"color: #ff0000\">vojaĝas</span> (venas) per ordinara poŝto.<br>\n<br>\nLumo <span style=\"color: #ff0000\">vojaĝas</span> (moviĝas) rapide."
	],
	"£:BASE-volumeno": [
		"£:BASE-volumeno",
		"Falsa amiko / konfuzebla vortoparo: volumo → volumeno",
		"En Esperanto, <i>'volumo'</i> estas unu elemento de plurparta libro(serio) aŭ bindita broŝuraro. <i>'Volumeno'</i> estas io tute alia, nome tridimensia kvantomezuro. Metafore ĝi ankaŭ estas uzata por vendosumoj.",
		"La <span style=\"color: #ff0000\">volumo</span> (volumeno) de la benzinujo estas 50 litroj."
	],
	"£:BASE-necesejo": [
		"£:BASE-necesejo",
		"Falsa amiko / malĝusta vortelekto: tualetejo → necesejo",
		"En Esperanto, <i>‘tualetejo’</i> estas ĉambro por sinpurigado, sinvestado kaj sinbeligo. Ne uzu ĝin en la senco <i>‘necesejo’.</i>",
		"Purigi <span style=\"color: #ff0000\">tualetejojn</span> (necesejojn) estis tipa soldata puntasko."
	],
	"£:BASE-kontrabandajxo": [
		"£:BASE-kontrabandajxo",
		"Falsa amiko / mankanta afikso: kontrabando → kontrabandaĵo",
		"'Kontrabando' estas ago – sekreta kontraŭleĝa aŭ sendogana komerco. Por la varoj mem, uzu <i>'kontrabandaĵo'.</i>",
		"En la haveno eblis aĉeti la kontrabandon (kontrabandaĵon) de la lasta nokto."
	],
	"£:BASE-reprezentanto&\"<reprezantoj?n?>\"": [
		"£:BASE-reprezentanto&\"<reprezantoj?n?>\"",
		"Falsa amiko / participo: reprezi → reprezenti, subpremi",
		"La radiko <i>‘reprezi’</i> ne ekzistas en Esperanto. Tre verŝajne devas esti <i>‘reprezenti’.</i> Participoj kiel <i>‘reprezanto’, ‘reprezate de’</i> aŭ <i>‘reprezanta’</i> foje okazas, ĉar la <i>‘-ent’</i> en <i>‘reprezenti’</i> sentiĝas kiel (latina) participo. Notu ankaŭ, ke la angla <i>‘repress’</i> devas esti <i>‘subpremi’</i> kaj ne – falsamike - <i>‘reprezi’</i> aŭ <i>‘represi’.</i> Ĉi-lasta fakte ekzistas, kun la signifo ‘re-presi’ (angle: <i>reprint</i>).",
		"Partoprenis <span style=\"color: #ff0000\">reprezanto</span> (reprezentanto) de la registaro.<br>\n<br>\nLa diktatoro <span style=\"color: #ff0000\">reprezis</span> (subpremis) la ribelon."
	],
	"£:BASE-reprezenti&\"<reprez.*>\"": [
		"£:BASE-reprezenti&\"<reprez.*>\"",
		"Falsa amiko / participo: reprezi → reprezenti, subpremi",
		"La radiko <i>‘reprezi’</i> ne ekzistas en Esperanto. Tre verŝajne devas esti <i>‘reprezenti’.</i> Participoj kiel <i>‘reprezanto’, ‘reprezate de’</i> aŭ <i>‘reprezanta’</i> foje okazas, ĉar la <i>‘-ent’</i> en <i>‘reprezenti’</i> sentiĝas kiel (latina) participo. Notu ankaŭ, ke la angla <i>‘repress’</i> devas esti <i>‘subpremi’</i> kaj ne – falsamike - <i>‘reprezi’</i> aŭ <i>‘represi’.</i> Ĉi-lasta fakte ekzistas, kun la signifo ‘re-presi’ (angle: <i>reprint</i>).",
		"Partoprenis <span style=\"color: #ff0000\">reprezanto</span> (reprezentanto) de la registaro.<br>\n<br>\nLa diktatoro <span style=\"color: #ff0000\">reprezis</span> (subpremis) la ribelon."
	],
	"£:BASE-subpremi&\"<repre.*>\"": [
		"£:BASE-subpremi&\"<repre.*>\"",
		"Falsa amiko / participo: reprezi → reprezenti, subpremi",
		"La radiko <i>‘reprezi’</i> ne ekzistas en Esperanto. Tre verŝajne devas esti <i>‘reprezenti’.</i> Participoj kiel <i>‘reprezanto’, ‘reprezate de’</i> aŭ <i>‘reprezanta’</i> foje okazas, ĉar la <i>‘-ent’</i> en <i>‘reprezenti’</i> sentiĝas kiel (latina) participo. Notu ankaŭ, ke la angla <i>‘repress’</i> devas esti <i>‘subpremi’</i> kaj ne – falsamike - <i>‘reprezi’</i> aŭ <i>‘represi’.</i> Ĉi-lasta fakte ekzistas, kun la signifo ‘re-presi’ (angle: <i>reprint</i>).",
		"Partoprenis <span style=\"color: #ff0000\">reprezanto</span> (reprezentanto) de la registaro.<br>\n<br>\nLa diktatoro <span style=\"color: #ff0000\">reprezis</span> (subpremis) la ribelon."
	],
	"£:BASE-kolizii&\"<koliz.*>\"": [
		"£:BASE-kolizii&\"<koliz.*>\"",
		"Falsa amiko / transitiveco: kolizi → kolizii kun, trafi",
		"En Esperanto, <i>‘kolizi’,</i> se ion entute, nur povas signifi ‘provizi per kolo’, kio estus sufiĉe stranga. Verŝajne vi celas <i>‘kolizii’</i> (bate kunpuŝiĝi kun io/iu). Notu, ke <i>‘kolizii’</i> estas netransitiva, do kun objekto, aŭ kiel pasivo, devas esti <i>‘trafi’</i> aŭ <i>‘bati’.</i>",
		"<i>Asteroido</i> <span style=\"color: #ff0000\"><i>kolizis</i></span><i> (koliziis) kun la tero.</i><br>\n<br>\n<i>Aŭto</i> <span style=\"color: #ff0000\"><i>kolizis</i></span><i> (trafis) lin.</i>"
	],
	"£:BASE-trafi&\"<koliz.*>\"": [
		"£:BASE-trafi&\"<koliz.*>\"",
		"Falsa amiko / transitiveco: kolizi → kolizii kun, trafi",
		"En Esperanto, <i>‘kolizi’,</i> se ion entute, nur povas signifi ‘provizi per kolo’, kio estus sufiĉe stranga. Verŝajne vi celas <i>‘kolizii’</i> (bate kunpuŝiĝi kun io/iu). Notu, ke <i>‘kolizii’</i> estas netransitiva, do kun objekto, aŭ kiel pasivo, devas esti <i>‘trafi’</i> aŭ <i>‘bati’.</i>",
		"<i>Asteroido</i> <span style=\"color: #ff0000\"><i>kolizis</i></span><i> (koliziis) kun la tero.</i><br>\n<br>\n<i>Aŭto</i> <span style=\"color: #ff0000\"><i>kolizis</i></span><i> (trafis) lin.</i>"
	],
	"£:BASE-gxui&\"<plezur.*>\"": [
		"£:BASE-gxui&\"<plezur.*>\"",
		"Falsa amiko / transitiveco: plezuri → ĝui, plezurigi",
		"En Esperanto <i>‘plezuri’</i> estas netransitiva kaj signifas ‘senti plezuron’. Personon (kiu sentu plezuron) oni <i>‘plezur</i><b><i>ig</i></b><i>as’.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Plezuris</i></span><i> (plezurigis) lin vidi la junajn vizaĝojn.</i><br>\n<br>\nEĉ sen eksplicita personobjekto devas esti <i>‘plezurigi’:</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Plezuras</i></span><i> (Plezurigas) legi.</i><br>\n<br>\nNe konfuzu tion kun adverbiala uzo de infitivo;<br>\n<br>\n<i>Mi plezuras</i> <b><i>(ek)koni vin</i></b><i>. (= Mi ĝojas (ek)koni vin.)</i><br>\n<br>\nNe uzu <i>‘plezuri’</i> aŭ <i>‘plezurigi’</i> kun la signifo <i>‘ĝui’!</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Plezuru</i></span><i> (Ĝuu) kun ni la etoson unikan!</i>",
		""
	],
	"£ig&\"<plezur.*>\"": [
		"£ig&\"<plezur.*>\"",
		"Falsa amiko / transitiveco: plezuri → ĝui, plezurigi",
		"En Esperanto <i>‘plezuri’</i> estas netransitiva kaj signifas ‘senti plezuron’. Personon (kiu sentu plezuron) oni <i>‘plezur</i><b><i>ig</i></b><i>as’.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Plezuris</i></span><i> (plezurigis) lin vidi la junajn vizaĝojn.</i><br>\n<br>\nEĉ sen eksplicita personobjekto devas esti <i>‘plezurigi’:</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Plezuras</i></span><i> (Plezurigas) legi.</i><br>\n<br>\nNe konfuzu tion kun adverbiala uzo de infitivo;<br>\n<br>\n<i>Mi plezuras</i> <b><i>(ek)koni vin</i></b><i>. (= Mi ĝojas (ek)koni vin.)</i><br>\n<br>\nNe uzu <i>‘plezuri’</i> aŭ <i>‘plezurigi’</i> kun la signifo <i>‘ĝui’!</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Plezuru</i></span><i> (Ĝuu) kun ni la etoson unikan!</i>",
		""
	],
	"£:BASE-recikligi&\"<recikl.*>\"": [
		"£:BASE-recikligi&\"<recikl.*>\"",
		"Falsa amiko / transitiveco: recikli → recikligi",
		"En Esperanto, oni <i>recikligas,</i> ne <i>reciklas,</i> plaston, botelojn, vestaĵojn ktp.<br>\n<br>\nLa pasiva participo <i>‘reciklita’</i> estas relative ofte uzata, kaj do ne temas pri grava afero. Sed konsideru aldoni <i>‘-ig’</i> eĉ en tiu kazo.",
		"Ni uzis <span style=\"color: #ff0000\">reciklitan</span> (recikligitan) paperon por la invitoj.<br>\n<br>\nEn tuta Eŭropo oni <span style=\"color: #ff0000\">reciklas</span> (recikligas) botelojn."
	],
	"£:BASE-malhelpi&\"<prevent.*>\"": [
		"£:BASE-malhelpi&\"<prevent.*>\"",
		"Falsa amiko / verbo kun malĝusta valento: preventi → malhelpi",
		"'Preventi’ signifas ‘antaŭmalhelpi’ (agon aŭ okazaĵon). Sed personon oni ne <i>preventas,</i> sed <i>malhelpas.</i> Kaj oni ne povas traduki la anglan plurvalentan strukturon <i>‘prevent sb. from doing s.th.’</i> per <i>‘preventi.</i> Tiucele uzu <i>‘malhelpi’</i>:<br>\n<br>\n<i>La malbona vetero</i> <span style=\"color: #ff0000\"><i>preventis</i></span><i> (malhelpis) la armeon transiri la monton.</i>",
		""
	],
	"£x-etype-lemma&\"<.*acioj?n?>\"": [
		"£x-etype-lemma&\"<.*acioj?n?>\"",
		"Falsa amiko: -acio",
		"Multaj falsaj amikoj en Esperanto ŝuldiĝas al pruntoj, el aliaj lingvoj, de latindevenaj substantivoj kun la finaĵo -acio, ekz. <i>'</i><span style=\"color: #ff0000\"><i>dokumentacio</i></span><i>' (dokumentaĵo),</i> <span style=\"color: #ff0000\"><i>'fondacio/fundacio</i></span><i>' (fondaĵo, fonduso), '</i><span style=\"color: #ff0000\"><i>kapitulacio</i></span><i>' (kapitulaco),</i> <span style=\"color: #ff0000\"><i>menstruacio</i></span><i>' (menstruo), '</i><span style=\"color: #ff0000\"><i>integracio</i></span><i>' (integrigo), '</i><span style=\"color: #ff0000\"><i>stagnacio</i></span><i>' (stagnado).</i> Antaŭ ol uzi substantivon kun '-acio', pripensu, ĉu ekzistas pli &quot;esperanta&quot; vortumo, uzante la radikon sen '-acio' aŭ kunmetaĵon kun pure esperanta sufikso.",
		""
	],
	"£x-etype-lemma&\"<.*alaj?n?>\"": [
		"£x-etype-lemma&\"<.*alaj?n?>\"",
		"Falsa amiko: -ala",
		"Multaj falsaj amikoj en Esperanto ŝuldiĝas al pruntoj, el aliaj lingvoj, de latindevenaj adjektivoj kun la finaĵo -al, ekz. <i>'</i><span style=\"color: #ff0000\"><i>nacionala</i></span><i>' (nacia),</i> <span style=\"color: #ff0000\"><i>rituala</i></span><i> (rita),</i> <span style=\"color: #ff0000\"><i>seksuala</i></span><i> (seksa),</i> <span style=\"color: #ff0000\"><i>globala</i></span><i> (tutmonda),</i> <span style=\"color: #ff0000\"><i>artificiala</i></span><i> (artefarita).</i> Antaŭ ol uzi adjektivon kun '-ala', pripensu, ĉu ekzistas pli &quot;esperanta&quot; vortumo, uzante la radikon sen '-al' aŭ kunmetaĵon kun pure esperanta sufikso.",
		""
	],
	"£x-etype-lemma&\"<.*ionoj?n?>\"": [
		"£x-etype-lemma&\"<.*ionoj?n?>\"",
		"Falsa amiko: -iono",
		"Kelkajj falsaj amikoj en Esperanto ŝuldiĝas al pruntoj, el aliaj lingvoj, de latindevenaj substantivoj kun la finaĵo -iono. La prunto fakte ofte funkcias, ekz. kun <i>'leciono', 'regiono'</i> kaj <i>'ĉampiono',</i> sed ne kun ekz. <i>'</i><span style=\"color: #ff0000\"><i>akciono</i></span><i>' (planago),</i> <span style=\"color: #ff0000\"><i>'misiono</i></span><i>' (misio), '</i><span style=\"color: #ff0000\"><i>versiono</i></span><i>' (versio),</i> <span style=\"color: #ff0000\"><i>diviziono</i></span><i>' (divizio), '</i><span style=\"color: #ff0000\"><i>uniono</i></span><i>' (unio), '</i><span style=\"color: #ff0000\"><i>paviliono</i></span><i>' (pavilono).</i> Antaŭ ol uzi (por vi novan) substantivon kun '-acio', pripensu, ĉu ekzistas pli &quot;esperanta&quot; vortumo, uzante la radikon kun '-io' anstataŭ '-iono', aŭ kunmetaĵon kun pure esperanta sufikso.",
		""
	],
	"£:BASE-cxesigi&\"<abort.*>\"": [
		"£:BASE-cxesigi&\"<abort.*>\"",
		"Falsa amiko: aborti → ĉesigi",
		"En Esperanto, <i>'aborti'</i> estas netransitiva vorto kun la signifo &quot;mortnaski&quot;, aŭ – metafore – fiaski. Ne uzu la vorton transitive, kaj ne kun la signifo de <i>'cxesigi'.</i>",
		"La firmao <span style=\"color: #ff0000\">abortis</span> (ĉesigis) sian projekton post grandaj perdoj.<br>\n<br>\nŜi <span style=\"color: #ff0000\">abortis</span> (misnaskis) la infanon."
	],
	"£:BASE-misnaski&\"<abort.*>\"": [
		"£:BASE-misnaski&\"<abort.*>\"",
		"Falsa amiko: aborti → ĉesigi",
		"En Esperanto, <i>'aborti'</i> estas netransitiva vorto kun la signifo &quot;mortnaski&quot;, aŭ – metafore – fiaski. Ne uzu la vorton transitive, kaj ne kun la signifo de <i>'cxesigi'.</i>",
		"La firmao <span style=\"color: #ff0000\">abortis</span> (ĉesigis) sian projekton post grandaj perdoj.<br>\n<br>\nŜi <span style=\"color: #ff0000\">abortis</span> (misnaskis) la infanon."
	],
	"£:BASE-plenkreskulo&\"<adultoj?n?>\"": [
		"£:BASE-plenkreskulo&\"<adultoj?n?>\"",
		"Falsa amiko: adulto → plenkreskulo",
		"Tio povas esti falsa amiko: <i>‘adulto’</i> signifas <i>‘ekstergeedza kromseksumado’,</i> dum plenkreskulo simple estas homo pli aĝa ol 18.",
		""
	],
	"£:BASE-agado": [
		"£:BASE-agado",
		"Falsa amiko: akcio → agado",
		"En Esperanto, <i>'akcio'</i> estas valorpapero. Ne eblas uzi la vorton kun la signifo '(kunordigita) agado'. Povas temi pri (ekz. germana) falsa amiko.",
		"La <span style=\"color: #ff0000\">akcio</span> (agado) estis tre sukcesa."
	],
	"£:BASE-nuna&\"<aktualaj?n?>\"": [
		"£:BASE-nuna&\"<aktualaj?n?>\"",
		"Falsa amiko: aktuala → nuna",
		"La sola Zamenhofa signifo de <i>‘aktuale’</i> estas ‘nuntempe grava, interesa kaj prioritata’ (germane: <i>aktuell</i>). Krome, la signifo ‘ĝisdata’ sekvas el la tre komuna uzado de la verbo <i>‘ĝisdatigi’.</i> Sed prefere ne uzu la radikon kun la senco de ‘nuna/nuntempa’ (angle: <i>current</i>), kaj nepre evitu uzi <i>‘aktuale’</i> en la falsamika senco de ‘fakte’ (angle: <i>‘actually’</i>).",
		"La tiama Germanio fotografie similas al la <span style=\"color: #ff0000\">aktuala</span> (nuntempa) Japanio.<br>\n<br>\nFeliĉe, ke ili <span style=\"color: #ff0000\">aktuale</span> (nuntempe) ne militas."
	],
	"£:BASE-nuntempe&\"<aktuale>\"": [
		"£:BASE-nuntempe&\"<aktuale>\"",
		"Falsa amiko: aktuala → nuna",
		"La sola Zamenhofa signifo de <i>‘aktuale’</i> estas ‘nuntempe grava, interesa kaj prioritata’ (germane: <i>aktuell</i>). Krome, la signifo ‘ĝisdata’ sekvas el la tre komuna uzado de la verbo <i>‘ĝisdatigi’.</i> Sed prefere ne uzu la radikon kun la senco de ‘nuna/nuntempa’ (angle: <i>current</i>), kaj nepre evitu uzi <i>‘aktuale’</i> en la falsamika senco de ‘fakte’ (angle: <i>‘actually’</i>).",
		"La tiama Germanio fotografie similas al la <span style=\"color: #ff0000\">aktuala</span> (nuntempa) Japanio.<br>\n<br>\nFeliĉe, ke ili <span style=\"color: #ff0000\">aktuale</span> (nuntempe) ne militas."
	],
	"£:BASE-akra": [
		"£:BASE-akra",
		"Falsa amiko: akuta → akra",
		"En Esperanto, <i>‘akuta’</i> celas aktualan intensecon (ekz. de malsano), dum <i>‘akra’</i> signifas <i>‘tranĉa’, ‘penetra’,</i> inkl. de diversaj metaforaj uzoj (angle: <i>sharp</i>). La falsa amiko estas angla <i>‘acute’</i> en kunteksto de sensorganoj aŭ sonoj. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-malanalfabetigi": [
		"£:BASE-malanalfabetigi",
		"Falsa amiko: alfabetigi → malanalfabetigi",
		"Striktasence <i>‘alfabetigi’</i> nur povas signifi ‘igi alfabeta’, do ekz. ordigi liston aŭ konverti ideograman skribon en alfabetan. Oni ne povas alfabetigi personon en la senco ‘legipovigi’.",
		"La misiistoj <span style=\"color: #ff0000\">alfabetigis</span> (malanalfabetigis) ĉiujn indiĝenojn en la vilaĝo."
	],
	"£:kaj&\"<ambaux>\"": [
		"£:kaj&\"<ambaux>\"",
		"Falsa amiko: ambaŭ … kaj",
		"En Esperanto, oni uzas la sintakson <i>‘kaj … kaj’,</i> ne <i>‘</i><span style=\"color: #ff0000\"><i>ambaŭ</i></span><i> … kaj’,</i> por esprimi la anglan <i>‘both … and’.</i>",
		"Li trinkas <span style=\"color: #ff0000\">ambaŭ</span> (kaj) kafon kaj teon."
	],
	"£:BASE-usona&\"<amerikaj?n?>\"": [
		"£:BASE-usona&\"<amerikaj?n?>\"",
		"Falsa amiko: amerika → usona",
		"Povas esti, ke ĉi tie vi celas nur Usonon, ne la tuton de la amerikaj kontinentoj.",
		"Partoprenis multaj <span style=\"color: #ff0000\">amerikaj</span> (usonaj) soldatoj en la milito."
	],
	"£:BASE-besto&\"<animaloj?n?>\"": [
		"£:BASE-besto&\"<animaloj?n?>\"",
		"Falsa amiko: animalo → besto",
		"'Animalo’ estas grupvorto por <i>‘homo’</i> plus <i>‘bestoj’.</i> Prefere uzu ĝin nur en biologia aŭ religia kunteksto por inkluzivi la homon kune kun la bestoj. En aliaj kuntekstoj, simple uzu <i>‘besto’.</i>",
		"Ŝi amas la animalojn (bestojn) kaj fariĝis vegetarano."
	],
	"£x-etype-lemma&\"<antauxleg.*>\"": [
		"£x-etype-lemma&\"<antauxleg.*>\"",
		"Falsa amiko: antaŭlegi → laŭtlegi",
		"Tio povas esti falsa amiko (germane: <i>vorlesen</i>). En Esperanto, <i>‘antaŭlegi’</i> logike signifus ‘legi pli frue’, ne ‘legi la alia persono’. Prefere uzu <i>‘laŭtlegi’</i> aŭ <i>‘voĉlegi’.</i>",
		"Mi <span style=\"color: #ff0000\">antaŭlegis</span> (laŭtlegis) libron pri rangiferoj al mia filo."
	],
	"£:BASE-antikvo": [
		"£:BASE-antikvo",
		"Falsa amiko: antikveco → antikvo",
		"Striktasence <i>‘antikveco’</i> estas eco, ne periodo. Por tio simple uzu <i>‘antikvo’</i> au <i>‘antikva periodo/tempo’.</i> Povas temi pri (angla) falsa amiko.",
		"En la <span style=\"color: #ff0000\">antikveco</span> (antikvo) la loko estis uzata kiel kultejo."
	],
	"£:BASE-apelacii&\"<apeli.*>\"": [
		"£:BASE-apelacii&\"<apeli.*>\"",
		"Falsa amiko: apeli → apelacii, plaĉi",
		"En Esperanto, <i>‘apeli’</i> nur rilatas al soldata <i>‘apelo’</i> (ĉeestokontrolo). Ne konfuzu tion kun <i>‘apelacii</i>’,<i></i> kiu signifas ‘pete alvoki iun aŭ superan tribunalon (angle: <i>appeal</i>). Ankaŭ ne eblas uzi <i>‘apeli’</i> kun la angleca senco ‘plaĉi al’.",
		"<i>Ni</i> <span style=\"color: #ff0000\"><i>apelas</i></span><i> (apelacias) al registaroj en la tuta mondo.</i><br>\n<br>\n<i>La nova Peugeot</i> <span style=\"color: #ff0000\"><i>apelas</i></span><i> (plaĉas) al virinoj de ĉiuj aĝoj-.</i>"
	],
	"£:BASE-plaĉi&\"<apeli.*\">>": [
		"£:BASE-plaĉi&\"<apeli.*\">>",
		"Falsa amiko: apeli → apelacii, plaĉi",
		"En Esperanto, <i>‘apeli’</i> nur rilatas al soldata <i>‘apelo’</i> (ĉeestokontrolo). Ne konfuzu tion kun <i>‘apelacii</i>’,<i></i> kiu signifas ‘pete alvoki iun aŭ superan tribunalon (angle: <i>appeal</i>). Ankaŭ ne eblas uzi <i>‘apeli’</i> kun la angleca senco ‘plaĉi al’.",
		"<i>Ni</i> <span style=\"color: #ff0000\"><i>apelas</i></span><i> (apelacias) al registaroj en la tuta mondo.</i><br>\n<br>\n<i>La nova Peugeot</i> <span style=\"color: #ff0000\"><i>apelas</i></span><i> (plaĉas) al virinoj de ĉiuj aĝoj-.</i>"
	],
	"£:BASE-disputo": [
		"£:BASE-disputo",
		"Falsa amiko: argumento → disputo",
		"En Esperanto, <i>‘argumento’</i> ĉiam celas kialon or fakton favora al unu opinio aŭ alia. Parola kverelo kun kontraŭulo (angle: <i>argument</i>) estas <i>‘disputo’.</i>",
		""
	],
	"£:BASE-asekurkompanio&\"<asekuristoj?n?>\"": [
		"£:BASE-asekurkompanio&\"<asekuristoj?n?>\"",
		"Falsa amiko: asekuristo → asekurkompanio",
		"'Asekuristo’ estas persono, ne uzu la vorton kun la senco de ‘asekurkompanio’.",
		"Li dungiĝis ĉe la plej granda <span style=\"color: #ff0000\">asekuristo</span> (asekurkompanio) de la lando."
	],
	"£:BASE-partopreni": [
		"£:BASE-partopreni",
		"Falsa amiko: atendi → partopreni/ĉeesti/frekventi",
		"En Esperanto, oni <i>atendas</i> ekz. alvenon de buso aŭ amiko (angle: <i>wait [for])</i>, dum oni <i>partoprenas</i> en inaŭguro, <i>ĉeestas</i> feston aŭ <i>frekventas</i> lernejon (angle: <span style=\"color: #0000ff\"><i>attend</i></span><i>).</i>Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-ĉeesti": [
		"£:BASE-ĉeesti",
		"Falsa amiko: atendi → partopreni/ĉeesti/frekventi",
		"En Esperanto, oni <i>atendas</i> ekz. alvenon de buso aŭ amiko (angle: <i>wait [for])</i>, dum oni <i>partoprenas</i> en inaŭguro, <i>ĉeestas</i> feston aŭ <i>frekventas</i> lernejon (angle: <span style=\"color: #0000ff\"><i>attend</i></span><i>).</i>Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-frekventi": [
		"£:BASE-frekventi",
		"Falsa amiko: atendi → partopreni/ĉeesti/frekventi",
		"En Esperanto, oni <i>atendas</i> ekz. alvenon de buso aŭ amiko (angle: <i>wait [for])</i>, dum oni <i>partoprenas</i> en inaŭguro, <i>ĉeestas</i> feston aŭ <i>frekventas</i> lernejon (angle: <span style=\"color: #0000ff\"><i>attend</i></span><i>).</i>Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-travivi&\"<atest.*>\"": [
		"£:BASE-travivi&\"<atest.*>\"",
		"Falsa amiko: atesti → travivi",
		"En Esperanto, <i>‘atesti’</i> signifas ‘pruvi/certigi’ (fakton). Ne eblas uzi la vorton kun la senco de <i>‘travivi/sperti’</i> (angle: <i>witness</i>).",
		"Ni verŝajne baldaŭ <span style=\"color: #c9211e\">atestos</span> (travivos) fortiĝon de iaspeca socia darvinismo."
	],
	"£:BASE-preventi": [
		"£:BASE-preventi",
		"Falsa amiko: averti → preventi",
		"En Esperanto, oni <i>avertas</i> (angle: warn) personon pri danĝero, sen por malhelpi la danĝeron oni uzas <i>‘preventi’</i> (angle: <i>avert</i>)<i>.</i>",
		""
	],
	"£:BASE-ekvilibrigi": [
		"£:BASE-ekvilibrigi",
		"Falsa amiko: balanci → ekvilibrigi",
		"En Esperanto, <i>‘balanci’</i> signifas tien-reen movon de korpoparto aŭ objekto (simile al <i>‘svingi’)</i>, sen ekvilibriga aspekto. Kun tia, uzu <i>‘ekvilibrigi’ (buĝeton, premon, pilkon sur fingro).</i> Notu ankaŭ, ke ‘<i>balanci’</i> estas transitiva! Do:<br>\n<br>\nFinfine, ni <span style=\"color: #ff0000\">balancis</span> (ekvilibrigis) la buĝeton.<br>\n<br>\nFinfine, la buĝeto <span style=\"color: #ff0000\">balancas</span> (ekvilibras).",
		""
	],
	"£:BASE-formularo&\"<blanketoj?n?>\"": [
		"£:BASE-formularo&\"<blanketoj?n?>\"",
		"Falsa amiko: blanketo → formularo",
		"En Esperanto, <i>'blanketo'</i> estas blankpapera subskribo. Ne konfuzu tion kun <i>'formularo' –</i> ŝablona dokumento (skandinave: <i>blanket</i>).",
		"Vi devas unue plenigi la aliĝan <span style=\"color: #ff0000\">blanketon</span> (formularon)."
	],
	"£:BASE-limo&\"<bordoj?n?>\"": [
		"£:BASE-limo&\"<bordoj?n?>\"",
		"Falsa amiko: bordo → limo",
		"En Esperanto, <i>'bordo'</i> estas la terstrio laŭ maro, rivero aŭ lago. Ne uzu la vorton kun la signifo de <i>'limo'</i> (angle: <i>border</i>).",
		"La ĉefurbo, Gorico, situas ĉe la <span style=\"color: #ff0000\">bordo</span> inter Italio kaj Slovenio."
	],
	"£:BASE-tabulo&\"<plankoj?n?>\"": [
		"£:BASE-tabulo&\"<plankoj?n?>\"",
		"Falsa amiko: breto/planko → tabulo",
		"<i>'Planko’</i> estas la malsupra parto de ĉambro, sur kiu oni paŝas (angle: <i>floor</i>). Planko povas konsisti el ‘<i>tabuloj’</i> – longaj, maldikaj, plataj pecoj el ligno, argilo aŭ metalo (angle: <i>plank, board</i>). Kromaj sencoj de <i>‘tabulo’</i> estas kaj ‘skribotabulo’ kaj 'informtabulo'. <i>'Breto'</i> (angle: <i>shelf</i>) estas horizontala tabulo por meti objektojn, ofte parto de meblo. Ne eblas uzi la vorton kiel ĝeneralan sinonimon de <i>'tabulo'.</i>",
		"La enirejo estis barita per <span style=\"color: #ff0000\">plankoj</span> (tabuloj)."
	],
	"£:BASE-inkludi&\"<cxirkauxpren.*>\"": [
		"£:BASE-inkludi&\"<cxirkauxpren.*>\"",
		"Falsa amiko: ĉirkaŭpreni → inkludi",
		"En Esperanto, <i>‘ĉirkaŭpreni’</i> estas fizika ago, normale farita brake aŭ mane de homo al objekto aŭ alia homo. Prefere ne uzu la vorton kun la abstrakta signifo de <i>‘inkludi/inkluzivi’</i>",
		"La nova ekonomia partnereco <span style=\"color: #ff0000\">ĉirkaŭprenas</span> (inkludas) 2 miliardojn da homoj."
	],
	"£:BASE-peti&\"<demand.*>\"": [
		"£:BASE-peti&\"<demand.*>\"",
		"Falsa amiko: demandi → peti",
		"En Esperanto, oni <i>demandas</i> demandon aŭ personon pri io, sed <i>petas</i> helpon, monon, konsilon aŭ klarigon. Uzu ‘<i>demandi’</i>, se vi povas imagi demandosignon, sed <i>‘peti’</i>, se vi povas imagi voksignon <i>(Helpu! Donu monon!).</i> La esperanta <i>demandi</i> estas kognato de la franca <i>demander,</i> sed ne de la angla <i>demand.</i><br>\n<br>\n<i>Li demandis min, ĉu la trajno jam foriris.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>demandis</i></span><i> (petis) min varti la bebon dum kelkaj horoj.</i>",
		""
	],
	"£:BASE-manifestacio": [
		"£:BASE-manifestacio",
		"Falsa amiko: demonstracio → manifestacio",
		"En Esperanto, <i>'demonstracio'</i> estas pruvo, la ago demonstri. Ne konfuzu tion kun <i>'manifestacio',</i> granda publika protestaranĝo, ofte en formo de marŝo kun mesaĝotabuloj. Notu ankaŭ, ke <i>'manifesto'</i> estas skriba deklaro, do ne la sama afero kiel <i>'manifestacio'.</i>",
		"La pacmovado organizis paskajn <span style=\"color: #ff0000\">demonstraciojn</span> (manifestaciojn) en multaj urboj."
	],
	"£:BASE-aparteni&\"<depend.*>\"": [
		"£:BASE-aparteni&\"<depend.*>\"",
		"Falsa amiko: dependi de → aparteni al",
		"En Esperanto, <i>‘dependi de’</i> (angle: <i>depend on</i>) ne havas la sencon <i>‘aparteni al’</i> aŭ <i>‘esti parto de’</i> (angle: <i>fall under, belong to</i>)<i>.</i> Verŝajne temas pri franca falsa amiko.",
		"<i>La esplorcentro</i> <span style=\"color: #ff0000\"><i>dependas de</i></span><i> (apartenas al) la potenca ministrejo de planado.</i><br>\n<br>\n<i>La vilaĝo ne</i> <span style=\"color: #ff0000\"><i>dependas de</i></span><i> (apartenas al) nia distrikto.</i>"
	],
	"£:BASE-deprimita&\"<depres.*>\"": [
		"£:BASE-deprimita&\"<depres.*>\"",
		"Falsa amiko: depresita → deprimita",
		"En Esperanto, <i>‘depresi’</i> kaj <i>‘depreso’</i> temas pri de-preso de aparta folio dum produktado de presaĵoj. Ne konfuzu <i>‘depresita’</i> kun <i>‘deprimita’</i> (angle: <i>depressed</i>).",
		"Mi estis iom <span style=\"color: #ff0000\">depresita</span> (deprimita)."
	],
	"£:BASE-nomo&\"<designadoj?n?>\"": [
		"£:BASE-nomo&\"<designadoj?n?>\"",
		"Falsa amiko: designado → nomo",
		"La vorto <i>‘designado’</i> ne ekzistas en Esperanto, se uzata entute, ĝi signifus ‘de-signado’. Temas pri falsa amiko (angle: <i>designation</i>); uzu simple <i>‘nomo’.</i>",
		"Post la Dua mondmilito, Indonezio <span style=\"color: #c9211e\">ludis</span> (ŝajnigis) kompliceco de Usono kaj ĝiaj aliancanoj."
	],
	"£:BASE-priskrib[oi]&\"<deskrib.*>\"": [
		"£:BASE-priskrib[oi]&\"<deskrib.*>\"",
		"Falsa amiko: deskribi → priskribi",
		"Teorie, <i>‘de-skribi’</i> povus esti esperanta vorto kaj signifi ekz. ‘mane kopii’. Kelkaj ankaŭ uzas ĝin kun la signifo de \"subtrahi en imposta kalkulo\". Tamen la vorto ekzistas en nek PIV nek ReVo. Ĉiukaze ĉi tie preskaŭ certe temas pri falsa amiko anstataŭ <i>‘priskribi’</i> (angle: <i>describe,</i> hispane: <i>describir</i>).",
		"Bv. sendu <span style=\"color: #ff0000\">deskribon</span> (priskribon) de via programero\""
	],
	"£:BASE-senhezitigi": [
		"£:BASE-senhezitigi",
		"Falsa amiko: determinita → senhezita",
		"En Esperanto, <i>‘determini’</i> signifas ‘precizigi/eltrovi’, kaj la participo <i>‘determinita’</i> signifas pli-malpli <i>‘specifa’</i>. Ne uzu la verbon kun la senco de <i>‘senhezitigi’ (</i>angle: <i>convince</i>) aŭ la participon kun la senco <i>‘senhezita/rezoluta’</i> (angle: <i>determined</i>).",
		"La policisto estis <span style=\"color: #ff0000\">determinita</span> (senhezita) trovi la krimulon"
	],
	"£:BASE-senhezita": [
		"£:BASE-senhezita",
		"Falsa amiko: determinita → senhezita",
		"En Esperanto, <i>‘determini’</i> signifas ‘precizigi/eltrovi’, kaj la participo <i>‘determinita’</i> signifas pli-malpli <i>‘specifa’</i>. Ne uzu la verbon kun la senco de <i>‘senhezitigi’ (</i>angle: <i>convince</i>) aŭ la participon kun la senco <i>‘senhezita/rezoluta’</i> (angle: <i>determined</i>).",
		"La policisto estis <span style=\"color: #ff0000\">determinita</span> (senhezita) trovi la krimulon"
	],
	"£:BASE-diveni&\"<deven.*>\"": [
		"£:BASE-diveni&\"<deven.*>\"",
		"Falsa amiko: deveni → diveni",
		"Homo <i>'devenas'</i> de iu loko, kaj vorto aŭ kutimo <i>'devenas'</i> de iu origino, sed oni <i>'divenas'</i> iun nekonatan fakton.",
		"Estas malfacile deveni (diveni) la verajn intencojn de la prezidanto."
	],
	"£:BASE-farigxi&<deven.*>\"": [
		"£:BASE-farigxi&<deven.*>\"",
		"Falsa amiko: deveni → fariĝi",
		"Estas (verŝajne franca) falsa amiko uzi la verbon <i>'deveni'</i> kun la signifo de <i>'fariĝi'</i> aŭ <i>'iĝi'.</i> Deveno temas pri la origino de iu aŭ io. Notu ankaŭ, ke la komplemento de <i>'fariĝi'</i> estas predikativo, ne objekto, do se vi uzis akuzativon post <i>'deveni'</i> korektu ĝin al nominativo.",
		"La urbo <span style=\"color: #ff0000\">devenis</span> (fariĝis) la ĉefa<span style=\"color: #ff0000\">n</span> centro<span style=\"color: #ff0000\">n</span> (la ĉefa centro) de komerco en la regiono.<br>\n<br>\nLi <span style=\"color: #ff0000\">devenis</span> (iĝis) senatoro en 1876."
	],
	"£:BASE-sxuldi&\"<dev.*>\"": [
		"£:BASE-sxuldi&\"<dev.*>\"",
		"Falsa amiko: devi → ŝuldi",
		"La Esperanta vorto <i>‘devi’</i> nur funkcias kiel helpverbo (kun infinitivo). Ĝi ne havas la sencon <i>‘ŝuldi’</i> (angle: <i>owe</i>). Temas pri falsa amiko el latinidaj lingvoj.",
		"Mi <span style=\"color: #ff0000\">devas</span> (ŝuldas) al vi klarigon"
	],
	"£:BASE-dizerti": [
		"£:BASE-dizerti",
		"Falsa amiko: dezerti → dizerti",
		"En Esperanto, <i>‘dezerti’</i> estas verbigo de <i>‘dezerto’</i> (angle: <i>desert</i>), foje uzata kun la signifo de ‘esti senhoma’, por strato, placo, kvartalo ktp. Uzu <i>‘dizerti’</i> por soldato, kiu forlasas senpermese sian armeon.",
		"Fine de la milito, multaj soldatoj <span style=\"color: #ff0000\">dezertis</span> (dizertis)."
	],
	"£:BASE-transfugxi": [
		"£:BASE-transfugxi",
		"Falsa amiko: difekti → transfuĝi",
		"Difekti signifas <i>‘damaĝi’</i> (angle: <i>damage</i>)<i>.</i> Aparato aŭ aŭto povas esti difektita. Sed oni ne povas <i>difekti</i> de armeo aŭ al la malamiko. Por tiu senco de la angla ‘<i>defect’</i> uzu <i>‘transfugxi’.</i> Notu, ke en Esperanto <i>‘defekti’</i> tute ne ekzistas, nek kun la unua, nek kun la dua signifo.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-diversa": [
		"£:BASE-diversa",
		"Falsa amiko: diferenca → diversa",
		"Se oni celas plurajn nesamajn ekzemplerojn de io, oni diras <i>diversaj (libroj, proponoj, virusoj).</i> Ne uzu <i>‘diferenca’ (</i>aŭ <i>‘diferenta’</i>)<i></i> en tiu senco (angle: <i>various</i>). Se entute, uzu <i>‘diferenca’</i> kiel sinonimon de <i>‘malsama’</i> (angle: <i>different).</i>",
		"Venis <span style=\"color: #ff0000\">diferencaj</span> (diversaj) proponoj por la tagordo.<br>\n<br>\nLa nova propono estas tute diferenca (= malsama)."
	],
	"£:BASE-meritanta": [
		"£:BASE-meritanta",
		"Falsa amiko: digna → meritanta",
		"La vorto <i>‘digna’</i> signifas ‘meritanta respekton’ (angle: <i>dignified,</i> germane: <i>würdig</i>). Prefere ne uzu ĝin transitive, kun infinitivo indikanta, kion oni meritas. Por tiu senco, rekte uzu <i>‘meritanta’</i> aŭ ‘<i>kapabla/inda’.</i> Povas temi pri germana falsa amiko. PIV nomas tiun uzon ‘evitinda’.",
		"Tiam oni vivis por esti <span style=\"color: #ff0000\">digna</span> (meritanta) eniri paradizon"
	],
	"£:BASE-nemeritanta": [
		"£:BASE-nemeritanta",
		"Falsa amiko: digna → meritanta",
		"La vorto <i>‘digna’</i> signifas ‘meritanta respekton’ (angle: <i>dignified,</i> germane: <i>würdig</i>). Prefere ne uzu ĝin transitive, kun infinitivo indikanta, kion oni meritas. Por tiu senco, rekte uzu <i>‘meritanta’</i> aŭ ‘<i>kapabla/inda’.</i> Povas temi pri germana falsa amiko. PIV nomas tiun uzon ‘evitinda’.",
		"Tiam oni vivis por esti <span style=\"color: #ff0000\">digna</span> (meritanta) eniri paradizon"
	],
	"£:BASE-rekte&\"<direkte>\"": [
		"£:BASE-rekte&\"<direkte>\"",
		"Falsa amiko: direkte → rekte",
		"'Direkte (al)’ signifas ‘en la direkto de’ (angle: <i>in the direction of</i>), dum <i>‘rekte’</i> signifas ‘senpere’ (angle: <i>directly</i>).",
		"Ŝi hontis , ne volante rigardi Natalion <span style=\"color: #c9211e\">direkte</span> (rekte) en la okulojn"
	],
	"£:BASE-fako&\"<disciplin.*>\"": [
		"£:BASE-fako&\"<disciplin.*>\"",
		"Falsa amiko: disciplino → fako",
		"En Esperanto, la kerna signifo de <i>‘disciplino’</i> estas ‘regulobeemo’ aŭ ‘regulrespekto’. PIV eksplicite rekomendas ne uzi la vorton kun la senco de (sporta aŭ studa) <i>‘fako’.</i><br>\n<br>\nNotu tamen, ke ReVo senkomente listigas ankaŭ tiun duan signifon, do decidu por vi mem! Se vi serĉas kompromison, Lingvohelpilo rekomendas almenaŭ uzi <i>‘fako’</i> en studa kunteksto, sed eble permesi <i>‘disciplino’</i> kun tiu senco por sportoj.",
		"En tiu <span style=\"color: #ff0000\">disciplino</span> (fako) la monda rekordo restis netuŝita dum jardekoj."
	],
	"£:BASE-nekontestebla": [
		"£:BASE-nekontestebla",
		"Falsa amiko: disputi → kontesti",
		"La verbo <i>‘disputi’</i> estas netransitiva, do estas negramatike uzi objekton post ĝi, aŭ diri <i>‘nedisputebla’.</i> Uzu <i>‘kontesti’</i> anstataŭ.",
		"Estas <span style=\"color: #ff0000\">nedisputebla</span> (nekontestebla) fakto, ke la tero estas ronda."
	],
	"£:BASE-kontesti": [
		"£:BASE-kontesti",
		"Falsa amiko: disputi → kontesti",
		"La verbo <i>‘disputi’</i> estas netransitiva, do estas negramatike uzi objekton post ĝi, aŭ diri <i>‘nedisputebla’.</i> Uzu <i>‘kontesti’</i> anstataŭ.",
		"Estas <span style=\"color: #ff0000\">nedisputebla</span> (nekontestebla) fakto, ke la tero estas ronda."
	],
	"£:BASE-eksigi&\"<dissolv.*>": [
		"£:BASE-eksigi&\"<dissolv.*>",
		"Falsa amiko: dissolvi → eksigi/malfondi",
		"Ĉi tie temas verŝajne pri franc-angla falsa amiko. Oni <i>dissolvas</i> substancon, ne parlamenton aŭ asocion. Parlamenton oni <i>eksigas,</i> asocion oni <i>malfondas.</i>",
		"Post la abismaj balotrezultoj, la partio estis <span style=\"color: #ff0000\">dissolvita</span> (malfondita)."
	],
	"£:BASE-malfondi&\"<dissolv.*>\"": [
		"£:BASE-malfondi&\"<dissolv.*>\"",
		"Falsa amiko: dissolvi → eksigi/malfondi",
		"Ĉi tie temas verŝajne pri franc-angla falsa amiko. Oni <i>dissolvas</i> substancon, ne parlamenton aŭ asocion. Parlamenton oni <i>eksigas,</i> asocion oni <i>malfondas.</i>",
		"Post la abismaj balotrezultoj, la partio estis <span style=\"color: #ff0000\">dissolvita</span> (malfondita)."
	],
	"£:BASE-dizelpetrolo": [
		"£:BASE-dizelpetrolo",
		"Falsa amiko: dizelo → dizelpetrolo",
		"Laŭ PIV, <i>'dizelo'</i> estas speco de motoro, ne fuelo. Uzu <i>'dizelpetrolo'</i> por la fuel-substanco. Ne temas pri certa eraro, kaj almenaŭ ReVo listigas ambaŭ signifojn por <i>'dizelo'.</i>",
		"Bruliĝis miloj da tunoj da <span style=\"color: #ff0000\">dizelo</span> (dizelpetrolo)."
	],
	"£:BASE-vesti": [
		"£:BASE-vesti",
		"Falsa amiko: dresi → vesti",
		"En Esperanto, oni <i>dresas</i> beston (ekz. hundon, kiu alportu bastonon), sed oni <i>vestas</i> sin aŭ alian personon (per ekz. robo, jupo, ĉapelo). Trovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-dusxejo": [
		"£:BASE-dusxejo",
		"Falsa amiko: duŝo → duŝejo/duŝilo",
		"En esperanto, <i>'duŝo'</i> estas ago (duŝado), ne la loko (<i>duŝejo</i>) aŭ la ilo (<i>duŝilo</i>). Notu ankaŭ, ke la verbo <i>'duŝi'</i> estas transitiva, do oni <i>duŝiĝas</i> aŭ <i>duŝas sin.</i>",
		"<i>Li ofte kantas en la</i> <span style=\"color: #ff0000\"><i>duŝo</i></span><i> (duŝejo).</i><br>\n<br>\n<i>Multaj homoj kantas sub la</i> <span style=\"color: #ff0000\"><i>duŝo</i></span><i> (duŝilo).</i>"
	],
	"£:BASE-dusxilo": [
		"£:BASE-dusxilo",
		"Falsa amiko: duŝo → duŝejo/duŝilo",
		"En esperanto, <i>'duŝo'</i> estas ago (duŝado), ne la loko (<i>duŝejo</i>) aŭ la ilo (<i>duŝilo</i>). Notu ankaŭ, ke la verbo <i>'duŝi'</i> estas transitiva, do oni <i>duŝiĝas</i> aŭ <i>duŝas sin.</i>",
		"<i>Li ofte kantas en la</i> <span style=\"color: #ff0000\"><i>duŝo</i></span><i> (duŝejo).</i><br>\n<br>\n<i>Multaj homoj kantas sub la</i> <span style=\"color: #ff0000\"><i>duŝo</i></span><i> (duŝilo).</i>"
	],
	"£:BASE-eksplodi&\"<ekflar.*>\"": [
		"£:BASE-eksplodi&\"<ekflar.*>\"",
		"Falsa amiko: ekflari → eksplodi",
		"En Esperanto, <i>‘flari’</i> temas pri la nazo-senso (angle: <i>smell</i>), kaj estas transitiva verbo. Ne uzu <i>‘ekflari’</i> en la senco de ‘eksplodi, subite okazi’ (angle: <i>flare up</i>).",
		"Plurfoje <span style=\"color: #c9211e\">ekflaris</span> (eksplodis) diskutoj pri politikaj temoj."
	],
	"£:BASE-ekonomiisto&\"<ekonomoj?n?>": [
		"£:BASE-ekonomiisto&\"<ekonomoj?n?>",
		"Falsa amiko: ekonomo → ekonomiisto",
		"En Esperanto, <i>'ekonomo'</i> estas dommastrumisto. Por la profesiulo pri ekonomio, uzu <i>'ekonomiisto'.</i><br>\n<br>\nNotu, ke la similsona <i>'ekonomikisto'</i> estas fakulo pri ekonomiko, do la scienco pri ekonomio.",
		"Li estis fama <span style=\"color: #ff0000\">ekonomo</span> (ekonomiisto)."
	],
	"£:BASE-ekonomikisto": [
		"£:BASE-ekonomikisto",
		"Falsa amiko: ekonomo → ekonomiisto",
		"En Esperanto, <i>'ekonomo'</i> estas dommastrumisto. Por la profesiulo pri ekonomio, uzu <i>'ekonomiisto'.</i><br>\n<br>\nNotu, ke la similsona <i>'ekonomikisto'</i> estas fakulo pri ekonomiko, do la scienco pri ekonomio.",
		"Li estis fama <span style=\"color: #ff0000\">ekonomo</span> (ekonomiisto)."
	],
	"£:BASE-fakulo": [
		"£:BASE-fakulo",
		"Falsa amiko: eksperto → fakulo/spertulo",
		"Laŭ PIV, la neologismoj <i>‘eksperto’</i> kaj <i>‘eksperta’</i> (angle: <i>expert)</i> estas evitindaj. Uzu <i>‘fakulo/spertulo’</i> anstataŭ la unua, kaj <i>‘spertula/fakula’</i> anstataŭ la dua.",
		""
	],
	"£:BASE-spertula": [
		"£:BASE-spertula",
		"Falsa amiko: eksperto → fakulo/spertulo",
		"Laŭ PIV, la neologismoj <i>‘eksperto’</i> kaj <i>‘eksperta’</i> (angle: <i>expert)</i> estas evitindaj. Uzu <i>‘fakulo/spertulo’</i> anstataŭ la unua, kaj <i>‘spertula/fakula’</i> anstataŭ la dua.",
		""
	],
	"£:BASE-teamo": [
		"£:BASE-teamo",
		"Falsa amiko: ekvipo → teamo",
		"Tio povas esti franca falsa amiko. La vorto <i>‘ekvipo’</i> ne ekzistas en Esperanto, kaj <i>‘ekipo’</i> temas pri <i>ekipado</i> kaj <i>ekipaĵo,</i> kun la signivo de <i>‘provizo’</i> au <i>‘ilaro’.</i> Por grupo de homoj, uzu <i>‘teamo’,</i> aŭ <i>‘skipo’,</i> precipe, se temas pri tempe alternantaj grupoj de laboristoj.",
		""
	],
	"£:BASE-uzi&\"<ekzerc.*>\"": [
		"£:BASE-uzi&\"<ekzerc.*>\"",
		"Falsa amiko: ekzerci → uzi",
		"En Esperanto, oni <i>ekzercas</i> sin mem aŭ alian personon pri iu kapablo. Ankaŭ eblas ekzerci korpopartojn <i>(fingrojn, orelon)</i> lertigante ilin.<br>\n<br>\n<i>Li ekzercis la filon pri/al matematiko. Li ekzercis siajn orelojn en la angla.</i><br>\n<br>\nMultaj esperantistoj ankaŭ uzas la kapablon mem, aŭ eĉ ilon ligitan al ĝi, kiel objekton de <i>ekzerci,</i> sed laŭ <a target=\"_blank\" href=\"https://vortaro.net/#ekzerci_d\">PIV</a> tiu uzo estas neĝusta:<br>\n<br>\n<i>Li ekzercis kanti / la anglan / violonon (Li ekzerciĝis pri/en kantado / la angla / violono)</i><br>\n<br>\nNe uzu <i>ekzerci</i> kun la signifo de <i>uzi</i> (angle: <i>exercise):</i><br>\n<br>\n<i>Ŝi</i> <span style=\"color: #ff0000\"><i>ekzercis</i></span><i> (uzis) sian influon/aŭtoritaton en la sociaj retoj.</i><br>\n<br>\n<i>Malmultaj civitanoj</i> <span style=\"color: #ff0000\"><i>ekzercis</i></span><i> (uzis) sian rajton voĉdoni.</i>",
		""
	],
	"£:BASE-emo&\"<envioj?n?>\"": [
		"£:BASE-emo&\"<envioj?n?>\"",
		"Falsa amiko: envio → emo",
		"Tio povas esti franca falsa amiko. En Esperanto, <i>‘envii’</i> signifas deziri ton, kion alia posedas, kaj (negative) emocii pri tion. Oni do envias ion al iu, aŭ iun pro io. Sed ne eblas uzi la vorton kun la senco de <i>‘emi’,</i> kun infinitivo.",
		"Mi <span style=\"color: #ff0000\">envias</span> (emas) iri al la plaĝo"
	],
	"£:BASE-akutigo&\"<eskal.*>\"": [
		"£:BASE-akutigo&\"<eskal.*>\"",
		"Falsa amiko: eskalo → akutigo",
		"En Esperanto, <i>‘eskalo’</i> estas ŝtupetaro, kaj <i>‘eskaladi’</i> signifas ‘grimpi (ekz. muron) per eskaloj’. Ne uzu la vortojn <i>‘eskalado’</i> aŭ <i>‘eskaliĝo’</i> anstataŭ <i>‘akutigo’, ‘intensigo’, ‘malplibonigo’</i> ktp.",
		"Manke de internacia <span style=\"color: #ff0000\">eskalado</span> (akutigo), la armea venkinto de cxi tiu milito plej versxajne estos Rusio ."
	],
	"£:BASE-atendi&\"<esper.*>\"": [
		"£:BASE-atendi&\"<esper.*>\"",
		"Falsa amiko: esperi → atendi",
		"Tio estas latinida falsa amiko. En Esperanto, oni <i>esperas</i>, ke io bona okazu (angle: <i>hope</i>), dum oni <i>atendas</i> ekz. buson aŭ iun probablan okazaĵon (angle: <i>expect</i>). Ankaŭ kun tempomezuro oni uzas <i>atendi</i> (angle: <i>wait</i>)<i>:</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>esperis</i></span><i> (atendis) dum 2 horoj / ĝis la kvara posttagmeze</i>",
		""
	],
	"£:BASE-aserto&\"<esprimoj?n?>\"": [
		"£:BASE-aserto&\"<esprimoj?n?>\"",
		"Falsa amiko: esprimo → aserto",
		"En Esperanto, <i>‘esprimo’</i> estas speciala vorto, fiksita vortumo aŭ formulo, aŭ eble vizaĝesprimo. Sed ĝi ne estas sinonimo de (ne formuleca/termina) <i>‘eldiro’</i> aŭ <i>‘aserto’.</i> Precipe kun ke-frazo ne uzu <i>‘esprimo’,</i> sed <i>‘aserto/eldiro’.</i>",
		"Mi plurfoje aŭdis tiun <span style=\"color: #ff0000\">esprimon</span> (aserton), ke li traktas homojn kiel sklavojn."
	],
	"£:BASE-trompigxi&\"<fal.*>\"": [
		"£:BASE-trompigxi&\"<fal.*>\"",
		"Falsa amiko: fali al/por → trompiĝi de",
		"Tio povas esti falsamika traduka de la angla <i>‘fall for (a ruse)’.</i>",
		""
	],
	"£:BASE-malgxusta&\"<falsaj?n?>\"": [
		"£:BASE-malgxusta&\"<falsaj?n?>\"",
		"Falsa amiko: falsa → malĝusta",
		"La kerna signifo de <i>‘falsa’</i> estas ‘falsita’, ‘falsanta’, ‘neaŭtentika’. Povas esti falsa amiko uzi la vorton kun la senco de simple ‘<i>malĝusta</i>’ aŭ ‘<i>erara</i>’. La sama validas por la adverbo <i>‘false’,</i> kiu implicas iun intencas ŝajnigon, sed foje falsamike estas uzata kun la signifo de <i>‘erare’.</i> PIV ne montras tiun signifon ĉe la adjektivo kaj malrekomendas ĝin ĉe la adverbo. Konsideru fari ŝanĝon ĉi tie.<br>\n<br>\nNotu, ke ReVo jes listigas la sencon de ‘erara/neĝusta’ por la adjektivo, sed limigas ĝin al muzika kunteksto (ekz. <i>falsa noto).</i>",
		"Tio estas tute <span style=\"color: #ff0000\">falsa</span> (malĝusta) vidpunkto.<br>\n<br>\nTio povas doni <span style=\"color: #ff0000\">falsan</span> (malĝustan) impreson.<br>\n<br>\nKaratako <span style=\"color: #ff0000\">false</span> (erare) pensis , ke la rivero mem protektas liajn soldatojn ."
	],
	"£:BASE-bieno&\"<farmoj?n?>\"": [
		"£:BASE-bieno&\"<farmoj?n?>\"",
		"Falsa amiko: farmo → bieno",
		"En Esperanto, ‘<i>farmo</i>’ ne signifas ‘<i>bieno</i>’ (\"terkultivistejo\", angle: <i>farm</i>), sed la agon lupreni teron, bienon aŭ alian ejon portempe kaj komercocele (‘<i>farmi</i>’, angle: <i>lease</i>):<br>\n<br>\n<i>Ne eblas posedi aux farmi pecon da marfundo .</i>",
		"Oni instalis en Afriko gigantajn industriajn <span style=\"color: #ff0000\">farmojn</span> (bienojn)."
	],
	"£:BASE-rafineco": [
		"£:BASE-rafineco",
		"Falsa amiko: fineso → rafineco",
		"En Esperanto, <i>'fineso'</i> estas aerodinamika aŭ kartluda faktermino. Ne uzu ĝin kun la senco de <i>'rafineco'</i> aŭ <i>'delikateco'.</i>",
		"Li tute ne komprenas tiajn diplomatiajn <span style=\"color: #ff0000\">finesojn</span> (delikatecojn)."
	],
	"£:BASE-flamengo": [
		"£:BASE-flamengo",
		"Falsa amiko: flamingo → flamengo",
		"En Esperanto, <i>'flamingo'</i> estas flama gasbeko de lampo aŭ fornelo. La vorto estas kunmetita el 'flamo' kaj '-ingo'. Ne konfuzu tion kun la rozkolora birdo <i>'flamengo'.</i>",
		"Rozkolora nubo da <span style=\"color: #ff0000\">flamingoj</span> (flamengoj) leviĝis super la lago."
	],
	"£:BASE-koketi": [
		"£:BASE-koketi",
		"Falsa amiko: flirti → koketi",
		"En Esperanto, <i>'flirti'</i> normale celas tien-kaj-reen-movon en aerblovo, ekz. de flago. Estas eble, sed nekutime uzi tiun verbon por aminduma konduto. Lingvohelpilo pensas, ke ĉi tie estus pli bone uzi la vorton <i>'koketi'.</i>",
		"Ŝi <span style=\"color: #ff0000\">flirtis</span> (koketis) kun la juna gasto."
	],
	"£:BASE-alo&\"<flugiloj?n?>\"": [
		"£:BASE-alo&\"<flugiloj?n?>\"",
		"Falsa amiko: flugilo → alo",
		"Esperanto havas du malsamajn vortojn por la laŭvorta kaj la metafora signifoj de la angla <i>‘wing’</i> aŭ la germana <i>‘Flügel’,</i> nome <i>‘flugilo’</i> (de ekz. birdo) kaj <i>‘alo’</i> (de ekz. konstruaĵo aŭ organizo).",
		"Ili estis membroj de la armea <span style=\"color: #ff0000\">flugilo</span> (alo) de Hamas."
	],
	"£:BASE-maltrafi&\"<forpas.*>\"": [
		"£:BASE-maltrafi&\"<forpas.*>\"",
		"Falsa amiko: forpasi → maltrafi",
		"En Esperanto, la verbo <i>‘forpasi’</i> estas netransitiva kaj signifas ‘malaperi’. Transitiva uzo de tiu vorto kun la senco de <i>‘maltrafi’</i> estas (dan-germana) falsa amiko.",
		"Ne <span style=\"color: #ff0000\">forpasu</span> (maltrafu) tiun okazon aŭskulti avangardan muzikon."
	],
	"£:BASE-trupo&\"<fortoj?n?>\"": [
		"£:BASE-trupo&\"<fortoj?n?>\"",
		"Falsa amiko: fortoj ↔ trupoj",
		"En Esperanto, <i>‘forto’</i> ĉiam estas eco (angle: <i>strength, force</i>). Povas temi pri korpa aŭ fizika forto, intenseco aŭ fortikeco. Ne eblas uzi la vorton por signifi soldatan trupon aŭ armeon (angle: <i>military forces</i>).<br>\n<br>\n<i>Daŭre kreskis la forto de la uragano.</i><br>\n<br>\n<i>Ne sufiĉis liaj fortoj por levi la ŝtonon.</i><br>\n<br>\n<i>En 1941 la Finnlandaj trupoj partoprenis la siegxon de Leningrado.</i><br>\n<br>\nTrovu ekzemplojn en ReVo aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"La japanaj <span style=\"color: #ff0000\">fortoj</span> (trupoj) defendis la insulon dum monatoj."
	],
	"£:BASE-foto&\"<fotografoj?n?>\"": [
		"£:BASE-foto&\"<fotografoj?n?>\"",
		"Falsa amiko: fotografo → foto",
		"En Esperanto, <i>‘fotografo’</i> estas la persono, kaj <i>‘foto’</i> aŭ <i>‘fotografio’</i> la bildo.",
		"Li vendas siajn nigra-blankajn <span style=\"color: #ff0000\">fotografojn</span> (fotojn)."
	],
	"£:BASE-piedo": [
		"£:BASE-piedo",
		"Falsa amiko: futo → piedo",
		"En Esperanto, la vorto <i>‘futo’</i> nur funkcias kiel mezurunuo (ĉ. 33 cm). Por la korpoparto, uzu <i>‘piedo’.</i><br>\n<br>\nLa neologismo <i>futbalo</i> (piedpilkado) estas kurioza kombino el du falsaj amikoj (<i>futo</i> kaj <i>balo</i>), kiuj kune – kaj nur kune! - rehavas siajn malfalsajn signifojn de ‘piedo’ kaj ‘pilko’. Sola, ‘balo’ signifas dancfeston.",
		"Provu stari sur unu <span style=\"color: #ff0000\">futo</span> (piedo) kaj fermu vian okulojn!"
	],
	"£:BASE-gasto&\"<gestoj?n?>\"": [
		"£:BASE-gasto&\"<gestoj?n?>\"",
		"Falsa amiko: gesto → gasto",
		"En Esperanto, <i>‘gesto’</i> estas man- aŭ kapsigno. Ne konfuzu ĝin kun <i>‘gasto’</i> (vizitanta homo, angle: <i>guest).</i>",
		"La gesto (gasto) estis tre malsata."
	],
	"£:BASE-turni&\"<gxir.*>\"": [
		"£:BASE-turni&\"<gxir.*>\"",
		"Falsa amiko: ĝiri → turn(iĝ)i",
		"La verbo <i>‘ĝiri’</i> signifas ‘transpagi’. Ne uzu ĝin kun la senco ‘turniĝi’ aŭ ‘turni’.",
		"<i>Dumkure , rinoceroj kapablas</i> <span style=\"color: #ff0000\"><i>gxiri</i></span><i> (turniĝi) subite.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>ĝiris</i></span><i> (turnis) la boaton dekstren.</i>"
	],
	"£:BASE-turnigxi&\"<gxir.*>\"": [
		"£:BASE-turnigxi&\"<gxir.*>\"",
		"Falsa amiko: ĝiri → turn(iĝ)i",
		"La verbo <i>‘ĝiri’</i> signifas ‘transpagi’. Ne uzu ĝin kun la senco ‘turniĝi’ aŭ ‘turni’.",
		"<i>Dumkure , rinoceroj kapablas</i> <span style=\"color: #ff0000\"><i>gxiri</i></span><i> (turniĝi) subite.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>ĝiris</i></span><i> (turnis) la boaton dekstren.</i>"
	],
	"£:BASE-vitra&\"<glasaj?n?>\"": [
		"£:BASE-vitra&\"<glasaj?n?>\"",
		"Falsa amiko: glaso → vitro",
		"'Glaso’ estas trinkujo, por la travidebla materialo uzu <i>‘vitro’.</i> Temas pri falsa amiko por pluraj gepatraj lingvoj.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Sur la tablo estis <span style=\"color: #ff0000\">glasaj</span> (vitraj) kandelingoj."
	],
	"£:BASE-vitro&\"<glason?>\"": [
		"£:BASE-vitro&\"<glason?>\"",
		"Falsa amiko: glaso → vitro",
		"'Glaso’ estas trinkujo, por la travidebla materialo uzu <i>‘vitro’.</i> Temas pri falsa amiko por pluraj gepatraj lingvoj.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Sur la tablo estis <span style=\"color: #ff0000\">glasaj</span> (vitraj) kandelingoj."
	],
	"£:BASE-sxtonceramiko&\"<grejsoj?n?>\"": [
		"£:BASE-sxtonceramiko&\"<grejsoj?n?>\"",
		"Falsa amiko: grejso → ŝtonceramiko",
		"En Esperanto, <i>‘grejso’</i> estas rokspeco. Ne uzu la vorton kun la (france) falsamika senco de <i>‘ŝtonceramiko’</i>",
		"Potoj el emajlita <span style=\"color: #ff0000\">grejso</span> (ŝtonceramiko)"
	],
	"£:BASE-kradrosti": [
		"£:BASE-kradrosti",
		"Falsa amiko: grili → kradrosti",
		"<i>'Grilo’</i> estas insekto (angle: <i>cricket,</i> germane: <i>Grille</i>), sed la angla-germana falsamika vortparo <i>‘*grilo/*grili’</i> ne ekzistas en Esperanto. Uzu <i>‘kradrosti’</i> kaj <i>‘kradrostilo’</i> anstataŭ.",
		"Sur la <span style=\"color: #ff0000\">grilo</span> (kradrostilo) estis diversaj specoj de kolbaso kaj fiŝo."
	],
	"£:BASE-kradrostilo": [
		"£:BASE-kradrostilo",
		"Falsa amiko: grili → kradrosti",
		"<i>'Grilo’</i> estas insekto (angle: <i>cricket,</i> germane: <i>Grille</i>), sed la angla-germana falsamika vortparo <i>‘*grilo/*grili’</i> ne ekzistas en Esperanto. Uzu <i>‘kradrosti’</i> kaj <i>‘kradrostilo’</i> anstataŭ.",
		"Sur la <span style=\"color: #ff0000\">grilo</span> (kradrostilo) estis diversaj specoj de kolbaso kaj fiŝo."
	],
	"£:BASE-kialo&\"<grundoj?n?>\"": [
		"£:BASE-kialo&\"<grundoj?n?>\"",
		"Falsa amiko: grundo → kialo",
		"En Esperanto, <i>‘grundo’</i> signifas ‘tero’ aŭ ‘fono’. Ne eblas uzi la vorton kun la signifo <i>‘kialo’.</i> Povas temi pri germana aŭ dana falsa amiko.",
		"La <span style=\"color: #ff0000\">grundo</span> (kialo) por la fiasko estis malsufiĉa planado."
	],
	"£:BASE-jxus&\"<gxuste>\"": [
		"£:BASE-jxus&\"<gxuste>\"",
		"Falsa amiko: ĝuste → ĵus",
		"'Ĝuste’ signifas ‘senerare’. La similsona angla <i>‘just’</i> tradukiĝas aŭ kiel <i>‘juste’</i> (= laŭregule) aŭ kiel <i>‘jus’</i> (= antaŭ tre mallonga tempo).<br>\n<br>\nNotu, ke <i>‘ĝuste’</i> povas tamen havi ankaŭ tempan signifon:<br>\n<br>\nKiam la amiko alvenis, ŝi ĝuste estis trinkanta teon / havis alian gaston<br>\n<br>\nSed temas pri samtempeco, male al <i>‘jus’,</i> kiu ĉiam implicas antaŭtempecon.",
		"Mi <span style=\"color: #ff0000\">ĝuste</span> (ĵus) alvenis de la flughaveno."
	],
	"£:BASE-ŝtatestro&\"<guvernisto>\"": [
		"£:BASE-ŝtatestro&\"<guvernisto>\"",
		"Falsa amiko: guverno → registaro, guvernisto → ŝtatestro",
		"En moderna Esperanto, <i>‘guverni’</i> signifas \"profesie endome eduki infanon\", (plejparte historia) tasko tipe de <i>‘guvernistino’</i> en socie altrangaj familioj (angle: <i>governess</i>). Ne uzu la radikon kun la arkaika senco de <i>‘regi’.</i> Diru <i>‘ŝtatestro’,</i> ne <i>‘*</i><i>guvernisto</i><i>’,</i> kaj <i>‘registaro’,</i> ne <i>‘*guverno’.</i>",
		"Hispanio havas novan <span style=\"color: #ff0000\">guvernon</span> (registaron)."
	],
	"£:BASE-registaro&\"<guverno>\"": [
		"£:BASE-registaro&\"<guverno>\"",
		"Falsa amiko: guverno → registaro, guvernisto → ŝtatestro",
		"En moderna Esperanto, <i>‘guverni’</i> signifas \"profesie endome eduki infanon\", (plejparte historia) tasko tipe de <i>‘guvernistino’</i> en socie altrangaj familioj (angle: <i>governess</i>). Ne uzu la radikon kun la arkaika senco de <i>‘regi’.</i> Diru <i>‘ŝtatestro’,</i> ne <i>‘*</i><i>guvernisto</i><i>’,</i> kaj <i>‘registaro’,</i> ne <i>‘*guverno’.</i>",
		"Hispanio havas novan <span style=\"color: #ff0000\">guvernon</span> (registaron)."
	],
	"£:BASE-hararo&\"<haron?>\"": [
		"£:BASE-hararo&\"<haron?>\"",
		"Falsa amiko: haro → hararo",
		"En Esperanto, <i>‘haro’</i> estas unuopa haro, ne eblas (kiel en ekz. la germana) uzi la vorton kun la signifo <i>‘hararo’.</i>",
		"Ŝi sidis antaŭ la spegulo, brosanta sian longan, buklan <span style=\"color: #ff0000\">haron</span> (hararon)."
	],
	"£:BASE-senti&\"<hav.*>\"": [
		"£:BASE-senti&\"<hav.*>\"",
		"Falsa amiko: havi → senti",
		"En Esperanto, oni ne <i>havas,</i> sed <i>sentas</i> dormemon, malsaton, soifon aŭ timon.<br>\n<br>\n<i>Post la grimpado, li</i> <span style=\"color: #ff0000\"><i>havis</i></span><i> (sentis) grandan soifon.</i><br>\n<br>\nAlternative, vi ofte povas uzi adjektivon:<br>\n<br>\n<i>Mi estas dormema / malsata / soifa.</i>",
		""
	],
	"£:BASE-agxi": [
		"£:BASE-agxi",
		"Falsa amiko: havi jarojn → aĝi",
		"Striktasense, oni ne havas jarojn, sed aĝon. Kvankam ne estas malpermesite diri <i>‘Mi havas 25 jarojn’,</i> konsideru la jenajn alternativojn:<br>\n<br>\n<i>Mi aĝas 25 jarojn.</i> (Aŭ kun elipso: <i>Mi aĝas 25.)</i><br>\n<br>\n<i>Mi estas 25 jarojn aĝa.</i><br>\n<br>\n<i>Mi estas 25-jara.</i> (Aŭ kun elipso: <i>Mi estas 25.</i>)",
		""
	],
	"£:BASE-omaro": [
		"£:BASE-omaro",
		"Falsa amiko: humero → omaro",
		"En Esperanto, <i>'humero'</i> estas brakosto, dum <i>'omaro'</i> estas krabo-simila akvobesto.",
		"Ni manĝis bongustan <span style=\"color: #ff0000\">humeron</span> (omaron)."
	],
	"£:BASE-apartajxo&\"<idiosinkrazioj?n?>\"": [
		"£:BASE-apartajxo&\"<idiosinkrazioj?n?>\"",
		"Falsa amiko: idiosinkrazio → apartaĵo",
		"Origine en Esperanto, <i>'idiosinkrazio'</i> estis medicina esprimo kun la signifo 'trosentemo al io'. Sed fakte la vorto estas pli ofte uzata kun la ĝenerallingva senco de &quot;apartiga, individua eco&quot;. PIV listigas nur la duan signifon, ReVo rekomendas la unuan. Do estas malfacile diri, ke temas pri vera eraro ĉi tie, decidu vi mem!",
		"La <span style=\"color: #ff0000\">idiosinkrazioj</span> (apartaĵoj) de la naciaj lingvoj malfaciligas lernadon."
	],
	"£:BASE-imponi&\"<impres.*>\"": [
		"£:BASE-imponi&\"<impres.*>\"",
		"Falsa amiko: impresi → imponi",
		"<i>'Impresi’</i> signifas ‘havi efekton al’, dum <i>‘imponi’</i> signifas ‘kaŭzi respekton/admiron’. La du vortoj estas similaj kaj havas la saman anglan tradukon (<i>impress</i>), sed dum <i>‘imponi’</i> ĉiam implicas pozitivan senton, <i>‘impresi’</i> estas pli ĝenerala – eblas impresi agrable aŭ malagrable, kaj io povas impres kiel plej stranga aŭ plej genia. Sed ĝuste pro tio, sen adverbo aŭ kiel-komplemento, la celita senco verŝajne estas <i>‘imponi’.</i>",
		"La <span style=\"color: #ff0000\">impresitaj</span> (imponitaj) spektantoj aplaŭdis."
	],
	"£:BASE-inkogniteco": [
		"£:BASE-inkogniteco",
		"Falsa amiko: inkognito → inkogniteco/inkognite",
		"La kerna signifo de <i>'inkognito'</i> estas persono. Prefere uzu '-ec' por esprimi inkognitecon. Estas falsa amiko uzi la o-vorton kun adverba funkcio, kiel en aliaj lingvoj.",
		"Li vojaĝis <span style=\"color: #ff0000\">inkognito</span> (inkognite).<br>\n<br>\nLa baronino estis vestita nur per <span style=\"color: #ff0000\">inkognito</span> (inkogniteco)."
	],
	"£adv&\"<inkognito>\"": [
		"£adv&\"<inkognito>\"",
		"Falsa amiko: inkognito → inkogniteco/inkognite",
		"La kerna signifo de <i>'inkognito'</i> estas persono. Prefere uzu '-ec' por esprimi inkognitecon. Estas falsa amiko uzi la o-vorton kun adverba funkcio, kiel en aliaj lingvoj.",
		"Li vojaĝis <span style=\"color: #ff0000\">inkognito</span> (inkognite).<br>\n<br>\nLa baronino estis vestita nur per <span style=\"color: #ff0000\">inkognito</span> (inkogniteco)."
	],
	"£:BASE-okazo&\"<instancoj?n?>": [
		"£:BASE-okazo&\"<instancoj?n?>",
		"Falsa amiko: instanco → okazo",
		"En Esperanto, <i>‘instanco’</i> estas juĝa/jura aŭtoritato (angle: <i>court, authority</i>) aŭ foje, evitinde, institucio en pli ĝenerala senco. Ne eblas uzi la vorton kun la signifo de ‘unuopa apero/okazo/kopio’ (angle: <i>instance</i>).",
		"<i>La polico esploras tri novajn</i> <span style=\"color: #ff0000\"><i>instancojn</i></span><i> (okazojn) de pafilouzo.</i><br>\n<br>\n<i>Fermu ĉiujn</i> <span style=\"color: #ff0000\"><i>instancojn</i></span><i> (okazojn) de la programo!</i>"
	],
	"£:BASE-esenca&\"<integraj?n?>\"": [
		"£:BASE-esenca&\"<integraj?n?>\"",
		"Falsa amiko: integra → esenca",
		"En Esperanto, <i>‘integra’</i> signifas ‘tutkompleta, nedisigeble kohera’. Evitu la falsamikan sencon <i>‘esenca’.</i>",
		"La publika dimensio estas <span style=\"color: #ff0000\">integra</span> (esenca) parto de lia laboro."
	],
	"£:BASE-entrudigxi&\"<interfer.*>\"": [
		"£:BASE-entrudigxi&\"<interfer.*>\"",
		"Falsa amiko: interferi → entrudiĝi/malhelpi",
		"'Interfero’ estas fizika fenomeno, onda interkruciĝo. En figura uzo, ĝi ankaŭ povas signifi interinfluon ĝenerale. Sed <i>‘interferi’</i> ne havas la signifon de ‘entrudigxi/enmiksigxi en’ (angla: <i>interfere with</i>)<i>’.</i>",
		"Eksterlanda registaro <span style=\"color: #ff0000\">interferis</span> (entrudiĝis) en la elekto.<br>\n<br>\nLa informadika vermo Stuxnet estis destinita <span style=\"color: #ff0000\">interferi kun</span> la funkciado de la centrifugoj. (malhelpi la funkciadon ...)"
	],
	"£:BASE-landinterno": [
		"£:BASE-landinterno",
		"Falsa amiko: interi[eo]ro → landinterno",
		"En Esperanto, <i>‘interioro’</i> estas endoma eco de mebloaranĝo ktp. Ne eblas uzi la vorton en la senco de <i>‘landinterno’</i> aŭ <i>‘landprofundo’</i> (angle: <i>interior,</i> germane: Hinterland). <i>‘Interiero’</i> estas misliterumo de <i>‘interioro’.</i><br>\n<br>\nNotu ankaŭ, ke la foje uzata, germaneca <i>‘hinterlando’</i> en Esperanto estas evitinda neologismo.",
		"Bona Espero situas en la brazila <span style=\"color: #ff0000\">interiero</span> (landinterno)"
	],
	"£x-etype-(list|lemma)&\"<interpren.*>\"": [
		"£x-etype-(list|lemma)&\"<interpren.*>\"",
		"Falsa amiko: interpreno → entrepreno",
		"En Esperanto, <i>'interpreno'</i> rilatas al la ago de interpreni (ekz. la manojn). Ne uzu tiun radikon anstataŭ vortoj kiel <i>'entrepreno'</i> kaj <i>'entreprenisto'.</i>",
		"Okazis renkontiĝo por inan <span style=\"color: #ff0000\">interprenistoj</span> (entreprenistoj)."
	],
	"£:BASE-ekspoziciejo&\"<interpretejoj?n?>\"": [
		"£:BASE-ekspoziciejo&\"<interpretejoj?n?>\"",
		"Falsa amiko: interpretejo → ekspoziciejo",
		"Striktasence <i>‘interpreti’</i> signifas ‘buŝtraduki’ aŭ ‘eltrovi/proponi signifon de teksto, sonĝo, nocio aŭ artaĵo, kaj por tio normale ne ekzistas aparte difinita loko (-ejo). Verŝajne vi celas pedagogian ekspoziciejon/klarigejon en naturparko aŭ simile (hispane: <i>centro de interpretación</i>).",
		"La cxefturo enhavas <span style=\"color: #ff0000\">interpretejon</span> (ekspoziciejon) pri la Templanoj ."
	],
	"£:BASE-jaro&\"<anoj?n?>\"": [
		"£:BASE-jaro&\"<anoj?n?>\"",
		"Falsa amiko: jaro → ano",
		"En Esperanto, <i>‘ano’</i> signifas ‘membro’, ne ‘jaro’. Temas pri latinida falsa amiko.",
		""
	],
	"£:BASE-jxulo": [
		"£:BASE-jxulo",
		"Falsa amiko: julo → ĵulo",
		"En Esperanto, <i>'julo'</i> signifas 'Kristnasko'. Por la mezurunuo de energio, uzu <i>'ĵulo'.</i>",
		"Kilovathoro egalas al 3,6 milionoj da <span style=\"color: #ff0000\">juloj</span> (ĵuloj)."
	],
	"£:BASE-cxambro&\"<kameroj?n?>\"": [
		"£:BASE-cxambro&\"<kameroj?n?>\"",
		"Falsa amiko: kamero → ĉambro",
		"Parlamento havas <i>‘ĉambrojn’,</i> ne <i>‘kamerojn’.</i>",
		""
	],
	"£:BASE-cxefurbo": [
		"£:BASE-cxefurbo",
		"Falsa amiko: kapitalo → ĉefurbo",
		"En Esperanto, <i>‘kapitalo’</i> estas monsumo. Ne konfuzu ĝin kun la vorto <i>‘ĉefurbo’</i> (angle: <i>capital</i>).",
		"Li loĝas en la <span style=\"color: #c9211e\">kapitalo</span> (ĉefurbo)."
	],
	"£:BASE-cxapitro&\"<kapitel.*>\"": [
		"£:BASE-cxapitro&\"<kapitel.*>\"",
		"Falsa amiko: kapitelo → ĉapitro",
		"<i>'Kapitelo’</i> estas ornamita supra ekstremo de kolono. Ne konfuzu tion kun <i>‘ĉapitro’</i> (germane: Kapitel).",
		"Mi nur legis la unuajn du <span style=\"color: #ff0000\">kapitelojn</span> (ĉapitrojn)."
	],
	"£:BASE-kapsulo": [
		"£:BASE-kapsulo",
		"Falsa amiko: kapselo → kapsulo",
		"En Esperanto, <i>'kapselo'</i> estas planto. Por la ujo, medicinaĵo, fruktŝelo aŭ botelĉapeto, uzu <i>'kapsulo'.</i>",
		""
	],
	"£:BASE-karamelbombono": [
		"£:BASE-karamelbombono",
		"Falsa amiko: karamelo → karamelbombono",
		"'Karamelo' estas substanco. La unuopaj frandaĵoj estas <i>'karamelbombonoj'.</i>",
		"Li distribuis manplenon da <span style=\"color: #ff0000\">karameloj</span> (karamelbombonoj) inter la infanoj."
	],
	"£:BASE-mapo&\"<kartoj?n?>\"": [
		"£:BASE-mapo&\"<kartoj?n?>\"",
		"Falsa amiko: karto → mapo",
		"En Esperanto, <i>‘karto’</i> povas esti identeckarto, ludkarto, kreditkarto, poŝtkarto aŭ restoracia karto. Sed por la senco <i>‘mapo’</i> ja ekzistas memstara vorto, do prefere uzu tiun. Estas arkaismo uzi <i>‘karto’</i> en la senco de <i>‘mapo’.</i>",
		"Ili volis ŝanĝi la politikan <span style=\"color: #ff0000\">karton</span> (mapon) de la mondo"
	],
	"£:BASE-galantulo": [
		"£:BASE-galantulo",
		"Falsa amiko: kavaliro → galantulo",
		"En Esperanto, <i>'kavaliro'</i> normale estas nobelulo, precipe mezepoka kun ĉevalo, kiraso kaj glavo. Prefere ne uzu la vorton en la senco de <i>'galantulo', 'adoranto'.</i> Sed ne temas pri nepra eraro – PIV ne registras ĉi-lastan sencon, sed ReVo jes.",
		"La tutan vesperon ŝi estis ĉirkaŭita de <span style=\"color: #ff0000\">kavaliroj</span> (adorantoj)."
	],
	"£:kiu&\"ke\"": [
		"£:kiu&\"ke\"",
		"Falsa amiko: ke → kiu",
		"Ne konfuzu la konjunkcion <i>‘ke’</i> kun la relativa pronomo <i>‘kiu’.</i> Povas temi pri falsamika konfuzo, ĉar la du vortoj tradukiĝas (parte) same en kaj la franca <i>(que)</i> kaj la angla <i>(that</i>). Kaj la franca <i>‘que’</i> eĉ sonas kiel la esperanta <i>‘ke’.</i>",
		"Tio estis la plej bela filmo <span style=\"color: #ff0000\">ke</span> (kiun) mi iam vidis."
	],
	"£:kiuj&\"ke\"": [
		"£:kiuj&\"ke\"",
		"Falsa amiko: ke → kiu",
		"Ne konfuzu la konjunkcion <i>‘ke’</i> kun la relativa pronomo <i>‘kiu’.</i> Povas temi pri falsamika konfuzo, ĉar la du vortoj tradukiĝas (parte) same en kaj la franca <i>(que)</i> kaj la angla <i>(that</i>). Kaj la franca <i>‘que’</i> eĉ sonas kiel la esperanta <i>‘ke’.</i>",
		"Tio estis la plej bela filmo <span style=\"color: #ff0000\">ke</span> (kiun) mi iam vidis."
	],
	"£:kiun&\"ke\"": [
		"£:kiun&\"ke\"",
		"Falsa amiko: ke → kiu",
		"Ne konfuzu la konjunkcion <i>‘ke’</i> kun la relativa pronomo <i>‘kiu’.</i> Povas temi pri falsamika konfuzo, ĉar la du vortoj tradukiĝas (parte) same en kaj la franca <i>(que)</i> kaj la angla <i>(that</i>). Kaj la franca <i>‘que’</i> eĉ sonas kiel la esperanta <i>‘ke’.</i>",
		"Tio estis la plej bela filmo <span style=\"color: #ff0000\">ke</span> (kiun) mi iam vidis."
	],
	"£:kiujn&\"ke\"": [
		"£:kiujn&\"ke\"",
		"Falsa amiko: ke → kiu",
		"Ne konfuzu la konjunkcion <i>‘ke’</i> kun la relativa pronomo <i>‘kiu’.</i> Povas temi pri falsamika konfuzo, ĉar la du vortoj tradukiĝas (parte) same en kaj la franca <i>(que)</i> kaj la angla <i>(that</i>). Kaj la franca <i>‘que’</i> eĉ sonas kiel la esperanta <i>‘ke’.</i>",
		"Tio estis la plej bela filmo <span style=\"color: #ff0000\">ke</span> (kiun) mi iam vidis."
	],
	"£:BASE-kilogramo&\"<kiloj?n?>\"": [
		"£:BASE-kilogramo&\"<kiloj?n?>\"",
		"Falsa amiko: kilo → kilogramo",
		"En Esperanto, <i>‘kilo’</i> estas la suba, mallarĝa parto de ŝipo. Ne konfuzu la vorton kun la mezurunuo <i>‘kilogramo’.</i><br>\n<br>\n<i>Kiom da</i> <span style=\"color: #ff0000\"><i>kiloj</i></span><i> (kilogramoj) vi pezas?</i><br>\n<br>\nNotu, ke <i>‘kilo-’</i> ankaŭ estas prefikso, kun la signifo ‘mil’. Tamen normale ne eblas uzi la vorton memstare:<br>\n<br>\n<i>Li flugis 300</i> <span style=\"color: #ff0000\"><i>kilojn</i></span><i> (milojn) da kilometroj jare.</i>",
		""
	],
	"£:BASE-milo&\"<kiloj?n?>\"": [
		"£:BASE-milo&\"<kiloj?n?>\"",
		"Falsa amiko: kilo → kilogramo",
		"En Esperanto, <i>‘kilo’</i> estas la suba, mallarĝa parto de ŝipo. Ne konfuzu la vorton kun la mezurunuo <i>‘kilogramo’.</i><br>\n<br>\n<i>Kiom da</i> <span style=\"color: #ff0000\"><i>kiloj</i></span><i> (kilogramoj) vi pezas?</i><br>\n<br>\nNotu, ke <i>‘kilo-’</i> ankaŭ estas prefikso, kun la signifo ‘mil’. Tamen normale ne eblas uzi la vorton memstare:<br>\n<br>\n<i>Li flugis 300</i> <span style=\"color: #ff0000\"><i>kilojn</i></span><i> (milojn) da kilometroj jare.</i>",
		""
	],
	"£:BASE-kesto": [
		"£:BASE-kesto",
		"Falsa amiko: kisto → kesto",
		"En Esperanto, <i>'kisto'</i> estas la sama kiel <i>'cisto' –</i> nenormala, enkorpa kavaĵo. Ne konfuzu tion kun <i>'kesto'</i> (germane: <i>Kiste</i>) aŭ <i>'ĉerko'</i> (dane: <i>kiste</i>)<i>.</i>",
		"La vinboteloj venis en ligna <span style=\"color: #ff0000\">kisto</span> (kesto)."
	],
	"£:BASE-kivifrukto": [
		"£:BASE-kivifrukto",
		"Falsa amiko: kivio → kivo/kivifrukto",
		"En Esperanto, <i>'kivio'</i> estas birdo. Por la frukto, uzu <i>'kivo'</i> aŭ <i>'kivifrukto'.</i>",
		"Oni kultivas tie ankaŭ <span style=\"color: #ff0000\">kiviojn</span> (kivifruktojn)."
	],
	"£:BASE-aplauxdi&\"<klacx.*>\"": [
		"£:BASE-aplauxdi&\"<klacx.*>\"",
		"Falsa amiko: klaĉi → aplaŭdi",
		"<i>'Klaĉi’</i> signifas interŝanĝi onidirojn pri aliaj personoj. Ne konfuzu la vorton kun <i>‘aplaŭdi’</i> (aprobe kunbati la manojn, germane: <i>klatschen</i>). Temas pri falsa amiko.",
		"Post la spektaklo la spektantoj longe <span style=\"color: #c9211e\">klaĉis</span> (aplaŭdis)."
	],
	"£:BASE-koakso": [
		"£:BASE-koakso",
		"Falsa amiko: kokso → koakso",
		"En Esperanto, <i>'kokso'</i> estas nur korpoparto. Por la karbeca brulaĵo, uzu <i>'koakso'</i>",
		"Lastatempe, la prezo de <span style=\"color: #ff0000\">kokso</span> (koakso) altiĝis."
	],
	"£:BASE-komiksa": [
		"£:BASE-komiksa",
		"Falsa amiko: komika → komiksa",
		"En Esperanto oni distingas inter la ĝenerala vorto <i>‘komika’</i> (ridiga, amuza) kaj la literatura vorto <i>‘komiksa’,</i> kiun oni uzas pri bildstrioj, sendepende de ilia eventuala komikeco.",
		"Mi ŝatas <span style=\"color: #ff0000\">komikajn striojn</span> (komiksajn bildstriojn)."
	],
	"£:BASE-komato": [
		"£:BASE-komato",
		"Falsa amiko: komo/koma → komato",
		"En Esperanto, <i>'komo'</i> estas interpunkcio-sigon kaj <i>'komao'</i> estas muzika faktermino (1/8 de noto). Ne kunfuzu tiujn vortojn kun <i>'komato'</i> (stato de senkonscio).",
		"Li ĵus vekiĝis el unusemajna <span style=\"color: #ff0000\">komao</span> (komato)"
	],
	"£:BASE-konsistigi&\"<kompon.*>\"": [
		"£:BASE-konsistigi&\"<kompon.*>\"",
		"Falsa amiko: komponi → konsistigi",
		"En Esperanto, <i>‘komponi’</i> havas la sencojn de ‘verki (muzikaĵon)’ (angle: compose) kaj ‘kunmeti la konsistigajn partojn de io’ (angle: <i>conjoin</i>). Sed ne estas logike inversigi la duan signifon al <i>‘konsistigi’.</i> La tipa subjekto estas homo en singularo: <i>Iu komponas ion.</i> Evitu frazojn kun <i>partoj, kiuj \"</i><span style=\"color: #ff0000\"><i>komponas</i></span><i>\" tuton</i>. Por tio, uzu <i>‘konsistigi’.</i>",
		"La aliancon <span style=\"color: #ff0000\">komponas</span> (konsistigas) 5 landoj."
	],
	"£:BASE-celi&\"<kompren.*>\"": [
		"£:BASE-celi&\"<kompren.*>\"",
		"Falsa amiko: kompreni sub → celi per",
		"En Esperanto, <i>‘kompreni’</i> signifas ‘bone koni la signifon aŭ naturon de io’ aŭ ‘simpatii kun la motivoj aŭ intencoj de iu’ (angle: <i>understand,</i> germane: <i>verstehen</i>). Evitu diri <i>‘</i><span style=\"color: #ff0000\"><i>kompreni</i></span><i> ion (alian signifon)</i> <span style=\"color: #ff0000\"><i>sub</i></span><i> io (iu vorto/esprimo/koncepto’.</i> Pli bone eblas kapti tiun sencon per <i>‘</i><b><i>celi</i></b><i> ion (alian signifon)</i> <b><i>per</i></b><i> io (iu vorto)’</i> aŭ <i>‘</i><b><i>ligi</i></b><i> la signifon de …</i> <b><i>al</i></b><i> io (iu vorto)’.</i> Precipe en demandoj ankaŭ eblas tute nova sitakso: <i>‘</i><b><i>Kiel vi difinas tion</i></b><i> (iun vorton)?’</i>",
		"Kion vi <span style=\"color: #ff0000\">komprenas sub</span> «interlingvistiko»? («Kion vi <b>celas per</b> interlingvistiko»? - Kiel vi difinas «interlingvistiko»?)"
	],
	"£:per&\"<sub>\"": [
		"£:per&\"<sub>\"",
		"Falsa amiko: kompreni sub → celi per",
		"En Esperanto, <i>‘kompreni’</i> signifas ‘bone koni la signifon aŭ naturon de io’ aŭ ‘simpatii kun la motivoj aŭ intencoj de iu’ (angle: <i>understand,</i> germane: <i>verstehen</i>). Evitu diri <i>‘</i><span style=\"color: #ff0000\"><i>kompreni</i></span><i> ion (alian signifon)</i> <span style=\"color: #ff0000\"><i>sub</i></span><i> io (iu vorto/esprimo/koncepto’.</i> Pli bone eblas kapti tiun sencon per <i>‘</i><b><i>celi</i></b><i> ion (alian signifon)</i> <b><i>per</i></b><i> io (iu vorto)’</i> aŭ <i>‘</i><b><i>ligi</i></b><i> la signifon de …</i> <b><i>al</i></b><i> io (iu vorto)’.</i> Precipe en demandoj ankaŭ eblas tute nova sitakso: <i>‘</i><b><i>Kiel vi difinas tion</i></b><i> (iun vorton)?’</i>",
		"Kion vi <span style=\"color: #ff0000\">komprenas sub</span> «interlingvistiko»? («Kion vi <b>celas per</b> interlingvistiko»? - Kiel vi difinas «interlingvistiko»?)"
	],
	"£:BASE-agordi&\"<konfigu.*>\"": [
		"£:BASE-agordi&\"<konfigu.*>\"",
		"Falsa amiko: konfiguri → agordi",
		"'Konfiguri', se entute uzebla en Esperanto, devus signifi 'ludi rolon laŭ (sia) kono'. Sed tutcerte vi celas <i>'agordi' ĉi</i> tie.",
		""
	],
	"£x-etype-lemma&\"<.*konfigur.*>\"": [
		"£x-etype-lemma&\"<.*konfigur.*>\"",
		"Falsa amiko: konfiguri → agordi",
		"'Konfiguri', se entute uzebla en Esperanto, devus signifi 'ludi rolon laŭ (sia) kono'. Sed tutcerte vi celas <i>'agordi' ĉi</i> tie.",
		""
	],
	"£:BASE-fini&\"<konklud.*>\"": [
		"£:BASE-fini&\"<konklud.*>\"",
		"Falsa amiko: konkludi → fini",
		"En Esperanto, ‘<i>konkludi’</i> nur temas pri logika rezonado, ne eblas <i>konkludi</i> agon, kurson, procezon aŭ simile. Por tiu senco, simple uzu <i>‘fini’.</i>",
		"Li sukcese <span style=\"color: #ff0000\">konkludis</span> (finis) la lastan jaron de la liceo."
	],
	"£:BASE-kohero&\"<konsistencoj?n?>\"": [
		"£:BASE-kohero&\"<konsistencoj?n?>\"",
		"Falsa amiko: konsistenca/o → kohera/o",
		"En Esperanto, ‘konsistenco’ celas la fizikan strukturon de substanco (ekz. mola, amorfa ktp., angle: texture, germane: Konsistenz, Beschaffenheit). Estas (angla) falsa amiko uzi la vorton kun la senco de ‘kohero’ (angle: consistency).<br>\n<br>\n<i>La filmo estas konata pro sia interna</i> <span style=\"color: #ff0000\"><i>konsistenco</i></span><i> (kohero), psikologia bildigo, kaj rolularo.</i><br>\n<br>\nKaj nepre ne ĝeneraligu la signifon de ‘logika kohero’ al ‘ĝenerala kohero’:<br>\n<br>\n<i>La energia krizo endanĝerigis la tutmondan</i> <span style=\"color: #ff0000\"><i>konsistencon</i></span><i> (koheron).</i>",
		""
	],
	"£:BASE-kohera&\"<konsistencaj?n?>\"": [
		"£:BASE-kohera&\"<konsistencaj?n?>\"",
		"Falsa amiko: konsistenca/o → kohera/o",
		"En Esperanto, ‘konsistenco’ celas la fizikan strukturon de substanco (ekz. mola, amorfa ktp., angle: texture, germane: Konsistenz, Beschaffenheit). Estas (angla) falsa amiko uzi la vorton kun la senco de ‘kohero’ (angle: consistency).<br>\n<br>\n<i>La filmo estas konata pro sia interna</i> <span style=\"color: #ff0000\"><i>konsistenco</i></span><i> (kohero), psikologia bildigo, kaj rolularo.</i><br>\n<br>\nKaj nepre ne ĝeneraligu la signifon de ‘logika kohero’ al ‘ĝenerala kohero’:<br>\n<br>\n<i>La energia krizo endanĝerigis la tutmondan</i> <span style=\"color: #ff0000\"><i>konsistencon</i></span><i> (koheron).</i>",
		""
	],
	"£:BASE-konsisto&\"<konstitucioj?n?>\"": [
		"£:BASE-konsisto&\"<konstitucioj?n?>\"",
		"Falsa amiko: konstitucio → konsist(ig)o, kompleksio, statutoj",
		"En Esperanto, <i>‘konstitucio’</i> havas du signifojn, (a) la baza leĝaro de ekz. lando, kaj – iom arkaike - (b) ‘kompleksio’, korpa ecaro de individuo (ekz. <i>fortika konstitucio</i>). Ne uzu la vorton kun la senco de ‘konsisto’ aŭ (laŭ la franca) ‘konsistigo’. Notu ankaŭ, ke landoj havas konstitucion, dum asocioj havas statutojn.",
		""
	],
	"£:BASE-konsistigo&\"<konstitucioj?n?>\"": [
		"£:BASE-konsistigo&\"<konstitucioj?n?>\"",
		"Falsa amiko: konstitucio → konsist(ig)o, kompleksio, statutoj",
		"En Esperanto, <i>‘konstitucio’</i> havas du signifojn, (a) la baza leĝaro de ekz. lando, kaj – iom arkaike - (b) ‘kompleksio’, korpa ecaro de individuo (ekz. <i>fortika konstitucio</i>). Ne uzu la vorton kun la senco de ‘konsisto’ aŭ (laŭ la franca) ‘konsistigo’. Notu ankaŭ, ke landoj havas konstitucion, dum asocioj havas statutojn.",
		""
	],
	"£:BASE-kompleksio&\"<konstitucioj?n?>\"": [
		"£:BASE-kompleksio&\"<konstitucioj?n?>\"",
		"Falsa amiko: konstitucio → konsist(ig)o, kompleksio, statutoj",
		"En Esperanto, <i>‘konstitucio’</i> havas du signifojn, (a) la baza leĝaro de ekz. lando, kaj – iom arkaike - (b) ‘kompleksio’, korpa ecaro de individuo (ekz. <i>fortika konstitucio</i>). Ne uzu la vorton kun la senco de ‘konsisto’ aŭ (laŭ la franca) ‘konsistigo’. Notu ankaŭ, ke landoj havas konstitucion, dum asocioj havas statutojn.",
		""
	],
	"£:BASE-statuto&\"<konstitucioj?n?>\"": [
		"£:BASE-statuto&\"<konstitucioj?n?>\"",
		"Falsa amiko: konstitucio → konsist(ig)o, kompleksio, statutoj",
		"En Esperanto, <i>‘konstitucio’</i> havas du signifojn, (a) la baza leĝaro de ekz. lando, kaj – iom arkaike - (b) ‘kompleksio’, korpa ecaro de individuo (ekz. <i>fortika konstitucio</i>). Ne uzu la vorton kun la senco de ‘konsisto’ aŭ (laŭ la franca) ‘konsistigo’. Notu ankaŭ, ke landoj havas konstitucion, dum asocioj havas statutojn.",
		""
	],
	"£:BASE-fidi&\"<kont.*>\"": [
		"£:BASE-fidi&\"<kont.*>\"",
		"Falsa amiko: konti → fidi/taksi/nombri/kalkuli",
		"N<i>e</i> eblas traduki la anglan vorton <i>‘count’</i> per <i>‘konti’.</i> La esperanta vorto estas verbigo de <i>‘konto’</i> (angle: <i>account</i>) kaj temas pri mono k.s.<br>\n<br>\n<i>La asocio</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (nombras) 109 membrojn.</i><br>\n<br>\n<i>Ni</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (fidas) je nia samideana frataro.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (taksas), ke la laboro daŭros 3 monatojn.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>kontis</i></span><i> (nombris/kalkulis) la perlojn en la ĉeno.</i>",
		""
	],
	"£:BASE-taksi&\"<kont.*>#": [
		"£:BASE-taksi&\"<kont.*>#",
		"Falsa amiko: konti → fidi/taksi/nombri/kalkuli",
		"N<i>e</i> eblas traduki la anglan vorton <i>‘count’</i> per <i>‘konti’.</i> La esperanta vorto estas verbigo de <i>‘konto’</i> (angle: <i>account</i>) kaj temas pri mono k.s.<br>\n<br>\n<i>La asocio</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (nombras) 109 membrojn.</i><br>\n<br>\n<i>Ni</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (fidas) je nia samideana frataro.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (taksas), ke la laboro daŭros 3 monatojn.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>kontis</i></span><i> (nombris/kalkulis) la perlojn en la ĉeno.</i>",
		""
	],
	"£:BASE-nombri&\"<kont.*>\"": [
		"£:BASE-nombri&\"<kont.*>\"",
		"Falsa amiko: konti → fidi/taksi/nombri/kalkuli",
		"N<i>e</i> eblas traduki la anglan vorton <i>‘count’</i> per <i>‘konti’.</i> La esperanta vorto estas verbigo de <i>‘konto’</i> (angle: <i>account</i>) kaj temas pri mono k.s.<br>\n<br>\n<i>La asocio</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (nombras) 109 membrojn.</i><br>\n<br>\n<i>Ni</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (fidas) je nia samideana frataro.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (taksas), ke la laboro daŭros 3 monatojn.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>kontis</i></span><i> (nombris/kalkulis) la perlojn en la ĉeno.</i>",
		""
	],
	"£:BASE-kalkuli&\"<kont.*>\"": [
		"£:BASE-kalkuli&\"<kont.*>\"",
		"Falsa amiko: konti → fidi/taksi/nombri/kalkuli",
		"N<i>e</i> eblas traduki la anglan vorton <i>‘count’</i> per <i>‘konti’.</i> La esperanta vorto estas verbigo de <i>‘konto’</i> (angle: <i>account</i>) kaj temas pri mono k.s.<br>\n<br>\n<i>La asocio</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (nombras) 109 membrojn.</i><br>\n<br>\n<i>Ni</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (fidas) je nia samideana frataro.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>kontas</i></span><i> (taksas), ke la laboro daŭros 3 monatojn.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>kontis</i></span><i> (nombris/kalkulis) la perlojn en la ĉeno.</i>",
		""
	],
	"£adv&\"<kontribu[aio]s>\"": [
		"£adv&\"<kontribu[aio]s>\"",
		"Falsa amiko: kontribuis -i → kontribue -is",
		"En Esperanto, la verbo <i>‘kontribui</i> ne allasas infinitivan objekton, verŝajne temas pri (germana) falsa amiko. La plej eta korekto estas movi la -as/is/os-finaĵon de <i>‘kontribu[aio]s’</i> al la dependa infinitivo, post <i>‘kontribue’:</i><br>\n<br>\n<i>La krizo</i><span style=\"color: #c9211e\"><i> kontribuis devigi</i></span><i> (kontribue devigis) la registaron altigi la impostojn.</i><br>\n<br>\nAlia ebleco estas substantivigi la infinitivon per <i>‘-ado’</i> (aŭ foje simple <i>‘-o’</i>)<i></i> kaj uzi la normalan <i>‘al’-</i>prepozicion post <i>‘kontribui’.</i> Samtempe necesas aldoni <i>‘de’</i> post <i>‘-(ad)o’</i> kaj forigi la akuzativon en la sekvanta substantivo:<br>\n<br>\n<i>La krizo kontribuis</i> <span style=\"color: #008000\"><i>al devig(ad)o de la registaro</i></span><i> altigi la impostojn.</i>",
		""
	],
	"£:BASE-ekzemplero&\"<kopioj?n?>\"": [
		"£:BASE-ekzemplero&\"<kopioj?n?>\"",
		"Falsa amiko: kopio → ekzemplero",
		"En Esperanto, <i>‘kopio’</i> signifas ‘nova, sama versio de originalo’. Ne uzu la vorton kun la senco de ‘ekzemplero’.",
		"La eldonejo presis tri mil <span style=\"color: #ff0000\">kopiojn</span> (ekzemplerojn) de la libro."
	],
	"£:BASE-gxusta": [
		"£:BASE-gxusta",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-gxuste": [
		"£:BASE-gxuste",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-malgxusta": [
		"£:BASE-malgxusta",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-malgxuste": [
		"£:BASE-malgxuste",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-gxusteco": [
		"£:BASE-gxusteco",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-eraro&\"<malkorektajxoj?n?>\"": [
		"£:BASE-eraro&\"<malkorektajxoj?n?>\"",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-laŭreguleco&\"<korektecoj?n?>\"": [
		"£:BASE-laŭreguleco&\"<korektecoj?n?>\"",
		"Falsa amiko: korekta → ĝusta",
		"En Esperanto, <i>‘korekti’</i> estas transitiva verbo, do se oni uzas ĝin kiel adjektivo, tiu ankaŭ fariĝas transitiva (angle: <i>correcting</i>): <i>korekta laboro</i> (la laboro korekti ion)<i>, korektaj ŝanĝetoj</i> (ŝanĝoj faritaj por korekti ion). Ne eblas uzi <i>‘korekta’</i> kun la senco de <i>‘ĝusta’</i> (= ‘senerara’, angle: <i>correct</i>). Simile <i>‘korekteco’</i> devas esti <i>‘ĝusteco’</i> (de fakto/aserto) aŭ (politika) <i>‘laŭreguleco/bonkonduteco’,</i> kaj anstataŭ <i>‘malkorektaĵo’</i> prefere simple uzu <i>‘eraro’.</i><br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Tiu frazo ne estas <span style=\"color: #ff0000\">korekta</span> (ĝusta)."
	],
	"£:BASE-kaporal": [
		"£:BASE-kaporal",
		"Falsa amiko: korporalo → kaporalo",
		"En Esperanto, <i>'korporalo'</i> estas kristana fakesprimo – mestuko por hostio. Por la oficiro, uzu <i>'kaporalo'.</i>",
		"La <span style=\"color: #c9211e\">korporalo</span> (kaporalo) vekis ilin frumatene."
	],
	"£:BASE-koruptigxema&\"<koruptaj?n?>\"": [
		"£:BASE-koruptigxema&\"<koruptaj?n?>\"",
		"Falsa amiko: korupta → koruptiĝema",
		"En Esperanto, la radiko <i>‘korupt/’</i> estas verba (angle: <i>to corrupt</i>). Logike, la adjektivo <i>‘korupta’</i> do signigas ‘koruptanta iun/ion’ (angle: <i>corrupting</i>). Tamen multegaj homoj uzas la adjektivon falsamike kun la senco ‘koruptebla’, ‘koruptigxema’ aŭ ‘koruptita’. Nek PIV nek ReVo listigas la adjektivon, sed PIV havas <i>‘korupto’</i> kun aga senco, indikanta ke ankaŭ la adjektivo estu aga. ReVo, aliflanke, egaligas <i>‘korupto’</i> al <i>‘korupteco’</i> kun la difino ‘stato de tio, kio koruptiĝis’, kio subtenas la falsamikan uzon de <i>‘korupta’</i> kiel <i>‘koruptita’.</i>",
		"<i>Ĉiu dua politikisto estas</i> <span style=\"color: #ff0000\"><i>korupta</i></span><i> (koruptita) kaj ĉiu pensas plenigi unue propran poŝon .</i><br>\n<br>\n<i>Diktatoreca kaj</i> <span style=\"color: #ff0000\"><i>korupta</i></span><i> (koruptiĝema), la Ĥartum-registaro prezentas sin kiel antaŭeniganton de landa evoluado .</i>"
	],
	"£:BASE-gruo&\"<krano?n?>\"": [
		"£:BASE-gruo&\"<krano?n?>\"",
		"Falsa amiko: krano → gruo",
		"En Esperanto, <i>‘krano’</i> estas tubofermilo (angle: <i>faucet, tap</i>). La levomaŝino nomiĝas <i>‘gruo’.</i> Notu, ke <i>‘gruo’</i> ankaŭ estas longgamba birdo (ambaŭ angle: <i>crane</i>).",
		"Oni uzi grandan <span style=\"color: #ff0000\">kranon</span> (gruon) por levi kaj meti la tegmentajn trabojn."
	],
	"£:BASE-.*sxmirajxo&\"<.*kremoj?n?>\"": [
		"£:BASE-.*sxmirajxo&\"<.*kremoj?n?>\"",
		"Falsa amiko: kremo → ŝmiraĵo/pasto",
		"La kerna signifo de <i>'kremo'</i> en Esperanto rilatas al laktoproduktoj <i>(acida kremo</i>) kaj manĝaĵoj ĝenerale (ekz. <i>kokoskremo, ŝaŭmkremo</i>). Kvankam eblas uzi la vorton ankaŭ por belecaj kaj medicinaj ŝmiraĵoj, ekzistas – por kelkaj produktoj - pli oftaj kumetaĵoj kun <i>'-ŝmirĵo'</i> aŭ <i>'-pasto',</i> ekz. <i>'ŝuŝmiraĵo', 'botsxmirajxo', 'lipsxmirajxo'</i> kaj <i>'dentopasto'.</i>",
		"Vi povas uzi la malhelbrunan <span style=\"color: #c9211e\">ŝukremom</span> (ŝuŝmiraĵon) ankaŭ por la nigraj ŝuoj."
	],
	"£:BASE-.*pasto&\"<.*kremoj?n?>\"": [
		"£:BASE-.*pasto&\"<.*kremoj?n?>\"",
		"Falsa amiko: kremo → ŝmiraĵo/pasto",
		"La kerna signifo de <i>'kremo'</i> en Esperanto rilatas al laktoproduktoj <i>(acida kremo</i>) kaj manĝaĵoj ĝenerale (ekz. <i>kokoskremo, ŝaŭmkremo</i>). Kvankam eblas uzi la vorton ankaŭ por belecaj kaj medicinaj ŝmiraĵoj, ekzistas – por kelkaj produktoj - pli oftaj kumetaĵoj kun <i>'-ŝmirĵo'</i> aŭ <i>'-pasto',</i> ekz. <i>'ŝuŝmiraĵo', 'botsxmirajxo', 'lipsxmirajxo'</i> kaj <i>'dentopasto'.</i>",
		"Vi povas uzi la malhelbrunan <span style=\"color: #c9211e\">ŝukremom</span> (ŝuŝmiraĵon) ankaŭ por la nigraj ŝuoj."
	],
	"£:BASE-krizema&\"<kritikaj?n?>\"": [
		"£:BASE-krizema&\"<kritikaj?n?>\"",
		"Falsa amiko: kritika → kriz(em)a",
		"En Esperanto, la vorto <i>‘kritika’</i> celas mallaŭdan pritakson. Prefere ne uzu la vorton kun la senco <i>‘kriza, krizema’.</i> Temas pri plurlingva falsa amiko. <i>‘Krizema’</i> estas la plej ĝenerala korektopropono, taŭga en la plej multaj kazoj, sed foje <i>‘kriza’, ‘danĝera’</i> au <i>‘ĉiondecida’</i> sonas pli bone. Elektu mem.",
		"Tiam alvenis la <span style=\"color: #ff0000\">kritika</span> (krizema) momento : Li malfermis la kontrolpanelon kaj rigardis al vico da butonoj ."
	],
	"£:BASE-esenca&\"<krucaj?n?>\"": [
		"£:BASE-esenca&\"<krucaj?n?>\"",
		"Falsa amiko: kruca → esenca",
		"En Esperanto, la vorto <i>‘kruca’</i> celas krucan formon. Ne uzu ĝin kun la senco de <i>‘esenca/decida’</i> (angle: <i>crucial</i>).",
		"Lingvo havas krucan (<span style=\"color: #ff0000\">esencan</span>) rolon en naciaj kulturoj."
	],
	"£:BASE-globo&\"<kugloj?n?>\"": [
		"£:BASE-globo&\"<kugloj?n?>\"",
		"Falsa amiko: kuglo → globo",
		"En Esperanto, <i>‘kuglo’</i> estas nur por pafi. Por rondaj aĵo ĝenerale, uzu <i>‘globo’.</i>",
		"La infano rulis vitran <span style=\"color: #ff0000\">kuglon</span> (globon) sur la planko."
	],
	"£:BASE-globoludo": [
		"£:BASE-globoludo",
		"Falsa amiko: kuglo → globo",
		"En Esperanto, <i>‘kuglo’</i> estas nur por pafi. Por rondaj aĵo ĝenerale, uzu <i>‘globo’.</i>",
		"La infano rulis vitran <span style=\"color: #ff0000\">kuglon</span> (globon) sur la planko."
	],
	"£:BASE-pinto&\"<kulminoj?n?>\"": [
		"£:BASE-pinto&\"<kulminoj?n?>\"",
		"Falsa amiko: kulmino → pinto",
		"Oni povas konsideri (franca) falsa amiko la uzon de <i>‘kulmino’</i> en la senco de <i>‘montopinto’</i> aŭ por geometrie plej alta punkto<i>.</i> Ĝenerale en Esperanto oni uzas la vorton <i>‘kulmino’</i> nur kun abstrakta signifo (do de procezo, evoluo, feliĉo, membronombro ktp.).",
		"Li atingis la <span style=\"color: #ff0000\">kulminon</span> (pinton) posttagmeze, post malfacila grimpado."
	],
	"£:BASE-pucxo&\"kupoj?n?>\"": [
		"£:BASE-pucxo&\"kupoj?n?>\"",
		"Falsa amiko: kupo → puĉo",
		"'Kupo' estas medicina aŭ biologia kloŝeto, dum <i>'puĉo'</i> estas ŝtatrenverso. Temas pri falsa amiko en pluraj lingvoj.",
		"Post sukcesa <span style=\"color: #ff0000\">kupo</span> (puĉo) la generalo regis la landeton dum jardeko."
	],
	"£:BASE-kuraci&\"<kur.*>\"": [
		"£:BASE-kuraci&\"<kur.*>\"",
		"Falsa amiko: kuri → kuraci",
		"Ne konfuzu <i>‘kuri’</i> (angle: <i>run</i>) kun <i>‘kuraci’</i> (angle: <i>cure</i>).",
		"La piloloj <span style=\"color: #ff0000\">kuris</span> (kuracis) min."
	],
	"£:BASE-scivolema&\"<kuriozaj?n?>\"": [
		"£:BASE-scivolema&\"<kuriozaj?n?>\"",
		"Falsa amiko: kurioza → scivolema",
		"En Esperanto, <i>‘kurioza’</i> signifas ‘stranga’ (angle: <i>odd</i>). Oni ne povas esti kurioza <i>pri io</i>. Ne uzu la vorton en la senco de <i>‘scivolema’</i> (angle: <i>curious</i>)<i>.</i>",
		"Mi estas <span style=\"color: #ff0000\">kurioza</span> (scivolema), ĉu li vere venos."
	],
	"£:BASE-evoluo&\"<kursoj?n?>\"": [
		"£:BASE-evoluo&\"<kursoj?n?>\"",
		"Falsa amiko: kurso → evoluo",
		"En Esperanto, <i>‘kurso’</i> estas aŭ vojdirekto aŭ instruperiodo. Ne uzu la vorton en pli ĝenerala senco por aliaj tempoperiodoj (ekz. milito aŭ malsano).",
		"La manko de kanonoj influis la kurson (evoluon) de la milito."
	],
	"£:BASE-kvaronjaro&\"<kvartaloj?n?>\"": [
		"£:BASE-kvaronjaro&\"<kvartaloj?n?>\"",
		"Falsa amiko: kvartalo → kvaronjaro",
		"En Esperanto, <i>‘kvartalo’</i> estas urboparto. La vorto ne povas signifi ‘kvaronjaro’.",
		"La profito de la teknofirmaoj multe kreskis dum la tria <span style=\"color: #ff0000\">kvartalo</span> (kvaronjaro) de 2023."
	],
	"£:BASE-fasko&\"<kvastoj?n?>\"": [
		"£:BASE-fasko&\"<kvastoj?n?>\"",
		"Falsa amiko: kvasto → fasko",
		"En Esperanto, <i>'kvasto'</i> estas ornama fasko el tranĉitaj fadenoj, sur vestaĵo, ĉapelo aŭ meblo. Prefere ne uzu la vorton por aliaj specoj de fasko.",
		"Dum tradicia somera saŭnado oni leĝere vipadas sin per bonodoraj betulaj <span style=\"color: #ff0000\">kvastoj</span> (faskoj)."
	],
	"£:BASE-citi&\"<kvot.*>\"": [
		"£:BASE-citi&\"<kvot.*>\"",
		"Falsa amiko: kvoti → citi",
		"En Esperanto, <i>'kvoti'</i> estas komerca, speciale borsa, fakesprimo kaj signifas 'fiksi kaj konigi prezojn aŭ kursojn'. Ne konfuzu tion kun <i>'citi'</i> (angle: <i>quote</i>).",
		"Li ŝatis uzi <span style=\"color: #ff0000\">kvotaĵojn</span> (citaĵojn) el famaj filmoj."
	],
	"£x-etype-lemma&\"<kvotajxoj?n?>\"": [
		"£x-etype-lemma&\"<kvotajxoj?n?>\"",
		"Falsa amiko: kvoti → citi",
		"En Esperanto, <i>'kvoti'</i> estas komerca, speciale borsa, fakesprimo kaj signifas 'fiksi kaj konigi prezojn aŭ kursojn'. Ne konfuzu tion kun <i>'citi'</i> (angle: <i>quote</i>).",
		"Li ŝatis uzi <span style=\"color: #ff0000\">kvotaĵojn</span> (citaĵojn) el famaj filmoj."
	],
	"£:BASE-granda&\"<largxaj?n?>\"": [
		"£:BASE-granda&\"<largxaj?n?>\"",
		"Falsa amiko: larĝa → granda",
		"En Esperanto, la adjektivo <i>‘larĝa’</i> celas horizontalan, flank-al-flankan dimension/amplekson. Imagu la mezurojn de kesto kiel longeco x larĝexo x alteco. Esta (angla) falsa amiko uzi la vorton kun la ĝenerala senco de <i>‘granda’.</i>",
		"<span style=\"color: #ff0000\">Larĝa</span> (granda) parto de la afiŝoj estas falsa.<br>\n<br>\nLi manĝis <span style=\"color: #ff0000\">larĝan</span> (grandan) porcion da glaciaĵo."
	],
	"£:BASE-grandeco&\"<largxecoj?n?>\"": [
		"£:BASE-grandeco&\"<largxecoj?n?>\"",
		"Falsa amiko: larĝa → granda",
		"En Esperanto, la adjektivo <i>‘larĝa’</i> celas horizontalan, flank-al-flankan dimension/amplekson. Imagu la mezurojn de kesto kiel longeco x larĝexo x alteco. Esta (angla) falsa amiko uzi la vorton kun la ĝenerala senco de <i>‘granda’.</i>",
		"<span style=\"color: #ff0000\">Larĝa</span> (granda) parto de la afiŝoj estas falsa.<br>\n<br>\nLi manĝis <span style=\"color: #ff0000\">larĝan</span> (grandan) porcion da glaciaĵo."
	],
	"£:BASE-lauxlegxigi&\"<legitim.*>\"": [
		"£:BASE-lauxlegxigi&\"<legitim.*>\"",
		"Falsa amiko: legitima → laŭleĝa, legitimi → rajtigi",
		"En Esperanto, la verbo <i>‘legitimi’</i> signifas ‘pruvi la identecon, rajtojn aŭ pretendojn de persono (per identigilo aŭ rajtigilo, germane)’, aŭ ‘konfirmi la aŭtentikecon de dokumento aŭ subskribo’<i>.</i> La adjektivo <i>‘legitima’</i> signifas ‘rajtiga’ kaj rilatas al la pruvilo, ne la persono (ekz. <i>legitimaj paperoj</i>). Ne eblas diri <span style=\"color: #ff0000\"><i>legitima posedanto</i></span><i>.</i><br>\n<br>\nEn diversaj lingvoj ekzistas similsona verbo kun la senco <i>‘laŭleĝigi’</i> (ekz. agon, registaron, substancon aŭ situacion) kaj similsona adjektivo kun la senco <i>‘laŭleĝa’</i> (ekz. ago aŭ registaro), ekz. angle <i>legitimize/legitimate,</i> germane: <i>legitimieren/legitim</i>. En Esperanto, iuj provas enkonduki la neologismon <i>‘leĝitima’</i> kaj <i>‘leĝitimigi’</i> por tiu senco (ReVo, ne PIV). Sed tute bone funkcias simple diri ekz. <i>laŭleĝa posedanto,</i> aŭ – montrante pruvilon – <i>legitimebla/legitimita posedanto.</i><br>\n<br>\nNotu, ke ĉe la kerna senco de <i>‘legitimi’</i> la celita persono jam havas (nedoneblan, nur pruvotan) identecon, naskiĝdaton aŭ posedorajton, kaj celita dokumento/subskribo estas aŭ aŭtentika aŭ falsa. Dume, celante agon, registaron aŭ substancon, oni ne pruvas jaman econ, sed nove asertas ĝin. Lingvohelpilo proponas, ke vi uzu <i>‘legitimi’</i> kie temas pri pruvo, kaj <i>‘laŭleĝigi’</i> en aliaj kazoj. Sed nur la adjektivo <i>‘legitima’</i> en aliaj sencoj ol ‘rajtiga’ estas certa eraro, pri la verbo <i>‘legitimi’</i>, pripensu la argumentojn kaj decidu mem!<br>\n<br>\nFoje, la participo <i>‘legitimita’</i> estas uzata kun la senco <i>‘rajtigita/rajthava’,</i> ekz. <i>legitimita haveno/vendejo.</i> Tiu uzo ne estas rekomendita – <i>‘legitimita’</i> asertas ke iu rajto estis pruvita per montro de dokumento, kio verŝajne ne estas la celita signifo. Simple uzu <i>‘rajtigita’</i> en tiu kazo.",
		"<i>La parlamento</i> <span style=\"color: #ff0000\"><i>legitimis</i></span><i> (laŭleĝigis) novan alfabeton surbaze de la latina.</i><br>\n<br>\n<i>Li estas la</i> <span style=\"color: #ff0000\"><i>legitima</i></span><i> (laŭleĝa) heredanto de la trono.</i>"
	],
	"£:BASE-lauxlegxa&\"<legitimaj?n?>\"": [
		"£:BASE-lauxlegxa&\"<legitimaj?n?>\"",
		"Falsa amiko: legitima → laŭleĝa, legitimi → rajtigi",
		"En Esperanto, la verbo <i>‘legitimi’</i> signifas ‘pruvi la identecon, rajtojn aŭ pretendojn de persono (per identigilo aŭ rajtigilo, germane)’, aŭ ‘konfirmi la aŭtentikecon de dokumento aŭ subskribo’<i>.</i> La adjektivo <i>‘legitima’</i> signifas ‘rajtiga’ kaj rilatas al la pruvilo, ne la persono (ekz. <i>legitimaj paperoj</i>). Ne eblas diri <span style=\"color: #ff0000\"><i>legitima posedanto</i></span><i>.</i><br>\n<br>\nEn diversaj lingvoj ekzistas similsona verbo kun la senco <i>‘laŭleĝigi’</i> (ekz. agon, registaron, substancon aŭ situacion) kaj similsona adjektivo kun la senco <i>‘laŭleĝa’</i> (ekz. ago aŭ registaro), ekz. angle <i>legitimize/legitimate,</i> germane: <i>legitimieren/legitim</i>. En Esperanto, iuj provas enkonduki la neologismon <i>‘leĝitima’</i> kaj <i>‘leĝitimigi’</i> por tiu senco (ReVo, ne PIV). Sed tute bone funkcias simple diri ekz. <i>laŭleĝa posedanto,</i> aŭ – montrante pruvilon – <i>legitimebla/legitimita posedanto.</i><br>\n<br>\nNotu, ke ĉe la kerna senco de <i>‘legitimi’</i> la celita persono jam havas (nedoneblan, nur pruvotan) identecon, naskiĝdaton aŭ posedorajton, kaj celita dokumento/subskribo estas aŭ aŭtentika aŭ falsa. Dume, celante agon, registaron aŭ substancon, oni ne pruvas jaman econ, sed nove asertas ĝin. Lingvohelpilo proponas, ke vi uzu <i>‘legitimi’</i> kie temas pri pruvo, kaj <i>‘laŭleĝigi’</i> en aliaj kazoj. Sed nur la adjektivo <i>‘legitima’</i> en aliaj sencoj ol ‘rajtiga’ estas certa eraro, pri la verbo <i>‘legitimi’</i>, pripensu la argumentojn kaj decidu mem!<br>\n<br>\nFoje, la participo <i>‘legitimita’</i> estas uzata kun la senco <i>‘rajtigita/rajthava’,</i> ekz. <i>legitimita haveno/vendejo.</i> Tiu uzo ne estas rekomendita – <i>‘legitimita’</i> asertas ke iu rajto estis pruvita per montro de dokumento, kio verŝajne ne estas la celita signifo. Simple uzu <i>‘rajtigita’</i> en tiu kazo.",
		"<i>La parlamento</i> <span style=\"color: #ff0000\"><i>legitimis</i></span><i> (laŭleĝigis) novan alfabeton surbaze de la latina.</i><br>\n<br>\n<i>Li estas la</i> <span style=\"color: #ff0000\"><i>legitima</i></span><i> (laŭleĝa) heredanto de la trono.</i>"
	],
	"£:BASE-rajtigi&\"<legitim.*>\"": [
		"£:BASE-rajtigi&\"<legitim.*>\"",
		"Falsa amiko: legitima → laŭleĝa, legitimi → rajtigi",
		"En Esperanto, la verbo <i>‘legitimi’</i> signifas ‘pruvi la identecon, rajtojn aŭ pretendojn de persono (per identigilo aŭ rajtigilo, germane)’, aŭ ‘konfirmi la aŭtentikecon de dokumento aŭ subskribo’<i>.</i> La adjektivo <i>‘legitima’</i> signifas ‘rajtiga’ kaj rilatas al la pruvilo, ne la persono (ekz. <i>legitimaj paperoj</i>). Ne eblas diri <span style=\"color: #ff0000\"><i>legitima posedanto</i></span><i>.</i><br>\n<br>\nEn diversaj lingvoj ekzistas similsona verbo kun la senco <i>‘laŭleĝigi’</i> (ekz. agon, registaron, substancon aŭ situacion) kaj similsona adjektivo kun la senco <i>‘laŭleĝa’</i> (ekz. ago aŭ registaro), ekz. angle <i>legitimize/legitimate,</i> germane: <i>legitimieren/legitim</i>. En Esperanto, iuj provas enkonduki la neologismon <i>‘leĝitima’</i> kaj <i>‘leĝitimigi’</i> por tiu senco (ReVo, ne PIV). Sed tute bone funkcias simple diri ekz. <i>laŭleĝa posedanto,</i> aŭ – montrante pruvilon – <i>legitimebla/legitimita posedanto.</i><br>\n<br>\nNotu, ke ĉe la kerna senco de <i>‘legitimi’</i> la celita persono jam havas (nedoneblan, nur pruvotan) identecon, naskiĝdaton aŭ posedorajton, kaj celita dokumento/subskribo estas aŭ aŭtentika aŭ falsa. Dume, celante agon, registaron aŭ substancon, oni ne pruvas jaman econ, sed nove asertas ĝin. Lingvohelpilo proponas, ke vi uzu <i>‘legitimi’</i> kie temas pri pruvo, kaj <i>‘laŭleĝigi’</i> en aliaj kazoj. Sed nur la adjektivo <i>‘legitima’</i> en aliaj sencoj ol ‘rajtiga’ estas certa eraro, pri la verbo <i>‘legitimi’</i>, pripensu la argumentojn kaj decidu mem!<br>\n<br>\nFoje, la participo <i>‘legitimita’</i> estas uzata kun la senco <i>‘rajtigita/rajthava’,</i> ekz. <i>legitimita haveno/vendejo.</i> Tiu uzo ne estas rekomendita – <i>‘legitimita’</i> asertas ke iu rajto estis pruvita per montro de dokumento, kio verŝajne ne estas la celita signifo. Simple uzu <i>‘rajtigita’</i> en tiu kazo.",
		"<i>La parlamento</i> <span style=\"color: #ff0000\"><i>legitimis</i></span><i> (laŭleĝigis) novan alfabeton surbaze de la latina.</i><br>\n<br>\n<i>Li estas la</i> <span style=\"color: #ff0000\"><i>legitima</i></span><i> (laŭleĝa) heredanto de la trono.</i>"
	],
	"£:BASE-lektori": [
		"£:BASE-lektori",
		"Falsa amiko: lektori → provlegi",
		"En Esperanto, <i>‘lektor-’</i> estas substantiva radiko, kaj <i>‘lektori’</i> pli-malpli estas sinonimo de <i>‘prelegi’.</i> Prefere ne uzu la vorton kun la senco de <i>‘provlegi’</i> aŭ <i>‘revizii’,</i>",
		"Ĉu vi povus <span style=\"color: #ff0000\">lektori</span> (provlegi) la tekston?"
	],
	"£x-etype-neo&\"<lektoradoj?n?>\"": [
		"£x-etype-neo&\"<lektoradoj?n?>\"",
		"Falsa amiko: lektori → provlegi",
		"En Esperanto, <i>‘lektor-’</i> estas substantiva radiko, kaj <i>‘lektori’</i> pli-malpli estas sinonimo de <i>‘prelegi’.</i> Prefere ne uzu la vorton kun la senco de <i>‘provlegi’</i> aŭ <i>‘revizii’,</i>",
		"Ĉu vi povus <span style=\"color: #ff0000\">lektori</span> (provlegi) la tekston?"
	],
	"£:BASE-lenso&\"<lentoj?n?>\"": [
		"£:BASE-lenso&\"<lentoj?n?>\"",
		"Falsa amiko: lento → lenso",
		"Ne konfuzu <i>‘lento’</i> kun <i>‘lenso’</i>. La unua estas manĝebla semo, la alia optika instrumento.",
		"Necesas purigi la <span style=\"color: #ff0000\">lenton</span> (lenson) de via telefono."
	],
	"£:BASE-ligilo&\"<linkoj?n?>\"": [
		"£:BASE-ligilo&\"<linkoj?n?>\"",
		"Falsa amiko: linko → ligilo",
		"En Esperanto, <i>‘linko’</i> estas rabobesto, ne ligilo al retejo aŭ hejmpaĝo.",
		"Sekvu la <span style=\"color: #ff0000\">linkon</span> (ligilon) al mia hejmpaĝo por trovi pli da fotoj."
	],
	"£:BASE-luzerno": [
		"£:BASE-luzerno",
		"Falsa amiko: lucerno → luzerno",
		"'Lucerno' estas pendlampo, dum <i>'luzerno'</i> estas specio de medikago – planto multe uzata kiel proteinfonto por bestoj.",
		"La kultivo de <span style=\"color: #ff0000\">lucerno</span> (luzerno) plibonigas la kvaliton de la grundo per ligado de nitrogeno."
	],
	"£:BASE-sxajnigi&\"<lud.*>\"": [
		"£:BASE-sxajnigi&\"<lud.*>\"",
		"Falsa amiko: ludi → ŝajnigi",
		"La verbon <i>‘ludi’</i> eblas uzi kaj netransitive kaj transitive. Tiel oni povas ludi ludon, rolon aŭ teatraĵon. Sed ecojn oni ne <i>‘ludas’,</i> sed <i>‘ŝajnigas’</i> aŭ <i>‘afektas’.</i>",
		"Dum la tuta vespero ŝi <span style=\"color: #c9211e\">ludis</span> (ŝajnigis) naivecon kaj senzorgecon."
	],
	"£:BASE-lupeo": [
		"£:BASE-lupeo",
		"Falsa amiko: lupo → lupeo",
		"En Esperanto, <i>'lupo'</i> estas nur besto, dum pligrandiga lenso nomiĝas <i>'lupeo'.</i>",
		"La knabo rigardis la skarabon tra <span style=\"color: #ff0000\">lupo</span> (lupeo)."
	],
	"£:BASE-lupo": [
		"£:BASE-lupo",
		"Falsa amiko: lupo → lupeo",
		"En Esperanto, <i>'lupo'</i> estas nur besto, dum pligrandiga lenso nomiĝas <i>'lupeo'.</i>",
		"La knabo rigardis la skarabon tra <span style=\"color: #ff0000\">lupo</span> (lupeo)."
	],
	"£:BASE-grava&\"<majxoraj?n?>\"": [
		"£:BASE-grava&\"<majxoraj?n?>\"",
		"Falsa amiko: maĵora/minora → ĉefa/malĉefa",
		"Temas pri (angla) falsa amiko, se oni uzas <i>'maĵora'</i> kaj <i>'minora'</i> en la senco de <i>'grava'</i> (angle: <i>major</i>) kaj <i>'malĉefa'</i> (angle: <i>minor</i>).<br>\n<br>\nNotu ankaŭ, ke la vera signifo de <i>'maĵora/minora'</i> en Esperanto estas muzika, temante pri tonaloj kaj akordoj. Ne uzu <i>'dura'</i> kaj <i>'mola'</i> por tio. Ĉi-lastaj estas poeziaj sinonimoj de <i>'malmola'</i> kaj <i>'mola'.</i>",
		"La kolekto reprezentas plurajn <span style=\"color: #ff0000\">minorajn</span> (malĉefajn) poetojn.<br>\n<br>\nTemas pri <span style=\"color: #ff0000\">maĵora</span> (grava) konflikto."
	],
	"£:BASE-malcxefa&\"<minoraj?n?>\"": [
		"£:BASE-malcxefa&\"<minoraj?n?>\"",
		"Falsa amiko: maĵora/minora → ĉefa/malĉefa",
		"Temas pri (angla) falsa amiko, se oni uzas <i>'maĵora'</i> kaj <i>'minora'</i> en la senco de <i>'grava'</i> (angle: <i>major</i>) kaj <i>'malĉefa'</i> (angle: <i>minor</i>).<br>\n<br>\nNotu ankaŭ, ke la vera signifo de <i>'maĵora/minora'</i> en Esperanto estas muzika, temante pri tonaloj kaj akordoj. Ne uzu <i>'dura'</i> kaj <i>'mola'</i> por tio. Ĉi-lastaj estas poeziaj sinonimoj de <i>'malmola'</i> kaj <i>'mola'.</i>",
		"La kolekto reprezentas plurajn <span style=\"color: #ff0000\">minorajn</span> (malĉefajn) poetojn.<br>\n<br>\nTemas pri <span style=\"color: #ff0000\">maĵora</span> (grava) konflikto."
	],
	"£:BASE-majxora&\"<duraj?n?>\"": [
		"£:BASE-majxora&\"<duraj?n?>\"",
		"Falsa amiko: maĵora/minora → ĉefa/malĉefa",
		"Temas pri (angla) falsa amiko, se oni uzas <i>'maĵora'</i> kaj <i>'minora'</i> en la senco de <i>'grava'</i> (angle: <i>major</i>) kaj <i>'malĉefa'</i> (angle: <i>minor</i>).<br>\n<br>\nNotu ankaŭ, ke la vera signifo de <i>'maĵora/minora'</i> en Esperanto estas muzika, temante pri tonaloj kaj akordoj. Ne uzu <i>'dura'</i> kaj <i>'mola'</i> por tio. Ĉi-lastaj estas poeziaj sinonimoj de <i>'malmola'</i> kaj <i>'mola'.</i>",
		"La kolekto reprezentas plurajn <span style=\"color: #ff0000\">minorajn</span> (malĉefajn) poetojn.<br>\n<br>\nTemas pri <span style=\"color: #ff0000\">maĵora</span> (grava) konflikto."
	],
	"£:BASE-minora&\"<molaj?n?>\"": [
		"£:BASE-minora&\"<molaj?n?>\"",
		"Falsa amiko: maĵora/minora → ĉefa/malĉefa",
		"Temas pri (angla) falsa amiko, se oni uzas <i>'maĵora'</i> kaj <i>'minora'</i> en la senco de <i>'grava'</i> (angle: <i>major</i>) kaj <i>'malĉefa'</i> (angle: <i>minor</i>).<br>\n<br>\nNotu ankaŭ, ke la vera signifo de <i>'maĵora/minora'</i> en Esperanto estas muzika, temante pri tonaloj kaj akordoj. Ne uzu <i>'dura'</i> kaj <i>'mola'</i> por tio. Ĉi-lastaj estas poeziaj sinonimoj de <i>'malmola'</i> kaj <i>'mola'.</i>",
		"La kolekto reprezentas plurajn <span style=\"color: #ff0000\">minorajn</span> (malĉefajn) poetojn.<br>\n<br>\nTemas pri <span style=\"color: #ff0000\">maĵora</span> (grava) konflikto."
	],
	"£:BASE-grandega&\"<masivaj?n?>\"": [
		"£:BASE-grandega&\"<masivaj?n?>\"",
		"Falsa amiko: masiva → grandega",
		"En Esperanto, <i>‘masiva’</i> nur rilatas al denseco, ne eblas uzi la vorton por esprimi intensecon aŭ grandecon ĝenerale.",
		"<i>La rebeloj ricevis</i> <span style=\"color: #ff0000\"><i>masivan</i></span><i> (grandegan) subtenon de Usono.</i><br>\n<br>\n<i>Necesas</i> <span style=\"color: #ff0000\"><i>masivaj</i></span><i> (grandegaj) investoj.</i>"
	],
	"£:BASE-reto&\"<medioj?n?>\"": [
		"£:BASE-reto&\"<medioj?n?>\"",
		"Falsa amiko: medio → (amas)komunikilo, (socia) reto",
		"En Esperanto, <i>‘medio’</i> signifas (nur) ‘ĉirkaŭaĵo’ aŭ ‘cirkonstancoj’. Ĝi ne havas la signifon de komunika(j) kanalo(j) (angle: <i>media</i>). Oni do parolu pri <i>‘amaskomunikiloj’</i> (gazetaro, televido ktp.) kaj <i>‘sociaj retoj’.</i>",
		"<i>La internaciaj</i> <span style=\"color: #ff0000\"><i>medioj</i></span><i> (amaskomunikiloj) diskonigis la skandalon.</i><br>\n<br>\n<i>Infanoj facile dependiĝas de sociaj</i> <span style=\"color: #ff0000\"><i>medioj</i></span><i> (retoj).</i>"
	],
	"£:BASE-amaskomunikilo&\"<medioj?n?>\"": [
		"£:BASE-amaskomunikilo&\"<medioj?n?>\"",
		"Falsa amiko: medio → (amas)komunikilo, (socia) reto",
		"En Esperanto, <i>‘medio’</i> signifas (nur) ‘ĉirkaŭaĵo’ aŭ ‘cirkonstancoj’. Ĝi ne havas la signifon de komunika(j) kanalo(j) (angle: <i>media</i>). Oni do parolu pri <i>‘amaskomunikiloj’</i> (gazetaro, televido ktp.) kaj <i>‘sociaj retoj’.</i>",
		"<i>La internaciaj</i> <span style=\"color: #ff0000\"><i>medioj</i></span><i> (amaskomunikiloj) diskonigis la skandalon.</i><br>\n<br>\n<i>Infanoj facile dependiĝas de sociaj</i> <span style=\"color: #ff0000\"><i>medioj</i></span><i> (retoj).</i>"
	],
	"£:BASE-propra&\"<memaj?n?>\"": [
		"£:BASE-propra&\"<memaj?n?>\"",
		"Falsa amiko: mema → propra, sama",
		"En la Esperanto-literaturo, <i>‘mema’</i> estas relative malofta vorto, kaj en la klasika literaturo ĝi tute ne aperas. Ĝia logika signifo estas ‘individue-originala’, pli videbla en la substantivo <i>‘memo’.</i> Prefere ne uzu la vorton kun la sencoj <i>‘sama’</i> aŭ <i>‘propra’.</i> La unua estas certa falsa amiko (hispane: <i>mismo</i>), kaj la dua kreas nenecesan ambiguecon. Lingvohelpilo rekomendas nur uzi <i>‘mema’</i> kie temas pri <i>‘memo’.</i><br>\n<br>\n<i>La enhavo de lia eseo ne estas sufiĉe mema.</i><br>\n<br>\n<i>REALE estas iniciato mema kaj senpolitika.</i>",
		"La <span style=\"color: #ff0000\">meman</span> (saman) vesperon li reveturis al Vieno.<br>\n<br>\nLi uzis sian <span style=\"color: #ff0000\">meman</span> (propran) projekciilon por la prelego."
	],
	"£:BASE-sama&\"<memaj?n?>\"": [
		"£:BASE-sama&\"<memaj?n?>\"",
		"Falsa amiko: mema → propra, sama",
		"En la Esperanto-literaturo, <i>‘mema’</i> estas relative malofta vorto, kaj en la klasika literaturo ĝi tute ne aperas. Ĝia logika signifo estas ‘individue-originala’, pli videbla en la substantivo <i>‘memo’.</i> Prefere ne uzu la vorton kun la sencoj <i>‘sama’</i> aŭ <i>‘propra’.</i> La unua estas certa falsa amiko (hispane: <i>mismo</i>), kaj la dua kreas nenecesan ambiguecon. Lingvohelpilo rekomendas nur uzi <i>‘mema’</i> kie temas pri <i>‘memo’.</i><br>\n<br>\n<i>La enhavo de lia eseo ne estas sufiĉe mema.</i><br>\n<br>\n<i>REALE estas iniciato mema kaj senpolitika.</i>",
		"La <span style=\"color: #ff0000\">meman</span> (saman) vesperon li reveturis al Vieno.<br>\n<br>\nLi uzis sian <span style=\"color: #ff0000\">meman</span> (propran) projekciilon por la prelego."
	],
	"£:BASE-.*bazaro&\"<.*merkatoj?n?>\"": [
		"£:BASE-.*bazaro&\"<.*merkatoj?n?>\"",
		"Falsa amiko: merkato → bazaro",
		"En Esperanto, <i>'merkato'</i> estas nur borsa, financa, komerca, abstrakta koncepto. Por la konkreta loko en urbo aŭ vilaĝo, kie vendiĝas aĵoj en certaj tagoj, uzu la vorton <i>'bazaro'.</i>",
		"La kamparanoj de la ĉirkaŭaĵo venis ĉiusemajne al la ĵaŭda <span style=\"color: #ff0000\">merkato</span> (bazaro) en la urbeto por vendi siajn varojn."
	],
	"£:BASE-metodaro": [
		"£:BASE-metodaro",
		"Falsa amiko: metodologio → metodaro",
		"La vortoj 'metodologio’ kaj <i>‘metodiko’</i> celas la sciencon, la studadon kaj esploron de (sciencaj) metodoj. Ne konfuzu tion kun <i>‘metodoj’</i> kaj <i>‘metodaro’,</i> kie temas pri konkretaj metodoj uzataj aŭ konceptitaj por iu celo.",
		"En la kurso oni uzos tute novan <span style=\"color: #ff0000\">metodologion</span> (metodaron)."
	],
	"£:BASE-metroo": [
		"£:BASE-metroo",
		"Falsa amiko: metro → metroo",
		"En Esperanto, <i>'metro'</i> estas nur mezurunuo, dum la subtera trajnosistemo nomiĝas <i>'metroo'.</i>",
		"La <span style=\"color: #ff0000\">metro</span> (metroo) de Londono estas mondfama."
	],
	"£:BASE-mimado": [
		"£:BASE-mimado",
		"Falsa amiko: mimiko → mimado/imitado",
		"<i>'Mimiko'</i> estas la (profesia) arto de mimado, kiel koncepto aŭ fako. La agoj de la koncerna aktoro estas <i>'mimado'.</i> Por vizaĝesprimoj kaj vizaĝsignado, uzu <i>'mienado'</i> aŭ <i>'mienfarado'.</i><br>\n<br>\nNotu ankaŭ, ke estas falsa amiko, uzi la vorton <i>'mimiko'</i> por la natura fenomeno de aspekta imitado inter bestoj aŭ plantoj (angle: <i>mimicry</i>).",
		"Li kondukis nin, de tempo al tempo loginte nin per fingro kaj <span style=\"color: #ff0000\">mimiko</span> (mienado)."
	],
	"£:BASE-imitado&\"<mimikoj?n?>\"": [
		"£:BASE-imitado&\"<mimikoj?n?>\"",
		"Falsa amiko: mimiko → mimado/imitado",
		"<i>'Mimiko'</i> estas la (profesia) arto de mimado, kiel koncepto aŭ fako. La agoj de la koncerna aktoro estas <i>'mimado'.</i> Por vizaĝesprimoj kaj vizaĝsignado, uzu <i>'mienado'</i> aŭ <i>'mienfarado'.</i><br>\n<br>\nNotu ankaŭ, ke estas falsa amiko, uzi la vorton <i>'mimiko'</i> por la natura fenomeno de aspekta imitado inter bestoj aŭ plantoj (angle: <i>mimicry</i>).",
		"Li kondukis nin, de tempo al tempo loginte nin per fingro kaj <span style=\"color: #ff0000\">mimiko</span> (mienado)."
	],
	"£:BASE-mimikisto": [
		"£:BASE-mimikisto",
		"Falsa amiko: mimiko → mimado/imitado",
		"<i>'Mimiko'</i> estas la (profesia) arto de mimado, kiel koncepto aŭ fako. La agoj de la koncerna aktoro estas <i>'mimado'.</i> Por vizaĝesprimoj kaj vizaĝsignado, uzu <i>'mienado'</i> aŭ <i>'mienfarado'.</i><br>\n<br>\nNotu ankaŭ, ke estas falsa amiko, uzi la vorton <i>'mimiko'</i> por la natura fenomeno de aspekta imitado inter bestoj aŭ plantoj (angle: <i>mimicry</i>).",
		"Li kondukis nin, de tempo al tempo loginte nin per fingro kaj <span style=\"color: #ff0000\">mimiko</span> (mienado)."
	],
	"£:BASE:perpleksigi&\"<mistif.*>\"": [
		"£:BASE:perpleksigi&\"<mistif.*>\"",
		"Falsa amiko: mistifi/mistifiki → perpleksigi/konfuzi",
		"En Esperanto, <i>'mistifiki'</i> (aŭ <i>'mistifi'</i>) estas trompo de unu persono al alia, tro kredema persono, ofte en ŝerca kunteksto. Faktoj aŭ eventoj ne agas aŭ ŝercas, do necesas uzi vortojn kiel <i>'perpleksigi'</i> aŭ <i>'konfuzi'.</i><br>\n<br>\nNotu ankaŭ, ke – inverse – ne eblas <i>'mistifiki'</i> faktojn (ĉar ili ne estas personoj). Oni <i>'misreprezentas', 'falsigas'</i> aŭ <i>'malklarigas'</i> faktojn.",
		"Paĝo 8 iom <span style=\"color: #ff0000\">mistifikis</span> (konfuzis) min.<br>\n<br>\nLa registaro <span style=\"color: #ff0000\">mistifikis</span> (misreprezentis) la rezultojn de la enketo."
	],
	"£:BASE:konfuzi&\"<mistif.*>\"": [
		"£:BASE:konfuzi&\"<mistif.*>\"",
		"Falsa amiko: mistifi/mistifiki → perpleksigi/konfuzi",
		"En Esperanto, <i>'mistifiki'</i> (aŭ <i>'mistifi'</i>) estas trompo de unu persono al alia, tro kredema persono, ofte en ŝerca kunteksto. Faktoj aŭ eventoj ne agas aŭ ŝercas, do necesas uzi vortojn kiel <i>'perpleksigi'</i> aŭ <i>'konfuzi'.</i><br>\n<br>\nNotu ankaŭ, ke – inverse – ne eblas <i>'mistifiki'</i> faktojn (ĉar ili ne estas personoj). Oni <i>'misreprezentas', 'falsigas'</i> aŭ <i>'malklarigas'</i> faktojn.",
		"Paĝo 8 iom <span style=\"color: #ff0000\">mistifikis</span> (konfuzis) min.<br>\n<br>\nLa registaro <span style=\"color: #ff0000\">mistifikis</span> (misreprezentis) la rezultojn de la enketo."
	],
	"£:BASE:malklarigi&\"<mistif.*>\"": [
		"£:BASE:malklarigi&\"<mistif.*>\"",
		"Falsa amiko: mistifi/mistifiki → perpleksigi/konfuzi",
		"En Esperanto, <i>'mistifiki'</i> (aŭ <i>'mistifi'</i>) estas trompo de unu persono al alia, tro kredema persono, ofte en ŝerca kunteksto. Faktoj aŭ eventoj ne agas aŭ ŝercas, do necesas uzi vortojn kiel <i>'perpleksigi'</i> aŭ <i>'konfuzi'.</i><br>\n<br>\nNotu ankaŭ, ke – inverse – ne eblas <i>'mistifiki'</i> faktojn (ĉar ili ne estas personoj). Oni <i>'misreprezentas', 'falsigas'</i> aŭ <i>'malklarigas'</i> faktojn.",
		"Paĝo 8 iom <span style=\"color: #ff0000\">mistifikis</span> (konfuzis) min.<br>\n<br>\nLa registaro <span style=\"color: #ff0000\">mistifikis</span> (misreprezentis) la rezultojn de la enketo."
	],
	"£:BASE:mistera": [
		"£:BASE:mistera",
		"Falsa amiko: mistika → mistera",
		"<i>'Mistiko'</i> estas religia sinteno favoranta internajn sentojn, kaj ne racion. La simila vorto <i>'mistero'</i> simple celas ion neklarigeblan, nescieblan, sed sen religia aŭ sentosperta kunteksto.",
		"En la tuboj fluis iu <span style=\"color: #ff0000\">mistika</span> (mistera) substanco."
	],
	"£:BASE-gvidi&\"<moderig.*>\"": [
		"£:BASE-gvidi&\"<moderig.*>\"",
		"Falsa amiko: moderigi → gvidi",
		"En Esperanto, <i>‘moderigi’</i> signifas simple ‘igi pli modera’. Oni do moderigas agojn, sintenojn aŭ la intensecon de io. Okazaĵon, spektaklon aŭ diskuton oni ne moderigas (angle: <i>moderate</i>), sed <i>‘gvidas’, ‘estras’</i> aŭ <i>‘administras’.</i>",
		"Inter 2015 kaj 2017 ŝi <span style=\"color: #ff0000\">moderigis</span> (gvidis) la elsendon \"Voĉoj de Varsovio\"."
	],
	"£:BASE-sxtato&\"<nacioj?n?>\"": [
		"£:BASE-sxtato&\"<nacioj?n?>\"",
		"Falsa amiko: nacio → ŝtato",
		"En Esperanto, la kerna signifo de ‘<i>nacio</i>’ estas popolo, ne lando. Uzi la vorton en la senco de ‘ŝtato’ aŭ ‘lando’ estas angla falsa amiko, precipe en la pluralo.<br>\n<br>\n<i>La oficialaj reprezentantoj de 11</i> <span style=\"color: #ff0000\"><i>nacioj</i></span><i> (ŝtatoj) vocxdonis kontraux la rezolucio , dum tiuj de 58 sindetenis , kaj tiuj de aliaj 24 sxtatoj forestis kiam la vocxdono okazis .</i><br>\n<br>\nMalbonŝance ekzistas diversaj fiksaj plurvortaĵoj kun tiu senco, ekz. <i>‘Unuiĝintaj Nacioj</i>’. Tamen, ĉi tie temas pri relative klara kazo, kaj eble pripensu uzi alian vorton.<br>\n<br>\nLa derivaĵo ‘<i>naciano</i>’ preskaŭ ĉiam estas misuzata kun la senco ‘ŝtatano’:<br>\n<br>\nCentoj da kolombiaj <span style=\"color: #ff0000\">nacianoj</span> (ŝtatanoj)<br>\n<br>\nLa prezidfanto sendis mesaĝon al ĉiuj <span style=\"color: #ff0000\">nacianoj</span> (ŝtatanoj)<br>\n<br>\nNotu, ke la adjektivo ‘<i>nacia</i>’ havas similan problemon kun la senco ‘ŝtata/landa’, sed estas multe pli enradikiĝanta en Esperanto, ekz. en esprimoj kiel <i>‘nacia parko’,</i> <i>‘nacia teamo’, ‘nacia vespero’</i> aŭ la uzo de ‘<i>nacia (nivelo)</i>’ kontraste kun ‘<i>komunuma (nivelo)’</i> kaj <i>‘internacia (nivelo)’</i>, ekz. <i>‘nacia kongreso’</i>. Eĉ <i>‘nacia lingvo’</i> estas ofte uzata kun la senco ‘ŝtata lingvo<i>’ anstataŭ ‘lingvo de popolo’. Tiel oni diras ekzemple ‘la nacia lingvo de Francio’</i> (do: ŝtata) kaj ne <i>‘la nacia lingvo de la francoj</i>’ (do: popola). Lingvohelpilo rekomendas simple akcepti tiun falsamikan sencon (angle: <i>national</i>) kiel duan sencon de ‘<i>nacia</i>’.",
		""
	],
	"£:BASE-sxtata&\"<naciaj?n?>\"": [
		"£:BASE-sxtata&\"<naciaj?n?>\"",
		"Falsa amiko: nacio → ŝtato",
		"En Esperanto, la kerna signifo de ‘<i>nacio</i>’ estas popolo, ne lando. Uzi la vorton en la senco de ‘ŝtato’ aŭ ‘lando’ estas angla falsa amiko, precipe en la pluralo.<br>\n<br>\n<i>La oficialaj reprezentantoj de 11</i> <span style=\"color: #ff0000\"><i>nacioj</i></span><i> (ŝtatoj) vocxdonis kontraux la rezolucio , dum tiuj de 58 sindetenis , kaj tiuj de aliaj 24 sxtatoj forestis kiam la vocxdono okazis .</i><br>\n<br>\nMalbonŝance ekzistas diversaj fiksaj plurvortaĵoj kun tiu senco, ekz. <i>‘Unuiĝintaj Nacioj</i>’. Tamen, ĉi tie temas pri relative klara kazo, kaj eble pripensu uzi alian vorton.<br>\n<br>\nLa derivaĵo ‘<i>naciano</i>’ preskaŭ ĉiam estas misuzata kun la senco ‘ŝtatano’:<br>\n<br>\nCentoj da kolombiaj <span style=\"color: #ff0000\">nacianoj</span> (ŝtatanoj)<br>\n<br>\nLa prezidfanto sendis mesaĝon al ĉiuj <span style=\"color: #ff0000\">nacianoj</span> (ŝtatanoj)<br>\n<br>\nNotu, ke la adjektivo ‘<i>nacia</i>’ havas similan problemon kun la senco ‘ŝtata/landa’, sed estas multe pli enradikiĝanta en Esperanto, ekz. en esprimoj kiel <i>‘nacia parko’,</i> <i>‘nacia teamo’, ‘nacia vespero’</i> aŭ la uzo de ‘<i>nacia (nivelo)</i>’ kontraste kun ‘<i>komunuma (nivelo)’</i> kaj <i>‘internacia (nivelo)’</i>, ekz. <i>‘nacia kongreso’</i>. Eĉ <i>‘nacia lingvo’</i> estas ofte uzata kun la senco ‘ŝtata lingvo<i>’ anstataŭ ‘lingvo de popolo’. Tiel oni diras ekzemple ‘la nacia lingvo de Francio’</i> (do: ŝtata) kaj ne <i>‘la nacia lingvo de la francoj</i>’ (do: popola). Lingvohelpilo rekomendas simple akcepti tiun falsamikan sencon (angle: <i>national</i>) kiel duan sencon de ‘<i>nacia</i>’.",
		""
	],
	"£:BASE-sxtatano&\"<nacianoj?n?>\"": [
		"£:BASE-sxtatano&\"<nacianoj?n?>\"",
		"Falsa amiko: nacio → ŝtato",
		"En Esperanto, la kerna signifo de ‘<i>nacio</i>’ estas popolo, ne lando. Uzi la vorton en la senco de ‘ŝtato’ aŭ ‘lando’ estas angla falsa amiko, precipe en la pluralo.<br>\n<br>\n<i>La oficialaj reprezentantoj de 11</i> <span style=\"color: #ff0000\"><i>nacioj</i></span><i> (ŝtatoj) vocxdonis kontraux la rezolucio , dum tiuj de 58 sindetenis , kaj tiuj de aliaj 24 sxtatoj forestis kiam la vocxdono okazis .</i><br>\n<br>\nMalbonŝance ekzistas diversaj fiksaj plurvortaĵoj kun tiu senco, ekz. <i>‘Unuiĝintaj Nacioj</i>’. Tamen, ĉi tie temas pri relative klara kazo, kaj eble pripensu uzi alian vorton.<br>\n<br>\nLa derivaĵo ‘<i>naciano</i>’ preskaŭ ĉiam estas misuzata kun la senco ‘ŝtatano’:<br>\n<br>\nCentoj da kolombiaj <span style=\"color: #ff0000\">nacianoj</span> (ŝtatanoj)<br>\n<br>\nLa prezidfanto sendis mesaĝon al ĉiuj <span style=\"color: #ff0000\">nacianoj</span> (ŝtatanoj)<br>\n<br>\nNotu, ke la adjektivo ‘<i>nacia</i>’ havas similan problemon kun la senco ‘ŝtata/landa’, sed estas multe pli enradikiĝanta en Esperanto, ekz. en esprimoj kiel <i>‘nacia parko’,</i> <i>‘nacia teamo’, ‘nacia vespero’</i> aŭ la uzo de ‘<i>nacia (nivelo)</i>’ kontraste kun ‘<i>komunuma (nivelo)’</i> kaj <i>‘internacia (nivelo)’</i>, ekz. <i>‘nacia kongreso’</i>. Eĉ <i>‘nacia lingvo’</i> estas ofte uzata kun la senco ‘ŝtata lingvo<i>’ anstataŭ ‘lingvo de popolo’. Tiel oni diras ekzemple ‘la nacia lingvo de Francio’</i> (do: ŝtata) kaj ne <i>‘la nacia lingvo de la francoj</i>’ (do: popola). Lingvohelpilo rekomendas simple akcepti tiun falsamikan sencon (angle: <i>national</i>) kiel duan sencon de ‘<i>nacia</i>’.",
		""
	],
	"£:BASE-denaska&\"<naski.*>\"": [
		"£:BASE-denaska&\"<naski.*>\"",
		"Falsa amiko: naskiĝa → denaska",
		"<i>'Naskiĝa lingvo’</i> aŭ <i>‘naskita lingvo’</i> implicas naskiĝon de lingvo, kio verŝajne ne estas, kion vi celas. La normala esprimo estas <i>‘denaska lingvo’.</i>",
		"Okazis multajn <span style=\"color: #ff0000\">anojn</span> (jarojn) antauxe."
	],
	"£:BASE-trovi&\"<negoc.*>\"": [
		"£:BASE-trovi&\"<negoc.*>\"",
		"Falsa amiko: negoci → trovi/intertrakti",
		"En Esperanto, <i>‘negoci’</i> signifas ‘komerci, marĉandi’. La verbo ne estas transitiva kaj oni ne povas negoci ekz. vojon aŭ pacon. Povas temi pri angla falsa amiko <i>(negotiate).</i> Diru <i>‘trovi vojon’</i> aŭ <i>‘intertrakti’</i> pacon.",
		"Post <span style=\"color: #ff0000\">negocado</span> (intertraktado) de batalhalto, la urbo reviviĝis."
	],
	"£:BASE-intertrakti&\"<negoc.*>\"": [
		"£:BASE-intertrakti&\"<negoc.*>\"",
		"Falsa amiko: negoci → trovi/intertrakti",
		"En Esperanto, <i>‘negoci’</i> signifas ‘komerci, marĉandi’. La verbo ne estas transitiva kaj oni ne povas negoci ekz. vojon aŭ pacon. Povas temi pri angla falsa amiko <i>(negotiate).</i> Diru <i>‘trovi vojon’</i> aŭ <i>‘intertrakti’</i> pacon.",
		"Post <span style=\"color: #ff0000\">negocado</span> (intertraktado) de batalhalto, la urbo reviviĝis."
	],
	"£:BASE-multnombra": [
		"£:BASE-multnombra",
		"Falsa amiko: nombra → multnombra",
		"La vorto <i>‘nombra’</i> celas specon de signo, kategorio, esprimo aŭ sistemo. Ĝi ne havas la kvantan sencon de <i>‘multaj’</i> (angle: <i>numerous</i>). Por tiu signifo uzu <i>‘multnombraj’.</i>",
		"<span style=\"color: #ff0000\">Nombraj</span> (multnombraj) personoj estis vunditaj."
	],
	"£:BASE-mencii&\"<nom.*>\"": [
		"£:BASE-mencii&\"<nom.*>\"",
		"Falsa amiko: nomi → mencii",
		"En Esperanto, <i>‘nomi’</i> signifas ‘doni nomon al’. Estas (germana) falsa amiko uzi la vorton en la senco de <i>‘mencii’ (ke ...)</i> aŭ <i>‘priparoli’ (ion kiel ...).</i>",
		"Kiel kaŭzo estis <span style=\"color: #ff0000\">nomita</span> (menciita) plendo de partoprenanto."
	],
	"£:BASE-olimpiko": [
		"£:BASE-olimpiko",
		"Falsa amiko: olimpiado → olimpiko",
		"La granda internacia sportevento nomiĝas <i>'olimpiko'</i> (aŭ <i>'olimpikoj'</i>). La vorto <i>'olimpiado'</i> estas falsa amiko. En Esperanto, ĝi devus signifi la 4-jaran periodon inter du olimpikoj, sed la ĝusta uzo de la vorto estas multe malpli ofta ol la malĝusta.",
		"La unua moderna Olimpiado (<span style=\"color: #ff0000\">Olimpiko</span>) okazis en Ateno en la jaro 1896."
	],
	"£:BASE-opinii": [
		"£:BASE-opinii",
		"Falsa amiko: opini → opinii",
		"Male al la angla <i>‘opine’,</i> la esperanto vorto <i>‘opinii’</i> retenas la radikfinan ‘i’-leteron de <i>‘opinio’</i> (angle: <i>opinion</i>). Ne eblas diri <i>‘opini’</i>.",
		""
	],
	"£:BASE-sxanco&\"<oportunajxoj?n?>\"": [
		"£:BASE-sxanco&\"<oportunajxoj?n?>\"",
		"Falsa amiko: oportunaĵo → ŝanco",
		"Ĉi tie eble enŝteliĝis falsa angla amiko (<i>opportunity</i>). Konsideru uzi <i>‘sxanco’.</i> En Esperanto, <i>‘oportunaĵo’</i> estas io oportuna, faciligaĵo. Ne temas pri ebleco aŭ sxanco fari ion. Se temas pri fajna signifonuanco, kaj Lingvohelpilo ne certas, kion rekomendi. Decidu vi mem!",
		"Tio kreas <span style=\"color: #ff0000\">oportunaĵon</span> (ŝancon) por la disvastigo de Esperanto."
	],
	"£:BASE-regulofica": [
		"£:BASE-regulofica",
		"Falsa amiko: ordinara → regul(ofic)a/laŭstatuta",
		"En Esperanto, <i>'ordinara'</i> signifas 'normala'. En kunteksto de oficiala ofico aŭ aranĝo, oni uzas aliajn vortojn, ekz. <i>'regulofica profesoro', 'laŭstatuta jarkunveno'.</i>",
		"La <span style=\"color: #ff0000\">ordinara</span> (laŭstatuta) jarkunveno de la asocio okazos en majo."
	],
	"£:BASE-lauxstatuta": [
		"£:BASE-lauxstatuta",
		"Falsa amiko: ordinara → regul(ofic)a/laŭstatuta",
		"En Esperanto, <i>'ordinara'</i> signifas 'normala'. En kunteksto de oficiala ofico aŭ aranĝo, oni uzas aliajn vortojn, ekz. <i>'regulofica profesoro', 'laŭstatuta jarkunveno'.</i>",
		"La <span style=\"color: #ff0000\">ordinara</span> (laŭstatuta) jarkunveno de la asocio okazos en majo."
	],
	"£:BASE-regula&\"<ordinaraj?n?>\"": [
		"£:BASE-regula&\"<ordinaraj?n?>\"",
		"Falsa amiko: ordinara → regul(ofic)a/laŭstatuta",
		"En Esperanto, <i>'ordinara'</i> signifas 'normala'. En kunteksto de oficiala ofico aŭ aranĝo, oni uzas aliajn vortojn, ekz. <i>'regulofica profesoro', 'laŭstatuta jarkunveno'.</i>",
		"La <span style=\"color: #ff0000\">ordinara</span> (laŭstatuta) jarkunveno de la asocio okazos en majo."
	],
	"£:BASE-orgeno": [
		"£:BASE-orgeno",
		"Falsa amiko: organo → orgeno",
		"En Esperanto, <i>'organo'</i> estas aŭ anatomia aŭ societa. Por la muzikilo, uzu <i>'orgeno'.</i>",
		"Li koncertis per trimanuala <span style=\"color: #ff0000\">organo</span> (orgeno)."
	],
	"£:BASE-paletro": [
		"£:BASE-paletro",
		"Falsa amiko: paleto → paletro/paledo",
		"La vorto <i>'paleto'</i> devus signifi 'eta paleco', se entute ion. Kion vi celas, estas verŝajne aŭ <i>'paletro'</i> (de artisto, kun farboj) au <i>'paledo'</i> (transportplato el ligno).",
		"La pejzaĝo brilis kun bunta <span style=\"color: #ff0000\">paleto</span> (paletro) de aŭtunaj folioj.<br>\n<br>\nSur ĉiu <span style=\"color: #ff0000\">paleto</span> (paledo) povas esti ducento da libroj."
	],
	"£:BASE-paledo": [
		"£:BASE-paledo",
		"Falsa amiko: paleto → paletro/paledo",
		"La vorto <i>'paleto'</i> devus signifi 'eta paleco', se entute ion. Kion vi celas, estas verŝajne aŭ <i>'paletro'</i> (de artisto, kun farboj) au <i>'paledo'</i> (transportplato el ligno).",
		"La pejzaĝo brilis kun bunta <span style=\"color: #ff0000\">paleto</span> (paletro) de aŭtunaj folioj.<br>\n<br>\nSur ĉiu <span style=\"color: #ff0000\">paleto</span> (paledo) povas esti ducento da libroj."
	],
	"£:BASE-papriko&\"<kapsikoj?n?>\"": [
		"£:BASE-papriko&\"<kapsikoj?n?>\"",
		"Falsa amiko: papriko → kapsiko",
		"En Esperanto, <i>‘papriko’</i> estas spico, dum <i>‘kapsiko’</i> estas la frukto de kapsiko-arbusto. Papriko estas pulvoro el sekigitaj kapsiketoj, ofte akraj. Povas temi pri falsa amiko, ĉar en kelkaj lingvoj <i>‘Paprika’</i> (ekz. La germana) estas uzata por kaj la frukto kaj la spico.",
		"La <span style=\"color: #ff0000\">paprikojn</span> (kapsikojn) oni lavas, bakas kaj senŝeligas."
	],
	"£:BASE-konfirmi&\"<pas.*>\"": [
		"£:BASE-konfirmi&\"<pas.*>\"",
		"Falsa amiko: pas(ig)i → konfirm(iĝ)i",
		"En Esperanto, <i>‘pasi’</i> kaj <i>‘pasigi’</i> ne ekstas aplikebla al parlamentaj voĉdonoj pri leĝoj, amendoj ktp. Temas pri falsa amiko (angle: <i>pass</i>) Uzu <i>‘konfirmi’</i> kaj <i>‘konfirmiĝi’.</i>",
		"<i>La parlamento</i> <span style=\"color: #ff0000\"><i>pasigis</i></span><i> (konfirmis) la novan leĝon kun granda plimulto.</i><br>\n<br>\n<i>Nur triaprove la amendo</i> <span style=\"color: #ff0000\"><i>pasis</i></span><i> (konfirmiĝis).</i>"
	],
	"£:BASE-konfirmigxi&\"<pas.*>\"": [
		"£:BASE-konfirmigxi&\"<pas.*>\"",
		"Falsa amiko: pas(ig)i → konfirm(iĝ)i",
		"En Esperanto, <i>‘pasi’</i> kaj <i>‘pasigi’</i> ne ekstas aplikebla al parlamentaj voĉdonoj pri leĝoj, amendoj ktp. Temas pri falsa amiko (angle: <i>pass</i>) Uzu <i>‘konfirmi’</i> kaj <i>‘konfirmiĝi’.</i>",
		"<i>La parlamento</i> <span style=\"color: #ff0000\"><i>pasigis</i></span><i> (konfirmis) la novan leĝon kun granda plimulto.</i><br>\n<br>\n<i>Nur triaprove la amendo</i> <span style=\"color: #ff0000\"><i>pasis</i></span><i> (konfirmiĝis).</i>"
	],
	"£:BASE-pasiono": [
		"£:BASE-pasiono",
		"Falsa amiko: pasio → pasiono",
		"En Esperanto, <i>'pasio'</i> estas fervorega ŝato de io aŭ iu. Por la suferoj de Kristo, en religia kunteksto, uzu <i>'pasiono'.</i>",
		"La monaĥejo havas krucarvojon pri la <span style=\"color: #ff0000\">Pasio</span> (Pasiono) de Kristo."
	],
	"£:BASE-rajtigilo&\"<patentoj?n?>\"": [
		"£:BASE-rajtigilo&\"<patentoj?n?>\"",
		"Falsa amiko: patento → rajtigilo",
		"<i>'Patento’</i> temas pri la rajto eluzi (propran) inventon. Ne eblas uzi la vorton en la senco de ‘kondukrajtigilo’, ‘stirpermeso’ ktp. (por ekz. Ŝipo aŭ aviadilo).",
		"Li akiris ŝipestran <span style=\"color: #ff0000\">patenton</span> (rajtigilon)."
	],
	"£:BASE-ebligi&\"<permes.*>\"": [
		"£:BASE-ebligi&\"<permes.*>\"",
		"Falsa amiko: permesi → ebligi",
		"Ne temas pri vera eraro, sed striktasence nur homo aŭ eble leĝo povas <i>permesi.</i> Ilo, mono, okazaĵo aŭ cirkonstanco ne permesas, sed <i>ebligas</i> (agon, procezon aŭ simile). Konsideru fari ŝanĝon.",
		"Komputilo <span style=\"color: #ff0000\">permesas</span> (ebligas) al uzanto labori pli rapide."
	],
	"£:BASE-kajo&\"<peronoj?n?>\"": [
		"£:BASE-kajo&\"<peronoj?n?>\"",
		"Falsa amiko: perono → kajo",
		"En Esperanto, <i>'perono'</i> estas platajxo kun ŝtupareto antaŭ konstruaĵo. Prefere ne uzu la vorton kun la speciala senco de (stacidoma) <i>'kajo'.</i>",
		"La trajno foriras de <span style=\"color: #ff0000\">perono</span> (kajo) 15."
	],
	"£:BASE-dungitaro": [
		"£:BASE-dungitaro",
		"Falsa amiko: personalo → dungitaro",
		"En Esperanto, <i>'personalo'</i> ne signifas <i>'dungitaro',</i> sed – se entute uzata – 'persona pronomo'.",
		"Ĉiutage la <span style=\"color: #ff0000\">personalo</span> (dungitaro) ricevis senkostan tagmanĝon."
	],
	"£:BASE-pilgrimanto": [
		"£:BASE-pilgrimanto",
		"Falsa amiko: pilgrimo → pilgrimanto",
		"En Esperanto, <i>'pilgrimo'</i> estas pilgrimado, do la vojaĝo. Por la persono, uzu <i>'pilgrimanto'</i> aŭ <i>'pilgrimulo'.</i>",
		"Ĉiu <span style=\"color: #ff0000\">pilgrimo</span> (pilgrimanto) forportis kun si aromajn memoraĵojn."
	],
	"£:BASE-pico": [
		"£:BASE-pico",
		"Falsa amiko: pizo → pico",
		"En Esperanto, <i>'pizo'</i> estas legomo. Por la itala platbakaĵo, uzu <i>'pico'.</i>",
		"Mi mendis vegetaran <span style=\"color: #ff0000\">pizon</span> (picon)."
	],
	"£:BASE-gipso&\"<plastroj?n?>\"": [
		"£:BASE-gipso&\"<plastroj?n?>\"",
		"Falsa amiko: plastro → gipso",
		"Povas temi pri (angla) falsa amiko <i>(plaster).</i> En Esperanto 'Plastro’ estas glupansaĵo por kovri vundeton, la moldebla blanka materialo nomiĝas <i>‘gipso’.</i>",
		""
	],
	"£:BASE-plumbo": [
		"£:BASE-plumbo",
		"Falsa amiko: plombo → plumbo",
		"En Esperanto, plombo estas plenigaĵo por dentotruo aŭ ferma sigelo. Por la metalo, uzu <i>'plumbo'.</i>",
		"Oni povas uzi plombon (plumbon) por prootekti sin kontraŭ radiado."
	],
	"£:BASE-poluso": [
		"£:BASE-poluso",
		"Falsa amiko: polo → poluso",
		"En Esperanto, <i>'polo'</i> estas persono, enloĝanto de Polio. Ne konfuzu tion kun la fizika kaj geografia koncepto de <i>'poluso'.</i>",
		"Somere ne plu estas glacio ĉe la norda <span style=\"color: #ff0000\">polo</span> (poluso)."
	],
	"£:BASE-surhavi": [
		"£:BASE-surhavi",
		"Falsa amiko: porti → surhavi",
		"En Esperanto, ne necesas uzi <i>‘porti’</i> por vestaĵoj, kiujn oni havas sur la korpo (ne en la mano!), ĉar ekzistas la pli specifa <i>surhavi.</i> Sed ne temas pri vera eraro, nu propono.",
		"Ŝi <span style=\"color: #c9211e\">portis</span> (surhavis) longan kamelharan jakon."
	],
	"£:BASE-posxto&\"<poston?>\"": [
		"£:BASE-posxto&\"<poston?>\"",
		"Falsa amiko: posto → poŝto/posteno/afiŝo",
		"Oni sendas leterojn aŭ pakaĵojn per <i>'poŝto'. 'Posteno'</i> povas esti ofico aŭ loko taskita al soldato. <i>'Posto'</i> estas malofta vorto kun la sola ebla signifo de 'posttempo' aŭ 'malantaŭo'.<br>\n<br>\nNotu, ke lastatempe aldoniĝis plia falsamika uzo, celanta <i>'afiŝoj'</i> en sociaj retoj (angle: <i>post</i>)",
		"Mi sendos la dokumentojn per <span style=\"color: #ff0000\">posto</span> (poŝto).<br>\n<br>\nLi forlasis sian <span style=\"color: #ff0000\">poston</span> (postenon) sen permeso."
	],
	"£:BASE-posteno&\"<postoj?n?>\"": [
		"£:BASE-posteno&\"<postoj?n?>\"",
		"Falsa amiko: posto → poŝto/posteno/afiŝo",
		"Oni sendas leterojn aŭ pakaĵojn per <i>'poŝto'. 'Posteno'</i> povas esti ofico aŭ loko taskita al soldato. <i>'Posto'</i> estas malofta vorto kun la sola ebla signifo de 'posttempo' aŭ 'malantaŭo'.<br>\n<br>\nNotu, ke lastatempe aldoniĝis plia falsamika uzo, celanta <i>'afiŝoj'</i> en sociaj retoj (angle: <i>post</i>)",
		"Mi sendos la dokumentojn per <span style=\"color: #ff0000\">posto</span> (poŝto).<br>\n<br>\nLi forlasis sian <span style=\"color: #ff0000\">poston</span> (postenon) sen permeso."
	],
	"£:BASE-afisxo&\"<postoj?n?>\"": [
		"£:BASE-afisxo&\"<postoj?n?>\"",
		"Falsa amiko: posto → poŝto/posteno/afiŝo",
		"Oni sendas leterojn aŭ pakaĵojn per <i>'poŝto'. 'Posteno'</i> povas esti ofico aŭ loko taskita al soldato. <i>'Posto'</i> estas malofta vorto kun la sola ebla signifo de 'posttempo' aŭ 'malantaŭo'.<br>\n<br>\nNotu, ke lastatempe aldoniĝis plia falsamika uzo, celanta <i>'afiŝoj'</i> en sociaj retoj (angle: <i>post</i>)",
		"Mi sendos la dokumentojn per <span style=\"color: #ff0000\">posto</span> (poŝto).<br>\n<br>\nLi forlasis sian <span style=\"color: #ff0000\">poston</span> (postenon) sen permeso."
	],
	"£:BASE-ebla&\"<poten.*>\"": [
		"£:BASE-ebla&\"<poten.*>\"",
		"Falsa amiko: potenciala → ebla/latenta",
		"Striktasence, <i>‘potencialo’</i> kaj <i>‘potenciala’</i> estas fizika fakvorto kun la signifo de ‘energienhavo’, uzata pri elektra kampo aŭ ekz. la akvo en la digolago de elektrocentralo. Estas falsa amiko uzi <i>‘potencialo’</i> kun la signifo de <i>‘latenta kapablo’,</i> aŭ <i>‘potenciala’</i> kun la signifo de <i>‘ebla’.</i>",
		"La Esperanto-movado havas grandan <span style=\"color: #ff0000\">potencialon</span> (latenton).<br>\n<br>\nLia <span style=\"color: #ff0000\">potenciala</span> (ebla) posteulo donis intervjuon hieraŭ."
	],
	"£:BASE-latento&\"<poten.*>\"": [
		"£:BASE-latento&\"<poten.*>\"",
		"Falsa amiko: potenciala → ebla/latenta",
		"Striktasence, <i>‘potencialo’</i> kaj <i>‘potenciala’</i> estas fizika fakvorto kun la signifo de ‘energienhavo’, uzata pri elektra kampo aŭ ekz. la akvo en la digolago de elektrocentralo. Estas falsa amiko uzi <i>‘potencialo’</i> kun la signifo de <i>‘latenta kapablo’,</i> aŭ <i>‘potenciala’</i> kun la signifo de <i>‘ebla’.</i>",
		"La Esperanto-movado havas grandan <span style=\"color: #ff0000\">potencialon</span> (latenton).<br>\n<br>\nLia <span style=\"color: #ff0000\">potenciala</span> (ebla) posteulo donis intervjuon hieraŭ."
	],
	"£:BASE-infancxaro&\"<pramoj?n?>\"": [
		"£:BASE-infancxaro&\"<pramoj?n?>\"",
		"Falsa amiko: pramo → infanĉaro",
		"En Esperanto, <i>‘pramo’</i> estas speco de ŝipo, ne <i>‘infanĉaro’.</i> Temas pri (angla) falsa amiko.",
		""
	],
	"£:BASE-aparte&\"<precipe>\"": [
		"£:BASE-aparte&\"<precipe>\"",
		"Falsa amiko: precipe → aparte",
		"La adverbo <i>‘precipe’</i> signifas ‘ĉefe, antaŭ ĉio’ (germane: <i>insbesondere,</i> angle: <i>mainly</i>). Sed ne eblas uzi ĝin kun la senco <i>‘tre’</i> aŭ <i>‘aparte’.</i> Povas temi pri falsa amiko, ĉar kelkaj lingvoj posedas vorton, kiu kovras ambaŭ signifojn (germane: <i>besonders,</i> angle: <i>especially</i>).",
		"Kreskis la nombro de gravaj kaj <span style=\"color: #ff0000\">precipe</span> (aparte/tre) gravaj krimoj.<br>\n<br>\n<i>Li ricevis la</i> <span style=\"color: #ff0000\"><i>precipe</i></span><i> (aparte) prestiĝan polusan medalon.</i>"
	],
	"£:BASE-fari&\"<pren.*>\"": [
		"£:BASE-fari&\"<pren.*>\"",
		"Falsa amiko: preni → fari",
		"En Esperanto, oni ne <i>prenas</i> foton aŭ paŝon, sed <i>faras</i> foton aŭ paŝon.",
		""
	],
	"£:BASE-transpreni&\"<pren.*>\"": [
		"£:BASE-transpreni&\"<pren.*>\"",
		"Falsa amiko: preni → transpreni",
		"En Esperanto, oni ne <i>prenas</i> la komandon, sed <i>transprenas</i> ĝin. Simile, oni ne <i>prenas la kontrolon,</i> sed <i>transprenas la regadon.</i> Notu, ke <i>‘kontrolo’</i> ne uzeblas ĉi tie. Oni <i>kontrolas</i> aserton aŭ fakturon, sed oni <i>regas</i> homojn, urbon aŭ situacion.<i></i>",
		""
	],
	"£:BASE-kunporti&\"<pren.*>\"": [
		"£:BASE-kunporti&\"<pren.*>\"",
		"Falsa amiko: preni iun → kunporti iun",
		"En Esperanto, oni ne <i>prenas</i> iun ien, sed <i>kunportas lin.</i>",
		"Mi povas <span style=\"color: #ff0000\">preni</span> (kunporti) vin tien en mia aŭto, se vi volas."
	],
	"£:BASE-ekparoli&\"<pren.*>\"": [
		"£:BASE-ekparoli&\"<pren.*>\"",
		"Falsa amiko: preni la parolon/vorton → ekparoli",
		"En Esperanto, oni ne <i>prenas la parolon,</i> sed <i>ekparolas.</i>",
		""
	],
	"£:BASE-okazi&\"<pren.*>\"": [
		"£:BASE-okazi&\"<pren.*>\"",
		"Falsa amiko: preni lokon → okazi",
		"En Esperanto, festo aŭ inaŭguro ne <i>prenas lokon,</i> sed <i>okazas.</i>",
		""
	],
	"£:BASE-promeni&\"<pren.*>\"": [
		"£:BASE-promeni&\"<pren.*>\"",
		"Falsa amiko: preni promenon → promeni",
		"En Esperanto, oni ne <i>prenas</i> promenon (angle: <i>take a walk</i>), sed simple <i>promenas.</i>",
		""
	],
	"£:BASE-premi": [
		"£:BASE-premi",
		"Falsa amiko: presi → premi",
		"Oni <i>'presas'</i> librojn kaj gazetojn, sed <i>'premas'</i> butonojn, manojn kaj vinberojn. Povas temi pri angla falsa amiko.",
		"En kazo de danĝero, <span style=\"color: #ff0000\">presu</span> (premu) la ruĝan butonon!"
	],
	"£:BASE-kunpremi": [
		"£:BASE-kunpremi",
		"Falsa amiko: presi → premi",
		"Oni <i>'presas'</i> librojn kaj gazetojn, sed <i>'premas'</i> butonojn, manojn kaj vinberojn. Povas temi pri angla falsa amiko.",
		"En kazo de danĝero, <span style=\"color: #ff0000\">presu</span> (premu) la ruĝan butonon!"
	],
	"£:BASE-gazetaro&\"<presoj?n?>\"": [
		"£:BASE-gazetaro&\"<presoj?n?>\"",
		"Falsa amiko: preso → gazetaro",
		"'Presi’ signifas ‘reprodukti dokumentojn per maŝino’, do <i>‘preso’</i> estas produktado de dokumento/presaĵo (angle: <i>printing</i>). Ne konfuzu tion kun <i>‘gazetaro’</i> (angle: <i>press</i>).",
		""
	],
	"£:BASE-premio": [
		"£:BASE-premio",
		"Falsa amiko: prezo → premio",
		"La vorto <i>'prezo'</i> rilatas al la kosto de varo, dum <i>'premio'</i> (angle: <i>prize,</i> germane: <i>Preis</i>) estas laŭda donaco pro venko en konkurso.",
		"Li ricevis la duan <span style=\"color: #ff0000\">prezon</span> (premion) en la beletra konkurso."
	],
	"£:BASE-eldiro&\"<prononcoj?n?>\"": [
		"£:BASE-eldiro&\"<prononcoj?n?>\"",
		"Falsa amiko: prononco → eldiro, sin prononci → paroli",
		"En Esperanto, <i>‘prononco’</i> nur signifas ‘elparolo’ (de vorto, litero ktp.). Ĝi ne povas havi la sencon de ‘eldiro’ (de iu pri io).",
		"La oficialaj <span style=\"color: #ff0000\">prononcoj</span> (eldiroj) de la brita registaro ( ekz. pri la valuto, EU-membreco ktp.) estis majstre koreografitaj.<br>\n<br>\nLa ĉefministro surprize <span style=\"color: #ff0000\">sin prononcis</span> (parolis) kontraŭ albanofobio"
	],
	"£:BASE-paroli&\"<prononc.*>\"": [
		"£:BASE-paroli&\"<prononc.*>\"",
		"Falsa amiko: prononco → eldiro, sin prononci → paroli",
		"En Esperanto, <i>‘prononco’</i> nur signifas ‘elparolo’ (de vorto, litero ktp.). Ĝi ne povas havi la sencon de ‘eldiro’ (de iu pri io).",
		"La oficialaj <span style=\"color: #ff0000\">prononcoj</span> (eldiroj) de la brita registaro ( ekz. pri la valuto, EU-membreco ktp.) estis majstre koreografitaj.<br>\n<br>\nLa ĉefministro surprize <span style=\"color: #ff0000\">sin prononcis</span> (parolis) kontraŭ albanofobio"
	],
	"£:BASE-porparolanto": [
		"£:BASE-porparolanto",
		"Falsa amiko: proparolanto → porparolanto",
		"Laŭ ReVo, tio estas de-latina falsa amiko. Laŭ la esperantaj signifoj de la prepozicioj, la reprezentanto de registaro, firmao aŭ armeo parolas <i>por,</i> ne <i>pro</i> sia organizo (angle: <i>spokesman,</i> germane: <i>[Regierungs-] Sprecher</i>). Do logike devas esti <i>‘porparolanto’.</i> Nur se vi uzas la vorton en la senco ‘paroli favore al iu ago aŭ persono’ (angle: <i>advocate,</i> germane: <i>Fürsprecher</i>), eblas diri <i>‘proparolanto’.</i>",
		"La <span style=\"color: #ff0000\">proparolanto</span> (porparolanto) de la nova registaro anoncis ĝeneralan amnestion."
	],
	"£:BASE-propono": [
		"£:BASE-propono",
		"Falsa amiko: propozicio → propono",
		"En Esperanto, <i>'propozicio'</i> estas fakesprimo kun la signifo '(sub)frazo' (en gramatiko) aŭ 'aserto/teoremo' (en matematiko). Ne konfuzu tion kun <i>'propono'</i> (prezenti ideon). Povas temi pri angla falsa amiko <i>(proposition).</i>",
		"Ĉu vi havas aliajn <span style=\"color: #ff0000\">propoziciojn</span> (proponojn)?"
	],
	"£:BASE-deklari&\"<proviz.*>\"": [
		"£:BASE-deklari&\"<proviz.*>\"",
		"Falsa amiko: provizi → deklari",
		"Oni <i>provizas iun per io,</i> aŭ <i>provizas ion al iu</i> (angle: <i>supply</i>). Sed en Esperanto ne eblas uzi la vorton kun la signifo de <i>‘deklari’:</i><br>\n<br>\n<i>La leĝo/konstitucio</i> <span style=\"color: #ff0000\"><i>provizas</i></span><i> (deklaras), ke ...</i>",
		""
	],
	"£:BASE-provizo": [
		"£:BASE-provizo",
		"Falsa amiko: provizo ↔ provizio → kondiĉo",
		"'Provizo' estas la havigado de necesaĵoj, aŭ tiuj necesaĵoj mem, do aŭ provizado aŭ provizaĵoj, ekz. nutraĵoj dum migrado aŭ municio por armeo. La similsona <i>'Provizio'</i> estas procenta pago al (re)vendisto.<i></i> Estas angla falsa amiko uzi <i>'provizioj'</i> por la kondiĉoj en traktato aŭ statutoj.",
		"La armeo ne plu havis sufiĉe da <span style=\"color: #ff0000\">provizioj</span> (provizoj).<br>\n<br>\nKrom salajro li ricevis altprocentan <span style=\"color: #ff0000\">provizon</span> (provizion).<br>\n<br>\nNe aplikeblas la <span style=\"color: #ff0000\">provizioj</span> (kondiĉoj) de la Novjorka Konvencio."
	],
	"£:BASE-provizio": [
		"£:BASE-provizio",
		"Falsa amiko: provizo ↔ provizio → kondiĉo",
		"'Provizo' estas la havigado de necesaĵoj, aŭ tiuj necesaĵoj mem, do aŭ provizado aŭ provizaĵoj, ekz. nutraĵoj dum migrado aŭ municio por armeo. La similsona <i>'Provizio'</i> estas procenta pago al (re)vendisto.<i></i> Estas angla falsa amiko uzi <i>'provizioj'</i> por la kondiĉoj en traktato aŭ statutoj.",
		"La armeo ne plu havis sufiĉe da <span style=\"color: #ff0000\">provizioj</span> (provizoj).<br>\n<br>\nKrom salajro li ricevis altprocentan <span style=\"color: #ff0000\">provizon</span> (provizion).<br>\n<br>\nNe aplikeblas la <span style=\"color: #ff0000\">provizioj</span> (kondiĉoj) de la Novjorka Konvencio."
	],
	"£:BASE-kondicxo": [
		"£:BASE-kondicxo",
		"Falsa amiko: provizo ↔ provizio → kondiĉo",
		"'Provizo' estas la havigado de necesaĵoj, aŭ tiuj necesaĵoj mem, do aŭ provizado aŭ provizaĵoj, ekz. nutraĵoj dum migrado aŭ municio por armeo. La similsona <i>'Provizio'</i> estas procenta pago al (re)vendisto.<i></i> Estas angla falsa amiko uzi <i>'provizioj'</i> por la kondiĉoj en traktato aŭ statutoj.",
		"La armeo ne plu havis sufiĉe da <span style=\"color: #ff0000\">provizioj</span> (provizoj).<br>\n<br>\nKrom salajro li ricevis altprocentan <span style=\"color: #ff0000\">provizon</span> (provizion).<br>\n<br>\nNe aplikeblas la <span style=\"color: #ff0000\">provizioj</span> (kondiĉoj) de la Novjorka Konvencio."
	],
	"£:BASE-trinkejo&\"<puboj?n?>\"": [
		"£:BASE-trinkejo&\"<puboj?n?>\"",
		"Falsa amiko: pubo → trinkejo",
		"'<i>Pubo</i>’ estas antatomia vorto, celanta la seksregionon de la torso. Ne konfuzu ĝin kun <i>‘trinkejo’</i> (angle<i>: pub).</i>",
		""
	],
	"£:BASE-polpo": [
		"£:BASE-polpo",
		"Falsa amiko: pulp → polpo",
		"En Esperanto, <i>'pulpo'</i> estas fruktkarno, dum <i>'polpo'</i> estas marbesto kun tentakloj.",
		"Apud la eta knabino, dormas la <span style=\"color: #ff0000\">pulpo</span> (polpo) el ĉifonoj."
	],
	"£:BASE-funto": [
		"£:BASE-funto",
		"Falsa amiko: pundo → funto",
		"'Pundo' estas mezurunuo por mono, dum <i>'funto'</i> estas mezurunuo por pezo.",
		"Li aĉetis 4 <span style=\"color: #ff0000\">pundojn</span> (funtojn) da viando."
	],
	"£:BASE-poento": [
		"£:BASE-poento",
		"Falsa amiko: punkto/punto/ponto → poento",
		"En Esperanto, la ĝenerala vorto <i>'punkto'</i> povas esti, malgranda ronda signo, tempo- aŭ loko-punkto aŭ ero de temaro aŭ listo. Sed por mezuri (mal)sukceson en konkurso, uzu <i>'poento'.</i>",
		"Partoprenantoj bezonas minimume 5 <span style=\"color: #ff0000\">punktojn</span> (poentojn) por eniri la duan rondon."
	],
	"£x-etype-lemma&\"<racial.*>\"&\"ra[cs].*\"": [
		"£x-etype-lemma&\"<racial.*>\"&\"ra[cs].*\"",
		"Falsa amiko: raciala → racia/rasa, racialisma → raciisma/rasisma",
		"La adjektivo <i>'raciala'</i> ne ekzistas en Esperanto. Povas temi aŭ pri la filozofia vorto <i>'racia'</i> (logikpensa), kun latineca troa -al, aŭ pri la biologia/sociologia vorto <i>'rasa'</i> (subspecia)<i>,</i> pro angla falsa amiko <i>(racial).</i> Simile pri derivaĵoj: <i>'racialisma'</i> devas esti aŭ <i>'raciisma'</i> aŭ <i>'rasisma'.</i>",
		""
	],
	"£:BASE-racia": [
		"£:BASE-racia",
		"Falsa amiko: racionala/-e → racia/-e",
		"'Racionala' estas matematika aŭ filozofia fakesprimo. En ĝenerala lingvo, kun la signifo 'logike rezona, malemocia', prefere uzu <i>'racia/racie'.</i>",
		"Vere mankas <span style=\"color: #ff0000\">racionalaj</span> (raciaj) argumentoj por tiu decido."
	],
	"£:BASE-racionala": [
		"£:BASE-racionala",
		"Falsa amiko: racionala/-e → racia/-e",
		"'Racionala' estas matematika aŭ filozofia fakesprimo. En ĝenerala lingvo, kun la signifo 'logike rezona, malemocia', prefere uzu <i>'racia/racie'.</i>",
		"Vere mankas <span style=\"color: #ff0000\">racionalaj</span> (raciaj) argumentoj por tiu decido."
	],
	"£x-etype-lemma&\"<racionale>\"": [
		"£x-etype-lemma&\"<racionale>\"",
		"Falsa amiko: racionala/-e → racia/-e",
		"'Racionala' estas matematika aŭ filozofia fakesprimo. En ĝenerala lingvo, kun la signifo 'logike rezona, malemocia', prefere uzu <i>'racia/racie'.</i>",
		"Vere mankas <span style=\"color: #ff0000\">racionalaj</span> (raciaj) argumentoj por tiu decido."
	],
	"£:BASE-racio&\"<racionon?>\"": [
		"£:BASE-racio&\"<racionon?>\"",
		"Falsa amiko: raciono → racio",
		"En Esperanto, <i>'raciono'</i> estas speco de nombro (racionalo). Ne konfuzu tion kun <i>'racio'</i> (logika penskapablo). Notu ankaŭ la anglan falsaamikan konfuzon kun <i>'manĝporcio'</i> aŭ <i>'provianto'</i> (angle: <i>rations</i>).",
		""
	],
	"£:BASE-mangxporcio&\"<racionoj?n?>\"": [
		"£:BASE-mangxporcio&\"<racionoj?n?>\"",
		"Falsa amiko: raciono → racio",
		"En Esperanto, <i>'raciono'</i> estas speco de nombro (racionalo). Ne konfuzu tion kun <i>'racio'</i> (logika penskapablo). Notu ankaŭ la anglan falsaamikan konfuzon kun <i>'manĝporcio'</i> aŭ <i>'provianto'</i> (angle: <i>rations</i>).",
		""
	],
	"£:BASE-ramplo": [
		"£:BASE-ramplo",
		"Falsa amiko: rampo → ramplo",
		"'Rampo' signifas 'rampado'. Ne konfuzu tion kun <i>'ramplo'</i> (dekliva alveturejo).",
		"Piedirantoj povas aliri la monumenton laŭ la suda <span style=\"color: #ff0000\">rampo</span> (ramplo)."
	],
	"£:BASE-proporcio&\"<raportoj?n?>\"": [
		"£:BASE-proporcio&\"<raportoj?n?>\"",
		"Falsa amiko: raporto → proporcio",
		"En Esperanto, <i>‘raporto’</i> estas informo aŭ dokumento. Ne uzu la vorton kun la falsamika signifo <i>‘proporcio’</i> aŭ <i>‘rilatumo’.</i>",
		"Pi estas la <span style=\"color: #ff0000\">raporto</span> (proporcio) inter circonferenco kaj diametro."
	],
	"£:BASE-rastrumo": [
		"£:BASE-rastrumo",
		"Falsa amiko: rastro → rastrumo",
		"En Esperanto, <i>'rastro'</i> estas hakfosilo uzata por senveprigi bedojn. Ne konfuzu tion kun <i>'rastrumo'</i> aŭ <i>'mikroreto'</i> aŭ <i>'punktreto' –</i> strukturo el horizontalaj kaj vertikalaj linioj.",
		""
	],
	"£x-etype-lemma&\"<realiz.*>\"": [
		"£x-etype-lemma&\"<realiz.*>\"",
		"Falsa amiko: realizi → realigi/ekkompreni",
		"En Esperanto, <i>'realizi'</i> ne ekzistas (ĝi devus signifi 'provizi per io reala). Temas pri angla falsa amiko. Uzu aŭ <i>'realigi'</i> (ekz. planon) aŭ <i>'ekkompreni'</i> (fakton).",
		"<i>Daŭros jarojn realizi (realigi) tiun planon.</i><br>\n<br>\n<i>Subite li realizis (ekkomprenis), ke temis pri ŝerco.</i>"
	],
	"£:BASE-redaktado&\"<redakcioj?n?>\"": [
		"£:BASE-redaktado&\"<redakcioj?n?>\"",
		"Falsa amiko: redakcio → redaktado",
		"En Esperanto, <i>‘redakcio’</i> estas homgrupo prizorganta eldonaĵon. Ne uzu la vorton kun la sencoj de <i>‘redaktado’</i> aŭ <i>‘versio’.</i>",
		"La gazeto nun aperas sub la sperta <span style=\"color: #ff0000\">redakcio</span> (redaktado) de sinjoro Lenovo."
	],
	"£:BASE-versio&\"<redakcioj?n?>\"": [
		"£:BASE-versio&\"<redakcioj?n?>\"",
		"Falsa amiko: redakcio → redaktado",
		"En Esperanto, <i>‘redakcio’</i> estas homgrupo prizorganta eldonaĵon. Ne uzu la vorton kun la sencoj de <i>‘redaktado’</i> aŭ <i>‘versio’.</i>",
		"La gazeto nun aperas sub la sperta <span style=\"color: #ff0000\">redakcio</span> (redaktado) de sinjoro Lenovo."
	],
	"£:BASE-referenci": [
		"£:BASE-referenci",
		"Falsa amiko: referi → referenci, raporti, plusendi, indiki, pritemi",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£:BASE-raporti&\"<refer.*>\"": [
		"£:BASE-raporti&\"<refer.*>\"",
		"Falsa amiko: referi → referenci, raporti, plusendi, indiki, pritemi",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£:BASE-paroli&\"<refer.*>\"": [
		"£:BASE-paroli&\"<refer.*>\"",
		"Falsa amiko: referi → referenci, raporti, plusendi, indiki, pritemi",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£BASE-plusendi&\"<refer.*>\"": [
		"£BASE-plusendi&\"<refer.*>\"",
		"Falsa amiko: referi → referenci, raporti, plusendi, indiki, pritemi",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£:BASE-pritemi&\"<refer.*>\"": [
		"£:BASE-pritemi&\"<refer.*>\"",
		"Falsa amiko: referi → referenci, raporti, plusendi, indiki, pritemi",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£:BASE-indiki&\"<refer.*>\"": [
		"£:BASE-indiki&\"<refer.*>\"",
		"Falsa amiko: referi → referenci, raporti, plusendi, indiki, pritemi",
		"En Esperanto, ‘<i>referi</i>’ signifas ‘prezenti sciencan aŭ/kaj detalan raporton. La verbo estas netransitiva, do kun akuzativo aŭ ‘<i>ke</i>’ uzu ‘<i>raporti</i>’:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis) la retiriĝon de la atakantoj. Li</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (raportis), ke ili retiriĝis.</i><br>\n<br>\nNe konfuzu ‘referi’ kaj ‘referenci’. Oni referencas akademian fonton, aŭtoron, verkon ktp., kaj nomo aŭ difino povas referenci al objekto, loko aŭ okazaĵo (angle: <i>refer to</i>).<br>\n<br>\n<i>La eseo multe</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (referencis) klasikajn aŭtorojn.</i><br>\n<br>\n<i>La nomo de la observatorio</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) al la varianta stelo Mira</i><br>\n<br>\n<i>La raporto</i> <span style=\"color: #ff0000\"><i>referas</i></span><i> (referencas) la aktualajn prezojn al la jaro 1990.</i><br>\n<br>\nLa franca versio de tiu falsa amiko estas <i>‘se référer à’:</i><br>\n<br>\n<i>S-ro Ceric</i><span style=\"color: #ff0000\"><i> referas sin</i> </span><i>(referencas, aludas) al glora pasinteco.</i><br>\n<br>\nAlia angla falsa amiko estas <i>‘refer sb./s.th. to’:</i><br>\n<br>\n<i>OGPU</i> <span style=\"color: #ff0000\"><i>referis</i></span><i> (plusendis) la aferon/petanton/mesaĝon al la Politburoo.</i>",
		""
	],
	"£x-etype-list&\"<refugx.*>\"&\"rifugx.*\"": [
		"£x-etype-list&\"<refugx.*>\"&\"rifugx.*\"",
		"Falsa amiko: refuĝi → rifuĝi",
		"'Refuĝi' signifas 'ree fuĝi'. Verŝajne vi celis <i>'rifuĝi', 'rifuĝanto'</i> ktp., kun la senco de 'serĉi protekton'.",
		"Nur en la lasta momento mi povis <span style=\"color: #ff0000\">refuĝi</span> (rifuĝi) al la monaĥejo."
	],
	"£:BASE-regula&\"<regularaj?n?>\"": [
		"£:BASE-regula&\"<regularaj?n?>\"",
		"Falsa amiko: regulara → regula",
		"En Esperanto, <i>‘regulara’</i> estas malofta vorto kun rilato al <i>‘regularo’</i> (aro de reguloj). Ne konfuzu tion kun <i>‘regula’</i> (okazanta kun fiksaj tempaj interspacoj). Temas pri angla falsa amiko <i>(regular</i>).",
		"Dum la lasta jaro li faris regularajn (regulaj) vizitojn al la loka naĝejo."
	],
	"£:BASE-reklami&\"<reklamaci.*>\"": [
		"£:BASE-reklami&\"<reklamaci.*>\"",
		"Falsa amiko: reklamacii → reklami/postuli",
		"'Reklamacii' signifas 'plendi pri liverita varo aŭ servo. Ne konfuzu tion kun <i>'reklami',</i> do laŭde kaj varbe paroli pri io.<br>\n<br>\nNotu ankaŭ, ke oni ne '<i>reklamacias por si'</i>, sed <i>'postulas'</i> rajton aŭ terenon.",
		"Por <span style=\"color: #ff0000\">reklamacii</span> (reklami) la libron, la eldonejo organizis aŭtoran vesperon.<br>\n<br>\nLa franca reĝo <span style=\"color: #ff0000\">reklamaciis</span> (postulis) la urbon por si."
	],
	"£:BASE-postuli&\"<reklamaci.*>\"": [
		"£:BASE-postuli&\"<reklamaci.*>\"",
		"Falsa amiko: reklamacii → reklami/postuli",
		"'Reklamacii' signifas 'plendi pri liverita varo aŭ servo. Ne konfuzu tion kun <i>'reklami',</i> do laŭde kaj varbe paroli pri io.<br>\n<br>\nNotu ankaŭ, ke oni ne '<i>reklamacias por si'</i>, sed <i>'postulas'</i> rajton aŭ terenon.",
		"Por <span style=\"color: #ff0000\">reklamacii</span> (reklami) la libron, la eldonejo organizis aŭtoran vesperon.<br>\n<br>\nLa franca reĝo <span style=\"color: #ff0000\">reklamaciis</span> (postulis) la urbon por si."
	],
	"£x-etype-lemma&\"<rekogn.*>\"": [
		"£x-etype-lemma&\"<rekogn.*>\"",
		"Falsa amiko: rekogni → rekoni",
		"En Esperanto, <i>‘kogni’</i> estas verbigo de la malofta scienca adjektiva radiko <i>‘kogna’</i> (‘pensa’). <i>‘Rekogni’</i> tre verŝajne estas falsamika uzo por <i>‘rekoni’</i> (angle: <i>recognize</i>)",
		"La fonduso estas <span style=\"color: #ff0000\">rekognita</span> (rekonita) kiel soci-utila asocio."
	],
	"£:BASE-registri&\"<rekomenditaj?n?>\"": [
		"£:BASE-registri&\"<rekomenditaj?n?>\"",
		"Falsa amiko: rekomendita → registrita",
		"En Esperanto, oni parolas pri <i>'registrita'</i> letero, ne <i>'rekomendita'</i> letero. Oni <i>'rekomendas'</i> ion, kion oni ŝatas aŭ favoras.",
		"Mi sendis la monon per <span style=\"color: #ff0000\">rekomendita</span> (registrita) letero."
	],
	"£:BASE-registri": [
		"£:BASE-registri",
		"Falsa amiko: rekordi → registri",
		"En Esperanto, la verbo <i>'rekordi'</i> esta netransitiva kaj simple signifas &quot;esti rekordo, esti rekorde alta&quot;. Ne konfuzu tion kun la ago de <i>'registri'</i> muzikon aŭ filmon (angle: <i>record</i>)",
		"Li <span style=\"color: #ff0000\">rekordis</span> (registris) sian unuan sondiskon kiel 15-jarulo."
	],
	"£:BASE-anstatauxigi&\"<remplac.*>\"": [
		"£:BASE-anstatauxigi&\"<remplac.*>\"",
		"Falsa amiko: remplaci → anstataŭigi",
		"'Remplaci', se entute uzata, devus signifi 'esti placo, kie oni remas' (en Venecio?). Sed tutcerte vi celas <i>'anstataŭigi'.</i>",
		"En tiu kuko vi povas <span style=\"color: #ff0000\">remplaci</span> (anstataŭigi) la avelojn per juglandoj aŭ migdaloj."
	],
	"£:BASE-esplori&\"<resercx.*>\"": [
		"£:BASE-esplori&\"<resercx.*>\"",
		"Falsa amiko: reserĉi → esplori",
		"En Esperanto, <i>‘reserĉi’</i> simple signifas ‘ree serĉi’. La vorto ne havas la falsamikan sencon de <i>‘esplori’.</i>",
		"La projekto <span style=\"color: #ff0000\">reserĉas</span> (esploras) pri la akvokvalito de la urba rivero."
	],
	"£:BASE-rezolucio": [
		"£:BASE-rezolucio",
		"Falsa amiko: resolucio → rezolucio",
		"'Resolucio' estas medicina fakvorto pri la malapero de simptomo. La ĝusta vorto por finkonferenca deklaro estas <i>'rezolucio'.</i>",
		"Dum la jaroj, la UN faris plurajn <span style=\"color: #ff0000\">resoluciojn</span> (rezoluciojn) pri la konflikto."
	],
	"£:BASE-reveni&\"<return.*>\"": [
		"£:BASE-reveni&\"<return.*>\"",
		"Falsa amiko: returni → reveni",
		"En Esperanto, <i>‘returni’</i> signifas ‘turni iun/ion en la kontraŭan direkton’, kaj <i>‘returniĝi’</i> signifas ‘mem turniĝi en la kontraŭan direkton’ aŭ ‘ree turniĝi’. Sed nek unu nek la alia havas la sencon de <i>‘reveni/reiri’</i> (angle: <i>return</i>).",
		"Li prenis la glason da lakto , kaj returnigxis (revenis/reiris) al la kabano ."
	],
	"£:BASE-renversi": [
		"£:BASE-renversi",
		"Falsa amiko: reversi → renversi",
		"En Esperanto, <i>'reversi'</i> normale signifas rekudri vesto tiel, ke la interna flanko fariĝas la ekstera. Alia ebla signifo estas 're-versi' (ekz. poemon en alia lingvo). Ĉi tie tamen vi verŝajne celis <i>'renversi'</i> (inversigi, faligi inversigante).",
		"Ne eblas <span style=\"color: #ff0000\">reversi</span> (renversi) tiun procezon."
	],
	"£x-etype-lemma&\"<reversigx.*>\"": [
		"£x-etype-lemma&\"<reversigx.*>\"",
		"Falsa amiko: reversi → renversi",
		"En Esperanto, <i>'reversi'</i> normale signifas rekudri vesto tiel, ke la interna flanko fariĝas la ekstera. Alia ebla signifo estas 're-versi' (ekz. poemon en alia lingvo). Ĉi tie tamen vi verŝajne celis <i>'renversi'</i> (inversigi, faligi inversigante).",
		"Ne eblas <span style=\"color: #ff0000\">reversi</span> (renversi) tiun procezon."
	],
	"£:BASE-distingivo": [
		"£:BASE-distingivo",
		"Falsa amiko: rezolucio → distingivo",
		"<i>'Rezolucio’</i> estas finkonferenca deklaro. Ne uzu la vorton en teknika senco, kun la signifo de <i>‘distingivo’</i> aŭ <i>'difino'</i> (de ekz. ekrano aŭ foto), mezurebla en pikseloj aŭ distancunuoj.",
		"La ekrano havas altan <span style=\"color: #ff0000\">rezolucion</span> (distingivon)"
	],
	"£:BASE-difino&\"<re[zs]olucio>\"": [
		"£:BASE-difino&\"<re[zs]olucio>\"",
		"Falsa amiko: rezolucio → distingivo",
		"<i>'Rezolucio’</i> estas finkonferenca deklaro. Ne uzu la vorton en teknika senco, kun la signifo de <i>‘distingivo’</i> aŭ <i>'difino'</i> (de ekz. ekrano aŭ foto), mezurebla en pikseloj aŭ distancunuoj.",
		"La ekrano havas altan <span style=\"color: #ff0000\">rezolucion</span> (distingivon)"
	],
	"£:BASE-ripo&\"<riboj?n?>\"": [
		"£:BASE-ripo&\"<riboj?n?>\"",
		"Falsa amiko: ribo → ripo",
		"'Ribo’ estas bero (angle: <i>currant</i>), <i>‘ripo’</i> estas osto (angle: <i>rib</i>)",
		""
	],
	"£:BASE-senstrecxigxi&\"<r[ie]laks.*>\"": [
		"£:BASE-senstrecxigxi&\"<r[ie]laks.*>\"",
		"Falsa amiko: rilaksi/relaksi → senstreĉiĝi/rilaksi",
		"En Esperanto, <i>‘rilaksi’</i> estas transitiva verbo, normale celante kondiĉojn, parametrojn aŭ muskolojn kiel objektojn. Homoj ne rilaksas, sed senstreĉiĝas.<br>\n<br>\nNotu, ke <i>'relaksi'</i> tute ne ekzistas en Esperanto, krom kun la stranga senco de 'ree havi diareon'. Devas esti aŭ (kun objekto) <i>'rilaksi'</i> aŭ (sen objekto) <i>'senstreĉiĝi'.</i> Simile, <i>'relaksigi'</i> devas esti <i>'rilaksi'</i>, kaj <i>'relaksiĝi'</i> devas esti <i>'senstreĉiĝi'.</i>",
		"Cxiu <span style=\"color: #ff0000\">rilaksis</span> (senstreĉiĝis) kaj auxskultis la muzikon.<br>\n<br>\nNi <span style=\"color: #ff0000\">relaksis</span> (senstreĉiĝis) trinkante varman ĉokoladon."
	],
	"£:BASE-rilaksi": [
		"£:BASE-rilaksi",
		"Falsa amiko: rilaksi/relaksi → senstreĉiĝi/rilaksi",
		"En Esperanto, <i>‘rilaksi’</i> estas transitiva verbo, normale celante kondiĉojn, parametrojn aŭ muskolojn kiel objektojn. Homoj ne rilaksas, sed senstreĉiĝas.<br>\n<br>\nNotu, ke <i>'relaksi'</i> tute ne ekzistas en Esperanto, krom kun la stranga senco de 'ree havi diareon'. Devas esti aŭ (kun objekto) <i>'rilaksi'</i> aŭ (sen objekto) <i>'senstreĉiĝi'.</i> Simile, <i>'relaksigi'</i> devas esti <i>'rilaksi'</i>, kaj <i>'relaksiĝi'</i> devas esti <i>'senstreĉiĝi'.</i>",
		"Cxiu <span style=\"color: #ff0000\">rilaksis</span> (senstreĉiĝis) kaj auxskultis la muzikon.<br>\n<br>\nNi <span style=\"color: #ff0000\">relaksis</span> (senstreĉiĝis) trinkante varman ĉokoladon."
	],
	"£x-etype-lemma&\"<r[ie]laks.*>\"": [
		"£x-etype-lemma&\"<r[ie]laks.*>\"",
		"Falsa amiko: rilaksi/relaksi → senstreĉiĝi/rilaksi",
		"En Esperanto, <i>‘rilaksi’</i> estas transitiva verbo, normale celante kondiĉojn, parametrojn aŭ muskolojn kiel objektojn. Homoj ne rilaksas, sed senstreĉiĝas.<br>\n<br>\nNotu, ke <i>'relaksi'</i> tute ne ekzistas en Esperanto, krom kun la stranga senco de 'ree havi diareon'. Devas esti aŭ (kun objekto) <i>'rilaksi'</i> aŭ (sen objekto) <i>'senstreĉiĝi'.</i> Simile, <i>'relaksigi'</i> devas esti <i>'rilaksi'</i>, kaj <i>'relaksiĝi'</i> devas esti <i>'senstreĉiĝi'.</i>",
		"Cxiu <span style=\"color: #ff0000\">rilaksis</span> (senstreĉiĝis) kaj auxskultis la muzikon.<br>\n<br>\nNi <span style=\"color: #ff0000\">relaksis</span> (senstreĉiĝis) trinkante varman ĉokoladon."
	],
	"£:BASE-kuracilo&\"<rimedoj?n?>": [
		"£:BASE-kuracilo&\"<rimedoj?n?>",
		"Falsa amiko: rimedo → kuracilo",
		"En Esperanto, <i>‘rimedo’</i> signifas (nur) ‘celatingilo’ (angle: <i>means</i>). Ne eblas uzi ĝin kun la senco de <i>‘kuracilo’</i> (angle: <i>remedy</i>).",
		"La kuracisto preskribis kontraŭtusan <span style=\"color: #ff0000\">rimedon</span> (kuracilon)."
	],
	"£:BASE-ruli&\"<rol.*>\"": [
		"£:BASE-ruli&\"<rol.*>\"",
		"Falsa amiko: roli → ruli, ruliĝi",
		"En Esperanto, <i>‘roli’</i> rilatas al teatra aŭ filma rolo, aŭ laŭbezona funkcio (angle: <i>role</i>). Ne konfuzu tion kun la transitiva verbo <i>‘ruli’</i> (angle: <i>roll</i>).",
		"La infano <span style=\"color: #ff0000\">rolis</span> (rulis) pilkon laŭ la strato."
	],
	"£:BASE-ruligxi&\"<rol.*>\"": [
		"£:BASE-ruligxi&\"<rol.*>\"",
		"Falsa amiko: roli → ruli, ruliĝi",
		"En Esperanto, <i>‘roli’</i> rilatas al teatra aŭ filma rolo, aŭ laŭbezona funkcio (angle: <i>role</i>). Ne konfuzu tion kun la transitiva verbo <i>‘ruli’</i> (angle: <i>roll</i>).",
		"La infano <span style=\"color: #ff0000\">rolis</span> (rulis) pilkon laŭ la strato."
	],
	"£:BASE-rombo&\"<rutoj?n?>\"": [
		"£:BASE-rombo&\"<rutoj?n?>\"",
		"Falsa amiko: ruto → itinero/rombo",
		"En Esperanto, <i>'ruto'</i> estas flavflora planto. Ne uzu la vorton falsamike por <i>'itinero'</i> (france: <i>route</i>) aŭ <i>'rombo'</i> (germane: <i>Raute</i>).",
		"Ekzistas almenaŭ kvar diversaj <span style=\"color: #ff0000\">rutoj</span> (itineroj) al la pinto de Kilimanĝaro.<br>\n<br>\nLa keksoj havis la formon de <span style=\"color: #ff0000\">ruto</span> (rombo)."
	],
	"£:BASE-itinero&\"<rutoj?n?>\"": [
		"£:BASE-itinero&\"<rutoj?n?>\"",
		"Falsa amiko: ruto → itinero/rombo",
		"En Esperanto, <i>'ruto'</i> estas flavflora planto. Ne uzu la vorton falsamike por <i>'itinero'</i> (france: <i>route</i>) aŭ <i>'rombo'</i> (germane: <i>Raute</i>).",
		"Ekzistas almenaŭ kvar diversaj <span style=\"color: #ff0000\">rutoj</span> (itineroj) al la pinto de Kilimanĝaro.<br>\n<br>\nLa keksoj havis la formon de <span style=\"color: #ff0000\">ruto</span> (rombo)."
	],
	"£:BASE-laktuko": [
		"£:BASE-laktuko",
		"Falsa amiko: salato → laktuko",
		"En Esperanto, <i>'salato'</i> estas preparita manĝaĵoj, normale malvarma kaj el verdaĵoj. Ne konfuzu tiun vorton kun la specifa, grandfolia, manĝebla planto <i>'laktuko'.</i> Eblas fari salaton el laktuko, sed ne inverse.",
		"Ŝi lavis kaj dispecigis la foliojn de la <span style=\"color: #c9211e\">salato</span> (laktuko)."
	],
	"£:BASE-trinktubeto": [
		"£:BASE-trinktubeto",
		"Falsa amiko: ŝalmo → (trink)tubo(et)o, tigo",
		"En Esperanto, <i>‘ŝalmo’</i> havas nur unu fundamentan signifon – tiun de muzikilo. Prefere ne uzu la vorton kun la sencoj de ‘tubo’ (ekz. trinktubo aŭ veldista tubo) aŭ de ‘tigo’ (ekz. kana aŭ fragmita). Ambaŭ estas (francaj) falsaj amikoj.",
		"La lando malpermesis la uzon de plastaj <span style=\"color: #ff0000\">ŝalmoj</span> (trinktubetoj)."
	],
	"£:BASE-tubo&\"<sxalmoj?n?>\"": [
		"£:BASE-tubo&\"<sxalmoj?n?>\"",
		"Falsa amiko: ŝalmo → (trink)tubo(et)o, tigo",
		"En Esperanto, <i>‘ŝalmo’</i> havas nur unu fundamentan signifon – tiun de muzikilo. Prefere ne uzu la vorton kun la sencoj de ‘tubo’ (ekz. trinktubo aŭ veldista tubo) aŭ de ‘tigo’ (ekz. kana aŭ fragmita). Ambaŭ estas (francaj) falsaj amikoj.",
		"La lando malpermesis la uzon de plastaj <span style=\"color: #ff0000\">ŝalmoj</span> (trinktubetoj)."
	],
	"£:BASE-tigo&\"<sxalmoj?n?>\"": [
		"£:BASE-tigo&\"<sxalmoj?n?>\"",
		"Falsa amiko: ŝalmo → (trink)tubo(et)o, tigo",
		"En Esperanto, <i>‘ŝalmo’</i> havas nur unu fundamentan signifon – tiun de muzikilo. Prefere ne uzu la vorton kun la sencoj de ‘tubo’ (ekz. trinktubo aŭ veldista tubo) aŭ de ‘tigo’ (ekz. kana aŭ fragmita). Ambaŭ estas (francaj) falsaj amikoj.",
		"La lando malpermesis la uzon de plastaj <span style=\"color: #ff0000\">ŝalmoj</span> (trinktubetoj)."
	],
	"£:BASE-salono": [
		"£:BASE-salono",
		"Falsa amiko: salo → salono",
		"Ne konfuzu la spican substancon <i>'salo'</i> kun la ĉambrospeco <i>'salono'</i> (germane: <i>Saal,</i> skandinave: <i>sal</i>).",
		"En la kongresa <span style=\"color: #ff0000\">salo</span> (salono) estas 400 sidlokoj."
	],
	"£:BASE-sekreciajxo": [
		"£:BASE-sekreciajxo",
		"Falsa amiko: sekreto/sekrecio → sekreciaĵo",
		"Glandoj sekrecias sekreciaĵon. Ne konfuzu la procezon de <i>'sekrecio'</i> (do sekreciado) kun la produkto, <i>'sekreciaĵo'.</i> Notu ankaŭ la falsamikan similecon de la vorto <i>'sekreto'</i> (kaŝita scio).",
		"La <span style=\"color: #ff0000\">sekreto</span> (sekreciaĵo) de mefito ege malbonodoras."
	],
	"£:BASE-semida": [
		"£:BASE-semida",
		"Falsa amiko: semita/o → semida/o",
		"En Esperanto, la vortoj <i>'semita'</i> kaj <i>'semito'</i> estas participoj de <i>'semi'.</i> Por la etna signifo uzu <i>'semida'</i> kaj <i>'semido'.</i>",
		"La <span style=\"color: #ff0000\">semita</span> (semida) kulturo estas tre malnova."
	],
	"£x-etype-(list|lemma)&\"<semitoj?n?>\"": [
		"£x-etype-(list|lemma)&\"<semitoj?n?>\"",
		"Falsa amiko: semita/o → semida/o",
		"En Esperanto, la vortoj <i>'semita'</i> kaj <i>'semito'</i> estas participoj de <i>'semi'.</i> Por la etna signifo uzu <i>'semida'</i> kaj <i>'semido'.</i>",
		"La <span style=\"color: #ff0000\">semita</span> (semida) kulturo estas tre malnova."
	],
	"£:BASE-frazo&\"<sentencoj?n?>\"": [
		"£:BASE-frazo&\"<sentencoj?n?>\"",
		"Falsa amiko: sentenco → frazo",
		"<i>'Sentenco’</i> estas pli ĝenerala vorto po <i>‘aforismo’ –</i> frazeto enhavanta moralan principon (anlge: <i>maxim</i>). Ne konfuzu tion kun <i>‘frazo’</i> (angle: <i>sentence</i>), la ĝenerala vorto por senchava vortoĉeno.",
		"La <span style=\"color: #ff0000\">sentencoj</span> (frazoj) en via eseo estas tro longaj."
	],
	"£:BASE-apartigi&\"<separ.*>\"": [
		"£:BASE-apartigi&\"<separ.*>\"",
		"Falsa amiko: separi → apartigi, separata → aparta",
		"En Esperanto, oni normale nur uzas la vorton <i>'separi'</i> en abstrakta senco, precipe pri homoj (ekz. geedzoj), partioj, teritorioj ktp. Por disigo de konkretaj aĵoj, prefere uzu <i>'apartigo'.</i><br>\n<br>\nNotu ankaŭ, ke la vorto <i>'separata'</i> ne ekzistas kiel adjektivo en Esperanto. Temas pri angla falsa amiko <i>(separate)</i>. Devas esti <i>'aparta'.</i>",
		"La plaĝo havas <span style=\"color: #ff0000\">separatan</span> (apartan) sekcion por nudistoj.<br>\n<br>\n<span style=\"color: #ff0000\">Separante</span> (disigante) akvon kaj salon eblas fari trinkakvon el la maro."
	],
	"£:BASE-aparta&\"<separ.*>\"": [
		"£:BASE-aparta&\"<separ.*>\"",
		"Falsa amiko: separi → apartigi, separata → aparta",
		"En Esperanto, oni normale nur uzas la vorton <i>'separi'</i> en abstrakta senco, precipe pri homoj (ekz. geedzoj), partioj, teritorioj ktp. Por disigo de konkretaj aĵoj, prefere uzu <i>'apartigo'.</i><br>\n<br>\nNotu ankaŭ, ke la vorto <i>'separata'</i> ne ekzistas kiel adjektivo en Esperanto. Temas pri angla falsa amiko <i>(separate)</i>. Devas esti <i>'aparta'.</i>",
		"La plaĝo havas <span style=\"color: #ff0000\">separatan</span> (apartan) sekcion por nudistoj.<br>\n<br>\n<span style=\"color: #ff0000\">Separante</span> (disigante) akvon kaj salon eblas fari trinkakvon el la maro."
	],
	"£:BASE-servado&\"<servicoj?n?>\"": [
		"£:BASE-servado&\"<servicoj?n?>\"",
		"Falsa amiko: servico → servado",
		"En Esperanto, <i>‘servico’</i> signifas ‘manĝilaro’. Ne konfuzu tion kun <i>‘servado’</i> en restoracio aŭ vendejo (angle: <i>service</i>).",
		"La <span style=\"color: #ff0000\">servico</span> (servado) en la kafejo estis abisma."
	],
	"£:BASE-ejo&\"<sitoj?n?>\"": [
		"£:BASE-ejo&\"<sitoj?n?>\"",
		"Falsa amiko: sito → ejo",
		"En Esperanto, <i>'sito'</i> estas speco de birdo (pego). Por la falsamika angla <i>'site'</i> uzu <i>'ejo', 'loko'</i> aŭ <i>'retejo'.</i> Notu, ke ne helpas literumi <i>'sajto' –</i> tiu neologismo ne ekzistas en Esperanto.",
		"Proksime estas fama arkeologia <span style=\"color: #ff0000\">sito</span> (ejo)."
	],
	"£:BASE-gamo&\"<skaloj?n?>\"": [
		"£:BASE-gamo&\"<skaloj?n?>\"",
		"Falsa amiko: skalo → gamo",
		"La vorto <i>‘skalo’</i> temas pri mezuro aŭ proporcio. Prefere ne uzu ĝin en la (falsamika) senco de <i>‘gamo’.</i>",
		"La restoracio ofertis grandan <span style=\"color: #ff0000\">skalon</span> (gamon) da pladoj."
	],
	"£:BASE-unuo&\"<skaloj?n?>\"": [
		"£:BASE-unuo&\"<skaloj?n?>\"",
		"Falsa amiko: skalo → unuo",
		"La vorto <i>‘skalo’</i> temas pri mezuro aŭ proporcio. Prefere ne uzu ĝin en la (falsamika) senco de <i>‘unuo’.</i>",
		"1 skalo (unuo) da argilo , 5 <span style=\"color: #ff0000\">skaloj</span> (unuoj) da humo kaj 2 <span style=\"color: #ff0000\">skaloj</span> (unuoj) da gruzo ."
	],
	"£:BASE-lernejo&\"<skoloj?n?>\"": [
		"£:BASE-lernejo&\"<skoloj?n?>\"",
		"Falsa amiko: skolo → lernejo",
		"En Esperanto, <i>‘skolo’</i> estas la adeptaro de iu majstro, filozofio aŭ doktrino (angle: <i>school of thought</i>). Ne konfuzu tion kun la <i>‘lernejo’ –</i> la ĝenerala vorto por loko, kie oni lernas.",
		"En tiu <span style=\"color: #ff0000\">skolo</span> (lernejo) la infanoj ne rajtas kunporti poŝtelefonojn."
	],
	"£:BASE-verki&\"<skrib.*>\"": [
		"£:BASE-verki&\"<skrib.*>\"",
		"Falsa amiko: skribi → verki",
		"En Esperanto, libron aŭ poemon oni <i>‘verkas’,</i> dum oni <i>‘skribas’</i> leteron, mesaĝon aŭ frazon. La ĝenerala vorto estas <i>‘skribi’,</i> sed aŭtoroj verkas siajn verkojn.",
		"Dum sia junaĝo, li ankaŭ <span style=\"color: #c9211e\">skribis</span> (verkis) poemojn."
	],
	"£:BASE-muko": [
		"£:BASE-muko",
		"Falsa amiko: ŝlimo → muko/mucilago",
		"Normale <i>'ŝlimo'</i> konsistas el akveca kota tero. Metafore la vorto estas uzata kun negativa senco, pri ekz. malpureco. Sed en biologia kaj medicina kunteksto oni uzas '<i>muko'</i> (pri anatomio, malsanoj, bestoj) aŭ <i>'mucilago'</i> (pri plantoj).",
		"Sango kaj <span style=\"color: #ff0000\">ŝlimo</span> (muko) fluis el la vundo.<br>\n<br>\nIuj karnovoraj plantoj uzas sian <span style=\"color: #ff0000\">ŝlimon</span> (mucilagon) por kapti kaj teni manĝotajn insektojn."
	],
	"£:BASE-muka": [
		"£:BASE-muka",
		"Falsa amiko: ŝlimo → muko/mucilago",
		"Normale <i>'ŝlimo'</i> konsistas el akveca kota tero. Metafore la vorto estas uzata kun negativa senco, pri ekz. malpureco. Sed en biologia kaj medicina kunteksto oni uzas '<i>muko'</i> (pri anatomio, malsanoj, bestoj) aŭ <i>'mucilago'</i> (pri plantoj).",
		"Sango kaj <span style=\"color: #ff0000\">ŝlimo</span> (muko) fluis el la vundo.<br>\n<br>\nIuj karnovoraj plantoj uzas sian <span style=\"color: #ff0000\">ŝlimon</span> (mucilagon) por kapti kaj teni manĝotajn insektojn."
	],
	"£:BASE-mucilago": [
		"£:BASE-mucilago",
		"Falsa amiko: ŝlimo → muko/mucilago",
		"Normale <i>'ŝlimo'</i> konsistas el akveca kota tero. Metafore la vorto estas uzata kun negativa senco, pri ekz. malpureco. Sed en biologia kaj medicina kunteksto oni uzas '<i>muko'</i> (pri anatomio, malsanoj, bestoj) aŭ <i>'mucilago'</i> (pri plantoj).",
		"Sango kaj <span style=\"color: #ff0000\">ŝlimo</span> (muko) fluis el la vundo.<br>\n<br>\nIuj karnovoraj plantoj uzas sian <span style=\"color: #ff0000\">ŝlimon</span> (mucilagon) por kapti kaj teni manĝotajn insektojn."
	],
	"£:BASE-grundo&\"<sojloj?n?>\"": [
		"£:BASE-grundo&\"<sojloj?n?>\"",
		"Falsa amiko: sojlo → grundo",
		"En Esperanto, <i>‘sojlo’</i> estas portoŝtono aŭ metafore transiro-linio inter du statoj, epokoj aŭ agoj. Estas (angla) falsa amiko uzi la vorton kun la signivo de <i>‘grundo’.</i>",
		"La <span style=\"color: #ff0000\">sojlo</span> (grundo) en malnovaj inundo-ebenaĵoj estas aparte fekunda."
	],
	"£x-etype-lemma&\"<specializ.*>\"": [
		"£x-etype-lemma&\"<specializ.*>\"",
		"Falsa amiko: specializi → specialigi",
		"La radiko <i>'specializ-'</i> ne ekzistas en Esperanto (ĝi devus signifi 'provizi per io speciala'). Do oni diras <i>'specialigi', 'specialiĝi', 'specialigita', 'speciala'</i> anstataŭ <span style=\"color: #ff0000\"><i>'specializi', 'specializiĝi', 'specializita', 'speciala'</i></span><i>.</i>",
		""
	],
	"£:BASE-divenumi&\"<spekul.*>\"": [
		"£:BASE-divenumi&\"<spekul.*>\"",
		"Falsa amiko: spekuli → divenumi",
		"La vortoj <i>‘spekuli’</i> kaj <i>‘spekulacio’</i> estas borsaj/financaj fakvortoj. La signifo de ‘divenumi’/’divene prognozi’ (germane: <i>spekulieren,</i> angle: <i>speculate</i>), pri faktoj aŭ okazaĵoj, estas falsa amiko.<br>\n<br>\nNotu, ke <i>'spekulaco'</i> estas sinonimo de <i>'spekulaso',</i> speco de spickuketo.",
		"Mi ne volas <span style=\"color: #ff0000\">spekuli</span> (divenumi) pri la rezultoj de la venonta baloto.<br>\n<br>\nLia patro <span style=\"color: #ff0000\">spekulacis</span> (spekulaciis) kun valutoj."
	],
	"£x-etype-lemma&\"<spekulac.*>\"&\"spekulaci.*\"": [
		"£x-etype-lemma&\"<spekulac.*>\"&\"spekulaci.*\"",
		"Falsa amiko: spekuli → divenumi",
		"La vortoj <i>‘spekuli’</i> kaj <i>‘spekulacio’</i> estas borsaj/financaj fakvortoj. La signifo de ‘divenumi’/’divene prognozi’ (germane: <i>spekulieren,</i> angle: <i>speculate</i>), pri faktoj aŭ okazaĵoj, estas falsa amiko.<br>\n<br>\nNotu, ke <i>'spekulaco'</i> estas sinonimo de <i>'spekulaso',</i> speco de spickuketo.",
		"Mi ne volas <span style=\"color: #ff0000\">spekuli</span> (divenumi) pri la rezultoj de la venonta baloto.<br>\n<br>\nLia patro <span style=\"color: #ff0000\">spekulacis</span> (spekulaciis) kun valutoj."
	],
	"£:BASE-stamfi": [
		"£:BASE-stamfi",
		"Falsa amiko: stamfi → stamfi",
		"'Stampi' signifas 'marki per emblemo', precipe kun la celo de validigo aŭ por garantii aŭtentikecon. Ne konfuzu tion kun <i>'stamfi' –</i> kolera aŭ senpacienca altera piedbato de persono aŭ besto.",
		"La virĉevalo <span style=\"color: #ff0000\">stampis</span> (stamfis) kaj henis."
	],
	"£:BASE-staplo": [
		"£:BASE-staplo",
		"Falsa amiko: staplo → stako",
		"La origina signifo de <i>'staplo'</i> estas stokejo (konstruaĵo). Prefere evitu uzi la vorton kun la signifo de <i>'stako'.</i> Notu tamen, ke la vortara situacio ne estas klara. La dua signifo ne troveblas en PIV, kaj la unua mankas en ReVo.",
		"Sur la tablo estis impona <span style=\"color: #ff0000\">staplo</span> (stako) da libroj."
	],
	"£:BASE-stenografisto": [
		"£:BASE-stenografisto",
		"Falsa amiko: stenografo → stenografisto",
		"Normale, vortoj kun la finaĵo <i>'-ografo'</i> temas pri profesiuloj, sed <i>'stenografo'</i> estas escepto. Ĝi signifas <i>'stenografado'.</i>",
		"Dum la kongreso okazis konkurso por <span style=\"color: #ff0000\">stenografoj</span> (stenografistoj)."
	],
	"£:BASE-temo&\"<subjektoj?n?>\"": [
		"£:BASE-temo&\"<subjektoj?n?>\"",
		"Falsa amiko: subjekto → temo/fako",
		"En Esperanto, <i>‘subjekto’</i> estas precipe gramatika termino (frazparto). Ĝi ne estas uzebla kun la senco de <i>‘temo’</i> aŭ <i>'fako'.</i><br>\n<br>\nNotu, ke <i>‘subjekto’</i> fakte havas duan signifon, nome tiun de ‘jura individuo’: <i>politika/jura/ĉefurba subjekto.</i>",
		"Jen anglalingva libro pri la <span style=\"color: #ff0000\">subjekto</span> (temo).<br>\n<br>\n<i>Li elektis novan</i> <span style=\"color: #ff0000\"><i>studsubjekton</i></span><i> (studfakon).</i>"
	],
	"£x-etype-lemma&\"<studsubjektoj?n?>\"&\"studfako\"": [
		"£x-etype-lemma&\"<studsubjektoj?n?>\"&\"studfako\"",
		"Falsa amiko: subjekto → temo/fako",
		"En Esperanto, <i>‘subjekto’</i> estas precipe gramatika termino (frazparto). Ĝi ne estas uzebla kun la senco de <i>‘temo’</i> aŭ <i>'fako'.</i><br>\n<br>\nNotu, ke <i>‘subjekto’</i> fakte havas duan signifon, nome tiun de ‘jura individuo’: <i>politika/jura/ĉefurba subjekto.</i>",
		"Jen anglalingva libro pri la <span style=\"color: #ff0000\">subjekto</span> (temo).<br>\n<br>\n<i>Li elektis novan</i> <span style=\"color: #ff0000\"><i>studsubjekton</i></span><i> (studfakon).</i>"
	],
	"£:BASE-cxambraro": [
		"£:BASE-cxambraro",
		"Falsa amiko: suito → ĉambraro",
		"En Esperanto, <i>'suito'</i> estas plurparta dancmuzikaĵo. Ne konfuzu tion kun <i>'ĉambraro'</i> en hotelo.",
		"La gefianĉoj mendis luksan <span style=\"color: #ff0000\">suiton</span> (ĉambraron) en la hotelo."
	],
	"£:BASE-pinto&\"<superlativoj?n?>\"": [
		"£:BASE-pinto&\"<superlativoj?n?>\"",
		"Falsa amiko: superlativo → pinto",
		"Prefere limigu la uzon de <i>‘superlativo’</i> al la gramatika senco. La metafora senco ‘pinto/ekstremo/kulmino’ ne estas internacie deĉifrebla.",
		"Nu , sinjorino Brandeis estis la <span style=\"color: #ff0000\">superlativo</span> (pinto) de graveco ."
	],
	"£:BASE-(plej=)?(alta|sublima|granda|bona|altranga)": [
		"£:BASE-(plej=)?(alta|sublima|granda|bona|altranga)",
		"Falsa amiko: suprema → alta/altranga",
		"En Esperanto, la vorto <i>'suprema'</i> estas nure matematika fakvorto. Ne ebla uzi ĝin kiel &quot;superlativon&quot; de <i>'alta', 'altranga', 'granda', 'bona'</i> aŭ simile.",
		"<span style=\"color: #ff0000\"><i>Suprema</i></span><i> Kortumo → Alta Kortumo</i><br>\n<br>\n<i>Mi havis la tri</i> <span style=\"color: #ff0000\"><i>supremajn</i></span><i> (plej bonajn) instruistojn de la fakultato.</i>"
	],
	"£:BASE-preni&\"<tank.*>\"": [
		"£:BASE-preni&\"<tank.*>\"",
		"Falsa amiko: tanki → preni benzinon, tanko → benzinujo",
		"En Esperanto, <i>‘tanki’</i> estas verbigo de la substantivo <i>‘tanko’</i> (batalaŭto). Benzinon oni <i>prenas</i> aŭ <i>enmetas,</i> ne <i>tankas.</i> Kaj oni metas ĝin en <i>benzinujon,</i> ne <i>tankon.</i> Povas temi pri (germana) falsa amiko.<br>\n<br>\nNotu, ke aŭton oni <i>'fuelas'.</i> Ankaŭ sen objekto (germane: <i>tanken</i>), por la ago de preni benzinon, uzu <i>'fueli'.</i>",
		"Mi <span style=\"color: #ff0000\">tankis</span> (prenis) 30 litrojn da benzino.<br>\n<br>\nLa aŭto havas 50-litran <span style=\"color: #ff0000\">tankon</span> (benzinujon).<br>\n<br>\nNi baldaŭ devas <span style=\"color: #ff0000\">tanki</span> (fueli).<br>\n<br>\nNecesas <span style=\"color: #ff0000\">tanki</span> (fueli) la luaŭton antaŭ redono."
	],
	"£:BASE-benzinujo&\"<tank.*>\"": [
		"£:BASE-benzinujo&\"<tank.*>\"",
		"Falsa amiko: tanki → preni benzinon, tanko → benzinujo",
		"En Esperanto, <i>‘tanki’</i> estas verbigo de la substantivo <i>‘tanko’</i> (batalaŭto). Benzinon oni <i>prenas</i> aŭ <i>enmetas,</i> ne <i>tankas.</i> Kaj oni metas ĝin en <i>benzinujon,</i> ne <i>tankon.</i> Povas temi pri (germana) falsa amiko.<br>\n<br>\nNotu, ke aŭton oni <i>'fuelas'.</i> Ankaŭ sen objekto (germane: <i>tanken</i>), por la ago de preni benzinon, uzu <i>'fueli'.</i>",
		"Mi <span style=\"color: #ff0000\">tankis</span> (prenis) 30 litrojn da benzino.<br>\n<br>\nLa aŭto havas 50-litran <span style=\"color: #ff0000\">tankon</span> (benzinujon).<br>\n<br>\nNi baldaŭ devas <span style=\"color: #ff0000\">tanki</span> (fueli).<br>\n<br>\nNecesas <span style=\"color: #ff0000\">tanki</span> (fueli) la luaŭton antaŭ redono."
	],
	"£:BASE-enhavi&\"<ten.*>\"": [
		"£:BASE-enhavi&\"<ten.*>\"",
		"Falsa amiko: teni → enhavi",
		"Oni <i>‘tenas’</i> objekton per la manoj, en la brakoj aŭ en certa loko. En Esperanto, la vorto ne havas la senco de <i>‘havi’</i> aŭ <i>‘enhavi’.</i> Povas temi pri (hispana) falsa amiko.",
		"La vortaro <span style=\"color: #ff0000\">tenas</span> (enhavas) 50.000 vortojn."
	],
	"£:BASE-gardi&\"<ten.*>\"": [
		"£:BASE-gardi&\"<ten.*>\"",
		"Falsa amiko: teni → gardi",
		"En Esperanto, <i>‘teni’</i> signifas ‘esti preninta kaj restigi en loko aŭ stato’. Por la senco de <i>‘gardi’</i> aŭ <i>‘konservi’</i> (angle: <i>keep,</i> germane: <i>halten,</i> dane: <i>holde</i>)<i>,</i> sen eksplicita (objektpredikativa) mencio de tiu loko aŭ stato, prefere ne uzu <i>‘teni’.</i> Ne temas pri vera eraro, sed Lingvohelpilo rekomendas diri ekz. <i>\"gardi valorojn/kopion\", \"plenumi promeson/vorton\"</i> ktp.<i></i>",
		"Ni <span style=\"color: #ff0000\">tenu</span> (gardu) niajn idalojn!<br>\n<br>\nŜi plektis korbojn por <span style=\"color: #ff0000\">teni</span> (gardi) fruktojn aŭ panon."
	],
	"£:BASE-termino": [
		"£:BASE-termino",
		"Falsa amiko: termo → termino, termino → fiksdato",
		"En Esperanto, <i>'termo'</i> povas esti aŭ konsista parto de matematika objekto aŭ varmbanejo, precipe antikva. Ne konfuzu tion kun <i>'termino'</i> (fakesprimo) aŭ <i>'(ofic)periodo'</i> (angle: <i>term</i>).<br>\n<br>\nNotu ankaŭ, ke temas pri falsa amiko, se vi uzas <i>'termino'</i> kun tempa senco.",
		"<i>Nova fako bezonas novajn</i> <span style=\"color: #ff0000\"><i>termojn</i></span><i> (terminojn).</i><br>\n<br>\nIli interkonsentis pri nova <span style=\"color: #ff0000\">termino</span> (fiksdato)."
	],
	"£:BASE-fiksdato": [
		"£:BASE-fiksdato",
		"Falsa amiko: termo → termino, termino → fiksdato",
		"En Esperanto, <i>'termo'</i> povas esti aŭ konsista parto de matematika objekto aŭ varmbanejo, precipe antikva. Ne konfuzu tion kun <i>'termino'</i> (fakesprimo) aŭ <i>'(ofic)periodo'</i> (angle: <i>term</i>).<br>\n<br>\nNotu ankaŭ, ke temas pri falsa amiko, se vi uzas <i>'termino'</i> kun tempa senco.",
		"<i>Nova fako bezonas novajn</i> <span style=\"color: #ff0000\"><i>termojn</i></span><i> (terminojn).</i><br>\n<br>\nIli interkonsentis pri nova <span style=\"color: #ff0000\">termino</span> (fiksdato)."
	],
	"£:BASE-periodo&\"<.*term.*>\"": [
		"£:BASE-periodo&\"<.*term.*>\"",
		"Falsa amiko: termo → termino, termino → fiksdato",
		"En Esperanto, <i>'termo'</i> povas esti aŭ konsista parto de matematika objekto aŭ varmbanejo, precipe antikva. Ne konfuzu tion kun <i>'termino'</i> (fakesprimo) aŭ <i>'(ofic)periodo'</i> (angle: <i>term</i>).<br>\n<br>\nNotu ankaŭ, ke temas pri falsa amiko, se vi uzas <i>'termino'</i> kun tempa senco.",
		"<i>Nova fako bezonas novajn</i> <span style=\"color: #ff0000\"><i>termojn</i></span><i> (terminojn).</i><br>\n<br>\nIli interkonsentis pri nova <span style=\"color: #ff0000\">termino</span> (fiksdato)."
	],
	"£x-etype-lemma&\"<.*term.*>\"&\".*periodo.*\"": [
		"£x-etype-lemma&\"<.*term.*>\"&\".*periodo.*\"",
		"Falsa amiko: termo → termino, termino → fiksdato",
		"En Esperanto, <i>'termo'</i> povas esti aŭ konsista parto de matematika objekto aŭ varmbanejo, precipe antikva. Ne konfuzu tion kun <i>'termino'</i> (fakesprimo) aŭ <i>'(ofic)periodo'</i> (angle: <i>term</i>).<br>\n<br>\nNotu ankaŭ, ke temas pri falsa amiko, se vi uzas <i>'termino'</i> kun tempa senco.",
		"<i>Nova fako bezonas novajn</i> <span style=\"color: #ff0000\"><i>termojn</i></span><i> (terminojn).</i><br>\n<br>\nIli interkonsentis pri nova <span style=\"color: #ff0000\">termino</span> (fiksdato)."
	],
	"£:kunteksto&\"<termoj>\"": [
		"£:kunteksto&\"<termoj>\"",
		"Falsa amiko: termoj → kunteksto",
		"Ne ekzistas en Esperanto analogo de la angla esprimo <i>‘in terms of’.</i> Uzu <i>‘en kunteksto de’</i> aŭ simile.",
		"Euxropo devas plibonigxi en <span style=\"color: #ff0000\">termoj</span> (konteksto) de novigo"
	],
	"£:BASE&\"<.*ton[ao]j?n?>\"": [
		"£:BASE&\"<.*ton[ao]j?n?>\"",
		"Falsa amiko: tono/-tona → etiketo/-etiketa",
		"La kerna signifo de <i>'tono'</i> en Esperanto estas 'muzika sono', aŭ – figursence – 'nuanco de koloro aŭ voĉo'. En kelkaj lingvoj, ĉi-lasta inkluzivas ankaŭ, kiu en Esperanto nomiĝas <i>(konduta) 'etiketo'.</i> Do prefere diru <i>'laŭetiketa'</i> anstataŭ <span style=\"color: #ff0000\"><i>'bontona'</i> </span>kaj <i>'kontraŭetiketa'</i> anstataŭ<span style=\"color: #ff0000\"></span> <span style=\"color: #ff0000\"><i>'malbontona'</i></span>",
		"Li faris <span style=\"color: #ff0000\">bontonan</span> (laŭetiketan) viziton al la nova urbestro."
	],
	"£:BASE-eltrovi&\"<trov.*>\"": [
		"£:BASE-eltrovi&\"<trov.*>\"",
		"Falsa amiko: trovi → eltrovi",
		"En Esperanto, oni kutime uzas <i>‘eltrovi’</i> (germane: <i>herausfinden,</i> angle: <i>find out</i>), ne <i>‘trovi’</i> kun objekta subpropozicio pri fakto aŭ solvo.",
		"Ni devas <span style=\"color: #ff0000\">trovi</span> (eltrovi) kiel helpi."
	],
	"£:BASE-tubjo": [
		"£:BASE-tubjo",
		"Falsa amiko: tubo → tubjo",
		"La vorto <i>'tubo'</i> signifas &quot;kava stango&quot;. Por la muzikinstrumento, uzu <i>'tubjo'.</i>",
		"Li ŝatas ludi <span style=\"color: #ff0000\">tubon</span> (tubjon).<br>\n<br>\n<i>Usono regas la nordan parton de la</i> <span style=\"color: #ff0000\"><i>vesta</i></span><i> (okcidenta) Atlantiko.</i>"
	],
	"£:BASE-tonelo": [
		"£:BASE-tonelo",
		"Falsa amiko: tuno/tono → tonelo, tonelo → tonelaro, tonaĵo → tunaro/kapacito",
		"Oni mezuras la kapciton de ŝipoj en <i>'toneloj'</i>, ne en <i>'tunoj'.</i> La unua estas volumena unuo, la dua pezunuo. La fakvorto por la ŝipkapacito mem estas <i>'tonelaro',</i> ne <i>'tonelo',</i> dum la akvodismeto, mezurata en tunoj, nomiĝas <i>'tunaro'.</i> La falsa amiko <i>'tonaĵo'</i> (germana: T<i>onnage</i>)<i>,</i> se entute analizebla, devus esti muzika esprimo.<br>\n<br>\nNotu ankaŭ, ke <i>'tono'</i> estas (muzika) sono aŭ kolornuanco, distingenda de la pezunuo <i>'tuno'.</i>",
		"Temas pri malgranda ŝipo kun kapacito de 100 <span style=\"color: #ff0000\">tunoj</span> (toneloj)."
	],
	"£:BASE-tonelaro": [
		"£:BASE-tonelaro",
		"Falsa amiko: tuno/tono → tonelo, tonelo → tonelaro, tonaĵo → tunaro/kapacito",
		"Oni mezuras la kapciton de ŝipoj en <i>'toneloj'</i>, ne en <i>'tunoj'.</i> La unua estas volumena unuo, la dua pezunuo. La fakvorto por la ŝipkapacito mem estas <i>'tonelaro',</i> ne <i>'tonelo',</i> dum la akvodismeto, mezurata en tunoj, nomiĝas <i>'tunaro'.</i> La falsa amiko <i>'tonaĵo'</i> (germana: T<i>onnage</i>)<i>,</i> se entute analizebla, devus esti muzika esprimo.<br>\n<br>\nNotu ankaŭ, ke <i>'tono'</i> estas (muzika) sono aŭ kolornuanco, distingenda de la pezunuo <i>'tuno'.</i>",
		"Temas pri malgranda ŝipo kun kapacito de 100 <span style=\"color: #ff0000\">tunoj</span> (toneloj)."
	],
	"£:BASE-tunaro": [
		"£:BASE-tunaro",
		"Falsa amiko: tuno/tono → tonelo, tonelo → tonelaro, tonaĵo → tunaro/kapacito",
		"Oni mezuras la kapciton de ŝipoj en <i>'toneloj'</i>, ne en <i>'tunoj'.</i> La unua estas volumena unuo, la dua pezunuo. La fakvorto por la ŝipkapacito mem estas <i>'tonelaro',</i> ne <i>'tonelo',</i> dum la akvodismeto, mezurata en tunoj, nomiĝas <i>'tunaro'.</i> La falsa amiko <i>'tonaĵo'</i> (germana: T<i>onnage</i>)<i>,</i> se entute analizebla, devus esti muzika esprimo.<br>\n<br>\nNotu ankaŭ, ke <i>'tono'</i> estas (muzika) sono aŭ kolornuanco, distingenda de la pezunuo <i>'tuno'.</i>",
		"Temas pri malgranda ŝipo kun kapacito de 100 <span style=\"color: #ff0000\">tunoj</span> (toneloj)."
	],
	"£:BASE-kapacito&\"<tonajxoj?n?>\"": [
		"£:BASE-kapacito&\"<tonajxoj?n?>\"",
		"Falsa amiko: tuno/tono → tonelo, tonelo → tonelaro, tonaĵo → tunaro/kapacito",
		"Oni mezuras la kapciton de ŝipoj en <i>'toneloj'</i>, ne en <i>'tunoj'.</i> La unua estas volumena unuo, la dua pezunuo. La fakvorto por la ŝipkapacito mem estas <i>'tonelaro',</i> ne <i>'tonelo',</i> dum la akvodismeto, mezurata en tunoj, nomiĝas <i>'tunaro'.</i> La falsa amiko <i>'tonaĵo'</i> (germana: T<i>onnage</i>)<i>,</i> se entute analizebla, devus esti muzika esprimo.<br>\n<br>\nNotu ankaŭ, ke <i>'tono'</i> estas (muzika) sono aŭ kolornuanco, distingenda de la pezunuo <i>'tuno'.</i>",
		"Temas pri malgranda ŝipo kun kapacito de 100 <span style=\"color: #ff0000\">tunoj</span> (toneloj)."
	],
	"£:BASE-farigxi&\"<turnigx.*>\"": [
		"£:BASE-farigxi&\"<turnigx.*>\"",
		"Falsa amiko: turniĝi → fariĝi",
		"En Esperanto, <i>‘turniĝi’</i> signifas ‘rondiri surloke’ aŭ ‘ŝanĝi direkton’. Estas (angla) falsa amiko uzi la vorton kun la signifo de <i>‘fariĝi’</i> (angle: <i>become</i>)<i>.</i>",
		"La tankatako <span style=\"color: #ff0000\">turniĝis</span> (fariĝis) kompleta katastrofo.<br>\n<br>\nLi hieraŭ <span style=\"color: #ff0000\">turniĝis</span> (fariĝis) 50."
	],
	"£x-etype-lemma&\"<tut.*e>\"": [
		"£x-etype-lemma&\"<tut.*e>\"",
		"Falsa amiko: tut- → ĉiu-",
		"En Esperanto, la adjektivo <i>'tuta'</i> signifas 'kompleta/plena'. Ĝi ne povas havi la signifon de 'ĉiu', kiel en romanidaj lingvoj, special en pluralo. Do kunmetaĵoj kiel <span style=\"color: #ff0000\"><i>'tutmaniere', 'tutnuance', 'tut(o)kaze', 'tutflanke'</i></span><i></i> devas esti <i>'ĉiumaniere',</i> '<i>ĉiunuance</i>', <i>'ĉiu(o)kaze', 'ĉiuflanke'.</i>",
		""
	],
	"£:nur&\"<unue>\"": [
		"£:nur&\"<unue>\"",
		"Falsa amiko: unue → nur",
		"Oni povas uzi la adverbon <i>‘nur’</i> en la senco de ‘ne pli frue ol’ (+ tempoesprimo). Sed estas falsa (i.a. dana) amiko diri <i>‘unue’</i> en tiu kazo.",
		"La aliaj forvojaĝos <span style=\"color: #ff0000\">unue</span> (nur) post unu semajno."
	],
	"£:BASE-okcidenta": [
		"£:BASE-okcidenta",
		"Falsa amiko: vesta/o → okcidenta/o",
		"La malo de <i>'oriento'</i> (angle: East) estas <i>'okcidento',</i> ne <i>'vesto'</i> (angle: <i>West</i>).",
		""
	],
	"£:BASE-okcidento": [
		"£:BASE-okcidento",
		"Falsa amiko: vesta/o → okcidenta/o",
		"La malo de <i>'oriento'</i> (angle: East) estas <i>'okcidento',</i> ne <i>'vesto'</i> (angle: <i>West</i>).",
		""
	],
	"£:BASE-intervidigxi": [
		"£:BASE-intervidigxi",
		"Falsa amiko: vidiĝi, vidi sin ↔ intervidigxi, renkontiĝi",
		"En pluraj lingvoj ekzistas adiaŭ-vortumoj kun la radiko ‘vidi’ (angle: <i>see you</i>)<i>,</i> ofte uzante refleksivon<i></i> (germane: <i>Wir sehen uns</i>, dane: <i>vi ses</i>). Sed en Esperanto, la gramatike ekvivalenta <i>‘(re)vidiĝi’</i> nur signifas ‘(re)aperi’, do fariĝi videbla, kaj <i>‘vidi sin’</i> estas ambigua kun ‘vidi sin mem’ (en ekz. spegulo).<br>\n<br>\nEn adiaŭa/renkontiĝa kunteksto tial estas preferinde diri <i>‘</i><b><i>intervidiĝi</i></b><i>’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>vidiĝi</i></span><i>’,</i> kiel proponas kaj PIV kaj ReVo), kaj eble <i>‘renkontiĝi’</i> aŭ <i>‘vidi unu la alian’</i> anstataŭ <i>‘vidi sin’.</i> La unua tamen fariĝas tre peza kun la prefikso <i>‘re-’: reintervidiĝi/o</i> (germane: Wiedersehen, dane: <i>gensyn</i>). Konsideru uzi <i>‘(re)renkontiĝi/o’.</i><br>\n<br>\nNotu la senrefleksivan escepton en la adiaŭa saluto <i>‘ĝis la revido’,</i> kaj evitu verban uzon: <i>‘… ĝis ni</i> <span style=\"color: #ff0000\"><i>revidos</i></span><i>.</i> Necesas diri <i>‘ĝis ni revidos unu la alian’, ‘ĝis ni denove/ree intervidiĝos/renkontiĝos’.</i>",
		"Kiam ni <span style=\"color: #ff0000\">vidiĝos</span> (intervidiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">vidos nin</span> (vidos unu la alian / renkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidiĝos</span> (rerenkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidos</span> (rerenkontiĝos)?"
	],
	"£:BASE-rerenkontigxi": [
		"£:BASE-rerenkontigxi",
		"Falsa amiko: vidiĝi, vidi sin ↔ intervidigxi, renkontiĝi",
		"En pluraj lingvoj ekzistas adiaŭ-vortumoj kun la radiko ‘vidi’ (angle: <i>see you</i>)<i>,</i> ofte uzante refleksivon<i></i> (germane: <i>Wir sehen uns</i>, dane: <i>vi ses</i>). Sed en Esperanto, la gramatike ekvivalenta <i>‘(re)vidiĝi’</i> nur signifas ‘(re)aperi’, do fariĝi videbla, kaj <i>‘vidi sin’</i> estas ambigua kun ‘vidi sin mem’ (en ekz. spegulo).<br>\n<br>\nEn adiaŭa/renkontiĝa kunteksto tial estas preferinde diri <i>‘</i><b><i>intervidiĝi</i></b><i>’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>vidiĝi</i></span><i>’,</i> kiel proponas kaj PIV kaj ReVo), kaj eble <i>‘renkontiĝi’</i> aŭ <i>‘vidi unu la alian’</i> anstataŭ <i>‘vidi sin’.</i> La unua tamen fariĝas tre peza kun la prefikso <i>‘re-’: reintervidiĝi/o</i> (germane: Wiedersehen, dane: <i>gensyn</i>). Konsideru uzi <i>‘(re)renkontiĝi/o’.</i><br>\n<br>\nNotu la senrefleksivan escepton en la adiaŭa saluto <i>‘ĝis la revido’,</i> kaj evitu verban uzon: <i>‘… ĝis ni</i> <span style=\"color: #ff0000\"><i>revidos</i></span><i>.</i> Necesas diri <i>‘ĝis ni revidos unu la alian’, ‘ĝis ni denove/ree intervidiĝos/renkontiĝos’.</i>",
		"Kiam ni <span style=\"color: #ff0000\">vidiĝos</span> (intervidiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">vidos nin</span> (vidos unu la alian / renkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidiĝos</span> (rerenkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidos</span> (rerenkontiĝos)?"
	],
	"£:BASE-renkontigxo&\"<vid.*>\"": [
		"£:BASE-renkontigxo&\"<vid.*>\"",
		"Falsa amiko: vidiĝi, vidi sin ↔ intervidigxi, renkontiĝi",
		"En pluraj lingvoj ekzistas adiaŭ-vortumoj kun la radiko ‘vidi’ (angle: <i>see you</i>)<i>,</i> ofte uzante refleksivon<i></i> (germane: <i>Wir sehen uns</i>, dane: <i>vi ses</i>). Sed en Esperanto, la gramatike ekvivalenta <i>‘(re)vidiĝi’</i> nur signifas ‘(re)aperi’, do fariĝi videbla, kaj <i>‘vidi sin’</i> estas ambigua kun ‘vidi sin mem’ (en ekz. spegulo).<br>\n<br>\nEn adiaŭa/renkontiĝa kunteksto tial estas preferinde diri <i>‘</i><b><i>intervidiĝi</i></b><i>’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>vidiĝi</i></span><i>’,</i> kiel proponas kaj PIV kaj ReVo), kaj eble <i>‘renkontiĝi’</i> aŭ <i>‘vidi unu la alian’</i> anstataŭ <i>‘vidi sin’.</i> La unua tamen fariĝas tre peza kun la prefikso <i>‘re-’: reintervidiĝi/o</i> (germane: Wiedersehen, dane: <i>gensyn</i>). Konsideru uzi <i>‘(re)renkontiĝi/o’.</i><br>\n<br>\nNotu la senrefleksivan escepton en la adiaŭa saluto <i>‘ĝis la revido’,</i> kaj evitu verban uzon: <i>‘… ĝis ni</i> <span style=\"color: #ff0000\"><i>revidos</i></span><i>.</i> Necesas diri <i>‘ĝis ni revidos unu la alian’, ‘ĝis ni denove/ree intervidiĝos/renkontiĝos’.</i>",
		"Kiam ni <span style=\"color: #ff0000\">vidiĝos</span> (intervidiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">vidos nin</span> (vidos unu la alian / renkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidiĝos</span> (rerenkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidos</span> (rerenkontiĝos)?"
	],
	"£:BASE-intervidigxo": [
		"£:BASE-intervidigxo",
		"Falsa amiko: vidiĝi, vidi sin ↔ intervidigxi, renkontiĝi",
		"En pluraj lingvoj ekzistas adiaŭ-vortumoj kun la radiko ‘vidi’ (angle: <i>see you</i>)<i>,</i> ofte uzante refleksivon<i></i> (germane: <i>Wir sehen uns</i>, dane: <i>vi ses</i>). Sed en Esperanto, la gramatike ekvivalenta <i>‘(re)vidiĝi’</i> nur signifas ‘(re)aperi’, do fariĝi videbla, kaj <i>‘vidi sin’</i> estas ambigua kun ‘vidi sin mem’ (en ekz. spegulo).<br>\n<br>\nEn adiaŭa/renkontiĝa kunteksto tial estas preferinde diri <i>‘</i><b><i>intervidiĝi</i></b><i>’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>vidiĝi</i></span><i>’,</i> kiel proponas kaj PIV kaj ReVo), kaj eble <i>‘renkontiĝi’</i> aŭ <i>‘vidi unu la alian’</i> anstataŭ <i>‘vidi sin’.</i> La unua tamen fariĝas tre peza kun la prefikso <i>‘re-’: reintervidiĝi/o</i> (germane: Wiedersehen, dane: <i>gensyn</i>). Konsideru uzi <i>‘(re)renkontiĝi/o’.</i><br>\n<br>\nNotu la senrefleksivan escepton en la adiaŭa saluto <i>‘ĝis la revido’,</i> kaj evitu verban uzon: <i>‘… ĝis ni</i> <span style=\"color: #ff0000\"><i>revidos</i></span><i>.</i> Necesas diri <i>‘ĝis ni revidos unu la alian’, ‘ĝis ni denove/ree intervidiĝos/renkontiĝos’.</i>",
		"Kiam ni <span style=\"color: #ff0000\">vidiĝos</span> (intervidiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">vidos nin</span> (vidos unu la alian / renkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidiĝos</span> (rerenkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidos</span> (rerenkontiĝos)?"
	],
	"£:BASE-rerenkontigxo": [
		"£:BASE-rerenkontigxo",
		"Falsa amiko: vidiĝi, vidi sin ↔ intervidigxi, renkontiĝi",
		"En pluraj lingvoj ekzistas adiaŭ-vortumoj kun la radiko ‘vidi’ (angle: <i>see you</i>)<i>,</i> ofte uzante refleksivon<i></i> (germane: <i>Wir sehen uns</i>, dane: <i>vi ses</i>). Sed en Esperanto, la gramatike ekvivalenta <i>‘(re)vidiĝi’</i> nur signifas ‘(re)aperi’, do fariĝi videbla, kaj <i>‘vidi sin’</i> estas ambigua kun ‘vidi sin mem’ (en ekz. spegulo).<br>\n<br>\nEn adiaŭa/renkontiĝa kunteksto tial estas preferinde diri <i>‘</i><b><i>intervidiĝi</i></b><i>’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>vidiĝi</i></span><i>’,</i> kiel proponas kaj PIV kaj ReVo), kaj eble <i>‘renkontiĝi’</i> aŭ <i>‘vidi unu la alian’</i> anstataŭ <i>‘vidi sin’.</i> La unua tamen fariĝas tre peza kun la prefikso <i>‘re-’: reintervidiĝi/o</i> (germane: Wiedersehen, dane: <i>gensyn</i>). Konsideru uzi <i>‘(re)renkontiĝi/o’.</i><br>\n<br>\nNotu la senrefleksivan escepton en la adiaŭa saluto <i>‘ĝis la revido’,</i> kaj evitu verban uzon: <i>‘… ĝis ni</i> <span style=\"color: #ff0000\"><i>revidos</i></span><i>.</i> Necesas diri <i>‘ĝis ni revidos unu la alian’, ‘ĝis ni denove/ree intervidiĝos/renkontiĝos’.</i>",
		"Kiam ni <span style=\"color: #ff0000\">vidiĝos</span> (intervidiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">vidos nin</span> (vidos unu la alian / renkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidiĝos</span> (rerenkontiĝos)?<br>\n<br>\nKiam ni <span style=\"color: #ff0000\">revidos</span> (rerenkontiĝos)?"
	],
	"£:BASE-furora&\"<virus.*>\"": [
		"£:BASE-furora&\"<virus.*>\"",
		"Falsa amiko: virusa → furora",
		"En Esperanto ne estas kutime uzi virusan metaforon por esprimi, kie io aŭ iu estas tre laŭmoda kaj pasie disvastigata. Por tio oni uzas la radikon <i>‘furor-’:</i><br>\n<br>\n<i>La kanto furoris. Ĝi estis vera furorkanto.</i><br>\n<br>\nSe entute, uzu <i>‘virusuma’</i> estas pli bona por tiu signifo ol <i>‘viruseca’,</i> dum <i>‘virusa’</i> estas medicina vorto kaj evitinda ĉi tie.<br>\n<br>\n<i>Lia jutubaĵo fariĝis ege</i> <span style=\"color: #c9211e\"><i>virusa</i></span><i> (furora).</i>",
		""
	],
	"£:BASE-vigla&\"<vital.*>\"": [
		"£:BASE-vigla&\"<vital.*>\"",
		"Falsa amiko: vitala → vigla/grava/vivebla/spirebla",
		"En Esperanto, la adjektivo <i>'vitala'</i> estas limigita al filozofiaj kuntekstoj, distingante vivajn fenomenojn de materiaj. En aliaj kuntekstoj ofte temas pri falsa amiko. Prefere uzu alternativojn:<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> 80-jarulo → vigla 80-jarulo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitalaj</i></span><i> informoj → vivgravaj informoj</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> kapacito → spira kapacito</i> (pri spiraero en fiziologio)<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> spaco → vivebla spaco</i>",
		""
	],
	"£:BASE-movebla&\"<vital.*>\"": [
		"£:BASE-movebla&\"<vital.*>\"",
		"Falsa amiko: vitala → vigla/grava/vivebla/spirebla",
		"En Esperanto, la adjektivo <i>'vitala'</i> estas limigita al filozofiaj kuntekstoj, distingante vivajn fenomenojn de materiaj. En aliaj kuntekstoj ofte temas pri falsa amiko. Prefere uzu alternativojn:<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> 80-jarulo → vigla 80-jarulo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitalaj</i></span><i> informoj → vivgravaj informoj</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> kapacito → spira kapacito</i> (pri spiraero en fiziologio)<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> spaco → vivebla spaco</i>",
		""
	],
	"£:BASE-vivebla&\"<vital.*>\"": [
		"£:BASE-vivebla&\"<vital.*>\"",
		"Falsa amiko: vitala → vigla/grava/vivebla/spirebla",
		"En Esperanto, la adjektivo <i>'vitala'</i> estas limigita al filozofiaj kuntekstoj, distingante vivajn fenomenojn de materiaj. En aliaj kuntekstoj ofte temas pri falsa amiko. Prefere uzu alternativojn:<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> 80-jarulo → vigla 80-jarulo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitalaj</i></span><i> informoj → vivgravaj informoj</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> kapacito → spira kapacito</i> (pri spiraero en fiziologio)<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> spaco → vivebla spaco</i>",
		""
	],
	"£:BASE-vivgrava&\"<vital.*>\"": [
		"£:BASE-vivgrava&\"<vital.*>\"",
		"Falsa amiko: vitala → vigla/grava/vivebla/spirebla",
		"En Esperanto, la adjektivo <i>'vitala'</i> estas limigita al filozofiaj kuntekstoj, distingante vivajn fenomenojn de materiaj. En aliaj kuntekstoj ofte temas pri falsa amiko. Prefere uzu alternativojn:<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> 80-jarulo → vigla 80-jarulo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitalaj</i></span><i> informoj → vivgravaj informoj</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> kapacito → spira kapacito</i> (pri spiraero en fiziologio)<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> spaco → vivebla spaco</i>",
		""
	],
	"£:BASE-vivforta&\"<vital.*>\"": [
		"£:BASE-vivforta&\"<vital.*>\"",
		"Falsa amiko: vitala → vigla/grava/vivebla/spirebla",
		"En Esperanto, la adjektivo <i>'vitala'</i> estas limigita al filozofiaj kuntekstoj, distingante vivajn fenomenojn de materiaj. En aliaj kuntekstoj ofte temas pri falsa amiko. Prefere uzu alternativojn:<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> 80-jarulo → vigla 80-jarulo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitalaj</i></span><i> informoj → vivgravaj informoj</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> kapacito → spira kapacito</i> (pri spiraero en fiziologio)<br>\n<br>\n<span style=\"color: #ff0000\"><i>vitala</i></span><i> spaco → vivebla spaco</i>",
		""
	],
	"£:BASE-realtempa&\"<vivaj?n?>": [
		"£:BASE-realtempa&\"<vivaj?n?>",
		"Falsa amiko: viva → realtempa",
		"Nur homoj, bestoj kaj plantoj povas esti striktasence <i>vivaj.</i> Metafore aliaj aferoj povas esti vivaj en la senco de <i>‘viveca’</i> (angle: <i>lively</i>) kaj eble <i>‘moviĝanta’.</i> Se uzi la vorton kun la signifo ‘ne surbendigita’ (ekz. koncerto) estas iom nelogika falsa amiko. Konsideru uzi <i>‘realtempa’</i> anstataŭe, aŭ <i>‘ĉeesta’,</i> eble <i>senpera’, ‘aktuala’,</i> depende de la kunteksto.",
		"Mi preferas <span style=\"color: #ff0000\">vivan</span> (ĉeestan) muzikon al surbendigoj."
	],
	"£:BASE-vocxdoni": [
		"£:BASE-vocxdoni",
		"Falsa amiko: voĉi → voĉdoni",
		"En moderna Esperanto, <i>'voĉi'</i> estas (malofta) sinonimo de <i>'diri'.</i> La signifo de <i>'voĉdoni'</i> estas arkaika, laŭ PIV.",
		"Venontfoje mi <span style=\"color: #ff0000\">voĉos</span> (voĉdonos) por alia partio."
	],
	"£:BASE-ordinara&\"<vulgaraj?n?>\"": [
		"£:BASE-ordinara&\"<vulgaraj?n?>\"",
		"Falsa amiko: vulgara – ordinara – popularigi",
		"La kerna signifo de <i>‘vulgara’</i> en Esperanto estas ‘malbontona/malbongusta’, kaj la vorto ĉiam estas negativa. Prefere ne uzu ĝin en la senco <i>‘ordinara/komuna’.</i> Tiu uzo venas de la latinepoka ligo inter ‘komuna/popola’ kaj ‘pleba/senkultura’ kaj facile povas krei ambiguecon kaj miskomprenojn, precipe en la komunikado kun ne-eŭropanoj.<br>\n<br>\nTio ankaŭ validas por la verbo <i>‘vulgarigi’,</i> kies kerna signifo kaj tono estas negativaj.<i></i> Prefere ne uzu ĝin en la (neŭtra aŭ pozitiva) senco <i>‘popularigi’.</i>",
		"Ili vivas en tute <span style=\"color: #ff0000\">vulgara</span> (ordinara) domo."
	],
	"£:BASE-popularigi&\"<vulgarig.*>": [
		"£:BASE-popularigi&\"<vulgarig.*>",
		"Falsa amiko: vulgara – ordinara – popularigi",
		"La kerna signifo de <i>‘vulgara’</i> en Esperanto estas ‘malbontona/malbongusta’, kaj la vorto ĉiam estas negativa. Prefere ne uzu ĝin en la senco <i>‘ordinara/komuna’.</i> Tiu uzo venas de la latinepoka ligo inter ‘komuna/popola’ kaj ‘pleba/senkultura’ kaj facile povas krei ambiguecon kaj miskomprenojn, precipe en la komunikado kun ne-eŭropanoj.<br>\n<br>\nTio ankaŭ validas por la verbo <i>‘vulgarigi’,</i> kies kerna signifo kaj tono estas negativaj.<i></i> Prefere ne uzu ĝin en la (neŭtra aŭ pozitiva) senco <i>‘popularigi’.</i>",
		"Ili vivas en tute <span style=\"color: #ff0000\">vulgara</span> (ordinara) domo."
	],
	"£:BASE-socia&\"<social.*>\"": [
		"£:BASE-socia&\"<social.*>\"",
		"False frient / konfuzebla vortoparo: sociala → socia",
		"La adjektivo <i>'sociala'</i> celas la kvaliton de la vivkondiĉoj de civitanoj. <i>'Socia'</i> estas pli neŭtrala vorto kaj simple informas, ke temas pri la socio, la ŝtata komunumo. La diferenco ankaŭ videblas en kunmetaĵoj – do <i>'socipsikologio',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>socialpsikologio</i></span><i>',</i> kaj <i>'socialhelpo',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>socihelpo</i></span><i>'.</i>",
		"Ili apartenas al malsamaj <span style=\"color: #ff0000\">socialaj</span> (sociaj) klasoj."
	],
	"£x-etype-lemma&\"<social.*>\"&\"soci[^a].*\"": [
		"£x-etype-lemma&\"<social.*>\"&\"soci[^a].*\"",
		"False frient / konfuzebla vortoparo: sociala → socia",
		"La adjektivo <i>'sociala'</i> celas la kvaliton de la vivkondiĉoj de civitanoj. <i>'Socia'</i> estas pli neŭtrala vorto kaj simple informas, ke temas pri la socio, la ŝtata komunumo. La diferenco ankaŭ videblas en kunmetaĵoj – do <i>'socipsikologio',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>socialpsikologio</i></span><i>',</i> kaj <i>'socialhelpo',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>socihelpo</i></span><i>'.</i>",
		"Ili apartenas al malsamaj <span style=\"color: #ff0000\">socialaj</span> (sociaj) klasoj."
	],
	"£x-etype-lemma&\"<soci[^a].*>\"&\"social.*\"": [
		"£x-etype-lemma&\"<soci[^a].*>\"&\"social.*\"",
		"False frient / konfuzebla vortoparo: sociala → socia",
		"La adjektivo <i>'sociala'</i> celas la kvaliton de la vivkondiĉoj de civitanoj. <i>'Socia'</i> estas pli neŭtrala vorto kaj simple informas, ke temas pri la socio, la ŝtata komunumo. La diferenco ankaŭ videblas en kunmetaĵoj – do <i>'socipsikologio',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>socialpsikologio</i></span><i>',</i> kaj <i>'socialhelpo',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>socihelpo</i></span><i>'.</i>",
		"Ili apartenas al malsamaj <span style=\"color: #ff0000\">socialaj</span> (sociaj) klasoj."
	],
	"£nil&\"<gxi>\"": [
		"£nil&\"<gxi>\"",
		"Formala subjekto: ĝi",
		"Esperanto, male al la ĝermanaj lingvoj, ne uzas formalan subjekton. Ĉi tie la plej simpla korekto estas forstreki la pronomon <i>‘ĝi’.</i>",
		"La idealo de EU estas samrajtaj lingvoj, sed en la realo <span style=\"color: #ff0000\">[ĝi]</span> ne estas tiel."
	],
	"£nil&\"<a>\".*&<ACC": [
		"£nil&\"<a>\".*&<ACC",
		"Hispanismo: a + acc",
		"La litero <i>‘a’</i> estas erara ĉi tie, Lingvohelpilo proponas forigi ĉin. Eble vi celis la artikolon <i>‘la’</i> aŭ la prepozicion <i>‘al’,</i> sed la konteksto ne klare subtenas tion. Povas esti, ke temas pri hispanismo – markado de akuzativo uzante la (hispanan) prepozicio <i>‘a’.</i>",
		"Mia filino banis <span style=\"color: #ff0000\">[a]</span> sian hundinon kun la hoso ."
	],
	"£:BASE-interna": [
		"£:BASE-interna",
		"Konfuza vortoparo: intera → interna",
		"'Intera' signifas 'estante inter du aferoj' (ekz. 'intera periodo', 'intera kategorio'). La vorto foje konfuziĝas kun <i>'interna'</i> (ena), kredeble ĉar ties malo, <i>'ekstera',</i> ne enhavas 'n' post la 'r'.<br>\n<br>\nNotu ankaŭ, ke estas falsa amiko uzi <i>'intera'</i> (aŭ <i>'entera</i>') en la senco de <i>'tuta'.</i>",
		"Sed la seruro ne funkciis, ĉar ĝi tiom rustiĝis, ke la <span style=\"color: #ff0000\">intera</span> (interna) mekanismo ne plu moveblis.<br>\n<br>\nIliaj koloj povas turniĝi 270 gradojn por vidi en aliaj direktoj sen movi siajn <span style=\"color: #ff0000\">enterajn</span> (tutajn) korpojn."
	],
	"£:BASE-tuta&\"<[ie]nteraj?n?>\"": [
		"£:BASE-tuta&\"<[ie]nteraj?n?>\"",
		"Konfuza vortoparo: intera → interna",
		"'Intera' signifas 'estante inter du aferoj' (ekz. 'intera periodo', 'intera kategorio'). La vorto foje konfuziĝas kun <i>'interna'</i> (ena), kredeble ĉar ties malo, <i>'ekstera',</i> ne enhavas 'n' post la 'r'.<br>\n<br>\nNotu ankaŭ, ke estas falsa amiko uzi <i>'intera'</i> (aŭ <i>'entera</i>') en la senco de <i>'tuta'.</i>",
		"Sed la seruro ne funkciis, ĉar ĝi tiom rustiĝis, ke la <span style=\"color: #ff0000\">intera</span> (interna) mekanismo ne plu moveblis.<br>\n<br>\nIliaj koloj povas turniĝi 270 gradojn por vidi en aliaj direktoj sen movi siajn <span style=\"color: #ff0000\">enterajn</span> (tutajn) korpojn."
	],
	"£:BASE-granato": [
		"£:BASE-granato",
		"Konfuzebla vortgrupo: granato ↔ grenato ↔ grenado",
		"En Esperanto oni distingas inter tri radikoj, kiuj en kelkaj lingvoj ĉiuj estas ‘granat’. <i>‘Granato’</i> mem estas ruĝa arbofrukto, ene kun multaj eroj. <i>‘grenato’</i> estas juvelmineralo, kaj <i>‘grenado’</i> estas manĵetebla eksplodaĵo.",
		"<i>La</i> <span style=\"color: #ff0000\"><i>granato</i></span><i> (grenado) eksplodis en la moskeo.</i><br>\n<br>\n<i>Suko el</i> <span style=\"color: #ff0000\"><i>grenatoj</i></span><i> (granatoj) estas tre bongusta.</i><br>\n<br>\n<i>La broĉo del bluzo estis el ĉeĥaj</i> <span style=\"color: #ff0000\"><i>granatoj</i></span><i> (grenatoj).</i>"
	],
	"£:BASE-grenato": [
		"£:BASE-grenato",
		"Konfuzebla vortgrupo: granato ↔ grenato ↔ grenado",
		"En Esperanto oni distingas inter tri radikoj, kiuj en kelkaj lingvoj ĉiuj estas ‘granat’. <i>‘Granato’</i> mem estas ruĝa arbofrukto, ene kun multaj eroj. <i>‘grenato’</i> estas juvelmineralo, kaj <i>‘grenado’</i> estas manĵetebla eksplodaĵo.",
		"<i>La</i> <span style=\"color: #ff0000\"><i>granato</i></span><i> (grenado) eksplodis en la moskeo.</i><br>\n<br>\n<i>Suko el</i> <span style=\"color: #ff0000\"><i>grenatoj</i></span><i> (granatoj) estas tre bongusta.</i><br>\n<br>\n<i>La broĉo del bluzo estis el ĉeĥaj</i> <span style=\"color: #ff0000\"><i>granatoj</i></span><i> (grenatoj).</i>"
	],
	"£:BASE-grenado": [
		"£:BASE-grenado",
		"Konfuzebla vortgrupo: granato ↔ grenato ↔ grenado",
		"En Esperanto oni distingas inter tri radikoj, kiuj en kelkaj lingvoj ĉiuj estas ‘granat’. <i>‘Granato’</i> mem estas ruĝa arbofrukto, ene kun multaj eroj. <i>‘grenato’</i> estas juvelmineralo, kaj <i>‘grenado’</i> estas manĵetebla eksplodaĵo.",
		"<i>La</i> <span style=\"color: #ff0000\"><i>granato</i></span><i> (grenado) eksplodis en la moskeo.</i><br>\n<br>\n<i>Suko el</i> <span style=\"color: #ff0000\"><i>grenatoj</i></span><i> (granatoj) estas tre bongusta.</i><br>\n<br>\n<i>La broĉo del bluzo estis el ĉeĥaj</i> <span style=\"color: #ff0000\"><i>granatoj</i></span><i> (grenatoj).</i>"
	],
	"£:BASE-grafikajxo": [
		"£:BASE-grafikajxo",
		"Konfuzebla vortogrupo grafo/grafiko → grafikaĵo/grafismo",
		"En Esperanto, <i>'grafiko'</i> estas la arto reprezenti ion per linia desegnaĵo. La desegnaĵo mem nomiĝas <i>'grafikaĵo'.</i> La falsa amiko <i>'grafo'</i> estas, en Esperanto, nobela titolo.<br>\n<br>\nNotu ankaŭ, ke se vi celas skribsistemo, prefere uzu <i>'grafismo'.</i>",
		"Vidu la <span style=\"color: #ff0000\">grafikon</span> (grafikaĵon) sur paĝo 5"
	],
	"£:BASE-grafismo": [
		"£:BASE-grafismo",
		"Konfuzebla vortogrupo grafo/grafiko → grafikaĵo/grafismo",
		"En Esperanto, <i>'grafiko'</i> estas la arto reprezenti ion per linia desegnaĵo. La desegnaĵo mem nomiĝas <i>'grafikaĵo'.</i> La falsa amiko <i>'grafo'</i> estas, en Esperanto, nobela titolo.<br>\n<br>\nNotu ankaŭ, ke se vi celas skribsistemo, prefere uzu <i>'grafismo'.</i>",
		"Vidu la <span style=\"color: #ff0000\">grafikon</span> (grafikaĵon) sur paĝo 5"
	],
	"£:BASE-finia&\"<finitaj?n?>\"": [
		"£:BASE-finia&\"<finitaj?n?>\"",
		"Konfuzebla vortogrupo: finia – finita – limigita – senlima",
		"'Finia’ estas matematika termino kaj signifas ‘numerebla’ aŭ \"ne senlima\" (angle: <i>finite</i>). PIV donas la unuan difinon, ReVo la duan. Estas arkaismo uzi la participon <i>‘finita’</i> kun tiu sencoj. Notu tamen, ke por la dua senco ankaŭ la ĝenerala vorto ‘<i>limigita</i>’ tute bone taŭgas, same kiel <i>‘nefinia’</i> povas esti <i>‘senlima’</i>.<br>\n<br>\nNotu ankaŭ, ke en gramatiko oni ne uzas <i>‘finia’,</i> sed <i>‘finita’: ‘finita/nefinita verbo’</i>",
		"La funkcio havas nur <span style=\"color: #ff0000\">finitajn</span> (finiajn) valorojn.<br>\n<br>\nLa tero havas nur <span style=\"color: #ff0000\">finiajn</span> (limigitajn) resursojn.<br>\n<br>\n<span style=\"color: #ff0000\">Finiaj</span> (finitaj) verboj en Esperanto finiĝas per -as, -is, -os, -us aŭ -u."
	],
	"£:BASE-finita": [
		"£:BASE-finita",
		"Konfuzebla vortogrupo: finia – finita – limigita – senlima",
		"'Finia’ estas matematika termino kaj signifas ‘numerebla’ aŭ \"ne senlima\" (angle: <i>finite</i>). PIV donas la unuan difinon, ReVo la duan. Estas arkaismo uzi la participon <i>‘finita’</i> kun tiu sencoj. Notu tamen, ke por la dua senco ankaŭ la ĝenerala vorto ‘<i>limigita</i>’ tute bone taŭgas, same kiel <i>‘nefinia’</i> povas esti <i>‘senlima’</i>.<br>\n<br>\nNotu ankaŭ, ke en gramatiko oni ne uzas <i>‘finia’,</i> sed <i>‘finita’: ‘finita/nefinita verbo’</i>",
		"La funkcio havas nur <span style=\"color: #ff0000\">finitajn</span> (finiajn) valorojn.<br>\n<br>\nLa tero havas nur <span style=\"color: #ff0000\">finiajn</span> (limigitajn) resursojn.<br>\n<br>\n<span style=\"color: #ff0000\">Finiaj</span> (finitaj) verboj en Esperanto finiĝas per -as, -is, -os, -us aŭ -u."
	],
	"£:BASE-nefinita": [
		"£:BASE-nefinita",
		"Konfuzebla vortogrupo: finia – finita – limigita – senlima",
		"'Finia’ estas matematika termino kaj signifas ‘numerebla’ aŭ \"ne senlima\" (angle: <i>finite</i>). PIV donas la unuan difinon, ReVo la duan. Estas arkaismo uzi la participon <i>‘finita’</i> kun tiu sencoj. Notu tamen, ke por la dua senco ankaŭ la ĝenerala vorto ‘<i>limigita</i>’ tute bone taŭgas, same kiel <i>‘nefinia’</i> povas esti <i>‘senlima’</i>.<br>\n<br>\nNotu ankaŭ, ke en gramatiko oni ne uzas <i>‘finia’,</i> sed <i>‘finita’: ‘finita/nefinita verbo’</i>",
		"La funkcio havas nur <span style=\"color: #ff0000\">finitajn</span> (finiajn) valorojn.<br>\n<br>\nLa tero havas nur <span style=\"color: #ff0000\">finiajn</span> (limigitajn) resursojn.<br>\n<br>\n<span style=\"color: #ff0000\">Finiaj</span> (finitaj) verboj en Esperanto finiĝas per -as, -is, -os, -us aŭ -u."
	],
	"£:BASE-limigita&\"<finiaj?n?>\"": [
		"£:BASE-limigita&\"<finiaj?n?>\"",
		"Konfuzebla vortogrupo: finia – finita – limigita – senlima",
		"'Finia’ estas matematika termino kaj signifas ‘numerebla’ aŭ \"ne senlima\" (angle: <i>finite</i>). PIV donas la unuan difinon, ReVo la duan. Estas arkaismo uzi la participon <i>‘finita’</i> kun tiu sencoj. Notu tamen, ke por la dua senco ankaŭ la ĝenerala vorto ‘<i>limigita</i>’ tute bone taŭgas, same kiel <i>‘nefinia’</i> povas esti <i>‘senlima’</i>.<br>\n<br>\nNotu ankaŭ, ke en gramatiko oni ne uzas <i>‘finia’,</i> sed <i>‘finita’: ‘finita/nefinita verbo’</i>",
		"La funkcio havas nur <span style=\"color: #ff0000\">finitajn</span> (finiajn) valorojn.<br>\n<br>\nLa tero havas nur <span style=\"color: #ff0000\">finiajn</span> (limigitajn) resursojn.<br>\n<br>\n<span style=\"color: #ff0000\">Finiaj</span> (finitaj) verboj en Esperanto finiĝas per -as, -is, -os, -us aŭ -u."
	],
	"£:BASE-senlima&\"<nefiniaj?n?>\"": [
		"£:BASE-senlima&\"<nefiniaj?n?>\"",
		"Konfuzebla vortogrupo: finia – finita – limigita – senlima",
		"'Finia’ estas matematika termino kaj signifas ‘numerebla’ aŭ \"ne senlima\" (angle: <i>finite</i>). PIV donas la unuan difinon, ReVo la duan. Estas arkaismo uzi la participon <i>‘finita’</i> kun tiu sencoj. Notu tamen, ke por la dua senco ankaŭ la ĝenerala vorto ‘<i>limigita</i>’ tute bone taŭgas, same kiel <i>‘nefinia’</i> povas esti <i>‘senlima’</i>.<br>\n<br>\nNotu ankaŭ, ke en gramatiko oni ne uzas <i>‘finia’,</i> sed <i>‘finita’: ‘finita/nefinita verbo’</i>",
		"La funkcio havas nur <span style=\"color: #ff0000\">finitajn</span> (finiajn) valorojn.<br>\n<br>\nLa tero havas nur <span style=\"color: #ff0000\">finiajn</span> (limigitajn) resursojn.<br>\n<br>\n<span style=\"color: #ff0000\">Finiaj</span> (finitaj) verboj en Esperanto finiĝas per -as, -is, -os, -us aŭ -u."
	],
	"£:BASE-fonduso": [
		"£:BASE-fonduso",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fundo": [
		"£:BASE-fundo",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fono": [
		"£:BASE-fono",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fonto": [
		"£:BASE-fonto",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fondajxo": [
		"£:BASE-fondajxo",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fondo": [
		"£:BASE-fondo",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fontano": [
		"£:BASE-fontano",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-fondi": [
		"£:BASE-fondi",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£x-etype-lemma&\"<fonbildo.*>\"": [
		"£x-etype-lemma&\"<fonbildo.*>\"",
		"Konfuzebla vortogrupo: fondo ↔fundo ↔ fonto/fontano ↔ fonduso/fondaĵo",
		"Eblas konfuzi la vorton <i>‘fondo’</i> kun<i> ‘fundo’, 'fono', ‘fonto’/’fontano’</i> kaj <i>‘fonduso’/’fondaĵo’,</i> kaj depende de la gepatra lingvo ankaŭ povas ekzisti falsaj amikoj en tiu vortogrupo.<br>\n<br>\n<i>‘</i><b><i>Fondo</i></b><i>’</i> mem estas ago kaj venas de la verbo <i>‘fondi’</i> (angle: <i>found</i>), do temas pri la estigo de ekz. asocio, urbo aŭ ĝuste <i>fondaĵo</i>.<br>\n<br>\n<i>‘</i><b><i>Fundo</i></b><i>’</i> estas la vertikale plej malsupra aŭ horizontale plej malantaŭa parto de io kava, ekz. de glaso, botelo (angle: <i>bottom</i>), kaverno, ĉambro aŭ koridoro (angle: <i>far end</i>).<br>\n<br>\n<b><i>'Fono'</i> </b>estas kion oni vidas malantaŭe aŭ fore, kontraste al la fokusita aŭ reliefigita objekto, ankaŭ en figura senco.<br>\n<br>\n<i>‘</i><b><i>Fonto</i></b><i>’</i> estas la origino de akvofluo (angle: <i>source, well</i>), lumo ktp., aŭ figursence de informoj. Notu, ke por artefarita ŝprucakv(ej)o ekzistas aparta vorto, <i>‘</i><b><i>fontano</i></b><i>’</i> (angle: <i>fountain</i>).<br>\n<br>\n<i>‘</i><b><i>Fonduso</i></b><i>’</i> kaj <i>‘</i><b><i>fondaĵo</i></b><i>’</i>, fine, estas finance-juraj terminoj. <i>‘Fonduso’</i> estas kapitalo jure destinita al specifa celo (angle: <i>fund</i>), kaj tipe administrata de asocio, firmao aŭ ĝuste <i>‘fondaĵo’,</i> t.e. fondusadministra asocio (angle: <i>foundation)</i>. La lingvouzo tamen ne klare distingas inter <i>fonduso</i> kaj <i>fondaĵo,</i> kaj ambaŭ povas havi nomojn kaj statutojn, fari decidojn, agi publike ktp. Eventuale preferu <i>‘fondaĵo’,</i> se temas pri vera (ekz. bonfara) asocio, kun dungitoj, estraro, jarkunveno ktp., rezervante la vorton <i>‘fonduso’</i> por \"monpotoj\", do la rezervita kapitalo. Se oni faras la proponitan distingon, fondaĵo povas havi (unu aŭ plurajn) fonduso(j)n, sed ne inverse.",
		"La <span style=\"color: #ff0000\">fondo</span> (fundo) de la kaverno estis tute malhela.<br>\n<br>\nInter la rokoj plaŭdis eta <span style=\"color: #ff0000\">fondo</span> (fonto).<br>\n<br>\nLa abonhelpa <span style=\"color: #ff0000\">fondo</span> (fonduso) de Monato pagos por vi.<br>\n<br>\nLi laboras por naturprotekta <span style=\"color: #ff0000\">fondo</span> (fondaĵo).<br>\n<br>\n<i>UEA estis</i> <span style=\"color: #ff0000\"><i>fundita</i></span><i> (fondita) en 1908.</i>"
	],
	"£:BASE-glacio": [
		"£:BASE-glacio",
		"Konfuzebla vortogrupo: glaco → glacio ↔ glaciaĵo → glaĉero",
		"Ekzistas en Esperanto manpleno da substantivoj bazitaj sur la romanida radiko ‘glac’. La kerna vorto estas <i>‘glacio’</i> (frostigita akvo). Sed manĝebla glacio nomiĝas <i>‘glaciaĵo’,</i> kaj granda pejzaĝa glacio-maso nomiĝas <i>‘glaĉero’.</i> Krome ekzistas la vorto <i>‘glaco’</i> por glacie glata, travidebla plata vitropeco en ekz. fenestro en domo aŭ veturilo. Precipe <i>‘glace’</i> kaŭzas falsamikan uzon, antataŭ <i>‘glacio’</i> aŭ <i>‘glaciaĵo’.</i>",
		"La <span style=\"color: #ff0000\">glacioj</span> (glaĉeroj) degelas en la Himalajo.<br>\n<br>\nEstis bongusta <span style=\"color: #ff0000\">glaco</span> (glaciaĵo).<br>\n<br>\nLa plejparto de Gronlando estas kovrita de 3 kilometroj da <span style=\"color: #ff0000\">glaco</span> (glacio)."
	],
	"£:BASE-glacxero": [
		"£:BASE-glacxero",
		"Konfuzebla vortogrupo: glaco → glacio ↔ glaciaĵo → glaĉero",
		"Ekzistas en Esperanto manpleno da substantivoj bazitaj sur la romanida radiko ‘glac’. La kerna vorto estas <i>‘glacio’</i> (frostigita akvo). Sed manĝebla glacio nomiĝas <i>‘glaciaĵo’,</i> kaj granda pejzaĝa glacio-maso nomiĝas <i>‘glaĉero’.</i> Krome ekzistas la vorto <i>‘glaco’</i> por glacie glata, travidebla plata vitropeco en ekz. fenestro en domo aŭ veturilo. Precipe <i>‘glace’</i> kaŭzas falsamikan uzon, antataŭ <i>‘glacio’</i> aŭ <i>‘glaciaĵo’.</i>",
		"La <span style=\"color: #ff0000\">glacioj</span> (glaĉeroj) degelas en la Himalajo.<br>\n<br>\nEstis bongusta <span style=\"color: #ff0000\">glaco</span> (glaciaĵo).<br>\n<br>\nLa plejparto de Gronlando estas kovrita de 3 kilometroj da <span style=\"color: #ff0000\">glaco</span> (glacio)."
	],
	"£:BASE-glaciajxo": [
		"£:BASE-glaciajxo",
		"Konfuzebla vortogrupo: glaco → glacio ↔ glaciaĵo → glaĉero",
		"Ekzistas en Esperanto manpleno da substantivoj bazitaj sur la romanida radiko ‘glac’. La kerna vorto estas <i>‘glacio’</i> (frostigita akvo). Sed manĝebla glacio nomiĝas <i>‘glaciaĵo’,</i> kaj granda pejzaĝa glacio-maso nomiĝas <i>‘glaĉero’.</i> Krome ekzistas la vorto <i>‘glaco’</i> por glacie glata, travidebla plata vitropeco en ekz. fenestro en domo aŭ veturilo. Precipe <i>‘glace’</i> kaŭzas falsamikan uzon, antataŭ <i>‘glacio’</i> aŭ <i>‘glaciaĵo’.</i>",
		"La <span style=\"color: #ff0000\">glacioj</span> (glaĉeroj) degelas en la Himalajo.<br>\n<br>\nEstis bongusta <span style=\"color: #ff0000\">glaco</span> (glaciaĵo).<br>\n<br>\nLa plejparto de Gronlando estas kovrita de 3 kilometroj da <span style=\"color: #ff0000\">glaco</span> (glacio)."
	],
	"£:BASE-humanisma": [
		"£:BASE-humanisma",
		"Konfuzebla vortogrupo: humana → humanisma/sociscienca",
		"La vorto <i>‘humana’</i> signifas ‘homama’, dum <i>‘humanismo’</i> estas homkleriga doktrino kun la helenlatina civilizo kiel idealo. Do diru <i>‘humana traktado / celo / maniero,</i> sed <i>‘humanisma eduko / studo’.</i> Se vi celas universitatan fakon aŭ fakultaton, konsideru ankaŭ <i>‘sociscienca’,</i> kiu inkludas ankaŭ ekz. sociologion kaj antropologion.",
		"Li ebligis al siaj infanoj <span style=\"color: #ff0000\">humanan</span> (humanisman) edukon.<br>\n<br>\nLi studis en la <span style=\"color: #ff0000\">humana</span> (sociscienca) fakultato"
	],
	"£:BASE-sociscienca": [
		"£:BASE-sociscienca",
		"Konfuzebla vortogrupo: humana → humanisma/sociscienca",
		"La vorto <i>‘humana’</i> signifas ‘homama’, dum <i>‘humanismo’</i> estas homkleriga doktrino kun la helenlatina civilizo kiel idealo. Do diru <i>‘humana traktado / celo / maniero,</i> sed <i>‘humanisma eduko / studo’.</i> Se vi celas universitatan fakon aŭ fakultaton, konsideru ankaŭ <i>‘sociscienca’,</i> kiu inkludas ankaŭ ekz. sociologion kaj antropologion.",
		"Li ebligis al siaj infanoj <span style=\"color: #ff0000\">humanan</span> (humanisman) edukon.<br>\n<br>\nLi studis en la <span style=\"color: #ff0000\">humana</span> (sociscienca) fakultato"
	],
	"£:BASE-konduki": [
		"£:BASE-konduki",
		"Konfuzebla vortogrupo: konduki – kondukti – konduti",
		"<i>'Konduki’</i> signifas irigi or alvenigi iun aŭ ion al iu loko aŭ stato (angle: <i>lead</i>). La vorto estas tre ĝenerala – oni povas konduki personon, azenon aŭ aŭton, vojo povas konduki al celo, kaj unu evento povas konduki al alia. Nur en la kampo de fiziko, por elektro kaj ondoj, ekzistas alia, sinonima vorto, <i>‘kondukti’.</i> Oni rajtas (en nefaka kunteksto) uzi <i>‘konduki’</i> anstataŭ <i>‘kondukti’,</i> sed ne inverse.<br>\n<br>\n<i>Li ne scias</i> <span style=\"color: #ff0000\"><i>kondukti</i></span><i> (konduki) aŭton.</i><br>\n<br>\nNotu ankaŭ, ke oni ne <i>konduktas,</i> sed <i>direktas</i> orkestron.<br>\n<br>\nTria konfuzebla vorto estas <i>‘konduti’,</i> uzata pri la maniero, kiel ini (inter)agas en socia kunteksto (angle: <i>behave</i>). La verbo estas netransitiva, kaj ne eblas <i>konduti</i> esploron aŭ diskuton:<br>\n<br>\n<i>La firmao promesis</i> <span style=\"color: #ff0000\"><i>konduti</i></span><i> (realigi) esploron por trovi la kaŭzon de la akcidento.</i>",
		""
	],
	"£:BASE-kondukti": [
		"£:BASE-kondukti",
		"Konfuzebla vortogrupo: konduki – kondukti – konduti",
		"<i>'Konduki’</i> signifas irigi or alvenigi iun aŭ ion al iu loko aŭ stato (angle: <i>lead</i>). La vorto estas tre ĝenerala – oni povas konduki personon, azenon aŭ aŭton, vojo povas konduki al celo, kaj unu evento povas konduki al alia. Nur en la kampo de fiziko, por elektro kaj ondoj, ekzistas alia, sinonima vorto, <i>‘kondukti’.</i> Oni rajtas (en nefaka kunteksto) uzi <i>‘konduki’</i> anstataŭ <i>‘kondukti’,</i> sed ne inverse.<br>\n<br>\n<i>Li ne scias</i> <span style=\"color: #ff0000\"><i>kondukti</i></span><i> (konduki) aŭton.</i><br>\n<br>\nNotu ankaŭ, ke oni ne <i>konduktas,</i> sed <i>direktas</i> orkestron.<br>\n<br>\nTria konfuzebla vorto estas <i>‘konduti’,</i> uzata pri la maniero, kiel ini (inter)agas en socia kunteksto (angle: <i>behave</i>). La verbo estas netransitiva, kaj ne eblas <i>konduti</i> esploron aŭ diskuton:<br>\n<br>\n<i>La firmao promesis</i> <span style=\"color: #ff0000\"><i>konduti</i></span><i> (realigi) esploron por trovi la kaŭzon de la akcidento.</i>",
		""
	],
	"£:BASE-realigi&\"<kondu[kt].*>\"": [
		"£:BASE-realigi&\"<kondu[kt].*>\"",
		"Konfuzebla vortogrupo: konduki – kondukti – konduti",
		"<i>'Konduki’</i> signifas irigi or alvenigi iun aŭ ion al iu loko aŭ stato (angle: <i>lead</i>). La vorto estas tre ĝenerala – oni povas konduki personon, azenon aŭ aŭton, vojo povas konduki al celo, kaj unu evento povas konduki al alia. Nur en la kampo de fiziko, por elektro kaj ondoj, ekzistas alia, sinonima vorto, <i>‘kondukti’.</i> Oni rajtas (en nefaka kunteksto) uzi <i>‘konduki’</i> anstataŭ <i>‘kondukti’,</i> sed ne inverse.<br>\n<br>\n<i>Li ne scias</i> <span style=\"color: #ff0000\"><i>kondukti</i></span><i> (konduki) aŭton.</i><br>\n<br>\nNotu ankaŭ, ke oni ne <i>konduktas,</i> sed <i>direktas</i> orkestron.<br>\n<br>\nTria konfuzebla vorto estas <i>‘konduti’,</i> uzata pri la maniero, kiel ini (inter)agas en socia kunteksto (angle: <i>behave</i>). La verbo estas netransitiva, kaj ne eblas <i>konduti</i> esploron aŭ diskuton:<br>\n<br>\n<i>La firmao promesis</i> <span style=\"color: #ff0000\"><i>konduti</i></span><i> (realigi) esploron por trovi la kaŭzon de la akcidento.</i>",
		""
	],
	"£:BASE-direkti&\"<kondu[kt].*>\"": [
		"£:BASE-direkti&\"<kondu[kt].*>\"",
		"Konfuzebla vortogrupo: konduki – kondukti – konduti",
		"<i>'Konduki’</i> signifas irigi or alvenigi iun aŭ ion al iu loko aŭ stato (angle: <i>lead</i>). La vorto estas tre ĝenerala – oni povas konduki personon, azenon aŭ aŭton, vojo povas konduki al celo, kaj unu evento povas konduki al alia. Nur en la kampo de fiziko, por elektro kaj ondoj, ekzistas alia, sinonima vorto, <i>‘kondukti’.</i> Oni rajtas (en nefaka kunteksto) uzi <i>‘konduki’</i> anstataŭ <i>‘kondukti’,</i> sed ne inverse.<br>\n<br>\n<i>Li ne scias</i> <span style=\"color: #ff0000\"><i>kondukti</i></span><i> (konduki) aŭton.</i><br>\n<br>\nNotu ankaŭ, ke oni ne <i>konduktas,</i> sed <i>direktas</i> orkestron.<br>\n<br>\nTria konfuzebla vorto estas <i>‘konduti’,</i> uzata pri la maniero, kiel ini (inter)agas en socia kunteksto (angle: <i>behave</i>). La verbo estas netransitiva, kaj ne eblas <i>konduti</i> esploron aŭ diskuton:<br>\n<br>\n<i>La firmao promesis</i> <span style=\"color: #ff0000\"><i>konduti</i></span><i> (realigi) esploron por trovi la kaŭzon de la akcidento.</i>",
		""
	],
	"£:BASE-konkurso": [
		"£:BASE-konkurso",
		"Konfuzebla vortogrupo: konkuro – konkurso – konkurenco",
		"'Konkurenco’ estas komerca koncepto, dum <i>‘konkurso’</i> estas sporta okazaĵo. Firmaoj povas havi konkurencajn produktojn, sed oni konkuras pri sporta aŭ alia komuna celo aŭ kapablo. <i>‘Konkuri’</i> estas pli ĝenerala ol <i>‘konkurenci’</i> - oni povas diri, ke <i>konkurenco</i> estas <i>komerca konkurado.</i>",
		"<i>La lernejo organizis piedpilkan</i> <span style=\"color: #ff0000\"><i>konkurencon</i></span><i> (konkurson).</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>konkurencaj</i></span><i> (konkuraj) kandidatoj en la elekto ricevis kune malpli ol duonon de la voĉoj.</i>"
	],
	"£:BASE-konkurenco": [
		"£:BASE-konkurenco",
		"Konfuzebla vortogrupo: konkuro – konkurso – konkurenco",
		"'Konkurenco’ estas komerca koncepto, dum <i>‘konkurso’</i> estas sporta okazaĵo. Firmaoj povas havi konkurencajn produktojn, sed oni konkuras pri sporta aŭ alia komuna celo aŭ kapablo. <i>‘Konkuri’</i> estas pli ĝenerala ol <i>‘konkurenci’</i> - oni povas diri, ke <i>konkurenco</i> estas <i>komerca konkurado.</i>",
		"<i>La lernejo organizis piedpilkan</i> <span style=\"color: #ff0000\"><i>konkurencon</i></span><i> (konkurson).</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>konkurencaj</i></span><i> (konkuraj) kandidatoj en la elekto ricevis kune malpli ol duonon de la voĉoj.</i>"
	],
	"£:BASE-konkuri": [
		"£:BASE-konkuri",
		"Konfuzebla vortogrupo: konkuro – konkurso – konkurenco",
		"'Konkurenco’ estas komerca koncepto, dum <i>‘konkurso’</i> estas sporta okazaĵo. Firmaoj povas havi konkurencajn produktojn, sed oni konkuras pri sporta aŭ alia komuna celo aŭ kapablo. <i>‘Konkuri’</i> estas pli ĝenerala ol <i>‘konkurenci’</i> - oni povas diri, ke <i>konkurenco</i> estas <i>komerca konkurado.</i>",
		"<i>La lernejo organizis piedpilkan</i> <span style=\"color: #ff0000\"><i>konkurencon</i></span><i> (konkurson).</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>konkurencaj</i></span><i> (konkuraj) kandidatoj en la elekto ricevis kune malpli ol duonon de la voĉoj.</i>"
	],
	"£:BASE-konkura": [
		"£:BASE-konkura",
		"Konfuzebla vortogrupo: konkuro – konkurso – konkurenco",
		"'Konkurenco’ estas komerca koncepto, dum <i>‘konkurso’</i> estas sporta okazaĵo. Firmaoj povas havi konkurencajn produktojn, sed oni konkuras pri sporta aŭ alia komuna celo aŭ kapablo. <i>‘Konkuri’</i> estas pli ĝenerala ol <i>‘konkurenci’</i> - oni povas diri, ke <i>konkurenco</i> estas <i>komerca konkurado.</i>",
		"<i>La lernejo organizis piedpilkan</i> <span style=\"color: #ff0000\"><i>konkurencon</i></span><i> (konkurson).</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>konkurencaj</i></span><i> (konkuraj) kandidatoj en la elekto ricevis kune malpli ol duonon de la voĉoj.</i>"
	],
	"£:BASE-benzino": [
		"£:BASE-benzino",
		"Konfuzebla vortogrupo: nafto – petrolo – benzino",
		"Oni pumpas <i>nafton</i> el la tero por ekstrakti el ĝi <i>petrolon</i> (mineralan oleon). <i>‘Benzino’</i> estas speciala petrola produkto por aŭtoj, dum la kruda <i>petrolo</i> ankaŭ estas uzata en la kemia industrio, kaj kiel brulpetrolo en lampoj, por hejti ktp. Estas falsa amiko uzi la superterminon <i>‘oleo’</i> anstataŭ la pli preciza <i>‘nafto’</i> por la kruda, fosila substanco suprenpumpita el la tero.",
		"Ni bezonas pli da <span style=\"color: #ff0000\">petrolo</span> (benzino) por nia aŭto.<br>\n<br>\nSub la maro troviĝas grandaj rezervoj de <span style=\"color: #ff0000\">petrolo</span> (nafto)."
	],
	"£:BASE-nafto": [
		"£:BASE-nafto",
		"Konfuzebla vortogrupo: nafto – petrolo – benzino",
		"Oni pumpas <i>nafton</i> el la tero por ekstrakti el ĝi <i>petrolon</i> (mineralan oleon). <i>‘Benzino’</i> estas speciala petrola produkto por aŭtoj, dum la kruda <i>petrolo</i> ankaŭ estas uzata en la kemia industrio, kaj kiel brulpetrolo en lampoj, por hejti ktp. Estas falsa amiko uzi la superterminon <i>‘oleo’</i> anstataŭ la pli preciza <i>‘nafto’</i> por la kruda, fosila substanco suprenpumpita el la tero.",
		"Ni bezonas pli da <span style=\"color: #ff0000\">petrolo</span> (benzino) por nia aŭto.<br>\n<br>\nSub la maro troviĝas grandaj rezervoj de <span style=\"color: #ff0000\">petrolo</span> (nafto)."
	],
	"£:BASE-petrolo": [
		"£:BASE-petrolo",
		"Konfuzebla vortogrupo: nafto – petrolo – benzino",
		"Oni pumpas <i>nafton</i> el la tero por ekstrakti el ĝi <i>petrolon</i> (mineralan oleon). <i>‘Benzino’</i> estas speciala petrola produkto por aŭtoj, dum la kruda <i>petrolo</i> ankaŭ estas uzata en la kemia industrio, kaj kiel brulpetrolo en lampoj, por hejti ktp. Estas falsa amiko uzi la superterminon <i>‘oleo’</i> anstataŭ la pli preciza <i>‘nafto’</i> por la kruda, fosila substanco suprenpumpita el la tero.",
		"Ni bezonas pli da <span style=\"color: #ff0000\">petrolo</span> (benzino) por nia aŭto.<br>\n<br>\nSub la maro troviĝas grandaj rezervoj de <span style=\"color: #ff0000\">petrolo</span> (nafto)."
	],
	"£:BASE-numeri": [
		"£:BASE-numeri",
		"Konfuzebla vortogrupo: nombro – numero – cifero",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-nombri": [
		"£:BASE-nombri",
		"Konfuzebla vortogrupo: nombro – numero – cifero",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-listigi&\"<numer.*>\"": [
		"£:BASE-listigi&\"<numer.*>\"",
		"Konfuzebla vortogrupo: nombro – numero – cifero",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-numero": [
		"£:BASE-numero",
		"Konfuzebla vortogrupo: nombro – numero – cifero",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-nombro": [
		"£:BASE-nombro",
		"Konfuzebla vortogrupo: nombro – numero – cifero",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-cifero": [
		"£:BASE-cifero",
		"Konfuzebla vortogrupo: nombro – numero – cifero",
		"Ne konfuzu <i>‘nombri’</i> kaj <i>‘numeri’. ‘Nombri’</i> signifas (a) diri 1, 2 , 3 …, (b) determini kiom da individuoj estas en iu aro, aŭ, pri aro, (c) enhavi certan nombron da individuoj. <i>‘Numeri’</i> signifas ‘doni sinsekvajn nombrojn al la ordigitaj aŭ vicigitaj elementoj en listo aŭ aro’. Oni do nombras partoprenantojn, pomojn aŭ botelojn, sed numeras alineojn, etaĝojn, domojn aŭ versiojn.<br>\n<br>\nNecesas analoge distingi inter <i>‘nombro’</i> kaj <i>‘numero’.</i> La unua, <i>‘nombro’</i> estas la ĝenerala matematika vorto, kaj ankaŭ esprimas kvanton. Dume, <i>‘numero’</i> la lokon er ordigita vico. Krom oni uzas ĝin por indiki ekzempleron de gazeto aŭ lotilon. Tria rilatita vorto estas <i>‘cifero’,</i> kiu celas nombrosimbolon, ne la nombron mem: <i>romanaj/arabaj ciferoj, duuma cifero.</i><br>\n<br>\nNotu, ke nek <i>‘nombri’</i> nek <i>‘numeri’</i> uzeblas kun la senco de ‘listigi’.",
		"La ĉambroj estas <span style=\"color: #ff0000\">nombritaj</span> (numeritaj). Trovu vian en la listo ĉe la enirejo!<br>\n<br>\nLa dokumento <span style=\"color: #ff0000\">numeris</span> (listigis) liajn meritojn.<br>\n<br>\nOni limigis la <span style=\"color: #ff0000\">numeron</span> (nombron) de partoprenantoj.<br>\n<br>\nHieraŭ mi legis tri <span style=\"color: #ff0000\">nombrojn</span> (numerojn) de ‘Kontakto’."
	],
	"£:BASE-farbi": [
		"£:BASE-farbi",
		"Konfuzebla vortogrupo: pentri ↔ farbi ↔ kolorigi",
		"Ne konfuzu <i>‘pentri’</i> kun <i>‘farbi’</i> aŭ <i>‘kolorigi’.</i> Oni ‘<i>pentras’</i> objekton kreante bildon de ĝi. <i>‘Farbado’</i> kaj <i>‘kolorigo’</i> ne estas kreaj agoj. Oni <i>‘farbas’</i> surfacon (ekz. muron) ruĝe, blanke aŭ blue. Oni <i>‘kolorigas’</i> desegnaĵon aŭ objekton <i>per</i> kolorigiloj, ekz. krajonoj)",
		"<i>Ŝi</i> <span style=\"color: #c9211e\"><i>pentris</i></span><i> (farbis) sian hararon ruĝa.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #c9211e\"><i>pentris</i></span><i> (kolorigis) la literojn en la teksto per buntaj krajonoj.</i>"
	],
	"£:BASE-kolorigi": [
		"£:BASE-kolorigi",
		"Konfuzebla vortogrupo: pentri ↔ farbi ↔ kolorigi",
		"Ne konfuzu <i>‘pentri’</i> kun <i>‘farbi’</i> aŭ <i>‘kolorigi’.</i> Oni ‘<i>pentras’</i> objekton kreante bildon de ĝi. <i>‘Farbado’</i> kaj <i>‘kolorigo’</i> ne estas kreaj agoj. Oni <i>‘farbas’</i> surfacon (ekz. muron) ruĝe, blanke aŭ blue. Oni <i>‘kolorigas’</i> desegnaĵon aŭ objekton <i>per</i> kolorigiloj, ekz. krajonoj)",
		"<i>Ŝi</i> <span style=\"color: #c9211e\"><i>pentris</i></span><i> (farbis) sian hararon ruĝa.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #c9211e\"><i>pentris</i></span><i> (kolorigis) la literojn en la teksto per buntaj krajonoj.</i>"
	],
	"£:BASE-pentri": [
		"£:BASE-pentri",
		"Konfuzebla vortogrupo: pentri ↔ farbi ↔ kolorigi",
		"Ne konfuzu <i>‘pentri’</i> kun <i>‘farbi’</i> aŭ <i>‘kolorigi’.</i> Oni ‘<i>pentras’</i> objekton kreante bildon de ĝi. <i>‘Farbado’</i> kaj <i>‘kolorigo’</i> ne estas kreaj agoj. Oni <i>‘farbas’</i> surfacon (ekz. muron) ruĝe, blanke aŭ blue. Oni <i>‘kolorigas’</i> desegnaĵon aŭ objekton <i>per</i> kolorigiloj, ekz. krajonoj)",
		"<i>Ŝi</i> <span style=\"color: #c9211e\"><i>pentris</i></span><i> (farbis) sian hararon ruĝa.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #c9211e\"><i>pentris</i></span><i> (kolorigis) la literojn en la teksto per buntaj krajonoj.</i>"
	],
	"£:BASE-plasto": [
		"£:BASE-plasto",
		"Konfuzebla vortogrupo: plasto – plastiko – plastio",
		"<i>'Plasto’</i> estas materialo (angle: <i>plastic</i>), dum <i>‘plastiko’</i> signifas ‘form-arto’, do la arto formi skulptaĵon aŭ modlaĵon. <i>‘Plastio’</i> estas operacio por ripari la formon aŭ funkcion de organo aŭ korpoparto.",
		"Eblas recikligi la plej mulltajn aĵojn el <span style=\"color: #ff0000\">plastiko</span> (plasto) / <span style=\"color: #ff0000\">plastikajn</span> (plastajn) aĵojn."
	],
	"£:BASE-plasta": [
		"£:BASE-plasta",
		"Konfuzebla vortogrupo: plasto – plastiko – plastio",
		"<i>'Plasto’</i> estas materialo (angle: <i>plastic</i>), dum <i>‘plastiko’</i> signifas ‘form-arto’, do la arto formi skulptaĵon aŭ modlaĵon. <i>‘Plastio’</i> estas operacio por ripari la formon aŭ funkcion de organo aŭ korpoparto.",
		"Eblas recikligi la plej mulltajn aĵojn el <span style=\"color: #ff0000\">plastiko</span> (plasto) / <span style=\"color: #ff0000\">plastikajn</span> (plastajn) aĵojn."
	],
	"£:BASE-plastia": [
		"£:BASE-plastia",
		"Konfuzebla vortogrupo: plasto – plastiko – plastio",
		"<i>'Plasto’</i> estas materialo (angle: <i>plastic</i>), dum <i>‘plastiko’</i> signifas ‘form-arto’, do la arto formi skulptaĵon aŭ modlaĵon. <i>‘Plastio’</i> estas operacio por ripari la formon aŭ funkcion de organo aŭ korpoparto.",
		"Eblas recikligi la plej mulltajn aĵojn el <span style=\"color: #ff0000\">plastiko</span> (plasto) / <span style=\"color: #ff0000\">plastikajn</span> (plastajn) aĵojn."
	],
	"£:BASE-pulvo": [
		"£:BASE-pulvo",
		"Konfuzebla vortogrupo: polvo – pulvo – pulvoro",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE-pulvoro": [
		"£:BASE-pulvoro",
		"Konfuzebla vortogrupo: polvo – pulvo – pulvoro",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE:polvo": [
		"£:BASE:polvo",
		"Konfuzebla vortogrupo: polvo – pulvo – pulvoro",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE-pulva": [
		"£:BASE-pulva",
		"Konfuzebla vortogrupo: polvo – pulvo – pulvoro",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE-pulvora": [
		"£:BASE-pulvora",
		"Konfuzebla vortogrupo: polvo – pulvo – pulvoro",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE-polva": [
		"£:BASE-polva",
		"Konfuzebla vortogrupo: polvo – pulvo – pulvoro",
		"'Pulvoro’ estas erigita, blovebla substanco (angle: <i>powder</i>), dum <i>‘pulvo’</i> signifas specife ‘pafpulvoro’ (angle: <i>gunpowder</i>). <i>‘Polvo’,</i> fine, estas maso de eretoj tiom fajnaj, ke ili povas ŝvebi (angle: <i>dust</i>).<br>\n<br>\n<i>Por la recepto, oni bezonas 125 g da sukera</i> <span style=\"color: #ff0000\"><i>pulvo</i></span><i> (pulvoro).</i><br>\n<br>\n<i>En la groto ili trovis malgrandan</i> <span style=\"color: #ff0000\"><i>pulvoran</i></span><i> (pulvan) bareleton.</i>",
		""
	],
	"£:BASE-proceduro": [
		"£:BASE-proceduro",
		"Konfuzebla vortogrupo: procezo – proceso – proceduro – prilaboro",
		"Ekzistas kvar konfuzeblaj radikoj komenciĝantaj per <i>‘proce...’.</i> La diferenco inter <i>‘procezo’</i> kaj <i>‘proceso’</i> estas la uzokampo: <i>‘proceso’</i> estas jura termino (angle: <i>lawsuit</i>), dum <i>‘procezo’</i> estas ĝenerala vorto por disvolviĝanta sinsekvo de eventoj, natura aŭ planita (angle: <i>process</i>). En pluraj lingvoj ambaŭ tradukiĝas same (ekz. germane: <i>Prozess</i>).<br>\n<br>\n'Procedo’ estas difinita agmaniero por atingi iun celon (angle: <i>method, ways</i>), <i>‘proceduro’</i> estas pli normigita, kompleksa procedaro (angle: <i>procedure</i>), speciale en jura, administra kaj komputila kunteksto. Notu, ke ne eblas uzi nek unu nek la alian celante kompletan, konkretan juran <i>proceson</i> kontraŭ iu persono aŭ firmao.<br>\n<br>\nNotu, ke kelkaj verbigas <i>‘procezo’</i> al <i>‘procezi’,</i> kun la transitiva signifo de ‘prilabori’. Ne konfuzu tion kun <i>‘procesi’,</i> kiu signifas ‘realigi juran proceson (kontraŭ).",
		"Ni devas haltigi la <span style=\"color: #ff0000\">proceson</span> (procezon) de senarbarigo.<br>\n<br>\nOni <span style=\"color: #ff0000\">procesas</span> (prilaboras) la agrikulturajn produktojn surloke."
	],
	"£:BASE-proceso": [
		"£:BASE-proceso",
		"Konfuzebla vortogrupo: procezo – proceso – proceduro – prilaboro",
		"Ekzistas kvar konfuzeblaj radikoj komenciĝantaj per <i>‘proce...’.</i> La diferenco inter <i>‘procezo’</i> kaj <i>‘proceso’</i> estas la uzokampo: <i>‘proceso’</i> estas jura termino (angle: <i>lawsuit</i>), dum <i>‘procezo’</i> estas ĝenerala vorto por disvolviĝanta sinsekvo de eventoj, natura aŭ planita (angle: <i>process</i>). En pluraj lingvoj ambaŭ tradukiĝas same (ekz. germane: <i>Prozess</i>).<br>\n<br>\n'Procedo’ estas difinita agmaniero por atingi iun celon (angle: <i>method, ways</i>), <i>‘proceduro’</i> estas pli normigita, kompleksa procedaro (angle: <i>procedure</i>), speciale en jura, administra kaj komputila kunteksto. Notu, ke ne eblas uzi nek unu nek la alian celante kompletan, konkretan juran <i>proceson</i> kontraŭ iu persono aŭ firmao.<br>\n<br>\nNotu, ke kelkaj verbigas <i>‘procezo’</i> al <i>‘procezi’,</i> kun la transitiva signifo de ‘prilabori’. Ne konfuzu tion kun <i>‘procesi’,</i> kiu signifas ‘realigi juran proceson (kontraŭ).",
		"Ni devas haltigi la <span style=\"color: #ff0000\">proceson</span> (procezon) de senarbarigo.<br>\n<br>\nOni <span style=\"color: #ff0000\">procesas</span> (prilaboras) la agrikulturajn produktojn surloke."
	],
	"£:BASE-procesi": [
		"£:BASE-procesi",
		"Konfuzebla vortogrupo: procezo – proceso – proceduro – prilaboro",
		"Ekzistas kvar konfuzeblaj radikoj komenciĝantaj per <i>‘proce...’.</i> La diferenco inter <i>‘procezo’</i> kaj <i>‘proceso’</i> estas la uzokampo: <i>‘proceso’</i> estas jura termino (angle: <i>lawsuit</i>), dum <i>‘procezo’</i> estas ĝenerala vorto por disvolviĝanta sinsekvo de eventoj, natura aŭ planita (angle: <i>process</i>). En pluraj lingvoj ambaŭ tradukiĝas same (ekz. germane: <i>Prozess</i>).<br>\n<br>\n'Procedo’ estas difinita agmaniero por atingi iun celon (angle: <i>method, ways</i>), <i>‘proceduro’</i> estas pli normigita, kompleksa procedaro (angle: <i>procedure</i>), speciale en jura, administra kaj komputila kunteksto. Notu, ke ne eblas uzi nek unu nek la alian celante kompletan, konkretan juran <i>proceson</i> kontraŭ iu persono aŭ firmao.<br>\n<br>\nNotu, ke kelkaj verbigas <i>‘procezo’</i> al <i>‘procezi’,</i> kun la transitiva signifo de ‘prilabori’. Ne konfuzu tion kun <i>‘procesi’,</i> kiu signifas ‘realigi juran proceson (kontraŭ).",
		"Ni devas haltigi la <span style=\"color: #ff0000\">proceson</span> (procezon) de senarbarigo.<br>\n<br>\nOni <span style=\"color: #ff0000\">procesas</span> (prilaboras) la agrikulturajn produktojn surloke."
	],
	"£:BASE-procezo": [
		"£:BASE-procezo",
		"Konfuzebla vortogrupo: procezo – proceso – proceduro – prilaboro",
		"Ekzistas kvar konfuzeblaj radikoj komenciĝantaj per <i>‘proce...’.</i> La diferenco inter <i>‘procezo’</i> kaj <i>‘proceso’</i> estas la uzokampo: <i>‘proceso’</i> estas jura termino (angle: <i>lawsuit</i>), dum <i>‘procezo’</i> estas ĝenerala vorto por disvolviĝanta sinsekvo de eventoj, natura aŭ planita (angle: <i>process</i>). En pluraj lingvoj ambaŭ tradukiĝas same (ekz. germane: <i>Prozess</i>).<br>\n<br>\n'Procedo’ estas difinita agmaniero por atingi iun celon (angle: <i>method, ways</i>), <i>‘proceduro’</i> estas pli normigita, kompleksa procedaro (angle: <i>procedure</i>), speciale en jura, administra kaj komputila kunteksto. Notu, ke ne eblas uzi nek unu nek la alian celante kompletan, konkretan juran <i>proceson</i> kontraŭ iu persono aŭ firmao.<br>\n<br>\nNotu, ke kelkaj verbigas <i>‘procezo’</i> al <i>‘procezi’,</i> kun la transitiva signifo de ‘prilabori’. Ne konfuzu tion kun <i>‘procesi’,</i> kiu signifas ‘realigi juran proceson (kontraŭ).",
		"Ni devas haltigi la <span style=\"color: #ff0000\">proceson</span> (procezon) de senarbarigo.<br>\n<br>\nOni <span style=\"color: #ff0000\">procesas</span> (prilaboras) la agrikulturajn produktojn surloke."
	],
	"£:BASE-prilabori&\"<proce.*>\"": [
		"£:BASE-prilabori&\"<proce.*>\"",
		"Konfuzebla vortogrupo: procezo – proceso – proceduro – prilaboro",
		"Ekzistas kvar konfuzeblaj radikoj komenciĝantaj per <i>‘proce...’.</i> La diferenco inter <i>‘procezo’</i> kaj <i>‘proceso’</i> estas la uzokampo: <i>‘proceso’</i> estas jura termino (angle: <i>lawsuit</i>), dum <i>‘procezo’</i> estas ĝenerala vorto por disvolviĝanta sinsekvo de eventoj, natura aŭ planita (angle: <i>process</i>). En pluraj lingvoj ambaŭ tradukiĝas same (ekz. germane: <i>Prozess</i>).<br>\n<br>\n'Procedo’ estas difinita agmaniero por atingi iun celon (angle: <i>method, ways</i>), <i>‘proceduro’</i> estas pli normigita, kompleksa procedaro (angle: <i>procedure</i>), speciale en jura, administra kaj komputila kunteksto. Notu, ke ne eblas uzi nek unu nek la alian celante kompletan, konkretan juran <i>proceson</i> kontraŭ iu persono aŭ firmao.<br>\n<br>\nNotu, ke kelkaj verbigas <i>‘procezo’</i> al <i>‘procezi’,</i> kun la transitiva signifo de ‘prilabori’. Ne konfuzu tion kun <i>‘procesi’,</i> kiu signifas ‘realigi juran proceson (kontraŭ).",
		"Ni devas haltigi la <span style=\"color: #ff0000\">proceson</span> (procezon) de senarbarigo.<br>\n<br>\nOni <span style=\"color: #ff0000\">procesas</span> (prilaboras) la agrikulturajn produktojn surloke."
	],
	"£:BASE-pruvi": [
		"£:BASE-pruvi",
		"Konfuzebla vortogrupo: provi – pruvi – gustumi",
		"'<i>Provi</i>’ havas la ĉefan sencon de ‘<i>elprovi</i>’ (angle: <i>try</i>), do fari kaj vidi, ĉu funkcias. ‘<i>Pruvi</i>’ signifas ‘montri la verecon/faktecon de io (angle: <i>prove)</i>. Do, oni <i>pruvas, ke …,</i> kaj <i>provas, ĉu</i> … Kun infinitivo, nur eblas ‘<i>provi</i>’ (ekz. <i>Provu kapti min!</i>)<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>pruvis</i></span><i> (provis), cxu la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>provis</i></span><i> (pruvis), ke la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\nNotu, ke por manĝaĵoj kaj trinkaĵoj oni prefere uzu ‘gustumi’, ne ‘provi’:<br>\n<br>\nProvu (gustumu) mian aprikotan marmeladon!",
		""
	],
	"£:BASE-provi": [
		"£:BASE-provi",
		"Konfuzebla vortogrupo: provi – pruvi – gustumi",
		"'<i>Provi</i>’ havas la ĉefan sencon de ‘<i>elprovi</i>’ (angle: <i>try</i>), do fari kaj vidi, ĉu funkcias. ‘<i>Pruvi</i>’ signifas ‘montri la verecon/faktecon de io (angle: <i>prove)</i>. Do, oni <i>pruvas, ke …,</i> kaj <i>provas, ĉu</i> … Kun infinitivo, nur eblas ‘<i>provi</i>’ (ekz. <i>Provu kapti min!</i>)<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>pruvis</i></span><i> (provis), cxu la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>provis</i></span><i> (pruvis), ke la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\nNotu, ke por manĝaĵoj kaj trinkaĵoj oni prefere uzu ‘gustumi’, ne ‘provi’:<br>\n<br>\nProvu (gustumu) mian aprikotan marmeladon!",
		""
	],
	"£:BASE-gustumi": [
		"£:BASE-gustumi",
		"Konfuzebla vortogrupo: provi – pruvi – gustumi",
		"'<i>Provi</i>’ havas la ĉefan sencon de ‘<i>elprovi</i>’ (angle: <i>try</i>), do fari kaj vidi, ĉu funkcias. ‘<i>Pruvi</i>’ signifas ‘montri la verecon/faktecon de io (angle: <i>prove)</i>. Do, oni <i>pruvas, ke …,</i> kaj <i>provas, ĉu</i> … Kun infinitivo, nur eblas ‘<i>provi</i>’ (ekz. <i>Provu kapti min!</i>)<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>pruvis</i></span><i> (provis), cxu la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>provis</i></span><i> (pruvis), ke la glacio estis sufiĉe dika por sketi.</i><br>\n<br>\nNotu, ke por manĝaĵoj kaj trinkaĵoj oni prefere uzu ‘gustumi’, ne ‘provi’:<br>\n<br>\nProvu (gustumu) mian aprikotan marmeladon!",
		""
	],
	"£:BASE-anstatauxigebla": [
		"£:BASE-anstatauxigebla",
		"Konfuzebla vortogrupo: substitui ↔ anstataŭi ↔ anstataŭigi",
		"En Esperanto ekzistas tri malsamaj verboj por esprimi agon aŭ eventon kun la rezulto ‘A anstataŭ B’. Plej simple, <i>‘A anstataŭas B’</i> signifas, ke A transprenas la rolon/lokon de B. Persono C, kiu kaŭzas tion, povas celi aŭ A aŭ B kiel objekton. Tiel, oni <i>‘substituas A</i> <b><i>al</i></b><i> B’,</i> sed <i>‘anstataŭigas B</i> <b><i>per</i></b><i> A’.</i><br>\n<br>\nTute logike, B ne estas <span style=\"color: #ff0000\"><i>substituebla</i></span>, sed <b><i>anstataŭigebla</i></b><b></b> (= ŝangebla), kaj A ne estas <span style=\"color: #ff0000\"><i>anstataŭigebla</i></span>, sed <b><i>substituebla</i></b> (= alternative taŭga). Analoge, ‘<i>substituito’</i> kaj <i>‘anstataŭanto’</i> celas A, ne B, kaj <i>anstataŭito</i> aŭ <i>anstataŭigito</i> celas B, ne A. Krome, nur A povas <i>substituiĝi,</i> kaj nur B povas <i>anstataŭiĝi.</i><br>\n<br>\nNotu, ke <i>‘anstataŭebla’</i> kaj <i>‘anstataŭigebla’</i> ambaŭ funkcias en preskaŭ ĉiuj kuntekstoj, kie oni celas B, ne A. La diferenco estas, ke la dua implicas la ekziston de iu ekstera, anstataŭiga aganto C, la unua ne.",
		"Pro lia granda sperto, li estas malfacile <span style=\"color: #ff0000\">substituebla</span> (anstataŭigebla).<br>\n<br>\nOni ne ĝustatempe sukcesis <span style=\"color: #ff0000\">substitui</span> (anstataŭigi) la instruiston.<br>\n<br>\nMetila jodido similas al metano, kie unu hidrogenatomo <span style=\"color: #ff0000\">substituiĝas</span> (anstataŭiĝas) per unu jodatomo."
	],
	"£:BASE-anstatauxigi": [
		"£:BASE-anstatauxigi",
		"Konfuzebla vortogrupo: substitui ↔ anstataŭi ↔ anstataŭigi",
		"En Esperanto ekzistas tri malsamaj verboj por esprimi agon aŭ eventon kun la rezulto ‘A anstataŭ B’. Plej simple, <i>‘A anstataŭas B’</i> signifas, ke A transprenas la rolon/lokon de B. Persono C, kiu kaŭzas tion, povas celi aŭ A aŭ B kiel objekton. Tiel, oni <i>‘substituas A</i> <b><i>al</i></b><i> B’,</i> sed <i>‘anstataŭigas B</i> <b><i>per</i></b><i> A’.</i><br>\n<br>\nTute logike, B ne estas <span style=\"color: #ff0000\"><i>substituebla</i></span>, sed <b><i>anstataŭigebla</i></b><b></b> (= ŝangebla), kaj A ne estas <span style=\"color: #ff0000\"><i>anstataŭigebla</i></span>, sed <b><i>substituebla</i></b> (= alternative taŭga). Analoge, ‘<i>substituito’</i> kaj <i>‘anstataŭanto’</i> celas A, ne B, kaj <i>anstataŭito</i> aŭ <i>anstataŭigito</i> celas B, ne A. Krome, nur A povas <i>substituiĝi,</i> kaj nur B povas <i>anstataŭiĝi.</i><br>\n<br>\nNotu, ke <i>‘anstataŭebla’</i> kaj <i>‘anstataŭigebla’</i> ambaŭ funkcias en preskaŭ ĉiuj kuntekstoj, kie oni celas B, ne A. La diferenco estas, ke la dua implicas la ekziston de iu ekstera, anstataŭiga aganto C, la unua ne.",
		"Pro lia granda sperto, li estas malfacile <span style=\"color: #ff0000\">substituebla</span> (anstataŭigebla).<br>\n<br>\nOni ne ĝustatempe sukcesis <span style=\"color: #ff0000\">substitui</span> (anstataŭigi) la instruiston.<br>\n<br>\nMetila jodido similas al metano, kie unu hidrogenatomo <span style=\"color: #ff0000\">substituiĝas</span> (anstataŭiĝas) per unu jodatomo."
	],
	"£:BASE-anstatauxigxi": [
		"£:BASE-anstatauxigxi",
		"Konfuzebla vortogrupo: substitui ↔ anstataŭi ↔ anstataŭigi",
		"En Esperanto ekzistas tri malsamaj verboj por esprimi agon aŭ eventon kun la rezulto ‘A anstataŭ B’. Plej simple, <i>‘A anstataŭas B’</i> signifas, ke A transprenas la rolon/lokon de B. Persono C, kiu kaŭzas tion, povas celi aŭ A aŭ B kiel objekton. Tiel, oni <i>‘substituas A</i> <b><i>al</i></b><i> B’,</i> sed <i>‘anstataŭigas B</i> <b><i>per</i></b><i> A’.</i><br>\n<br>\nTute logike, B ne estas <span style=\"color: #ff0000\"><i>substituebla</i></span>, sed <b><i>anstataŭigebla</i></b><b></b> (= ŝangebla), kaj A ne estas <span style=\"color: #ff0000\"><i>anstataŭigebla</i></span>, sed <b><i>substituebla</i></b> (= alternative taŭga). Analoge, ‘<i>substituito’</i> kaj <i>‘anstataŭanto’</i> celas A, ne B, kaj <i>anstataŭito</i> aŭ <i>anstataŭigito</i> celas B, ne A. Krome, nur A povas <i>substituiĝi,</i> kaj nur B povas <i>anstataŭiĝi.</i><br>\n<br>\nNotu, ke <i>‘anstataŭebla’</i> kaj <i>‘anstataŭigebla’</i> ambaŭ funkcias en preskaŭ ĉiuj kuntekstoj, kie oni celas B, ne A. La diferenco estas, ke la dua implicas la ekziston de iu ekstera, anstataŭiga aganto C, la unua ne.",
		"Pro lia granda sperto, li estas malfacile <span style=\"color: #ff0000\">substituebla</span> (anstataŭigebla).<br>\n<br>\nOni ne ĝustatempe sukcesis <span style=\"color: #ff0000\">substitui</span> (anstataŭigi) la instruiston.<br>\n<br>\nMetila jodido similas al metano, kie unu hidrogenatomo <span style=\"color: #ff0000\">substituiĝas</span> (anstataŭiĝas) per unu jodatomo."
	],
	"£:BASE-substituebla": [
		"£:BASE-substituebla",
		"Konfuzebla vortogrupo: substitui ↔ anstataŭi ↔ anstataŭigi",
		"En Esperanto ekzistas tri malsamaj verboj por esprimi agon aŭ eventon kun la rezulto ‘A anstataŭ B’. Plej simple, <i>‘A anstataŭas B’</i> signifas, ke A transprenas la rolon/lokon de B. Persono C, kiu kaŭzas tion, povas celi aŭ A aŭ B kiel objekton. Tiel, oni <i>‘substituas A</i> <b><i>al</i></b><i> B’,</i> sed <i>‘anstataŭigas B</i> <b><i>per</i></b><i> A’.</i><br>\n<br>\nTute logike, B ne estas <span style=\"color: #ff0000\"><i>substituebla</i></span>, sed <b><i>anstataŭigebla</i></b><b></b> (= ŝangebla), kaj A ne estas <span style=\"color: #ff0000\"><i>anstataŭigebla</i></span>, sed <b><i>substituebla</i></b> (= alternative taŭga). Analoge, ‘<i>substituito’</i> kaj <i>‘anstataŭanto’</i> celas A, ne B, kaj <i>anstataŭito</i> aŭ <i>anstataŭigito</i> celas B, ne A. Krome, nur A povas <i>substituiĝi,</i> kaj nur B povas <i>anstataŭiĝi.</i><br>\n<br>\nNotu, ke <i>‘anstataŭebla’</i> kaj <i>‘anstataŭigebla’</i> ambaŭ funkcias en preskaŭ ĉiuj kuntekstoj, kie oni celas B, ne A. La diferenco estas, ke la dua implicas la ekziston de iu ekstera, anstataŭiga aganto C, la unua ne.",
		"Pro lia granda sperto, li estas malfacile <span style=\"color: #ff0000\">substituebla</span> (anstataŭigebla).<br>\n<br>\nOni ne ĝustatempe sukcesis <span style=\"color: #ff0000\">substitui</span> (anstataŭigi) la instruiston.<br>\n<br>\nMetila jodido similas al metano, kie unu hidrogenatomo <span style=\"color: #ff0000\">substituiĝas</span> (anstataŭiĝas) per unu jodatomo."
	],
	"£:BASE-substitui": [
		"£:BASE-substitui",
		"Konfuzebla vortogrupo: substitui ↔ anstataŭi ↔ anstataŭigi",
		"En Esperanto ekzistas tri malsamaj verboj por esprimi agon aŭ eventon kun la rezulto ‘A anstataŭ B’. Plej simple, <i>‘A anstataŭas B’</i> signifas, ke A transprenas la rolon/lokon de B. Persono C, kiu kaŭzas tion, povas celi aŭ A aŭ B kiel objekton. Tiel, oni <i>‘substituas A</i> <b><i>al</i></b><i> B’,</i> sed <i>‘anstataŭigas B</i> <b><i>per</i></b><i> A’.</i><br>\n<br>\nTute logike, B ne estas <span style=\"color: #ff0000\"><i>substituebla</i></span>, sed <b><i>anstataŭigebla</i></b><b></b> (= ŝangebla), kaj A ne estas <span style=\"color: #ff0000\"><i>anstataŭigebla</i></span>, sed <b><i>substituebla</i></b> (= alternative taŭga). Analoge, ‘<i>substituito’</i> kaj <i>‘anstataŭanto’</i> celas A, ne B, kaj <i>anstataŭito</i> aŭ <i>anstataŭigito</i> celas B, ne A. Krome, nur A povas <i>substituiĝi,</i> kaj nur B povas <i>anstataŭiĝi.</i><br>\n<br>\nNotu, ke <i>‘anstataŭebla’</i> kaj <i>‘anstataŭigebla’</i> ambaŭ funkcias en preskaŭ ĉiuj kuntekstoj, kie oni celas B, ne A. La diferenco estas, ke la dua implicas la ekziston de iu ekstera, anstataŭiga aganto C, la unua ne.",
		"Pro lia granda sperto, li estas malfacile <span style=\"color: #ff0000\">substituebla</span> (anstataŭigebla).<br>\n<br>\nOni ne ĝustatempe sukcesis <span style=\"color: #ff0000\">substitui</span> (anstataŭigi) la instruiston.<br>\n<br>\nMetila jodido similas al metano, kie unu hidrogenatomo <span style=\"color: #ff0000\">substituiĝas</span> (anstataŭiĝas) per unu jodatomo."
	],
	"£:BASE-substituigxi": [
		"£:BASE-substituigxi",
		"Konfuzebla vortogrupo: substitui ↔ anstataŭi ↔ anstataŭigi",
		"En Esperanto ekzistas tri malsamaj verboj por esprimi agon aŭ eventon kun la rezulto ‘A anstataŭ B’. Plej simple, <i>‘A anstataŭas B’</i> signifas, ke A transprenas la rolon/lokon de B. Persono C, kiu kaŭzas tion, povas celi aŭ A aŭ B kiel objekton. Tiel, oni <i>‘substituas A</i> <b><i>al</i></b><i> B’,</i> sed <i>‘anstataŭigas B</i> <b><i>per</i></b><i> A’.</i><br>\n<br>\nTute logike, B ne estas <span style=\"color: #ff0000\"><i>substituebla</i></span>, sed <b><i>anstataŭigebla</i></b><b></b> (= ŝangebla), kaj A ne estas <span style=\"color: #ff0000\"><i>anstataŭigebla</i></span>, sed <b><i>substituebla</i></b> (= alternative taŭga). Analoge, ‘<i>substituito’</i> kaj <i>‘anstataŭanto’</i> celas A, ne B, kaj <i>anstataŭito</i> aŭ <i>anstataŭigito</i> celas B, ne A. Krome, nur A povas <i>substituiĝi,</i> kaj nur B povas <i>anstataŭiĝi.</i><br>\n<br>\nNotu, ke <i>‘anstataŭebla’</i> kaj <i>‘anstataŭigebla’</i> ambaŭ funkcias en preskaŭ ĉiuj kuntekstoj, kie oni celas B, ne A. La diferenco estas, ke la dua implicas la ekziston de iu ekstera, anstataŭiga aganto C, la unua ne.",
		"Pro lia granda sperto, li estas malfacile <span style=\"color: #ff0000\">substituebla</span> (anstataŭigebla).<br>\n<br>\nOni ne ĝustatempe sukcesis <span style=\"color: #ff0000\">substitui</span> (anstataŭigi) la instruiston.<br>\n<br>\nMetila jodido similas al metano, kie unu hidrogenatomo <span style=\"color: #ff0000\">substituiĝas</span> (anstataŭiĝas) per unu jodatomo."
	],
	"£:BASE-transvivi": [
		"£:BASE-transvivi",
		"Konfuzebla vortogrupo: travivi – transvivi – postvivi",
		"Ne konfuzu la vortojn <i>‘travivi’, ‘transvivi’</i> kaj <i>‘postvivi’.</i> La lasta simple signifas ‘esti viva post’, do eblas uzi ĝin kaj pri okazaĵoj kaj personoj. <i>‘Travivi’</i> signifas ‘sperti’ (okazaĵon aŭ periodon), kun emfazo sur kion oni spertas. <i>‘Transvivi’</i> signifas ‘travivi <b>kaj</b> postvivi’, kun emfazo de la fakto, ke oni estas (ankoraŭ) vivanta poste. Do sen objekto <i>‘travivi’</i> verŝajne estas erara, ĉar oni tuj demandus <i>‘kion?’</i> Kompare <i>‘transvivi’</i> tute bone funkcias sen objekto, substrekante la ‘<i>postvivi</i>’-parton de sia signifo.<br>\n<br>\nNotu, ke <i>'survivi'</i> estas falsa amiko, prefere uzu <i>'transvivi'.</i>",
		"<i>Esperanto internacia sukcesis</i> <span style=\"color: #ff0000\"><i>travivi</i></span><i> (transvivi) la mondmiliton .</i><br>\n<br>\n<i>La konstruaĵo</i> <span style=\"color: #ff0000\"><i>travivis</i></span><i> (transvivis) la militon sen grandaj damaĝoj.</i>"
	],
	"£:BASE-postvivi": [
		"£:BASE-postvivi",
		"Konfuzebla vortogrupo: travivi – transvivi – postvivi",
		"Ne konfuzu la vortojn <i>‘travivi’, ‘transvivi’</i> kaj <i>‘postvivi’.</i> La lasta simple signifas ‘esti viva post’, do eblas uzi ĝin kaj pri okazaĵoj kaj personoj. <i>‘Travivi’</i> signifas ‘sperti’ (okazaĵon aŭ periodon), kun emfazo sur kion oni spertas. <i>‘Transvivi’</i> signifas ‘travivi <b>kaj</b> postvivi’, kun emfazo de la fakto, ke oni estas (ankoraŭ) vivanta poste. Do sen objekto <i>‘travivi’</i> verŝajne estas erara, ĉar oni tuj demandus <i>‘kion?’</i> Kompare <i>‘transvivi’</i> tute bone funkcias sen objekto, substrekante la ‘<i>postvivi</i>’-parton de sia signifo.<br>\n<br>\nNotu, ke <i>'survivi'</i> estas falsa amiko, prefere uzu <i>'transvivi'.</i>",
		"<i>Esperanto internacia sukcesis</i> <span style=\"color: #ff0000\"><i>travivi</i></span><i> (transvivi) la mondmiliton .</i><br>\n<br>\n<i>La konstruaĵo</i> <span style=\"color: #ff0000\"><i>travivis</i></span><i> (transvivis) la militon sen grandaj damaĝoj.</i>"
	],
	"£x-etype-lemma&\"<surviv.*>\"": [
		"£x-etype-lemma&\"<surviv.*>\"",
		"Konfuzebla vortogrupo: travivi – transvivi – postvivi",
		"Ne konfuzu la vortojn <i>‘travivi’, ‘transvivi’</i> kaj <i>‘postvivi’.</i> La lasta simple signifas ‘esti viva post’, do eblas uzi ĝin kaj pri okazaĵoj kaj personoj. <i>‘Travivi’</i> signifas ‘sperti’ (okazaĵon aŭ periodon), kun emfazo sur kion oni spertas. <i>‘Transvivi’</i> signifas ‘travivi <b>kaj</b> postvivi’, kun emfazo de la fakto, ke oni estas (ankoraŭ) vivanta poste. Do sen objekto <i>‘travivi’</i> verŝajne estas erara, ĉar oni tuj demandus <i>‘kion?’</i> Kompare <i>‘transvivi’</i> tute bone funkcias sen objekto, substrekante la ‘<i>postvivi</i>’-parton de sia signifo.<br>\n<br>\nNotu, ke <i>'survivi'</i> estas falsa amiko, prefere uzu <i>'transvivi'.</i>",
		"<i>Esperanto internacia sukcesis</i> <span style=\"color: #ff0000\"><i>travivi</i></span><i> (transvivi) la mondmiliton .</i><br>\n<br>\n<i>La konstruaĵo</i> <span style=\"color: #ff0000\"><i>travivis</i></span><i> (transvivis) la militon sen grandaj damaĝoj.</i>"
	],
	"£:BASE-tribunuso": [
		"£:BASE-tribunuso",
		"Konfuzebla vortogrupo: tribuno – tribunalo – tribuno",
		"'Tribuno’ estas podio por oratoro aŭ galerio por spektantoj, do loko. Dume, tribunalo estas (jura) evento. <i>‘Tribunuso’</i> estas histori, romia ofico.",
		"<i>La dizertintoj estis juĝitaj en armea</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunalo).</i><br>\n<br>\n<i>La juna</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunuso) venis el nobela familio.</i>"
	],
	"£:BASE-tribunalo": [
		"£:BASE-tribunalo",
		"Konfuzebla vortogrupo: tribuno – tribunalo – tribuno",
		"'Tribuno’ estas podio por oratoro aŭ galerio por spektantoj, do loko. Dume, tribunalo estas (jura) evento. <i>‘Tribunuso’</i> estas histori, romia ofico.",
		"<i>La dizertintoj estis juĝitaj en armea</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunalo).</i><br>\n<br>\n<i>La juna</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunuso) venis el nobela familio.</i>"
	],
	"£:BASE-tribuno": [
		"£:BASE-tribuno",
		"Konfuzebla vortogrupo: tribuno – tribunalo – tribuno",
		"'Tribuno’ estas podio por oratoro aŭ galerio por spektantoj, do loko. Dume, tribunalo estas (jura) evento. <i>‘Tribunuso’</i> estas histori, romia ofico.",
		"<i>La dizertintoj estis juĝitaj en armea</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunalo).</i><br>\n<br>\n<i>La juna</i> <span style=\"color: #ff0000\"><i>tribuno</i></span><i> (tribunuso) venis el nobela familio.</i>"
	],
	"£:BASE-versxi": [
		"£:BASE-versxi",
		"Konfuzebla vortogrupo: verŝi – ŝuti – ŝoti",
		"Oni <i>verŝas</i> likvaĵojn, ekz. akvon aŭ teon. Erojn aŭ mason de solidaj substancoj oni <i>ŝutas,</i> ekz. sablon, rizon, teron, florojn. Kaj metafore oni el- kaj alŝutas datumojn en la reto. Notu, ke la celo de ŝutado ne povas esti objekto, oni <i>surŝutas</i> ekz. Padon per gruzo aŭ sablo.<br>\n<br>\nNe konfuzu <i>‘ŝuti’</i> kun <i>‘ŝoti’.</i> Ĉi-lasta estas piedpilka fakvorto. Oni ne <i>ŝutas</i>, sed <i>ŝotas</i> golon aŭ pilkon.",
		"La vestlavilo <span style=\"color: #ff0000\">ŝutas</span> (verŝas) sian malpuran akvon en la lavabon.<br>\n<br>\nLi ludis en la teamo en 439 matĉoj kaj <span style=\"color: #ff0000\">ŝutis</span> (ŝotis) 21 golojn ."
	],
	"£:BASE-sxuti": [
		"£:BASE-sxuti",
		"Konfuzebla vortogrupo: verŝi – ŝuti – ŝoti",
		"Oni <i>verŝas</i> likvaĵojn, ekz. akvon aŭ teon. Erojn aŭ mason de solidaj substancoj oni <i>ŝutas,</i> ekz. sablon, rizon, teron, florojn. Kaj metafore oni el- kaj alŝutas datumojn en la reto. Notu, ke la celo de ŝutado ne povas esti objekto, oni <i>surŝutas</i> ekz. Padon per gruzo aŭ sablo.<br>\n<br>\nNe konfuzu <i>‘ŝuti’</i> kun <i>‘ŝoti’.</i> Ĉi-lasta estas piedpilka fakvorto. Oni ne <i>ŝutas</i>, sed <i>ŝotas</i> golon aŭ pilkon.",
		"La vestlavilo <span style=\"color: #ff0000\">ŝutas</span> (verŝas) sian malpuran akvon en la lavabon.<br>\n<br>\nLi ludis en la teamo en 439 matĉoj kaj <span style=\"color: #ff0000\">ŝutis</span> (ŝotis) 21 golojn ."
	],
	"£:BASE-sxoti": [
		"£:BASE-sxoti",
		"Konfuzebla vortogrupo: verŝi – ŝuti – ŝoti",
		"Oni <i>verŝas</i> likvaĵojn, ekz. akvon aŭ teon. Erojn aŭ mason de solidaj substancoj oni <i>ŝutas,</i> ekz. sablon, rizon, teron, florojn. Kaj metafore oni el- kaj alŝutas datumojn en la reto. Notu, ke la celo de ŝutado ne povas esti objekto, oni <i>surŝutas</i> ekz. Padon per gruzo aŭ sablo.<br>\n<br>\nNe konfuzu <i>‘ŝuti’</i> kun <i>‘ŝoti’.</i> Ĉi-lasta estas piedpilka fakvorto. Oni ne <i>ŝutas</i>, sed <i>ŝotas</i> golon aŭ pilkon.",
		"La vestlavilo <span style=\"color: #ff0000\">ŝutas</span> (verŝas) sian malpuran akvon en la lavabon.<br>\n<br>\nLi ludis en la teamo en 439 matĉoj kaj <span style=\"color: #ff0000\">ŝutis</span> (ŝotis) 21 golojn ."
	],
	"£:BASE-sursxuti": [
		"£:BASE-sursxuti",
		"Konfuzebla vortogrupo: verŝi – ŝuti – ŝoti",
		"Oni <i>verŝas</i> likvaĵojn, ekz. akvon aŭ teon. Erojn aŭ mason de solidaj substancoj oni <i>ŝutas,</i> ekz. sablon, rizon, teron, florojn. Kaj metafore oni el- kaj alŝutas datumojn en la reto. Notu, ke la celo de ŝutado ne povas esti objekto, oni <i>surŝutas</i> ekz. Padon per gruzo aŭ sablo.<br>\n<br>\nNe konfuzu <i>‘ŝuti’</i> kun <i>‘ŝoti’.</i> Ĉi-lasta estas piedpilka fakvorto. Oni ne <i>ŝutas</i>, sed <i>ŝotas</i> golon aŭ pilkon.",
		"La vestlavilo <span style=\"color: #ff0000\">ŝutas</span> (verŝas) sian malpuran akvon en la lavabon.<br>\n<br>\nLi ludis en la teamo en 439 matĉoj kaj <span style=\"color: #ff0000\">ŝutis</span> (ŝotis) 21 golojn ."
	],
	"£:BASE-jxuraso": [
		"£:BASE-jxuraso",
		"Konfuzebla vortoparo / ambigueco: Ĵuraso/ĵurasio → ĵuraso",
		"Oni distingu inter la regiono <i>‘Ĵuraso’</i> (en Svisio, Germanio kaj Francio), kun majusklo, kaj la terepoko <i>‘ĵuraso’,</i> sen majusklo. PIV, sed ne ReVo, proponas <i>‘ĵurasio’</i> por la epoko, sed tio ne tre bone kongruas kun aliaj epoknomoj (kp. <i>triaso</i>).",
		""
	],
	"£:BASE-ekscii&\"<kon.*>\"": [
		"£:BASE-ekscii&\"<kon.*>\"",
		"Konfuzebla vortoparo / Mankanta prefikso: konis → eksciis",
		"Oni <i>konas</i> personon aŭ aĵon, kaj <i>scias</i> fakton. Kun ‘pri’ aŭ ‘ke’-subpropozicio verŝajne temas pri <i>‘scii’.</i> Kome, ĉi tie vi verŝajne celas <i>novan</i> scion. Do prefere uzu <i>‘ekscii’.</i>",
		"Hieraŭ mi <span style=\"color: #ff0000\">konis</span> (eksciis) pri nova Esperanto-lernolibro."
	],
	"£:BASE-fermita&\"<fermaj?n?>\"": [
		"£:BASE-fermita&\"<fermaj?n?>\"",
		"Konfuzebla vortoparo: (mal)ferma → (mal)fermita",
		"La adjektivo <i>‘(mal)ferma’</i> havas verban radikon kaj celas agon, ekz. <i>‘malferma parolado’, ‘ferma kunsido’.</i> Por la stato de io, kion oni (mal)fermis, uzu la participon <i>‘(mal)fermita.</i> Post <i>‘esti’</i> preskaŭ ĉiam devas esti la participa formo.",
		"La libroservo estos <span style=\"color: #ff0000\">malferma</span> (malfermita) ĉiumatene."
	],
	"£:BASE-malfermita&\"<malferma>\"": [
		"£:BASE-malfermita&\"<malferma>\"",
		"Konfuzebla vortoparo: (mal)ferma → (mal)fermita",
		"La adjektivo <i>‘(mal)ferma’</i> havas verban radikon kaj celas agon, ekz. <i>‘malferma parolado’, ‘ferma kunsido’.</i> Por la stato de io, kion oni (mal)fermis, uzu la participon <i>‘(mal)fermita.</i> Post <i>‘esti’</i> preskaŭ ĉiam devas esti la participa formo.",
		"La libroservo estos <span style=\"color: #ff0000\">malferma</span> (malfermita) ĉiumatene."
	],
	"£:BASE-aktivajxo&\"<aktivecoj?n?>\"": [
		"£:BASE-aktivajxo&\"<aktivecoj?n?>\"",
		"Konfuzebla vortoparo: aktiveco → aktivaĵo",
		"La vorto <i>‘aktiveco’</i> mezuras la gradon de esti aktiva, dum <i>‘aktivaĵo’</i> celas la konkretajn agadojn. Oni <i>‘faras, disvolvas, ofertas, proponas’</i> aktivaĵojn, ne aktivecojn. Pluralo estas bona indiko, ke devas esti <i>‘aktivaĵo(j)’,</i> ne <i>‘aktiveco(j)’.</i>",
		"La lernejo ofertas multajn sportajn <span style=\"color: #c9211e\">aktivecojn</span> (aktivaĵojn)."
	],
	"£:BASE-sxati&\"<am.*>\"": [
		"£:BASE-sxati&\"<am.*>\"",
		"Konfuzebla vortoparo: ami ↔ ŝati",
		"Eblas uzi kaj <i>‘ami’</i> kaj <i>‘ŝati’</i> kun preskaŭ ĉiu speco de objekto, sed <i>‘ami’</i> (angle: <i>love</i>) estas pli emocia, \"kora\" ol <i>‘ŝati’</i> (angle: <i>like</i>)<i>.</i> Do tipe oni ŝatas manĝaĵon aŭ libron, sed amas koramik(in)on. Atentu pri propoziciaj objektoj (<i>ke-</i>frazoj kaj infinitivoj) – kun ili nur eblas <i>‘ŝati’:</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>amas</i></span><i> (ŝatas) vojaĝi. Mi</i> <span style=\"color: #ff0000\"><i>amis</i></span><i> (ŝatis), ke vi finverkis nian artikolon.</i>",
		""
	],
	"£:BASE-atenti": [
		"£:BASE-atenti",
		"Konfuzebla vortoparo: atendi → atenti",
		"En Esperanto, oni <i>atentas pri</i> io (oni \"malignoras\" ĝin), sed <i>atendas</i> alvenon de buso aŭ amiko. Angla <i>‘attend to’</i> estas falsa amiko en tiu kunteksto; en Esperanto, ‘<i>atendi’</i> (angle: <i>wait [for]</i>) ne uzeblas kun tiu signifo. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-auxskulti": [
		"£:BASE-auxskulti",
		"Konfuzebla vortoparo: aŭdi → aŭskulti, vidi → rigardi/spekti",
		"En Esperanto, oni distingas inter aktiva kaj pasiva sensado. Do anstataŭ la vortoj <i>vidi</i> kaj<i> aŭdi</i> oni uzas <i>rigardi/spekti</i> kaj <i>aŭskulti,</i> se oni atente sekvas ion:<br>\n<br>\n<i>Li aŭdis tondron – Li aŭskultis radion.</i><br>\n<br>\n<i>Ŝi vidis aglon – Ŝi rigardis bildon. Ŝi spektis filmon</i><br>\n<br>\nNotu, ke oni <i>rigardas</i> ion pli-malpli konstantan/senmovan, dum oni <i>spektas</i> prezentaĵon (kun moviĝo).<br>\n<br>\nNotu ankaŭ, ke ne estas kutime fari analogan distingon por <i>‘flari’.</i> Sed se vi volas, eblas diri <i>‘flarumi’</i> por ekz. hundo, kiu (aktive) priflaras iun. Aktiva perhaŭta sentado estas <i>‘palpi’</i> (ambaŭ angle: <i>feel</i>)<i>.</i><br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-spekti": [
		"£:BASE-spekti",
		"Konfuzebla vortoparo: aŭdi → aŭskulti, vidi → rigardi/spekti",
		"En Esperanto, oni distingas inter aktiva kaj pasiva sensado. Do anstataŭ la vortoj <i>vidi</i> kaj<i> aŭdi</i> oni uzas <i>rigardi/spekti</i> kaj <i>aŭskulti,</i> se oni atente sekvas ion:<br>\n<br>\n<i>Li aŭdis tondron – Li aŭskultis radion.</i><br>\n<br>\n<i>Ŝi vidis aglon – Ŝi rigardis bildon. Ŝi spektis filmon</i><br>\n<br>\nNotu, ke oni <i>rigardas</i> ion pli-malpli konstantan/senmovan, dum oni <i>spektas</i> prezentaĵon (kun moviĝo).<br>\n<br>\nNotu ankaŭ, ke ne estas kutime fari analogan distingon por <i>‘flari’.</i> Sed se vi volas, eblas diri <i>‘flarumi’</i> por ekz. hundo, kiu (aktive) priflaras iun. Aktiva perhaŭta sentado estas <i>‘palpi’</i> (ambaŭ angle: <i>feel</i>)<i>.</i><br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-bazilio": [
		"£:BASE-bazilio",
		"Konfuzebla vortoparo: bazilio ↔ baziliko",
		"'Baziliko’ estas konstruaĵo, romia-publika aŭ – nuntempe – preĝejo, dum <i>‘bazilio’</i> estas spicherbo.",
		"La urno kun liaj cindroj troviĝas en la kripto de la <span style=\"color: #ff0000\">bazilio</span> (baziliko) de Sankta Floriano.<br>\n<br>\nSur la picon metu freŝan bazilikon (bazilion), tomatojn kaj fromaĝon."
	],
	"£:BASE-baziliko": [
		"£:BASE-baziliko",
		"Konfuzebla vortoparo: bazilio ↔ baziliko",
		"'Baziliko’ estas konstruaĵo, romia-publika aŭ – nuntempe – preĝejo, dum <i>‘bazilio’</i> estas spicherbo.",
		"La urno kun liaj cindroj troviĝas en la kripto de la <span style=\"color: #ff0000\">bazilio</span> (baziliko) de Sankta Floriano.<br>\n<br>\nSur la picon metu freŝan bazilikon (bazilion), tomatojn kaj fromaĝon."
	],
	"£:BASE-bluso": [
		"£:BASE-bluso",
		"Konfuzebla vortoparo: bluso ↔ bluzo",
		"'Bluzo’ estas manikhava vestaĵo, dum <i>‘bluso’</i> estas malgaja muzikstilo el suda Usono.",
		"Ŝi ŝanĝis al <span style=\"color: #ff0000\">bluzoj</span> (blusoj) kaj ĵazo kaj elektis la nomon Simone en 1954."
	],
	"£:BASE-bluzo": [
		"£:BASE-bluzo",
		"Konfuzebla vortoparo: bluso ↔ bluzo",
		"'Bluzo’ estas manikhava vestaĵo, dum <i>‘bluso’</i> estas malgaja muzikstilo el suda Usono.",
		"Ŝi ŝanĝis al <span style=\"color: #ff0000\">bluzoj</span> (blusoj) kaj ĵazo kaj elektis la nomon Simone en 1954."
	],
	"£:BASE-pokalo": [
		"£:BASE-pokalo",
		"Konfuzebla vortoparo: bokalo → pokalo",
		"<i>'Bokalo’</i> (angle: jar) estas ronda ujo por konservi marmeladon, mielon k.s., dum <i>‘pokalo’</i> estas trinkvazo kun piedo, ankaŭ uzata kiel sporta trofeo. Trovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:cifereca&\"<ciferaj?n+>": [
		"£:cifereca&\"<ciferaj?n+>",
		"Konfuzebla vortoparo: cifera → cifereca",
		"'Cifera’ estas uzata en esprimoj kiel <i>‘cifera horloĝo’</i> aŭ <i>‘6-cifera pasvorto’.</i> Ĉi tie vi verŝajne celas <i>‘cifereca’</i> (angle: <i>digital</i>), kiu estas la kontraŭo de <i>‘analoga’</i> kaj uzatas en la kunteksto de datenoj, komputiloj, fotiloj kaj televido.<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-nombro&\"<ciferoj?n?>\"": [
		"£:BASE-nombro&\"<ciferoj?n?>\"",
		"Konfuzebla vortoparo: cifero → nombro",
		"Striktasence, <i>‘cifero’</i> estas signo, kiel litero, do nek nombro nek sumo aŭ kvanto. La nombron 12, ekzemple, oni skribe kunmetas el la ciferoj 1 kaj 2. Oni tamen tre ofte vidas metonimian uzon de <i>‘cifero’</i> kun la senco de <i>‘nombro’,</i> kaj <i>‘nombro’</i> oficiale estas uzebla ankaŭ ekster matematiko, kun la signifo de ‘sumo/kvanto’.<br>\n<br>\nPIV konsideras evitinda la uzon de <i>‘cifera’</i> kun ne-signa signifo, sed ReVo permesas ĝin. Lingvohelpilo proponas, ke vi decidu unufoje por ĉiam, kaj eventuale malŝaltu ĉi tiun markon en la agordoj.",
		"La <span style=\"color: #ff0000\">ciferoj</span> (nombroj) estis malbonaj lastjare, sed kreskis denove lastatempe."
	],
	"£:BASE-konveni&\"<dec.*>\"": [
		"£:BASE-konveni&\"<dec.*>\"",
		"Konfuzebla vortoparo: deci → konveni",
		"La vorto <i>‘deci’</i> aludas al normoj aŭ reguloj, al moroj, tradicio, bonedukiteco aŭ moralo. En pli neŭtrala kunteksto, uzu simple <i>‘konveni al’</i> aŭ <i>‘taŭgi por’.</i>",
		"Tiu koloro ne <span style=\"color: #ff0000\">decas</span> (konvenas) al brunulinoj."
	],
	"£:BASE-degeli": [
		"£:BASE-degeli",
		"Konfuzebla vortoparo: degeli ↔ fandiĝi",
		"Nu substancoj, kiuj normale estas likvaj ĉe endoma temperaturo, povas <i>degeli –</i> ekz. glacio, neĝo aŭ frostita lakto. Solidaĵoj, ekz. fero, fromaĝo aŭ butero, <i>fandiĝas,</i> kiam oni varmigas ilin.",
		"Multaj glaĉeroj rapide <span style=\"color: #c9211e\">fandiĝas</span> (degelas) dum la ĉiam pli varmaj someroj.<br>\n<br>\nLa fromaĝo <span style=\"color: #c9211e\">degelis</span> (fandiĝis) sur la varma metalo."
	],
	"£:BASE-fandigxi": [
		"£:BASE-fandigxi",
		"Konfuzebla vortoparo: degeli ↔ fandiĝi",
		"Nu substancoj, kiuj normale estas likvaj ĉe endoma temperaturo, povas <i>degeli –</i> ekz. glacio, neĝo aŭ frostita lakto. Solidaĵoj, ekz. fero, fromaĝo aŭ butero, <i>fandiĝas,</i> kiam oni varmigas ilin.",
		"Multaj glaĉeroj rapide <span style=\"color: #c9211e\">fandiĝas</span> (degelas) dum la ĉiam pli varmaj someroj.<br>\n<br>\nLa fromaĝo <span style=\"color: #c9211e\">degelis</span> (fandiĝis) sur la varma metalo."
	],
	"£:BASE-postuli&\"<devig.*>\"": [
		"£:BASE-postuli&\"<devig.*>\"",
		"Konfuzebla vortoparo: devigi ke →postuli ke",
		"Oni <i>‘devigas’</i> personon (fari ion), ne agon aŭ staton. Uzu <i>‘postuli’</i> anstataŭ <i>‘devigi’</i>, se sekvas ke-frazo kiel objekto.",
		"La regulo <span style=\"color: #ff0000\">devigis</span> (postulis), ke ĉiu teamano estu amatoro."
	],
	"£:BASE-digesti": [
		"£:BASE-digesti",
		"Konfuzebla vortoparo: diĝesti → digesti",
		"'Diĝesti’ signifas densigi aŭ elĉerpi literaturon por pli vasta aŭ superrigarda konsumo. <i>‘Digesti’</i> estas fiziologi procezo en la intestoj. Oni <i>digestas</i> manĝaĵon, sed <i>diĝestas</i> verkojn. Uzi la duan anstataŭ la unuan povas estis falsa amiko el la angla.",
		"Mi ne bone <span style=\"color: #ff0000\">diĝestas</span> (digestas) brasikon."
	],
	"£:BASE-paroli&\"<dir.*>\"": [
		"£:BASE-paroli&\"<dir.*>\"",
		"Konfuzebla vortoparo: diri ↔ paroli",
		"La verbo <i>‘diri’</i> bezonas objekton – substantivon aŭ (cititan) frazon. En sen-objekta frazo, anstataŭ <i>‘diri pri’</i> uzu <i>‘paroli pri’.</i>",
		"Bose kaj Einstein anticipe <span style=\"color: #ff0000\">diris</span> (parolis) pri tio, tial gxi nomigxas ankaux Bose-Einstein-kondensaĵo"
	],
	"£:BASE-damaĝi": [
		"£:BASE-damaĝi",
		"Konfuzebla vortoparo: domaĝi → damaĝi",
		"<i>'Damaĝi’</i> kaj<i> ‘domaĝi’</i> sonas tre simile, sed la unua signifas <i>‘difekti’,</i> dum la dua signifas <i>‘ne voli difekti/foruzi/dolorigi’.</i> Notu ankaŭ, ke <i>domaĝe</i> estas sinonimo de <i>‘bedaŭrinde’,</i> kaj <i>‘domaĝa’</i> signifas <i>‘bedaŭriga’.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Fulmo <span style=\"color: #ff0000\">domaĝis</span> (damaĝis) la turon"
	],
	"£:BASE-damaĝo": [
		"£:BASE-damaĝo",
		"Konfuzebla vortoparo: domaĝi → damaĝi",
		"<i>'Damaĝi’</i> kaj<i> ‘domaĝi’</i> sonas tre simile, sed la unua signifas <i>‘difekti’,</i> dum la dua signifas <i>‘ne voli difekti/foruzi/dolorigi’.</i> Notu ankaŭ, ke <i>domaĝe</i> estas sinonimo de <i>‘bedaŭrinde’,</i> kaj <i>‘domaĝa’</i> signifas <i>‘bedaŭriga’.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Fulmo <span style=\"color: #ff0000\">domaĝis</span> (damaĝis) la turon"
	],
	"£:BASE-kamp&\"<domenoj?j?>\"": [
		"£:BASE-kamp&\"<domenoj?j?>\"",
		"Konfuzebla vortoparo: domino ↔ domeno",
		"<i>'Domeno’</i> estas ludbriko aŭ vestaĵo, dum <i>‘domino’</i> estas superregado. Estas falsa amiko uzi la vorton <i>‘domeno’</i> en la senco de ‘kampo/fako’ (angle: <i>domain</i>). Se uzata entute, devus esti <i>‘domajno’ –</i> fakvorto normale nur uzata por retdomajnoj.",
		"Ili ludis <span style=\"color: #ff0000\">dominon</span> (domenon)."
	],
	"£:BASE-domeno&\"<dominoj?n?>\"": [
		"£:BASE-domeno&\"<dominoj?n?>\"",
		"Konfuzebla vortoparo: domino ↔ domeno",
		"<i>'Domeno’</i> estas ludbriko aŭ vestaĵo, dum <i>‘domino’</i> estas superregado. Estas falsa amiko uzi la vorton <i>‘domeno’</i> en la senco de ‘kampo/fako’ (angle: <i>domain</i>). Se uzata entute, devus esti <i>‘domajno’ –</i> fakvorto normale nur uzata por retdomajnoj.",
		"Ili ludis <span style=\"color: #ff0000\">dominon</span> (domenon)."
	],
	"£:BASE-povi&\"<ebl.*>\"": [
		"£:BASE-povi&\"<ebl.*>\"",
		"Konfuzebla vortoparo: ebli → povi",
		"La diferenco inter ‘<i>povi’</i> kaj ‘<i>ebli’</i> estas la rolo de la akompananta infinitivo. <i>‘Povi’</i> estas helpverbo kun infinitiva komplemento, dum eventuala infinitivo ĉe <i>‘ebli’</i> estas subjekto. Ne uzu <i>‘ebli’</i> kiel helpverbon. Do ne diru: <span style=\"color: #0000ff\"><i>Oni</i></span><i> ne</i><i></i> <span style=\"color: #ff0000\"><i>eblas</i></span><i></i> <span style=\"color: #ff0000\"><i>fari</i></span><i> tion.</i> Sed <i>‘fari tion’</i> povas esti subjekto de <i>‘ebli’,</i> anstataŭ alia subjekto: <span style=\"color: #0000ff\"><i>Fari tion</i></span><i> ne eblas.</i> <i>Ne eblas</i> <span style=\"color: #0000ff\"><i>fari tion</i></span><i>.</i><br>\n<br>\n<i>Mi ne povas helpi vin.</i><br>\n<br>\n<i>Ne eblas trovi tiun varon pli malmultekoste.</i><br>\n<br>\n<i>Sukceso ne eblos sen bona preparo.</i>",
		"Dum la UK oni ne <span style=\"color: #ff0000\">eblos</span> (povos) loĝi en la kongresejo"
	],
	"£:BASE-ebleco&\"<ebloj?n?>\"": [
		"£:BASE-ebleco&\"<ebloj?n?>\"",
		"Konfuzebla vortoparo: eblo → ebleco",
		"La vorto <i>‘eblo’</i> temas pri la povo fari ion aŭ pri io, kio povas okazi. <i>‘Ebleco’</i> estas eco de tia eblo, oni uzas ĝin en kunteksto de mezuro <i>(granda ebleco, multaj eblecoj</i>), komparo aŭ elekto <i>(de alia ebleco).</i> La nuntempa lingvouzo ne klare distingas la du vortojn, do ne eblas diri, ke temas pri eraro ĉi tie, kaj Lingvohelpilo tial nur celas atentigi kaj rekomendi eblan – en si mem koheran – distingon.",
		""
	],
	"£:BASE-efika&\"<efektivaj?n?>\"": [
		"£:BASE-efika&\"<efektivaj?n?>\"",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-efike&\"<efektive>\"": [
		"£:BASE-efike&\"<efektive>\"",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-efektive": [
		"£:BASE-efektive",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-efekta": [
		"£:BASE-efekta",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-efekte": [
		"£:BASE-efekte",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-efiko": [
		"£:BASE-efiko",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-efekto": [
		"£:BASE-efekto",
		"Konfuzebla vortoparo: efektiva ↔ efika ↔ efekta",
		"<i>'Efektiva/-e’</i> signifas <i>‘fakta/-e’</i> (angle: <i>actual, in fact</i>), dum ‘<i>efika/-e’</i> signifas <i>‘kun bona rezulto’</i> (angle: <i>effective</i>). <i>‘Efekta/-e’</i> koncernas la vekadon de atento kaj emocioj (angle: <i>effectual, spectacular</i>)<br>\n<br>\n<i>La nuda vetkuro tre efike famigis la eventon.</i><br>\n<br>\n<i>Oni efektive ne uzas Esperanton en usonaj lernejoj.</i><br>\n<br>\n<i>Modernaj infanfilmoj estas pli efektaj ol bildrakontoj.</i>",
		"La plej <span style=\"color: #ff0000\">efektiva</span> (efika) maniero"
	],
	"£:BASE-sama&\"<egalaj?n?>\"": [
		"£:BASE-sama&\"<egalaj?n?>\"",
		"Konfuzebla vortoparo: egala → sama",
		"<i>'Sama’</i> signifas <i>‘identa’,</i> dum <i>‘egala’</i> signifas <i>‘100% simila’.</i> La unua identigas, la dua komparas. Do oni povas diri <i>‘</i><b><i>la</i></b><i> sama …’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>la egala …</i></span><i>’,</i> kaj <i>‘egala</i> <b><i>al</i></b><i> …’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>sama al …</i></span><i>’.</i> Notu, ke en komparo la komparitoj povas egali (laŭ iu eco), sed ke la eco-mezuro do samas:<br>\n<br>\n<i>Ili estas</i> <b><i>egalaj</i></b><i> laŭ riĉeco, A estas</i> <b><i>egala</i></b><i> al B laŭ riĉeco</i><br>\n<br>\n<i>Sed: Ili estas</i> <b><i>same</i></b><i> riĉaj, li estas</i> <b><i>same</i></b><i> riĉa kiel …, la riĉeco estas la</i> <b><i>sama</i></b><br>\n<br>\n<i>kun egalaj paŝoj</i><br>\n<br>\n<i>tute egale, ĉu li estas blanka, nigra aŭ bruna</i><br>\n<br>\n<i>ili havas (la)</i> <span style=\"color: #ff0000\"><i>egalan</i></span><i> (saman) nomon.</i><br>\n<br>\n<i>Ili estas</i> <span style=\"color: #ff0000\"><i>egale</i></span><i> (same) grandaj.</i><br>\n<br>\n<i>La senco restas ĉiam</i> <span style=\"color: #ff0000\"><i>egala</i></span><i> (sama).</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-same&\"<egale>\"": [
		"£:BASE-same&\"<egale>\"",
		"Konfuzebla vortoparo: egala → sama",
		"<i>'Sama’</i> signifas <i>‘identa’,</i> dum <i>‘egala’</i> signifas <i>‘100% simila’.</i> La unua identigas, la dua komparas. Do oni povas diri <i>‘</i><b><i>la</i></b><i> sama …’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>la egala …</i></span><i>’,</i> kaj <i>‘egala</i> <b><i>al</i></b><i> …’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>sama al …</i></span><i>’.</i> Notu, ke en komparo la komparitoj povas egali (laŭ iu eco), sed ke la eco-mezuro do samas:<br>\n<br>\n<i>Ili estas</i> <b><i>egalaj</i></b><i> laŭ riĉeco, A estas</i> <b><i>egala</i></b><i> al B laŭ riĉeco</i><br>\n<br>\n<i>Sed: Ili estas</i> <b><i>same</i></b><i> riĉaj, li estas</i> <b><i>same</i></b><i> riĉa kiel …, la riĉeco estas la</i> <b><i>sama</i></b><br>\n<br>\n<i>kun egalaj paŝoj</i><br>\n<br>\n<i>tute egale, ĉu li estas blanka, nigra aŭ bruna</i><br>\n<br>\n<i>ili havas (la)</i> <span style=\"color: #ff0000\"><i>egalan</i></span><i> (saman) nomon.</i><br>\n<br>\n<i>Ili estas</i> <span style=\"color: #ff0000\"><i>egale</i></span><i> (same) grandaj.</i><br>\n<br>\n<i>La senco restas ĉiam</i> <span style=\"color: #ff0000\"><i>egala</i></span><i> (sama).</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:jam=de&\"<ekde>\"": [
		"£:jam=de&\"<ekde>\"",
		"Konfuzebla vortoparo: ekde → jam de",
		"La prepozicio <i>‘ekde’</i> rilatas al tempopunkto <i>(ekde hodiaŭ, ekde Kristnasko, ekde la 7-a de januaro).</i> Kun tempoperiodoj, uzu <i>‘jam de’:</i><br>\n<br>\n<i>Li laboras en la firmao</i> <span style=\"color: #ff0000\"><i>ekde</i></span><i> (jam de) 3 jaroj.</i><br>\n<br>\n<i>Ni konas unu la alian</i> <span style=\"color: #ff0000\"><i>ekde</i></span><i> (jam de) longa tempo.</i>",
		""
	],
	"£:BASE-ekonomia&\"<ekonomikaj?n?>\"": [
		"£:BASE-ekonomia&\"<ekonomikaj?n?>\"",
		"Konfuzebla vortoparo: ekonomika → ekonomia",
		"Ne konfuzu <i>‘ekonomia’</i> kaj <i>‘enkonomika’.</i> La unua estas la ĝenerala vorto (ekz. <i>ekonomia problemo/evoluo/premo)</i>, la dua rilatas nur al la scienco (angle: <i>economics,</i> ekz. <i>ekonomika termino/scienco/fakultato</i>).",
		"La kaŭzo de la rapida <span style=\"color: #ff0000\">ekonomika</span> (ekonomia) kresko estis la petrolindustrio."
	],
	"£:BASE-sekrecio": [
		"£:BASE-sekrecio",
		"Konfuzebla vortoparo: ekskrecii/o → sekrecii/o",
		"'Sekrecio’ estas glanda procezo, dum ‘ekskrecio’ estas la elimino de forĵetaĵoj ekster la organismon. Hormonglando ekz. sekrecias hormonojn, dum reno ekskrecias urinon.<br>\n<br>\nElstara fiziologo klarigas la Ĉeeston de rudimentaj organoj per la hipotezo ke ili servas por ekskrecii materialon kiu troas aŭ damaĝas al la sistemo .",
		"Iuj el ĉi tiuj plantidoj probable heredus la kapablon <span style=\"color: #ff0000\">ekskrecii</span> (sekrecii) nektaron ."
	],
	"£:BASE-sekrecii": [
		"£:BASE-sekrecii",
		"Konfuzebla vortoparo: ekskrecii/o → sekrecii/o",
		"'Sekrecio’ estas glanda procezo, dum ‘ekskrecio’ estas la elimino de forĵetaĵoj ekster la organismon. Hormonglando ekz. sekrecias hormonojn, dum reno ekskrecias urinon.<br>\n<br>\nElstara fiziologo klarigas la Ĉeeston de rudimentaj organoj per la hipotezo ke ili servas por ekskrecii materialon kiu troas aŭ damaĝas al la sistemo .",
		"Iuj el ĉi tiuj plantidoj probable heredus la kapablon <span style=\"color: #ff0000\">ekskrecii</span> (sekrecii) nektaron ."
	],
	"£:BASE-fazo&\"<epokoj?n?>\"": [
		"£:BASE-fazo&\"<epokoj?n?>\"",
		"Konfuzebla vortoparo: epoko → fazo",
		"'Epoko’ estas historia periodo kun propra karaktero, aŭ komencotempo de erao. Por tempoperiodo el persona vivo uzu <i>‘fazo’.</i>",
		"Ĉirkaŭ 850 desegnaĵoj konserviĝis el lia itala <span style=\"color: #ff0000\">epoko</span> (fazo)."
	],
	"£:BASE-ekzisti&\"<est.*>\"": [
		"£:BASE-ekzisti&\"<est.*>\"",
		"Konfuzebla vortoparo: esti → ekzisti",
		"La vorto <i>esti</i> havas multajn uzojn en Esperanto. Sed ĝi ĉiam bezonas komplementon alian ol subjekto. Povas temi pri predikativo, adverbialo aŭ helpverba komplemento:<br>\n<br>\nPredikativo: <i>li estas malsana / franco</i><br>\n<br>\nAdverbialo: <i>ŝi estas heime, estas domaĝe, ke …</i><br>\n<br>\n<i> Mi estas sen aŭto / el Turkio / por rekta demokratio</i><br>\n<br>\n<i> la libro estas de William Auld</i><br>\n<br>\nPasivo: <i>li ne estis invitita</i><br>\n<br>\nNe eblas uzi <i>‘esti’ –</i> sen predikativa komplemento – kun la signifo de <i>‘ekzisti’.</i>",
		"Depende de via tempo-disponeblo, <span style=\"color: #ff0000\">estas</span> (ekzistas) multaj ebloj:"
	],
	"£:BASE-etiketo&\"<etikedon?>\"": [
		"£:BASE-etiketo&\"<etikedon?>\"",
		"Konfuzebla vortoparo: etikedo ↔ etiketo",
		"'Etikedo’ estas nomŝildeto aŭ kategorinomo, dum <i>‘etiketo’</i> estas socia regularo. <i>‘Etiketo’</i> estas pli malnova vorto, kaj origine havis ambaŭ signifojn. Do oni foje vidas ĝin uzata anstataŭ <i>‘etikedo’,</i> sed Lingvohelpilo rekomendas klare distingi. Uzi <i>‘etikedo’</i> en la senco de socia regularo ĉiam estas erara.",
		"Okazos prelego pri retpoŝta etikedo (etiketo)."
	],
	"£:BASE-etikedo&\"<etiketoj?n?>\"": [
		"£:BASE-etikedo&\"<etiketoj?n?>\"",
		"Konfuzebla vortoparo: etikedo ↔ etiketo",
		"'Etikedo’ estas nomŝildeto aŭ kategorinomo, dum <i>‘etiketo’</i> estas socia regularo. <i>‘Etiketo’</i> estas pli malnova vorto, kaj origine havis ambaŭ signifojn. Do oni foje vidas ĝin uzata anstataŭ <i>‘etikedo’,</i> sed Lingvohelpilo rekomendas klare distingi. Uzi <i>‘etikedo’</i> en la senco de socia regularo ĉiam estas erara.",
		"Okazos prelego pri retpoŝta etikedo (etiketo)."
	],
	"£:BASE-falti": [
		"£:BASE-falti",
		"Konfuzebla vortoparo: falti ↔ faldi",
		"Oni faldas faldeblajn objektojn, ekz. paperon, seĝon, manojn aŭ gambojn. Faltoj, aliflanke, rilatas al surfacaj trajtoj, tipe haŭtaj faltoj en vizaĝo kaj faltitaj brovoj. Sed ankaŭ tereno aŭ, je alia skalo, montoj povas havi haltojn.<br>\n<br>\nLa paro <i>faldo/falto</i> estas tipa ekzemplo pri kiel Esperanto uzas malsamajn, sed similajn konsonantojn aŭ vokalojn por eviti eblan ambiguecon en la etimologia fontovorto (‘ĉi tie germana ‘<i>Falte’/’falten’)</i>",
		"La vino bele <span style=\"color: #ff0000\">faltis</span> (faldis) la buŝtukojn.<br>\n<br>\nŜia vizaĵo estis plena je ridetaj <span style=\"color: #ff0000\">faldoj</span> (faltoj)."
	],
	"£:BASE-falto": [
		"£:BASE-falto",
		"Konfuzebla vortoparo: falti ↔ faldi",
		"Oni faldas faldeblajn objektojn, ekz. paperon, seĝon, manojn aŭ gambojn. Faltoj, aliflanke, rilatas al surfacaj trajtoj, tipe haŭtaj faltoj en vizaĝo kaj faltitaj brovoj. Sed ankaŭ tereno aŭ, je alia skalo, montoj povas havi haltojn.<br>\n<br>\nLa paro <i>faldo/falto</i> estas tipa ekzemplo pri kiel Esperanto uzas malsamajn, sed similajn konsonantojn aŭ vokalojn por eviti eblan ambiguecon en la etimologia fontovorto (‘ĉi tie germana ‘<i>Falte’/’falten’)</i>",
		"La vino bele <span style=\"color: #ff0000\">faltis</span> (faldis) la buŝtukojn.<br>\n<br>\nŜia vizaĵo estis plena je ridetaj <span style=\"color: #ff0000\">faldoj</span> (faltoj)."
	],
	"£:BASE-faldi": [
		"£:BASE-faldi",
		"Konfuzebla vortoparo: falti ↔ faldi",
		"Oni faldas faldeblajn objektojn, ekz. paperon, seĝon, manojn aŭ gambojn. Faltoj, aliflanke, rilatas al surfacaj trajtoj, tipe haŭtaj faltoj en vizaĝo kaj faltitaj brovoj. Sed ankaŭ tereno aŭ, je alia skalo, montoj povas havi haltojn.<br>\n<br>\nLa paro <i>faldo/falto</i> estas tipa ekzemplo pri kiel Esperanto uzas malsamajn, sed similajn konsonantojn aŭ vokalojn por eviti eblan ambiguecon en la etimologia fontovorto (‘ĉi tie germana ‘<i>Falte’/’falten’)</i>",
		"La vino bele <span style=\"color: #ff0000\">faltis</span> (faldis) la buŝtukojn.<br>\n<br>\nŜia vizaĵo estis plena je ridetaj <span style=\"color: #ff0000\">faldoj</span> (faltoj)."
	],
	"£:BASE-foto": [
		"£:BASE-foto",
		"Konfuzebla vortoparo: fotografio → foto",
		"<i>'Fotografio’</i> estas arto/tekniko, dum la unuopa bildo nomiĝas <i>‘foto’.</i>",
		"Mi trovis malnovan nigra-blankan <span style=\"color: #ff0000\">fotografion</span> (foton) de la avino."
	],
	"£:BASE-frunto": [
		"£:BASE-frunto",
		"Konfuzebla vortoparo: frunto ↔ fronto",
		"<i>'Frunto’</i> havas nur anatomian signifon (angle: <i>forehead</i>). <i>‘Fronto’,</i> aliflanke, havas diversajn signifojn – milita fronto, antaŭa parto de konstruaĵo aŭ partio/organizaĵo.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<i>Post la falo, li sangis ĉe la</i> <span style=\"color: #ff0000\"><i>fronto</i></span><i> (frunto.)</i><br>\n<br>\n<i>Necesas sendi pli da tankoj al la orienta</i> <span style=\"color: #ff0000\"><i>frunto</i></span><i> (fronto).</i>"
	],
	"£:BASE-fronto": [
		"£:BASE-fronto",
		"Konfuzebla vortoparo: frunto ↔ fronto",
		"<i>'Frunto’</i> havas nur anatomian signifon (angle: <i>forehead</i>). <i>‘Fronto’,</i> aliflanke, havas diversajn signifojn – milita fronto, antaŭa parto de konstruaĵo aŭ partio/organizaĵo.<br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"<i>Post la falo, li sangis ĉe la</i> <span style=\"color: #ff0000\"><i>fronto</i></span><i> (frunto.)</i><br>\n<br>\n<i>Necesas sendi pli da tankoj al la orienta</i> <span style=\"color: #ff0000\"><i>frunto</i></span><i> (fronto).</i>"
	],
	"£:BASE-gxoji&\"<gaj.*>\"": [
		"£:BASE-gxoji&\"<gaj.*>\"",
		"Konfuzebla vortoparo: gaji → ĝoji",
		"<i>'Ĝoji’</i> kaj <i>‘gaji’</i> havas la saman bazan signifon (esti maltrista), sed <i>‘ĝoji’</i> permesas <i>ke-</i>propozicion aŭ infinitivon kiel komplementon.<br>\n<br>\nNotu, ke oni ĝojas <i>pri</i> aŭ <i>pro</i> io, kaj ke <i>‘ĝoji’</i> ne permesas substantivan, akuzativan komplementon por montri la kialon de la ĝojo. <i>Ĝojigi’</i> signifas ‘kaŭzi ĝojon al iu’.<br>\n<br>\nAlia simila vorto estas transitiva <i>‘gui’,</i> sed ĝia signifo estas iom alia ol tiu de <i>‘ĝoji pri’.</i> Oni ĝuas ekz. bonan manĝaĵon aŭ freŝan aeron, en pli rekta, sensa maniero ol kun <i>‘ĝoji pri’.</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>gajas</i></span><i> (ĝojas), ke vi povas veni.</i><br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>gajas</i></span><i> (ĝojas) vi revidi.</i>"
	],
	"£:BASE-gvardio": [
		"£:BASE-gvardio",
		"Konfuzebla vortoparo: gardo → gvardio",
		"En moderna Esperanto, <i>‘gardo’</i> estas simple la ago gardi (protekti per ĉeesto). Laŭ rekomendo de <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>, por la arkaika senco <i>‘gardantaro’,</i> prefere uzu tiun vorton aŭ <i>‘gvardio’.</i>",
		"La marborda <span style=\"color: #ff0000\">gardo</span> (gvardio) kaptis la kontrabandistojn."
	],
	"£:BASE-gaso&\"<gazoj?n?>\"": [
		"£:BASE-gaso&\"<gazoj?n?>\"",
		"Konfuzebla vortoparo: gazo → gaso",
		"<i>'Gazo’</i> estas maldika travidebla ŝtofo, kiun oni uzas ekz. por vualo aŭ vestoj, aŭ sur vundo. La similsona vorto <i>‘gaso’</i> celas substancojn kiel <i>aero, hidrogeno</i> kaj <i>oksigeno,</i> aŭ – pli specife – <i>brulgason (metanon).</i>",
		"Rusa <span style=\"color: #ff0000\">gazo</span> (gaso) – aŭ la manko de ĝi - fariĝis grava faktoro en la eŭropa militdiskuto."
	],
	"£:BASE-gxenerala&\"<generalaj?n?>\"": [
		"£:BASE-gxenerala&\"<generalaj?n?>\"",
		"Konfuzebla vortoparo: generala/o → ĝenerala/o",
		"'Generalo’ estas oficiro, dum la adjektiva radiko <i>‘ĝenerala’</i> signifas 'ne-specifika, ne limigita, ekz. <i>‘ĝenerala striko, ĝenerala stato’.</i> Ne uzu <i>'</i><span style=\"color: #ff0000\"><i>ĝeneralo</i></span><i>'</i> por la unua, aŭ <i>'</i><span style=\"color: #ff0000\"><i>generala</i></span><i>'</i> por la dua.",
		"Ŝia nomo nur estas en la <span style=\"color: #ff0000\">generala</span> (ĝenerala) listo, ne en la faka."
	],
	"£x-etype-lemma&\"generalo\"": [
		"£x-etype-lemma&\"generalo\"",
		"Konfuzebla vortoparo: generala/o → ĝenerala/o",
		"'Generalo’ estas oficiro, dum la adjektiva radiko <i>‘ĝenerala’</i> signifas 'ne-specifika, ne limigita, ekz. <i>‘ĝenerala striko, ĝenerala stato’.</i> Ne uzu <i>'</i><span style=\"color: #ff0000\"><i>ĝeneralo</i></span><i>'</i> por la unua, aŭ <i>'</i><span style=\"color: #ff0000\"><i>generala</i></span><i>'</i> por la dua.",
		"Ŝia nomo nur estas en la <span style=\"color: #ff0000\">generala</span> (ĝenerala) listo, ne en la faka."
	],
	"£:BASE-sxati&\"<gxoj.*>\"": [
		"£:BASE-sxati&\"<gxoj.*>\"",
		"Konfuzebla vortoparo: ĝoji → ŝati",
		"Eblas konfuzi <i>'ĝoji'</i> kaj <i>'ŝati'.</i> Oni <i>ĝojas</i> <b>sperti</b> ion (esti, havi, renkonti ...), sed <i>ŝatas</i> <b>fari</b> ion (agi, ludi, manĝi ...). La sperto/okazo pri kiu oni <i>ĝojas,</i> estas nuntempa, dum la ago-objekto de <i>ŝato</i> povas esti estonta. Tial, se oni uzas <i>'ŝati'</i> pri sperto, ne eblas uzi nuntempon (<i>'ŝatas'</i>), sed jes futuron (<i>'ŝatus'</i>).",
		"Mi <span style=\"color: #ff0000\">ĝojas</span> (ŝatas) kuiri, spekti filmojn kaj migri en la montoj.<br>\n<br>\nMi <span style=\"color: #ff0000\">ŝatas</span> (ĝojas/ŝatus) revidi vin."
	],
	"£:BASE-gracia": [
		"£:BASE-gracia",
		"Konfuzebla vortoparo: gracila → gracia",
		"'Gracila’ estas objektiva fizika trajto kaj signifas ‘rompeble maldika, fajna’, dum <i>‘gracia’</i> estas (pozitiva) subjektiva takso pri movo aŭ formo, aludanta belecon.",
		"Ŝi alproksimiĝis per gracilaj (graciaj) paŝoj."
	],
	"£:BASE-grado&\"<gradusoj?n?>\"": [
		"£:BASE-grado&\"<gradusoj?n?>\"",
		"Konfuzebla vortoparo: graduso → grado",
		"Eblas uzi <i>'grado'</i> por <i>'graduso',</i> sed ne inverse. <i>'Graduso'</i> nur havas la signifon de angula mezurunuo, en geometrio aŭ geografio, dum <i>'grado'</i> estas la ĝenerala vorto por mezurunuoj laŭ skalo, precipe uzata por temperaturo.",
		"La meza januara temperaturo en la lando estas 5 <span style=\"color: #ff0000\">gradusoj</span> (gradoj) sub nulo."
	],
	"£:BASE-greno": [
		"£:BASE-greno",
		"Konfuzebla vortoparo: greno ↔ grajno",
		"'Greno’ estas manĝebla herboplanto (ekz. tritiko, aveno, sekalo, hordeo, maizo), dum <i>‘grajno’</i> estas eta ero de io senstruktura, ekzemple de hajlo, sablo aŭ ĝuste de greno. La vorto ankaŭ povas havi la signifon de ‘semgrajno’ kaj havas metaforajn uzojn: <i>grajno da vero, grajno da malbono.</i>",
		"La firmao vendas transgenajn <span style=\"color: #ff0000\">grajnojn</span> (grenojn).<br>\n<br>\nLa Safrankardelo manĝas <span style=\"color: #ff0000\">grenojn</span> (grajnojn) de herboj kaj de floroj."
	],
	"£:BASE-grajno": [
		"£:BASE-grajno",
		"Konfuzebla vortoparo: greno ↔ grajno",
		"'Greno’ estas manĝebla herboplanto (ekz. tritiko, aveno, sekalo, hordeo, maizo), dum <i>‘grajno’</i> estas eta ero de io senstruktura, ekzemple de hajlo, sablo aŭ ĝuste de greno. La vorto ankaŭ povas havi la signifon de ‘semgrajno’ kaj havas metaforajn uzojn: <i>grajno da vero, grajno da malbono.</i>",
		"La firmao vendas transgenajn <span style=\"color: #ff0000\">grajnojn</span> (grenojn).<br>\n<br>\nLa Safrankardelo manĝas <span style=\"color: #ff0000\">grenojn</span> (grajnojn) de herboj kaj de floroj."
	],
	"£:BASE-cxesi&\"<halt.*>r": [
		"£:BASE-cxesi&\"<halt.*>r",
		"Konfuzebla vortoparo: halti → ĉesi",
		"Kaj <i>‘ĉesi’</i> kaj <i>‘halti’</i> signifas maldaŭrigon (angle: <i>stop</i>), kaj ambaŭ uzeblas netransitive, sed nur <i>‘ĉesi’</i> permesas infinitivan komplementon.<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>haltis</i></span><i> (ĉesis) labori.</i><br>\n<br>\n<i>Finfine,</i> <span style=\"color: #ff0000\"><i>haltis</i></span><i> (ĉesis) pluvi.</i><br>\n<br>\n<i>'Halti’</i> signifas ‘ĉesi moviĝi’: <i>La buso / promenanto haltis</i><br>\n<br>\nKun proceza aŭ okazaĵa subjekto, <i>‘ĉesi’</i> signifas ‘finiĝi’: <i>La milito / kantado ĉesis.</i><br>\n<br>\nKun homa subjekto kaj infinitiva komplemento, <i>‘ĉesi’</i> signifas ‘fini (propran) agadon’: <i>Li ĉesis labori / helpi / tajpi</i><br>\n<br>\nNotu, ke por akuzativa komplemento, necesas aldoni <i>-ig.</i> Oni <i>ĉesigas</i> procezon aŭ la agadon de alia persono.",
		""
	],
	"£:BASE-hxano&\"<kanoj?n?>\"": [
		"£:BASE-hxano&\"<kanoj?n?>\"",
		"Konfuzebla vortoparo: ĥano ↔ kano",
		"'Kano’ estas planto, dum <i>‘ĥano’</i> estas titolo de turka aŭ mongola reganto.",
		"Ĉiuj timis la grandan <span style=\"color: #c9211e\">kanon</span> (ĥanon)."
	],
	"£:BASE-helico&\"<helikoj?n?>\"": [
		"£:BASE-helico&\"<helikoj?n?>\"",
		"Konfuzebla vortoparo: heliko → helico",
		"'Heliko’ estas ŝlima besto kun konko, parenca al limako. <i>‘Helico’</i> estas teknika vorto por ŝraŭba formo, kaj por la puŝantaj helicoj de ŝipo aŭ aviadilo.<br>\n<br>\nNotu, ke oni ankaŭ povas uzi la vorton <i>‘heliko’</i> kiel sinonimo de arobo (£-signo).",
		"DNA havas la formon de duobla <span style=\"color: #ff0000\">heliko</span> (helico)."
	],
	"£:BASE-hierarkio": [
		"£:BASE-hierarkio",
		"Konfuzebla vortoparo: hierarko → hierarkio",
		"<i>'Hierarko'</i> estas malofta vorto por certa speco de kristana ĉefpastro. Ne konfuzu tion kun la koncepto de <i>'hierarkio'.</i>",
		"La reĝo estas en la pinto de la administra <span style=\"color: #ff0000\">hierarko</span> (hierarkio)."
	],
	"£:BASE-humuro": [
		"£:BASE-humuro",
		"Konfuzebla vortoparo: humoro ↔ humuro",
		"'Humoro’ estas (bona/malbona) animstato, dum <i>‘humuro’</i> temas pri ŝercemo kaj rid(ig)o.<br>\n<br>\nNotu, ke nek unu nek alia rilatas al korpolikvoj:<br>\n<br>\n<span style=\"color: #ff0000\"><i>humora</i></span><i> (korpolikva) medicino</i>",
		"Li estis en festema <span style=\"color: #ff0000\">humuro</span> (humoro).<br>\n<br>\nLa libro estis plena de subtila <span style=\"color: #ff0000\">humoro</span> (humuro)."
	],
	"£:BASE-humoro": [
		"£:BASE-humoro",
		"Konfuzebla vortoparo: humoro ↔ humuro",
		"'Humoro’ estas (bona/malbona) animstato, dum <i>‘humuro’</i> temas pri ŝercemo kaj rid(ig)o.<br>\n<br>\nNotu, ke nek unu nek alia rilatas al korpolikvoj:<br>\n<br>\n<span style=\"color: #ff0000\"><i>humora</i></span><i> (korpolikva) medicino</i>",
		"Li estis en festema <span style=\"color: #ff0000\">humuro</span> (humoro).<br>\n<br>\nLa libro estis plena de subtila <span style=\"color: #ff0000\">humoro</span> (humuro)."
	],
	"£:BASE-humura": [
		"£:BASE-humura",
		"Konfuzebla vortoparo: humoro ↔ humuro",
		"'Humoro’ estas (bona/malbona) animstato, dum <i>‘humuro’</i> temas pri ŝercemo kaj rid(ig)o.<br>\n<br>\nNotu, ke nek unu nek alia rilatas al korpolikvoj:<br>\n<br>\n<span style=\"color: #ff0000\"><i>humora</i></span><i> (korpolikva) medicino</i>",
		"Li estis en festema <span style=\"color: #ff0000\">humuro</span> (humoro).<br>\n<br>\nLa libro estis plena de subtila <span style=\"color: #ff0000\">humoro</span> (humuro)."
	],
	"£:BASE-korpolikva": [
		"£:BASE-korpolikva",
		"Konfuzebla vortoparo: humoro ↔ humuro",
		"'Humoro’ estas (bona/malbona) animstato, dum <i>‘humuro’</i> temas pri ŝercemo kaj rid(ig)o.<br>\n<br>\nNotu, ke nek unu nek alia rilatas al korpolikvoj:<br>\n<br>\n<span style=\"color: #ff0000\"><i>humora</i></span><i> (korpolikva) medicino</i>",
		"Li estis en festema <span style=\"color: #ff0000\">humuro</span> (humoro).<br>\n<br>\nLa libro estis plena de subtila <span style=\"color: #ff0000\">humoro</span> (humuro)."
	],
	"£:BASE-impliki": [
		"£:BASE-impliki",
		"Konfuzebla vortoparo: impliki ↔ implici",
		"Oni <i>implicas</i> fakton aŭ circonstancon (angle: <i>imply</i>), sed <i>implikas</i> personon aŭ aĵon. <i>‘Implici’</i> signifas ‘supozigi’ aŭ ‘logike sekviki’, <i>‘impliki’</i> signifas ‘ĝene entordigi/enplektigi’ (angle: <i>entangle</i>):<br>\n<br>\n<i>Ĉu vi volas implici, ke UEA estas sektisma?</i><br>\n<br>\n<i>Li sin implikis per siaj agoj.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Lia silento <span style=\"color: #ff0000\">implikas</span> (implicas) konsenton.<br>\n<br>\nLi estis <span style=\"color: #ff0000\">implicita</span> (implikita) en la krimon."
	],
	"£:BASE-implici": [
		"£:BASE-implici",
		"Konfuzebla vortoparo: impliki ↔ implici",
		"Oni <i>implicas</i> fakton aŭ circonstancon (angle: <i>imply</i>), sed <i>implikas</i> personon aŭ aĵon. <i>‘Implici’</i> signifas ‘supozigi’ aŭ ‘logike sekviki’, <i>‘impliki’</i> signifas ‘ĝene entordigi/enplektigi’ (angle: <i>entangle</i>):<br>\n<br>\n<i>Ĉu vi volas implici, ke UEA estas sektisma?</i><br>\n<br>\n<i>Li sin implikis per siaj agoj.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		"Lia silento <span style=\"color: #ff0000\">implikas</span> (implicas) konsenton.<br>\n<br>\nLi estis <span style=\"color: #ff0000\">implicita</span> (implikita) en la krimon."
	],
	"£:BASE-imposto": [
		"£:BASE-imposto",
		"Konfuzebla vortoparo: impoŝto → imposto",
		"'Impoŝto’ estas bazŝtono sub volbo aŭ arĉo – malofte uzata vorto. Plej verŝajne vi celas la vorton <i>‘imposto’,</i> kiu signifas ‘deviga civitana pago al la ŝato\".",
		"La registaro denove altigis la <span style=\"color: #ff0000\">impoŝtojn</span> (impostojn)."
	],
	"£:BASE-konigi&\"<inform.*>\"": [
		"£:BASE-konigi&\"<inform.*>\"",
		"Konfuzebla vortoparo: informi → konigi",
		"Oni <i>‘informas’</i> personon <i>‘pri ...’</i> aŭ <i>‘ke …’</i>. La novaĵo aŭ fakto, pri kiu oni informas, ne povas esti substantiva aŭ pronoma objekto de <i>‘informi’.</i> Por tio, uzu ekz. <i>‘konigi’</i> aŭ <i>‘anonci’</i><i>.</i>",
		"Kion vi deziras <span style=\"color: #ff0000\">informi</span> (konigi)?<br>\n<br>\n<span style=\"color: #ff0000\">Kion</span> (Kiun, Pri kio) vi deziras informi?"
	],
	"£:BASE-inkao": [
		"£:BASE-inkao",
		"Konfuzebla vortoparo: inko → inkao",
		"<i>'Inko’</i> estas kolora skribo-fluaĵo, dum <i>‘inkao’</i> estas historia sudamerika indiana reganto.",
		"Ili servis al la sundio kaj al la reganta <span style=\"color: #ff0000\">inko</span> (inkao)."
	],
	"£:BASE-intensa&\"<intencaj?n?>\"": [
		"£:BASE-intensa&\"<intencaj?n?>\"",
		"Konfuzebla vortoparo: intenca ↔ intensa",
		"Ne konfuzu <i>‘intenca’</i> kun <i>‘intensa’</i>. La unua signifas \"konscia/vola\", la dua signifas ‘plenforta/energia’.",
		"Vi ne kopiis la mesaĝon al Petro. Ĉu <span style=\"color: #ff0000\">intense</span> (intence)?<br>\n<br>\nMi volas organizi <span style=\"color: #ff0000\">intencan</span> (intensan) semajnfinan kurson."
	],
	"£:BASE-intenca&\"<intensaj?n?>\"": [
		"£:BASE-intenca&\"<intensaj?n?>\"",
		"Konfuzebla vortoparo: intenca ↔ intensa",
		"Ne konfuzu <i>‘intenca’</i> kun <i>‘intensa’</i>. La unua signifas \"konscia/vola\", la dua signifas ‘plenforta/energia’.",
		"Vi ne kopiis la mesaĝon al Petro. Ĉu <span style=\"color: #ff0000\">intense</span> (intence)?<br>\n<br>\nMi volas organizi <span style=\"color: #ff0000\">intencan</span> (intensan) semajnfinan kurson."
	],
	"£:BASE-irido": [
		"£:BASE-irido",
		"Konfuzebla vortoparo: iriso ↔ irido",
		"<i>'Iriso’</i> estas la kolora muskolo en la okulo. Por la floro, uzu <i>‘irido’.</i>",
		"Floris flavaj marĉaj <span style=\"color: #ff0000\">irisoj</span> (iridoj) laŭ la rivereto."
	],
	"£:BASE-iriso": [
		"£:BASE-iriso",
		"Konfuzebla vortoparo: iriso ↔ irido",
		"<i>'Iriso’</i> estas la kolora muskolo en la okulo. Por la floro, uzu <i>‘irido’.</i>",
		"Floris flavaj marĉaj <span style=\"color: #ff0000\">irisoj</span> (iridoj) laŭ la rivereto."
	],
	"£:BASE-jxudo": [
		"£:BASE-jxudo",
		"Konfuzebla vortoparo: judo → ĵudo",
		"'Judo’ estas ano de judismo, dum <i>‘ĵudo’</i> estas sporto.",
		"Li praktikis <span style=\"color: #ff0000\">judon</span> (ĵudon) kaj plurajn aliajn sportoj je alta nivelo."
	],
	"£:BASE-jxuro": [
		"£:BASE-jxuro",
		"Konfuzebla vortoparo: juro ↔ ĵuro",
		"<i>'Juro’</i> estas leĝa regulsistemo, dum <i>‘ĵuro’</i> estas solena promeso. En pluralo aŭ kun ke-komplemento plej ofte temas pri<i> ĵuro</i>.<br>\n<br>\nNotu, ke ekzistas tria simila vorto, <i>‘ĵurio’,</i> kun la signifoj de (a) ‘laika tribunalo’ kaj (b) ‘juĝantaro en konkurso’.",
		"Li <span style=\"color: #ff0000\">juris</span> (ĵuris) esti fidela ĝis la morto."
	],
	"£:BASE-jxuri": [
		"£:BASE-jxuri",
		"Konfuzebla vortoparo: juro ↔ ĵuro",
		"<i>'Juro’</i> estas leĝa regulsistemo, dum <i>‘ĵuro’</i> estas solena promeso. En pluralo aŭ kun ke-komplemento plej ofte temas pri<i> ĵuro</i>.<br>\n<br>\nNotu, ke ekzistas tria simila vorto, <i>‘ĵurio’,</i> kun la signifoj de (a) ‘laika tribunalo’ kaj (b) ‘juĝantaro en konkurso’.",
		"Li <span style=\"color: #ff0000\">juris</span> (ĵuris) esti fidela ĝis la morto."
	],
	"£:BASE-juro": [
		"£:BASE-juro",
		"Konfuzebla vortoparo: juro ↔ ĵuro",
		"<i>'Juro’</i> estas leĝa regulsistemo, dum <i>‘ĵuro’</i> estas solena promeso. En pluralo aŭ kun ke-komplemento plej ofte temas pri<i> ĵuro</i>.<br>\n<br>\nNotu, ke ekzistas tria simila vorto, <i>‘ĵurio’,</i> kun la signifoj de (a) ‘laika tribunalo’ kaj (b) ‘juĝantaro en konkurso’.",
		"Li <span style=\"color: #ff0000\">juris</span> (ĵuris) esti fidela ĝis la morto."
	],
	"£:BASE-justico&\"<justecoj?n?>\"": [
		"£:BASE-justico&\"<justecoj?n?>\"",
		"Konfuzebla vortoparo: justico ↔ justeco",
		"La diferenco inter <i>‘justeco’</i> kaj <i>‘justico’</i> estas, ke la unua celas la econ esti justa, dum la dua temas pri la jura sistemo, kaj la juraj instancoj, kiel tuto.",
		"La <span style=\"color: #c9211e\">justeco</span> (justico) de mia lando laboras malrapide."
	],
	"£:BASE-kamerao&\"<kameroj?n?>\"": [
		"£:BASE-kamerao&\"<kameroj?n?>\"",
		"Konfuzebla vortoparo: kamero ↔ kamerao",
		"'Kamero’ estas malgranda ĉambro, dum <i>‘kamerao’</i> estas filmilo. Notu ankaŭ la diferencon de <i>'kamerao'</i> (por filmi) kaj <i>'fotilo'</i> (por foti).",
		"Oni filmis la transdonon per kaŝita <span style=\"color: #ff0000\">kamero</span> (kamerao).<br>\n<br>\nVia <span style=\"color: #ff0000\">kamerao</span> (fotilo) faras tre belajn fotojn."
	],
	"£:BASE-kamerao&\"<fotiloj?n?>\"": [
		"£:BASE-kamerao&\"<fotiloj?n?>\"",
		"Konfuzebla vortoparo: kamero ↔ kamerao",
		"'Kamero’ estas malgranda ĉambro, dum <i>‘kamerao’</i> estas filmilo. Notu ankaŭ la diferencon de <i>'kamerao'</i> (por filmi) kaj <i>'fotilo'</i> (por foti).",
		"Oni filmis la transdonon per kaŝita <span style=\"color: #ff0000\">kamero</span> (kamerao).<br>\n<br>\nVia <span style=\"color: #ff0000\">kamerao</span> (fotilo) faras tre belajn fotojn."
	],
	"£:BASE-kaporo": [
		"£:BASE-kaporo",
		"Konfuzebla vortoparo: kapero → kaporo",
		"'Kapero’ estas malbonintenca, perforta transpreno de veturilo aŭ maŝino, dum <i>‘kaporo’</i> estas la konservitaj, manĝeblaj burĝonoj de kaporarbusto.",
		"Oni povas plibonigi la saŭcon uzante <span style=\"color: #ff0000\">kaperojn</span> (kaporojn)."
	],
	"£:BASE-kapitulaci": [
		"£:BASE-kapitulaci",
		"Konfuzebla vortoparo: kapituli/kapitulacii → kapitulaci",
		"Armeo aŭ urbo <i>kapitulacas.</i> Estas erare diri <i>kapitulacias</i> aŭ <i>kapitulas.</i> La unua estas simpla ortografia eraro (aŭ falsa amiko), la dua estas misuzo de la substantiva radiko <i>‘kapitulo’</i> (infloresko aŭ gvidantaro).",
		"<i>Venezuelo ne</i> <span style=\"color: #ff0000\"><i>kapitulacias</i></span><i> (kapitulacas).</i><br>\n<br>\n<i>La mapuĉoj</i> <span style=\"color: #ff0000\"><i>kapitulis</i></span><i> (kapitulacis) en 1883.</i>"
	],
	"£:BASE-kapitulaco": [
		"£:BASE-kapitulaco",
		"Konfuzebla vortoparo: kapituli/kapitulacii → kapitulaci",
		"Armeo aŭ urbo <i>kapitulacas.</i> Estas erare diri <i>kapitulacias</i> aŭ <i>kapitulas.</i> La unua estas simpla ortografia eraro (aŭ falsa amiko), la dua estas misuzo de la substantiva radiko <i>‘kapitulo’</i> (infloresko aŭ gvidantaro).",
		"<i>Venezuelo ne</i> <span style=\"color: #ff0000\"><i>kapitulacias</i></span><i> (kapitulacas).</i><br>\n<br>\n<i>La mapuĉoj</i> <span style=\"color: #ff0000\"><i>kapitulis</i></span><i> (kapitulacis) en 1883.</i>"
	],
	"£:BASE-kapriolo": [
		"£:BASE-kapriolo",
		"Konfuzebla vortoparo: kapriolo ↔ kapreolo",
		"'Kapreolo’ estas speco de eta cervo, dum <i>‘kapriolo’</i> estas petola, subita, ofte salta, ago (aŭ metafore, konduto).",
		"Ŝi estis svelta kiel juna <span style=\"color: #ff0000\">kapriolo</span> (kapreolo).<br>\n<br>\nSur la trankvila marsurfaco, delfeno lude faris transkapiĝojn kaj <span style=\"color: #ff0000\">kapreolojn</span> (kapriolojn)."
	],
	"£:BASE-kapreolo": [
		"£:BASE-kapreolo",
		"Konfuzebla vortoparo: kapriolo ↔ kapreolo",
		"'Kapreolo’ estas speco de eta cervo, dum <i>‘kapriolo’</i> estas petola, subita, ofte salta, ago (aŭ metafore, konduto).",
		"Ŝi estis svelta kiel juna <span style=\"color: #ff0000\">kapriolo</span> (kapreolo).<br>\n<br>\nSur la trankvila marsurfaco, delfeno lude faris transkapiĝojn kaj <span style=\"color: #ff0000\">kapreolojn</span> (kapriolojn)."
	],
	"£:BASE-alta&\"<karaj?n?>\"": [
		"£:BASE-alta&\"<karaj?n?>\"",
		"Konfuzebla vortoparo: kara → alta (prezo)",
		"La vorto <i>‘kara’</i> havas du signifojn, (a) ‘amata’ kaj (b) ‘multekosta’. Do aĵoj povas esti karaj (multekostaj), sed la prezo aŭ kosto ne estas <i>kara,</i> sed <i>alta.</i>",
		"Ĉar ili venis lastminute, ili devis pagi <span style=\"color: #c9211e\">kara</span> (altan) prezon por la bileto."
	],
	"£:BASE-malalta&\"<malkaraj?n?>\"": [
		"£:BASE-malalta&\"<malkaraj?n?>\"",
		"Konfuzebla vortoparo: kara → alta (prezo)",
		"La vorto <i>‘kara’</i> havas du signifojn, (a) ‘amata’ kaj (b) ‘multekosta’. Do aĵoj povas esti karaj (multekostaj), sed la prezo aŭ kosto ne estas <i>kara,</i> sed <i>alta.</i>",
		"Ĉar ili venis lastminute, ili devis pagi <span style=\"color: #c9211e\">kara</span> (altan) prezon por la bileto."
	],
	"£:BASE-karaktro": [
		"£:BASE-karaktro",
		"Konfuzebla vortoparo: karaktero → karaktro",
		"'Karaktero’ celas la psikan, individuan ecaron de persono, dum <i>‘karaktro’</i> estas neologisma faktermino por litero aŭ alia tajpsigno.",
		"Komence mi havis malfacilaĵojn kun esperantaj <span style=\"color: #ff0000\">karakteroj</span> (karaktroj) en mia telefono."
	],
	"£:BASE-karbo&\"<karbonoj?n?>\"": [
		"£:BASE-karbo&\"<karbonoj?n?>\"",
		"Konfuzebla vortoparo: karbono → karbo",
		"'Karbono’ estas ĥemia elemento, <i>‘karbo’</i> estas materialo.",
		"La germana industrio bruligis multe da <span style=\"color: #c9211e\">karbono</span> (karbo)."
	],
	"£:BASE-kaverno": [
		"£:BASE-kaverno",
		"Konfuzebla vortoparo: kavo → kaverno",
		"<i>'Kavo’</i> estas pli ĝenerala vorto ol <i>‘kaverno’. ‘Kavo’</i> estas ĉia malplenaĵo en io solida, fermita aŭ ne, ankaŭ en surfaco: <i>kavo en tero, fromaĝo, organo etc.</i> (angle: <i>hole</i>).<br>\n<br>\n<i>‘Kaverno’</i> estas relative granda kaj profunda, subtera kavo kun enirejo (angle: <i>cave</i>), aŭ kavo en organo aŭ arbo, formita pro malsano.",
		"Ili esploris la <span style=\"color: #ff0000\">kavon</span> (kavernon) kaj ĝiajn belajn kristalojn."
	],
	"£:BASE-komisiono": [
		"£:BASE-komisiono",
		"Konfuzebla vortoparo: komisio → komisiono",
		"'Komisio' estas tasko aŭ taskigo. Estas arkaismo uzi la vorto en la senco de <i>'komisiono'</i> (grupo de taskigitoj).<br>\n<br>\nNotu, ke <i>'komisio'</i> nur celas la taskon, ne eventualan pagon ricevotan pro la tasko. Por tio, uzu <i>'komisipago'.</i>",
		"La verdikto estos decidita de <span style=\"color: #ff0000\">komisio</span> (komisiono) konstituita de militistaj oficiroj."
	],
	"£:BASE-komisipago": [
		"£:BASE-komisipago",
		"Konfuzebla vortoparo: komisio → komisiono",
		"'Komisio' estas tasko aŭ taskigo. Estas arkaismo uzi la vorto en la senco de <i>'komisiono'</i> (grupo de taskigitoj).<br>\n<br>\nNotu, ke <i>'komisio'</i> nur celas la taskon, ne eventualan pagon ricevotan pro la tasko. Por tio, uzu <i>'komisipago'.</i>",
		"La verdikto estos decidita de <span style=\"color: #ff0000\">komisio</span> (komisiono) konstituita de militistaj oficiroj."
	],
	"£x-etype-lemma&\".*komisionoj?n?\"": [
		"£x-etype-lemma&\".*komisionoj?n?\"",
		"Konfuzebla vortoparo: komisio → komisiono",
		"'Komisio' estas tasko aŭ taskigo. Estas arkaismo uzi la vorto en la senco de <i>'komisiono'</i> (grupo de taskigitoj).<br>\n<br>\nNotu, ke <i>'komisio'</i> nur celas la taskon, ne eventualan pagon ricevotan pro la tasko. Por tio, uzu <i>'komisipago'.</i>",
		"La verdikto estos decidita de <span style=\"color: #ff0000\">komisio</span> (komisiono) konstituita de militistaj oficiroj."
	],
	"£:BASE-rekompenci": [
		"£:BASE-rekompenci",
		"Konfuzebla vortoparo: kompensi → rekompenci",
		"Oni <i>kompensas</i> elspezon, perdon aŭ damaĝon (al iu), per mono, laŭ la valoro de la perdo. La verbo <i>‘rekompenci’</i> havas similan signifon, sed ĝia rekta objekto celas la personon, ne la perdon:<br>\n<br>\n<i>Post la akcidento, la asekurkompanio kompensis al li</i> <b><i>la damaĝon</i></b><i>.</i><br>\n<br>\n<i>La asekurkompanio</i> <span style=\"color: #ff0000\"><i>kompensis</i></span><i> (rekompencis)</i> <b><i>lin</i></b><i>, pagante novan aŭton.</i>",
		""
	],
	"£:BASE-komposxti": [
		"£:BASE-komposxti",
		"Konfuzebla vortoparo: komposti ↔ komposxti",
		"Oni <i>'kompostas'</i> tekstojn por presi kaj publikigi ilin. Oni <i>'kompoŝtas'</i> (organikan) rubon por produkti fekundan teraĵon aŭ gason.",
		"En la ĝardeno ili <span style=\"color: #ff0000\">kompostis</span> (kompoŝtis) falintajn foliojn, falĉitan herbon kaj la restaĵojn el la kuirejo."
	],
	"£:BASE-komposti": [
		"£:BASE-komposti",
		"Konfuzebla vortoparo: komposti ↔ komposxti",
		"Oni <i>'kompostas'</i> tekstojn por presi kaj publikigi ilin. Oni <i>'kompoŝtas'</i> (organikan) rubon por produkti fekundan teraĵon aŭ gason.",
		"En la ĝardeno ili <span style=\"color: #ff0000\">kompostis</span> (kompoŝtis) falintajn foliojn, falĉitan herbon kaj la restaĵojn el la kuirejo."
	],
	"£:BASE-konekso": [
		"£:BASE-konekso",
		"Konfuzebla vortoparo: konekto → konekso",
		"En Esperanto, laŭ ReVo, eblas distingi inter <i>‘konekto’</i> kaj <i>‘konekso’.</i> La unua estas fizika ligo, la dua abstrakta, koncepta, logika. Oni parolas pri (mal)bonaj retaj, trajnaj aŭ elektraj <i>konektoj</i>, sed pri <i>konekso</i> inter ideoj, vortoj aŭ okazaĵoj. PIV simile distingas inter <i>‘konektita’</i> kaj <i>‘koneksa’.</i> En la angla, ambaŭ substantivoj tradukiĝas per <i>‘connection’</i> or <i>‘link’,</i> sed en la germana <i>‘konekto’</i> estas <i>‘Verbindung’,</i> dum <i>‘konekso’</i> estas <i>‘Zusammenhang’.</i> Depende de la gepatra lingvo, ne ĉiuj esperantistoj konscias pri tiu distingo. Do ne temas pri vera eraro, sed pri niveloj de precizeco.",
		"Ŝi sukcesis brile trovi neatenditajn <span style=\"color: #ff0000\">konektojn</span> (koneksojn) inter diversaj ideoj"
	],
	"£:BASE-koneksa": [
		"£:BASE-koneksa",
		"Konfuzebla vortoparo: konekto → konekso",
		"En Esperanto, laŭ ReVo, eblas distingi inter <i>‘konekto’</i> kaj <i>‘konekso’.</i> La unua estas fizika ligo, la dua abstrakta, koncepta, logika. Oni parolas pri (mal)bonaj retaj, trajnaj aŭ elektraj <i>konektoj</i>, sed pri <i>konekso</i> inter ideoj, vortoj aŭ okazaĵoj. PIV simile distingas inter <i>‘konektita’</i> kaj <i>‘koneksa’.</i> En la angla, ambaŭ substantivoj tradukiĝas per <i>‘connection’</i> or <i>‘link’,</i> sed en la germana <i>‘konekto’</i> estas <i>‘Verbindung’,</i> dum <i>‘konekso’</i> estas <i>‘Zusammenhang’.</i> Depende de la gepatra lingvo, ne ĉiuj esperantistoj konscias pri tiu distingo. Do ne temas pri vera eraro, sed pri niveloj de precizeco.",
		"Ŝi sukcesis brile trovi neatenditajn <span style=\"color: #ff0000\">konektojn</span> (koneksojn) inter diversaj ideoj"
	],
	"£:BASE-konfesio": [
		"£:BASE-konfesio",
		"Konfuzebla vortoparo: konfeso → konfesio",
		"'Konfeso’ estas la ago konfesi ion (ekz. krimon), dum <i>‘konfesio’</i> estas religia komunumo aŭ kredosistemo.",
		"Zamenhof estis judo laŭ sia religia <span style=\"color: #ff0000\">konfeso</span> (konfesio)."
	],
	"£:BASE-scii&\"<kon.*>\"": [
		"£:BASE-scii&\"<kon.*>\"",
		"Konfuzebla vortoparo: koni ↔ scii",
		"Oni <i>konas</i> ion aŭ iun, ĉar oni jam antaŭe renkontis, vidis aŭ spertis la koncernan aferon (germane: <i>kennen</i>). ‘<i>Scii’</i> signifas havi precisan mensan informaron pri io (germane: <i>wissen</i>). Ambaŭ verboj estas transitivaj, sed <i>‘koni’</i> havas substantivan komplementon, dum <i>scii</i> permesas infinitivon aŭ propozician <i>ke-</i>komplementon. Oni <i>konas</i> urbon aŭ personon, sed <i>scias</i> naĝi aŭ<i> scias</i> lingvon. Notu, ke oni ofte uzas <i>‘scipovi’</i> kun infinitiva aŭ substantiva komplemento, sed ne kun <i>ke-</i>propozicio.",
		"Ĉu vi <span style=\"color: #ff0000\">konas</span> (scias/scipovas) la francan?<br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>scias</i></span><i> (konas) bonan lignaĵiston, kiu povas helpi vin.</i>"
	],
	"£:BASE-koni&\"<sci.*>\"": [
		"£:BASE-koni&\"<sci.*>\"",
		"Konfuzebla vortoparo: koni ↔ scii",
		"Oni <i>konas</i> ion aŭ iun, ĉar oni jam antaŭe renkontis, vidis aŭ spertis la koncernan aferon (germane: <i>kennen</i>). ‘<i>Scii’</i> signifas havi precisan mensan informaron pri io (germane: <i>wissen</i>). Ambaŭ verboj estas transitivaj, sed <i>‘koni’</i> havas substantivan komplementon, dum <i>scii</i> permesas infinitivon aŭ propozician <i>ke-</i>komplementon. Oni <i>konas</i> urbon aŭ personon, sed <i>scias</i> naĝi aŭ<i> scias</i> lingvon. Notu, ke oni ofte uzas <i>‘scipovi’</i> kun infinitiva aŭ substantiva komplemento, sed ne kun <i>ke-</i>propozicio.",
		"Ĉu vi <span style=\"color: #ff0000\">konas</span> (scias/scipovas) la francan?<br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>scias</i></span><i> (konas) bonan lignaĵiston, kiu povas helpi vin.</i>"
	],
	"£:BASE-ekscii&\"<ekkon.*>\"": [
		"£:BASE-ekscii&\"<ekkon.*>\"",
		"Konfuzebla vortoparo: koni ↔ scii",
		"Oni <i>konas</i> ion aŭ iun, ĉar oni jam antaŭe renkontis, vidis aŭ spertis la koncernan aferon (germane: <i>kennen</i>). ‘<i>Scii’</i> signifas havi precisan mensan informaron pri io (germane: <i>wissen</i>). Ambaŭ verboj estas transitivaj, sed <i>‘koni’</i> havas substantivan komplementon, dum <i>scii</i> permesas infinitivon aŭ propozician <i>ke-</i>komplementon. Oni <i>konas</i> urbon aŭ personon, sed <i>scias</i> naĝi aŭ<i> scias</i> lingvon. Notu, ke oni ofte uzas <i>‘scipovi’</i> kun infinitiva aŭ substantiva komplemento, sed ne kun <i>ke-</i>propozicio.",
		"Ĉu vi <span style=\"color: #ff0000\">konas</span> (scias/scipovas) la francan?<br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>scias</i></span><i> (konas) bonan lignaĵiston, kiu povas helpi vin.</i>"
	],
	"£:BASE-ekscio&\"<ekkonoj?n?>\"": [
		"£:BASE-ekscio&\"<ekkonoj?n?>\"",
		"Konfuzebla vortoparo: koni ↔ scii",
		"Oni <i>konas</i> ion aŭ iun, ĉar oni jam antaŭe renkontis, vidis aŭ spertis la koncernan aferon (germane: <i>kennen</i>). ‘<i>Scii’</i> signifas havi precisan mensan informaron pri io (germane: <i>wissen</i>). Ambaŭ verboj estas transitivaj, sed <i>‘koni’</i> havas substantivan komplementon, dum <i>scii</i> permesas infinitivon aŭ propozician <i>ke-</i>komplementon. Oni <i>konas</i> urbon aŭ personon, sed <i>scias</i> naĝi aŭ<i> scias</i> lingvon. Notu, ke oni ofte uzas <i>‘scipovi’</i> kun infinitiva aŭ substantiva komplemento, sed ne kun <i>ke-</i>propozicio.",
		"Ĉu vi <span style=\"color: #ff0000\">konas</span> (scias/scipovas) la francan?<br>\n<br>\n<i>Mi</i> <span style=\"color: #ff0000\"><i>scias</i></span><i> (konas) bonan lignaĵiston, kiu povas helpi vin.</i>"
	],
	"£:BASE-kramfo": [
		"£:BASE-kramfo",
		"Konfuzebla vortoparo: krampo → kramfo",
		"'Krampo’ estas kurba fiksilo (angle: <i>clamp</i>) aŭ, figursence, kurba interpunkcia signo (angle: <i>bracket</i>). Dume, <i>‘kramfo’</i> estas medicina vorto, kun la signifo ‘spasmo’ (angle: <i>cramp</i>).",
		"La <span style=\"color: #ff0000\">krampoj</span> (kramfoj) en la kruro daŭris kelkajn minutojn."
	],
	"£:BASE-kranio&\"<kranoj?n?>\"": [
		"£:BASE-kranio&\"<kranoj?n?>\"",
		"Konfuzebla vortoparo: krano → kranio",
		"'Krano’ estas tubo(mal)fermilo, dum <i>‘kranio’</i> estas la ostokasko de la kapo, parto de la homa skeleto.",
		""
	],
	"£:BASE-kredinda&\"<kredeblaj?n?>\"": [
		"£:BASE-kredinda&\"<kredeblaj?n?>\"",
		"Konfuzebla vortoparo: kredebla → kredinda",
		"Kaj homoj kaj asertoj povas esti <i>‘kredindaj’</i> (angle: <i>trustworthy</i>), sed nur la lastaj povas esti <i>‘kredeblaj’</i> (angle: <i>plausible</i>). Homoj, politikoj, strategopk, fontoj, informoj kaj sankcioj estas <i>kredindaj,</i> ne <i>kredeblaj.</i>",
		"Dum jardekoj li estis <span style=\"color: #ff0000\">kredebla</span> (kredinda) kaj lojala partnero."
	],
	"£:BASE-krokedo": [
		"£:BASE-krokedo",
		"Konfuzebla vortoparo: kroketo → krokedo",
		"'Kroketo' estas sporta ludo, <i>'krokedoj'</i> estas malgranda, mallonga, fritita rulaĵo el terpoma pureo aŭ hakita viando.",
		"Ŝia avino faras la plej bongustajn <span style=\"color: #ff0000\">kroketojn</span> (krokedojn)."
	],
	"£:BASE-kroketo": [
		"£:BASE-kroketo",
		"Konfuzebla vortoparo: kroketo → krokedo",
		"'Kroketo' estas sporta ludo, <i>'krokedoj'</i> estas malgranda, mallonga, fritita rulaĵo el terpoma pureo aŭ hakita viando.",
		"Ŝia avino faras la plej bongustajn <span style=\"color: #ff0000\">kroketojn</span> (krokedojn)."
	],
	"£:BASE-kultivi&\"<kultur.*>\"": [
		"£:BASE-kultivi&\"<kultur.*>\"",
		"Konfuzebla vortoparo: kulturi → kultivi",
		"Por eviti ambiguecon, prefere ne uzu <i>‘kulturi’</i> en la senco de <i>‘kultivi’.</i> Kamparano kulturas teron, sed kultivas plantojn aŭ bestojn.",
		"En la regiono oni <span style=\"color: #ff0000\">kulturis</span> (kultivis) la plej belajn rozojn."
	],
	"£:BASE-kultivo&\"<kulturoj?n?>\"": [
		"£:BASE-kultivo&\"<kulturoj?n?>\"",
		"Konfuzebla vortoparo: kulturi → kultivi",
		"Por eviti ambiguecon, prefere ne uzu <i>‘kulturi’</i> en la senco de <i>‘kultivi’.</i> Kamparano kulturas teron, sed kultivas plantojn aŭ bestojn.",
		"En la regiono oni <span style=\"color: #ff0000\">kulturis</span> (kultivis) la plej belajn rozojn."
	],
	"£:BASE-lafo": [
		"£:BASE-lafo",
		"Konfuzebla vortoparo: lavo → lafo",
		"'Lafo' estas vulkana materialo – fluanta rokaĵo. Ne konfuzu tion kun la ago <i>'lavo'</i> (de <i>'lavi'</i>).",
		"La ardega <span style=\"color: #ff0000\">lavo</span> (lafo) lumis en la nokto kiel fajra drako."
	],
	"£:BASE-dartro&\"<likenoj?n?>\"": [
		"£:BASE-dartro&\"<likenoj?n?>\"",
		"Konfuzebla vortoparo: likeno → dartro",
		"Por eviti ambiguecon, prefere uzu la vorton <i>‘likeno’</i> nur por la planto, ne la malsano. Ekzistas aparta vorto por ĉi-lasta, <i>‘dartro’.</i>",
		"Ŝi suferis de <span style=\"color: #ff0000\">likeno</span> (dartro), kiu kovris ŝian haŭton en pluraj lokoj."
	],
	"£:BASE-lineo&\"<linioj?n?>\"": [
		"£:BASE-lineo&\"<linioj?n?>\"",
		"Konfuzebla vortoparo: linio → lineo",
		"Por eviti ambiguecon, prefere uzu la vorton <i>‘lineo’</i> anstataŭ <i>‘linio’,</i> kie temas pri konduktilo: <i>telefonlineo, interreta lineo, alttensia lineo.</i>",
		""
	],
	"£x-etype-archaic&\".*lineo\"": [
		"£x-etype-archaic&\".*lineo\"",
		"Konfuzebla vortoparo: linio → lineo",
		"Por eviti ambiguecon, prefere uzu la vorton <i>‘lineo’</i> anstataŭ <i>‘linio’,</i> kie temas pri konduktilo: <i>telefonlineo, interreta lineo, alttensia lineo.</i>",
		""
	],
	"£x-etype-lemma&\"situi\"": [
		"£x-etype-lemma&\"situi\"",
		"Konfuzebla vortoparo: loĝi → situi",
		"En Esperanto, nur homoj <i>loĝas</i>, institucioj kaj konstruaĵoj <i>situas.</i>",
		"La biciklo-muzeo <span style=\"color: #ff0000\">loĝas</span> (situas) tuj apud la stacidomo."
	],
	"£:BASE-lokalizi&\"<lokig.*>\"": [
		"£:BASE-lokalizi&\"<lokig.*>\"",
		"Konfuzebla vortoparo: lokigi → loki/lokalizi",
		"<i>'Loki’</i> signifas ‘meti’ kaj estas transitiva verbo. Do almeti <i>-ig</i> al la radiko ‘<i>lok-’</i> ne havas sencon, se per <i>‘lokigi’</i> oni celas ‘meti’ (= igi havi lokon). Kelkaj esperantistoj uzas <i>‘lokigi’</i> kun la sencoj de ‘eltrovi lokon’ (angle: locate) aŭ ‘fiksi lokon’ (angle: <i>confine</i>)<i>.</i> Tamen, ĉar ekzistas aparta vorto, <i>‘lokalizi’,</i> por tiuj sencoj, konsideru uzi ĝin anstataŭ:<br>\n<br>\n<i>La fajrobrigado sukcesis</i> <span style=\"color: #ff0000\"><i>lokigi</i></span><i> (lokalizi, loke limigi) la incendion.</i><br>\n<br>\n<i>Magneta skanado helpis</i> <span style=\"color: #ff0000\"><i>lokigi</i></span><i> (lokalizi, loke eltrovi) la situan de la subteraj ruinoj.</i>",
		""
	],
	"£:BASE-lokado&\"<lokigoj?n?>\"": [
		"£:BASE-lokado&\"<lokigoj?n?>\"",
		"Konfuzebla vortoparo: lokigi → loki/lokalizi",
		"<i>'Loki’</i> signifas ‘meti’ kaj estas transitiva verbo. Do almeti <i>-ig</i> al la radiko ‘<i>lok-’</i> ne havas sencon, se per <i>‘lokigi’</i> oni celas ‘meti’ (= igi havi lokon). Kelkaj esperantistoj uzas <i>‘lokigi’</i> kun la sencoj de ‘eltrovi lokon’ (angle: locate) aŭ ‘fiksi lokon’ (angle: <i>confine</i>)<i>.</i> Tamen, ĉar ekzistas aparta vorto, <i>‘lokalizi’,</i> por tiuj sencoj, konsideru uzi ĝin anstataŭ:<br>\n<br>\n<i>La fajrobrigado sukcesis</i> <span style=\"color: #ff0000\"><i>lokigi</i></span><i> (lokalizi, loke limigi) la incendion.</i><br>\n<br>\n<i>Magneta skanado helpis</i> <span style=\"color: #ff0000\"><i>lokigi</i></span><i> (lokalizi, loke eltrovi) la situan de la subteraj ruinoj.</i>",
		""
	],
	"£:BASE-lupago&\"<luoj?n?>\"": [
		"£:BASE-lupago&\"<luoj?n?>\"",
		"Konfuzebla vortoparo: luo → lupago",
		"'Luo’ estas la ago lui, do ricevi portempan uzorajton kontraŭ regula pago. Por la pago aŭ ĝia monvaloro uzu <i>‘lupago’.</i>",
		"La <span style=\"color: #ff0000\">luo</span> (lupago) estas 400 EUR monate."
	],
	"£:BASE-matcxo&\"<macxoj?n?>\"": [
		"£:BASE-matcxo&\"<macxoj?n?>\"",
		"Konfuzebla vortoparo: maĉo → matĉo",
		"Ĉar la vorto <i>‘maĉo’</i> (= sportkonkurso) estas ambigua pro la ekzisto de la verbo <i>‘maĉi’</i> (= dispremi per la dentoj), oni enkondukis alternativan vortformon por la sportkonkurso, kiu almenaŭ skribe distingeblas: <i>‘matĉo’.</i> Konsideru uzi ĝin.",
		"La klubo gajnis ĉiujn <span style=\"color: #ff0000\">maĉojn</span> (matĉojn) de la sezono."
	],
	"£:BASE-magazeno": [
		"£:BASE-magazeno",
		"Konfuzebla vortoparo: magazeno ↔ magazino",
		"Ne konfuzu <i>‘magazeno’</i> kaj <i>‘magazino’.</i> La unua estas ejo (stokejo aŭ vendejo), la dua estas ilustrita gazeto.",
		"Li abonas naturamikan <span style=\"color: #ff0000\">magazenon</span> (magazinon).<br>\n<br>\nIli uzis tutan horon en la <span style=\"color: #ff0000\">magazino</span> (magazeno) aĉetante donacojn."
	],
	"£:BASE-magazino": [
		"£:BASE-magazino",
		"Konfuzebla vortoparo: magazeno ↔ magazino",
		"Ne konfuzu <i>‘magazeno’</i> kaj <i>‘magazino’.</i> La unua estas ejo (stokejo aŭ vendejo), la dua estas ilustrita gazeto.",
		"Li abonas naturamikan <span style=\"color: #ff0000\">magazenon</span> (magazinon).<br>\n<br>\nIli uzis tutan horon en la <span style=\"color: #ff0000\">magazino</span> (magazeno) aĉetante donacojn."
	],
	"£:BASE-malnova&\"<maljuna?n?>\"": [
		"£:BASE-malnova&\"<maljuna?n?>\"",
		"Konfuzebla vortoparo: maljuna ↔ malnova",
		"Tio povas esti falsa amiko. <i>‘Maljuna’</i> kaj <i>‘malnova’</i> ofte havas la saman tradukon (angle: <i>old,</i> hispane: <i>viejo,</i> germane: <i>alt</i>). Por kompreni la diferencon, pensu pri la malo, <i>‘juna’</i> kaj <i>‘nova’,</i> por kiuj ofte ekzistas malsamaj tradukoj (anlge: <i>young – new,</i> hispane: <i>joven – nuevo,</i> germane: <i>jung – neu</i>). Oni uzas la vorton <i>‘(mal)juna’</i> por vivuloj (homoj, bestoj, plantoj), dum <i>‘(mal)nova’</i> rilatas al aĵoj.<br>\n<br>\nNotu, ke ekzistas esceptoj al tiu regulo: En poezia aŭ figura uzo, aĵoj ankaŭ povas esti (mal)junaj, ekz. <i>‘juna universo’, ‘maljuna vino’.</i> Sufiĉas pensi pri evoluo aŭ vivolinio por la koncerna aĵo. Kaj ankaŭ homo povas esti nova, precipe se oni pensas pri sociaj aŭ profesiaj roloj: <i>‘Maljuna prezidanto’</i> (ekz. 80-jara) kaj <i>‘malnova prezidanto’</i> (la antaŭa prezidanto).",
		"Ne matenmanĝi estis <span style=\"color: #c9211e\">maljuna</span> (malnova) kutimo de li."
	],
	"£:BASE-maljuna&\"<malnovaj?n?>\"": [
		"£:BASE-maljuna&\"<malnovaj?n?>\"",
		"Konfuzebla vortoparo: maljuna ↔ malnova",
		"Tio povas esti falsa amiko. <i>‘Maljuna’</i> kaj <i>‘malnova’</i> ofte havas la saman tradukon (angle: <i>old,</i> hispane: <i>viejo,</i> germane: <i>alt</i>). Por kompreni la diferencon, pensu pri la malo, <i>‘juna’</i> kaj <i>‘nova’,</i> por kiuj ofte ekzistas malsamaj tradukoj (anlge: <i>young – new,</i> hispane: <i>joven – nuevo,</i> germane: <i>jung – neu</i>). Oni uzas la vorton <i>‘(mal)juna’</i> por vivuloj (homoj, bestoj, plantoj), dum <i>‘(mal)nova’</i> rilatas al aĵoj.<br>\n<br>\nNotu, ke ekzistas esceptoj al tiu regulo: En poezia aŭ figura uzo, aĵoj ankaŭ povas esti (mal)junaj, ekz. <i>‘juna universo’, ‘maljuna vino’.</i> Sufiĉas pensi pri evoluo aŭ vivolinio por la koncerna aĵo. Kaj ankaŭ homo povas esti nova, precipe se oni pensas pri sociaj aŭ profesiaj roloj: <i>‘Maljuna prezidanto’</i> (ekz. 80-jara) kaj <i>‘malnova prezidanto’</i> (la antaŭa prezidanto).",
		"Ne matenmanĝi estis <span style=\"color: #c9211e\">maljuna</span> (malnova) kutimo de li."
	],
	"£:BASE-mandarena": [
		"£:BASE-mandarena",
		"Konfuzebla vortoparo: mandarino → mandareno",
		"'Mandarino’ estas frukto, <i>‘mandareno’</i> estas ĉina oficisto. Pli grave, <i>‘mandarena’</i> estas lingvoadjektivo por la ĉina. Ne konfuzu ĝin kun <i>‘mandarina’.</i>",
		"Li lernas la <span style=\"color: #c9211e\">mandarinan</span> (mandarenan)."
	],
	"£:BASE-mandareno": [
		"£:BASE-mandareno",
		"Konfuzebla vortoparo: mandarino → mandareno",
		"'Mandarino’ estas frukto, <i>‘mandareno’</i> estas ĉina oficisto. Pli grave, <i>‘mandarena’</i> estas lingvoadjektivo por la ĉina. Ne konfuzu ĝin kun <i>‘mandarina’.</i>",
		"Li lernas la <span style=\"color: #c9211e\">mandarinan</span> (mandarenan)."
	],
	"£:BASE-markezo": [
		"£:BASE-markezo",
		"Konfuzebla vortoparo: markizo ↔ markezo",
		"'Markizo' estas nobela titolo, dum <i>'markezo'</i> estas tola aŭ plasta, sunŝirma antaŭtegmenteto.",
		"<i>Estis grandaj, libere starantaj domoj en helaj koloroj kun la muroj kovritaj de balkonoj kaj gajkolaraj</i> <span style=\"color: #ff0000\"><i>markizoj</i></span><i> (markezoj).</i><br>\n<br>\n<i>Partoprenis la feston fama franca</i> <span style=\"color: #ff0000\"><i>markezo</i></span><i> (markizo).</i>"
	],
	"£:BASE-markizo": [
		"£:BASE-markizo",
		"Konfuzebla vortoparo: markizo ↔ markezo",
		"'Markizo' estas nobela titolo, dum <i>'markezo'</i> estas tola aŭ plasta, sunŝirma antaŭtegmenteto.",
		"<i>Estis grandaj, libere starantaj domoj en helaj koloroj kun la muroj kovritaj de balkonoj kaj gajkolaraj</i> <span style=\"color: #ff0000\"><i>markizoj</i></span><i> (markezoj).</i><br>\n<br>\n<i>Partoprenis la feston fama franca</i> <span style=\"color: #ff0000\"><i>markezo</i></span><i> (markizo).</i>"
	],
	"£:BASE-amaso": [
		"£:BASE-amaso",
		"Konfuzebla vortoparo: maso → amaso",
		"Ne konfuzu <i>‘maso’</i> kun <i>‘amaso’.</i> La unua, <i>‘maso’</i> havas du signifojn: (a) senforma kunbuliĝo de io aŭ (b) la fizika eco mezurita en (kilo)gramoj. Dume, <i>‘amaso’</i> estas alta kvanto da io.",
		"<i>La nova veturilo estis</i> <span style=\"color: #ff0000\"><i>mase</i></span><i> (amase) produktita.</i><br>\n<br>\n<i>Lia parolado incitis la popolajn</i> <span style=\"color: #ff0000\"><i>masojn</i></span><i> (amasojn).</i>"
	],
	"£:BASE-amase": [
		"£:BASE-amase",
		"Konfuzebla vortoparo: maso → amaso",
		"Ne konfuzu <i>‘maso’</i> kun <i>‘amaso’.</i> La unua, <i>‘maso’</i> havas du signifojn: (a) senforma kunbuliĝo de io aŭ (b) la fizika eco mezurita en (kilo)gramoj. Dume, <i>‘amaso’</i> estas alta kvanto da io.",
		"<i>La nova veturilo estis</i> <span style=\"color: #ff0000\"><i>mase</i></span><i> (amase) produktita.</i><br>\n<br>\n<i>Lia parolado incitis la popolajn</i> <span style=\"color: #ff0000\"><i>masojn</i></span><i> (amasojn).</i>"
	],
	"£x-etype-(list|lemma)&\"<.+materioj?n?>\"": [
		"£x-etype-(list|lemma)&\"<.+materioj?n?>\"",
		"Konfuzebla vortoparo: materio → materialo",
		"'Materio' estas fizika termino, por ĉio mas-hava. <i>'Materialo'</i> enhavas la aspekto de celo kaj uzo (por kio?). Do, estas <i>'krudmaterialo'</i> kaj <i>'instrumaterialo',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>krudmaterio</i></span><i>'</i> kaj <i>'</i><span style=\"color: #ff0000\"><i>instrumaterio</i></span><i>'.</i>",
		""
	],
	"£:BASE-medikamento": [
		"£:BASE-medikamento",
		"Konfuzebla vortoparo: medicino → medikamento",
		"'Medicino’ estas la fako, <i>‘medikamento’</i> estas medicina rimedo, medicinaĵo en formo de ekz. pilolo aŭ eliksiro.",
		"Li aĉetis kontraŭtusan <span style=\"color: #ff0000\">medicinon</span> (medikamenton) por sia filo."
	],
	"£:BASE-normando": [
		"£:BASE-normando",
		"Konfuzebla vortoparo: normano → normando",
		"Esperanto distingas inter <i>‘normano/normana’</i> kaj <i>‘normando/normanda’.</i> La unua celas vikingojn el Skandinavio, la dua la loĝantojn de la franca provinco Normandio kaj siatempajn konkerintojn de Anglio en 1066.",
		""
	],
	"£:BASE-denove&\"<nove>\"": [
		"£:BASE-denove&\"<nove>\"",
		"Konfuzebla vortoparo: nove → denove",
		"Ne konfuzu <i>‘nove’</i> kaj <i>‘denove’.</i> Plej ofte taŭgas <i>‘denove’.</i> Ĝi signifas ‘alian fojon’, do ĝi implicas, ke okazis antaŭa fojo:<br>\n<br>\n<i>Li jam spektis tiun filmon hieraŭ. Sed hodiaŭ li volas denove spekti ĝin.</i><br>\n<br>\nAnkaŭ <i>‘nove’</i> estas tempa adverbo, sed ĝi signifas ‘ĵus’/’antaŭ nelonge’ kaj ne implicas antaŭan fojon. Oni ĉefe vidas ĝin kune kun is-tempaj participoj:<br>\n<br>\n<i>Nove kuirita kaĉo, nove aperinta libro, nove aĉetita biciklo</i>",
		"Ni hodiaŭ <span style=\"color: #ff0000\">nove</span> (denove) manĝis vegetare"
	],
	"£:BASE-odori": [
		"£:BASE-odori",
		"Konfuzebla vortoparo: odori ↔ flari",
		"<i>'Odori’</i> estas netransitiva, <i>‘flari’</i> transitiva. Floro odoras, sed oni flaras floron.<br>\n<br>\n<i>La kapreolo</i> <span style=\"color: #ff0000\"><i>odoris</i></span><i> (flaris) nin kaj forkuris.</i><br>\n<br>\nSe entute aperas rekta objekto post <i>'odori'</i>, temas pri la speco de odoro (je-komplemento), kaj la subjekto daŭre estas la fonto de la odoro, kaj ne flaranta homo.<br>\n<br>\n<i>La tuta kuirejo odoris pipron, safranon kaj zingibron.</i><br>\n<br>\nEn kelkaj lingvoj oni antaŭsupozas, ke <i>'odori'</i> sen komplemento de kiel odoras implicas <b>malbonan</b> odoron. Tio ne funkcias en Esperanto, necesas uzi <i>'malbonodori',</i> aŭ aldoni adverbon aŭ komparon.<br>\n<br>\n<i>Ĉiuj kamentuboj de la urbo fumis kaj</i> <span style=\"color: #ff0000\"><i>odoris</i></span><i> (malbonodoris).</i>",
		""
	],
	"£:BASE-flari": [
		"£:BASE-flari",
		"Konfuzebla vortoparo: odori ↔ flari",
		"<i>'Odori’</i> estas netransitiva, <i>‘flari’</i> transitiva. Floro odoras, sed oni flaras floron.<br>\n<br>\n<i>La kapreolo</i> <span style=\"color: #ff0000\"><i>odoris</i></span><i> (flaris) nin kaj forkuris.</i><br>\n<br>\nSe entute aperas rekta objekto post <i>'odori'</i>, temas pri la speco de odoro (je-komplemento), kaj la subjekto daŭre estas la fonto de la odoro, kaj ne flaranta homo.<br>\n<br>\n<i>La tuta kuirejo odoris pipron, safranon kaj zingibron.</i><br>\n<br>\nEn kelkaj lingvoj oni antaŭsupozas, ke <i>'odori'</i> sen komplemento de kiel odoras implicas <b>malbonan</b> odoron. Tio ne funkcias en Esperanto, necesas uzi <i>'malbonodori',</i> aŭ aldoni adverbon aŭ komparon.<br>\n<br>\n<i>Ĉiuj kamentuboj de la urbo fumis kaj</i> <span style=\"color: #ff0000\"><i>odoris</i></span><i> (malbonodoris).</i>",
		""
	],
	"£:BASE-oferti&\"<ofer.*>\"": [
		"£:BASE-oferti&\"<ofer.*>\"",
		"Konfuzebla vortoparo: oferi → oferti → proponi/ebligi",
		"Ne konfuzu <i>‘oferi’</i> kaj <i>‘oferti’. ‘Oferi’</i> signifas ‘fordonaci ion multvaloran’ kaj implicas malhavosenton, riton aŭ damaĝon (angle: <i>sacrifice</i>). Oni oferas beston, sangon, vivon, tempon aŭ grandan monsumon. <i>‘Oferti’</i> signifas ‘proponi varon, servon aŭ – propran - (help)agon (angle: <i>offer</i>).<br>\n<br>\nNur homoj povas oferi kaj striktasence ankaŭ nur homoj povas oferti. Estas falsamika influo diri, ke <i>‘urbo ofertas vidindaĵojn’,</i> aŭ ke iu <i>‘sistemo ofertas facilan retvendadon’.</i> Konsideru uzi vortojn kiel <i>‘proponi’</i> aŭ <i>‘ebligi’</i> anstataŭ.",
		"<i>La patrino</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) kuketojn al la gastoj.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) helpi en la kuirejo.</i>"
	],
	"£:BASE-proponi&\"<ofer.*>\"": [
		"£:BASE-proponi&\"<ofer.*>\"",
		"Konfuzebla vortoparo: oferi → oferti → proponi/ebligi",
		"Ne konfuzu <i>‘oferi’</i> kaj <i>‘oferti’. ‘Oferi’</i> signifas ‘fordonaci ion multvaloran’ kaj implicas malhavosenton, riton aŭ damaĝon (angle: <i>sacrifice</i>). Oni oferas beston, sangon, vivon, tempon aŭ grandan monsumon. <i>‘Oferti’</i> signifas ‘proponi varon, servon aŭ – propran - (help)agon (angle: <i>offer</i>).<br>\n<br>\nNur homoj povas oferi kaj striktasence ankaŭ nur homoj povas oferti. Estas falsamika influo diri, ke <i>‘urbo ofertas vidindaĵojn’,</i> aŭ ke iu <i>‘sistemo ofertas facilan retvendadon’.</i> Konsideru uzi vortojn kiel <i>‘proponi’</i> aŭ <i>‘ebligi’</i> anstataŭ.",
		"<i>La patrino</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) kuketojn al la gastoj.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) helpi en la kuirejo.</i>"
	],
	"£:BASE-ebligi&\"<ofer.*>\"": [
		"£:BASE-ebligi&\"<ofer.*>\"",
		"Konfuzebla vortoparo: oferi → oferti → proponi/ebligi",
		"Ne konfuzu <i>‘oferi’</i> kaj <i>‘oferti’. ‘Oferi’</i> signifas ‘fordonaci ion multvaloran’ kaj implicas malhavosenton, riton aŭ damaĝon (angle: <i>sacrifice</i>). Oni oferas beston, sangon, vivon, tempon aŭ grandan monsumon. <i>‘Oferti’</i> signifas ‘proponi varon, servon aŭ – propran - (help)agon (angle: <i>offer</i>).<br>\n<br>\nNur homoj povas oferi kaj striktasence ankaŭ nur homoj povas oferti. Estas falsamika influo diri, ke <i>‘urbo ofertas vidindaĵojn’,</i> aŭ ke iu <i>‘sistemo ofertas facilan retvendadon’.</i> Konsideru uzi vortojn kiel <i>‘proponi’</i> aŭ <i>‘ebligi’</i> anstataŭ.",
		"<i>La patrino</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) kuketojn al la gastoj.</i><br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>oferis</i></span><i> (ofertis) helpi en la kuirejo.</i>"
	],
	"£:BASE-oficejo&\"<oficoj?n?>\"": [
		"£:BASE-oficejo&\"<oficoj?n?>\"",
		"Konfuzebla vortoparo: ofico → oficejo",
		"<i>'Ofico’</i> estas oficiala, deĵora okupo, do speco de profesio. Ne konfuzu tion kun <i>‘oficejo’,</i> kiu estas la loko, kutime kun tablo, komputilo ktp., kie oni plenumas sian oficon.",
		"Li pasigis la tutan tagon laborante en la <span style=\"color: #ff0000\">ofico</span> (oficejo)."
	],
	"£:BASE-didelfo": [
		"£:BASE-didelfo",
		"Konfuzebla vortoparo: oposumo → didelfo",
		"Laŭ PIV, <i>‘oposumo’</i> estas felo/pelto de <i>didelfo</i>. Por eviti ambiguecon, prefere ne uzu la vorton por la besto mem.",
		""
	],
	"£:BASE-ortangula&\"<ortaj?n?>\"": [
		"£:BASE-ortangula&\"<ortaj?n?>\"",
		"Konfuzebla vortoparo: orta → ortangula",
		"'Orta’ temas pri (90-grada) angulo, inter linioj aŭ ebenoj, aŭ en la direkto de projekcio. Temas do pri rilato inter geometriaj figuroj. Geometria figuro mem ne povas esti orta, sed eble <i>‘ortangula’.</i>",
		"La kvadrato de la hipotenuzo en <span style=\"color: #ff0000\">orta</span> (ortangula) triangulo egalas al la sumo de la kvadratoj de la katetoj"
	],
	"£x-etype-lemma&\"<pa[ct]ien[ct][aeo]j?n?>\"": [
		"£x-etype-lemma&\"<pa[ct]ien[ct][aeo]j?n?>\"",
		"Konfuzebla vortoparo: pacient- ↔ pacienc-",
		"En Esperanto, <i>'pacienta'</i> rilatas al malsanulo (paciento), dum <i>'pacienco'</i> estas trankvila atendemo aŭ eltenemo. <i>'Patienco'</i> estas nek unu nek la alia, sed planto (speco de rumekso), kaj <i>'patiento'</i> tute ne ekzistas.",
		"Li <span style=\"color: #ff0000\">paciente</span> (pacience) kolektis la ludilojn de la infanoj."
	],
	"£:BASE-paciento": [
		"£:BASE-paciento",
		"Konfuzebla vortoparo: pacient- ↔ pacienc-",
		"En Esperanto, <i>'pacienta'</i> rilatas al malsanulo (paciento), dum <i>'pacienco'</i> estas trankvila atendemo aŭ eltenemo. <i>'Patienco'</i> estas nek unu nek la alia, sed planto (speco de rumekso), kaj <i>'patiento'</i> tute ne ekzistas.",
		"Li <span style=\"color: #ff0000\">paciente</span> (pacience) kolektis la ludilojn de la infanoj."
	],
	"£:BASE-alineo&\"<paragrafoj?n?>\"": [
		"£:BASE-alineo&\"<paragrafoj?n?>\"",
		"Konfuzebla vortoparo: paragrafo → alineo",
		"En Esperanto, <i>‘paragrafo’</i> nur havas juran senco. Tipe temas pri numeritaj paragrafoj en leĝo, statutoj, kontrakto ktp. <i>‘Alineo’</i> estas struktura unuo en teksto, pli granda ol frazo, se malpligranda ol ĉapitro.",
		"Se oni legas la 4-an <span style=\"color: #ff0000\">paragrafon</span> (alineon) de la teksto, oni vidas, ke la elspezoj kreskis lastatempe."
	],
	"£:BASE-pargeto": [
		"£:BASE-pargeto",
		"Konfuzebla vortoparo: parketo → pargeto",
		"<i>'Parketo'</i> estas eta parko. Por la plankospeco, uzu <i>'pargeto'.</i>",
		"Nudaj piedoj kuris sur la glata <span style=\"color: #ff0000\">parketo</span> (pargeto)."
	],
	"£:BASE-pauxzo": [
		"£:BASE-pauxzo",
		"Konfuzebla vortoparo: paŭso → paŭzo",
		"Ne konfuzu <i>‘paŭzi’</i> kaj <i>‘paŭsi’,</i> aŭ <i>‘paŭzo’</i> kaj <i>‘paŭso’.</i> La unua rilatas al periode de neaktiveco (angle: <i>break</i>), la dua temas pri ekzakta kopiado aŭ imitado (angle: <i>copy</i>).",
		"Post longa <span style=\"color: #ff0000\">paŭso</span> (paŭzo) <i>denove okazas eksteraj koncertoj en la parko.</i>"
	],
	"£:BASE-pauxzi": [
		"£:BASE-pauxzi",
		"Konfuzebla vortoparo: paŭso → paŭzo",
		"Ne konfuzu <i>‘paŭzi’</i> kaj <i>‘paŭsi’,</i> aŭ <i>‘paŭzo’</i> kaj <i>‘paŭso’.</i> La unua rilatas al periode de neaktiveco (angle: <i>break</i>), la dua temas pri ekzakta kopiado aŭ imitado (angle: <i>copy</i>).",
		"Post longa <span style=\"color: #ff0000\">paŭso</span> (paŭzo) <i>denove okazas eksteraj koncertoj en la parko.</i>"
	],
	"£:BASE-pensio": [
		"£:BASE-pensio",
		"Konfuzebla vortoparo: pensio ↔ pensiono",
		"'Pensio’ estas regula monpago al nelaboranta persono, ekz. al maljunulo (angle: <i>pension</i>). La similsona <i>‘pensiono’</i> estas loko, kie oni loĝas kaj manĝas kontraŭ pago (angle: <i>boarding house</i>), aŭ eventuale manĝoskemo en tial loko aŭ hotelo, ekz. <i>‘duona pensiono’ (</i>= matenmanĝo + vespermanĝo). Ne uzu la vorton por mono pagota, en la senco de ‘pensionpago’/’gastoprezo’.",
		"La averaĝa <span style=\"color: #ff0000\">pensiono</span> (pensio) de maljunulo en Grekio ne estas alta."
	],
	"£:BASE-pensiono": [
		"£:BASE-pensiono",
		"Konfuzebla vortoparo: pensio ↔ pensiono",
		"'Pensio’ estas regula monpago al nelaboranta persono, ekz. al maljunulo (angle: <i>pension</i>). La similsona <i>‘pensiono’</i> estas loko, kie oni loĝas kaj manĝas kontraŭ pago (angle: <i>boarding house</i>), aŭ eventuale manĝoskemo en tial loko aŭ hotelo, ekz. <i>‘duona pensiono’ (</i>= matenmanĝo + vespermanĝo). Ne uzu la vorton por mono pagota, en la senco de ‘pensionpago’/’gastoprezo’.",
		"La averaĝa <span style=\"color: #ff0000\">pensiono</span> (pensio) de maljunulo en Grekio ne estas alta."
	],
	"£:BASE-pezi&\"<pes.*>\"": [
		"£:BASE-pezi&\"<pes.*>\"",
		"Konfuzebla vortoparo: pezi ↔ pesi",
		"Ne konfuzu <i>‘pezi’</i> kaj <i>‘pesi’.</i> La unua estas netransitiva, la dua estas transitiva. Iu peza aĵo pezas (x kilogramojn), sed por ekscii ĝian ekzaktan pezon, oni devas pesi ĝin (per persilo).",
		"<i>La valizo</i> <span style=\"color: #ff0000\"><i>pesas</i></span><i> (pezas) 15 kg.</i><br>\n<br>\n<i>Bonvole</i> <span style=\"color: #ff0000\"><i>pezu</i></span><i> (pesu) vian valizon!</i>"
	],
	"£:BASE-pezo&\"<pesoj?n?>\"": [
		"£:BASE-pezo&\"<pesoj?n?>\"",
		"Konfuzebla vortoparo: pezi ↔ pesi",
		"Ne konfuzu <i>‘pezi’</i> kaj <i>‘pesi’.</i> La unua estas netransitiva, la dua estas transitiva. Iu peza aĵo pezas (x kilogramojn), sed por ekscii ĝian ekzaktan pezon, oni devas pesi ĝin (per persilo).",
		"<i>La valizo</i> <span style=\"color: #ff0000\"><i>pesas</i></span><i> (pezas) 15 kg.</i><br>\n<br>\n<i>Bonvole</i> <span style=\"color: #ff0000\"><i>pezu</i></span><i> (pesu) vian valizon!</i>"
	],
	"£:BASE-sxati&\"<placx.*>\"": [
		"£:BASE-sxati&\"<placx.*>\"",
		"Konfuzebla vortoparo: plaĉi ↔ ŝati",
		"La verbo <i>‘plaĉi’</i> (france: <i>plaire,</i> germane: <i>gefallen</i>) estas netransitiva: <i>Io plaĉas al iu.</i> Kun rekta objekto, uzu <i>‘ŝati’: Iu ŝatas ion.</i>",
		"Mi <span style=\"color: #ff0000\">plaĉas</span> naĝi en la maro. (Mi ŝatas naĝi en la maro. Aŭ alternative: <b>Al</b> <b>mi</b> plaĉas naĝi en la maro.)<br>\n<br>\nTio ne <span style=\"color: #ff0000\">ŝatis</span> (plaĉis) al lia amikino."
	],
	"£:BASE-placxi&\"<sxat.*>\"": [
		"£:BASE-placxi&\"<sxat.*>\"",
		"Konfuzebla vortoparo: plaĉi ↔ ŝati",
		"La verbo <i>‘plaĉi’</i> (france: <i>plaire,</i> germane: <i>gefallen</i>) estas netransitiva: <i>Io plaĉas al iu.</i> Kun rekta objekto, uzu <i>‘ŝati’: Iu ŝatas ion.</i>",
		"Mi <span style=\"color: #ff0000\">plaĉas</span> naĝi en la maro. (Mi ŝatas naĝi en la maro. Aŭ alternative: <b>Al</b> <b>mi</b> plaĉas naĝi en la maro.)<br>\n<br>\nTio ne <span style=\"color: #ff0000\">ŝatis</span> (plaĉis) al lia amikino."
	],
	"£:BASE-mesagxo&\"<posxtoj?n?>\"": [
		"£:BASE-mesagxo&\"<posxtoj?n?>\"",
		"Konfuzebla vortoparo: poŝto → mesaĝo",
		"'Poŝto’ estas sendosistemo aŭ sendofirmao. La vorto ankaŭ uzeblas por ĉiu el la tagaj distribuoj de poŝto, sed ne por la individua sendaĵo aŭ mesaĝo.",
		"Mi ricevis <span style=\"color: #ff0000\">poŝton</span> (mesaĝon) de la banko."
	],
	"£:BASE-eklezio": [
		"£:BASE-eklezio",
		"Konfuzebla vortoparo: preĝejo ↔ eklezio",
		"<i>'Preĝejo’</i> estas konstruaĵo, <i>‘eklezio’</i> estas religia komunumo.",
		"<i>la katolika</i> <span style=\"color: #c9211e\"><i>preĝejo</i></span><i> (eklezio) publikigis anoncon al ĉiuj kristanoj</i><br>\n<br>\n<i>apud mia domo troviĝas bela</i> <span style=\"color: #c9211e\"><i>eklezio</i></span><i> (preĝejo)</i>"
	],
	"£:BASE-pregxejo": [
		"£:BASE-pregxejo",
		"Konfuzebla vortoparo: preĝejo ↔ eklezio",
		"<i>'Preĝejo’</i> estas konstruaĵo, <i>‘eklezio’</i> estas religia komunumo.",
		"<i>la katolika</i> <span style=\"color: #c9211e\"><i>preĝejo</i></span><i> (eklezio) publikigis anoncon al ĉiuj kristanoj</i><br>\n<br>\n<i>apud mia domo troviĝas bela</i> <span style=\"color: #c9211e\"><i>eklezio</i></span><i> (preĝejo)</i>"
	],
	"£:BASE-provizanto": [
		"£:BASE-provizanto",
		"Konfuzebla vortoparo: provizoro → provizanto",
		"En Esperanto, <i>‘provizoro’</i> signifas improvizitan kaj provizoran situation. Ne uzu la vorton neologisme anstataŭ <i>‘provizanto’.</i> Ebla escepto estas uzado kiel faktermino por historia profesio.",
		"Parolu kun la <span style=\"color: #ff0000\">provizoro</span> (provizanto) de via retpoŝtadreso."
	],
	"£:BASE-rakedo": [
		"£:BASE-rakedo",
		"Konfuzebla vortoparo: rakedo – raketo – neĝoŝuo",
		"<i>'Raketo’</i> estas rapida, senpersona flugvehiklo uzata por milito aŭ spacesploro. Dume, <i>‘rakedo’</i> estas pilkobatilo uzata en ekz. teniso kaj badmintono.<br>\n<br>\nNotu, ke nek unu nek la alia estas uzebla en la senco de <i>‘neĝŝuo’.</i>",
		""
	],
	"£:BASE-raketo": [
		"£:BASE-raketo",
		"Konfuzebla vortoparo: rakedo – raketo – neĝoŝuo",
		"<i>'Raketo’</i> estas rapida, senpersona flugvehiklo uzata por milito aŭ spacesploro. Dume, <i>‘rakedo’</i> estas pilkobatilo uzata en ekz. teniso kaj badmintono.<br>\n<br>\nNotu, ke nek unu nek la alia estas uzebla en la senco de <i>‘neĝŝuo’.</i>",
		""
	],
	"£:BASE-negxosxuo": [
		"£:BASE-negxosxuo",
		"Konfuzebla vortoparo: rakedo – raketo – neĝoŝuo",
		"<i>'Raketo’</i> estas rapida, senpersona flugvehiklo uzata por milito aŭ spacesploro. Dume, <i>‘rakedo’</i> estas pilkobatilo uzata en ekz. teniso kaj badmintono.<br>\n<br>\nNotu, ke nek unu nek la alia estas uzebla en la senco de <i>‘neĝŝuo’.</i>",
		""
	],
	"£:BASE-repo": [
		"£:BASE-repo",
		"Konfuzebla vortoparo: rapo → repo",
		"En Esperanto oni distingas inter la manĝaĵo <i>'rapo'</i> (speco de brasiko) kaj la muzikstilo <i>'repo'.</i>",
		"Li kantis <span style=\"color: #ff0000\">rapon</span> (repon) pri sia lernejo."
	],
	"£x-etype-lemma&\"<rapadoj?n?>\"": [
		"£x-etype-lemma&\"<rapadoj?n?>\"",
		"Konfuzebla vortoparo: rapo → repo",
		"En Esperanto oni distingas inter la manĝaĵo <i>'rapo'</i> (speco de brasiko) kaj la muzikstilo <i>'repo'.</i>",
		"Li kantis <span style=\"color: #ff0000\">rapon</span> (repon) pri sia lernejo."
	],
	"£:BASE-reala": [
		"£:BASE-reala",
		"Konfuzebla vortoparo: reala – vera",
		"Ne konfuzu <i>‘vera’</i> kaj <i>‘reala’.</i> La unua temas pri fakteco (angle: <i>true</i>), dum la dua signifas ‘efektive ekzistanta’ (angle: <i>actual</i>).",
		"En la <span style=\"color: #ff0000\">vera</span> (reala) mondo ne funkcias tiel.<br>\n<br>\nLi estas <span style=\"color: #ff0000\">reala</span> (vera) princo."
	],
	"£:BASE-vera": [
		"£:BASE-vera",
		"Konfuzebla vortoparo: reala – vera",
		"Ne konfuzu <i>‘vera’</i> kaj <i>‘reala’.</i> La unua temas pri fakteco (angle: <i>true</i>), dum la dua signifas ‘efektive ekzistanta’ (angle: <i>actual</i>).",
		"En la <span style=\"color: #ff0000\">vera</span> (reala) mondo ne funkcias tiel.<br>\n<br>\nLi estas <span style=\"color: #ff0000\">reala</span> (vera) princo."
	],
	"£:BASE-interezo&\"<rentoj?n?>\"": [
		"£:BASE-interezo&\"<rentoj?n?>\"",
		"Konfuzebla vortoparo: rento → interezo/lupago",
		"La vortoj <i>‘rento’</i> kaj <i>‘interezo’</i> havas similajn, sed malsamajn signifojn. <i>‘Interezo’</i> signifas \"pagoprocento\" aŭ \"procentopago\", pagota de ŝuldanto (angle: <i>interest,</i> germane: <i>Zins</i>), dum <i>‘rento’</i> estas la (regula) enspezo el ĝi (angle: <i>annuity income, interest income</i>). <i>‘Interezo’</i> estas mezurata en procentoj, <i>‘rento’</i> en monunuoj. Oni povas derivi unu koncepton el la alia: <i>‘interezo’</i> estas <i>‘rentumo’,</i> kaj <i>‘rento’</i> estas <i>‘interezoenspezo’.</i><br>\n<br>\nEstas angla falsa amiko uzi <i>‘rento’</i> en la senco de <i>‘lupago’.</i>",
		"La unuaj membroj jam ricevis la 6-procentan <span style=\"color: #ff0000\">renton</span> (interezon) por la unua duonjaro.<br>\n<br>\n<i>Mankas loĝejoj, kaj nuntempe, en la centro, la</i> <span style=\"color: #ff0000\"><i>rentoj</i></span><i> (lupagoj) estas tre altaj.</i>"
	],
	"£:BASE-lupago&\"<rentoj?n?>\"": [
		"£:BASE-lupago&\"<rentoj?n?>\"",
		"Konfuzebla vortoparo: rento → interezo/lupago",
		"La vortoj <i>‘rento’</i> kaj <i>‘interezo’</i> havas similajn, sed malsamajn signifojn. <i>‘Interezo’</i> signifas \"pagoprocento\" aŭ \"procentopago\", pagota de ŝuldanto (angle: <i>interest,</i> germane: <i>Zins</i>), dum <i>‘rento’</i> estas la (regula) enspezo el ĝi (angle: <i>annuity income, interest income</i>). <i>‘Interezo’</i> estas mezurata en procentoj, <i>‘rento’</i> en monunuoj. Oni povas derivi unu koncepton el la alia: <i>‘interezo’</i> estas <i>‘rentumo’,</i> kaj <i>‘rento’</i> estas <i>‘interezoenspezo’.</i><br>\n<br>\nEstas angla falsa amiko uzi <i>‘rento’</i> en la senco de <i>‘lupago’.</i>",
		"La unuaj membroj jam ricevis la 6-procentan <span style=\"color: #ff0000\">renton</span> (interezon) por la unua duonjaro.<br>\n<br>\n<i>Mankas loĝejoj, kaj nuntempe, en la centro, la</i> <span style=\"color: #ff0000\"><i>rentoj</i></span><i> (lupagoj) estas tre altaj.</i>"
	],
	"£:BASE-retejo": [
		"£:BASE-retejo",
		"Konfuzebla vortoparo: retpaĝo → retejo",
		"<i>'Retpaĝo’</i> estas unuopa paĝo, dum <i>‘retejo’</i> estas kompleta paĝaro, kun retadreso. Reta vortaro, ekzemple, estas <i>retejo</i> kun <i>retpaĝoj</i> por unuopaj vortoj.",
		""
	],
	"£:BASE-retmesagxo": [
		"£:BASE-retmesagxo",
		"Konfuzebla vortoparo: retpoŝto → retmesaĝo, retpoŝtadreso",
		"'Retpoŝto’ estas reta mesaĝoservo, do la sistemo mem, dum <i>‘retmesaĝo’</i> estas la unuopa mesaĝo, kiun oni sendas al specifa <i>‘retpoŝtadreso’.</i><br>\n<br>\nNotu tamen, ke – analoge al la uzo de <i>‘poŝto’ –</i> <i>‘retpoŝto’</i> ankaŭ estas uzata por ĉiu el la distribuoj de retmesaĝoj, kun la signifo de ‘retmesaĝaro’:<br>\n<br>\n<i>Mi ĵus skribis retmesaĝon al vi.</i> SED: <i>Mi ĵus legis mian retpoŝton de la lastaj tagoj.</i>",
		"Donu al mi vian <span style=\"color: #ff0000\">retpoŝton</span> (retpoŝtadreson)!<br>\n<br>\nMultaj <span style=\"color: #ff0000\">retpoŝtoj</span> (retmesaĝoj) nuntempe estas spamo."
	],
	"£:BASE-retposxtadreso": [
		"£:BASE-retposxtadreso",
		"Konfuzebla vortoparo: retpoŝto → retmesaĝo, retpoŝtadreso",
		"'Retpoŝto’ estas reta mesaĝoservo, do la sistemo mem, dum <i>‘retmesaĝo’</i> estas la unuopa mesaĝo, kiun oni sendas al specifa <i>‘retpoŝtadreso’.</i><br>\n<br>\nNotu tamen, ke – analoge al la uzo de <i>‘poŝto’ –</i> <i>‘retpoŝto’</i> ankaŭ estas uzata por ĉiu el la distribuoj de retmesaĝoj, kun la signifo de ‘retmesaĝaro’:<br>\n<br>\n<i>Mi ĵus skribis retmesaĝon al vi.</i> SED: <i>Mi ĵus legis mian retpoŝton de la lastaj tagoj.</i>",
		"Donu al mi vian <span style=\"color: #ff0000\">retpoŝton</span> (retpoŝtadreson)!<br>\n<br>\nMultaj <span style=\"color: #ff0000\">retpoŝtoj</span> (retmesaĝoj) nuntempe estas spamo."
	],
	"£:BASE-relativa": [
		"£:BASE-relativa",
		"Konfuzebla vortoparo: rilativa → relativa",
		"La adjektivo <i>'rilativa'</i> signifas 'gramatike relativa', kaj ĝi nur uzeblas en gramatika kunteksto, ekz. <i>'rilativa pronomo/adverbo'.</i> En aliaj kuntekstoj, uzu <i>'relativa'.</i> Fakte, estas plej sekure uzi <i>'relativa'</i> ajnakaze, ĉar ĝi ankaŭ uzeblas, kie estas permesate uzi <i>'rilativa'.</i> Ĉi lasta aperas en PIV, sed ne en ReVo.",
		"<span style=\"color: #ff0000\"><i>rilativecteorio</i></span><i> (relativecteorio)</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>rilativa</i></span><i> (relativa) rapideco estas ĉ. 500 km/h</i>"
	],
	"£x-etype-list&\"<rilativ.*>\"&\"relativ.*\"": [
		"£x-etype-list&\"<rilativ.*>\"&\"relativ.*\"",
		"Konfuzebla vortoparo: rilativa → relativa",
		"La adjektivo <i>'rilativa'</i> signifas 'gramatike relativa', kaj ĝi nur uzeblas en gramatika kunteksto, ekz. <i>'rilativa pronomo/adverbo'.</i> En aliaj kuntekstoj, uzu <i>'relativa'.</i> Fakte, estas plej sekure uzi <i>'relativa'</i> ajnakaze, ĉar ĝi ankaŭ uzeblas, kie estas permesate uzi <i>'rilativa'.</i> Ĉi lasta aperas en PIV, sed ne en ReVo.",
		"<span style=\"color: #ff0000\"><i>rilativecteorio</i></span><i> (relativecteorio)</i><br>\n<br>\n<i>La</i> <span style=\"color: #ff0000\"><i>rilativa</i></span><i> (relativa) rapideco estas ĉ. 500 km/h</i>"
	],
	"£:BASE-roma&\"<romanaj?n?>\"": [
		"£:BASE-roma&\"<romanaj?n?>\"",
		"Konfuzebla vortoparo: romana → roma",
		"Kaj <i>‘roma’</i> kaj <i>‘romana’</i> signifas ‘de Romo / Rom-rilata’, sed la bazo de la dua ne estas <i>‘Romo’</i> mem<i>,</i> sed <i>‘rom|an|p’,</i> do enloĝanto de Romo. Krome, la vorto estas ambigua, ĉar <i>‘romano’</i> ankaŭ estas literatura verko. Do, pro klareco, konsideru uzi <i>‘roma’</i> ĉi tie.",
		"La <span style=\"color: #ff0000\">romana</span> (roma) eklezio ĝenerale ne akceptis virinojn kiel pastrojn."
	],
	"£:BASE-rosmareno": [
		"£:BASE-rosmareno",
		"Konfuzebla vortoparo: rosmaro → rosmareno",
		"En Esperanto, <i>'rosmaro'</i> estas granda marbesto kun dentegoj, dum <i>'rosmareno'</i> estas spico aŭ spicarbusteto.",
		"Oni povas uzi <span style=\"color: #ff0000\">rosmaron</span> (rosmarenon) por fajnigi saŭcojn."
	],
	"£:BASE-rozo&\"<rosoj?n?>\"": [
		"£:BASE-rozo&\"<rosoj?n?>\"",
		"Konfuzebla vortoparo: roso → rozo",
		"Eblas konfuzi <i>‘rozo’</i> kaj <i>‘roso’,</i> precipe se oni en la gepatra lingvo ne klare distigas inter voĉaj kaj nevoĉaj konsonantoj. <i>‘Rozo’</i> estas floro, <i>‘roso’</i> estas matenaj surfacgutetoj.",
		"Li plukis <span style=\"color: #ff0000\">rosojn</span> (rozojn) por sia amikino."
	],
	"£:BASE-ebleco&\"<sxancoj?n?>\"": [
		"£:BASE-ebleco&\"<sxancoj?n?>\"",
		"Konfuzebla vortoparo: ŝanco → ebleco",
		"La vorto <i>‘ŝanco’</i> temas pri sukceso-probableco, do oni parolas pri (mal)grandaj aŭ (mal)bonaj ŝancoj (angle: <i>prospect,</i> germane: <i>Chance</i>). Sen la elemento de probableco, kaj sen la perspektivo de (mal)sukceso, uzu simple <i>‘ebleco’</i> (angle: <i>opportunity,</i> germane: <i>Möglichkeit).</i> Ne estas certa eraro, sed pripensu, ĉu vi ĝuste elektis ĉi tie.<br>\n<br>\n<i>Li havas bonajn ŝancojn / nenian ŝancon por esti elektita.</i> (laŭ verŝajneco-prognozoj)<br>\n<br>\n<i>Li havas la eblecon vojaĝi libere.</i> (ĉar li havas tempon kaj monon por tio)",
		"Dum la ekskurso vi havos la <span style=\"color: #ff0000\">ŝancon</span> (eblecon) viziti la etnografian muzeon."
	],
	"£:BASE-sxati&\"<sat.*>\"": [
		"£:BASE-sxati&\"<sat.*>\"",
		"Konfuzebla vortoparo: sati → ŝati",
		"La verbo <i>‘sati’</i> signifas ‘esti sata’, kun adjektiva radiko, dum <i>‘ŝati’,</i> kun supersigno, signivas ‘am(et)i’. La unua estas netransitiva kaj neofta, la dua estas transitivas kaj ofta verbo. Precipe antaŭ infinitivo aŭ akuzativa objekto, verŝajne necesas korekti <i>‘sati’</i> al <i>‘ŝati’.</i>",
		"Mi <span style=\"color: #ff0000\">satus</span> (ŝatus) prezenti mian amikinon."
	],
	"£:BASE-konsekvenco&\"<sekvoj?n?>\"": [
		"£:BASE-konsekvenco&\"<sekvoj?n?>\"",
		"Konfuzebla vortoparo: sekvo → konsekvenco",
		"La diferenco inter <i>‘sekvo’</i> kaj <i>‘konsekvenco’</i> estas, ke la dua ne estas simpla tempa aŭ natura sekvo, sed logika sekvo aŭ rezulto, racie konkludebla aŭ interligita. Agoj, faktoj, decidoj, principoj havas konsekvencojn, dum (nehomaj) okazoj, ekz. katastrofoj, havas sekvojn.",
		"La aĉeto de la nova klubejo havas la <span style=\"color: #ff0000\">sekvon</span> (konsekvencon), ke ni devas altigi la kotizojn."
	],
	"£:BASE-senco": [
		"£:BASE-senco",
		"Konfuzebla vortoparo: senco ↔ senso",
		"Ĝenerale, la uzo de la vorto 'senco’ estas simila al tiu de <i>‘signifo’</i> (de ekz. vorto aŭ esprimo)<i>.</i> Krome, se io <i>havas sencon,</i> ĝi estas memevidenta. Ne konfuzu <i>‘senco’</i> kun <i>‘senso’,</i> kiu estas anatomia vorto kaj celas la kapablon percepti per sensorgano (ekz. <i>vidi</i>, <i>aŭdi</i> ktp.)",
		"<i>Tiu vorto havas kaj ĝeneralan kaj metaforan</i> <span style=\"color: #ff0000\"><i>sensojn</i></span><i> (sencojn).</i><br>\n<br>\n<i>Al li mankas ĉia</i> <span style=\"color: #ff0000\"><i>diplomatia</i></span><i> senco (senso).</i>"
	],
	"£:BASE-senso": [
		"£:BASE-senso",
		"Konfuzebla vortoparo: senco ↔ senso",
		"Ĝenerale, la uzo de la vorto 'senco’ estas simila al tiu de <i>‘signifo’</i> (de ekz. vorto aŭ esprimo)<i>.</i> Krome, se io <i>havas sencon,</i> ĝi estas memevidenta. Ne konfuzu <i>‘senco’</i> kun <i>‘senso’,</i> kiu estas anatomia vorto kaj celas la kapablon percepti per sensorgano (ekz. <i>vidi</i>, <i>aŭdi</i> ktp.)",
		"<i>Tiu vorto havas kaj ĝeneralan kaj metaforan</i> <span style=\"color: #ff0000\"><i>sensojn</i></span><i> (sencojn).</i><br>\n<br>\n<i>Al li mankas ĉia</i> <span style=\"color: #ff0000\"><i>diplomatia</i></span><i> senco (senso).</i>"
	],
	"£:BASE-senso&\"<sentoj?n?>": [
		"£:BASE-senso&\"<sentoj?n?>",
		"Konfuzebla vortoparo: sento → senso",
		"La ĝenerala vorto por percepto estas <i>‘sento’ –</i> Oni sentas tuŝon, amon, doloron ktp., sed ekzistas speciala vorto por la 5 specoj de biologia percepto: <i>‘senso’.</i> Krome, ne konfuzu <i>‘sento’</i> kun <i>‘senco’</i> (signifo) kaj <i>‘sentumo’</i> (turndirekto).",
		"Li havas tre akran <span style=\"color: #ff0000\">senton</span> (senson) de aŭdado."
	],
	"£:BASE-sigelo": [
		"£:BASE-sigelo",
		"Konfuzebla vortoparo: siglo → sigelo",
		"'Siglo' estas mallongiga literĉeno, dum <i>'sigelo'</i> estas fermilo aŭ certigilo, tipe el vakso aŭ plumbo kun enfermita aŭtoritata signo.",
		"La letero estis fermita per reĝa <span style=\"color: #ff0000\">siglo</span> (sigelo)."
	],
	"£:BASE-gusxo&\"<silikvoj?n?>\"": [
		"£:BASE-gusxo&\"<silikvoj?n?>\"",
		"Konfuzebla vortoparo: silikvo/ŝelo → guŝo",
		"'Silikvo’ estas <b>du</b>faka malfermfrukto, <i>‘guŝo’</i> estas <b>unu</b>faka malfermfrukto. <i>Silikvojn</i> havas brasikacoj (ekz. brasiko, rafano, sinapo), <i>guŝojn</i> havas fabacoj (ekz. pizo, fabo, arakido).<br>\n<br>\nNotu, ke nek unu nek la alia estas <i>‘ŝelo’.</i>",
		""
	],
	"£:BASE-gusxo&\"<sxeloj?n?>\"": [
		"£:BASE-gusxo&\"<sxeloj?n?>\"",
		"Konfuzebla vortoparo: silikvo/ŝelo → guŝo",
		"'Silikvo’ estas <b>du</b>faka malfermfrukto, <i>‘guŝo’</i> estas <b>unu</b>faka malfermfrukto. <i>Silikvojn</i> havas brasikacoj (ekz. brasiko, rafano, sinapo), <i>guŝojn</i> havas fabacoj (ekz. pizo, fabo, arakido).<br>\n<br>\nNotu, ke nek unu nek la alia estas <i>‘ŝelo’.</i>",
		""
	],
	"£:BASE-slava&\"<slavonaj?n?>\"": [
		"£:BASE-slava&\"<slavonaj?n?>\"",
		"Konfuzebla vortoparo: slavona → slava",
		"La ‘<i>slavona’</i> estas ortodoksa eklezia lingvo kun propraj alfabetoj (glagolico kaj kirilico), dum la adjektivo <i>‘slava’</i> celas orienteŭropan familion de popoloj kaj lingvoj kaj ties historio.",
		""
	],
	"£:BASE-seruro": [
		"£:BASE-seruro",
		"Konfuzebla vortoparo: ŝloso → seruro",
		"'Ŝloso’ estas substantivigo de la verbo <i>‘ŝlosi’,</i> kaj do signifas ‘ŝlosado’. Oni metas ŝlosilon ne en ŝloson, sed en <i>seruron.</i>",
		"La <span style=\"color: #ff0000\">ŝloso</span> (seruro) de la trezorkesto estis difektita."
	],
	"£:BASE-societo&\"<socioj?n?>\"": [
		"£:BASE-societo&\"<socioj?n?>\"",
		"Konfuzebla vortoparo: socio → societo",
		"<i>'Socio’</i> estas la ĝenerala vorto por granda strukturita grupo de homoj kun komuna kulturo, historio kaj identeco. <i>‘Societo’</i> estas organizita grupo kun komuna celo, komerca, scienca, hobia, ideologia ktp. <i>‘Asocio’, ‘korporacio’, ‘sindikato’, ‘klubo’</i> ktp. estas specoj de societo.",
		"En lia testamento li donacis multe da mono al bonfara <span style=\"color: #ff0000\">socio</span> (societo)."
	],
	"£:BASE-veturigi&\"<sxofor.*>\"": [
		"£:BASE-veturigi&\"<sxofor.*>\"",
		"Konfuzebla vortoparo: ŝofori → veturigi",
		"Oni ŝoforas aŭton, ne personon. Uzu <i>‘veturigi’,</i> se vi celas ‘kunporti personon en aŭto’.",
		"Ĉu vi povas ŝofori (veturigi) min al la stacidomo?"
	],
	"£:BASE-revo": [
		"£:BASE-revo",
		"Konfuzebla vortoparo: sonĝo ↔ revo",
		"'Sonĝojn’ oni havas nokte, dum dormo, <i>‘revoj’</i> oni havas dumtage, pri imagita estonteco. <i>‘Sonĝo’</i> povas temi pri ĉio ajn, ankaŭ teruraĵoj, sed <i>‘revo’</i> kutime temas pri io bona, dezirata.",
		"<i>Estis lia infanaĝa</i> <span style=\"color: #ff0000\"><i>sonĝo</i></span><i> (revo) fariĝi astronaŭto.</i><br>\n<br>\n<i>Lastnokte mi havis strangan</i> <span style=\"color: #ff0000\"><i>revon</i></span><i> (sonĝon).</i>"
	],
	"£:BASE-songxo": [
		"£:BASE-songxo",
		"Konfuzebla vortoparo: sonĝo ↔ revo",
		"'Sonĝojn’ oni havas nokte, dum dormo, <i>‘revoj’</i> oni havas dumtage, pri imagita estonteco. <i>‘Sonĝo’</i> povas temi pri ĉio ajn, ankaŭ teruraĵoj, sed <i>‘revo’</i> kutime temas pri io bona, dezirata.",
		"<i>Estis lia infanaĝa</i> <span style=\"color: #ff0000\"><i>sonĝo</i></span><i> (revo) fariĝi astronaŭto.</i><br>\n<br>\n<i>Lastnokte mi havis strangan</i> <span style=\"color: #ff0000\"><i>revon</i></span><i> (sonĝon).</i>"
	],
	"£:BASE-spinaco": [
		"£:BASE-spinaco",
		"Konfuzebla vortoparo: spinako → spinaco",
		"En Esperanto, <i>'spinako'</i> estas speco de velo, dum <i>'spinaco'</i> estas legomo.",
		"Mi ne ŝatas manĝi <span style=\"color: #ff0000\">spinakon</span> (spinacon)."
	],
	"£:BASE-spuro": [
		"£:BASE-spuro",
		"Konfuzebla vortoparo: spuro ↔ ŝpuro",
		"La vortparo <i>‘spuro’</i> kaj <i>‘ŝpuro’</i> kaŭzas multajn erarojn. <i>‘Spuro’</i> estas postsigno, dum <i>‘ŝpuro’</i> celas la trakan larĝecon de fervojo. Ĉi-lasta estas teknika termino kaj tial relative malofta. Kontrolu, ĉu vi faris eraron ĉi tie.",
		"<i>Oni trovis</i> <span style=\"color: #ff0000\"><i>ŝpurojn</i></span><i> (spurojn) de dinosaŭroj en la regiono.</i><br>\n<br>\n<i>La fervojo en Turkio uzas norman</i> <span style=\"color: #ff0000\"><i>spuron</i></span><i> (ŝpuron).</i>"
	],
	"£:BASE-sxpuro": [
		"£:BASE-sxpuro",
		"Konfuzebla vortoparo: spuro ↔ ŝpuro",
		"La vortparo <i>‘spuro’</i> kaj <i>‘ŝpuro’</i> kaŭzas multajn erarojn. <i>‘Spuro’</i> estas postsigno, dum <i>‘ŝpuro’</i> celas la trakan larĝecon de fervojo. Ĉi-lasta estas teknika termino kaj tial relative malofta. Kontrolu, ĉu vi faris eraron ĉi tie.",
		"<i>Oni trovis</i> <span style=\"color: #ff0000\"><i>ŝpurojn</i></span><i> (spurojn) de dinosaŭroj en la regiono.</i><br>\n<br>\n<i>La fervojo en Turkio uzas norman</i> <span style=\"color: #ff0000\"><i>spuron</i></span><i> (ŝpuron).</i>"
	],
	"£x-etype-lemma&\"<.+sxpuroj?n?>\"&\".*spuro\"": [
		"£x-etype-lemma&\"<.+sxpuroj?n?>\"&\".*spuro\"",
		"Konfuzebla vortoparo: spuro ↔ ŝpuro",
		"La vortparo <i>‘spuro’</i> kaj <i>‘ŝpuro’</i> kaŭzas multajn erarojn. <i>‘Spuro’</i> estas postsigno, dum <i>‘ŝpuro’</i> celas la trakan larĝecon de fervojo. Ĉi-lasta estas teknika termino kaj tial relative malofta. Kontrolu, ĉu vi faris eraron ĉi tie.",
		"<i>Oni trovis</i> <span style=\"color: #ff0000\"><i>ŝpurojn</i></span><i> (spurojn) de dinosaŭroj en la regiono.</i><br>\n<br>\n<i>La fervojo en Turkio uzas norman</i> <span style=\"color: #ff0000\"><i>spuron</i></span><i> (ŝpuron).</i>"
	],
	"£:BASE-stopi&\"<sxtop.*>\"": [
		"£:BASE-stopi&\"<sxtop.*>\"",
		"Konfuzebla vortoparo: ŝtopi ↔ stopi",
		"Ne konfuzu la radikojn <i>‘ŝtop-’</i> (obstrukci/bloki) kaj <i>‘stop-’</i> (haltigi).",
		"Ni devas <span style=\"color: #ff0000\">ŝtopi</span> (stopi/haltigi) ĉiujn subvenciojn al fosila energio."
	],
	"£:BASE-subjstantivo&\"<subjektivo>\"": [
		"£:BASE-subjstantivo&\"<subjektivo>\"",
		"Konfuzebla vortoparo: subjektivo → substantivo",
		"La vorto <i>‘subjektivo’</i> ne ekzistas kun gramatika signifo – se entute, ĝi devus signifi la econ esti subjektiva, ekz. parolante pri percepto aŭ poezio. Ĉi tie vi verŝajne celas <i>‘substantivo’,</i> aŭ eble <i>‘subjekto’.</i>",
		"En romanidaj lingvo, la adjektivo normale aperas malantaŭ la <span style=\"color: #ff0000\">subjektivo</span> (substantivo)."
	],
	"£:BASE-supra&\"<superaj?n?>\"": [
		"£:BASE-supra&\"<superaj?n?>\"",
		"Konfuzebla vortoparo: supera → supra",
		"'Supera’ estas uzata kun abstrakta senco kaj temas pri kvalito aŭ nivelo, dum <i>‘supra’</i> estas konkreta, loka, ofte en komparo kun io alia, malsupra.",
		"La <span style=\"color: #ff0000\">supera</span> (supra) parto de la monto estis blanka pro neĝo."
	],
	"£:BASE-cxi-supra": [
		"£:BASE-cxi-supra",
		"Konfuzebla vortoparo: supera → supra",
		"'Supera’ estas uzata kun abstrakta senco kaj temas pri kvalito aŭ nivelo, dum <i>‘supra’</i> estas konkreta, loka, ofte en komparo kun io alia, malsupra.",
		"La <span style=\"color: #ff0000\">supera</span> (supra) parto de la monto estis blanka pro neĝo."
	],
	"£:mezuro&\"<taktoj?n?>\"": [
		"£:mezuro&\"<taktoj?n?>\"",
		"Konfuzebla vortoparo: takto → mezuro",
		"Parolante pri muziko, <i>‘takto’</i> estas temposkemo de la ritmo, dum <i>‘mezuro’</i> estas la baza unuo de la takto.",
		"Dum 3 <span style=\"color: #ff0000\">taktoj</span> (mezuroj) la violono silentis."
	],
	"£:BASE-tuno": [
		"£:BASE-tuno",
		"Konfuzebla vortoparo: tono → tuno",
		"En Esperanto, <i>'tono'</i> estas muzika sono aŭ nuanco de io, dum <i>'tuno'</i> estas mezurunuo de pezo.<br>\n<br>\nNoto, ke ankaŭ estas falsa amiko diri <i>'tunfiŝo'</i> anstataŭ <i>'tinuso'.</i>",
		"La rakedo povas sendi 2 <span style=\"color: #ff0000\">tonojn</span> (tunojn) da materialo al la spaco."
	],
	"£x-etype-lemma&\"<tunfisxoj?n?>\"": [
		"£x-etype-lemma&\"<tunfisxoj?n?>\"",
		"Konfuzebla vortoparo: tono → tuno",
		"En Esperanto, <i>'tono'</i> estas muzika sono aŭ nuanco de io, dum <i>'tuno'</i> estas mezurunuo de pezo.<br>\n<br>\nNoto, ke ankaŭ estas falsa amiko diri <i>'tunfiŝo'</i> anstataŭ <i>'tinuso'.</i>",
		"La rakedo povas sendi 2 <span style=\"color: #ff0000\">tonojn</span> (tunojn) da materialo al la spaco."
	],
	"£:BASE-trinki": [
		"£:BASE-trinki",
		"Konfuzebla vortoparo: trinki ↔ drinki",
		"En Esperanto, oni distingas inter trinkado ĝenerale, kaj trinkado de alkoholo. Se temas pri alkoholaj trinkaĵoj en ebriigaj kvantoj, vi povas uzi <i>‘drinki’.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>drinkis</i></span><i> (trinkis) tason da lakto.</i><br>\n<br>\n<i>La studentoj</i> <span style=\"color: #ff0000\"><i>trinkis</i></span><i> (drinkis) bieron la tutan nokton, kantis, danci kaj ĝenerale amuziĝis.</i><br>\n<br>\n<i>La akvo en la fontano ne estas</i> <span style=\"color: #ff0000\"><i>drinkebla</i></span><i> (trinkebla).</i>",
		""
	],
	"£:BASE-trinkebla": [
		"£:BASE-trinkebla",
		"Konfuzebla vortoparo: trinki ↔ drinki",
		"En Esperanto, oni distingas inter trinkado ĝenerale, kaj trinkado de alkoholo. Se temas pri alkoholaj trinkaĵoj en ebriigaj kvantoj, vi povas uzi <i>‘drinki’.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>drinkis</i></span><i> (trinkis) tason da lakto.</i><br>\n<br>\n<i>La studentoj</i> <span style=\"color: #ff0000\"><i>trinkis</i></span><i> (drinkis) bieron la tutan nokton, kantis, danci kaj ĝenerale amuziĝis.</i><br>\n<br>\n<i>La akvo en la fontano ne estas</i> <span style=\"color: #ff0000\"><i>drinkebla</i></span><i> (trinkebla).</i>",
		""
	],
	"£:BASE-drinki": [
		"£:BASE-drinki",
		"Konfuzebla vortoparo: trinki ↔ drinki",
		"En Esperanto, oni distingas inter trinkado ĝenerale, kaj trinkado de alkoholo. Se temas pri alkoholaj trinkaĵoj en ebriigaj kvantoj, vi povas uzi <i>‘drinki’.</i><br>\n<br>\n<i>La infano</i> <span style=\"color: #ff0000\"><i>drinkis</i></span><i> (trinkis) tason da lakto.</i><br>\n<br>\n<i>La studentoj</i> <span style=\"color: #ff0000\"><i>trinkis</i></span><i> (drinkis) bieron la tutan nokton, kantis, danci kaj ĝenerale amuziĝis.</i><br>\n<br>\n<i>La akvo en la fontano ne estas</i> <span style=\"color: #ff0000\"><i>drinkebla</i></span><i> (trinkebla).</i>",
		""
	],
	"£:BASE-bagatela&\"<trivialaj?n?>\"": [
		"£:BASE-bagatela&\"<trivialaj?n?>\"",
		"Konfuzebla vortoparo: triviala ↔ bagatela",
		"<i>'Triviala’</i> signifas ‘aĉe vulgara’, sed ĉi tie vi verŝajne celas <i>‘bagatela’,</i> kun la senco ‘malgrava/malkonsiderinda’.",
		"La artikolo nur enhavas <span style=\"color: #ff0000\">trivialajn</span> (bagatelajn) informojn."
	],
	"£:BASE-gajni&\"<venk.*>\"": [
		"£:BASE-gajni&\"<venk.*>\"",
		"Konfuzebla vortoparo: venki → gajni",
		"Oni <i>venkas</i> konkuranton (en konkurso) aŭ malamikon (en milito), sed <i>gajnas</i> konkurson (kontraŭ konkuranto) aŭ militon (kontraŭ malamiko).<br>\n<br>\n<i>Usono</i> <span style=\"color: #ff0000\"><i>venkis</i></span><i> (gajnis) la militon kaj perdis la pacon.</i><br>\n<br>\n<i>Notu, ke ‘gajni’</i> krome havas duan signifon de ‘akiri ion bonan’: <i>gajni monon, spertojn aŭ ies favoron.</i>",
		""
	],
	"£:BASE-ventgeneratoro": [
		"£:BASE-ventgeneratoro",
		"Konfuzebla vortoparo: ventmuelilo → ventgeneratoro",
		"'Ventmuelilo’ estas muelilo, do aparato, kiu muelas ekz. grenon, uzante ventenergion. Ne konfuzu tiun tradician aparaton kun moderne <i>‘ventgeneratoro’,</i> kiu ne muelas, sed produktas elektron.",
		"La plej novaj <span style=\"color: #ff0000\">ventmueliloj</span> (ventgeneratoroj) atingas altecon de Eiffel-turo."
	],
	"£:BASE-videokunveno": [
		"£:BASE-videokunveno",
		"Konfuzebla vortoparo: videokonferenco → videokunveno",
		"'Konferenco’ estas granda, ofte plurtaga evento. Ĉi tie vi eble celas simple kunvenon.",
		"Ili diskutis la aferon pere de mallonga <span style=\"color: #ff0000\">videokonferenco</span> (videokunveno)."
	],
	"£:BASE-zomo": [
		"£:BASE-zomo",
		"Konfuzebla vortoparo: zumi ↔ zomi",
		"<i>Zumado'</i> estas la brueto de insektoj aŭ maŝino. Ankaŭ eblas zumi kanton. Sed <i>'zomado'</i> estas io tute alia, grandigo de bildoparto. Oni zomas mapon aŭ foton, aŭ zomas al objektoj en iu foto.",
		"Tiu fotilo havas fortan optikan <span style=\"color: #ff0000\">zumon</span> (zomon)-"
	],
	"£:BASE-zomi": [
		"£:BASE-zomi",
		"Konfuzebla vortoparo: zumi ↔ zomi",
		"<i>Zumado'</i> estas la brueto de insektoj aŭ maŝino. Ankaŭ eblas zumi kanton. Sed <i>'zomado'</i> estas io tute alia, grandigo de bildoparto. Oni zomas mapon aŭ foton, aŭ zomas al objektoj en iu foto.",
		"Tiu fotilo havas fortan optikan <span style=\"color: #ff0000\">zumon</span> (zomon)-"
	],
	"£:BASE-sekcio&\"<kvartiro>\"": [
		"£:BASE-sekcio&\"<kvartiro>\"",
		"Konfuzeblaj vortoj: kvartiro → sekcio/kvartalo",
		"'Kvartiro' estas kantonmento por soldatoj. La vorto estas foje uzata en pli ĝenerala senco por portempa loĝejo aŭ dormejo, sed tio ne estas oficiala signifo. Pli rekta eraro, kaj eble falsa amiko, estas uzi la vorton en la senco de <i>'(urbo)kvartalo'</i> aŭ <i>'sekcio'</i> (de ekz. malliberejo aŭ preĝejo).",
		"Li estis entombigita en la juda preĝejo, <span style=\"color: #ff0000\">kvartiro</span> (sekcio) 42."
	],
	"£:BASE-kvartalo&\"<kvartiro>\"": [
		"£:BASE-kvartalo&\"<kvartiro>\"",
		"Konfuzeblaj vortoj: kvartiro → sekcio/kvartalo",
		"'Kvartiro' estas kantonmento por soldatoj. La vorto estas foje uzata en pli ĝenerala senco por portempa loĝejo aŭ dormejo, sed tio ne estas oficiala signifo. Pli rekta eraro, kaj eble falsa amiko, estas uzi la vorton en la senco de <i>'(urbo)kvartalo'</i> aŭ <i>'sekcio'</i> (de ekz. malliberejo aŭ preĝejo).",
		"Li estis entombigita en la juda preĝejo, <span style=\"color: #ff0000\">kvartiro</span> (sekcio) 42."
	],
	"£:BASE-kapitalo&\"<kapitel.*>\"": [
		"£:BASE-kapitalo&\"<kapitel.*>\"",
		"Konfuzeblaj vortoparo: kapitalo ↔ kapitelo",
		"<i>'Kapitalo’</i> estas investebla monsumo, dum <i>‘kapitelo’</i> estas la ornamita supra ekstremo de kolono. Aliaj similaj vortoj estas <i>‘kapitulo’ -</i> (a) korbforma infloresko de ekz. Sunfloro) aŭ (b) gvidantaro - kaj <i>‘kapitolo’</i> (roma citadelo). Ne konfuzu <i>‘kapitulo’</i> kun <i>‘kapitulaco’</i> (batalrezigno).",
		""
	],
	"£lando-ano": [
		"£lando-ano",
		"Konfuzo de landonomo kaj etnonomo",
		"En Esperanto, oni aŭ uzas sufiksojn por formi landonomojn el etnonomoj <i>(-io, ujo, -lando, -istano)</i> aŭ por formi etnonomon el landonomo <i>(-an),</i> depende de ĉu la radiko estas la etno aŭ la lando.<br>\n<br>\n<i>dano’ → ‘Danio’, ‘Danujo’,</i><br>\n<br>\n<i>sviso → ‘Svislando’</i><br>\n<br>\n<i>taĝiko → ‘Taĝikistano’</i><br>\n<br>\n<i>Kanado → kanadano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>kanadoj</i> </span>aŭ <i>*</i><span style=\"color: #ff0000\"><i>Kanadio/Kanadujo</i></span>)<br>\n<br>\n<i>Indonezio → indoneziano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>indonezoj</i></span>)<br>\n<br>\nLa ĝenerala regulo estas, ke la etno estas la radiko por <b>eŭropaj landoj</b> inkl. de Turkio (kun <i>-io, -ujo, -lando</i> por la lando) kaj por <b>Centralazio</b> (kun <i>-istano),</i> dum la lando estas la radiko en la <b>cetero de la mondo</b> (kun <i>-an</i> por la etno). Esceptoj estas naŭ maljunaj landoj en Orientazio kaj Orientafriko, kun etna radiko: <i>ĉino, japano, mongolo, vjetnamo, tajo, egipto, etiopo, somalo, saudarabo.</i> Historie ankaŭ <i>hindo/Hindujo</i> apartenas al tiu grupo, sed nuntempe <i>Barato/baratano</i> estas pli uzata.<br>\n<br>\nVidu plian klarigojn kaj superrigardan mapon en <a target=\"_blank\" href=\"https://eo.wikipedia.org/wiki/Landnomoj_en_Esperanto\">Vikipedio</a>.",
		""
	],
	"£lando-iano": [
		"£lando-iano",
		"Konfuzo de landonomo kaj etnonomo",
		"En Esperanto, oni aŭ uzas sufiksojn por formi landonomojn el etnonomoj <i>(-io, ujo, -lando, -istano)</i> aŭ por formi etnonomon el landonomo <i>(-an),</i> depende de ĉu la radiko estas la etno aŭ la lando.<br>\n<br>\n<i>dano’ → ‘Danio’, ‘Danujo’,</i><br>\n<br>\n<i>sviso → ‘Svislando’</i><br>\n<br>\n<i>taĝiko → ‘Taĝikistano’</i><br>\n<br>\n<i>Kanado → kanadano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>kanadoj</i> </span>aŭ <i>*</i><span style=\"color: #ff0000\"><i>Kanadio/Kanadujo</i></span>)<br>\n<br>\n<i>Indonezio → indoneziano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>indonezoj</i></span>)<br>\n<br>\nLa ĝenerala regulo estas, ke la etno estas la radiko por <b>eŭropaj landoj</b> inkl. de Turkio (kun <i>-io, -ujo, -lando</i> por la lando) kaj por <b>Centralazio</b> (kun <i>-istano),</i> dum la lando estas la radiko en la <b>cetero de la mondo</b> (kun <i>-an</i> por la etno). Esceptoj estas naŭ maljunaj landoj en Orientazio kaj Orientafriko, kun etna radiko: <i>ĉino, japano, mongolo, vjetnamo, tajo, egipto, etiopo, somalo, saudarabo.</i> Historie ankaŭ <i>hindo/Hindujo</i> apartenas al tiu grupo, sed nuntempe <i>Barato/baratano</i> estas pli uzata.<br>\n<br>\nVidu plian klarigojn kaj superrigardan mapon en <a target=\"_blank\" href=\"https://eo.wikipedia.org/wiki/Landnomoj_en_Esperanto\">Vikipedio</a>.",
		""
	],
	"£x-etype-lemma&\"indoneziano\"": [
		"£x-etype-lemma&\"indoneziano\"",
		"Konfuzo de landonomo kaj etnonomo",
		"En Esperanto, oni aŭ uzas sufiksojn por formi landonomojn el etnonomoj <i>(-io, ujo, -lando, -istano)</i> aŭ por formi etnonomon el landonomo <i>(-an),</i> depende de ĉu la radiko estas la etno aŭ la lando.<br>\n<br>\n<i>dano’ → ‘Danio’, ‘Danujo’,</i><br>\n<br>\n<i>sviso → ‘Svislando’</i><br>\n<br>\n<i>taĝiko → ‘Taĝikistano’</i><br>\n<br>\n<i>Kanado → kanadano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>kanadoj</i> </span>aŭ <i>*</i><span style=\"color: #ff0000\"><i>Kanadio/Kanadujo</i></span>)<br>\n<br>\n<i>Indonezio → indoneziano</i> (ne diru <i>*</i><span style=\"color: #ff0000\"><i>indonezoj</i></span>)<br>\n<br>\nLa ĝenerala regulo estas, ke la etno estas la radiko por <b>eŭropaj landoj</b> inkl. de Turkio (kun <i>-io, -ujo, -lando</i> por la lando) kaj por <b>Centralazio</b> (kun <i>-istano),</i> dum la lando estas la radiko en la <b>cetero de la mondo</b> (kun <i>-an</i> por la etno). Esceptoj estas naŭ maljunaj landoj en Orientazio kaj Orientafriko, kun etna radiko: <i>ĉino, japano, mongolo, vjetnamo, tajo, egipto, etiopo, somalo, saudarabo.</i> Historie ankaŭ <i>hindo/Hindujo</i> apartenas al tiu grupo, sed nuntempe <i>Barato/baratano</i> estas pli uzata.<br>\n<br>\nVidu plian klarigojn kaj superrigardan mapon en <a target=\"_blank\" href=\"https://eo.wikipedia.org/wiki/Landnomoj_en_Esperanto\">Vikipedio</a>.",
		""
	],
	"£nil&\"<ol>\"": [
		"£nil&\"<ol>\"",
		"Malebla konjunkcio: ol",
		"La vorteto <i>‘ol’</i> estas uzata por komparo:<br>\n<br>\n<i>Li estas pli (mal)granda ol sia frato.</i> <i>Li parolas pli rapide ol li pensas.</i><br>\n<br>\nAnkaŭ eblas uzi la vorton kiel konjunkcion por tempa komparo. Sed iom nelogike, tio eblas nur kun <i>‘antaŭ’,</i> ne kun <i>‘post’:</i><br>\n<br>\n<i>Pensu antaŭ ol paroli!</i><br>\n<br>\n<i>Mi aerumis la ĉambron, antaŭ ol vi venis.</i><br>\n<br>\nSed ne:<br>\n<br>\n(a)<i> ?Purigu la kafmaŝinon post</i> <span style=\"color: #ff0000\"><i>ol</i></span><i> uzi ĝin.</i><br>\n<br>\n(b)<i> ?Ili aĉetis pli grandan domon post</i> <span style=\"color: #ff0000\"><i>ol</i></span><i> la bebo naskiĝis.</i><br>\n<br>\nNecesas vortumi alimaniere, sen <i>‘ol’</i>. Kun infinitivo(a) estas plej bone ŝanĝi ĝi al substantivo <i>(… post uzado)</i> au subpropozicio <i>(… post kiam vi uzis ĝin).</i> La \"nuda\" infinitivo <i>(...post uzi ĝin)</i> sonas iom strange, kvankam ne estas vera eraro.<br>\n<br>\nSe post <i>‘post ol’</i> jam venas subpropozicio (b), eblas simple uzi la konjunkcion <i>‘kiam’ (… post kiam la bebo naskiĝis)</i>",
		""
	],
	"£:kiam&\"<ol>\"": [
		"£:kiam&\"<ol>\"",
		"Malebla konjunkcio: ol",
		"La vorteto <i>‘ol’</i> estas uzata por komparo:<br>\n<br>\n<i>Li estas pli (mal)granda ol sia frato.</i> <i>Li parolas pli rapide ol li pensas.</i><br>\n<br>\nAnkaŭ eblas uzi la vorton kiel konjunkcion por tempa komparo. Sed iom nelogike, tio eblas nur kun <i>‘antaŭ’,</i> ne kun <i>‘post’:</i><br>\n<br>\n<i>Pensu antaŭ ol paroli!</i><br>\n<br>\n<i>Mi aerumis la ĉambron, antaŭ ol vi venis.</i><br>\n<br>\nSed ne:<br>\n<br>\n(a)<i> ?Purigu la kafmaŝinon post</i> <span style=\"color: #ff0000\"><i>ol</i></span><i> uzi ĝin.</i><br>\n<br>\n(b)<i> ?Ili aĉetis pli grandan domon post</i> <span style=\"color: #ff0000\"><i>ol</i></span><i> la bebo naskiĝis.</i><br>\n<br>\nNecesas vortumi alimaniere, sen <i>‘ol’</i>. Kun infinitivo(a) estas plej bone ŝanĝi ĝi al substantivo <i>(… post uzado)</i> au subpropozicio <i>(… post kiam vi uzis ĝin).</i> La \"nuda\" infinitivo <i>(...post uzi ĝin)</i> sonas iom strange, kvankam ne estas vera eraro.<br>\n<br>\nSe post <i>‘post ol’</i> jam venas subpropozicio (b), eblas simple uzi la konjunkcion <i>‘kiam’ (… post kiam la bebo naskiĝis)</i>",
		""
	],
	"£x-etype-lemma&\"<priv[ei]l[ie].*>\"": [
		"£x-etype-lemma&\"<priv[ei]l[ie].*>\"",
		"Malfacila vorto: privilegii",
		"La celita vorto estas <i>'privilegii'</i> aŭ <i>'privilegio',</i> ne <i>'</i><span style=\"color: #ff0000\"><i>privilegi</i></span><i>'</i> aŭ <i>'</i><span style=\"color: #ff0000\"><i>privilego</i></span><i>'.</i> Ankaŭ ne uzu -ig <i>(</i><span style=\"color: #ff0000\"><i>privilegigi</i></span><i>).</i> Notu krome la e/i sonsimilecon inter <i>'</i><span style=\"color: #ff0000\"><i>privilig</i></span><i>-'</i> kaj <i>'</i><span style=\"color: #ff0000\"><i>priveleg</i></span><i>-'</i> (malĝustaj) kaj <i>'privileg-'</i> (ĝusta).",
		""
	],
	"£:BASE-parkejo&\"<parkumoj?n?>\"": [
		"£:BASE-parkejo&\"<parkumoj?n?>\"",
		"Malĝusta afikso: parkumo → parkejo",
		"'Parkumo’ estas la ago parki (= parkumado). Prefere uzu <i>‘parkejo’</i> aŭ <i>parkumejo’</i> por la loko.",
		"La flughaveno havas grandan subĉielan parkumon (parkejon)."
	],
	"£:la&\"<l’>\"": [
		"£:la&\"<l’>\"",
		"Malĝusta apostrofo: l’ → la",
		"Ne eblas apostrofi artikolon inter vorto, kiu finiĝas per konsonanto, kaj vorto, kiu komenciĝas per konsonanto, se la rezulta konsonant-triopo ‘K-l’-K’ ne estas elparolebla.<br>\n<br>\n<i>Mortis</i> <span style=\"color: #ff0000\"><i>l’</i> </span><i>(la) granda reĝo.</i><br>\n<br>\nLa sola eble prononcebla tia konsonantotriopo estas r-l’-K kaj l-l’-K:<br>\n<br>\n<i>Restis nu</i><b><i>r l’ p</i></b><i>olvo.</i><br>\n<br>\n<i>A</i><b><i>l l’ f</i></b><i>rat’ parolis patro.</i>",
		""
	],
	"£:BASE-neniu&\"<neni’>\"": [
		"£:BASE-neniu&\"<neni’>\"",
		"Malĝusta apostrofo: neni’ / cxi’",
		"Ne estas permesata apostrofi tabelvortojn, nek tiujn kun -u, nek tiujn kun -o.",
		""
	],
	"£:BASE-nenio&\"<neni’>\"": [
		"£:BASE-nenio&\"<neni’>\"",
		"Malĝusta apostrofo: neni’ / cxi’",
		"Ne estas permesata apostrofi tabelvortojn, nek tiujn kun -u, nek tiujn kun -o.",
		""
	],
	"£:BASE-cxiu&\"<cxi’>\"": [
		"£:BASE-cxiu&\"<cxi’>\"",
		"Malĝusta apostrofo: neni’ / cxi’",
		"Ne estas permesata apostrofi tabelvortojn, nek tiujn kun -u, nek tiujn kun -o.",
		""
	],
	"£:BASE-cxio&\"<cxi’>\"": [
		"£:BASE-cxio&\"<cxi’>\"",
		"Malĝusta apostrofo: neni’ / cxi’",
		"Ne estas permesata apostrofi tabelvortojn, nek tiujn kun -u, nek tiujn kun -o.",
		""
	],
	"£:cxu&\"<se>\"": [
		"£:cxu&\"<se>\"",
		"Malĝusta konjunkcio: se → ĉu",
		"La konjunkcio <i>‘se’</i> (angle: <i>in case,</i> germane: <i>falls</i>) povas enkonduki nur adverbialan propozicion, ne objekt-propozicion. Por ĉi-lasta, uzu <i>‘ĉu’</i> (angle: <i>whether,</i> germane: <i>ob</i>). En la angla la konjunkcio <i>‘if’</i> funkcias kun ambaŭ, kio povas krei konfuzon.",
		"Mi ne scias, <span style=\"color: #ff0000\">se</span> (ĉu) li venas."
	],
	"£x-etype-lemma&\"<banknotoj?n?>\"": [
		"£x-etype-lemma&\"<banknotoj?n?>\"",
		"Malĝusta kunmetaĵo: banknoto → monbileto",
		"La tri signifoj de <i>‘noto’</i> (memoriga skribaĵo, muziknoto, ekzamnoto) ne inkludas la sencon ‘paperslipo’, do <i>‘banknoto’</i> ne havas la celitan signifon de <i>‘monbileto’.</i>",
		"Aperis nova serio de <span style=\"color: #ff0000\">banknotoj</span> (monbiletoj), kun arkitekturaj temoj."
	],
	"£:de&\"<da>\"": [
		"£:de&\"<da>\"",
		"Malĝusta prepozicio: da → de",
		"La prepozicio <i>‘da’</i> havas kvantan signifon. Oni uzas ĝin post kvantaj vortoj <i>(amaso, multe, malmulte, iom, pli, malpli, milo, miliono, litro, kilogramo)</i> aŭ post ujoj aŭ aliaj vortoj, kiuj implicas kvanton <i>(glaso da teo, fasko da herboj).</i><br>\n<br>\nUzu la prepozicion <i>‘de’</i> post ne-kvantaj vortoj <i>(multaj specoj de, manko/perdo/gajno de)</i> kaj post <i>-ono (duono de kuko, 12-ono de jaro).</i> Grupvortojn eblas uzi kaj kun <i>‘de’</i> (el kio la grupo konsistas?) kaj kun <i>‘da’</i> (kiom da?): <i>grupo de/da soldatoj, reto de/da komputioj.</i> La vorton <i>‘kvanto’</i> eblas uzi ne nur kiel ĝuste kvantan vorton (kun <i>da</i>), sed ankaŭ por (kvanta) eco de io (kun <i>de</i>)<i>,</i> ekz. <i>‘la kvanto de la oro en la trezorejo estas giganta.</i><br>\n<br>\n<i>Ne eblas uzi 'da’</i> antaŭ vorto, kiu estas pronomo aŭ alimaniere jam kvante difinita, per numeralo aŭ alia kvanta epiteto: <i>glaso/multe de unu vino, glaso de ĝi, iom de kelkaj bieroj, iom de ili.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/da\">da</a>.",
		"Manko <span style=\"color: #ff0000\">da</span> [de] tempo<br>\n<br>\nMultaj specoj <span style=\"color: #ff0000\">da</span> [de] floroj"
	],
	"£:da&\"<de>\"": [
		"£:da&\"<de>\"",
		"Malĝusta prepozicio: de → da",
		"La prepozicio <i>‘da’</i> havas kvantan signifon. Oni uzas ĝin post kvantaj vortoj <i>(amaso, multe, malmulte, iom, pli, malpli, milo, miliono, litro, kilogramo)</i> aŭ post ujoj aŭ aliaj vortoj, kiuj implicas kvanton <i>(glaso da teo, fasko da herboj).</i><br>\n<br>\nUzu la prepozicion <i>‘de’</i> post ne-kvantaj vortoj <i>(multaj specoj de, manko/perdo/gajno de)</i> kaj post <i>-ono (duono de kuko, 12-ono de jaro).</i> Grupvortojn eblas uzi kaj kun <i>‘de’</i> (el kio la grupo konsistas?) kaj kun <i>‘da’</i> (kiom da?): <i>grupo de/da soldatoj, reto de/da komputioj.</i> La vorton <i>‘kvanto’</i> eblas uzi ne nur kiel ĝuste kvantan vorton (kun <i>da</i>), sed ankaŭ por (kvanta) eco de io (kun <i>de</i>)<i>,</i> ekz. <i>‘la kvanto de la oro en la trezorejo estas giganta.</i><br>\n<br>\n<i>Ne eblas uzi 'da’</i> antaŭ vorto, kiu estas pronomo aŭ alimaniere jam kvante difinita, per numeralo aŭ alia kvanta epiteto: <i>glaso/multe de unu vino, glaso de ĝi, iom de kelkaj bieroj, iom de ili.</i><br>\n<br>\nLegu pli en la Lernu!-paĝo pri <a target=\"_blank\" href=\"https://lernu.net/gramatiko/da\">da</a>.",
		"Multe <span style=\"color: #ff0000\">de</span> [da] vino<br>\n<br>\nManpleno <span style=\"color: #ff0000\">de</span> [da] beroj"
	],
	"£:el&\"<de>\"": [
		"£:el&\"<de>\"",
		"Malĝusta prepozicio: de → el",
		"Oni uzas <i>‘el’,</i> kaj ne <i>‘de’,</i> por indiki, el kiu materialo estas farita objekto, aŭ el kiuj partoj konsistas tuto. Tio ankaŭ validas por homoj aŭ bestoj kiel \"materialo\": <i>fari atleton el iu.</i> Alia uzo por <i>‘el’</i> estas elekto inter pluraj eblecoj <i>(kiu el ili?)</i>. Ĉe movoj, <i>‘de’</i> estas uzata por forlaso de punkto, dum <i>‘el’</i> signifas \"de ene de\" (ujo, domo, kaverno ktp.). Kaj metafore oni povas vekiĝi <i>el dormo.</i><br>\n<br>\n<i>pokalo</i> <b><i>el</i></b><i> oro</i><br>\n<br>\n<i>La glavo estas</i> <b><i>el</i></b><i> ligno.</i><br>\n<br>\n<i>Mi faros atleton</i> <b><i>el</i></b><i> vi.</i><br>\n<br>\n<b><i>El</i></b><i> la raŭpo fariĝis bela papilio.</i><br>\n<br>\n<i>Oni elektis lin</i> <b><i>el</i></b><i> inter 500 kandidatoj.</i><br>\n<br>\n<i>La infano falis</i> <b><i>el</i></b><i> la lito.</i><br>\n<br>\nTrovu ekzemplojn en CorpusEye, kaj difinojn en PIV (butonoj apud la korektopropono)!",
		""
	],
	"£:per&\"<kun>\"": [
		"£:per&\"<kun>\"",
		"Malĝusta prepozicio: kun → per",
		"La prepozicio <i>‘kun’</i> signifas ‘kune kun’ (persono) au ‘havanta’ (econ/aĵon), dum <i>‘per’</i> signifas ‘uze de’. Kiam temas pri ilo, kiu estas uzita por iu celo, prefere uzu <i>‘per’.</i>",
		"Li tranĉis la panon <span style=\"color: #ff0000\">kun</span> (per) malnova poŝtranĉilo.<br>\n<br>\n<i>Li iris antaŭen, hezite,</i> <span style=\"color: #ff0000\"><i>kun</i></span><i> (per) mallongaj, malrapidaj paŝoj.</i><br>\n<br>\n<i>Kelkaj fanatikuloj eĉ proponis anstataŭigi la oficialan lingvon de la lando</i> <span style=\"color: #ff0000\"><i>kun</i></span><i> (per) Esperanto.</i>"
	],
	"£:en&\"<po>\"": [
		"£:en&\"<po>\"",
		"Malĝusta prepozicio: po",
		"Por multaj, la slav-devena vorteto <i>‘po’</i> estas unu el la plej malfacilaj en Esperanto. <i>‘Po x’</i> signifas ‘tiel, ke ĉiu havu/kostu x’ (angle: <i>apiece,</i> germane: <i>je,</i> slavaj lingvoj: <i>po</i>). Esence ĝi estas distribua prepozicio, kiu distribuas nombreblan aŭ divideblan kvanton (verda en la ekzemploj) inter \"membroj\" de iu aro aŭ listo (blua).<br>\n<br>\n<i>La</i> <span style=\"color: #0000ff\"><b><i>infanoj</i></b></span><i> manĝis po</i> <span style=\"color: #008000\"><b><i>4</i></b></span><i> keksoj = la infanoj manĝis keksojn, po kvar → ĉiu el ili ricevis 4 keksojn</i><br>\n<br>\n<span style=\"color: #0000ff\"><b><i>Ĉies</i></b></span><i> profito estu po</i> <span style=\"color: #008000\"><b><i>kvarono</i></b></span><i> de la tuto</i><br>\n<br>\n<i>Ŝi mendis du</i> <span style=\"color: #0000ff\"><b><i>boatekskursojn</i></b></span><i> po</i> <span style=\"color: #008000\"><b><i>20</i></b></span><i> dolaroj por horo.</i><br>\n<br>\nSe ne ekzistas aro, listo aŭ plurala vorto maldekstre de <i>‘po’</i> kaj nombro aŭ kvanto dekstre de ĝi, verŝajne temas pri eraro. Plej ofte temas pri x/y-eraro, kie oni uzis <i>‘po’</i> por signifi la dividostrekon ‘/’ (angle: <i>per,</i> germane: <i>pro),</i> ekz. <i>km/h</i>:<br>\n<br>\n<i>La maksimuma rapideco sur aŭtoŝoseo estas 130 kilometroj</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (en) horo.</i><br>\n<br>\n<i>Kelkaj malnovaj aŭtoj foruzis 1 litron da benzino</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (je) kilometro.</i><br>\n<br>\n<i>La ŝtofo kostas 8 dolarojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (por) metro.</i><br>\n<br>\nLa eraro estas, ke ne estas la kilometroj, kiuj (ĉiu) havas horon, aŭ la dolaroj, kiuj (ĉiu) havas metron. Fakte male, ĉiu horo \"ricevas\" 130 kilometroj, kaj ĉiu metro kostas 8 dolarojn. Simile, en la suba ekzemplo ne estas la taskoj, kiuj ricevas studenton, sed la studentoj, kiuj ricevas taskojn:<br>\n<br>\n<i>Mi donis du taskojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (al ĉiu) studento.</i><br>\n<br>\nEn moderna Esperanto, multaj ne-slavoj uzas la vorton kiel adverbon (kvazaŭ <i>‘poe’,</i> angle: <i>each,</i> germane <i>jeweils</i>), kaj en tiu kazo eblas uzi akuzativon post <i>‘po’,</i> ĉar kun adverba interpreto ne estas <i>‘po’,</i> kiu regas la akuzativan substantivon, sed la verbo:<br>\n<br>\n<i>La infanoj manĝis po 4 keksojn = la infanoj po manĝis 4 keksojn = la infanoj manĝis 4 keksojn po.</i><br>\n<br>\nLa avantaĝo de la adverba interpreto de <i>‘po’</i> estas, ke oni aŭtomate nur uzas ĝin en frazoj kie ĝi povas rilatas al la verbo, kaj ne por ligi du substantivojn, evitante la <i>km/h-</i>kazon, ĉar la natura loko de la adverbo estas apud la verbo, kaj ne inter substantivoj. Oni do tute nature serĉas taŭgan prepozicion (alian ol <i>‘po’</i>!) por la tri frazoj supre kun ‘<i>kilometroj ? horo’, ‘benzino ? kilometro’</i> kaj<i> ‘dolaroj ? metro’</i>.",
		""
	],
	"£:je&\"<po>\"": [
		"£:je&\"<po>\"",
		"Malĝusta prepozicio: po",
		"Por multaj, la slav-devena vorteto <i>‘po’</i> estas unu el la plej malfacilaj en Esperanto. <i>‘Po x’</i> signifas ‘tiel, ke ĉiu havu/kostu x’ (angle: <i>apiece,</i> germane: <i>je,</i> slavaj lingvoj: <i>po</i>). Esence ĝi estas distribua prepozicio, kiu distribuas nombreblan aŭ divideblan kvanton (verda en la ekzemploj) inter \"membroj\" de iu aro aŭ listo (blua).<br>\n<br>\n<i>La</i> <span style=\"color: #0000ff\"><b><i>infanoj</i></b></span><i> manĝis po</i> <span style=\"color: #008000\"><b><i>4</i></b></span><i> keksoj = la infanoj manĝis keksojn, po kvar → ĉiu el ili ricevis 4 keksojn</i><br>\n<br>\n<span style=\"color: #0000ff\"><b><i>Ĉies</i></b></span><i> profito estu po</i> <span style=\"color: #008000\"><b><i>kvarono</i></b></span><i> de la tuto</i><br>\n<br>\n<i>Ŝi mendis du</i> <span style=\"color: #0000ff\"><b><i>boatekskursojn</i></b></span><i> po</i> <span style=\"color: #008000\"><b><i>20</i></b></span><i> dolaroj por horo.</i><br>\n<br>\nSe ne ekzistas aro, listo aŭ plurala vorto maldekstre de <i>‘po’</i> kaj nombro aŭ kvanto dekstre de ĝi, verŝajne temas pri eraro. Plej ofte temas pri x/y-eraro, kie oni uzis <i>‘po’</i> por signifi la dividostrekon ‘/’ (angle: <i>per,</i> germane: <i>pro),</i> ekz. <i>km/h</i>:<br>\n<br>\n<i>La maksimuma rapideco sur aŭtoŝoseo estas 130 kilometroj</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (en) horo.</i><br>\n<br>\n<i>Kelkaj malnovaj aŭtoj foruzis 1 litron da benzino</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (je) kilometro.</i><br>\n<br>\n<i>La ŝtofo kostas 8 dolarojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (por) metro.</i><br>\n<br>\nLa eraro estas, ke ne estas la kilometroj, kiuj (ĉiu) havas horon, aŭ la dolaroj, kiuj (ĉiu) havas metron. Fakte male, ĉiu horo \"ricevas\" 130 kilometroj, kaj ĉiu metro kostas 8 dolarojn. Simile, en la suba ekzemplo ne estas la taskoj, kiuj ricevas studenton, sed la studentoj, kiuj ricevas taskojn:<br>\n<br>\n<i>Mi donis du taskojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (al ĉiu) studento.</i><br>\n<br>\nEn moderna Esperanto, multaj ne-slavoj uzas la vorton kiel adverbon (kvazaŭ <i>‘poe’,</i> angle: <i>each,</i> germane <i>jeweils</i>), kaj en tiu kazo eblas uzi akuzativon post <i>‘po’,</i> ĉar kun adverba interpreto ne estas <i>‘po’,</i> kiu regas la akuzativan substantivon, sed la verbo:<br>\n<br>\n<i>La infanoj manĝis po 4 keksojn = la infanoj po manĝis 4 keksojn = la infanoj manĝis 4 keksojn po.</i><br>\n<br>\nLa avantaĝo de la adverba interpreto de <i>‘po’</i> estas, ke oni aŭtomate nur uzas ĝin en frazoj kie ĝi povas rilatas al la verbo, kaj ne por ligi du substantivojn, evitante la <i>km/h-</i>kazon, ĉar la natura loko de la adverbo estas apud la verbo, kaj ne inter substantivoj. Oni do tute nature serĉas taŭgan prepozicion (alian ol <i>‘po’</i>!) por la tri frazoj supre kun ‘<i>kilometroj ? horo’, ‘benzino ? kilometro’</i> kaj<i> ‘dolaroj ? metro’</i>.",
		""
	],
	"£:por=cxiu&\"<po>\"": [
		"£:por=cxiu&\"<po>\"",
		"Malĝusta prepozicio: po",
		"Por multaj, la slav-devena vorteto <i>‘po’</i> estas unu el la plej malfacilaj en Esperanto. <i>‘Po x’</i> signifas ‘tiel, ke ĉiu havu/kostu x’ (angle: <i>apiece,</i> germane: <i>je,</i> slavaj lingvoj: <i>po</i>). Esence ĝi estas distribua prepozicio, kiu distribuas nombreblan aŭ divideblan kvanton (verda en la ekzemploj) inter \"membroj\" de iu aro aŭ listo (blua).<br>\n<br>\n<i>La</i> <span style=\"color: #0000ff\"><b><i>infanoj</i></b></span><i> manĝis po</i> <span style=\"color: #008000\"><b><i>4</i></b></span><i> keksoj = la infanoj manĝis keksojn, po kvar → ĉiu el ili ricevis 4 keksojn</i><br>\n<br>\n<span style=\"color: #0000ff\"><b><i>Ĉies</i></b></span><i> profito estu po</i> <span style=\"color: #008000\"><b><i>kvarono</i></b></span><i> de la tuto</i><br>\n<br>\n<i>Ŝi mendis du</i> <span style=\"color: #0000ff\"><b><i>boatekskursojn</i></b></span><i> po</i> <span style=\"color: #008000\"><b><i>20</i></b></span><i> dolaroj por horo.</i><br>\n<br>\nSe ne ekzistas aro, listo aŭ plurala vorto maldekstre de <i>‘po’</i> kaj nombro aŭ kvanto dekstre de ĝi, verŝajne temas pri eraro. Plej ofte temas pri x/y-eraro, kie oni uzis <i>‘po’</i> por signifi la dividostrekon ‘/’ (angle: <i>per,</i> germane: <i>pro),</i> ekz. <i>km/h</i>:<br>\n<br>\n<i>La maksimuma rapideco sur aŭtoŝoseo estas 130 kilometroj</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (en) horo.</i><br>\n<br>\n<i>Kelkaj malnovaj aŭtoj foruzis 1 litron da benzino</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (je) kilometro.</i><br>\n<br>\n<i>La ŝtofo kostas 8 dolarojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (por) metro.</i><br>\n<br>\nLa eraro estas, ke ne estas la kilometroj, kiuj (ĉiu) havas horon, aŭ la dolaroj, kiuj (ĉiu) havas metron. Fakte male, ĉiu horo \"ricevas\" 130 kilometroj, kaj ĉiu metro kostas 8 dolarojn. Simile, en la suba ekzemplo ne estas la taskoj, kiuj ricevas studenton, sed la studentoj, kiuj ricevas taskojn:<br>\n<br>\n<i>Mi donis du taskojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (al ĉiu) studento.</i><br>\n<br>\nEn moderna Esperanto, multaj ne-slavoj uzas la vorton kiel adverbon (kvazaŭ <i>‘poe’,</i> angle: <i>each,</i> germane <i>jeweils</i>), kaj en tiu kazo eblas uzi akuzativon post <i>‘po’,</i> ĉar kun adverba interpreto ne estas <i>‘po’,</i> kiu regas la akuzativan substantivon, sed la verbo:<br>\n<br>\n<i>La infanoj manĝis po 4 keksojn = la infanoj po manĝis 4 keksojn = la infanoj manĝis 4 keksojn po.</i><br>\n<br>\nLa avantaĝo de la adverba interpreto de <i>‘po’</i> estas, ke oni aŭtomate nur uzas ĝin en frazoj kie ĝi povas rilatas al la verbo, kaj ne por ligi du substantivojn, evitante la <i>km/h-</i>kazon, ĉar la natura loko de la adverbo estas apud la verbo, kaj ne inter substantivoj. Oni do tute nature serĉas taŭgan prepozicion (alian ol <i>‘po’</i>!) por la tri frazoj supre kun ‘<i>kilometroj ? horo’, ‘benzino ? kilometro’</i> kaj<i> ‘dolaroj ? metro’</i>.",
		""
	],
	"£:por&\"<po>\"": [
		"£:por&\"<po>\"",
		"Malĝusta prepozicio: po",
		"Por multaj, la slav-devena vorteto <i>‘po’</i> estas unu el la plej malfacilaj en Esperanto. <i>‘Po x’</i> signifas ‘tiel, ke ĉiu havu/kostu x’ (angle: <i>apiece,</i> germane: <i>je,</i> slavaj lingvoj: <i>po</i>). Esence ĝi estas distribua prepozicio, kiu distribuas nombreblan aŭ divideblan kvanton (verda en la ekzemploj) inter \"membroj\" de iu aro aŭ listo (blua).<br>\n<br>\n<i>La</i> <span style=\"color: #0000ff\"><b><i>infanoj</i></b></span><i> manĝis po</i> <span style=\"color: #008000\"><b><i>4</i></b></span><i> keksoj = la infanoj manĝis keksojn, po kvar → ĉiu el ili ricevis 4 keksojn</i><br>\n<br>\n<span style=\"color: #0000ff\"><b><i>Ĉies</i></b></span><i> profito estu po</i> <span style=\"color: #008000\"><b><i>kvarono</i></b></span><i> de la tuto</i><br>\n<br>\n<i>Ŝi mendis du</i> <span style=\"color: #0000ff\"><b><i>boatekskursojn</i></b></span><i> po</i> <span style=\"color: #008000\"><b><i>20</i></b></span><i> dolaroj por horo.</i><br>\n<br>\nSe ne ekzistas aro, listo aŭ plurala vorto maldekstre de <i>‘po’</i> kaj nombro aŭ kvanto dekstre de ĝi, verŝajne temas pri eraro. Plej ofte temas pri x/y-eraro, kie oni uzis <i>‘po’</i> por signifi la dividostrekon ‘/’ (angle: <i>per,</i> germane: <i>pro),</i> ekz. <i>km/h</i>:<br>\n<br>\n<i>La maksimuma rapideco sur aŭtoŝoseo estas 130 kilometroj</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (en) horo.</i><br>\n<br>\n<i>Kelkaj malnovaj aŭtoj foruzis 1 litron da benzino</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (je) kilometro.</i><br>\n<br>\n<i>La ŝtofo kostas 8 dolarojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (por) metro.</i><br>\n<br>\nLa eraro estas, ke ne estas la kilometroj, kiuj (ĉiu) havas horon, aŭ la dolaroj, kiuj (ĉiu) havas metron. Fakte male, ĉiu horo \"ricevas\" 130 kilometroj, kaj ĉiu metro kostas 8 dolarojn. Simile, en la suba ekzemplo ne estas la taskoj, kiuj ricevas studenton, sed la studentoj, kiuj ricevas taskojn:<br>\n<br>\n<i>Mi donis du taskojn</i> <span style=\"color: #ff0000\"><i>po</i></span><i> (al ĉiu) studento.</i><br>\n<br>\nEn moderna Esperanto, multaj ne-slavoj uzas la vorton kiel adverbon (kvazaŭ <i>‘poe’,</i> angle: <i>each,</i> germane <i>jeweils</i>), kaj en tiu kazo eblas uzi akuzativon post <i>‘po’,</i> ĉar kun adverba interpreto ne estas <i>‘po’,</i> kiu regas la akuzativan substantivon, sed la verbo:<br>\n<br>\n<i>La infanoj manĝis po 4 keksojn = la infanoj po manĝis 4 keksojn = la infanoj manĝis 4 keksojn po.</i><br>\n<br>\nLa avantaĝo de la adverba interpreto de <i>‘po’</i> estas, ke oni aŭtomate nur uzas ĝin en frazoj kie ĝi povas rilatas al la verbo, kaj ne por ligi du substantivojn, evitante la <i>km/h-</i>kazon, ĉar la natura loko de la adverbo estas apud la verbo, kaj ne inter substantivoj. Oni do tute nature serĉas taŭgan prepozicion (alian ol <i>‘po’</i>!) por la tri frazoj supre kun ‘<i>kilometroj ? horo’, ‘benzino ? kilometro’</i> kaj<i> ‘dolaroj ? metro’</i>.",
		""
	],
	"£:dum&\"<por>\"": [
		"£:dum&\"<por>\"",
		"Malĝusta prepozicio: por → dum",
		"Kiel tempa prepozicio, <i>‘por’</i> signifas estontan, celitan tempodaŭron (rezulta/perfektiva aspekto):<br>\n<br>\n– <i>Li sidiĝis por momento</i><br>\n<br>\n<i>– Li forvojaĝis por 2 semajnoj</i><br>\n<br>\n<i>– provizoj por 3 tagoj</i><br>\n<br>\nUzu <i>‘dum’</i> por tempodaŭro ĝenerale (ne-perfektiva aspekto).<br>\n<br>\n– <i>Li ne manĝis dum 3 tagoj</i><br>\n<br>\n<i>– Li dormis dum 8 horoj</i><br>\n<br>\nAtentu pri la angla <i>‘for’</i> kiu kovras ambaŭ signifojn. La germana uzas <i>‘für’</i> por la unua signifo, kaj <i>‘… lang’</i> por la dua. La dana uzas <i>‘for’</i> por la unua signifo, kaj <i>‘i’</i> por la dua.",
		"Li estis hejme <span style=\"color: #ff0000\">por</span> [dum] kelkaj horoj<br>\n<br>\nLi jam konas ŝin <span style=\"color: #ff0000\">por</span> [dum] multaj jaroj"
	],
	"£:la&\"sia\"": [
		"£:la&\"sia\"",
		"Malĝusta refleksivo: sia → la",
		"La refleksivo verŝajne estas erara ĉi tie, sed Lingvohelpilo ne povas esti certa, per kiu pronomo anstataŭigi ĝin, tial proponante simplan <i>‘la’.</i> Pripensu propran korekton.",
		""
	],
	"£:BASE-alveni": [
		"£:BASE-alveni",
		"Malĝusta sintakso: atingi → alveni",
		"'Atingi’ prenas rektan, akuzativan objekton. Kun lokaj prepozicioj, uzu <i>‘alveni’:</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>atingi</i></span><i> (alveni) en Parizo</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>atingi</i></span><i> (alveni) sur la montopinto</i>",
		""
	],
	"£:hejme&\"<hejmo>\"": [
		"£:hejme&\"<hejmo>\"",
		"Malĝusta sintakso: en/al hejmo → hejme(n)",
		"Anstataŭ <i>‘en hejmo’</i> aŭ <i>‘al hejmo’,</i> uzu la adverbojn <i>‘hejme’</i> aŭ <i>‘hejmen’.</i> Alternative vi povas almeti posedan pronomon:<br>\n<br>\n<i>Li iris</i> <span style=\"color: #ff0000\"><i>al hejmo</i></span><i>.</i><i> → Li iris hejmen. / Li iris al sia hejmo.</i>",
		""
	],
	"£:hejmen&\"<hejmo>\"": [
		"£:hejmen&\"<hejmo>\"",
		"Malĝusta sintakso: en/al hejmo → hejme(n)",
		"Anstataŭ <i>‘en hejmo’</i> aŭ <i>‘al hejmo’,</i> uzu la adverbojn <i>‘hejme’</i> aŭ <i>‘hejmen’.</i> Alternative vi povas almeti posedan pronomon:<br>\n<br>\n<i>Li iris</i> <span style=\"color: #ff0000\"><i>al hejmo</i></span><i>.</i><i> → Li iris hejmen. / Li iris al sia hejmo.</i>",
		""
	],
	"£:BASE-belajxo&\"<belecoj?n?>\"": [
		"£:BASE-belajxo&\"<belecoj?n?>\"",
		"Malĝusta sufikso: -ec → aĵ",
		"Ne konfuzu la sufiksojn -ec kaj -aĵ. La unua estas abstrakta trajto, la dua konkreta aĵo. En <i>‘la beleco de la junulino’</i> temas pri la fakto, ke ŝi estas bela, dum <i>‘la belaĵoj de la junulino’</i> celas ŝiajn korpopartoj, aŭ eble juvelojn.",
		""
	],
	"£:BASE-tiraneco&\"<tiranismoj?n?>\"": [
		"£:BASE-tiraneco&\"<tiranismoj?n?>\"",
		"Malĝusta sufikso: tiranismo → tiraneco",
		"Verŝajne vi celas <i>‘tiraneco’,</i> do econ de persono aŭ sistemo. 'Tiranismo’ estus ideologio. La aktuala PIV nur proponas <i>‘tiraneco’,</i> kaj ne plu havas la arkaikan <i>‘tiranismo’,</i> kaj ReVo eĉ difinas <i>‘tiraneco’</i> kiel ‘politika sistemo’, kio ja estas pli \"isma\" ol \"trajto de persono\". Lingvohelpilo rekomendas, ke vi nepre uzu <i>‘tiraneco’</i>, kie temas pri persono <i>(lia tiraneco)</i>, kaj pripensu vian preferon, kie temas pri la abstrakta sistemo aŭ agado kun tiranaj trajtoj <i>(ribeli kontraŭ tiranismo/tiraneco kaj subpremo)</i>.",
		"La popolo ne plu eltenis lian <span style=\"color: #ff0000\">tiranismon</span> (tiranecon)."
	],
	"£:BASE-variajxo&\"<variecoj?n>\"": [
		"£:BASE-variajxo&\"<variecoj?n>\"",
		"Malĝusta sufikso: varieco → variaĵo",
		"'Varieco’ estas la eco de esti varia – varia aĵa aŭ afero en la senco de ‘alia sed simila’ estas <i>‘variaĵo’</i> (de ekz. floro, trinkaĵo aŭ melodio)<i>.</i> Notu, ke la angla ‘<i>variety’</i> povas signifi aŭ unu aŭ la alian.",
		""
	],
	"£:BASE-vidi&\"<rimark.*>\"": [
		"£:BASE-vidi&\"<rimark.*>\"",
		"Malĝusta valento",
		"'Rimarki’ (angle: notice) estas transitiva verbo, sed ĝi ne permesas aldonan infinitivon, kiel <i>vidi, aŭdi, senti.</i><br>\n<br>\nNotu, ke <i>‘rimarki’</i> ankaŭ povas signifi ‘(atentige) diri’ (angle: <i>remark).</i> Ne temas pri falsa amiko.",
		"Mi <span style=\"color: #ff0000\">rimarkis</span> (vidis) lin preni plian glason de ŝaŭmvino."
	],
	"£:BASE-auxdi&\"<auxskult.*>\"": [
		"£:BASE-auxdi&\"<auxskult.*>\"",
		"Malĝusta valento: aŭskulti → aŭdi",
		"La diferenco inter <i>‘aŭdi’</i> kaj <i>‘aŭskulti’</i> estas, ke la dua estas atenta kaj direkta, dum la unua estas neplanita. Ambaŭ estas transitivaj, sed <i>‘aŭskulti’</i> ne permesas aldonan infinitivon, kiel <i>vidi, aŭdi, senti.</i>",
		"Mi <span style=\"color: #ff0000\">aŭskultis</span> (aŭdis) lin parki la aŭton"
	],
	"£:BASE-malhelpi": [
		"£:BASE-malhelpi",
		"Malĝusta vortelekto / sintakso: preventi → malhelpi",
		"Oni preventas agon aŭ okazaĵon, sed male al la angla (<i>prevent</i> <i>sb. from -ing</i>) ne eblas uzi tiun verbon kun akuzativo+nefinita verbo (latine: ACI-sintakso), kie persono en akuzativo estas la logika subjekto de la nefinita verbo.<br>\n<br>\n<i>Nur gardu la hejmon de la mastro kaj</i> <span style=\"color: #ff0000\"><i>preventu</i></span><i> (malhelpu)</i> <span style=\"color: #0000ff\"><i>sxtelistojn eniri</i></span><i> nokte</i><br>\n<br>\nUzi <i>malhelpi</i> ebligas reteni la akuzativon kaj infinitivon, sed oni perdas la aspekton de preventa antaŭago (<i>malhelpi</i> povus esti samtempe). Do pli eleganta solvo – sed tro komplika por aŭtomata Lingvohelpilo-propono – estus ke-objekto:<br>\n<br>\n<i>… preventu,</i> <b><i>ke</i></b><i> ŝtelistoj enir</i><b><i>u</i></b><i> nokte</i>",
		""
	],
	"£:BASE-surveturi": [
		"£:BASE-surveturi",
		"Malĝusta vortelekto: alveturi → surveturi",
		"Oni <i>alveturas</i> lokon (vojaĝo), sed <i>surveturas</i> homon aŭ beston en aŭtoakcidento.",
		""
	],
	"£:BASE-certigi&\"<asert.*>\"": [
		"£:BASE-certigi&\"<asert.*>\"",
		"Malĝusta vortelekto: aserti → certigi",
		"La verbo <i>‘aserti’</i> bezonas homan subjekton – fakto aŭ evento ne <span style=\"color: #ff0000\"><i>asertas</i></span><i>,</i> sed <i>certigas.</i>",
		"La nova haveno <span style=\"color: #ff0000\">asertis</span> (certigis) gastadon de eĉ pli grandaj krozŝipoj."
	],
	"£:BASE-sukcesi": [
		"£:BASE-sukcesi",
		"Malĝusta vortelekto: atingi → sukcesi",
		"La vorto <i>‘atingi’</i> (angle: <i>reach</i>) taŭgas kaj en konkreta (loka) kaj en abstrakta kunteksto: <i>atingi urbon, atingi rezultaton.</i> Sed male al kelkaj naciaj lingvoj (germane: <i>erreichen,</i> dane: <i>nå</i>), Esperanto uzas alian vorton, <i>‘sukcesi’,</i> se la atingita afero estas infinitivo:<br>\n<br>\nMalfeliĉo kredeble <span style=\"color: #ff0000\">atingis</span> mian <span style=\"color: #0000ff\">fraton</span> sed eble mi <span style=\"color: #ff0000\">sukcesos</span> ankoraŭ lin <span style=\"color: #0000ff\">savi</span> .<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		""
	],
	"£:BASE-farti": [
		"£:BASE-farti",
		"Malĝusta vortelekto: esti → farti",
		"Oni ne diras <i>‘kiel vi estas?’</i> (angle: <i>how are you?</i>), sed <i>‘kiel vi fartas?’</i> Ankaŭ en la respondo, oni <i>fartas (pli) bone,</i> k.s.",
		""
	],
	"£:BASE-igi&\"<farig.*>\"": [
		"£:BASE-igi&\"<farig.*>\"",
		"Malĝusta vortelekto: farigi → igi",
		"'Farigi’ signifas igi iun alian fari ion, ekz. <i>‘farigi al si novan veston’.</i> Sed ne uzu la vorton en la senco ‘igi ion/iun x-a/o’, ekz. <i>‘igi lin milionulo’.</i>",
		"La entrepreno <span style=\"color: #c9211e\">farigis</span> (igis) lin riĉa"
	],
	"£:BASE-preni&\"<hazard.*>\"": [
		"£:BASE-preni&\"<hazard.*>\"",
		"Malĝusta vortelekto: hazardi → riski",
		"Oni ne <i>hazardas,</i> sed <i>riskas</i> vivon, konjekton aŭ vojaĝon. Kaj riskon oni ne <i>hazardas,</i> sed <i>prenas.</i> Krome <i>‘hazardi’</i> estas netransitiva, kun la signifo ‘okazi hazarde’. Eĉ kun transitiviga <i>-ig,</i> oni ne <i>hazardigas</i> sian vivon, sed sciencan studon, eksperimenton aŭ la ordon en listo.",
		"Li <span style=\"color: #ff0000\">hazardis</span> (prenis) grandan riskon.<br>\n<br>\nMi <span style=\"color: #ff0000\">hazardis</span> (riskis) konjekton pri la identeco de la murdinto."
	],
	"£:BASE-herbejo&\"<herbon?>\"": [
		"£:BASE-herbejo&\"<herbon?>\"",
		"Malĝusta vortelekto: herbo → herbejo",
		"Necesas distingi inter la planto-vorto ‘<i>herbo’</i> kaj la loko-vorto <i>‘herbejo’.</i> Ne eblas sidi aŭ kuŝiĝi en herbo.",
		"La infanoj ludis sur la <span style=\"color: #ff0000\">herbo</span> (herbejo)."
	],
	"£:BASE-humiligi&\"<humig.*>\"": [
		"£:BASE-humiligi&\"<humig.*>\"",
		"Malĝusta vortelekto: humigi → humiligi",
		"<i>'Humo’</i> estas fekunda, nigrebruna tero, kaj <i>‘humigi’</i> do devus signifi ŝanĝi teron al tiu stato. Sed tre verŝajne vi ĉi-tie celas <i>‘humiligi’</i> (‘igi iun humila’, angle: <i>humble</i>)",
		""
	],
	"£:BASE-inkludita&\"<inklude>\"": [
		"£:BASE-inkludita&\"<inklude>\"",
		"Malĝusta vortelekto: inklude → inkludita/inkluzive/interalie",
		"La vorto <i>‘inkludi’</i> ne aperas en PIV, sed jes en ReVo, kaj akcepteblas kiel internaciismo, kovranta la signifojn de kaj <i>‘inkluzivi’</i> (aro: enhavi ion) kaj <i>‘inkluzivigi’</i> (persono: enhavigi ion en aron).<br>\n<br>\nTamen evitu uzi ĝin kiel adverbon (<i>‘inklude’),</i> en la senco de <i>‘interalie’</i> aŭ anstataŭ la adverbo <i>‘inkluzive’</i> (kun akuzativo aŭ ‘de’-komplemento).<br>\n<br>\n<i>Estis konstruitaj diversaj militaj fortikaĵoj,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (interalie) en West Point.</i><br>\n<br>\n<i>La centro-maldekstraj partioj ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) de Sinn Féin , siaflanke ne disponis pri suficxe da elektitoj por teni la regadon de la lando .</i><br>\n<br>\n<i>Suzanne kaj instruis kaj prizorgis la kursanojn ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) la manĝigon .</i><br>\n<br>\nAnkaŭ ne eblas uzi <i>‘inklude’</i> kiel predikativan komplenton de <i>‘esti’ –</i> uzu participon anstataŭ:<br>\n<br>\n<i>Ankaŭ</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluditaj) en kelkaj ŝafaj dietoj estas mineraloj , cxu el miksaĵo aŭ el salŝtono .</i>",
		""
	],
	"£:BASE-interalie&\"<inklude>\"": [
		"£:BASE-interalie&\"<inklude>\"",
		"Malĝusta vortelekto: inklude → inkludita/inkluzive/interalie",
		"La vorto <i>‘inkludi’</i> ne aperas en PIV, sed jes en ReVo, kaj akcepteblas kiel internaciismo, kovranta la signifojn de kaj <i>‘inkluzivi’</i> (aro: enhavi ion) kaj <i>‘inkluzivigi’</i> (persono: enhavigi ion en aron).<br>\n<br>\nTamen evitu uzi ĝin kiel adverbon (<i>‘inklude’),</i> en la senco de <i>‘interalie’</i> aŭ anstataŭ la adverbo <i>‘inkluzive’</i> (kun akuzativo aŭ ‘de’-komplemento).<br>\n<br>\n<i>Estis konstruitaj diversaj militaj fortikaĵoj,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (interalie) en West Point.</i><br>\n<br>\n<i>La centro-maldekstraj partioj ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) de Sinn Féin , siaflanke ne disponis pri suficxe da elektitoj por teni la regadon de la lando .</i><br>\n<br>\n<i>Suzanne kaj instruis kaj prizorgis la kursanojn ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) la manĝigon .</i><br>\n<br>\nAnkaŭ ne eblas uzi <i>‘inklude’</i> kiel predikativan komplenton de <i>‘esti’ –</i> uzu participon anstataŭ:<br>\n<br>\n<i>Ankaŭ</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluditaj) en kelkaj ŝafaj dietoj estas mineraloj , cxu el miksaĵo aŭ el salŝtono .</i>",
		""
	],
	"£:BASE-inkluzive&\"<inklude>\"": [
		"£:BASE-inkluzive&\"<inklude>\"",
		"Malĝusta vortelekto: inklude → inkludita/inkluzive/interalie",
		"La vorto <i>‘inkludi’</i> ne aperas en PIV, sed jes en ReVo, kaj akcepteblas kiel internaciismo, kovranta la signifojn de kaj <i>‘inkluzivi’</i> (aro: enhavi ion) kaj <i>‘inkluzivigi’</i> (persono: enhavigi ion en aron).<br>\n<br>\nTamen evitu uzi ĝin kiel adverbon (<i>‘inklude’),</i> en la senco de <i>‘interalie’</i> aŭ anstataŭ la adverbo <i>‘inkluzive’</i> (kun akuzativo aŭ ‘de’-komplemento).<br>\n<br>\n<i>Estis konstruitaj diversaj militaj fortikaĵoj,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (interalie) en West Point.</i><br>\n<br>\n<i>La centro-maldekstraj partioj ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) de Sinn Féin , siaflanke ne disponis pri suficxe da elektitoj por teni la regadon de la lando .</i><br>\n<br>\n<i>Suzanne kaj instruis kaj prizorgis la kursanojn ,</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluzive) la manĝigon .</i><br>\n<br>\nAnkaŭ ne eblas uzi <i>‘inklude’</i> kiel predikativan komplenton de <i>‘esti’ –</i> uzu participon anstataŭ:<br>\n<br>\n<i>Ankaŭ</i> <span style=\"color: #ff0000\"><i>inklude</i></span><i> (inkluditaj) en kelkaj ŝafaj dietoj estas mineraloj , cxu el miksaĵo aŭ el salŝtono .</i>",
		""
	],
	"£:BASE-kunsendajxo": [
		"£:BASE-kunsendajxo",
		"Malĝusta vortelekto: kunsendaĵo",
		"Ekzistas diversaj sinonimoj por retpoŝta kunsendaĵo – <i>‘ĉemetaĵo’, ‘alfiksaĵo’, ‘kunmetaĵo’.</i> Tamen, <i>‘kunsendaĵo’</i> estas la plej normala/ofta. Nepre ne uzu la afikson <i>-ado</i> anstataŭ <i>-aĵo,</i> ekz. <i>‘alfiksado’ –</i> tio signifus la agon de kunsendado, ne la ĉemtetitan dokumenton.",
		"Ĉu vi ricevis mian <span style=\"color: #ff0000\">alfiksadon</span> (alfiksaĵon/kunsendaĵon)"
	],
	"£:BASE-malagnoski": [
		"£:BASE-malagnoski",
		"Malĝusta vortelekto: misrekoni → malagnoski",
		"Oni povas <i>‘misrekoni’</i> personon aŭ objekton, erarante pri ties identeco. Sed ne uzu tiun verbon kun la senco <i>‘malagnoski’</i> (ekz. agon).<i></i> Notu, ke – kvankam <i>‘rekoni’</i> havas la sencon de <i>‘agnoski’</i> – ne eblas uzi la prefikson <i>‘mis-’</i> kombine kun tiu senco, ĉar agnosko estas \"aŭ jes aŭ ne\". Ne temas pri malĝusta aŭ konfuzita speco de agnosko.",
		"La partio longe <span style=\"color: #ff0000\">misrekonis</span> (malagnoskis) lian kontribuon."
	],
	"£:BASE-kutime": [
		"£:BASE-kutime",
		"Malĝusta Vortelekto: ordinare → kutime",
		"La radiko ‘<i>ordinare</i>’ plej ofte havas la signifon <i>‘ne aparte’, ‘malstrange’,</i> dum ‘<i>kutime</i>’ signifas<i> ‘plej ofte’</i>. Temas pri nuanca diferenco, kaj vi povas elekti la ĝustan por via celo.",
		"Li <span style=\"color: #ff0000\">ordinare</span> [kutime] ne manĝas fiŝon."
	],
	"£:BASE-emeritigxi&\"<pensiigx.*>\"": [
		"£:BASE-emeritigxi&\"<pensiigx.*>\"",
		"Malĝusta vortelekto: pensiiĝi → emeritiĝi, pensiito → emeritulo",
		"La verbo <i>‘pensii’</i> signifas ‘pagi pension al (iu)’, do <i>‘pensiiĝi’</i> signifas ‘ricevi pension’. Se oni celas ‘<b>ek</b>ricevi pension’, oni prefere diru <i>‘emeritiĝi’</i> aŭ <i>‘pensiuliĝi’.</i><br>\n<br>\nAnkaŭ la uzo de <i>‘pensiita’</i> kaj <i>‘pensiito’</i> kun la senco de <i>‘emerita’</i> kaj <i>‘emeritulo/pensiulo’</i> estas problema. Se entute, devus esti <i>‘pensi</i><b><i>a</i></b><i>ta’</i> kaj <i>‘pensi</i><b><i>a</i></b><i>to’,</i> ĉar temas pri daŭra nuntempa ricevo de pensio (-ata), ne iama (nun finita) pagado (-ita).<br>\n<br>\nLa baza eraro en ĉiuj tri supraj kazoj estas pensi, ke <i>‘pensii’</i> signifas ‘pensiuligi/emeritigi’ anstataŭ la vera ‘pagi pension al’. La eraro estas tamen tiom ofta, ke eblas simple argumenti, ke la Esperanto-komunumo donis al la vorto <i>‘pensii’</i> plian, novan senson (‘emeritigi’). Lingvohelpilo proponas fari ŝanĝon ĉi tie, sed decidu vi!",
		"Ĉi-jare <span style=\"color: #ff0000\">pensiiĝos</span> (emeritiĝoj) triono de la instruistoj en nia lernejo.<br>\n<br>\n<i>Lia patro estis</i> <span style=\"color: #ff0000\"><i>pensiita</i></span><i> (emerita) leŭtenanto de la rusa armeo.</i>"
	],
	"£:BASE-emerita&\"<pensiitaj?n?>\"": [
		"£:BASE-emerita&\"<pensiitaj?n?>\"",
		"Malĝusta vortelekto: pensiiĝi → emeritiĝi, pensiito → emeritulo",
		"La verbo <i>‘pensii’</i> signifas ‘pagi pension al (iu)’, do <i>‘pensiiĝi’</i> signifas ‘ricevi pension’. Se oni celas ‘<b>ek</b>ricevi pension’, oni prefere diru <i>‘emeritiĝi’</i> aŭ <i>‘pensiuliĝi’.</i><br>\n<br>\nAnkaŭ la uzo de <i>‘pensiita’</i> kaj <i>‘pensiito’</i> kun la senco de <i>‘emerita’</i> kaj <i>‘emeritulo/pensiulo’</i> estas problema. Se entute, devus esti <i>‘pensi</i><b><i>a</i></b><i>ta’</i> kaj <i>‘pensi</i><b><i>a</i></b><i>to’,</i> ĉar temas pri daŭra nuntempa ricevo de pensio (-ata), ne iama (nun finita) pagado (-ita).<br>\n<br>\nLa baza eraro en ĉiuj tri supraj kazoj estas pensi, ke <i>‘pensii’</i> signifas ‘pensiuligi/emeritigi’ anstataŭ la vera ‘pagi pension al’. La eraro estas tamen tiom ofta, ke eblas simple argumenti, ke la Esperanto-komunumo donis al la vorto <i>‘pensii’</i> plian, novan senson (‘emeritigi’). Lingvohelpilo proponas fari ŝanĝon ĉi tie, sed decidu vi!",
		"Ĉi-jare <span style=\"color: #ff0000\">pensiiĝos</span> (emeritiĝoj) triono de la instruistoj en nia lernejo.<br>\n<br>\n<i>Lia patro estis</i> <span style=\"color: #ff0000\"><i>pensiita</i></span><i> (emerita) leŭtenanto de la rusa armeo.</i>"
	],
	"£:BASE-emeritulo&\"<pensiitoj?n?>\"": [
		"£:BASE-emeritulo&\"<pensiitoj?n?>\"",
		"Malĝusta vortelekto: pensiiĝi → emeritiĝi, pensiito → emeritulo",
		"La verbo <i>‘pensii’</i> signifas ‘pagi pension al (iu)’, do <i>‘pensiiĝi’</i> signifas ‘ricevi pension’. Se oni celas ‘<b>ek</b>ricevi pension’, oni prefere diru <i>‘emeritiĝi’</i> aŭ <i>‘pensiuliĝi’.</i><br>\n<br>\nAnkaŭ la uzo de <i>‘pensiita’</i> kaj <i>‘pensiito’</i> kun la senco de <i>‘emerita’</i> kaj <i>‘emeritulo/pensiulo’</i> estas problema. Se entute, devus esti <i>‘pensi</i><b><i>a</i></b><i>ta’</i> kaj <i>‘pensi</i><b><i>a</i></b><i>to’,</i> ĉar temas pri daŭra nuntempa ricevo de pensio (-ata), ne iama (nun finita) pagado (-ita).<br>\n<br>\nLa baza eraro en ĉiuj tri supraj kazoj estas pensi, ke <i>‘pensii’</i> signifas ‘pensiuligi/emeritigi’ anstataŭ la vera ‘pagi pension al’. La eraro estas tamen tiom ofta, ke eblas simple argumenti, ke la Esperanto-komunumo donis al la vorto <i>‘pensii’</i> plian, novan senson (‘emeritigi’). Lingvohelpilo proponas fari ŝanĝon ĉi tie, sed decidu vi!",
		"Ĉi-jare <span style=\"color: #ff0000\">pensiiĝos</span> (emeritiĝoj) triono de la instruistoj en nia lernejo.<br>\n<br>\n<i>Lia patro estis</i> <span style=\"color: #ff0000\"><i>pensiita</i></span><i> (emerita) leŭtenanto de la rusa armeo.</i>"
	],
	"£:BASE-emeritigi": [
		"£:BASE-emeritigi",
		"Malĝusta vortelekto: pensiiĝi → emeritiĝi, pensiito → emeritulo",
		"La verbo <i>‘pensii’</i> signifas ‘pagi pension al (iu)’, do <i>‘pensiiĝi’</i> signifas ‘ricevi pension’. Se oni celas ‘<b>ek</b>ricevi pension’, oni prefere diru <i>‘emeritiĝi’</i> aŭ <i>‘pensiuliĝi’.</i><br>\n<br>\nAnkaŭ la uzo de <i>‘pensiita’</i> kaj <i>‘pensiito’</i> kun la senco de <i>‘emerita’</i> kaj <i>‘emeritulo/pensiulo’</i> estas problema. Se entute, devus esti <i>‘pensi</i><b><i>a</i></b><i>ta’</i> kaj <i>‘pensi</i><b><i>a</i></b><i>to’,</i> ĉar temas pri daŭra nuntempa ricevo de pensio (-ata), ne iama (nun finita) pagado (-ita).<br>\n<br>\nLa baza eraro en ĉiuj tri supraj kazoj estas pensi, ke <i>‘pensii’</i> signifas ‘pensiuligi/emeritigi’ anstataŭ la vera ‘pagi pension al’. La eraro estas tamen tiom ofta, ke eblas simple argumenti, ke la Esperanto-komunumo donis al la vorto <i>‘pensii’</i> plian, novan senson (‘emeritigi’). Lingvohelpilo proponas fari ŝanĝon ĉi tie, sed decidu vi!",
		"Ĉi-jare <span style=\"color: #ff0000\">pensiiĝos</span> (emeritiĝoj) triono de la instruistoj en nia lernejo.<br>\n<br>\n<i>Lia patro estis</i> <span style=\"color: #ff0000\"><i>pensiita</i></span><i> (emerita) leŭtenanto de la rusa armeo.</i>"
	],
	"£:BASE-persono&\"<personajxoj?n?>\"": [
		"£:BASE-persono&\"<personajxoj?n?>\"",
		"Malĝusta vortelekto: personaĵo/eco → rolanto",
		"'Personaĵoj’ povas esti persondetaloj (ekz. petitaj de la polico) aŭ personaj kunportaĵoj. <i>‘Personeco’</i> estas la individua, memstara ecaro de persono (angle: personality). Sed uzi <i>‘personaĵo’</i> aŭ <i>‘personeco’</i> en la senco de ‘rolanto/rolpersono/figuro’ en libro aŭ filmo estas falsa amiko (ekz. hispan-portugala).<br>\n<br>\nAnkaŭ evitu uzi <i>‘personaĵo’</i> en la senco de ‘jura/leĝa persono’ (ekz. registrita firmao).",
		"La teatraĵo enhavis plurajn bibliajn <span style=\"color: #ff0000\">personaĵojn</span> (rolantojn)."
	],
	"£:BASE-rolanto": [
		"£:BASE-rolanto",
		"Malĝusta vortelekto: personaĵo/eco → rolanto",
		"'Personaĵoj’ povas esti persondetaloj (ekz. petitaj de la polico) aŭ personaj kunportaĵoj. <i>‘Personeco’</i> estas la individua, memstara ecaro de persono (angle: personality). Sed uzi <i>‘personaĵo’</i> aŭ <i>‘personeco’</i> en la senco de ‘rolanto/rolpersono/figuro’ en libro aŭ filmo estas falsa amiko (ekz. hispan-portugala).<br>\n<br>\nAnkaŭ evitu uzi <i>‘personaĵo’</i> en la senco de ‘jura/leĝa persono’ (ekz. registrita firmao).",
		"La teatraĵo enhavis plurajn bibliajn <span style=\"color: #ff0000\">personaĵojn</span> (rolantojn)."
	],
	"£:BASE-figuro&\"<personec.*>\"": [
		"£:BASE-figuro&\"<personec.*>\"",
		"Malĝusta vortelekto: personeco → figuro",
		"<i>'Personeco’</i> estas vorto por la baza psika ecaro de persono, la karaktero. La vorto ne uzeblas kun la senco de publika aŭ fikcia figuro, do gravulo, eminentulo, famulo aŭ rolanto en libro aŭ filmo. En la pluralo preskaŭ ĉiam temas pri eraro.",
		"La plej meritaj <span style=\"color: #c9211e\">personecoj</span> (figuroj) de la Esperanto-movado"
	],
	"£:BASE-pli": [
		"£:BASE-pli",
		"Malĝusta vortelekto: pli ↔ plu",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:BASE-plu": [
		"£:BASE-plu",
		"Malĝusta vortelekto: pli ↔ plu",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:BASE-plia": [
		"£:BASE-plia",
		"Malĝusta vortelekto: pli ↔ plu",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:BASE-plua": [
		"£:BASE-plua",
		"Malĝusta vortelekto: pli ↔ plu",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:pliaj": [
		"£:pliaj",
		"Malĝusta vortelekto: pli ↔ plu",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:pliajn": [
		"£:pliajn",
		"Malĝusta vortelekto: pli ↔ plu",
		"Eblas facile konfuzi <i>‘pli’</i> kaj <i>‘plu’.</i> La unua havas kvantan signifon, la dua tempan. Kun la kvanta prepozicio <i>‘da’,</i> ĉiam uzu <i>‘pli’.</i> Antaŭ verbo, post <i>‘ne’,</i> uzu <i>‘plu’.</i><br>\n<br>\n<i>Mi ne</i> <b><i>plu</i></b><i> havas</i> <b><i>pli</i></b><i> da tempo.</i><br>\n<br>\nPor la adjektivoj <i>‘plia’</i> kaj <i>‘plua’</i> validas la sama distingo: kun la unua temas pri kvanto (= <i>aldona</i>), kun la dua pri tempo (= <i>pludaŭra</i>).<br>\n<br>\nTrovu difinojn kaj ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a>!",
		"Ne <span style=\"color: #ff0000\">pli</span> (plu) eblas aliĝi.<br>\n<br>\nOni ne konas lian <span style=\"color: #ff0000\">plian</span> (pluan) sorton.<br>\n<br>\nLi aĉetis tri <span style=\"color: #ff0000\">pluajn</span> (pliajn) librojn."
	],
	"£:BASE-sxtata&\"<publikaj?n?>\"": [
		"£:BASE-sxtata&\"<publikaj?n?>\"",
		"Malĝusta vortelekto: publika → ŝtata",
		"'Publika’ signifas ‘malprivata’. Sed estas falsa (franca) amiko uzi la vorton kun la senco de <i>‘ŝtata’.</i>",
		"La nombro de <span style=\"color: #ff0000\">publikaj</span> (ŝtataj) funkciuloj kreskis multe."
	],
	"£:BASE-latinida&\"<rom.*>\"": [
		"£:BASE-latinida&\"<rom.*>\"",
		"Malĝusta vortelekto: rom(an)a/romanida → latinida",
		"Ne temas pri vera eraro, sed la kutima vorto por la lingvogrupo estas <i>‘latinida’.</i>",
		""
	],
	"£:BASE-sxargi": [
		"£:BASE-sxargi",
		"Malĝusta vortelekto: ŝarĝi → ŝargi, surŝarĝi",
		"Ne konfuzu <i>‘ŝarĝi’</i> kaj <i>‘ŝargi’.</i> Oni <i>ŝarĝas</i> transportilon per transportaĵo, aŭ metafore ion alian per io peza, sed oni <i>ŝargas</i> baterion aŭ aparaton (je elektro) aŭ armilon (je kugloj).<br>\n<br>\nEstas falsa amiko uzi <i>‘ŝarĝi’</i> (aŭ <i>‘ŝargi’</i>)<i></i> kun transportaĵo kiel objekto, kaj la transportilo kiel celo. Por tio, uzu <i>‘surŝarĝi’</i> aŭ <i>‘alŝarĝi’.</i>",
		"Li<span style=\"color: #ff3366\"></span> <span style=\"color: #ff0000\">ŝarĝis</span> (ŝargis) sian fotilon por la vojaĝo."
	],
	"£:BASE-sursxargxi": [
		"£:BASE-sursxargxi",
		"Malĝusta vortelekto: ŝarĝi → ŝargi, surŝarĝi",
		"Ne konfuzu <i>‘ŝarĝi’</i> kaj <i>‘ŝargi’.</i> Oni <i>ŝarĝas</i> transportilon per transportaĵo, aŭ metafore ion alian per io peza, sed oni <i>ŝargas</i> baterion aŭ aparaton (je elektro) aŭ armilon (je kugloj).<br>\n<br>\nEstas falsa amiko uzi <i>‘ŝarĝi’</i> (aŭ <i>‘ŝargi’</i>)<i></i> kun transportaĵo kiel objekto, kaj la transportilo kiel celo. Por tio, uzu <i>‘surŝarĝi’</i> aŭ <i>‘alŝarĝi’.</i>",
		"Li<span style=\"color: #ff3366\"></span> <span style=\"color: #ff0000\">ŝarĝis</span> (ŝargis) sian fotilon por la vojaĝo."
	],
	"£:BASE-subskribo&\"<signumoj?n?>\"": [
		"£:BASE-subskribo&\"<signumoj?n?>\"",
		"Malĝusta vortelekto: signumo → subskribo",
		"En Esperanto, <i>‘signumo’</i> estas la +/- signo antaŭ nombro. Ĝi ne havas la sencon de subskribo, ankaŭ ne en kunteksto de cifereca subskribo.",
		"Post <span style=\"color: #ff0000\">signumo</span> (subskribo) de la traktato la du landoj malfermis ambasadejojn."
	],
	"£:BASE-esti&\"<situ.*>\"": [
		"£:BASE-esti&\"<situ.*>\"",
		"Malĝusta vortelekto: situi → esti",
		"Nur nemoveblaĵoj povas <i>‘situi’,</i> do ekz. konstruaĵoj, lagoj, institucioj ktp. Homoj, bestoj, aŭtoj ktp. simple <i>‘estas’</i> ie. Malgrandaj aĵoj, kiuj ne povas moviĝi mem, sed esti movitaj, ekz. iloj aŭ libroj, ankaŭ povas <i>‘kuŝi’</i> ie.",
		"La domo, kie li <span style=\"color: #ff0000\">situis</span> (estis) dum la ŝtormo, estis ŝirmita de altaj arboj.<br>\n<br>\nLa martelo <span style=\"color: #ff0000\">situas</span> (estas/kuŝas) sur la tablo, apud la ŝraŭbilo."
	],
	"£:BASE-subteksto&\"<subtitoloj?n?>\"": [
		"£:BASE-subteksto&\"<subtitoloj?n?>\"",
		"Malĝusta vortelekto: subtitolo → subteksto",
		"Striktasense <i>‘subtitolo’</i> nur uzeblas kune kun <i>‘titolo’,</i> en libroj kaj aliaj preseblaj verkoj. Filmdialogoj havas <i>‘subtekstojn’.</i> Estas historia falsa amiko uzi <i>‘subtitolo’</i> ĉi tie, el la temp, kie filmoj ne havis sonon, kaj filmscenoj havis sube muntitaj titoloj.",
		"Oni montris filmon kun esperantaj <span style=\"color: #ff0000\">subtitoloj</span> (subtekstoj)."
	],
	"£:BASE-altmaro": [
		"£:BASE-altmaro",
		"Malĝusta vortelekto: tajdo – fluso – altmaro",
		"Ne konfuzu la vortojn <i>‘tajdo’, ‘(mal)fluso’</i> kaj <i>‘(mal)altmaro’.</i> Oni povas diri, ke <i>tajdo</i> (angle: <i>tide,</i> germane: <i>Gezeiten</i>)<i></i> estas la alternado de <i>fluso</i> kaj <i>malfluso</i> (angle: <i>flood tide &amp; ebb tide,</i> germane: <i>Flut &amp; Ebbe),</i> dum <i>altmaro</i> estas la plej alta punkto en tiu procezo (angle: <i>high tide,</i> germane: <i>Hochwasser</i>), kaj <i>malaltmaro</i> la plej malalta (angle: <i>low tide,</i> germane: <i>Niedrigwasser</i>).<br>\n<br>\nNotu, ke oni distingas inter <i>‘altmaro’</i> (tajdomaksimumo) kaj <i>‘superakvo’</i> (inundo), uzante ĉi-lastan por situacio, kie la maro (aŭ alia akvo) inundas firman teron.",
		"La ŝipo surfundiĝis dum <span style=\"color: #ff0000\">malalta tajdo</span> (malaltmaro)."
	],
	"£:BASE-malaltmaro": [
		"£:BASE-malaltmaro",
		"Malĝusta vortelekto: tajdo – fluso – altmaro",
		"Ne konfuzu la vortojn <i>‘tajdo’, ‘(mal)fluso’</i> kaj <i>‘(mal)altmaro’.</i> Oni povas diri, ke <i>tajdo</i> (angle: <i>tide,</i> germane: <i>Gezeiten</i>)<i></i> estas la alternado de <i>fluso</i> kaj <i>malfluso</i> (angle: <i>flood tide &amp; ebb tide,</i> germane: <i>Flut &amp; Ebbe),</i> dum <i>altmaro</i> estas la plej alta punkto en tiu procezo (angle: <i>high tide,</i> germane: <i>Hochwasser</i>), kaj <i>malaltmaro</i> la plej malalta (angle: <i>low tide,</i> germane: <i>Niedrigwasser</i>).<br>\n<br>\nNotu, ke oni distingas inter <i>‘altmaro’</i> (tajdomaksimumo) kaj <i>‘superakvo’</i> (inundo), uzante ĉi-lastan por situacio, kie la maro (aŭ alia akvo) inundas firman teron.",
		"La ŝipo surfundiĝis dum <span style=\"color: #ff0000\">malalta tajdo</span> (malaltmaro)."
	],
	"£:BASE-transigi&\"<transmisi.*>": [
		"£:BASE-transigi&\"<transmisi.*>",
		"Malĝusta vortelekto: transmisii → transigi/kontaĝi",
		"Por la specifa medicina senco de <i>‘transmisio’</i> (transmisii malsanon), prefere uzu <i>‘transigi’</i> aŭ <i>‘kontaĝi’.</i>",
		"Temas pri virusa infektmalsano <span style=\"color: #ff0000\">transmisiata</span> (transigita) de kuloj."
	],
	"£:BASE-erari&\"<trompigx.*>": [
		"£:BASE-erari&\"<trompigx.*>",
		"Malĝusta vortelekto: trompiĝi → erari",
		"En Esperanto, por <i>‘trompiĝi’</i> necesas trompanto. Ne ekzistas falsamika analogo de la germana <i>‘sich täuschen’</i> aŭ la hispana <i>‘confundirse’,</i> kun la senco <i>‘erari’.</i>",
		"Eble mi <span style=\"color: #ff0000\">trompiĝas</span> (eraras)."
	],
	"£nil&ART": [
		"£nil&ART",
		"Malĝusta/troa artikolo",
		"En ĉi tiu kunteksto estas malkutime uzi difinan artikolon.<br>\n<br>\nOni uzas artikolon por ĝenerale konata, videbla, divenebla, unika aŭ antaŭe menciita afero, aŭ generale kiam oni supozas, ke la aŭskultanto scias pri kio aŭ pri kiu(j) temas. Ne uzu difinan artikolon antaŭ nomo aŭ antaŭ alia difinilo <i>(tiu, ĉiu, kies, ambaŭ, unu, mia, via</i> ktp.). Eblas uzi <i>‘la’</i> anstataŭ posesiva pronomo <i>(li levis la manon)</i> aŭ ĝeneralig anstataŭ <i>‘ĉiuj’ (la spektantoj aplaŭdis).</i> Oni krome uzas <i>‘la’</i> por krei lingvonomon el nacia aŭ etna adjektivo <i>(la angla, la japana).</i><br>\n<br>\nEstas arkaismo uzi artikolon antaŭ adverba superlativo <i>(</i><span style=\"color: #ff3366\"><i>la</i></span><i> plej bone),</i> krom se la artikolo rilatas trans la adverbo al adjektivo aŭ substantivo <i>(la plej bone konata muzeo en la urbo)</i>",
		"Helpis <span style=\"color: #ff0000\">*la</span> mia patrino.<br>\n<br>\n<span style=\"color: #ff0000\">*La</span> Petro naskiĝis en<span style=\"color: #c9211e\"> *</span><span style=\"color: #ff0000\">la</span> Turkio.<br>\n<br>\nAlica estas <span style=\"color: #ff3366\">*la</span> instruisto.<br>\n<br>\nMargareto kantas <span style=\"color: #ff3366\">*la</span> plej bele el ĉiuj."
	],
	"£:BASE-nur&\"<sole>\"": [
		"£:BASE-nur&\"<sole>\"",
		"Malklara uzo: sole → nur",
		"La adverbo <i>‘sole’</i> havas du signifojn: (a) ‘malkune’, sen aliaj, (b) ‘nur’. Fine de propozicio kutimo temas pri senco (a), antaŭ verbo, prepozicio aŭ substantivgrupo la vorto kutime pri (b). Zamenhof uzis sencon (b) tute sinonime kun <i>‘nur’,</i> sed hodiaŭ tio estas pli markita uzo ol simple diri <i>‘nur’.</i> Krome, la uzado de nur forigas ĉiun ambiguecon. Pripensu, ĉu simple eblas uzi <i>‘nur’</i> ĉi tie, aŭ ĉu vi preferas la iom pli emfazan <i>‘sole’.</i>",
		"Mi <span style=\"color: #ff0000\">sole</span> (nur) petas peceton da pano."
	],
	"£:plue&\"dauxrigi\"": [
		"£:plue&\"dauxrigi\"",
		"Malkutima verbsintakso: daŭrigi -i → plue -i",
		"Oni povas daŭrigi ion kio povas kontinui – staton, laboron, migradon. Povas temi pri aktivecoj, ankaŭ propraj, sed devas esti substantivo. Estas nekutime uzi infinitivon post <i>‘daŭrigi’.</i> Simple uzu <i>‘plu’</i> aŭ <i>‘plue’:</i><br>\n<br>\n<i>Ili daŭrigis la migradon.</i><br>\n<br>\n<i>Ili</i> <span style=\"color: #ff0000\"><i>daŭrigis migri</i> </span><i>(Ili plue migris).</i><br>\n<br>\nPIV eksplicite rekomendas eviti la infinitivan sintakson, kaj ReVo ignoras ĝin.",
		""
	],
	"£:BASE-klasikajxo": [
		"£:BASE-klasikajxo",
		"Mankanta afikso: klasiko → klasikaĵo",
		"<i>'Klasiko'</i> estas malofta vorto, celanta la tuton de klasika periodo en arto. Ĉi tie vi verŝajne celas unuopa(j)n verkoj(j)n, do uzu <i>'klasikaĵo'.</i>",
		"Li legis ĉiujn <span style=\"color: #ff0000\">klasikojn</span> (klasikaĵojn) de la Esperanta literaturo."
	],
	"£:BASE-mangxajxo": [
		"£:BASE-mangxajxo",
		"Mankanta afikso: manĝo → manĝaĵo",
		"<i>'Manĝo’</i> signifas ‘manĝo-okazo’, ekz. <i>tagmanĝo, matenmanĝo, lasta/sankta manĝo.</i> Ĝi ankaŭ povas signifi la tuton de la nutraĵoj konsumitaj dume. Sed por unuopa nutraĵo aŭ unuopa plado oni kutime aldonas <i>-aĵ.</i> Do oni manĝas <i>manĝaĵojn</i> dum <i>manĝo</i>.",
		"Li manĝas nur ekologiajn <span style=\"color: #ff0000\">manĝojn</span> (manĝaĵojn)."
	],
	"£:BASE-mortiga&\"<mortaj?n?>\"": [
		"£:BASE-mortiga&\"<mortaj?n?>\"",
		"Mankanta afikso: morta → mortiga",
		"<i>Por la plej multaj hodiaŭaj esperantistoj,</i> <i>'morta’</i> temas pri stato (= mortinta), dum <i>‘mortiga’</i> rilatas al ago, evento, malsano aŭ veneno, kiu kaŭzas morton. Infekto, ekzemple, logike ne povas esti morta, sed ĝi povas estas mortiga. La uzo de <i>‘morta’</i> kun la signifo <i>‘mortiga’</i> estas nuntempe arkaika – prefere evitu ĝin.<br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		""
	],
	"£:BASE-samseksemulo": [
		"£:BASE-samseksemulo",
		"Mankanta afikso: samseksulo → samseksemulo",
		"Tre verŝajne vi celas <i>‘samseksemulo/samseksemula’</i> ĉi tie, kun la senco de <i>‘gejo/geja’</i>. <i>‘Samseksulo’</i> signifas simple ‘persono kun la sama sekso’.",
		""
	],
	"£:BASE-samseksemula": [
		"£:BASE-samseksemula",
		"Mankanta afikso: samseksulo → samseksemulo",
		"Tre verŝajne vi celas <i>‘samseksemulo/samseksemula’</i> ĉi tie, kun la senco de <i>‘gejo/geja’</i>. <i>‘Samseksulo’</i> signifas simple ‘persono kun la sama sekso’.",
		""
	],
	"£insert&ART": [
		"£insert&ART",
		"Mankanta artikolo",
		"Ĉi tie devus esti difina artikolo.<br>\n<br>\nOni uzas artikolon por ĝenerale konata, videbla, divenebla, unika aŭ antaŭe menciita afero, aŭ generale kiam oni supozas, ke la aŭskultanto scias pri kio aŭ pri kiu(j) temas. Ne uzu difinan artikolon antaŭ nomo aŭ antaŭ alia difinilo <i>(tiu, ĉiu, kies, ambaŭ, unu, mia, via ktp.).</i> Eblas uzi <i>‘la’</i> anstataŭ posesiva pronomo <i>(li levis la manon)</i> aŭ ĝeneralig anstataŭ <i>‘ĉiuj’</i> <i>(la spektantoj aplaŭdis)</i>. Oni krome uzas <i>‘la’</i> por krei lingvonomon el nacia aŭ etna adjektivo <i>(la angla, la japana)</i>.",
		"La ŝtrumpoj estas en <span style=\"color: #ff0000\">la</span> plej suba tirkesto.<br>\n<br>\nEn <span style=\"color: #ff0000\">la</span> nuna periodo …<br>\n<br>\nParolis <span style=\"color: #ff0000\">la</span> reĝo de Bestolando."
	],
	"£insert&\"<ke>\"": [
		"£insert&\"<ke>\"",
		"Mankanta konjunkcio: ke",
		"En Esperanto, ne ekzistas finitaj subpropozicioj sen enkonduka subordiga vorto – konjunkcio aŭ relativa aŭ demanda pronomo. Male al la angla kaj la skandinavaj lingvoj, tio ankaŭ validas por <i>ke-</i>frazoj, kiuj rolas kiel objekto:<br>\n<br>\n<i>?</i><span style=\"color: #ff0000\"><i>Mi pensas ŝi estas amuza.</i></span><i> → Mi pensas,</i> <b><i>ke</i></b><i> …</i> (angle: I think (that) she is funny)",
		""
	],
	"£:BASE-ekkoni&\"<kon.*>\"": [
		"£:BASE-ekkoni&\"<kon.*>\"",
		"Mankanta prefikso: konis → ekkonis",
		"La prefikso <i>‘ek-’</i> markas la komencon de io. En Esperanto, male al kelkaj latinidaj lingvoj, ne sufiĉas uzi preteriton aŭ pasinteco-adverbon por ŝanĝi la signifon de <i>‘koni’</i> aŭ <i>‘scii’</i> al <i>‘ekkoni’</i> aŭ <i>‘ekscii’.</i>",
		"Dum mia restado en Usono mi <span style=\"color: #ff0000\">konis</span> (ekkonis) novan amikon."
	],
	"£:BASE-prirabi": [
		"£:BASE-prirabi",
		"Mankanta prefikso: rabi → prirabi",
		"En Esperanto, la objekto de <i>‘rabi’</i> estas la rabita aĵo, ne ties posedanto. Do, oni ne <i>rabas,</i> sed <i>prirabas</i> turistojn, popolon, merkaton aŭ karavanon.",
		"En la regiono, oni ofte <span style=\"color: #ff0000\">rabis</span> (prirabis) karavanojn kaj vojaĝantojn."
	],
	"£insert&PRP": [
		"£insert&PRP",
		"Mankanta prepozicio",
		"Ĉi tie mankas prepozicio, verŝajne por ligi (dekstran) substantivon al vorto maldekstre, kiu postulas ĝuste tiun prepozicion.",
		""
	],
	"£:lauxlonge=de": [
		"£:lauxlonge=de",
		"Mankanta prepozicio: laŭlonge de",
		"<i>'Laŭlonge’</i> ne estas prepozicio, sed adverbo. Oni uzas <i>‘de’</i> post ĝi por alligi substantivon.",
		"Ili veturis <span style=\"color: #ff0000\">laŭlonge</span> (laŭlonge de) la marbordo."
	],
	"£insert&\"kiu\"": [
		"£insert&\"kiu\"",
		"Mankanta relativa pronomo: kiu",
		"En Esperanto, male al la angla kaj dana, ne eblas forlasi la objektpronomon komence de relativa subpropozicio.<br>\n<br>\n<i>?</i><span style=\"color: #ff0000\"><i>La tasko ni ricevis, estas urĝa</i></span><i> → La tasko,</i> <b><i>kiun</i></b><i> ni ricevis, estas urĝa.</i> (angle: The task (that) we received, is urgent)",
		""
	],
	"£:bedauxrinde&\"<bedauxre>\"": [
		"£:bedauxrinde&\"<bedauxre>\"",
		"Mankanta sufikso: bedaŭre → bedaŭrinde",
		"Pripensu, kiu bedaŭras – vi/oni aŭ la subjekto de la frazo? <i>‘Bedaŭre’</i> egalas al <i>‘bedaŭrante’</i> aŭ <i>‘kun bedaŭro’,</i> kaj celas la manieron, kiel la subjekto de la frazo faras sian agon, <i>‘bedaŭrinde’</i> signifas, ke indas bedaŭri ĝuste tiun agon – kio verŝajne estas, kion vi celas.",
		"Bedaŭre li forĵetis la frakasiĝintan tason.<br>\n<br>\n<span style=\"color: #ff0000\">Bedaŭre</span> (bedaŭrinde) ne eblas ripari ĝin."
	],
	"£:BASE-cxirkauxligajxo": [
		"£:BASE-cxirkauxligajxo",
		"Mankanta sufikso: ĉirkaŭligo → ĉirkaŭligaĵo",
		"'Ĉirkaŭligo’ estas ago, ne âjo. Por la senco ‘zono’ aŭ simile, aldonu la sufikson ‘-ajx’.",
		"Plumoplektita <span style=\"color: #ff0000\">ĉirkaŭligo</span> (ĉirkaŭligaĵo) ornamis ŝian nudan talion."
	],
	"£:BASE-lernajxo&\"<lerno?j?n>\"": [
		"£:BASE-lernajxo&\"<lerno?j?n>\"",
		"Mankanta sufikso: lerno → lernaĵo",
		"'Lerno’ havas verban radikon kaj do estas ago, egala al la pli ofte uzata <i>‘lernado’</i>. Por io, kion oni lernas, uzu <i>‘lernajxo’.</i>",
		"La <span style=\"color: #ff0000\">lerno</span> (lernaĵo) estas ĉiam fari sekurkopion"
	],
	"£:BASE-respondeculo": [
		"£:BASE-respondeculo",
		"Mankanta sufikso: respondulo → responeculo",
		"<i>'Respondulo’</i> estas homo, kiu dondas respondojn en enketo aŭ demandaro, dum <i>‘respondeculo’</i> estas la persono, kiu havas la respondecon (angle: <i>responsibility</i>) pri iu projekto, plano, ago, loko, infano aŭ simile.",
		"Mi tuj volas paroli kun la <span style=\"color: #ff0000\">respondulo</span> (respondeculo)."
	],
	"£:BASE-ridinda&\"<patetikaj?n?>\"": [
		"£:BASE-ridinda&\"<patetikaj?n?>\"",
		"Neekzistanta vorto / falsa amiko: patetika → ridinda/patosa",
		"La vorto <i>'patetika'</i> ne ekzistas en Esperanto, sed jes ekzistas la samradika <i>'patosa',</i> kun la signifo 'emocie solena'. Nere ne uzu la vorton kun la signifo <i>'ridinda' –</i> temas pri falsa amiko (angle: <i>pathetic</i>).",
		"<i>Li estas patetika (ridinda).</i><br>\n<br>\n<i>Li laŭdis la eventon per</i> <span style=\"color: #ff0000\"><i>patetikaj</i></span><i> (patosaj) versoj.</i>"
	],
	"£:BASE-patosa": [
		"£:BASE-patosa",
		"Neekzistanta vorto / falsa amiko: patetika → ridinda/patosa",
		"La vorto <i>'patetika'</i> ne ekzistas en Esperanto, sed jes ekzistas la samradika <i>'patosa',</i> kun la signifo 'emocie solena'. Nere ne uzu la vorton kun la signifo <i>'ridinda' –</i> temas pri falsa amiko (angle: <i>pathetic</i>).",
		"<i>Li estas patetika (ridinda).</i><br>\n<br>\n<i>Li laŭdis la eventon per</i> <span style=\"color: #ff0000\"><i>patetikaj</i></span><i> (patosaj) versoj.</i>"
	],
	"£:la&\"<lingvoj?>\"": [
		"£:la&\"<lingvoj?>\"",
		"Nekutima vortumo",
		"En Esperanto, oni kutime referencas lingvon per adjektivo kun artikolo, forlasante la vorton ‘lingvo’. Notu, ke eĉ, kiam vi jes uzas la vorton ‘lingvo’ antaŭ la lingvo-adjektivo, tamen necesas artikolo, ĉar lingvo estas unikaĵo.",
		"Interlingvo povas esti komuna dialektlingvo kiel ezemple <span style=\"color: #ff0000\">(la) lingvo araba</span> (la araba)."
	],
	"£:kiel&\"kia\"": [
		"£:kiel&\"kia\"",
		"Nenormala uzo de korelativo: kia → kiel",
		"Por rekte aldoni ekzemplojn al substantivo aŭ adjektivo, oni normale uzas <i>‘kiel’,</i> ne <i>‘kia’.</i> Pripensu sekvi tiun kutimon.<br>\n<br>\n<i>Li vizitis famajn urbojn</i> <span style=\"color: #ff0000\"><i>kia</i></span><i> (kiel) Parizo.</i><br>\n<br>\n<i>Li vizitis famajn urbojn</i> <span style=\"color: #ff0000\"><i>kiaj</i></span><i> (kiel) Parizo kaj Londono.</i><br>\n<br>\nArgumento por tamen uzi <i>‘kia’</i> estas, ke temas pri elipsa versio de jena sintakso:<br>\n<br>\n<i>Li vizitis urbojn famajn, kia estas Parizo.</i>",
		""
	],
	"£:BASE-vojlinio&\"<trajektoj?n?>>\"": [
		"£:BASE-vojlinio&\"<trajektoj?n?>>\"",
		"Neologismo / falsa amiko: trajekto → vojlinio",
		"La vorto <i>‘trajekto’</i> ne oficiale ekzistas en Esperanto. Jes ekzistas <i>‘trajektorio’,</i> kun la signifo de ‘ĵetlinio’ aŭ ‘(pasiva) fluglinio’. Sed verŝajne vi celas <i>‘vojlinio’</i> aŭ <i>‘veturlinio’.</i> Pripensu ĉu vi volas uzi neoficialan neologismon aŭ alian, kunmetitan vorton.",
		"La Gansu-Koridoro estis la cxefa <span style=\"color: #ff0000\">trajekto</span> (vojlinio) de Silka Vojo ."
	],
	"£x-etype-neo&\"<.+teknologio>\"": [
		"£x-etype-neo&\"<.+teknologio>\"",
		"Neologismo: -teknologio → -tekniko",
		"Striktasense <i>‘teknologio’</i> estas la scienco de teknikaj iloj, procedoj kaj metodoj, dum <i>‘tekniko’</i> estas la tuto de la iloj, procedoj kaj metodoj de iu fako. Do, en kunmetaĵoj de la tipo ‘fako+...’, estas pli ĝuste uzi <i>‘-tekniko’</i> ol <i>‘-teknologio’.</i>",
		""
	],
	"£:BASE-.+tekniko&\"<.+teknologio>\"": [
		"£:BASE-.+tekniko&\"<.+teknologio>\"",
		"Neologismo: -teknologio → -tekniko",
		"Striktasense <i>‘teknologio’</i> estas la scienco de teknikaj iloj, procedoj kaj metodoj, dum <i>‘tekniko’</i> estas la tuto de la iloj, procedoj kaj metodoj de iu fako. Do, en kunmetaĵoj de la tipo ‘fako+...’, estas pli ĝuste uzi <i>‘-tekniko’</i> ol <i>‘-teknologio’.</i>",
		""
	],
	"£:BASE-permesi": [
		"£:BASE-permesi",
		"Neologismo: darfi",
		"La diferenco inter <i>rajti</i> kaj <i>permesi</i> estas la perspektivo: Oni <i>rajtas</i> fari ion (mem), sed <i>permesas</i> al alia fari ion. <i>‘Rajti’</i> estas la sama kiel <i>‘havi rajton/permeson’</i> aŭ <i>‘esti permesata’.</i> La vorto <i>‘darfi’</i> estas (malofta) neologisma sinonimo de <i>‘rajti’</i>, inspirita de la germana <i>‘dürfen’.</i>",
		""
	],
	"£:BASE-rajti": [
		"£:BASE-rajti",
		"Neologismo: darfi",
		"La diferenco inter <i>rajti</i> kaj <i>permesi</i> estas la perspektivo: Oni <i>rajtas</i> fari ion (mem), sed <i>permesas</i> al alia fari ion. <i>‘Rajti’</i> estas la sama kiel <i>‘havi rajton/permeson’</i> aŭ <i>‘esti permesata’.</i> La vorto <i>‘darfi’</i> estas (malofta) neologisma sinonimo de <i>‘rajti’</i>, inspirita de la germana <i>‘dürfen’.</i>",
		""
	],
	"£:BASE-estonteco": [
		"£:BASE-estonteco",
		"Neologismo: futuro → estonteco",
		"Uzi la vorton <i>‘futuro’</i> ekster la kampo de gramatiko, kun la ĝenerallingva senco de <i>‘estonteco’,</i> estas neologismo. Ne estas vera eraro, sed konsideru uzi <i>‘estonteco’</i> ĉi tie, aŭ <i>‘estonta/estonte’.</i>",
		"Ni devas pensi pri la <span style=\"color: #ff0000\">futuro</span> (estonteco) de la tero kaj de niaj infanoj."
	],
	"£:BASE-estonta": [
		"£:BASE-estonta",
		"Neologismo: futuro → estonteco",
		"Uzi la vorton <i>‘futuro’</i> ekster la kampo de gramatiko, kun la ĝenerallingva senco de <i>‘estonteco’,</i> estas neologismo. Ne estas vera eraro, sed konsideru uzi <i>‘estonteco’</i> ĉi tie, aŭ <i>‘estonta/estonte’.</i>",
		"Ni devas pensi pri la <span style=\"color: #ff0000\">futuro</span> (estonteco) de la tero kaj de niaj infanoj."
	],
	"£:BASE-estonte": [
		"£:BASE-estonte",
		"Neologismo: futuro → estonteco",
		"Uzi la vorton <i>‘futuro’</i> ekster la kampo de gramatiko, kun la ĝenerallingva senco de <i>‘estonteco’,</i> estas neologismo. Ne estas vera eraro, sed konsideru uzi <i>‘estonteco’</i> ĉi tie, aŭ <i>‘estonta/estonte’.</i>",
		"Ni devas pensi pri la <span style=\"color: #ff0000\">futuro</span> (estonteco) de la tero kaj de niaj infanoj."
	],
	"£nil&\"<na>\"": [
		"£nil&\"<na>\"",
		"Neologismo: na",
		"Ŝajnas, ke vi uzis la neologisman prepozicion <i>‘na’</i> ĉi tie, ĉar sekvas vorto, kiu ne permesas la finaĵon ‘-n’. Konsideru sekvi la vastan plimulton de esperantistoj, kiuj ne markas tiun kazon per speciala prepozicio. Se vi intence uzis <i>‘na’,</i> uzu ĝin same en la tuta teksto, kaj malŝaltu la koncernan erar-markon en la agordoj de Lingvohelpilo.",
		"Li manĝis 4 pecojn da kuko, la fratino nur [<span style=\"color: #ff0000\">na</span>] 2."
	],
	"£x-etype-lemma&\"<random.*>\"": [
		"£x-etype-lemma&\"<random.*>\"",
		"Neologismo: random- → hazard-",
		"La radiko <i>‘random-’</i> (laŭ angla <i>random</i>) ne ekzistas en Esperanto. Uzu <i>‘hazard-’</i> anstataŭe!",
		""
	],
	"£:BASE-aparataro": [
		"£:BASE-aparataro",
		"Neologismo: softvaro/hardvaro → programaro/aparataro",
		"La vortoj <i>‘softvaro’</i> kaj <i>‘hardvaro’</i> estas neologismoj. PIV rekomendas anstataŭe <i>‘programaro’</i> kaj <i>‘aparataro’,</i> kaj ReVo tute ne mencias ilin. La vortoj tamen estas relative oftaj (25% de la uzo por <i>‘softvaro’,</i> kaj 8% de la uzo por <i>‘hardvaro’</i>). Do ne temas pri vera eraro. Lingvohelpilo rekomendas fari ŝanĝon en ĝeneralaj tekstoj, se ne fakaj. Decidu vi!",
		"Por povi ludi tiun ludon bone, vi bezonas novan <span style=\"color: #ff0000\">hardvaron</span> (aparataron)."
	],
	"£:BASE-programaro": [
		"£:BASE-programaro",
		"Neologismo: softvaro/hardvaro → programaro/aparataro",
		"La vortoj <i>‘softvaro’</i> kaj <i>‘hardvaro’</i> estas neologismoj. PIV rekomendas anstataŭe <i>‘programaro’</i> kaj <i>‘aparataro’,</i> kaj ReVo tute ne mencias ilin. La vortoj tamen estas relative oftaj (25% de la uzo por <i>‘softvaro’,</i> kaj 8% de la uzo por <i>‘hardvaro’</i>). Do ne temas pri vera eraro. Lingvohelpilo rekomendas fari ŝanĝon en ĝeneralaj tekstoj, se ne fakaj. Decidu vi!",
		"Por povi ludi tiun ludon bone, vi bezonas novan <span style=\"color: #ff0000\">hardvaron</span> (aparataron)."
	],
	"£x-etype-lemma&\"<tutor.*>\"": [
		"£x-etype-lemma&\"<tutor.*>\"",
		"Neologismo: tutor-",
		"En Esperanto, ne ekzistas la radiko <i>'tutor-'</i> (angle: <i>tutor</i>). Verŝajne vi celas <i>'helpinstruisto',</i> sed foje sufiĉas <i>'instruanto'.</i> Notu la similsignifan vorton <i>'mentoro'</i> – saĝa gvidanto de junulo.",
		""
	],
	"£x-etype-lemma&\"<koncernantoj?n?>\"": [
		"£x-etype-lemma&\"<koncernantoj?n?>\"",
		"Participo-eraro: koncernanto → koncernato",
		"Verŝajne ĉi tie vi celas <i>‘koncernato’</i> (pasiva participo)<i>,</i> do la personon, kiun io koncernas. <i>‘Koncernanto’</i> (aktiva participo) estus persono koncernanta alian personon.",
		"£:el"
	],
	"£insert&\"<kiel>\"": [
		"£insert&\"<kiel>\"",
		"Prepozicio-eraro en ebla objektpredikativo: kiel",
		"En Esperanto ekzistas du manieroj por esprimi objektpredikativon, do sintakse ligi (jaman aŭ venontan) atributon al akuzativa objekto, (a) rekta kaj (b) nerekta, kun <i>‘kiel’.</i> Dependas de la verbo, ĉu oni povas uzi (a) aŭ (b) aŭ ambaŭ. Ĉi tie ŝajnas, ke vi elektis erare.<br>\n<br>\nJen ekzemploj de la rekta maniero:<br>\n<br>\n<i>(a1) Li pentris la domon ruĝa</i> (= poste la domo estas ruĝa)<br>\n<br>\n<i>(a2) Li ŝatas sian kafon varmega</i> (= dum ĝi estas ankoraŭ varmega)<br>\n<br>\n<i>(a3) Oni elektis lin prezidanto</i> (= poste li estas prezidanto)<br>\n<br>\nNotu, ke la objektpredikativo <i>(ruĝa, varmega, prezidanto</i>) estas en la nominativo. La frazo <i>‘Li pentris la domon ruĝan’,</i> do kun adjektivo en la akuzativo,<i></i> egalas al <i>‘Li pentris la ruĝan domon’,</i> kaj temas pri simple atributo. Poste, la domo povas havi tute alian koloron.<br>\n<br>\nPor nerekta objektpredikativo, kun <i>‘kiel’</i>,<i></i> oni uzas la akuzativon:<br>\n<br>\n(b1) <i>Ili elektis lin</i> <b><i>kiel</i></b><i> prezidanto</i><b><i>n</i></b><i>.</i>",
		""
	],
	"£nil&\"<kiel>\"": [
		"£nil&\"<kiel>\"",
		"Prepozicio-eraro en ebla objektpredikativo: kiel",
		"En Esperanto ekzistas du manieroj por esprimi objektpredikativon, do sintakse ligi (jaman aŭ venontan) atributon al akuzativa objekto, (a) rekta kaj (b) nerekta, kun <i>‘kiel’.</i> Dependas de la verbo, ĉu oni povas uzi (a) aŭ (b) aŭ ambaŭ. Ĉi tie ŝajnas, ke vi elektis erare.<br>\n<br>\nJen ekzemploj de la rekta maniero:<br>\n<br>\n<i>(a1) Li pentris la domon ruĝa</i> (= poste la domo estas ruĝa)<br>\n<br>\n<i>(a2) Li ŝatas sian kafon varmega</i> (= dum ĝi estas ankoraŭ varmega)<br>\n<br>\n<i>(a3) Oni elektis lin prezidanto</i> (= poste li estas prezidanto)<br>\n<br>\nNotu, ke la objektpredikativo <i>(ruĝa, varmega, prezidanto</i>) estas en la nominativo. La frazo <i>‘Li pentris la domon ruĝan’,</i> do kun adjektivo en la akuzativo,<i></i> egalas al <i>‘Li pentris la ruĝan domon’,</i> kaj temas pri simple atributo. Poste, la domo povas havi tute alian koloron.<br>\n<br>\nPor nerekta objektpredikativo, kun <i>‘kiel’</i>,<i></i> oni uzas la akuzativon:<br>\n<br>\n(b1) <i>Ili elektis lin</i> <b><i>kiel</i></b><i> prezidanto</i><b><i>n</i></b><i>.</i>",
		""
	],
	"£:BASE-certi&\"<sekur.*>\"": [
		"£:BASE-certi&\"<sekur.*>\"",
		"Samtradukaj vortoj / konfuzebla vortoparo: sekura → certa",
		"<i>Sekureco</i> signifas foreston de aŭ protekton kontraŭ danĝero (angle: <i>safety</i>), dum <i>certeco</i> indikas altan probablecon (angle: <i>certainty</i>). En la germana kaj kaj dana lingvoj ambaŭ rilatas al la sama vorto (germane: <i>sicher,</i> dane: <i>sikker</i>), kreante riskon de konfuzo.",
		""
	],
	"£:BASE-certe&\"<sekure>\"": [
		"£:BASE-certe&\"<sekure>\"",
		"Samtradukaj vortoj / konfuzebla vortoparo: sekura → certa",
		"<i>Sekureco</i> signifas foreston de aŭ protekton kontraŭ danĝero (angle: <i>safety</i>), dum <i>certeco</i> indikas altan probablecon (angle: <i>certainty</i>). En la germana kaj kaj dana lingvoj ambaŭ rilatas al la sama vorto (germane: <i>sicher,</i> dane: <i>sikker</i>), kreante riskon de konfuzo.",
		""
	],
	"£:BASE-fugxi&\"<fusx.*>\"": [
		"£:BASE-fugxi&\"<fusx.*>\"",
		"Similsonaj vortoj: fuŝi → fuĝi",
		"Se via gepatra lingvo ne klare distingas inter voĉaj kaj senvoĉaj konsonantoj, vi eble riskas konfuzi la vortojn <i>‘fugxi’</i> (angle: <i>flee</i>) kaj <i>‘fuŝi</i>’ (angle: <i>mess up</i>). Notu, ke nur la dua permesas objekton.",
		"La jezidoj <span style=\"color: #ff0000\">fuŝis</span> (fuĝis) al la monto."
	],
	"£:BASE-dauxrigi&\"<dauxrigx.*>\"": [
		"£:BASE-dauxrigi&\"<dauxrigx.*>\"",
		"Sufikso-eraro: daŭriĝi → daŭrigi/pludaŭri",
		"<i>'Daŭri’</i> estas netransitiva verbo kaj prenas akuzativon nur por mezuri tempo <i>(La vojaĝo daŭros 7 horojn).</i> Tio signifas, ke ne eblas aldoni <i>-iĝ,</i> kaj ke necesas uzi <i>-ig,</i> se oni celas pluigon de agado aŭ procezo.<br>\n<br>\nLa milito <span style=\"color: #ff0000\">daŭriĝis</span> (daŭris) 4 jarojn.<br>\n<br>\n<i>Mi ne plu povas</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi) tiel.</i><br>\n<br>\n<i>Li lasis la junulon</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi).</i><br>\n<br>\nSe mankas tempa akuzativo aŭ tempa prepozicia grupo <i>(ĝis morgaŭ),</i> konsideru uzi <i>‘pludaŭri’</i> anstataŭ simpla <i>‘daŭri’:</i><br>\n<br>\n<i>Ni aŭdis, ke la a drinkado</i> <span style=\"color: #ff0000\"><i>daŭriĝis</i></span><i> (pludaŭris), la gastoj kantis ĥore.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-dauxri&\"<dauxrigx.*>\"": [
		"£:BASE-dauxri&\"<dauxrigx.*>\"",
		"Sufikso-eraro: daŭriĝi → daŭrigi/pludaŭri",
		"<i>'Daŭri’</i> estas netransitiva verbo kaj prenas akuzativon nur por mezuri tempo <i>(La vojaĝo daŭros 7 horojn).</i> Tio signifas, ke ne eblas aldoni <i>-iĝ,</i> kaj ke necesas uzi <i>-ig,</i> se oni celas pluigon de agado aŭ procezo.<br>\n<br>\nLa milito <span style=\"color: #ff0000\">daŭriĝis</span> (daŭris) 4 jarojn.<br>\n<br>\n<i>Mi ne plu povas</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi) tiel.</i><br>\n<br>\n<i>Li lasis la junulon</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi).</i><br>\n<br>\nSe mankas tempa akuzativo aŭ tempa prepozicia grupo <i>(ĝis morgaŭ),</i> konsideru uzi <i>‘pludaŭri’</i> anstataŭ simpla <i>‘daŭri’:</i><br>\n<br>\n<i>Ni aŭdis, ke la a drinkado</i> <span style=\"color: #ff0000\"><i>daŭriĝis</i></span><i> (pludaŭris), la gastoj kantis ĥore.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£:BASE-pludauxri": [
		"£:BASE-pludauxri",
		"Sufikso-eraro: daŭriĝi → daŭrigi/pludaŭri",
		"<i>'Daŭri’</i> estas netransitiva verbo kaj prenas akuzativon nur por mezuri tempo <i>(La vojaĝo daŭros 7 horojn).</i> Tio signifas, ke ne eblas aldoni <i>-iĝ,</i> kaj ke necesas uzi <i>-ig,</i> se oni celas pluigon de agado aŭ procezo.<br>\n<br>\nLa milito <span style=\"color: #ff0000\">daŭriĝis</span> (daŭris) 4 jarojn.<br>\n<br>\n<i>Mi ne plu povas</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi) tiel.</i><br>\n<br>\n<i>Li lasis la junulon</i> <span style=\"color: #ff0000\"><i>daŭriĝi</i></span><i> (daŭrigi).</i><br>\n<br>\nSe mankas tempa akuzativo aŭ tempa prepozicia grupo <i>(ĝis morgaŭ),</i> konsideru uzi <i>‘pludaŭri’</i> anstataŭ simpla <i>‘daŭri’:</i><br>\n<br>\n<i>Ni aŭdis, ke la a drinkado</i> <span style=\"color: #ff0000\"><i>daŭriĝis</i></span><i> (pludaŭris), la gastoj kantis ĥore.</i><br>\n<br>\nTrovu ekzemplojn en <a target=\"_blank\" href=\"https://reta-vortaro.de/\">ReVo</a> aŭ – per la 2 butonoj apud la korektopropono – en CorpusEye kaj PIV.",
		""
	],
	"£x-etype-list&\"<tia.*>\"&\"tiu.*\"": [
		"£x-etype-list&\"<tia.*>\"&\"tiu.*\"",
		"Tabelvorto: tia- → tiu-",
		"'Kia' signifas 'kiuspeca' (kun adjektiva respondo), dum <i>'kiu'</i> signifas 'kiu el pluraj' (kun identiga respondo). Tiuj signifoj ne ŝanĝiĝas en kunmetaĵoj. Do estas strange diri <span style=\"color: #ff0000\"><i>'tiadirekte', 'tiafaka', 'tiaflanka', 'tiafoje', 'tianivele'</i></span><i></i> ktp. Devas esti <i>'tiudirekte', tiufaka', 'tiuflanka', 'tiufoje', 'tiunivele'</i> ktp., ĉar ne eblas demandi <i>'what kind of direction/side/level'</i>. Simila testo en la germana estas <i>'Welche Seite, welches Mal?'</i> (ne <i>'was für eine Art von Seite</i> [flanko]<i>, was fïür eine Art von Mal</i> [fojo]<i>?).</i><br>\n<br>\nKompare estas tute bone diri <i>'kiaspeca', 'kiakolora', 'kiaforma'.</i>",
		""
	],
	"£:tia&\"<tio>\"": [
		"£:tia&\"<tio>\"",
		"Tabelvorto: tio → tia",
		"Ne eblas havi du o-tabelvortojn sinsekve. Unu devas estia adjektiva.",
		"Mi neniam antaŭe vidis ion <span style=\"color: #ff0000\">tion</span> (tian)."
	],
	"£:tian&\"<tion>\"": [
		"£:tian&\"<tion>\"",
		"Tabelvorto: tio → tia",
		"Ne eblas havi du o-tabelvortojn sinsekve. Unu devas estia adjektiva.",
		"Mi neniam antaŭe vidis ion <span style=\"color: #ff0000\">tion</span> (tian)."
	],
	"£:BASE-dolorsuferi": [
		"£:BASE-dolorsuferi",
		"Traduka uzo-interfero: dolori – dolorigi – dolorsuferi",
		"En Esperanto estas nur korpopartoj, kiuj <i>doloras,</i> ne la persono, male al angla ‘<i>hurt’</i>. Kaj ne eblas uzi la vorton transitive (ankaŭ male al angla <i>‘hurt</i>’), necesas aldoni <i>-ig</i> por \"akuzative\" kaŭzi doloron en korpoparto aŭ al persono:<br>\n<br>\n<i>Mia piedo doloras. Doloras al mi la kapo.</i><br>\n<br>\n<i>La filino</i> <span style=\"color: #ff0000\"><i>doloras</i></span><i> (dolorsuferas) pro la morto de sia patro.</i><br>\n<br>\n<i>La fumnebulo</i> <span style=\"color: #ff0000\"><i>doloris</i></span><i> (dolor</i><b><i>ig</i></b><i>is) la okulojn [al la piedirantoj]</i>",
		""
	],
	"£ig&\"<dolor.*>\"r": [
		"£ig&\"<dolor.*>\"r",
		"Traduka uzo-interfero: dolori – dolorigi – dolorsuferi",
		"En Esperanto estas nur korpopartoj, kiuj <i>doloras,</i> ne la persono, male al angla ‘<i>hurt’</i>. Kaj ne eblas uzi la vorton transitive (ankaŭ male al angla <i>‘hurt</i>’), necesas aldoni <i>-ig</i> por \"akuzative\" kaŭzi doloron en korpoparto aŭ al persono:<br>\n<br>\n<i>Mia piedo doloras. Doloras al mi la kapo.</i><br>\n<br>\n<i>La filino</i> <span style=\"color: #ff0000\"><i>doloras</i></span><i> (dolorsuferas) pro la morto de sia patro.</i><br>\n<br>\n<i>La fumnebulo</i> <span style=\"color: #ff0000\"><i>doloris</i></span><i> (dolor</i><b><i>ig</i></b><i>is) la okulojn [al la piedirantoj]</i>",
		""
	],
	"£:BASE-diri&\"&<babil.*>": [
		"£:BASE-diri&\"&<babil.*>",
		"Transitiveco: babili → diri",
		"La verbo <i>‘babili’</i> estas netransitiva. Kun rekta objekto aŭ ‘<i>ke’,</i> uzu <i>‘diri’.</i>",
		""
	],
	"£:BASE-datigxi&\"<datum.*>\"": [
		"£:BASE-datigxi&\"<datum.*>\"",
		"Transitiveco: datumi → datiĝi",
		"'Datumi’ ĝenerale estas uzata kiel transitiva verbo kun la signifo ‘determini la daton de io’. Prefere ne uzu ĝin kun la signifo <i>‘datiĝi de’.</i> Notu tamen, ke PIV kaj ReVo ne samopinias ĉi-rilate.<i></i>",
		"<i>La franca vorto</i> <span style=\"color: #ff0000\"><i>datumas</i></span><i> (datiĝas) de 1680.</i>"
	],
	"£:BASE-diplomitigxi": [
		"£:BASE-diplomitigxi",
		"Transitiveco: diplomiĝi → diplomitiĝi",
		"Post diplomekzameno oni ricevas <i>diplomon</i> kaj fariĝas <i>diplomito.</i> Do ne eblas diri <i>‘diplomiĝi’ –</i> tio signifus, ke vi fariĝus papero!<br>\n<br>\n<i>Post multaj malfacilaĵoj, li finfine</i> <span style=\"color: #ff0000\"><i>diplomiĝis</i></span><i> (diplomitiĝis).</i>",
		""
	],
	"£:BASE-engagxigxo": [
		"£:BASE-engagxigxo",
		"Transitiveco: engaĝigo → engaĝiĝo, engaĝo",
		"Laŭlitere, <i>‘engaĝigo’</i> signifas igi iun alian engaĝi trian personon pri aŭ por io. La radiko de la vorto estas transitiva verbo, <i>‘engaĝi’,</i> do verŝajne vi celas <i>‘engaĝiĝo’,</i> kun netransitiviga <i>‘-iĝ’</i> afikso.<br>\n<br>\nNotu ankaŭ, ke kun la senco de <i>‘dungi/dungo’</i> sufiĉas la senafiksa <i>‘engagxo’,</i> ekzemple de profesiulo por iu tasko.",
		"Lia <span style=\"color: #ff0000\">engaĝigo</span> (engaĝiĝo) en la movado estis tutkora kaj multjara.<br>\n<br>\n<i>La retejo plibeliĝis post la</i> <span style=\"color: #ff0000\"><i>engaĝigo</i></span><i> (engaĝo) de nova programisto.</i>"
	],
	"£:BASE:engagxo": [
		"£:BASE:engagxo",
		"Transitiveco: engaĝigo → engaĝiĝo, engaĝo",
		"Laŭlitere, <i>‘engaĝigo’</i> signifas igi iun alian engaĝi trian personon pri aŭ por io. La radiko de la vorto estas transitiva verbo, <i>‘engaĝi’,</i> do verŝajne vi celas <i>‘engaĝiĝo’,</i> kun netransitiviga <i>‘-iĝ’</i> afikso.<br>\n<br>\nNotu ankaŭ, ke kun la senco de <i>‘dungi/dungo’</i> sufiĉas la senafiksa <i>‘engagxo’,</i> ekzemple de profesiulo por iu tasko.",
		"Lia <span style=\"color: #ff0000\">engaĝigo</span> (engaĝiĝo) en la movado estis tutkora kaj multjara.<br>\n<br>\n<i>La retejo plibeliĝis post la</i> <span style=\"color: #ff0000\"><i>engaĝigo</i></span><i> (engaĝo) de nova programisto.</i>"
	],
	"£:BASE-situi&\"<est.*>\"": [
		"£:BASE-situi&\"<est.*>\"",
		"Transitiveco: esti → situi",
		"La verbo <i>‘situi’</i> estas netransitiva, do ne eblas uzi pasivon. Diru simple <i>‘situi’</i> anstataŭ <i>‘</i><span style=\"color: #ff0000\"><i>esti situita</i></span><i>’.</i>",
		""
	],
	"£:BASE-suprengrimpi": [
		"£:BASE-suprengrimpi",
		"Transitiveco: grimpi → suprengrimpi",
		"En Esperanto, <i>‘grimpi’</i> oficiale estas netransitiva (kp. PIV). Ne temas pri grava eraro, sed konsideru uzi <i>‘suprengrimpi’,</i> kiam la verbo havas objekton. La angla traduko estas sendistinga <i>(climb)</i>, kio eble klarigas la kreskantan transitivan uzon en Esperanto, sed la germana distingas inter <i>‘klettern’</i> (netransitiva) kaj <i>‘erklettern/besteigen’</i> (transitiva).",
		"Li <span style=\"color: #ff0000\">grimpis</span> (suprengrimpis) Evereston."
	],
	"£:BASE-interesigi": [
		"£:BASE-interesigi",
		"Transitiveco: interesi(ig/iĝ)i",
		"La verbo <i>‘interesi’</i> estas transitiva, do oni diras <i>‘tio interesas min’</i> aŭ <i>‘mi interesiĝas pri tio.’</i> Almeti transitivigan <i>‘-ig’</i> nur havas sencon, se unu persono interesigas duan personon pri io tria. Notu la ne tute logikan lingvouzon en tiu kazo, ĉar ja vere devus esti <i>‘Li interesiĝigis ŝin pri teatro’,</i> ĉar la akuzativa objekto (ŝi) ja ‘interesiĝas’ (pri io), kaj ne interesas (iun), dum estas la teatro, kiu ‘interesas’ (ŝin).<i></i><br>\n<br>\nKiel la verbo <i>‘interesi’</i>, ankaŭ la adjektivo <i>‘interesa’</i> jam estas transitivia (<i>interesa al/por iu),</i> kaj ne necesas krei participon <i>‘interesanta’</i> por havi komplementon <i>(interesanta iun).</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>interesas</i></span><i> (interesiĝas) pri teatro.</i><br>\n<br>\n<i>Politiko ne</i> <span style=\"color: #ff0000\"><i>interesigas</i></span><i> (interesas) min.</i>"
	],
	"£:BASE-interesigxi": [
		"£:BASE-interesigxi",
		"Transitiveco: interesi(ig/iĝ)i",
		"La verbo <i>‘interesi’</i> estas transitiva, do oni diras <i>‘tio interesas min’</i> aŭ <i>‘mi interesiĝas pri tio.’</i> Almeti transitivigan <i>‘-ig’</i> nur havas sencon, se unu persono interesigas duan personon pri io tria. Notu la ne tute logikan lingvouzon en tiu kazo, ĉar ja vere devus esti <i>‘Li interesiĝigis ŝin pri teatro’,</i> ĉar la akuzativa objekto (ŝi) ja ‘interesiĝas’ (pri io), kaj ne interesas (iun), dum estas la teatro, kiu ‘interesas’ (ŝin).<i></i><br>\n<br>\nKiel la verbo <i>‘interesi’</i>, ankaŭ la adjektivo <i>‘interesa’</i> jam estas transitivia (<i>interesa al/por iu),</i> kaj ne necesas krei participon <i>‘interesanta’</i> por havi komplementon <i>(interesanta iun).</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>interesas</i></span><i> (interesiĝas) pri teatro.</i><br>\n<br>\n<i>Politiko ne</i> <span style=\"color: #ff0000\"><i>interesigas</i></span><i> (interesas) min.</i>"
	],
	"£:BASE-interesi": [
		"£:BASE-interesi",
		"Transitiveco: interesi(ig/iĝ)i",
		"La verbo <i>‘interesi’</i> estas transitiva, do oni diras <i>‘tio interesas min’</i> aŭ <i>‘mi interesiĝas pri tio.’</i> Almeti transitivigan <i>‘-ig’</i> nur havas sencon, se unu persono interesigas duan personon pri io tria. Notu la ne tute logikan lingvouzon en tiu kazo, ĉar ja vere devus esti <i>‘Li interesiĝigis ŝin pri teatro’,</i> ĉar la akuzativa objekto (ŝi) ja ‘interesiĝas’ (pri io), kaj ne interesas (iun), dum estas la teatro, kiu ‘interesas’ (ŝin).<i></i><br>\n<br>\nKiel la verbo <i>‘interesi’</i>, ankaŭ la adjektivo <i>‘interesa’</i> jam estas transitivia (<i>interesa al/por iu),</i> kaj ne necesas krei participon <i>‘interesanta’</i> por havi komplementon <i>(interesanta iun).</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>interesas</i></span><i> (interesiĝas) pri teatro.</i><br>\n<br>\n<i>Politiko ne</i> <span style=\"color: #ff0000\"><i>interesigas</i></span><i> (interesas) min.</i>"
	],
	"£:BASE-ekinteresi": [
		"£:BASE-ekinteresi",
		"Transitiveco: interesi(ig/iĝ)i",
		"La verbo <i>‘interesi’</i> estas transitiva, do oni diras <i>‘tio interesas min’</i> aŭ <i>‘mi interesiĝas pri tio.’</i> Almeti transitivigan <i>‘-ig’</i> nur havas sencon, se unu persono interesigas duan personon pri io tria. Notu la ne tute logikan lingvouzon en tiu kazo, ĉar ja vere devus esti <i>‘Li interesiĝigis ŝin pri teatro’,</i> ĉar la akuzativa objekto (ŝi) ja ‘interesiĝas’ (pri io), kaj ne interesas (iun), dum estas la teatro, kiu ‘interesas’ (ŝin).<i></i><br>\n<br>\nKiel la verbo <i>‘interesi’</i>, ankaŭ la adjektivo <i>‘interesa’</i> jam estas transitivia (<i>interesa al/por iu),</i> kaj ne necesas krei participon <i>‘interesanta’</i> por havi komplementon <i>(interesanta iun).</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>interesas</i></span><i> (interesiĝas) pri teatro.</i><br>\n<br>\n<i>Politiko ne</i> <span style=\"color: #ff0000\"><i>interesigas</i></span><i> (interesas) min.</i>"
	],
	"£:BASE-interesa": [
		"£:BASE-interesa",
		"Transitiveco: interesi(ig/iĝ)i",
		"La verbo <i>‘interesi’</i> estas transitiva, do oni diras <i>‘tio interesas min’</i> aŭ <i>‘mi interesiĝas pri tio.’</i> Almeti transitivigan <i>‘-ig’</i> nur havas sencon, se unu persono interesigas duan personon pri io tria. Notu la ne tute logikan lingvouzon en tiu kazo, ĉar ja vere devus esti <i>‘Li interesiĝigis ŝin pri teatro’,</i> ĉar la akuzativa objekto (ŝi) ja ‘interesiĝas’ (pri io), kaj ne interesas (iun), dum estas la teatro, kiu ‘interesas’ (ŝin).<i></i><br>\n<br>\nKiel la verbo <i>‘interesi’</i>, ankaŭ la adjektivo <i>‘interesa’</i> jam estas transitivia (<i>interesa al/por iu),</i> kaj ne necesas krei participon <i>‘interesanta’</i> por havi komplementon <i>(interesanta iun).</i>",
		"<i>Mi</i> <span style=\"color: #ff0000\"><i>interesas</i></span><i> (interesiĝas) pri teatro.</i><br>\n<br>\n<i>Politiko ne</i> <span style=\"color: #ff0000\"><i>interesigas</i></span><i> (interesas) min.</i>"
	],
	"£:BASE-alklaki": [
		"£:BASE-alklaki",
		"Transitiveco: klaki → alklagi/klakigi",
		"'Klaki’ estas netransitiva verbo. Aŭ iu aĵo aŭ ilo produktas knalan sonon, aŭ homo produktas knalan sonon <i>per</i> aĵo aŭ ilo:<br>\n<br>\n<i>Klakadis la duonfermitaj fenestroj en la ŝtormo.</i><br>\n<br>\n<i>Li klakis dufoje per sia vipo / la manoj</i><br>\n<br>\nEn moderna lingvouzo, oni ankaŭ povas klaki ie per komputila muso. Sed oni ne povas klaki <i>ion,</i> nek vipon nek butonon per muso. Uzu <i>‘klakigi’</i> por la ilo (vipo) kaj <i>‘alklaki’</i> por la celo (butono, kruco, ligo).",
		"<span style=\"color: #ff0000\"><i>Klaku</i></span><i> (alklaku) la ruĝan butonon sube por vidi la bildon.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Klakante</i></span><i> (klakigante) la langon, li ektiris la ĉevalon en la rivereton,</i>"
	],
	"£ig&\"<klak.*>\"": [
		"£ig&\"<klak.*>\"",
		"Transitiveco: klaki → alklagi/klakigi",
		"'Klaki’ estas netransitiva verbo. Aŭ iu aĵo aŭ ilo produktas knalan sonon, aŭ homo produktas knalan sonon <i>per</i> aĵo aŭ ilo:<br>\n<br>\n<i>Klakadis la duonfermitaj fenestroj en la ŝtormo.</i><br>\n<br>\n<i>Li klakis dufoje per sia vipo / la manoj</i><br>\n<br>\nEn moderna lingvouzo, oni ankaŭ povas klaki ie per komputila muso. Sed oni ne povas klaki <i>ion,</i> nek vipon nek butonon per muso. Uzu <i>‘klakigi’</i> por la ilo (vipo) kaj <i>‘alklaki’</i> por la celo (butono, kruco, ligo).",
		"<span style=\"color: #ff0000\"><i>Klaku</i></span><i> (alklaku) la ruĝan butonon sube por vidi la bildon.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Klakante</i></span><i> (klakigante) la langon, li ektiris la ĉevalon en la rivereton,</i>"
	],
	"£:BASE-kleriga&\"<klerigxa>\"": [
		"£:BASE-kleriga&\"<klerigxa>\"",
		"Transitiveco: kleriĝa → kleriga",
		"'Kleriĝa’ estas iom stranga, ĝi uzeblus nur en la kombino ‘kleriĝa+persono’, do persono, kiu kleriĝas. Kurso, kvizo aŭ iniciato estas <i>‘kleriga’,</i> do kun transitiva radiko, kleriganta personon.",
		"La instruisto uzis <span style=\"color: #ff0000\">kleriĝajn</span> (klerigajn) kvizojn."
	],
	"£:BASE-alstrebi&\"<klopod.*>\"": [
		"£:BASE-alstrebi&\"<klopod.*>\"",
		"Transitiveco: klopodi → alstrebi",
		"La verbo <i>‘klopodi’</i> povas esti uzata netransitive, kun <i>‘pri’</i> aŭ kun infinitiva komplemento:<br>\n<br>\n<i>Ĉiu klopodu en sia metio!</i><br>\n<br>\n<i>Li klopodis vendi la malnovajn meblojn.</i><br>\n<br>\n<i>Iom pli klopodu pri viaj hejmtaskoj!</i><br>\n<br>\n<i>Tiu fiulo klopodis por min ruinigi.</i><br>\n<br>\nSed ne eblas uzi tiun verbon kun rekta substantiva komplemento:<br>\n<br>\n<i>Li</i> <span style=\"color: #ff0000\"><i>klopodis</i></span><i> (alstrebis) novan postenon.</i>",
		""
	],
	"£:BASE-ekigi&\"<komencig,*>\"": [
		"£:BASE-ekigi&\"<komencig,*>\"",
		"Transitiveco: komencigi → ekigi",
		"La verbo <i>‘komenci’</i> estas transitiva, do <i>‘komencigi’</i> nur havas sencon, se persono igas alian personon komenci ion. Ĉi tie vi verŝajne celas <i>‘ekigi’.</i>",
		"La laboro, kiun <span style=\"color: #ff0000\">komencigis</span> (ekigis) la japano, estas ege valora."
	],
	"£:BASE-malhavi&\"<mank.*>\"": [
		"£:BASE-malhavi&\"<mank.*>\"",
		"Transitiveco: manki",
		"'Manki’ ne permesas rektan objekton. Io povas manki al mi, sed mi ne povas <span style=\"color: #ff0000\">manki</span><span style=\"color: #c9211e\"> ion.</span> Uzu <i>‘malhavi’</i> anstataŭ, aŭ revortumu la frazon kun <i>‘al’</i>!",
		"Ni <span style=\"color: #ff0000\">mankas</span> kelkajn pecojn de la puzlo. (Mankas al ni kelkaj pecojn …, ni malhavas kelkajn pecojn ...)"
	],
	"£:BASE-vomema&\"<nauxz.*aj?n?>\"": [
		"£:BASE-vomema&\"<nauxz.*aj?n?>\"",
		"Transitiveco: naŭza → vomema",
		"'Naŭzi’ estas transitiva verbo, do ‘<i>naŭza’</i> celas efikon al iu homo, ne la (vomeman) staton de homo.",
		"Mi sentas min <span style=\"color: #c9211e\">naŭza</span> (vomema)"
	],
	"£:BASE-honorigi&\"<omagx.*>\"": [
		"£:BASE-honorigi&\"<omagx.*>\"",
		"Transitiveco: omaĝi → honorigi",
		"'Omaĝi’ estas malofta verbo, kaj laŭ PIV ĝi ne estas transitiva, do: ‘<i>omaĝi al iu’</i>, ne <i>‘omaĝi iun’.</i> Kontraŭe al PIV, ReVo permesas transitivan uzon, do ne temas pri certa eraro. Sed kun rekta objekto, konsideru uzi la pli-malpli samsencan <i>‘honorigi’.</i>",
		""
	],
	"£:BASE-preterpasi": [
		"£:BASE-preterpasi",
		"Transitiveco: pasi → preterpasi/doni",
		"En moderna Esperanto, 'pasi’ ne povas esti transitiva. Kun homa subjekto ĝi signifas ‘movadi’ (<i>de ie… al ie</i>, aŭ <i>tra/preter io</i>). Kun tempoperiodo kiel subjekto, ĝi signifas ‘forflui’: <i>pasis longa tempo / unu semajno / 3 jaroj.</i> Estas falsa amiko uzi la vorton kun rekta objekto (angle: <i>pass s.th.</i>):<br>\n<br>\nIli <span style=\"color: #ff0000\"><i>pasis</i></span><i> (preterpasis) tri akvofalojn dum la migrado.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Pasu</i></span><i> (donu) al mi la salon, bonvole!</i>",
		""
	],
	"£:BASE-doni&\"<pas.*>\"": [
		"£:BASE-doni&\"<pas.*>\"",
		"Transitiveco: pasi → preterpasi/doni",
		"En moderna Esperanto, 'pasi’ ne povas esti transitiva. Kun homa subjekto ĝi signifas ‘movadi’ (<i>de ie… al ie</i>, aŭ <i>tra/preter io</i>). Kun tempoperiodo kiel subjekto, ĝi signifas ‘forflui’: <i>pasis longa tempo / unu semajno / 3 jaroj.</i> Estas falsa amiko uzi la vorton kun rekta objekto (angle: <i>pass s.th.</i>):<br>\n<br>\nIli <span style=\"color: #ff0000\"><i>pasis</i></span><i> (preterpasis) tri akvofalojn dum la migrado.</i><br>\n<br>\n<span style=\"color: #ff0000\"><i>Pasu</i></span><i> (donu) al mi la salon, bonvole!</i>",
		""
	],
	"£x-etype-arch&\"<revoluciig.*>\"": [
		"£x-etype-arch&\"<revoluciig.*>\"",
		"Transitiveco: revolucii",
		"La transitiveco de la verbo <i>‘revolucii’</i> ŝanĝiĝis inter PV kaj PIV, de netransitiva (‘fari revolucion, ribeli’) al transitiva (‘revolucie plibonigi’). Komence, oni uzis <i>‘revoluciigi’</i> kun tiu dua signifo, kvankam logike la senco estus ‘igi iun ribeli’. Do la iaman uzo de <i>‘revoluciigi’</i> egalas al la nuna PIV-a, transitiva uzo de <i>‘revolucii’.</i> Lingvohelpilo rekomendas, trakti la verbon <i>‘revolucii’</i> kiel kaj transitiva kaj netransitiva, kaj rezervi la uzon de <i>‘revoluciigi’</i> al ‘igi ribeli’, do kun homa subjekto.",
		"Lia metodo <span style=\"color: #ff0000\">revoluciigis</span> (revoluciis) la produktadon de aŭtoj."
	],
	"£:BASE-sxangxigxanta&\"<sxangx.*>\"": [
		"£:BASE-sxangxigxanta&\"<sxangx.*>\"",
		"Transitiveco: ŝanĝi → ŝanĝiĝi",
		"La verbo <i>‘ŝanĝi’</i> estas transitiva, do ne uzu la adjektivon <i>‘ŝanĝa’</i> aŭ la participon <i>‘ŝanĝanta’</i> pri io, kiu mem ŝanĝiĝos. Bonas <i>‘ŝanĝa propono, ŝanĝa kurzo, ŝanĝa stacio’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>ŝanĝa vetero</i></span><i>’ (‘ŝanĝiĝanta vetero’).</i>",
		"<span style=\"color: #ff0000\">ŝanĝaj</span> (ŝanĝiĝantaj) ekspozicioj pri moderna arto"
	],
	"£:igx&\"sxangxi\"": [
		"£:igx&\"sxangxi\"",
		"Transitiveco: ŝanĝi → ŝanĝiĝi",
		"La verbo <i>‘ŝanĝi’</i> estas transitiva, do ne uzu la adjektivon <i>‘ŝanĝa’</i> aŭ la participon <i>‘ŝanĝanta’</i> pri io, kiu mem ŝanĝiĝos. Bonas <i>‘ŝanĝa propono, ŝanĝa kurzo, ŝanĝa stacio’,</i> sed ne <i>‘</i><span style=\"color: #ff0000\"><i>ŝanĝa vetero</i></span><i>’ (‘ŝanĝiĝanta vetero’).</i>",
		"<span style=\"color: #ff0000\">ŝanĝaj</span> (ŝanĝiĝantaj) ekspozicioj pri moderna arto"
	],
	"£:BASE-fluigi": [
		"£:BASE-fluigi",
		"Transitiveco: spili → fluigi",
		"Oni <i>'spilas'</i> barelon por havi vinon, aŭ metafore fonduson por havi monon. Sed ne eblas uzi <i>'spili'</i> kun la likvaĵo kiel objekto, en la senco de <i>'(el)fluigi'.</i><br>\n<br>\nNotu ankaŭ, ke la skandinava senco de 'disverŝi', 'disperdi' (lakton el glaso) aŭ 'malsxpari' (monon aŭ fortojn) estas falsa amiko.",
		"Li <span style=\"color: #ff0000\">spilis</span> (fluigis) freŝan bieron el nova barelo."
	],
	"£:BASE-stopigxo&\"<sxtopigoj?n?>\"": [
		"£:BASE-stopigxo&\"<sxtopigoj?n?>\"",
		"Transitiveco: ŝtopigo → ŝtopiĝo, stopado",
		"La vorto <i>‘ŝtopigo’</i> preskaŭ ĉiam estas eraro. Se temas pri trafiko aŭ fluo, vi verŝajne celis la ne-transitivan <i>‘ŝtopiĝo’</i>. Sed en la kunteksto de motoro aŭ maŝino ankaŭ povas esti, ke temas pri <i>‘stopado’</i> (haltigo) aŭ <i>‘stopiĝo’</i> (moviĝoĉeso).",
		"La akcidento kaŭzis severan <span style=\"color: #ff0000\">ŝtopigon</span> (ŝtopiĝon) en la trafiko."
	],
	"£:BASE-stopado&\"<sxtopigoj?n?>\"": [
		"£:BASE-stopado&\"<sxtopigoj?n?>\"",
		"Transitiveco: ŝtopigo → ŝtopiĝo, stopado",
		"La vorto <i>‘ŝtopigo’</i> preskaŭ ĉiam estas eraro. Se temas pri trafiko aŭ fluo, vi verŝajne celis la ne-transitivan <i>‘ŝtopiĝo’</i>. Sed en la kunteksto de motoro aŭ maŝino ankaŭ povas esti, ke temas pri <i>‘stopado’</i> (haltigo) aŭ <i>‘stopiĝo’</i> (moviĝoĉeso).",
		"La akcidento kaŭzis severan <span style=\"color: #ff0000\">ŝtopigon</span> (ŝtopiĝon) en la trafiko."
	],
	"£DEL:ig&\"<taskig.*>\"": [
		"£DEL:ig&\"<taskig.*>\"",
		"Transitiveco: taskigi → taski",
		"Oni povas <i>‘taskigi’</i> laboron (al iu), sed ne homon (pri io) – ĉar oni ne povas ŝanĝi homon en taskon. Simple uzu <i>‘taski’,</i> ekz. ‘<i>taski la knabon lavi la manĝilaron’.</i>",
		"La rutinan laboron mi taskigis al ekstera firmao.<br>\n<br>\nLi estis <span style=\"color: #ff0000\">taskigita</span> (taskita) gardi la transirejon."
	],
	"£:BASE-maldorma&\"<vekaj?n?>\"": [
		"£:BASE-maldorma&\"<vekaj?n?>\"",
		"Transitiveco: veka → maldorma/sendorma",
		"La sola logika signifo de la adjektivo <i>‘veka’</i> estas ‘maldormiga’, prefere ne uzu ĝin kun la senco <i>‘maldorma/sendorma’.</i> La klarigo estas, ke <i>‘dormi’</i> estas netransitiva (angle: <i>wake up,</i> germane: <i>aufwachen</i>), dum <i>‘veki’</i> estas transitiva (angle: <i>wake s.o. up,</i> germane: <i>wecken</i>). Do eblas derivi <i>‘dorma’</i> kiel stato, sed ne <i>‘veka’.</i> ‘<i>Veka’</i> estas la horloĝo, bruo aŭ tuŝo, kiu vekas iun, ne lia posta (maldorma) stato.<br>\n<br>\nVidu ankaŭ la deklaron de la Akademio de Esperanto pri <a target=\"_blank\" href=\"https://www.akademio-de-esperanto.org/decidoj/rezultstataj_adjektivoj/index.htmlr\">rezultstataj adjektivoj</a>.",
		"Ludoviko sidis longe <span style=\"color: #ff0000\">veka</span> (maldorma) en sia ĉambro."
	],
	"£:BASE-broso&\"<brosiloj?n?>": [
		"£:BASE-broso&\"<brosiloj?n?>",
		"Troa sufikso: brosilo → broso",
		"La vorto <i>‘broso’</i> jam estas ilo, do ne havas sencon aldoni la sufikson <i>-il.</i> Ĉe la vortoparo <i>brosi – broso,</i> la verbo devenas de la substantivo, male al <i>tranĉi – tranĉilo,</i> kie, inverse, la verbo estas la bazo.",
		""
	],
	"£:BASE-televidilo&\"<televidoj?n?>\"": [
		"£:BASE-televidilo&\"<televidoj?n?>\"",
		"Troa sufikso: televido → televidilo",
		"La vorto <i>‘televido’</i> celas televidon kiel sistemo, teknologio aŭ programaro. Por la aparato prefere uzu <i>‘televidilo’.</i>",
		"Li aĉetis 40-colan <span style=\"color: #ff0000\">televidon</span> (televidilon)."
	],
	"£x-etype-lemma&\"<dume>\"": [
		"£x-etype-lemma&\"<dume>\"",
		"Vortklaso: dume → dum",
		"La vorto <i>‘dume’</i> estas adverbo, ne konjunkcio. Por konkunkcia signifo, uzu <i>‘dum’.</i>",
		"Kerna ideo de Esperanto ne iĝos realigita <span style=\"color: #ff0000\">dume</span> (dum) ekzistas mono en mondo ."
	]
};

s.g.green = {
	'£green': '£green',
	'£warning': '£warning',
	'£clefting': '£clefting',
};

for (let k in s.g.marks.types) {
	let v = [
		s.g.marks.types[k][1],
		s.g.marks.types[k][2] + "<br>\n<br>\n<i>" + s.g.marks.types[k][3] + '</i>'
		];
	if (s.g.marks.types[k][1] === s.g.marks.types[k][2]) {
		v[1] = '<i>' + s.g.marks.types[k][3] + '</i>';
	}
	s.g.marks.types[k] = v;
	s.g.marks.types_grammar.push(k);

	for (let m in s.g.marks.yellow) {
		if (k.indexOf(m + '&') === 0 || k.indexOf(m + '-') === 0) {
			s.g.marks.yellow[k] = k;
		}
	}
	for (let m in s.g.marks.blue) {
		if (k.indexOf(m + '&') === 0 || k.indexOf(m + '-') === 0) {
			s.g.marks.blue[k] = k;
		}
	}
	for (let m in s.g.marks.purple) {
		if (k.indexOf(m + '&') === 0 || k.indexOf(m + '-') === 0) {
			s.g.marks.purple[k] = k;
		}
	}

	if (s.g.marks.yellow.hasOwnProperty(k) || s.g.marks.blue.hasOwnProperty(k) || s.g.marks.purple.hasOwnProperty(k) || s.g.green.hasOwnProperty(k)) {
		// Nothing
	}
	else if (/^£(nom.*|acc.*|DEL.*|PREADD.*)$/.test(k)) {
		s.g.marks.blue[k] = k;
	}
	else if (/^£comma-$/.test(k)) {
		s.g.marks.purple[k] = k;
	}
	else {
		s.g.marks.red[k] = k;
	}
}

s.g.marks.dict = ['(£error)'];
for (let k in s.g.marks.yellow) {
	s.g.marks.dict.push('('+s.escapeRegExp(k)+')');
}
s.g.marks.dict = new RegExp('('+s.g.marks.dict.join('|')+')( |$)');

s.m.l10n_marking_types = function(lang) {
	g_options_default.types = {};
	for (let k in s.g.marks.types) {
		if (/^%(ok|nko)(-|$)/.test(k)) {
			g_options_default.types[k] = 0;
		}
		else {
			g_options_default.types[k] = 1;
		}
		if (k.indexOf('&') !== -1) {
			let fk = k.substring(0, k.indexOf('&'));
			let v = k.substring(k.indexOf('&')+1);
			if (!s.g.marks.types_complex.hasOwnProperty(fk)) {
				s.g.marks.types_complex[fk] = [];
			}
			let vs = v.split(/\s+/);
			let ana = [];
			for (let i=0 ; i<vs.length ; ++i) {
				ana.push(new RegExp(vs[i]));
			}
			s.g.marks.types_complex[fk].push({
				ana: ana,
				exp: k,
			});
		}
	}
	g_options_default.types["£new"] = 0;
	g_options_default.types["£proper"] = 0;
}

s.orderMarkings();
