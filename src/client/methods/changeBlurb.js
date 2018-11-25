

exports.run = async function (newBlurb) {

	let options = {
		inputs: {
			Description: newBlurb
		},

		method: "POST"
	};

	let response = await this._setup.request.request("https://www.roblox.com/account/settings/description", options);
	if (response.statusCode !== 200) throw new Error(`Failed to change blurb. ${response.status}`);

	return {
		success: true,
		newBlurb: newBlurb
	};
};




exports.conf = {
	required: {
		params: 1,
		auth: true
	},

	name: "changeBlurb",
	description: "Changes the blurb of the authenticated user",
	parmas: ["blurb (String)"]
};