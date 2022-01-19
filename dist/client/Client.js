"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const tslib_1 = require("tslib");
const ClientBase_1 = require("./ClientBase");
const apis_1 = require("./apis");
const ClientUser_1 = require("../old_structures/ClientUser");
const rest_1 = require("../controllers/rest");
const old_structures_1 = require("../old_structures");
const ClientSocket = (0, tslib_1.__importStar)(require("./lib/ClientSocket/ClientSocket"));
const ChatManager_1 = require("./lib/ChatManager/ChatManager");
const DataStoreManager_1 = require("./lib/DataStoreManager/DataStoreManager");
const User_1 = require("../structures/User");
const BaseUser_1 = require("../structures/BaseUser");
class Client extends ClientBase_1.ClientBase {
    constructor(options) {
        super(options);
        this.user = null;
        this.apis = (0, apis_1.initAPIs)(this);
        this.rest = new rest_1.RESTController(this, this.options.rest);
        this.socket = new ClientSocket.Socket(this);
        this.dataStoreManager = new DataStoreManager_1.DataStoreManager(this);
        this.chat = new ChatManager_1.ChatManager(this);
        this.init();
    }
    isLoggedIn() {
        return this.user !== null;
    }
    init() {
        if (this.options.rest) {
            this.rest.setOptions(this.options.rest);
        }
    }
    login(cookie) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.log("info", {
                name: "Client.login",
                description: `Started login process..`
            });
            cookie = cookie || (this.options.credentials || {}).cookie || undefined;
            if (!cookie) {
                throw new Error("Attempted to log in without a cookie!");
            }
            this.options.credentials = Object.assign(Object.assign({}, this.options.credentials), { cookie });
            const createdCookie = this.rest.createCookie({
                key: ".ROBLOSECURITY",
                value: cookie,
                domain: "roblox.com",
                hostOnly: false,
                httpOnly: false
            });
            this.rest.addCookie(createdCookie);
            this.log("info", {
                name: "Client.login",
                description: `Added cookie to cookie jar, proceeding to fetching authenticated user information..`
            });
            const getAuthenticationData = yield this.apis.usersAPI.getAuthenticatedUserInformation();
            this.user = new ClientUser_1.ClientUser({
                id: getAuthenticationData.id,
                name: getAuthenticationData.name
            }, this);
            this.emit("loggedIn");
            this.log("info", {
                name: "Client.login",
                description: `Successfully logged in as ${getAuthenticationData.name}`
            });
            return this.user;
        });
    }
    getGroup(groupId) {
        return this.apis.groupsAPI
            .getGroup({
            groupId
        })
            .then((data) => {
            if (!data) {
                throw new Error(`Group not found: ${groupId}`);
            }
            else {
                return new old_structures_1.Group(data, this);
            }
        });
    }
    /**
     * Returns a base user object from a user id.
     * @param userId The user's ID
     */
    getBaseUser(userId) {
        return new BaseUser_1.BaseUser(this, userId);
    }
    /**
     * Returns a user object from a user id.
     * @param userId The user's ID
     */
    getUser(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.apis.usersAPI.getUserById({ userId });
            return new User_1.User(this, data);
        });
    }
    getUserIdFromUsername(username) {
        return this.apis.usersAPI
            .getUsersByUsernames({
            usernames: [username],
            excludeBannedUsers: false
        })
            .then((response) => {
            if (response.data && response.data[0]) {
                return new old_structures_1.PartialUser(response.data[0], this);
            }
            else {
                throw new Error("Got invalid response from getUserIdFromUsername");
            }
        });
    }
    getUsernameFromUserId(userId) {
        if (typeof userId === "string") {
            userId = parseInt(userId);
        }
        return this.apis.generalApi
            .getUserById({
            userId
        })
            .then((data) => new old_structures_1.PartialUser(data, this));
    }
    getUsersByUserIds(userIds, excludeBannedUsers = false) {
        if (typeof userIds[0] === "string") {
            userIds = userIds.map((userId) => parseInt(userId));
        }
        return this.apis.usersAPI
            .getUsersByIds({
            excludeBannedUsers,
            userIds: userIds
        })
            .then((response) => response.data.map((userData) => new old_structures_1.PartialUser(userData, this)));
    }
    getUsersByUsernames(usernames, excludeBannedUsers = false) {
        return this.apis.usersAPI
            .getUsersByUsernames({
            excludeBannedUsers,
            usernames
        })
            .then((response) => response.data.map((userData) => new old_structures_1.PartialUser(userData, this)));
    }
}
exports.Client = Client;
