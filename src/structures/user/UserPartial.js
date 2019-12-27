const UserBase = require("./UserBase");

class UserPartial extends UserBase {
	/**
	 * @param {Client} client The client
	 * @param {Object} data The user data
	 */
	constructor (client, data) {
		super(client);
	}
}

module.exports = UserPartial;
