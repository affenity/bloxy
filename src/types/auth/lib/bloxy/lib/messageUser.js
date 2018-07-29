const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.messageUser;


/**
 * 
 * @param {Object} setup 
 * @param {String} setup.subject
 * @param {String} setup.body
 * @param {String} setup.userId
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);

        let options = {
            method:"POST",
            json: {
                recipientId: setup.userId,
                subject: setup.subject,
                body: setup.body
            },
            id: id,
            isCaptcha: true,
            captchaUrl: `https://www.roblox.com/messages/compose?recipientId=${setup.userId}`
        }

        fetch(endpoint, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to message user, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}