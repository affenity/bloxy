import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import {
  AssetVersionOptions,
  ProductOptions
} from "../../old_structures/Asset";

export declare type GeneralGetAssetVersionOptions = number;
export declare type GeneralAwardBadgeOptions = {
  userId: number;
  badgeId: number;
  placeId: number;
};
export declare type GeneralGetUserFriendsOptions = {
  userId: number;
  page: number;
};
export declare type GeneralAcceptFriendRequestOptions = {
  userId: number;
};
export declare type GeneralDeclineFriendRequestOptions = {
  userId: number;
};
export declare type GeneralSendFriendRequestOptions = {
  userId: number;
};
export declare type GeneralGetUserFriendsCountOptions = {
  userId: number;
};
export declare type GeneralUnfriendUserOptions = {
  userId: number;
};
export declare type GeneralIsUserFollowingOptions = {
  userId: number;
  followUserId: number;
};
export declare type GeneralFollowUserOptions = {
  userId: number;
};
export declare type GeneralUnfollowUserOptions = {
  userId: number;
};
export declare type GeneralGetUserGroupsOptions = {
  userId: number;
};
export declare type GeneralGetGroupOptions = {
  groupId: number;
};
export declare type GeneralGetGroupAlliesOptions = {
  groupId: number;
  page: number;
};
export declare type GeneralGetGroupEnemiesOptions = {
  groupId: number;
  page: number;
};
export declare type GeneralGetProductInfoOptions = {
  assetId: number;
};
export declare type GeneralGetGamePassProductInfoOptions = {
  gamePassId: number;
};
export declare type GeneralUserOwnsAssetOptions = {
  userId: number;
  assetId: number;
};
export declare type GeneralBlockUserOptions = {
  userId: number;
};
export declare type GeneralUnblockUserOptions = {
  userId: number;
};
export declare type GeneralGetUserByUsernameOptions = {
  username: string;
};
export declare type GeneralUserCanManageAssetOptions = {
  userId: number;
  assetId: number;
};
export declare type GeneralGetUserByIdOptions = {
  userId: number;
};
export declare type GeneralGetAssetVersions = AssetVersionOptions[];
export declare type GeneralAwardBadge = boolean;
export declare type GeneralGetBalance = {
  robux: number;
};
export declare type GeneralGetUserFriends = {
  Id: number;
  Username: string;
  AvatarUri: string;
  AvatarFinal: boolean;
  IsOnline: boolean;
}[];
export declare type GeneralAcceptFriendRequest = boolean;
export declare type GeneralDeclineFriendRequest = boolean;
export declare type GeneralSendFriendRequest = boolean;
export declare type GeneralGetUserFriendsCount = {
  count: number;
};
export declare type GeneralUnfriendUser = boolean;
export declare type GeneralIsUserFollowing = boolean;
export declare type GeneralFollowUser = boolean;
export declare type GeneralUnfollowUser = boolean;
export declare type GeneralGetUserGroups = {
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
export declare type GeneralGetGroup = {
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
};
export declare type GeneralGetGroupAllies = {
  Groups: GeneralGetGroup[];
  FinalPage: boolean;
};
export declare type GeneralGetGroupEnemies = GeneralGetGroupAllies;
export declare type GeneralGetIncomingItems = {
  unreadMessageCount: number;
  friendRequestsCount: number;
};
export declare type GeneralGetProductInfo = ProductOptions;
export declare type GeneralGetGamePassProductInfo = ProductOptions;
export declare type GeneralUserOwnsAsset = boolean;
export declare type GeneralGetDeviceInfo = {
  platformType: string;
  deviceType: string;
  operatingSystemType: string;
};
export declare type GeneralBlockUser = boolean;
export declare type GeneralUnblockUser = boolean;
export declare type GeneralGetUserById = {
  id: number;
  name: string;
};
export declare type GeneralGetUserByUsername = GeneralGetUserById;
export declare type GeneralUserCanManageAsset = boolean;

export class GeneralAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      baseUrl: "https://api.roblox.com/",
      client
    });
  }

  getAssetVersions(
    options: GeneralGetAssetVersionOptions
  ): Promise<GeneralGetAssetVersions> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `assets/${options}/versions`
      },
      json: true
    }).then((response) => response.body);
  }

  awardBadge(options: GeneralAwardBadgeOptions): Promise<GeneralAwardBadge> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "assets/award-badge",
        method: "POST",
        qs: options
      }
    }).then(() => true);
  }

  getBalance(): Promise<GeneralGetBalance> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "currency/balance"
      }
    }).then((response) => response.body as GeneralGetBalance);
  }

  getUserFriends(
    options: GeneralGetUserFriendsOptions
  ): Promise<GeneralGetUserFriends> {
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

  acceptFriendRequest(
    options: GeneralAcceptFriendRequestOptions
  ): Promise<GeneralAcceptFriendRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "user/accept-friend-request",
        method: "POST",
        qs: {
          requesterUserId: options.userId
        }
      }
    }).then(() => true as GeneralAcceptFriendRequest);
  }

  declineFriendRequest(
    options: GeneralDeclineFriendRequestOptions
  ): Promise<GeneralDeclineFriendRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "user/decline-friend-request",
        method: "POST",
        qs: {
          requesterUserId: options.userId
        }
      }
    }).then(() => true as GeneralDeclineFriendRequest);
  }

  sendFriendRequest(
    options: GeneralSendFriendRequestOptions
  ): Promise<GeneralSendFriendRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "user/request-friendship",
        method: "POST",
        qs: {
          recipientUserId: options.userId
        }
      }
    }).then(() => true as GeneralSendFriendRequest);
  }

  getUserFriendsCount(
    options: GeneralGetUserFriendsCountOptions
  ): Promise<GeneralGetUserFriendsCount> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "user/get-friendship-count",
        qs: options
      },
      json: true
    }).then((response) => response.body.count);
  }

  unfriendUser(
    options: GeneralUnfriendUserOptions
  ): Promise<GeneralUnfriendUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "user/unfriend",
        method: "POST",
        qs: {
          friendUserId: options.userId
        }
      }
    }).then(() => true as GeneralUnfriendUser);
  }

  isUserFollowing(
    options: GeneralIsUserFollowingOptions
  ): Promise<GeneralIsUserFollowing> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "user/following-exists",
        qs: options
      }
    }).then((response) => response.body.isFollowing);
  }

  followUser(options: GeneralFollowUserOptions): Promise<GeneralFollowUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "user/follow",
        method: "POST",
        qs: {
          followedUserId: options.userId
        }
      }
    }).then(() => true as GeneralFollowUser);
  }

  unfollowUser(
    options: GeneralUnfollowUserOptions
  ): Promise<GeneralUnfollowUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "user/unfollow",
        method: "POST",
        qs: {
          followedUserId: options.userId
        }
      }
    }).then(() => true as GeneralUnfollowUser);
  }

  getUserGroups(
    options: GeneralGetUserGroupsOptions
  ): Promise<GeneralGetUserGroups> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `users/${options.userId}/groups`
      }
    }).then((response) => response.body);
  }

  getGroup(options: GeneralGetGroupOptions): Promise<GeneralGetGroup> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `groups/${options.groupId}`
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupAllies(
    options: GeneralGetGroupAlliesOptions
  ): Promise<GeneralGetGroupAllies> {
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

  getGroupEnemies(
    options: GeneralGetGroupEnemiesOptions
  ): Promise<GeneralGetGroupEnemies> {
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

  getIncomingItems(): Promise<GeneralGetIncomingItems> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "incoming-items/counts"
      },
      json: true
    }).then((response: any) => ({
      friendRequestsCount: response.body.friendRequestsCount,
      unreadMessageCount: response.body.unreadMessageCount
    }));
  }

  getProductInfo(
    options: GeneralGetProductInfoOptions
  ): Promise<GeneralGetProductInfo> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "marketplace/productinfo",
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGamePassProductInfo(
    options: GeneralGetGamePassProductInfoOptions
  ): Promise<GeneralGetGamePassProductInfo> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "marketplace/game-pass-product-info",
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  userOwnsAsset(
    options: GeneralUserOwnsAssetOptions
  ): Promise<GeneralUserOwnsAsset> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "ownership/hasasset",
        qs: options
      }
    }).then(
      (response) =>
        (response.body as string).includes("true") as GeneralUserOwnsAsset
    );
  }

  getDeviceInfo(): Promise<GeneralGetDeviceInfo> {
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

  blockUser(options: GeneralBlockUserOptions): Promise<GeneralBlockUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "userblock/block",
        qs: options,
        method: "POST"
      },
      json: true
    }).then((response) => response.body.success === (true as GeneralBlockUser));
  }

  unblockUser(options: GeneralUnblockUserOptions): Promise<GeneralUnblockUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "userblock/unblock",
        qs: options,
        method: "POST"
      },
      json: true
    }).then(
      (response) => response.body.success === (true as GeneralUnblockUser)
    );
  }

  getUserById(options: GeneralGetUserByIdOptions): Promise<GeneralGetUserById> {
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

  getUserByUsername(
    options: GeneralGetUserByUsernameOptions
  ): Promise<GeneralGetUserByUsername> {
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

  userCanManageAsset(
    options: GeneralUserCanManageAssetOptions
  ): Promise<GeneralUserCanManageAsset> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `users/${options.userId}/canmanage/${options.assetId}`
      },
      json: true
    }).then(
      (response) =>
        response.body.CanManage === (true as GeneralUserCanManageAsset)
    );
  }
}
