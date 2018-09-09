


module.exports = async function (userId, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!userId || !self) return reject(`Did not provide userId or self`);

        let url = `https://www.roblox.com/api/user/unfollow`;

        let options = {
            json: true,
            method: "POST",
            json: {
                targetUserId: userId
            }
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to unfollow user, code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(Boolean(res.body.success == true));
        }).catch(reject);
    })
    return newPromise;
}