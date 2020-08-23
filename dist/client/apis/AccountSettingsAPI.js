"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class AccountSettingsAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            baseUrl: "https://accountsettings.roblox.com/",
            client
        });
    }
    getSettingsGroups() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/account/settings/settings-groups",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body.map((val) => ({
            title: val.Title,
            url: val.Url,
            suffix: val.Suffix
        })));
    }
    getAppChatPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/app-chat-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateAppChatPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/app-chat-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getGameChatPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/game-chat-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateGameChatPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/game-chat-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getInventoryPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/inventory-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateInventoryPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/inventory-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getUserPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy",
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getUserPrivacySettingsInfo() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy/info",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserPrivateMessagePrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/private-message-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserPrivateMessagePrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/private-message-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(() => true);
    }
    getUserEmailStatus() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserEmail(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email",
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(() => true);
    }
    sendEmailVerification() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email/verify",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    getWebsiteTheme() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/themes/User/${this.client.user.id}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateWebsiteTheme(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/themes/User/${this.client.user.id}`,
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: {
                    themeType: options.themeType
                }
            },
            json: true
        }).then(() => true);
    }
    getWebsiteThemes() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/themes/types",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserTradePrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserTradePrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getUserTradeQualityFilter() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-value",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserTradeQualityFilter(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-value",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(() => true);
    }
    getTwoStepStatus() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/twostepverification",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateTwoStepStatus(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email",
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getContactUpsell() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user/screens/contact-upsell",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateContactUpsellSuppression(options) {
        return this.request({
            requiresAuth: true,
            request: {
                method: "POST",
                path: "v1/user/screens/contact-upsell/suppress",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(() => true);
    }
    getIsXboxUsernameValid(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/xbox/is-username-valid",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    Authorization: options.authorization,
                    signature: options.signature,
                    "request.username": options.username
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserPromotionChannels(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        }).then(() => true);
    }
}
exports.default = AccountSettingsAPI;
