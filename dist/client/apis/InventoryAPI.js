"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class InventoryAPI extends BaseAPI_1.default {
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
        }).then(response => response.body);
    }
    getUserCollectibles(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/assets/collectibles`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    getUserItemsByTypeAndTargetId(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/items/${options.itemType}/${options.itemTargetId}`
            },
            json: true
        }).then(response => response.body);
    }
    getAssetOwners(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/assets/${options.assetId}/owners`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    getUserInventory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/users/${options.userId}/inventory`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    getUserInventoryByAssetTypeId(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/users/${options.userId}/inventory/${options.assetTypeId}`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = InventoryAPI;
