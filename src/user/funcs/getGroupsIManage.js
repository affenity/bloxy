//https://develop.roblox.com/v1/user/groups/canmanage



const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
const groupClass = require('../../group/class.js')

module.exports = async function (userId, page, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://develop.roblox.com/v1/user/groups/canmanage`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {

            var json = JSON.parse(res.body);
            var groups = json.data;

            return resolve(groups);

        }).catch(reject);
    })
    let groups = await newPromise;
    let getG = [].concat(groups).map(x=>new groupClass.UserGroup(x, opts));
    return getG;
}

