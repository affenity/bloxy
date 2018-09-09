


module.exports = async function (requestId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!requestId || !self) return reject(`Did not provide requestId or self`);
        
        let url = `https://www.roblox.com/group/handle-join-request`;

        let options = {
            json: true,
            form: {
                groupJoinRequestId: requestId
            },
            method: "POST"
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to x, code: ${res.statusCode}, message: ${res.statusMessage}`);
            if (!(res.body.success==true)) return reject(`Failed to accept join request, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}