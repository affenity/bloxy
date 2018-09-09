


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://groups.roblox.com/v1/groups/${setup.groupId}/wall/posts/${x.postId}`;

        let options = {
            method: "DELETE"
        }
        
        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to delete wall post, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}