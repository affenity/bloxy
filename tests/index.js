const cookie = require("./getCookie");

(async () => {
    const Bloxy = require("bloxy");
    const client = new Bloxy.Client({

    });
    const group = await client.getGroup(3544434);
    const funds = await group.getFunds();

    console.log(`Group ${group.name} has ${funds} Robux in funds!`);
})();
