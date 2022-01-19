"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngagementPayoutsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class EngagementPayoutsAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://engagementpayouts.roblox.com/"
        });
    }
    getUniversePayoutHistory(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universe-payout-history`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.EngagementPayoutsAPI = EngagementPayoutsAPI;
