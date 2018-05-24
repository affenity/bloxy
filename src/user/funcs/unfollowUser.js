/*var httpOpt = {
    url: '//www.roblox.com/user/follow',
    options: {
      method: 'POST',
      jar: jar,
      headers: {
        'X-CSRF-TOKEN': token
      },
      json: {
        targetUserId: userId
      },
      resolveWithFullResponse: true
    }
  };*/


const fetch = require('../../util/fetch.js')
const post = require('../../util/post.js')

module.exports = async function (userId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        if (!userId) reject("No user id specified")
        post('https://www.roblox.com/api/user/unfollow', { method: "POST", json: { targetUserId: userId }, jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var success = res.body.success;
            if (!success) {
                if (res.body.message != null) {
                    reject("FAILED TO UNFOLLOW USER! REASON: " + res.body.message)
                } else {
                    reject("Failed to unfollow user, possible reasons are: Captcha, Roblox has throttled your requests, or you have blocked this user. No reason given!")
                }
            } else {
                resolve(true);
            }
        })
    })
    return Boolean(await newPromise);
}