"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class GroupsAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://groups.roblox.com/"
        });
    }
    getGroup(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}`
            },
            json: true
        }).then((response) => response.body);
    }
    getMultiGroups(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/groups`,
                qs: {
                    groupIds: options.groupIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getAuditLogs(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/audit-log`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupSettings(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/settings`
            },
            json: true
        }).then((response) => response.body);
    }
    updateGroupSettings(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/settings`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupConfigurationMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/configuration/metadata`
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupsMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/metadata`
            },
            json: true
        }).then((response) => response.body);
    }
    createGroup(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/create`,
                method: "POST",
                formData: {
                    "request.name": options.name,
                    "request.description": options.description,
                    "request.publicGroup": options.publicGroup,
                    "request.buildersClubMembersOnly": options.buildersClubMembersOnly,
                    "request.files": options.files
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updateGroupDescription(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/description`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    updateGroupStatus(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/status`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    updateGroupIcon(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/icon`,
                method: "PATCH",
                body: options.files
            },
            json: true
        }).then((response) => response.body);
    }
    declineJoinRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests`,
                method: "DELETE",
                json: {
                    UserIds: options.userIds
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getJoinRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    acceptJoinRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests`,
                method: "POST",
                json: {
                    UserIds: options.userIds
                }
            },
            json: true
        }).then((response) => response.body);
    }
    declineJoinRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getJoinRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`
            },
            json: true
        }).then((response) => response.body);
    }
    acceptJoinRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfGroupMembership(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/membership`
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupRoles(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/roles`
            },
            json: true
        }).then((response) => response.body);
    }
    getMembersWithRole(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/${options.roleId}/users`,
                qs: Object.assign(Object.assign({}, options), { roleSetId: options.roleId })
            },
            json: true
        }).then((response) => response.body);
    }
    getMembers(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/users`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    joinGroup(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/users`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getSelfPendingGroupJoins() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/groups/pending`
            },
            json: true
        }).then((response) => response.body);
    }
    getUserGroups(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/groups/roles`
            },
            json: true
        }).then((response) => response.body);
    }
    changeGroupOwner(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/change-owner`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    claimGroup(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/claim-ownership`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    kickMember(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/users/${options.userId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    updateMember(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/users/${options.userId}`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupPayouts(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/payouts`
            },
            json: true
        }).then((response) => response.body);
    }
    payoutMembers(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/payouts`,
                method: "POST",
                json: {
                    PayoutType: options.type,
                    Recipients: options.users.map(userData => ({
                        recipientId: userData.userId,
                        recipientType: "User",
                        amount: userData.amount
                    }))
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updateRecurringPayouts(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/payouts/recurring`,
                method: "POST",
                json: {
                    PayoutType: options.type,
                    Recipients: options.users.map(userData => ({
                        recipientId: userData.userId,
                        recipientType: "User",
                        amount: userData.amount
                    }))
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupRelationships(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}`,
                qs: {
                    "model.startRowIndex": options.startRowIndex,
                    "model.maxRows": options.maxRows
                }
            },
            json: true
        }).then((response) => response.body);
    }
    declineRelationshipRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
                method: "DELETE",
                json: {
                    GroupIds: options.withGroups
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getRelationshipRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    acceptRelationshipRequests(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
                method: "DELETE",
                json: {
                    GroupIds: options.withGroups
                }
            },
            json: true
        }).then((response) => response.body);
    }
    deleteRelationship(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/${options.withGroup}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    createRelationship(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/${options.withGroup}`,
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    acceptRelationshipRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests/${options.withGroup}`
            },
            json: true
        }).then((response) => response.body);
    }
    declineRelationshipRequest(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests/${options.withGroup}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    getRolePermissions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/${options.roleId}/permissions`
            },
            json: true
        }).then((response) => response.body);
    }
    updateRolePermissions(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/roles/${options.roleId}/permissions`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGuestPermissions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/guest/permissions`
            },
            json: true
        }).then((response) => response.body);
    }
    getAllRolesPermissions(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/permissions`
            },
            json: true
        }).then((response) => response.body);
    }
    getSocialLinks(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/social-links`
            },
            json: true
        }).then((response) => response.body);
    }
    createSocialLink(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/social-links`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    deleteSocialLink(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/social-links/${options.id}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    updateSocialLink(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/social-links/${options.id}`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    getWallPosts(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/wall/posts`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    createWallPost(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/wall/posts`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    deleteWallPost(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/wall/posts/${options.id}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    deleteUserWallPosts(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/wall/users/${options.userId}/posts`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    searchGroupsByKeyword(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/search`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    searchGroups(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/search/lookup`,
                qs: options
            },
            json: true
        }).then((response) => response.body);
    }
    getGroupSearchMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/search/metadata`
            },
            json: true
        }).then((response) => response.body);
    }
    getRolesByIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/roles`,
                qs: {
                    ids: options.roleIds.join(",")
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUserPrimaryGroup(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/groups/primary/role`
            },
            json: true
        }).then((response) => response.body);
    }
    removePrimaryGroup() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/groups/primary`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    setPrimaryGroup(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/groups/primary`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    createRole(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/rolesets/create`,
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    deleteRole(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/rolesets/${options.roleId}`,
                method: "DELETE"
            },
            json: true
        }).then((response) => response.body);
    }
    updateRole(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/rolesets/${options.roleId}`,
                method: "PATCH",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = GroupsAPI;
