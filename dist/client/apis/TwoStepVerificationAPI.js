"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoStepVerificationAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class TwoStepVerificationAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://twostepverification.roblox.com/"
        });
    }
    getMetaData(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/metadata`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getConfiguration(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/configuration`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    verifyWithAuthenticator(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/challenges/authenticator/verify`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    disableAuthenticator(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/configuration/authenticator/disable`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    enableAuthenticator(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/configuration/authenticator/enable`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    verifyAuthenticatorSetup(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/configuration/authenticator/disable`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    sendEmailCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/challenges/email/send-code`,
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    verifyEmail(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/challenges/email/verify`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    disableEmail(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/configuration/email/disable`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    enableEmail(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user.id}/configuration/email/enable`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.TwoStepVerificationAPI = TwoStepVerificationAPI;
