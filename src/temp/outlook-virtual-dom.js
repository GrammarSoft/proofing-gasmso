import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
import htmlToVdom from 'html-to-vdom';

export class OutlookDom {
  
    constructor(html) {

    }

    set workingDom(html) {
        this.workingDom = OutlookDom.convertHTML(html);
        console.info('OutlookDom set workingDom',this.workingDom);
    }

    diffWithWorkingDom(html) {
        let dom = OutlookDom.convertHTML(html);
        let patches = diff(this.workingDom,dom);
        return patches;
    }

    patchWorkingDom(patches) {
        this.workingDom = patch(this.workingDom,patches);
    }

    isDifferentFromWorkingDom(html) {
        let patches = this.diffWithWorkingDom(html);
        return OutlookDom.hasPatches(patches);
        // let indeces = OutlookDom.patchIndices(patches);
        // return indeces.length > 0;
    }

    static diff(vtree1,vtree2) {
        return diff(vtree1,vtree2);
    }

    static hasPatches(patch) {
        for (var index in patch) {
            if (index !== "a") {
                return true
            }
        }
        return false
    }


    static convertHTML(html) {
        let convertHTML = new htmlToVdom({
			VNode: VNode,
			VText: VText
        });
        return convertHTML(html);
    }


}