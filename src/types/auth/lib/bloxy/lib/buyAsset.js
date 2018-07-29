const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.auth.verify2Step;

module.exports = async function(productId, expectedPrice, sellerId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!productId || !expectedPrice || !sellerId || !id) return reject("Did not provide product id or expected price or seller id");
        
        let url = `https://www.roblox.com/api/item.ashx?rqtype=purchase&productID=${productId}&expectedCurrency=1&expectedPrice=${expectedPrice}&expectedSellerID=${sellerId}&userAssetID=`
        let options = {
            method:"POST",
            id: id
        }
        fetch(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to purchase asset. Status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}