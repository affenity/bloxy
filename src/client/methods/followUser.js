

module.exports = async function (targetId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!targetId || !self) return reject(`Did not provide targetId or self`);

        let options = {
            method: "POST",
            json: {
                targetUserId: targetId
            },
            captchaUrl: `https://www.roblox.com/users/${targetId}/profile`
        }

        self._request('https://www.roblox.com/user/follow', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to follow user. Code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.success==true);
        }).catch(reject);
    })
    return newPromise;
}