import Client from "../../client";
import {
    GetUserAvatar,
    GetUserCurrentlyWearing,
    GetUserOutfits,
    GetUserOutfitsOptions
} from "../../client/apis/AvatarAPI";
import { DeleteBadgeFromUser, GetUserBadges, GetUserBadgesOptions } from "../../client/apis/BadgesAPI";
import CursorPage from "../asset/CursorPage";
import { GetUserBundles, GetUserBundlesByType, GetUserBundlesOptions } from "../../client/apis/CatalogAPI";
import {
    AddUsersToConversation,
    RemoveUserFromConversation,
    StartOneToOneConversation
} from "../../client/apis/ChatAPI";
import { GetUsersTags, SetPendingUserTag, SetUserTag } from "../../client/apis/ContactsAPI";
import { RemoveUserFromUniverseTeamCreate } from "../../client/apis/DevelopAPI";
import { GetUserResellableAssetCopies } from "../../client/apis/EconomyAPI";
import {
    AcceptFriendRequest,
    DeclineFriendRequest,
    FollowUser,
    GetUserFollowers,
    GetUserFollowersOptions,
    GetUserFollowing,
    GetUserFollowingOptions,
    GetUserFriendsWithStatuses,
    SendFriendRequest,
    UnFollowUser,
    UnfriendUser
} from "../../client/apis/FriendsAPI";
import { GetJoinRequest, GetUserGroups, GetUserPrimaryGroup, PayoutMembersOptions } from "../../client/apis/GroupsAPI";
import {
    GetUserCollectibles,
    GetUserCollectiblesOptions,
    GetUserInventory,
    GetUserInventoryByAssetTypeId,
    GetUserInventoryByAssetTypeIdOptions,
    GetUserInventoryOptions,
    GetUserItemsByTypeAndTargetId,
    GetUserItemsByTypeAndTargetIdOptions
} from "../../client/apis/InventoryAPI";
import User from "./User";
import {
    PremiumUpsellCheck,
    PremiumUpsellCheckOptions,
    ValidateUserMembership
} from "../../client/apis/PremiumFeaturesAPI";
import { GetUsersPresences } from "../../client/apis/PresenceAPI";
import { SendMessage, SendMessageOptions } from "../../client/apis/PrivateMessagesAPI";
import {
    GetUsersAvatarBustImages,
    GetUsersAvatarBustImagesOptions,
    GetUsersAvatarHeadShotsImages,
    GetUsersAvatarHeadShotsImagesOptions,
    GetUsersFullBodyAvatarImages,
    GetUsersFullBodyAvatarImagesOptions
} from "../../client/apis/ThumbnailsAPI";
import { SendTrade, SendTradeOptions } from "../../client/apis/TradesAPI";
import { UpdateUser, UpdateUserAccess } from "../../client/apis/TranslationRolesAPI";
import FriendRequest from "./FriendRequest";


export interface UserBaseOptions {
    id: number;
    name?: string | null;
    membership?: boolean;
}


export default class UserBase {
    public client: Client;
    public id: number;
    public name: string | null;
    public membership: unknown;

    constructor (data: UserBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.membership = data.membership || null;
    }

    getStatus (): Promise<string> {
        return this.client.apis.usersAPI.getUserStatus({
            userId: this.id
        }).then(response => response.status);
    }

    getAvatar (): Promise<GetUserAvatar> {
        return this.client.apis.avatarAPI.getUserAvatar({
            userId: this.id
        });
    }

    getCurrentlyWearing (): Promise<GetUserCurrentlyWearing> {
        return this.client.apis.avatarAPI.getUserCurrentlyWearing({
            userId: this.id
        });
    }

    getOutfits (options: Omit<GetUserOutfitsOptions, "userId">): Promise<GetUserOutfits> {
        return this.client.apis.avatarAPI.getUserOutfits({
            ...options,
            userId: this.id
        });
    }

    getBadges (options?: Omit<GetUserBadgesOptions, "userId">): Promise<CursorPage<GetUserBadges["data"][0]>> {
        return this.client.apis.badgesAPI.getUserBadges({
            ...options,
            userId: this.id
        }).then(response => new CursorPage<GetUserBadges["data"][0]>(this.client, options || {}, response, this.getBadges));
    }

