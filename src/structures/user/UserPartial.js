const UserBase = require("./UserBase");

class UserPartial extends UserBase {
	/**
	 * @param {Client} client The apis
	 * @param {Object} data The user data
	 */
	constructor (client, data) {
		super(client, data);
	}
}

module.exports = UserPartial;
