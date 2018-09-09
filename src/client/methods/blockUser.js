

module.exports = async function (targetId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!targetId || !self) return reject(`Did not provide targetId or self`);

        let options = {
            method:"POST",
            form: {
                blockeeId: parseInt(targetId)
            }
        }

        self._request('https://www.roblox.com/userblock/blockuser', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to block user, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}