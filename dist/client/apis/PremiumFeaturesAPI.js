"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumFeaturesAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class PremiumFeaturesAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://premiumfeatures.roblox.com/"
        });
    }
    premiumUpsellCheck(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/premium-upsell-check`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    validateUserMembership(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/validate-membership`
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.PremiumFeaturesAPI = PremiumFeaturesAPI;
