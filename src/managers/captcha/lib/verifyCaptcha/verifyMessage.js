
module.exports = async function (captchaResponse, setup) {
	let newPromise = new Promise(async function(resolve, reject) {
		let url = "https://api.roblox.com/captcha/validate/privatemessage";
		let options = {
			form: {
				"g-Recaptcha-Response": captchaResponse,
				"isInvisible": true
			},
			method: "POST"
		};

		setup.request.request(url, options).then(response => {
			if (response.statusCode !== 200) return reject(`Failed to validate captcha. Status code: ${response.statusCode}, message: ${response.statusMessage}`);
			resolve(true);
		});
	});

	return newPromise;
};