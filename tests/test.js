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

	const metadata = await client.apis.api.awardBadge({
		userId: 18442032,
		badgeId: 2124477512,
		placeId: 2849120791
	});

	console.log(metadata);
})();
