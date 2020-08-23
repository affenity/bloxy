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
    const birthDate = {
        birthDay: Math.floor((Math.random() * 29) + 1),
        birthMonth: Math.floor((Math.random() * 11) + 1),
        birthYear: Math.floor((Math.random() * 26) + 1980)
    };
    const promotionChannels = {
        promotionChannelsVisibilityPrivacy: "AllUsers",
        facebook: `https://facebook.com/${faker.lorem.words(1)}`,
        twitch: `https://twitch.tv/${faker.lorem.words(1)}`,
        twitter: `@${faker.lorem.word()}`,
        youtube: null
    };
    const starCodeAffiliate = { code: "BACON", userId: 66895609 };
    const description = "yes";

    it("should get the birthdate", async function () {
        const updatedBirthDate = await client.apis.accountInformationAPI.updateUserBirthdate(birthDate);

        return expect(updatedBirthDate)
            .toStrictEqual(true);
    });
    it("execute", async function () {
        return expect(client.apis.accountInformationAPI.updateUserDescription({
            description
        }))
            .resolves
            .toBeDefined();
    });

    it("should retrieve the description", async function () {

        const retrievedDescription = await client.apis.accountInformationAPI.getUserDescription();
        console.log(retrievedDescription);

        return expect(retrievedDescription.description.length)
            .toStrictEqual(description.length);
    });

    it("should update the user's gender", function () {
        return expect(client.apis.accountInformationAPI.updateUserGender({
            gender: 2
        }))
            .resolves
            .toBeDefined();
    });

    it("should retrieve the user's gender", async function () {
        const retrievedGender = await client.apis.accountInformationAPI.getUserGender()
            .then(res => res.gender);

        return expect(retrievedGender)
            .toEqual(2);
    });

    it("should retrieve the verified phone number", async function () {
        const retrieved = await client.apis.accountInformationAPI.getVerifiedPhoneNumber();

        return expect(retrieved)
            .toMatchObject({
                verificationCodeLength: 6
            });
    });

    it("should update the promotion channels", async function () {
        const updatedValues = await client.apis.accountInformationAPI.updateUserPromotionChannels(promotionChannels);

        return expect(updatedValues)
            .toMatchObject({});
    });

    it("should retrieve promotion channels", async function () {
        const retrievedValues = await client.apis.accountInformationAPI.getSelfPromotionChannels();

        return expect(retrievedValues)
            .toStrictEqual(promotionChannels);
    });

    it("should retrieve promotion channels \"externally\"", async function () {
        const retrievedValues = await client.apis.accountInformationAPI.getUserPromotionChannels({
            userId: client.user.id
        });

        const expected = {
            ...promotionChannels
        };

        delete expected["promotionChannelsVisibilityPrivacy"];

        return expect(retrievedValues)
            .toMatchObject(expected);
    });

    it("should remove star code affiliates", async function () {
        return expect(client.apis.accountInformationAPI.removeStarCodeAffiliate())
            .resolves
            .toEqual(true);
    });

    it("should add star code affiliates", async function () {
        await wait(1);
        return expect(client.apis.accountInformationAPI.addStarCodeAffiliate({
            code: starCodeAffiliate.code
        }))
            .resolves
            .toMatchObject(starCodeAffiliate);
    });

    it("should retrieve star code affiliates", async function () {
        await wait(2);
        const retrieved = await client.apis.accountInformationAPI.getStarCodeAffiliate();

        return expect(retrieved)
            .toMatchObject(starCodeAffiliate);
    });
});
