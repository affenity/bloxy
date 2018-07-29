const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const getRoles = require('./getRoles');


/**
 * Gets a role with any of the following specifications: rank, id, name
 * @param {Object} setup 
 * @param {Number} setup.groupId
 * @param {Number} setup.rank
 * @param {Number} setup.id
 * @param {String} setup.name
 * @param {Number} id 
 */
module.exports = async function(setup, _id) {
    var newPromise = new Promise(async function(resolve, reject) {

        setup = setup || {};
        let rank = setup.rank;
        let name = setup.name;
        let id   = setup.id;
        if (!rank && !name && !id) return reject(`Need to provide either rank, name or id of the role to find`)

        getRoles(setup.groupId, _id).then(roles=>{
            if (rank) {
                if (rank > 255 || rank <0) return reject(`Please provide a valid rank number between 0 and 255`);
                let getRole = roles.find(x=>x.Rank==rank);
                return resolve(getRole);
            } else if (name) {
                let getRole = roles.find(x=>x.Name.toLowerCase()==name.toLowerCase());
                return resolve(getRole);
            } else if (id) {
                let getRole = roles.find(x=>x.Id==id)
                return resolve(getRole);
            }

        }).catch(reject);
    })
    return newPromise;
}