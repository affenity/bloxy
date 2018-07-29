const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(assetId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!productId || !id) return reject(`Did not provide productId or identificator`);
        let url = `https://www.roblox.com/asset/delete-from-inventory`
        let options = {
            id: id,
            form: {
                assetId: productId
            },
            method: "POST"
        }
        
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to delete from inventory, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}