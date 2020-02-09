const Joi = require("@hapi/joi");
const { group } = require("../../../structures");
const validate = require("../validate");

// These functions assume the value is valid, because they're called from validate.js
const groupIdentifier = Joi.any().custom(value => {
	const valueType = typeof value;

	if (value === null || value === undefined) {
		throw new Error("groupId cannot be undefined or null");
	}

	if (value instanceof group || value instanceof group.User) {
		return value.id;
	} else if (valueType !== "string" && valueType !== "number") {
		throw new Error(`you provided an invalid value. Type received: "${valueType}"`);
	} else {
		if (valueType === "string") {
			const toNum = Number(value);
			if (toNum === null || toNum === undefined || isNaN(toNum)) {
				throw new Error("invalid groupId. Could not convert into an integer, which means the id was invalid!");
			}
		}
		return value;
	}
}, "Group Identifier Validation");

const groupIdentifiers = Joi.array().custom(value => {
	const groups = [];
	for (let v of value) {
		const valid = groupIdentifier.validate(v);
		if (!valid.error) {
			groups.push(valid.value);
		} else {
			throw new Error(valid.error);
		}
	}

	return groups;
}, "Group Identifiers Validation");

// Exporting
module.exports = {
	validate: {
		identifier: a => validate(a, groupIdentifier),
		identifiers: a => validate(a, groupIdentifiers)
	},
	types: {
		groupIdentifier,
		groupIdentifiers
	}
};
