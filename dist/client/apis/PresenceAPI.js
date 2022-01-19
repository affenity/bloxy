"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class PresenceAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://presence.roblox.com/"
        });
    }
    registerAppPresence(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/presence/register-app-presence`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersPresences(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/presence/users`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.PresenceAPI = PresenceAPI;
