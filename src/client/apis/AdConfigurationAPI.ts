import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { ISOString } from "../../types/GenericTypes";
import { GroupIdOption } from "../..";

// Utility types
export type AdConfigurationTargetGender = unknown;
export type AdConfigurationTargetAgeBracket = unknown;
export type AdConfigurationTargetDeviceType = unknown;

// SponsoredGames
export type AdConfigurationSponsoredGame = {
  adId: number;
  adSetId: number;
  adName: string;
  adStatus: unknown;
  creativeType: unknown;
  creativeTargetId: number;
  creativeUrl: string;
  bidAmountInRobux: number;
  budgetInRobux: number;
  adSetStatus: unknown;
  startDate: ISOString;
  endDate: ISOString;
  targetGender: AdConfigurationTargetGender;
  targetAgeBracket: AdConfigurationTargetAgeBracket;
  targetDeviceType: AdConfigurationTargetDeviceType;
  campaignTargetType: unknown;
  campaignTargetId: number;
  totalSpendInRobux: number;
  totalImpressions: number;
  totalClicks: number;
  totalConversions: number;
  impressionConversions: number;
  clickConversions: number;
};
export type AdConfigurationSponsoredGames = {
  sponsoredGames: AdConfigurationSponsoredGame[];
  previousPageCursor: string;
  nextPageCursor: string;
};

export type AdConfigurationUniverse = {
  id: number;
  name: string;
};
export type AdConfigurationUniverses = {
  universes: AdConfigurationUniverse[];
};
export type AdConfigurationCreateSponsoredGameAdOptions = {
  universeId: number;
  targetGender: AdConfigurationTargetGender;
  targetAgeBracket: AdConfigurationTargetAgeBracket;
  targetDeviceType: AdConfigurationTargetDeviceType;
  budgetInRobux: number;
  startDate: ISOString;
  endDate: ISOString;
  adName: string;
  bidAmountInRobux: number;
};
export type AdConfigurationStopSponsoredGameAdOptions = {
  adSetId: number;
};
export type AdConfigurationGetSponsoredGamesOptions = {
  universeId: number;
  includeReportingStats?: boolean;
  isArchived?: boolean;
  pageCursor?: string;
};

export default class AdConfigurationAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      baseUrl: "https://adconfiguration.roblox.com/",
      client
    });
  }

  getSponsoredGames(
    options: AdConfigurationGetSponsoredGamesOptions
  ): Promise<AdConfigurationSponsoredGames> {
    return this.request({
      requiresAuth: true,
      request: {
        url: "v2/sponsored-games",
        method: "GET",
        qs: {
          universeId: options.universeId,
          includeReportingStats: options.includeReportingStats,
          isArchived: options.isArchived,
          pageCursor: options.pageCursor
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverses(
    options: Partial<GroupIdOption>
  ): Promise<AdConfigurationUniverses> {
    return this.request({
      requiresAuth: true,
      request: {
        url: "v2/sponsored-games/universes",
        method: "GET",
        qs: {
          groupId: options.groupId
        }
      },
      json: true
    }).then((response) => response.body);
  }

  createSponsor(
    options: AdConfigurationCreateSponsoredGameAdOptions
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        url: "v2/sponsored-games/create",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  stopSponsor(
    options: AdConfigurationStopSponsoredGameAdOptions
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        url: "v2/sponsored-games/stop",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }
}
