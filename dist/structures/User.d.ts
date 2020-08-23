import Client from "../client";
import { GetUserAvatar, GetUserCurrentlyWearing, GetUserOutfits, GetUserOutfitsOptions } from "../client/apis/AvatarAPI";
import { DeleteBadgeFromUser, GetUserBadges, GetUserBadgesOptions } from "../client/apis/BadgesAPI";
import { CursorPage } from "./Asset";
import { GetUserBundles, GetUserBundlesByType, GetUserBundlesOptions } from "../client/apis/CatalogAPI";
import { AddUsersToConversation, RemoveUserFromConversation, StartOneToOneConversation } from "../client/apis/ChatAPI";
import { GetUsersTags, SetPendingUserTag, SetUserTag } from "../client/apis/ContactsAPI";
import { RemoveUserFromUniverseTeamCreate } from "../client/apis/DevelopAPI";
import { GetUserResellableAssetCopies } from "../client/apis/EconomyAPI";
import { AcceptFriendRequest, DeclineFriendRequest, FollowUser, GetUserFollowers, GetUserFollowersOptions, GetUserFollowing, GetUserFollowingOptions, GetUserFriendsWithStatuses, SendFriendRequest, UnFollowUser, UnfriendUser } from "../client/apis/FriendsAPI";
import { GetJoinRequest, GetUserGroups, GetUserPrimaryGroup, PayoutMembersOptions } from "../client/apis/GroupsAPI";
import { GetUserCollectibles, GetUserCollectiblesOptions, GetUserInventory, GetUserInventoryByAssetTypeId, GetUserInventoryByAssetTypeIdOptions, GetUserInventoryOptions, GetUserItemsByTypeAndTargetId, GetUserItemsByTypeAndTargetIdOptions } from "../client/apis/InventoryAPI";
import { PremiumUpsellCheck, PremiumUpsellCheckOptions, ValidateUserMembership } from "../client/apis/PremiumFeaturesAPI";
import { GetUsersPresences } from "../client/apis/PresenceAPI";
import { SendMessage, SendMessageOptions } from "../client/apis/PrivateMessagesAPI";
import { GetUsersAvatarBustImages, GetUsersAvatarBustImagesOptions, GetUsersAvatarHeadShotsImages, GetUsersAvatarHeadShotsImagesOptions, GetUsersFullBodyAvatarImages, GetUsersFullBodyAvatarImagesOptions } from "../client/apis/ThumbnailsAPI";
import { SendTrade, SendTradeOptions } from "../client/apis/TradesAPI";
import { UpdateUser, UpdateUserAccess } from "../client/apis/TranslationRolesAPI";
export interface UserBaseOptions {
    id: number;
    name?: string | null;
    membership?: boolean;
}
export declare class UserBase {
    client: Client;
    id: number;
    name: string | null;
    membership: unknown;
    constructor(data: UserBaseOptions, client: Client);
    getStatus(): Promise<string>;
    getAvatar(): Promise<GetUserAvatar>;
    getCurrentlyWearing(): Promise<GetUserCurrentlyWearing>;
    getOutfits(options: Omit<GetUserOutfitsOptions, "userId">): Promise<GetUserOutfits>;
    getBadges(options?: Omit<GetUserBadgesOptions, "userId">): Promise<CursorPage<GetUserBadges["data"][0]>>;
    getBadgesAwardedDates(badges: number[]): Promise<{
        id: number;
        awardedAt: Date;
    }[]>;
    deleteBadge(badgeId: number): Promise<DeleteBadgeFromUser>;
    getBundles(options?: Omit<GetUserBundlesOptions, "userId">): Promise<CursorPage<GetUserBundles["data"][0]>>;
    getBundlesByType(bundleType: string, options?: Omit<GetUserBundlesOptions, "userId">): Promise<CursorPage<GetUserBundlesByType["data"][0]>>;
    addToChatConversation(conversationId: number): Promise<AddUsersToConversation>;
    removeFromConversation(conversationId: number): Promise<RemoveUserFromConversation>;
    startConversation(): Promise<StartOneToOneConversation>;
    getTag(): Promise<GetUsersTags[0]>;
    setPendingTag(tag: string): Promise<SetPendingUserTag>;
    setTag(tag: string): Promise<SetUserTag>;
    removeFromTeamCreate(universeId: number): Promise<RemoveUserFromUniverseTeamCreate>;
    getResellableAssetCopies(assetId: number): Promise<GetUserResellableAssetCopies>;
    getFollowers(options?: Omit<GetUserFollowersOptions, "userId">): Promise<CursorPage<GetUserFollowers["data"][0]>>;
    getFollowersCount(): Promise<number>;
    getFollowing(options?: Omit<GetUserFollowingOptions, "userId">): Promise<CursorPage<GetUserFollowing["data"][0]>>;
    getFollowingCount(): Promise<number>;
    getFriends(): Promise<FriendRequest[]>;
    getFriendsCount(): Promise<number>;
    getFriendsWithStatuses(userIds: number[]): Promise<GetUserFriendsWithStatuses>;
    follow(): Promise<FollowUser>;
    friend(source?: string): Promise<SendFriendRequest>;
    unFollow(): Promise<UnFollowUser>;
    unfriend(): Promise<UnfriendUser>;
    acceptFriendRequest(): Promise<AcceptFriendRequest>;
    declineFriendRequest(): Promise<DeclineFriendRequest>;
    canInviteToVIPServer(): Promise<boolean>;
    awardBadge(badgeId: number, placeId: number): Promise<string>;
    isFollowedByUser(userId: number): Promise<boolean>;
    getGroups(): Promise<GetUserGroups>;
    ownsAsset(assetId: number): Promise<boolean>;
    block(): Promise<boolean>;
    unblock(): Promise<boolean>;
    canManageAsset(assetId: number): Promise<boolean>;
    acceptJoinRequestInGroup(groupId: number): Promise<unknown>;
    declineJoinRequestInGroup(groupId: number): Promise<unknown>;
    getJoinRequestInGroup(groupId: number): Promise<GetJoinRequest>;
    setGroupOwner(groupId: number): Promise<unknown>;
    kickFromGroup(groupId: number): Promise<unknown>;
    updateMemberInGroup(groupId: number, roleId: number): Promise<unknown>;
    payoutUserFromGroup(options: {
        groupId: number;
        type: PayoutMembersOptions["type"];
        amount: number;
    }): Promise<unknown>;
    deleteGroupWallPosts(groupId: number): Promise<unknown>;
    getPrimaryGroup(): Promise<GetUserPrimaryGroup>;
    getCollectibles(options?: Omit<GetUserCollectiblesOptions, "userId">): Promise<CursorPage<GetUserCollectibles["data"][0]>>;
    getItemsByTypeAndTargetId(itemType: GetUserItemsByTypeAndTargetIdOptions["itemType"], id: number): Promise<CursorPage<GetUserItemsByTypeAndTargetId["data"][0]>>;
    getInventory(options: Omit<GetUserInventoryOptions, "userId">): Promise<CursorPage<GetUserInventory["data"][0]>>;
    getInventoryByAssetTypeId(options: Omit<GetUserInventoryByAssetTypeIdOptions, "userId">): Promise<CursorPage<GetUserInventoryByAssetTypeId["data"][0]>>;
    getUser: () => Promise<User>;
    getPremiumMembership(): Promise<ValidateUserMembership>;
    upsellPremiumCheck(options: Omit<PremiumUpsellCheckOptions, "userId">): Promise<PremiumUpsellCheck>;
    getPresence(): Promise<GetUsersPresences["userPresences"][0]>;
    sendMessage(options: Omit<SendMessageOptions, "userId">): Promise<SendMessage>;
    getFullBodyAvatarImage(options: Omit<GetUsersFullBodyAvatarImagesOptions, "userIds">): Promise<GetUsersFullBodyAvatarImages["data"][0]>;
    getAvatarBustImage(options: Omit<GetUsersAvatarBustImagesOptions, "userIds">): Promise<GetUsersAvatarBustImages["data"][0]>;
    getAvatarHeadShotImage(options: Omit<GetUsersAvatarHeadShotsImagesOptions, "userIds">): Promise<GetUsersAvatarHeadShotsImages["data"][0]>;
    getCanTrade(): Promise<boolean>;
    sendTrade(offers: Omit<SendTradeOptions["offers"][0], "userId">[]): Promise<SendTrade>;
    updateTranslationGameAccess(options: Omit<UpdateUserAccess, "userId">): Promise<UpdateUser>;
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
}
export declare class PartialUser extends UserBase {
    constructor(data: PartialUserOptions, client: Client);
}
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
export declare class User extends PartialUser {
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
