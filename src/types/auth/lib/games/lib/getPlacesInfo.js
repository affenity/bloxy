const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(listPlaceIds, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!listPlaceIds || !id) return reject(`Did not provide listPlaceIds or identificator`);
        let url = `https://games.roblox.com/v1/games/multiget-place-details?placeIds=${listPlaceIds.map(x=>x).join('&placeIds=')}`
        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statuCode!==200) return reject(`Failed to get places' info`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}