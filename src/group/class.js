const groupFuncs = require('./main.js');
const userFuncs = require('../user/main.js');
var userClass = require('../user/class.js');

class Group {
    constructor(data, setup) {
        this.hidden = setup;
        this.available = Boolean(data != null);
        if (!this.available) return;
        this.id = Number(data.id);
        this.name = String(data.name || data.Name).toString('utf8');
        this.description = String(data.description || data.Description).toString('utf8');
        this.owner = new userClass.PartialUser(data.owner || data.Owner);
        this.shout = new Shout(data.shout || data.Shout);
        this.memberCount = Number(data.memberCount || data.MemberCount);
    }


    /*
    async getAuditLogs(o) {
        o = o || {}
        let xd = Object.assign(o, this.hidden);
        return [].concat(await groupFuncs.getAuditLogs(this.id, xd)).map(x => new AuditLog(x, this.hidden));
    }*/

    /**
     * Gets the group's current join requests
     */
    async getJoinRequests() {
        return [].concat(await groupFuncs.getJoinRequests(this.id, this.hidden)).map(x => new GroupJoinRequest(x, this.hidden));
    }

    /**
     * Gets the group's wall of messages
     */
    async getWall(opts) {
        opts = opts || {}
        let xd = Object.assign(opts, this.hidden);
        return [].concat(await groupFuncs.getWall(this.id, xd)).map(x => new WallPost(x, this, this.hidden))
    }

    /**
     * Gets all the roles in a group
     */
    async getRoles() {
        return [].concat(await groupFuncs.getRoles(this.id, this.hidden)).map(x => new GroupRole(x, this.id, this.hidden));
    }

    /**
     * Get a role in the group with specified search terms
     * @param {Object} args Search filter, either rank, name, or id 
     */
    async getRole(args) {
        args = args || {}
        let xd = Object.assign(args, this.hidden);
        return new GroupRole(await groupFuncs.getRole(this.id, xd), this.id, this.hidden);
    }

    /**
     * Posts a shout on the group
     * @param {String} message The message to send (max. 500 characters)
     */
    async postShout(message) {
        return groupFuncs.postShout(this.id, message, this.hidden);
    }

    /**
     * Posts a message on the wall
     * @param {String} message The message to send
     */
    async postOnWall(message) {
        return groupFuncs.postOnWall(this.id, message, this.hidden);
    }

    /**
     * Ranks a user
     * @param {Number} roleId The id of the role to rank the user as 
     * @param {Number} userId The id of the user to rank
     */
    async setRank(roleId, userId) {
        return Boolean(await groupFuncs.setRank(this.id, roleId, userId, this.hidden));
    }


    /**
     * Removes all messages from this user in the group
     * @param {Number} userId The user to remove all messages from
     */
    async deleteWallPostsByUser(userId) {
        return Boolean(await groupFuncs.deleteWallPostsByUser(this.id, userId, this.hidden))
    }

    /**
     * 
     * @param {Number} roleId Gets a list of members with that specified role, limited to 100
     */
    async getUsersWithRank(roleId) {
        return [].concat(await groupFuncs.getUsersWithRank(this.id, roleId, this.hidden)).map(x => new userClass.PartialUser(x, this.hidden));
    }

    /**
     * Exiles a user from the group
     * @param {Integer} userId The id of the user to exile/kick from the group
     */
    async exileUser(userId) {
        return groupFuncs.exileUser(this.id, userId, this.hidden);
    }

    /**
     * Joins the group with the authenticated user
     */
    async joinGroup() {
        return groupFuncs.joinGroup(this.id, this.hidden);
    }

    /**
     * Demotes a member of the group, -1 rank
     * @param {Number} userId The user id
     */
    async demote(userId) {
        return groupFuncs.demote(this.id, userId, this.hidden);
    }

    /**
     * Promotes a member of the group, +1 rank
     * @param {Number} userId The user id
     */
    async promote(userId) {
        return groupFuncs.promote(this.id, userId, this.hidden);
    }   







    /**
     * Exiles/kicks a user from the group
     * @param {Number} userId The user id
     */
    async exileUser(userId) {
        return groupFuncs.exileUser(this.id, userId, this.hidden);
    }

    /**
     * Joins the group with the authenticated user
     */
    async joinGroup() {
        return groupFuncs.joinGroup(this.id, this.hidden);
    }


    /**
     * @param {settings} [settings] The settings (*optional*)
     * @param settings.interval The interval to check (in ms)
     * @example group.onShout({interval:2000}).then(stream=>{
     *      stream.on('shout', function(shout) {
     *          
     *      })
     * }) 
     * 
     */
    get onShout() { return groupFuncs.onShout }


    get onWallPost() { return groupFuncs.onWallPost }/* (settings) {
        return groupFuncs.onWallPost//(this.id, settings);
    }*/

