module.exports = {
	type: "request",
	request: {
		method: "GET",
		queries: {},
		headers: {},
		responseType: "json",
		successStatuses: [200],
		errorStatuses: []
	},
	response: (client, params, data) => data
};
