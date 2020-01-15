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
}

module.exports = UserBase;
