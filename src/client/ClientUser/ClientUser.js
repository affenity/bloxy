const ClientUserProfile = require("./UserProfile");
const ClientUserAccount = require("./UserAccount");

class ClientUser {
	constructor (client, data) {
		this.client = client;
		this.id = data.id;
		this.profile = new ClientUserProfile(client);
		this.account = new ClientUserAccount(client);

		this._validate = client._validate;
		this._getUserId = u => this._validate.user.validate.identifier(u);
		this.apis = client.apis;
	}

	getFriendRequests (options = {}) {
		return this._validate.other.genericFilterOptions(options).then(o => this.apis.friends.getFriendRequests(o).then(data => {
			console.log(data);
		}));
	}

	declineAllFriendsRequest () {
		return this.client.apis.friends.declineAllFriendRequests().then(() => true);
	}

	acceptFriendRequest (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.friends.acceptFriendRequest(id).then(() => true));
	}

	declineFriendRequest (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.friends.declineFriendRequest(id).then(() => true));
	}

	follow (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.friends.followUser(id).then(() => true));
	}

	sendFriendRequest (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.friends.sendFriendRequest(id));
	}

	unfollow (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.friends.unfollowUser(id));
	}

	unfriend (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.friends.unfriendUser(id));
	}

	isFriendsWith (users) {
		return this._validate.user.identifiers(users).then(ids => this.apis.friends.getUserStatusesWith({
			userId: this.client.user.id,
			userIds: ids
		}));
	}

	block (user) {
		return this._getUserId(user).then(id => this.apis.api.blockUser(id).then(() => true));
	}

	unblock (user) {
		return this._getUserId(user).then(id => this.apis.api.unblockUser(id).then(() => true));
	}

	getGroups () {
		return this.client.getUserGroups(this.client.user.id);
	}

	getMessages (options = {}) {
		return this._validate.other.genericFilterOptions(options).then(o => {
			throw new Error("messages not added yet");
		});
	}

	markMessagesRead (markRead, messages) {
		return this._validate.message.identifiers(messages).then(ids => {
			throw new Error("messages not added yet");
		});
	}

	moveMessages (options = {}) {
		return this._validate(options, joi => joi.object({
			archive: joi.boolean(),
			messages: this._validate.message.identifiers
		})).then(({ archive, messages }) => {

		});
	}

	getPrimaryGroup () {
		return this.apis.groups.getUserPrimaryGroup().then(d => new this.structures.group.Partial(this, d));
	}

	removePrimaryGroup () {
		return this.apis.groups.removeSelfPrimaryGroup().then(() => true);
	}

	setPrimaryGroup (group) {
		return this._validate.group.validate.identifier(group).then(id => this.apis.groups.setPrimaryGroup(id).then(() => true));
	}

	sendMessage (options) {
		return this._validate(options, joi => joi.object({
			user: this._validate.user.identifier,
			title: joi.string(),
			message: joi.string()
		})).then(o => {
			throw new Error("messages not supported yet");
		});
	}

	getRobux () {
		return this.apis.api.getBalance().then(d => d.robux);
	}

	getFriendsOnline () {
		return this.apis.friends.getUserFriendsOnline(this.client.user.id).then(d => d.data.map(x => ({
			user: new this.client.structures.user.Partial(this.client, x),
			presence: x.userPresence
		})));
	}

	buyAsset (options) {
		return this._validate(options, joi => joi.object({
			productId: joi.string().number(),
			price: joi.number(),
			sellerId: joi.string().number()
		}));
	}

	canManageAsset (asset) {
		return this._validate(asset, joi => joi.any()).then(id => this.apis.api.userCanManageAsset({
			userId: this.id,
			assetId: id
		}).then(d => {
			if (d.ErrorMessage || d.Success === false) {
				throw new Error(`An error occurred ${d.ErrorMessage}`);
			} else {
				return d.CanManage === true;
			}
		}));
	}

	ownsAsset (assetId) {
		return this._validate(assetId, joi => joi.any()).then(id => this.apis.api.userOwnsAsset({
			userId: this.id,
			assetId: id
		}).then(d => typeof d === "string" && d.toLowerCase() === "true"));
	}

	ownsGamePass (passId) {
		return this._validate(passId, joi => joi.any()).then(id => {
			throw new Error("ownsGamePass not supported yet");
		});
	}

	redeemPromoCode (code) {
		return this._validate(code, joi => joi.string()).then(c => {
			throw new Error("redeemPromoCode not supported yet");
		});
	}

	getGroupPermissionsFor (group) {
		return this._validate.group.validate.identifier(group).then(id => {
			throw new Error("getGroupPermissions not supported yet");
		});
	}
}

module.exports = ClientUser;
