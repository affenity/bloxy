const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.auth.verify2Step;

/**
 * Attempts to use 2FA to sign in
 * @param {String/Number} The code to verify with
 * @param {Object} authTab The object containing different authorization values
 * @param {Number} id The identificator 
 */

module.exports = async function(code, authTab, id) {
    var newPromise = new Promise(function(resolve, reject) {
    let twoStep = authTab;

    let {ticket, user} = twoStep;
    let createSend = {
        username: user,
        ticket: ticket,
        code: code,
        rememberDevice: false,
        actionType: "Login"
    }

    fetch(endpoint, {method:"POST", json: createSend, id:id}).then(({res})=>{

        if (res.statusCode === 200) return resolve({
            success: true
        })

        resolve({
            success: false,
            message: res.statusMessage,
            statusCode: res.statusCode,
        })
    })
})
return newPromise;
}