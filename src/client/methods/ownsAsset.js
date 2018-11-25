

exports.run = async function (userId, assetId) {
	let response = await this._setup.request.request(`https://api.roblox.com/ownership/hasasset?userId=${userId}&assetId=${assetId}`);
	if (response.statusCode !== 200) throw new Error(`Failed to check if user owns asset. Status code: ${response.statusCode}, message: ${response.statusMessage}`);
	return response.body.includes("true");
};


exports.conf = {
	required: {
		params: 2
	},


	name: "ownsAsset",
	params: ["userId (Number)", "assetId (Number)"],
	description: "Checks if the user owns the asset"
};