const userFuncs = require('./main.js');



class User {

    constructor(data, setup) {
        this.hidden         = {}
        this.hidden.jar     = setup.jar;
        this.hidden.xcsrf   = setup.xcsrf;

        this.userId         = new Number(data.UserId || data.Id);
        this.username       = String(data.Username || data.username || data.Name || data.name);
        this.status         = String(data.Status || data.status).toString();
        this.blurb          = String(data.Blurb || data.blurb).toString();
        this.joinDate       = new Date(data.JoinDate).toString();
        this.accountAge     = Number(data.AccountAge || data.accountAge);
        this.membership     = String(data.BC).toString();
    }


    /**
     * Checks if a user owns an asset
     * @param {Number} assetId The asset id
     * @returns {Boolean}
     */
    async ownsAsset(assetId) {
        if (!assetId) throw new Error("You need to supply the asset id")
        return await userFuncs.ownsAsset(this.userId, assetId, {jar:this.hidden.jar, xcsrf:this.hidden.xcsrf});
    }


    /**
     * Get the user's friends
     * @param {Number} page The page to retrieve of friends
     */
    async getFriends(page) {
        var page = page || 1;
        return userFuncs.getFriends(this.userId, page, {jar:this.hidden.jar, xcsrf:this.hidden.xcsrf})
    }

    /**
     * Returns how many friends this user has
     */
    async getNumFriends() {
        return Number(await userFuncs.numFriends(this.userId, {jar:this.hidden.jar, xcsrf:this.hidden.xcsrf}));
    }

    /**
     * Checks if a user can manage an asset
     * @param {Number} assetId The asset id
     */
    async canManageAsset(assetId) {
        return Boolean(await userFuncs.canManageAsset(this.userId, assetId, {jar: this.hidden.jar, xcsrf: this.hidden.xcsrf}))
    }

    /**
     * Follows this user
     */
    async followUser() {
        return userFuncs.followUser(this.userId, {jar:this.hidden.jar, xcsrf: this.hidden.xcsrf});
    }

    /**
     * Unfollows this user
     */
    async unfollowUser() {
        return userFuncs.unfollowUser(this.userId, { jar: this.hidden.jar, xcsrf: this.hidden.xcsrf })
    }


    // Add getAvatar(), getCurrentlyWearing(), getOutfits(), 

    get onBlurbChange() {return userFuncs.onBlurbChange}
    get onStatusChange() {return userFuncs.onStatusChange}

    async followUser() {
        return userFuncs.followUser(this.userId, this.hidden);
    }

    async unfollowUser() {
        return userFuncs.unfollowUser(this.userId, this.hidden);
    }

    async canManageAsset(assetId) {
        return userFuncs.canManageAsset(this.userId, assetId, this.hidden);
    }

    async addFriend() {
        return userFuncs.friendUser(this.userId, this.hidden);
    }

    async getFollowers(opts) {
        var bb = Object.assign(this.hidden, opts);
        return userFuncs.getFollowers(this.userId, bb);
    }

    async getGroups () {
        return userFuncs.getUserGroups(this.userId, this.hidden);
    }

    async getPlaces() {
        return userFuncs.getUserPlaces(this.userId, this.hidden);
    }

    async isFollowingUser(userId) {
        return userFuncs.isFollowing(this.userId, userId, this.hidden);
    }


    async getPrimaryGroup() {
        return userFuncs.getUserPrimaryGroup(this.username, this.hidden);
    }

    async getRobloxBadges() {
        return userFuncs.getUserRobloxBadges(this.userId, this.hidden);
    }


    async isFriendsWith(userId) {
        return userFuncs.isFriends(userId, this.userId, this.hidden);
    }

    async getNumFriends() {
        return userFuncs.numFriends(this.userId, this.hidden);
    }

    async unfriendUser() {
        return userFuncs.unfriendUser(this.userId, this.hidden);
    }

    async isBot() {
        return userFuncs.isAssumedBot(this.userId, this.hidden);
    }
    
    async BlockUser() {
        return userFuncs.blockUser(this.userId, this.hidden);
    }

    async UnblockUser() {
        return userFuncs.unblockUser(this.userId, this.hidden);
    }

    

}



class FriendRequest {
    constructor(data, setup) {
        this.hidden = {}
        this.hidden.jar = setup.jar;
        this.hidden.xcsrf = setup.xcsrf;

        this.requesterId = Number(data.UserId || data.userId);
        this.targetId = Number(setup.targetId);
        this.username = String(data.Username || data.username || data.Name || data.name);
        this.invitationId = Number(data.invitationId || data.InvitationId);
    }


