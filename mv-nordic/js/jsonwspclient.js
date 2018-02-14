/*
  Copied from http://ladonize.org/resources/jsonwspclient.js and modernized a bit
*/
'use strict';

// Hook on this function to get info about errors while they happen
let errorinfo = function(str) {};

function indexOf(lst,obj) {
	for(let i=0; i<lst.length; i++) {
		if(lst[i]===obj) {
			return i;
		}
	}
	return -1;
}

function keys(obj) {
	let key_list = [];
	for (let k in obj) {
		key_list.push(parseInt(k));
	}
	key_list.sort(function(a,b){
		return a - b;
	});
	return key_list;
}

let glob_id = 1;

function JSONWSPClient() {

	this.obj_id = glob_id++;
	this.setViaProxy = function(enable) {
		this.via_proxy = enable;
	};

	this.postRequest = function(data,response_callback) {
		let req = new XMLHttpRequest();
		req.open("POST",this.url,true);
		let content_type_valist = ["application/json"];
		if (typeof(this.force_charset) != "undefined") {
			content_type_valist.push("charset=" + this.force_charset);
		}
		req.setRequestHeader("Content-Type", content_type_valist.join("; "));
		req.setRequestHeader("Content-Length", data.length);
		if (this.via_proxy==true) {
			req.setRequestHeader("Ladon-Proxy-Path", this.url);
		}
		req.onreadystatechange = function() {
			if (req.readyState != 4) {
				return;
			}
			let res = JSON.parse(req.responseText);
			if (response_callback != null) {
				response_callback(res.result,res.reflection,res);
			}
		};
		req.send(data);
	};

	this.sendRequest = function(url,response_callback) {
		let req = new XMLHttpRequest();
		req.open("GET",url,true);
		if (this.via_proxy==true) {
			req.setRequestHeader("Ladon-Proxy-Path", url);
		}
		req.onreadystatechange = function() {

			if (req.readyState != 4) {
				return;
			}
			let res = JSON.parse(req.responseText);
			if (response_callback != null) {
				response_callback(res);
			}
		};
		req.send(null);
	};

	this.methodInfo = function(method_name) {
		let params_order_name = {};
		for (let pkey in this.jsonrpc_desc.methods[method_name].params) {
			params_order_name[this.jsonrpc_desc.methods[method_name].params[pkey]['def_order']]=pkey;
		}
		let porder_keys = keys(params_order_name);

		let ordered_params = [];
		let ordered_mandatory_params = [];
		let ordered_optional_params = [];
		for (let idx=0; idx<porder_keys.length; idx++) {
			let param_name = params_order_name[porder_keys[idx]];
			ordered_params.push(param_name);
			if (this.jsonrpc_desc.methods[method_name].params[param_name]['optional'] == true) {
				ordered_optional_params.push(param_name);
			}
			else {
				ordered_mandatory_params.push(param_name);
			}
		}
		//obj.params_doc[method+'.'+param_name] = jsonrpc_desc.methods[method].params[param_name]['doc_lines'].join('\n');
		let minfo = {
			method_name: method_name,
			params_order: ordered_params,
			mandatory_params: ordered_mandatory_params,
			optional_params: ordered_optional_params,
			params_info: this.jsonrpc_desc.methods[method_name].params,
			doc_lines: this.jsonrpc_desc.methods[method_name].doc_lines,
			ret_info: this.jsonrpc_desc.methods[method_name].ret_info,
		};
		return minfo;
	};

	this.paramInfo = function(method_name,param_name) {
		return this.methodInfo(method_name).params_info[param_name];
	};

	this.documentation = function(method_name,param_name) {
		let docstr = null;
		if (method_name==null)
			docstr = '';
		else if (method_name && param_name==null) {
			docstr = this.methodInfo(method_name).doc_lines.join("\n");
		}
		else {
			docstr = this.methodInfo(method_name).params_info[param_name].doc_lines.join("\n");
		}
		if (!docstr) {
			docstr = '';
		}
		return docstr;
	};

	this.callMethod = function(method_name,args,mirror,cb) {
		let minfo = this.methodInfo(method_name);
		let mparams = minfo.mandatory_params;
		let oparams = minfo.optional_params;
		let unidentified = [];
		for (let pname in args) {
			let mpidx = indexOf(mparams,pname);
			if (mpidx>-1) {
				mparams.splice(mpidx,1);
			}
			continue;
			let opidx = indexOf(oparams,pname);
			if (opidx==-1) {
				unidentified.push(pname);
			}
		}
		if (mparams.length>0) {
			errorinfo("Error: Missing mandatory parameters");
			return;
		}
		if (unidentified.length>0) {
			errorinfo("Error: Unidentified args were found");
			return;
		}
		let jsonwsp_req = {
			type: "jsonwsp/request",
			version: "1.0",
			methodname: method_name,
			args: args,
		};
		if (mirror != null) {
			jsonwsp_req.mirror = mirror;
		}
		this.postRequest(JSON.stringify(jsonwsp_req),cb);
	};

	this.loadDescription = function(url,onsuccess) {
		let obj = this;
		this.sendRequest(url, function(jsonrpc_desc) {
			obj.jsonrpc_desc = jsonrpc_desc;
			obj.url = jsonrpc_desc.url;
			obj.servicename = jsonrpc_desc.servicename;
			// Convert service methods to javascript proxy versions
			for (let method in jsonrpc_desc.methods) {
				eval("obj."+method+"=function(args,mirror,callback) {obj.callMethod('"+method+"',args,mirror,callback)}");
			}
			if (onsuccess != null) {
				onsuccess();
			}
		});
	};
}
