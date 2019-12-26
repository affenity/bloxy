const tokenErrorCodes = [403];
const tokenErrorStatuses = ["token", "xcsrf", "x-csrf", "x-csrf-token"]

/**
 * @param {RestController} controller
 * @param {RestResponse} response
 */
module.exports = (controller, response) => {
	const data = response.data;
	const status = data.statusMessage.toLowerCase();
	const bodyString = (data.body instanceof Object ? JSON.stringify(data.body) : data.body.toString()).toLowerCase();
	let returnData = [true];

	if (tokenErrorCodes.some(s => s === data.statusCode)) {
		if (tokenErrorStatuses.some(s => status.includes(s) || bodyString.includes(s))) {
			returnData = [false, `Token error, status code: ${data.statusCode}, status: "${data.statusMessage}"`];
		}
	}

	return returnData;
};
