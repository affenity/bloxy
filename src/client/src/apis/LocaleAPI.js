class LocaleAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://locale.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getCountriesByLocale (locale) {
		return this.request({
			url: "v1/country-regions",
			qs: {
				locale
			}
		});
	}

	getSelfCountry () {
		return this.request({
			url: "v1/country-regions/user-country-region"
		});
	}

	setSelfCountry (countryId) {
		return this.request({
			url: "v1/country-regions/user-country-region",
			method: "PATCH",
			json: {
				countryId
			}
		});
	}

	getLocales (displayLocaleValue) {
		return this.request({
			url: "v1/locales",
			qs: {
				displayValueLocale: displayLocaleValue
			}
		});
	}

	getSupportedLocales () {
		return this.request({
			url: "v1/locales/supported-locales"
		});
	}

	getSelfLocale () {
		return this.request({
			url: "v1/locales/user-locale"
		});
	}

	getLocusSupportedLocales () {
		return this.request({
			url: "v1/locales/user-localization/locus-supported-locales"
		});
	}

	setSelfSupportedLocale (localeCode) {
		return this.request({
			url: "v1/locales/set-user-supported-locale",
			method: "POST",
			json: {
				supportedLocaleCode: localeCode
			}
		});
	}
}

module.exports = LocaleAPI;
