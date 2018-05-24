const request = require('request');

module.exports = async function (jar) {

    var newPromise = new Promise(function (resolve, reject) {
        request('https://www.roblox.com/favorite/toggle', { method: "POST", followAllRedirects: false, followRedirect: (r) => { console.log("REDIRECT") }, jar: jar }, function (e, r, body) {
            if (e) reject(e);
            //console.log(global.jar);
            var xcsrf_token = r.headers['x-csrf-token'];
            if (!xcsrf_token) throw new Error("Failed to get XCSRF token");
            resolve(xcsrf_token);
        })
    })
    return newPromise
}