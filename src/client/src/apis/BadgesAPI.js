class BadgesAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://badges.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getBadgeInfo (badgeId) {
		return this.request({
			url: `v1/badges/${badgeId}`
		}, {}, {
			disableAuth: true
		});
	}

	updateBadge ({ badgeId, name, description, enabled }) {
		return this.request({
			url: `v1/badges/${badgeId}`,
			method: "PATCH",
			json: {
				name,
				description,
				enabled
			}
		});
	}

	getUniverseBadges ({ universeId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/universes/${universeId}/badges`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getUserBadges ({ userId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/users/${userId}/badges`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getUserBadgeTimestamps ({ userId, badges }) {
		return this.request({
			url: `v1/users/${userId}/badges/awarded-dates`,
			qs: {
				badgeIds: badges.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	deleteBadge (badgeId) {
		return this.request({
			url: `v1/user/badges/${badgeId}`,
			method: "DELETE"
		});
	}
}

module.exports = BadgesAPI;
