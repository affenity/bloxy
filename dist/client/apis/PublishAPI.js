"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class PublishAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://publish.roblox.com/"
        });
    }
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
exports.default = PublishAPI;
