import BaseAPI from "./BaseAPI";
import Client from "../Client";
import PartialUser from "../../structures/user/PartialUser";
import PartialPlace from "../../structures/game/PartialPlace";
import PartialGameUniverse from "../../structures/game/PartialGameUniverse";
import {
    MatchContacts as ContactsAPIMatchContacts,
    MatchContactsOptions as ContactsAPIMatchContactsOptions,
    UpdateContacts as ContactsAPIUpdateContacts,
    UpdateContactsOptions as ContactsAPIUpdateContactsOptions
} from "./ContactsAPI";
import { GetUserFriendsCount, GetUserFriendsCountOptions } from "./GeneralAPI";


export type FindFriendByCodeOptions = {
    code: string;
}
export type FindFriendByCode = {
    user: PartialUser;
    friendshipStatus: "NoFriendship" | string;
}
export type CheckSessionHealth = {}
export type RedeemNearbyFriendCodeOptions = {
    code: string;
}
export type RedeemNearbyFriendCode = {}
export type DeleteSession = {}
export type GetOrCreateNearbySession = {
    code: string;
    expires: number;
}
export type RedeemQRCodeOptions = {
    code: string;
}
export type RedeemQRCode = PartialUser;
export type DeleteQRCodeSession = {}
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
        created: Date;
        isBanned: boolean;
        user: PartialUser;
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
        created: Date;
        isBanned: boolean;
        user: PartialUser;
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
    userId: number;
}
export type GetUserFriends = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        isOnline: boolean;
        isDeleted: boolean;
        description: string;
        created: Date;
        isBanned: boolean;
        user: PartialUser;
    }[];
};
export type GetUserOnlineFriendsOptions = {
    userId: number;
}
export type GetUserOnlineFriends = {
    user: PartialUser;
    presence: {
        UserPresenceType: string | null;
        UserLocationType: string | null;
        lastLocation: string | null;
        place: PartialPlace | null;
        rootPlace: PartialPlace | null;
        gameInstanceId: string | null;
        universe: PartialGameUniverse | null;
        lastOnline: string | null;
    };
}[];
export type GetUserFriendsWithStatusesOptions = {
    userId: number;
    withUserIds: number[];
}
export type GetUserFriendsWithStatuses = {
    user: PartialUser;
    status: "NotFriends" | string;
}[];
export type DeclineAllFriendRequests = {}
export type AcceptFriendRequestOptions = {
    userId: number;
}
export type AcceptFriendRequest = {}
export type DeclineFriendRequestOptions = AcceptFriendRequestOptions;
export type DeclineFriendRequest = {}
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
export type UnfriendUser = {}
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
        }).then((response: { body: any }) => ({
            friendshipStatus: response.body.friendshipStatus,
            user: new PartialUser({
                id: response.body.userId,
                name: response.body.username
            }, this.client)
        }));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => new PartialUser({
            id: response.body.userId,
            name: response.body.username
        }, this.client));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
    }

    getMetaData (options: GetMetaDataOptions): Promise<GetMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/metadata`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => ({
            ...response.body,
            data: response.body.map((val: any) => ({
                description: val.description,
                created: new Date(val.created),
                isBanned: val.isBanned,
                user: new PartialUser({
                    id: val.id,
                    name: val.name
                }, this.client)
            }))
        }));
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
        }).then((response: { body: any }) => response.body);
    }

    getUserFollowers (options: GetUserFollowersOptions): Promise<GetUserFollowers> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/followers`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => ({
            ...response.body,
            data: response.body.map((val: any) => ({
                description: val.description,
                created: new Date(val.created),
                isBanned: val.isBanned,
                isOnline: val.isOnline,
                isDeleted: val.isDeleted,
                user: new PartialUser({
                    id: val.id,
                    name: val.name
                }, this.client)
            }))
        }));
    }

    getUserFollowersCount (options: GetUserFollowersCountOptions): Promise<GetUserFollowersCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/followers/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUserFollowing (options: GetUserFollowingOptions): Promise<GetUserFollowing> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/followings`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => ({
            ...response.body,
            data: response.body.map((val: any) => ({
                description: val.description,
                created: new Date(val.created),
                isBanned: val.isBanned,
                isOnline: val.isOnline,
                isDeleted: val.isDeleted,
                user: new PartialUser({
                    id: val.id,
                    name: val.name
                }, this.client)
            }))
        }));
    }

    getUserFollowingCount (options: GetUserFollowingCountOptions): Promise<GetUserFollowingCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/followings/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUserFriends (options: GetUserFriendsOptions): Promise<GetUserFriends> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/friends`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => ({
            ...response.body,
            data: response.body.map((val: any) => ({
                description: val.description,
                created: new Date(val.created),
                isBanned: val.isBanned,
                isOnline: val.isOnline,
                isDeleted: val.isDeleted,
                user: new PartialUser({
                    id: val.id,
                    name: val.name
                }, this.client)
            }))
        }));
    }

    getUserFriendsCount (options: GetUserFriendsCountOptions): Promise<GetUserFriendsCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/friends/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body.map((val: any) => ({
            user: new PartialUser({
                id: val.id,
                name: val.name
            }, this.client),
            presence: {
                UserPresenceType: val.userPresence.UserPresenceType,
                UserLocationType: val.userPresence.UserLocationType,
                lastLocation: val.userPresence.lastLocation,
                place: val.userPresence.placeId ? new PartialPlace({
                    id: val.userPresence.placeId
                }, this.client) : null,
                rootPlace: val.userPresence.rootPlaceId ? new PartialPlace({
                    id: val.userPresence.rootPlaceId
                }, this.client) : null,
                gameInstance: val.userPresence.gameInstance,
                universe: val.userPresence.universeId ? new PartialGameUniverse({
                    id: val.userPresence.universeId
                }, this.client) : null,
                lastOnline: new Date(val.userPresence.lastOnline)
            }
        })));
    }

    getUserFriendsWithStatuses (options: GetUserFriendsWithStatusesOptions): Promise<GetUserFriendsWithStatuses> {
        return this.request({
            requiresAuth: true,
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
        }).then((response: { body: any }) => response.body.map((val: any) => ({
            user: new PartialUser({
                id: val.id
            }, this.client),
            status: val.status
        })));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body.map((val: any) => ({
            user: new PartialUser({
                id: val.id
            }, this.client),
            profileUrl: val.userProfilePageUrl,
            presenceType: val.userPresenceType
        })));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
    }
}
