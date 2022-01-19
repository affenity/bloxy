"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class AvatarAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://avatar.roblox.com/"
        });
    }
    getSelfAvatar() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar"
            },
            json: true
        }).then((response) => response.body);
    }
    getAvatarMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/avatar/metadata"
            },
            json: true
        }).then((response) => response.body);
    }
    getAvatarRules() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar-rules"
            },
            json: true
        }).then((response) => response.body);
    }
    getUserAvatar(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/avatar`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserCurrentlyWearing(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/currently-wearing`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserOutfits(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/outfits`
            },
            json: true
        }).then((response) => response.body);
    }
    removeAssetFromAvatar(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/avatar/assets/${options.assetId}/remove`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    wearAssetOnAvatar(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/avatar/assets/${options.assetId}/wear`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    redrawThumbnail() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/redraw-thumbnail",
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    setSelfAvatarBodyColors(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-body-colors",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    setSelfAvatarType(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-player-avatar-type",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    setSelfAvatarScales(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-scales",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    setSelfWearingAssets(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-swearing-assets",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/details`
            },
            json: true
        }).then((response) => response.body);
    }
    deleteOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/delete`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    updateOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.id}/update`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    wearOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/wear`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    createOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/outfits/create",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getRecentlyUsed(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/recent-items/${options.recentItemListType}/list`
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.AvatarAPI = AvatarAPI;
