const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(universeId, favorite, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let url = `https://grous.roblox.com/v1/games/${universeId}/favorites`

        let options = {
            id: id,
            method: "POST",
            json: {
                isFavorited: favorite || false
            }
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to favorite game, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}