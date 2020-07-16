const { Client } = require("../dist");
const c = new Client({
    credentials: {
        cookie: ""
    }
});

(async () => {
    await c.login();
    console.log(c.user);

    c.socket.on("chatMessageSent", (conversation) => {
        console.log(conversation)
    });
    await c.socket.connect();
})();
