"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.PartialUser = exports.FriendRequest = exports.UserBase = void 0;
class UserBase {
    constructor(data, client) {
        this.getUser = () => this.client.getUser(this.id);
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.membership = data.membership || null;
    }
    getStatus() {
        return this.client.apis.usersAPI.getUserStatus({
            userId: this.id
        }).then(response => response.status);
    }
    getAvatar() {
        return this.client.apis.avatarAPI.getUserAvatar({
            userId: this.id
        });
    }
    getCurrentlyWearing() {
        return this.client.apis.avatarAPI.getUserCurrentlyWearing({
            userId: this.id
        });
    }
    getOutfits(options) {
        return this.client.apis.avatarAPI.getUserOutfits(Object.assign(Object.assign({}, options), { userId: this.id }));
    }
    getBadges(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.badgesAPI.getUserBadges(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options || {}, response, this.getBadges));
    }
    getBadgesAwardedDates(badges) {
        return this.client.apis.badgesAPI.getUserBadgesAwardedDates({
            badgeIds: badges,
            userId: this.id
        }).then(response => response.data.map(badgeAwarded => ({
            id: badgeAwarded.badgeId,
            awardedAt: new Date(badgeAwarded.awardedDate)
        })));
    }
    deleteBadge(badgeId) {
        return this.client.apis.badgesAPI.deleteBadgeFromUser({
            badgeId,
            userId: this.id
        });
    }
    getBundles(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.catalogAPI.getUserBundles(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options || {}, response, this.getBundles));
    }
    getBundlesByType(bundleType, options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.catalogAPI.getUserBundlesByType(Object.assign(Object.assign({}, options), { userId: this.id, bundleType })).then(response => new CursorPageClass(this.client, options || {}, response, this.getBundlesByType));
    }
    addToChatConversation(conversationId) {
        return this.client.apis.chatAPI.addUsersToConversation({
            conversationId,
            participantUserIds: [this.id]
        });
    }
    removeFromConversation(conversationId) {
        return this.client.apis.chatAPI.removeUserFromConversation({
            conversationId,
            participantUserId: this.id
        });
    }
    startConversation() {
        return this.client.apis.chatAPI.startOneToOneConversation({
            participantUserId: this.id
        });
    }
    getTag() {
        return this.client.apis.contactsAPI.getUsersTags({
            targetUserIds: [this.id]
        }).then(response => response[0]);
    }
    setPendingTag(tag) {
        return this.client.apis.contactsAPI.setPendingUserTag({
            userTag: tag,
            targetUserId: this.id
        });
    }
    setTag(tag) {
        return this.client.apis.contactsAPI.setUserTag({
            targetUserId: this.id,
            userTag: tag
        });
    }
    removeFromTeamCreate(universeId) {
        return this.client.apis.developAPI.removeUserFromUniverseTeamCreate({
            userId: this.id,
            universeId
        });
    }
    getResellableAssetCopies(assetId) {
        return this.client.apis.economyAPI.getUserResellableAssetCopies({
            assetId,
            userId: this.id
        });
    }
    getFollowers(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.friendsAPI.getUserFollowers(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options || {}, response, this.getFollowers));
    }
    getFollowersCount() {
        return this.client.apis.friendsAPI.getUserFollowersCount({
            userId: this.id
        }).then(response => response.count);
    }
    getFollowing(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.friendsAPI.getUserFollowing(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options || {}, response, this.getFollowing));
    }
    getFollowingCount() {
        return this.client.apis.friendsAPI.getUserFollowingCount({
            userId: this.id
        }).then(response => response.count);
    }
    getFriends() {
        return this.client.apis.friendsAPI.getUserFriends({
            userId: this.id
        }).then(response => response.data.map(friendRequest => new FriendRequest(friendRequest, this.client)));
    }
    getFriendsCount() {
        return this.client.apis.friendsAPI.getUserFriendsCount({
            userId: this.id
        }).then(data => data.count);
    }
    getFriendsWithStatuses(userIds) {
        return this.client.apis.friendsAPI.getUserFriendsWithStatuses({
            userId: this.id,
            withUserIds: userIds
        });
    }
    follow() {
        return this.client.apis.friendsAPI.followUser({
            userId: this.id
        });
    }
    friend(source) {
        return this.client.apis.friendsAPI.sendFriendRequest({
            source: source || "Unknown",
            userId: this.id
        });
    }
    unFollow() {
        return this.client.apis.friendsAPI.unFollowUser({
            userId: this.id
        });
    }
    unfriend() {
        return this.client.apis.friendsAPI.unfriendUser({
            userId: this.id
        });
    }
    acceptFriendRequest() {
        return this.client.apis.friendsAPI.acceptFriendRequest({
            userId: this.id
        });
    }
    declineFriendRequest() {
        return this.client.apis.friendsAPI.declineFriendRequest({
            userId: this.id
        });
    }
    canInviteToVIPServer() {
        return this.client.apis.gamesAPI.canSelfInviteUserToVIPServer({
            userId: this.id
        }).then(response => response.canInvite);
    }
    awardBadge(badgeId, placeId) {
        return this.client.apis.generalApi.awardBadge({
            badgeId,
            placeId,
            userId: this.id
        }).then(response => response);
    }
    isFollowedByUser(userId) {
        return this.client.apis.generalApi.isUserFollowing({
            userId,
            followUserId: this.id
        });
    }
    getGroups() {
        return this.client.apis.groupsAPI.getUserGroups({
            userId: this.id
        });
    }
    ownsAsset(assetId) {
        return this.client.apis.generalApi.userOwnsAsset({
            userId: this.id,
            assetId
        });
    }
    block() {
        return this.client.apis.generalApi.blockUser({
            userId: this.id
        });
    }
    unblock() {
        return this.client.apis.generalApi.unblockUser({
            userId: this.id
        });
    }
    canManageAsset(assetId) {
        return this.client.apis.generalApi.userCanManageAsset({
            assetId,
            userId: this.id
        });
    }
    acceptJoinRequestInGroup(groupId) {
        return this.client.apis.groupsAPI.acceptJoinRequest({
            groupId,
            userId: this.id
        });
    }
    declineJoinRequestInGroup(groupId) {
        return this.client.apis.groupsAPI.declineJoinRequest({
            groupId,
            userId: this.id
        });
    }
    getJoinRequestInGroup(groupId) {
        return this.client.apis.groupsAPI.getJoinRequest({
            groupId,
            userId: this.id
        });
    }
    setGroupOwner(groupId) {
        return this.client.apis.groupsAPI.changeGroupOwner({
            groupId,
            userId: this.id
        });
    }
    kickFromGroup(groupId) {
        return this.client.apis.groupsAPI.kickMember({
            groupId: groupId,
            userId: this.id
        });
    }
    updateMemberInGroup(groupId, roleId) {
        return this.client.apis.groupsAPI.updateMember({
            groupId,
            roleId,
            userId: this.id
        });
    }
    payoutUserFromGroup(options) {
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
    deleteGroupWallPosts(groupId) {
        return this.client.apis.groupsAPI.deleteUserWallPosts({
            groupId,
            userId: this.id
        });
    }
    getPrimaryGroup() {
        return this.client.apis.groupsAPI.getUserPrimaryGroup({
            userId: this.id
        });
    }
    getCollectibles(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.inventoryAPI.getUserCollectibles(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options || {}, response, this.getCollectibles));
    }
    getItemsByTypeAndTargetId(itemType, id) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.inventoryAPI.getUserItemsByTypeAndTargetId({
            itemType,
            itemTargetId: id,
            userId: this.id
        }).then(response => new CursorPageClass(this.client, {}, response, this.getItemsByTypeAndTargetId));
    }
    getInventory(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.inventoryAPI.getUserInventory(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options, response, this.getInventory));
    }
    getInventoryByAssetTypeId(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.inventoryAPI.getUserInventoryByAssetTypeId(Object.assign(Object.assign({}, options), { userId: this.id })).then(response => new CursorPageClass(this.client, options, response, this.getInventoryByAssetTypeId));
    }
    getPremiumMembership() {
        return this.client.apis.premiumFeaturesAPI.validateUserMembership({
            userId: this.id
        });
    }
    upsellPremiumCheck(options) {
        return this.client.apis.premiumFeaturesAPI.premiumUpsellCheck(Object.assign(Object.assign({}, options), { userId: this.id }));
    }
    getPresence() {
        return this.client.apis.presenceAPI.getUsersPresences({
            userIds: [this.id]
        }).then(response => response.userPresences[0]);
    }
    sendMessage(options) {
        return this.client.apis.privateMessagesAPI.sendMessage(Object.assign(Object.assign({}, options), { userId: this.id }));
    }
    getFullBodyAvatarImage(options) {
        return this.client.apis.thumbnailsAPI.getUsersFullBodyAvatarImages(Object.assign(Object.assign({}, options), { userIds: [this.id] })).then(response => response.data[0]);
    }
    getAvatarBustImage(options) {
        return this.client.apis.thumbnailsAPI.getUsersAvatarBustImages(Object.assign(Object.assign({}, options), { userIds: [this.id] })).then(response => response.data[0]);
    }
    getAvatarHeadShotImage(options) {
        return this.client.apis.thumbnailsAPI.getUsersAvatarHeadShotImages(Object.assign(Object.assign({}, options), { userIds: [this.id] })).then(response => response.data[0]);
    }
    getCanTrade() {
        return this.client.apis.tradesAPI.canTradeWith({
            userId: this.id
        }).then(response => response.canTrade);
    }
    sendTrade(offers) {
        return this.client.apis.tradesAPI.sendTrade({
            offers: offers.map(offerData => ({
                userId: this.id,
                robux: offerData.robux,
                userAssetIds: offerData.userAssetIds
            }))
        });
    }
    updateTranslationGameAccess(options) {
        return this.client.apis.translationRolesAPI.updateUserAccess(Object.assign(Object.assign({}, options), { userId: this.id }));
    }
}
exports.UserBase = UserBase;
class FriendRequest {
    constructor(data, client) {
        this.client = client;
        this.user = new PartialUser({
            id: data.id,
            name: data.name
        }, client);
        this.created = new Date(data.created);
        this.description = data.description;
        this.isBanned = data.isBanned;
    }
}
exports.FriendRequest = FriendRequest;
class PartialUser extends UserBase {
    constructor(data, client) {
        super(data, client);
    }
}
exports.PartialUser = PartialUser;
class User extends PartialUser {
    constructor(data, client) {
        super(data, client);
        this.friendsCount = data.friendsCount;
        this.presenceType = data.presenceType;
        this.lastLocation = data.lastLocation || null;
        this.status = data.userStatus || null;
        const matchedStatusTimestamp = data.userStatusDate ? data.userStatusDate.match(/\((.*)\)/) : null;
        this.statusDate = matchedStatusTimestamp ? new Date(parseInt(matchedStatusTimestamp[1])) : null;
        this.placeId = data.userPlaceId;
        this.followersCount = data.followersCount;
        this.followingCount = data.followingsCount;
        this.isBlocked = data.isVieweeBlocked;
        this.hasBlocked = data.isViewerBlocked;
        this.areFriends = data.areFriends;
        this.canFollow = data.canFollow;
        this.canMessage = data.canMessage;
        this.canFriend = data.canFriend;
        this.sentFriendRequest = data.sentFriendRequest;
        this.incomingFriendRequest = data.incomingFriendRequest;
        this.messagesDisabled = data.messagesDisabled;
        this.canSeeFavorites = data.canSeeFavorites;
        this.canTrade = data.canTrade;
        this.canSeeInventory = data.canSeeInventory;
        this.previousNames = data.previousUsernames.split("\r\n");
        this.headshotImage = {
            final: data.headShotImage.final,
            url: data.headShotImage.url,
            retryUrl: data.headShotImage.retryUrl,
            userId: data.headShotImage.userId,
            endpointType: data.headShotImage.endpointType
        };
    }
}
exports.User = User;
