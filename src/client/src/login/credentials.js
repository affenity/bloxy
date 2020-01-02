const validate = require("./validate");

/**
 * Logs in with standard credentials (username and password)
 * @param {Client} client The apis
 * @param {ClientLoginCredentials} credentials The credentials to sign in with
 * @returns {Promise<void>}
 */
module.exports = async (client, credentials) => {
	let fcToken = credentials.fcToken || client.options.callbacks.onCaptcha;
	const captchaConstants = client.util.structures.constants.captcha.login;

	if (!fcToken) {
		throw new Error(`Cannot log in with username and password if no fcToken was provided, or if no function to get one was provided`);
	}

	if (fcToken instanceof Function) {
		fcToken = await fcToken(client, captchaConstants);
	}

	const sendBody = {
		cvalue: credentials.username,
		ctype: "Username",
		password: credentials.password,
		captchaToken: fcToken,
		captchaProvider: "PROVIDER_ARKOSE_LABS"
	};
	const response = await client.rest.request({
		url: "https://auth.roblox.com/v2/login",
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(sendBody),
		responseType: "json"
	}).then(r => r.data).catch(e => {
		throw new Error(e);
	});

	const body = response.body instanceof Object ? response.body : JSON.parse(response.body);
	const { user, twoStepVerificationData } = body;

	if (!user && !twoStepVerificationData) {
		throw new Error(`Failed to log in, unexpected body. Received: ${JSON.stringify(body)}`);
	}

	if (twoStepVerificationData) {
		throw new Error(`2FA is currently not supported yet`);
	}

	return validate(client);
};
