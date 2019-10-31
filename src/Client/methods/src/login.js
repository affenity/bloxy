exports.conf = {
	names: ["login"],
	type: "custom",
	params: [
		[
			"credentials",
			false,
			joi => joi.object({
				cookie: joi.string(),
				username: joi.string(),
				password: joi.string()
			})
		]
	],

	run: login
};

async function login ({ credentials }) {
	credentials = credentials || this.client.options.credentials;
	if (!credentials || (!credentials.cookie && !credentials.username)) throw new Error(this.client.errors.auth.noCredentials());

	if (credentials.cookie) {
		// Cookie
		const createdCookie = this.client.request.createCookie(
			".ROBLOSECURITY",
			credentials.cookie,
			"roblox.com",
			false,
			false
		);
		this.client.options.jar.setCookie(createdCookie, "https://roblox.com");
	} else {
		// Username & pass
		const loginConstant = this.client.constants.captcha.solving.login;
		if (!this.client.options.callbacks.solveCaptcha) throw new Error(this.client.errors.callbacks.noCaptchaSetup());
		await this.client.token.refresh();
		const solvedCaptcha = await this.client.options.callbacks.solveCaptcha(loginConstant);
		if (!solvedCaptcha) throw new Error(this.client.errors.callbacks.noCaptchaData());


		console.log("Submitting solved captcha");
		const res = await this.client.captcha.submit({
			referURL: loginConstant.url,
			solveURL: loginConstant.solveURL,
			fcToken: solvedCaptcha
		}, {
			form: {
				credentialsType: "Username",
				credentialsValue: credentials.username
			}
		});

		if (res.statusCode !== 200) {
			throw new Error(this.client.errors.auth.captchaFailed(
				res.statusCode,
				res.statusMessage,
				res.body
			));
		}

		await this.client.request.request({
			url: "https://auth.roblox.com/v2/login",
			method: "POST",
			json: {
				ctype: "Username",
				cvalue: credentials.username,
				password: credentials.password
			}
		});
	}

	// Authenticate login
	const { response } = await this.client.request.request({
		url: "https://www.roblox.com/game/GetCurrentUser.ashx"
	});

	if (response.body === "null") {
		throw new Error(this.client.errors.auth.loginFailed(
			response.statusCode,
			response.statusMessage
		));
	}

	this.client.user = new this.client.src.AuthUser(this.client, { userId: response.body });
	await this.client.token.refresh();
	this.client.emit("loggedIn", this.client.user);
	return this.client.user;
}
