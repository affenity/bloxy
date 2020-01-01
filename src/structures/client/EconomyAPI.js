class EconomyAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://economy.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAssetResaleData (assetId) {
		return this.request({
			url: `v1/assets/${assetId}/resale-data`
		});
	}

	getAssetResellers ({ assetId, limit, cursor }) {
		return this.request({
			url: `v1/assets/${assetId}/resellers`,
			qs: {
				limit,
				cursor
			}
		});
	}

	getUserResellableAssetCopies ({ userId, assetId }) {
		return this.request({
			url: `v1/assets/${assetId}/users/${userId}/resellable-copies`
		});
	}

	getResaleTax () {
		return this.request({
			url: "v1/resale-tax-rate"
		}, {}, {
			disableAuth: true
		});
	}

	setAssetCopyForSale ({ assetId, userAssetId, price }) {
		return this.request({
			url: `v1/assets/${assetId}/resellable-copies/${userAssetId}`,
			method: "PATCH",
			json: {
				price
			}
		});
	}

	getGroupFunds (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/currency`
		});
	}

	getUserFunds (userId) {
		return this.request({
			url: `v1/users/${userId}/currency`
		});
	}

	getGroupRevenueSummary ({ groupId, timeFrame }) {
		return this.request({
			url: `v1/groups/${groupId}/revenue/summary/${timeFrame}`
		});
	}

	getUserRevenueSummary ({ userId, timeFrame }) {
		return this.request({
			url: `v1/users/${userId}/revenue/summary/${timeFrame}`
		});
	}

	getGroupTransactions ({ groupId, transactionType, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/transactions`,
			qs: {
				transactionType,
				limit,
				cursor
			}
		});
	}

	getUserTransactions ({ userId, transactionType, limit, cursor }) {
		return this.request({
			url: `v1/users/${userId}/transactions`,
			qs: {
				transactionType,
				limit,
				cursor
			}
		});
	}
}

module.exports = EconomyAPI;
