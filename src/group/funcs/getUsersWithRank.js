const fetch = require('../../util/fetch.js')
const cheerio = require('cheerio');
const groupClass = require('../class.js');

const userClass = require('../../user/class.js');
const getRoles = require('./getRoles.js')
//const setRank = require('./setRank.js')
const getRankNameInGroup = require('./getRankNameInGroup.js');
var changeRank = require('./changeRank.js');


module.exports = async function (groupId, roleId, opts) {
    
    var newPromise = new Promise(async function (resolve, reject) {
        var url = `https://groups.roblox.com/v1/groups/${groupId}/roles/${roleId}/users?sortOrder=Desc&limit=100`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject("An error occured, status code: " + res.statusCode + ", status message: " + res.statusMessage)
            } else {
                var json = JSON.parse(res.body);
                resolve(json.data);
            }
        })
    })
    return [].concat(await newPromise).map(x=>new userClass.PartialUser(x,  opts));
}