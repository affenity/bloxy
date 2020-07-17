"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
const AssetVersion_1 = require("../../structures/asset/AssetVersion");
const GroupMember_1 = tslib_1.__importDefault(require("../../structures/group/GroupMember"));
const GroupRole_1 = tslib_1.__importDefault(require("../../structures/group/GroupRole"));
const Product_1 = tslib_1.__importDefault(require("../../structures/asset/Product"));
const PartialUser_1 = tslib_1.__importDefault(require("../../structures/user/PartialUser"));
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
        }).then(response => 
        // eslint-disable-next-line no-extra-parens
        response.body.map(assetVersionData => new AssetVersion_1.AssetVersion(assetVersionData, this.client)));
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
        }).then(response => 
        // eslint-disable-next-line no-extra-parens
        response.body.map(userFriendData => ({
            avatarFinal: userFriendData.AvatarFinal,
            user: new PartialUser_1.default({
                id: userFriendData.Id,
                name: userFriendData.Username
            }, this.client),
            online: userFriendData.IsOnline,
            avatarUrl: userFriendData.AvatarUri
        })));
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
        }).then(response => 
        // eslint-disable-next-line no-extra-parens
        response.body.count);
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
        }).then(response => response.body.map(userGroupData => ({
            id: userGroupData.Id,
            name: userGroupData.Name,
            emblemId: userGroupData.EmblemId,
            emblemUrl: userGroupData.EmblemUrl,
            role: {
                rank: userGroupData.Rank,
                name: userGroupData.Role
            },
            inClan: userGroupData.IsInClan,
            primary: userGroupData.IsPrimary
        })));
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
        }).then((response) => ({
            id: response.body.Id,
            name: response.body.Name,
            description: response.body.Description,
            emblemUrl: response.body.EmblemUrl,
            owner: new GroupMember_1.default({
                id: response.body.Owner.Id,
                name: response.body.Owner.Name,
                group: {
                    id: response.body.Id,
                    name: response.body.Name
                }
            }, this.client),
            roles: response.body.Roles.map((roleData) => new GroupRole_1.default({
                rank: roleData.Rank,
                name: roleData.Name,
                group: {
                    id: response.body.Id
                }
            }, this.client))
        }));
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
        }).then((response) => response.body.map((groupData) => ({
            id: groupData.Id,
            name: groupData.Name,
            description: groupData.Description,
            emblemUrl: groupData.EmblemUrl,
            owner: new GroupMember_1.default({
                id: groupData.Owner.Id,
                name: groupData.Owner.Name,
                group: {
                    id: groupData.Id,
                    name: groupData.Name
                }
            }, this.client),
            roles: groupData.Roles.map((roleData) => new GroupRole_1.default({
                rank: roleData.Rank,
                name: roleData.Name,
                group: {
                    id: groupData.Id
                }
            }, this.client))
        })));
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
        }).then((response) => response.body.map((groupData) => ({
            id: groupData.Id,
            name: groupData.Name,
            description: groupData.Description,
            emblemUrl: groupData.EmblemUrl,
            owner: new GroupMember_1.default({
                id: groupData.Owner.Id,
                name: groupData.Owner.Name,
                group: {
                    id: groupData.Id,
                    name: groupData.Name
                }
            }, this.client),
            roles: groupData.Roles.map((roleData) => new GroupRole_1.default({
                rank: roleData.Rank,
                name: roleData.Name,
                group: {
                    id: groupData.Id
                }
            }, this.client))
        })));
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
        }).then(response => new Product_1.default(response.body, this.client));
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
        }).then(response => new Product_1.default(response.body, this.client));
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
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body.success === true);
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
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                path: `users/${options.userId}/canmanage/${options.assetId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body.CanManage === true);
    }
}
exports.default = GeneralAPI;
