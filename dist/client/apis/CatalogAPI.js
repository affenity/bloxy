"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class CatalogAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://catalog.roblox.com/"
        });
    }
    getAssetBundles(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/bundles`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getBundleDetails(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/${options.bundleId}/details`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getBundleRecommendationsByBundleId(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.bundleId}/recommendations`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiBundleDetails(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/details`,
                qs: {
                    bundleIds: options.bundleIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserBundles(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/bundles`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserBundlesByType(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/bundles/${options.bundleType}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    unpackBundle(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/${options.bundleId}/unpack`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetToCategory() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/asset-to-category`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetToSubCategory() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/asset-to-subcategory`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getCategories() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/categories`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSubCategories() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/subcategories`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAppStoreExclusiveBundles(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/exclusive-items/${options.appStoreType}/bundles`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetFavoriteCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/assets/${options.assetId}/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getBundleFavoriteCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/bundles/${options.bundleId}/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    removeAssetFavorite(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFavoriteAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    favoriteAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    removeBundleFavorite(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFavoriteBundle(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    favoriteBundle(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = CatalogAPI;
