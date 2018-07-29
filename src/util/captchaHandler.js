const fetch = require('./fetch')
const globalCache = require('./globalCache');
const googleKey = "6LcpwSQUAAAAAPN5nICO6tHekrkrSIYvsl9jAPW4";

module.exports = async function (url, id) {
    let getSetup = globalCache.Setups[id];
    let captchaKey = getSetup.authTab.CaptchaKey;

    if (!captchaKey) throw new Error("Captcha Key is not provided and cannot be used");
    let makeUrl = `http://2captcha.com/in.php?key=${captchaKey}&method=userrecaptcha&googlekey=${googleKey}&pageurl=${url}&here=now&json=1`;
    console.log(makeUrl)
    let {res} = await fetch(makeUrl, {id:id, json:true});
    let body = res.body;
    console.log(body);
    if (body.status && body.status===1) {
        let reqId = body.request;
        let solvedCaptcha = await pollResult(reqId, captchaKey, id);
        if (!solvedCaptcha) throw new Error("Failed to solve captcha");
        return solvedCaptcha;
    } else throw new Error(`Failed to send Captcha request to 2Captcha, ${body}`);
}

async function pollResult(captchaId, captchaKey, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let runInterval = setInterval( async () => {
            let getResult = await fetch(`http://2captcha.com/res.php?key=${captchaKey}&method=userrecaptcha&id=${captchaId}&action=get&json=1`, {id: id});
            let json = JSON.parse(getResult.res.body);
            console.log(json);
            if (json && json.status === 1) {
                clearInterval(runInterval);
                resolve(json.request);
            }
        }, 5000);
    })
    return newPromise;
}