const classes = require('../../classes')
const Group   = require('../../group/group.js');

module.exports = async function (self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!self) return reject(`Did not provide self`);

        let options = {
            json: true
        };

        self._request('https://develop.roblox.com/v1/user/groups/canmanage', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get groups that you manage, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let result = [];
            result = res.body.map(x=> new Group.PartialGroup(x, self));
            resolve(result);
        }).catch(reject);
    })
    return newPromise;
}