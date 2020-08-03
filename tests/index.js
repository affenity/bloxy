const { Client } = require("../dist");
const cookie = require("./getCookie");


const client = new Client();

(async () => {
    const clientUser = await client.login(
        cookie
    );
})();
