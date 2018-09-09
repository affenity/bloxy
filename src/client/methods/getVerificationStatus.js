const classes = require('../../classes');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        let _type = setup.type == 'discord' ? 'user' : 'roblox'
        let url = `https://verify.eryn.io/api/${_type}/${setup.userId}`;
        let options = {
            
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get user's verification status with RoVer, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let body = JSON.parse(res.body);
            if (_type == 'roblox') {
                resolve(new classes.User.RoVerResponseDiscord(body));
            } else {
                resolve(new classes.User.RoVerResponseRoblox(body, self));
            }
        }).catch(reject);
    })
    return newPromise;
}