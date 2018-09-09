


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self || !self.name || !setup.assetTypeId || !setup.file) return reject(`Did not provide setup or self`);
        let url = `https://www.roblox.com/build/upload`;


        let response = await self._setup.getVerification(url).catch(reject);


        let options = {
            method: "POST",
            formData: {
                name: setup.name,
                assetTypeId: setup.assetTypeId,
                groupId: setup.groupId || '',
                __RequestVerificationToken: response.inputs.__RequestVerificationToken,
                verification: response.header,

                file: {
                    value: setup.file,
                    options: {
                        filename: 'Image.png',
                        contentType: 'image/png'
                    }
                }
            }
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 302) return reject(`Failed to upload asset, code: ${res.statusCode}, message: ${res.statusMessage}`);

            let location = res.headers.location;
            if (location.indexOf('error')>=0) return reject(`Failed to upload asset, please click on this link to see the reason: https://www.roblox.com/${location}`)
            let errorMessage = location.match('message=(.*)');

            let match = location.match(/\d+$/);
            if (match) {
                let assetId = parseInt(match[0], 10);
                if (location.indexOf('/build/upload') > -1) {
                    return resolve(assetId);
                } else return reject(`Unknown redirect: ${location}`)
            } else if (errorMessage) {
                reject(`Failed to upload asset, error: ${decodeURI(errorMessage[1])}`)
            } else {
                reject(`Match error. Original: ${location}`)
            }
        }).catch(reject);
    })
    return newPromise;
}