"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class AdsAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            baseUrl: "https://ads.roblox.com/",
            client
        });
    }
    createAssetAd(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/assets/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                },
                qs: {
                    assetId: options.assetId
                }
            }
        }).then(response => response.body);
    }
    createGamePassAd(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/game-pass/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                },
                qs: {
                    gamePassId: options.gamePassId
                }
            }
        }).then(response => response.body);
    }
    createGroupAd(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/groups/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                },
                qs: {
                    groupId: options.groupId
                }
            }
        }).then(response => response.body);
    }
}
exports.default = AdsAPI;
