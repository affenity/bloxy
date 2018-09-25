const EventEmitter = require('events');
const Methods      = require('./methods');
const BloxyClient  = require('./client.js');
const Classes      = require('../classes');
const Group        = require('../group/group');

class ClientFunctions extends EventEmitter {

    /**
     * 
     * @param {BloxyClient} client 
     */
    constructor(client) {
        super();
        this._client = client;
    }

    

    async acceptFriendRequest (userId) {
        let wait = await Methods.acceptFriendRequest(this._client.account.userId, userId, this._client);
        return wait;
    }

    async addDeveloperProduct (opts) {
        let wait = await Methods.addDeveloperProduct(opts, this._client)
        return wait;
    }

    async archiveMessages (messageIds) {
        return Methods.archiveMessages(messageIds, this._client);
    }

    async blockUser (userId) {
        return Methods.blockUser(userId, this._client);
    }

    async buyAsset (productId, expectedPrice, sellerId) {
        return Methods.buyAsset(productId, expectedPrice, sellerId, this._client);
    }

    async canManageAsset (userId, assetId) {
        userId =  ((userId != null && assetId != null) ? userId : (userId != null && assetId == null) ? this._client.account.userId : userId);
        assetId = ((userId != null && assetId != null) ? assetId: (userId != null && assetId == null) ? userId : assetId);

        return Methods.canManageAsset(userId, assetId, this._client);
    }

    async changeBlurb (newBlurb) {
        return Methods.changeBlurb(newBlurb, this._client);
    }

    async changeStatus (newStatus) {
        return Methods.changeStatus(newStatus, this._client);
    }
    
    async configureItem (opts) {
        return Methods.configureItem(opts, this._client);
    }

    async declineFriendRequest (userId) {
        return Methods.declineFriendRequest(this._client.account.userId, userId, this._client);
    }

    async followUser (userId) {
        return Methods.followUser(userId, this._client);
    }

    async friendUser (userId) {
        return Methods.friendUser(userId, this._client);
    }

    async getArchivedMessages (opts) {
        return Methods.getArchivedMessages(opts, this._client);
    }

    async getCurrency () {
        return Methods.getCurrency(this._client);
    }

    async getFollowers (opts) {
        return Methods.getFollowers(opts, this._client);
    }
    
    async getFollowing (opts) {
        return Methods.getFollowings(opts, this._client);
    }

    async getFriendRequests (page) {
        return Methods.getFriendRequests(page, this._client);
    }

    async getFriends (opts) {
        return Methods.getFriends(opts || {userId: this._client.account.userId}, this._client);
    }

    async getFriendsOnline () {
        return Methods.getFriendsOnline(this._client);
    }

    async getGroup (groupId) {
        let group = await Methods.getGroup(groupId, this._client);
        return group;
    }

    async getGroupsIManage () {
        let groups = await Methods.getGroupsIManage(this._client);
        return groups;
    }

    async getIdByUsername (username) {
        return Methods.getIdByUsername(username, this._client);
    }

    async getMessageById (messageId) {
        return Methods.getMessageById(messageId, this._client);
    }

    async getMessages (opts) {
        return Methods.getMessages(opts, this._client);
    }

    async getNumFriends (userId) {
        return Methods.getNumFriends(userId, this._client);
    }

    async getProductInfo (productId) {
        return Methods.getProductInfo(productId, this._client);
    }

    async getUserGroups (userId) {
        let groups = await Methods.getUserGroups(userId, this._client);
        return groups;
    }

    async getUsernameById (userId) {
        return Methods.getUsernameById(userId, this._client);
    }

    async getUserPrimaryGroup (userId) {
        let group = await Methods.getUserPrimaryGroup(userId, this._client);
        return group;
    }

    async getUser (identifier, _type) {
        _type = _type || typeof(identifier);
        _type = _type.toLowerCase();
        _type = _type == 'string' ? 'string' : _type == 'username' ? 'string' : _type == 'userId' ? 'number' : _type == 'number' ? 'string' : typeof(identifier);
        let wait;
        if (_type == 'number') {
            wait = await Methods.getUserProfile(identifier, this).catch();
        } else {
            let getId = await Methods.getIdByUsername(identifier, this);
            wait = await Methods.getUserProfile(getId, this).catch();
        }
        
        return wait;
    }

    async getUserRobloxBadges (userId) {
        let badges = await Methods.getUserRobloxBadges(userId || this._client.account.userId, this._client);
        return badges;
    }

    async getVerificationStatus (userId, platform) {
        return Methods.getVerificationStatus({userId: userId, platform: platform}, this._client);
    }
    async isFriends (userId1, userId2) {
        return Methods.isFriends(userId1, userId2, this._client);
    }

    async isNameTaken (username) {
        return Methods.isNameTaken(username, this._client);
    }

    async markMessagesRead (messages) {
        return Methods.markMessagesRead(messages, this._client);
    }

    async markMessagesUnread (messages) {
        return Methods.markMessagesUnread(messages, this._client);
    }

    async moveMessagesToInbox (messages) {
        return Methods.messagesToInbox(messages, this._client);
    }

    async messageUser (opts) {
        return Methods.messageUser(opts, this._client);
    }

    async ownsAsset (userId, assetId) {
        return Methods.ownsAsset({ assetId: assetId, userId: userId }, this._client);
    }

    async redeemPromoCode (code) {
        return Methods.redeemPromoCode(code, this._client);
    }

    async searchUsers (query) {
        let results = await Methods.searchUsers({query: query}, this._client);
        return results;
    }

    async searchGroups (query) {
        let results = await Methods.searchGroups(query, this._client);
        return results;
    }

    async unblockUser (userId) {
        return Methods.unblockUser(userId, this._client);
    }

    async unfollowUser (userId) {
        return Methods.unfollowUser(userId, this._client);
    }

    async unfriendUser (userId) {
        return Methods.unfriendUser(userId, this._client);
    }

    async uploadAsset (opts) {
        return Methods.uploadAsset(opts, this._client);
    }

    /**
     * Set the duration for how long caching should last (in hours)
     * @param {CacheDurationOptions} options 
     */
    async setCacheDuration (options) {
        return this._client._setup.cache.setCacheDuration(options);
    }


}

module.exports = ClientFunctions;