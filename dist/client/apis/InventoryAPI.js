"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class InventoryAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://inventory.roblox.com/"
        });
    }
    getPackageAssets(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/packages/${options.packageId}/assets`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserCollectibles(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/assets/collectibles`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserItemsByTypeAndTargetId(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/items/${options.itemType}/${options.itemTargetId}`
            },
            json: true
        }).then((response) => response.body);
    }
    canViewInventory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/can-view-inventory`
            },
            json: true
        }).then((response) => response.body);
    }
    getCategories(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/categories`
            },
            json: true
        }).then((response) => response.body);
    }
    getCategoriesFavorites(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/categories/favorites`
            },
            json: true
        }).then((response) => response.body);
    }
    getAssetOwners(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/assets/${options.assetId}/owners`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserInventory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/users/${options.userId}/inventory`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserInventoryByAssetTypeId(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/users/${options.userId}/inventory/${options.assetTypeId}`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.InventoryAPI = InventoryAPI;
