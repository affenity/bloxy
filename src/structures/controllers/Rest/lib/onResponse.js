/**
 * This is called after request.responseHandlers have validated the response
 * @param request {RestRequest}
 * @param response {RestResponse}
 */
module.exports = (request, response) => {
	const { body, statusCode, statusMessage } = response;
	const isAllowedStatus = request.responseOptions.
};
