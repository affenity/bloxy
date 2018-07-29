const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


/**
 * 
 * @param {Object} setup 
 * @param {String} setup.userId
 * @param {String} setup.assetId
 * @param {Number} id 
 */

module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);

        let url = `https://api.roblox.com/ownership/hasasset?userId=${setup.userId}&assetId=${setup.assetId}`;

        let options = {
            id: id
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to check if user owns asset, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body);
        }).catch(reject);
    })  
    return newPromise;
}