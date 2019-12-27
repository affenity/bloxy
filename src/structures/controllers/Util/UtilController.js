const TokenController = require("./Token");

/**
 * Holding misc. functions and variables
 */
class UtilController {
	/**
	 *
	 * @param {Client} client The client
	 */
	constructor (client) {
		this.client = client;
		/**
		 * @type {RestTokenController}
		 */
		this.token = new TokenController(client);
		/**
		 * @type {CacheController}
		 */
		// this.cache = new CacheController();
		/**
		 * @type {CaptchaController}
		 */
		// this.captcha = new CaptchaController();
	}
}

module.exports = UtilController;
