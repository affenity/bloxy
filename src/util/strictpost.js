const request = require('request')

module.exports = async function (url, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        request(url, { method: "POST", followAllRedirects: true, followRedirect: (redi) => {console.log(redi.headers.location)}, jar: opts.jar, headers: { 'x-csrf-token': opts.xcsrf }, form: opts.inputs }, function (e, res, body) {
            if (e) reject(e);
            resolve({
                res:res
            });
        })
    })
    return newPromise
}