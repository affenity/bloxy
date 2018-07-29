const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, roleId, userId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !roleId || !userId) return reject(`Did not provide groupId, roleId or userId`);

        let url = `https://www.roblox.com/groups/api/change-member-rank?groupId=${groupId}&newRoleSetId=${roleId}&targetUserId=${userId}`
        let options = {
            id:id,
            method:"POST",
            json:true
        }
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to set rank, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })

    return newPromise;
}