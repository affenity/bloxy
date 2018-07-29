const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const cheerio = require('cheerio')

module.exports = async function(userId1, userId2, id) {
    var newPromise = new Promise(function(resolve, reject) {
        let url = `https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId=${userId1}&userId=${userId2}`;

        fetch(url, {id: id}).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get request, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            let $ = cheerio.load(res.body);
            let isFriends = $('Value[Type="boolean"]').text().toString('utf8').trim();
            if (isFriends == 'true') return resolve(true);
            resolve(false);
        }).catch(reject);
    })
    return newPromise;
}