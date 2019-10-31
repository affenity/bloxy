const elementIn = (e, i) => i.some(x => e === x);

module.exports = (env, params, preparedData) => {
	const requestManager = env.client.request;
	const requestOptions = Object.assign(preparedData.requestOptions, {
		other: {
			skip: true
		}
	});

	return requestManager.request(requestOptions)
		.then(({ response }) => {
			const isSuccess = elementIn(response.statusCode, preparedData.successes);
			const isError = elementIn(response.statusCode, preparedData.errors);

			if (isSuccess === true && isError === false) {
				// Success

				let returnData;

				if (preparedData.responseType !== "json") {
					if (preparedData.responseType === "number") returnData = response.body.match(/\d+/g);
					if (preparedData.responseType === "string") returnData = response.body;
				} else { returnData = response.body; }

				return preparedData.response(env, params, returnData);
			} else {
				// Error
				console.log(response.statusCode, response.statusMessage, response.body);
				throw new Error("An error occurred while performing a request.");
			}
		});
};
