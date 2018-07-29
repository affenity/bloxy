const request = require('request');

module.exports = async function (jar) {

    var newPromise = new Promise(function (resolve, reject) {
        request('https://www.roblox.com/favorite/toggle', { method: "POST", followAllRedirects: false, followRedirect: (r) => { console.log("REDIRECT") }, jar: jar }, function (e, res, body) {
            if (e) reject(e);
            //console.log(global.jar);
            if (!res || !res.headers || !res.headers['x-csrf-token']) throw new Error("Failed to get XCSRF token");
            var xcsrf_token = res.headers['x-csrf-token'];
            if (!xcsrf_token) throw new Error("Failed to get XCSRF token");
            resolve(xcsrf_token);
        })
    })
    return newPromise
}