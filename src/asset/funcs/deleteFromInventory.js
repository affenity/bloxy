const fetch = require('../../util/fetch.js')


module.exports = async function (product, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        let url = `https://www.roblox.com/asset/delete-from-inventory`
        fetch(url, {
            method: "POST",
            jar: opts.jar,
            xcsrf: opts.xcsrf,
            form:{assetId:product.assetId}
        }).then(({
            res
        }) => {
            if (res.statusCode != 200) reject(`Failed to delete asset, status code: ${res.statusCode}, status message: ${res.statusMessage}`);
            resolve(true);
        })
    })
    let could = await newPromise;
    return Boolean(could);
}