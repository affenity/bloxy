const Group = require('../group.js');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://groups.roblox.com/v2/groups/${setup.groupId}/wall/posts`;

        let options = {
            method: "POST",
            json: {
                body: setup.message
            }
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to post on wall, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(new Group.WallPost(res.body, setup.groupId, self));
        }).catch(reject);
    })
    return newPromise;
}