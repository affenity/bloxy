const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const changeRank = require('./changeRank')


module.exports = async function(groupId, userId, id) {
    return changeRank(groupId, userId, -1, id);
}