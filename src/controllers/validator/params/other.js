const Joi = require("@hapi/joi");
const validate = require("../validate");

const anyIdentifier = Joi.any().required();
const anyIdentifiers = Joi.array().items(anyIdentifier).required();
const genericFilterOptions = Joi.object({
	sortOrder: Joi.string().default("Desc"),
	limit: Joi.number().valid(10, 25, 50, 100).default(100),
	cursor: Joi.string()
});

module.exports = {
	validate: {
		anyIdentifier: a => a === undefined ? anyIdentifier : validate(...args, anyIdentifier, true),
		anyIdentifiers: a => a === undefined ? anyIdentifiers : validate(...args, anyIdentifiers, true),
		genericFilterOptions: a => a === undefined ? genericFilterOptions :
			validate(a, genericFilterOptions, true)
	},
	types: {
		anyIdentifier,
		anyIdentifiers,
		genericFilterOptions
	}
};
