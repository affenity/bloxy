"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdConfigurationAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class AdConfigurationAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            baseUrl: "https://adconfiguration.roblox.com/",
            client
        });
    }
    getSponsoredGames(options) {
        return this.request({
            requiresAuth: true,
            request: {
                url: "v2/sponsored-games",
                method: "GET",
                qs: {
                    universeId: options.universeId,
                    includeReportingStats: options.includeReportingStats,
                    isArchived: options.isArchived,
                    pageCursor: options.pageCursor
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverses(options) {
        return this.request({
            requiresAuth: true,
            request: {
                url: "v2/sponsored-games/universes",
                method: "GET",
                qs: {
                    groupId: options.groupId
                }
            },
            json: true
        }).then((response) => response.body);
    }
    createSponsor(options) {
        return this.request({
            requiresAuth: true,
            request: {
                url: "v2/sponsored-games/create",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
    stopSponsor(options) {
        return this.request({
            requiresAuth: true,
            request: {
                url: "v2/sponsored-games/stop",
                method: "POST",
                json: options
            },
            json: true
        }).then(() => true);
    }
}
exports.AdConfigurationAPI = AdConfigurationAPI;
