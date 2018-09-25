const GroupFunctions = require('./GroupFunctions');
const classes        = require('../classes');
const EventEmitter   = require('events');
const Client         = require('../client/client.js');
const Methods        = require('./methods');
const ClientMethods  = require('../client/methods');





class PartialGroupFunctions {

    async getGroup () {
        return ClientMethods.getGroup(this.groupId, this._setup);
    }

    async postShout (message) {
        return Methods.postShout({
            groupId: this.groupId,
            message: message
        }, this._setup);
    }

    async postOnWall (message) {
        return Methods.postOnWall({
            message: message,
            groupId: this.groupId
        }, this._setup);
    }

    async setAsPrimary () {
        return Methods.setAsPrimaryGroup({
            groupId: this.groupId
        }, this._setup);
    }

    async join () {
        return Methods.joinGroup({
            groupId: this.groupId
        }, this._setup);
    }


}

class Group extends GroupFunctions {
    /**
     * 
     * @param {Object} data 
     * @param {Client} self 
     */
    constructor(data, self) {
        super( {groupId: data.Id || data.id || data.GroupId || data.groupId}, self);
        this._setup      = self;
        this.groupId     = Number(data.Id || data.id || data.GroupId || data.groupId);
        this.name        = String(data.Name || data.name).toString();
        this.description = String(data.Description || data.description).toString();
        this.owner       = new classes.User.PartialUser(data.owner || data.Owner, self);
        this.shout       = new GroupShout(data.Shout || data.shout, self);
        this.memberCount = Number(data.memberCount);
    }
}


class GroupShout {

    constructor(data, self) {
        this._setup = self;
        this.body   = data != null ? String(data.Body || data.body).toString() : null;
        this.poster = data != null ? new classes.User.PartialUser(data.poster, self) : null;
    }
}

class PartialGroup extends PartialGroupFunctions {

    constructor(data, self) {
        super();
        this._setup = self;
        
        this.name = data.Name || data.name;
        this.groupId = data.id || data.Id || data.Groupid || data.GroupId || data.groupId;
        this.emblemUrl = data.EmblemUrl || data.emblem || data.EmblemUrl;

    }

}

class UserGroup extends PartialGroupFunctions {

    constructor(data, self) {
        super();
        this._setup = self;

        this.group = new PartialGroup({name: data.Name, groupId: data.Id, emblem: data.EmblemUrl}, self);
        this.userRank = data.Rank || data.rank;
        this.userRole = data.Role || data.role;
        this.isPrimary = data.IsPrimary == true || data.isPrimary == true;
        this.isInClan = data.IsInClan == true || data.isInClan == true;
    }
}

class JoinRequest extends classes.User.UserFunctions {

    /**
     * 
     * @param {*} data 
     * @param {Client} self 
     */
    constructor(data, self) {
        super((data.UserId || data.userId || data.Id), self);
        this._self = self;
        
        this.username = data.username || data.Username;
        this.userId = data.UserId || data.userId || data.Id;
        this.date = new Date(data.date);
        this.requestId = data.requestId;
        this.groupId = data.groupId;
    }

    async accept () {
        return Methods.acceptJoinRequest(this.requestId, this._self);
    }

    async decline () {
        return Methods.declineJoinRequest(this.requestId, this._self);
    }
}

class WallPost extends classes.User.UserFunctions {

    constructor(data, groupId, self) {
        super((data.UserId || data.userId || data.Id), self);

        this.postId = data.id;
        this.groupId = groupId;
        this.poster = new classes.User.PartialUser(data.poster, self);
        this.body   = data.body;
        this.created = new Date(data.created);
        this.updated = new Date(data.updated);
    }

    async delete () {
        return Methods.deleteWallPost({
            postId: this.postId,
            groupId: this.groupId
        })
    }

    async deletePostsFromUser () {
        return Methods.deleteWallPostsByUser({
            groupId: this.groupId,
            userId: this.poster.userId
        })
    }
}

class MyGroupPermissions {

    constructor (data, self) {

        this.groupId = data.groupId;
        this.isPrimary = data.isPrimary == true;
        this.isPendingJoin = data.isPendingJoin == true;

        this.userRole = {
            user: new classes.User.PartialUser(data.userRole.user, self),
            role: {
                id: data.userRole.role.id,
                name: data.userRole.role.name,
                rank: data.userRole.role.rank
            }
        }

        this.maxGroups = data.maxGroups;
        this.permissions = {
            groupPostsPermissions: {
                viewWall: data.permissions.groupPostsPermissions.viewWall == trues,
                postToWall: data.permissions.groupPostsPermissions.postToWall == true,
                deleteFromWall: data.permissions.groupPostsPermissions.deleteFromWall == true,
                viewStatus: data.permissions.groupPostsPermissions.viewStatus == true,
                postToStatus: data.permissions.groupPostsPermissions.postToStatus == true
            },

            groupMembershipPermissions: {
                changeRank: data.permissions.groupMembershipPermissions.changeRank == true,
                inviteMembers: data.permissions.groupMembershipPermissions.inviteMembers == true,
                removeMembers: data.permissions.groupMembershipPermissions.removeMembers == true
            },

            groupManagementPermissions: {
                manageRelationships: data.permissions.groupManagementPermissions.manageRelationships == true,
                manageClan: data.permissions.groupManagementPermissions.manageClan == true,
                viewAuditLogs: data.permissions.groupManagementPermissions.viewAuditLogs == true
            },

            groupEconomyPermissions: {
                spendGroupFunds: data.permissions.groupEconomyPermissions.spendGroupFunds == true,
                advertiseGroup: data.permissions.groupEconomyPermissions.advertiseGroup == true,
                createItems: data.permissions.groupEconomyPermissions.createItems == true,
                manageItems: data.permissions.groupEconomyPermissions.manageItems == true,
                addGroupPlaces: data.permissions.groupEconomyPermissions.addGroupPlaces == true,
                manageGroupGames: data.permissions.manageGroupGames == true
            }
        }

    }
}

class AuditLog {
    constructor (data, self) {
        this._self = self;
        this.action = data.action;
        this.user = new classes.User.PartialUser(data.user, self);
        this.date = data.date;
    }
}

class GroupRole {
    constructor (data, groupId, self) {
        this._self = self;
        this.groupId = groupId;
        this.name = data.name;
        this.rank = data.rank;
        this.id = data.id;
    }
}

class GroupSearchResult extends PartialGroupFunctions {
    constructor (data, self) {
        super();
        this._self = self;
        this.bcOnly = data.BcOnlyJoin;
        this.description = data.Description;
        this.groupId = data.ID;
        this.name = data.Name;
        this.publicEntryAllowed = data.PublicEntryAllowed;
        this.numMembers = data.Members;
        this.groupUrl = data.GroupUri;
        this.thumbnail = {
            final: data.Thumbnail.final == true,
            url: data.Thumbnail.Url
        };
    }
}
exports.Group = Group;
exports.GroupShout = GroupShout;
exports.PartialGroup = PartialGroup;
exports.UserGroup = UserGroup;
exports.JoinRequest = JoinRequest;
exports.WallPost = WallPost;
exports.MyGroupPermissions = MyGroupPermissions;
exports.AuditLog = AuditLog;
exports.GroupRole = GroupRole;
exports.GroupSearchResult = GroupSearchResult;