// This is the full bloxy class granting all functions available



// Declaring functions and variables
const func_2fa      = require('./lib/bloxy/lib/twostep')

const bloxyUtil     = global.bloxy;
const globalCache   = bloxyUtil.cache;
const fetch         = bloxyUtil.fetch;
const endpoint      = bloxyUtil.endpoints.auth.verify2Step;
const getXcsrf      = bloxyUtil.getXcsrf;


// All classes
const classes = require('../../classes')


const bloxyFunctions = require('../auth/lib/bloxy/main');
const bloxyClasses   = require('../../classes/index')
const userFunctions  = require('./lib/user/main')
const gameClass      = require('./lib/games/main')
const groupFunctions = require('./lib/group/main')


class Bloxy {

    constructor(returned) {


        // Identificator
        this._id = returned.id;
        this.games = new gameClass(this._id);

        /**
        * The roblox user the user is currently authenticated as
        */
        this.account = new classes.userClass.FullUser(returned.user, this._id);


        var thisId = this._id
        getXcsrf(globalCache.Setups[this._id].jar).then(x=>{
            globalCache.Setups[this._id].xcsrf=x;
        })


        /**
         * In order to see whether or not your account has 2FA enabled, you should use the example below
         * @example
         * if (bloxy.twostep.enabled) {
         *     // 
         * }
         */
        this.twostep = {


            /**
             * Boolean whether or not 2FA is enabled on your account
             * @type Boolean
             */
            enabled: Boolean(returned.twostepEnabled),


            /**
             * Whether or not the user has verified using 2FA 
             * @type Boolean
             */
            verified: Boolean(false),


            /// ----------

            /**
             * The username that has 2FA enabled
             * @type String
             */
            user   : null,


            // ------

            /**
             * The session's "ticket" for the 2FA
             * @type String
             */
            ticket : null,

            // ----------


            /**
             * email
             * @type String
             */
            type   : null,

            // ----------

            /**
             * Attempts to verify using 2FA
             * @param {String/Number} code Verify the login by providing the code you received
             */
            verify : async function(code) {
                var getOptions = globalCache[this._id];
                let response = await func_2fa(code, {ticket: this.ticket, user: this.user}, thisId)
                if (!response) throw new Error("Failed to verify using 2FA");
                if (response.success !== true) throw new Error(`Status code: ${response.statusCode}, message: ${res.statusMessage}`)
                this.verified = true;
                return Boolean(true);
            }
        }


        if (returned.twostepEnabled==true) {
            this.twostep.user = returned.user.username;
            this.twostep.ticket = returned.ticket;
            this.twostep.type = returned.twostepType;
        }
    }





    /**
     * Accepts a friend request from a user identifier by *userId*
     * @param {Number} userId 
     */
    async acceptFriendRequest (userId) {
        let couldAccept = await bloxyFunctions.acceptFriendRequest(this.account.userId, userId, this._id).catch(e=>{
            throw new Error(e);
        })
        
        return Boolean(couldAccept);
    }


    /**
     * Creates a developer product for the game
      * @param {Object} settings 
      * @param {Number} settings.universeId
      * @param {String} settings.name
      * @param {Number} settings.price 
      * @param {String} settings.description
      * @returns {Boolean}
     */
    async addDeveloperProduct(settings) {
        return bloxyFunctions.addDeveloperProduct(settings, this._id);
    }


