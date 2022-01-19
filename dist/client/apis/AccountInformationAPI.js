"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountInformationAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class AccountInformationAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            baseUrl: "https://accountinformation.roblox.com/",
            client
        });
    }
    getUserBirthdate() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate"
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserBirthdate(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getUserDescription() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description"
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserDescription(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getUserGender() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender"
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserGender(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    getConsecutiveXboxLoginDays() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/xbox-live/consecutive-login-days"
            },
            json: true
        }).then((response) => response.body);
    }
    getMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/metadata"
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfPromotionChannels() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels"
            },
            json: true
        }).then((response) => response.body);
    }
    getUserPromotionChannels(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/promotion-channels`
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserPromotionChannels(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    removeStarCodeAffiliate() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "DELETE"
            },
            json: true
        }).then(() => true);
    }
    getStarCodeAffiliate() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates"
            },
            json: true
        }).then((response) => response.body);
    }
    addStarCodeAffiliate(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getRobloxBadges(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/roblox-badges`,
                method: "GET"
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.AccountInformationAPI = AccountInformationAPI;
