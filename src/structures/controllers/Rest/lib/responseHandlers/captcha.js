const captchaErrorCodes = [403];
const captchaErrorStatuses = ["captcha", "bot", "robot"]

/**
 * @param {RestController} controller
 * @param {RestResponse} response
 */
module.exports = (controller, response) => {
	const data = response.data;
	const status = data.statusMessage.toLowerCase();
	const bodyString = (data.body instanceof Object ? JSON.stringify(data.body) : data.body.toString()).toLowerCase();
	let returnData = [true];

	if (captchaErrorCodes.some(s => s === data.statusCode)) {
		if (captchaErrorStatuses.some(s => status.includes(s) || bodyString.includes(s))) {
			returnData = [false, `Captcha error, status code: ${data.statusCode}, status: "${data.statusMessage}"`];
		}
	}

	return returnData;
};
