"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupWallPost = exports.GroupShout = exports.GroupRolePermissions = exports.GroupRole = exports.GroupJoinRequest = exports.Group = exports.GroupMember = exports.PartialGroup = exports.GroupBase = void 0;
const User_1 = require("./User");
const retrieveStructures = () => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse
});
class GroupBase {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
    getUniverses(options) {
        return this.client.apis.developAPI.getGroupUniverses(Object.assign(Object.assign({}, options), { groupId: this.id })).then(response => {
            const CursorPageClass = require("./Asset").CursorPage;
            const structures = retrieveStructures();
            return new CursorPageClass(this.client, options || {}, Object.assign(Object.assign({}, response), { data: response.data.map(universeData => new structures.PartialGameUniverse(({
                    id: universeData.id,
                    name: universeData.name,
                    rootPlace: universeData.rootPlaceId ? {
                        id: universeData.rootPlaceId
                    } : undefined
                }), this.client)) }), this.getUniverses);
        });
    }
    /**
     * Returns whether the authenticated user can manage the group or not
     * @returns {Promise<boolean>}
     */
    canSelfManage() {
        return this.client.apis.developAPI.getSelfManageableGroups()
            .then(response => !!response.data.find(data => data.id === this.id));
    }
    /**
     * Gets the currently available funds in the group
     * @returns {Promise<number>}
     */
    getFunds() {
        return this.client.apis.economyAPI.getGroupCurrency({
            groupId: this.id
        }).then(response => response.robux);
    }
    getRevenueSummaryInTimeFrame(timeFrame) {
        return this.client.apis.economyAPI.getGroupRevenueByTime({
            groupId: this.id,
            timeFrame
        });
    }
    getTransactions(options) {
        return this.client.apis.economyAPI.getGroupTransactions(Object.assign({ groupId: this.id }, options));
    }
    getAllies(maxItems = 100, startItem) {
        return this.client.apis.groupsAPI.getGroupRelationships({
            relationshipType: "allies",
            groupId: this.id,
            maxRows: maxItems,
            startRowIndex: startItem
        }).then(response => (Object.assign(Object.assign({}, response), { relationshipType: "allies", groups: response.relatedGroups.map(groupData => new Group(groupData, this.client)) })));
    }
    getEnemies(maxItems = 100, startItem) {
        return this.client.apis.groupsAPI.getGroupRelationships({
            relationshipType: "enemies",
            groupId: this.id,
            maxRows: maxItems,
            startRowIndex: startItem
        }).then(response => (Object.assign(Object.assign({}, response), { relationshipType: "enemies", groups: response.relatedGroups.map(groupData => new Group(groupData, this.client)) })));
    }
    getGroup() {
        return this.client.getGroup(this.id);
    }
    getIsMember(userId) {
        return this.client.apis.groupsAPI.getUserGroups({
            userId
        }).then(response => {
            const foundGroup = response.data.find(groupData => groupData.group.id === this.id);
            if (foundGroup) {
                return new GroupMember({
                    id: userId,
                    role: foundGroup.role,
                    group: foundGroup.group
                }, this.client);
            }
            else {
                return null;
            }
        });
    }
    getSettings() {
        return this.client.apis.groupsAPI.getGroupSettings({
            groupId: this.id
        });
    }
    updateSettings(options) {
        return this.client.apis.groupsAPI.updateGroupSettings(Object.assign({ groupId: this.id }, options));
    }
    updateDescription(description) {
        return this.client.apis.groupsAPI.updateGroupDescription({
            description,
            groupId: this.id
        });
    }
    updateShout(shout) {
        return this.client.apis.groupsAPI.updateGroupStatus({
            groupId: this.id,
            status: shout
        });
    }
    updateIcon(file) {
        return this.client.apis.groupsAPI.updateGroupIcon({
            files: file,
            groupId: this.id
        });
    }
    declineJoinRequests(userIds) {
        return this.client.apis.groupsAPI.declineJoinRequests({
            groupId: this.id,
            userIds
        });
    }
    getJoinRequests(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.groupsAPI.getJoinRequests(Object.assign({ groupId: this.id }, options)).then(response => new CursorPageClass(this.client, options, response, this.getJoinRequests));
    }
    acceptJoinRequests(options) {
        return this.client.apis.groupsAPI.acceptJoinRequests(Object.assign({ groupId: this.id }, options));
    }
    declineJoinRequest(userId) {
        return this.client.apis.groupsAPI.declineJoinRequest({
            groupId: this.id,
            userId
        });
    }
    getJoinRequest(userId) {
        return this.client.apis.groupsAPI.getJoinRequest({
            groupId: this.id,
            userId
        });
    }
    acceptJoinRequest(userId) {
        return this.client.apis.groupsAPI.acceptJoinRequest({
            groupId: this.id,
            userId
        });
    }
    getSelfMembership() {
        return this.client.apis.groupsAPI.getSelfGroupMembership({
            groupId: this.id
        });
    }
    getRoles() {
        return this.client.apis.groupsAPI.getGroupRoles({
            groupId: this.id
        }).then(response => response.roles.map(roleData => new GroupRole(Object.assign({ group: {
                id: this.id,
                name: this.name || undefined
            } }, roleData), this.client)));
    }
    getMembersWithRole(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.groupsAPI.getMembersWithRole(Object.assign({ groupId: this.id }, options)).then(response => new CursorPageClass(this.client, options, response, this.getMembersWithRole));
    }
    getMembers(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.groupsAPI.getMembers(Object.assign({ groupId: this.id }, options)).then(response => new CursorPageClass(this.client, options, response, this.getMembers));
    }
    join(options) {
        return this.client.apis.groupsAPI.joinGroup(Object.assign(Object.assign({ groupId: this.id }, options), { captchaProvider: options.captchaProvider || "PROVIDER_ARKOSELABS" }));
    }
    getIsPendingJoin() {
        return this.client.apis.groupsAPI.getSelfPendingGroupJoins().then(response => (response.data.find(groupData => groupData.id === this.id) && true) || false);
    }
    changeOwner(userId) {
        return this.client.apis.groupsAPI.changeGroupOwner({
            groupId: this.id,
            userId
        });
    }
    claim() {
        return this.client.apis.groupsAPI.claimGroup({
            groupId: this.id
        });
    }
    kickMember(userId) {
        return this.client.apis.groupsAPI.kickMember({
            groupId: this.id,
            userId
        });
    }
    updateMember(userId, roleId) {
        return this.client.apis.groupsAPI.updateMember({
            groupId: this.id,
            roleId,
            userId
        });
    }
    getPayouts() {
        return this.client.apis.groupsAPI.getGroupPayouts({
            groupId: this.id
        });
    }
    payoutMembers(options) {
        return this.client.apis.groupsAPI.payoutMembers(Object.assign({ groupId: this.id }, options));
    }
    updateRecurringPayouts(options) {
        return this.client.apis.groupsAPI.updateRecurringPayouts(Object.assign({ groupId: this.id }, options));
    }
    getRelationships(options) {
        return this.client.apis.groupsAPI.getGroupRelationships(Object.assign({ groupId: this.id }, options));
    }
    declineRelationshipRequests(options) {
        return this.client.apis.groupsAPI.declineRelationshipRequests(Object.assign({ groupId: this.id }, options));
    }
    getRelationshipRequests(options) {
        return this.client.apis.groupsAPI.getRelationshipRequests(Object.assign({ groupId: this.id }, options));
    }
    acceptRelationshipRequests(options) {
        return this.client.apis.groupsAPI.acceptRelationshipRequests(Object.assign({ groupId: this.id }, options));
    }
    deleteRelationship(options) {
        return this.client.apis.groupsAPI.deleteRelationship(Object.assign({ groupId: this.id }, options));
    }
    createRelationship(options) {
        return this.client.apis.groupsAPI.createRelationship(Object.assign({ groupId: this.id }, options));
    }
    acceptRelationshipRequest(type, withGroup) {
        return this.client.apis.groupsAPI.acceptRelationshipRequest({
            groupId: this.id,
            relationshipType: type || "allies",
            withGroup
        });
    }
    declineRelationshipRequest(type, withGroup) {
        return this.client.apis.groupsAPI.declineRelationshipRequest({
            groupId: this.id,
            relationshipType: type || "allies",
            withGroup
        });
    }
    getRolePermissions(roleId) {
        return this.client.apis.groupsAPI.getRolePermissions({
            groupId: this.id,
            roleId
        });
    }
    updateRolePermissions(roleId, permissions) {
        return this.client.apis.groupsAPI.updateRolePermissions(Object.assign({ groupId: this.id, roleId }, permissions));
    }
    getGuestPermissions() {
        return this.client.apis.groupsAPI.getGuestPermissions({
            groupId: this.id
        });
    }
    getAllRolesPermissions() {
        return this.client.apis.groupsAPI.getAllRolesPermissions({
            groupId: this.id
        });
    }
    getSocialLinks() {
        return this.client.apis.groupsAPI.getSocialLinks({
            groupId: this.id
        });
    }
    createSocialLink(options) {
        return this.client.apis.groupsAPI.createSocialLink(Object.assign({ groupId: this.id }, options));
    }
    deleteSocialLink(id) {
        return this.client.apis.groupsAPI.deleteSocialLink({
            groupId: this.id,
            id
        });
    }
    updateSocialLink(options) {
        return this.client.apis.groupsAPI.updateSocialLink(Object.assign({ groupId: this.id }, options));
    }
    getWallPosts(options) {
        const CursorPageClass = require("./Asset").CursorPage;
        return this.client.apis.groupsAPI.getWallPosts(Object.assign({ groupId: this.id }, options)).then(response => new CursorPageClass(this.client, options, response, this.getWallPosts));
    }
    createWallPost(options) {
        return this.client.apis.groupsAPI.createWallPost(Object.assign({ groupId: this.id }, options));
    }
    deleteWallPost(id) {
        return this.client.apis.groupsAPI.deleteWallPost({
            groupId: this.id,
            id
        });
    }
    getIsUserPrimaryGroup(userId) {
        return this.client.apis.groupsAPI.getUserPrimaryGroup({
            userId
        }).then(response => response && response.group && response.role ? new GroupMember({
            group: response.group,
            role: {
                id: response.role.id,
                name: response.role.name,
                rank: response.role.rank
            },
            id: userId
        }, this.client) : null);
    }
    removeAsPrimary() {
        return this.client.apis.groupsAPI.removePrimaryGroup();
    }
    setAsPrimary() {
        return this.client.apis.groupsAPI.setPrimaryGroup({
            groupId: this.id
        });
    }
    createRole(options) {
        return this.client.apis.groupsAPI.createRole(Object.assign({ groupId: this.id }, options));
    }
    deleteRole(roleId) {
        return this.client.apis.groupsAPI.deleteRole({
            groupId: this.id,
            roleId
        });
    }
    updateRole(roleId, options) {
        return this.client.apis.groupsAPI.updateRole(Object.assign({ groupId: this.id, roleId }, options));
    }
}
exports.GroupBase = GroupBase;
class PartialGroup extends GroupBase {
    constructor(data, client) {
        super(data, client);
    }
}
exports.PartialGroup = PartialGroup;
class GroupMember extends User_1.UserBase {
    constructor(data, client) {
        super({
            name: data.name,
            id: data.id
        }, client);
        this.group = new PartialGroup(data.group, client);
        this.role = data.role ? new GroupRole({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                name: this.name || undefined,
                id: this.id
            }
        }, client) : null;
    }
    kick() {
        return this.kickFromGroup(this.id);
    }
}
exports.GroupMember = GroupMember;
class Group extends GroupBase {
    constructor(data, client) {
        super(data, client);
        this.description = data.description;
        this.name = data.name;
        this.owner = data.owner ? new GroupMember({
            id: data.owner.userId,
            name: data.owner.username,
            group: this
        }, client) : null;
        this.shout = data.shout ? new GroupShout({
            content: data.shout.body,
            creator: {
                id: data.shout.poster.userId,
                username: data.shout.poster.username
            },
            group: {
                id: this.id,
                name: this.name || undefined
            }
        }, client) : null;
    }
}
exports.Group = Group;
class GroupJoinRequest {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.id || null;
        this.user = new structures.PartialUser(data.user, client);
        this.group = new PartialGroup(data.group, client);
        this.created = new Date(data.created);
    }
}
exports.GroupJoinRequest = GroupJoinRequest;
class GroupRole {
    constructor(data, client) {
        this.client = client;
        this.id = data.id || null;
        this.name = data.name || null;
        this.rank = data.rank || null;
        this.group = new PartialGroup({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}
exports.GroupRole = GroupRole;
class GroupRolePermissions {
    constructor(data, client) {
        this.client = client;
        this.group = new PartialGroup({
            id: data.groupId
        }, client);
        this.role = new GroupRole({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                id: this.group.id
            }
        }, client);
        this.permissions = data.permissions;
    }
}
exports.GroupRolePermissions = GroupRolePermissions;
class GroupShout {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.content = data.content;
        this.creator = new structures.PartialUser(data.creator, client);
        this.group = new PartialGroup({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}
exports.GroupShout = GroupShout;
class GroupWallPost {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.content = data.body;
        this.creator = new GroupMember({
            group: {
                id: data.group.id,
                name: data.group.name
            },
            id: data.poster.userId,
            name: data.poster.username
        }, client);
        this.created = new Date(data.created);
    }
}
exports.GroupWallPost = GroupWallPost;
