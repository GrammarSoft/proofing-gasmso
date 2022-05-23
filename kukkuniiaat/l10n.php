#!/usr/bin/env php
<?php

if (!empty($_SERVER['REMOTE_ADDR'])) {
	die('Not for remote use.');
}

$gdocs = [
	'https://docs.google.com/spreadsheets/d/1UbTdfRDnKDEfL4WHY0NYuyuNFIYQR59rRmB2Kiyx8Zk/export?exportFormat=csv', // Shared
	'https://docs.google.com/spreadsheets/d/1r5EKJHo2VfgGav2KULo8BWAWikTuNi3Uy9R19ixSpKI/export?exportFormat=csv',
	];
$csv = fopen('/tmp/gas-kal.csv', 'wb');
foreach ($gdocs as $gd) {
	fwrite($csv, file_get_contents($gd));
	fwrite($csv, "\n");
}
fclose($csv);

chdir(__DIR__);
shell_exec('cat /tmp/gas-kal.csv | ../../../dev/shared/bin/l10n-load.php');

$js = file_get_contents('l10n.js');
$js = str_replace("lang: 'en',", "lang: 'da',", $js);
$js = str_replace('l10n.s.de = l10n.s.deu;', 'l10n.s.kl = l10n.s.kal;', $js);
file_put_contents('l10n.js', $js);
