// rblx-js module
// Coded by scriptbased
// Check out the package: https://www.npmjs.com/package/rblx-js

// Setting global variables

global.Shouts       = {};
global.Walls        = {};
global.JoinRequests = {};
global.Blurbs       = {};
global.Statuses     = {};

// Requiring modules

const request = require('request');
const cheerio = require('cheerio');

require('./src/user/class.js')
require('./src/user/main.js')
require('./src/group/class.js')
require('./src/group/main.js')

const userClass = require('./src/user/class.js');
const userFuncs = require('./src/user/main.js');


const groupClass = require('./src/group/class.js')
const groupFuncs = require('./src/group/main.js');


const assetFuncs = require('./src/asset/main.js');
// Util modules

const getXcsrf = require('./src/util/getXcsrf.js');
const self_authenticate = require('./src/util/authenticate.js');



// Class
class RobloxApi {

    /**
     * Initialises the node-rbx module, you must provide the settings to log in with here, or in the .login() function
     * @param {settings} settings (Optional)
     * @example var rbx = new nodeRbx({
     *      username : 'Username',
     *      password : 'Password'
     * })
     * @example var rbx = new nodeRbx()
     */

    constructor(settings) {
        settings = settings || {};
        this.settings = settings;
        this.setup = {};
        this.account = null;
        this.setup.isAuthenticated = false;
        this.setup.jar = request.jar();
        this.setup.xcsrf = null;
    }




    
    async login(settings) {
        if (this.isAuthenticated==true) return console.warn(`Already authenticated!`);
        if (!settings && !this.settings) throw new Error("You must supply login credentials in order to sign in!");
        var settings = settings || this.settings;
        if ((settings.username!=null?settings.password!=null?true:false:settings.cookie!=null?true:null)!=true) throw new Error("You must supply login credentials. Either username and password, or cookie");

        let thisJar = this.setup.jar;

        var newPromise = new Promise(function(resolve, reject) {

            let authUrl = `https://www.roblox.com/newlogin`;
            let bodyPost = {
                username: settings.username,
                password: settings.password
            };
            
            if (settings.username && settings.password && !settings.cookie) {
                request(authUrl, {method:"POST", body:bodyPost, json:true, followAllRedirects:true, followRedirect: (redirect) => {/*console.log(redirect.headers.location)*/}, jar:thisJar}, async function(err, res) {
                    if (err) reject(`Failed to authenticate with login credentials.Error:\n ${err}`);
                    
                    if (res.statusCode==302) {
                        
                        let cookies = res.headers["set-cookie"];
                        if (!cookies) reject(`No cookies retrieved!`)
                        let session = cookies.toString().match(/\.ROBLOSECURITY=(.*?);/)[1];
                        if (!session) reject(`Failed to get .ROBLOSECURITY cookie`);

                        getXcsrf(thisJar).then(xcsrf_token=>{
                            if (!xcsrf_token) reject(`Failed to get X-CSRF-TOKEN`)
                            resolve({
                                jar: thisJar,
                                xcsrf: xcsrf_token
                            })
                        })
                    }
                })
            } else if (settings.cookie!=null) {
                var c1 = request.cookie(`.ROBLOSECURITY=${settings.cookie}`);
                var c2 = request.cookie(`.ROBLOSECURITY=${settings.cookie}`);
                var c3 = request.cookie(`.ROBLOSECURITY=${settings.cookie}`);

                thisJar.setCookie(c1, 'https://www.roblox.com/')
                thisJar.setCookie(c2, 'https://api.roblox.com/');
                thisJar.setCookie(c3, 'https://groups.roblox.com/');

                request('https://www.roblox.com/favorite/toggle', { method: "POST", jar: thisJar, followAllRedirects: true, followRedirect: (resp) => { console.log(/*resp.headers.location*/) } }, async function (err, res, body) {
                    if (!res.headers['x-csrf-token']) reject("Failed to get X-CSRF-TOKEN, make sure you have provided correct cookie");
                    var xcsrf = res.headers['x-csrf-token'];
                    if (!xcsrf) reject("Failed to get the x-csrf-token");
                    resolve({
                        jar:thisJar,
                        xcsrf:xcsrf
                    })
                })
            }
        })

        let awaitLogin = await newPromise;
        this.setup.jar = awaitLogin.jar;
        this.setup.xcsrf = awaitLogin.xcsrf;
        await this.authenticate();
        this.setup.refreshInterval = setInterval( () => {
            this.refreshXcsrf()
        }, 60000 * 4)
    }


