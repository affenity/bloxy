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
    describe("testing universe-related APIs", () => {
        it(`should create a developer product in the first universe: ${firstUniverseFound.id}`, async function () {
            const createdProduct = await client.apis.developAPI.createDeveloperProduct({
                universeId: 2021554667,
                priceInRobux: 10,
                name: `Test - music ${Date.now() / 1000}`,
                iconImageAssetId: 5874994712,
                description: `A developer product automatically created using bloxy at ${new Date().toISOString()}`
            })
                .catch(e => e);

            return expect(createdProduct)
                .toHaveProperty(["id", "name", "Description", "shopId", "iconImageAssetId"]);
        });

        it("should deactivate the universe", function () {
            return expect(
                client.apis.developAPI.deactivateUniverse({
                    universeId: firstUniverseFound.id
                })
            )
                .resolves
                .not
                .toThrow();
        });

        it("should activate the universe", function () {
            return expect(
                client.apis.developAPI.activateUniverse({
                    universeId: firstUniverseFound.id
                })
            )
                .resolves
                .not
                .toThrow();
        });
        it("should filter \"fuck\"", function () {
            return expect(
                client.apis.developAPI.filterGameUpdateNotificationText({
                    text: `"fuck"`
                })
            )
                .resolves
                .toMatchObject({
                    filteredGameUpdateText: "####",
                    isFiltered: true,
                    moderationLevel: 3
                });
        });
        it("should not filter", function () {
            return expect(
                client.apis.developAPI.filterGameUpdateNotificationText({
                    text: "roblox"
                })
            )
                .resolves
                .toMatchObject({
                    filteredGameUpdateText: "roblox",
                    isFiltered: false,
                    moderationLevel: 1
                });
        });
        it("should get places in the universe found and root place id should be in one of them", function () {
            return expect(
                client.apis.developAPI.getPlacesInUniverse({
                    universeId: firstUniverseFound.id
                })
            )
                .resolves
                .toMatchObject({
                    data: [
                        {
                            id: firstUniverseFound.rootPlaceId,
                            universeId: firstUniverseFound.id,
                            name: firstUniverseFound.name,
                            description: firstUniverseFound.description
                        }
                    ]
                });
        });
        it("should test place statistics", function () {
            return expect(
                client.apis.developAPI.getPlaceStatistics({
                    placeId: firstUniverseFound.rootPlaceId
                })
            )
                .resolves
                .toMatchObject({
                    placeId: firstUniverseFound.rootPlaceId,
                    dataType: 0,
                    dataGranularity: 0,
                    data: {
                        Total: {
                            type: "Total",
                            data: {}
                        }
                    }
                });
        });
        it("should retrieve root place compatibilities", function () {
            return expect(
                client.apis.developAPI.getPlaceCompatibilities({
                    placeId: firstUniverseFound.rootPlaceId
                })
            )
                .resolves
                .toMatchObject({
                    Compatibilities: [
                        {
                            status: "Unknown",
                            platformName: "iPhone 11 Pro Max"
                        }
                    ]
                });
        });
    });
});
