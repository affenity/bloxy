const UserBase = require("./UserBase");

class UserPartial extends UserBase {
	constructor (client, data) {
		super(client);
	}
}

module.exports = UserPartial;
