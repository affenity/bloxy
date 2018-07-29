const bloxyClasses = require('../index')
const groupFunctions = require('../../types/auth/lib/group/main')




class RobloxGroup {
    constructor(data, id) {
        this._id = id;

        this.groupId = Number(data.Id || data.id || data.GroupId || data.groupId);
        this.name = String(data.Name || data.name).toString();
        this.description = String(data.description || data.Description).toString();
        this.owner = new bloxyClasses.userClass.PartialUser(data.owner || data.Owner, this._id)
        this.shout = new Shout(data.shout || data.Shout, this._id)
        this.memberCount = Number(data.memberCount);
    }

    /**
     * Accepts a join request by requestId
     * @param {Number} requestId 
     * @returns {Boolean}
     */
    async acceptJoinRequest(requestId) {
        return groupFunctions.acceptJoinRequest(requestId, this._id);
    }

    /**
     * Changes a rank of a user
     * @param {Number} userId The user's id
     * @param {Number} amount Amount to change
     * @returns {Boolean}
     */
    async changeRank(userId, amount) {
        return groupFunctions.changeRank(this.groupId, userId, amount, this._id);
    }

    /**
     * Declines a join request by requestId
     * @param {Number} requestId 
     * @returns {Boolean}
     */
    async declineJoinRequest(requestId) {
        return groupFunctions.declineJoinRequest(requestId, this._id);
    }

    /**
     * Deletes a wall post by id
     * @param {Number} postId 
     * @returns {Boolean}
     */
    async deleteWallPost(postId) {
        return groupFunctions.deleteWallPost(this.groupId, postId, this._id);
    }

    /**
     * Deletes all wall posts by the user identified by their userId
     * @param {Number} userId 
     * @returns {Boolean}
     */
    async deleteWallPostsByUser(userId) {
        return groupFunctions.deleteWallPostsByUser(this.groupId, userId, this._id);
    }
    
    /**
     * Demotes the user in this group
     * @param {Number} userId 
     * @returns {Boolean}
     */

    async demote(userId) {
        return groupFunctions.demote(this.groupId, userId, this._id);
    }

    /**
     * Exiles/kicks the user identified by their id
     * @param {Number} userId 
     * @returns {Boolean}
     */
    async exileUser(userId) {
        return groupFunctions.exileUser(this.groupId, userId, this._id);
    }


    /**
     * 
     * @param {Object} setup 
     * @param {Number} setup.page (*Optional*) the page to retrieve
     * @param {String} setup.username (*Optional*) to filter actions made by a user
     * @param {String} setup.action (*Optional*) to filter action by an id
     */
    async getAuditLogs(setup) {
       let getAudits = await groupFunctions.getAuditLogs({
            groupId: this.groupId,
            page: setup.page,
            action: setup.action,
            username: setup.username
        }, this._id);

        let createResponse = [].concat(getAudits).map(x=> new bloxyClasses.groupClass.AuditLog(x, this._id))
        return createResponse
    }


    /**
     * Gets the group's funds
     * @returns {Number}
     */
    async getGroupFunds() {
        let getFunds = await groupFunctions.getGroupFunds(this.groupId, this._id);
        return Number(getFunds);
    }

     /**
     * Gets the group's join requests
     * @param {Object} setup 
     * @param {Number} setup.page (*Optional*) the page to retrieve
     * @param {String} setup.username (*Optional*) gets the join request from the specified username (if any)
     */
    async getJoinRequests(setup) {
        setup = setup || {};
        let reqs = await groupFunctions.getJoinRequests(this.groupId, setup, this._id);
        return reqs;
    }

    /**
     * Gets the Rankname (name of the rank/role) the user has in the group
     * @param {Number} userId 
     * @returns {String}
     */
    async getRankNameInGroup(userId) {
        return groupFunctions.getRankNameInGroup(this.groupId, userId, this._id);
    }


