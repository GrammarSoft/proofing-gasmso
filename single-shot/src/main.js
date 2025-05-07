import util from 'node:util';
util.inspect.defaultOptions.depth = Infinity;

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import process from 'node:process';
import sqlite from 'better-sqlite3';

if (process.argv.length < 3 || !fs.existsSync(process.argv[2])) {
	exit(1);
}

let extr = spawnSync('tf-extract', ['-s', 'visl', '-d', '/tmp/rmkf', '-K', process.argv[2]], {encoding: 'UTF-8'});

let styled = extr.stdout;
let plain = styled.replace(/<STYLE[^>]+>/g, '').replace(/<\/STYLE>/g, '');

let rx = /<STREAMCMD:TRANSFUSE:([^>]+)>/;
let path = null;
if ((path = plain.match(rx)) == null) {
	exit(1);
}
path = path[1];

fs.writeFileSync(`${path}/ss-plain`, plain);

//let xml = fs.readFileSync('', {encoding: 'UTF-8'});
