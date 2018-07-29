const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

/**
 * 
 * @param {Object} settings 
 * @param {String} settings.algorithmName
 * @param settings.paginationKey
 * @param {Number} settings.maxRows
 * @param {*} id 
 */
module.exports = async function(settings, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!settings || !settings.algorithmName || !id) return reject(`Did not provide settings, algorithmName or identificator`);

        let url = `https://games.roblox.com/v1/games/recommendations/algorithm/${settings.algorithmName}?model.paginationKey=${settings.paginationKey}&model.maxRows=${settings.maxRows}`;
        let options = {
            id: id,
            json: true
        };

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get games recommendations, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}