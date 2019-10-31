module.exports = class CaptchaManager {
	constructor (client) {
		this.client = client;
		this.constants = client.constants.captcha.solving;

		this.submit = require("./lib/submit").bind(this);
	}
};
