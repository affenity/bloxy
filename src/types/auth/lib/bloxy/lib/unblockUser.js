const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(targetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        let url = `https://api.roblox.com/userblock/unblock?userId=${targetId}`

        let options = {
            method: "POST",
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to unblock user, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body.success);
        }).catch(reject);
    })
    return newPromise;
}