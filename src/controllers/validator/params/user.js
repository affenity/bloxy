const Joi = require("@hapi/joi");
const { user } = require("../../../structures");
const validate = require("../validate");

// These functions assume the value is valid, because they're called from validate.js
const userIdentifier = Joi.any().custom(value => {
	const valueType = typeof value;

	if (value === null || value === undefined) {
		throw new Error("userId cannot be undefined or null");
	}

	if (value instanceof user.Partial || value instanceof user) {
		return value.id;
	} else if (valueType !== "string" && valueType !== "number") {
		throw new Error(`you provided an invalid value. Type received: "${valueType}"`);
	} else {
		if (valueType === "string") {
			const toNum = Number(value);
			if (toNum === null || toNum === undefined || isNaN(toNum)) {
				throw new Error("invalid userId. Could not convert into an integer, which means the id was invalid!");
			}
		}
		return value;
	}
}, "User Identifier Validation");

const userIdentifiers = Joi.array().custom(value => {
	const users = [];
	for (let v of value) {
		const valid = userIdentifier.validate(v);
		if (!valid.error) {
			users.push(valid.value);
		} else {
			throw new Error(valid.error);
		}
	}

	return users;
}, "User Identifiers Validation");

// Exporting
module.exports = {
	validate: {
		identifier: a => validate(a, userIdentifier),
		identifiers: a => validate(a, userIdentifiers),
	},
	types: {
		userIdentifier,
		userIdentifiers
	}
};
