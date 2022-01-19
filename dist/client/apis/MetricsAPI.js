"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class MetricsAPI extends BaseAPI_1.BaseAPI {
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
                path: `v1/bundle-metrics/report`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.MetricsAPI = MetricsAPI;
