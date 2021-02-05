const bloxy = require("../../../dist");
const TEST_COOKIE = require("../../getCookie");


const unauthenticatedClient = new bloxy.Client();
const authenticatedClient = new bloxy.Client();

beforeAll(async () => {
    await authenticatedClient.login(TEST_COOKIE)
        .then(user => {
            console.log(`Logged in as ${user.id} with name ${user.name}`);
        });
});

describe("testing datastore manager", function () {
    describe("ensuring construction of instance is optimal", function () {
        it("should error when not logged in", function () {
            expect(
                unauthenticatedClient.dataStoreManager.getDataStore.bind(undefined, 1, "y")
            )
                .toThrow();
        });
    });
});
