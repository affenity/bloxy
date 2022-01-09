import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { PartialGroupOptions } from "../../structures/Group";
import { ISOString } from "../../types/GenericTypes";

export type DevelopGameUniverseOptions = {
  id: number;
  rootPlaceId: number;
  name: string;
  description: string;
  creatorType: string;
  creator: {
    id: number;
    name: string;
  };
  price: number;
  allowedGearGenres: string[];
  allowedGearCategories: string[];
  playing: number;
  visits: number;
  maxPlayers: number;
  created: string;
  updated: string;
  studioAccessToApisAllowed: boolean;
  createVipServersAllowed: boolean;
  universeAvatarType: string;
  genre: string;
};
export type DevelopAgeDataAvailable = {
  isAgeDataAvailable: boolean;
};
export type DevelopProductAggregation = {
  developerProductName: string;
  revenueAmount: number;
};
export type DevelopProductAggregations = {
  allDevicesDeveloperProductRevenue: DevelopProductAggregation[];
  developerProductRevenueByDevice: {
    Computer: DevelopProductAggregation[];
    Phone: DevelopProductAggregation[];
    Tablet: DevelopProductAggregation[];
    Console: DevelopProductAggregation[];
  };
};

export type DevelopTeamCreateSessionMember = {
  id: number;
  name: string;
  displayName: string;
};
export type DevelopTeamCreateSessionMembers = {
  data: DevelopTeamCreateSessionMember[];
};
export type DevelopTeamCreateEnabled = {
  isEnabled: boolean;
};
export type DevelopTeamCreateMember = {
  buildersClubMembershipType: "None" | "RobloxPremium";
  userId: number;
  username: string;
  displayName: string;
};
export type DevelopTeamCreateMembers = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: DevelopTeamCreateMember[];
};
export type DevelopInvitedTeamCreatePlace = {
  id: number;
  name: string;
  description: string;
  isArchived: boolean;
  rootPlaceId: number;
  isActive: boolean;
  privacyType: "Public" | "FriendsOnly" | "Private";
  creatorType: "User" | "Group";
  creatorTargetId: number;
  creatorName: string;
  created: ISOString;
  updated: ISOString;
};
export type DevelopInvitedTeamCreatePlaces = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: DevelopInvitedTeamCreatePlace[];
};
export type DevelopGetUniverseLiveStatsOptions = {
  universeId: number;
};
export type DevelopGetUniverseLiveStats = {
  totalPlayerCount: number;
  playerCountsByDeviceType: Record<string, number>;
  gameCount: number;
};
export type DevelopGetUniverseRevenueReportsOptions = {
  universeId: number;
};
export type DevelopGetUniverseRevenueReport = {
  month: number;
  year: number;
  RevenueReportStatus: "NotGenerated" | "ReadyForDownload";
};
export type DevelopGetUniverseRevenueReports = {
  monthlyRevenueReportStatusList: DevelopGetUniverseRevenueReport[];
};
export type DevelopGetUniverseRevenueReportOptions = {
  universeId: number;
  yearDashMonth: `${number}-${number}`;
};

export type DevelopCreatorDashboardMetadata = {
  isPlayFabDataSourceChartsEnabled: boolean;
  playFabDataSourceChartsAvailableByKPITypes: string[];
};

