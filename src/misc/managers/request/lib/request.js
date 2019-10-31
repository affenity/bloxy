const request = require("request");
const responseHandler = require("./response");

module.exports = function doRequest (options, amountRetried) {
	// eslint-disable-next-line consistent-this
	const client = this.client;
	// eslint-disable-next-line consistent-this
	const self = this;

	return new Promise((resolve, reject) => {
		const requestOptions = {
			url: options.url,
			method: options.method || "GET",
			headers: Object.assign({}, options.headers),
			proxy: options.proxy || (client.options.setup || {}).proxy,

			// --> Additional options
			followAllRedirects: typeof options.followRedirects !== "undefined" ? options.followRedirects : true,
			body: options.body,
			json: options.json,
			form: options.form,
			formData: options.formData,
			qs: options.qs || options.params || options.queries
		};

		if (options.verification) requestOptions.headers.cookie += `__RequestVerificationToken=${options.verification}`;
		if (options.xcsrf !== false && requestOptions.method !== "GET") {
			requestOptions.headers["X-CSRF-TOKEN"] = (typeof options.xcsrf === "string" && options.xcsrf) || client.token.token;
		}
		if (options.jar === false) delete requestOptions.jar;
		requestOptions.jar = client.options.jar;
		const userAgent = options.userAgent || (client.options.setup || {}).userAgent;
		if (userAgent) requestOptions.headers["User-Agent"] = userAgent;

		if (options.ignoreErrors) requestOptions.ignoreErrors = true;
		if (options.ignoreTokenError) requestOptions.ignoreTokenError = true;
		if (options.ignoreCaptchaError) requestOptions.ignoreCaptchaError = true;

		requestOptions.otherData = options.other || {};
		requestOptions.qsParseOptions = {
			sep: ","
		};

		request(requestOptions, (error, response) => {
			if (error && !requestOptions.ignoreErrors) return reject(client.errors.request.failed(error));
			if (amountRetried === undefined || amountRetried === null) amountRetried = 0;
			amountRetried++;
			return resolve(responseHandler.bind(self)(requestOptions, response, amountRetried));
		});
	});
};
