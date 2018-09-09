







module.exports = async function (userId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!userId || !self) return reject(`Did not provide userId or self`);
        
        let url = `https://api.roblox.com/user/get-friendship-count?userId=${userId}`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to x, code: ${res.statusCode}, message: ${res.statusMessage}`);

            if (res.body && res.body.success) {
                resolve(res.body.count)
            } else reject(`Failed to get user's amount of text, code: ${res.statusCode}, message: ${res.statusMessage}`);
        }).catch(reject);
    })
    return newPromise;
}

// https://api.roblox.com/user/get-friendship-count?userId=${userId}