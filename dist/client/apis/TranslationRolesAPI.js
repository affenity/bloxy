"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationRolesAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class TranslationRolesAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://translationroles.roblox.com/"
        });
    }
    getSelfGameRoles(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/games/${options.gameId}/current-user/roles`
            },
            json: true
        }).then((response) => response.body);
    }
    getGameRoleAssignees(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/games/${options.gameId}/roles/${options.role}/assignees`
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfGamesAccessByRole(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/roles/${options.role}/current-user`
            },
            json: true
        }).then((response) => response.body);
    }
    updateUserAccess(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/games/${options.gameId}`,
                method: "PATCH",
                json: {
                    assigneeId: options.userId,
                    assigneeType: "user",
                    role: "translator",
                    revoke: options.revoke !== undefined ? options.revoke : false
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.TranslationRolesAPI = TranslationRolesAPI;
