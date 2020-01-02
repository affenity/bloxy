module.exports = (client, messageType, name, message) => {
	message = !(message instanceof Object) ? JSON.parse(message) : message;
	const conversationId = message.ConversationId,
		conversationInfo = [conversationId];

	switch (messageType) {
	case "conversationremoved":
		client.emit("chatConversationRemoved", ...conversationInfo);
		break;
	case "participanttyping":
		client.emit("chatTyping", {
			isTyping: message.IsTyping,
			userId: message.UserId,
			conversationId
		});
		break;
	case "newmessage":
		client.emit("chat", ...conversationInfo);
		break;
	case "newmessagebyself":
		client.emit("chatSelf", ...conversationInfo);
		break;
	case "participantadded":
		client.emit("chatMemberAdded", ...conversationInfo);
		break;
	case "participantleft":
		client.emit("chatMemberLeft", ...conversationInfo);
		break;
	case "newconversation":
		client.emit("chatConversationAdded", ...conversationInfo);
		break;
	default:
		client.debug.log(`No handler was found for the message type: "${messageType}"`);
		break;
	}
};
