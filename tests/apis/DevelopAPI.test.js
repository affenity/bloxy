const TEST_COOKIE = require("../getCookie");
const bloxy = require("../../dist");
const faker = require("faker");
const client = new bloxy.Client({
    credentials: {
        cookie: TEST_COOKIE
    }
});
const { wait } = require("../util");

beforeAll(async () => {
    return client.login(
        TEST_COOKIE
    )
        .then(clientUser => {
            console.log(`Using test account ${clientUser.id} with name ${clientUser.name}`);
        });
});

describe("testing DevelopAPI", function () {
    it("should create a developer product with no issue", function () {
        const createdProduct = client.apis.developAPI.createDeveloperProduct({
            universeId: 2021554667,
            priceInRobux: 10,
            name: `Test - music ${Date.now() / 1000}`,
            iconImageAssetId: 5874994712,
            description: `A developer product automatically created using bloxy at ${new Date().toISOString()}`
        });

        expect(createdProduct)
            .resolves
            .not
            .toThrow();
        expect(createdProduct)
            .resolves
            .toMatchObject({
                name: String
            });
        expect(createdProduct)
            .resolves
            .toHaveProperty(["id", "name", "Description", "shopId", "iconImageAssetId"]);
    });
});
