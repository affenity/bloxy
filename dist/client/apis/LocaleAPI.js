"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class LocaleAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://locale.roblox.com/"
        });
    }
    getCountryRegions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/country-regions`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    getLocales(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/locales`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    getSupportedLocales() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/locales/supported-locales`
            },
            json: true
        }).then(response => response.body);
    }
    getUserLocale() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/locales/user-locale`
            },
            json: true
        }).then(response => response.body);
    }
    getLocusSupportedLocales() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/locales/user-localization-locus-supported-locales`
            },
            json: true
        }).then(response => response.body);
    }
    setUserLocale(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/locales/set-user-supported-locale`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = LocaleAPI;
