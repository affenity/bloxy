const GroupMember = require("./Member");

class GroupShout {
	constructor (client, data) {
		this.client = client;
		this.poster = new GroupMember(client, data.poster);
		this.body = data.body;
		this.created = new Date(data.created);
	}
}
