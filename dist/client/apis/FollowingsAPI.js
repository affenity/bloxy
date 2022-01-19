"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowingsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class FollowingsAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://followings.roblox.com/"
        });
    }
    getUserFollowedUniverses(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFollowingUniverseStatus(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}/status`
            },
            json: true
        }).then((response) => response.body);
    }
    unFollowUniverse(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    followUniverse(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.FollowingsAPI = FollowingsAPI;
