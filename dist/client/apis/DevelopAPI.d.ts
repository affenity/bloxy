import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { PartialGroupOptions } from "../../old_structures/Group";
import { ISOString } from "../../types/GenericTypes";
export declare type DevelopGameUniverseOptions = {
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
export declare type DevelopAgeDataAvailable = {
    isAgeDataAvailable: boolean;
};
export declare type DevelopProductAggregation = {
    developerProductName: string;
    revenueAmount: number;
};
export declare type DevelopProductAggregations = {
    allDevicesDeveloperProductRevenue: DevelopProductAggregation[];
    developerProductRevenueByDevice: {
        Computer: DevelopProductAggregation[];
        Phone: DevelopProductAggregation[];
        Tablet: DevelopProductAggregation[];
        Console: DevelopProductAggregation[];
    };
};
export declare type DevelopTeamCreateSessionMember = {
    id: number;
    name: string;
    displayName: string;
};
export declare type DevelopTeamCreateSessionMembers = {
    data: DevelopTeamCreateSessionMember[];
};
export declare type DevelopTeamCreateEnabled = {
    isEnabled: boolean;
};
export declare type DevelopTeamCreateMember = {
    buildersClubMembershipType: "None" | "RobloxPremium";
    userId: number;
    username: string;
    displayName: string;
};
export declare type DevelopTeamCreateMembers = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: DevelopTeamCreateMember[];
};
export declare type DevelopInvitedTeamCreatePlace = {
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
export declare type DevelopInvitedTeamCreatePlaces = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: DevelopInvitedTeamCreatePlace[];
};
export declare type DevelopGetUniverseLiveStatsOptions = {
    universeId: number;
};
export declare type DevelopGetUniverseLiveStats = {
    totalPlayerCount: number;
    playerCountsByDeviceType: Record<string, number>;
    gameCount: number;
};
export declare type DevelopGetUniverseRevenueReportsOptions = {
    universeId: number;
};
export declare type DevelopGetUniverseRevenueReport = {
    month: number;
    year: number;
    RevenueReportStatus: "NotGenerated" | "ReadyForDownload";
};
export declare type DevelopGetUniverseRevenueReports = {
    monthlyRevenueReportStatusList: DevelopGetUniverseRevenueReport[];
};
export declare type DevelopGetUniverseRevenueReportOptions = {
    universeId: number;
    yearDashMonth: `${number}-${number}`;
};
export declare type DevelopCreatorDashboardMetadata = {
    isPlayFabDataSourceChartsEnabled: boolean;
    playFabDataSourceChartsAvailableByKPITypes: string[];
};
export declare type DevelopGetAssetsVoteInformationOptions = {
    assetIds: number[];
};
export declare type DevelopGetAssetsVoteInformation = {
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
export declare type DevelopGetGameTemplates = {
    gameTemplateType: string;
    hasTutorials: boolean;
    universe: DevelopGameUniverseOptions;
}[];
export declare type DevelopGetGameUpdatesHistoryOptions = {
    universeId: number;
};
export declare type DevelopGetGameUpdatesHistory = {
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
export declare type DevelopPublishGameNotificationOptions = {
    universeId: number;
    gameUpdateText: unknown;
};
export declare type DevelopPublishGameNotification = DevelopGetGameUpdatesHistory;
export declare type DevelopFilterPublishGameNotificationOptions = {
    text: string;
};
export declare type DevelopFilterPublishGameNotification = {
    filteredGameUpdateText: string;
    isFiltered: boolean;
    moderationLevel: number;
};
export declare type DevelopGetGroupUniversesOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type DevelopGetGroupUniverses = {
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
export declare type DevelopGetPlaceCompatibilitiesOptions = {
    placeId: number;
};
export declare type DevelopGetPlaceCompatibilities = {
    Compatibilities: {
        status: "Good" | string;
        platformName: string;
        crashRatePercentage: number;
    }[];
};
export declare type DevelopUpdatePlaceConfigurationOptions = {
    placeId: number;
    name: string;
    description: string;
};
export declare type DevelopUpdatePlaceConfiguration = {
    id: number;
    universeId: number;
    name: string;
    description: string;
};
export declare type DevelopGetPlaceStatisticsByTypeOptions = {
    placeId: number;
    type: "Revenue" | "RevenuePerVisit" | "AverageVisitLength" | "Visits";
    granularity?: "Hourly" | "Daily" | "Monthly";
    divisionType?: "Device" | "Age";
    startTime?: string;
    endTime?: string;
};
export declare type DevelopGetPlaceStatisticsByType = {
    placeId: number;
    dataType: DevelopGetPlaceStatisticsByTypeOptions["type"];
    dataGranularity: DevelopGetPlaceStatisticsByTypeOptions["granularity"];
    startTime: string;
    endTime: string;
    data: unknown;
};
export declare type DevelopGetPluginsByIdOptions = {
    pluginIds: number[];
};
export declare type DevelopGetPluginsById = {
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
export declare type DevelopUpdatePluginOptions = {
    pluginId: number;
    name: string;
    description: string;
    commentsEnabled: boolean;
};
export declare type DevelopUpdatePlugin = unknown;
export declare type DevelopSearchUniversesOptions = {
    q: {
        creator: "user" | "group" | "team";
        archived?: boolean;
        active?: boolean;
        groups?: unknown[];
        search?: string;
    };
    sort?: ("+GameCreated" | "-GameCreated" | "+GameName" | "-GameName" | "+RootPlaceName" | "-RootPlaceName" | "+RootPlaceUpdated" | "-RootPlaceUpdated" | "+LastUpdated" | "-LastUpdated")[];
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type DevelopSearchUniverseData = {
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
export declare type DevelopSearchUniverses = {
    previousPageCursor: string | null;
    nextPageCursor: string | null;
    data: DevelopSearchUniverseData[];
};
export declare type DevelopSearchToolboxOptions = {
    category: string;
    keyword?: string;
    sort?: string;
    creatorId?: number;
    num?: number;
    page?: number;
    groupId?: number;
    cacheMode?: "Normal" | "Bypass" | "ForceUpdate";
};
export declare type DevelopSearchToolbox = {
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
export declare type DevelopGetUniverseOptions = {
    universeId: number;
};
export declare type DevelopGetUniverse = DevelopGameUniverseOptions;
export declare type DevelopGetUniversePermissionsOptions = {
    universeId: number;
};
export declare type DevelopGetUniversePermissions = {
    canManage: boolean;
    canCloudEdit: boolean;
};
export declare type DevelopGetUniversePlacesOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type DevelopGetUniversePlaces = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: unknown[];
};
export declare type DevelopGetUniverseStatisticsReportsOptions = {
    universeId: number;
};
export declare type DevelopGetUniverseStatisticsReports = {
    reports: {
        universeId: number;
        yearDashMonth: string;
        status: "NotGenerated" | string;
        spreadsheetId: string;
    }[];
};
export declare type DevelopGetUniverseStatisticsReportsByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export declare type DevelopGetUniverseStatisticsReportByTime = {
    universeId: number;
    yearDashMonth: string;
    status: "NotGenerated" | string;
    spreadsheetId: string;
};
export declare type DevelopDownloadUniverseStatisticsReportByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export declare type DevelopDownloadUniverseStatisticsReportByTime = unknown;
export declare type DevelopMultiGetUniversesOptions = {
    ids: number[];
};
export declare type DevelopMultiGetUniverses = DevelopGameUniverseOptions[];
export declare type DevelopMultiGetUniversesPermissionsOptions = {
    ids: number[];
};
export declare type DevelopMultiGetUniversesPermissions = {
    data: {
        universeId: number;
        canManage: boolean;
        canCloudEdit: boolean;
    }[];
};
export declare type DevelopActivateUniverseOptions = {
    universeId: number;
};
export declare type DevelopActivateUniverse = unknown;
export declare type DevelopDeactivateUniverseOptions = {
    universeId: number;
};
export declare type DevelopDeactivateUniverse = unknown;
export declare type DevelopGenerateUniverseStatisticReportsByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export declare type DevelopGenerateUniverseStatisticReportsByTime = unknown;
export declare type DevelopGetUniverseConfigurationOptions = {
    universeId: number;
};
export declare type DevelopGetUniverseConfiguration = {
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
export declare type DevelopUpdateUniverseConfigurationOptions = Omit<DevelopGetUniverseConfiguration, "id"> & {
    universeId: number;
};
export declare type DevelopUpdateUniverseConfiguration = DevelopGetUniverseConfiguration;
export declare type DevelopGetUniverseVIPServersConfigurationOptions = {
    universeId: number;
};
export declare type DevelopGetUniverseVIPServersConfiguration = {
    isEnabled: boolean;
    price: number;
    activeServersCount: number;
    activeSubscriptionsCount: number;
};
export declare type DevelopGetUniverseTeamCreateSettingsOptions = {
    universeId: number;
};
export declare type DevelopGetUniverseTeamCreateSettings = {
    isEnabled: boolean;
};
export declare type DevelopUpdateUniverseTeamCreateSettingsOptions = DevelopGetUniverseTeamCreateSettingsOptions;
export declare type DevelopUpdateUniverseTeamCreateSettings = unknown;
export declare type DevelopRemoveUserFromUniverseTeamCreateOptions = {
    universeId: number;
    userId: number;
};
export declare type DevelopRemoveUserFromUniverseTeamCreate = unknown;
export declare type DevelopGetUsersInUniverseTeamCreateOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type DevelopGetUsersInUniverseTeamCreate = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        buildersClubMembershipType: "None" | string;
        userId: number;
        username: string;
        displayName: string;
    }[];
};
export declare type DevelopGetSelfTeamCreateUniversesAccessOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type DevelopGetSelfTeamCreateUniversesAccess = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: DevelopGameUniverseOptions[];
};
export declare type DevelopGetSelfGroupsAccess = {
    data: PartialGroupOptions[];
};
export declare type DevelopGetNotificationsStatisticReports = {
    data: {
        UserId: number;
        UniverseId: number;
        Expires: number;
        RootPlaceId: number;
        GameName: string;
    }[];
};
export declare type DevelopGetStudioDataOptions = {
    clientKey: string;
};
export declare type DevelopGetStudioData = unknown;
export declare type DevelopSetStudioDataOptions = {
    clientKey: string;
    data: unknown;
};
export declare type DevelopSetStudioData = {
    success: boolean;
};
export declare type DevelopGetSelfUniversesOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type DevelopGetSelfUniverses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: DevelopGameUniverseOptions[];
};
export declare type DevelopCreateUniverseAliasOptions = {
    name: string;
    type: "Asset" | string;
    targetId: number;
};
export declare type DevelopCreateUniverseAlias = unknown;
export declare type DevelopDeleteUniverseAliasOptions = {
    universeId: number;
    name: string;
};
export declare type DevelopDeleteUniverseAlias = unknown;
export declare type DevelopUpdateUniverseAliasOptions = DevelopCreateUniverseAliasOptions;
export declare type DevelopUpdateUniverseAlias = unknown;
export declare type DevelopCreateDeveloperProductOptions = {
    universeId: number;
    name: string;
    description: string;
    priceInRobux: number;
    iconImageAssetId?: number;
};
export declare type DevelopCreateDeveloperProduct = {
    id: number;
    name: string;
    Description: string;
    shopId: number;
    iconImageAssetId: number;
};
export declare type DevelopUpdateDeveloperProductOptions = {
    universeId: number;
    developerProductId: number;
    Name: string;
    Description: string;
    IconImageAssetId?: number;
    PriceInRobux: number;
};
export declare type DevelopUpdateDeveloperProduct = unknown;
export declare class DevelopAPI extends BaseAPI {
    constructor(client: Client);
    getGameTemplates(): Promise<DevelopGetGameTemplates>;
    getGameUpdatesHistory(options: DevelopGetGameUpdatesHistoryOptions): Promise<DevelopGetGameUpdatesHistory>;
    publishGameUpdateNotification(options: DevelopPublishGameNotificationOptions): Promise<DevelopPublishGameNotification>;
    filterGameUpdateNotificationText(options: DevelopFilterPublishGameNotificationOptions): Promise<DevelopFilterPublishGameNotification>;
    getGroupUniverses(options: DevelopGetGroupUniversesOptions): Promise<DevelopGetGroupUniverses>;
    getPlaceCompatibilities(options: DevelopGetPlaceCompatibilitiesOptions): Promise<DevelopGetPlaceCompatibilities>;
    updatePlaceConfiguration(options: DevelopUpdatePlaceConfigurationOptions): Promise<DevelopUpdatePlaceConfiguration>;
    getPlaceStatistics(options: DevelopGetPlaceStatisticsByTypeOptions): Promise<DevelopGetPlaceStatisticsByType>;
    isPlaceAgeDataAvailable(options: {
        placeId: number;
    }): Promise<DevelopAgeDataAvailable>;
    getDeveloperProductAggregation(options: {
        placeId: number;
        timeFrame: "Hourly" | "Daily" | "Monthly";
    }): Promise<DevelopProductAggregations>;
    getCreatorDashboardMetadata(): Promise<DevelopCreatorDashboardMetadata>;
    getTeamCreateSessionMembers(options: {
        placeId: number;
        limit?: 10 | 25 | 50 | 100;
        cursor?: string;
    }): Promise<DevelopTeamCreateSessionMembers>;
    setTeamCreateEnabled(options: {
        universeId: number;
    } & DevelopTeamCreateEnabled): Promise<boolean>;
    getMultiPlugins(options: DevelopGetPluginsByIdOptions): Promise<DevelopGetPluginsById>;
    updatePlugin(options: DevelopUpdatePluginOptions): Promise<DevelopUpdatePlugin>;
    searchUniverses(options: DevelopSearchUniversesOptions): Promise<DevelopSearchUniverses>;
    searchToolbox(options: DevelopSearchToolboxOptions): Promise<DevelopSearchToolbox>;
    getUniverse(options: DevelopGetUniverseOptions): Promise<DevelopGetUniverse>;
    getUniverseLiveStats(options: DevelopGetUniverseLiveStatsOptions): Promise<DevelopGetUniverseLiveStats>;
    getSelfUniversePermissions(options: DevelopGetUniversePermissionsOptions): Promise<DevelopGetUniversePermissions>;
    getPlacesInUniverse(options: DevelopGetUniversePlacesOptions): Promise<DevelopGetUniversePlaces>;
    getUniverseRevenueReports(options: DevelopGetUniverseRevenueReportsOptions): Promise<DevelopGetUniverseRevenueReports>;
    getUniverseRevenueReport(options: DevelopGetUniverseRevenueReportOptions): Promise<DevelopGetUniverseRevenueReport>;
    downloadUniverseRevenueReport(options: DevelopGetUniverseRevenueReportOptions): Promise<unknown>;
    getUniverseStatisticReports(options: DevelopGetUniverseStatisticsReportsOptions): Promise<DevelopGetUniverseStatisticsReports>;
    getUniverseStatisticReportsByTime(options: DevelopGetUniverseStatisticsReportsByTimeOptions): Promise<DevelopGetUniverseStatisticsReportByTime>;
    downloadUniverseStatisticReportsByTime(options: DevelopDownloadUniverseStatisticsReportByTimeOptions): Promise<DevelopDownloadUniverseStatisticsReportByTime>;
    getMultiUniverses(options: DevelopMultiGetUniversesOptions): Promise<DevelopMultiGetUniverses>;
    getMultiUniversesPermissions(options: DevelopMultiGetUniversesPermissionsOptions): Promise<DevelopMultiGetUniversesPermissions>;
    activateUniverse(options: DevelopActivateUniverseOptions): Promise<DevelopActivateUniverse>;
    deactivateUniverse(options: DevelopDeactivateUniverseOptions): Promise<DevelopDeactivateUniverse>;
    generateUniverseStatisticReportsByTime(options: DevelopGenerateUniverseStatisticReportsByTimeOptions): Promise<DevelopGenerateUniverseStatisticReportsByTime>;
    getUniverseConfiguration(options: DevelopGetUniverseConfigurationOptions): Promise<DevelopGetUniverseConfiguration>;
    updateUniverseConfiguration(options: DevelopUpdateUniverseConfigurationOptions): Promise<DevelopUpdateUniverseConfiguration>;
    getUniverseVIPServersConfiguration(options: DevelopGetUniverseVIPServersConfigurationOptions): Promise<DevelopGetUniverseVIPServersConfiguration>;
    getUniverseTeamCreateSettings(options: DevelopGetUniverseTeamCreateSettingsOptions): Promise<DevelopGetUniverseTeamCreateSettings>;
    removeUserFromUniverseTeamCreate(options: DevelopRemoveUserFromUniverseTeamCreateOptions): Promise<DevelopRemoveUserFromUniverseTeamCreate>;
    getUniverseTeamCreateMembers(options: DevelopGetUsersInUniverseTeamCreateOptions): Promise<DevelopGetUsersInUniverseTeamCreate>;
    getSelfUniversesTeamCreateAccess(options: DevelopGetSelfTeamCreateUniversesAccessOptions): Promise<DevelopGetSelfTeamCreateUniversesAccess>;
    getSelfManageableGroups(): Promise<DevelopGetSelfGroupsAccess>;
    getSelfNotificationStatisticReports(): Promise<DevelopGetNotificationsStatisticReports>;
    getStudioData(options: DevelopGetStudioDataOptions): Promise<DevelopGetStudioData>;
    setStudioData(options: DevelopSetStudioDataOptions): Promise<DevelopSetStudioData>;
    getSelfUniverses(options: DevelopGetSelfUniversesOptions): Promise<DevelopGetSelfUniverses>;
    createUniverseAlias(options: DevelopCreateUniverseAliasOptions): Promise<DevelopCreateUniverseAlias>;
    deleteUniverseAlias(options: DevelopDeleteUniverseAliasOptions): Promise<DevelopDeleteUniverseAlias>;
    updateUniverseAlias(options: DevelopUpdateUniverseAliasOptions): Promise<DevelopUpdateUniverseAlias>;
    createDeveloperProduct(options: DevelopCreateDeveloperProductOptions): Promise<DevelopCreateDeveloperProduct>;
    updateDeveloperProduct(options: DevelopUpdateDeveloperProductOptions): Promise<DevelopUpdateDeveloperProduct>;
}
