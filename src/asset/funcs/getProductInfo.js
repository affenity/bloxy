const fetch = require('../../util/fetch.js')

const assetClass = require('../class.js');

module.exports = async function (assetId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://api.roblox.com/marketplace/productinfo?assetId=${assetId}`
        fetch(url, opts).then(({res}) => {
            if (res.statusCode!=200) reject(`Failed to get product info`)
            resolve(JSON.parse(res.body));
        }).catch(reject);
    })
    return new assetClass.Product(await newPromise, opts);
}