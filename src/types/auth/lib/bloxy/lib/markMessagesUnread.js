const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.markMessagesUnread;


module.exports = async function(messageIds, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!messageIds) return reject(`Did not provide messageIds or identificator`);

        let options = {
            id: id,
            method: "POST",
            form: {
                messageIds: messageIds
            }
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode!==200) return resolve(false);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}