export type DevelopGetAssetsVoteInformationOptions = {
  assetIds: number[];
};
export type DevelopGetAssetsVoteInformation = {
  data: {
    assetId: number;
    hasUserVoted: number;
    canUserVote: number;
    shouldShowVote: boolean;
    upVotes: number;
    downVotes: number;
    reasonForNotAbleToVote: string;
  }[];
};
export type DevelopGetGameTemplates = {
  gameTemplateType: string;
  hasTutorials: boolean;
  universe: DevelopGameUniverseOptions;
}[];
export type DevelopGetGameUpdatesHistoryOptions = {
  universeId: number;
};
export type DevelopGetGameUpdatesHistory = {
  universeId: number;
  createdOn: string;
  createdOnKey: string;
  creatorType: string;
  creatorId: number;
  creatorName: string;
  expiredOn: string;
  content: string;
  impressions: number;
  plays: number;
  unfollows: number;
}[];
export type DevelopPublishGameNotificationOptions = {
  universeId: number;
  gameUpdateText: unknown;
};
export type DevelopPublishGameNotification = DevelopGetGameUpdatesHistory;
export type DevelopFilterPublishGameNotificationOptions = {
  text: string;
};
export type DevelopFilterPublishGameNotification = {
  filteredGameUpdateText: string;
  isFiltered: boolean;
  moderationLevel: number;
};
export type DevelopGetGroupUniversesOptions = {
  groupId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type DevelopGetGroupUniverses = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    id: number;
    name: string;
    description: string;
    isArchived: boolean;
    rootPlaceId: number | null;
    isActive: boolean;
    privacyType: "Private" | string;
    creatorType: "Group" | string;
    creatorTargetId: null;
    creatorName: string;
    created: string;
    updated: string;
  }[];
};
export type DevelopGetPlaceCompatibilitiesOptions = {
  placeId: number;
};
export type DevelopGetPlaceCompatibilities = {
  Compatibilities: {
    status: "Good" | string;
    platformName: string;
    crashRatePercentage: number;
  }[];
};
export type DevelopUpdatePlaceConfigurationOptions = {
  placeId: number;
  name: string;
  description: string;
};
export type DevelopUpdatePlaceConfiguration = {
  id: number;
  universeId: number;
  name: string;
  description: string;
};
export type DevelopGetPlaceStatisticsByTypeOptions = {
  placeId: number;
  type: "Revenue" | "RevenuePerVisit" | "AverageVisitLength" | "Visits";
  granularity?: "Hourly" | "Daily" | "Monthly";
  divisionType?: "Device" | "Age";
  startTime?: string;
  endTime?: string;
};
export type DevelopGetPlaceStatisticsByType = {
  placeId: number;
  dataType: DevelopGetPlaceStatisticsByTypeOptions["type"];
  dataGranularity: DevelopGetPlaceStatisticsByTypeOptions["granularity"];
  startTime: string;
  endTime: string;
  data: unknown;
};
export type DevelopGetPluginsByIdOptions = {
  pluginIds: number[];
};
export type DevelopGetPluginsById = {
  data: {
    id: number;
    name: string;
    description: string;
    commentsEnabled: boolean;
    versionId: number;
    created: string;
    updated: string;
  }[];
};
export type DevelopUpdatePluginOptions = {
  pluginId: number;
  name: string;
  description: string;
  commentsEnabled: boolean;
};
export type DevelopUpdatePlugin = unknown;
export type DevelopSearchUniversesOptions = {
  q: {
    creator: "user" | "group" | "team";
    archived?: boolean;
    active?: boolean;
    groups?: unknown[];
    search?: string;
  };
  sort?: (
    | "+GameCreated"
    | "-GameCreated"
    | "+GameName"
    | "-GameName"
    | "+RootPlaceName"
    | "-RootPlaceName"
    | "+RootPlaceUpdated"
    | "-RootPlaceUpdated"
    | "+LastUpdated"
    | "-LastUpdated"
  )[];
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type DevelopSearchUniverseData = {
  id: number;
  name: string;
  description: string;
  isArchived: boolean;
  rootPlaceId: number;
  isActive: boolean;
  privacyType: "Public" | "Private";
  creatorType: "User" | "Group";
  creatorTargetId: number;
  creatorName: string;
  created: string;
  updated: string;
};
export type DevelopSearchUniverses = {
  previousPageCursor: string | null;
  nextPageCursor: string | null;
  data: DevelopSearchUniverseData[];
};
export type DevelopSearchToolboxOptions = {
  category: string;
  keyword?: string;
  sort?: string;
  creatorId?: number;
  num?: number;
  page?: number;
  groupId?: number;
  cacheMode?: "Normal" | "Bypass" | "ForceUpdate";
};
export type DevelopSearchToolbox = {
  TotalResults: number;
  Results: {
    Asset: {
      Id: number;
      Name: string;
      TypeId: number;
      AssetGenres: string[];
      IsEndorsed: boolean;
      Description: string;
      Duration: number;
      Created: string;
      Updated: string;
      CreatedRaw: string;
      UpdatedRaw: string;
    };
    Creator: {
      Id: number;
      Name: string;
      Type: number;
    };
    Thumbnail: {
      Final: boolean;
      Url: string;
      RetryUrl: string;
      UserId: number;
      EndpointType: string;
    };
    Voting: {
      ShowVotes: boolean;
      UpVotes: number;
      DownVotes: number;
      CanVote: boolean;
      UserVote: boolean;
      HasVoted: number;
      ReasonForNotVoteable: string;
      Product: {
        ProductId: number;
        Price: number;
      };
    };
  }[];
};
export type DevelopGetUniverseOptions = {
  universeId: number;
};
export type DevelopGetUniverse = DevelopGameUniverseOptions;
export type DevelopGetUniversePermissionsOptions = {
  universeId: number;
};
export type DevelopGetUniversePermissions = {
  canManage: boolean;
  canCloudEdit: boolean;
};
export type DevelopGetUniversePlacesOptions = {
  universeId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type DevelopGetUniversePlaces = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: unknown[];
};
export type DevelopGetUniverseStatisticsReportsOptions = {
  universeId: number;
};
export type DevelopGetUniverseStatisticsReports = {
  reports: {
    universeId: number;
    yearDashMonth: string;
    status: "NotGenerated" | string;
    spreadsheetId: string;
  }[];
};
export type DevelopGetUniverseStatisticsReportsByTimeOptions = {
  universeId: number;
  yearDashMonth: string;
};
export type DevelopGetUniverseStatisticsReportByTime = {
  universeId: number;
  yearDashMonth: string;
  status: "NotGenerated" | string;
  spreadsheetId: string;
};
export type DevelopDownloadUniverseStatisticsReportByTimeOptions = {
  universeId: number;
  yearDashMonth: string;
};
export type DevelopDownloadUniverseStatisticsReportByTime = unknown;
export type DevelopMultiGetUniversesOptions = {
  ids: number[];
};
export type DevelopMultiGetUniverses = DevelopGameUniverseOptions[];
export type DevelopMultiGetUniversesPermissionsOptions = {
  ids: number[];
};
export type DevelopMultiGetUniversesPermissions = {
  data: {
    universeId: number;
    canManage: boolean;
    canCloudEdit: boolean;
  }[];
};
export type DevelopActivateUniverseOptions = {
  universeId: number;
};
export type DevelopActivateUniverse = unknown;
export type DevelopDeactivateUniverseOptions = {
  universeId: number;
};
export type DevelopDeactivateUniverse = unknown;
export type DevelopGenerateUniverseStatisticReportsByTimeOptions = {
  universeId: number;
  yearDashMonth: string;
};
export type DevelopGenerateUniverseStatisticReportsByTime = unknown;
export type DevelopGetUniverseConfigurationOptions = {
  universeId: number;
};
export type DevelopGetUniverseConfiguration = {
  id: number;
  name: string;
  universeAvatarType: "MorphToR6" | "MorphToR15";
  universeScaleType: "NoScales" | string;
  universeAnimationType: "Standard" | string;
  universeCollisionType: "InnerBox" | string;
  universeBodyType: "Standard" | string;
  universeJointPositioningType: "Standard" | string;
  isArchived: boolean;
  isFriendsOnly: boolean;
  genre: "All" | string;
  playableDevices: ("Computer" | string)[];
  isForSale: boolean;
  price: number;
};
export type DevelopUpdateUniverseConfigurationOptions = Omit<
  DevelopGetUniverseConfiguration,
  "id"
> & { universeId: number };
export type DevelopUpdateUniverseConfiguration =
  DevelopGetUniverseConfiguration;
export type DevelopGetUniverseVIPServersConfigurationOptions = {
  universeId: number;
};
export type DevelopGetUniverseVIPServersConfiguration = {
  isEnabled: boolean;
  price: number;
  activeServersCount: number;
  activeSubscriptionsCount: number;
};
export type DevelopGetUniverseTeamCreateSettingsOptions = {
  universeId: number;
};
export type DevelopGetUniverseTeamCreateSettings = {
  isEnabled: boolean;
};
export type DevelopUpdateUniverseTeamCreateSettingsOptions =
  DevelopGetUniverseTeamCreateSettingsOptions;
export type DevelopUpdateUniverseTeamCreateSettings = unknown;
export type DevelopRemoveUserFromUniverseTeamCreateOptions = {
  universeId: number;
  userId: number;
};
export type DevelopRemoveUserFromUniverseTeamCreate = unknown;
export type DevelopGetUsersInUniverseTeamCreateOptions = {
  universeId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type DevelopGetUsersInUniverseTeamCreate = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    buildersClubMembershipType: "None" | string;
    userId: number;
    username: string;
    displayName: string;
  }[];
};
export type DevelopGetSelfTeamCreateUniversesAccessOptions = {
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type DevelopGetSelfTeamCreateUniversesAccess = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: DevelopGameUniverseOptions[];
};
export type DevelopGetSelfGroupsAccess = {
  data: PartialGroupOptions[];
};
export type DevelopGetNotificationsStatisticReports = {
  data: {
    UserId: number;
    UniverseId: number;
    Expires: number;
    RootPlaceId: number;
    GameName: string;
  }[];
};
export type DevelopGetStudioDataOptions = {
  clientKey: string;
};
export type DevelopGetStudioData = unknown;
export type DevelopSetStudioDataOptions = {
  clientKey: string;
  data: unknown;
};
export type DevelopSetStudioData = {
  success: boolean;
};
export type DevelopGetSelfUniversesOptions = {
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type DevelopGetSelfUniverses = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: DevelopGameUniverseOptions[];
};
export type DevelopCreateUniverseAliasOptions = {
  name: string;
  type: "Asset" | string;
  targetId: number;
};
export type DevelopCreateUniverseAlias = unknown;
export type DevelopDeleteUniverseAliasOptions = {
  universeId: number;
  name: string;
};
export type DevelopDeleteUniverseAlias = unknown;
export type DevelopUpdateUniverseAliasOptions =
  DevelopCreateUniverseAliasOptions;
