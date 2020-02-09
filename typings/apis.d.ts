import {AnyIdentifier, Client, ClientLoginCredentials, GenericFilterOptions} from "./index";

export class BaseAPI {
    public client: Client;
    public baseUrl: string;
    public request: Function;

    constructor(client: Client);
}

export class API extends BaseAPI {
    public getAssetVersions(options: { id: AnyIdentifier, page: any, placeId: AnyIdentifier }): Promise<any>;

    public awardBadge(options: { userId: AnyIdentifier, badgeId: AnyIdentifier, placeId: AnyIdentifier }): Promise<any>;

    public getBalance(): Promise<any>;

    public getUserFriends(options: { userId: AnyIdentifier, page: any }): Promise<any>;

    public acceptFriendRequest(userId: AnyIdentifier): Promise<any>;

    public declineFriendRequest(userId: AnyIdentifier): Promise<any>;

    public sendFriendRequest(userId: AnyIdentifier): Promise<any>;

    public getUserFriendsCount(userId: AnyIdentifier): Promise<any>;

    public unfriendUser(userId: AnyIdentifier): Promise<any>;

    public isUserFollowing(options: { userId: AnyIdentifier, otherUserId: AnyIdentifier }): Promise<any>;

    public followUser(userId: AnyIdentifier): Promise<any>;

    public unfollowUser(userId: AnyIdentifier): Promise<any>;

    public getUserGroups(userId: AnyIdentifier): Promise<any>;

    public getGroup(groupId: AnyIdentifier): Promise<any>;

    public getGroupAllies(groupId: AnyIdentifier, page: any): Promise<any>;

    public getGroupEnemies(groupId: AnyIdentifier, page: any): Promise<any>;

    public getIncomingItems(): Promise<any>;

    public getProductInfo(assetId: AnyIdentifier): Promise<any>;

    public getGamePassInfo(gamePassId: AnyIdentifier): Promise<any>;

    public userOwnsAsset(options: { userId: AnyIdentifier, assetId: AnyIdentifier }): Promise<any>;

    public getDeviceInfo(): Promise<any>;

    public blockUser(userId: AnyIdentifier): Promise<any>;

    public unblockUser(userId: AnyIdentifier): Promise<any>;

    public getUserByUsername(username: string): Promise<any>;

    public userCanManageAsset(options: { userId: AnyIdentifier, assetId: AnyIdentifier }): Promise<any>;

    public getUserById(userId: AnyIdentifier): Promise<any>;
}

export class AccountInformationAPI extends BaseAPI {

    public getBirthdate(): Promise<any>;

    public updateBirthdate(options: { month: number, day: number, year: number }): Promise<any>;

    public getDescription(): Promise<any>;

    public updateDescription(description: string): Promise<any>;

    public getGender(): Promise<any>;

    public updateGender(gender: string): Promise<any>;

    public getConsecutiveXboxLoginDays(): Promise<any>;

    public getMetadata(): Promise<any>;

    public getVerifiedPhone(): Promise<any>;

    public updatePhone(options: { countryCode: any, prefix: any, phone: any, password: string }): Promise<any>;

    public deletePhone(options: { countryCode: any, prefix: any, phone: any, password: string }): Promise<any>;

    public resendPhoneCode(options: { countryCode: any, prefix: any, phone: any, password: string }): Promise<any>;

    public verifyPhoneCode(code: string | number): Promise<any>;

    public getPromotions(): Promise<any>;

    public updatePromotions(options: { facebook: string, twitter: string, youtube: string, twitch: string, visibility: string }): Promise<any>;

    public removeStarCodeAffiliate(): Promise<any>;

    public getStarCodeAffiliate(): Promise<any>;

    public setStarCodeAffiliate(affiliateCode: string): Promise<any>;
}

export class AccountSettingsAPI extends BaseAPI {
    public getAppChatPrivacy(): Promise<any>;

    public updateAppChatPrivacy(privacy: string): Promise<any>;

    public getGameChatPrivacy(): Promise<any>;

    public updateGameChatPrivacy(privacy: string): Promise<any>;

    public getInventoryPrivacy(): Promise<any>;

    public updateInventoryPrivacy(privacy: string): Promise<any>;

    public getPrivacy(): Promise<any>;

    public updatePrivacy(privacy: string): Promise<any>;
}

export class AuthAPI {
    constructor(client: Client);

    public removeAccountPin(): Promise<>;

    public getAccountPinStatus(): Promise<>;

    public updateAccountPin(pin: AnyIdentifier): Promise<>;

    public createAccountPin(pin: AnyIdentifier): Promise<>;

