const path = require("path");

module.exports = env => {
	const client = env.client;
	const extraConfigs = client.src.prepareFunctions.prepare.getConfigsByPath(env, path.join(__dirname, "./src"));
	const staticConfigs = require("./staticConfigs");
	const allConfigs = staticConfigs.concat(extraConfigs);
	return client.src.prepareFunctions.prepare.byConfigs(env, allConfigs, env);
};
