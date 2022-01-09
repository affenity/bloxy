import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import {
  GeneralGetUserFriendsCount,
  GeneralGetUserFriendsCountOptions
} from "./GeneralAPI";
import { PartialUser } from "../../structures/User";
import {
  EnumUserPresence,
  UserPresence
} from "../../interfaces/GeneralInterfaces";

export type FriendsFindFriendByCodeOptions = {
  code: string;
};
export type FriendsFindFriendByCode = {
  userId: number;
  username: string;
  friendshipStatus: "NoFriendship" | string;
};
export type FriendsCheckSessionHealth = unknown;
export type FriendsRedeemNearbyFriendCodeOptions = {
  code: string;
};
export type FriendsRedeemNearbyFriendCode = unknown;
export type FriendsDeleteSession = unknown;
export type FriendsGetOrCreateNearbySession = {
  code: string;
  expires: number;
};
export type FriendsRedeemQRCodeOptions = {
  code: string;
};
export type FriendsRedeemQRCode = {
  userId: number;
  username: string;
};
export type FriendsDeleteQRCodeSession = unknown;
export type FriendsGetOrCreateQRCodeSession = FriendsGetOrCreateNearbySession;
export type FriendsGetMetaDataOptions = {
  targetUserId: number;
};
export type FriendsGetMetaData = {
  isFriendFinderEnabled: boolean;
  isNearbyUpsellEnabled: boolean;
  isFriendsUserDataStoreCacheEnabled: boolean;
  userName: string;
};
export type FriendsGetSelfFriendsCount = {
  count: number;
};
export type FriendsGetSelfFriendRequestsOptions = {
  sortOrder?: "Desc" | "Asc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type FriendsGetSelfFriendRequests = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    description: string;
    created: string;
    isBanned: boolean;
    userId: number;
    username: string;
  }[];
};
export type FriendsGetSelfFriendRequestsCount = {
  count: number;
};
export type FriendsGetUserFollowersOptions = {
  userId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type FriendsGetUserFollowers = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    isOnline: boolean;
    isDeleted: boolean;
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
  }[];
};
export type FriendsGetUserFollowersCountOptions = {
  userId: number;
};
export type FriendsGetUserFollowersCount = {
  count: number;
};
export type FriendsGetUserFollowingOptions = FriendsGetUserFollowersOptions;
export type FriendsGetUserFollowing = FriendsGetUserFollowers;
export type FriendsGetUserFollowingCountOptions =
  FriendsGetUserFollowersCountOptions;
export type FriendsGetUserFollowingCount = FriendsGetUserFollowersCount;
export type FriendsGetUserFriendsOptions = {
  cursor?: string;
  limit?: 10 | 25 | 50 | 100;
  userId: number;
};
export type FriendsGetUserFriends = {
  data: {
    isOnline: boolean;
    isDeleted: boolean;
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
  }[];
};
export type FriendsGetUserOnlineFriendsOptions = {
  userId: number;
};
export type FriendsGetUserOnlineFriends = {
  data: {
    userId: number;
    username: string;
    presence: {
      placeId: number | null;
      universeId: number | null;
      UserPresenceType: UserPresence | null;
      UserLocationType: string | null;
      lastLocation: string | null;
      gameInstanceId: string | null;
      lastOnline: string | null;
    };
  }[];
};
export type FriendsGetUserFriendsWithStatusesOptions = {
  userId: number;
  withUserIds: number[];
};
export type FriendsGetUserFriendsWithStatuses = {
  data: {
    id: number;
    status: "NotFriends" | string;
  }[];
};
export type FriendsDeclineAllFriendRequests = unknown;
export type FriendsAcceptFriendRequestOptions = {
  userId: number;
};
export type FriendsAcceptFriendRequest = unknown;
export type FriendsDeclineFriendRequestOptions =
  FriendsAcceptFriendRequestOptions;
export type FriendsDeclineFriendRequest = unknown;
export type FriendsFollowUserOptions = {
  userId: number;
};
export type FriendsFollowUser = {
  success: boolean;
  isCaptchaRequired: boolean;
};
export type FriendsSendFriendRequestOptions = {
  userId: number;
  source?: "Unknown" | string;
};
export type FriendsSendFriendRequest = {
  success: boolean;
  isCaptchaRequired: boolean;
};
export type FriendsUnFollowUserOptions = FriendsFollowUserOptions;
export type FriendsUnFollowUser = FriendsFollowUser;
export type FriendsUnfriendUserOptions = {
  userId: number;
};
export type FriendsUnfriendUser = unknown;
export type FriendsGetSelfRecommendedUsers = {
  user: PartialUser;
  profileUrl: string;
  presenceType: EnumUserPresence;
}[];

