/**
 * @param {RestTokenController} controller
 */
module.exports = async controller => {
	const restController = controller.client.rest;

	const response = await restController.request({
		url: "https://auth.roblox.com/v2/logout",
		method: "POST",
		token: false
	}, {
		allowedStatusCodes: [],
		disableTokenCheck: true
	});

	//console.log(response);
};
