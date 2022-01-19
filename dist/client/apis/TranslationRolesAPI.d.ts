import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type TranslationRolesGetSelfGameRolesOptions = {
    gameId: number;
};
export declare type TranslationRolesGetSelfGameRoles = {
    data: string[];
};
export declare type TranslationRolesGetGameRoleAssigneesOptions = {
    gameId: number;
    role: "translator";
};
export declare type TranslationRolesGetGameRoleAssignees = {
    data: {
        id: null;
        name: string;
        type: "user";
    }[];
};
export declare type TranslationRolesGetSelfGamesAccessByRoleOptions = {
    role: "translator";
    exclusiveStartKey?: string;
    pageSize?: number;
};
export declare type TranslationRolesGetSelfGamesAccessByRole = {
    games: {
        gameId: number;
        assignee: {
            assigneeType: "user";
            id: number;
        };
    }[];
};
export declare type TranslationRolesUpdateUserAccess = {
    gameId: number;
    userId: number;
    role: "translator";
    revoke?: boolean;
};
export declare type TranslationRolesUpdateUser = unknown;
export declare class TranslationRolesAPI extends BaseAPI {
    constructor(client: Client);
    getSelfGameRoles(options: TranslationRolesGetSelfGameRolesOptions): Promise<TranslationRolesGetSelfGameRoles>;
    getGameRoleAssignees(options: TranslationRolesGetGameRoleAssigneesOptions): Promise<TranslationRolesGetGameRoleAssignees>;
    getSelfGamesAccessByRole(options: TranslationRolesGetSelfGamesAccessByRoleOptions): Promise<TranslationRolesGetSelfGamesAccessByRole>;
    updateUserAccess(options: TranslationRolesUpdateUserAccess): Promise<TranslationRolesUpdateUser>;
}
