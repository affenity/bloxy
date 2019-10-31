module.exports = class ChatMessage {
	constructor (env, data, conversationId) {
		this.env = env;

		this.conversationId = conversationId;
		this.id = data.id;
		this.senderType = data.senderType;
		this.sent = new Date(data.sent);
		this.read = data.read;
		this.messageType = data.messageType;
		this.senderId = data.senderTargetId;
		this.content = data.content;
	}

	markRead () {
		return this.env.markMessageRead(this.conversationId, this.id);
	}

	reply (message) {
		return this.env.sendMessage(message, this.conversationId);
	}
};
