class GameInternationalizationAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://gameinternationalization.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getGameNameDescription (universeId) {
		return this.request({
			url: `v1/name-description/games/${universeId}`
		}, {}, {
			disableAuth: true
		});
	}

	updateGameNameDescription ({ universeId, data }) {
		return this.request({
			url: `v1/name-description/games/${universeId}`,
			method: "PATCH",
			json: {
				data
			}
		});
	}

	getNameDescriptionMetadata () {
		return this.request({
			url: "v1/name-description/metadata"
		}, {}, {
			disableAuth: true
		});
	}

	getGameSourceLanguage (universeId) {
		return this.request({
			url: `v1/source-language/games/${universeId}`
		}, {}, {
			disableAuth: true
		});
	}

	setGameSourceLanguage ({ universeId, languageCode }) {
		return this.request({
			url: `v1/source-language/games/${universeId}`,
			method: "PATCH",
			qs: {
				languageCode
			}
		});
	}

	getGameSupportedLanguages (universeId) {
		return this.request({
			url: `v1/supported-languages/games/${universeId}`
		}, {}, {
			disableAuth: true
		});
	}

	updateGameSupportedLanguages ({ universeId, languages }) {
		return this.request({
			url: `v1/supported-languages/games/${universeId}`,
			method: "PATCH",
			json: languages
		});
	}

	getAutomaticTranslationStatus (universeId) {
		return this.request({
			url: `v1/supported-languages/games/${universeId}/automatic-translation-status`
		});
	}

	updateAutomaticTranslationStatus ({ universeId, languageCode, enabled }) {
		return this.request({
			url: `v1/supported-languages/games/${universeId}/languages/${languageCode}/automatic-translation-status`,
			method: "PATCH",
			json: {
				enableAutomaticTranslation: enabled
			}
		});
	}

	getSupportedLanguagesMetadata () {
		return this.request({
			url: "v1/supported-languages/metadata"
		}, {}, {
			disableAuth: true
		});
	}
}

module.exports = GameInternationalizationAPI;
