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

describe("testing AccountInformationAPI", function () {
    describe("should retrieve and update a user's birthdate", function () {
        jest.setTimeout(10000);
        const birthDate = {
            birthDay: Math.floor((Math.random() * 29) + 1),
            birthMonth: Math.floor((Math.random() * 11) + 1),
            birthYear: Math.floor((Math.random() * 26) + 1980)
        };

        describe("should should update the birthdate", function () {
            it("execute", async function () {
                const updatedBirthDate = await client.apis.accountInformationAPI.updateUserBirthdate(birthDate);

                return expect(updatedBirthDate)
                    .toStrictEqual(true);
            });
        });

        describe("should get the new birthdate", function () {
            it("should wait for a second to propagate changes", async function () {
                await wait(2);
                return expect(1)
                    .toEqual(1);
            });
            it("execute", async function () {
                const retrievedBirthDate = await client.apis.accountInformationAPI.getUserBirthdate();

                return expect(retrievedBirthDate)
                    .toStrictEqual(birthDate);
            });
        });
    });
    describe("should retrieve and update a user's description", function () {
        const description = `Hello ${faker.lorem.words(10)}`;
        console.log(`Description: ${description}`);

        describe("should update the description", function () {
            it("execute", async function () {
                return expect(client.apis.accountInformationAPI.updateUserDescription({
                    description
                }))
                    .resolves
                    .toBeDefined();
            });
        });

        describe("should retrieve the description", function () {
            it("should retrieve the description and compare", async function () {
                await wait(2);

                const retrievedDescription = await client.apis.accountInformationAPI.getUserDescription();
                console.log(retrievedDescription);

                return expect(retrievedDescription.description.length)
                    .toStrictEqual(description.length);
            });
        });
    });
    describe("should retrieve and update a user's gender", function () {
        const gender = 1 + Math.floor(Math.random() * 3);
        console.log(`Gender: ${gender}`);

        describe("should update the user's gender", function () {
            it("execute", function () {
                return expect(client.apis.accountInformationAPI.updateUserGender({
                    gender
                }))
                    .resolves
                    .toBeDefined();
            });
        });

        describe("should retrieve the user's gender", function () {
            it("execute", async function () {
                wait(8);
                const retrievedGender = await client.apis.accountInformationAPI.getUserGender()
                    .then(res => res.gender);

                return expect(retrievedGender)
                    .toEqual(gender);
            });
        });
    });
    describe("should get the verified phone number", function () {
        it("execute", async function () {
            const retrieved = await client.apis.accountInformationAPI.getVerifiedPhoneNumber();

            return expect(retrieved)
                .toMatchObject({
                    verificationCodeLength: 6
                });
        });
    });
    describe("should retrieve and update the promotion channels", function () {
        const promotionChannels = {
            promotionChannelsVisibilityPrivacy: "AllUsers",
            facebook: `https://facebook.com/${faker.lorem.words(1)}`,
            twitch: `https://twitch.tv/${faker.lorem.words(1)}`,
            twitter: `@${faker.lorem.word()}`,
            youtube: null
        };

        describe("should update", function () {
            it("execute", async function () {
                const updatedValues = await client.apis.accountInformationAPI.updateUserPromotionChannels(promotionChannels);

                return expect(updatedValues)
                    .toMatchObject({});
            });
        });

        it("should retrieve", async function () {
            await wait(1);
            const retrievedValues = await client.apis.accountInformationAPI.getSelfPromotionChannels();

            return expect(retrievedValues)
                .toStrictEqual(promotionChannels);
        });

        it("should retrieve \"externally\"", async function () {
            await wait(1);
            const retrievedValues = await client.apis.accountInformationAPI.getUserPromotionChannels({
                userId: client.user.id
            });

            console.log("user values", retrievedValues);
            const expected = {
                ...promotionChannels
            };

            delete expected["promotionChannelsVisibilityPrivacy"];

            return expect(retrievedValues)
                .toMatchObject(expected);
        });
    });
    describe("should test star code affiliates", function () {
        const STAR_CODES = [
            { code: "BACON", userId: 66895609 },
            { code: "Denis", userId: 121823922 },
            { code: "RealKreek", userId: 140258990 }
        ];
        const chosenCode = STAR_CODES[Math.floor(Math.random() * STAR_CODES.length)];
        const expected = {
            code: chosenCode.code.toUpperCase(),
            userId: chosenCode.userId
        };

        describe("should remove star code", function () {
            it("removing", async function () {
                return expect(client.apis.accountInformationAPI.removeStarCodeAffiliate())
                    .resolves
                    .toEqual(true);
            });
        });
        describe("should add star code", function () {
            it("should add", function () {
                return expect(client.apis.accountInformationAPI.addStarCodeAffiliate({
                    code: chosenCode.code
                }))
                    .resolves
                    .toMatchObject(expected);
            });
        });
        describe("should retrieve star code and match with chosen", function () {
            it("should retrieve", async function () {
                const retrieved = await client.apis.accountInformationAPI.getStarCodeAffiliate();

                return expect(retrieved)
                    .toMatchObject(expected);
            });
        });
    });
});
