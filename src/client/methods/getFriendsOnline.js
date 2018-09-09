const classes = require('../../classes');

module.exports = async function (self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!self) return reject(`Did not provide self`);

        let options = {
            json: true
        };

        self._request('https://api.roblox.com/my/friendsonline', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get friends online, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let friends = res.body;
            friends = friends.map(x=> new classes.User.PartialUser(x, self))
        }).catch(reject);
    })
    return newPromise;
}