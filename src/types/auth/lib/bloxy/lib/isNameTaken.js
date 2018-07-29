const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(username, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!username || !id) return reject(`Did not provide username or identificator`);

        let options = {
            json:true,
            id: id
        }

        let url = `https://www.roblox.com/UserCheck/DoesUsernameExist?username=${username}`
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to check if name was taken, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            let success = res.body.success;
            resolve(success);
        }).catch(reject);
    })
    return newPromise;
}