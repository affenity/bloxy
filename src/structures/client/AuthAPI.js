class AuthAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://auth.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAuthMetadata () {
		return this.request({
			url: "v2/auth/metadata"
		});
	}

	logout () {
		return this.request({
			url: "v2/auth/logout",
			method: "POST"
		}).then(() => true);
	}

	checkCredentialsForVerification ({ credentialType, credentialValue, password } = {}) {
		return this.request({
			url: "v2/credentials/verification",
			qs: {
				"request.credentialType": credentialType,
				"request.credentialValue": credentialValue,
				"request.password": password
			}
		});
	}

	sendCredentialsForVerification ({ credentialType, credentialValue, password }) {
		return this.request({
			url: "v2/credentials/verification/send",
			qs: {
				"request.credentialType": credentialType,
				"request.credentialValue": credentialValue,
				"request.password": password
			}
		});
	}

	getMetadata () {
		return this.request({
			url: "v2/metadata"
		});
	}

	getCurrentPasswordStatus () {
		return this.request({
			url: "v2/passwords/current-status"
		})
		;
	}

	getPasswordResetMetadata ({ targetType, ticket }) {
		return this.request({
			url: "v2/passwords/reset",
			qs: {
				"request.targetType": targetType,
				"request.ticekt": ticket
			}
		});
	}

	resetPassword ({ targetType, ticket, userId, password }) {
		return this.request({
			url: "v2/passwords/reset",
			method: "POST",
			json: {
				targetType,
				ticket,
				userId: userId,
				password,
				passwordRepeated: password
			}
		});
	}

	isPasswordValid ({ username, password }) {
		return this.request({
			url: "v2/passwords/validate",
			qs: {
				"request.username": username,
				"request.password": password
			}
		});
	}

	sendPasswordReset ({ targetType, target }) {
		return this.request({
			url: "v2/passwords/reset/send",
			json: {
				targetType,
				target
			}
		});
	}

	changePassword ({ currentPassword, newPassword }) {
		return this.request({
			url: "v2/user/passwords/change",
			method: "POST",
			json: {
				currentPassword,
				newPassword
			}
		});
	}

	getRecoveryMetadata () {
		return this.request({
			url: "v2/recovery/metadata"
		});
	}

	getRevertInfo (ticket) {
		return this.request({
			url: "v2/revert/account",
			qs: {
				ticket
			}
		});
	}

	revertAccount ({ userId, newPassword, ticket }) {
		return this.request({
			url: "v2/revert/account",
			method: "POST",
			json: {
				UserId: userId,
				NewPassword: newPassword,
				NewPasswordRepeated: newPassword,
				Ticket: ticket
			}
		});
	}

	getTFAMetadata () {
		return this.request({
			url: "v2/twostepverification/metadata"
		});
	}

	resendTFACode ({ username, ticket, actionType }) {
		return this.request({
			url: "v2/twostepverification/resend",
			method: "POST",
			json: {
				username,
				ticket,
				actionType: actionType || "Login"
			}
		});
	}

	verifyTFACode ({ username, ticket, code, rememberDevice, actionType }) {
		return this.request({
			url: "v2/twostepverification/verify",
			method: "POST",
			json: {
				username,
				ticket,
				code,
				rememberDevice: rememberDevice || true,
				actionType: actionType || "Login"
			}
		});
	}

	getExistingUsernames (username) {
		return this.request({
			url: "v2/usernames",
			qs: {
				username
			}
		});
	}

	validateUsername ({ username, birthday, context }) {
		return this.requset({
			url: "v2/usernames/validate",
			qs: {
				"request.username": username,
				"request.birthday": birthday,
				"request.context": context || "Signup"
			}
		});
	}

	recoverUsernames ({ targetType, target }) {
		return this.request({
			url: "v2/usernames/recover",
			method: "POST",
			json: {
				targetType,
				target
			}
		});
	}

	signup (options) {
		return this.request({
			url: "v2/signup",
			method: "POST",
			json: options
		});
	}

	changeUsername ({ username, password }) {
		return this.request({
			url: "v2/username",
			method: "POST",
			json: {
				username,
				password
			}
		});
	}
}

module.exports = AuthAPI;
