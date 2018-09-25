// Handles login/logout/authentication stuff

// Defining dependencies

const request     = require('request');
const toughCookie = require('tough-cookie');
const setup       = require('./setup');
const googleKey   = "6LcpwSQUAAAAAPN5nICO6tHekrkrSIYvsl9jAPW4";
const fetch       = require('./fetch');
const cheerio     = require('cheerio');


/**
 * 
 * @param {setup.BloxySetup} [options] 
 */
exports.login = async function login (options) {
    let newPromise = new Promise(async function(resolve, reject) {
        let thisSetup = setup.getSetup(options._id);
        let thisJar   = thisSetup.jar;
        let createReq = validateOptions(options);
        if (typeof(createReq) === 'string') return reject(createReq);

        if (createReq.cookie) {

            let madeCookie = new toughCookie.Cookie({
                key      : '.ROBLOSECURITY',
                value    : createReq.cookie,
                domain   : 'roblox.com',
                hostOnly : false,
                httpOnly : false
            })

            thisJar.setCookie(madeCookie, 'https://roblox.com');

            let couldAuthenticate = await exports.authenticate(thisJar).catch();
            if (!couldAuthenticate || !couldAuthenticate.myAccountId) return reject(`Failed to sign in using cookies`)

            resolve({
                accountId: couldAuthenticate.myAccountId,
                twostepEnabled: false,
                _id: options._id
            })

        } else {

            let getXcsrf = await options._getXcsrf();
            request('https://auth.roblox.com/v2/login', { method: "POST", json: createReq, headers: { 'X-CSRF-TOKEN': getXcsrf }, jar: thisJar}, async function (err, res) {
                if (err) return reject(err);
                if (res.statusCode !== 200 && !options.authTab.CaptchaKey) return reject(`Failed to sign in, make sure all your credentials are correct. If you know they are correct, you might have gotten a captcha. Status code: ${res.statusCode}, message: ${res.statusMessage}`);

                let response = res.body;

                if (response.errors && response.errors[0] && response.errors[0].code === 2) {
                    if (!options.authTab.CaptchaKey) return reject(`You were faced with a captcha, but didn't have a captcha key.`);

                    exports.captchaHandler('https://www.roblox.com/newlogin', options).then( async response => {
                        let validate = await exports.validateUser(response, {url: `https://api.roblox.com/captcha/validate/login?username=${createReq.cvalue}`, _id: options._id}).catch();
                        if (!validate) return reject(`Failed to verify captcha response`);
                        resolve(login(options));
                    }).catch(reject);
                    // `https://api.roblox.com/captcha/validate/login?username=${createReq.cvalue}`
                }

                if (response && response.user && response.user.id && !response.twoStepVerificationData) {
                    // No 2FA, return main class without 2fa prompt
                    return resolve({
                        userId: response.user.id,
                        twostepEnabled: false,
                        _id: options._id
                    });
                } else if (response && response.user && response.user.id && response.user.name && response.twoStepVerificationData) {
                    // 2FA, return main class with 2fa prompt
                    
                    return resolve({
                        userId: response.user.id,
                        user: response.user.name,
                        twostepEnabled: true,
                        _id: options._id,
                        ticket: response.twoStepVerificationData.ticket,
                        twostepType: response.twoStepVerificationData.mediaType
                    });
                }
            })

        }

    })
    return newPromise;
}

/**
 * 
 * @param {String} url 
 * @param {setup.BloxySetup} setup 
 */
exports.captchaHandler = async function (url, setup) {
    let newPromise = new Promise(async function(resolve, reject) {
    let captchaKey = setup.authTab.CaptchaKey;
    if (!captchaKey) return reject("No captcha key provided");

    let makeUrl = `http://2captcha.com/in.php?key=${captchaKey}&method=userrecaptcha&googlekey=${googleKey}&pageurl=${url}&here=now&json=1`
    
    request(makeUrl, { json: true }, function (err, res) {
        if (err) return reject(err);
        if (res.body.status && res.body.status == 1) {
            let reqId = res.body.request;
            pollResult(reqId, captchaKey).then(solved=>{
                resolve(solved);
            }).catch(reject);
        } else if (res.body.status != 0 && res.body.status != 1) return reject(`Something strange occured while waiting for captcha response`)
    })

})
return newPromise;
}




