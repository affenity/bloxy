"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class GameInternationalizationAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://gameinternationalization.roblox.com/"
        });
    }
    getGameInfo(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/games/${options.gameId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updateGameInfo(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/games/${options.gameId}`,
                method: "PATCH",
                json: {
                    data: options.data
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getNameDescriptionMetaData() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGameInfoHistory(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/games/${options.gameId}/history`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGameSourceLanguage(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/source-language/games/${options.gameId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updateGameSourceLanguage(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/source-language/games/${options.gameId}`,
                method: "PATCH",
                qs: {
                    languageCode: options.languageCode
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGameSupportedLanguages(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    modifyGameSupportedLanguages(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}`,
                method: "PATCH",
                json: options.data,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGameAutomaticTranslationStatus(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}/automatic-translation-status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSupportedLanguagesMetaData() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    toggleGameAutomaticTranslation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}/languages/${options.languageCode}/automatic-translation-status`,
                method: "PATCH",
                json: String(options.enableAutomaticTranslation).toString(),
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = GameInternationalizationAPI;
