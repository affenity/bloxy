class PresenceAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://presence.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	registerAppPresence (location) {
		return this.request({
			url: "v1/presence/register-app-presence",
			qs: {
				location
			}
		});
	}

	getUserPresences (userIds) {
		return this.request({
			url: "v1/presence/users",
			method: "POST",
			json: {
				userIds
			}
		});
	}
}

module.exports = PresenceAPI;
