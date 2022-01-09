import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { SortOption } from "../..";

export type BadgesMetaData = {
  badgeCreationPrice: number;
  maxBadgeNameLength: number;
  maxBadgeDescriptionLength: number;
};

export type BadgesGetBadge = {
  id: number;
  name: string;
  description: string;
  displayName: string;
  displayDescription: string;
  enabled: boolean;
  iconImageId: number;
  displayIconImageId: number;
  created: string;
  updated: string;
  statistics: {
    pastDayAwardedCount: number;
    awardedCount: number;
    winRatePercentage: number;
  };
  awardingUniverse: {
    id: number;
    name: string;
    rootPlaceId: number;
  };
};
export type BadgesUpdateBadge = unknown;
export type BadgesGetBadges = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: BadgesGetBadge[];
};
export type BadgesGetUserBadgesAwardedDates = {
  data: {
    badgeId: number;
    awardedDate: string;
  }[];
};
export type BadgesDeleteBadgeFromUser = unknown;
export type BadgesDeleteBadgeFromSelf = BadgesDeleteBadgeFromUser;
export type BadgesGetBadgeOptions = {
  badgeId: number;
};
export type BadgesUpdateBadgeOptions = {
  id: number;
  name: string;
  description: string;
  enabled: boolean;
};
export type BadgesGetUniverseBadgesOptions = {
  universeId: number;
} & SortOption;
export type BadgesGetUserBadgesOptions = {
  userId: number;
} & SortOption;
export type BadgesGetUserBadgesAwardedDatesOptions = {
  userId: number;
  badgeIds: number[];
};
export type BadgesDeleteBadgeFromUserOptions = {
  userId: number;
  badgeId: number;
};
export type BadgesDeleteBadgeFromSelfOptions = {
  badgeId: number;
};

export default class AvatarAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://badges.roblox.com/"
    });
  }

  getMetaData(): Promise<BadgesMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "v1/badges/metadata"
      },
      json: true
    }).then((response) => response.body);
  }

  getBadge(options: BadgesGetBadgeOptions): Promise<BadgesGetBadge> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/badges/${options.badgeId}`
      },
      json: true
    }).then((response) => response.body);
  }

  updateBadge(options: BadgesUpdateBadgeOptions): Promise<BadgesUpdateBadge> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/badges/${options.id}`,
        method: "PATCH"
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseBadges(
    options: BadgesGetUniverseBadgesOptions
  ): Promise<BadgesGetBadges> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/badges`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserBadges(options: BadgesGetUserBadgesOptions): Promise<BadgesGetBadges> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/badges`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserBadgesAwardedDates(
    options: BadgesGetUserBadgesAwardedDatesOptions
  ): Promise<BadgesGetUserBadgesAwardedDates> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/badges/awarded-dates`,
        qs: {
          badgeIds: options.badgeIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  deleteBadgeFromUser(
    options: BadgesDeleteBadgeFromUserOptions
  ): Promise<BadgesDeleteBadgeFromUser> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/${options.userId}/badges/${options.badgeId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  deleteBadgeFromSelf(
    options: BadgesDeleteBadgeFromSelfOptions
  ): Promise<BadgesDeleteBadgeFromSelf> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/badges/${options.badgeId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }
}
