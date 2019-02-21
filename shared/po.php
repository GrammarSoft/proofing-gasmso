<?php

function po_load($file) {
	$po = [];
	$last = '';
	foreach (file($file) as $line) {
		$line = trim($line);
		if (empty($line)) {
			continue;
		}

		if (preg_match('~^msgid "(.*)"$~u', $line, $m)) {
			$last = trim($m[1]);
			$po[$last] = '';
		}
		// Skip all strings to do with an empty ID
		if (empty($last)) {
			continue;
		}
		if (preg_match('~^msgstr "(.*)"$~u', $line, $m) || preg_match('~^"(.*)"$~u', $line, $m)) {
			$po[$last] .= $m[1];
		}
	}

	foreach ($po as $k => $v) {
		$po[$k] = str_replace('\\"', '"', str_replace('\n', "\n", $v));
	}

	return $po;
}

function po_override_cb($m) {
	if (empty($GLOBALS['pos'][$m[1]][$m[2]])) {
		return $m[0];
	}
	return str_replace($m[2], htmlspecialchars($GLOBALS['pos'][$m[1]][$m[2]]), $m[0]);
}
