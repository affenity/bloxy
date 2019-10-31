module.exports = class AuthUser {
	constructor (client, data) {
		this.client = client;
		this.id = data.userId;

		this._setupMethods();
	}

	_setupMethods () {
		require("./methods")(this);
	}
};
