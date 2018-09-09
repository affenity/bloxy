

module.exports = async function (newStatus, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!newStatus || !self) return reject(`Did not provide new status or self`);

        let options = {
            method: "POST",
            inputs: {
                status: newStatus,

                sendToFacebook: false
            },
            json: true
        }

        self._request('https://www.roblox.com/home/updatestatus/', options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to update status. Status code: ${res.statusCode}, message: ${res.statusMessage}`);

            if (!res.body || !res.body.success) return resolve(false);
            resolve(true);
        })
    })
    return newPromise;
}