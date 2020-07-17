"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class LocaleAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://metrics.roblox.com/"
        });
    }
    getThumbnailsMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/thumbnails/metadata`
            },
            json: true
        }).then((response) => response.body);
    }
    recordThumbnailLoad(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/thumbnails/load`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    recordBundleLoad(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/thumbnails/metadata`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = LocaleAPI;
