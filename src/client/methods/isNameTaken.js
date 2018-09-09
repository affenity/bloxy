

module.exports = async function (username, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!username || !self) return reject(`Did not provide username or self`);

        let options = {
            json: true
        }

        let url = `https://www.roblox.com/UserCheck/DoesUsernameExist?username=${username}`;
        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to check if name was taken, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.success==true);
        })
    })
    return newPromise;
}