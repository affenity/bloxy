module.exports = (client, messageType, name, message) => {
	message = !(message instanceof Object) ? JSON.parse(message) : message;
	const args = message.EventArgs || {};

	switch (messageType) {
	case "friendshipdestroyed":
		if (client.user.id === args.UserId1) {
			client.emit("friendLost", args.UserId2);
		}
		break;
	case "friendshiprequested":
		client.emit("friendRequest", args.UserId1);
		break;
	case "friendshipcreated":
		client.emit("friendAdded", args.UserId1);
		break;
	default:
		client.debug.log(`No handler was found for the message type: "${messageType}"`);
		break;
	}
};
