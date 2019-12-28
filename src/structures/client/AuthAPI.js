class AuthAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://auth.roblox.com/";
		this.url = u => this.baseUrl + u;
		this.request = d => this.client.rest.request(d);
	}

	getAuthMetadata () {
		return this.request({
			url: this.url("v2/auth/metadata"),
			json: true
		}).then(r => {
			return r.data.body;
		});
	}

	logout () {
		return this.request({
			url: this.url("v2/auth/logout"),
			method: "POST"
		}).then(() => true);
	}

	checkCredentialsForVerification ({ credentialType, credentialValue, password } = {}) {
		return this.request({
			url: this.url("v2/credentials/verification"),
			qs: {
				"request.credentialType": credentialType,
				"request.credentialValue": credentialValue,
				"request.password": password
			},
			json: true
		}).then(r => {
			return r.data.body;
		});
	}

	sendCredentialsForVerification ({ credentialType, credentialValue, password }) {
		return this.request({
			url: this.url("v2/credentials/verification/send"),
			qs: {
				"request.credentialType": credentialType,
				"request.credentialValue": credentialValue,
				"request.password": password
			},
			json: true
		}).then(r => r.data.body);
	}

	getMetadata () {
		return this.request({
			url: this.url("v2/metadata"),
			json: true
		}).then(r => r.data.body);
	}

	getCurrentPasswordStatus () {
		return this.request({
			url: this.url("v2/passwords/current-status")
		})
			.then(r => r.data.body);
	}

	getPasswordResetMetadata ({ targetType, ticket }) {
		return this.request({
			url: this.url("v2/passwords/reset"),
			qs: {
				"request.targetType": targetType,
				"request.ticekt": ticket
			}
		}).then(r => r.data.body);
	}

	resetPassword ({ targetType, ticket, userId, password }) {
		return this.request({
			url: this.url("v2/passwords/reset"),
			method: "POST",
			json: {
				targetType,
				ticket,
				userId: userId,
				password,
				passwordRepeated: password
			}
		}).then(r => r.data.body);
	}

	isPasswordValid ({ username, password }) {
		return this.request({
			url: this.url("v2/passwords/validate"),
			qs: {
				"request.username": username,
				"request.password": password
			}
		}).then(r => r.data.body);
	}

	sendPasswordReset ({ targetType, target }) {
		return this.request({
			url: this.url("v2/passwords/reset/send"),
			json: {
				targetType,
				target
			}
		}).then(r => r.data.body);
	}

	changePassword ({ currentPassword, newPassword}) {
		return this.request({
			url: this.url("v2/user/passwords/change"),
			method: "POST",
			json: {
				currentPassword,
				newPassword
			}
		}).then(r => r.data.body);
	}

	getRecoveryMetadata () {
		return this.request({
			url: this.url("v2/recovery/metadata")
		}).then(r => r.data.body);
	}

	getRevertTicketInfo (ticket) {
		return this.request({
			url: this.url("v2/revert/account"),
			qs: {
				ticket
			}
		}).then(r => r.data.body);
	}


}

module.exports = AuthAPI;
