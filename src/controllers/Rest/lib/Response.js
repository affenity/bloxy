const lodash = require("lodash");

/**
 * @type {RestResponse}
 */
class RestResponse {
	/**
	 * @param {Client} client The apis
	 * @param {RestRequest} request  The request
	 * @param {Object} response  The response data
	 */
	constructor (client, request, response) {
		this.client = client;
		this.request = request;
		this.options = lodash.merge({
			allowedStatusCodes: [],
			disallowedStatusCodes: [],
			allowedStatuses: [],
			disallowedStatuses: [],
			onlyJSON: false,
			disabledChecks: {
				captcha: false,
				token: false,
				statusCode: false,
				status: false,
				body: false
			}
		}, this.request.responseOptions);
		this.data = response;
	}

	validateResponse () {
		const [validStatusCode, statusCodeInfo] = this.isValidStatusCode();
		const [validStatus, statusInfo] = this.isValidStatus();
		const validBody = this.isValidBody();

		this.client.debug.log(`Valid status code: ${validStatusCode}, status: ${validStatus}, body: ${validBody}`);

		if (!validStatusCode) {
			return [false, `Response validation failed. Status code "${this.data.statusCode}" is not allowed. ${statusCodeInfo}`];
		} else if (!validStatus) {
			return [false, `Response validation failed. Status "${this.data.statusMessage}" is not allowed. ${statusInfo}`];
		} else if (!validBody) {
			return [false, `Response validation failed. Body was not as expected.`];
		}

		return [true];
	}

	isValidStatusCode () {
		const statusCodesAllowed = this.options.allowedStatusCodes || [];
		const statusCodesDisallowed = this.options.disallowedStatusCodes || [];
		const isAllowed = statusCodesAllowed.some(x => this.data.statusCode === x);
		const isDisallowed = statusCodesDisallowed.some(x => this.data.statusCode === x);
		let allowedStatus;

		this.client.debug.log(`isValidStatusCode:\n Is allowed: ${isAllowed}, is disallowed: ${isDisallowed}`);

		if (!this.options.disabledChecks.statusCode) {
			if (statusCodesAllowed.length > 0) {
				// Only these are allowed
				allowedStatus = [isAllowed, `Allowed values: "${statusCodesAllowed.join(", ")}", disallowed: "${statusCodesDisallowed.join(", ")}"`];
			} else if (statusCodesAllowed.length === 0 && statusCodesDisallowed.length > 0) {
				// Only these are disallowed
				allowedStatus = [!isDisallowed, `Disallowed values: "${statusCodesDisallowed.join(", ")}"`];
			} else if (statusCodesDisallowed.length === 0 && statusCodesAllowed.length === 0) {
				// All are allowed
				allowedStatus = [true, "All values are allowed"];
			}
		} else {
			allowedStatus = [true, "Checks disabled"];
		}

		return allowedStatus;
	}

	isValidStatus () {
		const status = this.data.statusMessage.toLowerCase();
		const allowedStatuses = this.options.allowedStatuses || [];
		const disallowedStatuses = this.options.disallowedStatuses || [];
		const isAllowed = allowedStatuses.some(s => status.includes(s.toLowerCase()));
		const isDisallowed = disallowedStatuses.some(s => status.includes(s.toLowerCase()));
		let allowedStatus;

		if (!this.options.disabledChecks.status) {
			if (allowedStatuses.length > 0) {
				// Only these are allowed
				allowedStatus = [isAllowed, `Allowed values: "${allowedStatuses.join(", ")}", disallowed: "${disallowedStatuses.join(", ")}"`];
			} else if (allowedStatuses.length === 0 && disallowedStatuses.length > 0) {
				// Only these are disallowed
				allowedStatus = [!isDisallowed, `Disallowed values: "${disallowedStatuses.join(", ")}"`];
			} else if (allowedStatuses.length === 0 && disallowedStatuses.length === 0) {
				// All statuses are allowed
				allowedStatus = [true, "All statuses are allowed"];
			}
		} else {
			allowedStatus = true;
		}

		return allowedStatus;
	}

	isValidBody () {
		let valid = false;

		if (!this.options.disabledChecks.body) {
			if (this.options.onlyJSON || this.request.options.json === true) {
				try {
					const body = this.data.body;
					if (body instanceof Object) {
						valid = true;
					} else {
						// Parse the body and see if it's JSON
						const parsed = JSON.parse(body);
						valid = parsed instanceof Object;
					}
				} catch (error) {
					this.client.debug.log(`Failed to validate body, it's most likely not JSON as expected`);
				}
			} else {
				if (this.data.body instanceof Object) {
					if (this.data.body.errors && this.data.body.errors.length > 0) {
						valid = false;
					}
				}
				valid = true;
			}
		} else {
			valid = true;
		}

		return valid;
	}
}

module.exports = RestResponse;
