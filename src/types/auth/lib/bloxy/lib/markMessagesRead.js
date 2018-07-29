const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.markMessagesRead;

module.exports = async function(messageIds, id) {
    var newPromise = new Promise(function(resolve, reject) {

        let options = {
            id: id,
            method:"POST",
            form: {
                messageIds: messageIds
            }
        }

        fetch(endpoint, optoins).then(({res})=>{
            if (res.statusCode!==200) return resolve(false);//reject(`Failed to mark messages as read, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}