


module.exports = async function (message, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!message || typeof(message) !== 'object' || !self) return reject(`Did not provide message or self`);


        let url = `https://www.roblox.com/messages/send`;

        let options = {
            method: "POST",
            json: {
                recipientid: message.recipientId,
                subject: message.subject,
                body: message.body,
                cacheBuster: + new Date
            }
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to send message, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        })
    })
    return newPromise;
}