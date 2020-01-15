class GroupBase {
	constructor (client, data) {
		this.client = client;
		this.id = client.util.valueExtractor(data, "groupId");
	}
}

module.exports = GroupBase;
