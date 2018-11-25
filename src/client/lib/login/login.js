const validateOptions = require("./validateOptions");
const authenticate    = require("./authenticate");
// eslint-disable-next-line no-unused-vars
const bloxyClient     = require("../../client");


module.exports = async function login () {

	/**
     * @type {bloxyClient}
     */
    
	let self = this;

	let newPromise = new Promise(async function(resolve, reject) {
		let loginOptions = validateOptions(self._setup);
		if (typeof (loginOptions) === "string") return reject(loginOptions);

		if (loginOptions.cookie) {
			let cookie = self._setup.request.createCookie(".ROBLOSECURITY", loginOptions.cookie, "roblox.com", false, false);
			self._setup.request.jar.setCookie(cookie, "https://roblox.com");
            
			let authUserId = await authenticate(self).catch(e=>reject(e));
            
			if (isNaN(authUserId) ||typeof(authUserId) === "undefined") return reject("Incorrect account credentials provided");
            
            
			resolve({
				userId: authUserId
			});
		} else {
			await self._setup.xcsrf.refresh();

			let response = await self._setup.request.request("https://auth.roblox.com/v2/login", { method: "POST", json: loginOptions});
			let body = response.body;

			if (response.statusCode !== 200 && !self._setup.authTab.captchaKey) return reject("Failed to log in. Either you have provided incorrect credentials or you were faced with a captcha but didn't have a 2captcha API key.");

			if (body && body.errors && body.errors[0] && body.errors[0].code === 2) {
				if (!self._setup.authTab.captchaKey) return reject("You have to solve a captcha and you do not have a 2captcah API key. Please wait a bit before trying again, or sign in with Roblox cookies, or provide an API key.");

				self._setup.captchaManager.solveCaptcha("https://www.roblox.com/newlogin").then( async (captchaResponse) => {
					let verifiedLogin = await self._setup.captchaManager.verifyCaptchaLogin(captchaResponse, loginOptions.cvalue, self._setup);
					if (!verifiedLogin) return reject("Failed to verify captcha response");
					resolve(login.bind(self)());
				}).catch(reject);
			}


			if (body && body.user && body.user.id && !body.twoStepVerificationData) {

				return resolve({
					userId: body.user.id,
					username: body.user.name,
					twostep: false
				});
				
			} else if (body && body.user && body.user.id && body.user.name && body.twoStepVerificationData) {

				return resolve({
					userId: body.user.id,
					username: body.user.name,
					twostep: true,
					ticket: body.twoStepVerificationData.ticket,
					twostepType: body.twoStepVerificationData.mediaType
				});

			}
		}

	});
	return newPromise;
};