"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class AvatarAPI extends BaseAPI_1.default {
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
                path: "v1/avatar",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAvatarMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/avatar/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAvatarRules() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar-rules",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserAvatar(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/avatar`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserCurrentlyWearing(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/currently-wearing`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserOutfits(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/outfits`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    removeAssetFromAvatar(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/avatar/assets/${options.assetId}/remove`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    wearAssetOnAvatar(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/avatar/assets/${options.assetId}/wear`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    redrawThumbnail() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/redraw-thumbnail",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/details`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    deleteOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/delete`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    wearOutfit(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/wear`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getRecentlyUsed(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/recent-items/${options.recentItemListType}/list`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = AvatarAPI;
