

module.exports = async function (targetId, requesterId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!targetId || !requesterId || !self) return reject(`Did not provide targetId, requesterId or self`);

        let options = {
            method: "POST",
            body: {
                targetUserID: requesterId,
                invitationID: targetId
            },
            json: true
        }

        self._request('https://www.roblox.com/api/friends/declinefriendrequest', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to decline friend request, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.success == true);
        }).catch(reject);
    })
    return newPromise;
}