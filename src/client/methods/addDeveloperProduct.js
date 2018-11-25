const cheerio = require("cheerio");

exports.run = async function (setup) {
	let universeId = setup.universeId;
	let name = setup.name;
	let price = setup.price;
	let description = setup.description;

	if (!universeId || !name || !price || !description) throw new Error("Did not provide universeId, name, price or description of developer product");

	let options = {
		form: {
			universeId: universeId,
			name: name,
			priceInRobux: price,
			description: description
		},
		method: "POST"
	};

	let isValidName = await checkProductName(universeId, name, this);
        
	if (!isValidName) throw new Error("Failed to create developer product, name already exists for that game universe!");

	let response = await this._setup.request.request("https://www.roblox.com/places/developerproducts/add", options);
        
	if (response.statusCode !== 200) throw new Error(`Failed to add developer product. ${response.status}`);
	let $ = cheerio.load(response.body);
	let status = $("#DeveloperProductStatus");

	if (status && status.length >= 1) {
		let productId = parseInt(status.text().match(/\d+/)[0]);
		return productId;
	} else throw new Error("Failed to create developer product, reason unknown");
};


exports.conf = {
	required: {
		params: 1,
		auth: true
	},

	name: "addDeveloperProduct",
	description: "Adds a developer product to a game",
	params: ["Options (Object)"]
};

async function checkProductName(universeId, name, self) {
	let url = `https://www.roblox.com/places/check-developerproduct-name?universeId=${universeId}&developerProductName=${name}&developerProductId=0`;
	let response = await self._setup.request.request(url, { json: true });
        
	if (response.statusCode!==200) throw new Error(`Failed to check if name was available. ${response.status}`);
	if (response.body.Success===true) return true;
	return false;
}