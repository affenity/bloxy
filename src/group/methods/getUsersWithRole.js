const classes = require('../../classes');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://groups.roblox.com/v1/groups/${setup.groupId}/roles/${setup.roleId}/users?sortOrder=Desc&limit=100${setup.cursor!=null?`&cursor=${setup.cursor}`: ''}`;

        let options = {
            json: true
        }
        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get users with role, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body.data);
        })
    })
    return newPromise;
}