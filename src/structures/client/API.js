class API {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://api.roblox.com/";
		this.url = u => this.baseUrl + u;
		this.request = d => this.client.rest.request(d);
		this.checkAuth = n => {
			if (!this.client.loggedIn) {
				throw new Error(`Function ${n} requires you to be authenticated`);
			}
		};
	}

	getAssetVersions ({ id, page, placeId }) {
		this.checkAuth("api.getAssetsVersion");

		return this.request({
			url: this.url(`assets/${id}/versions`),
			json: true,
			qs: page ? {
				page
			} : {}
		}).then(r => r.data.body);
	}

	awardBadge ({ userId, badgeId, placeId }) {
		return this.request({
			url: this.url("assets/award-badge"),
			method: "POST",
			qs: {
				userId,
				badgeId,
				placeId
			}
		}).then(r => r.data.body);
	}

	getBalance () {
		this.checkAuth("api.getBalance");

		return this.request({
			url: this.url("currency/balance"),
			json: true
		}).then(r => r.data.body);
	}

	getUserFriends ({ userId, page }) {
		return this.request({
			url: this.url(`users/${userId}/friends`),
			qs: page ? {
				page
			} : {},
			json: true
		}).then(r => r.data.body);
	}

	acceptFriendRequest (userId) {
		this.checkAuth("api.acceptFriendRequest");

		return this.request({
			url: this.url("user/accept-friend-request"),
			method: "POST",
			qs: {
				requesterUserId: userId
			},
			json: true
		}).then(r => r.data.body);
	}

	declineFriendRequest (userId) {
		this.checkAuth("api.declineFriendRequest");

		return this.request({
			url: this.url("user/decline-friend-request"),
			method: "POST",
			qs: {
				requesterUserId: userId
			},
			json: true
		}).then(r => r.data.body);
	}

	sendFriendRequest (userId) {
		this.checkAuth("api.sendFriendRequest");

		return this.request({
			url: this.url("user/request-friendship"),
			method: "POST",
			qs: {
				recipientUserId: userId
			},
			json: true
		}).then(r => r.data.body);
	}

	getUserFriendsCount (userId) {
		return this.request({
			url: this.url("user/get-friendship-count"),
			qs: {
				userId
			},
			json: true
		}).then(r => r.data.body);
	}

	unfriendUser (userId) {
		this.checkAuth("api.unfriendUser");

		return this.request({
			url: this.url("user/unfriend"),
			method: "POST",
			qs: {
				friendUserId: userId
			},
			json: true
		}).then(r => r.data.body);
	}

	isUserFollowing ({ userId, otherUserId2 }) {
		return this.request({
			url: this.url("user/following-exists"),
			qs: {
				userId: userId,
				followerUserId: otherUserId2
			},
			json: true
		}).then(r => r.data.body);
	}

	followUser (userId) {
		this.checkAuth("api.followUser");

		return this.request({
			url: this.url("user/follow"),
			method: "POST",
			qs: {
				followedUserId: userId
			},
			json: true
		}).then(r => r.data.body);
	}

	unfollowUser (userId) {
		this.checkAuth("api.unfollowUser");

		return this.request({
			url: this.url("user/unfollow"),
			method: "POST",
			qs: {
				followedUserId: userId
			},
			json: true
		}).then(r => r.data.body);
	}

	getUserGroups (userId) {
		return this.request({
			url: this.url(`users/${userId}/groups`),
			json: true
		}).then(r => r.data.body);
	}

	getGroup (groupId) {
		return this.request({
			url: this.url(`groups/${groupId}`),
			json: true
		}).then(r => r.data.body);
	}

	getGroupAllies (groupId, page) {
		return this.request({
			url: this.url(`groups/${groupId}/allies`),
			qs: page ? {
				page
			} : {},
			json: true
		}).then(r => r.data.body);
	}

	getGroupEnemies (groupId, page) {
		return this.request({
			url: this.url(`groups/${groupId}/enemies`),
			qs: page ? {
				page
			} : {},
			json: true
		}).then(r => r.data.body);
	}

	getIncomingItems () {
		this.checkAuth("api.getIncomingItems");

		this.checkAuth("api.getIncomingInfo");
		return this.request({
			url: this.url("incoming-items/counts"),
			json: true
		}).then(r => r.data.body);
	}

	getProductInfo (assetId) {
		return this.request({
			url: this.url("marketplace/productinfo"),
			qs: {
				assetId
			},
			json: true
		}).then(r => r.data.body);
	}

	getGamePassInfo (gamePassId) {
		return this.request({
			url: this.url("marketplace/game-pass-product-info"),
			qs: {
				gamePassId
			},
			json: true
		}).then(r => r.data.body);
	}

	userOwnsAsset ({ userId, assetId }) {
		return this.request({
			url: this.url("ownership/hasasset"),
			qs: {
				userId,
				assetId
			},
			json: true
		}).then(r => r.data.body);
	}

	getDeviceInfo () {
		return this.request({
			url: this.url("reference/deviceinfo"),
			json: true
		}).then(r => r.data.body);
	}

	blockUser (userId) {
		this.checkAuth("api.blockUser");

		return this.request({
			url: this.url("userblock/block"),
			qs: {
				userId
			},
			json: true
		}).then(r => r.data.body);
	}

	unblockUser (userId) {
		this.checkAuth("api.unblockUser");

		return this.request({
			url: this.url("userblock/unblock"),
			qs: {
				userId
			},
			json: true
		}).then(r => r.data.body);
	}

	getUserByUsername (username) {
		return this.request({
			url: this.url("users/get-by-username"),
			qs: {
				username
			},
			json: true
		}).then(r => r.data.body);
	}

	userCanManageAsset ({ userId, assetId }) {
		return this.request({
			url: this.url(`users/${userId}/canmanage/${assetId}`),
			json: true
		}).then(r => r.data.body);
	}
}


module.exports = API;
