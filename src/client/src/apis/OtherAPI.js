class OtherAPI {
	constructor (client) {
		this.client = client;
		this.request = require("./_request")
			.bind(this, this);
	}

	getUser (userId) {
		return this.request({
			customUrl: `https://www.roblox.com/users/profile/profileheader-json?userId=${userId}`
		}, {}, {
			disableAuth: true
		});
	}
}

module.exports = OtherAPI;
