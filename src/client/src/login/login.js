const cookieLogin = require("./cookie");
const credentialsLogin = require("./credentials");
const lodash = require("lodash");

/**
 * Logging in
 * @param {Client} client The apis
 * @param {ClientLoginCredentials} credentials The credentials to log in with
 * @returns {Promise<ClientAuthUser>}
 */
module.exports = (client, credentials) => {
	credentials = lodash.merge(client.options.credentials || {}, credentials || {});
	if (!credentials.cookie && !credentials.username) throw new Error(`Must provide all credentials!`);

	if (credentials.cookie) {
		return cookieLogin(client, credentials);
	} else {
		return credentialsLogin(client, credentials);
	}
};
