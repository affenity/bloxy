/**
 * This is called after request.responseHandlers have validated the response
 * @param request {RestRequest}
 * @param response {RestResponse}
 */
module.exports = (request, response) => {
	const { body, statusCode, statusMessage } = response;
	const [validResponse, validationError] = response.validateResponse();

	if (!validResponse) {
		throw new Error(validationError);
	}

	// TODO: Continue with processing the received response and finish the responseHandlers
};
