import BaseAPI from "./BaseAPI";
import Client from "../Client";
import {
    MatchContacts as ContactsAPIMatchContacts,
    MatchContactsOptions as ContactsAPIMatchContactsOptions,
    UpdateContacts as ContactsAPIUpdateContacts,
    UpdateContactsOptions as ContactsAPIUpdateContactsOptions
} from "./ContactsAPI";
import { GetUserFriendsCount, GetUserFriendsCountOptions } from "./GeneralAPI";
import { PartialUser } from "../../structures/User";


export type FindFriendByCodeOptions = {
    code: string;
}
export type FindFriendByCode = {
    userId: number;
    username: string;
    friendshipStatus: "NoFriendship" | string;
}
export type CheckSessionHealth = unknown
export type RedeemNearbyFriendCodeOptions = {
    code: string;
}
export type RedeemNearbyFriendCode = unknown
export type DeleteSession = unknown
export type GetOrCreateNearbySession = {
    code: string;
    expires: number;
}
export type RedeemQRCodeOptions = {
    code: string;
}
export type RedeemQRCode = {
    userId: number;
    username: string;
};
export type DeleteQRCodeSession = unknown
export type GetOrCreateQRCodeSession = GetOrCreateNearbySession;
export type GetMetaDataOptions = {
    targetUserId: number;
}
export type GetMetaData = {
    isFriendFinderEnabled: boolean;
    isNearbyUpsellEnabled: boolean;
    isFriendsUserDataStoreCacheEnabled: boolean;
    userName: string;
}
export type GetSelfFriendsCount = {
    count: number;
}
export type GetSelfFriendRequestsOptions = {
    sortOrder?: "Desc" | "Asc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetSelfFriendRequests = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        description: string;
        created: string;
        isBanned: boolean;
        userId: number;
        username: string;
    }[];
}
export type GetSelfFriendRequestsCount = {
    count: number;
}
export type GetUserFollowersOptions = {
    userId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetUserFollowers = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        isOnline: boolean;
        isDeleted: boolean;
        description: string;
        created: string;
        isBanned: boolean;
        id: number;
        name: string;
    }[];
};
export type GetUserFollowersCountOptions = {
    userId: number;
}
export type GetUserFollowersCount = {
    count: number;
}
export type GetUserFollowingOptions = GetUserFollowersOptions;
export type GetUserFollowing = GetUserFollowers;
export type GetUserFollowingCountOptions = GetUserFollowersCountOptions;
export type GetUserFollowingCount = GetUserFollowersCount;
export type GetUserFriendsOptions = {
    cursor?: string;
    limit?: 10 | 25 | 50 | 100;
    userId: number;
}
export type GetUserFriends = {
    data: {
        isOnline: boolean;
        isDeleted: boolean;
        description: string;
        created: string;
        isBanned: boolean;
        id: number;
        name: string;
    }[];
};
export type GetUserOnlineFriendsOptions = {
    userId: number;
}
export type GetUserOnlineFriends = {
    data: {
        userId: number;
        username: string;
        presence: {
            placeId: number | null;
            universeId: number | null;
            UserPresenceType: string | null;
            UserLocationType: string | null;
            lastLocation: string | null;
            gameInstanceId: string | null;
            lastOnline: string | null;
        };
    }[];
};
export type GetUserFriendsWithStatusesOptions = {
    userId: number;
    withUserIds: number[];
}
export type GetUserFriendsWithStatuses = {
    data: {
        id: number;
        status: "NotFriends" | string;
    }[];
};
export type DeclineAllFriendRequests = unknown
export type AcceptFriendRequestOptions = {
    userId: number;
}
export type AcceptFriendRequest = unknown
export type DeclineFriendRequestOptions = AcceptFriendRequestOptions;
export type DeclineFriendRequest = unknown
export type FollowUserOptions = {
    userId: number;
}
export type FollowUser = {
    success: boolean;
    isCaptchaRequired: boolean;
}
export type SendFriendRequestOptions = {
    userId: number;
    source?: "Unknown" | string;
}
export type SendFriendRequest = {
    success: boolean;
    isCaptchaRequired: boolean;
}
export type UnFollowUserOptions = FollowUserOptions;
export type UnFollowUser = FollowUser;
export type UnfriendUserOptions = {
    userId: number;
}
export type UnfriendUser = unknown
export type GetSelfRecommendedUsers = {
    user: PartialUser;
    profileUrl: string;
    presenceType: number;
}[];
export type MatchContactsOptions = ContactsAPIMatchContactsOptions
export type MatchContacts = ContactsAPIMatchContacts
export type UpdateContactsOptions = ContactsAPIUpdateContactsOptions;
export type UpdateContacts = ContactsAPIUpdateContacts;

