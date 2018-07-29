const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !id) return reject(`Did not provide groupId or identificator`);

        let url = `https://groups.roblox.com/v1/groups/${groupId}/users`
        let options = {
            id: id,
            method:"POST",
            isCaptcha: true,
            captchaUrl: `https://www.roblox.com/My/Groups.aspx?gid=${groupId}`
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to join group, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}