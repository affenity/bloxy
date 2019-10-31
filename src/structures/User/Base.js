const get = require("../../misc/util/getValue");

module.exports = class UserBase {
	constructor (env, data) {
		this.client = env.client;
		if (env.client.options.setup.includeRaw) this._raw = data;
		this.id = get("userId", data);
		this.name = get("username", data);
		this.membership = get("membership", data);

		this._setupMethods();
	}

	_setupMethods () {
		this.client.src.sections.user(this);
	}
};
