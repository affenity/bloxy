// Set the given group (by id) as the primary group for the auth. user


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://groups.roblox.com/v1/groups/primary`;

        let options = {
            method: "POST",
            json: {
                groupId: setup.groupId
            }
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to set group as primary, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true)
        }).catch(reject);
    })
    return newPromise;
}