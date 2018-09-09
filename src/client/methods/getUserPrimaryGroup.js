const Group         = require('../../group/group.js');
const getUserGroups = require('./getUserGroups');


module.exports = async function (userId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!userId || !self) return reject(`Did not provide userId or self`);
        
        
        getUserGroups(userId, self).then(groups=>{
            let getPrimary = groups.find(x=>x.isPrimary==true);
            resolve(new Group.UserGroup(getPrimary, self));
        }).catch(reject);
    })
    return newPromise;
}