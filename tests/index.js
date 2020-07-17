const { Client } = require("../dist");
const c = new Client({
    credentials: {
        cookie: ""
    }
});

(async () => {
    // await c.login();
    const user = await c.getUser(18442032);
})();
