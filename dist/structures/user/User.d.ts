import PartialUser from "./PartialUser";
import Client from "../../client";
export interface UserOptions {
    id: number;
    name: string;
    friendsCount: number;
    presenceType: number;
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
export default class User extends PartialUser {
    friendsCount: number;
    presenceType: number;
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
