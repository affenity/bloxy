const bloxy = require("../src");
/**
 * @type {Client}
 */
const client = new bloxy.Client({
	setup: {
		debugging: false
	}
});

(async () => {
	await client.login({
		cookie: ""
	});
	const user = await client.getUser(18442032);
})();
