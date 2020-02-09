class API {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://api.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAssetVersions ({ id, page, placeId }) {
		return this.request({
			url: `assets/${id}/versions`,
			qs: {
				page,
				placeId
			}
		});
	}

	awardBadge ({ userId, badgeId, placeId }) {
		return this.request({
			url: "assets/award-badge",
			method: "POST",
			qs: {
				userId,
				badgeId,
				placeId
			}
		});
	}

	getBalance () {
		return this.request({
			url: "currency/balance"
		});
	}

	getUserFriends ({ userId, page }) {
		return this.request({
			url: `users/${userId}/friends`,
			qs: {
				page
			}
		});
	}

	acceptFriendRequest (userId) {
		return this.request({
			url: "user/accept-friend-request",
			method: "POST",
			qs: {
				requesterUserId: userId
			}
		});
	}

	declineFriendRequest (userId) {
		return this.request({
			url: "user/decline-friend-request",
			method: "POST",
			qs: {
				requesterUserId: userId
			}
		});
	}

	sendFriendRequest (userId) {
		return this.request({
			url: "user/request-friendship",
			method: "POST",
			qs: {
				recipientUserId: userId
			}
		});
	}

	getUserFriendsCount (userId) {
		return this.request({
			url: "user/get-friendship-count",
			qs: {
				userId
			}
		});
	}

	unfriendUser (userId) {
		return this.request({
			url: "user/unfriend",
			method: "POST",
			qs: {
				friendUserId: userId
			}
		});
	}

	isUserFollowing ({ userId, otherUserId }) {
		return this.request({
			url: "user/following-exists",
			qs: {
				userId: otherUserId,
				followerUserId: userId
			}
		}, {}, {
			disableAuth: true
		});
	}

	followUser (userId) {
		return this.request({
			url: "user/follow",
			method: "POST",
			qs: {
				followedUserId: userId
			}
		});
	}

	unfollowUser (userId) {
		return this.request({
			url: "user/unfollow",
			method: "POST",
			qs: {
				followedUserId: userId
			}
		});
	}

	getUserGroups (userId) {
		return this.request({
			url: `users/${userId}/groups`
		}, {}, {
			disableAuth: true
		});
	}

	getGroup (groupId) {
		return this.request({
			url: `groups/${groupId}`
		}, {}, {
			disableAuth: true
		});
	}

	getGroupAllies (groupId, page) {
		return this.request({
			url: `groups/${groupId}/allies`,
			qs: {
				page
			}
		});
	}

	getGroupEnemies (groupId, page) {
		return this.request({
			url: `groups/${groupId}/enemies`,
			qs: {
				page
			}
		});
	}

	getIncomingItems () {
		return this.request({
			url: "incoming-items/counts"
		});
	}

	getProductInfo (assetId) {
		return this.request({
			url: "marketplace/productinfo",
			qs: {
				assetId
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGamePassInfo (gamePassId) {
		return this.request({
			url: "marketplace/game-pass-product-info",
			qs: {
				gamePassId
			}
		}, {}, {
			disableAuth: true
		});
	}

	userOwnsAsset ({ userId, assetId }) {
		return this.request({
			url: "ownership/hasasset",
			qs: {
				userId,
				assetId
			},
			json: false
		}, {}, {
			disableAuth: true
		});
	}

	getDeviceInfo () {
		return this.request({
			url: "reference/deviceinfo"
		}, {}, {
			disableAuth: true
		});
	}

	blockUser (userId) {
		return this.request({
			url: "userblock/block",
			qs: {
				userId
			},
			method: "POST"
		});
	}

	unblockUser (userId) {
		return this.request({
			url: "userblock/unblock",
			qs: {
				userId
			},
			method: "POST"
		});
	}

	getUserByUsername (username) {
		return this.request({
			url: "users/get-by-username",
			qs: {
				username
			}
		}, {}, {
			disableAuth: true
		});
	}

	userCanManageAsset ({ userId, assetId }) {
		return this.request({
			url: `users/${userId}/canmanage/${assetId}`
		}, {}, {
			disableAuth: true
		});
	}

	getUserById (userId) {
		return this.request({
			url: `users/${userId}`
		}, {}, {
			disableAuth: true
		});
	}
}


module.exports = API;
