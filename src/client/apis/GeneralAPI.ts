import BaseAPI from "./BaseAPI";
import { AnyIdentifier } from "../../interfaces/GeneralInterfaces";
import Client from "../Client";


export declare type GetAssetVersionOptions = {
    id: AnyIdentifier;
    page: AnyIdentifier;
    placeId: AnyIdentifier;
}
export declare type AwardBadgeOptions = {
    userId: AnyIdentifier;
    badgeId: AnyIdentifier;
    placeId: AnyIdentifier;
}
export declare type GetUserFriendsOptions = {
    userId: AnyIdentifier;
    page: AnyIdentifier;
}
export declare type AcceptFriendRequestOptions = {
    userId: AnyIdentifier;
}
export declare type DeclineFriendRequestOptions = {
    userId: AnyIdentifier;
}
export declare type SendFriendRequestOptions = {
    userId: AnyIdentifier;
}
export declare type GetUserFriendsCountOptions = {
    userId: AnyIdentifier;
}
export declare type UnfriendUserOptions = {
    userId: AnyIdentifier;
}
export declare type IsUserFollowingOptions = {
    userId: AnyIdentifier;
    followUserId: AnyIdentifier;
}
export declare type FollowUserOptions = {
    userId: AnyIdentifier;
}
export declare type UnfollowUserOptions = {
    userId: AnyIdentifier;
}
export declare type GetUserGroupsOptions = {
    userId: AnyIdentifier;
}
export declare type GetGroupOptions = {
    groupId: AnyIdentifier;
}
export declare type GetGroupAlliesOptions = {
    groupId: AnyIdentifier;
    page: AnyIdentifier;
}
export declare type GetGroupEnemiesOptions = {
    groupId: AnyIdentifier;
    page: AnyIdentifier;
}
export declare type GetProductInfoOptions = {
    assetId: AnyIdentifier;
}
export declare type GetGamePassInfoOptions = {
    gamePassId: AnyIdentifier;
}
export declare type UserOwnsAssetOptions = {
    userId: AnyIdentifier;
    assetId: AnyIdentifier;
}
export declare type BlockUserOptions = {
    userId: AnyIdentifier;
}
export declare type UnblockUserOptions = {
    userId: AnyIdentifier;
}
export declare type GetUserByUsernameOptions = {
    username: string;
}
export declare type UserCanManageAssetOptions = {
    userId: AnyIdentifier;
    assetId: AnyIdentifier;
}
export declare type GetUserByIdOptions = {
    userId: AnyIdentifier;
}

export declare type GetAssetVersions = {}
export declare type AwardBadge = {}
export declare type GetBalance = {
    robux: number;
}
export declare type GetUserFriends = {}
export declare type AcceptFriendRequest = {
    success: boolean;
    message: "Success";
}

export declare interface DeclineFriendRequest {
    success: boolean;
    message: "Success";
}

export declare type SendFriendRequest = {}
export declare type GetUserFriendsCount = {}
export declare type UnfriendUser = {}
export declare type IsUserFollowing = {}
export declare type FollowUser = {}
export declare type UnfollowUser = {}
export declare type GetUserGroups = {}
export declare type GetGroup = {}
export declare type GetGroupAllies = {}
export declare type GetGroupEnemies = {}
export declare type GetIncomingItems = {}
export declare type GetProductInfo = {}
export declare type GetGamePassInfo = {}
export declare type UserOwnsAsset = {}
export declare type GetDeviceInfo = {}
export declare type BlockUser = {}
export declare type UnblockUser = {}
export declare type GetUserByUsername = {}
export declare type UserCanManageAsset = {}
export declare type GetUserById = {};

export default class GeneralAPI extends BaseAPI {
    public client: Client;

    constructor (client: Client) {
        super({
            baseUrl: "https://api.roblox.com/",
            client
        });
        this.client = client;
    }

