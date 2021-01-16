const cookie = require("./getCookie");

(async () => {
    const Bloxy = require("../dist");
    const client = new Bloxy.Client({
        credentials: {
            cookie
        }
    });
    await client.login();
    const datastore = client.dataStoreManager.getDataStore(1523450240, "test123");
    console.log(datastore.buildGetUrl());
    console.log(datastore.buildPostDataForKey("boop"));
    const data = await datastore.getAsync("boop");

    console.log(data);
})();
