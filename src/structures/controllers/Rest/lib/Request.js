const onResponse = require("./onResponse");
const _ = require("lodash");
const Response = require("./Response");

class RestRequest {
	/**
	 * Creates a new instance of Request
	 * @param restController {RestController}
	 * @param responseOptions {RestControllerRequestOptions}
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
	}

	async send () {
		const requester = this.controller.requester;
		const response = await requester(this.options);

		return onResponse(this, response);
	}
}

module.exports = RestRequest;
