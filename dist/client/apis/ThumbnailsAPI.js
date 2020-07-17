"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class ThumbnailsAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://thumbnails.roblox.com/"
        });
    }
    getAssetsThumbnails(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets`,
                qs: Object.assign(Object.assign({}, options), { assetIds: options.assetIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getBadgesIcons(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/icons`,
                qs: Object.assign(Object.assign({}, options), { badgeIds: options.badgeIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getBundlesThumbnails(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/thumbnails`,
                qs: Object.assign(Object.assign({}, options), { bundleIds: options.bundleIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getDeveloperProductIcons(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/developer-products/icons`,
                qs: Object.assign(Object.assign({}, options), { developerProductIds: options.developerProductIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getGamePassesIcons(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets`,
                qs: Object.assign(Object.assign({}, options), { gamePassIds: options.gamePassIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseThumbnailIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/${options.universeId}/thumbnails`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUniversesRootPlaceThumbnail(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/icons`,
                qs: Object.assign(Object.assign({}, options), { universeIds: options.universeIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getUniversesThumbnailIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/multiget/thumbnails`,
                qs: Object.assign(Object.assign({}, options), { universeIds: options.universeIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupsIcons(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/icons`,
                qs: Object.assign(Object.assign({}, options), { groupIds: options.groupIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersFullBodyAvatarImages(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/avatar`,
                qs: Object.assign(Object.assign({}, options), { userIds: options.userIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersAvatarBustImages(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/avatar-bust`,
                qs: Object.assign(Object.assign({}, options), { userIds: options.userIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersAvatarHeadShotImages(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/avatar-headshot`,
                qs: Object.assign(Object.assign({}, options), { userIds: options.userIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersOutfitsImages(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets`,
                qs: Object.assign(Object.assign({}, options), { userOutfitIds: options.userOutfitIds.join(",") })
            },
            json: true
        }).then((response) => response.body);
    }
    getBatchImages(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/batch`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = ThumbnailsAPI;
