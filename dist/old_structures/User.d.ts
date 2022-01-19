import { Client } from "../client";
import { EnumUserPresence } from "../interfaces/GeneralInterfaces";
export interface UserBaseOptions {
    id: number;
    name?: string | null;
    displayName?: string;
    membership?: boolean;
}
export declare class UserBase {
    client: Client;
    id: number;
    name: string | null;
    displayName: string | null;
    membership: unknown;
    constructor(data: UserBaseOptions, client: Client);
}
export interface FriendRequestOptions {
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
}
export declare class FriendRequest {
    client: Client;
    user: PartialUser;
    isBanned: boolean;
    created: Date;
    description: string;
    constructor(data: FriendRequestOptions, client: Client);
}
export interface PartialUserOptions {
    id: number;
    name?: string;
    displayName?: string;
}
export declare class PartialUser extends UserBase {
    constructor(data: PartialUserOptions, client: Client);
}
export interface UserOptions {
    id: number;
    name: string;
    displayName: string;
    friendsCount: number;
    presenceType: EnumUserPresence;
    lastLocation: string | null;
    userStatus: string | null;
    userStatusDate: string | null;
    userPlaceId: number | null;
    followersCount: number;
    followingsCount: number;
    isVieweeBlocked: boolean;
    isViewerBlocked: boolean;
    areFriends: boolean;
    canFollow: boolean;
    canMessage: boolean;
    canFriend: boolean;
    canTrade: boolean;
    incomingFriendRequest: boolean;
    sentFriendRequest: boolean;
    canSeeFavorites: boolean;
    messagesDisabled: boolean;
    canSeeInventory: boolean;
    headShotImage: {
        final: boolean;
        url: string;
        retryUrl: string | null;
        userId: number;
        endpointType: "Avatar" | string;
    };
    previousUsernames: string;
}
export declare class User extends PartialUser {
    friendsCount: number;
    presenceType: EnumUserPresence;
    lastLocation: string | null;
    status: string | null;
    statusDate: Date | null;
    placeId: number | null;
    followersCount: number;
    followingCount: number;
    /**
     * If the authenticated user has blocked the user
     */
    isBlocked: boolean;
    /**
     * If the user has blocked the authenticated user
     */
    hasBlocked: boolean;
    /**
     * If the authenticated user and the target user are friends
     */
    areFriends: boolean;
    canFollow: boolean;
    canMessage: boolean;
    canFriend: boolean;
    /**
     * If the authenticated user has sent a friend request to this user
     */
    sentFriendRequest: boolean;
    /**
     * If the target user has sent a friend request to the authenticated user
     */
    incomingFriendRequest: boolean;
    messagesDisabled: boolean;
    canSeeFavorites: boolean;
    canTrade: boolean;
    canSeeInventory: boolean;
    previousNames: string[];
    headshotImage: {
        final: boolean;
        url: string | null;
        retryUrl: string | null;
        userId: number;
        endpointType: "Avatar" | string;
    };
    constructor(data: UserOptions, client: Client);
}
