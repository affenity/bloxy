class GamesAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://games.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getGamesInfo (gameIds) {
		return this.request({
			url: "v1/games",
			qs: {
				universeIds: gameIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGameServers ({ placeId, serverType, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/games/${placeId}/servers/${serverType}`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGamesProductInfo (universeIds) {
		return this.request({
			url: "v1/games/games-product-info",
			qs: {
				universeIds: universeIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	listGames (options) {
		const queries = {};
		Object.keys(options).map(k => {
			queries[`model.${k}`] = options[k];
		});

		return this.request({
			url: "v1/games/list",
			qs: queries
		}, {}, {
			disableAuth: true
		});
	}

	getPlacesInfo (placeIds) {
		return this.request({
			url: "v1/games/multiget-place-details",
			qs: {
				placeIds: placeIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGamesPlayabilityStatus (universeIds) {
		return this.request({
			url: "v1/games/multiget-playability-status",
			qs: {
				universeIds: universeIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGamesRecommendation ({ algorithm, page, limit }) {
		return this.request({
			url: `v1/games/recommendations/algorithm/${algorithm}`,
			qs: {
				"model.paginationKey": page,
				"model.maxRows": limit
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGamesRecommendationByUniverse ({ universeId, page, limit }) {
		return this.request({
			url: `v1/games/recommendations/game/${universeId}`,
			qs: {
				"model.paginationKey": page,
				"model.maxRows": limit
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGameSorts (context) {
		return this.request({
			url: "v1/games/sorts",
			qs: {
				"model.gameSortsContext": context
			}
		}, {}, {
			disableAuth: true
		});
	}

	isGameFavorited (universeId) {
		return this.request({
			url: `v1/games${universeId}/favorites`
		});
	}

	favoriteGame ({ universeId, favorited }) {
		return this.request({
			url: `v1/games/${universeId}/favorites`,
			method: "POST",
			json: {
				isFavorited: favorited
			}
		});
	}

	getGameFavoritesCount (universeId) {
		return this.request({
			url: `v1/games/${universeId}/favorites/count`
		}, {}, {
			disableAuth: true
		});
	}

	getGamePasses ({ universeId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/games/${universeId}/game-passes`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGameVoteStatus (universeId) {
		return this.request({
			url: `v1/games/${universeId}/votes/user`
		});
	}

	getGamesVoteStatus (universeIds) {
		return this.request({
			url: "v1/games/votes",
			qs: {
				universeIds: universeIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	updateGameVote ({ universeId, voted }) {
		return this.request({
			url: `v1/games/${universeId}/user-votes`,
			method: "PATCH",
			json: {
				vote: voted
			}
		});
	}

	getVIPServerInfo (id) {
		return this.request({
			url: `v1/vip-servers/${id}`
		});
	}

	updateVIPServer ({ id, name, newCode, active }) {
		return this.request({
			url: `v1/vip-servers/${id}`,
			method: "PATCH",
			json: {
				name,
				newJoinCode: newCode,
				active
			}
		});
	}

	createVIPServer ({ universeId, name, price }) {
		return this.request({
			url: `v1/games/vip-servers/${universeId}`,
			method: "POST",
			json: {
				name,
				expectedPrice: price
			}
		});
	}

	updateVIPServerPermissions ({ id, data }) {
		return this.request({
			url: `v1/vip-server/${id}/permissions`,
			method: "PATCH",
			json: data
		});
	}

	updateVIPServerSubscription ({ id, active, price }) {
		return this.request({
			url: `v1/vip-servers/${id}/subscription`,
			method: "PATCH",
			json: {
				active,
				price
			}
		});
	}

	getGameMediaData (universeId) {
		return this.request({
			url: `v2/games/${universeId}/media`
		}, {}, {
			disableAuth: true
		});
	}

	getGroupGames (groupId) {
		return this.request({
			url: `v2/groups/${groupId}/games`
		}, {}, {
			disableAuth: true
		});
	}

	getUserGames (userId) {
		return this.request({
			url: `v2/users/${userId}/games`
		}, {}, {
			disableAuth: true
		});
	}
}

module.exports = GamesAPI;
