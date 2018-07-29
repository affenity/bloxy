const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const captchaHandler = bloxyUtil.captchaHandler;
const validateUser = bloxy.validateUser;

module.exports = async function friendUser(targetId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!targetId || !id) return reject(`Did not provide targetid, or identificator`);

        let options = {
            method: "POST",
            id: id,
            json:true
        }

        let url = `https://api.roblox.com/user/request-friendship?recipientUserId=${targetId}`
        fetch(url, options).then(async ({res})=>{
            if (res.statusCode===403 && res.body.success!==true && res.body.mesage && res.body.message.toLowerCase() == 'captcha') {
                let getCaptchaResponse = await captchaHandler(`https://www.roblox.com/users/${targetId}/profile`, id);
                if (!getCaptchaResponse) return reject(`Failed to get captcha response`)
                let validate = await validateUser(getCaptchaResponse, id)
                if (!validate) return reject(`Failed to validate user using captha response, ${validate}`);
                resolve(friendUser(targetId, id));
            } else if (res.statusCode!==200) return reject(`Failed to friend user, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            if (!res.body.success) return reject(`Failed to friend user, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            resolve(res.body.success===true);
        }).catch(reject);
    })
    return newPromise;
}