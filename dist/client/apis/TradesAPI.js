"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class TradesAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://thumbnails.roblox.com/"
        });
    }
    getTrade(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}`
            },
            json: true
        }).then(response => response.body);
    }
    getTradesByStatusType(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeStatusType}`
            },
            json: true
        }).then(response => response.body);
    }
    getTradesCountByStatusType(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeStatusType}/count`
            },
            json: true
        }).then(response => response.body);
    }
    getTradesMetaData() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/metadata`
            },
            json: true
        }).then(response => response.body);
    }
    canTradeWith(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/can-trade-with`
            },
            json: true
        }).then(response => response.body);
    }
    acceptTrade(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}/accept`,
                method: "POST"
            },
            json: true
        }).then(response => response.body);
    }
    counterTrade(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}/counter`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    declineTrade(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}/decline`,
                method: "POST"
            },
            json: true
        }).then(response => response.body);
    }
    sendTrade(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/send`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = TradesAPI;
