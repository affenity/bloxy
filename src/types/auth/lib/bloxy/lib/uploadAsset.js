const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const getVerification = bloxy.getVerification;
const request = require('request')


/**
 * Uploads an item to Roblox
 * @param {Object} settings 
 * @param {Number} settings.assetType (11 for shirt, 12 for pants, 13 for decals)
 * @param {String} settings.name Name of the item you're uploading
 * @param settings.file A readstream (fs module) of what to upload
 * @param {Number} settings.groupId (*Optional*) If provided, will upload to the specified group instead of your own user
 */
module.exports = async function(settings, id) {
    var newPromise = new Promise(async function(resolve, reject) {

        if (!settings || !settings.assetType || !settings.name || !settings.file || !id) return reject(`Did not provide settings, assetType, name, file or identificator`)
        getVerification('https://www.roblox.com/build/upload', id).then(response=>{

        let url = `https://www.roblox.com/build/upload`
            let options = {
                id: id,
                method:"POST",
                isCaptcha: true,
                captchaUrl: 'https://www.robox.com/build/upload',
                formData: {
                    name: settings.name,
                    assetTypeId: settings.assetType,
                    groupId: settings.groupId || '',
                    __RequestVerificationToken: response.inputs.__RequestVerificationToken,
                    verification: response.header,

                    file: {
                        value: settings.file,
                        options: {
                            filename: 'Image.png',
                            contentType: 'image/png'
                        }
                    }


                },
            }

            fetch(url, options).then(({res})=>{
                if (res.statusCode!==302) return reject(`Failed to upload asset, status code: ${res.statusCode}, message: ${res.statusMessage}`);

                let location = res.headers.location;
                console.log(location);

                let errorMessage = location.match('message=(.*)');
                console.log(errorMessage)
                let match = location.match(/\d+$/);
                if (match) {
                    let assetId = parseInt(match[0], 10);
                    if (location.indexOf('/build/upload')>=0) {
                        return resolve(assetId);
                    } else return reject(`Unknown redirect: ${location}`)
                } else if (errorMessage) {
                    reject(`Failed to upload asset, error: ${decodeURI(errorMessage[1])}`)
                } else {
                    reject(`Match error. Original: ${location}`)
                }
            }).catch(reject);
        }).catch(reject);

    })
    return newPromise;
}