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

describe("test AuthAPI", function () {
    it("should return password status", function () {
        return expect(client.apis.authAPI.getCurrentUserPasswordStatus())
            .resolves
            .toStrictEqual({
                valid: true
            })
    });
});
