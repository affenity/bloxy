// Dependencies

const request = require("request");
const responseHandler = require("./responseHandler");

// --


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

module.exports = async function (url, options={}, numSent) {

	let self = this;


	let newPromise = new Promise(async function(resolve, reject) {


		let requestOptions = {
            
			method: options.method || "GET",
            
			followAllRedirects: true,

			followRedirect: () => {

			},

			headers: {
				"X-CSRF-TOKEN": self.xcsrfManager.token
			},

			body: options.body || null,
			json: options.json || false,
			form: options.form || options.inputs || null,
			formData: options.formData || options.inputsData || null,

			jar: self.jar,
			url: url
		};

        
		if (options.verification) {

			let verify = "__RequestVerificationToken=" + options.verification + ";";
			requestOptions.headers.cookie = verify;

		}

		if (self.proxy) {
			requestOptions.proxy = self.proxy;
			requestOptions.url   = url;
		}
		if (options.captchaUrl) requestOptions.captchaUrl = options.captchaUrl;
		if (options.xcsrf == false) {
			delete requestOptions.headers["X-CSRF-TOKEN"];
			requestOptions.xcsrf = false;
		}

		request(url, requestOptions, function (error, res) {
			if (error) return reject(error);

			if (numSent === undefined || numSent === null) numSent = 0;
			numSent++;

			resolve(responseHandler.bind(self)(requestOptions, res, numSent));

		});
	});


	return newPromise;

};