export default class FriendsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://friends.roblox.com/"
        });
    }

    findFriendByCode (options: FindFriendByCodeOptions): Promise<FindFriendByCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/code/${options.code}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    checkSessionHealth (): Promise<CheckSessionHealth> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/health`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    redeemFriendCode (options: RedeemNearbyFriendCodeOptions): Promise<RedeemNearbyFriendCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/code/${options.code}/redeem`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteFriendSession (): Promise<DeleteSession> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/session`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSession (): Promise<FindFriendByCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/session`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    redeemFriendQRCode (options: RedeemQRCodeOptions): Promise<RedeemQRCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/${options.code}/redeem`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteFriendQRSession (): Promise<DeleteQRCodeSession> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/session`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getFriendQRSession (): Promise<GetOrCreateQRCodeSession> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/session`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMetaData (options: GetMetaDataOptions): Promise<GetMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/metadata`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfFriendsCount (): Promise<GetSelfFriendsCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/my/friends/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfFriendRequests (options: GetSelfFriendRequestsOptions): Promise<GetSelfFriendRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/my/friends/requests`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfFriendRequestsCount (): Promise<GetSelfFriendRequestsCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/friend-requests/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFollowers (options: GetUserFollowersOptions): Promise<GetUserFollowers> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followers`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFollowersCount (options: GetUserFollowersCountOptions): Promise<GetUserFollowersCount> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followers/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFollowing (options: GetUserFollowingOptions): Promise<GetUserFollowing> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followings`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFollowingCount (options: GetUserFollowingCountOptions): Promise<GetUserFollowingCount> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followings/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFriends (options: GetUserFriendsOptions): Promise<GetUserFriends> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFriendsCount (options: GetUserFriendsCountOptions): Promise<GetUserFriendsCount> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFriendsOnline (options: GetUserOnlineFriendsOptions): Promise<GetUserOnlineFriends> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/friends/online`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFriendsWithStatuses (options: GetUserFriendsWithStatusesOptions): Promise<GetUserFriendsWithStatuses> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends/statuses`,
                qs: {
                    userIds: options.withUserIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    declineAllFriendRequests (): Promise<DeclineAllFriendRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/friend-requests/decline-all`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    acceptFriendRequest (options: AcceptFriendRequestOptions): Promise<AcceptFriendRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/accept-friend-request`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    declineFriendRequest (options: DeclineFriendRequestOptions): Promise<DeclineFriendRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/decline-friend-request`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    followUser (options: FollowUserOptions): Promise<FollowUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/follow`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    sendFriendRequest (options: SendFriendRequestOptions): Promise<SendFriendRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/request-friendship`,
                method: "POST",
                json: {
                    friendshipOriginSourceType: options.source || "Unknown"
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    unFollowUser (options: UnFollowUserOptions): Promise<UnFollowUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unfollow`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    unfriendUser (options: UnfriendUserOptions): Promise<UnfriendUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unfriend`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getRecommendedUsers (): Promise<GetSelfRecommendedUsers> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/recommended-users`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    matchContacts (options: MatchContactsOptions): Promise<MatchContacts> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/contacts/match`,
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

    updateContacts (options: UpdateContactsOptions): Promise<UpdateContacts> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/contacts/update`,
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
}
