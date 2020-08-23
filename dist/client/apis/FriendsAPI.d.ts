import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { MatchContacts as ContactsAPIMatchContacts, MatchContactsOptions as ContactsAPIMatchContactsOptions, UpdateContacts as ContactsAPIUpdateContacts, UpdateContactsOptions as ContactsAPIUpdateContactsOptions } from "./ContactsAPI";
import { GetUserFriendsCount, GetUserFriendsCountOptions } from "./GeneralAPI";
import { PartialUser } from "../../structures/User";
export declare type FindFriendByCodeOptions = {
    code: string;
};
export declare type FindFriendByCode = {
    userId: number;
    username: string;
    friendshipStatus: "NoFriendship" | string;
};
export declare type CheckSessionHealth = {};
export declare type RedeemNearbyFriendCodeOptions = {
    code: string;
};
export declare type RedeemNearbyFriendCode = {};
export declare type DeleteSession = {};
export declare type GetOrCreateNearbySession = {
    code: string;
    expires: number;
};
export declare type RedeemQRCodeOptions = {
    code: string;
};
export declare type RedeemQRCode = {
    userId: number;
    username: string;
};
export declare type DeleteQRCodeSession = {};
export declare type GetOrCreateQRCodeSession = GetOrCreateNearbySession;
export declare type GetMetaDataOptions = {
    targetUserId: number;
};
export declare type GetMetaData = {
    isFriendFinderEnabled: boolean;
    isNearbyUpsellEnabled: boolean;
    isFriendsUserDataStoreCacheEnabled: boolean;
    userName: string;
};
export declare type GetSelfFriendsCount = {
    count: number;
};
export declare type GetSelfFriendRequestsOptions = {
    sortOrder?: "Desc" | "Asc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetSelfFriendRequests = {
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
export declare type GetSelfFriendRequestsCount = {
    count: number;
};
export declare type GetUserFollowersOptions = {
    userId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetUserFollowers = {
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
export declare type GetUserFollowersCountOptions = {
    userId: number;
};
export declare type GetUserFollowersCount = {
    count: number;
};
export declare type GetUserFollowingOptions = GetUserFollowersOptions;
export declare type GetUserFollowing = GetUserFollowers;
export declare type GetUserFollowingCountOptions = GetUserFollowersCountOptions;
export declare type GetUserFollowingCount = GetUserFollowersCount;
export declare type GetUserFriendsOptions = {
    cursor?: string;
    limit?: 10 | 25 | 50 | 100;
    userId: number;
};
export declare type GetUserFriends = {
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
export declare type GetUserOnlineFriendsOptions = {
    userId: number;
};
export declare type GetUserOnlineFriends = {
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
export declare type GetUserFriendsWithStatusesOptions = {
    userId: number;
    withUserIds: number[];
};
export declare type GetUserFriendsWithStatuses = {
    data: {
        id: number;
        status: "NotFriends" | string;
    }[];
};
export declare type DeclineAllFriendRequests = {};
export declare type AcceptFriendRequestOptions = {
    userId: number;
};
export declare type AcceptFriendRequest = {};
export declare type DeclineFriendRequestOptions = AcceptFriendRequestOptions;
export declare type DeclineFriendRequest = {};
export declare type FollowUserOptions = {
    userId: number;
};
export declare type FollowUser = {
    success: boolean;
    isCaptchaRequired: boolean;
};
export declare type SendFriendRequestOptions = {
    userId: number;
    source?: "Unknown" | string;
};
export declare type SendFriendRequest = {
    success: boolean;
    isCaptchaRequired: boolean;
};
export declare type UnFollowUserOptions = FollowUserOptions;
export declare type UnFollowUser = FollowUser;
export declare type UnfriendUserOptions = {
    userId: number;
};
export declare type UnfriendUser = {};
export declare type GetSelfRecommendedUsers = {
    user: PartialUser;
    profileUrl: string;
    presenceType: number;
}[];
export declare type MatchContactsOptions = ContactsAPIMatchContactsOptions;
export declare type MatchContacts = ContactsAPIMatchContacts;
export declare type UpdateContactsOptions = ContactsAPIUpdateContactsOptions;
export declare type UpdateContacts = ContactsAPIUpdateContacts;
export default class FriendsAPI extends BaseAPI {
    constructor(client: Client);
    findFriendByCode(options: FindFriendByCodeOptions): Promise<FindFriendByCode>;
    checkSessionHealth(): Promise<CheckSessionHealth>;
    redeemFriendCode(options: RedeemNearbyFriendCodeOptions): Promise<RedeemNearbyFriendCode>;
    deleteFriendSession(): Promise<DeleteSession>;
    getSession(): Promise<FindFriendByCode>;
    redeemFriendQRCode(options: RedeemQRCodeOptions): Promise<RedeemQRCode>;
    deleteFriendQRSession(): Promise<DeleteQRCodeSession>;
    getFriendQRSession(): Promise<GetOrCreateQRCodeSession>;
    getMetaData(options: GetMetaDataOptions): Promise<GetMetaData>;
    getSelfFriendsCount(): Promise<GetSelfFriendsCount>;
    getSelfFriendRequests(options: GetSelfFriendRequestsOptions): Promise<GetSelfFriendRequests>;
    getSelfFriendRequestsCount(): Promise<GetSelfFriendRequestsCount>;
    getUserFollowers(options: GetUserFollowersOptions): Promise<GetUserFollowers>;
    getUserFollowersCount(options: GetUserFollowersCountOptions): Promise<GetUserFollowersCount>;
    getUserFollowing(options: GetUserFollowingOptions): Promise<GetUserFollowing>;
    getUserFollowingCount(options: GetUserFollowingCountOptions): Promise<GetUserFollowingCount>;
    getUserFriends(options: GetUserFriendsOptions): Promise<GetUserFriends>;
    getUserFriendsCount(options: GetUserFriendsCountOptions): Promise<GetUserFriendsCount>;
    getUserFriendsOnline(options: GetUserOnlineFriendsOptions): Promise<GetUserOnlineFriends>;
    getUserFriendsWithStatuses(options: GetUserFriendsWithStatusesOptions): Promise<GetUserFriendsWithStatuses>;
    declineAllFriendRequests(): Promise<DeclineAllFriendRequests>;
    acceptFriendRequest(options: AcceptFriendRequestOptions): Promise<AcceptFriendRequest>;
    declineFriendRequest(options: DeclineFriendRequestOptions): Promise<DeclineFriendRequest>;
    followUser(options: FollowUserOptions): Promise<FollowUser>;
    sendFriendRequest(options: SendFriendRequestOptions): Promise<SendFriendRequest>;
    unFollowUser(options: UnFollowUserOptions): Promise<UnFollowUser>;
    unfriendUser(options: UnfriendUserOptions): Promise<UnfriendUser>;
    getRecommendedUsers(): Promise<GetSelfRecommendedUsers>;
    matchContacts(options: MatchContactsOptions): Promise<MatchContacts>;
    updateContacts(options: UpdateContactsOptions): Promise<UpdateContacts>;
}
