module.exports = class ChatManager {
	constructor (env) {
		this.client = env.client;

		this._setupMethods();
	}

	_setupMethods () {
		require("./methods")(this);
	}
};
