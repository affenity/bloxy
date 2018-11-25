

exports.run = async function (assetId) {
	let options = {
		form: {
			assetId: assetId
		},
		method: "POST"
	};

	let response = await this._setup.request.request("https://www.roblox.com/asset/delete-from-inventory", options);
	if (response.statusCode !== 200) throw new Error(`Failed to delete from inventory. ${response.status}`);

	return {
		success: true,
		assetId: assetId
	};
};

exports.conf = {
	required: {
		params: 1,
		auth: true
	},

	name: "deleteFromInventory",
	description: "Deletes an asset from the inventory",
	params: ["assetId (Number)"]
};