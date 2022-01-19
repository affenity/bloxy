"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbnailsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class ThumbnailsAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://thumbnails.roblox.com/"
        });
    }
    getAssetsThumbnails(options) {
        const assetIdsQueryString = `assetIds=${options.assetIds.join("&assetIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets?${assetIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getBadgesIcons(options) {
        const badgeIdsQueryString = `badgeIds=${options.badgeIds.join("&badgeIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/icons?${badgeIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getBundlesThumbnails(options) {
        const bundleIdsQueryString = `bundleIds=${options.bundleIds.join("&bundleIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/thumbnails?${bundleIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getDeveloperProductIcons(options) {
        const developerProductIdsQueryString = `developerProductIds=${options.developerProductIds.join("&developerProductIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/developer-products/icons?${developerProductIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getGamePassesIcons(options) {
        const gamePassIdsQueryString = `gamePassIds=${options.gamePassIds.join("&gamePassIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets?${gamePassIdsQueryString}`,
                qs: Object.assign({}, options)
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
        const universeIdsQueryString = `universeIds=${options.universeIds.join("&universeIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/icons?${universeIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getUniversesThumbnailIds(options) {
        const universeIdsQueryString = `universeIds=${options.universeIds.join("&universeIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/multiget/thumbnails?${universeIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupsIcons(options) {
        const groupIdsQueryString = `groupIds=${options.groupIds.join("&groupIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/icons?${groupIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersFullBodyAvatarImages(options) {
        const userIdsQueryString = `userIds=${options.userIds.join("&userIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/avatar?${userIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersAvatarBustImages(options) {
        const userIdsQueryString = `userIds=${options.userIds.join("&userIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/avatar-bust?${userIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersAvatarHeadShotImages(options) {
        const userIdsQueryString = `userIds=${options.userIds.join("&userIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/avatar-headshot?${userIdsQueryString}`,
                qs: Object.assign({}, options)
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersOutfitsImages(options) {
        const outfitIdsQueryString = `userOutfitIds=${options.userOutfitIds.join("&userOutfitIds=")}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets?${outfitIdsQueryString}`,
                qs: Object.assign({}, options)
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
exports.ThumbnailsAPI = ThumbnailsAPI;
