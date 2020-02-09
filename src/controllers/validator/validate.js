const Joi = require("@hapi/joi");

module.exports = async (args, typed) => {
	console.log(args, typed);
	const argsExists = args !== null && args !== undefined;

	if (!argsExists) {
		throw new Error("Args is null or undefined.");
	}

	if (typeof typed === "function") {
		typed = typed(Joi);
	}

	if (!typed.validateAsync) {
		if (typeof typed === "function") {
			typed = await typed(args);
		} else {
			throw new Error("Unexpected validate argument");
		}
	} else {
		const valid = await typed.validateAsync(args).catch(e => new Error(e));

		if (valid instanceof Error) {
			throw new Error(`Failed to validate args. ${valid}`);
		}
		return valid;
	}
};
