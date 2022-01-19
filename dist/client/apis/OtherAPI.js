"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class OtherAPI extends BaseAPI_1.BaseAPI {
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
                url: `https://www.roblox.com/users/profile/profileheader-json?userId=${options.userId}`
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.OtherAPI = OtherAPI;
