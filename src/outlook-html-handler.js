import {init} from 'snabbdom/init'
import {h} from 'snabbdom/h' // helper function for creating vnodes
import {classModule} from 'snabbdom/modules/class'
import {datasetModule} from 'snabbdom/modules/dataset'
import html from 'snabby'
import toHTML from 'snabbdom-to-html';
import objectPath from 'object-path';
import htmlentities from 'htmlentities';
import DOMPurify from 'dompurify';

export class OutlookHtmlHandler {
	constructor(coercionType) {
		console.info('OutlookHtmlHandler constructor');
		this.state = {
			'textContent': '',
			// 'textContent2': '', // DEBUGGING REMOVE
			'rawHtml': '',
			'virtualDom': null,
			'testTextContent': '',
			'selectedVNode': null,
            'selectedVNodes': [],
            'bodyPrefix': '',
			'bodySuffix': '</html>',
			'isWholeDocument': true,
			'visibleSelection': false
		};

		// this.stack = [];
		// this.coercionTypeTextStack = [];

		this.coercionType = coercionType;

		this.patch = this.initSnabbdom(); // patch function from snabbdom

		this.selectedElementCss = this._setSelectedElementCss();
		
		/**
		 * In Outlook replies the original message is marked with this string
		 * either on name attribute in case of anchor tags
		 * or on style attributes for span tags
		 */
		this.originalMessageNeedle = '_MailOriginal';  
	}

	_setSelectedElementCss() {
		return this.state.visibleSelection ? 'border: 3px dotted #419641;' : ''; // this is the css that will be applied on elements that are selected
	}

	setVisibleSelection(bool) {
		this.state.visibleSelection = bool;
		this.selectedElementCss = this._setSelectedElementCss();
	}

	toggleVisibleSelection() {
		this.state.visibleSelection = !this.state.visibleSelection;
		this.selectedElementCss = this._setSelectedElementCss();
	}
 
	// isInitialized() {
    //     return this.virtualDom != null && this.rawHtml != null && this.rawHtml.length > 0 ? true : false;  
	// }
	
	spanFactory(textContent) {
		let n = h('span',{class:{grammarsoft_inserted:true}},textContent);
		// if (n.data == null) n.data = {};
		// if (n.data.attrs == null) n.data.attrs = {};
		// n.data.attrs['data-inserted'] = '1';
		return n;
	}

	// addCoercionTypeTextToStack(text) {
	// 	this.coercionTypeTextStack.push({t:text,l:text.length});
	// 	console.info('CoercionTypeTextStack',this.coercionTypeTextStack);
	// }

	getCoercionType() {
        return this.coercionType;
	}
	
	setStateTextContent(textContent) {
		this.state.textContent = textContent;
		// console.info('setStateTextContent length', this.state.textContent.length);
		// console.info('setStateTextContent', this.state.textContent);

	}

	_sanitizeGarbageHtml(html,isWholeDocument = true) {
		if(isWholeDocument) {
			// https://github.com/cure53/DOMPurify
			let clean = DOMPurify.sanitize(html, {
				WHOLE_DOCUMENT: true,
				ADD_TAGS: ['o:p']
			});
			// WHOLE_DOCUMENT: true, adds back <html><head></head> which we dont want
			return this._removeHtmlAndHeadTags(clean);
		} else {
			// return DOMPurify.sanitize(html, {
			// 				WHOLE_DOCUMENT: false,
			// 				ADD_TAGS: ['o:p']
			// });
			return html;
		}
	}

	replace(word,rpl) {
		let vnode = this.state.selectedVNode;
		console.info('replace', vnode, word, rpl);
		// word can be a single word or a sentence
		// rpl is what it will be replaced with
		// vnode can be a text element ie vnode.text != undefined or it can be a vnode containing children vnodes, 
		let words = word.split(' ');
		let wordsLength = words.length

		if (wordsLength == 1) {
			if (vnode.text != null) {
				vnode.text = vnode.text.replace(new RegExp(word, 'i'), rpl);
				console.info('replace wordsLength 1',vnode);
			}
		}

		if (wordsLength > 1) {
			// console.info('wordslength > 1');
			let replacements = rpl.split(' ');
			let replacementsLength = replacements.length;
			if (wordsLength == replacementsLength) {
				for (let i = 0; i < wordsLength; i++) {
					this.replaceTextInVnodes(vnode, words[i], replacements[i]);
				}
			} else {
				// console.info('replace', 'wordsLength != replacementsLength');
				vnode.text = vnode.text.replace(new RegExp('\\b'+word, 'i'), rpl);
			}


		}
		console.info('replace after',vnode.text);
		this.removeAllSelectedCSS(vnode);
		return vnode
    }

    insertText(word,rpl) {
        this.replace(word,rpl);
	}
	
	_removeHtmlAndHeadTags(html) {
		let headEndTag = '</head>';
		let pos = html.search(headEndTag);
		if(pos !== -1) {
			pos += headEndTag.length;
			let temp = html.substring(pos);
			let bodyEndTag = '</body>';
			let bodyEndTagPos = temp.search(bodyEndTag);
			if(bodyEndTagPos !== -1) {
				bodyEndTagPos += bodyEndTag.length;
				return temp.substring(0,bodyEndTagPos);
			}
		}
	}
    
