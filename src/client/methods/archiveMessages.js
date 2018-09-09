

module.exports = async function (messageIds, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!messageIds || typeof(messageIds) !== 'object' || !self) return reject(`Did not provide messageIds or self. Or messageIds wasn't an array.`);

        let options = {
            method: "POST",
            form: {
                messageIds: messageIds
            }
        }

        self._request('https://www.roblox.com/messages/api/archive-messages', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to archive messages, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);

    })
    return newPromise;
}