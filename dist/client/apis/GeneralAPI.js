"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class GeneralAPI extends BaseAPI_1.default {
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
                path: `assets/${options}/versions`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    awardBadge(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "assets/award-badge",
                method: "POST",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(() => true);
    }
    getBalance() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "currency/balance"
            }
        }).then(response => response.body);
    }
    getUserFriends(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/friends`,
                qs: {
                    page: options.page
                },
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
                path: "user/accept-friend-request",
                method: "POST",
                qs: {
                    requesterUserId: options.userId
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(() => true);
    }
    getUserFriendsCount(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/get-friendship-count",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body.count);
    }
    unfriendUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/unfriend",
                method: "POST",
                qs: {
                    friendUserId: options.userId
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(() => true);
    }
    isUserFollowing(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/following-exists",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(response => response.body.isFollowing);
    }
    followUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/follow",
                method: "POST",
                qs: {
                    followedUserId: options.userId
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(() => true);
    }
    getUserGroups(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/groups`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(response => response.body);
    }
    getGroup(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `groups/${options.groupId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGroupAllies(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `groups/${options.groupId}/allies`,
                qs: {
                    page: options.page
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGroupEnemies(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `groups/${options.groupId}/enemies`,
                qs: {
                    page: options.page
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getIncomingItems() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "incoming-items/counts",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGamePassProductInfo(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "marketplace/game-pass-product-info",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    userOwnsAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "ownership/hasasset",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(response => response.body.includes("true"));
    }
    getDeviceInfo() {
        return this.request({
            requiresAuth: false,
            request: {
                path: "reference/deviceinfo",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then(response => ({
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
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body.success === true);
    }
    unblockUser(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "userblock/unblock",
                qs: options,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body.success === true);
    }
    getUserById(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => ({
            id: response.body.Id,
            name: response.body.Username
        }));
    }
    getUserByUsername(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: "users/get-by-username",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => ({
            id: response.body.Id,
            name: response.body.Username
        }));
    }
    userCanManageAsset(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/canmanage/${options.assetId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body.CanManage === true);
    }
}
exports.default = GeneralAPI;
