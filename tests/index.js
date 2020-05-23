const bloxy = require("../dist");
const client = new bloxy.Client({
    credentials: {
        cookie: ""
    }
});

client.login(client.options.credentials).then(user => {
    console.log(user);
});
