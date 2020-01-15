class UsersAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://users.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getUserInfo (userId) {
		return this.request({
			url: `v1/users/${userId}`
		}, {}, {
			disableAuth: true
		});
	}

	getUsersByNames (usernames) {
		return this.request({
			url: "v1/usernames/users",
			method: "POST",
			json: {
				usernames
			}
		}, {}, {
			disableAuth: true
		});
	}

	getUsersByIds (userIds) {
		return this.request({
			url: "v1/users",
			method: "POST",
			json: {
				userIds
			}
		}, {}, {
			disableAuth: true
		});
	}
}

module.exports = UsersAPI;
