const Response = require("./Response");

/**
 *
 * @param {RestRequest} request The request
 * @param {Object} responseData The response from the request
 * @returns {RestResponse}
 */
module.exports = (request, responseData) => {
	const client = request.client;
	const response = new Response(client, request, responseData);
	let handlerError;

	client.debug.log("Received response, processing it...");

	const [validResponse, validationError] = response.validateResponse();
	if (!validResponse) {
		throw new Error(validationError);
	}

	client.debug.log("Response was valid");

	// Do the response handlers
	const successfulResponseValidation = request.controller.responseHandlers.every(handler => {
		const [success, error] = handler(response);
		if (!success) {
			handlerError = error;
			return false;
		} else {
			return true;
		}
	});

	if (!successfulResponseValidation) {
		client.debug.log(`A response handler was not successful`);
		throw new Error(`A response handler failed with error: ${handlerError}.
		Response status code: ${response.data.statusCode}, status: "${response.data.statusMessage}"`);
	}

	client.debug.log("Response validation successful");
	// TODO: Continue with processing the received response and finish the responseHandlers

	return response;
};
