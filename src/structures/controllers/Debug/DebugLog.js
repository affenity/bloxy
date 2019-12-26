class DebugLog {
	/**
	 * @param {DebugController} controller
	 * @param {string} log
	 */
	constructor (controller, log) {
		this.controller = controller;
		const e = new Error(log);
		const clientInformation = `${(controller.client.loggedIn && controller.client.user.id) || "client"}`;
		this.log = `\n[Reported at: ${new Date().toUTCString()}] - ${clientInformation} - ${e.stack}\n\n`;

		if (controller.enabled) console.log(this.log);
	}
}

module.exports = DebugLog;