export type DevelopUpdateUniverseAlias = unknown;
export type DevelopCreateDeveloperProductOptions = {
  universeId: number;
  name: string;
  description: string;
  priceInRobux: number;
  iconImageAssetId?: number;
};
export type DevelopCreateDeveloperProduct = {
  id: number;
  name: string;
  Description: string;
  shopId: number;
  iconImageAssetId: number;
};
export type DevelopUpdateDeveloperProductOptions = {
  universeId: number;
  developerProductId: number;
  Name: string;
  Description: string;
  IconImageAssetId?: number;
  PriceInRobux: number;
};
export type DevelopUpdateDeveloperProduct = unknown;

export default class DevelopAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://develop.roblox.com/"
    });
  }

  getGameTemplates(): Promise<DevelopGetGameTemplates> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/gametemplates`
      },
      json: true
    }).then((response) => response.body.data);
  }

  getGameUpdatesHistory(
    options: DevelopGetGameUpdatesHistoryOptions
  ): Promise<DevelopGetGameUpdatesHistory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/gameUpdateNotifications/${options.universeId}`
      },
      json: true
    }).then((response) => response.body);
  }

  publishGameUpdateNotification(
    options: DevelopPublishGameNotificationOptions
  ): Promise<DevelopPublishGameNotification> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/gameUpdateNotifications/${options.universeId}`,
        method: "POST",
        json: `"${options.gameUpdateText}"`
      },
      json: true
    }).then((response) => response.body);
  }

  filterGameUpdateNotificationText(
    options: DevelopFilterPublishGameNotificationOptions
  ): Promise<DevelopFilterPublishGameNotification> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/gameUpdateNotifications/filter`,
        method: "POST",
        json: `"${options.text}"`
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupUniverses(
    options: DevelopGetGroupUniversesOptions
  ): Promise<DevelopGetGroupUniverses> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/universes`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getPlaceCompatibilities(
    options: DevelopGetPlaceCompatibilitiesOptions
  ): Promise<DevelopGetPlaceCompatibilities> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/places/${options.placeId}/compatibilities`
      },
      json: true
    }).then((response) => response.body);
  }

  updatePlaceConfiguration(
    options: DevelopUpdatePlaceConfigurationOptions
  ): Promise<DevelopUpdatePlaceConfiguration> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/places/${options.placeId}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getPlaceStatistics(
    options: DevelopGetPlaceStatisticsByTypeOptions
  ): Promise<DevelopGetPlaceStatisticsByType> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/places/${options.placeId}/stats/${options.type}`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  isPlaceAgeDataAvailable(options: {
    placeId: number;
  }): Promise<DevelopAgeDataAvailable> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/places/${options.placeId}/is-age-data-available`,
        method: "GET"
      },
      json: true
    }).then((response) => response.body);
  }

  getDeveloperProductAggregation(options: {
    placeId: number;
    timeFrame: "Hourly" | "Daily" | "Monthly";
  }): Promise<DevelopProductAggregations> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/places/${options.placeId}/developer-product-aggregation`,
        method: "GET",
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getCreatorDashboardMetadata(): Promise<DevelopCreatorDashboardMetadata> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/creator-dashboard-metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getTeamCreateSessionMembers(options: {
    placeId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
  }): Promise<DevelopTeamCreateSessionMembers> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/places/${options.placeId}/teamcreate/active_session/members`,
        qs: {
          limit: options.limit || 10,
          cursor: options.cursor
        }
      },
      json: true
    }).then((response) => response.body);
  }

  setTeamCreateEnabled(
    options: { universeId: number } & DevelopTeamCreateEnabled
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/teamcreate`,
        method: "PATCH",
        json: { isEnabled: options.isEnabled }
      },
      json: true
    }).then(() => true);
  }

  getMultiPlugins(
    options: DevelopGetPluginsByIdOptions
  ): Promise<DevelopGetPluginsById> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/plugins`,
        qs: {
          pluginIds: options.pluginIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  updatePlugin(
    options: DevelopUpdatePluginOptions
  ): Promise<DevelopUpdatePlugin> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/plugins/${options.pluginId}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  searchUniverses(
    options: DevelopSearchUniversesOptions
  ): Promise<DevelopSearchUniverses> {
    const encodedQuery = `${options.q.search || ""} creator:${
      options.q.creator.slice(0, 1).toUpperCase() + options.q.creator.slice(1)
    } ${
      typeof options.q.active !== "undefined"
        ? `active:${options.q.active ? "True" : "False"}`
        : ""
    } ${
      options.q.archived
        ? `archived:${options.q.archived ? "True" : "False"}`
        : ""
    } ${options.q.groups ? `groups:${options.q.groups.join(",")}` : ""}`;

    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/search/universes`,
        qs: {
          ...options,
          sort: (options.sort || []).join(","),
          // End me, please...
          q: encodedQuery
        }
      },
      json: true
    }).then((response) => response.body);
  }

  searchToolbox(
    options: DevelopSearchToolboxOptions
  ): Promise<DevelopSearchToolbox> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/toolbox/items`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverse(options: DevelopGetUniverseOptions): Promise<DevelopGetUniverse> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}`
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseLiveStats(
    options: DevelopGetUniverseLiveStatsOptions
  ): Promise<DevelopGetUniverseLiveStats> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/live-stats`
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfUniversePermissions(
    options: DevelopGetUniversePermissionsOptions
  ): Promise<DevelopGetUniversePermissions> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/permissions`
      },
      json: true
    }).then((response) => response.body);
  }

  getPlacesInUniverse(
    options: DevelopGetUniversePlacesOptions
  ): Promise<DevelopGetUniversePlaces> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/places`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseRevenueReports(
    options: DevelopGetUniverseRevenueReportsOptions
  ): Promise<DevelopGetUniverseRevenueReports> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/revenue-reports`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseRevenueReport(
    options: DevelopGetUniverseRevenueReportOptions
  ): Promise<DevelopGetUniverseRevenueReport> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/revenue-reports/${options.yearDashMonth}`
      },
      json: true
    }).then((response) => response.body);
  }

  downloadUniverseRevenueReport(
    options: DevelopGetUniverseRevenueReportOptions
  ): Promise<unknown> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/revenue-reports/${options.yearDashMonth}/download`,
        method: "GET"
      }
    }).then((response) => response.body);
  }

  getUniverseStatisticReports(
    options: DevelopGetUniverseStatisticsReportsOptions
  ): Promise<DevelopGetUniverseStatisticsReports> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/statistic-reports`
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseStatisticReportsByTime(
    options: DevelopGetUniverseStatisticsReportsByTimeOptions
  ): Promise<DevelopGetUniverseStatisticsReportByTime> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}`
      },
      json: true
    }).then((response) => response.body);
  }

  downloadUniverseStatisticReportsByTime(
    options: DevelopDownloadUniverseStatisticsReportByTimeOptions
  ): Promise<DevelopDownloadUniverseStatisticsReportByTime> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/download`
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiUniverses(
    options: DevelopMultiGetUniversesOptions
  ): Promise<DevelopMultiGetUniverses> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/multiget`,
        qs: {
          ids: options.ids.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiUniversesPermissions(
    options: DevelopMultiGetUniversesPermissionsOptions
  ): Promise<DevelopMultiGetUniversesPermissions> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/multiget/permissions`,
        qs: {
          ids: options.ids.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  activateUniverse(
    options: DevelopActivateUniverseOptions
  ): Promise<DevelopActivateUniverse> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/activate`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  deactivateUniverse(
    options: DevelopDeactivateUniverseOptions
  ): Promise<DevelopDeactivateUniverse> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/deactivate`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  generateUniverseStatisticReportsByTime(
    options: DevelopGenerateUniverseStatisticReportsByTimeOptions
  ): Promise<DevelopGenerateUniverseStatisticReportsByTime> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/generate`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseConfiguration(
    options: DevelopGetUniverseConfigurationOptions
  ): Promise<DevelopGetUniverseConfiguration> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/configuration`
      },
      json: true
    }).then((response) => response.body);
  }

  updateUniverseConfiguration(
    options: DevelopUpdateUniverseConfigurationOptions
  ): Promise<DevelopUpdateUniverseConfiguration> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/configuration`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseVIPServersConfiguration(
    options: DevelopGetUniverseVIPServersConfigurationOptions
  ): Promise<DevelopGetUniverseVIPServersConfiguration> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/configuration/vip-servers`
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseTeamCreateSettings(
    options: DevelopGetUniverseTeamCreateSettingsOptions
  ): Promise<DevelopGetUniverseTeamCreateSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/teamcreate`
      },
      json: true
    }).then((response) => response.body);
  }

  removeUserFromUniverseTeamCreate(
    options: DevelopRemoveUserFromUniverseTeamCreateOptions
  ): Promise<DevelopRemoveUserFromUniverseTeamCreate> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/teamcreate/memberships`,
        method: "DELETE",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUniverseTeamCreateMembers(
    options: DevelopGetUsersInUniverseTeamCreateOptions
  ): Promise<DevelopGetUsersInUniverseTeamCreate> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/teamcreate/memberships`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfUniversesTeamCreateAccess(
    options: DevelopGetSelfTeamCreateUniversesAccessOptions
  ): Promise<DevelopGetSelfTeamCreateUniversesAccess> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/teamcreate/memberships`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfManageableGroups(): Promise<DevelopGetSelfGroupsAccess> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/groups/canmanage`
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfNotificationStatisticReports(): Promise<DevelopGetNotificationsStatisticReports> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/notifications/statistic-reports`
      },
      json: true
    }).then((response) => response.body);
  }

  getStudioData(
    options: DevelopGetStudioDataOptions
  ): Promise<DevelopGetStudioData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/studiodata`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  setStudioData(
    options: DevelopSetStudioDataOptions
  ): Promise<DevelopSetStudioData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/studiodata`,
        method: "POST",
        json: options,
        qs: {
          clientKey: options.clientKey
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfUniverses(
    options: DevelopGetSelfUniversesOptions
  ): Promise<DevelopGetSelfUniverses> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/universes`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  createUniverseAlias(
    options: DevelopCreateUniverseAliasOptions
  ): Promise<DevelopCreateUniverseAlias> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.targetId}/aliases`
      },
      json: true
    }).then((response) => response.body);
  }

  deleteUniverseAlias(
    options: DevelopDeleteUniverseAliasOptions
  ): Promise<DevelopDeleteUniverseAlias> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/aliases/${options.name}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUniverseAlias(
    options: DevelopUpdateUniverseAliasOptions
  ): Promise<DevelopUpdateUniverseAlias> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.targetId}/aliases/${options.name}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  createDeveloperProduct(
    options: DevelopCreateDeveloperProductOptions
  ): Promise<DevelopCreateDeveloperProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/developerproducts`,
        method: "POST",
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateDeveloperProduct(
    options: DevelopUpdateDeveloperProductOptions
  ): Promise<DevelopUpdateDeveloperProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/universes/${options.universeId}/developerproducts/${options.developerProductId}/update`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
