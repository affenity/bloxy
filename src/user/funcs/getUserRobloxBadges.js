const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')

module.exports = async function (userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/badges/roblox?userId=${userId}&imgWidth=110&imgHeight=110&imgFormat=png`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's followers, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                if (!json.RobloxBadges) reject("Couldn't find the user's roblox badges");
                resolve(json.RobloxBadges);
            }
        })
    })
    return [].concat(await newPromise);
}