const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
var parser = require('cheerio');

module.exports = async function (username, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/UserCheck/DoesUsernameExist?username=${username}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's followers, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                resolve(json.success);
            }
        })
    })
    return Boolean(await newPromise);
}