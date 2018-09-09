const classes = require('../../classes');


module.exports = async function (assetId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!assetId || !self) return reject(`Did not provide assetId or self`);

        let url = `https://api.roblox.com/marketplace/productinfo?assetId=${assetId}`;

        let options = {
            json: true
        };

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get product info, code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(new classes.Asset.ProductInfo(res.body, self));
        }).catch(reject);
    })
    return newPromise;
}