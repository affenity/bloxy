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

describe("testing BadgesAPI", function () {
    it("should retrieve badge info", function () {
        expect(client.apis.badgesAPI.getBadge({
            badgeId: 2124564087
        }))
            .resolves
            .toStrictEqual({
                id: 2124564087,
                created: "2020-06-20T13:45:20.717-05:00",
                awardingUniverse: {
                    id: 111958650
                }
            });
    });
});
