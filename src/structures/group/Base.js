class GroupBase {
	constructor (client, data) {
		this.client = client;
		this.id = client.util.valueExtractor(data, "groupId");
	}

	/**
	 * @returns {Promise<User>}
	 */
	get () {
		return this.client.getUser(this.id);
	}

	block (block) {

	}
}

module.exports = GroupBase;
