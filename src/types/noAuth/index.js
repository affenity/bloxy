// This is the class you get when doing new bloxy();
// This will only give you functions that you can use when you are NOT signed in



// Declaring variables

const bloxyUtil = global.bloxy;

const globalCache = bloxyUtil.cache;
const fetch       = bloxyUtil.fetch;
const getXcsrf    = bloxyUtil.getXcsrf;
const messages    = bloxyUtil.messages;


const request = require('request');
const bloxy_auth = require('../auth/index.js');


// Declaring functions

const func_login = require('./lib/login')


const bloxyFunctions = require('../auth/lib/bloxy/main');
const bloxyClasses   = require('../../classes/index')
const groupFunctions = require('../auth/lib/group/main')


class Bloxy_NoAuth {

    /**
     * 
     * @param {Object} options (*optional*) If you want to enter the credentials here in an object
     * @param {String} options.type The type to sign in with. (email, username, phone)
     * @param {String} options.value The value to sign in with (email, username, phone number)
     * @param {String} options.password The password to sign in with
     * @param {String} options.captchaKey The 2Captcha API key to use (for captchas)
     */



    constructor(options) {

        // Creating a "unique" identifier
        this._id = Object.keys(globalCache.Setups).length+1;

        globalCache.Setups[this._id] = {
            jar  : request.jar(),
            xcsrf: null,
            authTab: {
                value: null,
                password: null,
                signinW : null,

                TwoStep: {
                    ticket      : null,
                    user        : null,
                    code        : null,
                    actionType  : 'login'
                },

                CaptchaKey: null
            },
            id: this._id,
            xcsrfInterval : setInterval( async () => {
                if (globalCache.Setups[this._id]) {
                let xc = await getXcsrf(globalCache.Setups[this._id].jar);
                if (!xc) {

                } else globalCache.Setups[this._id].xcsrf = xc;
            } else {
                abortClearUp(this._id)
            }
            }, 1000 * 60 * 5)
        }

        // If the user provided some options

        if (options != null) updateOptions(options, this._id);
    }



    /**
     * Logs in 
     * @param {Object} options (*optional*) If you want to enter the credentials here in an object
     * @param {String} options.type The type to sign in with. (email, username, phone)
     * @param {String} options.value The value to sign in with (email, username, phone number)
     * @param {String} options.password The password to sign in with
     * @param {String} options.captchaKey The 2Captcha API key to use (for captchas)
     */
    async login(options) {
        if (options != null) updateOptions(options, this._id);
        let getOptions = globalCache.Setups[this._id];
        let attemptLogin = await func_login(getOptions).catch(console.error);
        if (!attemptLogin) throw new Error("Couldn't get user!");
        let xb = await getXcsrf(globalCache.Setups[attemptLogin.id].jar);
        globalCache.Setups[attemptLogin.id].xcsrf = xb;
        return new bloxy_auth(attemptLogin);
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

    /* 
    Available functions for this class:
    - getFriends X
    - getNumFriends X
    - getUserGroups X
    - getUserPlaces
    - getUserPrimaryGroup
    - getUserRobloxBadges
    - isAssumedBot
    - isFriends
    - isNameTaken
    - onUserChange
    - ownsAsset
    - searchUser
    */
}





// Function outside class

function updateOptions (options, id) {
    let thisTab = globalCache.Setups[id];
    if ((!options.cookie && (!options.type || !options.value || !options.password))) throw new Error(messages.loginFunc.values);
    // Different ways to sign in


    if (options.captchaKey) thisTab.authTab.CaptchaKey = options.captchaKey;

    // if it is a default way to do it
    if (!options.cookie && options.value) {
        options.type == options.type.toLowerCase();

        let isEmail = options.type === 'email' ? true : options.type == 'mail' ? true : false;
        let isPhone = options.type === 'phone' ? true : options.type == 'phonenumber' ? true : false;
        let isName = options.type === 'username' ? true : options.type == 'name' ? true : options.username != null ? true : false;

        if (!isEmail && !isPhone && !isName) throw new Error(messages.loginFunc.values);

        
        let signinWay;
        if (isEmail) {
            thisTab.authTab.value = options.value;
            signinWay = 'email'
        } else if (isPhone) {
            thisTab.authTab.phone = options.value;
            signinWay = 'phone'
        } else if (isName) {
            thisTab.authTab.value = options.username || options.value;
            signinWay = 'username'
        }
        thisTab.authTab.password = options.password;
        thisTab.authTab.signinW = signinWay;
        globalCache.Setups[id] = thisTab;
        return true;
    } else {
        // Sets the signin way to "cookie"
        thisTab.authTab.signinW = 'cookie';
        thisTab.authTab.cookie = options.cookie;
        globalCache.Setups[id] = thisTab;
        return true;
    }
}



function abortClearUp(id) {
    let getSetup = globalCache.Setups[id];
    if (getSetup) clearInterval(getSetup.xcsrfInterval);
    return true;
}
module.exports = Bloxy_NoAuth;