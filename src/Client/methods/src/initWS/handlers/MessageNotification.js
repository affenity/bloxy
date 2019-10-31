module.exports = (client, message) => {
	const messageType = message.Type;
	const messageId = message.MessageId;

	if (!messageType) throw new Error("Unable to categorize incoming WS request");

	if (messageType === "Created") {
		client.emit("message", messageId);
	} else if (messageType === "MarkAsRead") {
		client.emit("messageRead", messageId);
	} else if (messageType === "MarkAsUnread") {
		client.emit("messageUnread", messageId);
	} else if (messageType === "Archived") {
		client.emit("messageArchived", messageId);
	}
};
