// https://www.roblox.com/promocodes/redeem?code=!HAPPY12BIRTHDAYROBLOX!

module.exports = async function (code, self) {
    let newPromise = new Promise ( async function (resolve, reject) {
        if (!code || !self) return reject(`Did not provide code or self`);

        self._request(`https://www.roblox.com/promocodes/redeem?code=${code}`, {method: "POST"}).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to redeem promo code, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            let data = JSON.parse(res.body);
            
            if (data.success !== true) return reject(data.errorMsg);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}