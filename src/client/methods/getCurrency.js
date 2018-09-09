

module.exports = async function (self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!self) return reject(`Did not provide self`);

        let options = {
            json: true
        }

        self._request('https://api.roblox.com/currency/balance', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get currency, code: ${res.statusCode}, message: ${res.statusMessage}`);
            
            resolve(res.body.robux);
        }).catch(reject);
    })
    return newPromise;
}