"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemConfigurationAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class ItemConfigurationAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://itemconfiguration.roblox.com/"
        });
    }
    getCreatedAssets(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/creations/get-assets`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiCreatedAssets(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/creations/get-asset-details`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getItemTagsByItemIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags`,
                qs: {
                    itemIds: options.itemIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    createItemTag(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getItemTagsMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags/metadata`
            },
            json: true
        }).then((response) => response.body);
    }
    deleteItemTag(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags/${options.itemTagId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getTagsByTagIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/tags`,
                qs: {
                    tagIds: options.tagIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    searchTags(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/tags/prefix-search`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.ItemConfigurationAPI = ItemConfigurationAPI;
