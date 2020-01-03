class RestTokenController {
	/**
	 * @param {Client} client The apis
	 */
	constructor (client) {
		this.client = client;
		this.token = null;
		this.fetchInterval = null;
		this.refreshInterval = 5 * 60 * 1000;

		this.refresh = require("./src/refresh").bind(this, this);
	}

	async fetch () {
		if (!this.token) {
			this.token = await this.refresh();
		}
		return this.token;
	}
}

module.exports = RestTokenController;
