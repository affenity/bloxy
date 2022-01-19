"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class CatalogAPI extends BaseAPI_1.BaseAPI {
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
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getBundleDetails(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/${options.bundleId}/details`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getBundleRecommendationsByBundleId(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.bundleId}/recommendations`,
                qs: options
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
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserBundlesByType(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/bundles/${options.bundleType}`
            },
            json: true
        }).then((response) => response.body);
    }
    unpackBundle(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/${options.bundleId}/unpack`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetToCategory() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/asset-to-category`
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetToSubCategory() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/asset-to-subcategory`
            },
            json: true
        }).then((response) => response.body);
    }
    getCategories() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/categories`
            },
            json: true
        }).then((response) => response.body);
    }
    getSubCategories() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/subcategories`
            },
            json: true
        }).then((response) => response.body);
    }
    getAppStoreExclusiveBundles(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/exclusive-items/${options.appStoreType}/bundles`
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetFavoriteCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/assets/${options.assetId}/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getBundleFavoriteCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/bundles/${options.bundleId}/count`
            },
            json: true
        }).then((response) => response.body);
    }
    removeAssetFavorite(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFavoriteAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`
            },
            json: true
        }).then((response) => response.body);
    }
    favoriteAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    removeBundleFavorite(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFavoriteBundle(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`
            },
            json: true
        }).then((response) => response.body);
    }
    favoriteBundle(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.CatalogAPI = CatalogAPI;
