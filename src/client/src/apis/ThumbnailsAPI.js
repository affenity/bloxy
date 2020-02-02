class ThumbnailsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://thumbnails.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getThumbnailAssets ({ assetIds, returnPolicy, size, format }) {
		return this.request({
			url: "v1/assets",
			qs: {
				assetIds: assetIds.join("\n"),
				returnPolicy,
				size,
				format
			}
		});
	}

	getBadgesIcons ({ badgeIds, size, format }) {
		return this.request({
			url: "v1/badges/icons",
			qs: {
				badgeIds: badgeIds.join("\n"),
				size,
				format
			}
		});
	}

	getBundlesThumbnails ({ bundleIds, size, format }) {
		return this.request({
			url: "v1/bundles/thumbnails",
			qs: {
				bundleIds: bundleIds.join("\n"),
				size,
				format
			}
		});
	}

	getGamePassesIcons ({ gamePassIds, size, format }) {
		return this.request({
			url: "v1/game-passes",
			qs: {
				gamePassIds: gamePassIds.join("\n"),
				size,
				format
			}
		});
	}

	getGamesThumbnails ({ universeId, thumbnailIds, size, format }) {
		return this.request({
			url: `v1/games/${universeId}/thumbnails`,
			qs: {
				thumbnailIds: thumbnailIds.join("\n"),
				size,
				format
			}
		});
	}

	getGamesIcons ({ universeIds, returnPolicy, size, format }) {
		return this.request({
			url: "v1/games/icons",
			qs: {
				universeIds: universeIds.join("\n"),
				returnPolicy,
				size,
				format
			}
		});
	}

	getMultiGamesThumbnails ({ universeIds, amount, defaults, size, format }) {
		return this.request({
			url: "v1/games/multiget/thumbnails",
			qs: {
				universeIds: universeIds.join("\n"),
				countPerUniverse: amount,
				defaults,
				size,
				format
			}
		});
	}

	getGroupsIcons ({ groupIds, size, format }) {
		return this.request({
			url: "v1/groups/icons",
			qs: {
				groupIds: groupIds.join("\n"),
				size,
				format
			}
		});
	}

	getUsersAvatars ({ userIds, size, format }) {
		return this.request({
			url: "v1/users/avatar",
			qs: {
				userIds: userIds.join("\n"),
				size,
				format
			}
		});
	}

	getUsersAvatarHeadshots ({ userIds, size, format }) {
		return this.request({
			url: "v1/users/avatar-headshot",
			qs: {
				userIds: userIds.join("\n"),
				size,
				format
			}
		});
	}

	getBatch (options) {
		return this.request({
			url: "v1/batch",
			method: "POST",
			json: options
		});
	}
}

module.exports = ThumbnailsAPI;
