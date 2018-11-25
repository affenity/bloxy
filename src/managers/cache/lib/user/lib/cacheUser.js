
/**
 * Caches a user's data
 * @param {String} userId The user id of the user
 * @param {Any} userData The data to cache on the user
 */
module.exports = async function (userId, userData) {
	let usercache = await this.user.handler.getCache.bind(this)();
	usercache[userId.toString()] = userData;

	await this.user.handler.updateCache.bind(this)(usercache);
};