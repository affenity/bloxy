import * as bloxy from "../index";


(async () => {
    const client = new bloxy.Client({
        credentials: {
            cookie: ""
        }
    });
    await client.login();
    const res = await client.apis.generalApi.getAssetVersions(
        5283967847
    );

    console.log(res);
})();
