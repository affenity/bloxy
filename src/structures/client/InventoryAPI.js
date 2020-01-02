class InventoryAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://inventory.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getPackageAssetIds (packageId) {
		return this.request({
			url: `v1/packages/${packageId}/assets`
		});
	}

	getUserOwnedCollectibles ({ userId, assetType, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/users/${userId}/assets/collectibles`,
			qs: {
				assetType,
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getUserOwnedItems ({ userId, itemType, targetId }) {
		return this.request({
			url: `v1j/users/${userId}/items/${itemType}/${targetId}`
		});
	}

	getAssetOwners ({ assetId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v2/assets/${assetId}/owners`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getUserAssetInventory ({ userId, assetTypeId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v2/users/${userId}/inventory/${assetTypeId}`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}
}

module.exports = InventoryAPI;
