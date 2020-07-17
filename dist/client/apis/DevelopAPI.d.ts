import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GameUniverseOptions } from "../../structures/game/GameUniverse";
import { PartialGroupOptions } from "../../structures/group/PartialGroup";
export declare type GetAssetsVoteInformationOptions = {
    assetIds: number[];
};
export declare type GetAssetsVoteInformation = {
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
export declare type GetGameTemplates = {
    gameTemplateType: string;
    hasTutorials: boolean;
    universe: GameUniverseOptions;
}[];
export declare type GetGameUpdatesHistoryOptions = {
    universeId: number;
};
export declare type GetGameUpdatesHistory = {
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
export declare type PublishGameNotificationOptions = {
    universeId: number;
    gameUpdateText: unknown;
};
export declare type PublishGameNotification = GetGameUpdatesHistory;
export declare type FilterPublishGameNotificationOptions = {
    text: string;
};
export declare type FilterPublishGameNotification = {
    filteredGameUpdateText: string;
    isFiltered: boolean;
    moderationLevel: number;
};
export declare type GetGroupUniversesOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetGroupUniverses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
};
export declare type GetPlaceCompatibilitiesOptions = {
    placeId: number;
};
export declare type GetPlaceCompatibilities = {
    Compatibilities: {
        status: "Good" | string;
        platformName: string;
        crashRatePercentage: number;
    }[];
};
export declare type UpdatePlaceConfigurationOptions = {
    placeId: number;
    name: string;
    description: string;
};
export declare type UpdatePlaceConfiguration = {
    id: number;
    universeId: number;
    name: string;
    description: string;
};
export declare type GetPlaceStatisticsByTypeOptions = {
    placeId: number;
    type: "Revenue" | "RevenuePerVisit" | "AverageVisitLength" | "Visits";
    granularity: "Hourly" | "Daily" | "Monthly";
    divisionType?: "Device" | "Age";
    startTime?: string;
    endTime?: string;
};
export declare type GetPlaceStatisticsByType = {
    placeId: number;
    dataType: GetPlaceStatisticsByTypeOptions["type"];
    dataGranularity: GetPlaceStatisticsByTypeOptions["granularity"];
    startTime: string;
    endTime: string;
    data: unknown;
};
export declare type GetPluginsByIdOptions = {
    pluginIds: number[];
};
export declare type GetPluginsById = {
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
export declare type UpdatePluginOptions = {
    pluginId: number;
    name: string;
    description: string;
    commentsEnabled: boolean;
};
export declare type UpdatePlugin = {};
export declare type SearchUniversesOptions = {
    q: string;
    sort?: ("+GameCreated" | "-GameCreated" | "+GameName" | "-GameName" | "+RootPlaceName" | "-RootPlaceName" | "+RootPlaceUpdated" | "-RootPlaceUpdated" | "+LastUpdated" | "-LastUpdated")[];
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type SearchUniverses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
};
export declare type SearchToolboxOptions = {
    category: string;
    keyword?: string;
    sort?: string;
    creatorId?: number;
    num?: number;
    page?: number;
    groupId?: number;
    cacheMode?: "Normal" | "Bypass" | "ForceUpdate";
};
export declare type SearchToolbox = {
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
export declare type GetUniverseOptions = {
    universeId: number;
};
export declare type GetUniverse = GameUniverseOptions;
export declare type GetUniversePermissionsOptions = {
    universeId: number;
};
export declare type GetUniversePermissions = {
    canManage: boolean;
    canCloudEdit: boolean;
};
export declare type GetUniversePlacesOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetUniversePlaces = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: unknown[];
};
export declare type GetUniverseStatisticsReportsOptions = {
    universeId: number;
};
export declare type GetUniverseStatisticsReports = {
    reports: {
        universeId: string;
        yearDashMonth: string;
        status: "NotGenerated" | string;
        spreadsheetId: string;
    }[];
};
export declare type GetUniverseStatisticsReportsByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export declare type GetUniverseStatisticsReportByTime = {
    universeId: string;
    yearDashMonth: string;
    status: "NotGenerated" | string;
    spreadsheetId: string;
};
export declare type DownloadUniverseStatisticsReportByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export declare type DownloadUniverseStatisticsReportByTime = unknown;
export declare type MultiGetUniversesOptions = {
    ids: number[];
};
export declare type MultiGetUniverses = GameUniverseOptions[];
export declare type MultiGetUniversesPermissionsOptions = {
    ids: number[];
};
export declare type MultiGetUniversesPermissions = {
    data: {
        universeId: number;
        canManage: boolean;
        canCloudEdit: boolean;
    }[];
};
export declare type ActivateUniverseOptions = {
    universeId: number;
};
export declare type ActivateUniverse = {};
export declare type DeactivateUniverseOptions = {
    universeId: number;
};
export declare type DeactivateUniverse = {};
export declare type GenerateUniverseStatisticReportsByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export declare type GenerateUniverseStatisticReportsByTime = {};
export declare type GetUniverseConfigurationOptions = {
    universeId: number;
};
export declare type GetUniverseConfiguration = {
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
export declare type UpdateUniverseConfigurationOptions = Omit<GetUniverseConfiguration, "id"> & {
    universeId: number;
};
export declare type UpdateUniverseConfiguration = GetUniverseConfiguration;
export declare type GetUniverseVIPServersConfigurationOptions = {
    universeId: number;
};
export declare type GetUniverseVIPServersConfiguration = {
    isEnabled: boolean;
    price: number;
    activeServersCount: number;
    activeSubscriptionsCount: number;
};
export declare type GetUniverseTeamCreateSettingsOptions = {
    universeId: number;
};
export declare type GetUniverseTeamCreateSettings = {
    isEnabled: boolean;
};
export declare type UpdateUniverseTeamCreateSettingsOptions = GetUniverseTeamCreateSettingsOptions;
export declare type UpdateUniverseTeamCreateSettings = {};
export declare type RemoveUserFromUniverseTeamCreateOptions = {
    universeId: number;
    userId: number;
};
export declare type RemoveUserFromUniverseTeamCreate = {};
export declare type GetUsersInUniverseTeamCreateOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetUsersInUniverseTeamCreate = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        buildersClubMembershipType: "None" | string;
        user: {
            buildersClubMembershipType: "None" | string;
            userId: number;
            username: string;
            displayName: string;
        };
    }[];
};
export declare type GetSelfTeamCreateUniversesAccessOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetSelfTeamCreateUniversesAccess = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
};
export declare type GetSelfGroupsAccess = {
    data: PartialGroupOptions[];
};
export declare type GetNotificationsStatisticReports = {
    data: {
        UserId: number;
        UniverseId: number;
        Expires: number;
        RootPlaceId: number;
        GameName: string;
    }[];
};
export declare type GetStudioDataOptions = {
    clientKey: string;
};
export declare type GetStudioData = unknown;
export declare type SetStudioDataOptions = {
    clientKey: string;
    data: unknown;
};
export declare type SetStudioData = {
    success: boolean;
};
export declare type GetSelfUniversesOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetSelfUniverses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
};
export declare type CreateUniverseAliasOptions = {
    name: string;
    type: "Asset" | string;
    targetId: number;
};
export declare type CreateUniverseAlias = {};
export declare type DeleteUniverseAliasOptions = {
    universeId: number;
    name: string;
};
export declare type DeleteUniverseAlias = {};
export declare type UpdateUniverseAliasOptions = CreateUniverseAliasOptions;
export declare type UpdateUniverseAlias = {};
export declare type CreateDeveloperProductOptions = {
    universeId: number;
    name: string;
    description: string;
    priceInRobux: number;
    iconImageAssetId?: number;
};
export declare type CreateDeveloperProduct = {
    id: number;
    name: string;
    Description: string;
    shopId: number;
    iconImageAssetId: number;
};
export declare type UpdateDeveloperProductOptions = {
    universeId: number;
    developerProductId: number;
    Name: string;
    Description: string;
    IconImageAssetId?: number;
    PriceInRobux: number;
};
export declare type UpdateDeveloperProduct = {};
export default class DevelopAPI extends BaseAPI {
    constructor(client: Client);
    getAssetsVoting(options: GetAssetsVoteInformationOptions): Promise<GetAssetsVoteInformation>;
    getGameTemplates(): Promise<GetGameTemplates>;
    getGameUpdatesHistory(options: GetGameUpdatesHistoryOptions): Promise<GetGameUpdatesHistory>;
    publishGameUpdateNotification(options: PublishGameNotificationOptions): Promise<PublishGameNotification>;
    filterGameUpdateNotificationText(options: FilterPublishGameNotificationOptions): Promise<FilterPublishGameNotification>;
    getGroupUniverses(options: GetGroupUniversesOptions): Promise<GetGroupUniverses>;
    getPlaceCompatibilities(options: GetPlaceCompatibilitiesOptions): Promise<GetPlaceCompatibilities>;
    updatePlaceConfiguration(options: UpdatePlaceConfigurationOptions): Promise<UpdatePlaceConfiguration>;
    getPlaceStatistics(options: GetPlaceStatisticsByTypeOptions): Promise<GetPlaceStatisticsByType>;
    getMultiPlugins(options: GetPluginsByIdOptions): Promise<GetPluginsById>;
    updatePlugin(options: UpdatePluginOptions): Promise<UpdatePlugin>;
    searchUniverses(options: SearchUniversesOptions): Promise<SearchUniverses>;
    searchToolbox(options: SearchToolboxOptions): Promise<SearchToolbox>;
    getUniverse(options: GetUniverseOptions): Promise<GetUniverse>;
    getSelfUniversePermissions(options: GetUniversePermissionsOptions): Promise<GetUniversePermissions>;
    getPlacesInUniverse(options: GetUniversePlacesOptions): Promise<GetUniversePlaces>;
    getUniverseStatisticReports(options: GetUniverseStatisticsReportsOptions): Promise<GetUniverseStatisticsReports>;
    getUniverseStatisticReportsByTime(options: GetUniverseStatisticsReportsByTimeOptions): Promise<GetUniverseStatisticsReportByTime>;
    downloadUniverseStatisticReportsByTime(options: DownloadUniverseStatisticsReportByTimeOptions): Promise<DownloadUniverseStatisticsReportByTime>;
    getMultiUniverses(options: MultiGetUniversesOptions): Promise<MultiGetUniverses>;
    getMultiUniversesPermissions(options: MultiGetUniversesPermissionsOptions): Promise<MultiGetUniversesPermissions>;
    activateUniverse(options: ActivateUniverseOptions): Promise<ActivateUniverse>;
    deactivateUniverse(options: DeactivateUniverseOptions): Promise<DeactivateUniverse>;
    generateUniverseStatisticReportsByTime(options: GenerateUniverseStatisticReportsByTimeOptions): Promise<GenerateUniverseStatisticReportsByTime>;
    getUniverseConfiguration(options: GetUniverseConfigurationOptions): Promise<GetUniverseConfiguration>;
    updateUniverseConfiguration(options: UpdateUniverseConfigurationOptions): Promise<UpdateUniverseConfiguration>;
    getUniverseVIPServersConfiguration(options: GetUniverseVIPServersConfigurationOptions): Promise<GetUniverseVIPServersConfiguration>;
    getUniverseTeamCreateSettings(options: GetUniverseTeamCreateSettingsOptions): Promise<GetUniverseTeamCreateSettings>;
    updateUniverseTeamCreateSettings(options: UpdateUniverseTeamCreateSettingsOptions): Promise<UpdateUniverseTeamCreateSettings>;
    removeUserFromUniverseTeamCreate(options: RemoveUserFromUniverseTeamCreateOptions): Promise<RemoveUserFromUniverseTeamCreate>;
    getUniverseTeamCreateMembers(options: GetUsersInUniverseTeamCreateOptions): Promise<GetUsersInUniverseTeamCreate>;
    getSelfUniversesTeamCreateAccess(options: GetSelfTeamCreateUniversesAccessOptions): Promise<GetSelfTeamCreateUniversesAccess>;
    getSelfManageableGroups(): Promise<GetSelfGroupsAccess>;
    getSelfNotificationStatisticReports(): Promise<GetNotificationsStatisticReports>;
    getStudioData(options: GetStudioDataOptions): Promise<GetStudioData>;
    setStudioData(options: SetStudioDataOptions): Promise<SetStudioData>;
    getSelfUniverses(options: GetSelfUniversesOptions): Promise<GetSelfUniverses>;
    createUniverseAlias(options: CreateUniverseAliasOptions): Promise<CreateUniverseAlias>;
    deleteUniverseAlias(options: DeleteUniverseAliasOptions): Promise<DeleteUniverseAlias>;
    updateUniverseAlias(options: UpdateUniverseAliasOptions): Promise<UpdateUniverseAlias>;
    createDeveloperProduct(options: CreateDeveloperProductOptions): Promise<CreateDeveloperProduct>;
    updateDeveloperProduct(options: UpdateDeveloperProductOptions): Promise<UpdateDeveloperProduct>;
}
