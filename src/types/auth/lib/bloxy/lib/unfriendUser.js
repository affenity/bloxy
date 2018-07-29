const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(targetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        let url = `https://api.roblox.com/user/unfriend?friendUserId=${targetId}`;

        let options = {
            id: id,
            method:"POST",
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to unfriend user, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body.success===true);
        }).catch(reject);
    })
    return newPromise;
}