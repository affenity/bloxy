const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let url = `https://www.roblox.com/api/groups/${groupId}/RoleSets`
        let options = {
            id: id,
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get roles, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}