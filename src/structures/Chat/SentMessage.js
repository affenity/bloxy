module.exports = class SentChatMessage {
	constructor (env, data, conversationId) {
		this.env = env;
		this.conversationId = conversationId;
		this.content = data.content;
		this.filtered = data.filteredForReceivers;
		this.id = data.messageId;
		this.sent = new Date(data.sent);
		this.messageType = data.messageType;
		this.resultType = data.resultType;
		this.statusMessage = data.statusMessage;
	}
};
