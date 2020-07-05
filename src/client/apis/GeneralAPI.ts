import BaseAPI from "./BaseAPI";
import { AnyIdentifier } from "../../interfaces/GeneralInterfaces";
import Client from "../Client";
import { AssetVersion } from "../../structures/asset/AssetVersion";
import GroupMember from "../../structures/group/GroupMember";
import GroupRole from "../../structures/group/GroupRole";


export declare type GetAssetVersionOptions = {
    id: number;
    page: number;
    placeId: number;
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
export declare type AwardBadge = boolean;
export declare type GetBalance = {
    robux: number;
}
export declare type GetUserFriends = {
    id: number;
    username: string;
    avatarUrl: string;
    avatarFinal: boolean;
    online: boolean;
}[];
export declare type AcceptFriendRequest = boolean;

export declare type DeclineFriendRequest = boolean;

export declare type SendFriendRequest = {}
export declare type GetUserFriendsCount = {}
export declare type UnfriendUser = {}
export declare type IsUserFollowing = {}
export declare type FollowUser = {}
export declare type UnfollowUser = {}
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
    name: string;
    id: number;
    owner: GroupMember;
    emblemUrl: string;
    description: string;
    roles: GroupRole[];
}
export declare type GetGroupAllies = GetGroup[];
export declare type GetGroupEnemies = GetGroup[];
export declare type GetIncomingItems = {
    unreadMessageCount: number;
    friendRequestsCount: number;
}
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

    getAssetVersions (id: AnyIdentifier): Promise<AssetVersion[]> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `assets/${id}/versions`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response =>
            // eslint-disable-next-line no-extra-parens
            (response.body as any[]).map(assetVersionData => new AssetVersion(assetVersionData, this.client))
        );
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
        }).then(() => true);
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response =>
            // eslint-disable-next-line no-extra-parens
            (response.body as any[]).map(userFriendData => ({
                id: userFriendData.Id,
                avatarFinal: userFriendData.AvatarFinal,
                username: userFriendData.Username,
                online: userFriendData.IsOnline,
                avatarUrl: userFriendData.AvatarUri
            })) as GetUserFriends
        );
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
        }).then(() => true as AcceptFriendRequest);
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
        }).then(() => true as DeclineFriendRequest);
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
        }).then(() => true as SendFriendRequest);
    }

    getUserFriendsCount (options: GetUserFriendsCountOptions): Promise<GetUserFriends> {
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
            (response.body as any).count as GetUserFriends
        );
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
        }).then(() => true as UnfriendUser);
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
        }).then(response => (response.body as any).isFollowing as IsUserFollowing);
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
        }).then(() => true as FollowUser);
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
        }).then(() => true as UnfollowUser);
    }

    getUserGroups (options: GetUserGroupsOptions): Promise<GetUserGroups> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `users/${options.userId}/groups`
            }
        }).then(response => (response.body as any[]).map(userGroupData => ({
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
        })) as GetUserGroups);
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
        }).then((response: { body: any }) => ({
            id: response.body.Id,
            name: response.body.Name,
            description: response.body.Description,
            emblemUrl: response.body.EmblemUrl,
            owner: new GroupMember({
                id: response.body.Owner.Id,
                name: response.body.Owner.Name,
                group: {
                    id: response.body.Id,
                    name: response.body.Name
                }
            }, this.client),
            roles: response.body.Roles.map((roleData: any) => new GroupRole({
                rank: roleData.Rank,
                name: roleData.Name,
                group: {
                    id: response.body.Id
                }
            }, this.client))
        }) as GetGroup);
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
        }).then((response: { body: any }) => response.body.map((groupData: any) => ({
            id: groupData.Id,
            name: groupData.Name,
            description: groupData.Description,
            emblemUrl: groupData.EmblemUrl,
            owner: new GroupMember({
                id: groupData.Owner.Id,
                name: groupData.Owner.Name,
                group: {
                    id: groupData.Id,
                    name: groupData.Name
                }
            }, this.client),
            roles: groupData.Roles.map((roleData: any) => new GroupRole({
                rank: roleData.Rank,
                name: roleData.Name,
                group: {
                    id: groupData.Id
                }
            }, this.client))
        }) as GetGroup) as GetGroupAllies);
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
        }).then((response: { body: any }) => response.body.map((groupData: any) => ({
            id: groupData.Id,
            name: groupData.Name,
            description: groupData.Description,
            emblemUrl: groupData.EmblemUrl,
            owner: new GroupMember({
                id: groupData.Owner.Id,
                name: groupData.Owner.Name,
                group: {
                    id: groupData.Id,
                    name: groupData.Name
                }
            }, this.client),
            roles: groupData.Roles.map((roleData: any) => new GroupRole({
                rank: roleData.Rank,
                name: roleData.Name,
                group: {
                    id: groupData.Id
                }
            }, this.client))
        }) as GetGroup) as GetGroupEnemies);
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
        }).then((response: any) => ({
            friendRequestsCount: response.body.friendRequestsCount,
            unreadMessageCount: response.body.unreadMessageCount
        }) as GetIncomingItems);
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
