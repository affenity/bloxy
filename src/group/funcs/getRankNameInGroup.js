//http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=18442032&groupId=3544434
const fetch = require('../../util/fetch.js')



module.exports = async function (userId, groupId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `http://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=${userId}&groupId=${groupId}`
        console.log(url);
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject("Bad Request");
            } else resolve(res.body);
        }).catch(reject);
    })
    return newPromise
}
