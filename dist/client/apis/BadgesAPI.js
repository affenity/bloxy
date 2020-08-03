"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
const GameBadge_1 = tslib_1.__importDefault(require("../../structures/game/GameBadge/GameBadge"));
class AvatarAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://badges.roblox.com/"
        });
    }
    getBadge(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.badgeId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => new GameBadge_1.default(response.body, this.client));
    }
    updateBadge(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.id}`,
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUniverseBadges(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/badges`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => (Object.assign(Object.assign({}, response.body), { data: response.body.data.map((data) => new GameBadge_1.default(data, this.client)) })));
    }
    getUserBadges(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => (Object.assign(Object.assign({}, response.body), { data: response.body.data.map((data) => new GameBadge_1.default(data, this.client)) })));
    }
    getUserBadgesAwardedDates(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges/awarded-dates`,
                qs: {
                    badgeIds: options.badgeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => ({
            data: response.body.data.map((data) => ({
                badge: new GameBadge_1.default(data, this.client),
                awardedDate: new Date(data.awardedDate)
            }))
        }));
    }
    deleteBadgeFromUser(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/${options.userId}/badges/${options.badgeId}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    deleteBadgeFromSelf(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/badges/${options.badgeId}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = AvatarAPI;
