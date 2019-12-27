const validate = require("./validate");

/**
 * Logs in with standard credentials (username and password)
 * @param {Client} client The client
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
		body: JSON.stringify(sendBody)
	}).then(r => {
		return r.data;
	}).catch(e => {
		throw new Error(e);
	});

	console.log(response);
	console.log(response.statusCode, response.statusMessage);
	console.log(response.body);

};
