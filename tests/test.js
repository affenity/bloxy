const bloxy = require("../");
const prompts = require("prompts");

/**
 * @type {Client}
 */
const client = new bloxy.Client({
	setup: {
		debugging: true
	},
	callbacks: {
		onCaptcha: async function onCaptcha (client, info) {
			return "ok"
		}
	}
});

(async () => {
	await client.login({
		cookie: ""
	});

	const metadata = await client.apis.badges.getBadgeInfo(2124443956);
	console.log(metadata);
})();
