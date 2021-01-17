const TEST_COOKIE = require("../getCookie");
const bloxy = require("../../dist");
const faker = require("faker");
const client = new bloxy.Client({
    credentials: {
        cookie: TEST_COOKIE
    }
});
const { wait } = require("../util");

describe("testing DevelopAPI", function () {
    beforeAll(() => {
        return client.login(
            TEST_COOKIE
        )
            .then(clientUser => {
                console.log(`${new Date()} logged in!`);
                console.log(`Using test account ${clientUser.id} with name ${clientUser.name}`);
            })
            .catch(e => {
                console.log(`Error: ${e}`);
            });
    });

    let firstUniverseFound;

    it("fetching first universe found..", async () => {
        console.log(`${new Date()} fetching universes..`);
        firstUniverseFound = await client.apis.developAPI.getSelfUniverses({
            sortOrder: "Desc",
            limit: 10
        })
            .catch(e => e)
            .then(response => {
                return response.data[0];
            })
            .catch(e => {
                throw new Error(`Failed to retrieve first universe! ${e}`);
            });
    });

    describe("testing universe-related APIs", () => {
        it(`should create a developer product in the first universe`, async function () {
            await firstUniverseFound;

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

        it("should deactivate the universe", async function () {
            await firstUniverseFound;
            return expect(
                client.apis.developAPI.deactivateUniverse({
                    universeId: firstUniverseFound.id
                })
            )
                .resolves
                .not
                .toThrow();
        });

        it("should activate the universe", async function () {
            await firstUniverseFound;
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
                    text: `fuck`
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
        it("should get places in the universe found and root place id should be in one of them", async function () {
            await firstUniverseFound;
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
        it("should test place statistics", async function () {
            await firstUniverseFound;
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
        it("should retrieve root place compatibilities", async function () {
            jest.setTimeout(15000);
            await firstUniverseFound;
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
