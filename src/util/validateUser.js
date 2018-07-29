const fetch = require('./fetch')

module.exports = async function(captchaResponse, id) {
    let validate = await fetch(`https://api.roblox.com/captcha/validate/user`, {
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