    /**
     * 
     * @param {Object} filter You have to provide AT LEAST ONE of the parameters in this object (name, id, rank)
     * @param {String} filter.name The name of the rank/role
     * @param {Number} filter.id The id of the rank/role
     * @param {Number} filter.rank The rank of the rank/role
     */
    async getRole(filter) {
        let role = await groupFunctions.getRole({
            groupId: this.groupId,
            rank: filter.rank,
            id: filter.id,
            name: filter.name
        }, this._id);
        if (!role) throw new Error("Failed to get a role based on your criteria, try again");
        let createResponse = new Role(role, this.groupId, this._id);
        return createResponse
    }
    
    /**
     * Gets the group's roles
     */
    async getRoles() {
        let roles = await groupFunctions.getRoles(this.groupId, this._id);
        return [].concat(roles).map(x=> new Role(x, this.groupId, this._id));
    }

    /**
     * Returns a list of up to 20 partial-users per page
     * @param {Number} page (*Optional*) 
     */
    async getUsers(page) {
        let getUsers = await groupFunctions.getUsers(this.groupId, page || 1, this._id);
        let createResponse = [].concat(getUsers).map(x=> new bloxyClasses.userClass.PartialUser(x, this._id));
        return createResponse;
        
    }


    
    /**
     * Gets the users with the role identified by id
     * @param {Number} roleId 
     */
    async getUsersWithRole(roleId) {
        let getUsers = await groupFunctions.getUsersWithRank(this.groupId, roleId, this._id);
        return [].concat(getUsers).map(x => new bloxyClasses.userClass.PartialUser(x, this._id));
    }


    /**
     * Gets the wall of the group
     * @param {String} cursorPage (*Optional*) The page to fetch
     */
    async getWall(cursorPage) {
        let wall = await groupFunctions.getWall(this.groupId, cursorPage, this._id);
        console.log(wall);

    }


    /**
     * Returns whether or not the user is in this group
     * @param {Number} userId 
     * @param {Boolean}
     */
    async isInGroup(userId) {
        return groupFunctions.isInGroup(userId, this.groupId, this._id);
    }

    /**
     * Joins this group
     */
    async joinGroup() {
        return groupFunctions.joinGroup(this.groupId, this._id);
    }
    /**
     * Emits when a user sent a join request
     * @param {Object} settings
     * @param {Number} settings.interval The amount of time to wait between each check for new requests (in ms), default is 5000 ms
     */
    onJoinRequest(settings) {
        return new groupFunctions.onJoinRequest(this, settings);
    }

    /**
     * Emits the event 'shout' when a new shout has been made
     * @param {Object} settings (*Optional*) settings
     * @param {Number} settings.interval The time to wait between each check, default is 30000 ms (30 s) 
     */
    onGroupChange(settings) {
        return new groupFunctions.onGroupChange(this, settings);
    }

    /**
     * Emits the event 'posts'
     * @param {Object} settings 
     * @param {Number} settings.interval The delay between each interval (in ms) to check for new wall posts
     */
    onWallPost(settings) {
        return new groupFunctions.onWallPost(this, settings);
    }

    /**
     * Posts a new shout in this group
     * @param {String} newShout 
     * @returns {Boolean}
     */
    async postShout(newShout) {
        return groupFunctions.postShout(this.groupId, newShout, this._id);
    }


    



    
/**
 * Updates the payout for the group or does a one-time payout
 * @param {Object[]} members Array of users
 * @param {Number} members[].userId User's userId
 * @param {Number} members[].amount Amount to pay out to the user
 * @param {Boolean} isRecurring If the payout will be recurring or not 
 * @param {Boolean} usePercentage If the payout will be in percentage (true if recurring)
 * @returns {Boolean}
 */


    async payout(members, isRecurring, usePercentage) {
        let payout = await groupFunctions.payout({
            members: members,
            recurring: isRecurring,
            usePercentage: usePercentage,
            groupId: this.groupId
        }, this._id)
        return true;
    }

    /**
     * Posts on the group wall
     * @param {String} message 
     * @returns {Boolean}
     */
    async postOnWall(message) {
        return groupFunctions.postOnWall(this.groupId, message, this._id);
    }


    /**
     * Sets a user's rank in this group
     * @param {Number} userId The user's id
     * @param {Number} roleId The id of the role
     */
    async setRank(userId, roleId) {
        let set = await groupFunctions.setRank(this.groupId, roleId, userId, this._id);
        return set;
    }
}



