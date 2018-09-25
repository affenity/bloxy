const request = require('request');
const setup   = require('./setup');
const account = require('./account');


/**
 * Fetch function 
 * @param {String} url 
 * @param {Object} opts 
 * @param {Number} opts.id 
 * @param {String} opts.method 
 * @param {String} opts.form 
 * @param {Object} opts.body
 * @param {Object} opts.formData
 * @param {String} opts.verification
 * @param {String} opts.captchaUrl
 * @param {Boolean || Object} opts.json 

 */

 
module.exports = async function fetch (url, opts, isSecond) {
    var newPromise = new Promise(function (resolve, reject) {
        opts = opts || {}


        let _id = opts._id;
        if (!_id) return reject(`Must provide the identifier`);

        let thisSetup = setup.getSetup(_id);
        let thisMethod= opts.method || 'GET';

        let jar = thisSetup.jar,
        xcsrf   = thisSetup.xcsrf;

        if (!jar) return reject(`Jar was not provided`);
        if (!xcsrf && thisMethod === 'POST') return reject(`XCSRF token was not provided`);

        if (!jar) console.warn("jar was not provided");
        if (!xcsrf && opts.method == "POST") console.warn("x-csrf-token token was not provided");

        url = url || opts.url;
        var reqOpts = {
            method: opts.method || "GET",
            followAllRedirects: true,
            followRedirect: (r) => {
                
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

            if (res.statusCode===403 && opts.captchaUrl && (res.body.indexOf('robot') >=0 || res.body.indexOf('captcha') >= 0) && !isSecond) {
                let captchaResponse = await account.captchaHandler(opts.captchaUrl, thisSetup)
                if (captchaResponse) {
                    let validate = await account.validateUser(captchaResponse, thisSetup);
                    if (validate) {
                        resolve(fetch(url, opts, true))
                    } else return reject(`Failed to verify captcha response`);
                }
            } else if (res.statusCode === 403 && (res.body.toLowerCase().indexOf('token') >= 0 || res.body.toLowerCase().indexOf('failed')) && !isSecond) {
                await thisSetup._getXcsrf();
                return resolve(fetch(url, opts, true));
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