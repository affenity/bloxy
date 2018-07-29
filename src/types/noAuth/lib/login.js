const bloxyUtil = global.bloxy;
const {messages, endpoints, captchaHandler, fetch} = bloxyUtil;
const globalCache = bloxyUtil.cache;

const request = require('request');


// Manually doing this stuff because request is bad D: :sob:
const TOUGH = require('tough-cookie')
const Cookie = TOUGH.Cookie;


const loginEndpoint = endpoints.auth.login;
const getUserProfile = require('../../auth/lib/bloxy/lib/getUserProfile')
const getXcsrf = bloxyUtil.getXcsrf;

let authenticate = bloxyUtil.authenticate;

const classes = require('../../../classes');

const userClass = classes.userClass;

const validateLogin = async function(captchaResponse, username, id) {
    let xcsrf = await getXcsrf(globalCache.Setups[id].jar);
    globalCache.Setups[id].xcsrf=xcsrf;
    let validate = await fetch(`https://api.roblox.com/captcha/validate/login?username=${username}`, {
        id: id,
        form: {
            "g-Recaptcha-Response": captchaResponse,
            "isInvisible": true
        },
        method: "POST"
    })
    let res = validate.res;
    if (res.statusCode!==200) throw new Error(`Failed to validate user using captcha response, status code: ${res.statusCode}, message: ${res.statusMessage}, body: ${res.body}`);
    return true;
}

module.exports = async function login(options) {

    var newPromise = new Promise(async function(resolve, reject) {

        let createRequest = validateOptions(options);
        if (typeof(createRequest) == 'string') return reject(createRequest);


            
            

        // Sign in the default way
        if (!createRequest.cookie) {
            
            let thisSetup = globalCache.Setups[options.id]
            let jar = thisSetup.jar;
            let xcsrf = await getXcsrf(jar);
            globalCache.Setups[options.id].xcsrf = xcsrf;
            request(loginEndpoint, { method: 'POST', json: createRequest, headers: {'X-CSRF-TOKEN': xcsrf}, jar: jar}, async function (err, res) {
                if (err) throw new Error(err);
                if (res.statusCode !== 200 && !thisSetup.authTab.CaptchaKey) reject(`${messages.loginFunc.failed}, status code: ${res.statusCode}, message: ${res.statusMessage}`)
                globalCache.Setups[options.id].jar = jar;
                let response = res.body;

                if (response.errors && response.errors[0] && response.errors[0].code === 2) {
                    if (!thisSetup.authTab.CaptchaKey) return reject(`Captcha, no 2Captcha key provided`);
                    let getCaptchaResponse = await captchaHandler(`https://www.roblox.com/newlogin`, options.id);
                    if (!getCaptchaResponse) return reject(`Could not get captcha response`);
                    let validate = await validateLogin(getCaptchaResponse, createRequest.cvalue, options.id);
                    if (!validate) return reject(`Failed to validate user`)
                    return resolve(login(options));
                }

                
                if (!response || !response.user || !response.user.id) return reject(`Failed to sign in, make sure you provided correct credentials!`);
                let userProfile = await getUserProfile(response.user.id);
                userProfile = Object.assign(userProfile, {id:options.id});

                let makeUser = new userClass.FullUser(userProfile, options.id);
                let xcsrf = await getXcsrf(jar);
                globalCache.Setups[options.id].xcsrf = xcsrf;


                if (response && response.user && response.user.id && !response.twoStepVerificationData) {
                    // No 2FA, return main class without 2fa prompt
                    return resolve({
                        user: makeUser,
                        twostepEnabled: false,
                        id: options.id
                    });
                } else if (response && response.user && response.user.id && response.user.name && response.twoStepVerificationData) {
                    // 2FA, return main class with 2fa prompt
                    return resolve({
                        user: makeUser,
                        twostepEnabled: true,
                        id: options.id,
                        ticket: response.twoStepVerificationData.ticket,
                        twostepType: response.twoStepVerificationData.mediaType
                    });
                }
        })


        } else {
                let thisJar = globalCache.Setups[options.id].jar;

                let c = new Cookie({
                    key:'.ROBLOSECURITY',
                    value: createRequest.cookie,
                    domain: 'roblox.com',
                    hostOnly: false,
                    httpOnly:false
                })
                
                thisJar.setCookie(c, 'https://roblox.com');
                globalCache.Setups[options.id].jar = thisJar;
                authenticate(thisJar, null).then(async ({myAccountId})=>{
                    let accountId = myAccountId;
                    let userProfile = await getUserProfile(accountId);
                    userProfile = Object.assign(userProfile, {id: options.id})

                    let makeUser = new userClass.FullUser(userProfile, options.id);


                    return resolve({
                        user: makeUser,
                        twostepEnabled: false,
                        id: options.id
                    })
                }).catch(reject);
            
        }

    })


    return newPromise;
}


function validateOptions(options) {
    if (!options || !options.authTab) return messages.loginFunc.values;//throw new Error(messages.loginFunc.values);
    let authTab = options.authTab;

    // User does not want to sign in using cookies

    if (!authTab.cookie) {
        let signinWith = authTab.signinW;
        let cType = authTab.signinW, cPass = authTab.password, cValue = authTab.value;
        if (!cType || !cValue || !cPass) return messages.loginFunc.values;

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