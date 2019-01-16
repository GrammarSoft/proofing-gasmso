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

echo shell_exec("mkdir -pv '../../$where/$version'");
echo shell_exec("rsync -avL ./ '../../$where/$version/' '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
if (!chdir("../../$where/$version/")) {
	die("Could not chdir!\n");
}

echo "Setting MSO version\n";
$mso = file_get_contents('mso.xml');
$mso = preg_replace('~<Version>[^<>]*</Version>~', "<Version>$version</Version>", $mso);
file_put_contents('mso.xml', $mso);

echo "Replacing URI path\n";
echo shell_exec("replace '/dev/grammarsoft/' '/$where/$version/' -- $(grep -rl '/dev/grammarsoft/' *)");

echo "Replacing Grammar URI\n";
echo shell_exec("replace 'https://retmig.dk/grammar/' 'https://retmig.dk/' -- $(grep -rl 'https://retmig.dk/grammar/' *)");

echo "Commenting console.log\n";
echo shell_exec("replace 'console.log' '//console.log' -- $(grep -rl 'console.log' *)");

if ($where !== 'release') {
	exit(0);
}
$cwd = getcwd();
chdir('/home/komma/repo-gas/git');
echo shell_exec('git checkout release-gs');
echo shell_exec("rsync -avcL --delete '$cwd/' ./ '--exclude=*.php' '--exclude=*.po' '--exclude=*.pot' '--exclude=*.svn' '--exclude=*.git'");
echo shell_exec('git add -A .');
echo shell_exec("git commit --all -m 'Release $version'");
echo shell_exec('git push --all');
echo shell_exec('git checkout master');