export class FriendsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://friends.roblox.com/"
    });
  }

  findFriendByCode(
    options: FriendsFindFriendByCodeOptions
  ): Promise<FriendsFindFriendByCode> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/nearby/code/${options.code}`
      },
      json: true
    }).then((response) => response.body);
  }

  checkSessionHealth(): Promise<FriendsCheckSessionHealth> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/nearby/health`
      },
      json: true
    }).then((response) => response.body);
  }

  redeemFriendCode(
    options: FriendsRedeemNearbyFriendCodeOptions
  ): Promise<FriendsRedeemNearbyFriendCode> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/nearby/code/${options.code}/redeem`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  deleteFriendSession(): Promise<FriendsDeleteSession> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/nearby/session`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getSession(): Promise<FriendsFindFriendByCode> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/nearby/session`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  redeemFriendQRCode(
    options: FriendsRedeemQRCodeOptions
  ): Promise<FriendsRedeemQRCode> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/qr/${options.code}/redeem`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  deleteFriendQRSession(): Promise<FriendsDeleteQRCodeSession> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/qr/session`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getFriendQRSession(): Promise<FriendsGetOrCreateQRCodeSession> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/friends/verified/qr/session`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  getMetaData(options: FriendsGetMetaDataOptions): Promise<FriendsGetMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/metadata`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfFriendsCount(): Promise<FriendsGetSelfFriendsCount> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/my/friends/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfFriendRequests(
    options: FriendsGetSelfFriendRequestsOptions
  ): Promise<FriendsGetSelfFriendRequests> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/my/friends/requests`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfFriendRequestsCount(): Promise<FriendsGetSelfFriendRequestsCount> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/user/friend-requests/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFollowers(
    options: FriendsGetUserFollowersOptions
  ): Promise<FriendsGetUserFollowers> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/followers`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFollowersCount(
    options: FriendsGetUserFollowersCountOptions
  ): Promise<FriendsGetUserFollowersCount> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/followers/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFollowing(
    options: FriendsGetUserFollowingOptions
  ): Promise<FriendsGetUserFollowing> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/followings`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFollowingCount(
    options: FriendsGetUserFollowingCountOptions
  ): Promise<FriendsGetUserFollowingCount> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/followings/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFriends(
    options: FriendsGetUserFriendsOptions
  ): Promise<FriendsGetUserFriends> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/friends`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFriendsCount(
    options: GeneralGetUserFriendsCountOptions
  ): Promise<GeneralGetUserFriendsCount> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/friends/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFriendsOnline(
    options: FriendsGetUserOnlineFriendsOptions
  ): Promise<FriendsGetUserOnlineFriends> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/friends/online`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFriendsWithStatuses(
    options: FriendsGetUserFriendsWithStatusesOptions
  ): Promise<FriendsGetUserFriendsWithStatuses> {
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

  declineAllFriendRequests(): Promise<FriendsDeclineAllFriendRequests> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/user/friend-requests/decline-all`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  acceptFriendRequest(
    options: FriendsAcceptFriendRequestOptions
  ): Promise<FriendsAcceptFriendRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/accept-friend-request`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  declineFriendRequest(
    options: FriendsDeclineFriendRequestOptions
  ): Promise<FriendsDeclineFriendRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/decline-friend-request`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  followUser(options: FriendsFollowUserOptions): Promise<FriendsFollowUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/follow`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  sendFriendRequest(
    options: FriendsSendFriendRequestOptions
  ): Promise<FriendsSendFriendRequest> {
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

  unFollowUser(
    options: FriendsUnFollowUserOptions
  ): Promise<FriendsUnFollowUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/unfollow`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  unfriendUser(
    options: FriendsUnfriendUserOptions
  ): Promise<FriendsUnfriendUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/unfriend`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  getRecommendedUsers(): Promise<FriendsGetSelfRecommendedUsers> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/recommended-users`
      },
      json: true
    }).then((response) => response.body);
  }
}
