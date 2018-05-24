const fetch = require('../../util/fetch.js')
//const groupClass = require('../class.js');
var groupClass = require('../class.js');

module.exports = async function (groupId, opts) {
    
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/api/groups/${groupId}/RoleSets/`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var json = JSON.parse(res.body);
            resolve(json);
        }).catch(reject);
    })
    return [].concat(await newPromise).map(x=>new groupClass.GroupRole(x, groupId, {jar:opts.jar, xcsrf:opts.xcsrf}));
}