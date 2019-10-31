module.exports = class PreparedFunction {
	constructor (env, conf) {
		this.env = env;
		this.conf = conf;
		this.names = conf.names;
		this.validateParamTypes = null;
		this.setup();
	}

	setup () {
		this.validateParamTypes = lib.params(this.env, this.conf);
		if (this.conf.type === "custom") this.handler = this.conf.run.bind(this.env);
	}

	run (...args) {
		if (this.conf.auth) {
			if (!this.env.client.loggedIn()) throw new Error(this.env.client.errors.methodCall.noAuth(this.conf.names[0]));
		}
		const fetchedParams = this.validateParamTypes(...args);
		if (this.conf.type === "request") {
			const preparedData = this.env.client.src.prepareFunctions.prepareRequest(this.env, this.conf, fetchedParams);
			return this.lib.performRequest(this.env, fetchedParams, preparedData);
		} else { return this.handler(fetchedParams); }
	}
};
