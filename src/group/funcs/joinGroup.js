const post = require('../../util/strictpost.js')
const getVerification = require('../../util/getVerification.js')


module.exports = async function (groupId, opts) {

    var newPromise = new Promise(function (resolve, reject) {
        


            var url = `https://www.roblox.com/groups/join-group-ajax`

            post(url, {
                inputs: {id:groupId},
                jar: opts.jar,
                xcsrf: opts.xcsrf
            }).then(({
                res
            }) => {
                if (res.statusCode == 200) {
                    resolve(true)
                } else reject(`Failed to join group, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            }).catch(reject);

        })


    return newPromise
}