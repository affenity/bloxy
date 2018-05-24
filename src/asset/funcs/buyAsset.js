const fetch = require('../../util/fetch.js')


module.exports = async function (product, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        let url = `https://www.roblox.com/api/item.ashx?rqtype=purchase&productID=${product.productId}&expectedCurrency=1&expectedPrice=${product.priceInRobux}&expectedSellerID=${product.creator.userId}&userAssetID=`
        fetch(url, {
           method:"POST",
           jar:opts.jar,
           xcsrf:opts.xcsrf
        }).then(({res}) => {
            if (res.statusCode!=200) reject(`Failed to purchase asset, status code: ${res.statusCode}, status message: ${res.statusMessage}`);
            resolve(true);
        })
    })
    let could = await newPromise;
    return Boolean(could);
}