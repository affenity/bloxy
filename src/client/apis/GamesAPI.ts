import BaseAPI from "./BaseAPI";
import Client from "../Client";
import {
  GameUniverseOptions,
  PartialGameUniverse,
  PlaceOptions,
  VIPServerOptions
} from "../../structures/Game";

export type GamesGameServer = {
  id: string;
  maxPlayers: number;
  playing: number;
  fps: number;
  ping: number;
  name: string;
  vipServerId: number;
  accessCode: string;
};

export type GamesGetGameUniversesOptions = {
  universeIds: number[];
};
export type GamesGetGameUniverses = GameUniverseOptions[];
export type GamesGetGameServersByTypeOptions = {
  placeId: number;
  serverType: "Public" | "Friend" | "VIP";
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GamesGetGameServersByType = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: GamesGameServer[];
};
export type GamesGetGamesProductInfoOptions = {
  universeIds: number[];
};
export type GamesGameGamesProductInfo = {
  data: {
    universeId: number;
    isForSale: boolean;
    price: number;
    sellerId: number;
    productId: number;
  }[];
};
export type GamesListGamesOptions = {
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
};
export type GamesListGames = {
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
};
export type GamesMultiGetPlacesOptions = {
  placeIds: number[];
};
export type GamesMultiGetPlaces = PlaceOptions[];
export type GamesMultiGetGameUniversesPlayabilityOptions = {
  universeIds: number[];
};
export type GamesMultiGetGameUniversesPlayability = {
  playabilityStatus: "UnplayableOtherReason" | string;
  isPlayable: boolean;
  universeId: number;
}[];
export type GamesGetGameRecommendationsByAlgorithmOptions = {
  algorithmName: string;
  paginationKey?: string;
  maxRows?: number;
};
export type GamesGetGameRecommendationsByAlgorithm = {
  games: GamesListGames["games"];
  nextPaginationKey: string | null;
};
export type GamesGetGameRecommendationsByGameOptions = {
  universeId: number;
  paginationKey?: string;
  maxRows?: number;
};
export type GamesGetGameRecommendationsByGame =
  GamesGetGameRecommendationsByAlgorithm;
export type GamesGetGameSortsOptions = {
  gameSortsContext?:
    | "GamesDefaultSorts"
    | "GamesAllSorts"
    | "HomeSorts"
    | "ChatSorts"
    | "UnifiedHomeSorts"
    | "GamesPageAbTestSorts1"
    | "GamesPageAbTestSorts2";
};
export type GamesGetGameSorts = {
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
};
export type GamesIsGameFavoritedOptions = {
  universeId: number;
};
export type GamesIsGameFavorited = {
  isFavorited: boolean;
};
export type GamesToggleGameFavoriteOptions = {
  universeId: number;
  favorite: boolean;
};
export type GamesToggleGameFavorite = unknown;
export type GamesGetGameFavoriteCountOptions = {
  universeId: number;
};
export type GamesGetGameFavoriteCount = {
  favoritesCount: number;
};
export type GamesGetGameGamePassesOptions = {
  universeId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GamesGetGameGamePasses = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
  }[];
};
export type GamesGetSelfUniverseVoteStatusOptions = {
  universeId: number;
};
export type GamesGetSelfUniverseVoteStatus = {
  canVote: boolean;
  userVote: boolean;
  reasonForNotVoteable: string;
};
export type GamesGetGamesVotesOptions = {
  universeIds: number[];
};
export type GamesGetGamesVotes = {
  data: {
    number: PartialGameUniverse;
    upVotes: number;
    downVotes: number;
  }[];
};
export type GamesSetSelfGameVoteOptions = {
  universeId: number;
  vote: boolean;
};
export type GamesSetSelfGameVote = unknown;
export type GamesCanSelfInviteUserToVIPServerOptions = {
  userId: number;
};
export type GamesCanSelfInviteUserToVIPServer = {
  canInvite: boolean;
};
export type GamesGetVIPServerOptions = {
  id: number;
};
export type GamesGetVIPServer = VIPServerOptions;
export type GamesUpdateVIPServerOptions = {
  id: number;
  name: string;
  newJoinCode: boolean;
  active: boolean;
};
export type GamesUpdateVIPServer = VIPServerOptions;
export type GamesCreateVIPServerOptions = {
  universeId: number;
  name: string;
  expectedPrice: number;
};
export type GamesCreateVIPServer = GamesGameServer;
export type GamesUpdateVIPServerPermissionsOptions = {
  id: number;
  clanAllowed: boolean;
  enemyClanId: number;
  friendsAllowed: boolean;
  usersToAdd: number[];
  usersToRemove: number[];
};
export type GamesUpdateVIPServerPermissions = {
  clanAllowed: boolean;
  enemyClanId: number;
  friendsAllowed: boolean;
  users: {
    id: number;
    name: string;
    displayName: string;
  }[];
};
export type GamesUpdateVIPServerSubscriptionOptions = {
  id: number;
  active: boolean;
  price: number;
};
export type GamesUpdateVIPServerSubscription = {
  active: boolean;
  expired: boolean;
  expirationDate: string;
  price: number;
};

