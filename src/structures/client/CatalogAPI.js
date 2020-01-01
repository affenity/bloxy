class CatalogAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://catalog.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAssetBundles ({ assetId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/assets/${assetId}/bundles`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getBundleInfo (bundleId) {
		return this.request({
			url: `v1/bundles/${bundleId}/details`
		}, {}, {
			disableAuth: true
		});
	}

	getBundleRecommendations ({ bundleId, numItems }) {
		return this.request({
			url: `v1/bundles/${bundleId}/recommendations`,
			qs: {
				numItems
			}
		});
	}

	getMultiBundleInfo (bundleIds) {
		return this.request({
			url: "v1/bundles/details",
			qs: {
				bundleIds: bundleIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	getUserOwnedBundles ({ userId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/users/${userId}/bundles`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	unpackBundle (bundleId) {
		return this.request({
			url: `v1/bundles/${bundleId}/unpack`,
			method: "POST"
		});
	}

	getAssetToCategoryIds () {
		return this.request({
			url: "v1/asset-to-category"
		}, {}, {
			disableAuth: true
		});
	}

	getAssetToSubcategoryIds () {
		return this.request({
			url: "v1/asset-to-subcategory"
		}, {}, {
			disableAuth: true
		});
	}

	getCategories () {
		return this.request({
			url: "v1/categories"
		}, {}, {
			disableAuth: true
		});
	}

	getSubcategories () {
		return this.request({
			url: "v1/subcategories"
		}, {}, {
			disableAuth: true
		});
	}

	getAssetFavoriteCount (assetId) {
		return this.request({
			url: `v1/favorites/assets/${assetId}/count`
		}, {}, {
			disableAuth: true
		});
	}

	getBundleFavoriteCount (bundleId) {
		return this.request({
			url: `v1/favorites/bundles/${bundleId}/count`
		}, {}, {
			disableAuth: true
		});
	}

	removeAssetFavorite ({ userId, assetId }) {
		return this.request({
			url: `v1/favorites/users/${userId}/assets/${assetId}/favorite`,
			method: "DELETE"
		});
	}

	getFavoriteAsset ({ userId, assetId }) {
		return this.request({
			url: `v1/favorites/users/${userId}/assets/${assetId}/favorite`
		}, {}, {
			disableAuth: true
		});
	}

	favoriteAsset ({ userId, assetId }) {
		return this.request({
			url: `v1/favorites/users/${userId}/assets/${assetId}/favorite`,
			method: "POST"
		});
	}

	removeFavoriteBundle ({ userId, bundleId }) {
		return this.request({
			url: `v1/favorites/users/users${userId}/bundles/${bundleId}/favorite`,
			method: "DELETE"
		});
	}

	getFavoriteBundle ({ userId, bundleId }) {
		return this.request({
			url: `v1/favorites/users/${userId}/bundles/${bundleId}/favorite`
		}, {}, {
			disableAuth: true
		});
	}

	favoriteBundle ({ userId, bundleId }) {
		return this.request({
			url: `v1/favorites/users/${userId}/bundles/${bundleId}/favorite`,
			method: "POST"
		});
	}
}

module.exports = CatalogAPI;
