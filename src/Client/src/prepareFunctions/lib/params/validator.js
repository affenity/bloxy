const Joi = require("@hapi/joi");

// -- Constant functions

const typeCheckers = {
	schemaCheck: typeSchema => schemaValues => {
		const { error } = typeSchema.validate(schemaValues);
		return !error;
	},
	anyCheck: () => anyValue => typeof anyValue !== "undefined"
};

const setupTypeCheckers = (env, withParamRule) => {
	const paramType = withParamRule.type;

	if (typeof paramType === "string") {
		return typeCheckers.anyCheck();
	} if (typeof paramType === "function") {
		const isJoi = Joi.isSchema(paramType(Joi, env.client));
		if (isJoi) {
			return typeCheckers.schemaCheck(paramType(Joi, env.client));
		} else {
			throw new Error("Is not a Joi schema!");
		}
	}

	console.log(withParamRule);
	throw new Error(`Type: ${typeof paramType}`);
};


module.exports = (env, methodConfig) => {
	if (!env || !methodConfig) throw new Error("Must provide the environment and the method's config for the validateParams function");

	const client = env.client;
	const methodParams = methodConfig.params;
	const primaryMethodName = methodConfig.names[0];
	const paramSetups = [];
	const defaultParamValueFunction = paramValue => paramValue;

	if (!client) throw new Error("Client was not included in the environment");
	if (!methodParams) throw new Error(client.errors.methodRegister.noParams(primaryMethodName));

	for (let num = 0; num < methodParams.length; num++) {
		const thisParamRule = methodParams[num];
		const paramRuleShortened = Array.isArray(thisParamRule);
		const thisParamSetup = {
			name: null,
			required: null,
			typeCheckers: []
		};
		let paramTypes, paramTypeValue;

		if (paramRuleShortened) {
			thisParamSetup.name = thisParamRule[0];
			thisParamSetup.required = thisParamRule[1];
			paramTypes = thisParamRule[2];
			paramTypeValue = thisParamRule[3];
		} else {
			thisParamSetup.name = thisParamRule.name;
			thisParamSetup.required = thisParamRule.required;
			paramTypes = thisParamSetup.type;
			paramTypeValue = thisParamRule.value;
		}

		/* If method doesn't work
        console.log(primaryMethodName);
        console.log(`Name: ${thisParamSetup.name}`);
        console.log("Rule:", thisParamRule, typeof thisParamRule);
        */


		if (Array.isArray(paramTypes)) {
			for (let r = 0; r < paramTypes.length; r++) {
				const thisType = paramTypes[r];
				thisParamSetup.typeCheckers.push({
					checkType: setupTypeCheckers(env, { name: thisParamSetup.name, type: thisType[0] }),
					getValue: thisType[1] || defaultParamValueFunction
				});
			}
		} else {
			thisParamSetup.typeCheckers.push({
				checkType: setupTypeCheckers(env, { name: thisParamSetup.name, type: paramTypes }),
				getValue: paramTypeValue || defaultParamValueFunction
			});
		}
		paramSetups[num] = thisParamSetup;
	}

	return (...params) => {
		const fetchedParams = {};

		for (let num = 0; num < methodParams.length; num++) {
			const providedParam = params[num];
			const paramSetup = paramSetups[num];


			if (paramSetup.required && (providedParam === null || typeof providedParam === "undefined")) throw new Error(client.errors.methodCall.requiredNotProvided(paramSetup.name));

			if (typeof providedParam !== "undefined" && providedParam !== null) {
				let validParam = false, validValue;

				for (let x = 0; x < paramSetup.typeCheckers.length; x++) {
					const checker = paramSetup.typeCheckers[x];

					validParam = checker.checkType(providedParam);
					if (validParam === true) {
						validValue = checker.getValue(providedParam);
						break;
					}
				}

				if (!validParam) throw new Error(client.errors.methodCall.wrongParamType(paramSetup.name, providedParam));

				if (typeof validValue === "undefined" || validValue === null) throw new Error(client.errors.methodCall.failedParamValue(paramSetup.name));
				fetchedParams[paramSetup.name] = validValue;
			}
		}

		return fetchedParams;
	};
};