class PartialGroup {
    constructor(data, id) {
        this._id = id;

        this.name       = String(data.Name || data.name).toString();
        this.groupId    = Number(data.id || data.Id || data.Groupid || data.GroupId || data.groupId);
        this.emblemURL  = String(data.EmblemUrl || data.emblem || data.EmblemURL).toString();
    }
}


class MemberGroup {


    constructor(data, id) {
        this._id = data.id || id;

        this.partialGroup   = new PartialGroup({name: data.Name, groupId: data.Id, emblem: data.EmblemUrl}, this._id);
        this.userRank       = Number(data.Rank || data.rank)
        this.userRole       = String(data.Role || data.role).toString();
        this.isPrimary      = Boolean(data.isPrimary)
        this.userInClan     = Boolean(data.IsInClan)
    }
}



class Shout {
    constructor(data, id) {
        this._id = id;
        if (!data) return;
        this.body = String(data.body || data.Body).toString();
        this.poster = new bloxyClasses.userClass.PartialUser(data.poster, this._id);

    }
}


class Member extends bloxyClasses.userClass.UserFunctions {
    constructor(data, id) {

        let userId = Number(data.userId || data.UserId || data.Id || data.id);
        super(userId, id);

        this._id = id;

        this.userId = userId
        this.username = String(data.Username || data.username).toString();
        this.rank = String(data.rank).toString();

    }
}

class AuditLog {
    constructor(data, id) {
        this._id = id;

        this.action = String(data.action).toString();
        this.user = new Member(data.user, this._id);
        this.date = data.date;
    }
}


class JoinRequest extends bloxyClasses.userClass.UserFunctions {

    constructor(data, id) {

        let userId = Number(data.UserId || data.userId || data.Id)
        super(userId, id);

        this._id = id;

        this.username = String(data.username || data.Username).toString();
        this.userId = userId;
        this.date = new Date(data.date);
        this.requestId = Number(data.requestId);
        this.groupId = Number(data.groupId);

    }

    
    /**
     * Accepts this user's join request
     * @returns {Boolean}
     */
    async accept() {
        return groupFunctions.acceptJoinRequest(this.requestId, this._id);
    }

    /**
     * Declines this user's join request
     * @returns {Boolean}
     */
    async decline() {
        return groupFunctions.declineJoinRequest(this.requestId, this._id);
    }
}

class Role {

    constructor(data, groupId, id) {
        this._id = id;

        this.roleId = Number(data.Id || data.roleId || data.RoleId);
        this.roleName = String(data.Name || data.name || data.roleName || data.RoleName || data.RankName).toString();
        this.rank = Number(data.Rank || data.rank);
        this.groupId = data.groupId || groupId;
        
    }
}

class WallPost extends bloxyClasses.userClass.UserFunctions {

    constructor(data, groupId, id) {

        let userId = data.poster.userId;
        super(userId, id);
        this._id = id;

        this.postId = Number(data.id || data.Id || data.postId || data.PostId);
        this.poster = new bloxyClasses.userClass.PartialUser(data.poster, this._id);
        this.body   = String(data.body).toString();
        this.created= new Date(data.created);
        this.updated= new Date(data.updated);
        this.groupId= groupId;

    }

    /**
     * Deletes this wall post
     * @returns {Boolean}
     */
    async delete() {
        return groupFunctions.deleteWallPost(this.groupId, this.postId, this._id);
    }

    /**
     * Deletes all the wall posts by this user
     * @returns {Boolean}
     */
    async deleteAllPostsByUser() {
        return groupFunctions.deleteWallPostsByUser(this.groupId, this.poster.userId, this._id);
    }
}
exports.PartialGroup = PartialGroup;
exports.MemberGroup  = MemberGroup;
exports.Shout = Shout;
exports.RobloxGroup = RobloxGroup;
exports.Member = Member;
exports.AuditLog = AuditLog;
exports.JoinRequest = JoinRequest;
exports.WallPost = WallPost;
exports.Role = Role;