const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

const module_getUserGroups = require('./getUserGroups')

module.exports = async function(userId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        module_getUserGroups(userId, id).then(allGroups=>{
            let getPrimary = allGroups.find(x=>x.IsPrimary==true);
            if (!getPrimary) return resolve(null);
            resolve(getPrimary);
        }).catch(reject);
    })
    return newPromise;
}