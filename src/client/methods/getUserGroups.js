const Group = require('../../group/group.js');


module.exports = async function (userId, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!userId || !self) return reject(`Did not provide userId or self`);

        let url = `https://api.roblox.com/users/${userId}/groups`;

        let options = {
            json: true
        };

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to x, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let result = [];
            result = res.body.map(x=> new Group.UserGroup(x, self));
            resolve(result);
        }).catch(reject);
    })
    return newPromise;
}