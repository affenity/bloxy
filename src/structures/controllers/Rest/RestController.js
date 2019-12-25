const toughCookie = require("tough-cookie");

/**
 * @type {RestController}
 */
class RestController {
	/**
	 *
	 * @param {Client} client
	 */
	constructor (client) {
		this.client = client;
		this.requester = client.options.setup.requester || require("got");
		this.isCustomRequester = !!client.options.setup.requester;
		this.jar = new toughCookie.CookieJar()
	}
}
