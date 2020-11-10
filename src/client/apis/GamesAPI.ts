import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GameUniverseOptions, PartialGameUniverse, PlaceOptions, VIPServerOptions } from "../../structures/Game";


export type GameServer = {
    id: string;
    maxPlayers: number;
    playing: number;
    fps: number;
    ping: number;
    name: string;
    vipServerId: number;
    accessCode: string;
}

export type GetGameUniversesOptions = {
    universeIds: number[];
}
export type GetGameUniverses = GameUniverseOptions[];
export type GetGameServersByTypeOptions = {
    placeId: number;
    serverType: "Public" | "Friend" | "VIP";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetGameServersByType = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameServer[];
}
export type GetGamesProductInfoOptions = {
    universeIds: number[];
}
export type GameGamesProductInfo = {
    data: {
        universeId: number;
        isForSale: boolean;
        price: number;
        sellerId: number;
        productId: number;
    }[];
};
export type ListGamesOptions = {
    sortToken?: string;
    gameFilter?: string;
    timeFilter?: string;
    genreFilter?: string;
    exclusiveStartId?: number;
    sortOrder?: string;
    gameSetTargetId?: number;
    keyword?: string;
    startRows?: number;
    maxRows?: number;
    isKeywordSuggestionEnabled?: boolean;
    contextCountryRegionId?: number;
    contextUniverseId?: number;
    pageContextPageId?: number;
    pageContextSeeAll?: boolean;
    sortPosition?: number;
}
export type ListGames = {
    games: {
        creatorId: number;
        creatorName: string;
        creatorType: "User" | "Group" | string;
        upVotes: number;
        downVotes: number;
        universeId: number;
        placeId: number;
        playerCount: number;
        imageToken: string;
        users: {
            userId: number;
            gameId: string;
        }[];
        isSponsored: boolean;
        nativeAdData: string;
        price: number;
        analyticsIdentifier: string;
    }[];
    suggestedKeyword: string;
    correctedKeyword: string;
    filteredKeyword: string;
    hasMoreRows: boolean;
    nextPageExclusiveStartId: number;
    featuredSearchUniverseId: number;
    emphasis: boolean;
    cutOffIndex: number;
    algorithm: string;
    algorithmQueryType: string;
    suggestionAlgorithm: string;
}
export type MultiGetPlacesOptions = {
    placeIds: number[];
}
export type MultiGetPlaces = PlaceOptions[];
export type MultiGetGameUniversesPlayabilityOptions = {
    universeIds: number[];
}
export type MultiGetGameUniversesPlayability = {
    playabilityStatus: "UnplayableOtherReason" | string;
    isPlayable: boolean;
    universeId: number;
}[];
export type GetGameRecommendationsByAlgorithmOptions = {
    algorithmName: string;
    paginationKey?: string;
    maxRows?: number;
}
export type GetGameRecommendationsByAlgorithm = {
    games: ListGames["games"];
    nextPaginationKey: string | null;
};
export type GetGameRecommendationsByGameOptions = {
    universeId: number;
    paginationKey?: string;
    maxRows?: number;
}
export type GetGameRecommendationsByGame = GetGameRecommendationsByAlgorithm;
export type GetGameSortsOptions = {
    gameSortsContext?: "GamesDefaultSorts" | "GamesAllSorts" | "HomeSorts" | "ChatSorts" | "UnifiedHomeSorts" | "GamesPageAbTestSorts1" | "GamesPageAbTestSorts2";
}
export type GetGameSorts = {
    sorts: {
        token: string;
        name: string;
        displayName: string;
        gameSetTargetId: null;
        timeOptionsAvailable: boolean;
        genreOptionsAvailable: boolean;
        numberOfRows: number;
        numberOfGames: null;
        isDefaultSort: boolean;
        contextUniverseId: null;
        contextCountryRegionId: number;
        tokenExpiryInSeconds: number;
    }[];
    timeFilters: {
        token: string;
        name: string;
        tokenExpiryInSeconds: number;
    }[];
    genreFilters: {
        token: string;
        name: string;
        tokenExpiryInSeconds: number;
    }[];
    pageContext: {
        pageId: string;
        isSeeAllPage: boolean;
    };
}
export type IsGameFavoritedOptions = {
    universeId: number;
}
export type IsGameFavorited = {
    isFavorited: boolean;
}
export type ToggleGameFavoriteOptions = {
    universeId: number;
    favorite: boolean;
}
export type ToggleGameFavorite = unknown;
export type GetGameFavoriteCountOptions = {
    universeId: number;
}
export type GetGameFavoriteCount = {
    favoritesCount: number;
}
export type GetGameGamePassesOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetGameGamePasses = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        id: number;
        name: string;
        displayName: string;
        productId: number;
        price: number;
    }[];
}
export type GetSelfUniverseVoteStatusOptions = {
    universeId: number;
}
export type GetSelfUniverseVoteStatus = {
    canVote: boolean;
    userVote: boolean;
    reasonForNotVoteable: string;
}
export type GetGamesVotesOptions = {
    universeIds: number[];
}
export type GetGamesVotes = {
    data: {
        number: PartialGameUniverse;
        upVotes: number;
        downVotes: number;
    }[];
};
export type SetSelfGameVoteOptions = {
    universeId: number;
    vote: boolean;
}
export type SetSelfGameVote = unknown
export type CanSelfInviteUserToVIPServerOptions = {
    userId: number;
}
export type CanSelfInviteUserToVIPServer = {
    canInvite: boolean;
}
export type GetVIPServerOptions = {
    id: number;
}
export type GetVIPServer = VIPServerOptions;
export type UpdateVIPServerOptions = {
    id: number;
    name: string;
    newJoinCode: boolean;
    active: boolean;
}
export type UpdateVIPServer = VIPServerOptions;
export type CreateVIPServerOptions = {
    universeId: number;
    name: string;
    expectedPrice: number;
}
export type CreateVIPServer = GameServer;
export type UpdateVIPServerPermissionsOptions = {
    id: number;
    clanAllowed: boolean;
    enemyClanId: number;
    friendsAllowed: boolean;
    usersToAdd: number[];
    usersToRemove: number[];
}
export type UpdateVIPServerPermissions = {
    clanAllowed: boolean;
    enemyClanId: number;
    friendsAllowed: boolean;
    users: {
        id: number;
        name: string;
        displayName: string;
    }[];
}
export type UpdateVIPServerSubscriptionOptions = {
    id: number;
    active: boolean;
    price: number;
}
export type UpdateVIPServerSubscription = {
    active: boolean;
    expired: boolean;
    expirationDate: string;
    price: number;
}