    public lockAccount(): Promise<>;

    public unlockAccount(pin: AnyIdentifier): Promise<>;

    public getAuthMetadata(): Promise<>;

    public login(credentials: ClientLoginCredentials): Promise<>;

    public logout(): Promise<>;

    public validatePassword(password: string): Promise<>;

    public changePassword(oldPassword: string, newPassword: string): Promise<>;

    public getRevertInformation(ticket: string): Promise<>;

    public revertAccount(revertData: RevertAccountData): Promise<>;

    public getConnectedSocialProviders(): Promise<>;

    public removeConnectedSocialProvider(provider: string, password: string): Promise<>;

    public resendTFACode(ticketData: TicketDataOptions): Promise<>;

    public verifyTFACode(ticketData: TicketDataOptions): Promise<>;

}

export class AvatarAPI extends BaseAPI {
    public getAvatarInfo(): Promise<any>;

    public getAvatarMetadata(): Promise<any>;

    public getAvatarRules(): Promise<any>;

    public getUserAvatar(userId: AnyIdentifier): Promise<any>;

    public getUserWearingAssets(userId: AnyIdentifier): Promise<any>;

    public getUserOutfits(options: { userId: AnyIdentifier, page?: number, itemsPerPage?: number, isEditable?: boolean }):
        Promise<any>;

    public removeAsset(assetId: AnyIdentifier): Promise<any>;

    public wearAsset(assetId: AnyIdentifier): Promise<any>;

    public redrawThumbnail(): Promise<any>;

    public setBodyColors(options: any): Promise<any>;

    public setAvatarType(avatarType: any): Promise<any>;

    public setScales(options: any): Promise<any>;

    public setWearingAssets(assetIds: any): Promise<any>;

    public getOutfitInfo(outfitId: AnyIdentifier): Promise<any>;

    public deleteOutfit(outfitId: AnyIdentifier): Promise<any>;

    public updateOutfit(options: { outfitId: AnyIdentifier, options: any }): Promise<any>;

    public wearOutfit(outfitId: AnyIdentifier): Promise<any>;

    public createOutfit(options: any): Promise<any>;

    public getRecentItes(itemType: any): Promise<any>;
}

export class BadgesAPI extends BaseAPI {
    public getBadgeInfo(badgeId: AnyIdentifier): Promise<any>;

    public updateBadge(options: { badgeId: AnyIdentifier, name: string, description: string, enabled: boolean }):
        Promise<any>;

