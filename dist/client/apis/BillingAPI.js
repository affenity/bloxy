"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class BillingAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://billing.roblox.com/"
        });
    }
    getDeveloperExchangeRate() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/developer-exchange-rate`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    submitDeveloperExchange(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange-rate`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getLuobuDeveloperExchangeBalance() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/luobu-developer-exchange/balance`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getLuobuDeveloperExchangeEligibility() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/luobu-developer-exchange/eligibility`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getLuobuDeveloperExchangeLatestRequestStatus() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/luobu-developer-exchange/latest-request-status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    submitLuobuDeveloperExchange(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/developer-exchange-rate/request`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserPaymentsHistory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/payments`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    purchaseAmazonProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/amazon/purchase`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    validateAmazonProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/amazon/validate`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    purchaseAppleProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/apple/purchase`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    validateAppleProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/apple/validate`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    redeemDigitalCode(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/digital-codes/redeem`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    redeemGameCard(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gamecard/redeem`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    reverseGameCard(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gamecard/reverse`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    purchaseGoogleProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/google/purchase`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    validateGoogleProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/google/validate`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    sendXsollaWebhook(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/notifications/xsolla`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getXsollaIFrameToken(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/payments/xsolla/iframe-token`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    incrementCounterByAgent(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/payments/xsolla/incrementcounterbyagent`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    redeemPromoCode(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/promocodes/redeem`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = BillingAPI;
