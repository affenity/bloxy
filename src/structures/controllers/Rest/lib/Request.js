const onResponse = require("./onResponse");
const lodash = require("lodash");

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
	}

	async send () {
		const requester = this.controller.requester;
		if (this.options.token !== false) {
			this.options.token = await this.client.util.token.fetch();
			this.options.headers = lodash.merge(this.options.headers, {
				"X-CSRF-TOKEN": this.options.token
			});
		}
		const response = await requester(this.options);

		return onResponse(this, response);
	}
}

module.exports = RestRequest;
