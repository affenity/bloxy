/**
 * @type {CaptchaController}
 */
class CaptchaController {
	/**
	 * Creating a new captcha controller
	 * @param {Client} client The apis
	 */
	constructor (client) {
		this.client = client;
	}

	/**
	 *
	 * @param {string} solvedURL The URL to send the request to
	 * @param {string} fcToken The solved fcToken
	 * @returns {Promise<RestResponse>}
	 */
	postSolvedCaptcha (solvedURL, fcToken) {
		return this.client.rest.request({
			url: solvedURL,
			method: "POST",
			form: {
				fcToken
			},
			headers: {
				Origin: "https://www.roblox.com"
			}
		}).then(r => {
			console.log("Response RECEIVED");
			console.log(r.data.body);
			console.log(r.data.statusCode, r.data.statusMessage);
			return r;
		}).catch(e => {
			throw new Error(e);
		});
	}
}

module.exports = CaptchaController;
