//http://api.roblox.com/my/friendsonline




const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')

module.exports = async function (userId, page, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `http://api.roblox.com/my/friendsonline`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {

            var json = JSON.parse(res.body);
            

            return resolve(json);

        }).catch(reject);
    })
    let babies = await newPromise;
    var users = [].concat(babies).map(x => new userClass.OnlineUser(x));
    return users;
}

