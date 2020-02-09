const bloxy = require("../src");
/**
 * @type {Client}
 */
const client = new bloxy.Client();

(async () => {
	await client.login({
		cookie: ""
	});
	const user = await client.getUser(75380482);
	const t = await user.test("boomer");
})();
