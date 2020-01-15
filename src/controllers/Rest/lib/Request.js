const onResponse = require("./onResponse");
const lodash = require("lodash");
const querystring = require("querystring");

class RestRequest {
	/**
	 * Creates a new instance of Request
	 * @param {RestController} restController The Rest controller
	 * @param {RestRequestOptions} responseOptions The response options for validation / handling
	 */
	constructor (restController, responseOptions) {
		this.controller = restController;
		this.client = this.controller.client;
		this.responseOptions = responseOptions;
		this.options = null;

		this.client.debug.log("Created a request instance");
	}

	prepare (options = {}) {
		this.options = options;
		this.options.throwHttpErrors = false;
		this.options.cookieJar = this.controller.jar;
		this.options.headers = lodash.merge(this.options.headers || {}, {
			"User-Agent": options.userAgent || this.client.options.setup.userAgent
		});
		if (this.options.qs) {
			this.options.url += `?${querystring.encode(this.options.qs)}`;
		}
		if ((this.options.json && typeof this.options.json !== "boolean") && this.options.method.toLowerCase() !== "get") {
			this.options.body = this.options.json;
			this.options.headers = lodash.merge(this.options.headers || {}, {
				"Content-Type": "application/json"
			});
			this.options.json = true;
		}
		if (this.options.method === undefined || this.options.method === null) {
			this.options.method = "GET";
		}
	}

	async send () {
		const requester = this.controller.requester;
		if (this.options.token !== false) {
			this.options.token = await this.client.util.token.fetch();
			this.options.headers = lodash.merge(this.options.headers, {
				"X-CSRF-TOKEN": this.options.token
			});
		}

		this.client.debug.log(`Performing request: ${this.options.method.toUpperCase()} ${this.options.url}`);
		const response = await requester(this.options);

		return onResponse(this, response);
	}
}

module.exports = RestRequest;
