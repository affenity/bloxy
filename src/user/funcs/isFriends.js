const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
var parser = require('cheerio');

module.exports = async function (userId1, userId2, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId=${userId1}&userId=${userId2}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's followers, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                let $ = parser.load(res.body);
                var res = $('Value[Type="boolean"]').text().toString('utf8').trim();
                if (res == 'true') return resolve(true);
                if (res == 'false') return resolve(false);

                //resolve(isFriends);
            }
        })
    })
    return Boolean(await newPromise);
}