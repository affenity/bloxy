// https://www.roblox.com/places/developerproducts/add

const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


/**
 * 
 * @param {Object} setup
 * @param {Number} setup.universeId
 * @param {String} setup.name
 * @param {Number} setup.price 
 * @param {String} setup.description
 * @param {*} id 
 */
module.exports = async function (setup, id) {
    var newPromise = new Promise(async function(resolve, reject) {
    let universeId = setup.universeId;
    let name = setup.name;
    let price = setup.price;
    let description = setup.description;
    const cheerio = require('cheerio')

    if (!universeId || !name || !price || !description || !id) return reject(`Did not provide universeId, name, price, description or identificator`)

    let options = {
        id: id,
        form: {
            universeId: universeId,
            name: name,
            priceInRobux: price,
            description: description
        },
        method:"POST"
    }

    checkProductName(universeId, name, id).then(canMake=>{
        
        fetch(`https://www.roblox.com/places/developerproducts/add`, options).then(({res})=>{
        if (res.statusCode!==200) return reject(`Failed to add developer product, status code: ${res.statusCode}, message: ${res.statusMessage}`);
        let $ = cheerio.load(res.body);
        let status = $('#DeveloperProductStatus');

        if (status && status.length >= 1) {
            let productId = parseInt(status.text());
            resolve(productId);
        } else return reject(`Failed to create developer product, reason unknown`)
    }).catch(reject)

    }).catch(reject);
    
})
return newPromise;
}




async function checkProductName(universeId, name, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let url = `https://www.roblox.com/places/check-developerproduct-name?universeId=${universeId}&developerProductName=${name}&developerProductId=0`;
        fetch(url, {id: id, json:true}).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to check if name was available, status code: ${res.statusCode}, message: ${res.statusMessage}`)
            if (res.body.Success===true) return resolve(true);
            reject(`Failed to create developer product, name already exists`);
        }).catch(reject);
    })
    return newPromise;
}