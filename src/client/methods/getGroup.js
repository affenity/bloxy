const classes = require('../../classes');
const Group   = require('../../group/group.js');

module.exports = async function (groupId, self, overrideCache) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !self) return reject(`Did not provide groupId or self`);
        let url = `https://groups.roblox.com/v1/groups/${groupId}`;
        let options = {
            json: true
        };

        if (!overrideCache) {
            let find = await self._setup.cache.getCache('getgroup', groupId);
            if (find != null) return resolve(new Group.Group(find, self));
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get group, code: ${res.statusCode}, message: ${res.statusMessage}`);
            self._setup.cache.cache('getgroup', groupId, res.body);
            resolve(new Group.Group(res.body, self));
        }).catch(reject);
    })
    return newPromise;
}