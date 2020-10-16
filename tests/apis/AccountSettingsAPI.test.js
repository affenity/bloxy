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

describe("testing AccountSettingsAPI", function () {
    it("should return settings groups", async function () {
        const data = await client.apis.accountSettingsAPI.getSettingsGroups();

        return expect(data)
            .toBeDefined();
    });

    it("should return app chat privacy", async function () {
        const appChatPrivacy = await client.apis.accountSettingsAPI.getAppChatPrivacy();

        return expect(appChatPrivacy)
            .toStrictEqual({
                appChatPrivacy: "NoOne"
            });
    });

    it("should update app chat privacy", function () {
        return expect(client.apis.accountSettingsAPI.updateAppChatPrivacy({
            appChatPrivacy: "NoOne"
        }))
            .resolves
            .not
            .toThrow();
    });

    it("should return game chat privacy", function () {
        return expect(client.apis.accountSettingsAPI.getGameChatPrivacy())
            .resolves
            .toStrictEqual({
                gameChatPrivacy: "AllUsers"
            });
    });

    it("should update game chat privacy", function () {
        return expect(client.apis.accountSettingsAPI.updateGameChatPrivacy({
            gameChatPrivacy: "AllUsers"
        }))
            .resolves
            .not
            .toThrow();
    });

    it("should get inventory privacy", function () {
        return expect(client.apis.accountSettingsAPI.getInventoryPrivacy())
            .resolves
            .toStrictEqual({
                inventoryPrivacy: "AllUsers"
            });
    });

    it("should update inventory privacy", function () {
        return expect(client.apis.accountSettingsAPI.updateInventoryPrivacy({
            inventoryPrivacy: "AllUsers"
        }))
            .resolves
            .not
            .toThrow();
    });

    it("should get user privacy", function () {
        return expect(client.apis.accountSettingsAPI.getUserPrivacy())
            .resolves
            .toStrictEqual({
                phoneDiscovery: "AllUsers"
            });
    });

    it("should update user privacy", function () {
        return expect(client.apis.accountSettingsAPI.updateUserPrivacy({
            phoneDiscovery: "AllUsers"
        }))
            .resolves
            .not
            .rejects;
    });

    it("should get privacy settings info", function () {
        return expect(client.apis.accountSettingsAPI.getUserPrivacySettingsInfo())
            .resolves
            .toStrictEqual({
                isPhoneDiscoveryEnabled: false
            });
    });

    it("should get private message privacy", function () {
        return expect(client.apis.accountSettingsAPI.getUserPrivateMessagePrivacy())
            .resolves
            .toStrictEqual({
                privateMessagePrivacy: "All"
            });
    });

    it("should update the message privacy", function () {
        return expect(client.apis.accountSettingsAPI.updateUserPrivateMessagePrivacy({
            privateMessagePrivacy: "All"
        }))
            .resolves
            .not
            .toThrow();
    });

    it("should get email status", function () {
        return expect(client.apis.accountSettingsAPI.getUserEmailStatus())
            .resolves
            .toStrictEqual({
                emailAddress: "o*****************@awdrt.net",
                verified: true
            });
    });

    it("should fail to send email verification (as it's verified already)", function () {
        return expect(client.apis.accountSettingsAPI.sendEmailVerification())
            .rejects
            .toThrow();
    });

    it("should get website theme", function () {
        return expect(client.apis.accountSettingsAPI.getWebsiteTheme())
            .resolves
            .toStrictEqual({
                themeType: "Light"
            });
    });

    it("should update the website theme", function () {
        return expect(client.apis.accountSettingsAPI.updateWebsiteTheme({
            themeType: "Light"
        }))
            .resolves
            .not
            .toThrow();
    });

    it("should get website themes", function () {
        return expect(client.apis.accountSettingsAPI.getWebsiteThemes())
            .resolves
            .toMatchObject({
                data: ["Light", "Dark"]
            });
    });

    it("should get trade privacy", function () {
        return expect(client.apis.accountSettingsAPI.getUserTradePrivacy())
            .resolves
            .toStrictEqual({
                tradePrivacy: "All"
            });
    });

    it("should update the trade privacy", function () {
        return expect(client.apis.accountSettingsAPI.updateUserTradePrivacy({
            tradePrivacy: "All"
        }))
            .rejects
            .toThrowError("not have permission")
    });

    it("should get trade quality filter", function () {
        return expect(client.apis.accountSettingsAPI.getUserTradeQualityFilter())
            .resolves
            .toStrictEqual({
                tradeValue: "None"
            });
    });

    it("should update the trade quality filter", function () {
        return expect(client.apis.accountSettingsAPI.updateUserTradeQualityFilter({
            tradeValue: "None"
        }))
            .rejects
            .toThrowError("not have permission");
    });

    it("should get contact upsell", function () {
        return expect(client.apis.accountSettingsAPI.getContactUpsell())
            .resolves
            .toStrictEqual({
                upsellScreenType: "None"
            });
    });

    it("should update contact upsell suppression", function () {
        return expect(client.apis.accountSettingsAPI.updateContactUpsellSuppression({
            suppress: "None"
        }))
            .resolves
            .not
            .toThrow();
    });

    it("should update promotion channels", function () {
        return expect(client.apis.accountSettingsAPI.updateUserPromotionChannels({
            promotionChannelsVisibilityPrivacy: "AllUsers",
            youtube: "https://youtube.com/a",
            twitter: "@1Noobest",
            twitch: "https://twitch.tv/Visualizeme",
            facebook: "https://facebook.com/yes"
        }))
            .resolves
            .not
            .toThrow();
    });

});
