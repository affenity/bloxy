const refresh = require("./lib/refresh");



class XcsrfManager {

	constructor (requestManager) {

		this.token = null;
		this.requestInterval = null;
		this.requestManager = requestManager;
	}

	async refresh () {
		return refresh.bind(this)();
	}

	startInterval (updateRate) {
		updateRate = updateRate || 5 * 60000;
		this.stopInterval();

		this.requestInterval = setInterval( () => {
			this.refresh();
		}, updateRate);
	}

	stopInterval () {
		if (this.requestInterval) clearInterval(this.requestInterval);
	}
}

module.exports = XcsrfManager;