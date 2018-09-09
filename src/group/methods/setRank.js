


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self) return reject(`Did not provide setup or self`)


        let url = `https://www.roblox.com/groups/api/change-member-rank?groupId=${setup.groupId}&newRoleSetId=${setup.roleId}&targetUserId=${setup.userId}`;

        let options = {
            json: true,
            method: "POST"
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to x, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}