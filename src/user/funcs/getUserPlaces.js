const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')

module.exports = async function (userId, opts) {
    var page = opts.page || 1;
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/users/inventory/list-json?assetTypeId=9&cursor=&itemsPerPage=100&pageNumber=${page}&placeTab=Created&sortOrder=Desc&userId=${userId}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            if (res.statusCode != 200) {
                reject(`Failed to check the user's places, status code: ${res.statusCode}, status message: ${res.statusMessage}`)
            } else {
                var json = JSON.parse(res.body);
                if (json.Error & json.Error != '') reject(json.Error);
                resolve(json);
            }
        })
    })
    let places = await newPromise;
    let items = [].concat(places.Data.Items).map(x=>new userClass.UserPlace(x, opts));
    return items;
}