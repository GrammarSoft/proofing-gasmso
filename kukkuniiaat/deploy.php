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

$where = 'release';
if (!empty($argv[1])) {
	$where = trim($argv[1]);
}

echo shell_exec("rm -rfv '/tmp/spellers/kal/$version'");
echo shell_exec("mkdir -pv '/tmp/spellers/kal/$version'");
echo shell_exec("rsync -avL ./ '/tmp/spellers/kal/$version/' '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
if (!chdir("/tmp/spellers/kal/$version/")) {
	die("Could not chdir!\n");
}

echo "Setting MSO version\n";
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
echo shell_exec("grep -rl 'https://retmig.dk/gas/dev/kukkuniiaat/' * | xargs -rn1 perl -pe 's@https://retmig.dk/gas/dev/kukkuniiaat/@https://kukkuniiaat.gl/gas/$version/@g' -i");

echo "Replacing backend URI\n";
echo shell_exec("grep -rl 'https://kukkuniiaat.gl/dev/' * | xargs -rn1 perl -pe 's@https://kukkuniiaat.gl/dev/@https://kukkuniiaat.gl/@g' -i");

echo "Commenting console.log\n";
echo shell_exec("grep -rl 'console.log' * | xargs -rn1 perl -pe 's@console.log@//console.log@g;' -i");

if ($where !== 'release') {
	exit(0);
}
$cwd = getcwd();
chdir('/home/komma/repo-gas/git');
echo shell_exec('git show-ref --verify --quiet refs/heads/release-kal && git checkout release-kal || git checkout --orphan release-kal');
echo shell_exec('rm -rfv *');
echo shell_exec("rsync -avcL --delete '$cwd/' ./ '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
echo shell_exec('git add -A .');
echo shell_exec("git commit --all -m 'Release $version'");
echo shell_exec('git push --all');
echo shell_exec('git checkout master');
