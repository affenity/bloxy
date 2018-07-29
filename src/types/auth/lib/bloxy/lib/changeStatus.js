const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeStatus;

module.exports = async function(newStatus, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!newStatus || !id) return reject(`Did not provide new status or identificator`);

        let options = {
            method:"POST",
            inputs: {
                status: newStatus,

                // I hope you don't send your freaking **Roblox** status to Facebook lmao
                sendToFacebook: false
            },
            json:true,
            id: id
        }
        
        fetch(endpoint, options).then(({res})=>{
        if (res.statusCode !== 200) return reject(`Failed to update status. Status code: ${res.statusCode}, message: ${res.statusMessage}`);

        if (!res.body || !res.body.success) return resolve(false);
        resolve(true);
        
        }).catch(reject);
        

    })
    return newPromise;
}