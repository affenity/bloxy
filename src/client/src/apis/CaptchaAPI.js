class CaptchaAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://captcha.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getMetadata () {
		return this.request({
			url: "v1/captcha/metadata"
		}, {}, {
			disableAuth: true
		});
	}

	getErrorMessages () {
		return this.request({
			url: "v1/language-resources"
		}, {}, {
			disableAuth: true
		});
	}
}

module.exports = CaptchaAPI;
