import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetSelfGameRolesOptions = {
    gameId: number;
}
export type GetSelfGameRoles = {
    data: string[];
}
export type GetGameRoleAssigneesOptions = {
    gameId: number;
    role: "translator";
}
export type GetGameRoleAssignees = {
    data: {
        id: null;
        name: string;
        type: "user";
    }[];
}
export type GetSelfGamesAccessByRoleOptions = {
    role: "translator";
    exclusiveStartKey?: string;
    pageSize?: number;
}
export type GetSelfGamesAccessByRole = {
    games: {
        gameId: number;
        assignee: {
            assigneeType: "user";
            id: number;
        };
    }[];
}
export type UpdateUserAccess = {
    gameId: number;
    userId: number;
    role: "translator";
    revoke?: boolean;
}
export type UpdateUser = unknown

export default class TradesAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://translationroles.roblox.com/"
        });
    }

    getSelfGameRoles (options: GetSelfGameRolesOptions): Promise<GetSelfGameRoles> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/games/${options.gameId}/current-user/roles`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameRoleAssignees (options: GetGameRoleAssigneesOptions): Promise<GetGameRoleAssignees> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/games/${options.gameId}/roles/${options.role}/assignees`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfGamesAccessByRole (options: GetSelfGamesAccessByRoleOptions): Promise<GetSelfGamesAccessByRole> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/game-localization-roles/roles/${options.role}/current-user`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateUserAccess (options: UpdateUserAccess): Promise<UpdateUser> {
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
        })
            .then(response => response.body);
    }
}
