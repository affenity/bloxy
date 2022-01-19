"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class FriendsAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://friends.roblox.com/"
        });
    }
    findFriendByCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/code/${options.code}`
            },
            json: true
        }).then((response) => response.body);
    }
    checkSessionHealth() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/health`
            },
            json: true
        }).then((response) => response.body);
    }
    redeemFriendCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/code/${options.code}/redeem`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    deleteFriendSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/session`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/session`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    redeemFriendQRCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/${options.code}/redeem`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    deleteFriendQRSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/session`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getFriendQRSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/session`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    getMetaData(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/metadata`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfFriendsCount() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/my/friends/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfFriendRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/my/friends/requests`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfFriendRequestsCount() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/friend-requests/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFollowers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followers`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFollowersCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followers/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFollowing(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followings`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFollowingCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followings/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFriends(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFriendsCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFriendsOnline(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/friends/online`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserFriendsWithStatuses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends/statuses`,
                qs: {
                    userIds: options.withUserIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    declineAllFriendRequests() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/friend-requests/decline-all`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    acceptFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/accept-friend-request`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    declineFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/decline-friend-request`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    followUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/follow`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    sendFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/request-friendship`,
                method: "POST",
                json: {
                    friendshipOriginSourceType: options.source || "Unknown"
                }
            },
            json: true
        }).then((response) => response.body);
    }
    unFollowUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unfollow`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    unfriendUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unfriend`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    getRecommendedUsers() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/recommended-users`
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.FriendsAPI = FriendsAPI;
