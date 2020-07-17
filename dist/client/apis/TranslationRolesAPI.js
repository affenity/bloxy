"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class TradesAPI extends BaseAPI_1.default {
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
                path: `v1/game-localization-roles/games/${options.gameId}/current-user/roles`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGameRoleAssignees(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/games/${options.gameId}/roles/${options.role}/assignees`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfGamesAccessByRole(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/roles/${options.role}/current-user`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = TradesAPI;
