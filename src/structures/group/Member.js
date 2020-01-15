const UserPartial = require("../user").Partial;
const GroupRole = require("./Role");

class GroupMember extends UserPartial {
	constructor (client, data) {
		super(client, data);
		this.role = new GroupRole(client, data);
	}
}

module.exports = GroupMember;
