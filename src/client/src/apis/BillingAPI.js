class BillingAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://billing.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getDeveloperExchangeRate () {
		return this.request({
			url: "v1/developer-exchange-rate"
		}, {}, {
			disableAuth: true
		});
	}

	submitDeveloperExchange ({ firstName, lastName, email, password, amount }) {
		return this.request({
			url: "v1/developer-exchange-request",
			method: "POST",
			json: {
				firstName,
				lastName,
				email,
				password,
				amount
			}
		});
	}
}

module.exports = BillingAPI;
