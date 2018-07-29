const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, roleId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !roleId || !id) return reject(`Did not provide groupId, roleId or identificator`);

        let url = `https://groups.roblox.com/v1/groups/${groupId}/roles/${roleId}/users?sortOrder=Desc&limit=100`;

        let options = {
            id: id,
            json:true
        }
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get users with rank, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.data);
        }).catch(reject);
    })
    return newPromise;
}