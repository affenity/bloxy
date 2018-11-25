

/**
 * userId
 * @param {String} userId The user's id
 */
module.exports = async function (userId) {
	let usercache = await this.user.handler.getCache.bind(this)();
	return usercache[userId];
};