    async authenticate() {
        let res = await self_authenticate(this.setup.jar, this.setup.xcsrf);
        if (!res) throw new Error("Failed to authenticate user");
        let res_jar = res.jar;
        let res_accountId = res.myAccountId;
        this.updateJar(res_jar);
        this.account = new userClass.User(await userFuncs.getUserProfile(res_accountId), this.setup);
    }

    
    async refreshXcsrf() {
        getXcsrf(this.setup.jar).then(xcsrf_token=>{
            if (!xcsrf_token) throw new Error("Failed to retrieve X-csrf-token")
            this.setup.xcsrf=xcsrf_token;
        })
    }

    /**
     * Don't use this if you don't know what it is for
     * Updates the current jar
     * @param {Jar} newJar The new jar
     */
    updateJar(newJar) {
        this.setup.jar=newJar;
    }


    // MAIN FUNCTIONS


    /**
     * Get a user by name
     * @param {String} username The name of the user
     */
    async getUserByUsername(username) {
        if (!username) throw new Error("You need to provide username!");
        let getUser = await userFuncs.getUserByUsername(username, this.setup)
        let userId=getUser.id,
        jar=getUser.jar;
        this.updateJar(jar);
        return new userClass.User(await userFuncs.getUserProfile(userId), this.setup);
    }

    /**
     * Gets a user by id
     * @param {Number} id Id of the user
     */
    async getUserById(id) {
        if (!id) throw new Error("You need to provide a userid");
        let getProfile = await userFuncs.getUserProfile(id);
        return new userClass.User(getProfile, this.setup);
    }

    /**
     * Gets the friend request the authenticated user has
     * @param {Number} page The page to see 
     */
    async getFriendRequests(page) {
        return userFuncs.getFriendRequests(page, this.setup);
    }



    /**
     * Gets the authenticated user's amount of Robux
     */
    async getRobux() {
        return userFuncs.getCurrency(this.setup);
    }

    /**
     * Accepts a friend request (if any) from the *targetId*
     * @param {Number} targetId The user's id 
     */
    async acceptFriendRequest(targetId) {
        return userFuncs.acceptFriendRequest(this.account.userId, targetId, this.setup);
    }

    /**
     * Declines a friend request (if any) from the *targetId*
     * @param {Number} targetId The user's id 
     */
    async declineFriendRequest(targetId) {
        return userFuncs.declineFriendRequest(this.account.userId, targetId, this.setup);
    }

    /**
     * Checks if a user can manage an asset
     * @param {Number} userId The user id
     * @param {Number} assetId The asset id 
     */
    async userCanManageAsset(userId, assetId) {
        return userFuncs.canManageAsset(userId, assetId, this.setup);
    }
    

    /**
     * Checks if a user owns an asset
     * @param {Number} userId The user id
     * @param {Number} assetId The asset 
     */
    async userOwnsAsset(userId, assetId) {
        return userFuncs.ownsAsset(userId, assetId, this.setup);
    }


    /**
     * Blocks a user from the authenticated account
     * @param {Number} userId The user id
     */
    async BlockUser(userId) {
        return userFuncs.blockUser(userId, this.setup);
    }

    /**
     * Unblocks a user from the authenticated acccount
     * @param {Number} userId The user id 
     */
    async UnblockUser(userId) {
        return userFuncs.unblockUser(userId, this.setup);
    }


    /**
     * Follows a user with the authenticated account
     * @param {Number} userId The user id
     */
    async FollowUser(userId) {
        return userFuncs.followUser(userId, this.setup);
    }


