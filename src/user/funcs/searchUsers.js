//https://www.roblox.com/search/users?keyword=lol&startIndex=0


const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
const parser = require('cheerio');

module.exports = async function (query, startIndex, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var startIndex = startIndex || 0;
        var url = `https://www.roblox.com/search/users/results?keyword=${query}&maxRows=12&startIndex=${startIndex}`
        fetch(url).then(res => {
            if (res.statusCode == 200) {
                var json = JSON.parse(res.body);
                
                resolve(json);
            } else {
                reject(`Failed to search for users, make sure the request was valid!\nStatus code: ${res.statusCode}, status message: ${res.statusMessage}`)
            }
        }).catch(reject);
    })
    var results = [].concat(await newPromise).map(x => new userClass.UserSearch(x, opts));
    return results;
}

