class AccountSettingsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://accountsettings.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAppChatPrivacy () {
		return this.request({
			url: "v1/app-chat-privacy"
		});
	}

	updateAppChatPrivacy (privacy) {
		return this.request({
			url: "v1/app-chat-privacy",
			method: "POST",
			json: {
				appChatPrivacy: privacy
			}
		});
	}

	getGameChatPrivacy () {
		return this.request({
			url: "v1/game-chat-privacy"
		});
	}

	updateGameChatPrivacy (privacy) {
		return this.request({
			url: "v1/game-chat-privacy",
			method: "POST",
			json: {
				gameChatPrivacy: privacy
			}
		});
	}

	getInventoryPrivacy () {
		return this.request({
			url: "v1/inventory-privacy"
		});
	}

	updateInventoryPrivacy (privacy) {
		return this.request({
			url: "v1/inventory-privacy",
			method: "POST",
			json: {
				inventoryPrivacy: privacy
			}
		});
	}

	getPrivacy () {
		return this.request({
			url: "v1/privacy"
		});
	}

	updatePrivacy (privacy) {
		return this.request({
			url: "v1/privacy",
			method: "PATCH",
			json: {
				phoneDiscovery: privacy
			}
		});
	}

	getPrivacyInfo () {
		return this.request({
			url: "v1/privacy/info"
		});
	}

	getMessagePrivacy () {
		return this.request({
			url: "v1/private-message-privacy"
		});
	}

	updateMessagePrivacy (privacy) {
		return this.request({
			url: "v1/private-message-privacy",
			method: "POST",
			json: {
				privateMessagePrivacy: privacy
			}
		});
	}

	getEmail () {
		return this.request({
			url: "v1/email"
		});
	}

	updateEmail ({ email, password }) {
		return this.request({
			url: "v1/email",
			method: "PATCH",
			json: {
				emailAddress: email,
				password
			}
		});
	}

	sendVerificationEmail () {
		return this.request({
			url: "v1/email/verify",
			method: "POST",
			json: {
				freeItem: true
			}
		});
	}

	getTheme () {
		return this.request({
			url: `v1/themes/User/${this.client.user.id}`
		});
	}

	updateTheme (theme) {
		return this.request({
			url: `v1/themes/User${this.client.user.id}`,
			method: "PATCH",
			json: {
				themeType: theme
			}
		});
	}

	getAllThemes () {
		return this.request({
			url: "v1/themes/types"
		}, {}, {
			disableAuth: true
		});
	}

	getTradePrivacy () {
		return this.request({
			url: "v1/trade-privacy"
		});
	}

	updateTradePrivacy (privacy) {
		return this.request({
			url: "v1/trade-privacy",
			method: "POST",
			json: {
				tradePrivacy: privacy
			}
		});
	}

	getTradeQualityFilter () {
		return this.request({
			url: "v1/trade-value"
		});
	}

	updateTradeQualityFilter (filter) {
		return this.request({
			url: "v1/trade-value",
			method: "POST",
			json: {
				tradeValue: filter
			}
		});
	}

	getTFAEnabled () {
		return this.request({
			url: "v2/twostepverification"
		});
	}

	updateTFAStatus ({ enabled, password }) {
		return this.request({
			url: "v2/twostepverification",
			method: "PATCH",
			json: {
				enabled,
				password
			}
		});
	}
}

module.exports = AccountSettingsAPI;
