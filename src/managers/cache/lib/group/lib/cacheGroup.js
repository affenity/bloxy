
/**
 * Caches a group's data
 * @param {String} groupId The group id
 * @param {any} groupData The group data
 */

module.exports = async function (groupId, groupData) {
	let groupcache = await this.group.handler.getCache.bind(this)();
	groupcache[groupId.toString()] = groupData;

	await this.group.handler.updateCache.bind(this)(groupcache);
};