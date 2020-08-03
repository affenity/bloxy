const { Client } = require("../dist");


const client = new Client();

(async () => {
    const users = await client.apis.usersAPI.getUsersByUsernames({
        usernames: [
            "astralscripters"
        ]
    })

    console.log(users);
})();