    getBadgesAwardedDates (badges: number[]): Promise<{ id: number; awardedAt: Date }[]> {
        return this.client.apis.badgesAPI.getUserBadgesAwardedDates({
            badgeIds: badges,
            userId: this.id
        }).then(response => response.data.map(badgeAwarded => ({
            id: badgeAwarded.badgeId,
            awardedAt: new Date(badgeAwarded.awardedDate)
        })));
    }

    deleteBadge (badgeId: number): Promise<DeleteBadgeFromUser> {
        return this.client.apis.badgesAPI.deleteBadgeFromUser({
            badgeId,
            userId: this.id
        });
    }

    getBundles (options?: Omit<GetUserBundlesOptions, "userId">): Promise<CursorPage<GetUserBundles["data"][0]>> {
        return this.client.apis.catalogAPI.getUserBundles({
            ...options,
            userId: this.id
        }).then(response => new CursorPage(this.client, options || {}, response, this.getBundles));
    }

    getBundlesByType (bundleType: string, options?: Omit<GetUserBundlesOptions, "userId">): Promise<CursorPage<GetUserBundlesByType["data"][0]>> {
        return this.client.apis.catalogAPI.getUserBundlesByType({
            ...options,
            userId: this.id,
            bundleType
        }).then(response => new CursorPage(this.client, options || {}, response, this.getBundlesByType));
    }

    addToChatConversation (conversationId: number): Promise<AddUsersToConversation> {
        return this.client.apis.chatAPI.addUsersToConversation({
            conversationId,
            participantUserIds: [this.id]
        });
    }

    removeFromConversation (conversationId: number): Promise<RemoveUserFromConversation> {
        return this.client.apis.chatAPI.removeUserFromConversation({
            conversationId,
            participantUserId: this.id
        });
    }

    startConversation (): Promise<StartOneToOneConversation> {
        return this.client.apis.chatAPI.startOneToOneConversation({
            participantUserId: this.id
        });
    }

    getTag (): Promise<GetUsersTags[0]> {
        return this.client.apis.contactsAPI.getUsersTags({
            targetUserIds: [this.id]
        }).then(response => response[0]);
    }

    setPendingTag (tag: string): Promise<SetPendingUserTag> {
        return this.client.apis.contactsAPI.setPendingUserTag({
            userTag: tag,
            targetUserId: this.id
        });
    }

    setTag (tag: string): Promise<SetUserTag> {
        return this.client.apis.contactsAPI.setUserTag({
            targetUserId: this.id,
            userTag: tag
        });
    }

    removeFromTeamCreate (universeId: number): Promise<RemoveUserFromUniverseTeamCreate> {
        return this.client.apis.developAPI.removeUserFromUniverseTeamCreate({
            userId: this.id,
            universeId
        });
    }

    getResellableAssetCopies (assetId: number): Promise<GetUserResellableAssetCopies> {
        return this.client.apis.economyAPI.getUserResellableAssetCopies({
            assetId,
            userId: this.id
        });
    }

    getFollowers (options?: Omit<GetUserFollowersOptions, "userId">): Promise<CursorPage<GetUserFollowers["data"][0]>> {
        return this.client.apis.friendsAPI.getUserFollowers({
            ...options,
            userId: this.id
        }).then(response => new CursorPage(this.client, options || {}, response, this.getFollowers));
    }

    getFollowersCount (): Promise<number> {
        return this.client.apis.friendsAPI.getUserFollowersCount({
            userId: this.id
        }).then(response => response.count);
    }

    getFollowing (options?: Omit<GetUserFollowingOptions, "userId">): Promise<CursorPage<GetUserFollowing["data"][0]>> {
        return this.client.apis.friendsAPI.getUserFollowing({
            ...options,
            userId: this.id
        }).then(response => new CursorPage(this.client, options || {}, response, this.getFollowing));
    }

    getFollowingCount (): Promise<number> {
        return this.client.apis.friendsAPI.getUserFollowingCount({
            userId: this.id
        }).then(response => response.count);
    }

    getFriends (): Promise<FriendRequest[]> {
        return this.client.apis.friendsAPI.getUserFriends({
            userId: this.id
        }).then(response => response.data.map(friendRequest => new FriendRequest(friendRequest, this.client)));
    }

    getFriendsCount (): Promise<number> {
        return this.client.apis.friendsAPI.getUserFriendsCount({
            userId: this.id
        }).then(data => data.count);
    }

