const fetch = require('../../util/fetch.js')


module.exports = async function (targetId, requesterId, setup) {
    var newPromise = new Promise(function (resolve, reject) {
        if (!targetId) throw new Error("No user id provided");
        var url = `https://www.roblox.com/api/friends/acceptfriendrequest`
        var opts = {
            method: "POST",
            body: {
                "targetUserID": requesterId,
                "invitationID": targetId
            },
            json: true,
            jar: setup.jar,
            xcsrf:setup.xcsrf
        }
        fetch(url, opts).then(({res}) => {
            resolve(res.body.success);
        })
    })
    let could = await newPromise;
    return Boolean(could);
}