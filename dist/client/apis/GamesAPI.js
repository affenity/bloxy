"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class GamesAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://games.roblox.com/"
        });
    }
    getGames(options) {
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
        }).then(response => response.body);
    }
    getGameServersByType(options) {
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
        }).then(response => response.body);
    }
    getGamesProductInfo(options) {
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
        }).then(response => response.body);
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getMultiPlaces(options) {
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
        }).then(response => response.body);
    }
    getMultiGamesPlayabilityStatus(options) {
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
        }).then(response => response.body);
    }
    getGameRecommendationsByAlgorithm(options) {
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
        }).then(response => response.body);
    }
    getGameRecommendationsByGame(options) {
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
        }).then(response => response.body);
    }
    getGameSorts(options) {
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
        }).then(response => response.body);
    }
    isGameFavorited(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    toggleGameFavorite(options) {
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
        }).then(response => response.body);
    }
    getGameFavoriteCount(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/favorites/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGameGamePasses(options) {
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
        }).then(response => response.body);
    }
    getSelfGameVote(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/games/${options.universeId}/votes/user`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getGamesVotes(options) {
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
        }).then(response => response.body);
    }
    setSelfGameVote(options) {
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
        }).then(response => response.body);
    }
    canSelfInviteUserToVIPServer(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/vip-server/can-invite/${options.userId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getVIPServer(options) {
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
        }).then(response => response.body);
    }
    updateVIPServer(options) {
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
        }).then(response => response.body);
    }
    createVIPServer(options) {
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
        }).then(response => response.body);
    }
    updateVIPServerPermissions(options) {
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
        }).then(response => response.body);
    }
    updateVIPServerSubscription(options) {
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
        }).then(response => response.body);
    }
}
exports.default = GamesAPI;
