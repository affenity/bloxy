const fs = require("fs");
const path = require("path");

exports.byPath = (env, filesPath, register) => {
	const pathExists = fs.existsSync(filesPath);
	if (!pathExists) throw new Error(`Attempted to prepare functions in a non-existent path`);

	const preparedFunctions = [];
	register = register || {};
	let filesInPath = fs.readdirSync(filesPath);
	filesInPath = filesInPath.filter(x => !x.includes("placeholder"));

	for (let x = 0; x < filesInPath.length; x++) {
		const filePath = path.join(filesPath, filesInPath[x]);
		const requiredFile = require(filePath);

		if (!requiredFile.conf) throw new Error(env.client.errors.methodRegister.noConf(filePath));

		preparedFunctions.push(
			prepareFunction(env, requiredFile.conf)
		);
	}

	// Set up the register
	preparedFunctions.forEach(thisFunction => {
		thisFunction.names.forEach(name => {
			if (register[name]) throw new Error(env.client.errors.methodRegister.alreadyAssigned(name));
			register[name] = thisFunction.run;
		});
	});

	return register;
};

exports.byConfigs = (env, configs, register) => {
	const preparedFunctions = [];
	register = register || {};

	for (let x = 0; x < configs.length; x++) {
		const fileConfig = configs[x];
		preparedFunctions.push(
			prepareFunction(env, fileConfig)
		);
	}

	// Set up the register
	preparedFunctions.forEach(thisFunction => {
		thisFunction.conf.names.forEach(name => {
			if (register[name]) throw new Error(env.client.errors.methodRegister.alreadyAssigned(name));
			register[name] = thisFunction.run;
		});
	});

	return register;
};

exports.getConfigsByPath = (env, filesPath) => {
	const pathExists = fs.existsSync(filesPath);
	if (!pathExists) throw new Error(`Attempted to prepare functions in a non-existent path`);

	const configs = [];

	let filesInPath = fs.readdirSync(filesPath);
	filesInPath = filesInPath.filter(x => !x.includes("placeholder"));

	for (let x = 0; x < filesInPath.length; x++) {
		const filePath = path.join(filesPath, filesInPath[x]);
		const requiredFile = require(filePath);
		configs.push(requiredFile.conf);
	}

	return configs;
};

function prepareFunction (env, fileConfig) {
	const PreparedFunction = {
		conf: fileConfig,
		validateParams: env.client.src.prepareFunctions.lib.params(env, fileConfig)
	};

	PreparedFunction.run = async function run (...args) {
		const fetchedParams = PreparedFunction.validateParams(...args);
		if (fileConfig.type === "custom") {
			return fileConfig.run.bind(env)(fetchedParams);
		} else {
			const preparedData = env.client.src.prepareFunctions.lib.prepareRequest(env, fileConfig, fetchedParams);
			return env.client.src.prepareFunctions.lib.performRequest(env, fetchedParams, preparedData);
		}
	};
	return PreparedFunction;
}
