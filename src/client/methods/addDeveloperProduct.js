const cheerio = require('cheerio');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self) return reject(`Did not provide setup or self`);

        let universeId = setup.universeId;
        let name = setup.name;
        let price = setup.price;
        let description = setup.description;

        if (!universeId || !name || !price || !description) return reject(`Did not provide universeId, name, price or description of developer product`);

        let options = {
            form: {
                universeId: universeId,
                name: name,
                priceInRobux: price,
                description: description
            },
            method: "POST"
        }

        checkProductName(universeId, name, self).then(isValidName => {
            if (!isValidName) return reject(`Failed to create developer product, name already exists for that game universe!`);

            self._request('https://www.roblox.com/places/developerproducts/add', options).then(({res})=>{
                if (res.statusCode !== 200) return reject(`Failed to add developer product, status code: ${res.statusCode}, message: ${res.statusMessage}`);
                let $ = cheerio.load(res.body);
                let status = $('#DeveloperProductStatus');

                if (status && status.length >= 1) {
                    let productId = parseInt(status.text().match(/\d+/)[0]);
                    resolve(productId);
                } else return reject(`Failed to create developer product, reason unknown`);
            }).catch(reject);
        }).catch(reject);


    })
    return newPromise;
}


async function checkProductName(universeId, name, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        let url = `https://www.roblox.com/places/check-developerproduct-name?universeId=${universeId}&developerProductName=${name}&developerProductId=0`;
        self._request(url, { json: true }).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to check if name was available, status code: ${res.statusCode}, message: ${res.statusMessage}`)
            if (res.body.Success===true) return resolve(true);
            resolve(false);
        }).catch(reject);
    })
    return newPromise;
}