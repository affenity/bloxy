


module.exports = async function (requestId, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!requestId || !self) return reject(`Did not provide requestId or self`);

        let url = `https://www.roblox.com/group/handle-join-request`;

        let options = {
            json: true,
            method: "POST",
            form: {
                groupJoinRequestId: requestId,
                accept: false
            }
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to decline join request, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(Boolean(res.body.success==true))
        }).catch(reject);
    })
    return newPromise;
}