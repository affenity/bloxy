const fetch = require('../../util/fetch.js')
var request = require('request');


module.exports = async function (userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/userblock/blockuser`
        let jar = opts.jar;
        let xcsrf = opts.xcsrf

        request(url, { method: "POST", jar: jar, headers: { 'x-csrf-token': xcsrf }, form: { 'blockeeId': parseInt(userId) } }, function (e, r, b) {
            if (e) reject(e);
            if (r.statusCode == 200) resolve(true);
            reject(`Failed to block user, status code: ${r.statusCode}, status message: ${r.statusMessage}`);
        })
    })
    let couldBlock = await newPromise;
    return Boolean(couldBlock);
}