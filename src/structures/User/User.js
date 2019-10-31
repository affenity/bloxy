const Base = require("./Base");

module.exports = class User extends Base {
	constructor (env, data) {
		super(env, data);
		this.env = env;
		this.status = data.UserStatus;
		this.blurb = data.description || data.blurb || data.Blurb;
		this.joinDate = data.created && new Date(data.created);
		this.accountAge = Math.round((Date.now() - ((this.joinDate && this.joinDate.getTime()) || 0)) / (1000 * 60 * 60 * 24));
		this.friendsCount = data.FriendsCount;
		this.followersCount = data.FollowersCount;
		this.followingsCount = parseInt(data.FollowingsCount);
		this.headshotImage = (data.HeadShotImage || {}).Url;
		this.canMessage = data.CanMessage;
		this.canBeFollowed = data.CanBeFollowed;
		this.canTrade = data.CanTrade;
		this.canSeeFavorites = data.CanSeeFavorites;
		this.canSeeInventory = data.CanSeeInventory;
		this.areFriends = data.AreFriends;
		this.canSendFriendRequest = data.MaySendFriendInvitation;
	}
};
