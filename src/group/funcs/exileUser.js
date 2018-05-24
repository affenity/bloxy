const post = require('../../util/post.js')
const cheerio = require('cheerio');


module.exports = async function (groupId, userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://groups.roblox.com/v1/groups/${groupId}/users/${userId}`
        post(url, { method: "DELETE", jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            console.log(res.body);
            if (res.statusCode == 200) {
                resolve(true)
            } else reject("GAY Please make sure your request is valid, status code: " + res.statusCode + ", status message: " + res.statusMessage);
        })
    })
    return Boolean(await newPromise);
}