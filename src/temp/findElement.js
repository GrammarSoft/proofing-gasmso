	/**
	 * 
	 * @param {*} txtObj 
	 * let txtObj = {prefix: '',suffix: '',word: '',t; ''}
	 */

	findElement(txtObj) {
		console.info('findElement txtObj', txtObj);
		console.info('txtObj.t.length', txtObj.t.length);
		console.info('txtObj prefix+word+suffix length', txtObj.prefix.length + txtObj.word.length + txtObj.suffix.length);
		let vnode = false;
		if (this.state.selectedVNode) {
			this.state.selectedVNode = this._removeSelectedElementCss(this.state.selectedVNode);
		}


		/**
		 * Instead of the below,
		 * First check if word can be found
		 * If not continue with splitting the txtObj.word 
		 */



		let words = txtObj.word.split(' ');
		if (words.length == 1) {
			console.info('txtObj.word is a single word', txtObj, words);
			vnode = this.findVirtualDomVnodeContainingText(this.state.virtualDom, txtObj, true);

			// console.info('findElement this.state.testTextContent.length', this.state.testTextContent.length);
			// console.info('txtObj.prefix.length', txtObj.prefix.length);

			console.info('found vnode', vnode);
			if (
				typeof vnode !== 'undefined' &&
				typeof vnode.text !== 'undefined' &&
				typeof txtObj !== 'undefined' &&
				typeof txtObj.word !== 'undefined' &&
				txtObj.word == vnode.text) {
				vnode = this._insertSelectedElementCss(vnode);
				this.state.selectedVNode = vnode;
			} else {
                console.info('splitting vnode',vnode.text,txtObj.word);
				vnode = this._splitVnodeAndInsertSelectedElementCss(vnode, txtObj);
			}
		}

		if (words.length > 1) {
			console.info('txtObj.word is a sentence', txtObj, words);
			let firstWordTxtObj = {
				...txtObj
			}; // cloning obj
			firstWordTxtObj.word = words.shift(); // Array.prototype.shift
			firstWordTxtObj.suffix = words.join(' ') + ' ' + firstWordTxtObj.suffix
            let item = this.findVirtualDomVnodeContainingTextWithPath(this.state.virtualDom, firstWordTxtObj, '', [],true);
            console.info('findVirtualDomVnodeContainingTextWithPath returned',item);
			item.path = item.path.reverse();
			item.path.pop();
			item.path.pop();
            let found = this._searchForTextByWideningPath(txtObj.word, this.state.virtualDom, item.path);
            console.info('found vnode',found);
			if (found) {
				this.state.selectedVnode = found;
				vnode = this._insertSelectedElementCss(found);
			}
		}

		// console.info('virtualDom',this.state.virtualDom);
		return vnode;
	}