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

describe("testing BillingAPI", function () {
    it("should retrieve developer exchange rate", function () {
        return expect(client.apis.billingAPI.getDeveloperExchangeRate())
            .resolves
            .toMatchObject({
                rate: 0.0035,
                "currency-code": "USD"
            });
    });
});