    getFriendsWithStatuses (userIds: number[]): Promise<GetUserFriendsWithStatuses> {
        return this.client.apis.friendsAPI.getUserFriendsWithStatuses({
            userId: this.id,
            withUserIds: userIds
        });
    }

    follow (): Promise<FollowUser> {
        return this.client.apis.friendsAPI.followUser({
            userId: this.id
        });
    }

    friend (source?: string): Promise<SendFriendRequest> {
        return this.client.apis.friendsAPI.sendFriendRequest({
            source: source || "Unknown",
            userId: this.id
        });
    }

    unFollow (): Promise<UnFollowUser> {
        return this.client.apis.friendsAPI.unFollowUser({
            userId: this.id
        });
    }

    unfriend (): Promise<UnfriendUser> {
        return this.client.apis.friendsAPI.unfriendUser({
            userId: this.id
        });
    }

    acceptFriendRequest (): Promise<AcceptFriendRequest> {
        return this.client.apis.friendsAPI.acceptFriendRequest({
            userId: this.id
        });
    }

    declineFriendRequest (): Promise<DeclineFriendRequest> {
        return this.client.apis.friendsAPI.declineFriendRequest({
            userId: this.id
        });
    }

    canInviteToVIPServer (): Promise<boolean> {
        return this.client.apis.gamesAPI.canSelfInviteUserToVIPServer({
            userId: this.id
        }).then(response => response.canInvite);
    }

    awardBadge (badgeId: number, placeId: number): Promise<string> {
        return this.client.apis.generalApi.awardBadge({
            badgeId,
            placeId,
            userId: this.id
        }).then(response => response as unknown as string);
    }

    isFollowedByUser (userId: number): Promise<boolean> {
        return this.client.apis.generalApi.isUserFollowing({
            userId,
            followUserId: this.id
        });
    }

    getGroups (): Promise<GetUserGroups> {
        return this.client.apis.groupsAPI.getUserGroups({
            userId: this.id
        });
    }

    ownsAsset (assetId: number): Promise<boolean> {
        return this.client.apis.generalApi.userOwnsAsset({
            userId: this.id,
            assetId
        });
    }

    block (): Promise<boolean> {
        return this.client.apis.generalApi.blockUser({
            userId: this.id
        });
    }

    unblock (): Promise<boolean> {
        return this.client.apis.generalApi.unblockUser({
            userId: this.id
        });
    }

    canManageAsset (assetId: number): Promise<boolean> {
        return this.client.apis.generalApi.userCanManageAsset({
            assetId,
            userId: this.id
        });
    }

    acceptJoinRequestInGroup (groupId: number): Promise<unknown> {
        return this.client.apis.groupsAPI.acceptJoinRequest({
            groupId,
            userId: this.id
        });
    }

    declineJoinRequestInGroup (groupId: number): Promise<unknown> {
        return this.client.apis.groupsAPI.declineJoinRequest({
            groupId,
            userId: this.id
        });
    }

    getJoinRequestInGroup (groupId: number): Promise<GetJoinRequest> {
        return this.client.apis.groupsAPI.getJoinRequest({
            groupId,
            userId: this.id
        });
    }

    setGroupOwner (groupId: number): Promise<unknown> {
        return this.client.apis.groupsAPI.changeGroupOwner({
            groupId,
            userId: this.id
        });
    }

    kickFromGroup (groupId: number): Promise<unknown> {
        return this.client.apis.groupsAPI.kickMember({
            groupId: groupId,
            userId: this.id
        });
    }

    updateMemberInGroup (groupId: number, roleId: number): Promise<unknown> {
        return this.client.apis.groupsAPI.updateMember({
            groupId,
            roleId,
            userId: this.id
        });
    }

    payoutUserFromGroup (options: {
        groupId: number;
        type: PayoutMembersOptions["type"];
        amount: number;
    }): Promise<unknown> {
        return this.client.apis.groupsAPI.payoutMembers({
            type: options.type,
            groupId: options.groupId,
            users: [
                {
                    userId: this.id,
                    amount: options.amount
                }
            ]
        });
    }

    deleteGroupWallPosts (groupId: number): Promise<unknown> {
        return this.client.apis.groupsAPI.deleteUserWallPosts({
            groupId,
            userId: this.id
        });
    }

    getPrimaryGroup (): Promise<GetUserPrimaryGroup> {
        return this.client.apis.groupsAPI.getUserPrimaryGroup({
            userId: this.id
        });
    }

