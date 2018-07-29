const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(requestId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!requestId || !id) return reject(`Did not provide requestId or identificator`);

        let url = `https://www.roblox.com/group/handle-join-request`;
        let options = {
            id: id,
            method:"POST",
            form: {
                groupJoinRequestId: requestId,
                accept: false
            },
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to decline join request, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.success==true);
        }).catch(reject);
    })
    return newPromise;
}