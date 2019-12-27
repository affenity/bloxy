const bloxy = require("../");
/**
 * @type {Client}
 */
const client = new bloxy.Client({
	setup: {
		debugging: false
	},
	credentials: {
		cookie: ""
	}
});

client.login().then(user => {
	console.log(user);
});

client.on("loggedIn", () => {
	console.log("User logged in");
});
