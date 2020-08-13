const { Client } = require("../dist");
const cookie = require("./getCookie");


const client = new Client();

(async () => {
    const user = await client.login(cookie);
    const group = await client.getGroup(4636366);
    const allies = await group.getAllies();

    console.log(allies);
})();
