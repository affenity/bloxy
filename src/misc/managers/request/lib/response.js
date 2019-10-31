// eslint-disable-next-line consistent-return
module.exports = async function handleResponse (requestOptions, response, amountRetried) {
	// eslint-disable-next-line consistent-this
	const client = this.client;

	if (amountRetried === null || amountRetried === undefined) amountRetried = 0;
	if (captchaRequired(response.statusCode, response) && !requestOptions.ignoreCaptchaError !== true) {
		if (amountRetried > 1) throw new Error(client.errors.request.captcha(amountRetried));
	} else if (tokenFailed(response.statusCode, response.statusMessage) && requestOptions.ignoreTokenError !== true) {
		if (amountRetried > 1) throw new Error(client.errors.request.token(requestOptions.url, response.statusMessage));
		console.log("GOT TOKEN ERROR, ATTEMPTING TO PERFORM THE SAME REQUEST");
		await client.token.refresh();
		return client.request.request(requestOptions, amountRetried);
	} else if (!requestOptions.otherData.skipCheck) {
		if (response.statusCode !== 200) {
			response.statusError = `Status code: ${response.statusCode}, message: ${response.statusMessage}`;
		}

		return { response, requestOptions, amountRetried };
	} else {
		return { response, requestOptions, amountRetried };
	}
};

function captchaRequired (statusCode, response) {
	let body = typeof response.body === "object" ? JSON.stringify(response.body).toLowerCase() : (response.body || "").toString().toLowerCase();

	return statusCode === 403 && (body.includes("robot") || body.includes("captcha") || response.statusMessage.includes("captcha") || response.statusMessage.includes("robot"));
}

function tokenFailed (statusCode, statusMessage) {
	statusMessage = statusMessage.toLowerCase();
	return statusCode === 403 && (statusMessage.includes("xsrf") || statusMessage.includes("token"));
}
