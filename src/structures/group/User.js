const GroupBase = require("./Base");
const GroupRole = require("./Role");

class GroupUser extends GroupBase {
	constructor (client, data = {}) {
		super(client, data.group || data);
		this.role = data.role && new GroupRole(client, data.role);
	}
}

module.exports = GroupUser;
