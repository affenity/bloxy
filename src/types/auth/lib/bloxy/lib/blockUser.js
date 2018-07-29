const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.blockUser;

module.exports = async function(targetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!targetId || !id) return reject("Did not provide target id or identificator");
        let options = {
            method: "POST",
            form: {
                blockeeId: parseInt(targetId)
            },
            id: id
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to block user, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}