    public getUniverseBadges(options: { universeId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getUserBadges(options: { userId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getUserBadgeTimestamps(options: { userId: AnyIdentifier, badges: any }): Promise<any>;

    public deleteBadge(badgeId: AnyIdentifier): Promise<any>;
}

export class BillingAPI extends BaseAPI {
    public getDeveloperExchangeRate(): Promise<any>;

    public submitDeveloperExchange(
        options: { firstName: string, lastName: string, email: string, password: string, amount: number }
    ): Promise<any>;
}

/**/
export class CaptchaAPI extends BaseAPI {
    public getMetadata(): Promise<any>;

    public getErrorMessages(): Promise<any>;
}

export class CatalogAPI extends BaseAPI {
    public getAssetBundles(options: { assetId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getBundleInfo(bundleId: AnyIdentifier): Promise<any>;

    public getBundleRecommendations(options: { bundleId: AnyIdentifier, numItems: number }): Promise<any>;

    public getMultiBundleInfo(bundleIds: any): Promise<any>;

    public getUserOwnedBundles(options: { userId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public unpackBundle(bundleId: AnyIdentifier): Promise<any>;

    public getAssetToCategoryIds(): Promise<any>;

    public getAssetToSubcategoryIds(): Promise<any>;

    public getCategories(): Promise<any>;

    public getSubcategories(): Promise<any>;

    public getAssetFavoriteCount(assetId: AnyIdentifier): Promise<any>;

    public getBundleFavoriteCount(bundleId: AnyIdentifier): Promise<any>;

    public removeAssetFavorite(options: { userId: AnyIdentifier, assetId: AnyIdentifier }): Promise<any>;

    public getFavoriteAsset(options: { userId: AnyIdentifier, assetId: AnyIdentifier }): Promise<any>;

    public favoriteAsset(options: { userId: AnyIdentifier, assetId: AnyIdentifier }): Promise<any>;

    public removeFavoriteBundle(options: { userId: AnyIdentifier, bundleId: AnyIdentifier }): Promise<any>;

    public getFavoriteBundle(options: { userId: AnyIdentifier, bundleId: AnyIdentifier }): Promise<any>;

    public favoriteBundle(options: { userId: AnyIdentifier, bundleId: AnyIdentifier }): Promise<any>;
}

export class ChatAPI extends BaseAPI {
    public getSettings(): Promise<any>;

    public getConversationsById(conversationIds: any): Promise<any>;

    public getConversationMessages(
        options: { conversationId: AnyIdentifier, amount: number, startMessageId: AnyIdentifier }
    ): Promise<any>;

    public getRolloutSettings(featureNames: any): Promise<any>;

    public getUnreadConversationsCount(): Promise<any>;

    public getUnreadConversationMessages(options: { conversationIds: any, amount: number }): Promise<any>;

    public getConversations(options: { page: number, amount: number }): Promise<any>;

    public getMetadata(): Promise<any>;

    public getLatestConversationMessages(options: { conversationIds: any, amount: number }): Promise<any>;

    public addUsersToConversation(options: { userIds: any, conversationId: AnyIdentifier }): Promise<any>;

    public markConversationMessageRead(
        options: { conversationId: AnyIdentifier, messageId: AnyIdentifier }
    ): Promise<any>;

    public markConversationsSeen(conversationIds: any): Promise<any>;

    public removeUserFromConversation(options: { userId: AnyIdentifier, conversationId: AnyIdentifier }): Promise<any>;

    public renameGroupConversation(options: { conversationId: AnyIdentifier, name: string }): Promise<any>;

    public removeConversationUniverse(conversationId: AnyIdentifier): Promise<any>;

    public sendGameLinkMessage(
        options: { universeId: AnyIdentifier, conversationId: AnyIdentifier, decorators: any }
    ): Promise<any>;

    public sendMessage(
        options: { message: string, conversationId: AnyIdentifier, decorators: any }
    ): Promise<any>;

    public setConversationUniverse(options: { conversationId: AnyIdentifier, universeId: AnyIdentifier }): Promise<any>;

    public createGroupConversation(options: { userIds: any, name: string }): Promise<any>;

    public startConversationWithUser(userId: AnyIdentifier): Promise<any>;

    public startCloudConversation(placeId: AnyIdentifier): Promise<any>;

    public updateTypingStatus(options: { conversationId: AnyIdentifier, isTyping: boolean }): Promise<any>;
}

export class ContactsAPI extends BaseAPI {
    public getUserTags(userIds: any): Promise<any>;

    public setPendingTag(options: { userId: AnyIdentifier, tag: any }): Promise<any>;

    public setTag(options: { userId: AnyIdentifier, tag: any }): Promise<any>;
}

export class DevelopAPI extends BaseAPI {
    public;

    public getAssetsVoting(assetIds: any): Promise<any>;

    public getGameTeplates(): Promise<any>;

    public getUniverseGameUpdates(universeId: AnyIdentifier): Promise<any>;

    public sendUniverseGameUpdate(options: { universeId: AnyIdentifier, message: any }): Promise<any>;

    public filterText(text: string): Promise<any>;

    public getGroupUniverses(options: { groupId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getPlaceCompatibilities(placeId: AnyIdentifier): Promise<any>;

    public updatePlace(options: { placeId: AnyIdentifier, name: string, description: string }): Promise<any>;

    public getPlaceStatistics(
        options:
            {
                placeId: AnyIdentifier,
                statType: any,
                granularity: any,
                divisionType: any,
                start: any,
                end: any
            }
    ): Promise<any>;

    public getPluginsInfo(pluginIds: any): Promise<any>;

    public updatePluginInfo(
        options: { pluginId: AnyIdentifier, name: string, description: string, enableComments: boolean }
    ): Promise<any>;

    public searchUniverses(options: { query: any, sort: any } | GenericFilterOptions): Promise<any>;

    public getToolboxItems(options: any): Promise<any>;

    public getUniverseInfo(universeId: AnyIdentifier): Promise<any>;

    public getUniversePermissions(universeId: AnyIdentifier): Promise<any>;

    public getUniversePlaces(options: { universeId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public listUniverseStatisticReports(universeId: AnyIdentifier): Promise<any>;

    public getUniverseStats(options: { universeId: AnyIdentifier, year: any, month: any }): Promise<any>;

    public downloadUniverseStatus(options: { universeId: AnyIdentifier, year: any, month: any }): Promise<any>;

    public getUniversesById(universeIds: any): Promise<any>;

    public getUniversesPermissions(universeIds: any): Promise<any>;

    public activateUniverse(universeId: AnyIdentifier): Promise<any>;

    public deactivateUniverse(universeId: AnyIdentifier): Promise<any>;

    public generateUniverseStatisticsReport(
        options: { universeId: AnyIdentifier, year: any, month: any }
    ): Promise<any>;

    public getUniverseConfiguration(universeId: AnyIdentifier): Promise<any>;

    public updateUniverseConfiguration(options: { universeId: AnyIdentifier, options: any }): Promise<any>;

    public getUniverseVIPServerConfiguration(universeId: AnyIdentifier): Promise<any>;

    public getTeamCreateSettings(universeId: AnyIdentifier): Promise<any>;

    public updateTeamCreateSettings(options: { universeId: AnyIdentifier, enabled: boolean }): Promise<any>;

    public removeUserFromTeamCreate(options: { universeId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public listUsersInTeamCreate(options: { universeId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public addUserToTeamCreate(options: { universeId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public getTeamCreateAccesses(options: GenericFilterOptions): Promise<any>;

    public getManageableGroups(): Promise<any>;

    public getNotificationStatisticReports(): Promise<any>;

    public getStudioData(key: any): Promise<any>;

    public setStudioData(options: { key: any, data: any }): Promise<any>;

    public listUniverses(options: GenericFilterOptions): Promise<any>;

    public setUniverseAlias(
        options: { universeId: AnyIdentifier, name: string, aliasType: any, id: any }
    ): Promise<any>;

    public deleteUniverseAlias(options: { universeId: AnyIdentifier, name: string }): Promise<any>;

    public updateUniverseALias(
        options: { universeId: AnyIdentifier, oldName: string, newName: string, aliasType: any, id: AnyIdentifier }
    ): Promise<any>;

    public updateDeveloperProduct(
        options: {
            universeId: AnyIdentifier,
            productId: AnyIdentifier,
            name: string,
            description: string,
            iconId: any,
            price: number
        }
    ): Promise<any>;
}

export class EconomyAPI extends BaseAPI {
    public getAssetResaleData(assetId: AnyIdentifier): Promise<any>;

    public getAssetResellers(options: { assetId: AnyIdentifier, limit: number, cursor: any }): Promise<any>;

    public getUserResellableAssetCopies(options: { userId: AnyIdentifier, assetId: AnyIdentifier }): Promise<any>;

    public getResaleTax(): Promise<any>;

    public setAssetCopyForSale(options: { assetId: AnyIdentifier, userAssetId: AnyIdentifier, price: number }):
        Promise<any>;

    public getGroupFunds(groupId: AnyIdentifier): Promise<any>;

    public getUserFunds(userId: AnyIdentifier): Promise<any>;

    public getGroupRevenueSummary(options: { groupId: AnyIdentifier, timeFrame: any }): Promise<any>;

    public getUserRevenueSummary(options: { userId: AnyIdentifier, timeFrame: any }): Promise<any>;

    public getGroupTransactions(
        options: {
            groupId: AnyIdentifier,
            transactionType: any,
            limit: number,
            cursor: any
        }
    ): Promise<any>;

    public getUserTransactions(
        options: {
            userId: AnyIdentifier,
            transactionType: any,
            limit: number,
            cursor: any
        }
    ): Promise<any>;
}

export class FollowingsAPI extends BaseAPI {
    public getFollowingUniverses(userId: AnyIdentifier): Promise<any>;

    public getUniverseFollowingStatus(options: { userId: AnyIdentifier, universeId: AnyIdentifier }): Promise<any>;

    public removeUniverseFollowing(options: { userId: AnyIdentifier, universeId: AnyIdentifier }): Promise<any>;

    public followUniverse(options: { userId: AnyIdentifier, universeId: AnyIdentifier }): Promise<any>;
}

export class FriendsAPI extends BaseAPI {
    public getDataFromNearbyCode(code: any): Promise<any>;

    public getNearbyCodeSessionHealth(): Promise<any>;

    public redeemNearbyCode(code: any): Promise<any>;

    public deleteNearbyCodeSession(): Promise<any>;

    public createNearbyCodeSession(): Promise<any>;

    public getMetadata(): Promise<any>;

    public getFriendsCount(): Promise<number>;

    public getFriendRequests(options: GenericFilterOptions): Promise<any>;

    public getFriendRequestsCount(): Promise<any>;

    public getUserFollowers(options: { userId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getUserFollowersCount(userId: AnyIdentifier): Promise<any>;

    public getUserFollowing(options: { userId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getUserFollowingCount(userId: AnyIdentifier): Promise<any>;

    public getUserFriends(userId: AnyIdentifier): Promise<any>;

    public getUserFriendsCount(userId: AnyIdentifier): Promise<any>;

    public geUserFriendsOnline(userId: AnyIdentifier): Promise<any>;

    public getUserStatusesWith(options: { userId: AnyIdentifier, userIds: any }): Promise<any>;

    public declineAllFriendRequests(): Promise<any>;

    public acceptFriendRequest(userId: AnyIdentifier): Promise<any>;

    public declineFriendRequest(userId: AnyIdentifier): Promise<any>;

    public followUser(userId: AnyIdentifier): Promise<any>;

    public sendFriendRequest(userId: AnyIdentifier): Promise<any>;

    public unfollowUser(userId: AnyIdentifier): Promise<any>;

    public unfriendUser(userId: AnyIdentifier): Promise<any>;
}

export class GameInternationalizationAPI extends BaseAPI {
    public getGameNameDescription(universeId: AnyIdentifier): Promise<any>;

    public updateGameNameDescription(options: { universeId: AnyIdentifier, data: any }): Promise<any>;

    public getNameDescriptionMetadata(): Promise<any>;

    public getGameSourceLanguage(universeId: AnyIdentifier): Promise<any>;

    public setGameSourceLanguage(options: { universeId: AnyIdentifier, languageCode: any }): Promise<any>;

    public getGameSupportedLanguages(universeId: AnyIdentifier): Promise<any>;

    public updateGameSupportedLanguages(options: { universeId: AnyIdentifier, languages: any }): Promise<any>;

    public getAutomaticTranslationStatus(universeId: AnyIdentifier): Promise<any>;

    public updateAutomaticTranslationStatus(options: { universeId: AnyIdentifier, languageCode: any, enabled: BaseAPI }):
        Promise<any>;

    public getSupportedLanguagesMetadata(): Promise<any>;
}

export class GamesAPI extends BaseAPI {
    public getGamesInfo(gameIds: any): Promise<any>;

    public getGameServers(options: { placeId: AnyIdentifier, serverType: any } | GenericFilterOptions): Promise<any>;

    public getGamesProductInfo(universeIds: any): Promise<any>;

    public listGames(options: any): Promise<any>;

    public getPlacesInfo(placeIds: any): Promise<any>;

    public getGamesPlayabilityStatus(universeIds: any): Promise<any>;

    public getGamesRecommendation(options: { algorithm: any, page: number, limit: number }): Promise<any>;

    public getGamesRecommendationByUniverse(options: { universeId: AnyIdentifier, page: number, limit: number }):
        Promise<any>;

    public getGameSorts(context: any): Promise<any>;

    public isGameFavorited(universeId: AnyIdentifier): Promise<any>;

    public favoriteGame(options: { universeId: AnyIdentifier, favorited: boolean }): Promise<any>;

    public getGameFavoritesCount(universeId: AnyIdentifier): Promise<any>;

    public getGamePasses(options: { universeId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getGameVoteStatus(universeId: AnyIdentifier): Promise<any>;

    public getGamesVoteStatus(universeIds: any): Promise<any>;

    public updateGameVote(options: { universeId: AnyIdentifier, voted: any }): Promise<any>;

    public getVIPServerInfo(id: any): Promise<any>;

    public updateVIPServer(options: { id: any, name: string, newCode: any, active: boolean }): Promise<any>;

    public createVIPServer(options: { universeId: AnyIdentifier, name: string, price: number }): Promise<any>;

    public updateVIPServerSubscription(options: { id: any, active: boolean, price: number }): Promise<any>;

    public getGameMediaData(universeId: AnyIdentifier): Promise<any>;

    public getGroupGames(groupId: AnyIdentifier): Promise<any>;

    public getUserGames(userId: AnyIdentifier): Promise<any>;
}

export class GroupsAPI extends BaseAPI {
    public getGroupInfo(groupId: AnyIdentifier): Promise<any>;

    public getGroupAuditLogs(
        options: {
            groupId: AnyIdentifier,
            actionType: any
        } | GenericFilterOptions
    ): Promise<any>;

    public getGroupSettings(groupId: AnyIdentifier): Promise<any>;

    public updateGroupSettings(options: { groupId: AnyIdentifier, settings: any }): Promise<any>;

    public getGroupMetadata(): Promise<any>;

    public getSelfMetadata(): Promise<any>;

    public createGroup(
        options: {
            name: string,
            description: string,
            isPublic: boolean,
            isPremium: boolean,
            image: any
        }
    ): Promise<any>;

    public updateGroupDescription(options: { groupId: AnyIdentifier, description: string }): Promise<any>;

    public updateGroupShout(options: { groupId: AnyIdentifier, message: string }): Promise<any>;

    public updateGroupIcon(options: { groupId: AnyIdentifier, image: any }): Promise<any>;

    public declineMultipleJoinRequests(options: { groupId: AnyIdentifier, userIds: any }): Promise<any>;

    public getJoinRequests(options: { groupId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public acceptMultipleJoinRequests(options: { groupId: AnyIdentifier, userIds: any }): Promise<any>;

    public declineJoinRequest(options: { groupId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public getJoinRequest(options: { groupId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public acceptJoinRequest(options: { groupId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public getSelfGroupMembership(groupId: AnyIdentifier): Promise<any>;

    public getMembersWithRole(options: { groupId: AnyIdentifier, roleId: AnyIdentifier } | GenericFilterOptions):
        Promise<any>;

    public getMembers(options: { groupId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public joinGroup(options: { groupId: AnyIdentifier, fcToken: string }): Promise<any>;

    public getSelfPendingGroupJoins(): Promise<any>;

    public getUserMetadata(userId: AnyIdentifier): Promise<any>;

    public getUserGroups(userId: AnyIdentifier): Promise<any>;

    public changeGroupOwner(options: { groupId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public claimGroupOwnership(groupId: AnyIdentifier): Promise<any>;

    public removeMemberFromGroup(options: { groupId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public updateMemberInGroup(options: { groupId: AnyIdentifier, userId: AnyIdentifier, roleId: AnyIdentifier }):
        Promise<any>;

    public getCurrentPayouts(groupId: AnyIdentifier): Promise<any>;

    public payoutUser(options: { groupId: AnyIdentifier, data: any }): Promise<any>;

    public updateRecurringPayouts(options: { groupId: AnyIdentifier, data: any }): Promise<any>;

    public getGroupRelationshipRequests(
        options: {
            groupId: AnyIdentifier,
            relationshipType: any,
            start: any,
            amount: number
        }
    ): Promise<any>;

    public getGroupRelationships(
        options: {
            groupId: AnyIdentifier,
            relationshipType: any,
            start: any,
            amount: number
        }
    ): Promise<any>;

    public declineMultipleGroupRelationshipRequests(
        options: {
            groupId: AnyIdentifier,
            relationshipType: any,
            groupIds: any
        }
    ): Promise<any>;

    public acceptMultipleGroupRelationshipRequests(
        options: {
            groupId: AnyIdentifier,
            relationshipType: any,
            groupIds: any
        }
    ): Promise<any>;

    public deleteGroupRelationship(
        options: {
            groupId: AnyIdentifier,
            otherGroupId: AnyIdentifier,
            relationshipType: any
        }
    ): Promise<any>;

    public requestRelationshipWithGroup(
        options: {
            groupId: AnyIdentifier,
            otherGroupId: AnyIdentifier,
            relationshipType: any
        }
    ): Promise<any>;

    public declineGroupRelationshipRequest(
        options: {
            groupId: AnyIdentifier,
            otherGroupId: AnyIdentifier,
            relationshipType: any
        }
    ): Promise<any>;

    public acceptGroupRelationshipRequest(
        options: {
            groupId: AnyIdentifier,
            otherGroupId: AnyIdentifier,
            relationshipType: any
        }
    ): Promise<any>;

    public getRolePermissions(options: { groupId: AnyIdentifier, roleId: AnyIdentifier }): Promise<any>;

    public updateRolePermissions(
        options: {
            groupId: AnyIdentifier,
            roleId: AnyIdentifier,
            permissions: any
        }
    ): Promise<any>;

    public getGuestPermissions(groupId: AnyIdentifier): Promise<any>;

    public getGroupSocialLinks(groupId: AnyIdentifier): Promise<any>;

    public postSocialLink(
        options: {
            groupId: AnyIdentifier,
            linkType: any,
            linkUrl: string,
            linkTitle: string
        }
    ): Promise<any>;

    public deleteSocialLink(options: { groupId: AnyIdentifier, linkId: any }): Promise<any>;

    public updateSocialLink(
        options: {
            groupId: AnyIdentifier,
            linkId: any,
            linkType: any,
            linkUrl: string,
            linkTitle: string
        }
    ): Promise<any>;

    public getGroupWallPosts(options: { groupId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public createGroupWallPost(options: { groupId: AnyIdentifier, message: string }): Promise<any>;

    public deleteGroupWallPost(options: { groupId: AnyIdentifier, postId: AnyIdentifier }): Promise<any>;

    public deleteGroupWallPostsByUser(options: { groupId: AnyIdentifier, userId: AnyIdentifier }): Promise<any>;

    public searchGroupsByKeyword(options: { keyword: string, limit: number, cursor: any }): Promise<any>;

    public searchGroups(query: string): Promise<any>;

    public getGroupSearchMetadata(): Promise<any>;

    public getGroupRolesById(roleIds: any): Promise<any>;

    public getUserPrimaryGroup(userId: AnyIdentifier): Promise<any>;

    public removeSelfPrimaryGroup(): Promise<any>;

    public setSelfPrimaryGroup(groupId: AnyIdentifier): Promise<any>;

    public createGroupRole(
        options: {
            groupId: AnyIdentifier,
            name: string,
            description: string,
            rank: number,
            groupFunds: boolean
        }
    ): Promise<any>;

    public deleteGroupRole(options: { groupId: AnyIdentifier, roleId: AnyIdentifier }): Promise<any>;

    public updateGroupRole(
        options: {
            groupId: AnyIdentifier,
            roleId: AnyIdentifier,
            name: string,
            description: string,
            rank: number
        }
    ): Promise<any>;

    public getMultiGroupsInfo(groupIds: any): Promise<any>;

    public getUserGroupsV2(userId: AnyIdentifier): Promise<any>;

    public getGroupWallPostsV2(options: { groupId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public createGroupWallPostV2(options: { groupId: AnyIdentifier, message: string }): Promise<any>;
}

export class InventoryAPI extends BaseAPI {
    public getPackageAssetIds(packageId: AnyIdentifier): Promise<any>;

    public getUserOwnedCollectibles(options: { userId: AnyIdentifier, assetType: any } | GenericFilterOptions):
        Promise<any>;

    public getUserOwnedItems(options: { userId: AnyIdentifier, itemType: any, targetId: AnyIdentifier }): Promise<any>;

    public getAssetOwners(options: { assetId: AnyIdentifier } | GenericFilterOptions): Promise<any>;

    public getUserAssetInventory(options: { userId: AnyIdentifier, assetTypeId: AnyIdentifier } | GenericFilterOptions):
        Promise<any>;
}

export class ItemConfigurationAPI extends BaseAPI {
    public getCreationAssets(options: any): Promise<any>;

    public getAssetDetails(assetIds: any): Promise<any>;

    public getItemTags(itemIds: any): Promise<any>;

    public createItemTag(options: { itemId: AnyIdentifier, tagId: AnyIdentifier }): Promise<any>;

    public getItemTagsMetadata(): Promise<any>;

    public deleteItemTags(itemId: AnyIdentifier): Promise<any>;

    public getTagsInfo(tagsId: any): Promise<any>;

    public prefixTagSearch(options: { prefix: string, amount: number }): Promise<any>;

    public releaseAsset(options: { assetId: AnyIdentifier, price: number, saleStatus: any }): Promise<any>;

    public updateAssetPrice(options: { assetId: AnyIdentifier, price: number }): Promise<any>;
}

export class LocaleAPI extends BaseAPI {
    public getCountriesByLocale(locale: string): Promise<any>;

    public getSelfCountry(): Promise<any>;

    public setSelfCountry(countryId: AnyIdentifier): Promise<any>;

    public getLocales(displayLocaleValues: any): Promise<any>;

    public getSupportedLocales(): Promise<any>;

    public getSelfLocale(): Promise<any>;

    public getLocusSupportedLocales(): Promise<any>;

    public setSelfSupportedLocale(localeCode: any): Promise<any>;
}

export class MetricsAPI extends BaseAPI {
    public getThumbnailMetadata(): Promise<any>;

    public reportThumbnailLoadDuration(options: { duration: any, loadState: any }): Promise<any>;

    public reportRecordBundleLoadSuccess(data: any): Promise<any>;
}

export class NotificationsAPI extends BaseAPI {
    public getSelfNotificationSettings(): Promise<any>;

    public getRealtimeSettings(): Promise<any>;

    public allowNotificationSource(sourceType: any): Promise<any>;

    public optOutFromNotificationSource(sourceType: any): Promise<any>;

    public allowNotificationDestination(destinationType: any): Promise<any>;

    public optOutFromNotificationDestination(destinationType: any): Promise<any>;

    public updateNotificationDestinationSettings(settings: any): Promise<any>;

    public updateNotificationBandSettings(setting: any): Promise<any>;

    public getPushNotificationChromeManifest(): Promise<any>;

    public getPushNotificationCurrentDeviceDestination(): Promise<any>;

    public getPushNotificationMetadata(): Promise<any>;

    public getPushNotificationIds(options: { token: any, limit: any, cursor: any }): Promise<any>;

    public deregisterAllPushNotificationDevices(): Promise<any>;

    public deregisterCurrentPushNotificationDevice(): Promise<any>;

    public markPushNotificationRead(options: { platformType: any, notificationId: any }): Promise<any>;

    public markPushNotificationCategoryRead(options: { notificationType: any, category: any, notificationId: any }):
        Promise<any>;

    public markPushNotificationInteraction(
        options: {
            platformType: any,
            token: any,
            notificationId: any,
            interactionType: any
        }
    ): Promise<any>;

    public registerPushNotificationAndroidAmazon(data: any): Promise<any>;

    public registerPushNotificationAndroidNative(data: any): Promise<any>;

    public registerPushNotificationChrome(data: any): Promise<any>;

    public registerPushNotificationFirefox(data: any): Promise<any>;

    public registerPushNotificationIOS(data: any): Promise<any>;

    public getLatestGameUpdatesFromStreamNotifications(options: { universeIds: any, sinceDateTime: any }): Promise<any>;

    public getPromptSettingsFromStreamNotifications(): Promise<any>;

    public getRecentStreamNotifications(): Promise<any>;

    public getStreamNotificationsMetadata(): Promise<any>;

    public getUnreadStreamNotificationsCoutn(): Promise<any>;

    public clearUnreadStreamNotifications(): Promise<any>;

    public markGameUpdateNotificationInteracted(data: any): Promise<any>;

    public markGameUpdateNotificationRead(options: { universeId: AnyIdentifier, createdOn: any, userId: AnyIdentifier }):
        Promise<any>;

    public markNotificationStreamInteracted(eventId: any): Promise<any>;

    public suppressStreamNotificationPrompt(): Promise<any>;
}

export class OtherAPI extends BaseAPI {
    public getUser(userId: AnyIdentifier): Promise<unknown>;

    public updateSelfStatus(status: string): Promise<unknown>;
}

export class PremiumFeaturesAPI extends BaseAPI {
    public validateUserMembership(userId: AnyIdentifier): Promise<any>;
}

export class PresenceAPI extends BaseAPI {
    public registerAppPresence(location: any): Promise<any>;

    public getUserPresences(userIds: any): Promise<any>;
}

export class PublishAPI extends BaseAPI {
    public uploadUserAsset(file: any): Promise<any>;

    public uploadBadgeIcon(options: { badgeId: AnyIdentifier, image: any }): Promise<any>;

    public uploadGamePassIcon(options: { gamePassId: AnyIdentifier, image: AnyIdentifier }): Promise<any>;

    public uploadGameThumbnail(options: { universeId: AnyIdentifier, image: any }): Promise<any>;

    public uploadPluginIcon(options: { pluginId: AnyIdentifier, image: any }): Promise<any>;
}

export class ThumbnailsAPI extends BaseAPI {
    public getThumbnailAssets(
        options: {
            assetIds: AnyIdentifier,
            returnPolicy: any,
            size: any,
            format: any
        }
    ): Promise<any>;

    public getBadgesIcons(options: { badgeIds: any, size: any, format: any }): Promise<any>;

    public getBundlesThumbnails(options: { bundleIds: any, size: any, format: any }): Promise<any>;

    public getGamePassesIcons(options: { gamePassIds: any, size: any, format: any }): Promise<any>;

    public getGamesThumbnails(options: { universeId: AnyIdentifier, thumbnailIds: any, size: any, format: any }):
        Promise<any>;

    public getGamesIcons(options: { universeIds: any, returnPolicy: any, size: any, format: any }): Promise<any>;

    public getMultiGamesThumbnails(options: { universeIds: any, amount: any, defaults: any, size: any, format: any }):
        Promise<any>;

    public getGroupsIcons(options: { groupIds: any, size: any, format: any }): Promise<any>;

    public getUsersAvatars(options: { userIds: any, size: any, format: any }): Promise<any>;

    public getUsersAvatarHeadshots(options: { userIds: any, size: any, format: any }): Promise<any>;

    public getBatch(options: any): Promise<any>;
}

export class TranslationRolesAPI extends BaseAPI {
    public getGameLocalizationRoles(universeId: AnyIdentifier): Promise<any>;

    public getUsersBelongingToRole(options: { universeId: AnyIdentifier, role: any }): Promise<any>;

    public getSelfGamesRoles(options: { role: any, start: any, amount: number }): Promise<any>;
}

export class UsersAPI extends BaseAPI {
    public getUserInfo(userId: AnyIdentifier): Promise<any>;

    public getUsersByNames(usernames: any): Promise<any>;

    public getUsersByIds(userIds: any): Promise<any>;
}
