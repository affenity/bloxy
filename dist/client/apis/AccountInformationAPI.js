"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class AccountInformationAPI extends BaseAPI_1.default {
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
        }).then(response => response.body);
    }
    updateUserBirthdate(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    getUserDescription() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserDescription(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    getUserGender() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
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
                path: "v1/xbox-live/consecutive-login-days",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getVerifiedPhoneNumber() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    setPhoneNumber(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    deletePhone(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/delete",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    resendPhoneCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/resend",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    verifyPhone(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/verify",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    getSelfPromotionChannels() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserPromotionChannels(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/promotion-channels`,
                responseOptions: {
                    allowedStatusCodes: [200]
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    removeStarCodeAffiliate() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(() => true);
    }
    getStarCodeAffiliate() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    addStarCodeAffiliate(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = AccountInformationAPI;
