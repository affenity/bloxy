const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

const getRoles = require('./getRoles')
const setRank = require('./setRank')
const getRankNameInGroup = require('./getRankNameInGroup')

module.exports = async function(groupId, userId, amount, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        getRankNameInGroup(groupId, userId, id).then(rankName=>{
            if (rankName.toLowerCase()=='Guest') return reject(`Target user is not in group`);
            getRoles(groupId, id).then(roles=>{
                for (var x=0;x<roles.length;x++) {
                    let role = roles[x];
                    let thisName = role.Name;
                    if (thisName == rankName) {
                        let change = x + amount;
                        let found = roles[change];
                        if (!found || !found.Id) {
                            return reject(`Rank change is out of range`)
                        } else {
                            setRank(groupId, found.Id, userId, id).then(()=>{
                                resolve(true);
                            }).catch(reject);
                        }
                    }
                }
            }).catch(reject);
        }).catch(reject);
    })
    return newPromise;
}