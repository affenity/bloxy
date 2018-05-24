const fetch = require('./fetch.js')
var request = require('request')

module.exports = async function (jar, xcsrf) {
    var newPromise = new Promise(function (resolve, reject) {

        request('https://www.roblox.com/notification-stream/notification-stream-data', { method: "GET", jar: jar, headers: { 'x-csrf-token': xcsrf} }, function (e, r, body) {
            if (e) reject(e);
            try {
                if (r.statusCode!=200) reject("AUTHENTICATION FAILED, INCORRECT RESPONSE RETRIEVED");
                var json = JSON.parse(r.body);
                var myAccountId = json.CurrentUserId;
                resolve({
                    myAccountId: myAccountId,
                    jar: jar,
                    xcsrf:xcsrf
                });
            } catch (err) {
                reject(err);
            }
        })
    })
    return newPromise
}