exports.authenticate = async function (jar) {
    let newPromise = new Promise(async function(resolve, reject) {

        request('https://notificationsite.roblox.com/notification-stream/meta-data', {jar: jar}, function (err, res) {
            if (err) return reject(err);
            try {
                let data = JSON.parse(res.body);
                if (data.CurrentUserId != null) return resolve({
                    myAccountId: data.CurrentUserId,
                    jar: jar
                })
            } catch (err) {
                reject(err);
            }
        })

    })
    return newPromise;
}






function validateOptions(options) {
    if (!options || !options.authTab) return "Did not provide necessary parameters";//throw new Error(messages.loginFunc.values);
    let authTab = options.authTab;

    // User does not want to sign in using cookies

    if (!authTab.cookie) {
        let signinWith = authTab.signinW;
        let cType = authTab.signinWith, cPass = authTab.password, cValue = authTab.username || authTab.value;
        if (!cType || !cValue || !cPass) return "Did not provide necessary parameters";

        let createRequest = {
            ctype   : cType,
            cvalue  : cValue,
            password: cPass
        }
        return createRequest;

    } else {
        let createRequest = {
            cookie: authTab.cookie
        }
        return createRequest;
    }
    
}

async function pollResult(captchaId, captchaKey) {
    var newPromise = new Promise(async function(resolve, reject) {
        let runInterval = setInterval( async () => {
            request(`http://2captcha.com/res.php?key=${captchaKey}&method=userrecaptcha&id=${captchaId}&action=get&json=1`, function(err, res) {

            try {
                let json = JSON.parse(res.body);
                if (json && json.status === 1) {
                    clearInterval(runInterval);
                    resolve(json.request);
                } else if (json.status && json.status != 1 && json.status != 0) {
                    return reject("Uknown 2captcha error");
                }
            } catch (err) {
                reject(err);
            }
            });
        }, 5000);
    })
    return newPromise;
}



exports.validateUser = async function (captchaResponse, options) {
    let newPromise = new Promise(async function(resolve, reject) {

        fetch(options.url || 'https://api.roblox.com/captcha/validate/user', {
          _id: options._id,
          form: {
            "g-Recaptcha-Response": captchaResponse,
            "isInvisible": true
          },
          method: "POST"
        }).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to solve captcha and validate user. Status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);

    })
    return newPromise;
}


/**
 * 
 * @param {number | string} code 
 * @param {setup.BloxySetup} options 
 */
exports.twostepVerify = async function (code, options) {
    let newPromise = new Promise(async function(resolve, reject) {
        let { ticket, user } = options.authTab.TwoStep;
        

        let createReq = {
            username: user,
            ticket  : ticket,
            code    : code,
            rememberDevice : false,
            actionType: 'Login'
        }

        fetch("https://auth.roblox.com/v2/twostepverification/verify", {
            json: createReq,
            method: "POST",
            _id: options._id
        }).then(({res})=>{
            if (res.statusCode === 200) return resolve({
                success: true
            })

            resolve({
                success: false,
                message: res.statusMessage,
                statusCode: res.statusCode
            })
        })
    })

    return newPromise;
}

exports.getVerification = async function (url, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        self._request(url).then(async ({res})=>{
            let inputs = await exports.getVerificationInputs(res.body);
            let match;

            if (res.headers && res.headers['set-cookie']) {
                match = res.headers['set-cookie'].toString().match(/__RequestVerificationToken=(.*?);/)
            }

            resolve({
                inputs: inputs,
                header: match && match[1]
            })
        }).catch(reject);
    })
    return newPromise;
}

exports.getVerificationInputs = async function (html) {

    let $ = cheerio.load(html);

    let inputs = {};
    let find = ['__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION', '__RequestVerificationToken'];
    for (let i=0; i<find.length; i++) {
        let get = find[i];
        inputs[get] = $('input[name=' + get + ']').val();
    }
    return inputs
}