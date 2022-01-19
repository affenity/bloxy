"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class DevelopAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://develop.roblox.com/"
        });
    }
    getGameTemplates() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gametemplates`
            },
            json: true
        }).then((response) => response.body.data);
    }
    getGameUpdatesHistory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/${options.universeId}`
            },
            json: true
        }).then((response) => response.body);
    }
    publishGameUpdateNotification(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/${options.universeId}`,
                method: "POST",
                json: `"${options.gameUpdateText}"`
            },
            json: true
        }).then((response) => response.body);
    }
    filterGameUpdateNotificationText(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/filter`,
                method: "POST",
                json: `"${options.text}"`
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupUniverses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/universes`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getPlaceCompatibilities(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/compatibilities`
            },
            json: true
        }).then((response) => response.body);
    }
    updatePlaceConfiguration(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getPlaceStatistics(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/stats/${options.type}`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    isPlaceAgeDataAvailable(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/is-age-data-available`,
                method: "GET"
            },
            json: true
        }).then((response) => response.body);
    }
    getDeveloperProductAggregation(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/developer-product-aggregation`,
                method: "GET",
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getCreatorDashboardMetadata() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/creator-dashboard-metadata`
            },
            json: true
        }).then((response) => response.body);
    }
    getTeamCreateSessionMembers(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/places/${options.placeId}/teamcreate/active_session/members`,
                qs: {
                    limit: options.limit || 10,
                    cursor: options.cursor
                }
            },
            json: true
        }).then((response) => response.body);
    }
    setTeamCreateEnabled(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate`,
                method: "PATCH",
                json: { isEnabled: options.isEnabled }
            },
            json: true
        }).then(() => true);
    }
    getMultiPlugins(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins`,
                qs: {
                    pluginIds: options.pluginIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updatePlugin(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins/${options.pluginId}`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    searchUniverses(options) {
        const encodedQuery = `${options.q.search || ""} creator:${options.q.creator.slice(0, 1).toUpperCase() + options.q.creator.slice(1)} ${typeof options.q.active !== "undefined"
            ? `active:${options.q.active ? "True" : "False"}`
            : ""} ${options.q.archived
            ? `archived:${options.q.archived ? "True" : "False"}`
            : ""} ${options.q.groups ? `groups:${options.q.groups.join(",")}` : ""}`;
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/search/universes`,
                qs: Object.assign(Object.assign({}, options), { sort: (options.sort || []).join(","), 
                    // End me, please...
                    q: encodedQuery })
            },
            json: true
        }).then((response) => response.body);
    }
    searchToolbox(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/toolbox/items`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverse(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}`
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseLiveStats(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/live-stats`
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfUniversePermissions(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/permissions`
            },
            json: true
        }).then((response) => response.body);
    }
    getPlacesInUniverse(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/places`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseRevenueReports(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/revenue-reports`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseRevenueReport(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/revenue-reports/${options.yearDashMonth}`
            },
            json: true
        }).then((response) => response.body);
    }
    downloadUniverseRevenueReport(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/revenue-reports/${options.yearDashMonth}/download`,
                method: "GET"
            }
        }).then((response) => response.body);
    }
    getUniverseStatisticReports(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports`
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseStatisticReportsByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}`
            },
            json: true
        }).then((response) => response.body);
    }
    downloadUniverseStatisticReportsByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/download`
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiUniverses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/multiget`,
                qs: {
                    ids: options.ids.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiUniversesPermissions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/multiget/permissions`,
                qs: {
                    ids: options.ids.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    activateUniverse(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/activate`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    deactivateUniverse(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/deactivate`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    generateUniverseStatisticReportsByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/generate`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseConfiguration(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration`
            },
            json: true
        }).then((response) => response.body);
    }
    updateUniverseConfiguration(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseVIPServersConfiguration(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration/vip-servers`
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseTeamCreateSettings(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate`
            },
            json: true
        }).then((response) => response.body);
    }
    removeUserFromUniverseTeamCreate(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate/memberships`,
                method: "DELETE",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseTeamCreateMembers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate/memberships`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfUniversesTeamCreateAccess(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/teamcreate/memberships`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfManageableGroups() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/groups/canmanage`
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfNotificationStatisticReports() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/notifications/statistic-reports`
            },
            json: true
        }).then((response) => response.body);
    }
    getStudioData(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/studiodata`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    setStudioData(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/studiodata`,
                method: "POST",
                json: options,
                qs: {
                    clientKey: options.clientKey
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfUniverses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/universes`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    createUniverseAlias(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.targetId}/aliases`
            },
            json: true
        }).then((response) => response.body);
    }
    deleteUniverseAlias(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/aliases/${options.name}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    updateUniverseAlias(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.targetId}/aliases/${options.name}`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    createDeveloperProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/developerproducts`,
                method: "POST",
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    updateDeveloperProduct(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/developerproducts/${options.developerProductId}/update`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.DevelopAPI = DevelopAPI;
