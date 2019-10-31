// eslint-disable-next-line consistent-return
module.exports = (client, message) => {
	const messageType = message.Type;
	const args = message.EventArgs || {};
	const getUser = id => () => client.getUser(id);

	if (!messageType) throw new Error("Unable to categorize incoming WS request");

	if (messageType === "FriendshipDestroyed") {
		if (client.user.id === args.UserId1) return client.emit("friendLost", args.UserId2, getUser(args.UserId2));
	} else if (messageType === "FriendshipRequested") {
		return client.emit("friendRequest", args.UserId1, getUser(args.UserId1));
	} else if (messageType === "FriendshipCreated") {
		return client.emit("friendAdded", args.UserId1, getUser(args.UserId1));
	}
};
