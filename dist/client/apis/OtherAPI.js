"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class OtherAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://roblox.com/"
        });
    }
    getUserProfileHeader(options) {
        return this.request({
            requiresAuth: false,
            request: {
                url: `https://www.roblox.com/users/profile/profileheader-json?userId=${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = OtherAPI;
