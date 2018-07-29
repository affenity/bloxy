const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(universeId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!universeId || !id) return reject(`Did not provide universeId, or identificator`);

        let url = `https://games.roblox.com/v1/games/${universeId}`;
        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get game info`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}