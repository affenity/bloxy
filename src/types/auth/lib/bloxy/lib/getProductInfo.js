const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(assetId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!assetId || !id) return reject(`Did not provide assetId or identificator`);
        let url = `https://api.roblox.com/marketplace/productinfo?assetId=${assetId}`
        let options = {
            id: id,
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get product info, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}