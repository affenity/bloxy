const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.unfollowUser;

module.exports = async function(targetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!targetId || !id) return reject(`Did not provide userid or identificator`);

        let options = {
            id: id,
            method:"POST",
            json: {
                targetUserId: targetId
            }
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to unfollow user, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            if (res.body.success && res.body.success!==true) {
                return reject(`Failed to unfollow user, ** -- POSSIBLE -- ** reasons are: Captcha, Roblox has throttled your requests or you have blocked this user.`);
            } else resolve(true);

        }).catch(reject);
    })
    return newPromise;
}