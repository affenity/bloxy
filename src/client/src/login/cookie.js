const validate = require("./validate");

/**
 * Logging in with a cookie
 * @param {Client} client The apis
 * @param {ClientLoginCredentials} credentials The credentials to sign in with
 * @returns {Promise<UserPartial>}
 */
module.exports = async (client, credentials) => {
	const { cookie } = credentials;
	const createdCookie = client.rest.createCookie({
		key: ".ROBLOSECURITY",
		value: cookie,
		domain: "roblox.com"
	});
	client.rest.jar.setCookieSync(createdCookie, "https://roblox.com");

	client.debug.log(`Successfully created cookie and put it for roblox.com, validating the cookie...`);
	return validate(client);
};
