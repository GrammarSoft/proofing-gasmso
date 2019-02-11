#!/usr/bin/env php
<?php

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

echo "Replacing URI path\n";
echo shell_exec("replace 'https://retmig.dk/gas/dev/kukkuniaat/' 'https://tinodidriksen.com/spell/kal/gas/$version/' -- $(grep -rl 'https://retmig.dk/gas/dev/kukkuniaat/' *)");

echo "Replacing backend URI\n";
echo shell_exec("replace 'https://tinodidriksen.com/spell-dev/kal/' 'https://tinodidriksen.com/spell/kal/' -- $(grep -rl 'https://tinodidriksen.com/spell-dev/kal/' *)");

echo "Commenting console.log\n";
echo shell_exec("replace 'console.log' '//console.log' -- $(grep -rl 'console.log' *)");

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
