const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(userId, assetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!userId || !assetId || !id) return reject("Did not provide userid or assetid or id");

        let options = {
            id: id,
            json: true
        }

        let url = `https://api.roblox.com/users/${userId}/canmanage/${assetId}`
        fetch(url, options).then(({res})=>{
            if (!res || !res.body || !res.body.Success) return reject(`Failed to check, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            if (res.body.CanManage==false) return resolve(false);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}