"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class EconomyAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://economy.roblox.com/"
        });
    }
    getAssetResaleData(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/resale-data`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getAssetResellers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/resellers`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserResellableAssetCopies(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/users/${options.userId}/resellable-copies`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getResaleTaxRate() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/resale-tax-rate`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    setAssetCopiesForSale(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/assets/${options.assetId}/resellable-copies/${options.userAssetId}`,
                method: "PATCH",
                json: {
                    price: options.price
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getDeveloperExchangeAbility() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/cashoutAbility`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getDeveloperExchangeHelp() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/help`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getDeveloperExchangeInfo(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/info`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    submitDeveloperExchange(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/submit`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGroupCurrency(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/currency`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSelfCurrency(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/currency`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGroupRevenueByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/revenue/summary/${options.timeFrame}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSelfRevenueSummaryByTIme(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/revenue/summary/${options.timeFrame}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGroupTransactions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/transactions`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSelfTransactions(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/transactions`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = EconomyAPI;
