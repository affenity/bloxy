const fetch = require('../../util/fetch.js')


module.exports = async function (userId, assetId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `http://api.roblox.com/ownership/hasasset?userId=${userId}&assetId=${assetId}`
        fetch(url, { headers: { 'Cookie': `.ROBLOSECURITY=${process.env.Cookie}` } , jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {

            var ownsAsset = new Boolean(res.body);
            resolve(ownsAsset);

        })
    })
    return Boolean(await newPromise);
}