    getCollectibles (options?: Omit<GetUserCollectiblesOptions, "userId">): Promise<CursorPage<GetUserCollectibles["data"][0]>> {
        return this.client.apis.inventoryAPI.getUserCollectibles({
            ...options,
            userId: this.id
        }).then(response => new CursorPage(this.client, options || {}, response, this.getCollectibles));
    }

    getItemsByTypeAndTargetId (itemType: GetUserItemsByTypeAndTargetIdOptions["itemType"], id: number): Promise<CursorPage<GetUserItemsByTypeAndTargetId["data"][0]>> {
        return this.client.apis.inventoryAPI.getUserItemsByTypeAndTargetId({
            itemType,
            itemTargetId: id,
            userId: this.id
        }).then(response => new CursorPage(this.client, {}, response, this.getItemsByTypeAndTargetId));
    }

    getInventory (options: Omit<GetUserInventoryOptions, "userId">): Promise<CursorPage<GetUserInventory["data"][0]>> {
        return this.client.apis.inventoryAPI.getUserInventory({
            ...options,
            userId: this.id
        }).then(response => new CursorPage(this.client, options, response, this.getInventory));
    }

    getInventoryByAssetTypeId (options: Omit<GetUserInventoryByAssetTypeIdOptions, "userId">): Promise<CursorPage<GetUserInventoryByAssetTypeId["data"][0]>> {
        return this.client.apis.inventoryAPI.getUserInventoryByAssetTypeId({
            ...options,
            userId: this.id
        }).then(response => new CursorPage(this.client, options, response, this.getInventoryByAssetTypeId));
    }

    getUser = (): Promise<User> => this.client.getUser(this.id);

    getPremiumMembership (): Promise<ValidateUserMembership> {
        return this.client.apis.premiumFeaturesAPI.validateUserMembership({
            userId: this.id
        });
    }

    upsellPremiumCheck (options: Omit<PremiumUpsellCheckOptions, "userId">): Promise<PremiumUpsellCheck> {
        return this.client.apis.premiumFeaturesAPI.premiumUpsellCheck({
            ...options,
            userId: this.id
        });
    }

    getPresence (): Promise<GetUsersPresences["userPresences"][0]> {
        return this.client.apis.presenceAPI.getUsersPresences({
            userIds: [this.id]
        }).then(response => response.userPresences[0]);
    }

    sendMessage (options: Omit<SendMessageOptions, "userId">): Promise<SendMessage> {
        return this.client.apis.privateMessagesAPI.sendMessage({
            ...options,
            userId: this.id
        });
    }

    getFullBodyAvatarImage (options: Omit<GetUsersFullBodyAvatarImagesOptions, "userIds">): Promise<GetUsersFullBodyAvatarImages["data"][0]> {
        return this.client.apis.thumbnailsAPI.getUsersFullBodyAvatarImages({
            ...options,
            userIds: [this.id]
        }).then(response => response.data[0]);
    }

    getAvatarBustImage (options: Omit<GetUsersAvatarBustImagesOptions, "userIds">): Promise<GetUsersAvatarBustImages["data"][0]> {
        return this.client.apis.thumbnailsAPI.getUsersAvatarBustImages({
            ...options,
            userIds: [this.id]
        }).then(response => response.data[0]);
    }

    getAvatarHeadShotImage (options: Omit<GetUsersAvatarHeadShotsImagesOptions, "userIds">): Promise<GetUsersAvatarHeadShotsImages["data"][0]> {
        return this.client.apis.thumbnailsAPI.getUsersAvatarHeadShotImages({
            ...options,
            userIds: [this.id]
        }).then(response => response.data[0]);
    }

    getCanTrade (): Promise<boolean> {
        return this.client.apis.tradesAPI.canTradeWith({
            userId: this.id
        }).then(response => response.canTrade);
    }

    sendTrade (offers: Omit<SendTradeOptions["offers"][0], "userId">[]): Promise<SendTrade> {
        return this.client.apis.tradesAPI.sendTrade({
            offers: offers.map(offerData => ({
                userId: this.id,
                robux: offerData.robux,
                userAssetIds: offerData.userAssetIds
            }))
        });
    }

    updateTranslationGameAccess (options: Omit<UpdateUserAccess, "userId">): Promise<UpdateUser> {
        return this.client.apis.translationRolesAPI.updateUserAccess({
            ...options,
            userId: this.id
        });
    }
}