    get onJoinRequest() { 
        return groupFuncs.onJoinRequest
    }
}


/**
 * @param Shout#created
 * DOES NOT WORK
 */
class Shout {
    constructor(shout, setup) {
        this.hidden = setup;
        this.available = Boolean(shout != null);
        if (!this.available) return;
        this.body = String(shout.body || shout.Body).toString('utf8');
        this.poster = new userClass.PartialUser(shout.poster);
        //this.created = new Date(shout.created || shout.Created);
    }
}



class UserGroup {
    constructor(data, setup) {
        this.hidden = setup;
        this.Id = Number(data.id || data.Id);
        this.Name = String(data.Name).toString('utf8');
        this.EmblemId = Number(data.EmblemId);
        this.EmblemUrl = String(data.EmblemUrl).toString('utf8');
        this.Rank = Number(data.Rank);
        this.Role = new PartialGroupRole(data.Role, this.Id, this.hidden);
        this.IsInClan = Boolean(data.IsInClan);
        this.IsPrimary = Boolean(data.IsPrimary);
    }
}

class PartialGroup {
    constructor(data, setup) {
        this.hidden = setup;
        this.id = Number(data.GroupId);
        this.name = String(data.GroupName).toString();
    }
}



class GroupRole {
    constructor(data, groupId, setup) {
        this.hidden = setup;
        this.Id = Number(data.Id);
        this.Name = String(data.Name).toString('utf8');
        this.Rank = Number(data.Rank);
        this.groupId = groupId
    }


    /**
     * Not working yet, do not use
     */
    async getUsersWithRank() {
        return [].concat(await groupFuncs.getUsersWithRank(this.groupId, this.Id, this.hidden)).map(x => new userClass.PartialUser(x, this.hidden));
    }
}

class PartialGroupRole {
    constructor(name, groupId, opts) {
        this.hidden = opts;
        this.name = name;
        this.groupId = groupId;
    }

    async getFullRole() {
        groupFuncs.getRole(this.groupId, { name: this.name }, this.hidden)
    }
}


class AuditLogAction {
    constructor(data, setup) {
        this.hidden = setup;
        this.available = Boolean(data.target != null);
        if (!this.available) return;
        this.target = Number(data.target);
        this.params = [].concat(data.params);

    }
}


class GroupJoinRequest {
    constructor(data, setup) {
        this.hidden = setup;
        this.available = Boolean(data != null && data.username != null && data.userId != null);
        if (!this.available) return;
        this.username = String(data.username).toString('utf8');
        //this.backupId = data.userid;
        this.userId = Number(data.userId)//parseInt(data.userid.match(/users\/(.*?)\/profile/)[1])
        this.date = new Date(data.date);
        this.requestId = Number(data.requestId);
        this.groupId = Number(data.groupId);
    }


    async accept() {
        return groupFuncs.acceptJoinRequest(this.requestId, this.groupId, this.hidden)
    }

    
    async decline() {
        return groupFuncs.declineJoinRequest(this.requestId, this.groupId, this.hidden);
    }

    async getUser() {
        return new userClass.User(userFuncs.getUserProfile(this.userId), this.hidden);
    }

    async isBot() {
        return userFuncs.isAssumedBot(this.userId, this.hidden);
    }
}


class WallPost {
    constructor(data, group, setup) {
        this.hidden = setup;
        this.id = data.id || data.Id;
        this.poster = new userClass.PartialUser(data.poster)
        this.body = String(data.body).toString('utf8');
        this.created = new Date(data.created);
        this.updated = new Date(data.updated);
        this.groupId = group//(group!=null?typeof group =='number'?group:group.id||group.Id:null)
    }


    delete() {
        return groupFuncs.deleteWallPost(this.groupId, this.id, this.hidden);
    }
    
    deleteAllPostsByUser() {
        return groupFuncs.deleteWallPostsByUser(this.groupId, this.poster.userId, this.hidden);
    }

    async getUser() {
        return new userClass.User(userFuncs.getUserProfile(this.userId), this.hidden);
    }

    async isBot() {
        return userFuncs.isAssumedBot(this.poster.userId, this.hidden);
    }
    
}

//export {Group, WallPost, GroupJoinRequest, AuditLogAction, PartialGroupRole, GroupRole, PartialGroup, UserGroup, Shout}

module.exports.Group = Group;
module.exports.WallPost = WallPost;
module.exports.GroupJoinRequest = GroupJoinRequest;
module.exports.AuditLogAction = AuditLogAction;
module.exports.PartialGroupRole = PartialGroupRole;
module.exports.GroupRole = GroupRole;
module.exports.PartialGroup=PartialGroup;
module.exports.UserGroup=UserGroup;
module.exports.Shout=Shout;