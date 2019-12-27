const bloxy = require("../");
/**
 * @type {Client}
 */
const client = new bloxy.Client({
	setup: {
		debugging: false
	},
	credentials: {
		username: "",
		password: "",
		fcToken: ""
	},
	callbacks: {
		onCaptcha: async function onCaptcha (client, info) {
			return "ok"
		}
	}
});

client.login().then(user => {
	console.log(user);
});

client.on("loggedIn", () => {
	console.log("User logged in");
});
