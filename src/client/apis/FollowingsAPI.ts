import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type FollowingsGetUserFollowedUniversesOptions = {
  userId: number;
};
export type FollowingsGetUserFollowedUniverses = {
  universeId: number;
  userId: number;
}[];
export type FollowingsGetUserFollowingUniverseStatusOptions = {
  userId: number;
  universeId: number;
};
export type FollowingsGetUserFollowingUniverseStatus = {
  UniverseId: number;
  UserId: number;
  CanFollow: boolean;
  IsFollowing: boolean;
  FollowingCountByType: number;
  FollowingLimitByType: number;
};
export type FollowingsUnFollowUniverseOptions = {
  userId: number;
  universeId: number;
};
export type FollowingsUnFollowUniverse = {
  universeId: number;
  userId: number;
};
export type FollowingsFollowUniverseOptions = FollowingsUnFollowUniverseOptions;
export type FollowingsFollowUniverse = FollowingsUnFollowUniverse;

export default class FollowingsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://followings.roblox.com/"
    });
  }

  getUserFollowedUniverses(
    options: FollowingsGetUserFollowedUniversesOptions
  ): Promise<FollowingsGetUserFollowedUniverses> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/universes`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFollowingUniverseStatus(
    options: FollowingsGetUserFollowingUniverseStatusOptions
  ): Promise<FollowingsGetUserFollowingUniverseStatus> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/universes/${options.universeId}/status`
      },
      json: true
    }).then((response) => response.body);
  }

  unFollowUniverse(
    options: FollowingsUnFollowUniverseOptions
  ): Promise<FollowingsUnFollowUniverse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/universes/${options.universeId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  followUniverse(
    options: FollowingsFollowUniverseOptions
  ): Promise<FollowingsFollowUniverse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/universes/${options.universeId}`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }
}
