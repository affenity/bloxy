const TEST_COOKIE = require("../getCookie");
const bloxy = require("../../dist");
const faker = require("faker");
const schemas = require("../util/schemas");
const client = new bloxy.Client({
    credentials: {
        cookie: TEST_COOKIE
    }
});
const { wait } = require("../util");
const Joi = require("joi");

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

    describe("testing standalone APIs", function () {
        it("should return game templates, verifying the default Baseplate one", async function () {
            const templates = await client.apis.developAPI.getGameTemplates();

            return expect(templates)
                .toContainEqual({
                    gameTemplateType: "Generic",
                    hasTutorials: false,
                    universe: {
                        id: 28220420,
                        name: "Baseplate",
                        description: "",
                        isArchived: false,
                        rootPlaceId: 95206881,
                        isActive: true,
                        privacyType: "Public",
                        creatorType: "User",
                        creatorTargetId: 998796,
                        creatorName: "Templates",
                        created: "2013-11-01T03:47:14.07-05:00",
                        updated: "2019-07-08T11:53:21.81-05:00"
                    }
                });
        });
        it("should attempt to publish game update notification and fail", function () {
            const d = client.apis.developAPI.publishGameUpdateNotification({
                gameUpdateText: `hi`,
                universeId: 1350045202
            });

            expect(d)
                .rejects
                .toThrow("Only one update allowed per week");
        });
        it("should get game's update history", async function () {
            const d = await client.apis.developAPI.getGameUpdatesHistory({
                universeId: 1350045202
            });

            console.log(d);

            expect(true)
                .toBe(true);
        });
        it("should get multiple plugins' information", async function () {
            const d = await client.apis.developAPI.getMultiPlugins({
                pluginIds: [6158541297, 6216851661]
            });
            const multiPluginsSchema = Joi.object({
                data: Joi.array()
                    .items(schemas.PluginDataSchema)
            });

            expect(multiPluginsSchema.validate(d))
                .not
                .toHaveProperty("error");
        });
        it("should search universes", async function () {
            const d = await client.apis.developAPI.searchUniverses({
                q: {
                    creator: "user"
                }
            });
            const schema = Joi.object({
                previousPageCursor: Joi.allow(Joi.string(), null),
                nextPageCursor: Joi.allow(Joi.string(), null),
                data: Joi.array()
                    .items(schemas.SearchUniverseDataSchema)
            });

            expect(schema.validate(d))
                .not
                .toHaveProperty("error");
        });
    });

    describe("testing universe-related APIs", () => {
        /*
        it(`should create a developer product in the first universe`, async function () {
            await firstUniverseFound;

            const createdProduct = await client.apis.developAPI.createDeveloperProduct({
                universeId: firstUniverseFound.id,
                priceInRobux: 10,
                name: `Test${("123").repeat(Math.floor(Math.random() * 30))} - music${("").repeat(Math.floor(Math.random() * 30))} ${(".").repeat(Math.floor(Math.random() * 50))}`,
                iconImageAssetId: 5874994712,
                description: `A developer product automatically created using bloxy at ${new Date().toISOString()}`
            })
                .catch(e => e);

            console.log(createdProduct);
            expect(createdProduct)
                .toHaveProperty("id");
            expect(createdProduct)
                .toHaveProperty("name");
            expect(createdProduct)
                .toHaveProperty("Description");
            expect(createdProduct)
                .toHaveProperty("shopId");
            expect(createdProduct)
                .toHaveProperty("iconImageAssetId");
        });
         */

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
                    placeId: firstUniverseFound.rootPlaceId,
                    type: "Revenue",
                    granularity: "Hourly"
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
            const retrievedCompatibilities = await client.apis.developAPI.getPlaceCompatibilities({
                placeId: firstUniverseFound.rootPlaceId
            });

            expect(retrievedCompatibilities.Compatibilities)
                .toContainEqual({
                    crashRatePercentage: "NaN",
                    platformName: "iPhone 11 Pro Max",
                    status: "Unknown"
                });

        });
    });
});
