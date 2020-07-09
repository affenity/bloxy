import BaseAPI from "./BaseAPI";
import Client from "../Client";
import GameUniverse from "../../structures/game/GameUniverse";
import PartialGameUniverse from "../../structures/game/PartialGameUniverse";
import PartialUser from "../../structures/user/PartialUser";
import PartialGroup from "../../structures/group/PartialGroup";
import { CreatorType } from "../../util/constants";
import PartialPlace from "../../structures/game/PartialPlace";
import Place from "../../structures/game/Place";
import VIPServer from "../../structures/game/VIPServer";


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
export type GetGameUniverses = GameUniverse[];
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
    universe: PartialGameUniverse;
    forSale: boolean;
    price: number;
    sellerId: number;
}[];
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
        creator: PartialUser | PartialGroup;
        creatorType: CreatorType;
        upVotes: number;
        downVotes: number;
        universe: PartialGameUniverse;
        place: PartialPlace;
        playerCount: number;
        imageToken: string;
        users: {
            user: PartialUser;
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
export type MultiGetPlaces = Place[];
export type MultiGetGameUniversesPlayabilityOptions = {
    universeIds: number[];
}
export type MultiGetGameUniversesPlayability = {
    playabilityStatus: "UnplayableOtherReason" | string;
    isPlayable: boolean;
    universe: PartialGameUniverse;
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
export type ToggleGameFavorite = {};
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
    universe: PartialGameUniverse;
    upVotes: number;
    downVotes: number;
}[];
export type SetSelfGameVoteOptions = {
    universeId: number;
    vote: boolean;
}
export type SetSelfGameVote = {}
export type CanSelfInviteUserToVIPServerOptions = {
    userId: number;
}
export type CanSelfInviteUserToVIPServer = {
    canInvite: boolean;
}
export type GetVIPServerOptions = {
    id: number;
}
export type GetVIPServer = VIPServer;
export type UpdateVIPServerOptions = {
    id: number;
    name: string;
    newJoinCode: boolean;
    active: boolean;
}
export type UpdateVIPServer = VIPServer;
export type CreateVIPServerOptions = {
    universeId: number;
    name: string;
    expectedPrice: number;
}
export type CreateVIPServer = {
    id: string;
    maxPlayers: number;
    playing: number;
    fps: number;
    ping: number;
    name: string;
    vipServerId: number;
    accessCode: string;
}
export type UpdateVIPServerPermissionsOptions = {
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
    users: PartialUser[];
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
        }).then((response: { body: any }) => response.body.data.map((val: any) => new GameUniverse(val, this.client)));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body.data.map((val: any) => ({
            universe: new PartialGameUniverse({
                id: val.universeId
            }, this.client),
            forSale: val.isForSale,
            price: val.price,
            seller: val.sellerId
        })));
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
        }).then((response: { body: any }) => ({
            ...response.body,
            games: response.body.games.map((val: any) => ({
                ...val,
                creatorType: val.creatorType === "Group" ? CreatorType.GROUP : CreatorType.USER,
                creator: val.creatorType === "Group" ? new PartialGroup({
                    id: val.creatorId,
                    name: val.creatorName
                }, this.client) : new PartialUser({
                    id: val.creatorId,
                    name: val.creatorName
                }, this.client),
                upVotes: val.totalUpVotes,
                downVotes: val.totalDownVotes,
                universe: new PartialGameUniverse({
                    id: val.universeId,
                    name: val.name
                }, this.client),
                place: new PartialPlace({
                    id: val.placeId
                }, this.client),
                users: val.users.map((userData: any) => ({
                    user: new PartialUser({
                        id: userData.userId
                    }, this.client),
                    gameId: userData.gameId
                }))
            }))
        }));
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
        }).then((response: { body: any }) => response.body.map((val: any) => new Place(val, this.client)));
    }

    getMultiGamesPlayabilitySttus (options: MultiGetGameUniversesPlayabilityOptions): Promise<MultiGetGameUniversesPlayability> {
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
        }).then((response: { body: any }) => response.body.map((val: any) => ({
            ...val,
            universe: new PartialGameUniverse(val.universeId, this.client)
        })));
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
        }).then((response: { body: any }) => ({
            ...response.body,
            games: response.body.games.map((val: any) => ({
                ...val,
                creatorType: val.creatorType === "Group" ? CreatorType.GROUP : CreatorType.USER,
                creator: val.creatorType === "Group" ? new PartialGroup({
                    id: val.creatorId,
                    name: val.creatorName
                }, this.client) : new PartialUser({
                    id: val.creatorId,
                    name: val.creatorName
                }, this.client),
                upVotes: val.totalUpVotes,
                downVotes: val.totalDownVotes,
                universe: new PartialGameUniverse({
                    id: val.universeId,
                    name: val.name
                }, this.client),
                place: new PartialPlace({
                    id: val.placeId
                }, this.client),
                users: val.users.map((userData: any) => ({
                    user: new PartialUser({
                        id: userData.userId
                    }, this.client),
                    gameId: userData.gameId
                }))
            }))
        }));
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
        }).then((response: { body: any }) => ({
            ...response.body,
            games: response.body.games.map((val: any) => ({
                ...val,
                creatorType: val.creatorType === "Group" ? CreatorType.GROUP : CreatorType.USER,
                creator: val.creatorType === "Group" ? new PartialGroup({
                    id: val.creatorId,
                    name: val.creatorName
                }, this.client) : new PartialUser({
                    id: val.creatorId,
                    name: val.creatorName
                }, this.client),
                upVotes: val.totalUpVotes,
                downVotes: val.totalDownVotes,
                universe: new PartialGameUniverse({
                    id: val.universeId,
                    name: val.name
                }, this.client),
                place: new PartialPlace({
                    id: val.placeId
                }, this.client),
                users: val.users.map((userData: any) => ({
                    user: new PartialUser({
                        id: userData.userId
                    }, this.client),
                    gameId: userData.gameId
                }))
            }))
        }));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body.map((val: any) => ({
            ...val,
            universe: new PartialGameUniverse({
                id: val.id
            }, this.client)
        })));
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => response.body);
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
        }).then((response: { body: any }) => new VIPServer(response.body, this.client));
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
        }).then((response: { body: any }) => new VIPServer(response.body, this.client));
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
        }).then((response: { body: any }) => response.body);
    }
}
