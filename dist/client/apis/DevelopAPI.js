"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class DevelopAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://develop.roblox.com/"
        });
    }
    getAssetsVoting(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/voting`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGameTemplates() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gametemplates`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body.data);
    }
    getGameUpdatesHistory(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gameUpdateNotifications/${options.universeId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: `"${options.gameUpdateText}"`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: `"${options.text}"`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupUniverses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/universes`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getPlaceCompatibilities(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/compatibilities`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getPlaceStatistics(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/places/${options.placeId}/stats/${options.type}`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiPlugins(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins`,
                qs: {
                    pluginIds: options.pluginIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    searchUniverses(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/search/universes`,
                qs: Object.assign(Object.assign({}, options), { sort: (options.sort || []).join(",") }),
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    searchToolbox(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/toolbox/items`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverse(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfUniversePermissions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/permissions`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getPlacesInUniverse(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/places`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseStatisticReports(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseStatisticReportsByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    downloadUniverseStatisticReportsByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/download`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    deactivateUniverse(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/deactivate`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    generateUniverseStatisticReportsByTime(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/statistic-reports/${options.yearDashMonth}/generate`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseConfiguration(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseVIPServersConfiguration(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/configuration/vip-servers`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseTeamCreateSettings(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updateUniverseTeamCreateSettings(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate`,
                method: "PATCH",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUniverseTeamCreateMembers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/teamcreate/memberships`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfUniversesTeamCreateAccess(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/teamcreate/memberships`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfManageableGroups() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/groups/canmanage`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfNotificationStatisticReports() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/notifications/statistic-reports`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getStudioData(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/studiodata`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                },
                responseOptions: {
                    allowedStatusCodes: [200]
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
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    createUniverseAlias(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.targetId}/aliases`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    deleteUniverseAlias(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/aliases/${options.name}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = DevelopAPI;
