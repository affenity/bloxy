

exports.run = async function (productId, expectedPrice, sellerId) {
	let response = await this._setup.request.request(`https://www.roblox.com/api/item.ashx?rqtype=purchase&productID=${productId}&expectedCurrency=1&expectedPrice=${expectedPrice}&expectedSellerID=${sellerId}&userAssetID=`, { method: "POST" });
	if (response.statusCode !== 200) throw new Error(`Failed to purchase asset. ${response.status}`);

	return {
		success: true,
		productId: productId,
		price: expectedPrice,
		sellerId: sellerId
	};
};



exports.conf = {
	required: {
		params: 3,
		auth: true
	},

	name: "buyAsset",
	description: "Buys an asset",
	params: ["productId (Number)", "expectedPrice (Number)", "sellerId (Number)"]
};