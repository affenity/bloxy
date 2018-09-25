

const getUserGroups = require('../../client/methods/getUserGroups');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        getUserGroups(setup.userId, self).then(userGroups=>{
            let getGroup = userGroups.find(x=>x.group.groupId==setup.groupId)
            resolve(getGroup!=null);
        }).catch(reject);
    })
    return newPromise;
}