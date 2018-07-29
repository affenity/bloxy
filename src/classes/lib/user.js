const bloxyFunctions = require('../../types/auth/lib/bloxy/main')
const userFunctions = require('../../types/auth/lib/user/main')
const bloxyClasses = require('../../classes/index')





class UserFunctions {


    constructor(userId, id) {
        this._id = id;
        this.userId = userId;
    }

    /**
     * Blocks this user
     * @returns {Boolean}
     */
    async blockUser() {
        return bloxyFunctions.blockUser(this.userId, this._id);
    }

    
    /**
     * Returns a boolean whether or not this user can manage the asset 
     * @param {Number} assetId The id of the asset
     * @returns {Boolean}
     */
    async canManageAsset(assetId) {
        return bloxyFunctions.canManageAsset(this.userId, assetId, this._id);
    }

    /**
     * Follows this user
     * @returns {Boolean}
     */
    async followUser() {
        return bloxyFunctions.followUser(this.userId, this._id);
    }

    /**
     * Sends a friend request to this user
     * @returns {Boolean}
     */
    async friendUser() {
        return bloxyFunctions.friendUser(this.userId, this._id);
    }

    /**
     * Gets this user's followers
     * @param {Number} page (*Optional*) the page to retrieve 
     */
    async getFollowers(page) {
        return [].concat(bloxyFunctions.getFollowers({
            userId: this.userId,
            page: page
        })).map(x=> new bloxyClasses.userClass.Follower(x, this._id));
    }

    /**
     * Gets the users this user is following
     * @param {Number} page (*Optional*) the page to retrieve
     */
    async getFollowing(page) {
        return [].concat(bloxyFunctions.getFollowings({
            userId: this.userId,
            page: page
        })).map(x=>new bloxyClasses.userClass.Follower(x, this._id));
    }


    /**
     * Gets this user's friends
     * @param {Number} page (*Optional*) the page to retrieve 
     */
    async getFriends(page) {
        return [].concat(bloxyFunctions.getFriends({
            userId: this.userId,
            page: page
        })).map(x=> new bloxyClasses.userClass.PartialUser(x, this._id));
    }

    /**
     * Gets the amount of friend this user has
     * @returns {Number}
     */
    async getNumFriends() {
        return bloxyFunctions.getNumFriends(this.userId, this._id);
    }

    /**
     * Gets this user's groups
     */
    async getUserGroups() {
        let getGroups = await bloxyFunctions.getUserGroups(this.userId, this._id);
        return [].concat(getGroups).map(x=> new bloxyClasses.groupClass.MemberGroup(x, this._id));
    }

    /**
     * Gets this user's places
     * @param {Number} page (*Optional*) the page to retrieve 
     */
    async getUserPlaces(page) {
        let getPlaces = await bloxyFunctions.getUserPlaces({
            userId: this.userId,
            page: page
        });
        return [].concat(getPlaces).map(x=>new bloxyClasses.userClass.UserPlace(x, this._id));
    }

    /**
     * Gets this user's primary group
     */
    async getUserPrimaryGroup() {
        let primary = await bloxyFunctions.getUserPrimaryGroup(this.userId, this._id);
        new bloxyClasses.groupClass.MemberGroup(primary, this._id);
    }

    /**
     * Gets the "full" user class of this user
     */
    async getUser() {
        let user = await bloxyFunctions.getUserProfile(this.userId, this._id);
        return new bloxyClasses.userClass.FullUser(user, this._id);
    }

    /**
     * Gets this user's Roblox badges
     */
    async getUserRobloxBadges() {
        let badges = await bloxyFunctions.getUserRobloxBadges(this.userId, this._id);

        let createResponse = {
            userId: Number(badges.userId),
            badges: [].concat(badges.badges).map(x=> new bloxyClasses.userClass.RobloxBadge(x, this._id))
        }
        return createResponse;
    }


