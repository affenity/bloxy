class UsersAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://users.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getUserInfo (userId) {
		return this.request({
			url: `v1/users/${userId}`
		});
	}

	getUsersByNames (usernames) {
		return this.request({
			url: "v1/usernames/users",
			method: "POST",
			json: {
				usernames
			}
		});
	}

	getUsersByIds (userIds) {
		return this.request({
			url: "v1/users",
			method: "POST",
			json: {
				userIds
			}
		});
	}
}

module.exports = UsersAPI;
