

const getRoles = require('./getRoles');
const Group = require('../group.js');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let rank = setup.rank;
        let name = setup.name;
        let id   = setup.id;

        if (!rank && !name && !id) return reject(`Need to provide either rank, name or id as identification when attempting to get a role`);

        getRoles(setup.groupId, self).then(roles=>{
            let found;
            if (rank) {
                if (rank > 255 && rank < 0) return reject(`Please provide a valid rank number between 0 and 255`);
                let getRole = roles.find(x=>x.rank == rank);
                if (getRole) return resolve(getRole);
            }
            if (name) {
                let getRole = roles.find(x=>x.name.toLowerCase()==name.toLowerCase());
                if (getRole) return resolve(getRole);
            }
            if (id) {
                let getRole = roles.find(x=>x.id == id);
                resolve(new Group.GroupRole(getRole, setup.groupId, self));
            }
        }).catch(reject);
    })
    return newPromise;
}