    /**
     * Archives messages identified by their id
     * @param {Array<Number>} messageIds Array consisting of message ids to archive 
     */
    async archiveMessages(messageIds) {
        let archived = await bloxyFunctions.archiveMessages(messageIds, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(archived)
    }


    /**
     * Blocks a user identified by their userId
     * @param {Number} targetId 
     */
    async blockUser (targetId) {
        let couldBlock = await bloxyFunctions.blockUser(targetId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(couldBlock);
    }

    
    /**
     * Attempts to buy an asset
     * @param {Number} productId The id of the asset
     * @param {Number} expectedPrice The price that you expected to pay
     * @param {Number} sellerId The userId of the user
     */
    async buyAsset(productId, expectedPrice, sellerId) {
        let couldBuy = await bloxyFunctions.buyAsset(productId, expectedPrice, sellerId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(couldBuy);
    }


    /**
     * Checks if the user identified by their userId can manage an asset identified by its id
     * @param {Number} userId 
     * @param {Number} assetId 
     */
    async canManageAsset(userId, assetId) {
        let canManage = await bloxyFunctions.canManageAsset(userId, assetId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(canManage);
    }


    /**
     * Attempts to change the blurb of the authenticated user (**Currently does not work if you have account pin enabled**)
     * @param {String} newBlurb 
     */
    async changeBlurb(newBlurb) {
        let couldChange = await bloxyFunctions.changeBlurb(newBlurb, this._id).catch(e=>{
            throw new Error(e);
        });
        return Boolean(couldChange);
    }

    /**
     * Changes the status for the authenticated user
     * @param {String} newStatus 
     */
    async changeStatus (newStatus) {
        let couldChange = await bloxyFunctions.changeStatus(newStatus, this._id).catch(e=>{
            throw new Error(e);
        });
        return Boolean(couldChange);
    }


    /**
     * Configures an asset
     * @param {Object} setup
     * @param {Number} setup.assetId
     * @param {String} setup.title
     * @param {String} setup.description
     * @param {Boolean} setup.enableComments
     * @param {Number} setup.sellForRobux (*Optional*) 
     * @param {Number} setup.genreSelection 
     */
    async configureItem (setup) {
        let configure = await bloxyFunctions.configureItem(setup, this._id);
        return configure;
    }


    /**
     * Declines a friend request from the user identified by their userId
     * @param {Number} userId 
     */
    async declineFriendRequest(userId) {
        let declined = await bloxyFunctions.declineFriendRequest(this.account.userId, userId, this._id).catch(e=>{
            throw new Error(e);
        });
        return Boolean(declined);
    }

    /**
     * Deletes an asset from the authenticated user
     * @param {Number} assetId 
     * @returns {Boolean}
     */
    async deleteFromInventory(assetId) {
        return userFunctions.deleteFromInventory(assetId, this._id);
    }

    /**
     * Attempts to get a message matching the messageId in parameter
     * @param {Number} messageId 
     * 
     */
    async getMessageById(messageId) {
        let found = await userFunctions.getMessageById(messageId, this._id);
        if (found) {
           return new bloxyClasses.userClass.Message(found, this._id);
        } else return null;
    }

    /**
     * Follows a user identified by their userId
     * @param {Number} targetId 
     */
    async followUser(targetId) {
        let follow = await bloxyFunctions.followUser(targetId, this._id).catch(e=>{
            throw new Error(e);
        })
        return Boolean(follow);
    }
    
    /**
     * Sends a friend request to a user identified by their userId
     * @param {Number} targetId 
     */
    async friendUser (targetId) {
        let friend = await bloxyFunctions.friendUser(targetId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(friend);
    }


    /**
     * Gets the authenticated user's archived messages
     * @param {Number} page (*Optional*) The page of the archived messags you want to get
     * @param {Number} limit (*Optional*) How many messages you'd like to get for each page
     */
    async getArchivedMessages(page, limit) {
        let messages = await bloxyFunctions.getArchivedMessages({
            page: page,
            limit: limit
        }, this._id).catch(e=>{
            throw new Error(e);
        })
        let createResponse = {
            currentPage: Number(messages.currentPage),
            totalPages : Number(messages.totalPages),
            messages: [].concat(messages.messages).map(x=>new bloxyClasses.userClass.Message(x, this._id))
        }

        return createResponse;
    }


    /**
     * Gets the authenticated user's current amount of Robux.
     * **Does not give you "free Robux" :facepalm:**
     * 
     */
    async getCurrency() {
        let getCurrency = await bloxyFunctions.getCurrency(this._id).catch(e=>{
            throw new Error(e);
        });

        resolve(Number(getCurrency));
    }

    /**
     * Gets friend requests
     * @param {Number} page (*Optional*) the page to get friend requests from
     */
    async getFriendRequests(page) {
        let requests = await bloxyFunctions.getFriendRequests({
            page:page
        }, this._id).catch(e=>{
            throw new Error(e);
        });


        let createResponse = {
            userId: Number(requests.userId),
            totalRequests: Number(requests.totalRequests),
            currentPage: Number(requests.currentPage),
            pageSize: Number(requests.pageSize),
            totalPages: Number(requests.totalPages),
            friendsType: String(requests.friendsType).toString(),
            requests: [].concat(requests.requests).map(x=> new bloxyClasses.userClass.FriendRequest(x, this._id))
        }

        return createResponse;

    }



    
    


    /**
     * Checks if a user owns an asset
     * @param {Number} userId User's id
     * @param {*} assetId Id of the asset
     */
    async canManageAsset (userId, assetId) {

        let canManage = await bloxyFunctions.canManageAsset(userId, assetId, this._id).catch(e=>{
            throw new Error(e);
        })
        
        return Boolean(canManage);
    }


    /**
     * Gets a user's followers
     * @param {Number} userId The user you want to get followers of
     * @param {Number} page (*Optional*) The page to get
     */
    async getFollowers (userId, page) {


        let getFollowers = await bloxyFunctions.getFollowers({
            userId: userId,
            page: page
        }, this._id).catch(e=>{
            throw new Error(e);
        })

        if (!getFollowers.followers) throw new Error(`Failed to get user's followers. Make sure you provided a correct user id`);
        
        let createResult = {
            userId: Number(getFollowers.userId),
            totalFollowers: Number(getFollowers.totalFollowers),
            currentPage: Number(getFollowers.currentPage),
            totalPages: Number(getFollowers.totalPages),
            friendsType: String(getFollowers.friendsType).toString('utf8'),
            followers: [].concat(getFollowers.followers).map(x=>new bloxyClasses.userClass.Follower(x, this._id))
        }

        return createResult
    }


    /**
     * Gets the users the userId is following
     * @param {Number} userId 
     * @param {Number} page 
     * 
     */

    async getFollowing(userId, page) {
        let getFollowing = await bloxyFunctions.getFollowings({
            userId: userId,
            page  :page
        }).catch(e=>{
            throw new Error(e);
        })

        if (!getFollowing.following) throw new Error("Failed to get following users, make sure you provided a correct userid");

        let createResult = {
            userId: Number(getFollowing.userId),
            totalFollowers: Number(getFollowing.totalFollowers),
            currentPage: Number(getFollowing.currentPage),
            pageSize: Number(getFollowing.pageSize),
            totalPages: Number(getFollowing.totalPages),
            friendsType: String(getFollowing.friendsType),
            following: [].concat(getFollowing.following).map(x=> new bloxyClasses.userClass.Follower(x, this._id))
        }

        return createResult;
    }


    /**
     * Gets a user by either userid or username
     * @param userId_or_username String = username, number = userid
     * @param {String} specified You can specify either 'username' or 'userid'
     */
    async getUser(userId_or_username, specified) {
        let gg = typeof(userId_or_username);
        specified = specified || gg;
        specified = specified.toLowerCase();

        let thisId;
        if (specified=='username' || specified == 'name' || specified=='string') {
            // Username
            let getId = await bloxyFunctions.getIdByUsername(userId_or_username, this._id).catch(e=>{throw new Error(e)});
            if (!getId) throw new Error("Failed to get id by username, make sure you provided a correct username");
            thisId = getId;
        } else {
            // Id
            thisId = parseInt(userId_or_username)
        }
        if (!thisId) throw new Error("Failed to get id, make sure you provided correct arguments");

        let getUser = await bloxyFunctions.getUserProfile(thisId).catch(e=>{throw new Error(e)});
        if (!getUser || !getUser.username) throw new Error("Failed to get user");

        let createResponse = new bloxyClasses.userClass.FullUser(getUser, this._id);
        return createResponse;
    }


    /**
     * Gets a user's friends
     * @param {Number} userId The userId
     * @param {Number} page (*Optional*) The page
     */
    async getFriends (userId, page) {
        let getUserFriends = await bloxyFunctions.getFriends({
            userId: userId,
            page: page
        }, this._id).catch(e=>{
            throw new Error(e);
        })

        if (!getUserFriends) throw new Error("Failed to get user's friends. Make sure you provided correct userid");
        let createResponse = [].concat(getUserFriends).map(x=> new bloxyClasses.userClass.PartialUser(x, this._id));
        return createResponse;
    }   
    

    /**
     * Gets the authenticated user's friends that are online
     */
    async getFriendsOnline(userId) {
        let friendsOnline = await bloxyFunctions.getFriendsOnline({}, this._id).catch(e=>{
            throw new Error(e);
        })
    }

    /**
     * Gets a group by id
     * @param {Number} groupId 
     */
    async getGroup(groupId) {
        let getGroup = await bloxyFunctions.getGroup(groupId, this._id).catch(e=>{
            throw new Error(e);
        })
        let createResponse = new bloxyClasses.groupClass.RobloxGroup(getGroup, this._id);
        return createResponse;
    }
    async getGroupsIManage() {
        let groups = await bloxyFunctions.getGroupsIManage(this._id).catch(e=>{
            throw new Error(e);
        });
        let createResponse = [].concat(groups).map(x=>new bloxyClasses.groupClass.PartialGroup(x, this._id));
        return createResponse
    }

    


    /**
     * Gets the number of a user's friends
     * @param {Number} userId UserId
     */
    async getNumFriends (userId) {
        let getNum = await bloxyFunctions.getNumFriends(userId, this._id).catch(e=>{
            throw new Error(e);
        })

        if (getNum==null) throw new Error("Failed to get number of friends for user, make sure you provided the correct userid");

        return Number(getNum)
    }


    /**
     * Returns various information about an asset (identified by its id)
     * @param {Number} assetId 
     */
    async getProductInfo (assetId) {
        let getInfo = await bloxyFunctions.getProductInfo(assetId, this._id);
        let createResponse = new bloxyClasses.assetClass.ProductInfo(getInfo, this._id);
        return createResponse;
    }


    /**
     * Gets a user's group
     * @param {Number} userId UserId of user
     */
    async getUserGroups (userId) {
        let getGroups = await bloxyFunctions.getUserGroups(userId, this._id).catch(e=>{
            throw new Error(e);
        })
        if (!getGroups) throw new Error("Failed to get user's groups");

        let createResponse = [].concat(getGroups).map(x=> new bloxyClasses.groupClass.MemberGroup(x, this._id));
        return createResponse;
    }


    /**
     * Gets the id of the user by name
     * @param {String} username 
     */
    async getIdByUsername(username) {
        let getId = await bloxyFunctions.getIdByUsername(username, this._id);
        let createResponse = new bloxyClasses.userClass.PartialUser({
            userId: getId,
            username: username
        }, this._id);
        return createResponse;
    }


    /**
     * Gets the name of the user by id
     * @param {Number} userId 
     */
    async getUsernameById(userId) {
        let getName = await bloxyFunctions.getUsernameById(userId, this._id);
        let createResponse = new bloxyClasses.userClass.PartialUser({
            userId: userId,
            username: getName
        }, this._id);
        return createResponse;
    }


    /**
     * Gets a user's places
     * @param {Number} userId 
     * @param {Number} page 
     */
    async getUserPlaces(userId, page) {
        let getPlaces = await bloxyFunctions.getUserPlaces({
            userId: userId,
            page: page
        }, this._id).catch(e=>{
            throw new Error(e);
        })

        if (!getPlaces || !getPlaces.places) throw new Error("Failed to get user's places");
        let createResponse = {
            totalItems: Number(getPlaces.totalItems),
            start: Number(getPlaces.start),
            end: Number(getPlaces.end),
            currentPage: Number(getPlaces.currentPage),
            nextPage: Number(getPlaces.nextPage),
            itemsPerPage: Number(getPlaces.itemsPerPage),
            pageType: String(getPlaces.pageType).toString(),
            places: [].concat(getPlaces.places).map(x=> new bloxyClasses.userClass.UserPlace(x.Item, this._id))
        }
        
        return createResponse;
    }


    /**
     * Gets a user's primary group and returns a bit information about it and his rank
     * @param {Number} userId 
     */
    async getUserPrimaryGroup(userId) {
        let getPrimary = await bloxyFunctions.getUserPrimaryGroup(userId, this._id).catch(e=>{
            throw new Error(e);
        })

        if (!getPrimary) return null;
        let createResponse = new bloxyClasses.groupClass.MemberGroup(getPrimary, this._id);
        return createResponse;
    }

    /**
     * Gets a user's **Roblox** badges
     * @param {Number} userId 
     */
    async getUserRobloxBadges(userId) {
        let badges = await bloxyFunctions.getUserRobloxBadges(userId, this._id).catch(e=>{
            throw new Error(e);
        })
        if (!badges) reject(`Failed to get user's roblox badges`)

        let createResponse = {
            userId: Number(badges.userId),
            badges: [].concat(badges.badges).map(x=> new bloxyClasses.userClass.RobloxBadge(x, this._id))
        }
        return createResponse;
    }


    /**
     * Checks typical signs and determines if the user is a bot based on if a score is higher than an usual score
     * @param {Number} userId 
     * @returns Boolean
     */
    async isAssumedBot(userId) {
        let isBot = await bloxyFunctions.isAssumedBot(userId, this._id).catch(e=>{
            throw new Error(e);
        });
        if (!isBot) return false;
        return Boolean(isBot);
    }


    /**
     * Checks if the two users (identified by their userId) are friends
     * @param {Number} userId1 
     * @param {Number} userId2 
     */
    async isFriends(userId1, userId2) {
        let isFriends = await bloxyFunctions.isFriends(userId1, userId2, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(isFriends);
    }


    /**
     * Checks if a name is taken on Roblox
     * @param {String} name 
     */
    async isNameTaken(name) {
        let isTaken = await bloxyFunctions.isNameTaken(name, this._id).catch(e=>{
            throw new Error(e);
        })
        if (!isTaken) return false;
        return true;
    }


    /**
     * Returns whether or not the user is in the specified group
     * @param {Number} userId 
     * @param {Number} groupId 
     * @returns {Boolean}
     */
    async isInGroup(userId, groupId) {
        return groupFunctions.isInGroup(userId, groupId, this._id);
    }


    /**
     * Checks if a user owns an asset identified by id
     * @param {Number} userId 
     * @param {Number} assetId 
     */
    async ownsAsset(userId, assetId) {
        let owns = await bloxyFunctions.ownsAsset({
            userId: userId,
            assetId: assetId
        }, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(owns) || false;
    }

    /**
     * Emits the event 'newMessage' which will return the new message's id
     * Emits the event 'presenceBulkNotifications' whenever a user's presence changes
     * Emits the events 'newNotification' ready', 'reconnected' and 'ended'
     */
    onNotification() {
        return new userFunctions.onNotification(this._id);
    }
    /**
     * Performs a request to the given url with options
     * @param {String} setup.url 
     * @param {String} setup.method
     * @param setup.body
     * @param setup.json
     * @param setup.form
     * @param {Number} id 
     */
    async request(setup) {
        return bloxyFunctions.request(setup, this._id);
    }

    
    /**
     * Search for users
     * @param {String} query What you search for
     * @param {Number} startIndex (*Optional*) Where to start from
     */
    async searchUsers(query, startIndex) {
        let search = await bloxyFunctions.searchUsers({
            query:query,
            startIndex:startIndex
        }, this._id).catch(e=>{
            throw new Error(e);
        });
        if (!search || !search.results) return console.error(`Failed to search for users`)
        let createResponse = {
            query: String(search.keyword).toString(),
            startIndex: Number(search.startIndex),
            maxRows: Number(search.maxRows),
            totalResults: Number(search.totalResults),
            results: [].concat(search.results).map(x=> new bloxyClasses.userClass.SearchResult(x, this._id))
        }
        return createResponse;
    }



    /**
     * Unblocks a user identified by their userId
     * @param {Number} targetId 
     */
    async unblockUser(targetId) {
        let unblocked = await bloxyFunctions.unblockUser(targetId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(unblocked);
    }


    /**
     * Unfollows a user identified by their userId
     * @param {Number} targetId 
     */
    async unfollowUser(targetId) {
        let unfollow = await bloxyFunctions.unfollowUser(targetId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(unfollow);
    }


    /**
     * Unfriends the user identified by their userId
     * @param {Number} targetId 
     */
    async unfriendUser(targetId) {
        let unfriend = await bloxyFunctions.unfriendUser(targetId, this._id).catch(e=>{
            throw new Error(e);
        });

        return Boolean(unfriend);
    }



    /**
 * Uploads an item to Roblox
 * @param {Object} settings 
 * @param {Number} settings.assetType (11 for shirt, 12 for pants, 13 for decals)
 * @param {String} settings.name Name of the item you're uploading
 * @param settings.file A readstream (fs module) of what to upload
 * @param {Number} settings.groupId (*Optional*) If provided, will upload to the specified group instead of your own user
 * @param {Boolean} settings.fullInfo (*Optional*) whether or not you want to get information about the asset after upload
 */


    async uploadAsset(settings) {
        settings = settings || {};
        
        let upload = await bloxyFunctions.uploadAsset(settings, this._id)
        if (settings.fullInfo) {
            let getInfo = await bloxyFunctions.getProductInfo(upload, this._id);
            return getInfo;
        } else return upload
    }
}




module.exports = Bloxy;