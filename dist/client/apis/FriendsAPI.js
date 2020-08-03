"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class FriendsAPI extends BaseAPI_1.default {
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
                path: `v1/friends/verified/nearby/code/${options.code}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    checkSessionHealth() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/health`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    redeemFriendCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/code/${options.code}/redeem`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    deleteFriendSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/session`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/nearby/session`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    redeemFriendQRCode(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/${options.code}/redeem`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    deleteFriendQRSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/session`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getFriendQRSession() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/friends/verified/qr/session`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getMetaData(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/metadata`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSelfFriendsCount() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/my/friends/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSelfFriendRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/my/friends/requests`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getSelfFriendRequestsCount() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/friend-requests/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFollowers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followers`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFollowersCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followers/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFollowing(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followings`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFollowingCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/followings/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFriends(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFriendsCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFriendsOnline(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/friends/online`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserFriendsWithStatuses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/friends/statuses`,
                qs: {
                    userIds: options.withUserIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    declineAllFriendRequests() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/friend-requests/decline-all`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    acceptFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/accept-friend-request`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    declineFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/decline-friend-request`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    followUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/follow`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    sendFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/request-friendship`,
                method: "POST",
                json: {
                    friendshipOriginSourceType: options.source || "Unknown"
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    unFollowUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unfollow`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    unfriendUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/unfriend`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getRecommendedUsers() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/recommended-users`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    matchContacts(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/contacts/match`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateContacts(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/contacts/update`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = FriendsAPI;
