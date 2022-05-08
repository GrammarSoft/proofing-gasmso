# Kukkuniiaat Proofing Tools for Google Apps Script and Microsoft Office

Released as GPLv3+ - except `imgs/logo*` and `js/mark-types.js`

## Development
### Google Apps Script
* [Google Apps Script Github Assistant](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo) can be used to deploy to a Google Apps Script project

### Microsoft Office
* Office Online: https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing
* Windows: https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins
* macOS and iPad: https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac

## Deployment
* Edit `js/impl.js` lines 21-25
* Edit `mso.xml` and `html/*` to replace all instances of `https://kukkuniiaat.gl/gas/1.0.3/` with your chosen `ROOT_URL_SELF` value
* Remove all lines matching `//console.log`

# External Dependencies
* MurmurHash3js: https://github.com/pid/murmurHash3js as `vendor/murmurhash3js.min.js`
* sprintf.js: https://github.com/alexei/sprintf.js as `vendor/sprintf.min.js`