    /**
     * Unfollows a user with the authenticated account
     * @param {Number} userId The user id
     */
    async UnfollowUser(userId) {
        return userFuncs.unfollowUser(userId, this.setup);
    }

    /**
     * Sends a message to *userId*
     * @param {Number} userId The user id
     * @param {Settings} opts The parameters in here
     * @argument {Settings.body} The message to send
     * @argument {Settings.title} The title of the message
     */
    async messageUser(userId, opts) {
        if (!userId || !opts) throw new Error("You need to provide userId and the opts")
        opts.jar=this.setup.jar;
        opts.xcsrf=this.setup.xcsrf;
        return userFuncs.messageUser(userId, opts);
    }

    
    /**
     * Changes the authenticated user's status
     * @param {String} newStatus The new status
     */
    async changeStatus(newStatus) {
        return userFuncs.changeStatus(newStatus, this.setup);
    }

    /**
     * Changes the authenticated user's blurb (DOES NOT WORK IF ACCOUNT PIN IS ENABLED)
     * @param {String} newBlurb The new blurb
     */
    async changeBlurb(newBlurb) {
        return userFuncs.changeBlurb(newBlurb, this.setup);
    }


    /**
     * Sends a friend request to a user with the authenticated account
     * @param {Number} userId Id of the user to send request to 
     */
    async friendUser(userId) {
        return userFuncs.friendUser(userId, this.setup);
    }

    /**
     * Unfriends a user with on the authenticated account
     * @param {Number} userId The id of the user to unfriend
     */
    async unfriendUser(userId) {
        return userFuncs.unfriendUser(userId, this.setup);
    }

    /**
     * Checks if a name is taken on Roblox
     * @param {String} name The name you'd like
     */
    async isNameTaken(name) {
        return userFuncs.isNameTaken(name, this.setup);
    }

    /**
     * Gets a user's followers or the authenticated user's followers
     * @param {Number} userId The id of the user
     */
    async getFollowers(userId) {
        return userFuncs.getFollowers(userId||this.account.userId, this.setup);
    }

    /**
     * Gets the users who the authenticated user follows
     */
    async getFollowing() {
        return userFuncs.getFollowings(this.setup);
    }

    /**
     * Gets groups the authenticated user or another user is in
     * @param {Number} userId The user id
     */
    async getUserGroups(userId) {
        return userFuncs.getUserGroups(userId||this.account.userId, this.setup);
    }


    /**
     * Checks if two users are friends
     * @param {Number} userId The id of the user
     * @param {Number} userId2 The id of the user
     */
    async isFriends(userId, userId2) {
        return userFuncs.isFriends(userId, userId2, this.setup);
    }


    async getUserPrimaryGroup(username) {
        return userFuncs.getUserPrimaryGroup(username)
    }

    /**
     * Gets the authenticated user's roblox badges, or the user specified with *userId*
     * @param {Number} userId The user id
     */
    async getUserBadges(userId) {
        return userFuncs.getUserRobloxBadges(userId, this.setup);
    }


    async isAssumedBot(userId) {
        return userFuncs.isAssumedBot(userId, this.setup);
    } 



    async getGroup(groupId) {
        return groupFuncs.getGroup(groupId, this.setup)/*new groupClass.Group(await groupFuncs.getGroup(groupId, this.setup), this.setup);*/
    }


    async getProductInfo(assetId) {
        return assetFuncs.getProductInfo(assetId, this.setup);
    }


    /*
    async getUserPlaces(userId) {
        return assetFuncs.getUserPlaces(userId, this.setup);
    }
    async searchMusic(name) {
        return assetFuncs.searchMusic(name);
    }

    async searchUsers(query, searchIndex) {
        return userFuncs.searchUsers(query, searchIndex);
    }

    async searchCatalog(query, category) {
        return [].concat(await assetFuncs.searchCatalog(query, category)).map(x=>new assetClass.SearchResult(x));
    }


    }*/




    async logout() {
        this.setup = {}
        delete this;
    }
    

}





module.exports = RobloxApi;