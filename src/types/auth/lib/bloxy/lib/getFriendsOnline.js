const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.getFriendsOnline;

module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);

        let options = {
            id: id,
            json:true
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get online friends, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}