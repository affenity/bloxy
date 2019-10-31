const refreshToken = require("./refreshToken");


module.exports = class TokenManager {
	constructor (client) {
		this.client = client;
		this.token = null;
		this.requestInterval = null;
		this.startInterval();
	}

	async refresh () {
		this.token = await refreshToken.bind(this)();
		return this.token;
	}

	startInterval (updateRate) {
		updateRate = updateRate || 5 * 60000;
		this.stopInterval();

		this.client.setInterval(() => {
			this.refresh.bind(this)();
		}, updateRate);
	}

	stopInterval () {
		if (this.requestInterval) this.client.clearInterval(this.requestInterval);
	}

	getToken (ignoreCurrent) {
		if ((!ignoreCurrent && !this.token) || ignoreCurrent === true) {
			return this.refresh.bind(this)();
		} else {
			return this.token;
		}
	}
};
