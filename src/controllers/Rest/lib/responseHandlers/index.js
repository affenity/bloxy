const handlers = [
	require("./token"),
	require("./captcha")
];
/**
 * @param {RestController} controller The Rest controller
 */
module.exports = controller => {
	handlers.forEach(handler => {
		controller.addResponseHandler(handler);
	});
};
