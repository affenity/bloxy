const group = require('../group.js');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://groups.roblox.com/v1/groups/${setup.groupId}/status`;

        let options = {
            json: {
                message: setup.message
            },
            method: "PATCH"
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to post shout on group, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(new group.GroupShout(res.body, self));
        }).catch(reject);
    })
    return newPromise;
}