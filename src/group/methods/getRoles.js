const Group = require('../group.js');


module.exports = async function (groupId, self, overrideCache) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!groupId || !self) return reject(`Did not provide groupId or self`);

        let url = `https://groups.roblox.com/v1/groups/${groupId}/roles`;

        let options = {
            json: true
        }

        if (!overrideCache) {
            let find = await self._setup.cache.getCache('grouproles', groupId);
            if (find != null) return resolve(find.map(x=> new Group.GroupRole(x, groupId, self)));
        }
        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get group roles, code: ${res.statusCode}, message: ${res.statusMessage}`);
            self._setup.cache.cache('grouproles', groupId, res.body.roles);
            resolve(res.body.roles.map(x=> new Group.GroupRole(x, groupId, self)));
        }).catch(reject);
    });
    return newPromise;
}