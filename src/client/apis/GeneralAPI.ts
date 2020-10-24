import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { AssetVersionOptions, ProductOptions } from "../../structures/Asset";


export declare type GetAssetVersionOptions = number;
export declare type AwardBadgeOptions = {
    userId: number;
    badgeId: number;
    placeId: number;
}
export declare type GetUserFriendsOptions = {
    userId: number;
    page: number;
}
export declare type AcceptFriendRequestOptions = {
    userId: number;
}
export declare type DeclineFriendRequestOptions = {
    userId: number;
}
export declare type SendFriendRequestOptions = {
    userId: number;
}
export declare type GetUserFriendsCountOptions = {
    userId: number;
}
export declare type UnfriendUserOptions = {
    userId: number;
}
export declare type IsUserFollowingOptions = {
    userId: number;
    followUserId: number;
}
export declare type FollowUserOptions = {
    userId: number;
}
export declare type UnfollowUserOptions = {
    userId: number;
}
export declare type GetUserGroupsOptions = {
    userId: number;
}
export declare type GetGroupOptions = {
    groupId: number;
}
export declare type GetGroupAlliesOptions = {
    groupId: number;
    page: number;
}
export declare type GetGroupEnemiesOptions = {
    groupId: number;
    page: number;
}
export declare type GetProductInfoOptions = {
    assetId: number;
}
export declare type GetGamePassProductInfoOptions = {
    gamePassId: number;
}
export declare type UserOwnsAssetOptions = {
    userId: number;
    assetId: number;
}
export declare type BlockUserOptions = {
    userId: number;
}
export declare type UnblockUserOptions = {
    userId: number;
}
export declare type GetUserByUsernameOptions = {
    username: string;
}
export declare type UserCanManageAssetOptions = {
    userId: number;
    assetId: number;
}
export declare type GetUserByIdOptions = {
    userId: number;
}
export declare type GetAssetVersions = AssetVersionOptions[];
export declare type AwardBadge = boolean;
export declare type GetBalance = {
    robux: number;
}
export declare type GetUserFriends = {
    Id: number;
    Username: string;
    AvatarUri: string;
    AvatarFinal: boolean;
    IsOnline: boolean;
}[];
export declare type AcceptFriendRequest = boolean;
export declare type DeclineFriendRequest = boolean;
export declare type SendFriendRequest = boolean;
export declare type GetUserFriendsCount = {
    count: number;
};
export declare type UnfriendUser = boolean;
export declare type IsUserFollowing = boolean;
export declare type FollowUser = boolean;
export declare type UnfollowUser = boolean;
export declare type GetUserGroups = {
    id: number;
    name: string;
    emblemId: number | null;
    emblemUrl: string | null;
    role: {
        rank: number;
        name: string;
    };
    inClan: boolean;
    primary: boolean;
}[];
export declare type GetGroup = {
    Name: string;
    Id: number;
    Owner: {
        Name: string;
        Id: number;
    };
    EmblemUrl: string;
    Description: string;
    Roles: {
        Name: string;
        Rank: number;
    }[];
}
export declare type GetGroupAllies = {
    Groups: GetGroup[];
    FinalPage: boolean;
};
export declare type GetGroupEnemies = GetGroupAllies
export declare type GetIncomingItems = {
    unreadMessageCount: number;
    friendRequestsCount: number;
}
export declare type GetProductInfo = ProductOptions;
export declare type GetGamePassProductInfo = ProductOptions;
export declare type UserOwnsAsset = boolean;
export declare type GetDeviceInfo = {
    platformType: string;
    deviceType: string;
    operatingSystemType: string;
}
export declare type BlockUser = boolean;
export declare type UnblockUser = boolean;
export declare type GetUserById = {
    id: number;
    name: string;
};
export declare type GetUserByUsername = GetUserById;
export declare type UserCanManageAsset = boolean;

