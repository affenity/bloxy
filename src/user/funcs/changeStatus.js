const post = require('../../util/strictpost.js')

module.exports = async function (newStatus, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        let url = `https://www.roblox.com/home/updatestatus`
        post(url, { inputs: { status: newStatus, sendToFacebook: false } , jar:opts.jar, xcsrf: opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to change status, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                let json = JSON.parse(res.body);
                resolve(json.success == true);
            }
        }).catch(reject);
    })
    let change = await newPromise;
    return Boolean(change);
}