

module.exports = async function (requestOptions, response, numSent) {

	let self = this;

	if (numSent === null || numSent === undefined) numSent = 0;

	let newPromise = new Promise (async function (resolve, reject) {


		if (captchaRequired(response.statusCode, response.statusMessage)) {

			if (numSent > 1) return reject(`Failed to solve captcha for url: ${requestOptions.url}`);


			if (!requestOptions.captchaUrl) {

				return reject("Your request did not go through, captcha was faced.");

			} else {

				let captchaType = requestOptions.captchaType;
				let captchaResponse = await self.setup.captchaManager.solveCaptcha(requestOptions.captchaUrl);

				let verifyCaptcha;

				if (!captchaType || captchaType === "user") {
					verifyCaptcha   = await self.setup.captchaManager.verifyCaptchaUser(captchaResponse, self.setup);
				} else if (captchaType === "message") {
					verifyCaptcha = await self.setup.captchaManager.verifyCaptchaMessage(captchaResponse, self.setup);
				} else if (captchaType === "signup") {
					verifyCaptcha = await self.setup.captchaManager.verifyCaptchaSignup(captchaResponse, self.setup);
				}
				
				if (!verifyCaptcha) return reject("Failed to verify captcha response");

				return resolve(self.request(requestOptions.url, requestOptions, numSent));
			}
		}

		if (tokenFailed(response.statusCode, response.statusMessage) && requestOptions.xcsrf !== false) {

			if (numSent > 2) return reject("X-CSRF-TOKEN validation failed. Attempted to fix twice.");
			await self.xcsrfManager.refresh();

			return resolve(self.request(requestOptions.url, requestOptions, numSent));
		}
		
		response.status = `Status code: ${response.statusCode}, status message: ${response.statusMessage}`;
		
		resolve(response);
	});

	return newPromise;
};


function captchaRequired (statusCode, body) {
	body = (body || "").toLowerCase();
	return (statusCode === 403 && (body.includes("robot") || body.includes("captcha")));
}

function tokenFailed (statusCode, body) {
	body = (body || "").toLowerCase();
	return (statusCode == 403 && (body.includes("token") && body.includes("failed")));
}
