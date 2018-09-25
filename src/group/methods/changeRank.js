

const getRoles           = require('./getRoles');
const setRank            = require('./setRank');
const getRankNameInGroup = require('./getRankNameInGroup');



module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        getRankNameInGroup({ userId: setup.userId, groupId: setup.groupId }, self).then(rankName=>{
            if (!rankName) return reject(`Failed to get rank name in group`);
            if (rankName.toLowerCase() === 'guest') return reject(`User is not in group`);
            getRoles(setup.groupId, self).then(roles=>{
                for (let num=0;num<roles.length;num++) {
                    let role = roles[num];
                    let thisName = role.name;
                    if (thisName == rankName) {
                        let change = num + setup.amount;
                        let found = roles[change];
                        if (!found || !found.id) return reject(`Rank change is out of range`);
                        setRank({ groupId: setup.groupId, roleId: found.id, userId: setup.userId}, self).then( () => {
                            resolve(true);
                        }).catch(reject);
                    }
                }
            }).catch(reject)
        }).catch(reject);
    })
    return newPromise;
}