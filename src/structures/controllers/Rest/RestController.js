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
		this.responseHandlers = []; // TODO: Add each function that needs to be called in this array
		this.request = require("./lib/Request");
	}

	/**
	 * Adds a handler that needs to return true in order to process the request successfully.
	 * @param {Function} handler
	 * @returns {number}
	 */
	addResponseHandler (handler) {
		return this.responseHandlers.push(handler);
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
