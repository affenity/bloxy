class FriendsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://friends.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getDataFromNearbyCode (code) {
		return this.request({
			url: `v1/friends/verified/nearby/code/${code}`
		});
	}

	getNearbyCodeSessionHealth () {
		return this.request({
			url: `v1/friends/verified/nearby/health`
		});
	}

	redeemNearbyCode (code) {
		return this.request({
			url: `v1/friends/verified/nearby/${code}/redeem`,
			method: "POST"
		});
	}

	deleteNearbyCodeSession () {
		return this.request({
			url: "v1/friends/verified/nearby/session",
			method: "DELETE"
		});
	}

	createNearbyCodeSession () {
		return this.request({
			url: "v1/friends/verified/nearby/session",
			method: "POST"
		});
	}

	getMetadata (userId) {
		return this.request({
			url: "v1/metadata",
			qs: {
				targetUserId: userId
			}
		});
	}

	getFriendsCount () {
		return this.request({
			url: "v1/my/friends/count"
		});
	}

	getFriendRequests ({ sortOrder, limit, cursor }) {
		return this.request({
			url: "v1/my/friends/requests",
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getFriendRequestsCount () {
		return this.request({
			url: "v1/user/friend-requests/count"
		});
	}

	getUserFollowers ({ userId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/users/${userId}/followers`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getUserFollowersCount (userId) {
		return this.request({
			url: `v1/users/${userId}/followers/count`
		});
	}

	getUserFollowing ({ userId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/users/${userId}/followings`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getUserFollowingCount (userId) {
		return this.request({
			url: `v1/users/${userId}/followings/count`
		});
	}

	getUserFriends (userId) {
		return this.request({
			url: `v1/users/${userId}/friends`
		});
	}

	getUserFriendsCount (userId) {
		return this.request({
			url: `v1/users/${userId}/friends/count`
		}, {}, {
			disableAuth: true
		});
	}

	getUserFriendsOnline (userId) {
		return this.request({
			url: `v1/users/${userId}/friends/online`
		});
	}

	getUserStatusesWith ({ userId, userIds }) {
		return this.request({
			url: `v1/users/${userId}/friends/statuses`,
			qs: {
				userIds: userIds.join("\n")
			}
		});
	}

	declineAllFriendRequests () {
		return this.request({
			url: "v1/user/friend-requests/decline-all",
			method: "POST"
		});
	}

	acceptFriendRequest (userId) {
		return this.request({
			url: `v1/users/${userId}/accept-friend-request`,
			method: "POST"
		});
	}

	declineFriendRequest (userId) {
		return this.request({
			url: `v1/users/${userId}/decline-friend-request`,
			method: "POST"
		});
	}

	followUser (userId) {
		return this.request({
			url: `v1/users/${userId}/follow`,
			method: "POST"
		});
	}

	sendFriendRequest (userId) {
		return this.request({
			url: `v1/users/${userId}/request-friendship`
		});
	}

	unfollowUser (userId) {
		return this.request({
			url: `v1/users/${userId}/unfollow`,
			method: "POST"
		});
	}

	unfriendUser (userId) {
		return this.request({
			url: `v1/users/${userId}/unfriend`,
			method: "POST"
		});
	}
}

module.exports = FriendsAPI;
