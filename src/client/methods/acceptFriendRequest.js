

module.exports = async function (targetId, requesterId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!targetId || !requesterId || !self) return reject(`Did not provide targetId, requesterId or self`);

        let options = {
            method: "POST",
            body: {
                targetUserId: requesterId,
                invitationId: targetId
            },
            json: true
        }

        self._request('https://www.roblox.com/api/friends/acceptfriendrequest', options).then(({res})=>{
            if (res && res.body && res.body.success) return resolve(true);
            reject("Unexpected response");
        }).catch(reject);
    })
    return newPromise;
}