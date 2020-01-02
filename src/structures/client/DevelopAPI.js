/**
 * API wrapper for develop.roblox.com
 * @type {ClientDevelopAPI}
 */
class ClientDevelopAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://develop.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAssetsVoting (assetIds) {
		return this.request({
			url: "v1/assets/voting",
			qs: {
				assetIds: assetIds.join("\n")
			}
		});
	}

	getGameTemplates () {
		return this.request({
			url: "v1/gametemplates"
		}, {}, {
			disableAuth: true
		});
	}

	getUniverseGameUpdates (universeId) {
		return this.request({
			url: `v1/gameUpdateNotifications/${universeId}`
		}, {}, {
			disableAuth: true
		});
	}

	sendUniverseGameUpdate ({ universeId, message }) {
		return this.request({
			url: `v1/gameUpdateNotifications/${universeId}`,
			method: "POST",
			json: {
				universeId,
				gameUpdateText: message
			}
		});
	}

	filterText (text) {
		return this.request({
			url: "v1/gameUpdateNotifications/filter",
			method: "POST",
			json: {
				gameUpdateText: text
			}
		});
	}

	getGroupUniverses ({ groupId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/universes`,
			qs: {
				groupId,
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getPlaceCompatibilities (placeId) {
		return this.request({
			url: `v1/places/${placeId}/compatibilities`,
			qs: {
				placeId
			}
		});
	}

	updatePlace ({ placeId, name, description }) {
		return this.request({
			url: `v1/places/${placeId}`,
			method: "PATCH",
			json: {
				name,
				description
			}
		});
	}

	getPlaceStatistics ({ placeId, statType, granularity, divisionType, start, end }) {
		return this.request({
			url: `v1/places/${placeId}/stats/${statType}`,
			qs: {
				granularity,
				divisionType,
				startTime: start,
				endTime: end
			}
		});
	}

	getPluginsInfo (pluginIds) {
		return this.request({
			url: "v1/plugins",
			qs: {
				pluginIds
			}
		}, {}, {
			disableAuth: true
		});
	}

	updatePluginInfo ({ pluginId, name, description, enableComments }) {
		return this.request({
			url: `v1/plugins/${pluginId}`,
			method: "PATCH",
			json: {
				name,
				description,
				commentsEnabled: enableComments
			}
		});
	}

	searchUniverses ({ query, sort, sortOrder, limit, cursor }) {
		return this.request({
			url: "v1/search/universes",
			qs: {
				q: query,
				sort,
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getToolboxItems (options) {
		return this.request({
			url: "v1/toolbox/items",
			qs: options
		});
	}

	getUniverseInfo (universeId) {
		return this.request({
			url: `v1/universes/${universeId}`
		}, {}, {
			disableAuth: true
		});
	}

	getUniversePermissions (universeId) {
		return this.request({
			url: `v1/universes/${universeId}/permissions`
		});
	}

	getUniversePlaces ({ universeId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/universes/${universeId}/places`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	listUniverseStatisticReports (universeId) {
		return this.request({
			url: `v1/universes/${universeId}/statistic-reports`
		});
	}

	getUniverseStats ({ universeId, year, month }) {
		return this.request({
			url: `v1/universes/${universeId}/statistic-reports/${year}${month}`
		});
	}

	downloadUniverseStats ({ universeId, year, month }) {
		return this.request({
			url: `v1/universes/${universeId}/statistic-reports/${year}${month}/download`
		});
	}

	getUniversesById (universeIds) {
		return this.request({
			url: "v1/universes/multiget",
			qs: {
				ids: universeIds.join("\n")
			}
		});
	}

	getUniversesPermissions (universeIds) {
		return this.request({
			url: "v1/universes/multiget/permissions",
			qs: {
				universeIds: universeIds.join("\n")
			}
		});
	}

	activateUniverse (universeId) {
		return this.request({
			url: `v1/universes/${universeId}/activate`,
			method: "POST"
		});
	}

	deactivateUniverse (universe) {
		return this.request({
			url: `v1/universes/${universe}/deactivate`,
			method: "POST"
		});
	}

	generateUniverseStatisticsReport ({ universeId, year, month }) {
		return this.request({
			url: `v1/universes/${universeId}/statistic-reports/${year}${month}/generate`,
			method: "POST"
		});
	}

	getUniverseConfiguration (universeId) {
		return this.request({
			url: `v1/universes/${universeId}/configuration`
		});
	}

	updateUniverseConfiguration ({ universeId, options }) {
		return this.request({
			url: `v1/universes/${universeId}/configuration`,
			method: "PATCH",
			json: options
		});
	}

	getUniverseVIPServerConfiguration (universeId) {
		return this.request({
			url: `v1/universes/${universeId}/configuration/vip-servers`
		});
	}

	getTeamCreateSettings (universeId) {
		return this.request({
			url: `v1/universe/${universeId}/teamcreate`
		});
	}

	updateTeamCreateSettings ({ universeId, enabled }) {
		return this.request({
			url: `v1/universes/${universeId}/teamcreate`,
			method: "PATCH",
			json: {
				isEnabled: enabled
			}
		});
	}

	removeUserFromTeamCreate ({ universeId, userId }) {
		return this.request({
			url: `v1/universes/${universeId}/teamcreate/memberships`,
			method: "DELETE",
			json: {
				userId
			}
		});
	}

	listUsersInTeamCreate ({ universeId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/universes/${universeId}/teamcreate/memberships`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	addUserToTeamCreate ({ universeId, userId }) {
		return this.request({
			url: `v1/universes/${universeId}/teamcreate/memberships`,
			method: "POST",
			json: {
				userId
			}
		});
	}

	getTeamCreateAccesses ({ sortOrder, limit, cursor }) {
		return this.request({
			url: "v1/user/teamcreate/memberships",
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getManageableGroups () {
		return this.request({
			url: "v1/user/groups/canmanage"
		});
	}

	getNotificationStatisticReports () {
		return this.request({
			url: "v1/user/notifications/statistic-reports"
		});
	}

	getStudioData (key) {
		return this.request({
			url: "v1/user/studiodata",
			qs: {
				clientKey: key
			}
		});
	}

	setStudioData ({ key, data }) {
		return this.request({
			url: "v1/user/studiodata",
			method: "POST",
			json: data,
			qs: {
				clientKey: key
			}
		});
	}

	listUniverses ({ sortOrder, limit, cursor }) {
		return this.request({
			url: "v1/user/universes",
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	setUniverseAlias ({ universeId, name, aliasType, id }) {
		return this.request({
			url: `v1/universes/${universeId}/aliases`,
			json: {
				name,
				type: aliasType,
				targetId: id
			}
		});
	}

	deleteUniverseAlias ({ universeId, name }) {
		return this.request({
			url: `v1/universes/${universeId}/aliases/${name}`,
			method: "DELETE"
		});
	}

	updateUniverseAlias ({ universeId, oldName, newName, aliasType, id }) {
		return this.request({
			url: `v1/universes/${universeId}/aliases/${oldName}`,
			method: "PATCH",
			json: {
				name: newName,
				type: aliasType,
				targetId: id
			}
		});
	}

	updateDeveloperProduct ({ universeId, productId, name, description, iconId, price }) {
		return this.request({
			url: `v1/universes/${universeId}/developerproducts/${productId}/update`,
			method: "POST",
			json: {
				Name: name,
				Description: description,
				IconImageAssetId: iconId,
				PriceInRobux: price
			}
		});
	}
}

module.exports = ClientDevelopAPI;
