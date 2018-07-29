const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.getCurrency;

module.exports = async function(id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!id) return reject("Did not provide identificator");
        
        let options = {
            id: id,
            json: true
        }
        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get currency, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            if (res.body.robux == null) return reject(`Failed to get curreny, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body.robux);
        }).catch(reject);
    })
    return newPromise;
}