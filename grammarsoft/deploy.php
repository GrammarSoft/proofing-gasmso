#!/usr/bin/env php
<?php

if (!empty($_SERVER['REMOTE_ADDR'])) {
	header('HTTP/1.0 400 Not for remote use');
	die('Not for remote use!');
}

chdir(__DIR__);

// Get version
preg_match('~VERSION_MAJOR\s*=\s*(\d+).*?VERSION_MINOR\s*=\s*(\d+).*?VERSION_PATCH\s*=\s*(\d+)~s', file_get_contents('js/impl.js'), $m);
$version = "{$m[1]}.{$m[2]}.{$m[3]}";

$where = 'rmkf';
if (!empty($argv[1])) {
	$where = trim($argv[1]);
}

echo shell_exec("mkdir -pv '../../$where/$version'");
echo shell_exec("rsync -avL ./ '../../$where/$version/' '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
if (!chdir("../../$where/$version/")) {
	die("Could not chdir!\n");
}

echo "Setting MS Office version\n";
$mso = file_get_contents('mso.xml');
$mso = preg_replace('~<Version>[^<>]*</Version>~', "<Version>$version</Version>", $mso);
$mso = str_replace(' (dev)', '', $mso);
file_put_contents('mso.xml', $mso);

echo "Setting MS Outlook version\n";
$mso = file_get_contents('outlook.xml');
$mso = preg_replace('~<Version>[^<>]*</Version>~', "<Version>$version</Version>", $mso);
$mso = str_replace(' (dev)', '', $mso);
file_put_contents('outlook.xml', $mso);

echo "Replacing URI path\n";
echo shell_exec("grep -rl '/dev/grammarsoft/' * | xargs -rn1 perl -pe 's@/dev/grammarsoft/@/$where/$version/@g;' -i");

echo "Replacing Grammar URI\n";
echo shell_exec("grep -rl '/grammar/' * | xargs -rn1 perl -pe 's@/grammar/@/@g;' -i");

echo "Commenting console.log\n";
echo shell_exec("grep -rl 'console.log' * | xargs -rn1 perl -pe 's@console.log@//console.log@g;' -i");

if ($where !== 'rmkf') {
	exit(0);
}
$cwd = getcwd();
chdir('/home/komma/repo-gas/git');
echo shell_exec('git checkout main');
echo shell_exec('git pull --all --rebase --autostash');
echo shell_exec('git checkout release-gs-dan || git checkout --orphan release-gs-dan');
echo shell_exec('rm -rfv * .[a-f]* .[h-z]*');
echo shell_exec("rsync -avcL --delete '$cwd/' ./ '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
echo shell_exec('git add -A .');
echo shell_exec("git commit --all -m 'Release $version'");
echo shell_exec('git push --all -f');
echo shell_exec('git checkout main');
