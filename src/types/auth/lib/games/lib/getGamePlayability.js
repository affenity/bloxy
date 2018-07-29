const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(universeId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!universeId || !id) return reject(`Did not provide universeId or identificator`);

        let url = `https://groups.roblox.com/v1/games/${universeId}/playability-status`
        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statuCode!==200) return reject(`Failed to get game playability, status code: ${res.statusCode}, messag: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);   
    })
    return newPromise;
}