export default class GeneralAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            baseUrl: "https://api.roblox.com/",
            client
        });
    }

    getAssetVersions (options: GetAssetVersionOptions): Promise<GetAssetVersions> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `assets/${options}/versions`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    awardBadge (options: AwardBadgeOptions): Promise<AwardBadge> {
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
        })
            .then(() => true);
    }

    getBalance (): Promise<GetBalance> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "currency/balance"
            }
        })
            .then(response => response.body as GetBalance);
    }

    getUserFriends (options: GetUserFriendsOptions): Promise<GetUserFriends> {
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
        })
            .then(response => response.body);
    }

    acceptFriendRequest (options: AcceptFriendRequestOptions): Promise<AcceptFriendRequest> {
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
        })
            .then(() => true as AcceptFriendRequest);
    }

    declineFriendRequest (options: DeclineFriendRequestOptions): Promise<DeclineFriendRequest> {
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
        })
            .then(() => true as DeclineFriendRequest);
    }

    sendFriendRequest (options: SendFriendRequestOptions): Promise<SendFriendRequest> {
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
        })
            .then(() => true as SendFriendRequest);
    }

    getUserFriendsCount (options: GetUserFriendsCountOptions): Promise<GetUserFriendsCount> {
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
        })
            .then(response => response.body.count);
    }

    unfriendUser (options: UnfriendUserOptions): Promise<UnfriendUser> {
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
        })
            .then(() => true as UnfriendUser);
    }

    isUserFollowing (options: IsUserFollowingOptions): Promise<IsUserFollowing> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "user/following-exists",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body.isFollowing);
    }

    followUser (options: FollowUserOptions): Promise<FollowUser> {
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
        })
            .then(() => true as FollowUser);
    }

    unfollowUser (options: UnfollowUserOptions): Promise<UnfollowUser> {
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
        })
            .then(() => true as UnfollowUser);
    }

    getUserGroups (options: GetUserGroupsOptions): Promise<GetUserGroups> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/groups`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body);
    }

    getGroup (options: GetGroupOptions): Promise<GetGroup> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `groups/${options.groupId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupAllies (options: GetGroupAlliesOptions): Promise<GetGroupAllies> {
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
        })
            .then(response => response.body);
    }

    getGroupEnemies (options: GetGroupEnemiesOptions): Promise<GetGroupEnemies> {
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
        })
            .then(response => response.body);
    }

    getIncomingItems (): Promise<GetIncomingItems> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "incoming-items/counts",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then((response: any) => ({
                friendRequestsCount: response.body.friendRequestsCount,
                unreadMessageCount: response.body.unreadMessageCount
            }) as GetIncomingItems);
    }

    getProductInfo (options: GetProductInfoOptions): Promise<GetProductInfo> {
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
        })
            .then(response => response.body);
    }

    getGamePassProductInfo (options: GetGamePassProductInfoOptions): Promise<GetGamePassProductInfo> {
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
        })
            .then(response => response.body);
    }

    userOwnsAsset (options: UserOwnsAssetOptions): Promise<UserOwnsAsset> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "ownership/hasasset",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => (response.body as string).includes("true") as UserOwnsAsset);
    }

    getDeviceInfo (): Promise<GetDeviceInfo> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "reference/deviceinfo",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => ({
                deviceType: response.body.DeviceType,
                operatingSystemType: response.body.OperationSystemType,
                platformType: response.body.PlatformType
            }) as GetDeviceInfo);
    }

    blockUser (options: BlockUserOptions): Promise<BlockUser> {
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
        })
            .then(response => response.body.success === true as BlockUser);
    }

    unblockUser (options: UnblockUserOptions): Promise<UnblockUser> {
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
        })
            .then(response => response.body.success === true as UnblockUser);
    }

    getUserById (options: GetUserByIdOptions): Promise<GetUserById> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => ({
                id: response.body.Id,
                name: response.body.Username
            }) as GetUserById);
    }

    getUserByUsername (options: GetUserByUsernameOptions): Promise<GetUserByUsername> {
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
        })
            .then(response => ({
                id: response.body.Id,
                name: response.body.Username
            }) as GetUserByUsername);
    }

    userCanManageAsset (options: UserCanManageAssetOptions): Promise<UserCanManageAsset> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/canmanage/${options.assetId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body.CanManage === true as UserCanManageAsset);
    }
}