    _getBodyStringPrefix(html) {
        let needle = '</head>';
        let needleLength  = needle.length;
        let pos = html.search(needle);
        if(pos !== -1) {
            pos += needle.length;
            let preBody = html.substring(0,pos);
			this.state.bodyPrefix = preBody;
			// console.info('_getBodyStringPrefix bodyPrefix',this.state.bodyPrefix)
			let body = html.substring(pos);
			// remove whatever comes after </body>
			let bodyEndTag = '</body>'
			let bodyEndTagLength = bodyEndTag.length;
			let bodyEndTagPos = body.search(bodyEndTag);
			if(bodyEndTagPos !== -1) {
				bodyEndTagPos += bodyEndTagLength; 
			}
			body = body.substring(0,bodyEndTagPos);
			return body;
        } else {
			this.state.isWholeDocument = false;
			return html; 
		}
	}

	// deSpanTest(content) {
	// 	this.state.isWholeDocument = false; 
	// 	console.info('deSpanTest hi!');
	// 	let clean = this._sanitizeGarbageHtml(content,this.state.isWholeDocument);
	// 	this.state.rawHtml = clean;
	// 	this.createVirtualDomFromRawHtml();
	// 	this.deSpanVirtualDom();
	// 	console.info('virtualDom',this.state.virtualDom);
	// 	console.info(this.getContent());
	// }
	
	setStateHtmlContent(htmlContent,reload = false) {
		this.state.isWholeDocument = true;
		let bodyContent = this._getBodyStringPrefix(htmlContent);
		let clean = this._sanitizeGarbageHtml(bodyContent,this.state.isWholeDocument);
		this.state.rawHtml = clean;
		this.createVirtualDomFromRawHtml();
		// console.info('virtualDom',this.state.virtualDom);
		// this.deSpanVirtualDom();
		// console.info('virtualDom',this.state.virtualDom);

		this.extractTextFromVirtualDom();

		if(reload) {
			this.findSelectedVnode();
		} else {
			this.removeAllSelectedCSS();
		}
	}

	setContent(htmlContent,reload = false) {
		this.setStateHtmlContent(htmlContent,reload);
	}

	// setTextContent(text) {
	// 	this.state.textContent = text;
	// 	this.state.textContent = this.state.textContent.replace(/^(\r\n|\n|\r)/ugm,''); // remove line endings at the beginning of the string
	// 	this.state.textContent = this.state.textContent.replace(/(\r\n|\n|\r)$/ugm,''); // remove line endings at the end of the string
	// 	this.addCoercionTypeTextToStack(this.state.textContent); 

	// }

	// setStateSelectionHtmlContent(selectionHtmlContent) {
	// 	let clean = this._sanitizeGarbageHtml(selectionHtmlContent);
	// }

	createVirtualDomFromRawHtml() {
		this.state.virtualDom = html([this.state.rawHtml]);
		if(this.state.isWholeDocument) {
			this.state.virtualDom = this._findBodyVnode(this.state.virtualDom);
		}
	}

	_findHeadVnode(vnode) {
		if (typeof vnode !== 'undefined') {

			if (typeof vnode.children !== 'undefined' && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						let res = this._findHeadVnode(vnode.children[i])
						if (res) return res;
					}
				}
			}

