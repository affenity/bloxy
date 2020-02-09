class UserProfile {
	constructor (client) {
		this.client = client;
		this._validate = client._validate;
		this.apis = client.apis;
	}

	updateDescription (description) {
		return this._validate(description, joi => joi.string()).then(text => this.apis.accountInformation.updateDescription(text).then(() => true));
	}

	updateStatus (status) {
		return this._validate(status, joi => joi.string()).then(text => this.apis.other.updateSelfStatus(text).then(() => true));
	}
}

module.exports = UserProfile;
