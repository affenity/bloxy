const PartialUser = require("./User").Partial;

module.exports = class Message {
	constructor (env, data) {
		this.env = env;
		this.id = data.Id;
		this.sender = new PartialUser(env, data.Sender);
		this.recipient = new PartialUser(env, data.Recipient);
		this.subject = data.Subject;
		this.body = data.Body;
		this.created = new Date(data.Created);
		this.read = data.IsRead;
		this.systemMessage = data.IsSystemMessage;
	}

	reply (title, message) {
		return this.env.client.user.sendMessage(this.id, title, message);
	}
};
