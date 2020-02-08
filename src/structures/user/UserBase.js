class UserBase {
	/**
	 * User base
	 * @param {Client} client The apis
	 * @param {Object} data Data about a user
	 */
	constructor (client, data) {
		this.client = client;
		this.id = client.util.valueExtractor(data, "userId");
	}

	get () {
		return this.client.getUser(this.id);
	}

	block () {
		return this.client.user.block(this.id);
	}

	unblock () {
		return this.client.user.unblock(this.id);
	}

	acceptFriendRequest () {
		return this.client.user.acceptFriendRequest(this.id);
	}

	declineFriendRequest () {
		return this.client.user.declineFriendRequest(this.id);
	}

	follow () {
		return this.client.user.follow(this.id);
	}

	unfollow () {
		return this.client.user.unfollow(this.id);
	}

	sendFriendRequest () {
		return this.client.user.sendFriendRequest(this.id);
	}

	getNumFriends () {
		return this.client.apis.friends.getUserFriendsCount(this.id);
	}
}

module.exports = UserBase;