    /**
     * Checks typical signs to see if this user is a bot or not
     * @returns {Boolean}
     */
    async isAssumedBot() {
        return bloxyFunctions.isAssumedBot(this.userId, this._id);
    }

    /**
     * Checks if this user is friend with the specified userId
     * @param {Number} userId 
     * @returns {Boolean}
     */
    async isFriendsWith(userId) {
        return bloxyFunctions.isFriends(this.userId, userId, this._id);
    }

    /**
     * Sends a message to this user
     * @param {Object} setup
     * @param {String} setup.subject The title/subject of the message
     * @param {String} setup.body The content of the message
     * @returns {Boolean}
     */
    async messageUser(setup) {
        return bloxyFunctions.messageUser({
            subject: setup.subject,
            body: setup.body,
            userId: this.userId
        }, this._id);
    }

    /**
     * Checks if this user owns the asset
     * @param {Number} assetId 
     * @returns {Boolean}
     */
    async ownsAsset(assetId) {
        return bloxyFunctions.ownsAsset({
            userId: this.userId, 
            assetId: assetId
        }, this._id);
    }


    /**
     * Emits event 'newStatus' when there is a new status, and 'newBlurb' when there is a new blurb (both contain {new: '', old: ''})
     * @param {Object} settings 
     * @param {Number} settings.interval The interval to check for changes (in ms), default is 5000 ms
     */
    onChange(settings) {
        return new userFunctions.onChange(this.userId, )
    }

    /**
     * Unblocks this user
     * @return {Boolean}
     */
    async unblockUser() {
        return bloxyFunctions.unblockUser(this.userId, this._id);
    }

    /**
     * Unfollows this user
     * @returns {Boolean}
     */
    async unfollowUser () {
        return bloxyFunctions.unfollowUser(this.userId, this._id);
    }

    /**
     * Unfriends this user
     * @returns {Boolean}
     */
    async unfriendUser() {
        return bloxyFunctions.unfriendUser(this.userId, this._id);
    }
}

class FullUser extends UserFunctions {
    
    constructor(data, id) {
       
        
        let userId          = parseInt(data.UserId || data.userId || data.userid);
        super(userId, id);

        this._id = id;
        this.userId         = userId
        this.username       = String(data.Username || data.username || data.Name || data.name || data.userName).toString();
        this.status         = String(data.Status || data.status).toString();
        this.blurb          = String(data.Blurb || data.blurb).toString();
        this.joinDate       = new Date(data.JoinDate || data.joinDate || data.joindate);
        this.placeVisits    = parseInt(data.PlaceVisits || data.placeVisits || data.placevisits);
        this.accountAge     = parseInt(data.AccountAge || data.accountAge || data.age || data.Age);
        this.membership     = String(data.BC || data.bc || data.membership || data.Membership).toString();
        this.numFriends     = parseInt(data.numFriends || data.NumFriends || data.numfriends);

    }

}

class PartialUser {

    constructor(data, id) {
        this._id = data.id || id;

        this.userId     = Number(data.userId || data.UserId || data.userid || data.Id)
        this.username   = String(data.Username || data.Name || data.UserName || data.username).toString()
        this.avatarURL  = String(data.AvatarUri || data.AvatarURI || data.avatarUri).toString()
        this.isOnline   = Boolean(data.IsOnline || data.isOnline || data.isonline);

    }
}


class Follower extends UserFunctions {


    constructor(data, id) {


        let userId = parseInt(data.UserId || data.Userid || data.userId || data.userid);
        super(userId, id);
        this._id = data.id || id;

        this.userId      = userId
        this.username    = String(data.Username || data.username || data.UserName).toString('utf8');
        this.avatarURL   = String(data.AvatarUri || data.avatarUri || data.Avataruri).toString('utf8')
        this.onlineStatus= new OnlineStatus(data, id)
    }
}






class OnlineStatus extends UserFunctions {

