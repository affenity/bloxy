class ChatAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://chat.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getSettings () {
		return this.request({
			url: "v2/chat-settings"
		});
	}

	getConversationsById (conversationIds) {
		return this.request({
			url: "v2/get-conversations",
			qs: {
				conversationIds: conversationIds.join("\n")
			}
		});
	}

	getConversationMessages ({ conversationId, amount, startMessageId }) {
		return this.request({
			url: "v2/get-messages",
			qs: {
				conversationId,
				pageSize: amount,
				startMessageId
			}
		});
	}

	getRolloutSettings (featureNames) {
		return this.request({
			url: "v2/get-rollout-settings",
			qs: {
				featureNames: featureNames.join("\n")
			}
		});
	}

	getUnreadConversationsCount () {
		return this.request({
			url: "v2/get-unread-conversation-count"
		});
	}

	getUnreadConversationMessages ({ conversationIds, amount }) {
		return this.request({
			url: "v2/get-unread-messages",
			qs: {
				conversationIds: conversationIds.join("\n"),
				pageSize: amount
			}
		});
	}

	getConversations ({ page, amount }) {
		return this.request({
			url: "v2/get-user-conversations",
			qs: {
				pageNumber: page,
				pageSize: amount
			}
		});
	}

	getMetadata () {
		return this.request({
			url: "v2/metadata"
		});
	}

	getLatestConversationMessages ({ conversationIds, amount }) {
		return this.request({
			url: "v2/multi-get-latest-messages",
			qs: {
				conversationIds: conversationIds.join("\n"),
				pageSize: amount
			}
		});
	}

	addUsersToConversation ({ userIds, conversationId }) {
		return this.request({
			url: "v2/add-to-conversation",
			method: "POST",
			json: {
				participantUserIds: userIds,
				conversationId
			}
		});
	}

	markConversationMessageRead ({ conversationId, messageId }) {
		return this.request({
			url: "v2/mark-as-read",
			method: "POST",
			json: {
				conversationId,
				endMessageId: messageId
			}
		});
	}

	markConversationsSeen (conversationIds) {
		return this.request({
			url: "v2/mark-as-seen",
			method: "POST",
			json: {
				conversationsToMarkSeen: conversationIds
			}
		});
	}

	removeUserFromConversation ({ userId, conversationId }) {
		return this.request({
			url: "v2/remove-from-conversation",
			method: "POST",
			json: {
				participantUserId: userId,
				conversationId
			}
		});
	}

	renameGroupConversation ({ conversationId, name }) {
		return this.request({
			url: "v2/rename-group-conversation",
			method: "POST",
			json: {
				conversationId,
				newTitle: name
			}
		});
	}

	removeConversationUniverse (conversationId) {
		return this.request({
			url: "v2/reset-conversation-universe",
			method: "POST",
			json: {
				conversationId
			}
		});
	}

	sendGameLinkMessage ({ universeId, conversationId, decorators }) {
		return this.request({
			url: "v2/send-game-link-message",
			method: "POST",
			json: {
				universeId,
				conversationId,
				decorators
			}
		});
	}

	sendMessage ({ message, conversationId, decorators }) {
		return this.request({
			url: "v2/send-message",
			method: "POST",
			json: {
				message,
				conversationId,
				decorators
			}
		});
	}

	setConversationUniverse ({ conversationId, universeId }) {
		return this.request({
			url: "v2/set-conversation-universe",
			method: "POST",
			json: {
				conversationId,
				universeId
			}
		});
	}

	createGroupConversation ({ userIds, name }) {
		return this.request({
			url: "v2/start-group-conversation",
			method: "POST",
			json: {
				participantUserIds: userIds,
				title: name
			}
		});
	}

	startConversationWithUser (userId) {
		return this.request({
			url: "v2/start-one-to-one-conversation",
			method: "POST",
			json: {
				participantUserId: userId
			}
		});
	}

	startCloudConversation (placeId) {
		return this.request({
			url: "v2/start-cloud-edit-conversation",
			method: "POST",
			json: {
				placeId
			}
		});
	}

	updateTypingStatus ({ conversationId, isTyping }) {
		return this.request({
			url: "v2/update-user-typing-status",
			method: "POST",
			json: {
				conversationId,
				isTyping
			}
		});
	}
}

module.exports = ChatAPI;
