const request = require('request');

module.exports = async function (url, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        opts = opts || {}

        let jar = opts.jar;
        let xcsrf = opts.xcsrf;

        url = url || opts.url;
        var reqOpts = {
            method: opts.method || "GET",
            followAllRedirects: false,
            followRedirect: (r) => {

            },
            headers: {
                'x-csrf-token': xcsrf
            },

            body: opts.body || null,
            json: opts.json || false,
            form: opts.form || null,
            jar: jar,
        }

        reqOpts.headers = reqOpts.headers || {};


        request(url, reqOpts, async function (err, res, body) {
            if (err) reject(err);
            resolve({
                res:res,
                jar:jar,
                xcsrf:xcsrf
            })
        })
    })
    return newPromise;
}