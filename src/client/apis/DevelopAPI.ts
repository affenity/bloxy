import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GameUniverseOptions } from "../../structures/Game";
import { PartialGroupOptions } from "../../structures/Group";


export type GetAssetsVoteInformationOptions = {
    assetIds: number[];
}
export type GetAssetsVoteInformation = {
    data: {
        assetId: number;
        hasUserVoted: number;
        canUserVote: number;
        shouldShowVote: boolean;
        upVotes: number;
        downVotes: number;
        reasonForNotAbleToVote: string;
    }[];
}
export type GetGameTemplates = {
    gameTemplateType: string;
    hasTutorials: boolean;
    universe: GameUniverseOptions;
}[];
export type GetGameUpdatesHistoryOptions = {
    universeId: number;
}
export type GetGameUpdatesHistory = {
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
export type PublishGameNotificationOptions = {
    universeId: number;
    gameUpdateText: unknown;
}
export type PublishGameNotification = GetGameUpdatesHistory;
export type FilterPublishGameNotificationOptions = {
    text: string;
}
export type FilterPublishGameNotification = {
    filteredGameUpdateText: string;
    isFiltered: boolean;
    moderationLevel: number;
}
export type GetGroupUniversesOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetGroupUniverses = {
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
}
export type GetPlaceCompatibilitiesOptions = {
    placeId: number;
}
export type GetPlaceCompatibilities = {
    Compatibilities: {
        status: "Good" | string;
        platformName: string;
        crashRatePercentage: number;
    }[];
}
export type UpdatePlaceConfigurationOptions = {
    placeId: number;
    name: string;
    description: string;
}
export type UpdatePlaceConfiguration = {
    id: number;
    universeId: number;
    name: string;
    description: string;
}
export type GetPlaceStatisticsByTypeOptions = {
    placeId: number;
    type: "Revenue" | "RevenuePerVisit" | "AverageVisitLength" | "Visits";
    granularity: "Hourly" | "Daily" | "Monthly";
    divisionType?: "Device" | "Age";
    startTime?: string;
    endTime?: string;
}
export type GetPlaceStatisticsByType = {
    placeId: number;
    dataType: GetPlaceStatisticsByTypeOptions["type"];
    dataGranularity: GetPlaceStatisticsByTypeOptions["granularity"];
    startTime: string;
    endTime: string;
    data: unknown;
}
export type GetPluginsByIdOptions = {
    pluginIds: number[];
}
export type GetPluginsById = {
    data: {
        id: number;
        name: string;
        description: string;
        commentsEnabled: boolean;
        versionId: number;
        created: string;
        updated: string;
    }[];
}
export type UpdatePluginOptions = {
    pluginId: number;
    name: string;
    description: string;
    commentsEnabled: boolean;
}
export type UpdatePlugin = unknown
export type SearchUniversesOptions = {
    q: string;
    sort?: ("+GameCreated" | "-GameCreated" | "+GameName" | "-GameName" | "+RootPlaceName" | "-RootPlaceName" | "+RootPlaceUpdated" | "-RootPlaceUpdated" | "+LastUpdated" | "-LastUpdated")[];
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type SearchUniverses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
}
export type SearchToolboxOptions = {
    category: string;
    keyword?: string;
    sort?: string;
    creatorId?: number;
    num?: number;
    page?: number;
    groupId?: number;
    cacheMode?: "Normal" | "Bypass" | "ForceUpdate";
}
export type SearchToolbox = {
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
}
export type GetUniverseOptions = {
    universeId: number;
}
export type GetUniverse = GameUniverseOptions;
export type GetUniversePermissionsOptions = {
    universeId: number;
}
export type GetUniversePermissions = {
    canManage: boolean;
    canCloudEdit: boolean;
}
export type GetUniversePlacesOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetUniversePlaces = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: unknown[];
}
export type GetUniverseStatisticsReportsOptions = {
    universeId: number;
}
export type GetUniverseStatisticsReports = {
    reports: {
        universeId: number;
        yearDashMonth: string;
        status: "NotGenerated" | string;
        spreadsheetId: string;
    }[];
}
export type GetUniverseStatisticsReportsByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
}
export type GetUniverseStatisticsReportByTime = {
    universeId: number;
    yearDashMonth: string;
    status: "NotGenerated" | string;
    spreadsheetId: string;
}
export type DownloadUniverseStatisticsReportByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
};
export type DownloadUniverseStatisticsReportByTime = unknown;
export type MultiGetUniversesOptions = {
    ids: number[];
}
export type MultiGetUniverses = GameUniverseOptions[];
export type MultiGetUniversesPermissionsOptions = {
    ids: number[];
}
export type MultiGetUniversesPermissions = {
    data: {
        universeId: number;
        canManage: boolean;
        canCloudEdit: boolean;
    }[];
}
export type ActivateUniverseOptions = {
    universeId: number;
}
export type ActivateUniverse = unknown
export type DeactivateUniverseOptions = {
    universeId: number;
}
export type DeactivateUniverse = unknown
export type GenerateUniverseStatisticReportsByTimeOptions = {
    universeId: number;
    yearDashMonth: string;
}
export type GenerateUniverseStatisticReportsByTime = unknown
export type GetUniverseConfigurationOptions = {
    universeId: number;
}
export type GetUniverseConfiguration = {
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
}
export type UpdateUniverseConfigurationOptions = Omit<GetUniverseConfiguration, "id"> & { universeId: number };
export type UpdateUniverseConfiguration = GetUniverseConfiguration;
export type GetUniverseVIPServersConfigurationOptions = {
    universeId: number;
}
export type GetUniverseVIPServersConfiguration = {
    isEnabled: boolean;
    price: number;
    activeServersCount: number;
    activeSubscriptionsCount: number;
}
export type GetUniverseTeamCreateSettingsOptions = {
    universeId: number;
}
export type GetUniverseTeamCreateSettings = {
    isEnabled: boolean;
}
export type UpdateUniverseTeamCreateSettingsOptions = GetUniverseTeamCreateSettingsOptions;
export type UpdateUniverseTeamCreateSettings = unknown
export type RemoveUserFromUniverseTeamCreateOptions = {
    universeId: number;
    userId: number;
}
export type RemoveUserFromUniverseTeamCreate = unknown
export type GetUsersInUniverseTeamCreateOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetUsersInUniverseTeamCreate = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        buildersClubMembershipType: "None" | string;
        userId: number;
        username: string;
        displayName: string;
    }[];
}
export type GetSelfTeamCreateUniversesAccessOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetSelfTeamCreateUniversesAccess = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
}
export type GetSelfGroupsAccess = {
    data: PartialGroupOptions[];
}
export type GetNotificationsStatisticReports = {
    data: {
        UserId: number;
        UniverseId: number;
        Expires: number;
        RootPlaceId: number;
        GameName: string;
    }[];
}
export type GetStudioDataOptions = {
    clientKey: string;
}
export type GetStudioData = unknown;
export type SetStudioDataOptions = {
    clientKey: string;
    data: unknown;
}
export type SetStudioData = {
    success: boolean;
}
export type GetSelfUniversesOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetSelfUniverses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameUniverseOptions[];
}
export type CreateUniverseAliasOptions = {
    name: string;
    type: "Asset" | string;
    targetId: number;
}
export type CreateUniverseAlias = unknown
export type DeleteUniverseAliasOptions = {
    universeId: number;
    name: string;
}
export type DeleteUniverseAlias = unknown
export type UpdateUniverseAliasOptions = CreateUniverseAliasOptions;
export type UpdateUniverseAlias = unknown;
export type CreateDeveloperProductOptions = {
    universeId: number;
    name: string;
    description: string;
    priceInRobux: number;
    iconImageAssetId?: number;
}
export type CreateDeveloperProduct = {
    id: number;
    name: string;
    Description: string;
    shopId: number;
    iconImageAssetId: number;
}
export type UpdateDeveloperProductOptions = {
    universeId: number;
    developerProductId: number;
    Name: string;
    Description: string;
    IconImageAssetId?: number;
    PriceInRobux: number;
}
export type UpdateDeveloperProduct = unknown

