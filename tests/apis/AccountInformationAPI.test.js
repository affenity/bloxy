const TEST_COOKIE = require("../getCookie");
const bloxy = require("../../dist");
const client = new bloxy.Client({
    credentials: {
        cookie: TEST_COOKIE
    }
});

beforeAll(async () => {
    return client.login(
        TEST_COOKIE
    )
        .then(clientUser => {
            console.log(`Using test account ${clientUser.id} with name ${clientUser.name}`);
        });
});

describe("testing AccountInformationAPI", function () {
    it("should return proper information about star code affiliate", async () => {
        const codeData = await client.apis.accountInformationAPI.addStarCodeAffiliate({
            code: "BACON"
        }).catch(() => null);

        console.log("DATA:", codeData);

        return expect(codeData).toMatchObject({
            userId: 66895609,
            code: "BACON"
        });
    });
});
