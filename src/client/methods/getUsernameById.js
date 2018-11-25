

exports.run = async function (userId) {
	let cache = this._setup.cache;
	let userCache = await cache.getUserCache(`${userId}-id`);
    
	if (userCache != null) return userCache;

	let response = await this._setup.request.request(`https://api.roblox.com/users/${userId}`, {json:true});
	if (response.statusCode !== 200) throw new Error(`Failed to get username by userId. ${response.status}`);

	let username = response.body.Username;

	if (userId === undefined) throw new Error("Incorrect response retrieved for getUsernameById");

	await cache.cacheUser(`${username.toLowerCase()}-n`, userId);
	await cache.cacheUser(`${userId}-id`, username);
    
	return username;
};

exports.conf = {
	required: {
		params: 1
	},

	name: "getUsernameById",
	params: ["userId (Number)"],
	description: "Gets a user's name by their id"
};