export default class DevelopAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://develop.roblox.com/"
        });
    }

    getAssetsVoting (options: GetAssetsVoteInformationOptions): Promise<GetAssetsVoteInformation> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/voting`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameTemplates (): Promise<GetGameTemplates> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gametemplates`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body.data);
    }

    getGameUpdatesHistory (options: GetGameUpdatesHistoryOptions): Promise<GetGameUpdatesHistory> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/${options.universeId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    publishGameUpdateNotification (options: PublishGameNotificationOptions): Promise<PublishGameNotification> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/${options.universeId}`,
                method: "POST",
                json: `"${options.gameUpdateText}"`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    filterGameUpdateNotificationText (options: FilterPublishGameNotificationOptions): Promise<FilterPublishGameNotification> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/filter`,
                method: "POST",
                json: `"${options.text}"`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupUniverses (options: GetGroupUniversesOptions): Promise<GetGroupUniverses> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/universes`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getPlaceCompatibilities (options: GetPlaceCompatibilitiesOptions): Promise<GetPlaceCompatibilities> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/compatibilities`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updatePlaceConfiguration (options: UpdatePlaceConfigurationOptions): Promise<UpdatePlaceConfiguration> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getPlaceStatistics (options: GetPlaceStatisticsByTypeOptions): Promise<GetPlaceStatisticsByType> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/stats/${options.type}`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiPlugins (options: GetPluginsByIdOptions): Promise<GetPluginsById> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins`,
                qs: {
                    pluginIds: options.pluginIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updatePlugin (options: UpdatePluginOptions): Promise<UpdatePlugin> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins/${options.pluginId}`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    searchUniverses (options: SearchUniversesOptions): Promise<SearchUniverses> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/search/universes`,
                qs: {
                    ...options,
                    sort: (options.sort || []).join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    searchToolbox (options: SearchToolboxOptions): Promise<SearchToolbox> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/toolbox/items`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverse (options: GetUniverseOptions): Promise<GetUniverse> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfUniversePermissions (options: GetUniversePermissionsOptions): Promise<GetUniversePermissions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/permissions`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getPlacesInUniverse (options: GetUniversePlacesOptions): Promise<GetUniversePlaces> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/places`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseStatisticReports (options: GetUniverseStatisticsReportsOptions): Promise<GetUniverseStatisticsReports> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseStatisticReportsByTime (options: GetUniverseStatisticsReportsByTimeOptions): Promise<GetUniverseStatisticsReportByTime> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    downloadUniverseStatisticReportsByTime (options: DownloadUniverseStatisticsReportByTimeOptions): Promise<DownloadUniverseStatisticsReportByTime> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/download`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiUniverses (options: MultiGetUniversesOptions): Promise<MultiGetUniverses> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/multiget`,
                qs: {
                    ids: options.ids.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiUniversesPermissions (options: MultiGetUniversesPermissionsOptions): Promise<MultiGetUniversesPermissions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/multiget/permissions`,
                qs: {
                    ids: options.ids.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    activateUniverse (options: ActivateUniverseOptions): Promise<ActivateUniverse> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/activate`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deactivateUniverse (options: DeactivateUniverseOptions): Promise<DeactivateUniverse> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/deactivate`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    generateUniverseStatisticReportsByTime (options: GenerateUniverseStatisticReportsByTimeOptions): Promise<GenerateUniverseStatisticReportsByTime> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/generate`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseConfiguration (options: GetUniverseConfigurationOptions): Promise<GetUniverseConfiguration> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateUniverseConfiguration (options: UpdateUniverseConfigurationOptions): Promise<UpdateUniverseConfiguration> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseVIPServersConfiguration (options: GetUniverseVIPServersConfigurationOptions): Promise<GetUniverseVIPServersConfiguration> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration/vip-servers`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseTeamCreateSettings (options: GetUniverseTeamCreateSettingsOptions): Promise<GetUniverseTeamCreateSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateUniverseTeamCreateSettings (options: UpdateUniverseTeamCreateSettingsOptions): Promise<UpdateUniverseTeamCreateSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    removeUserFromUniverseTeamCreate (options: RemoveUserFromUniverseTeamCreateOptions): Promise<RemoveUserFromUniverseTeamCreate> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate/memberships`,
                method: "DELETE",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseTeamCreateMembers (options: GetUsersInUniverseTeamCreateOptions): Promise<GetUsersInUniverseTeamCreate> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate/memberships`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfUniversesTeamCreateAccess (options: GetSelfTeamCreateUniversesAccessOptions): Promise<GetSelfTeamCreateUniversesAccess> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/teamcreate/memberships`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfManageableGroups (): Promise<GetSelfGroupsAccess> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/groups/canmanage`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfNotificationStatisticReports (): Promise<GetNotificationsStatisticReports> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/notifications/statistic-reports`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getStudioData (options: GetStudioDataOptions): Promise<GetStudioData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/studiodata`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setStudioData (options: SetStudioDataOptions): Promise<SetStudioData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/studiodata`,
                method: "POST",
                json: options,
                qs: {
                    clientKey: options.clientKey
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfUniverses (options: GetSelfUniversesOptions): Promise<GetSelfUniverses> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/universes`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    createUniverseAlias (options: CreateUniverseAliasOptions): Promise<CreateUniverseAlias> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.targetId}/aliases`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteUniverseAlias (options: DeleteUniverseAliasOptions): Promise<DeleteUniverseAlias> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/aliases/${options.name}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateUniverseAlias (options: UpdateUniverseAliasOptions): Promise<UpdateUniverseAlias> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.targetId}/aliases/${options.name}`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    createDeveloperProduct (options: CreateDeveloperProductOptions): Promise<CreateDeveloperProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/developerproducts`,
                method: "POST",
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateDeveloperProduct (options: UpdateDeveloperProductOptions): Promise<UpdateDeveloperProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/developerproducts/${options.developerProductId}/update`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
