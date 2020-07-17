"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class PremiumFeaturesAPI extends BaseAPI_1.default {
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
exports.default = PremiumFeaturesAPI;
