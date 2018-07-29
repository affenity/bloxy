const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.messagesToInbox;

module.exports = async function(messageIds, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!messageIds || !id) return reject(`Did not provide message ids or identificator`);

        let options = {
            id: id,
            form: {
                messageIds: messageIds
            },
            method:"POST"
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to move message to inbox, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })  
    return newPromise;
}