"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class PresenceAPI extends BaseAPI_1.default {
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
        }).then(response => response.body);
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
        }).then(response => response.body);
    }
}
exports.default = PresenceAPI;
