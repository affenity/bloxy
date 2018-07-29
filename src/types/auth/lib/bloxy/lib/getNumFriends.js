const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(userId, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!userId || !id) return reject(`Did not provide userid or identificator`);

        let url = `https://api.roblox.com/user/get-friendship-count?userId=${userId}`;
        let options = {
            id:id,
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get user's amount of friends, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            if (res.body.success && res.body.success==true) {
                resolve(res.body.count);
            } else reject(`Failed to get user's amount of friends, status code: ${res.statusCode}, message: ${res.statusMessage}`);
        }).catch(reject);
    })
    return newPromise;
}