    async acceptRequest() {
        return userFuncs.acceptFriendRequest(this.targetId, this.requesterId, this.hidden);
    }

    async declineRequest() {
        return userFuncs.declineFriendRequest(this.targetId, this.requesterId, this.hidden);
    }

    async getUser() {
        return new User(await userFuncs.getUserProfile(this.requesterId), this.hidden)
    }

    async isBot() {
        return userFuncs.isAssumedBot(this.requesterId, this.hidden);
    }
}




class PartialUser {
    constructor(data, setup) {
        this.hidden = setup;
        // Available: Id, Username
        this.userId = new Number(data.UserId || data.Id || data.userId);
        this.username = new String(data.username || data.Username || data.Name || data.name).toString('utf8');
    }

    async getUser() {
        return new User(await userFuncs.getUserProfile(this.userId));
    }

}


class OnlineUser {
    constructor(data, setup) {
        this.hidden = setup;
        this.userId = Number(data.VisitorId || data.UserId || data.userId)
        this.gameId = String(data.GameId || data.gameId).toString('utf8');
        this.isOnline = Boolean(data.IsOnline || data.isOnline);
        this.lastOnline = new Date(data.LastOnline || data.lastOnline);
        this.lastLocation = String(data.LastLocation || data.lastLocation).toString('utf8');
        this.placeId = Number(data.PlaceId || data.placeId);
        this.username = String(data.UserName || data.Username || data.username).toString('utf8');
        this.user = new PartialUser({ Id: this.userId, Name: this.username });
    }
}


class UserSearch {
    constructor(data, setup) {
        this.hidden = setup;
        this.userId = Number(data.UserId || data.userId || data.Userid);
        this.username = String(data.Name || data.username || data.Username).toString('utf8');
        this.blurb = String(data.Blurb || data.blurb).toString('utf8');
        this.isOnline = Boolean(data.IsOnline || data.isOnline);
        this.LastLocation = String(data.LastLocation || data.lastLocation).toString('utf8');
        this.user = new PartialUser({ Id: this.userId, Name: this.username });
        this.lastSeen = new Date(data.LastSeenDate || data.lastSeen || data.lastSeenDate || data.LastSeen);
        this.PrimaryGroupAvailable = (data.PrimaryGroup != null && data.PrimaryGroup != "" ? true : false);
        this.PrimaryGroupName = data.PrimaryGroup || "";
        this.PrimaryGroup = null;
        this.PrimaryGroupUrl = String(data.PrimaryGroupUrl);
        this.getPrimaryGroup()
    }

    getPrimaryGroup() {
        if (this.PrimaryGroupAvailable == true) {
            this.PrimaryGroup = new PartialGroup({ Name: this.PrimaryGroup, Id: this.PrimaryGroupUrl.match(/\d+/)[0] })
            return this.PrimaryGroup;
        }
    }
}



class Thumbnail {
    constructor(data, setup) {
        this.hidden = setup;
        this.Final = Boolean(data.Final)
        this.Url = String(data.Url).toString()
        this.IsApproved = Boolean(data.IsApproved);
    }
}

class UserPlace {
    constructor(data, setup) {
        var Item = data.Item;
        var Creator=data.Creator;
        this.hidden = setup;
        this.AssetId = Number(Item.AssetId);
        this.Name = String(Item.Name).toString();
        this.AbsoluteUrl = String(Item.AbsoluteUrl).toString();
        this.AssetType = Number(Item.AssetType);
        this.AssetTypeFriendlyLabel = String(Item.AssetTypeFriendlyLabel).toString();
        this.Description = String(Item.Description).toString();
        this.Genres = [].concat(Item.Genres);
        this.GearAttributes = [].concat(Item.GearAttributes);
        this.AssetCategory = Number(Item.AssetCategory)
        this.CurrentVersionId = Number(Item.CurrentVersionId);
        this.IsApproved = Boolean(Item.IsApproved);

        this.Creator = new PartialUser(Creator, this.hidden);
        this.Thumbnail = new Thumbnail(data.Thumbnail, this.hidden);
    }
}



/*
module.exports = {
    User: User,
    FriendRequest : FriendRequest,
    PartialUser: PartialUser,
    OnlineUser: OnlineUser,
    UserSearch:UserSearch
}*/
module.exports.User = User;
module.exports.FriendRequest = FriendRequest;
module.exports.PartialUser = PartialUser;
module.exports.OnlineUser = OnlineUser;
module.exports.UserSearch = UserSearch;
module.exports.UserPlace = UserPlace;
module.exports.Thumbnail = Thumbnail;