class GroupRole {
	constructor (client, data) {
		this.client = client;
		this.id = data.id;
		this.name = data.name;
		this.rank = data.rank;
		this.group = data.group;
	}
}

module.exports = GroupRole;
