import util from 'node:util';
util.inspect.defaultOptions.depth = Infinity;

import * as s from '../js/shared.js';
import * as m from '../../gs-esperanto/js/mark-types.js';

s.g._m = m;

s.g.impl = {
	parseError: console.log,
	parseProgress: function() {},
	beforeParseResult: function(t) { return t; },
	parseChunkDone: function() {},
	};

s.g.tool = 'Grammar';
s.g.to_send = [];
s.g.to_send_i = 1;
s.g._live_options.types = {};
s.g._live_options.config = {
	opt_useDictionary: false,
	};

let tests = [
	{t: [{'i':1,'t':'La industria amoniak-produktado okazas grandparte per la Haber–Bosch-sintezon el elementoj.','h':'h-41ebf0f6a5ed5efa6b3894b88a7f92aa-91'}], rv: {'c':'<s1>\nLa\tART @>N\nindustria\tADJ @>N\namoniak-produktado\tN @SUBJ>\nokazas\t<mv> V @FS-STA\ngrandparte\tADV @<ADVL\nper\tPRP @<ADVL\nla\tART @>N\nHaber-Bosch-sintezon\tN @P< <R:Haber-Bosch-sintezo> £nom-prp\nel\tPRP @N<\nelementoj\tN @P<\n.\tPU\n</s1>','t':4190417,'v':1}},
	{t: [{'t':'Tion mi provos atingi per ekzameni kelkajn slangajn esprimojn kaj sercxi respondajn esprimojn en la angla kaj la sveda lingvo.','i':1,'h':'h-230481afe91e59e49d0e807056dc60a3-126'}], rv: {'c': '<s1>\nTion\tPRON @ACC>\nmi\tPRON @SUBJ>\nprovos\t<aux> V @FS-STA\natingi\t<mv> V @ICL-AUX<\nper\tPRP @<ADVL\nekzameni\t<mv> V @ICL-P< <R:ekzamenado> £ado\nde\tPRP £insert\nkelkajn\tPRON @>N <R:kelkaj> £>nom £nom\nslangajn\tADJ @>N <R:slangaj> £>nom £nom\nesprimojn\tN @P< <R:esprimoj> £nom-prp\nkaj\tKC @CO\nsercxi\t<mv> V @ICL-P< <R:sercxado> £ado\nde\tPRP £insert\nrespondajn\tADJ @>N <R:respondaj> £>nom £nom\nesprimojn\tN @P< <R:esprimoj> £nom-prp\nen\tPRP @<ADVL\nla\tART @>N\nangla\tADJ @P<\nkaj\tKC @CO\nla\tART @>N\nsveda\tADJ @>N\nlingvo\tN @P< <R:lingvoj> £pl\n.\tPU\n</s1>','t': 4190636,'v': 1}},
	];

for (let i=0 ; i<tests.length ; ++i) {
	let t = tests[i];
	s.g.to_send = t.t;
	s.g.cache.Grammar = {};

	let rv = s._parseResult(t.rv);
	console.log(s.g.marking_ranges);
}
