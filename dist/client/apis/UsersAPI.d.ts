import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type UsersValidateDisplayNameNewUserOptions = {
    displayName: string;
    birthdate: string;
};
export declare type UsersValidateDisplayNameNewUser = unknown;
export declare type UsersValidateDisplayNameExistingUserOptions = {
    userId: number;
    displayName: string;
};
export declare type UsersValidateDisplayNameExistingUser = unknown;
export declare type UsersSetSelfDisplayNameOptions = {
    userId: number;
    newDisplayName: string;
};
export declare type UsersSetSelfDisplayName = unknown;
export declare type UsersGetUserByIdOptions = {
    userId: number;
};
export declare type UsersGetUserById = {
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
    displayName: string;
    externalAppDisplayName: string;
};
export declare type UsersGetSelfAuthenticatedUserInformation = {
    id: number;
    name: string;
    displayName: string;
};
export declare type UsersGetUsersByUsernamesOptions = {
    usernames: string[];
    excludeBannedUsers?: boolean;
};
export declare type UsersGetUsersByUsernames = {
    data: {
        requestedUsername: string;
        id: number;
        name: string;
        displayName: string;
    }[];
};
export declare type UsersGetUsersByUserIdsOptions = {
    userIds: number[];
    excludeBannedUsers?: boolean;
};
export declare type UsersGetUsersByUserIds = {
    data: Omit<UsersGetUsersByUsernames["data"][0], "requestedUsername">[];
};
export declare type UsersGetUserStatusOptions = {
    userId: number;
};
export declare type UsersGetUserStatus = {
    status: string;
};
export declare type UsersUpdateSelfStatusOptions = {
    userId: number;
    status: string;
};
export declare type UsersUpdateSelfStatus = {
    status: string;
};
export declare type UsersSearchUsersOptions = {
    keyword: string;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type UsersSearchUsers = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        previousUsernames: string[];
        id: number;
        name: string;
        displayName: string;
    }[];
};
export declare type UsersUserNameHistory = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        name: string;
    }[];
};
export declare class UsersAPI extends BaseAPI {
    constructor(client: Client);
    validateDisplayNameNewUser(options: UsersValidateDisplayNameNewUserOptions): Promise<UsersValidateDisplayNameNewUser>;
    validateDisplayNameExistingUser(options: UsersValidateDisplayNameExistingUserOptions): Promise<UsersValidateDisplayNameExistingUser>;
    setDisplayName(options: UsersSetSelfDisplayNameOptions): Promise<UsersSetSelfDisplayName>;
    getUserById(options: UsersGetUserByIdOptions): Promise<UsersGetUserById>;
    getAuthenticatedUserInformation(): Promise<UsersGetSelfAuthenticatedUserInformation>;
    getUsersByUsernames(options: UsersGetUsersByUsernamesOptions): Promise<UsersGetUsersByUsernames>;
    getUsersByIds(options: UsersGetUsersByUserIdsOptions): Promise<UsersGetUsersByUserIds>;
    getUserNameHistory(options: {
        userId: number;
        limit?: 10 | 25 | 50 | 100;
        cursor?: string;
        sortOrder?: "Asc" | "Desc";
    }): Promise<UsersUserNameHistory>;
    searchUsers(options: UsersSearchUsersOptions): Promise<UsersSearchUsers>;
}
