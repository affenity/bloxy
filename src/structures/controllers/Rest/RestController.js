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
		this.jar = new toughCookie.CookieJar();
	}

	/**
	 * Creates a cookie
	 * @param {RestCreateCookieOptions} options
	 * @returns {toughCookie#Cookie}
	 */
	createCookie (options) {
		return new toughCookie.Cookie(options);
	}

	/**
	 * Retrieves or updates the default proxy
	 * @param url {string}
	 * @returns {string}
	 */
	proxy (url) {
		if (url) {
			this.client.options.setup.proxy = url;
		}

		return url || this.client.options.setup.proxy;
	}

	/**
	 * Retrieves or updates the default user-agent header
	 * @param userAgent {string}
	 * @returns {string}
	 */
	userAgent (userAgent) {
		if (userAgent) {
			this.client.options.setup.userAgent = userAgent;
		}

		return userAgent || this.client.options.setup.userAgent;
	}
}
