"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class EngagementPayoutsAPI extends BaseAPI_1.default {
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
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = EngagementPayoutsAPI;
