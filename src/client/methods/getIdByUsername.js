

exports.run = async function (username) {
	let cache = this._setup.cache;
	let userCache = await cache.getUserCache(`${username.toLowerCase()}-n`);
    
	if (userCache != null) return userCache;

	let response = await this._setup.request.request(`https://api.roblox.com/users/get-by-username?username=${username}`, {json:true});
	if (response.statusCode !== 200) throw new Error(`Failed to get userId by username. ${response.status}`);

	let userId = response.body.Id;
	if (userId === undefined) throw new Error("Incorrect response retrieved for getIdByUsername");

	await cache.cacheUser(`${username.toLowerCase()}-n`, userId);
	await cache.cacheUser(`${userId.toString()}-id`, response.body.Username);

	return userId;
};

exports.conf = {
	required: {
		params: 1
	},

	name: "getIdByUsername",
	params: ["username (String)"],
	description: "Gets a user's id by their name"
};