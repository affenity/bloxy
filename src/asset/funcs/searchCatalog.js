const fetch = require('../../util/fetch.js')
const assetClass = require('../../asset/class.js');
const userClass = require('../../user/class.js');
const parser = require('cheerio');

module.exports = async function (query, category) {
    var newPromise = new Promise(function (resolve, reject) {
        var category = category || 1;
        var url = `https://search.roblox.com/catalog/items?Category=${category}&Direction=1&Keyword=${encodeURIComponent(query)}`
        fetch(url).then(res => {
            if (res.statusCode == 200) {
                var json = JSON.parse(res.body);
                var items = json.Items;
                console.log(items.length);
                //var results = [].concat(items).map(x => new assetClass.SearchResult(x));
                var results = items;
                resolve(results);
            } else {
                reject(`Failed to search for users, make sure the request was valid!\nStatus code: ${res.statusCode}, status message: ${res.statusMessage}`)
            }
        }).catch(reject);
    })
    return newPromise
}
