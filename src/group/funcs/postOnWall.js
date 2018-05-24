const post = require('../../util/strictpost.js')
const getVerification = require('../../util/getVerification.js')


module.exports = async function (groupId, message, opts) {

    var newPromise = new Promise(function (resolve, reject) {
        getVerification(`https://www.roblox.com/My/Groups.aspx?gid=${groupId}`, opts).then(response => {

            var events = {
                ctl00$cphRoblox$GroupWallPane$NewPost: message,
                ctl00$cphRoblox$GroupWallPane$NewPostButton: 'Post'
            };

            var url = `https://www.roblox.com/My/Groups.aspx?gid=${groupId}`

            var inputs = response.inputs;
            let allInputs = Object.assign(inputs, events)


            post(url, { inputs: inputs, jar: opts.jar, xcsrf:opts.xcsrf }).then(({res}) => {
                if (res.statusCode == 200) {
                    resolve(true)
                } else reject("Shout failed, verify login, permissions, and message")
            }).catch(reject);

        })



    })
    return newPromise
}