const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(gameSortsContext, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!id) return reject(`Did not provide identificator`);

        let url = `https://games.roblox.com/v1/games/sorts?model.gameSortsContext=${gameSortsContext}`;
        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get game sorts, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body)
        }).catch(reject);
    })
    return newPromise;
}