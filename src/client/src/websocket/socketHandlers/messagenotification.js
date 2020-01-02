module.exports = (client, messageType, name, message) => {
	message = !(message instanceof Object) ? JSON.parse(message) : message;
	const messageId = message.MessageId;

	switch (messageType) {
	case "created":
		client.emit("message", messageId);
		break;
	case "markasread":
		client.emit("messageRead", messageId);
		break;
	case "markasunread":
		client.emit("messageUnread", messageId);
		break;
	case "archived":
		client.emit("messageArchived", messageId);
		break;
	case "unarchived":
		client.emit("messageUnarchived", messageId);
		break;
	default:
		client.debug.log(`No handler was found for the message type: "${messageType}"`);
		break;
	}
};