			if (typeof vnode.sel !== 'undefined' && vnode.sel == 'head') {
				return vnode;
			}
			return false;
		}
		return false
	}

	_findBodyVnode(vnode) {
		if (vnode != null) {

			if (vnode.sel != null && vnode.sel == 'body') {
				return vnode;
			}

			if (vnode.children != null && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						let res = this._findBodyVnode(vnode.children[i])
						if (res) return res;
					}
				}
			}

			return false;
		}
		return false
	}

	/**
	 * 
	 * @param {*} txtObj 
	 * let txtObj = {prefix: '',suffix: '',word: '',t; ''}
	 */

	findElement(txtObj) {
		console.info('findElement txtObj',txtObj);

		if (this.state.selectedVNode) {
			this.state.selectedVNode = this._removeSelectedElementCss(this.state.selectedVNode);
			this.state.selectedVNode = null;
		}

		let vnode = null;
		if(txtObj != null && txtObj.word != null) {			
			vnode = this.findVirtualDomVnodeContainingText(this.state.virtualDom, txtObj, true);
			console.info('findElement findVirtualDomVnodeContainingText',vnode);

			if(vnode != null) {
				if(vnode.text != null && vnode.text == txtObj.word) {
					vnode = this._insertSelectedElementCss(vnode);
					this.state.selectedVNode = vnode;
				} else {
					console.info('splitting vnode',vnode.text,txtObj.word);
					vnode = this._splitVnodeAndInsertSelectedElementCss(vnode, txtObj);
				}
			} else {
				let words = txtObj.word.split(' ');
				if (words.length > 1) {
					console.info('txtObj.word is a sentence', txtObj, words);
					let firstWordTxtObj = {
						...txtObj
					}; // cloning obj
					firstWordTxtObj.word = words.shift(); // Array.prototype.shift
					firstWordTxtObj.suffix = words.join(' ') + ' ' + firstWordTxtObj.suffix
					let item = this.findVirtualDomVnodeContainingTextWithPath(this.state.virtualDom, firstWordTxtObj, '', [],true);
					console.info('findVirtualDomVnodeContainingTextWithPath returned',item.path);
					item.path = item.path.reverse();
					item.path.pop();
					item.path.pop();
					let found = this._searchForTextByWideningPath(txtObj, this.state.virtualDom, item.path);
					console.info('found vnode',found);
					if (found) {
						this.state.selectedVNode = found;
						vnode = found;
					}
				}
			}
		}
		return this.state.selectedVNode != null ? true : false;
	}



	_searchForTextByWideningPath(txtObj, vnode, path) {
		let haystack = '';
		while (haystack.length < txtObj.word.length && path.length >= 2) {
			let foundByPath = this._findByPath(vnode, path);
			// console.info('foundByPath', path, foundByPath);
			this.state.recursiveText = [];
			this._getVnodeTextRecursive(foundByPath);
			let haystack = this.state.recursiveText.join('');
			// console.info(haystack, '---', txtObj.word);
			if (haystack == txtObj.word) {
				// console.info('haystack equals txtObj.word');
				return foundByPath;
			} else {
				let pos = haystack.search(new RegExp(txtObj.word,'i'));
				if(pos !== -1) {
					// console.info('txtObj.word is in haystack');
					// find the vnode siblings containing the needle and encapsulate them in a new vnode
					let siblingNodes = this._findNeedleInVnodeSiblings(foundByPath,txtObj.word,pos,'');
					console.info('the sibling wrappers',siblingNodes);
					let replacementVnode = this._joinNodesInSpanVnode(siblingNodes);
					console.info('joined siblings',replacementVnode);


					if(replacementVnode.text != null && replacementVnode.text == txtObj.word) {
						replacementVnode = this._insertSelectedElementCss(replacementVnode);
						this.state.selectedVNode = replacementVnode;
					} else {
						replacementVnode = this._splitVnodeAndInsertSelectedElementCss(replacementVnode, txtObj);
						console.info('splitting vnode',replacementVnode);

					}


					foundByPath = this._findSiblingVnodesAndReplaceInDom(foundByPath,siblingNodes,replacementVnode)
					
					// let node = this._wrapNodesInSpanVnode(siblingNodes);
					// console.info('wrapped vnode',node);

					return replacementVnode;

					// return wrappedVnode;
				}
			}
			path.pop();
			path.pop();
		}
		return false;
	}

	_findSiblingVnodesAndReplaceInDom(vnode,siblings,replacementNode) {
		if(vnode != null && vnode.children != null && Array.isArray(vnode.children)) {
			// console.info('_findSiblingVnodesAndReplaceInDom children before',vnode.children);

			let node = null;
			// let splicePos = -1;
			while(siblings != null && Array.isArray(siblings) && siblings.length > 0) {
				node = siblings.pop();
				// let childrenLength = vnode.children.length;
				for(let i = vnode.children.length-1; i >= 0; i--) {
					if(vnode.children[i] == node) {
						let rem = vnode.children.splice(i,1);
						console.info('removed child '+i,rem);
						if(siblings.length == 0) {
							if(!Array.isArray(replacementNode)) {
								vnode.children[i] = replacementNode;
							} else {
								vnode.children.push(...replacementNode);
							}
							// console.info('inserted'+i,replacementNode);
							break;
						}
						// splicePos = i;
					}
				}
			}
		}
		// console.info('_findSiblingVnodesAndReplaceInDom children after',vnode.children);
		return vnode
	}

	_joinNodesInSpanVnode(nodes) {
		let text = '';
		if(nodes != null && Array.isArray(nodes) && nodes.length > 1) {
			for(let i = 0 ; i < nodes.length; i++) {
				if(nodes[i].text != null) {
					text += nodes[i].text;
				}
			}
			let vnode = this.spanFactory(text);
			return vnode;
		} else {
			return nodes.pop();
		}
	}

	_wrapNodesInSpanVnode(nodes) {
		// faulty
		if(nodes != null && Array.isArray(nodes) && nodes.length > 1) {
			let vnode = this.spanFactory('');
			vnode.children = nodes;
			return vnode;
		}
	}

	_findNeedleInVnodeSiblings(vnode,needle,needlePos) {
		// console.info('_findNeedleInVnodeSiblings',vnode,needle,needlePos);
		let tmpStr = vnode.text != null ? vnode.text : '';
		let foundSiblingNodeText = '';
		let siblingNodes = [];
		if(vnode.children != null && Array.isArray(vnode.children)) {
			let childrenLength = vnode.children.length;
			for(let i = 0; i < childrenLength && foundSiblingNodeText.length <= needle.length; i++) {
				if(vnode.children[i].text != null) {
					tmpStr += vnode.children[i].text;
					// console.info('tmpStr.length needlePos',tmpStr.length,needlePos);
					if(tmpStr.length > needlePos) {
						foundSiblingNodeText += vnode.children[i].text
						siblingNodes.push(vnode.children[i]);
					}
				}
			}
		}
		return siblingNodes;
	}

	_getVnodeTextRecursive(vnode) {
		if (typeof vnode !== 'undefined') {
			if (typeof vnode.children !== 'undefined' && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._getVnodeTextRecursive(vnode.children[i])
					}
				}
			}

			if (typeof vnode.text !== 'undefined') {
				return this.state.recursiveText.push(vnode.text);
			}
		}
	}


	_findByPath(obj, path) {
		return objectPath.get(obj, path);
	}

	findVirtualDomVnodeContainingTextWithPath(vnode, txtObj, txtContent, path,reset) {
        // console.info('findVirtualDomVnodeContainingTextWithPath txtObj',txtObj)
        if(reset) {
            this.state.testTextContent = '';
        }
		if (vnode != null) {
			// console.info(vnode.sel);
			if (vnode.children != null && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {

						// console.info('path',path);
						let res = this.findVirtualDomVnodeContainingTextWithPath(vnode.children[i], txtObj, txtContent, path, false)
						if (res) {
							res.path.push('' + i + '');
							res.path.push('children');
							// console.info('returning path',res.path);
							return res;
						}
					}
				}
			}

			if (vnode.text != null) {
                this.state.testTextContent += vnode.text;
                // console.info('findVirtualDomVnodeContainingTextWithPath',this.state.testTextContent.length,txtObj.prefix.length);
				if (this.state.testTextContent.length >= txtObj.prefix.length && vnode.text.search(new RegExp(txtObj.word, 'i')) !== -1) {
                    // console.info('findVirtualDomVnodeContainingTextWithPath found word',txtObj.word);
					return {
						vnode: vnode,
						// txtContent: txtContent,
						path: path
					};
				}
			}


			return false;
		}
		return false
	}

	_splitVnodeAndInsertSelectedElementCss(vnode, txtObj) {
		// console.info('_splitVnodeAndInsertSelectedElementCss vnode',vnode);
		// console.info('_splitVnodeAndInsertSelectedElementCss txtObj',txtObj);
		if (vnode != null && vnode.text != null && vnode.text.length > 0) {

			// vnode.text = vnode.text.normalize();
			// txtObj.t = txtObj.t.normalize();
			let wordPos = -1;
			let vNodeTextPos = txtObj.t.indexOf(vnode.text);
			if(vNodeTextPos === -1) {
				console.info('_splitVnodeAndInsertSelectedElementCss vnode.text not found');
				console.info('_splitVnodeAndInsertSelectedElementCss vnode',vnode);
				console.info('_splitVnodeAndInsertSelectedElementCss txtObj',txtObj);
			} else {
				let indices = this._getIndicesOf(txtObj.word,vnode.text,false);
				// console.info('indices',indices);
				let indicesLength = indices.length;
				for(let i = 0; i < indicesLength && wordPos === -1;i++) {
					if(vNodeTextPos + indices[i] == txtObj.prefix.length) {
						wordPos = indices[i];
						console.info('found wordPos',wordPos);
					}
				}
			}
			let pos = wordPos;
			// let pos = vnode.text.search(new RegExp('\\b'+txtObj.word, 'i'));
			if (pos !== -1) {
                let children = [];

                let prefix = vnode.text.substring(0, pos);
                if(prefix.length > 0) {
                    children.push(this.spanFactory(prefix));
                }
                
                let selectedNode = this._insertSelectedElementCss(this.spanFactory(txtObj.word));
                children.push(selectedNode);
				this.state.selectedVNode = selectedNode;

                let suffix = vnode.text.substring(pos + txtObj.word.length);
                if(suffix.length > 0) {
                    children.push(this.spanFactory(suffix));
                }

                vnode.sel = 'span'
				vnode.text = '';
				vnode.children = children;
                console.info('vnode after split',vnode);
				return vnode;   
			}
		}
		return false;
	}

	/**
	 * deSpanVirtualdom is a function to remove/merge span elements that we have inserted ourselves 
	 * in order to be able to mark/select the exact text that is to be corrected
	 * 
	 * It rather quickly become a mess of nested spans, probably as many nesting levels as there have been corrections
	 * 
	 * So here we kind of de-nest and merge spans if at all possible
	 */
	// deSpanVirtualDom() {
	// 	this._deSpanVirtualDom(this.state.virtualDom);
	// }


	// _deSpanVirtualDom(vnode) {
	// 	if (vnode != null) {
	// 		if (vnode.children != null && Array.isArray(vnode.children)) {
	// 			let arrayLength = vnode.children.length;
	// 			let allChildrenAreSpan = true;
	// 			let isPartOfActiveCorrection = false;
	// 			let collectedText = '';
	// 			let grandChildren = null;

	// 			for (let i = 0; i < arrayLength; i++) {
	// 				if(typeof vnode.children[i].sel === 'undefined') continue;
	// 				collectedText += this._deSpanVirtualDom(vnode.children[i]);
	// 			}


	// 			for (let i = 0; i < arrayLength; i++) {
	// 				if(typeof vnode.children[i].sel === 'undefined') continue;
	// 				if(vnode.children[i].sel != 'span') allChildrenAreSpan = false;
					
	// 				if(vnode.children[i].data != null && 
	// 					vnode.children[i].data.attrs != null && 
	// 					vnode.children[i].data.attrs['data-grammarsoft'] != null) {
	// 						isPartOfActiveCorrection = true;
	// 				}
	// 				if(vnode.children[i].text != null && vnode.children[i].sel != null) collectedText += vnode.children[i].text;

	// 				if(vnode.children[i].children != null && Array.isArray(vnode.children[i].children)) {
	// 					grandChildren = vnode.children[i].children;
	// 				}
	// 			}

	// 			if(allChildrenAreSpan && !isPartOfActiveCorrection && collectedText.length > 0 && grandChildren != null && Array.isArray(grandChildren)) {
	// 				console.info(vnode);
	// 				console.info(collectedText);
	// 				console.info(grandChildren);
	// 				vnode.text += collectedText;
	// 				vnode.children = grandChildren;
	// 			} 
	// 		}
	// 		return vnode.text;
	// 	}
	// 	return;


	// 	// if (vnode != null) {
	// 	// 	if (vnode.children != null && Array.isArray(vnode.children)) {

	// 	// 		let arrayLength = vnode.children.length;
	// 	// 		for (let i = 0; i < arrayLength; i++) {
	// 	// 			// && allChildrenAreSpan && !isPartOfActiveCorrection
	// 	// 			this._deSpanVirtualDom(vnode.children[i]);


	// 	// 		}


	// 	// 		// else {
	// 	// 		// 	if(grandChildren != null && Array.isArray(grandChildren)) {
	// 	// 		// 		let grandChildrenLength = grandChildren.length;
	// 	// 		// 		for(let i = 0; i < grandChildrenLength; i++) {
	// 	// 		// 			this._deSpanVirtualDom(grandChildren[i]);
	// 	// 		// 		}
	// 	// 		// 	}
	// 	// 		// }
	// 	// 	}
	// 	// }
	// }


	_getIndicesOf(searchStr, str, caseSensitive) {
		var searchStrLen = searchStr.length;
		if (searchStrLen == 0) {
			return [];
		}
		var startIndex = 0, index, indices = [];
		if (!caseSensitive) {
			str = str.toLowerCase();
			searchStr = searchStr.toLowerCase();
		}
		while ((index = str.indexOf(searchStr, startIndex)) > -1) {
			indices.push(index);
			startIndex = index + searchStrLen;
		}
		return indices;
	}


	_insertSelectedElementCss(vnode) {
		// console.info('_insertSelectedElementCss',vnode);
		if (typeof vnode !== 'undefined') {
			if (typeof vnode.data === 'undefined') vnode.data = {};
			if (typeof vnode.data.attrs === 'undefined') vnode.data.attrs = {};

			if (vnode.data.attrs.style != null) {
				let pos = vnode.data.attrs.style.search(new RegExp(this.selectedElementCss, 'i'));
				if (pos === -1) {
					if (vnode.data.attrs.style.length > 0) {
						// check if style string is ending in ;
						if (vnode.data.attrs.style.charAt(vnode.data.attrs.style.length - 1) != ';') {
							vnode.data.attrs.style = vnode.data.attrs.style + ';';
						}
					} else {
						vnode.data.attrs.style = this.selectedElementCss;
						vnode.data.attrs['data-grammarsoft'] = 'selected';
					}
					vnode.data.attrs.style = vnode.data.attrs.style + this.selectedElementCss;
					vnode.data.attrs['data-grammarsoft'] = 'selected';

				}
			} else {
				vnode.data.attrs.style = this.selectedElementCss;
				vnode.data.attrs['data-grammarsoft'] = 'selected';

			}
			// console.info('insertSelectedElementCss', vnode);
			this.state.selectedVNode = vnode;
			return vnode;
		}
		return false;
	}

	_removeSelectedElementCss(vnode) {
		console.info('_removeSelectedElementCss', vnode);
		if (typeof vnode !== 'undefined' && typeof vnode.data !== 'undefined' && typeof vnode.data.attrs !== 'undefined' && typeof vnode.data.attrs.style !== 'undefined' && vnode.data.attrs['class'] != null && vnode.data.attrs['class'].indexOf('grammarsoft_inserted' !== -1)) {
			if(vnode.data.attrs.style != '') { 
				let pos = vnode.data.attrs.style.indexOf(this.state.selectedElementCss);
				if (pos === -1) {
					// console.info('_removeSelectedElementCss', 'css not found');
					/**
					 * Due to MSO sometimes transforming CSS properties to some kind of MSO 
					 * proprietary CSS alternatives we can not just search for the CSS that we set earlier
					 * ie looking for this.selectedElementCss border: 2px solid dash 
					 * might have become mso-border-alt: solid dash 1.5pt
					 * https://cm.engineering/fixing-bugs-with-outlook-specific-css-f4b8ae5be4f4
					 */
					let needle = 'border';
					let cssParts = vnode.data.attrs.style.split(';');
					// backwards loop in order for splicing array not having effect on the index
					// console.info('_removeSelectedElementCss cssParts',cssParts);
					for (let i = cssParts.length-1; i >= 0; i--) {
						// console.info('_removeSelectedElementCss i',i);
						if(cssParts[i] != null) {
							if (cssParts[i].search(new RegExp(needle, 'i')) !== -1) {
								// console.info('_removeSelectedElementCss nuking', cssParts[i]);
								cssParts.splice(i, 1);
							}
						}

					}
					// console.info('_removeSelectedElementCss cssParts',cssParts);
					vnode.data.attrs.style = cssParts.join(';');
					// console.info('_removeSelectedElementCss style', vnode.data.attrs.style);
					delete vnode.data.attrs['data-grammarsoft'];
					return vnode;
				} else {
					if (vnode.data.attrs.style == this.selectedElementCss) {
						vnode.data.attrs.style = '';
					} else {
						vnode.data.attrs.style = vnode.data.attrs.style.replace(this.selectedElementCss, '');

					}
					delete vnode.data.attrs['data-grammarsoft'];

				}
				return vnode;
			} else {
				delete vnode.data.attrs['data-grammarsoft'];
			}
		}
	}

	findSelectedVnode() {
		this._findSelectedVnode(this.state.virtualDom);
		console.info('findSelectedVnode',this.state.selectedVNode);
		return this.state.selectedVNode
	}

	_findSelectedVnode(vnode) {
		if (typeof vnode !== 'undefined') {

			if (typeof vnode.children !== 'undefined' && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._findSelectedVnode(vnode.children[i])
					}
				}
			}

			if (typeof vnode.data !== 'undefined' && typeof vnode.data.attrs !== 'undefined' && typeof vnode.data.attrs['data-grammarsoft'] !== 'undefined' && vnode.data.attrs['data-grammarsoft'] == 'selected') {
				this.state.selectedVNode = vnode;
			}
			return false;
		}
		return false;
	}


	_findSelectedVnodes(vnode) {
		if (typeof vnode !== 'undefined') {

			if (typeof vnode.children !== 'undefined' && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._findSelectedVnodes(vnode.children[i])
					}
				}
			}

			if (typeof vnode.data !== 'undefined' && typeof vnode.data.attrs !== 'undefined' && typeof vnode.data.attrs['data-grammarsoft'] !== 'undefined' && vnode.data.attrs['data-grammarsoft'] == 'selected') {
				this.state.selectedVNodes.push(vnode);
			}
			return false;
		}
		return false;
	}

	removeAllSelectedCSS() {
		this.state.selectedVNodes = [];
		this._findSelectedVnodes(this.state.virtualDom);
		console.info('removeAllSelectedCSS', this.state.selectedVNodes);
		var arrayLength = this.state.selectedVNodes.length;
		if (arrayLength > 0) {
			for (var i = 0; i < arrayLength; i++) {
				if (typeof this.state.selectedVNodes !== 'undefined' && typeof this.state.selectedVNodes[i] !== 'undefined') {
					let vnode = this._removeSelectedElementCss(this.state.selectedVNodes[i]);
				}
			}
		}
		this.state.selectedVNode = undefined;
		this.state.selectedVNodes = [];
	}

	// removeSelectedElementCSS() {
	// 	this.findSelectedVnode();
	// 	console.info('removeSelectedElementCSS vnode pre',this.state.selectedVNode);
	// 	let vnode = this._removeSelectedElementCss(this.state.selectedVNode);
	// 	console.info('removeSelectedElementCSS vnode post',this.state.selectedVNode);
	// 	return vnode;
	// }

	_isOriginalMessage(vnode) {
		if(vnode.data != null && vnode.data.attrs != null && vnode.data.attrs.style != null && vnode.data.attrs.style.search(this.originalMessageNeedle) !== -1) {
			// ignore vnode as it is the original message that we are replying on
			return true;
		}

		if(vnode.data != null && vnode.data.attrs != null && vnode.data.attrs.name != null && vnode.data.attrs.name.search(this.originalMessageNeedle) !== -1) {
			// ignore vnode as it is the original message that we are replying on
			return true;
		}
		return false;
	}

	findVirtualDomVnodeContainingText(vnode, txtObj, reset) {
		if (reset) {
			this.state.testTextContent = '';
		}

		if (vnode != null) {

			if(this._isOriginalMessage(vnode)) return; // ignoring vnode as it part of the original message and not the reply

			if (vnode.children != null && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						let res = this.findVirtualDomVnodeContainingText(vnode.children[i], txtObj, false)
						if (res) return res;
					}
				}
			}



			if (vnode.text != null) {
                this.state.testTextContent += vnode.text;
				if (this.state.testTextContent.length > txtObj.prefix.length && vnode.text.search(new RegExp(txtObj.word, 'i')) !== -1) {
					this.state.testTextContent = '';
					return vnode;
				}
			}

			if(vnode.sel != null && vnode.sel == 'o:p') {
                this.state.testTextContent += "\n";
            }
		}
	}

	removeCurrentSelection(word) {
		this._removeCurrentSelection(this.state.virtualDom,word);
	}

	_removeCurrentSelection(vnode,word) {
		if (vnode != null && vnode.sel != null) {

			if (vnode.children != null && Array.isArray(vnode.children)) {				
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._removeCurrentSelection(vnode.children[i],word);
					}
				}
			}
			
			if(vnode.text != null && vnode.text == word) {
				this._removeSelectedElementCss(vnode);
			}

		}
	}

	mergeAllGrammarSoftInsertedSpanElementsInVirtualDom() {
		this._mergeAllGrammarSoftInsertedSpanElementsInVirtualDom(this.state.virtualDom);
	}

	_mergeAllGrammarSoftInsertedSpanElementsInVirtualDom(vnode) {
		if (vnode != null) {

			if (vnode.children != null && Array.isArray(vnode.children)) {				
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._mergeAllGrammarSoftInsertedSpanElementsInVirtualDom(vnode.children[i], false);
					}
				}
			}
			
			vnode = this._mergeChildrenIntoCurrentVnodeIncludingCurrentSelection(vnode);

		}
	}

    extractTextFromVirtualDom() {
		this._extractTextFromVirtualDom(this.state.virtualDom,true);
		// this.state.textContent = this.state.textContent.trim();

		this.state.textContent = this.state.textContent.replace(/^\n+/ugm,''); // remove line endings at the beginning of the string
		this.state.textContent = this.state.textContent.replace(/\n+$/ugm,''); // remove line endings at the end of the string

		// this.stack.push({l:this.state.textContent.length,t:this.state.textContent});
		// this.stack.push({l2:this.state.textContent2.length,t2:this.state.textContent2}); // DEBUGGING REMOVE
		// console.info('stack',this.stack);
		// console.info('extractTextFromVirtualDom',this.state.textContent);
	}

	_getGrandChildren(children) {
		let grandChildren = null;
		if (children != null && Array.isArray(children)) {
			let childrenLength = children.length;
			for (var i = 0; i < childrenLength && grandChildren == null; i++) {
				if(children[i].sel == null) continue;
				if(children[i].children != null && Array.isArray(children[i].children)) {
					grandChildren = children[i].children;
				}
			}
		}
		return grandChildren;
	}

	_getChildrensContent(children) {
		let content = '';
		if (children != null && Array.isArray(children)) {
			let childrenLength = children.length;
			for (var i = 0; i < childrenLength; i++) {
				if(children[i].sel == null) continue;
				if(children[i].text != null) {
					content += children[i].text;
				}
			}
		}
		return content;
	}

	_isChildrenMergeable(children) {
		let mergeable = false;
		if (children != null && Array.isArray(children)) {
			let childrenLength = children.length;
			let allSpan = true;
			let isCurrentSelection = false;
			// let childrenCount = 0;
			let grammarsoftInserted = true;
			for (var i = 0; i < childrenLength && allSpan && !isCurrentSelection && grammarsoftInserted; i++) {
				if(children[i].sel == null) continue;

				// childrenCount++;
				
				if(children[i].data == null || children[i].data.attrs == null || children[i].data.['class'] == null || children[i].data['class'].indexOf('grammarsoft_inserted') === -1) {
					grammarsoftInserted = false;
				}

				if(children[i].sel != 'span') {
					// console.info('allSpan false');
					allSpan = false;
				}

				if(children[i].data != null && children[i].data.attrs != null && children[i].data.attrs['data-grammarsoft'] != null && children[i].data.attrs['data-grammarsoft'] == 'selected') {
					// console.info('isCurrentSelection data-grammarsoft true');
					isCurrentSelection = true;
				}

				if(children[i].data != null && children[i].data.attrs != null && children[i].data.attrs['style'] != null && children[i].data.attrs['style'].indexOf('border') !== -1 && children[i].data['class'] != null && children[i].data['class'].indexOf('grammarsoft_inserted') !== -1) {
					// console.info('isCurrentSelection border true');
					isCurrentSelection = true;
				}
			}
			// && childrenCount == 3
			if(allSpan && !isCurrentSelection && grammarsoftInserted) {
				mergeable = true;
				console.info('_isChildrenMergeable',mergeable);
				console.info('mergable children',children);
			}
		}
		return mergeable;
	}

	_isChildrenMergeableIncludingCurrentSelection(children) {
		let mergeable = false;
		if (children != null && Array.isArray(children)) {
			let childrenLength = children.length;
			let allSpan = true;
			let grammarsoftInserted = true;
			for (var i = 0; i < childrenLength && allSpan && grammarsoftInserted; i++) {
				if(children[i].sel == null) continue;
				
				if(children[i].data == null || children[i].data.attrs == null || children[i].data.attrs['class'] == null || children[i].data.attrs['class'].indexOf('grammarsoft_inserted') === -1) {
					grammarsoftInserted = false;
				}

				if(children[i].sel != 'span') {
					// console.info('allSpan false');
					allSpan = false;
				}
			}
			// && childrenCount == 3
			if(allSpan && grammarsoftInserted) {
				mergeable = true;
			}
		}
		return mergeable;
	}

	_mergeChildrenIntoCurrentVnodeIncludingCurrentSelection(vnode) {
		// console.info('_mergeChildrenIntoCurrentVnodeIfNeeded',vnode);
		if(this._isChildrenMergeableIncludingCurrentSelection(vnode.children)) { // :bool
			let grandChildren = this._getGrandChildren(vnode.children) // :Array
			// console.info('grandChildren',grandChildren);
			let childrensContent = this._getChildrensContent(vnode.children) // :String
			// console.info('childrensContent',childrensContent);
			vnode.children = grandChildren;
			vnode.text = childrensContent;
			console.info('_mergeChildrenIntoCurrentVnodeIncludingCurrentSelection post merge',vnode);
		}
		return vnode;
	}

	_mergeChildrenIntoCurrentVnodeIfNeeded(vnode) {
		// console.info('_mergeChildrenIntoCurrentVnodeIfNeeded',vnode);
		if(this._isChildrenMergeable(vnode.children)) { // :bool
			let grandChildren = this._getGrandChildren(vnode.children) // :Array
			// console.info('grandChildren',grandChildren);
			let childrensContent = this._getChildrensContent(vnode.children) // :String
			// console.info('childrensContent',childrensContent);
			vnode.children = grandChildren;
			vnode.text = childrensContent;
			console.info('_mergeChildrenIntoCurrentVnodeIfNeeded post merge',vnode);
		}
		return vnode;
	}

	_extractTextFromVirtualDom(vnode,reset) {
        if (reset) {
			this.state.textContent = '';
		}

		if (vnode != null) {

			if(this._isOriginalMessage(vnode)) { 
				// ignoring vnode as it part of the original message and not the reply
				// but still need to decode html entities
				this._decodeHTMLEntitiesOnVirtualDom(vnode);
				return; 
			}

			vnode = this._mergeChildrenIntoCurrentVnodeIfNeeded(vnode);

			if (vnode.children != null && Array.isArray(vnode.children)) {				
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._extractTextFromVirtualDom(vnode.children[i], false);
					}
				}
			}
			
			if (vnode.text != null) {
				vnode.text = htmlentities.decode(vnode.text);
				vnode.text = this._removeLineEndingChars(vnode.text);
                this.state.textContent += vnode.text;
            }
            
            if(vnode.sel != null && vnode.sel == 'o:p') {
                this.state.textContent += "\n";
            }
		}
    }

	_removeLineEndingChars(str) {
		str = str.replace(/(\w)\n(\w)/ugm,'$1 $2');
		str = str.replace(/(\w)\n$/ugm,'$1 ');
		str = str.replace(/^\n(\w)/ugm,' $1');
		// str = str.replace(/(\w )\n/ugm,'$1');
		// str = str.replace(/\n( \w)/ugm,'$1');
		str = str.replace(/([.,;:!?])\n$/ugm,'$1 ');
		str = str.replace(/^\n([.,;:!?])/ugm,' $1');
		str = str.replace(/\n( )/ugm,'$1'); 
		str = str.replace(/( )\n/ugm,'$1');
		str = str.replace(/\n/ugm,'');

		return str;
		// str = str.replace(/\b(\r\n|\n|\r)/ugm,''); // replace remaining line endings with space
		// str = str.replace(/(\r\n|\n|\r)\b/ugm,''); // replace remaining line endings with space
		// str = str.replace(/[.,;:!?](\r\n|\n|\r)/ugm,'')
		// return str;
	}
	
	_decodeHTMLEntitiesOnVirtualDom(vnode) {
		if (vnode != null) {

			if (vnode.children != null && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						this._decodeHTMLEntitiesOnVirtualDom(vnode.children[i]);
					}
				}
			}

			if (vnode.text != null) {
				vnode.text = htmlentities.decode(vnode.text);
            }
		}
	}



	replaceTextInVnodes(vnode, word, replacement) {
		if (typeof vnode !== 'undefined') {
			if (typeof vnode.children !== 'undefined' && Array.isArray(vnode.children)) {
				var arrayLength = vnode.children.length;
				if (arrayLength > 0) {
					for (var i = 0; i < arrayLength; i++) {
						let res = this.replaceTextInVnodes(vnode.children[i], word, replacement)
						if (res) return res;
					}
				}
			}

			if (typeof vnode.text !== 'undefined') {
				if (vnode.text.search(new RegExp(word, 'i')) !== -1) {
					vnode.text = vnode.text.replace(word, replacement);
					return vnode;
				}
			}
		}
	}

	virtualDomToHtml() {
		if(this.state.isWholeDocument) {
        	let bodyHtml = toHTML(this._findBodyVnode(this.state.virtualDom));
			return this.state.bodyPrefix + bodyHtml + this.state.bodySuffix;
		} else {
			return toHTML(this.state.virtualDom)
		}
	}

	getContent() {
		return this.virtualDomToHtml();
	}

	getState() {
		return this.state;
    }
    
    getTextContent() {
        return this.state.textContent
    }


	initSnabbdom() {
		return init([ // Init patch function with chosen modules
			classModule, // makes it easy to toggle classes
			// propsModule, // for setting properties on DOM elements
			datasetModule,
			// styleModule, // handles styling on elements with support for animations
			// eventListenersModule, // attaches event listeners
		]);
	}
}
