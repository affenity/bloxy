"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class UsersAPI extends BaseAPI_1.BaseAPI {
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
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    validateDisplayNameExistingUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/display-names/validate`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    setDisplayName(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/display-names`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserById(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}`
            },
            json: true
        }).then((response) => response.body);
    }
    getAuthenticatedUserInformation() {
        return this.request({
            // This should actually be "true", but as it's needed in client.login, it's set to false
            requiresAuth: false,
            request: {
                path: `v1/users/authenticated`
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersByUsernames(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/usernames/users`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersByIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserNameHistory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/username-history`,
                method: "GET"
            },
            json: true
        }).then((response) => response.body);
    }
    searchUsers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/search`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.UsersAPI = UsersAPI;
