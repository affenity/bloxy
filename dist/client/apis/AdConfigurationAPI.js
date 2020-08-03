"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class AdConfigurationAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            baseUrl: "https://adconfiguration.roblox.com/",
            client
        });
    }
    getCreateAdMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "/v1/sponsored-games/create-ad/metadata"
            }
        }).then(response => response.body);
    }
    getSponsoredGames(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/sponsored-games",
                qs: {
                    groupId: options.groupId || null,
                    startRowIndex: options.startRowIndex || 0,
                    count: options.count || 50
                }
            }
        }).then(response => response.body);
    }
    createAd(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/create-ad",
                method: "POST",
                json: options
            }
        }).then(response => response.body);
    }
    runAd(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/run",
                method: "POST",
                json: options
            }
        }).then(response => response.body);
    }
    stopAd(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/stop",
                method: "POST",
                json: options
            }
        }).then(response => response.body);
    }
}
exports.default = AdConfigurationAPI;
