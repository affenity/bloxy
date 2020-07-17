"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("./PartialUser"));
class User extends PartialUser_1.default {
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
exports.default = User;
