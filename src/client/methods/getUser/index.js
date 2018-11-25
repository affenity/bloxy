

exports.run = require("./getUser");

exports.conf = {
	required: {
		params: 1
	},

	name: "getUser",
	params: ["userId (Number) | username (String)", "valueType (String)"],
	description: "Gets a user's profile using either their userId or their username"
};