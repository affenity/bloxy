import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { GeneralGetUserFriendsCount, GeneralGetUserFriendsCountOptions } from "./GeneralAPI";
import { PartialUser } from "../../old_structures/User";
import { EnumUserPresence, UserPresence } from "../../interfaces/GeneralInterfaces";
export declare type FriendsFindFriendByCodeOptions = {
    code: string;
};
export declare type FriendsFindFriendByCode = {
    userId: number;
    username: string;
    friendshipStatus: "NoFriendship" | string;
};
export declare type FriendsCheckSessionHealth = unknown;
export declare type FriendsRedeemNearbyFriendCodeOptions = {
    code: string;
};
export declare type FriendsRedeemNearbyFriendCode = unknown;
export declare type FriendsDeleteSession = unknown;
export declare type FriendsGetOrCreateNearbySession = {
    code: string;
    expires: number;
};
export declare type FriendsRedeemQRCodeOptions = {
    code: string;
};
export declare type FriendsRedeemQRCode = {
    userId: number;
    username: string;
};
export declare type FriendsDeleteQRCodeSession = unknown;
export declare type FriendsGetOrCreateQRCodeSession = FriendsGetOrCreateNearbySession;
export declare type FriendsGetMetaDataOptions = {
    targetUserId: number;
};
export declare type FriendsGetMetaData = {
    isFriendFinderEnabled: boolean;
    isNearbyUpsellEnabled: boolean;
    isFriendsUserDataStoreCacheEnabled: boolean;
    userName: string;
};
export declare type FriendsGetSelfFriendsCount = {
    count: number;
};
export declare type FriendsGetSelfFriendRequestsOptions = {
    sortOrder?: "Desc" | "Asc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type FriendsGetSelfFriendRequests = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        description: string;
        created: string;
        isBanned: boolean;
        userId: number;
        username: string;
    }[];
};
export declare type FriendsGetSelfFriendRequestsCount = {
    count: number;
};
export declare type FriendsGetUserFollowersOptions = {
    userId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type FriendsGetUserFollowers = {
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
export declare type FriendsGetUserFollowersCountOptions = {
    userId: number;
};
export declare type FriendsGetUserFollowersCount = {
    count: number;
};
export declare type FriendsGetUserFollowingOptions = FriendsGetUserFollowersOptions;
export declare type FriendsGetUserFollowing = FriendsGetUserFollowers;
export declare type FriendsGetUserFollowingCountOptions = FriendsGetUserFollowersCountOptions;
export declare type FriendsGetUserFollowingCount = FriendsGetUserFollowersCount;
export declare type FriendsGetUserFriendsOptions = {
    cursor?: string;
    limit?: 10 | 25 | 50 | 100;
    userId: number;
};
export declare type FriendsGetUserFriends = {
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
export declare type FriendsGetUserOnlineFriendsOptions = {
    userId: number;
};
export declare type FriendsGetUserOnlineFriends = {
    data: {
        userId: number;
        username: string;
        presence: {
            placeId: number | null;
            universeId: number | null;
            UserPresenceType: UserPresence | null;
            UserLocationType: string | null;
            lastLocation: string | null;
            gameInstanceId: string | null;
            lastOnline: string | null;
        };
    }[];
};
export declare type FriendsGetUserFriendsWithStatusesOptions = {
    userId: number;
    withUserIds: number[];
};
export declare type FriendsGetUserFriendsWithStatuses = {
    data: {
        id: number;
        status: "NotFriends" | string;
    }[];
};
export declare type FriendsDeclineAllFriendRequests = unknown;
export declare type FriendsAcceptFriendRequestOptions = {
    userId: number;
};
export declare type FriendsAcceptFriendRequest = unknown;
export declare type FriendsDeclineFriendRequestOptions = FriendsAcceptFriendRequestOptions;
export declare type FriendsDeclineFriendRequest = unknown;
export declare type FriendsFollowUserOptions = {
    userId: number;
};
export declare type FriendsFollowUser = {
    success: boolean;
    isCaptchaRequired: boolean;
};
export declare type FriendsSendFriendRequestOptions = {
    userId: number;
    source?: "Unknown" | string;
};
export declare type FriendsSendFriendRequest = {
    success: boolean;
    isCaptchaRequired: boolean;
};
export declare type FriendsUnFollowUserOptions = FriendsFollowUserOptions;
export declare type FriendsUnFollowUser = FriendsFollowUser;
export declare type FriendsUnfriendUserOptions = {
    userId: number;
};
export declare type FriendsUnfriendUser = unknown;
export declare type FriendsGetSelfRecommendedUsers = {
    user: PartialUser;
    profileUrl: string;
    presenceType: EnumUserPresence;
}[];
export declare class FriendsAPI extends BaseAPI {
    constructor(client: Client);
    findFriendByCode(options: FriendsFindFriendByCodeOptions): Promise<FriendsFindFriendByCode>;
    checkSessionHealth(): Promise<FriendsCheckSessionHealth>;
    redeemFriendCode(options: FriendsRedeemNearbyFriendCodeOptions): Promise<FriendsRedeemNearbyFriendCode>;
    deleteFriendSession(): Promise<FriendsDeleteSession>;
    getSession(): Promise<FriendsFindFriendByCode>;
    redeemFriendQRCode(options: FriendsRedeemQRCodeOptions): Promise<FriendsRedeemQRCode>;
    deleteFriendQRSession(): Promise<FriendsDeleteQRCodeSession>;
    getFriendQRSession(): Promise<FriendsGetOrCreateQRCodeSession>;
    getMetaData(options: FriendsGetMetaDataOptions): Promise<FriendsGetMetaData>;
    getSelfFriendsCount(): Promise<FriendsGetSelfFriendsCount>;
    getSelfFriendRequests(options: FriendsGetSelfFriendRequestsOptions): Promise<FriendsGetSelfFriendRequests>;
    getSelfFriendRequestsCount(): Promise<FriendsGetSelfFriendRequestsCount>;
    getUserFollowers(options: FriendsGetUserFollowersOptions): Promise<FriendsGetUserFollowers>;
    getUserFollowersCount(options: FriendsGetUserFollowersCountOptions): Promise<FriendsGetUserFollowersCount>;
    getUserFollowing(options: FriendsGetUserFollowingOptions): Promise<FriendsGetUserFollowing>;
    getUserFollowingCount(options: FriendsGetUserFollowingCountOptions): Promise<FriendsGetUserFollowingCount>;
    getUserFriends(options: FriendsGetUserFriendsOptions): Promise<FriendsGetUserFriends>;
    getUserFriendsCount(options: GeneralGetUserFriendsCountOptions): Promise<GeneralGetUserFriendsCount>;
    getUserFriendsOnline(options: FriendsGetUserOnlineFriendsOptions): Promise<FriendsGetUserOnlineFriends>;
    getUserFriendsWithStatuses(options: FriendsGetUserFriendsWithStatusesOptions): Promise<FriendsGetUserFriendsWithStatuses>;
    declineAllFriendRequests(): Promise<FriendsDeclineAllFriendRequests>;
    acceptFriendRequest(options: FriendsAcceptFriendRequestOptions): Promise<FriendsAcceptFriendRequest>;
    declineFriendRequest(options: FriendsDeclineFriendRequestOptions): Promise<FriendsDeclineFriendRequest>;
    followUser(options: FriendsFollowUserOptions): Promise<FriendsFollowUser>;
    sendFriendRequest(options: FriendsSendFriendRequestOptions): Promise<FriendsSendFriendRequest>;
    unFollowUser(options: FriendsUnFollowUserOptions): Promise<FriendsUnFollowUser>;
    unfriendUser(options: FriendsUnfriendUserOptions): Promise<FriendsUnfriendUser>;
    getRecommendedUsers(): Promise<FriendsGetSelfRecommendedUsers>;
}
