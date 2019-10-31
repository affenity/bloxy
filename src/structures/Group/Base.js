const get = require("../../misc/util/getValue");
const EventEmitter = require("events");

module.exports = class GroupBase extends EventEmitter {
	constructor (env, data) {
		super();
		this.client = env.client;
		if (env.client.options.setup.includeRaw) this._raw = data;
		this.id = get("groupId", data);
		this.name = get("name", data);

		this._setupMethods();
	}

	_setupMethods () {
		this.client.src.sections.group(this);
	}
};
