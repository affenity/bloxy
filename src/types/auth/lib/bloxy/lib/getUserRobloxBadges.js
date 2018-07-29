const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;

module.exports = async function(userId, id) {
    var newPromise = new Promise(function(resolve, reject) {

        let url = `https://www.roblox.com/badges/roblox?userId=${userId}&imgWidth=110&imgHeight=110&imgFormat=png`;

        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get user's roblox badges, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            let createJson = {
                userId: res.body.UserId,
                badges: res.body.RobloxBadges
            }
            resolve(createJson);
        }).catch(reject);

    })
    return newPromise;
}