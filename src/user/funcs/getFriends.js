const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')

module.exports = async function (userId, page, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/users/${userId}/friends${page != null ? "?page=" + page : ''}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var json = JSON.parse(res.body);

            var startArray = []
            var allArray = startArray.concat(json);

            var resultsArray = []

            for (num in allArray) {
                var friend = allArray[num];
                resultsArray.push(friend);
            }

            return resolve(resultsArray);

        })
    })
    let friends = await newPromise;
    return [].concat(friends).map(x=>new userClass.PartialUser(x, opts));
}