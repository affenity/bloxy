const getInputs = require("./getInputs");

module.exports = async function (url) {
	let self = this;

	let newPromise = new Promise(async function(resolve, reject) {
		self.request(url, {}).then(response => {
            
			let verificationInputs = getInputs(response.body);
			let match;

			if (response.headers && response.headers["set-cookie"]) {
				match = response.headers["set-cookie"].toString().match(/__RequestVerificationToken=(.*?);/);
			}

			resolve({
				inputs: verificationInputs,
				match: match && match[1]
			});
		}).catch(reject);
	});
	return newPromise;
};