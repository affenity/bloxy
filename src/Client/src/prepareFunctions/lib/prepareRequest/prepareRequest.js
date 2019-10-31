const defaultOptions = require("./defaultOptions");

module.exports = (env, conf, params) => {
	let { url, method, queries, headers, json, body, form, formData } = conf.request;
	const responseType = conf.request.responseType || defaultOptions.request.responseType;

	queries = queries || {};
	headers = headers || {};
	let newQueries = {};
	let newHeaders = {};

	if (typeof queries === "function") {
		newQueries = queries(env, params);
	} else {
		// Iterate through queries
		Object.entries(queries).forEach(([key, value]) => {
			if (typeof value === "function") value = value(env, params);
			if (typeof value !== "undefined") newQueries[key] = value;
		});
	}

	if (typeof headers === "function") {
		newHeaders = headers(env, params);
	} else {
		// Iterate through headers
		Object.entries(headers).forEach(([key, value]) => {
			if (typeof value === "function") value = value(env, params);
			if (typeof value !== "undefined") newHeaders[key] = value;
		});
	}


	if (typeof json === "function") json = json(env, params);
	if (typeof body === "function") body = body(env, params);
	if (typeof form === "function") form = form(env, params);
	if (typeof formData === "function") formData = formData(env, params);

	const requestOptions = {
		url: typeof url === "function" ? url(env, params) : url,
		method: method || defaultOptions.request.method,
		qs: newQueries,
		headers: newHeaders,
		json: json || responseType === "json",
		body,
		form,
		formData
	};

	if (typeof conf.request.xcsrf !== "undefined") requestOptions.xcsrf = conf.request.xcsrf;

	return {
		requestOptions,
		responseType,
		response: conf.response || defaultOptions.response,
		successes: conf.request.successStatuses || defaultOptions.request.successStatuses,
		errors: conf.request.errorStatuses || defaultOptions.request.errorStatuses
	};
};
