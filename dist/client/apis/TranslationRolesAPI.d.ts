import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetSelfGameRolesOptions = {
    gameId: number;
};
export declare type GetSelfGameRoles = {
    data: string[];
};
export declare type GetGameRoleAssigneesOptions = {
    gameId: number;
    role: "translator";
};
export declare type GetGameRoleAssignees = {
    data: {
        id: null;
        name: string;
        type: "user";
    }[];
};
export declare type GetSelfGamesAccessByRoleOptions = {
    role: "translator";
    exclusiveStartKey?: string;
    pageSize?: number;
};
export declare type GetSelfGamesAccessByRole = {
    games: {
        gameId: number;
        assignee: {
            assigneeType: "user";
            id: number;
        };
    }[];
};
export declare type UpdateUserAccess = {
    gameId: number;
    userId: number;
    role: "translator";
    revoke?: boolean;
};
export declare type UpdateUser = {};
export default class TradesAPI extends BaseAPI {
    constructor(client: Client);
    getSelfGameRoles(options: GetSelfGameRolesOptions): Promise<GetSelfGameRoles>;
    getGameRoleAssignees(options: GetGameRoleAssigneesOptions): Promise<GetGameRoleAssignees>;
    getSelfGamesAccessByRole(options: GetSelfGamesAccessByRoleOptions): Promise<GetSelfGamesAccessByRole>;
    updateUserAccess(options: UpdateUserAccess): Promise<UpdateUser>;
}
