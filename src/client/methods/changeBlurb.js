

module.exports = async function (newBlurb, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!newBlurb || !self) return reject(`Did not provide new blurb or self`);

        let options = {
            method: "POST",
            inputs: {
                Description: newBlurb
            }
        }

        self._request('https://www.roblox.com/account/settings/description', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to change blurb. Code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}