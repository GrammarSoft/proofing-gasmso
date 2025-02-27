#!/bin/bash
set -e
curl -L 'https://docs.google.com/spreadsheets/d/1D6WQNCK0u8LJHISnd8Awl4Cg848ClMOKdmuhJcFSMPE/export?exportFormat=csv' > /tmp/grammar.csv
cat /tmp/grammar.csv | ~/public_html/shared/bin/l10n-load-localjs.php eo
