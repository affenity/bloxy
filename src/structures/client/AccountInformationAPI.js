class AccountInformationAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://accountinformation.roblox.com/";
		this.url = u => this.baseUrl + u;
		this.request = (options, responseOptions) => this.client.rest.request(options, responseOptions).then(r => {
			return r.data.body;
		});
		this.checkAuth = () => {
			if (!this.client.loggedIn) {
				throw new Error(`This function requires you to be authenticated`);
			}
		};
	}

	getBirthdate () {
		return this.request({
			url: this.url("v1/birthdate"),
			json: true
		});
	}

	updateBirthdate ({ month, day, year }) {
		this.checkAuth();
		return this.request({
			url: this.url("v1/birthdate"),
			method: "POST",
			json: {
				birthMonth: month,
				birthDay: day,
				birthYear: year
			}
		});
	}

	getDescription () {
		this.checkAuth();
		return this.request({
			url: this.url("v1/description"),
			json: true
		});
	}

	updateDescription (description) {
		this.checkAuth();
		return this.request({
			url: this.url("v1/description"),
			method: "POST",
			json: {
				description
			}
		});
	}

	getGender () {
		this.checkAuth();
		return this.request({
			url: this.url("v1/gender"),
			json: true
		});
	}

	updateGender (gender) {
		this.checkAuth();
		return this.request({
			url: this.url("v1/gender"),
			method: "POST",
			json: {
				gender
			}
		});
	}

	getConsecutiveXboxLoginDays () {
		this.checkAuth();
		return this.request({
			url: this.url("v1/xbox-live/consecutive-login-days"),
			json: true
		});
	}

	getMetadata () {
		return this.request({
			url: this.url("v1/metadata"),
			json: true
		});
	}

	getVerifiedPhone () {
		this.checkAuth();
		return this.request({
			url: this.url("v1/phone"),
			json: true
		});
	}

	updatePhone ({ countryCode, prefix, phone, password }) {
		this.checkAuth();
		return this.request({
			url: this.url("v1/phone"),
			method: "POST",
			json: {
				countryCode,
				prefix,
				phone,
				password
			}
		});
	}

	deletePhone ({countryCode, prefix, phone, password }) {
		this.checkAuth();
		return this.request({
			url: this.url("v1/phone/delete"),
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
		this.checkAuth();
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
		this.checkAuth();
		return this.request({
			url: "v1/phone/verify",
			method: "POST",
			json: {
				code
			}
		});
	}

	getPromotions () {
		this.checkAuth();
		return this.request({
			url: "v1/promotion-channels",
			json: true
		});
	}

	updatePromotions ({ facebook, twitter, youtube, twitch, visibility }) {
		this.checkAuth();
		return this.request({
			url: "v1/promotion-channels",
			method: "POST",
			json: {
				facebook,
				twitter,
				youtube,
				twitter,
				promotionChannelsVisibilityPrivacy: visibility || "AllUsers"
			}
		});
	}

	removeStarCodeAffiliate () {
		this.checkAuth();
		return this.request({
			url: "v1/star-code-affiliate",
			method: "DELETE",
			json: true
		});
	}

	getStarCodeAffiliate () {
		this.checkAuth();
		return this.request({
			url: "v1/star-code-affiliate",
			json: true
		});
	}

	setStarCodeAffiliate (affiliateCode) {
		this.checkAuth();
		return this.request({
			url: "v1/star-code-affiliate",
			json: {
				code: affiliateCode
			}
		});
	}
}

module.exports = AccountInformationAPI;
