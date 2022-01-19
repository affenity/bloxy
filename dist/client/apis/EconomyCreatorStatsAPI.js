"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EconomyCreatorStatsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class EconomyCreatorStatsAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://economycreatorstats.roblox.com/"
        });
    }
    getUniverseStats(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/stats`,
                qs: {
                    "request.type": options.type,
                    "request.startTime": options.startTime,
                    "request.endTime": options.endTime
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.EconomyCreatorStatsAPI = EconomyCreatorStatsAPI;
