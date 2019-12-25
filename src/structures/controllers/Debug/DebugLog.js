class DebugLog {
	constructor (controller, log) {
		this.controller = controller;
		const e = new Error(log);
		const clientInformation = `${(controller.client.loggedIn && controller.client.user.id) || "client"}`;
		this.log = `[Reported at: ${new Date().toUTCString()}] - ${clientInformation} - ${e.stack}`;

		if (controller.enabled) console.log(this.log);
	}
}

module.exports = DebugLog;
