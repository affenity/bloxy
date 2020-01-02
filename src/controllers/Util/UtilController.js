const TokenController = require("./Token");
const CaptchaController = require("./Captcha");

/**
 * Holding misc. functions and variables
 */
class UtilController {
	/**
	 *
	 * @param {Client} client The apis
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
		this.captcha = new CaptchaController(client);
		this.structures = require("../../structures");
	}
}

module.exports = UtilController;
