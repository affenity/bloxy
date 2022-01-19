import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { GameUniverseOptions, PartialGameUniverse, PlaceOptions, VIPServerOptions } from "../../old_structures/Game";
export declare type GamesGameServer = {
    id: string;
    maxPlayers: number;
    playing: number;
    fps: number;
    ping: number;
    name: string;
    vipServerId: number;
    accessCode: string;
};
export declare type GamesGetGameUniversesOptions = {
    universeIds: number[];
};
export declare type GamesGetGameUniverses = GameUniverseOptions[];
export declare type GamesGetGameServersByTypeOptions = {
    placeId: number;
    serverType: "Public" | "Friend" | "VIP";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GamesGetGameServersByType = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GamesGameServer[];
};
export declare type GamesGetGamesProductInfoOptions = {
    universeIds: number[];
};
export declare type GamesGameGamesProductInfo = {
    data: {
        universeId: number;
        isForSale: boolean;
        price: number;
        sellerId: number;
        productId: number;
    }[];
};
export declare type GamesListGamesOptions = {
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
export declare type GamesListGames = {
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
export declare type GamesMultiGetPlacesOptions = {
    placeIds: number[];
};
export declare type GamesMultiGetPlaces = PlaceOptions[];
export declare type GamesMultiGetGameUniversesPlayabilityOptions = {
    universeIds: number[];
};
export declare type GamesMultiGetGameUniversesPlayability = {
    playabilityStatus: "UnplayableOtherReason" | string;
    isPlayable: boolean;
    universeId: number;
}[];
export declare type GamesGetGameRecommendationsByAlgorithmOptions = {
    algorithmName: string;
    paginationKey?: string;
    maxRows?: number;
};
export declare type GamesGetGameRecommendationsByAlgorithm = {
    games: GamesListGames["games"];
    nextPaginationKey: string | null;
};
export declare type GamesGetGameRecommendationsByGameOptions = {
    universeId: number;
    paginationKey?: string;
    maxRows?: number;
};
export declare type GamesGetGameRecommendationsByGame = GamesGetGameRecommendationsByAlgorithm;
export declare type GamesGetGameSortsOptions = {
    gameSortsContext?: "GamesDefaultSorts" | "GamesAllSorts" | "HomeSorts" | "ChatSorts" | "UnifiedHomeSorts" | "GamesPageAbTestSorts1" | "GamesPageAbTestSorts2";
};
export declare type GamesGetGameSorts = {
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
export declare type GamesIsGameFavoritedOptions = {
    universeId: number;
};
export declare type GamesIsGameFavorited = {
    isFavorited: boolean;
};
export declare type GamesToggleGameFavoriteOptions = {
    universeId: number;
    favorite: boolean;
};
export declare type GamesToggleGameFavorite = unknown;
export declare type GamesGetGameFavoriteCountOptions = {
    universeId: number;
};
export declare type GamesGetGameFavoriteCount = {
    favoritesCount: number;
};
export declare type GamesGetGameGamePassesOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GamesGetGameGamePasses = {
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
export declare type GamesGetSelfUniverseVoteStatusOptions = {
    universeId: number;
};
export declare type GamesGetSelfUniverseVoteStatus = {
    canVote: boolean;
    userVote: boolean;
    reasonForNotVoteable: string;
};
export declare type GamesGetGamesVotesOptions = {
    universeIds: number[];
};
export declare type GamesGetGamesVotes = {
    data: {
        number: PartialGameUniverse;
        upVotes: number;
        downVotes: number;
    }[];
};
export declare type GamesSetSelfGameVoteOptions = {
    universeId: number;
    vote: boolean;
};
export declare type GamesSetSelfGameVote = unknown;
export declare type GamesCanSelfInviteUserToVIPServerOptions = {
    userId: number;
};
export declare type GamesCanSelfInviteUserToVIPServer = {
    canInvite: boolean;
};
export declare type GamesGetVIPServerOptions = {
    id: number;
};
export declare type GamesGetVIPServer = VIPServerOptions;
export declare type GamesUpdateVIPServerOptions = {
    id: number;
    name: string;
    newJoinCode: boolean;
    active: boolean;
};
export declare type GamesUpdateVIPServer = VIPServerOptions;
export declare type GamesCreateVIPServerOptions = {
    universeId: number;
    name: string;
    expectedPrice: number;
};
export declare type GamesCreateVIPServer = GamesGameServer;
export declare type GamesUpdateVIPServerPermissionsOptions = {
    id: number;
    clanAllowed: boolean;
    enemyClanId: number;
    friendsAllowed: boolean;
    usersToAdd: number[];
    usersToRemove: number[];
};
export declare type GamesUpdateVIPServerPermissions = {
    clanAllowed: boolean;
    enemyClanId: number;
    friendsAllowed: boolean;
    users: {
        id: number;
        name: string;
        displayName: string;
    }[];
};
export declare type GamesUpdateVIPServerSubscriptionOptions = {
    id: number;
    active: boolean;
    price: number;
};
export declare type GamesUpdateVIPServerSubscription = {
    active: boolean;
    expired: boolean;
    expirationDate: string;
    price: number;
};
export declare class GamesAPI extends BaseAPI {
    constructor(client: Client);
    getGames(options: GamesGetGameUniversesOptions): Promise<GamesGetGameUniverses>;
    getGameServersByType(options: GamesGetGameServersByTypeOptions): Promise<GamesGetGameServersByType>;
    getGamesProductInfo(options: GamesGetGamesProductInfoOptions): Promise<GamesGameGamesProductInfo>;
    listGames(options: GamesListGamesOptions): Promise<GamesListGames>;
    getMultiPlaces(options: GamesMultiGetPlacesOptions): Promise<GamesMultiGetPlaces>;
    getMultiGamesPlayabilityStatus(options: GamesMultiGetGameUniversesPlayabilityOptions): Promise<GamesMultiGetGameUniversesPlayability>;
    getGameRecommendationsByAlgorithm(options: GamesGetGameRecommendationsByAlgorithmOptions): Promise<GamesGetGameRecommendationsByAlgorithm>;
    getGameRecommendationsByGame(options: GamesGetGameRecommendationsByGameOptions): Promise<GamesGetGameRecommendationsByGame>;
    getGameSorts(options: GamesGetGameSortsOptions): Promise<GamesGetGameSorts>;
    isGameFavorited(options: GamesIsGameFavoritedOptions): Promise<GamesIsGameFavorited>;
    toggleGameFavorite(options: GamesToggleGameFavoriteOptions): Promise<GamesToggleGameFavorite>;
    getGameFavoriteCount(options: GamesGetGameFavoriteCountOptions): Promise<GamesGetGameFavoriteCount>;
    getGameGamePasses(options: GamesGetGameGamePassesOptions): Promise<GamesGetGameGamePasses>;
    getSelfGameVote(options: GamesGetSelfUniverseVoteStatusOptions): Promise<GamesGetSelfUniverseVoteStatus>;
    getGamesVotes(options: GamesGetGamesVotesOptions): Promise<GamesGetGamesVotes>;
    setSelfGameVote(options: GamesSetSelfGameVoteOptions): Promise<GamesSetSelfGameVote>;
    canSelfInviteUserToVIPServer(options: GamesCanSelfInviteUserToVIPServerOptions): Promise<GamesCanSelfInviteUserToVIPServer>;
    getVIPServer(options: GamesGetVIPServerOptions): Promise<GamesGetVIPServer>;
    updateVIPServer(options: GamesUpdateVIPServerOptions): Promise<GamesUpdateVIPServer>;
    createVIPServer(options: GamesCreateVIPServerOptions): Promise<GamesCreateVIPServer>;
    updateVIPServerPermissions(options: GamesUpdateVIPServerPermissionsOptions): Promise<GamesUpdateVIPServerPermissions>;
    updateVIPServerSubscription(options: GamesUpdateVIPServerSubscriptionOptions): Promise<GamesUpdateVIPServerSubscription>;
}
