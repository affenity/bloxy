// Requiring dependencies

const easydata = require("easydata");
const path     = require("path");

// ---------------------




class CacheManager {

	constructor () {

		this.cacher = null;
		this.group  = require("./lib/group");
		this.user   = require("./lib/user");

	}

	/**
     * Starts the CacheManager
     */
	async init () {
		this.cacher = new easydata({
			path: path.join(__dirname, "./lib/storage/"),
			name: ".cache",
			compress: false
		});

		await this.cacher.init();
	}


	/**
     * Caches a user's data
     * @param {String} userId The user's id
     * @param {any} userData The data to cache
     */

	async cacheUser (userId, userData) {
		return this.user.cacheUser.bind(this)(userId, userData);
	}

	/**
     * Gets the cache of a user
     * @param {String} userId The user's id 
     */

	async getUserCache (userId) {
		return this.user.getUserCache.bind(this)(userId);
	}

	/**
     * Deletes all the user cache
     */
	async deleteUserCache () {
		return this.user.handler.deleteCache.bind(this)();
	}


	/**
     * Caches a group's data
     * @param {String} groupId 
     * @param {any} groupData 
     */
	async cacheGroup (groupId, groupData) {
		return this.group.cacheGroup.bind(this)(groupId, groupData);
	}

	/**
     * Gets a cached version of the group data (if any)
     * @param {String} groupId 
     */
	async getGroupCache (groupId) {
		return this.group.getGroupCache.bind(this)(groupId);
	}

	/**
     * Deletes all group cache
     */
	async deleteGroupCache () {
		return this.group.handler.deleteCache.bind(this)();
	}

}

let manager = new CacheManager();
manager.init();


module.exports = manager;