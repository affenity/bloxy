const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.getGroupsIManage;

module.exports = async function(id) {
    var newPromise = new Promise(function(resolve, reject) {
        
        const options = {
            id: id,
            json: true
        }
        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get groups you manage, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.data);
        }).catch(reject);
    })
    return newPromise;
}