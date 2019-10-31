// -- Dependencies

const request = require("request");
const toughCookie = require("tough-cookie");


module.exports = class RequestManager {
	constructor (client) {
		this.client = client;
		this.module = request;
		this._request = require("./lib/request").bind(this);
	}

	request (requestOptions) {
		return this._request(requestOptions);
	}


	/**
	 *
	 * @param {string} cookieKey The cookie's key (example: ".ROBLOSECURITY")
	 * @param {string} cookieValue The value of the cookie
	 * @param {string} cookieDomain The domain where the cookie will be applied
	 * @param {boolean} hostOnly Whether subdomains of the domain should be able to get the cookie
	 * @param {boolean} httpOnly Whether client-side scripts should be able to get the cookie (e.g document.cookie)
	 * @returns {toughCookie.Cookie}
	 */
	createCookie (cookieKey, cookieValue, cookieDomain, hostOnly, httpOnly) {
		return new toughCookie.Cookie({
			key: cookieKey,
			value: cookieValue,
			domain: cookieDomain,
			hostOnly: hostOnly || false,
			httpOnly: httpOnly || false
		});
	}

	/**
	 * Leave blank to get the current proxy, or provide to set the proxy
	 * @param {string | null} proxyURL The URL to connect to
	 * @returns {string} Returns the proxy
	 * @private
	 */
	setProxy (proxyURL) {
		if (proxyURL) this.env.client.options.setup.proxy = proxyURL;
		return this.env.client.options.setup.proxy;
	}

	/**
	 * Leave blank to get the current User-Agent, or provide a string to set the new one
	 * @param {string | null} userAgent *(Optional)* userAgent The user-agent
	 * @returns {string} Returns the User-Agent
	 * @private
	 */
	setUserAgent (userAgent) {
		if (userAgent) this.env.client.options.setup.userAgent = userAgent;
		return this.env.client.options.setup.userAgent;
	}
};