    getAssetVersions (options: GetAssetVersionOptions): Promise<GetAssetVersions> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `assets/${options.id}/versions`
            }
        });
    }

    awardBadge (options: AwardBadgeOptions): Promise<AwardBadge> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "assets/award-badge",
                method: "POST",
                qs: options
            }
        });
    }

    getBalance (): Promise<GetBalance> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "currency/balance"
            }
        }).then(response => response.body as GetBalance);
    }

    getUserFriends (options: GetUserFriendsOptions): Promise<GetUserFriendsCount> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/friends`,
                qs: {
                    page: options.page
                }
            }
        }).then(response => response.body as GetUserFriends);
    }

    acceptFriendRequest (options: AcceptFriendRequestOptions): Promise<AcceptFriendRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/accept-friend-request",
                method: "POST",
                qs: {
                    requesterUserId: options.userId
                }
            }
        }).then(response => response.body as AcceptFriendRequest);
    }

    declineFriendRequest (options: DeclineFriendRequestOptions): Promise<DeclineFriendRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/decline-friend-request",
                method: "POST",
                qs: {
                    requesterUserId: options.userId
                }
            }
        }).then(response => response.body as DeclineFriendRequest);
    }

    sendFriendRequest (options: SendFriendRequestOptions): Promise<SendFriendRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/request-friendship",
                method: "POST",
                qs: {
                    recipientUserId: options.userId
                }
            }
        }).then(response => response.body as SendFriendRequest);
    }

    getUserFriendsCount (options: GetUserFriendsCountOptions): Promise<GetUserFriends> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/get-friendship-count",
                qs: options
            }
        }).then(response => response.body as GetUserFriends);
    }

    unfriendUser (options: UnfriendUserOptions): Promise<UnfriendUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/unfriend",
                method: "POST",
                qs: {
                    friendUserId: options.userId
                }
            }
        }).then(response => response.body as UnfriendUser);
    }

    isUserFollowing (options: IsUserFollowingOptions): Promise<IsUserFollowing> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/following-exists",
                qs: options
            }
        }).then(response => response.body as IsUserFollowing);
    }

    followUser (options: FollowUserOptions): Promise<FollowUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/follow",
                method: "POST",
                qs: {
                    followedUserId: options.userId
                }
            }
        }).then(response => response.body as FollowUser);
    }

    unfollowUser (options: UnfollowUserOptions): Promise<UnfollowUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "user/unfollow",
                method: "POST",
                qs: {
                    followedUserId: options.userId
                }
            }
        }).then(response => response.body as UnfollowUser);
    }

    getUserGroups (options: GetUserGroupsOptions): Promise<GetUserGroups> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/groups`
            }
        }).then(response => response.body as GetUserGroups);
    }

    getGroup (options: GetGroupOptions): Promise<GetGroup> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `groups/${options.groupId}`
            }
        }).then(response => response.body as GetGroup);
    }

    getGroupAllies (options: GetGroupAlliesOptions): Promise<GetGroupAllies> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `groups/${options.groupId}/allies`,
                qs: {
                    page: options.page
                }
            }
        }).then(response => response.body as GetGroupAllies);
    }

    getGroupEnemies (options: GetGroupEnemiesOptions): Promise<GetGroupEnemies> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `groups/${options.groupId}/enemies`,
                qs: {
                    page: options.page
                }
            }
        }).then(response => response.body as GetGroupEnemies);
    }

    getIncomingItems (): Promise<GetIncomingItems> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "incoming-items/counts"
            }
        }).then(response => response.body as GetIncomingItems);
    }

    getProductInfo (options: GetProductInfoOptions): Promise<GetProductInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "marketplace/productinfo",
                qs: options
            }
        }).then(response => response.body as GetProductInfo);
    }

    getGamePassInfo (options: GetGamePassInfoOptions): Promise<GetGamePassInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "marketplace/game-pass-product-info",
                qs: options
            }
        }).then(response => response.body as GetGamePassInfo);
    }

    userOwnsAsset (options: UserOwnsAssetOptions): Promise<UserOwnsAsset> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "ownership/hasasset",
                qs: options
            }
        }).then(response => response.body as UserOwnsAsset);
    }

    getDeviceInfo (): Promise<GetDeviceInfo> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "reference/deviceinfo"
            }
        }).then(response => response.body as GetDeviceInfo);
    }

    blockUser (options: BlockUserOptions): Promise<BlockUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "userblock/block",
                qs: options,
                method: "POST"
            }
        }).then(response => response.body as BlockUser);
    }

    unblockUser (options: UnblockUserOptions): Promise<UnblockUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "userblock/unblock",
                qs: options,
                method: "POST"
            }
        }).then(response => response.body as UnblockUser);
    }

    getUserByUsername (options: GetUserByUsernameOptions): Promise<GetUserByUsername> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "users/get-by-username",
                qs: options
            }
        }).then(response => response.body as GetUserByUsername);
    }

    userCanManageAsset (options: UserCanManageAssetOptions): Promise<UserCanManageAsset> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/canmanage/${options.assetId}`
            }
        }).then(response => response.body as UserCanManageAsset);
    }

    getUserById (options: GetUserByIdOptions): Promise<GetUserById> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}`
            }
        }).then(response => response.body as GetUserById);
    }
}
