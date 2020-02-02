const bloxy = require("../src");
/**
 * @type {Client}
 */
const client = new bloxy.Client();

(async () => {
	const group = await client.getGroup(3544434);
	console.log(group);
})();
