
module.exports = async function (captchaResponse, username, setup) {
	let newPromise = new Promise(async function(resolve, reject) {
		let url = `https://api.roblox.com/captcha/validate/login?username=${username}`;
		let options = {
			form: {
				"g-Recaptcha-Response": captchaResponse,
				"isInvisible": true
			},
			method: "POST"
		};
        
		setup.request.request(url, options).then(response=>{
			if (response.statusCode !== 200) return reject(`Failed to verify login. Status code: ${response.statusCode}, message: ${response.statusMessage}`);
			return resolve(true);
		});
	});
	return newPromise;
};