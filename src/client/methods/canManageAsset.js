

exports.run = async function (userId, assetId) {
	let response = await this._setup.request.request(`https://api.roblox.com/users/${userId}/canmanage/${assetId}`, { json: true });
	if (!response.body.Success) throw new Error(`Failed to check if user can manage asset. ${response.status}`);

	return (response.body.CanManage === true);
};



exports.conf = {
	required: {
		params: 2,
		auth: false
	},

	name: "canManageAsset",
	description: "Checks if a user owns the asset",
	params: ["userId (Number)", "assetId (Number)"]
};