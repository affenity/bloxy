"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EconomyAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class EconomyAPI extends BaseAPI_1.BaseAPI {
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
                path: `v1/assets/${options.assetId}/resale-data`
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetResellers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/resellers`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserResellableAssetCopies(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/users/${options.userId}/resellable-copies`
            },
            json: true
        }).then((response) => response.body);
    }
    getResaleTaxRate() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/resale-tax-rate`
            },
            json: true
        }).then((response) => response.body);
    }
    setAssetCopiesForSale(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/assets/${options.assetId}/resellable-copies/${options.userAssetId}`,
                method: "PATCH",
                json: {
                    price: options.price
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getDeveloperExchangeAbility() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/cashoutAbility`
            },
            json: true
        }).then((response) => response.body);
    }
    getDeveloperExchangeHelp() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/help`
            },
            json: true
        }).then((response) => response.body);
    }
    getDeveloperExchangeInfo(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/info`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    submitDeveloperExchange(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/submit`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupCurrency(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/currency`
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfCurrency(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/currency`
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupRevenueByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/revenue/summary/${options.timeFrame}`
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfRevenueSummaryByTIme(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/revenue/summary/${options.timeFrame}`
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupTransactions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/transactions`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfTransactions(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/transactions`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.EconomyAPI = EconomyAPI;
