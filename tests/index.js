const bloxy = require("../src");
/**
 * @type {Client}
 */
const client = new bloxy.Client();

(async () => {
	const user = await client.getUser(18442032);
	console.log(user);

	const num = await user.
})();
