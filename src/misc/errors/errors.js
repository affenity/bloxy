/* eslint-disable max-len */
module.exports = {
	methodRegister: {
		alreadyExists: (...args) => `⚠WARNING⚠ The name "${args[0]}" already exists in the register. The new method will overwrite the previous one in the register. \nThe old method's location: ${args[1]}\nThe new method's location: ${args[2]}.\n We recommend to change this ASAP as overwriting might not be supported in the future.`,
		successCodeMix: () => "Some of the success codes mix with the error codes that are specified. Please ensure all are distinct / unique.",
		noRequestURL: () => "No request url was provided.",
		failedMethodSetup: (...args) => `Failed to set up an individual method. Path: ${args[0]}\nError: ${args[1]}`,
		noParams: (...args) => `Attempted to prepare method "${args[0]}", but no param rules were defined.`,
		badClassName: (...args) => `Failed when preparing type checkers for the parameter "${args[0]}". No class found with the name of "${args[1]}"`,
		alreadyAssigned: (...args) => `Attempted to set something from register with name "${args[0]}", but it was already assigned to something else.`,
		noConf: (...args) => `Failed when calling "setupMethod". File was not found or conf was not exported. Path: ${args[0]}`,
		noFunctionStore: () => `Failed when calling "setupMethod". Did not return expected FunctionStore.`
	},
	methodCall: {
		noExist: (...args) => `Attempted to call a non-existent method ("${args[0]}")`,
		requiredNotProvided: (...args) => `Attempted to call a function, but did not provide the required parameter "${args[0]}"`,
		wrongParamType: (...args) => `Provided incorrect parameter types when calling a function. This happened with parameter "${args[0]}" with the following value: ${args[1]}.`,
		failedParamValue: (...args) => `Failed to fetch the value for the parameter "${args[0]}". Maybe you forgot to provide it?`,
		noAuth: name => `Attempted to call method "${name}", but it requires the client to be logged in.`
	},
	request: {
		failed: (...args) => `Failed to perform the request! Error: ${args[0]}`,
		captcha: (...args) => `Request was faced with a captcha and this function has run: ${args[0]} times already.`,
		token: (...args) => `Token validation failed for URL: ${args[0]}. ${args[1]}`
	},
	callbacks: {
		noCaptchaSetup: () => "Attempted to log in with username & password when no captcha solving service was setup.",
		noCaptchaData: () => "Did not receive fcToken from the solveCaptcha callback function."
	},
	auth: {
		loginFailed: (...args) => `Failed to login. Status code: ${args[0]}, message: ${args[1]}`,
		noCredentials: () => "Attempted to login, but no credentials were provided.",
		captchaFailed: (...args) => `Failed to solve captcha, status code: ${args[0]}, status message: ${args[1]}. Body: ${args[2]}`
	},
	socket: {
		negotiationFailed: (code, message) => `Failed to negotiate with the WS endpoint. Status code: ${code}, message: ${message}`
	}
};