export default class GamesAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://games.roblox.com/"
    });
  }

  getGames(
    options: GamesGetGameUniversesOptions
  ): Promise<GamesGetGameUniverses> {
    const universeIdsQueryString = `universeIds=${options.universeIds.join(
      "&universeIds="
    )}`;
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games?${universeIdsQueryString}`
      },
      json: true
    }).then((response) => response.body);
  }

  getGameServersByType(
    options: GamesGetGameServersByTypeOptions
  ): Promise<GamesGetGameServersByType> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.placeId}/servers/${options.serverType}`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGamesProductInfo(
    options: GamesGetGamesProductInfoOptions
  ): Promise<GamesGameGamesProductInfo> {
    const universeIdsQueryString = `universeIds=${options.universeIds.join(
      "&universeIds="
    )}`;
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/games-product-info?${universeIdsQueryString}`
      },
      json: true
    }).then((response) => response.body);
  }

  listGames(options: GamesListGamesOptions): Promise<GamesListGames> {
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
          "model.isKeywordSuggestionEnabled":
            options.isKeywordSuggestionEnabled,
          "model.contextCountryRegionId": options.contextCountryRegionId,
          "model.contextUniverseId": options.contextUniverseId,
          "model.pageContext.pageId": options.pageContextPageId,
          "model.pageContext.isSeeAllPage": options.pageContextSeeAll,
          "model.sortPosition": options.sortPosition
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiPlaces(
    options: GamesMultiGetPlacesOptions
  ): Promise<GamesMultiGetPlaces> {
    const placeIdsQueryString = `placeIds=${options.placeIds.join(
      "&placeIds="
    )}`;

    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/multiget-place-details?${placeIdsQueryString}`
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiGamesPlayabilityStatus(
    options: GamesMultiGetGameUniversesPlayabilityOptions
  ): Promise<GamesMultiGetGameUniversesPlayability> {
    const universeIdsQueryString = `universeIds=${options.universeIds.join(
      "&universeIds="
    )}`;
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/multiget-playability-status?${universeIdsQueryString}`
      },
      json: true
    }).then((response) => response.body);
  }

  getGameRecommendationsByAlgorithm(
    options: GamesGetGameRecommendationsByAlgorithmOptions
  ): Promise<GamesGetGameRecommendationsByAlgorithm> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/recommendations/algorithm/${options.algorithmName}`,
        qs: {
          "model.paginationKey": options.paginationKey,
          "model.maxRows": options.maxRows
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getGameRecommendationsByGame(
    options: GamesGetGameRecommendationsByGameOptions
  ): Promise<GamesGetGameRecommendationsByGame> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/recommendations/game/${options.universeId}`,
        qs: {
          "model.paginationKey": options.paginationKey,
          "model.maxRows": options.maxRows
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getGameSorts(options: GamesGetGameSortsOptions): Promise<GamesGetGameSorts> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/sorts`,
        qs: {
          "model.gameSortsContext": options.gameSortsContext
        }
      },
      json: true
    }).then((response) => response.body);
  }

  isGameFavorited(
    options: GamesIsGameFavoritedOptions
  ): Promise<GamesIsGameFavorited> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.universeId}/favorites`
      },
      json: true
    }).then((response) => response.body);
  }

  toggleGameFavorite(
    options: GamesToggleGameFavoriteOptions
  ): Promise<GamesToggleGameFavorite> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.universeId}/favorites`,
        method: "POST",
        json: {
          isFavorited: options.favorite
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getGameFavoriteCount(
    options: GamesGetGameFavoriteCountOptions
  ): Promise<GamesGetGameFavoriteCount> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.universeId}/favorites/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getGameGamePasses(
    options: GamesGetGameGamePassesOptions
  ): Promise<GamesGetGameGamePasses> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.universeId}/game-passes`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfGameVote(
    options: GamesGetSelfUniverseVoteStatusOptions
  ): Promise<GamesGetSelfUniverseVoteStatus> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.universeId}/votes/user`
      },
      json: true
    }).then((response) => response.body);
  }

  getGamesVotes(
    options: GamesGetGamesVotesOptions
  ): Promise<GamesGetGamesVotes> {
    const universeIdsQueryString = `universeIds=${options.universeIds.join(
      "&universeIds="
    )}`;
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/votes?${universeIdsQueryString}`
      },
      json: true
    }).then((response) => response.body);
  }

  setSelfGameVote(
    options: GamesSetSelfGameVoteOptions
  ): Promise<GamesSetSelfGameVote> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/${options.universeId}/user-votes`,
        method: "PATCH",
        json: {
          vote: options.vote
        }
      },
      json: true
    }).then((response) => response.body);
  }

  canSelfInviteUserToVIPServer(
    options: GamesCanSelfInviteUserToVIPServerOptions
  ): Promise<GamesCanSelfInviteUserToVIPServer> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/vip-server/can-invite/${options.userId}`
      },
      json: true
    }).then((response) => response.body);
  }

  getVIPServer(options: GamesGetVIPServerOptions): Promise<GamesGetVIPServer> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/vip-servers/${options.id}`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateVIPServer(
    options: GamesUpdateVIPServerOptions
  ): Promise<GamesUpdateVIPServer> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/vip-servers/${options.id}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  createVIPServer(
    options: GamesCreateVIPServerOptions
  ): Promise<GamesCreateVIPServer> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/vip-servers/${options.universeId}`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateVIPServerPermissions(
    options: GamesUpdateVIPServerPermissionsOptions
  ): Promise<GamesUpdateVIPServerPermissions> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/vip-servers/${options.id}/permissions`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateVIPServerSubscription(
    options: GamesUpdateVIPServerSubscriptionOptions
  ): Promise<GamesUpdateVIPServerSubscription> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/games/vip-servers/${options.id}/subscription`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
