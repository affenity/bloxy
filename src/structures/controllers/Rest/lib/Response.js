class RestResponse {
	/**
	 * @param client {Client}
	 * @param request {RestRequest}
	 * @param response {object}
	 */
	constructor (client, request, response) {
		this.client = client;
		this.request = request;
		this.data = response;
	}

	isValidStatusCode () {
		return this.request.responseOptions.allowedStatusCodes
	}
}
