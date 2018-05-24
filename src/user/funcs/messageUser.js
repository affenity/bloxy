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
        if (!opts) reject("No settings provided");
        if (!opts.subject || !opts.body) return reject("Please provide subject and body in the settings!")

        post('https://www.roblox.com/messages/send', { method: "POST", json: { recipientId: userId, subject: opts.subject, body: opts.body }, jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var success = res.body.success;
            if (res.statusCode === 200) {
                if (!success) {
                    reject(res.body.shortMessage)
                } else resolve(true);
            } else reject(`Message failed.\nStatus code: ${res.statusCode}\nStatus message : ${res.statusMessage}`)
        })
    })
    return Boolean(await newPromise);
}