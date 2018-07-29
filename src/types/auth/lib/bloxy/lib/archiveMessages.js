const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(messageIds, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!messageIds || !id) return reject("Did not provide array of message ids or no identificator");
        let options = {
            method: "POST",
            form: {
                messageIds: [messageIds]
            },
            id: id
        }
        fetch(endpoint, options).then(({res})=> {
            if (res.statusCode !== 200) return reject(`Failed to archive messages. Status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}