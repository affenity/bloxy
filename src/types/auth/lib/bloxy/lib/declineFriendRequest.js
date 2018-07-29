const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.declineFriendRequest;

module.exports = async function(targetId, requesterId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!targetId || !requesterId || !id) return reject(`Did not provide target id, requesterid, or identificator`);

        let options = {
            method: "POST",
            body: {
                targetUserID: requesterId,
                invitationID: targetId
            },
            json: true,
            id: id
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode !== 200 || res.body.success == null) return reject(`Failed to decline friend request. Status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.success==true);
        }).catch(reject);
    })
    return newPromise;
}