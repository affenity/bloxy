const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(requestId, id) {
    var newPromise = new Promise(async function (resolve, reject) {
        let url = `https://www.roblox.com/group/handle-join-request`

        let options = {
            id: id,
            form: {
                groupJoinRequestId: requestId
            },
            method:"POST",
            json: true,
            isCaptcha: true,
            captchaUrl: url
        }
        
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to accept join request, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            if (!json.success) return reject(`Failed to accept join request, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}