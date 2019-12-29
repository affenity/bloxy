const lodash = require("lodash");
const checkAuth = client => client.loggedIn;

module.exports = (apiManager, options, responseOptions = {}, extra = {}) => {
	const { client, baseUrl } = apiManager;
	const { disableAuth, disableResponse } = extra;

	if (!disableAuth) {
		const authenticated = checkAuth(client);
		if (!authenticated) {
			throw new Error("This function requires you to be authenticated.");
		}
	}

	if (!options.customUrl) {
		options.url = `${baseUrl}${options.url}`;
	} else {
		options.url = options.customUrl;
	}

	return client.rest.request(lodash.merge({
		json: true
	}, options), responseOptions).then(response => {
		if (!disableResponse) {
			return response.data.body;
		} else {
			return response;
		}
	});
};
