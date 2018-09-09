


module.exports = async function (userId, self, overrideCache) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!userId || !self) return reject(`Did not provide userId or self`);


        let url = `https://api.roblox.com/users/${userId}`;

        let options = {
            json: true
        }
        
        if (!overrideCache) {
            let find = await self._setup.cache.getCache('getusername', userId);
            if (find != null) return resolve(find);
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to x, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let username = res.body.Username;
            self._setup.cache.cache('getusername', userId, username);
            resolve(username);
        }).catch(reject);
    })
    return newPromise;
}