const CacheController = require("./Cache");
const CaptchaController = require("./Captcha");
const TokenController = require("./Token");

/**
 * Holding misc. functions and variables
 */
class UtilController {
	/**
	 *
	 * @param {Client} client
	 */
	constructor (client) {
		this.client = client;
		/**
		 * @type {RestTokenController}
		 */
		this.token = new TokenController();
		/**
		 * @type {CacheController}
		 */
		this.cache = new CacheController();
		/**
		 * @type {CaptchaController}
		 */
		this.captcha = new CaptchaController();
	}
}

module.exports = UtilController;
