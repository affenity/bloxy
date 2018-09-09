
module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://api.roblox.com/ownership/hasasset?userId=${setup.userId}&assetId=${setup.assetId}`;

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to check if user owns asset, code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(Boolean(res.body) || false);
        })
    })
    return newPromise;
}