const onResponse = require("./onResponse");
const _ = require("lodash");

class RestRequest {
	/**
	 * Creates a new instance of Request
	 * @param client {Client}
	 * @param restController {RestController}
	 * @param responseOptions {RestControllerRequestOptions}
	 */
	constructor (client, restController, responseOptions) {
		this.client = client;
		this.controller = restController;
		this.responseOptions = responseOptions;
		this.options = null;
		this.response = null;

		this.client.debug.log("Created a request instance");
	}

	onResponse (response) {
		let handlerError;

		this.client.debug.log("Called restController.onResponse");

		const successful = this.controller.responseHandlers.every(x => {
			const [success, error] = x(response);
			if (!success) {
				handlerError = error;
			} else {
				return true;
			}
		});

		if (!successful) {
			this.client.debug.log("A response handler was not successful");
			throw new Error(`A response handler failed with error: ${handlerError}.\n Response: status code: "${response.statusCode}", status: "${response.statusMessage}"`);
		} else {
			this.client.debug.log("All response handlers were satisfied, proceeding to processing the request");
			return onResponse(this, response);
		}
	}

	prepare (options) {
		this.options = options;
	}

	async send () {
		const requester = this.controller.requester;
		const response = await requester(this.options);

		return this.onResponse(response);
	}
}

module.exports = RestRequest;
