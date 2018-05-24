const fetch = require('../../util/fetch.js')
var groupClass = require('../class.js');
module.exports = async function (groupId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://groups.roblox.com/v1/groups/${groupId}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var json = JSON.parse(res.body);

            var id = json.id;
            if (!id) return reject("Failed to get group, invalid id");
            resolve(json);

        }).catch(reject);
    })
    return new groupClass.Group(await newPromise, opts);
}