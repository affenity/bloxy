import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GameUniverseOptions } from "../../structures/game/GameUniverse";
import { PlaceOptions } from "../../structures/game/Place";
import { VIPServerOptions } from "../../structures/game/VIPServer";
export declare type GameServer = {
    id: string;
    maxPlayers: number;
    playing: number;
    fps: number;
    ping: number;
    name: string;
    vipServerId: number;
    accessCode: string;
};
export declare type GetGameUniversesOptions = {
    universeIds: number[];
};
export declare type GetGameUniverses = {
    data: GameUniverseOptions[];
};
export declare type GetGameServersByTypeOptions = {
    placeId: number;
    serverType: "Public" | "Friend" | "VIP";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetGameServersByType = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GameServer[];
};
export declare type GetGamesProductInfoOptions = {
    universeIds: number[];
};
export declare type GameGamesProductInfo = {
    data: {
        universeId: number;
        isForSale: boolean;
        price: number;
        sellerId: number;
        productId: number;
    }[];
};
export declare type ListGamesOptions = {
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
export declare type ListGames = {
    games: {
        creatorId: number;
        creatorName: string;
        creatorType: "Group" | "User";
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
export declare type MultiGetPlacesOptions = {
    placeIds: number[];
};
export declare type MultiGetPlaces = PlaceOptions[];
export declare type MultiGetGameUniversesPlayabilityOptions = {
    universeIds: number[];
};
export declare type MultiGetGameUniversesPlayability = {
    playabilityStatus: "UnplayableOtherReason" | string;
    isPlayable: boolean;
    universeId: number;
}[];
export declare type GetGameRecommendationsByAlgorithmOptions = {
    algorithmName: string;
    paginationKey?: string;
    maxRows?: number;
};
export declare type GetGameRecommendationsByAlgorithm = {
    games: ListGames["games"];
    nextPaginationKey: string | null;
};
export declare type GetGameRecommendationsByGameOptions = {
    universeId: number;
    paginationKey?: string;
    maxRows?: number;
};
export declare type GetGameRecommendationsByGame = GetGameRecommendationsByAlgorithm;
export declare type GetGameSortsOptions = {
    gameSortsContext?: "GamesDefaultSorts" | "GamesAllSorts" | "HomeSorts" | "ChatSorts" | "UnifiedHomeSorts" | "GamesPageAbTestSorts1" | "GamesPageAbTestSorts2";
};
export declare type GetGameSorts = {
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
export declare type IsGameFavoritedOptions = {
    universeId: number;
};
export declare type IsGameFavorited = {
    isFavorited: boolean;
};
export declare type ToggleGameFavoriteOptions = {
    universeId: number;
    favorite: boolean;
};
export declare type ToggleGameFavorite = {};
export declare type GetGameFavoriteCountOptions = {
    universeId: number;
};
export declare type GetGameFavoriteCount = {
    favoritesCount: number;
};
export declare type GetGameGamePassesOptions = {
    universeId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetGameGamePasses = {
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
export declare type GetSelfUniverseVoteStatusOptions = {
    universeId: number;
};
export declare type GetSelfUniverseVoteStatus = {
    canVote: boolean;
    userVote: boolean;
    reasonForNotVoteable: string;
};
export declare type GetGamesVotesOptions = {
    universeIds: number[];
};
export declare type GetGamesVotes = {
    data: {
        id: number;
        upVotes: number;
        downVotes: number;
    }[];
};
export declare type SetSelfGameVoteOptions = {
    universeId: number;
    vote: boolean;
};
export declare type SetSelfGameVote = {};
export declare type CanSelfInviteUserToVIPServerOptions = {
    userId: number;
};
export declare type CanSelfInviteUserToVIPServer = {
    canInvite: boolean;
};
export declare type GetVIPServerOptions = {
    id: number;
};
export declare type GetVIPServer = VIPServerOptions;
export declare type UpdateVIPServerOptions = {
    id: number;
    name: string;
    newJoinCode: boolean;
    active: boolean;
};
export declare type UpdateVIPServer = VIPServerOptions;
export declare type CreateVIPServerOptions = {
    universeId: number;
    name: string;
    expectedPrice: number;
};
export declare type CreateVIPServer = {
    id: string;
    maxPlayers: number;
    playing: number;
    fps: number;
    ping: number;
    name: string;
    vipServerId: number;
    accessCode: string;
};
export declare type UpdateVIPServerPermissionsOptions = {
    clanAllowed: boolean;
    enemyClanId: number;
    friendsAllowed: boolean;
    usersToAdd: number[];
    usersToRemove: number[];
};
export declare type UpdateVIPServerPermissions = {
    clanAllowed: boolean;
    enemyClanId: number;
    friendsAllowed: boolean;
    users: {
        id: number;
        name: string;
        displayName: string;
    }[];
};
export declare type UpdateVIPServerSubscriptionOptions = {
    id: number;
    active: boolean;
    price: number;
};
export declare type UpdateVIPServerSubscription = {
    active: boolean;
    expired: boolean;
    expirationDate: string;
    price: number;
};
export default class GamesAPI extends BaseAPI {
    constructor(client: Client);
    getGames(options: GetGameUniversesOptions): Promise<GetGameUniverses>;
    getGameServersByType(options: GetGameServersByTypeOptions): Promise<GetGameServersByType>;
    getGamesProductInfo(options: GetGamesProductInfoOptions): Promise<GameGamesProductInfo>;
    listGames(options: ListGamesOptions): Promise<ListGames>;
    getMultiPlaces(options: MultiGetPlacesOptions): Promise<MultiGetPlaces>;
    getMultiGamesPlayabilityStatus(options: MultiGetGameUniversesPlayabilityOptions): Promise<MultiGetGameUniversesPlayability>;
    getGameRecommendationsByAlgorithm(options: GetGameRecommendationsByAlgorithmOptions): Promise<GetGameRecommendationsByAlgorithm>;
    getGameRecommendationsByGame(options: GetGameRecommendationsByGameOptions): Promise<GetGameRecommendationsByGame>;
    getGameSorts(options: GetGameSortsOptions): Promise<GetGameSorts>;
    isGameFavorited(options: IsGameFavoritedOptions): Promise<IsGameFavorited>;
    toggleGameFavorite(options: ToggleGameFavoriteOptions): Promise<ToggleGameFavorite>;
    getGameFavoriteCount(options: GetGameFavoriteCountOptions): Promise<GetGameFavoriteCount>;
    getGameGamePasses(options: GetGameGamePassesOptions): Promise<GetGameGamePasses>;
    getSelfGameVote(options: GetSelfUniverseVoteStatusOptions): Promise<GetSelfUniverseVoteStatus>;
    getGamesVotes(options: GetGamesVotesOptions): Promise<GetGamesVotes>;
    setSelfGameVote(options: SetSelfGameVoteOptions): Promise<SetSelfGameVote>;
    canSelfInviteUserToVIPServer(options: CanSelfInviteUserToVIPServerOptions): Promise<CanSelfInviteUserToVIPServer>;
    getVIPServer(options: GetVIPServerOptions): Promise<GetVIPServer>;
    updateVIPServer(options: UpdateVIPServerOptions): Promise<UpdateVIPServer>;
    createVIPServer(options: CreateVIPServerOptions): Promise<CreateVIPServer>;
}
