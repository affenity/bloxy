const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, userId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !userId || !id) return reject(`Did not provide groupid, userid or identificator`);

        let url = `https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=${userId}&groupId=${groupId}`
        let options = {
            id: id
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!=200) return reject(`Failed to get rank name in group, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}