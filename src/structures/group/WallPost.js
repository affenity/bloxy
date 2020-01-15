const GroupMember = require("./Member");

class GroupWallPost {
	constructor (client, data) {
		this.client = client;
		this.id = data.id;
		this.poster = new GroupMember(client, data.poster);
		this.body = data.body;
		this.created = new Date(data.created);
	}
}

module.exports = GroupWallPost;
