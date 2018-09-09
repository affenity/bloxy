const AccountHandler = require('../managers/account');

module.exports = async function friendUser (targetId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!targetId || !self) return reject(`Did not provide targetId or self`);

        let options = {
            method: "POST",
            json: true
        }

        let url = `https://api.roblox.com/user/request-friendship?recipientUserId=${targetId}`;

        self._request(url, options).then(async ({res})=>{
            if (res.statusCode === 403 && res.body.success !== true && res.body.message && res.body.message.toLowerCase() == 'captcha') {
                let captchaResponse = await AccountHandler.captchaHandler(`https://www.roblox.com/users/${targetId}/profile`, self._setup).catch();
                if (!captchaResponse) return reject(`Failed to add user and failed to get captcha response`);
                let validate = await AccountHandler.validateUser(captchaResponse, self._setup).catch();
                if (!validate) return reject(`Failed to validate user using captcha`);
                resolve(friendUser(targetId, self));
            } else if (res.statusCode !== 200) return reject(`Failed to friend user, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.success==true);
        }).catch(reject);
    })
    return newPromise;
}