export default class GamesAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://games.roblox.com/"
        });
    }

    getGames (options: GetGameUniversesOptions): Promise<GetGameUniverses> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games`,
                qs: {
                    universeIds: options.universeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameServersByType (options: GetGameServersByTypeOptions): Promise<GetGameServersByType> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.placeId}/servers/${options.serverType}`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGamesProductInfo (options: GetGamesProductInfoOptions): Promise<GameGamesProductInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/games-product-info`,
                qs: {
                    universeIds: options.universeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    listGames (options: ListGamesOptions): Promise<ListGames> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/list`,
                qs: {
                    "model.sortToken": options.sortToken,
                    "model.gameFilter": options.gameFilter,
                    "model.timeFilter": options.timeFilter,
                    "model.genreFilter": options.genreFilter,
                    "model.exclusiveStartId": options.exclusiveStartId,
                    "model.sortOrder": options.sortOrder,
                    "model.gameSetTargetId": options.gameSetTargetId,
                    "model.keyword": options.keyword,
                    "model.startRows": options.startRows,
                    "model.maxRows": options.maxRows,
                    "model.isKeywordSuggestionEnabled": options.isKeywordSuggestionEnabled,
                    "model.contextCountryRegionId": options.contextCountryRegionId,
                    "model.contextUniverseId": options.contextUniverseId,
                    "model.pageContext.pageId": options.pageContextPageId,
                    "model.pageContext.isSeeAllPage": options.pageContextSeeAll,
                    "model.sortPosition": options.sortPosition
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiPlaces (options: MultiGetPlacesOptions): Promise<MultiGetPlaces> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/multiget-place-details`,
                qs: {
                    placeIds: options.placeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiGamesPlayabilityStatus (options: MultiGetGameUniversesPlayabilityOptions): Promise<MultiGetGameUniversesPlayability> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/multiget-playability-status`,
                qs: {
                    universeIds: options.universeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameRecommendationsByAlgorithm (options: GetGameRecommendationsByAlgorithmOptions): Promise<GetGameRecommendationsByAlgorithm> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/recommendations/algorithm/${options.algorithmName}`,
                qs: {
                    "model.paginationKey": options.paginationKey,
                    "model.maxRows": options.maxRows
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameRecommendationsByGame (options: GetGameRecommendationsByGameOptions): Promise<GetGameRecommendationsByGame> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/recommendations/game/${options.universeId}`,
                qs: {
                    "model.paginationKey": options.paginationKey,
                    "model.maxRows": options.maxRows
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameSorts (options: GetGameSortsOptions): Promise<GetGameSorts> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/sorts`,
                qs: {
                    "model.gameSortsContext": options.gameSortsContext
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    isGameFavorited (options: IsGameFavoritedOptions): Promise<IsGameFavorited> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    toggleGameFavorite (options: ToggleGameFavoriteOptions): Promise<ToggleGameFavorite> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites`,
                method: "POST",
                json: {
                    isFavorited: options.favorite
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameFavoriteCount (options: GetGameFavoriteCountOptions): Promise<GetGameFavoriteCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameGamePasses (options: GetGameGamePassesOptions): Promise<GetGameGamePasses> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/game-passes`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfGameVote (options: GetSelfUniverseVoteStatusOptions): Promise<GetSelfUniverseVoteStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/votes/user`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGamesVotes (options: GetGamesVotesOptions): Promise<GetGamesVotes> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/votes`,
                qs: {
                    universeIds: options.universeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setSelfGameVote (options: SetSelfGameVoteOptions): Promise<SetSelfGameVote> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/user-votes`,
                method: "PATCH",
                json: {
                    vote: options.vote
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    canSelfInviteUserToVIPServer (options: CanSelfInviteUserToVIPServerOptions): Promise<CanSelfInviteUserToVIPServer> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/vip-server/can-invite/${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getVIPServer (options: GetVIPServerOptions): Promise<GetVIPServer> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/vip-servers/${options.id}`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateVIPServer (options: UpdateVIPServerOptions): Promise<UpdateVIPServer> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/vip-servers/${options.id}`,
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

    createVIPServer (options: CreateVIPServerOptions): Promise<CreateVIPServer> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/vip-servers/${options.universeId}`,
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

    updateVIPServerPermissions (options: UpdateVIPServerPermissionsOptions): Promise<UpdateVIPServerPermissions> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/vip-servers/${options.id}/permissions`,
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

    updateVIPServerSubscription (options: UpdateVIPServerSubscriptionOptions): Promise<UpdateVIPServerSubscription> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/vip-servers/${options.id}/subscription`,
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
}