    constructor(data, id) {

        let userId = parseInt(data.UserId || data.Userid || data.userId || data.userid);
        super(userId, id);
        this._id = data.id || id;

        this.lastSeen = String(data.LocationOrLastSeen)
        this.userId   = userId
        this.isOnline = Boolean(data.IsOnline==true)
        this.inGame = Boolean(data.InGame == true)
        this.inStudio = Boolean(data.InStudio==true);
    }

}

class UserPlace {

    constructor(data, id) {
        this._id = data.id || id;

        this.name = String(data.Name || data.name).toString();
        this.url  = String(data.AbsoluteUrl).toString();
        this.assetType = Number(data.AssetType);
        this.description = String(data.Description).toString();
        this.isApproved = Boolean(data.IsApproved)

    }
}

class RobloxBadge {

    constructor(data, id) {
        this._id = data.id || id;

        this.name = String(data.Name || data.name).toString()
        this.image= String(data.ImageUri || data.imageUri).toString()

    }
}

class SearchResult extends UserFunctions {

    constructor(data, id) {

        let userId = parseInt(data.UserId || data.userId || data.Id);
        super(userId, id);
        this._id = data.id || id;

        this.userId = userId
        this.username = String(data.Username || data.username || data.Name || data.name).toString();
        this.blurb = ((data.Blurb || data.blurb) != '' && (data.Blurb || data.blurb) != null ? String(data.Blurb || data.blurb).toString() : null)
        this.previosUsernames = String(data.PreviousUserNamesCsv).toString();
        this.online = new OnlineStatus(data, this._id);
        this.primaryGroupId = Number(data.PrimaryGroup || data.primaryGroup);
        this.primaryGroupUrl = String(data.PrimaryGroupUrl).toString();

    }
}


class Message {

    constructor(data, id) {
        this._id = data.id || id;

        this.messageId = Number(data.Id);
        this.sender = new PartialUser(data.Sender, this._id);
        this.recipient = new PartialUser(data.Recipient, this._id);
        this.subject = String(data.Subject).toString();
        this.body = String(data.body || data.Body).toString();
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
        this.isRead = Boolean(data.IsRead) || false;
        this.isSystemMessage = Boolean(data.isSystemMessage) || false;

    }


    /**
     * Archives this message
     * @returns {Boolean}
     */
    async archiveMessage() {
        return bloxyFunctions.archiveMessages([this.messageId], this._id)
    }

    /**
     * Unarchives/ moves this message to the inbox
     * @returns {Boolean}
     */
    async unarchiveMessage() {
        return bloxyFunctions.messagesToInbox([this.messageId], this._id);
    }

    /**
     * Marks this message as read
     * @returns {Boolean}
     */
    async markRead() {
        return bloxyFunctions.markMessagesRead([this.messageId], this._id);
    }

    /**
     * Marks this messages as unread
     * @returns {Boolean}
     */
    async markUnread() {
        return bloxyFunctions.markMessagesUnread([this.messageId], this._id);
    }

    
}

class FriendRequest extends UserFunctions {
    constructor(data, id) {

        let userId = parseInt(data.UserId || data.userId || data.Id);
        super(userId, id);


        this._id = data.id || id;

        this.userId = parseInt(data.UserId || data.userId || data.Id);
        this.username = String(data.Username || data.username || data.UserName || data.Name).toString();
        this.onlineStatus = new OnlineStatus(data.OnlineStatus);
        this.invitationId = Number(data.InvitationId || data.invitationId);
        this.isFollowed = Boolean(data.IsFollowed);
        this.friendshipStatus = Number(data.FriendshipStatus || data.FriendShipStatus || data.friendshipStatus);
        this.isDeleted = Boolean(data.IsDeleted || data.isDeleted);
    }


}

exports.FullUser = FullUser;
exports.Follower = Follower
exports.PartialUser= PartialUser;
exports.UserPlace = UserPlace;
exports.RobloxBadge = RobloxBadge;
exports.SearchResult = SearchResult;
exports.Message = Message;
exports.FriendRequest = FriendRequest;
exports.UserFunctions = UserFunctions;