class UserAccount {
	constructor (client) {
		this.client = client;
		this._validate = this.client._validate;
		this.apis = client.apis;
	}

	unlockPin (pin) {
		return this._validate(pin, joi => joi.any()).then(pin => this.apis.auth.unlockAccount(pin).then(() => true));
	}

	lockPin () {
		return this.apis.auth.lockAccount().then(() => true);
	}

	addPin (pin, password) {
		return this._validate(pin, () => joi.any()).then(pin => this.apis.auth.createAccountPin(pin).then(() => true));
	}

	getGameChatPrivacy () {
		return this.apis.accountSettings.getGameChatPrivacy();
	}

	updateGameChatPrivacy (options) {
		return this.apis.accountSettings.updateGameChatPrivacy(options);
	}

	getInventoryPrivacy () {
		return this.apis.accountSettings.getInventoryPrivacy();
	}

	updateInventoryPrivacy (options) {
		return this.apis.accountSettings.updateInventoryPrivacy(options);
	}

	getPrivacySettings () {
		return this.apis.accountSettings.getPrivacy();
	}

	updatePrivacySettings (options) {
		return this.apis.accountSettings.updatePrivacy(options);
	}

	getMessagingPrivacy () {
		return this.apis.accountSettings.getMessagePrivacy();
	}

	updateMessagingPrivacy (options) {
		return this.apis.accountSettings.updateMessagePrivacy(options);
	}
}

module.exports = UserAccount;
