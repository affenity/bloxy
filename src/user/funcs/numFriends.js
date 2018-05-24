const fetch = require('../../util/fetch.js')


module.exports = async function (id, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/user/get-friendship-count?userId=${id}`
        fetch(url, {jar:opts.jar, xcsrf: opts.xcsrf}).then(({res}) => {
            var json = JSON.parse(res.body);
            if (json && (json.success == true || json.success == "true")) {
                resolve(json.count);
            } else {
                reject(json.message || "Failed to get user's amount of friends!")
            }

        })
    })
    return Number(await newPromise);
}