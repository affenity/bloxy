

exports.run = async function (identifier) {
	let userId = this.misc.getUserId(identifier);

	if (typeof(userId) === "undefined") throw new Error("Did not provide a valid user or userId");
    
	let options = {
		form: {
			blockeeId: parseInt(userId)
		},
		method: "POST"
	};

	let response = await this._setup.request.request("https://www.roblox.com/userblock/blockuser", options);
	if (response.statusCode !== 200) throw new Error(`Failed to block user. ${response.status}`);

	return {
		success: true,
		blocked: userId
	};
};

exports.conf = {
	required: {
		params: 1,
		auth: false//true
	},

	name: "blockUser",
	description: "Blocks a user",
	params: ["user (Number | Class-PartialUser | Class-RobloxUser)"]
};