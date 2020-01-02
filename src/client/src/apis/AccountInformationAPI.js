class AccountInformationAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://accountinformation.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getBirthdate () {
		return this.request({
			url: "v1/birthdate"
		});
	}

	updateBirthdate ({ month, day, year }) {
		return this.request({
			url: "v1/birthdate",
			method: "POST",
			json: {
				birthMonth: month,
				birthDay: day,
				birthYear: year
			}
		});
	}

	getDescription () {
		return this.request({
			url: "v1/description"
		});
	}

	updateDescription (description) {
		return this.request({
			url: "v1/description",
			method: "POST",
			json: {
				description
			}
		});
	}

	getGender () {
		return this.request({
			url: "v1/gender"
		});
	}

	updateGender (gender) {
		return this.request({
			url: "v1/gender",
			method: "POST",
			json: {
				gender
			}
		});
	}

	getConsecutiveXboxLoginDays () {
		return this.request({
			url: "v1/xbox-live/consecutive-login-days"
		});
	}

	getMetadata () {
		return this.request({
			url: "v1/metadata"
		});
	}

	getVerifiedPhone () {
		return this.request({
			url: "v1/phone"
		});
	}

	updatePhone ({ countryCode, prefix, phone, password }) {
		return this.request({
			url: "v1/phone",
			method: "POST",
			json: {
				countryCode,
				prefix,
				phone,
				password
			}
		});
	}

	deletePhone ({ countryCode, prefix, phone, password }) {
		return this.request({
			url: "v1/phone/delete",
			method: "POST",
			json: {
				countryCode,
				prefix,
				phone,
				password
			}
		});
	}

	resendPhoneCode ({ countryCode, prefix, phone, password }) {
		return this.request({
			url: this.url("v1/phone/resend"),
			method: "POST",
			json: {
				countryCode,
				prefix,
				phone,
				password
			}
		});
	}

	verifyPhoneCode (code) {
		return this.request({
			url: "v1/phone/verify",
			method: "POST",
			json: {
				code
			}
		});
	}

	getPromotions () {
		return this.request({
			url: "v1/promotion-channels"
		});
	}

	updatePromotions ({ facebook, twitter, youtube, twitch, visibility }) {
		return this.request({
			url: "v1/promotion-channels",
			method: "POST",
			json: {
				facebook,
				twitter,
				youtube,
				twitch,
				promotionChannelsVisibilityPrivacy: visibility || "AllUsers"
			}
		});
	}

	removeStarCodeAffiliate () {
		return this.request({
			url: "v1/star-code-affiliate",
			method: "DELETE"
		});
	}

	getStarCodeAffiliate () {
		return this.request({
			url: "v1/star-code-affiliate"
		});
	}

	setStarCodeAffiliate (affiliateCode) {
		return this.request({
			url: "v1/star-code-affiliate",
			json: {
				code: affiliateCode
			}
		});
	}
}

module.exports = AccountInformationAPI;
