class UserBase {
	/**
	 * User base
	 * @param {Client} client The apis
	 * @param {Object} data Data about a user
	 */
	constructor (client, data) {
		this.client = client;
		this.id = client.util.valueExtractor(data, "userId");
		this.apis = client.apis;
		this._validate = client._validate;
	}

	update () {
		return this.client.getUser(this.id);
	}

	getGroups () {
		return this.client.getUserGroups(this.id);
	}

	acceptFriendRequest () {
		return this.client.user.acceptFriendRequest(this.id);
	}

	declineFriendRequest () {
		return this.client.user.declineFriendRequest(this.id);
	}

	sendFriendRequest () {
		return this.client.user.sendFriendRequest(this.id);
	}

	getFriendsCount () {
		return this.client.apis.friends.getUserFriendsCount(this.id);
	}

	unfriend () {
		return this.apis.friends.unfriendUser(this.id);
	}

	isFollowing (user) {
		return this._validate.user.validate.identifier(user)
			.then(id => this.apis.api.isUserFollowing({
				userId: this.id,
				otherUserId: id
			}));
	}

	follow () {
		return this.apis.friends.followUser(this.id);
	}

	unfollow () {
		return this.apis.friends.unfollowUser(this.id);
	}

	ownsAsset (asset) {
		return this._validate.other.validate.anyIdentifier(asset)
			.then(id => {
				throw new Error("ownsAsset not implemented yet");
			});
	}

	block () {
		return this.apis.api.blockUser(this.id);
	}

	unblock () {
		return this.apis.api.unblockUser(this.id);
	}

	canManageAsset (asset) {
		return this._validate.other.validate.anyIdentifier(asset)
			.then(id => {
				throw new Error("canManageAsset not implemented yet");
			});
	}

	awardBadge (badge, place) {
		return this._validate([badge, place], () => this._validate.other.anyIdentifiers)
			.then(([badgeId, placeId]) => this.apis.api.awardBadge({
				userId: this.id,
				badgeId,
				placeId
			}));
	}

	getAvatar () {
		return this.apis.avatar.getUserAvatar(this.id);
	}

	getWearingAssets () {
		return this.apis.avatar.getUserWearingAssets(this.id);
	}

	getOutfits (options = {}) {
		return this._validate(options, joi => joi.object({
			page: joi.number(),
			itemsPerPage: joi.number(),
			isEditable: joi.bool()
		}))
			.then(options => {
				options = Object.assign(options, {
					userId: this.id
				});
				return this.apis.avatar.getUserOutfits(options);
			});
	}

	getBadges (options = {}) {
		return this._validate(options, () => this._validate.other.genericFilterOptions)
			.then(options => {
				options.userId = this.id;
				return this.apis.badges.getUserBadges(options);
			});
	}

	getBadgesTimestamps (badges) {
		return this._validate(badges, () => this._validate.other.anyIdentifiers)
			.then(ids => this.apis.badges.getUserBadgeTimestamps({
				userId: this.id,
				badges: ids
			}));
	}

	getOwnedBundles (options = {}) {
		return this._validate(options, () => this._validate.other.genericFilterOptions).then(options => {
			options.userId = this.id;
			return this.apis.catalog.getUserOwnedBundles(options);
		});
	}

	addToChatConversation (conversation) {
		throw new Error("Chat conversations have not been added yet");
		return this._validate(conversation, () => this._validate.chat.conversationIdentifier)
			.then(id => {

			});
	}

	removeFromChatConversation (conversation) {
		throw new Error("Chat conversations have not been added yet");
		return this._validate(conversation, () => this._validate.chat.conversationIdentifier)
			.then(id => {

			});
	}

	createGroupChatConversation (others = []) {
		throw new Error("Chat features not added yet");
		return this._validate.user.validate.identifiers(others)
			.then(ids => {

			});
	}

	startChatConversation () {
		throw new Error("Chat features not added yet");
	}

	getTag () {
		return this.apis.contacts.getUserTags([this.id]).then(tags => tags[0]);
	}

	setPendingTag (tag) {
		return this._validate(tag, joi => joi.any()).then(tag => this.apis.contacts.setPendingTag({
			userId: this.id,
			tag
		}));
	}

	setTag (tag) {
		return this._validate(tag, joi => joi.any()).then(tag => this.apis.contacts.setTag({
			userId: this.id,
			tag
		}));
	}

	removeTag () {
		return this.apis.contacts.setTag({
			userId: this.id,
			tag: ""
		});
	}

	removeFromTeamCreate (universe) {
		return this._validate(universe, () => this._validate.other.anyIdentifier)
			.then(id => this.apis.develop.removeUserFromTeamCreate({
				userId: this.id,
				universeId: id
			}));
	}

	addToTeamCreate (universe) {
		return this._validate(universe, () => this._validate.other.anyIdentifier)
			.then(id => this.apis.develop.addUserToTeamCreate({
				userId: this.id,
				universeId: id
			}));
	}

	getResellableAssetCopies (assetId) {
		return this._validate(assetId, () => this._validate.other.anyIdentifier)
			.then(id => this.apis.economy.getUserResellableAssetCopies({
				userId: this.id,
				assetId: id
			}));
	}

	getFollowers (options = {}) {
		return this._validate(options, () => this._validate.other.genericFilterOptions)
			.then(options => {
				options.userId = this.id;
				return this.apis.friends.getUserFollowers(options);
			});
	}

	getFollowersCount () {
		return this.apis.friends.getUserFollowersCount(this.id);
	}

	getFriends () {
		return this.apis.friends.getUserFriends(this.id);
	}

	getFriendsCount () {
		return this.apis.friends.getUserFriendsCount(this.id);
	}

	getGames () {
		return this.apis.games.getUserGames(this.id);
	}

	getGroupJoinRequest (group) {
		return this._validate.group.validate.identifier(group)
			.then(id => this.apis.groups.getJoinRequest({
				userId: this.id,
				groupId: id
			}));
	}

	acceptGroupJoinRequest (group) {
		return this._validate.group.validate.identifier(group)
			.then(id => this.apis.groups.acceptJoinRequest({
				userId: this.id,
				groupId: id
			}));
	}

	declineGroupJoinRequest (group) {
		return this._validate.group.validate.identifier(group)
			.then(id => this.apis.groups.declineJoinRequest({
				userId: this.id,
				groupId: id
			}));
	}

	setGroupOwnerFor (group) {
		return this._validate.group.validate.identifier(group)
			.then(id => this.apis.groups.changeGroupOwner({
				userId: this.id,
				groupId: id
			}));
	}

	updateMemberInGroup (group, role) {
		return this._validate([group, role], joi => joi.array().items());
	}
}

module.exports = UserBase;
