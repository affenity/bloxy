const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.acceptFriendRequest;

module.exports = async function(targetId, requesterId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!targetId || !requesterId || !id) reject("Did not provide targetid, requesterId, or identificator");

        var options = {
            method : "POST",
            body : {
                targetUserId: requesterId,
                invitationId: targetId
            },
            json: true,
            id: id
        }

        fetch(endpoint, options).then(({res})=>{
            if (res && res.body && res.body.success) {
            resolve(res.body.success);
            } else reject("Unexpected response");
        }).catch(reject);
    })
    return newPromise;
}