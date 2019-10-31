module.exports = (solveInfo = {}, options = {}) => {
	const { referURL, solveURL, fcToken } = solveInfo;
	const submitForm = Object.assign({
		fcToken
	}, options.form || {});

	const requestOptions = {
		url: solveURL,
		method: "POST",
		headers: Object.assign({
			Origin: "https://www.roblox.com",
			Referer: referURL
		}, options.headers),
		form: submitForm,
		proxy: this.client.options.setup.proxy,
		ignoreCaptchaError: true
	};

	return this.client.request.request(requestOptions);
};
