const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;

module.exports = async function(userId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!userId || !id) return reject(`Did not provide userid or identificator`);
        let url = `https://api.roblox.com/users/${userId}/groups`

        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get user groups, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}