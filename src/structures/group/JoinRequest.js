class GroupJoinRequest {
	constructor (client, data) {
		this.client = client;
		this.member = data.requester;
		this.created = new Date(data.created);
	}
}

module.exports = GroupJoinRequest;
