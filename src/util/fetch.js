const request = require('request');
const globalCache = require('../util/globalCache.js');


module.exports = async function fetch (url, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        opts = opts || {}


        var _cId = opts.id;
        if (!_cId) return console.error("Need to provide current identifier");

        let thisSetup = globalCache.Setups[_cId];
        let jar = thisSetup.jar;
        let xcsrf = thisSetup.xcsrf;

        if (!jar) console.warn("jar was not provided");
        if (!xcsrf && opts.method == "POST") console.warn("x-csrf-token token was not provided");

        url = url || opts.url;
        var reqOpts = {
            method: opts.method || "GET",
            followAllRedirects: true,
            followRedirect: (r) => {
                console.log("new redirect: " + r.headers.location)
            },
            headers: {
                'x-csrf-token': xcsrf
            },

            body: opts.body || null,
            json: opts.json || false,
            form: opts.form || opts.inputs || null,
            formData: opts.formData || opts.inputsData || null,
            jar: jar,
        }

        reqOpts.headers = reqOpts.headers || {};
        if (opts && opts.verification) {
            let verify = "__RequestVerificationToken=" + opts.verification + ';';
            if (reqOpts.headers.cookie) reqOpts.headers.cookie += verify;
            reqOpts.headers.cookie = "";
            reqOpts.headers.cookie += verify;
        }

        
        
        request(url, reqOpts, async function (err, res, body) {
            if (err) reject(err);
            globalCache.Setups[_cId].jar = jar;
            globalCache.Setups[_cId].xcsrf = xcsrf;

            if (res.statusCode===403 && opts.captchaUrl && (res.body.indexOf('robot') >=0 || res.body.indexOf('captcha') >= 0)) {
                console.log("Captcha handler?")
                let captchaResponse = await captchaHandler(opts.captchaUrl, _cId)
                if (captchaResponse) {
                    let validate = await validateUser(captchaResponse, _cId);
                    if (validate) {
                        console.log("Received validation successfully");
                        resolve(fetch(url, opts))
                    }
                }
            }

            resolve({
                res:res,
                jar:jar,
                xcsrf:xcsrf
            })
        })
    })
    return newPromise;
}
const captchaHandler = require('./captchaHandler')
const validateUser = require('./validateUser')