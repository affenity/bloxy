const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const getVerification = bloxy.getVerification;

module.exports = async function(groupId, message, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !message || !id) return reject(`Did not provide group id, message or identificator`)

        let url = `https://www.roblox.com/My/Groups.aspx?gid=${groupId}`

        var events = {
            ctl00$cphRoblox$GroupWallPane$NewPost: message,
            ctl00$cphRoblox$GroupWallPane$NewPostButton: 'Post'
        };

        getVerification(url, id).then(response=>{
            var inputs = response.inputs;
            let allInputs = Object.assign(inputs, events)

            let options = {
                id: id,
                inputs: allInputs,
                method:"POST"
            }

            fetch(url, options).then(({res})=>{
                if (res.statusCode!==200) return reject(`Failed to post on wall, status code: ${res.statusCode}, message: ${res.statusMessage}`)
                resolve(true);
            }).catch(reject);
        }).catch(reject);

        
    })
    return newPromise;
}