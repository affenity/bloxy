const PartialUser = require("../User").Partial;

module.exports = class ChatConversation {
	constructor (env, data) {
		this.client = env.client;
		this.env = env;
		this.id = data.id;
		this.title = data.title;
		this.initiator = data.initiator && new PartialUser(env, data.initiator);
		this.hasUnreadMessages = data.hasUnreadMessages;
		this.participants = data.participants.map(x => new PartialUser(env, x));
		this.conversationType = data.conversationType;
		this.conversationTitle = (data.conversationTitle || {}).titleForViewer;
		this.lastUpdated = new Date(data.lastUpdated);
	}

	getMessages (pageSize) {
		return this.env.getConversationMessages({
			conversationId: this.id,
			pageSize: pageSize || 100
		});
	}

	getUnreadMessages (pageSize) {
		return this.env.getUnreadConversationMessages([this.id], pageSize || 100)
			.then(res => res[this.id]);
	}

	addUsers (users) {
		return this.env.addToConversation(users, this.id);
	}

	markMessageRead (messageId) {
		return this.env.markMessageRead(this.id, messageId);
	}

	markRead () {
		return this.env.markConversationsRead([this.id]);
	}

	removeUser (user) {
		return this.env.removeFromConversation(user, this.id);
	}

	rename (newTitle) {
		return this.env.renameGroupConversation(this.id, newTitle);
	}

	sendMessage (message) {
		return this.env.sendMessage(message, this.id);
	}

	setTyping (isTyping, duration) {
		return this.env.updateTypingStatus(this.id, isTyping === true, duration);
	}
};
