"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.PartialUser = exports.FriendRequest = exports.UserBase = void 0;
class UserBase {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.displayName = data.displayName || null;
        this.membership = data.membership || null;
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
    // Eslint, I'm getting tired of you complaining about useless constructors.
    // You are useless
    // eslint-disable-next-line no-useless-constructor
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
        const matchedStatusTimestamp = data.userStatusDate
            ? data.userStatusDate.match(/\((.*)\)/)
            : null;
        this.statusDate = matchedStatusTimestamp
            ? new Date(parseInt(matchedStatusTimestamp[1]))
            : null;
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
