const fetch = require('../../util/fetch.js')



module.exports = async function (userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/userblock/unblock?userId=${userId}`

        fetch(url, { method: "POST", jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var json = JSON.parse(res.body);
            var success = json.success;
            resolve(success);

        }).catch(reject);
    })
    return Boolean(await newPromise);
}