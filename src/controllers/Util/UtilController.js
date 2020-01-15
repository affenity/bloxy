const TokenController = require("../Rest/src/token");
const CaptchaController = require("../Captcha");

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
		// this.Cache = new CacheController();
		/**
		 * @type {CaptchaController}
		 */
		this.captcha = new CaptchaController(client);

		/**
		 * The structures
		 * @type {Structures}
		 */
		this.structures = require("../../structures");

		/**
		 * Value extractor
		 * @type {UtilValueExtractor}
		 */
		this.valueExtractor = require("./valueExtractor");
	}
}

module.exports = UtilController;
