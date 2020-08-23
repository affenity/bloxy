"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class EconomyCreatorStatsAPI extends BaseAPI_1.default {
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = EconomyCreatorStatsAPI;
