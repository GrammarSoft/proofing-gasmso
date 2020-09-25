export class OutlookTextHandler {
	constructor(coercionType) {
        console.info('OutlookTextHandler constructor');
        this.coercionType = coercionType;
        this.textContent = '';
        this.previousTxtObj = null;
        this.elementPos = -1;
    }

    setContent(outlookContent,reload = false) {
        this.textContent = outlookContent;
        if(reload) {
            // this.findElement(this.previousTxtObj)
        }
    }

    // isInitialized() {
    //     return this.textContent != null && this.textContent.length > 0 ? true : false;  
    // }

    getContent() {
        return this.getTextContent();
    }

    getTextContent() {
        return this.textContent;
    }

    replace(word,rpl) {
        let prefix = this.textContent.substr(0,this.elementPos);
        let sub = this.textContent.substr(this.elementPos,word.length);
        let suffix = this.textContent.substr(this.elementPos+word.length);
        console.info('replace',sub,word);
        if(sub == word) {
            this.textContent = prefix+rpl+suffix;
        }
    }

    insertText(word,rpl) {
        return this.replace(word,rpl);
    }

    getCoercionType() {
        return this.coercionType;
    }

    findElement(txtObj) {
        if(txtObj != null) {
            this.previousTxtObj = txtObj;
            
            let prefixLength = txtObj.prefix.length;
            let sub = this.textContent.substr(prefixLength,txtObj.word.length);
            console.info('findElement',txtObj.word,sub);
            if(txtObj.word == sub) {
                this.elementPos = prefixLength;
                return true;
            }
            return false;
        }
        return false;
    }
}