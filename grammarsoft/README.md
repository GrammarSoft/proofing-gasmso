# GrammarSoft ApS Proofing Tools for Google Apps Script and Microsoft Office

Initially developed for use with the https://kommaer.dk/ and https://retmig.dk/ services.

Released as GPLv3+ - except `imgs/logo*` and `js/mark-types.js`

## Development
### Google Apps Script
* [Google Apps Script Github Assistant](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo) can be used to deploy to a Google Apps Script project

### Microsoft Office
* Office Online: https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing
* Windows: https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins
* macOS and iPad: https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac

## Deployment
* Edit `js/shared.js` lines 24-28
* Edit `mso.xml` and `html/*` to replace all instances of `https://retmig.dk/gas/dev/grammarsoft/` with your chosen `ROOT_URL_SELF` value
* Remove all lines matching `console.log`

# External Dependencies
* MurmurHash3js: https://github.com/pid/murmurHash3js as `vendor/murmurhash3js.min.js`
* JSON WSP Client: http://ladonize.org/resources/jsonwspclient.js as `js/jsonwspclient.js`
* sprintf.js: https://github.com/alexei/sprintf.js as `vendor/sprintf.min.js`
