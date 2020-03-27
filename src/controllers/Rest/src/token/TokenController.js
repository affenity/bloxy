class RestTokenController {
	/**
	 * @param {Client} client The apis
	 */
	constructor (client) {
		this.client = client;
		this.token = null;

		this.refresh = require("./src/refresh").bind(this, this);
	}

	async fetch () {
		this.token = await this.refresh();
		return this.token;
	}
}

module.exports = RestTokenController;
