const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
const groupClass = require('../../group/class.js');

module.exports = async function (userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/users/${userId}/groups`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's followers, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                resolve(json);
            }
        })
    })
    let groups = await newPromise;
    let userGroups = [].concat(groups).map(x=>new groupClass.UserGroup(x, opts));
    return userGroups;
}