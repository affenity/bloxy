exports.module = require("request");


class RequestManager {

	constructor (self) {

		this.jar          = exports.module.jar();
		this.setup	      = self;
		this.xcsrfManager = null;
		this.proxy        = null;
		this.module       = exports.module;

		this.createCookie = require("./lib/createCookie");
        
	}


	/**
 * Fetch function 
 * @param {String} url 
 * @param {Object} options 
 * @param {Number} options.id 
 * @param {String} options.method 
 * @param {String} options.form 
 * @param {Object} options.body
 * @param {Object} options.formData
 * @param {String} options.verification
 * @param {String} options.captchaUrl
 * @param {Boolean || Object} options.json 
 */

	async request (url, options, ...args) {
		return require("./lib/request").bind(this)(url, options, ...args);
	}
    
	setXcsrfManager (self) {
		this.xcsrfManager = self;
	}

	setProxy (proxy) {
		this.proxy = proxy;
	}

	async getVerification (url) {
		return require("./lib/getVerification").bind(this)(url);
	}
}


exports.RequestManager = RequestManager;