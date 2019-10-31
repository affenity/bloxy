const tmpCache = {};

module.exports = (client, message) => {
	const messageType = message.Type;
	const conversationId = message.ConversationId;
	const getConversation = () => client.chat.getConversation(conversationId);

	if (!messageType) throw new Error("Unable to categorize incoming WS request");

	if (messageType === "ConversationRemoved") {
		if (!tmpCache[conversationId]) {
			client.emit("chatConversationRemoved", conversationId);
			tmpCache[conversationId] = true;
			setTimeout(() => {
				delete tmpCache[conversationId];
			}, 500);
		}
	} else if (messageType === "ParticipantTyping") {
		client.emit("chatTyping", { isTyping: message.IsTyping, userId: message.UserId, conversationId }, getConversation);
	} else if (messageType === "NewMessage") {
		client.emit("chatMessage", conversationId, getConversation);
	} else if (messageType === "NewMessageBySelf") {
		client.emit("chatMessageSent", conversationId, getConversation);
	} else if (messageType === "ParticipantAdded") {
		client.emit("chatMemberAdded", conversationId, getConversation);
	} else if (messageType === "ParticipantLeft") {
		client.emit("chatMemberLeft", conversationId, getConversation);
	} else if (messageType === "NewConversation" || messageType === "AddedToConversation") {
		client.emit("chatConversation", conversationId, getConversation);
	}
};
