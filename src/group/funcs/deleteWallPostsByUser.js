const post = require('../../util/post.js')



module.exports = async function (groupId, userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://groups.roblox.com/v1/groups/${groupId}/wall/users/${userId}/posts`
        post(url, { method: "DELETE", jar:opts.jar, xcsrf:opts.xcsrf }).then(({res}) => {
            if (res.statusCode == 200) {
                //if (!json.success) reject('Invalid permissions, make sure the authenticated user is in the group and has permissions to delete wall posts!'
                resolve(true);
            } else {
                reject("Make sure the request is valid, internal error");
            }
        }).catch(reject);
    })
    return newPromise
}