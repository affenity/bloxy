module.exports = async client => {
	const response = await client.rest.request({
		url: "https://www.roblox.com/game/GetCurrentUser.ashx"
	}).catch(e => {
		throw new Error(e);
	});

	const body = response.data.body;

	if (body.includes("null")) {
		throw new Error(`Failed to validate login, incorrect cookies!`);
	}

	client.user = new client.util.structures.user.Auth(client, {
		id: Number(body)
	});
	client.loggedIn = true;
	client.emit("loggedIn");

	return client.user;
};
