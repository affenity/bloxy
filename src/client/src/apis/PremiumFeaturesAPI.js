class PremiumFeaturesAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://premiumfeatures.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	validateUserMembership (userId) {
		return this.request({
			url: `v1/users/${userId}/validate-membership`
		});
	}
}

module.exports = PremiumFeaturesAPI;
