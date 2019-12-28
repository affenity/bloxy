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

	getRevertInfo (ticket) {
		return this.request({
			url: this.url("v2/revert/account"),
			qs: {
				ticket
			}
		}).then(r => r.data.body);
	}

	revertAccount ({ userId, newPassword, ticket }) {
		return this.request({
			url: this.url("v2/revert/account"),
			method: "POST",
			json: {
				UserId: userId,
				NewPassword: newPassword,
				NewPasswordRepeated: newPassword,
				Ticket: ticket
			}
		}).then(r => r.data.body);
	}

	getTFAMetadata () {
		return this.request({
			url: this.url("v2/twostepverification/metadata")
		}).then(r => r.data.body);
	}

	resendTFACode ({ username, ticket, actionType }) {
		return this.request({
			url: this.url("v2/twostepverification/resend"),
			method: "POST",
			json: {
				username,
				ticket,
				actionType: actionType || "Login"
			}
		}).then(r => r.data.body);
	}

	verifyTFACode ({ username, ticket, code, rememberDevice, actionType }) {
		return this.request({
			url: this.url("v2/twostepverification/verify"),
			method: "POST",
			json: {
				username,
				ticket,
				code,
				rememberDevice: rememberDevice || true,
				actionType: actionType || "Login"
			}
		}).then(r => r.data.body);
	}

	getExistingUsernames (username) {
		return this.request({
			url: this.url("v2/usernames"),
			qs: {
				username
			},
			json: true
		}).then(r => r.data.body);
	}

	validateUsername ({ username, birthday, context }) {
		return this.requset({
			url: this.url("v2/usernames/validate"),
			qs: {
				"request.username": username,
				"request.birthday": birthday,
				"request.context": context || "Signup"
			}
		}).then(r => r.data.body);
	}

	recoverUsernames ({ targetType, target }) {
		return this.request({
			url: this.url("v2/usernames/recover"),
			method: "POST",
			json: {
				targetType,
				target
			}
		}).then(r => r.data.body);
	}

	signup (options) {
		return this.request({
			url: this.url("v2/signup"),
			method: "POST",
			json: options
		}).then(r => r.data.body);
	}

	changeUsername ({ username, password }) {
		return this.request({
			url: this.url("v2/username"),
			method: "POST",
			json: {
				username,
				password
			}
		}).then(r => r.data.body);
	}
}

module.exports = AuthAPI;
