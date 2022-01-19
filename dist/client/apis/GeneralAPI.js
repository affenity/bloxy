"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class GeneralAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            baseUrl: "https://api.roblox.com/",
            client
        });
    }
    getAssetVersions(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `assets/${options}/versions`
            },
            json: true
        }).then((response) => response.body);
    }
    awardBadge(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "assets/award-badge",
                method: "POST",
                qs: options
            }
        }).then(() => true);
    }
    getBalance() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "currency/balance"
            }
        }).then((response) => response.body);
    }
    getUserFriends(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/friends`,
                qs: {
                    page: options.page
                }
            },
            json: true
        }).then((response) => response.body);
    }
    acceptFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/accept-friend-request",
                method: "POST",
                qs: {
                    requesterUserId: options.userId
                }
            }
        }).then(() => true);
    }
    declineFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/decline-friend-request",
                method: "POST",
                qs: {
                    requesterUserId: options.userId
                }
            }
        }).then(() => true);
    }
    sendFriendRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/request-friendship",
                method: "POST",
                qs: {
                    recipientUserId: options.userId
                }
            }
        }).then(() => true);
    }
    getUserFriendsCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/get-friendship-count",
                qs: options
            },
            json: true
        }).then((response) => response.body.count);
    }
    unfriendUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/unfriend",
                method: "POST",
                qs: {
                    friendUserId: options.userId
                }
            }
        }).then(() => true);
    }
    isUserFollowing(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/following-exists",
                qs: options
            }
        }).then((response) => response.body.isFollowing);
    }
    followUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/follow",
                method: "POST",
                qs: {
                    followedUserId: options.userId
                }
            }
        }).then(() => true);
    }
    unfollowUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/unfollow",
                method: "POST",
                qs: {
                    followedUserId: options.userId
                }
            }
        }).then(() => true);
    }
    getUserGroups(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/groups`
            }
        }).then((response) => response.body);
    }
    getGroup(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `groups/${options.groupId}`
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupAllies(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `groups/${options.groupId}/allies`,
                qs: {
                    page: options.page
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupEnemies(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `groups/${options.groupId}/enemies`,
                qs: {
                    page: options.page
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getIncomingItems() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "incoming-items/counts"
            },
            json: true
        }).then((response) => ({
            friendRequestsCount: response.body.friendRequestsCount,
            unreadMessageCount: response.body.unreadMessageCount
        }));
    }
    getProductInfo(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "marketplace/productinfo",
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGamePassProductInfo(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "marketplace/game-pass-product-info",
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    userOwnsAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "ownership/hasasset",
                qs: options
            }
        }).then((response) => response.body.includes("true"));
    }
    getDeviceInfo() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "reference/deviceinfo"
            }
        }).then((response) => ({
            deviceType: response.body.DeviceType,
            operatingSystemType: response.body.OperationSystemType,
            platformType: response.body.PlatformType
        }));
    }
    blockUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "userblock/block",
                qs: options,
                method: "POST"
            },
            json: true
        }).then((response) => response.body.success === true);
    }
    unblockUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "userblock/unblock",
                qs: options,
                method: "POST"
            },
            json: true
        }).then((response) => response.body.success === true);
    }
    getUserById(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}`
            },
            json: true
        }).then((response) => ({
            id: response.body.Id,
            name: response.body.Username
        }));
    }
    getUserByUsername(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "users/get-by-username",
                qs: options
            },
            json: true
        }).then((response) => ({
            id: response.body.Id,
            name: response.body.Username
        }));
    }
    userCanManageAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/canmanage/${options.assetId}`
            },
            json: true
        }).then((response) => response.body.CanManage === true);
    }
}
exports.GeneralAPI = GeneralAPI;
