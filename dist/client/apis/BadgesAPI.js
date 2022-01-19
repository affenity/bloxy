"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgesAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class BadgesAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://badges.roblox.com/"
        });
    }
    getMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/badges/metadata"
            },
            json: true
        }).then((response) => response.body);
    }
    getBadge(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.badgeId}`
            },
            json: true
        }).then((response) => response.body);
    }
    updateBadge(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.id}`,
                method: "PATCH"
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseBadges(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/badges`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserBadges(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserBadgesAwardedDates(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges/awarded-dates`,
                qs: {
                    badgeIds: options.badgeIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    deleteBadgeFromUser(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/${options.userId}/badges/${options.badgeId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    deleteBadgeFromSelf(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/badges/${options.badgeId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.BadgesAPI = BadgesAPI;
