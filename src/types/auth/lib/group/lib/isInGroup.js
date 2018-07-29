const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const bloxyFunctions = require('../../bloxy/main')

module.exports = async function(userId, groupId, id ) {
    var newPromise = new Promise(async function(resolve, reject) {
        bloxyFunctions.getUserGroups(userId, id).then(groups=>{
            let getgroup = groups.filter(x=>x.Id==groupId);
            resolve(getgroup!=null);
        }).catch(reject);
    })
    return newPromise;
}