class ContactsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://contacts.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getUserTags (userIds) {
		return this.request({
			url: "v1/user/get-tags",
			method: "POST",
			json: {
				targetUserIds: userIds
			}
		});
	}

	setPendingTag ({ userId, tag }) {
		return this.request({
			url: "v1/user/set-pending-tag",
			method: "POST",
			json: {
				targetUserId: userId,
				userTag: tag
			}
		});
	}

	setTag ({ userId, tag }) {
		return this.request({
			url: "v1/user/tag",
			method: "POST",
			json: {
				targetUserId: userId,
				userTag: tag
			}
		});
	}
}

module.exports = ContactsAPI;
