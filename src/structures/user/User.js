const UserPartial = require("./UserPartial");

class User extends UserPartial {
	constructor (client, data) {
		super(client, data);
	}
}

module.exports = User;
