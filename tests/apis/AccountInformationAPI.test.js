const TEST_COOKIE = require("../getCookie");
const bloxy = require("../../dist");
const faker = require("faker");
const Joi = require("joi");
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
    const birthdateSchema = Joi.object({
        birthMonth: Joi.number(),
        birthDay: Joi.number(),
        birthYear: Joi.number()
    });

    it("should retrieve the birthdate", async function () {
        const data = await client.apis.accountInformationAPI.getUserBirthdate();

        return expect(birthdateSchema.validate(data))
            .not
            .toHaveProperty("error");
    });

    it("should update the birthdate", async function () {
        return expect(client.apis.accountInformationAPI.updateUserBirthdate({
            birthDay: 1,
            birthMonth: 1,
            birthYear: 1990
        }))
            .resolves
            .not
            .toThrow();
    });
});
