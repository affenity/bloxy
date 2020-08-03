const { Client } = require("../dist");
const cookie = require("./getCookie");


const client = new Client();

(async () => {
    const clientUser = await client.login(
        cookie
    );

    const user = await clientUser.getUser();
    const data = await client.apis.badgesAPI.getUserBadges({
        userId: 18442032
    });
})();
