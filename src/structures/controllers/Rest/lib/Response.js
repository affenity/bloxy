class RestResponse {
	/**
	 * @param client {Client}
	 * @param request {RestRequest}
	 * @param response {object}
	 */
	constructor (client, request, response) {
		this.client = client;
		this.request = request;
		this.options = this.request.responseOptions;
		this.data = response;
	}

	validateResponse () {
		const validStatusCode = this.isValidStatusCode();
		const validStatus = this.isValidStatus();
		const validBody = this.isValidBody();

		this.client.debug.log(`Valid status code: ${validStatusCode}, status: ${validStatus}, body: ${validBody}`);

		if (!validStatusCode) {
			return [false, `Response validation failed. Status code "${this.data.statusCode}" is not allowed.`];
		} else if (!validStatus) {
			return [false, `Response validation failed. Status "${this.data.statusMessage}" is not allowed.`];
		} else if (!validBody) {
			return [false, `Response validation failed. Body was not as expected.`];
		}

		return [true];
	}

	isValidStatusCode () {
		const statusCodesAllowed = this.options.allowedStatusCodes || [];
		const statusCodesDisallowed = this.options.disallowedStatusCodes || [];
		const isAllowed = statusCodesAllowed.every(x => this.data.statusCode === x);
		const isDisallowed = statusCodesDisallowed.every(x => this.data.statusCode === x);

		return isDisallowed || (!isDisallowed && !isAllowed);
	}

	isValidStatus () {
		const status = this.data.statusMessage;
		const failStatuses = this.options.failOnStatusInclude || [];
		return failStatuses.some(x => status.toLowerCase().includes(x.toLowerCase()));
	}

	isValidBody () {
		let valid = false;

		if (this.options.onlyJSON || this.request.options.json === true) {
			try {
				const body = this.data.body;
				if (body instanceof Object) {
					valid = true;
				} else {
					// Parse the body and see if it's JSON
					const parsed = JSON.parse(body);
					if (parsed instanceof Object) {
						valid = true;
					}
				}
			} catch (error) {
				this.client.debug.log(`Failed to validate body, it's most likely not JSON as expected`);
			}
		} else {
			valid = true;
		}

		return valid;
	}
}

module.exports = RestResponse;
