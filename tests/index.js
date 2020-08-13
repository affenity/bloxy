const { Client } = require("../dist");
const cookie = require("./getCookie");


const client = new Client();

(async () => {
    const user = await client.login(cookie);
    const group = await client.getGroup(3544434);
    const allies = await group.getAllies();

    console.log(allies);

    const conv = await client.chat.getConversation(1);
})();
