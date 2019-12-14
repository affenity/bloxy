const toughCookie = require("tough-cookie");

module.exports = class RequestManger {
	constructor (client, managerOptions = {}) {
		/**
		 * @type {Client}
		 */
		this.client = client;

		this.jar = managerOptions.jar || new toughCookie.CookieJar();
	}
};
