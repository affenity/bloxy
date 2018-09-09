

module.exports = async function (productId, expectedPrice, sellerId, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (productId == null || expectedPrice == null || !sellerId || !self) return reject(`Did not provide productId, expectedPrice, sellerId or self`);
        let options = {
            method:"POST"
        }

        self._request(`https://www.roblox.com/api/item.ashx?rqtype=purchase&productID=${productId}&expectedCurrency=1&expectedPrice=${expectedPrice}&expectedSellerID=${sellerId}&userAssetID=`, options).then(({res})=>{
        if (res.statusCode !== 200) return reject(`Failed to purchase asset. Code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}