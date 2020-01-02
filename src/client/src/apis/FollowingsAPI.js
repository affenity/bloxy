class FollowingsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://followings.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getFollowingUniverses (userId) {
		return this.request({
			url: `v2/users/${userId}/universes`
		});
	}

	getUniverseFollowingStatus ({ userId, universeId }) {
		return this.request({
			url: `v1/users/${userId}/universes/${universeId}/status`
		});
	}

	removeUniverseFollowing ({ userId, universeId }) {
		return this.request({
			url: `v1/users/${userId}/universes/${universeId}`,
			method: "DELETE"
		});
	}

	followUniverse ({ userId, universeId }) {
		return this.request({
			url: `v1/users/${userId}/universes/${universeId}`
		});
	}
}

module.exports = FollowingsAPI;
