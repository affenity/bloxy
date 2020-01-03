const toughCookie = require("tough-cookie");
const Request = require("./lib/Request");

/**
 * @type {RestController}
 */
class RestController {
	/**
	 * @param {Client} client The apis
	 */
	constructor (client) {
		this.client = client;
		this.requester = client.options.setup.requester || require("got");
		this.isCustomRequester = !!client.options.setup.requester;
		this.jar = new toughCookie.CookieJar();
		this.token =
		this.responseHandlers = [];

		require("./lib/responseHandlers")(this);
	}

	/**
	 * @param {RestRequestOptions} options The options used for the request
	 * @param {RestControllerResponseOptions} responseOptions The response options for validation / handling
	 * @returns {Promise<RestResponse>}
	 */
	request (options, responseOptions) {
		const request = new Request(this, responseOptions);
		request.prepare(options);
		return request.send();
	}
	/**
	 * Adds a handler that needs to return true in order to process the request successfully.
	 * @param {Function} handler A handler to process the response, which returns [boolean, infoString]
	 * @returns {number}
	 */
	addResponseHandler (handler) {
		return this.responseHandlers.push(handler);
	}

	/**
	 * Creates a cookie
	 * @param {RestCreateCookieOptions} options The options for creating a cookie
	 * @returns {toughCookie#Cookie}
	 */
	createCookie (options) {
		return new toughCookie.Cookie(options);
	}

	/**
	 * Retrieves or updates the default proxy
	 * @param {string} url The proxy url
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
	 * @param {string} userAgent The user-agent header
	 * @returns {string}
	 */
	userAgent (userAgent) {
		if (userAgent) {
			this.client.options.setup.userAgent = userAgent;
		}

		return userAgent || this.client.options.setup.userAgent;
	}
}

module.exports = RestController;
