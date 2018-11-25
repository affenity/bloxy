


module.exports = async function (code) {
	
	let { user, ticket } = this._setup.authTab.twostep;

	let options = {

		json: {
			username: user,
			ticket  : ticket,
			code    : code,
			rememberDevice: false,
			actionType: "Login"
		},
		method: "POST"
	};

	let response = await this._setup.request.request("https://auth.roblox.com/v2/twostepverification/verify", options);

	if (response.statusCode === 200) {
		
		this._setup.authorized = true;
		this.emit("ready");

		return {
			success: true
		};
	}

	throw new Error(`Failed to verify the 2FA code provided. ${response.status}`);
};