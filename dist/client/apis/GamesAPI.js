"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class GamesAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://games.roblox.com/"
        });
    }
    getGames(options) {
        const universeIdsQueryString = `universeIds=${options.universeIds.join("&universeIds=")}`;
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games?${universeIdsQueryString}`
            },
            json: true
        }).then((response) => response.body);
    }
    getGameServersByType(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.placeId}/servers/${options.serverType}`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGamesProductInfo(options) {
        const universeIdsQueryString = `universeIds=${options.universeIds.join("&universeIds=")}`;
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/games-product-info?${universeIdsQueryString}`
            },
            json: true
        }).then((response) => response.body);
    }
    listGames(options) {
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
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiPlaces(options) {
        const placeIdsQueryString = `placeIds=${options.placeIds.join("&placeIds=")}`;
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/multiget-place-details?${placeIdsQueryString}`
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiGamesPlayabilityStatus(options) {
        const universeIdsQueryString = `universeIds=${options.universeIds.join("&universeIds=")}`;
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/multiget-playability-status?${universeIdsQueryString}`
            },
            json: true
        }).then((response) => response.body);
    }
    getGameRecommendationsByAlgorithm(options) {
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
    getGameRecommendationsByGame(options) {
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
    getGameSorts(options) {
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
    isGameFavorited(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites`
            },
            json: true
        }).then((response) => response.body);
    }
    toggleGameFavorite(options) {
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
    getGameFavoriteCount(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites/count`
            },
            json: true
        }).then((response) => response.body);
    }
    getGameGamePasses(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/game-passes`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfGameVote(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/votes/user`
            },
            json: true
        }).then((response) => response.body);
    }
    getGamesVotes(options) {
        const universeIdsQueryString = `universeIds=${options.universeIds.join("&universeIds=")}`;
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/votes?${universeIdsQueryString}`
            },
            json: true
        }).then((response) => response.body);
    }
    setSelfGameVote(options) {
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
    canSelfInviteUserToVIPServer(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/vip-server/can-invite/${options.userId}`
            },
            json: true
        }).then((response) => response.body);
    }
    getVIPServer(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/vip-servers/${options.id}`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    updateVIPServer(options) {
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
    createVIPServer(options) {
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
    updateVIPServerPermissions(options) {
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
    updateVIPServerSubscription(options) {
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
exports.GamesAPI = GamesAPI;
