

module.exports = async function (userId, assetId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!userId || !assetId || !self) return reject(`Did not provide userId, assetId or self`);

        let options = {
            json: true
        }


        self._request(`https://api.roblox.com/users/${userId}/canmanage/${assetId}`, options).then(({res})=> {
            if (!res.body.Success) return reject(`Failed to check, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let canManage = res.body.CanManage==true;
            resolve(canManage);
        }).catch(reject);
    })
    return newPromise;
}