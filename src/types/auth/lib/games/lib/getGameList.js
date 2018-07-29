const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(settings, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        settings = settings || {};
        if (!settings || !id) return reject(`Did not provide settings or identificator`);

        let startUrl = "https://games.roblox.com/v1/games/list?";
        var keys = Object.keys(bb);
        var s = keys.map(function(a,b) {return 'model.' + a + '=' + b}).join('&');
        startUrl += s;

        let options = {
            id: id,
            json: true
        }

        fetch(startUrl, options).then(({res})=>{
            if (res.statuCode!==200) return reject(`Failed to get game list, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}