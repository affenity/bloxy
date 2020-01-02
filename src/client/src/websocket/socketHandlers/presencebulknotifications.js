module.exports = (client, messageType, name, message) => {
	if (!Array.isArray(message)) {
		throw new Error("Message was not an array, which was expected");
	} else {
		message.forEach(presence => {
			client.emit("presenceChanged", presence.UserId);
		});
	}
};

module.exports.disableMessageTypeCheck = true;
