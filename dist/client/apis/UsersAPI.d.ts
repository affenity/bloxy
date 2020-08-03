import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type ValidateDisplayNameNewUserOptions = {
    displayName: string;
    birthdate: string;
};
export declare type ValidateDisplayNameNewUser = {};
export declare type ValidateDisplayNameExistingUserOptions = {
    userId: number;
    displayName: string;
};
export declare type ValidateDisplayNameExistingUser = {};
export declare type SetSelfDisplayNameOptions = {
    userId: number;
    newDisplayName: string;
};
export declare type SetSelfDisplayName = {};
export declare type GetUserByIdOptions = {
    userId: number;
};
export declare type GetUserById = {
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
    displayName: string;
};
export declare type GetSelfAuthenticatedUserInformation = {
    id: number;
    name: string;
    displayName: string;
};
export declare type GetUsersByUsernamesOptions = {
    usernames: string[];
    excludeBannedUsers?: boolean;
};
export declare type GetUsersByUsernames = {
    data: {
        requestedUsername: string;
        id: number;
        name: string;
        displayName: string;
    }[];
};
export declare type GetUsersByUserIdsOptions = {
    userIds: number[];
    excludeBannedUsers?: boolean;
};
export declare type GetUsersByUserIds = {
    data: Omit<GetUsersByUsernames["data"][0], "requestedUsername">[];
};
export declare type GetUserStatusOptions = {
    userId: number;
};
export declare type GetUserStatus = {
    status: string;
};
export declare type UpdateSelfStatusOptions = {
    userId: number;
    status: string;
};
export declare type UpdateSelfStatus = {
    status: string;
};
export declare type SearchUsersOptions = {
    keyword: string;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type SearchUsers = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        previousUsernames: string[];
        id: number;
        name: string;
        displayName: string;
    }[];
};
export default class UsersAPI extends BaseAPI {
    constructor(client: Client);
    validateDisplayNameNewUser(options: ValidateDisplayNameNewUserOptions): Promise<ValidateDisplayNameNewUser>;
    validateDisplayNameExistingUser(options: ValidateDisplayNameExistingUserOptions): Promise<ValidateDisplayNameExistingUser>;
    setDisplayName(options: SetSelfDisplayNameOptions): Promise<SetSelfDisplayName>;
    getUserById(options: GetUserByIdOptions): Promise<GetUserById>;
    getAuthenticatedUserInformation(): Promise<GetSelfAuthenticatedUserInformation>;
    getUsersByUsernames(options: GetUsersByUsernamesOptions): Promise<GetUsersByUsernames>;
    getUsersByIds(options: GetUsersByUserIdsOptions): Promise<GetUsersByUserIds>;
    getUserStatus(options: GetUserStatusOptions): Promise<GetUserStatus>;
    updateStatus(options: UpdateSelfStatusOptions): Promise<UpdateSelfStatus>;
    searchUsers(options: SearchUsersOptions): Promise<SearchUsers>;
}
