/* eslint-disable */

const memUsage = () => {
    let mem = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`Use: ${mem} MB`);
};
const bloxy = require("./");
const client = new bloxy.Client();

(async function () {
    await client.login({
        cookie: "cookie"
    });
    console.log(`Logged in as ${client.user.id}`);
    const group = await client.getGroup(3217670);
    group.initEvents({
        joinRequests: {
            enabled: true
        },
        wall: {
            enabled: true
        },
        shout: {
            enabled: true
        }
    });

    group.on("wallPost", post => {
        console.log(`Post created by ${post.poster.name} (${post.poster.id})`)
    });

    group.on("joinRequest", request => {
        request.accept();
    });

    group.on("shout", shout => {
        console.log(`A new shout has been made by ${shout.poster.name}`);
    });

})();
