const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')

module.exports = async function (userId, targetId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/user/following-exists?userId=${targetId}&followerUserId=${userId}`
        fetch(url, {jar:opts.jar, xcsrf: opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check if the user is following the other, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                if (!json.success) reject(json.message);
                resolve(json.isFollowing || false);
            }
        }).catch(reject);
    })
    return Boolean(await newPromise);
}