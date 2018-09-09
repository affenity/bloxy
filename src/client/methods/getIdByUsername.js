

module.exports = async function (username, self, overrideCache) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!username || !self) return reject(`Did not provide username or self`);

        let url = `https://api.roblox.com/users/get-by-username?username=${username}`;

        let options = {
            json: true
        };

        if (!overrideCache) {
            let find = await self._setup.cache.getCache('getid', username.toLowerCase());
            if (find != null) return resolve(find);
        }
        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get user by username, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let userId = res.body.Id;
            self._setup.cache.cache('getid', username.toLowerCase(), userId);
            resolve(userId);
        })
    })
    return newPromise;
}