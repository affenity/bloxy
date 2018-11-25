

function validateOptions(options) {
	if (!options || !options.authTab) return "Did not provide necessary parameters";//throw new Error(messages.loginFunc.values);
	let authTab = options.authTab;

	// User does not want to sign in using cookies

	if (!authTab.cookie) {
		let cType = authTab.signinWith, cPass = authTab.password, cValue = authTab.username || authTab.value;
		if (!cType || !cValue || !cPass) return "Did not provide necessary parameters";

		let createRequest = {
			ctype   : cType,
			cvalue  : cValue,
			password: cPass
		};
		return createRequest;

	} else {
		let createRequest = {
			cookie: authTab.cookie
		};
		return createRequest;
	}
    
}

module.exports = validateOptions;