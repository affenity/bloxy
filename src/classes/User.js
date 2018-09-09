const ClientMethods = require('../client/methods');

class UserFunctions {

    async acceptFriendRequest () {
        return ClientMethods.acceptFriendRequest(this._self._client.account.userId, this.userId, this._self);
    }

    async blockUser () {
        return ClientMethods.blockUser(this.userId, this._self);
    }

    async canManageAsset (assetId) {
        return ClientMethods.canManageAsset(this.userId, assetId, this._self);
    }

    async declineFriendRequest () {
        return ClientMethods.declineFriendRequest(this._self._client.account.userId, this.userId, this._self);
    }

    async followUser () {
        return ClientMethods.followUser(this.userId, this._self);
    }
    
    async friendUser () {
        return ClientMethods.friendUser(this.userId, this._self);
    }

    async getFollowers (page) {
        let setup = {
            userId: this.userId,
            page: page
        }
        return ClientMethods.getFollowers(setup, this._self);
    }

    async getFollowing (page) {
        let setup = {
            userId: this.userId,
            page: page
        }
        return ClientMethods.getFollowings(setup, this._self);
    }

    async getFriends (page) {
        let setup = {
            userId: this.userId,
            page: page
        }
        return ClientMethods.getFriends(setup, this._self);
    }

    async getNumFriends () {
        return ClientMethods.getNumFriends(this.userId, this._self);
    }

    async getGroups () {
        return ClientMethods.getUserGroups(this.userId, this._self);
    }

    async getUser () {
        return ClientMethods.getUserProfile(this.userId, this._self);
    }

    async getPrimaryGroup () {
        return ClientMethods.getUserPrimaryGroup(this.userId, this._self);
    }

    async getRobloxBadges () {
        return ClientMethods.getUserRobloxBadges(this.userId, this._self);
    }

    async isFriendsWith (userId) {
        return ClientMethods.isFriends(this.userId, userId, this._self);
    }

    async messageUser (setup) {
        return ClientMethods.messageUser(setup, this._self);
    }

    async ownsAsset (assetId) {
        return ClientMethods.ownsAsset({
            userId: this.userId,
            assetId: assetId
        }, this._self);
    }

    async unfollowUser () {
        return ClientMethods.unfollowUser(this.userId, this._self);
    }

    async unfriendUser () {
        return ClientMethods.unfriendUser(this.userId, this._self);
    }

}

class RobloxUser extends UserFunctions {
    
    constructor(data, self) {
        super(self);
        this._self = self;

        this.userId = parseInt(data.UserId || data.UserId || data.userId || data.userid);
        this.username = String(data.Username || data.username || data.Name || data.name || data.userName).toString();
        this.status = String(data.Status || data.status).toString();
        this.blurb = String(data.Blurb || data.blurb).toString();
        
        this.joinDate = new Date(data.JoinDate || data.joinDate || data.joindate);
        this.accountAge = parseInt(data.AccountAge || data.accountAge || data.age || data.Age);
        this.membership = BuildersClub[(data.BC || data.bc || data.membership || data.Membership || data.buildersClubMembershipType).toString().toLowerCase()];
        this.numFriends = parseInt(data.numFriends || data.NumFriends || data.numfriends);

        this.profilePicture = String(data.pfp);
        this.avatarPicture = String(data.avatarPic);
    }
}


class PartialUser extends UserFunctions {
    constructor (data, self) {
        super(self);
        this._self = self;
        
        this.userId = data.UserId || data.userId || data.userid;
        this.username = data.UserName || data.Username || data.username;
        this.buildersClub = (BuildersClub[String(data.BuildersClubStatus || data.BC || data.bc || data.Membership || data.membership || data.membership || data.buildersClubMembershipType).toString().toLowerCase()]) || null;
    }
}


class FriendRequest extends UserFunctions {
    constructor (data, self) {
        super(self);

        this._self = self;

        this.userId = data.UserId;
        this.username = data.Username;
        this.thumbnail = data.Thumbnail;
        this.onlineStatus = data.OnlineStatus;
        this.invitationId = data.InvitationId;
        this.isOnline = data.IsOnline == true;
    }
}

class RobloxBadge {

    constructor(data) {
        this.imageUrl = data.ImageUri;
        this.name = data.Name;
    }

}

class UserSearchResult extends UserFunctions {

    constructor (data, self) {
        super(self);
        this._self = self;
        this.userId = data.UserId;
        this.username = data.Name;
        this.blurb = data.Blurb;
        this.isOnline = data.IsOnline == true;
        this.primaryGroup = {groupId: (data.PrimaryGroupUrl.match(/\d+/g) != null ? data.PrimaryGroupUrl.match(/\d+/g)[0] : null), name: data.PrimaryGroup};
    }
}

class RoVerResponseRoblox extends UserFunctions {

    constructor (data, self) {
        super(self);
        this._self = self;
        this.username = data.robloxUsername;
        this.userId = data.robloxId;
    }
}

class RoVerResponseDiscord {
    constructor (data) {
        this.userIds = data.users;
    }
}

const BuildersClub = {
    '1': 'BC',
    '2': 'TBC',
    '3': 'OBC',
    'bc': 'BC',
    'tbc' : 'TBC',
    'obc' : 'OBC',
    undefined: 'NBC',
    null: 'NBC'
}

exports.PartialUser = PartialUser;
exports.RobloxUser  = RobloxUser;
exports.FriendRequest = FriendRequest;
exports.UserFunctions = UserFunctions;
exports.RobloxBadge = RobloxBadge;
exports.UserSearchResult = UserSearchResult;
exports.RoVerResponseRoblox = RoVerResponseRoblox;
exports.RoVerResponseDiscord = RoVerResponseDiscord;