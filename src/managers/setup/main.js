const setups  = {};
const manager = require("./manager");
// eslint-disable-next-line no-unused-vars
const bloxyClient = require("../../client/client");


exports.getSetups = function () {
	return setups;
};


exports.getSuitableId = function () {
	return (Object.keys(setups).length + 1);
};

/**
 * @param {bloxyClient} client
 */
exports.createSetup = function (client) {
	let setup         = new manager(exports.getSuitableId(), client);
	setups[setup._id] = setup;
	return setup;
};