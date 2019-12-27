const bloxy = require("../");
const client = new bloxy.Client({
	setup: {
		debugging: true
	}
});

client.util.token.refresh().then(() => {
	client.util.token.refresh();
});
