module.exports = class FunctionStore {
	constructor (env, preparedFunctions) {
		this.env = env;
		this.preparedFunctions = preparedFunctions;
		this.register = {};

		this.setupRegister();
	}

	setupRegister () {
		const functions = this.preparedFunctions;

		for (let num = 0; num < functions.length; num++) {
			const thisFunction = functions[num];
			thisFunction.names.forEach(functionName => {
				const previouslyRegistered = this.register[functionName];

				if (previouslyRegistered) console.warn(this.env.client.errors.methodRegister.alreadyExists(functionName, previouslyRegistered, thisFunction));
				this.register[functionName] = thisFunction.run.bind(thisFunction);
			});
		}

		return this.register;
	}
};
