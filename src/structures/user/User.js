const UserPartial = require("./UserPartial");

class User extends UserPartial {
	/**
	 * Creates a new complete User
	 * @param {Client} client The apis
	 * @param {Object} data The user data
	 */
	constructor (client, data) {
		super(client, data);
	}
}

module.exports = User;
