const DebugLog = require("./DebugLog");

/**
 * @type {DebugController}
 */
class DebugController {
	constructor (client) {
		this.client = client;
		this.enabled = client.options.setup.debugging || true;
	}

	log (log) {
		return new DebugLog(this, log);
	}
}

module.exports = DebugController;
