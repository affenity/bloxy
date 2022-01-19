"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSettingsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class AccountSettingsAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            baseUrl: "https://accountsettings.roblox.com/",
            client
        });
    }
    getMetaData() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/account/settings/metadata"
            },
            json: true
        }).then((response) => ({
            isAccountsRestrictionsSpamBugFixEnabled: response.body.IsAccountsRestrictionsSpamBugFixEnabled,
            isParentalMonthlyLimitInUIEnabled: response.body.IsParentalMonthlyLimitInUIEnabled,
            isParentalNotificationSettingsInUIEnabled: response.body.IsParentalNotificationSettingsInUIEnabled,
            maximumParentalControlsMonthlySpendLimitInUSD: response.body.MaximumParentalControlsMonthlySpendLimitInUSD
        }));
    }
    getSettingsGroups() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/account/settings/settings-groups"
            },
            json: true
        }).then((response) => response.body.map((val) => ({
            title: val.Title,
            url: val.Url,
            suffix: val.Suffix
        })));
    }
    getAppChatPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/app-chat-privacy"
            },
            json: true
        }).then((response) => response.body);
    }
    updateAppChatPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/app-chat-privacy",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getGameChatPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/game-chat-privacy"
            },
            json: true
        }).then((response) => response.body);
    }
    updateGameChatPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/game-chat-privacy",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getInventoryPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/inventory-privacy"
            },
            json: true
        }).then((response) => response.body);
    }
    updateInventoryPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/inventory-privacy",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getUserPrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy"
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserPrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy",
                method: "PATCH",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getUserPrivacySettingsInfo() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy/info"
            },
            json: true
        }).then((response) => response.body);
    }
    getUserPrivateMessagePrivacy() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/private-message-privacy"
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserPrivateMessagePrivacy(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/private-message-privacy",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    blockUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/block`,
                method: "POST"
            },
            json: true
        }).then(() => true);
    }
    unblockUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unblock`,
                method: "POST"
            },
            json: true
        }).then(() => true);
    }
}
exports.AccountSettingsAPI = AccountSettingsAPI;
