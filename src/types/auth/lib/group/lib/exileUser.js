const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, userId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !userId || !id) return reject(`Did not provide groupId, userId or identificator`);

        let url = `https://groups.roblox.com/v1/groups/${groupId}/users/${userId}`
        let options = {
            id: id,
            method:"DELETE"
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to exile user, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}