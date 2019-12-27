const onResponse = require("./onResponse");

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
	}

	async send () {
		const requester = this.controller.requester;
		if (this.options.token !== false) {
			this.options.token = await this.client.util.token.fetch();
		}

		const response = await requester(this.options);

		return onResponse(this, response);
	}
}

module.exports = RestRequest;
