const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;

module.exports = async function(newBlurb, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!newBlurb || !id) return reject(`Did not provide new blurb or identificator`);
        
        let options = {
            method:"POST",
            inputs: {
                Description: newBlurb
            },
            id:id
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to change blurb. Status code: ${res.statusCode}, message: ${res.statusMessage}`)
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}