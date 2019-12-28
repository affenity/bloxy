class AccountInformationAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://accountinformation.roblox.com/";
		this.url = u => this.baseUrl + u;
		this.request = d => this.client.rest.request(d);
		this.checkAuth = n => {
			if (!this.client.loggedIn) {
				throw new Error(`Function ${n} requires you to be authenticated`);
			}
		};
	}

	getBirthdate () {
		return this.request({
			url: this.url("v1/birthdate"),
			json: true
		}).then(r => r.data.body);
	}

	updateBirthdate ({ month, day, year }) {
		this.checkAuth("")
		return this.request({
			url: this.url("v1/birthdate"),
			method: "POST",
			json: {
				birthMonth: month,
				birthDay: day,
				birthYear: year
			}
		}).then(r => r.data.body);
	}
}

module.exports = AccountInformationAPI;
