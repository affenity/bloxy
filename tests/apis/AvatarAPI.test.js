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

describe("testing AvatarAPI", function () {
    it("should wear asset", function () {
        expect(client.apis.avatarAPI.wearAssetOnAvatar({
            assetId: 102611803
        }))
            .resolves
            .toStrictEqual({
                success: true
            })
    });

    it("should set avatar type", function () {
        expect(client.apis.avatarAPI.setSelfAvatarType({
            playerAvatarType: "R6"
        }))
            .resolves
            .toStrictEqual({
                success: true
            })
    });
});
