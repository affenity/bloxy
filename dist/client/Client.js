"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ClientBase_1 = tslib_1.__importDefault(require("./ClientBase"));
const apis_1 = tslib_1.__importDefault(require("./apis"));
const ClientUser_1 = tslib_1.__importDefault(require("../structures/ClientUser"));
const rest_1 = tslib_1.__importDefault(require("../controllers/rest"));
const structures_1 = require("../structures");
const ClientSocket = tslib_1.__importStar(require("./lib/ClientSocket/ClientSocket"));
const ChatManager_1 = tslib_1.__importDefault(require("./lib/ChatManager/ChatManager"));
class Client extends ClientBase_1.default {
    constructor(options) {
        super(options);
        this.login = (cookie) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            cookie = cookie || (this.options.credentials || {}).cookie || undefined;
            if (!cookie) {
                throw new Error("Attempted to log in without a cookie!");
            }
            this.options.credentials = Object.assign(Object.assign({}, this.options.credentials), { cookie });
            const createdCookie = this.rest.createCookie({
                key: ".ROBLOSECURITY",
                value: cookie,
                domain: "roblox.com",
                hostOnly: false,
                httpOnly: false
            });
            this.rest.addCookie(createdCookie, "https://roblox.com");
            const getAuthenticationData = yield this.apis.usersAPI.getAuthenticatedUserInformation();
            this.user = new ClientUser_1.default({
                id: getAuthenticationData.id,
                name: getAuthenticationData.name
            }, this);
            this.emit("loggedIn");
            return this.user;
        });
        this.user = null;
        this.apis = apis_1.default(this);
        this.rest = new rest_1.default(this, this.options.rest);
        this.socket = new ClientSocket.Socket(this);
        this.chat = new ChatManager_1.default(this);
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
                return new structures_1.Group(data, this);
            }
        });
    }
    getUser(userId) {
        return this.apis.otherAPI.getUserProfileHeader({
            userId
        }).then(data => new structures_1.User({
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
        }).then(data => new structures_1.PartialUser(data, this));
    }
    getUsernameFromUserId(userId) {
        return this.apis.generalApi.getUserById({
            userId
        }).then(data => new structures_1.PartialUser(data, this));
    }
    getUsersByUserIds(userIds, excludeBannedUsers = false) {
        return this.apis.usersAPI.getUsersByIds({
            excludeBannedUsers,
            userIds
        }).then(response => response.data.map(userData => new structures_1.PartialUser(userData, this)));
    }
    getUsersByUsernames(usernames, excludeBannedUsers = false) {
        return this.apis.usersAPI.getUsersByUsernames({
            excludeBannedUsers,
            usernames
        }).then(response => response.data.map(userData => new structures_1.PartialUser(userData, this)));
    }
}
exports.default = Client;
