const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const changeRank = require('./changeRank')

module.exports = async function(groupId, userId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !userId || !id) return reject(`Did not provide groupId, userId or identificator`);
        resolve(changeRank(groupId, userId, 1));
    })
    return newPromise;
}