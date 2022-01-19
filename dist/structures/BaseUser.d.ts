import { AccountInformationPromotionChannels, AccountInformationRobloxBadges, Client, EconomyGetSelfCurrency, FriendsGetUserFollowers, FriendsGetUserFriends, ItemType, PageSortLimit, PageSortOrder, PresenceGetUsersPresence, UsersUserNameHistory } from "..";
import { CursorPage } from "./CursorPage";
export declare type BaseUserOwnedBadge = {
    badgeId: number;
    awardedDate: Date;
    awardedDateString: string;
};
export declare type BaseUserGroupRole = {
    groupId: number;
    roleId: number;
    rank: number;
    roleName: string;
};
/**
 * Represents a Roblox user ID and gives direct access to various user-related APIs.
 */
export declare class BaseUser {
    #private;
    /**
     * @param {Client} client The Bloxy Client
     * @param {number} userId The user ID
     */
    constructor(client: Client, userId: number);
    get client(): Client;
    get userId(): number;
    /**
     * Return the username history of the user.
     */
    getUsernameHistory(): Promise<UsersUserNameHistory>;
    /**
     * Returns the users current presence.
     */
    getPresence(): Promise<PresenceGetUsersPresence>;
    /**
     * Returns the user's friends.
     * @param limit The number of friends to return
     * @param cursor The cursor to continue at
     */
    getFriends(limit?: PageSortLimit, cursor?: string): Promise<FriendsGetUserFriends>;
    /**
     * Returns the user's robux amount. The BaseUser must be the currently authenticated user, or else this function throws an error.
     */
    getCurrency(): Promise<EconomyGetSelfCurrency>;
    /**
     * Returns if the user has Roblox Premium or not.
     */
    hasPremium(): Promise<boolean>;
    /**
     * Returns if the user owns the specified item.
     * @param {ItemType} itemType The type of item to check
     * @param {number} itemId The ID of the item to check
     */
    ownsItem(itemType: ItemType, itemId: number): Promise<boolean>;
    /**
     * Returns if the user owns the specific asset.
     * @param assetId The ID of the asset to check
     */
    ownsAsset(assetId: number): Promise<boolean>;
    /**
     * Returns if the user owns the specific gamepass.
     * @param gamepassId The ID of the gamepass to check
     */
    ownsGamepass(gamepassId: number): Promise<boolean>;
    /**
     * Returns the date the specified badges got awarded to the user.
     * @param badgeIds The badge IDs to check
     */
    getBadgeAwardedDates(badgeIds: number[]): Promise<BaseUserOwnedBadge[]>;
    /**
     * Returns the role of the groups the user is in.
     */
    getGroupRoles(): Promise<BaseUserGroupRole[]>;
    /**
     * Returns the roblox badges the user has.
     */
    getRobloxBadges(): Promise<AccountInformationRobloxBadges>;
    /**
     * Returns the user's promotion channels
     */
    getPromotionChannels(): Promise<AccountInformationPromotionChannels>;
    /**
     * Returns the user's friend count
     */
    getFriendCount(): Promise<number>;
    /**
     * Returns the user's follower count
     */
    getFollowerCount(): Promise<number>;
    /**
     * Returns the user's following count
     */
    getFollowingCount(): Promise<number>;
    /**
     * Returns the user's followers
     * @param limit The number of followers to return
     * @param sortOrder The sort order of the followers
     * @param cursor The cursor to continue at
     */
    getFollowers(limit?: PageSortLimit, sortOrder?: PageSortOrder, cursor?: string): Promise<CursorPage<FriendsGetUserFollowers["data"][0], {
        userId: number;
    }>>;
    /**
     * Returns the user's followings
     * @param limit The number of followings to return
     * @param sortOrder The sort order of the followings
     * @param cursor The cursor to continue at
     */
    getFollowings(limit?: PageSortLimit, sortOrder?: PageSortOrder, cursor?: string): Promise<FriendsGetUserFollowers>;
}
