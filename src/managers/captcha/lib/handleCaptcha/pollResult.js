const request = require("request");

module.exports = async function (apiKey, requestId) {
	let newPromise = new Promise(async function(resolve, reject) {
		setTimeout( () => {

			let checkInterval = setInterval( () => {

				request(`http://2captcha.com/res.php?key=${apiKey}&method=userrecaptcha&id=${requestId}&action=get&json=1`, function (err, res) {
					if (err) return reject(err);

					try {
						let data = JSON.parse(res.body);

						if (data && data.status === 1) {
							clearInterval(checkInterval);
							resolve(data.request);
						} else if (data.status && data.status !== 1 && data.status !== 0) {
							return reject("Unknown 2captcha errror");
						}
						
					} catch (err) {
						return reject(err);
					}

				});
			}, 5000);
		}, 30000);
	});
	return newPromise;
};