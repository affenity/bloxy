const request = require("request");
const pollResult = require("./pollResult");

module.exports = async function (url, apiKey, googleKey) {
	let newPromise = new Promise(async function(resolve, reject) {
		let reqUrl = `http://2captcha.com/in.php?key=${apiKey}&method=userrecaptcha&googlekey=${googleKey}&pageurl=${encodeURI(url)}&here=now&json=1`;

		request(reqUrl, {json: true}, function (err, res) {
			if (err) return reject(err);

			if (res.body.status && res.body.status == 1) {
				let requestId = res.body.request;
				return resolve(pollResult(apiKey, requestId));
			}
		});

	});
	return newPromise;
};
