class UserPartial {
	/**
	 * @param {Client} client The client
	 * @param {Object} data The user data
	 */
	constructor (client, data) {
		this.client = client;
		this.userId = data.userId;
		this.username = data.username;
	}
}

module.exports = UserPartial;
