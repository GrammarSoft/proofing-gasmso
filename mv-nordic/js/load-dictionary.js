/*!
 * Copyright 2016-2022 GrammarSoft ApS <info@grammarsoft.com> at https://grammarsoft.com/
 * Linguistic backend by Eckhard Bick <eckhard.bick@gmail.com>
 * Frontend by Tino Didriksen <mail@tinodidriksen.com>
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
'use strict';

const html = <?=json_encode(file_get_contents('../../'.preg_replace('~^.+?/([^/]+)/js/load-dictionary\.js$~', '$1', $_SERVER['PHP_SELF']).'/html/dictionary.html'), JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);?>;

let doc = document.open('text/html', 'replace');
doc.write(html);
doc.close();
