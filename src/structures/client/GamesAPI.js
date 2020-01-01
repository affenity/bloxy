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
		});
	}
}

module.exports = GamesAPI;
