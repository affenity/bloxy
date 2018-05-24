const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
const groupClass = require('../../group/class.js');

module.exports = async function (username, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/Groups/GetPrimaryGroupInfo.ashx?users=${username}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's followers, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                if (!json[username]) reject("Couldn't find the user's primary group");
                resolve(json[username]);
            }
        })
    })
    let primaryGroup = await newPromise;
    let g = new groupClass.PartialGroup(primaryGroup, opts);
    return g;
}