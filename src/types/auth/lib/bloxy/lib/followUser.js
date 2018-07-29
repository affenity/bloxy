const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.followUser;

module.exports = async function(targetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!targetId || !id) return reject("Did not provide targetid, or identificator");

        let options = {
            method: "POST",
            json: {
                targetUserId: targetId
            },
            id: id,
            isCaptcha: true,
            captchaUrl: `https://www.roblox.com/users/${targetId}/profile`
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to follow user. ** -- POSSIBLE -- ** reasons are: Captcha, Roblox has throttled your requests, or you have blocked this user. Status code: ${res.statusCode}, message: ${res.statusCode}`);
            if (res.body.success!==true) return reject(`No success, code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}