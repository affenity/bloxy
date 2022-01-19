"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class PublishAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://publish.roblox.com/"
        });
    }
    /**
     * @hidden
     */
    uploadAssets(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/upload`,
                method: "POST",
                body: options.files
            },
            json: true
        }).then((response) => response.body);
    }
    publishAudio(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/audio`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    verifyAudio(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/audio/verify`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    publishBadgeIcon(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.badgeId}/icon`,
                method: "POST",
                body: options.files
            },
            json: true
        }).then((response) => response.body);
    }
    /**
     * @hidden
     */
    publishGamePassIcon(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/game-passes/${options.gamePassId}/icon`,
                method: "POST",
                body: options.files
            },
            json: true
        }).then((response) => response.body);
    }
    uploadGameThumbnail(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/${options.gameId}/thumbnail/image`,
                method: "POST",
                body: options.files
            },
            json: true
        }).then((response) => response.body);
    }
    uploadPluginIcon(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins/${options.pluginId}/icon`,
                method: "POST",
                body: options.files
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.PublishAPI = PublishAPI;
