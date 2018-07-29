const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(username, id) {

    var newPromise = new Promise(function(resolve, reject) {
        let url = `https://api.roblox.com/users/get-by-username?username=${username}`;

        fetch(url, {id:id, json:true}).then( ({res}) => {
            if (res.statusCode!==200) return reject(`Failed to get user by username, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            let userId = res.body.Id;
            resolve(userId);
        }).catch(reject);
    })

    return newPromise;
}