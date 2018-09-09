const request = require('request');

module.exports = async function (jar) {

    var newPromise = new Promise(function (resolve, reject) {
        request('https://www.roblox.com/favorite/toggle', { method: "POST", followAllRedirects: false, followRedirect: (r) => { }, jar: jar }, function (e, res, body) {
            if (e) reject(e);
            if (!res || !res.headers || !res.headers['x-csrf-token']) return reject("Failed to get XCSRF token");
            var xcsrf_token = res.headers['x-csrf-token'];
            if (!xcsrf_token) return reject("Failed to get XCSRF token");
            resolve(xcsrf_token);
        })
    })
    return newPromise
}