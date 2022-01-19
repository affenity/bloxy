"use strict";
var _BaseUser_client, _BaseUser_userId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUser = void 0;
const tslib_1 = require("tslib");
const CursorPage_1 = require("./CursorPage");
/**
 * Represents a Roblox user ID and gives direct access to various user-related APIs.
 */
class BaseUser {
    /**
     * @param {Client} client The Bloxy Client
     * @param {number} userId The user ID
     */
    constructor(client, userId) {
        _BaseUser_client.set(this, void 0);
        _BaseUser_userId.set(this, void 0);
        (0, tslib_1.__classPrivateFieldSet)(this, _BaseUser_client, client, "f");
        (0, tslib_1.__classPrivateFieldSet)(this, _BaseUser_userId, userId, "f");
    }
    get client() {
        return (0, tslib_1.__classPrivateFieldGet)(this, _BaseUser_client, "f");
    }
    get userId() {
        return (0, tslib_1.__classPrivateFieldGet)(this, _BaseUser_userId, "f");
    }
    /**
     * Return the username history of the user.
     * @param limit The number of followers to return
     * @param sortOrder The sort order of the followers
     * @param cursor The cursor to continue at
     */
    getUsernameHistory(limit = 10, sortOrder = "Asc", cursor) {
        return this.client.apis.usersAPI
            .getUserNameHistory({
            userId: this.userId
        })
            .then((response) => new CursorPage_1.CursorPage({ limit, sortOrder, cursor }, { userId: this.userId }, response, (0, CursorPage_1.contextCall)(this.client.apis.usersAPI, this.client.apis.usersAPI.getUserNameHistory)));
    }
    /**
     * Returns the users current presence.
     */
    getPresence() {
        return this.client.apis.presenceAPI
            .getUsersPresences({
            userIds: [this.userId]
        })
            .then((presence) => presence.userPresences[0]);
    }
    /**
     * Returns the user's friends.
     * @param limit The number of friends to return
     * @param cursor The cursor to continue at
     */
    getFriends(userSort) {
        return this.client.apis.friendsAPI.getUserFriends({
            userId: this.userId,
            userSort
        });
    }
    /**
     * Returns the user's robux amount. The BaseUser must be the currently authenticated user, or else this function throws an error.
     */
    getCurrency() {
        var _a;
        if (((_a = this.client.user) === null || _a === void 0 ? void 0 : _a.id) !== this.userId) {
            throw new Error("This function can only be called with the currently authenticated user");
        }
        return this.client.apis.economyAPI.getSelfCurrency({ userId: this.userId });
    }
    /**
     * Returns if the user has Roblox Premium or not.
     */
    hasPremium() {
        return this.client.apis.premiumFeaturesAPI.validateUserMembership({
            userId: this.userId
        });
    }
    /**
     * Returns if the user owns the specified item.
     * @param {ItemType} itemType The type of item to check
     * @param {number} itemId The ID of the item to check
     */
    ownsItem(itemType, itemId) {
        return this.client.apis.inventoryAPI
            .getUserItemsByTypeAndTargetId({
            userId: this.userId,
            itemType,
            itemTargetId: itemId
        })
            .then((response) => response.data.length > 0);
    }
    /**
     * Returns if the user owns the specific asset.
     * @param assetId The ID of the asset to check
     */
    ownsAsset(assetId) {
        return this.ownsItem("Asset", assetId);
    }
    /**
     * Returns if the user owns the specific gamepass.
     * @param gamepassId The ID of the gamepass to check
     */
    ownsGamepass(gamepassId) {
        return this.ownsItem("GamePass", gamepassId);
    }
    /**
     * Returns the date the specified badges got awarded to the user.
     * @param badgeIds The badge IDs to check
     */
    getBadgeAwardedDates(badgeIds) {
        return this.client.apis.badgesAPI
            .getUserBadgesAwardedDates({
            userId: this.userId,
            badgeIds
        })
            .then((response) => response.data.map((badge) => ({
            badgeId: badge.badgeId,
            awardedDate: new Date(badge.awardedDate),
            awardedDateString: badge.awardedDate
        })));
    }
    /**
     * Returns the role of the groups the user is in.
     */
    getGroupRoles() {
        return this.client.apis.groupsAPI
            .getUserGroups({
            userId: this.userId
        })
            .then((response) => response.data.map((groupMembership) => ({
            groupId: groupMembership.group.id,
            roleId: groupMembership.role.id,
            rank: groupMembership.role.rank,
            roleName: groupMembership.role.name
        })));
    }
    /**
     * Returns the roblox badges the user has.
     */
    getRobloxBadges() {
        return this.client.apis.accountInformationAPI.getRobloxBadges({
            userId: this.userId
        });
    }
    /**
     * Returns the user's promotion channels
     */
    getPromotionChannels() {
        return this.client.apis.accountInformationAPI.getUserPromotionChannels({
            userId: this.userId
        });
    }
    /**
     * Returns the user's friend count
     */
    getFriendCount() {
        return this.client.apis.friendsAPI
            .getUserFriendsCount({
            userId: this.userId
        })
            .then((response) => response.count);
    }
    /**
     * Returns the user's follower count
     */
    getFollowerCount() {
        return this.client.apis.friendsAPI
            .getUserFollowersCount({
            userId: this.userId
        })
            .then((response) => response.count);
    }
    /**
     * Returns the user's following count
     */
    getFollowingCount() {
        return this.client.apis.friendsAPI
            .getUserFollowingCount({
            userId: this.userId
        })
            .then((response) => response.count);
    }
    /**
     * Returns the user's followers
     * @param limit The number of followers to return
     * @param sortOrder The sort order of the followers
     * @param cursor The cursor to continue at
     */
    getFollowers(limit = 10, sortOrder = "Asc", cursor) {
        return this.client.apis.friendsAPI
            .getUserFollowers({
            userId: this.userId,
            limit,
            sortOrder,
            cursor
        })
            .then((response) => new CursorPage_1.CursorPage({ limit, sortOrder, cursor }, { userId: this.userId }, response, (0, CursorPage_1.contextCall)(this.client.apis.friendsAPI, this.client.apis.friendsAPI.getUserFollowers)));
    }
    /**
     * Returns the user's followings
     * @param limit The number of followings to return
     * @param sortOrder The sort order of the followings
     * @param cursor The cursor to continue at
     */
    getFollowings(limit = 10, sortOrder = "Asc", cursor) {
        return this.client.apis.friendsAPI
            .getUserFollowing({
            userId: this.userId,
            limit,
            sortOrder,
            cursor
        })
            .then((response) => new CursorPage_1.CursorPage({ limit, sortOrder, cursor }, { userId: this.userId }, response, (0, CursorPage_1.contextCall)(this.client.apis.friendsAPI, this.client.apis.friendsAPI.getUserFollowers)));
    }
    /**
     * Sends a private message to the user
     * @param recipientId The user ID to send the message to
     * @param subject The subject of the message
     * @param body The body of the message
     */
    sendMessage(recipientId, subject, body) {
        return this.client.apis.privateMessagesAPI.sendMessage({
            userId: this.userId,
            recipientId,
            subject,
            body
        });
    }
}
exports.BaseUser = BaseUser;
_BaseUser_client = new WeakMap(), _BaseUser_userId = new WeakMap();
