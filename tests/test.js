const bloxy = require("../");
const client = new bloxy.Client({
	setup: {
		debugging: true
	}
});

//console.log(client);

client.util.token.refresh();
