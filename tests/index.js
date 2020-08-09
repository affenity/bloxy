const { Client } = require("../dist");
const cookie = require("./getCookie");


const client = new Client();

(async () => {
    const user = await client.login(cookie);
    user.sendTrade({})
})();
