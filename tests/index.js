const { Client } = require("../dist");
const cookie = require("./getCookie");


const client = new Client();

(async () => {
    const user = await client.getUser(18442032);
    console.log(user);
})();
