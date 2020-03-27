const tokenResponseHandler = require("../../../lib/responseHandlers/token");

/**
 * @param {RestTokenController} controller The Rest controller
 */
module.exports = async controller => {
	const restController = controller.client.rest;
	const [success, response] = await restController.request({
		url: "https://auth.roblox.com/v2/login",
		method: "POST",
		token: false
	}, {
		allowedStatusCodes: [],
		disableTokenCheck: true,
		disabledChecks: {
			token: true
		}
	}).then(r => [true, r]).catch(e => {
		if (controller.client.options.setup.throwHttpErrors) {
			const response = {
				options: {
					disabledChecks: {
						token: true
					}
				},
				data: e
			};

			const [success] = tokenResponseHandler(response);
			if (!success) {
				throw new Error(e);
			}
			return [true, response];
		}

		controller.client.debug.log(`An error occurred while processing the TokenController.refresh function`);
		return [false, e];
	});

	if (!success) {
		throw new Error(`Failed to process RestTokenController.refresh function. ${response}`);
	}

	const headers = response.data.headers;
	const tokenFound = headers["x-csrf-token"];

	if (!tokenFound) {
		throw new Error(`Could not find the x-csrf-token in the response headers`);
	}

	controller.client.debug.log(`Successfully updated the x-csrf-token to "${tokenFound}"`);

	// eslint-disable-next-line require-atomic-updates
	controller.token = tokenFound;
	return tokenFound;
};
