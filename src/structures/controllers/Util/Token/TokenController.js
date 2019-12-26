class RestTokenController {
	/**
	 * @param {Client} client
	 */
	constructor (client) {
		this.client = client;
		this.token = null;
		this.fetchInterval = null;
		this.refreshInterval = 5 * 60 * 1000;

		this.refresh = require("./src/refresh").bind(this, this);
	}
}

module.exports = RestTokenController;
