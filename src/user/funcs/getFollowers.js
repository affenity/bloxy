const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')

module.exports = async function (userId, opts) {
    var page = opts.page || 1;
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/users/followers?userId=${userId}&page=${page}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's followers, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                resolve(json);
            }
        })
    })
    let getFollowers = await newPromise;
    let followers = [].concat(getFollowers).map(x=>new userClass.PartialUser(x, opts));
    return followers;
}