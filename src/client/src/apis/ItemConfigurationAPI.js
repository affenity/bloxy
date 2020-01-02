class ItemConfigurationAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://itemconfiguration.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getCreationAssets (options) {
		return this.request({
			url: "v1/creations/get-assets",
			qs: options
		});
	}

	getAssetDetails (assetIds) {
		return this.request({
			url: "v1/creations/get-asset-details",
			method: "POST",
			json: {
				assetIds
			}
		});
	}

	getItemTags (itemIds) {
		return this.request({
			url: "v1/item-tags",
			qs: {
				itemIds
			}
		});
	}

	createItemTag ({ itemId, tagId }) {
		return this.request({
			url: "v1/item-tags",
			method: "POST",
			json: {
				itemId,
				tagId
			}
		});
	}

	getItemTagsMetadata () {
		return this.request({
			url: "v1/item-tags/metadata"
		});
	}

	deleteItemTags (itemId) {
		return this.request({
			url: `v1/item-tags/${itemId}`,
			method: "DELETE"
		});
	}

	getTagsInfo (tagIds) {
		return this.request({
			url: "v1/tags",
			qs: {
				tagIds
			}
		});
	}

	prefixTagSearch ({ prefix, amount }) {
		return this.request({
			url: "v1/tags/prefix-search",
			qs: {
				prefix,
				numberOfResults: amount
			}
		});
	}

	releaseAsset ({ assetId, price, saleStatus }) {
		return this.request({
			url: `v1/assets/${assetId}/release`,
			method: "POST",
			json: {
				price,
				saleStatus
			}
		});
	}

	updateAssetPrice ({ assetId, price }) {
		return this.request({
			url: `v1/assets/${assetId}/update-price`,
			method: "POST",
			json: {
				price
			}
		});
	}
}

module.exports = ItemConfigurationAPI;
