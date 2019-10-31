module.exports = (client, message) => {
	message.forEach(presence => {
		client.emit("presenceChanged", presence.UserId);
	});
};
