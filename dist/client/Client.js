"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ClientBase_1 = tslib_1.__importDefault(require("./ClientBase"));
const apis_1 = tslib_1.__importDefault(require("./apis"));
const login_1 = tslib_1.__importDefault(require("./methods/login"));
const rest_1 = tslib_1.__importDefault(require("../controllers/rest"));
const structures_1 = tslib_1.__importDefault(require("../structures"));
const Group_1 = tslib_1.__importDefault(require("../structures/group/Group"));
const ClientSocket_1 = tslib_1.__importDefault(require("./lib/ClientSocket/ClientSocket"));
const User_1 = tslib_1.__importDefault(require("../structures/user/User"));
const PartialUser_1 = tslib_1.__importDefault(require("../structures/user/PartialUser"));
class Client extends ClientBase_1.default {
    constructor(options) {
        super(options);
        this.user = null;
        this.apis = apis_1.default(this);
        this.login = (credentials) => login_1.default.bind(this)(credentials || this.options.credentials || {});
        this.rest = new rest_1.default(this, this.options.rest);
        this.structures = structures_1.default();
        this.socket = new ClientSocket_1.default(this);
        this.init();
    }
    init() {
        if (this.options.rest) {
            this.rest.setOptions(this.options.rest);
        }
    }
    getGroup(groupId) {
        return this.apis.groupsAPI.getGroup({
            groupId
        }).then(data => {
            if (!data) {
                throw new Error(`Group not found: ${groupId}`);
            }
            else {
                return new Group_1.default(data, this);
            }
        });
    }
    getUser(userId) {
        return this.apis.otherAPI.getUserProfileHeader({
            userId
        }).then(data => new User_1.default({
            id: data.ProfileUserId,
            name: data.ProfileUserName,
            canFollow: data.CanBeFollowed,
            canSeeInventory: data.CanSeeInventory,
            canTrade: data.CanTrade,
            incomingFriendRequest: data.IncomingFriendRequestPending,
            sentFriendRequest: data.FriendRequestPending,
            canMessage: data.CanMessage,
            isViewerBlocked: data.IsViewerBlocked,
            isVieweeBlocked: data.IsVieweeBlocked,
            followingsCount: data.FollowingsCount,
            followersCount: data.FollowersCount,
            userPlaceId: data.UserPlaceId,
            userStatusDate: data.UserStatusDate,
            userStatus: data.UserStatus,
            presenceType: data.UserPresenceType,
            friendsCount: data.FriendsCount,
            canFriend: data.MaySendFriendInvitation,
            areFriends: data.AreFriends,
            lastLocation: data.LastLocation,
            canSeeFavorites: data.CanSeeFavorites,
            headShotImage: {
                final: data.HeadShotImage.Final,
                endpointType: data.HeadShotImage.EndpointType,
                retryUrl: data.HeadShotImage.RetryUrl,
                url: data.HeadShotImage.Url,
                userId: data.HeadShotImage.UserId
            },
            messagesDisabled: data.MessagesDisabled,
            previousUsernames: data.PreviousUserNames
        }, this));
    }
    getUserIdFromUsername(username) {
        return this.apis.generalApi.getUserByUsername({
            username
        }).then(data => new PartialUser_1.default(data, this));
    }
    getUsernameFromUserId(userId) {
        return this.apis.generalApi.getUserById({
            userId
        }).then(data => new PartialUser_1.default(data, this));
    }
    getUsersByUserIds(userIds, excludeBannedUsers = false) {
        return this.apis.usersAPI.getUsersByIds({
            excludeBannedUsers,
            userIds
        }).then(response => response.data.map(userData => new PartialUser_1.default(userData, this)));
    }
    getUsersByUsernames(usernames, excludeBannedUsers = false) {
        return this.apis.usersAPI.getUsersByUsernames({
            excludeBannedUsers,
            usernames
        }).then(response => response.data.map(userData => new PartialUser_1.default(userData, this)));
    }
}
exports.default = Client;
