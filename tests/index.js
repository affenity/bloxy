const cookie = require("./getCookie");

(async () => {
    const Bloxy = require("../dist");
    const client = new Bloxy.Client({
        credentials: {
            cookie
        }
    });
    await client.login();
    const datastore = client.dataStoreManager;

    const testStore = datastore.getDataStore(1523450240, "test123");
    const universes = await client.apis.developAPI.getSelfUniverses({
        limit: 10
    });

    console.log(universes);


    const setValue = await testStore.setAsync("hello", "frick!");
    console.log(setValue);

    const gotValue = await testStore.getAsync("hello");
    console.log(gotValue);
})();
