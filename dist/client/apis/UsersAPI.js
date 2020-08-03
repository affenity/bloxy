"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class UsersAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://users.roblox.com/"
        });
    }
    validateDisplayNameNewUser(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/display-names/validate`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    validateDisplayNameExistingUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/display-names/validate`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    setDisplayName(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/display-names`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserById(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getAuthenticatedUserInformation() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/authenticated`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUsersByUsernames(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/usernames/users`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUsersByIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserStatus(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateStatus(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/status`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    searchUsers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/search`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = UsersAPI;
