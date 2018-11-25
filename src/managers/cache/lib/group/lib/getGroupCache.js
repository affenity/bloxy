
/**
 * Gets a cached version of the group data (if any)
 * @param {String} groupId
 */

module.exports = async function (groupId) {
	let groupcache = await this.group.handler.getCache.bind(this)();
	return groupcache[groupId];
};