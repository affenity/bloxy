const bloxy = require("../");
const prompts = require("prompts");

/**
 * @type {Client}
 */
const client = new bloxy.Client({
	setup: {
		debugging: false
	},
	callbacks: {
		onCaptcha: async function onCaptcha (client, info) {
			return "ok"
		}
	}
});

(async () => {
	const metadata = await client.apis.auth.checkCredentials({
		credentialType: "Username",
		credentialValue: "1TheNoobestNoob",
		password: "9YvG$BIQR&BZqGVd%CVb%0R%bgRXGC4Gjz%B0s0Op1eAAyvsfqVXxidUZ@&!DjYo*VA4v9$yF19PR*jkHB67WeFobqHthocXXaf"
	});

	console.log(metadata);
})();
