#!/usr/bin/env php
<?php

chdir(__DIR__);
require_once __DIR__.'/../shared/po.php';

$pos = [
	'da-dk' => po_load('l10n/danproof-da_DK.po'),
	'nb-no' => po_load('l10n/danproof-nb_NO.po'),
	'sv-se' => po_load('l10n/danproof-sv_SE.po'),
	];

// Get version
preg_match('~VERSION_MAJOR\s*=\s*(\d+).*?VERSION_MINOR\s*=\s*(\d+).*?VERSION_PATCH\s*=\s*(\d+)~s', file_get_contents('js/impl.js'), $m);
$version = "{$m[1]}.{$m[2]}.{$m[3]}";

$where = 'release';
if (!empty($argv[1])) {
	$where = trim($argv[1]);
}

echo shell_exec("rm -rfv '/tmp/spellers/mv/$version'");
echo shell_exec("mkdir -pv '/tmp/spellers/mv/$version'");
echo shell_exec("rsync -avL ./ '/tmp/spellers/mv/$version/' '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
if (!chdir("/tmp/spellers/mv/$version/")) {
	die("Could not chdir!\n");
}

echo "Setting MSO version\n";
$mso = file_get_contents('mso.xml');
$mso = preg_replace('~<Version>[^<>]*</Version>~', "<Version>$version</Version>", $mso);
$mso = preg_replace_callback('~Override Locale="([^"]+)" Value="([^"]+)"~', 'po_override_cb', $mso);
$mso = str_replace(' (dev)', '', $mso);
file_put_contents('mso.xml', $mso);

echo "Replacing URI path\n";
echo shell_exec("replace 'https://retmig.dk/gas/dev/mv-nordic/' 'https://grammateket.b-cdn.net/$version/' -- $(grep -rl 'https://retmig.dk/gas/dev/mv-nordic/' *)");

echo "Replacing backend URI\n";
echo shell_exec("replace 'https://kommaer.dk/mv-grammar/' 'https://grammateket.com/' -- $(grep -rl 'https://kommaer.dk/mv-grammar/' *)");

echo "Replacing Caduceus URI\n";
echo shell_exec("replace 'wss://gramtrans.com/caduceus/' 'wss://caduceus.mv-nordic.com/caduceus/' -- $(grep -rl 'wss://gramtrans.com/caduceus/' *)");

echo "Replacing logout URI\n";
echo shell_exec("replace 'https://signon-test.vitec-mv.com/logout.php' 'https://signon.vitec-mv.com/logout.php' -- $(grep -rl 'https://signon-test.vitec-mv.com/logout.php' *)");

echo "Commenting console.log\n";
echo shell_exec("replace 'console.log' '//console.log' -- $(grep -rl 'console.log' *)");

if ($where !== 'release') {
	exit(0);
}
$cwd = getcwd();
chdir('/home/komma/repo-gas/git');
echo shell_exec('git show-ref --verify --quiet refs/heads/release-mv && git checkout release-mv || git checkout --orphan release-mv');
echo shell_exec('rm -rfv *');
echo shell_exec("rsync -avcL --delete '$cwd/' ./ '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
echo shell_exec('git add -A .');
echo shell_exec("git commit --all -m 'Release $version'");
echo shell_exec('git push --all');
echo shell_exec('git checkout master');
