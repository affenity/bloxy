import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type ValidateDisplayNameNewUserOptions = {
    displayName: string;
    birthdate: string;
}
export type ValidateDisplayNameNewUser = unknown
export type ValidateDisplayNameExistingUserOptions = {
    userId: number;
    displayName: string;
}
export type ValidateDisplayNameExistingUser = unknown
export type SetSelfDisplayNameOptions = {
    userId: number;
    newDisplayName: string;
}
export type SetSelfDisplayName = unknown
export type GetUserByIdOptions = {
    userId: number;
}
export type GetUserById = {
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
    displayName: string;
}
export type GetSelfAuthenticatedUserInformation = {
    id: number;
    name: string;
    displayName: string;
}
export type GetUsersByUsernamesOptions = {
    usernames: string[];
    excludeBannedUsers?: boolean;
}
export type GetUsersByUsernames = {
    data: {
        requestedUsername: string;
        id: number;
        name: string;
        displayName: string;
    }[];
};
export type GetUsersByUserIdsOptions = {
    userIds: number[];
    excludeBannedUsers?: boolean;
}
export type GetUsersByUserIds = {
    data: Omit<GetUsersByUsernames["data"][0], "requestedUsername">[];
};
export type GetUserStatusOptions = {
    userId: number;
}
export type GetUserStatus = {
    status: string;
}
export type UpdateSelfStatusOptions = {
    userId: number;
    status: string;
}
export type UpdateSelfStatus = {
    status: string;
}
export type SearchUsersOptions = {
    keyword: string;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type SearchUsers = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        previousUsernames: string[];
        id: number;
        name: string;
        displayName: string;
    }[];
}

export default class UsersAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://users.roblox.com/"
        });
    }

    validateDisplayNameNewUser (options: ValidateDisplayNameNewUserOptions): Promise<ValidateDisplayNameNewUser> {
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
        })
            .then(response => response.body);
    }

    validateDisplayNameExistingUser (options: ValidateDisplayNameExistingUserOptions): Promise<ValidateDisplayNameExistingUser> {
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
        })
            .then(response => response.body);
    }

    setDisplayName (options: SetSelfDisplayNameOptions): Promise<SetSelfDisplayName> {
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
        })
            .then(response => response.body);
    }

    getUserById (options: GetUserByIdOptions): Promise<GetUserById> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAuthenticatedUserInformation (): Promise<GetSelfAuthenticatedUserInformation> {
        return this.request({
            // This should actually be "true", but as it's needed in client.login, it's set to false
            requiresAuth: false,
            request: {
                path: `v1/users/authenticated`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUsersByUsernames (options: GetUsersByUsernamesOptions): Promise<GetUsersByUsernames> {
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
        })
            .then(response => response.body);
    }

    getUsersByIds (options: GetUsersByUserIdsOptions): Promise<GetUsersByUserIds> {
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
        })
            .then(response => response.body);
    }

    getUserStatus (options: GetUserStatusOptions): Promise<GetUserStatus> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateStatus (options: UpdateSelfStatusOptions): Promise<UpdateSelfStatus> {
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
        })
            .then(response => response.body);
    }

    searchUsers (options: SearchUsersOptions): Promise<SearchUsers> {
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
        })
            .then(response => response.body);
    }
}
