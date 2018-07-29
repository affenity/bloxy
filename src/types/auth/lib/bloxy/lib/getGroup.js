const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !id) return reject(`Did not provide groupid or identificator`);
        let url = `https://groups.roblox.com/v1/groups/${groupId}`
        let options = {
            id:id,
            json:true
        }
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get group, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            return resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}