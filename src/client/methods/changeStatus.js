

exports.run = async function (newStatus) {
    
	let options = {
		inputs: {
			status: newStatus,
			sendToFacebook: false
		},
		method: "POST",
		json: true
	};

	let response = await this._setup.request.request("https://www.roblox.com/home/updatestatus", options);
	if (response.statusCode !== 200) throw new Error(`Failed to update current status. ${response.status}`);

	if (!response.body || !response.body.success) return {
		success: false
	};

	return {
		success: true,
		newStatus: newStatus
	}
};



exports.conf = {
	required: {
		params: 1,
		auth: true
	},

	name: "changeStatus",
	description: "Changes the status of the authenticated user",
	parmas: ["status (String"]
};